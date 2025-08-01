Generated with discovered.json: 0x740337cae250fe5919339bd6ccf507b62ccf2e05

# Diff at Mon, 14 Jul 2025 12:46:34 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 21387773
- current block number: 21387773

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    EOA  (0x0d745Ad687F2b1E1941569f09f612F60ad4aD5BC) {
    +++ description: None
      address:
-        "0x0d745Ad687F2b1E1941569f09f612F60ad4aD5BC"
+        "eth:0x0d745Ad687F2b1E1941569f09f612F60ad4aD5BC"
    }
```

```diff
    contract Liquidity Pool (0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8) {
    +++ description: None
      address:
-        "0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8"
+        "eth:0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8"
      values.$implementation:
-        "0x5A5fFf6F753d7C11A56A52FE47a177a87e431655"
+        "eth:0x5A5fFf6F753d7C11A56A52FE47a177a87e431655"
      values.owner:
-        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
+        "eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
      values.swapStorage.lpToken:
-        "0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F"
+        "eth:0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F"
      implementationNames.0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8:
-        "SwapFlashLoan"
      implementationNames.0x5A5fFf6F753d7C11A56A52FE47a177a87e431655:
-        "SwapFlashLoan"
      implementationNames.eth:0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8:
+        "SwapFlashLoan"
      implementationNames.eth:0x5A5fFf6F753d7C11A56A52FE47a177a87e431655:
+        "SwapFlashLoan"
    }
```

```diff
    contract LPToken (0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F) {
    +++ description: None
      address:
-        "0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F"
+        "eth:0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F"
      values.$implementation:
-        "0x6C8c6E68604e78B549C96907bfe9EBdaaC04e3B3"
+        "eth:0x6C8c6E68604e78B549C96907bfe9EBdaaC04e3B3"
      values.owner:
-        "0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8"
+        "eth:0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8"
      implementationNames.0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F:
-        "LPToken"
      implementationNames.0x6C8c6E68604e78B549C96907bfe9EBdaaC04e3B3:
-        "LPToken"
      implementationNames.eth:0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F:
+        "LPToken"
      implementationNames.eth:0x6C8c6E68604e78B549C96907bfe9EBdaaC04e3B3:
+        "LPToken"
    }
```

```diff
    EOA  (0x230A1AC45690B9Ae1176389434610B9526d2f21b) {
    +++ description: None
      address:
-        "0x230A1AC45690B9Ae1176389434610B9526d2f21b"
+        "eth:0x230A1AC45690B9Ae1176389434610B9526d2f21b"
    }
```

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      address:
-        "0x2796317b0fF8538F253012862c06787Adfb8cEb6"
+        "eth:0x2796317b0fF8538F253012862c06787Adfb8cEb6"
      values.$admin:
-        "0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2"
+        "eth:0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2"
      values.$implementation:
-        "0x31fe393815822edacBd81C2262467402199EFD0D"
+        "eth:0x31fe393815822edacBd81C2262467402199EFD0D"
      values.$pastUpgrades.0.2.0:
-        "0x1622B32113bd2dFE1d92B30dA7FB68b7E5FA81b2"
+        "eth:0x1622B32113bd2dFE1d92B30dA7FB68b7E5FA81b2"
      values.$pastUpgrades.1.2.0:
-        "0x346B928D29827a02bC06A4A66D7FF37D250bcEE8"
+        "eth:0x346B928D29827a02bC06A4A66D7FF37D250bcEE8"
      values.$pastUpgrades.2.2.0:
-        "0x36829ba54e6A0f11fB6e5A45aC5aD2742ec86a0B"
+        "eth:0x36829ba54e6A0f11fB6e5A45aC5aD2742ec86a0B"
      values.$pastUpgrades.3.2.0:
-        "0xEfD2F730c9D92E53d0B402ACA05FE597F1A47001"
+        "eth:0xEfD2F730c9D92E53d0B402ACA05FE597F1A47001"
      values.$pastUpgrades.4.2.0:
-        "0x7D971Ffc482d70831075fCf07c50EDED782aA9Fd"
+        "eth:0x7D971Ffc482d70831075fCf07c50EDED782aA9Fd"
      values.$pastUpgrades.5.2.0:
-        "0xFb4a5F07427C4de0051c5FCe5b6f9E8cBf8A544C"
+        "eth:0xFb4a5F07427C4de0051c5FCe5b6f9E8cBf8A544C"
      values.$pastUpgrades.6.2.0:
-        "0x64f80a3B1ac0d394d652DF0beCfBeA9DB2320782"
+        "eth:0x64f80a3B1ac0d394d652DF0beCfBeA9DB2320782"
      values.$pastUpgrades.7.2.0:
-        "0x9007A80247D23Cc5C213A6DAcB385c632c4e19F2"
+        "eth:0x9007A80247D23Cc5C213A6DAcB385c632c4e19F2"
      values.$pastUpgrades.8.2.0:
-        "0x4cF1471B56D18c7D5a16D48ff5B761BdAEBd2f0b"
+        "eth:0x4cF1471B56D18c7D5a16D48ff5B761BdAEBd2f0b"
      values.$pastUpgrades.9.2.0:
-        "0x472822517a019e1eEd4533De2d800719057716F1"
+        "eth:0x472822517a019e1eEd4533De2d800719057716F1"
      values.$pastUpgrades.10.2.0:
-        "0x31fe393815822edacBd81C2262467402199EFD0D"
+        "eth:0x31fe393815822edacBd81C2262467402199EFD0D"
      values.accessControl.DEFAULT_ADMIN_ROLE.members.0:
-        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
+        "eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
      values.accessControl.NODEGROUP_ROLE.members.0:
-        "0x230A1AC45690B9Ae1176389434610B9526d2f21b"
+        "eth:0x230A1AC45690B9Ae1176389434610B9526d2f21b"
      values.accessControl.GOVERNANCE_ROLE.members.0:
-        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
+        "eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
      values.accessControl.GOVERNANCE_ROLE.members.1:
-        "0xa31C04BFD3545E6d00A80573a0B009F7557D958D"
+        "eth:0xa31C04BFD3545E6d00A80573a0B009F7557D958D"
      values.WETH_ADDRESS:
-        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
+        "eth:0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      implementationNames.0x2796317b0fF8538F253012862c06787Adfb8cEb6:
-        "TransparentUpgradeableProxy"
      implementationNames.0x31fe393815822edacBd81C2262467402199EFD0D:
-        "SynapseBridge"
      implementationNames.eth:0x2796317b0fF8538F253012862c06787Adfb8cEb6:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x31fe393815822edacBd81C2262467402199EFD0D:
+        "SynapseBridge"
    }
```

```diff
    contract TimelockController (0x647489df0673E17dB3163c47d5233EBB6F5cAc70) {
    +++ description: None
      address:
-        "0x647489df0673E17dB3163c47d5233EBB6F5cAc70"
+        "eth:0x647489df0673E17dB3163c47d5233EBB6F5cAc70"
      values.accessControl.TIMELOCK_ADMIN_ROLE.members.0:
-        "0x647489df0673E17dB3163c47d5233EBB6F5cAc70"
+        "eth:0x647489df0673E17dB3163c47d5233EBB6F5cAc70"
      values.accessControl.TIMELOCK_ADMIN_ROLE.members.1:
-        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
+        "eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
      values.accessControl.PROPOSER_ROLE.members.0:
-        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
+        "eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
      values.accessControl.EXECUTOR_ROLE.members.0:
-        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
+        "eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
      implementationNames.0x647489df0673E17dB3163c47d5233EBB6F5cAc70:
-        "TimelockController"
      implementationNames.eth:0x647489df0673E17dB3163c47d5233EBB6F5cAc70:
+        "TimelockController"
    }
```

```diff
    contract L1BridgeZap (0x6571d6be3d8460CF5F7d6711Cd9961860029D85F) {
    +++ description: None
      address:
-        "0x6571d6be3d8460CF5F7d6711Cd9961860029D85F"
+        "eth:0x6571d6be3d8460CF5F7d6711Cd9961860029D85F"
      values.baseTokens.0:
-        "0x6B175474E89094C44Da98b954EedeAC495271d0F"
+        "eth:0x6B175474E89094C44Da98b954EedeAC495271d0F"
      values.baseTokens.1:
-        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
+        "eth:0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      values.baseTokens.2:
-        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
+        "eth:0xdAC17F958D2ee523a2206206994597C13D831ec7"
      values.WETH_ADDRESS:
-        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
+        "eth:0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      implementationNames.0x6571d6be3d8460CF5F7d6711Cd9961860029D85F:
-        "L1BridgeZap"
      implementationNames.eth:0x6571d6be3d8460CF5F7d6711Cd9961860029D85F:
+        "L1BridgeZap"
    }
```

```diff
    contract Bridge Multisig (0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55) {
    +++ description: None
      address:
-        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
+        "eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0xb3DAD3C24A861b84fDF380B212662620627D4e15"
+        "eth:0xb3DAD3C24A861b84fDF380B212662620627D4e15"
      values.$members.1:
-        "0x9Ce9dc8B12E264F00e80F35326040C75201C38f3"
+        "eth:0x9Ce9dc8B12E264F00e80F35326040C75201C38f3"
      values.$members.2:
-        "0x0d745Ad687F2b1E1941569f09f612F60ad4aD5BC"
+        "eth:0x0d745Ad687F2b1E1941569f09f612F60ad4aD5BC"
      values.GnosisSafe_modules.0:
-        "0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134"
+        "eth:0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134"
      implementationNames.0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55:
-        "Proxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55:
+        "Proxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      address:
-        "0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2"
+        "eth:0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2"
      values.owner:
-        "0x647489df0673E17dB3163c47d5233EBB6F5cAc70"
+        "eth:0x647489df0673E17dB3163c47d5233EBB6F5cAc70"
      implementationNames.0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2:
-        "ProxyAdmin"
      implementationNames.eth:0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2:
+        "ProxyAdmin"
    }
```

```diff
    EOA  (0x9Ce9dc8B12E264F00e80F35326040C75201C38f3) {
    +++ description: None
      address:
-        "0x9Ce9dc8B12E264F00e80F35326040C75201C38f3"
+        "eth:0x9Ce9dc8B12E264F00e80F35326040C75201C38f3"
    }
```

```diff
    EOA  (0xa31C04BFD3545E6d00A80573a0B009F7557D958D) {
    +++ description: None
      address:
-        "0xa31C04BFD3545E6d00A80573a0B009F7557D958D"
+        "eth:0xa31C04BFD3545E6d00A80573a0B009F7557D958D"
    }
```

```diff
    EOA  (0xb3DAD3C24A861b84fDF380B212662620627D4e15) {
    +++ description: None
      address:
-        "0xb3DAD3C24A861b84fDF380B212662620627D4e15"
+        "eth:0xb3DAD3C24A861b84fDF380B212662620627D4e15"
    }
```

```diff
    contract AllowanceModule (0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134) {
    +++ description: None
      address:
-        "0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134"
+        "eth:0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134"
      implementationNames.0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134:
-        "AllowanceModule"
      implementationNames.eth:0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134:
+        "AllowanceModule"
    }
```

```diff
+   Status: CREATED
    contract Liquidity Pool (0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LPToken (0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TimelockController (0x647489df0673E17dB3163c47d5233EBB6F5cAc70)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1BridgeZap (0x6571d6be3d8460CF5F7d6711Cd9961860029D85F)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Bridge Multisig (0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AllowanceModule (0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134)
    +++ description: None
```

Generated with discovered.json: 0xee8239c1e1d4adc8dbcd71c547478ef1a750b702

# Diff at Fri, 04 Jul 2025 12:19:24 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 21387773
- current block number: 21387773

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x2796317b0fF8538F253012862c06787Adfb8cEb6"
+        "eth:0x2796317b0fF8538F253012862c06787Adfb8cEb6"
    }
```

```diff
    contract AllowanceModule (0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
+        "eth:0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
    }
```

Generated with discovered.json: 0x7905463599ba605e2791b5a265607984466bcbd8

# Diff at Wed, 11 Jun 2025 10:36:02 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9d1575fea6364921032f9ded0a049bdf9fc57604 block: 21387773
- current block number: 21387773

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    contract Liquidity Pool (0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8) {
    +++ description: None
      sourceHashes.1:
+        "0xda336842ad358274289356ce376a6f9e6cd728ad4c4d74609f3a65768c9c95b9"
      proxyType:
-        "immutable"
+        "EIP1167 proxy"
      values.$immutable:
-        true
      values.$implementation:
+        "0x5A5fFf6F753d7C11A56A52FE47a177a87e431655"
      implementationNames.0x5A5fFf6F753d7C11A56A52FE47a177a87e431655:
+        "SwapFlashLoan"
    }
```

```diff
    contract LPToken (0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F) {
    +++ description: None
      sourceHashes.1:
+        "0x8bcd2f8e4f39141963f6232b1fb1679eff06e88b0f5127e427cf7c7992b84d44"
      proxyType:
-        "immutable"
+        "EIP1167 proxy"
      values.$immutable:
-        true
      values.$implementation:
+        "0x6C8c6E68604e78B549C96907bfe9EBdaaC04e3B3"
      implementationNames.0x6C8c6E68604e78B549C96907bfe9EBdaaC04e3B3:
+        "LPToken"
    }
```

Generated with discovered.json: 0xf770f24001a37780f118e41818cd93e02cda4f01

# Diff at Fri, 23 May 2025 09:41:06 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 21387773
- current block number: 21387773

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      receivedPermissions.0.role:
+        "admin"
    }
```

```diff
    contract AllowanceModule (0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134) {
    +++ description: None
      directlyReceivedPermissions.0.role:
+        ".GnosisSafe_modules"
    }
```

Generated with discovered.json: 0x16aa0d22894cbebaa9049505193797c161348349

# Diff at Mon, 12 May 2025 13:18:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@5e25d362b71032c18a3417a2307d6923e1b5a519 block: 21387773
- current block number: 21387773

## Description

replace medium severity everywhere.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      fieldMeta.accessControl.severity:
-        "MEDIUM"
+        "HIGH"
    }
```

Generated with discovered.json: 0x00ce207b1c950381e81df6d6d1a47dbbac906d27

# Diff at Tue, 29 Apr 2025 08:19:14 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 21387773
- current block number: 21387773

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2","via":[]}]
    }
```

Generated with discovered.json: 0x56914b7676d30e3ac6989405189e0e7565bbaafc

# Diff at Mon, 17 Mar 2025 15:29:31 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@83c6f5a675a7a6512e7a8af5c777ef32d60dc946 block: 21387773
- current block number: 21387773

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      fieldMeta:
+        {"accessControl":{"severity":"MEDIUM","description":"Roles: GOVERNANCE_ROLE can set fees, pause and unpause; NODEGROUP_ROLE can call bridging functions; ADMIN_ROLE can setWethAddress()","type":"PERMISSION"}}
    }
```

Generated with discovered.json: 0x5e69847f392d74b03c5b88f11f10814c98aa7d7c

# Diff at Tue, 04 Mar 2025 10:40:06 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21387773
- current block number: 21387773

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    contract Liquidity Pool (0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8) {
    +++ description: None
      sinceBlock:
+        13033711
    }
```

```diff
    contract LPToken (0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F) {
    +++ description: None
      sinceBlock:
+        13033711
    }
```

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      sinceBlock:
+        13033669
    }
```

```diff
    contract TimelockController (0x647489df0673E17dB3163c47d5233EBB6F5cAc70) {
    +++ description: None
      sinceBlock:
+        13105394
    }
```

```diff
    contract L1BridgeZap (0x6571d6be3d8460CF5F7d6711Cd9961860029D85F) {
    +++ description: None
      sinceBlock:
+        13674290
    }
```

```diff
    contract Bridge Multisig (0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55) {
    +++ description: None
      sinceBlock:
+        13025256
    }
```

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      sinceBlock:
+        13033197
    }
```

```diff
    contract AllowanceModule (0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134) {
    +++ description: None
      sinceBlock:
+        11144602
    }
```

Generated with discovered.json: 0xf3dab2c0b2743d08525594d53272dcedb39bbe1c

# Diff at Mon, 20 Jan 2025 11:10:15 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21387773
- current block number: 21387773

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21387773 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2"
      issuedPermissions.0.to:
+        "0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2"
    }
```

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      receivedPermissions.0.target:
-        "0x2796317b0fF8538F253012862c06787Adfb8cEb6"
      receivedPermissions.0.from:
+        "0x2796317b0fF8538F253012862c06787Adfb8cEb6"
    }
```

```diff
    contract AllowanceModule (0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134) {
    +++ description: None
      directlyReceivedPermissions.0.target:
-        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
      directlyReceivedPermissions.0.from:
+        "0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"
    }
```

Generated with discovered.json: 0xab88fa47af9c7ed244ccbc4c60d4c5a9b23479f8

# Diff at Thu, 12 Dec 2024 16:59:31 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@fa5a98638066331a8ea6329a256a3462e7da2b3a block: 19876012
- current block number: 21387773

## Description

Ignored not needed supply/balance values in config.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract LPToken (0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F) {
    +++ description: None
      values.totalSupply:
-        "8865787005661770066402784"
    }
```

Generated with discovered.json: 0xba4fb0f0c2caac3aa6869cb778bc4a93721efa15

# Diff at Tue, 03 Dec 2024 13:08:55 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@62514a3ae1e0d198a488f9c1029dd57ab15c60f6 block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
+   Status: CREATED
    contract Liquidity Pool (0x1116898DdA4015eD8dDefb84b6e8Bc24528Af2d8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LPToken (0x1B84765dE8B7566e4cEAF4D0fD3c5aF52D3DdE4F)
    +++ description: None
```

```diff
+   Status: CREATED
    contract L1BridgeZap (0x6571d6be3d8460CF5F7d6711Cd9961860029D85F)
    +++ description: None
```

Generated with discovered.json: 0xe589659878092c72ae95852604998e068961f7cf

# Diff at Mon, 21 Oct 2024 11:11:16 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      values.$pastUpgrades.10.2:
+        ["0x31fe393815822edacBd81C2262467402199EFD0D"]
      values.$pastUpgrades.10.1:
-        ["0x31fe393815822edacBd81C2262467402199EFD0D"]
+        "0x18789557d2706535171fc5e5083def545c9728b4427b6110ebb1476c597cc979"
      values.$pastUpgrades.9.2:
+        ["0x472822517a019e1eEd4533De2d800719057716F1"]
      values.$pastUpgrades.9.1:
-        ["0x472822517a019e1eEd4533De2d800719057716F1"]
+        "0x2a8561645a9afa147fef47215d41b40b4fb7a3e1dff18cdd8a7431dd0006e57c"
      values.$pastUpgrades.8.2:
+        ["0x4cF1471B56D18c7D5a16D48ff5B761BdAEBd2f0b"]
      values.$pastUpgrades.8.1:
-        ["0x4cF1471B56D18c7D5a16D48ff5B761BdAEBd2f0b"]
+        "0x685c294cb7313495cefbce2d17e06f5590788bd34326e2490018aa6004dc03a3"
      values.$pastUpgrades.7.2:
+        ["0x9007A80247D23Cc5C213A6DAcB385c632c4e19F2"]
      values.$pastUpgrades.7.1:
-        ["0x9007A80247D23Cc5C213A6DAcB385c632c4e19F2"]
+        "0x22a8ee90c8add53b09b8df08310fc9c683218265ea07613479c63b2f94207801"
      values.$pastUpgrades.6.2:
+        ["0x64f80a3B1ac0d394d652DF0beCfBeA9DB2320782"]
      values.$pastUpgrades.6.1:
-        ["0x64f80a3B1ac0d394d652DF0beCfBeA9DB2320782"]
+        "0xacba2f9c94fa7d3c1ee39ed72d22b694cde721578bf4f06280d78bcba6a21d02"
      values.$pastUpgrades.5.2:
+        ["0xFb4a5F07427C4de0051c5FCe5b6f9E8cBf8A544C"]
      values.$pastUpgrades.5.1:
-        ["0xFb4a5F07427C4de0051c5FCe5b6f9E8cBf8A544C"]
+        "0x66385af6901af24ec47e8e749eae6d1fba76b22283985e8f142440d922f882e1"
      values.$pastUpgrades.4.2:
+        ["0x7D971Ffc482d70831075fCf07c50EDED782aA9Fd"]
      values.$pastUpgrades.4.1:
-        ["0x7D971Ffc482d70831075fCf07c50EDED782aA9Fd"]
+        "0xa557f92319df5c9aec27f0b1ce3afb80a927b02414a1c126c100a21e603de40c"
      values.$pastUpgrades.3.2:
+        ["0xEfD2F730c9D92E53d0B402ACA05FE597F1A47001"]
      values.$pastUpgrades.3.1:
-        ["0xEfD2F730c9D92E53d0B402ACA05FE597F1A47001"]
+        "0xccf0ecdff27457425d6773ec52a0b17bcfbb93fdb77525872e403bc0efbf6cc9"
      values.$pastUpgrades.2.2:
+        ["0x36829ba54e6A0f11fB6e5A45aC5aD2742ec86a0B"]
      values.$pastUpgrades.2.1:
-        ["0x36829ba54e6A0f11fB6e5A45aC5aD2742ec86a0B"]
+        "0xfc4ec72e51cd01fa4978d2a69158283a8c2278ce2c7d505bc50b0e76b048c4e6"
      values.$pastUpgrades.1.2:
+        ["0x346B928D29827a02bC06A4A66D7FF37D250bcEE8"]
      values.$pastUpgrades.1.1:
-        ["0x346B928D29827a02bC06A4A66D7FF37D250bcEE8"]
+        "0x24867a819247c16b6440e0fe4bb15d829486af9d30fd709cfe41d3376399330d"
      values.$pastUpgrades.0.2:
+        ["0x1622B32113bd2dFE1d92B30dA7FB68b7E5FA81b2"]
      values.$pastUpgrades.0.1:
-        ["0x1622B32113bd2dFE1d92B30dA7FB68b7E5FA81b2"]
+        "0x8847102cd287f156f6bea7ef8b0d8a1a769b217a31f31271e1772fa03360f5b2"
    }
```

Generated with discovered.json: 0xa3c9210350bfff6bf6c31c9ef9771341c9cfc3e9

# Diff at Fri, 18 Oct 2024 11:01:37 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@0295165a89d86b7450439f24f100d1baa74381fc block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract AllowanceModule (0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134) {
    +++ description: None
      directlyReceivedPermissions:
+        [{"permission":"act","target":"0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55"}]
    }
```

Generated with discovered.json: 0x8b9c835749969ad3363171ca13c07976f3ac669a

# Diff at Mon, 14 Oct 2024 10:56:44 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      sourceHashes:
+        ["0xb9b3a683fe4dda991e2c9f0c79d7b8f5b2dd518535c692b5887aa3c03a030de3","0x81d007102ce6d41c4e245cc562c41b762d6fe49738f3dac3eb5e159caa6dc853"]
    }
```

```diff
    contract TimelockController (0x647489df0673E17dB3163c47d5233EBB6F5cAc70) {
    +++ description: None
      sourceHashes:
+        ["0xb8860ecb88ce9ef535fd75652844536335a1ab72f54ccfd0159be7e57422dc03"]
    }
```

```diff
    contract Bridge Multisig (0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55) {
    +++ description: None
      sourceHashes:
+        ["0xd5a33441170541b7df25812e0e3dff6562b2f09ab835a6b431cb9e7198a47605","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      sourceHashes:
+        ["0xeb95d39e1b35f76b6331da863f87bf2e148dd21abf5666590443b65f6a125630"]
    }
```

```diff
    contract AllowanceModule (0xCFbFaC74C26F8647cBDb8c5caf80BB5b32E43134) {
    +++ description: None
      sourceHashes:
+        ["0x739427cbd7c2389a7c03972460f1e89b911776b7fdd5332f544dac83493eabb1"]
    }
```

Generated with discovered.json: 0x14adb1baf1cda825cdf9da55e8649636ca9a2551

# Diff at Tue, 01 Oct 2024 11:11:16 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      values.$pastUpgrades:
+        [["2021-08-20T14:42:12.000Z",["0x1622B32113bd2dFE1d92B30dA7FB68b7E5FA81b2"]],["2021-08-24T02:26:46.000Z",["0x346B928D29827a02bC06A4A66D7FF37D250bcEE8"]],["2021-08-24T03:58:48.000Z",["0x36829ba54e6A0f11fB6e5A45aC5aD2742ec86a0B"]],["2021-08-27T07:21:29.000Z",["0xEfD2F730c9D92E53d0B402ACA05FE597F1A47001"]],["2021-08-27T07:50:15.000Z",["0x7D971Ffc482d70831075fCf07c50EDED782aA9Fd"]],["2021-08-27T08:12:40.000Z",["0xFb4a5F07427C4de0051c5FCe5b6f9E8cBf8A544C"]],["2021-09-01T20:52:07.000Z",["0x64f80a3B1ac0d394d652DF0beCfBeA9DB2320782"]],["2021-09-15T02:17:08.000Z",["0x9007A80247D23Cc5C213A6DAcB385c632c4e19F2"]],["2021-09-28T05:07:48.000Z",["0x4cF1471B56D18c7D5a16D48ff5B761BdAEBd2f0b"]],["2021-11-07T08:18:09.000Z",["0x472822517a019e1eEd4533De2d800719057716F1"]],["2022-02-17T18:32:45.000Z",["0x31fe393815822edacBd81C2262467402199EFD0D"]]]
    }
```

Generated with discovered.json: 0xeae97c384e719b131ce027f1cc7c46e8fc9cc8fe

# Diff at Fri, 30 Aug 2024 08:01:24 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@6c1bd1f41fadf5f2cb1c1805b5a2c6138a3ed35a block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      receivedPermissions.0.via:
-        []
    }
```

Generated with discovered.json: 0x786c3fbd6ae6e807ef96b96d57c1846961f94701

# Diff at Fri, 23 Aug 2024 09:56:06 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@67597c7d6c810bc726594446890178150240711e block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      values.$upgradeCount:
+        11
    }
```

Generated with discovered.json: 0x58ed652b1e13572ac463ca791dbcd2520f17f327

# Diff at Wed, 21 Aug 2024 10:06:20 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@2f6dde3357bf5d79196b6e94f79d853a6c4ec72b block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2","via":[]}]
    }
```

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      assignedPermissions:
-        {"upgrade":["0x2796317b0fF8538F253012862c06787Adfb8cEb6"]}
      receivedPermissions:
+        [{"permission":"upgrade","target":"0x2796317b0fF8538F253012862c06787Adfb8cEb6","via":[]}]
    }
```

Generated with discovered.json: 0x0cfebeadc550651c4cae37095801b5f7c8845ad5

# Diff at Fri, 09 Aug 2024 10:12:44 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f0da1d0aab7bc6b3b5e54e7e93480bd98e57035 block: 19876012
- current block number: 19876012

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19876012 (main branch discovery), not current.

```diff
    contract Bridge Multisig (0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55) {
    +++ description: None
      values.$multisigThreshold:
-        "2 of 3 (67%)"
      values.getOwners:
-        ["0xb3DAD3C24A861b84fDF380B212662620627D4e15","0x9Ce9dc8B12E264F00e80F35326040C75201C38f3","0x0d745Ad687F2b1E1941569f09f612F60ad4aD5BC"]
      values.getThreshold:
-        2
      values.$members:
+        ["0xb3DAD3C24A861b84fDF380B212662620627D4e15","0x9Ce9dc8B12E264F00e80F35326040C75201C38f3","0x0d745Ad687F2b1E1941569f09f612F60ad4aD5BC"]
      values.$threshold:
+        2
      values.multisigThreshold:
+        "2 of 3 (67%)"
    }
```

```diff
    contract ProxyAdmin (0x7B3C1f09088Bdc9f136178E170aC668C8Ed095f2) {
    +++ description: None
      assignedPermissions.admin:
-        ["0x2796317b0fF8538F253012862c06787Adfb8cEb6"]
      assignedPermissions.upgrade:
+        ["0x2796317b0fF8538F253012862c06787Adfb8cEb6"]
    }
```

Generated with discovered.json: 0x7947ea018276414e07b692ea1a4426d45a6c5ab2

# Diff at Thu, 28 Mar 2024 11:26:01 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@21187e63b9b90823a55c461c331868a470ce17eb block: 19467277
- current block number: 19532299

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19467277 (main branch discovery), not current.

```diff
    contract Bridge Multisig (0x67F60b0891EBD842Ebe55E4CCcA1098d7Aac1A55) {
    +++ description: None
      upgradeability.threshold:
+        "2 of 3 (67%)"
    }
```

Generated with discovered.json: 0x318ed27da4a4ee3c26b9a1b4767fea204abb68fe

# Diff at Tue, 19 Mar 2024 07:21:48 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@87a9df6317bf41ef2d063033dfc77d54521b9991 block: 17620009
- current block number: 19467277

## Description

New EOA is given the GOVERNANCE_ROLE in the bridge contract.
Roles: GOVERNANCE_ROLE can set fees, pause and unpause; NODEGROUP_ROLE can call bridging functions; ADMIN_ROLE can setWethAddress()

## Watched changes

```diff
    contract SynapseBridge (0x2796317b0fF8538F253012862c06787Adfb8cEb6) {
    +++ description: accessControl roles described in meta.json
      values.accessControl.GOVERNANCE_ROLE.members.1:
+        "0xa31C04BFD3545E6d00A80573a0B009F7557D958D"
    }
```

Generated with discovered.json: 0x6432e46d2098f11efc4f4531cca556844f364128
