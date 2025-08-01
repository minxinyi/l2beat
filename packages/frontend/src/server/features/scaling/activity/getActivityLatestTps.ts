import type { Project } from '@l2beat/config'
import { notUndefined, UnixTime } from '@l2beat/shared-pure'
import groupBy from 'lodash/groupBy'
import { env } from '~/env'
import { getDb } from '~/server/database'
import { calculatePercentageChange } from '~/utils/calculatePercentageChange'
import { getFullySyncedActivityRange } from './utils/getFullySyncedActivityRange'
import { getLastDayUops } from './utils/getLastDay'

export type ActivityLatestUopsData = Record<
  string,
  {
    pastDayUops: number
    change: number
    syncedUntil: number
  }
>

export async function getActivityLatestUops(
  projects: Project[],
  range?: { type: 'custom'; from: UnixTime; to: UnixTime },
): Promise<ActivityLatestUopsData> {
  if (env.MOCK) {
    return getMockActivityLatestUopsData(projects)
  }

  const db = getDb()
  // Range here is 1y because we want to match the range of the
  // activity chart on summary page to show relevant data
  const timeRange = getFullySyncedActivityRange(range ?? { type: '1y' })
  const records = await db.activity.getByProjectsAndTimeRange(
    projects.map((p) => p.id),
    timeRange,
  )

  const grouped = groupBy(records, (r) => r.projectId)

  return Object.fromEntries(
    Object.entries(grouped)
      .map(([projectId, records]) => {
        const lastRecord = records.at(-1)
        if (!lastRecord) {
          return undefined
        }
        const pastDayUops = getLastDayUops(records)
        const previousDayUops = getLastDayUops(records, 1)
        return [
          projectId,
          {
            pastDayUops,
            change: calculatePercentageChange(pastDayUops, previousDayUops),
            syncedUntil: lastRecord.timestamp,
          },
        ] as const
      })
      .filter(notUndefined),
  )
}

function getMockActivityLatestUopsData(
  projects: Project[],
): ActivityLatestUopsData {
  return Object.fromEntries(
    projects.map((p) => [
      p.id,
      { pastDayUops: 5, change: 0.1, syncedUntil: UnixTime.now() },
    ]),
  )
}
