---
title: General Guide
---

# IoTeX integration with Exchanges

This guide provides information and links to the relevant documentation for exchanges to integrate with the IoTeX blockchain.

## Deploy IoTeX Full Nodes

You'll need to deploy a few full nodes, for reading from and writing to the network. The full node stores the entire blockchain state, including pending actions/actions, and broadcasts new states (blocks, actions/actions) to the network.

Please follow [this guide](https://github.com/iotexproject/iotex-bootstrap#iotex-delegate-manual) to setup a full node running with the `gateway` plugin enabled.

Optionally, please follow [this guide](https://github.com/iotexproject/iotex-bootstrap/tree/master/infra/monitoring) to configure a dashboard for node monitoring. Alternatively, if you used the [one-line upgrader](https://github.com/iotexproject/iotex-bootstrap#upgrade) to install the full node, you can just answer "Yes" to the following installer question:

```
Do you want to monitor the status of the node [Y/N] (Default: N)?) to setup the dashboard for monitoring.
```

## Interact with IoTeX Full Nodes

Once the full nodes are fully synced, one can communicate with them via [gRPC](https://grpc.io) service specified in the configuration file: see the full [API reference docs](../core-api/api) and the corresponding proto files on [GitHub](https://github.com/iotexproject/iotex-proto).

## Generate New Accounts

A IoTeX account can be generated via [this algorithm](https://github.com/iotexproject/iotex-address/blob/master/README.md).

::: tip
If you have not installed the latest **ioctl Command line client**, please check out the installation [instructions](../ioctl/install).
:::

New accounts can be generated using ioctl command line client, which will provide the private key and corresponding public keys and IoTeX address. See [this example](../get-started/ioctl-create-account) for more details about how to create a IoTeX account with ioctl.
::: warning
So far, gRPC Core API does not support the creation of new accounts.
:::

## Send IOTX

To send a signed action, the [/APIService/SendAction](/developer/core-api/api.md#sendaction) gRPC endpoint can be used, or ioctl command line client can be used also: see [this example](/developer/get-started/ioctl-send-transfer) for more details on how to send a signed action using ioctl.

::: danger
For safety and auditing reasons, after a new action gets added to the blockchain (whether it's a user deposit or a withdraw) the exchange must retrieve the action data and verify the following:

1. The status of the receipt must equal 1 (_success_)
2. The action type must be "transfer"
3. The amount equals to the deposit [withdraw] amount
4. The sender and recipient matches with intended parties
5. The timestamp of the action roughly equals the actual time of sending the raw action to blockchain (within 5~10 seconds range)
   :::
   Here's an [example](https://iotexscan.io/action/355bd7b93dadc18c2d2689cd400272d28ad28df8e6a1555086233c4b619adfee) of the data associated to a IoTeX action.

## Retrieve actions

One can retrieve confirmed actions as well as pending (unconfirmed) actions by using `/APIService/GetActions` endpoint. Examples are given below:

1. [Get action by action hash](/developer/core-api/api.md#getactionbyhash)
2. [Get confirmed actions by address](/developer/core-api/api.md#getunconfirmedactionsbyaddress)
3. [Get unconfirmed actions by address](/developer/core-api/api.md#getunconfirmedactionsbyaddress)
4. [Get actions by block](/developer/core-api/api.md#getactionsbyblock)

One can also use ioctl commandline tool to [query an action by hash](/developer/ioctl/action.md#query-action).

## Retrieve actions via contracts

One can retrieve confirmed actions via contracts by using `/APIService/GetEVMTransfersByBlockHeight` and `/APIService/GetEVMTransfersByActionHash` endpoints. Examples are given below:

1. [Get EVM transfers by action hash](/developer/core-api/api.md#getevmtransfersbyactionhash)
2. [Get EVM transfers by block height](/developer/core-api/api.md#getevmtransfersbyblockheight)

\*\*Note that you need to turn on [System Action Log](../README.md#gateway) feature if you run your own node as gateway.

## Retrieve Blocks

One can retrieve blocks that contain the target transfers by using `/APIService/GetBlockMetas` gRPC endpoint. Examples are given below:

1. [Get block metadata by index](/developer/core-api/api.md#getblockmetasbyindex)
2. [Get block metadata by block hash](/developer/core-api/api.md#getblockmetasbyhash)

One can also use ioctl commandline tool to [query a block by height or hash](https://docs.iotex.io/#query-block).

## Retrieve transaction Log

One can retrieve transaction logs that contain the target transfers by using `/APIService/GetactionLogByBlockHeight` and `/APIService/GetactionLogByActionHash` endpoints. Examples are given below:

1. [Get transaction logs by block height](/developer/core-api/api.md#gettransactionlogbyblockheight)
2. [Get transaction logs by action hash](/developer/core-api/api.md#gettransactionlogbyactionhash)

::: warning
If you get an "**unimplemented**" error code, with a message like "**feature not supported**" when calling an action log APIs, please resync your node from 0, or download our latest snapshot with index data. Check out the [Gateway node setup and snapshot download guides](https://github.com/iotexproject/iotex-bootstrap#mainnet) for more instructions.
:::

## Rosetta API support

One can deploy a rosetta gateway along with a IoTeX mainnet node and use the rosetta API instead. For more about Rosetta support see the [Rosetta Integration document](rosetta).

## Testing

Once you've fully integrated with the IoTeX blockchain, please make accurate tests on both testnet and mainnet. All states of the IoTeX blockchain can be queried through either the command line tool [ioctl](/developer/get-started/ioctl-install) or the official IoTeX explorers for ([Mainnet](https://iotexscan.io)ì and [Testnet](https://testnet.iotexscan.io)).

Please reach to IoTeX Team if you have any question.
