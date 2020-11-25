---
title: Overview
---

# Overview

_<b>Antenna</b>_ is the IoTeX official SDK that allows you to interact with a local or remote IoTeX blockchain node using a gRPC connection.
With Antenna you have all that you need to **fetch informations** from the blockchain: current network status, wallets balance or transaction details can be easily obtainted with the functions provided.

If your application involves **sending blockchain actions**, from IOTX transfers and smart contract calls, to **XRC20 tokens** management and direct gRPC API calls you are all covered!

[Reference implementation](/developer/sdk/account-create) is included for each supported language, and examples of how to use these libraries can be found in the [Examples section](http://localhost:8080/developer/examples/chain-info).

## Supported Languages

#### antenna-js (Javascript): [Installation](/developer/sdk/install-antenna-js) | [GitHub](https://github.com/iotexproject/iotex-antenna)

#### antenna-java (java): [Installation](/developer/sdk/install-antenna-java) | [GitHub](https://github.com/iotexproject/iotex-antenna-java)

#### antenna-go (go lang): [Installation](/developer/sdk/install-antenna-go) | [GitHub](https://github.com/iotexproject/iotex-antenna-go)

#### antenna-swift (iOS): [Installation](/developer/sdk/install-antenna-swift) | [GitHub](https://github.com/iotexproject/iotex-antenna-swift)

#### antenna-embedded (C): [Installation](/developer/sdk/install-antenna-c) | [GitHub](https://github.com/iotexproject/iotex-antenna-embedded)

## Features

**Crypto**<br/>
This module provides crypto functions to generate public/private keys, sign transactions and data, and other cryptographic utility functions.

**RPC-Methods**<br/>
This modure allows to call any RPC-Method provided by an IoTeX Blockchain Gateway.

**Account**<br/>
This Class provides functions to create and manage blockchain accounts

**Action**<br/>
This module allows to create and manage blockchain actions

**Contract**<br/>
This class allows to interact with contract deployed on the IoTeX Blockchain, given the contract address and the ABI

**XRC20**<br/>
This module allows to send, receive and query wallets for XRC20 tokens deployed on the IoTeX Blockchain.
