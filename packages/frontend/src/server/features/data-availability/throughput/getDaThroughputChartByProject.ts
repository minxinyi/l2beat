import type { Project } from '@l2beat/config'
import type { DataAvailabilityRecord } from '@l2beat/database'
import { assert, UnixTime } from '@l2beat/shared-pure'
import { v } from '@l2beat/validate'
import partition from 'lodash/partition'
import { env } from '~/env'
import { getDb } from '~/server/database'
import { ps } from '~/server/projects'
import { getRangeWithMax } from '~/utils/range/range'
import { rangeToDays } from '~/utils/range/rangeToDays'
import { generateTimestamps } from '../../utils/generateTimestamps'
import { DaThroughputTimeRange, rangeToResolution } from './utils/range'
import { sumByResolutionAndProject } from './utils/sumByResolutionAndProject'

export type DaThroughputChartDataByChart = [
  timestamp: number,
  values: Record<string, number>,
][]

export const DaThroughputChartByProjectParams = v.object({
  range: DaThroughputTimeRange,
  daLayer: v.string(),
})
export type DaThroughputChartByProjectParams = v.infer<
  typeof DaThroughputChartByProjectParams
>

export async function getDaThroughputChartByProject(
  ...parameters: Parameters<typeof getDaThroughputChartByProjectData>
) {
  if (env.MOCK) {
    return getMockDaThroughputChartByProjectData(...parameters)
  }
  return await getDaThroughputChartByProjectData(...parameters)
}

const getDaThroughputChartByProjectData = async (
  params: DaThroughputChartByProjectParams,
): Promise<DaThroughputChartDataByChart> => {
  const db = getDb()
  const resolution = rangeToResolution({ type: params.range })
  const [from, to] = getRangeWithMax({ type: params.range }, resolution, {
    now: UnixTime.toStartOf(UnixTime.now(), 'hour') - UnixTime.HOUR,
  })
  const [throughput, allProjects] = await Promise.all([
    db.dataAvailability.getByDaLayersAndTimeRange([params.daLayer], [from, to]),
    ps.getProjects({}),
  ])
  if (throughput.length === 0) {
    return []
  }
  const { grouped, minTimestamp } = groupByTimestampAndProjectId(
    throughput,
    allProjects,
    resolution,
  )

  const chartAdjustedTo =
    resolution === 'hourly'
      ? to - UnixTime.HOUR
      : resolution === 'sixHourly'
        ? to - UnixTime.HOUR * 6
        : to - UnixTime.DAY

  const timestamps = generateTimestamps(
    [minTimestamp, chartAdjustedTo],
    resolution,
  )
  return timestamps.map((timestamp) => [timestamp, grouped[timestamp] ?? {}])
}

function groupByTimestampAndProjectId(
  records: DataAvailabilityRecord[],
  allProjects: Project[],
  resolution: 'hourly' | 'sixHourly' | 'daily',
) {
  let minTimestamp = Number.POSITIVE_INFINITY
  const result: Record<number, Record<string, number>> = {}
  const [daLayerRecords, projectRecords] = partition(
    records,
    (r) => r.daLayer === r.projectId,
  )

  const summedProjectsByDay = sumByResolutionAndProject(
    projectRecords,
    resolution,
  )
  for (const record of summedProjectsByDay) {
    const timestamp = record.timestamp
    const value = record.totalSize
    const project = allProjects.find((p) => p.id === record.projectId)
    assert(project, `Project ${record.projectId} not found`)
    result[timestamp] = {
      ...result[timestamp],
      [project.name]: Number(value),
    }
    minTimestamp = Math.min(minTimestamp, timestamp)
  }

  // Add the difference between the total size and the sum of the other projects as 'Unknown'
  const summedDaLayerByDay = sumByResolutionAndProject(
    daLayerRecords,
    resolution,
  )
  for (const record of summedDaLayerByDay) {
    const timestamp = record.timestamp
    const value = record.totalSize
    const restSummed = Object.values(result[timestamp] ?? {}).reduce(
      (acc, curr) => acc + curr,
      0,
    )

    result[timestamp] = {
      ...result[timestamp],
      ['Unknown']: Number(value) - restSummed,
    }
    minTimestamp = Math.min(minTimestamp, timestamp)
  }

  return {
    grouped: Object.fromEntries(
      Object.entries(result).map(([timestamp, projects]) => [
        timestamp,
        Object.fromEntries(
          Object.entries(projects).sort(
            ([, valueA], [, valueB]) => valueB - valueA,
          ),
        ),
      ]),
    ),
    minTimestamp: UnixTime(minTimestamp),
  }
}

function getMockDaThroughputChartByProjectData({
  range,
}: DaThroughputChartByProjectParams): DaThroughputChartDataByChart {
  const days = rangeToDays({ type: range }) ?? 730
  const to = UnixTime.toStartOf(UnixTime.now(), 'day')
  const from = to - days * UnixTime.DAY

  const timestamps = generateTimestamps([from, to], 'daily')
  return timestamps.map((timestamp) => {
    const values = {
      base: Math.random() * 900_000_000 + 90_000_000,
      optimism: Math.random() * 900_000_000 + 90_000_000,
      arbitrum: Math.random() * 900_000_000 + 90_000_000,
      polygon: Math.random() * 900_000_000 + 90_000_000,
      zkSync: Math.random() * 900_000_000 + 90_000_000,
      zkSyncEra: Math.random() * 900_000_000 + 90_000_000,
      gnosis: Math.random() * 900_000_000 + 90_000_000,
      linea: Math.random() * 900_000_000 + 90_000_000,
    }

    return [timestamp, values]
  })
}
