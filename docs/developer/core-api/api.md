---
title: gRPC API
---

# IoTeX Node full gRPC API

Below is the alphabetical list of all available gRPC calls provided be a IoTeX Blobkchain Gateway node. To run the examples you can use [grpcurl](https://github.com/fullstorydev/grpcurl/releases) command line client for your OS.

::: tip
If you are accessing a non-TLS endpoint, make sure you use `-plaintext` option in your `grpcurl` commnad.
:::

[[toc]]

## EstimateActionGasConsumptionByExecution

Usage:
Get Estimated Action Gas Consumption By Execution
Request:
Execution: iotextypes.Execution
-Amount: Execution Amount
-Contract: Contract Address
-Data: Data
CallerAddress: Address of Caller

Response:
Gas: Estimated Gas Amount

Example:

```json
➜  ~ grpcurl -d '{"execution": {"amount":"0", "contract":"io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"}, "callerAddress": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}' api.mainnet.iotex.one:443 iotexapi.APIService.EstimateActionGasConsumption

{
  "gas": "10000"
}
```

## EstimateActionGasConsumptionByTransfer

```
Usage:
  Get Estimated Action Gas Consumption By Transfer
Request:
  Transfer: iotextypes.Transfer
    -Amount: Transfer Amount
    -Recipient: Recipient Address
    -Payload: Payload
  CallerAddress: Address of Caller

Response:
  Gas: Estimated Gas Amount
```

Example:

```json
➜  ~ grpcurl -d '{"transfer": {"amount":"100000", "recipient":"io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}, "callerAddress": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}'  api.mainnet.iotex.one:443 iotexapi.APIService.EstimateActionGasConsumption

{
  "gas": "10000"
}
```

## EstimateGasForAction

```
Usage:
  Get Estimated Gas For Action
Request:
  Action: Action
Response:
  Gas: Gas
```

Example:

```json
➜  ~ grpcurl -d '{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "1000000000000", "execution": {"amount": "0", "contract": ""}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}' api.iotex.one:443 iotexapi.APIService.EstimateGasForAction

{
  "gas": 10000
}
```

## GetAccount

```
Usage:
  Get Account Details
Request:
  Address: Account Encoded Address
Response:
  AccountMeta: Account Metadata
```

Example:

```json
➜  ~ grpcurl -d '{"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd"}' api.mainnet.iotex.one:443 iotexapi.APIService.GetAccount

{
  "accountMeta": {
    "address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd",
    "balance": "0",
    "nonce": "2",
    "pendingNonce": "3",
    "numActions": "2"
  }
}
```

## GetActionsByAddress

```
Usage:
  Get Actions By Address
Request:
  ByAddr: GetActionsByAddressRequest
    -Address: Encoded Address
    -Start: Start Index of Actions
    -Count: Number of Actions
Resposne:
  ActionInfo: List of Action Info
```

Example:

```json
➜  ~ grpcurl -d '{"byAddr": {"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd", "start": 0, "count": 1}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions

Resolved method descriptor:
rpc GetActions ( .iotexapi.GetActionsRequest ) returns ( .iotexapi.GetActionsResponse );

Request metadata to send:
(empty)

Response headers received:
content-type: application/grpc

Response contents:
{
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "nonce": 1,
          "gasLimit": 10000,
          "gasPrice": "10000000000000",
          "transfer": {
            "amount": "1000000000000000000",
            "recipient": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy"
          }
        },
        "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=",
        "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="
      },
      "actHash": "060a93a4784469f9e587da0c90ed20df58b0effb50d6b8ddcd9a4c65ad55fcbd",
      "blkHash": "6344115bcd43b7315ffdf5338d0f97b26caed7734efea034a27208f64670f5e9",
      "timestamp": "2019-04-17T00:10:30.468419Z"
    }
  ]
}
```

## GetActionsByBlock

```
Usage:
  Get Actions By Block
Request:
  ByBlk: GetActionsByBlockRequest
    -BlkHash: Block Hash
    -Start: Start Index of Actions
    -Count: Number of Actions
Resposne:
  ActionInfo: List of ActionInfo
```

Example:

```json
➜  ~ grpcurl -d '{"byBlk": {"blkHash": "6344115bcd43b7315ffdf5338d0f97b26caed7734efea034a27208f64670f5e9", "start": 0, "count": 1}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions

{
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "gasPrice": "0",
          "grantReward": {
            "height": "1"
          }
        },
        "senderPubKey": "BGR5G9TOfUUQEoCJ+x262Gp+8wv/0/K73OZKl/P6tJEO+CVthBN9yiFyLZFejCeWoyy5WKy14B+iUAdGjPglhQg=",
        "signature": "fsCLFdClaIYAbwcyeUduhYOzvdncK412GqfEYQqxEwlZXMVfbrrOXVsRAmrtnz69J/t/Z+vlpeTfmqN4LkGt0gA="
      },
      "actHash": "dd2e83336f1ff219b1e54558f0627e1f556ed2caeedb44b758b0e107aa246531",
      "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",
      "timestamp": "2019-04-22T02:06:30Z",
      "blkHeight": "1",
      "sender": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86"
    }
  ],
  "total": "2"
}
```

## GetActionByHash

```
Usage:
  Get Action By Action Hash
Request:
  ByHash: GetActionByHashRequest
    -ActionHash: Hash of Action
    -CheckPending: Wether To Check Pending Actions in Action Pool
Response:
  ActionInfo: Action Info
```

Example:

```json
➜  ~ grpcurl -d '{"byHash": {"actionHash": "b7024bc52f315fafb9cc7677e730aec79767b28fbaa6bdd1f37c1861dd699aba", "checkPending": false}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions

{
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "gasLimit": "5000000",
          "gasPrice": "0",
          "transfer": {
            "amount": "0",
            "recipient": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",
            "payload": "cmNxZ2pzeGZkeHpzenp0cHlkemx6Y2xwbHo6Ly9VMkZzZEdWa1gxOUU0dzJRZ2dQSi82TjM4ZUNVNFlUdk9OeUs4QTVqWjFYSW9RREMybFpCSEdlOWRERmtONlRvSnFhQXhjUHg2SkV6T3YveWlWQWw2YStQeW0rSTAyQnZsZVcybWNLdU1WNnRXSFJIVG5KdXU5ODF4MlhQMm9XOQ=="
          }
        },
        "senderPubKey": "BGR5G9TOfUUQEoCJ+x262Gp+8wv/0/K73OZKl/P6tJEO+CVthBN9yiFyLZFejCeWoyy5WKy14B+iUAdGjPglhQg=",
        "signature": "aHHaBSzCb2pkAa6V/oqHruAkvjXHg6LH51LRJob8Cf1hAh6SxjVZlbCtVhVq0BCIJW9vf2Gd/gPLxa56kpZmhQE="
      },
      "actHash": "b7024bc52f315fafb9cc7677e730aec79767b28fbaa6bdd1f37c1861dd699aba",
      "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",
      "timestamp": "2019-04-22T02:06:30Z",
      "blkHeight": "1",
      "sender": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",
      "gasFee": "0"
    }
  ],
  "total": "1"
}
```

## GetActionsByIndex

```
Usage:
  Get Actions By Index
Request:
  ByIndex: GetActionsByIndexRequest
    -Start: Start Index of Actions
    -Count: Number of Actions
Response:
  ActionInfo: List of Action Info
```

Example:

```json
➜  ~ grpcurl -d '{"byIndex": {"start": 0, "count": 2}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions

{
  "actionInfo": [
    {
      "action": {
        "core": {
          "version": 1,
          "gasPrice": "0",
          "grantReward": {
            "height": "1"
          }
        },
        "senderPubKey": "BGR5G9TOfUUQEoCJ+x262Gp+8wv/0/K73OZKl/P6tJEO+CVthBN9yiFyLZFejCeWoyy5WKy14B+iUAdGjPglhQg=",
        "signature": "fsCLFdClaIYAbwcyeUduhYOzvdncK412GqfEYQqxEwlZXMVfbrrOXVsRAmrtnz69J/t/Z+vlpeTfmqN4LkGt0gA="
      },
      "actHash": "dd2e83336f1ff219b1e54558f0627e1f556ed2caeedb44b758b0e107aa246531",
      "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",
      "timestamp": "2019-04-22T02:06:30Z",
      "blkHeight": "1",
      "sender": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",
      "gasFee": "0"
    },
    {
      "action": {
        "core": {
          "version": 1,
          "gasLimit": "5000000",
          "gasPrice": "0",
          "transfer": {
            "amount": "0",
            "recipient": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",
            "payload": "cmNxZ2pzeGZkeHpzenp0cHlkemx6Y2xwbHo6Ly9VMkZzZEdWa1gxOUU0dzJRZ2dQSi82TjM4ZUNVNFlUdk9OeUs4QTVqWjFYSW9RREMybFpCSEdlOWRERmtONlRvSnFhQXhjUHg2SkV6T3YveWlWQWw2YStQeW0rSTAyQnZsZVcybWNLdU1WNnRXSFJIVG5KdXU5ODF4MlhQMm9XOQ=="
          }
        },
        "senderPubKey": "BGR5G9TOfUUQEoCJ+x262Gp+8wv/0/K73OZKl/P6tJEO+CVthBN9yiFyLZFejCeWoyy5WKy14B+iUAdGjPglhQg=",
        "signature": "aHHaBSzCb2pkAa6V/oqHruAkvjXHg6LH51LRJob8Cf1hAh6SxjVZlbCtVhVq0BCIJW9vf2Gd/gPLxa56kpZmhQE="
      },
      "actHash": "b7024bc52f315fafb9cc7677e730aec79767b28fbaa6bdd1f37c1861dd699aba",
      "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",
      "timestamp": "2019-04-22T02:06:30Z",
      "blkHeight": "1",
      "sender": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",
      "gasFee": "0"
    }
  ],
  "total": "5407021"
}
```

## GetBlockMetasByHash

```
Usage:
  Get Block Metadata By Block Hash
Request:
  ByHash: GetBlockMetaByHashRequest
    -BlkHash: Block Hash
Response:
  BlkMetas: Block Metadata
```

Example:

```json
➜  ~ grpcurl -d '{"byHash": {"blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641"}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetBlockMetas

{
  "blkMetas": [
    {
      "hash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641",
      "height": "1",
      "timestamp": "2019-04-22T02:06:30Z",
      "numActions": "2",
      "producerAddress": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",
      "transferAmount": "0",
      "txRoot": "1d2a8f412b80a23af5dfd795139a9567e21bbd674c42c48baa0722c8fed828a0",
      "receiptRoot": "b325892694c3ab543e6c44da18a25542d140c892391f061fadac47cf1f42d803",
      "deltaStateDigest": "7a59812644c0c5188e52ed028ed335c5226f27ea7343647cd1cd19fd2a3e334f"
    }
  ],
  "total": "1"
}
```

## GetBlockMetasByIndex

```
Usage:
  Get Block Metadata By Index
Request:
  ByIndex: GetBlockMetasByIndexRequest
    -Start: Start Block Height
    -Count: Number of Blocks
Response:
  BlkMetas: List of Block Metadata
```

Example:

```json
➜  ~ grpcurl -d '{"byIndex": {"start": 1, "count": 2}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetBlockMetas

{
  "blkMetas": [
    {
      "hash": "b7754977cae0f2a45a4ae2b7f0dfc20487e5acfa93594e5eaa1e93f5ec88800f",
      "height": 1,
      "timestamp": "2019-04-17T00:08:50.466089Z",
      "numActions": 1,
      "producerAddress": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy",
      "transferAmount": "0",
      "txRoot": "285ff4de28a16dafc49d8c46d24fa99433ac08f24be8962c7a01ade65068a34a",
      "receiptRoot": "60d78681f8e531307e9ef1916f8ff8d387d922e47d0459e14d575f40ac042195",
      "deltaStateDigest": "206c92297a78c59ff6fe3a6351e755fda8ae9bb40b25084e0588b0af43445ca7"
    },
    {
      "hash": "47406baaee6af2775ef61c46373b6d0202b228f11e1a7a2f986f7d617f64f593",
      "height": 2,
      "timestamp": "2019-04-17T00:09:00.465902Z",
      "numActions": 1,
      "producerAddress": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy",
      "transferAmount": "0",
      "txRoot": "d63be4dc98821a28410f694a4fd71179e79db638496a9510c67e5b1a0fc0dac4",
      "receiptRoot": "89cd1950dc9b51f8cf7078ffb38046d31e421c3add9c06abdd3cbcc99e5bf265",
      "deltaStateDigest": "8a7d0cee0eb6b6010088e0b4a2996668a29eb595ea83533b9e33fdecc15bf758"
    }
  ]
}
```

## GetChainMeta

```
Usage:
  Get Blockchain Metadata
Request:
  N/A
Response:
  ChainMeta: Blockchain Metadata
```

Example:

```json
➜  ~ grpcurl api.iotex.one:443 iotexapi.APIService.GetChainMeta

{
  "chainMeta": {
    "height": 88,
    "numActions": 90,
    "epoch": {
      "num": 2,
      "height": 49,
      "gravityChainStartHeight": 49
    }
  }
}
```

## GetEpochMeta

```
Usage:
  Get Epoch Metadata Given an Epoch Number
Request:
  EpochNumber: Epoch Number
Response:
  EpochData: Basic Epoch Information
  TotalBlocks: Number of Blocks in the Epoch
  BlockProducersInfo: List of Block Producer Information
```

Example:

```json
➜  ~ grpcurl -d '{"epochNumber": 1}' api.iotex.one:443 iotexapi.APIService.GetEpochMeta

{
  "epochData": {
    "num": 1,
    "height": 1,
    "gravityChainStartHeight": 7502300
  },
  "totalBlocks": 360,
  "blockProducersInfo": [
    {
      "address": "io1gh7xfrsnj6p5uqgjpk9xq6jg9na28aewgp7a9v",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1scs89jur7qklzh5vfrmha3c40u8yajjx6kvzg9",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io159fv8mu9d5djk8u2t0flgw4yqmt6fg98uqjka8",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1cup9k8hl8fp40vrj29ex8djc346780dk223end",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1wv5m0xyermvr2n0wjx2cjsqwyk863drdl5qfyn",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1gf08snppu2a2wfd50pjas2j6q2kcxjzqph3pep",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1u5ff879gg2dw9vfpxr2tsmuaz07e2rea6gvl7s",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1ar5l5s268rtgzshltnqv88mua06ucm58dx678y",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1xsx5n94kg2zv64r7tm8vyz9mh86amfak9ka9xx",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1x9kjkr0qv2fa7j4t2as8lrj223xxsqt4tl7xp7",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1fks575kklxafq4fwjccmz5d3pmq5ynxk5h6h0v",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1vtm2zgn830pn6auc2cvnchgwdaefa9gr4z0s86",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io12yxdwewry70gr9fs6fphyfaky9c7gurmzk8f4f",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1c3r4th3zrk4uhv83a9gr4gvn3y6pzaj6mc84ea",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io15fqav3tugm96ge7anckx0k4gukz5m4mqf0jpv3",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io14vmhs9c75r2ptxdaqrtk0dz7skct30pxmt69d9",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1v0q5g2f8z6l3v25krl677chdx7g5pwt9kvqfpc",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1z7mjef7w528nasnsafan0rp6yuvkvq405l6r8j",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1xsdegzr2hdj5sv5ad4nr0yfgpsd98e40u6svem",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1nyjs526mnqcsx4twa7nptkg08eclsw5c2dywp4",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1du4eq4f88n4wyc026l3gamjwetlgsg4jz7j884",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io127ftn4ry6wgxdrw4hcd6gdwqlq70ujk98dvtw5",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 15
    },
    {
      "address": "io1jafqlvntcxgyp6e0uxctt3tljzc3vyv5hg4ukh",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 16
    },
    {
      "address": "io15npzu93ug8r3zdeysppnyrcdu2xssz0lcam9l9",
      "votes": "10000000000000000000000000",
      "active": true,
      "production": 14
    }
  ]
}
```

## GetLogsByBlock

```
Usage:
  Get Logs filtered by contract address and Topics with given Block hash
Request:
  Filter: LogsFilter
    -Address: List of Addresses
    -Topics: List of Topics
  ByBlock: GetLogsByBlock
    -BlockHash: blockhash

Response:
  Logs: List of Logs
```

Example:

```json
➜  ~ grpcurl -v -plaintext -d '{"filter": {}, "byBlock": {"blockHash": "221e7f14dddd57a739975b943bfffb1cbfcffa1ee043cf693b92af987e42ed93"}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetLogs


```

## GetLogsByRange

```
Usage:
  Get Logs filtered by contract address and Topics with given Range
Request:
  Filter: LogsFilter
    -Address: List of Addresses
    -Topics: List of Topics
  ByRange: GetLogsByRange
    -FromBlock: Start Block Height
    -Count: Count of Blocks

Response:
  Logs: List of Logs
```

Example:

```json
➜  ~ grpcurl -d '{"filter": {}, "byRange": {"fromBlock": "12000", "count": "2"}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetLogs

{
  "logs": [
    {
      "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",
      "data": "EilpbzFjNXp3aDI0cGM0ejg3dHF3NG02ejZjNHk1NDRwd3N2OG5ycm02NhoUMTYwMDAwMDAwMDAwMDAwMDAwMDA=",
      "blkHeight": "12000",
      "actHash": "NDSsKbgjqU5jP4LWr2xoq/kpu9s8g0C4tpF/PiDTFkI="
    },
    {
      "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",
      "data": "EilpbzFjNXp3aDI0cGM0ejg3dHF3NG02ejZjNHk1NDRwd3N2OG5ycm02NhoUMTYwMDAwMDAwMDAwMDAwMDAwMDA=",
      "blkHeight": "12001",
      "actHash": "6+RK0qv5kZ3nJ014NqLlEadmnMaMS1KPWkE5mZLmSGA="
    }
  ]
}

```

## GetRawBlocks

```
Usage:
  Get A List of Raw Block Data
Request:
  StartHeight: Start Block Height
  Count: Block Count
  WithReceipts: Whether to Include Action Receipts in Each Returned Block
Response:
  Blocks: A List of Raw Block Data
```

Example:

```json
➜  ~ grpcurl -d '{"startHeight": 1, "count": 2, "withReceipts": true}' api.mainnet.iotex.one:443 iotexapi.APIService.GetRawBlocks

{
  "blocks": [
    {
      "block": {
        "header": {
          "core": {
            "version": 1,
            "height": 1,
            "timestamp": "2019-06-17T23:33:04.755448Z",
            "prevBlockHash": "N9XWktUXQo60gwwqV17n5trTKkbUp/Ob6UY841g+AtA=",
            "txRoot": "5Pn9BOMAgzj0LX9o6AD8O/FbDueiA5eS+9MUMzQ6QwY=",
            "deltaStateDigest": "tE9Ywa/2MvNDO7F8scFh9/4ijrGXTClVunKbp5eeU8M=",
            "receiptRoot": "EbGK2TCBJbVMEn04tBRy0PdceJ1O2N3IxnU7Fggjl2o="
          },
          "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
          "signature": "oZxrQvUteVeq+SMCxg6I+MwJ4IkKWFzDhFi3hIQ9j9IYL69RRWsRc+pxXAjdfRCiLuCXGnkaP+nUXnR3Atm8EwA="
        },
        "body": {
          "actions": [
            {
              "core": {
                "version": 1,
                "gasPrice": "0",
                "grantReward": {
                  "height": 1
                }
              },
              "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
              "signature": "gE9H+i0EZNTVHhoX7fq4xn6H8FqBrFKK0YyfcH16mrFT0rSvgVDb/ov2hAwgMh5kJVHaD8TG6UX7fayK5lpCXQA="
            }
          ]
        },
        "footer": {
          "timestamp": "0001-01-01T00:00:00Z"
        }
      },
      "receipts": [
        {
          "blkHeight": 1,
          "actHash": "5Pn9BOMAgzj0LX9o6AD8O/FbDueiA5eS+9MUMzQ6QwY=",
          "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"
        }
      ]
    },
    {
      "block": {
        "header": {
          "core": {
            "version": 1,
            "height": 2,
            "timestamp": "2019-06-17T23:33:14.756354Z",
            "prevBlockHash": "7bI37oyjBvl+TTx5Fw089xCe8AJb7YneCsmqOLiJ88k=",
            "txRoot": "qQZkW9iZ+xsl0SjVJmsIDDpQ9RcWyge/sBcvHOZFgKQ=",
            "deltaStateDigest": "S7dJ9+p/BUNaiRFQLl6+Lc/u5B5s4jlJ5LldIFwof9c=",
            "receiptRoot": "S2ZBa1FtEUSDmBqTbnS4w4RfhHfyyDJofaxL1U36+9I="
          },
          "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
          "signature": "s/JZHbuZaMKOqWACHsGbezciRBSS7XYU9QuY2w3BgM8pEYWtYXZYWVJiHU3r0Z1Z7PXFMKc1glpONXkLiXwReQA="
        },
        "body": {
          "actions": [
            {
              "core": {
                "version": 1,
                "gasPrice": "0",
                "grantReward": {
                  "height": 2
                }
              },
              "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
              "signature": "gMlB2v2RwSHnNuilZX89K+EOtCKDfmfouI97GO+DcU82VHm9LE4NG1TVgUQe6z94aOSHrEwyUKtINuv5QOmNIgA="
            }
          ]
        },
        "footer": {
          "timestamp": "0001-01-01T00:00:00Z"
        }
      },
      "receipts": [
        {
          "blkHeight": 2,
          "actHash": "qQZkW9iZ+xsl0SjVJmsIDDpQ9RcWyge/sBcvHOZFgKQ=",
          "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"
        }
      ]
    }
  ]
}
```

## GetServerMeta

```
Usage:
  Get Server Metadata
Request:
  N/A
Reponse:
  ServerMeta: Server Metadata
```

Example:

```json
➜  ~ grpcurl api.iotex.one:443 iotexapi.APIService.GetServerMeta

{
  "serverMeta": {
    "packageVersion": "v0.7.0-35-g3baac429",
    "packageCommitID": "3baac429420ae74a2d1e97a866f745ca796fc192",
    "gitStatus": "clean",
    "goVersion": "go version go1.12.5 darwin/amd64",
    "buildTime": "2019-06-17-PDT/16:32:37"
  }
}
```

## GetReceiptByAction

```
Usage:
  Get Action Receipt By Action Hash
Request:
  ActionHash: Action Hash
Response:
  Receipt: Action Receipt
```

Example:

```json
➜  ~ grpcurl -d '{"actionHash": "dd2e83336f1ff219b1e54558f0627e1f556ed2caeedb44b758b0e107aa246531"}' api.mainnet.iotex.one:443 iotexapi.APIService.GetReceiptByAction
{
  "receiptInfo": {
    "receipt": {
      "status": "1",
      "blkHeight": "1",
      "actHash": "3S6DM28f8hmx5UVY8GJ+H1Vu0sru20S3WLDhB6okZTE=",
      "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",
      "logs": [
        {
          "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",
          "data": "EilpbzFjNXp3aDI0cGM0ejg3dHF3NG02ejZjNHk1NDRwd3N2OG5ycm02NhoUMTYwMDAwMDAwMDAwMDAwMDAwMDA=",
          "blkHeight": "1",
          "actHash": "3S6DM28f8hmx5UVY8GJ+H1Vu0sru20S3WLDhB6okZTE="
        }
      ]
    },
    "blkHash": "230ba8095d5a505e355652f9dcc2b13605419a8fa3d3fd5ddc6d24fd6a902641"
  }
}
```

## GetTransactionLogByActionHash

```
Usage:
  Get Transaction log By Action hash
Request:
  ActionHash: Action Hash

Response:
  GetTransactionLogByActionHashResponse: Transaction logs in Action
```

Example:

```
grpcurl -d '{"actionHash":"d4b3c8373ad28d46625902ab92033098a53f7283335847330e0b46a1fd112d8d"}' api.iotex.one:443 iotexapi.APIService.GetTransactionLogByActionHash
{
  "transactionLog": {
    "actionHash": "1LPINzrSjUZiWQKrkgMwmKU/coMzWEczDgtGof0RLY0=",
    "numTransactions": "40",
    "transactions": [
      {
        "amount": "650975000000000000",
        "sender": "io1scqu4w9z9wsakpxwjz0yasw7u424huaswwpy76",
        "recipient": "io0000000000000000000000rewardingprotocol",
        "type": "GAS_FEE"
      },
      {
        "amount": "6532163000000000000000000",
        "sender": "io1scqu4w9z9wsakpxwjz0yasw7u424huaswwpy76",
        "recipient": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu"
      },
      {
        "amount": "100000000000000000000",
        "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
        "recipient": "io1tef0w2vn288htckthslg7ut6qgula6ssn3rukx"
      },
      {
        "amount": "1800000000000000000000",
        "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
        "recipient": "io1mzly3mzaw0nesn96zsmp3gqvhj929ejkl6rsh9"
      },
      ...
      {
        "amount": "14600000000000000000000",
        "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
        "recipient": "io10p639dt4xf9cf256ctzuem63pgej827zwl2035"
      },
      {
        "amount": "8400000000000000000000",
        "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
        "recipient": "io1ap5smf54awc7vngtgzsmvvppswza0y3t0gng90"
      },

      {
        "amount": "9000000000000000000000",
        "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
        "recipient": "io1ea0pdyphktxt42yjlt6gtktalls6thasck6g2v"
      }
    ]
  },
  "blockIdentifier": {
    "hash": "457d95613c3e8007b0dd2605f29dca5321e453209e4750c43d0613f1d93b6854",
    "height": "5202793"
  }
}
```

## GetTransactionLogByBlockHeight

```
Usage:
  Get Transaction log By Block Height
Request:
  BlockHeight: Block Height

Response:
  GetTransactionLogByBlockHeightResponse: Transaction logs in Block
```

Example:

```json
➜  ~  grpcurl -d '{"blockHeight":5202793}' api.iotex.one:443 iotexapi.APIService.GetTransactionLogByBlockHeight
{
  "transactionLogs": {
    "logs": [
      {
        "actionHash": "1LPINzrSjUZiWQKrkgMwmKU/coMzWEczDgtGof0RLY0=",
        "numTransactions": "40",
        "transactions": [
          {
            "amount": "650975000000000000",
            "sender": "io1scqu4w9z9wsakpxwjz0yasw7u424huaswwpy76",
            "recipient": "io0000000000000000000000rewardingprotocol",
            "type": "GAS_FEE"
          },
          {
            "amount": "6532163000000000000000000",
            "sender": "io1scqu4w9z9wsakpxwjz0yasw7u424huaswwpy76",
            "recipient": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu"
          },
          {
            "amount": "100000000000000000000",
            "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
            "recipient": "io1tef0w2vn288htckthslg7ut6qgula6ssn3rukx"
          },
          {
            "amount": "1800000000000000000000",
            "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
            "recipient": "io1mzly3mzaw0nesn96zsmp3gqvhj929ejkl6rsh9"
          },
          {
            "amount": "425000000000000000000",
            "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
            "recipient": "io1u9khn0q9g40mfca9dhkg35dr8rtdds65uvc7s0"
          },
          {
            "amount": "499000000000000000000000",
            "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
            "recipient": "io1lvukz4482xweap8xm7zsa5fdj85wlnqgympjsm"
          },
          ...
          {
            "amount": "9000000000000000000000",
            "sender": "io1lvemm43lz6np0hzcqlpk0kpxxww623z5hs4mwu",
            "recipient": "io1ea0pdyphktxt42yjlt6gtktalls6thasck6g2v"
          }
        ]
      }
    ]
  },
  "blockIdentifier": {
    "hash": "457d95613c3e8007b0dd2605f29dca5321e453209e4750c43d0613f1d93b6854",
    "height": "5202793"
  }
}
```

## GetUnconfirmedActionsByAddress

```
Usage:
  Get Unconfirmed Actions By Address
Request:
  UnconfirmedByAddr: GetUnconfirmedActionsByAddressRequest
    -Address: Encoded Address
    -Start: Start Index of Unconfirmed Actions
    -Count: Number of Unconfirmed Actions
Resposne:
  ActionInfo: List of Action Info
```

Example:

```json
➜  ~ grpcurl -d '{"unconfirmedByAddr": {"address": "io1juvx5g063eu4ts832nukp4vgcwk2gnc5cu9ayd", "start": 0, "count": 1}}' api.mainnet.iotex.one:443 iotexapi.APIService.GetActions

{

}
```

## ReadContract

```
Usage:
  Read Contract State
Request:
  Action: Action (Must Be An Execution)
Response:
  Data: Return Value in Execution Receipt
```

Example:

```json
➜  ~ grpcurl -plaintext -d '{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "1000000000000", "execution": {"amount": "0", "contract": ""}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}' 127.0.0.1:14014 iotexapi.APIService.ReadContract

{
  "receipt": {
    "status": 1,
    "blkHeight": 26,
    "actHash": "2bAgDlDdF84K+XNCW95wdjMpmQqVP2b04ghyMXoN6J4=",
    "gasConsumed": 10000,
    "contractAddress": "io18vlvlj0v02yye70kpqtzhu4uek3qqz27zm7g42"
  }
}
```

## ReadState

```
Usage:
  Read State on Blockchain
Request:
  ProtocolID: Protocol ID
  MethodName: Method To Be Invoked To Read State
  Arguments: List of Method Arguments
  Height: BlockHeight of Request // optional, if empty, read from tip
Response:
  Data: State Result
```

Example:

```json
➜  ~ grpcurl -d '{"protocolID": "cmV3YXJkaW5n", "methodName": "VW5jbGFpbWVkQmFsYW5jZQ==", "arguments": "aW8xanV2eDVnMDYzZXU0dHM4MzJudWtwNHZnY3drMmduYzVjdTlheWQ="}' api.iotex.one:443 iotexapi.APIService.ReadState

{
  "data": "MA=="
}
```

## SendAction

```
Usage:
  Send Action
Request:
  Action: Action
Response:
  ActionHash: Hash of Action
```

Example:

```json
➜  ~ grpcurl -plaintext -d '{"action": {"core": {"version": 1, "nonce": 2, "gasLimit": 10000, "gasPrice": "1000000000000", "transfer": {"amount": "100", "recipient": "io1sxm6zl56um2c3ntq5fwqjar4za5ka560x53muy"}}, "senderPubKey": "BOk7WxyPumkmNlKkg61VMY5O7VtRIjFMt/2wd9jHKVCXzsku5QsRCNx0lalyDlkh5W0wSON6vmpnFtfJuRPp8uY=", "signature": "9mrqFBggiRocZhkRVUswxs83NaEFNdEYYczI8049vlovHEP4YMQz+3Isznc3CrYaJxAbc2PTIz7y2meerJ8bHAA="}}' 127.0.0.1:14014 iotexapi.APIService.SendAction

{
  "actionHash": "8890dca441898a3d942de05f7514f32c96afbcde1493ddd76aed1aaecb60af06"
}
```

## SuggestGasPrice

```
Usage:
  Get Suggested Gas Price
Request:
  N/A
Response:
  GasPrice: Gas Price
```

Example:

```json
➜  ~ grpcurl api.iotex.one:443 iotexapi.APIService.SuggestGasPrice

{
  "gasPrice": 1
}
```

## StreamBlocks

```
Usage:
  Subscribe to Block Creations
Request:
  N/A
Response:
  Block: Newly Created Block Data
```

Example:

```json
➜  ~ grpcurl api.mainnet.iotex.one:443 iotexapi.APIService.StreamBlocks

{
  "block": {
    "block": {
      "header": {
        "core": {
          "version": 1,
          "height": 365,
          "timestamp": "2019-06-18T00:36:41.655617Z",
          "prevBlockHash": "p3qrdtYuIfan08r8ZB4JFdpjaYAWUMGLrsxxn/nGO6g=",
          "txRoot": "F484nSOb8CVSNZiOETu1eEfgbwW9kGjX+zFv/OXaAvI=",
          "deltaStateDigest": "z9zsiQmR7MZh6uEBPMgPGO5snxq1YJW9ESCoZun/fD4=",
          "receiptRoot": "8Xb+12FYKrbN2mM4UiFd3htkyagI8U5xX8mtUJegmgY="
        },
        "producerPubkey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
        "signature": "7qJKGnbCDJsfSWxuE9NYsFiqwxr6Urgz6NNu6KUZuWhygPDrEpD6uC4qgqplwFXXF7Zhlclwh7UQlaEcL0i5ZAE="
      },
      "body": {
        "actions": [
          {
            "core": {
              "version": 1,
              "gasPrice": "0",
              "grantReward": {
                "height": 365
              }
            },
            "senderPubKey": "BB5cvAz6DM+BTzw9RADTmMqz0WPDofHDEGQ2kNl20p49+i0O2b5yH6Xc7EeqethWkyI8nw1BrrRleRkqfsHU9m8=",
            "signature": "WWDGUs/EbG1mvTc2MAD06YSZ71bnXK9BBCzTezn2aQBKZCB2PiKbuzQM43dB7AZVmmY0Q7A/JOHqgq/TyZyi1wA="
          }
        ]
      },
      "footer": {
        "timestamp": "0001-01-01T00:00:00Z"
      }
    },
    "receipts": [
      {
        "blkHeight": 365,
        "actHash": "F484nSOb8CVSNZiOETu1eEfgbwW9kGjX+zFv/OXaAvI=",
        "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v"
      }
    ]
  }
}
```

## StreamLogs

```
Usage:
  Get Logs filtered by contract address and Topics in stream
Request:
  Filter: LogsFilter
    -Address: List of Addresses
    -Topics: List of Topics

Response:
  Logs: List of Logs
```

Example:

```json
➜  ~ grpcurl -d '{"filter": {}}'  api.mainnet.iotex.one:443 iotexapi.APIService.StreamLogs

{
  "log": {
    "contractAddress": "io154mvzs09vkgn0hw6gg3ayzw5w39jzp47f8py9v",
    "data": "EilpbzEybWd0dG1mYTJmZm45dXF2bjB5bjM3ZjRuejQzZDI0OGwyZ2E4NRoTODAwMDAwMDAwMDAwMDAwMDAwMA==",
    "blkHeight": "4861831",
    "actHash": "f4P6zde4DcxSG+zLP8LsBXR/gwsXA8ZzMsrDI38swkw="
  }
}
```
