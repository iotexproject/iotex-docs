---
id: guides
title: Get Started
---

## Introduction

Founded as an open-source project in 2017, IoTeX is building the world's leading auto-scalable and privacy-centric blockchain platform for the Internet of Things (IoT). Our mission is to build a decentralized trust fabric for the era of collaboration and data exchange among devices, applications and people. We are developing several innovative technologies in-house, including the blockchain-in-blockchain architecture for heterogeneous computing, fast and robust Roll-DPoS consensus scheme, and efficient trusted computing protocols. More details can be found [here](https://www.iotex.io/research-paper). IoTeX core team is continuously working hard to bring the community more cool features.

### Grand Design

The overall design of IoTeX Network employs Separation of Powers,a term coined by Charles-Louis de Secondat which states that democratic political authority should be divided into legislative, executive and judicial powers. Generally speaking, IoTeX Network is a decentralized trust fabric consisting of multiple blockchains to connect humans, machines, applications, arranged hierarchically and serving different purposes.
![IoTeX Rootchain Architecture](https://cdn-images-1.medium.com/max/2600/1*D6GiPlh9TdikW82c8j1jrA.png)

- Governance layer, instantiated by the Gravity Chain is the layer that acts as a decentralized government for the IoTeX network. It exclusively focuses on decentralization and security, a liveness-oriented consensus scheme (e.g., PoS variant) to facilitate tasks such as staking, voting, slashing, protocol-related proposals, and more. Before the launch of the gravity chain Q3/Q4 2019, Ethereum mainnet will be used as the governance layer.
- Orchestration layer, instantiated by the Root Chain, is the general manager and coordinator for all subchains. It is powered by our safety-oriented Roll-DPoS consensus mechanism and aims for reasonable throughput, reliability and transparency. It is being launched in April 2019 (a.k.a, Mainnet Alpha) as the first blockchain within IoTeX Network.
- Operational layer, instantiated by various layer2 subchains, is the concrete unit that handles business logic related to specific use cases/applications. Different subchains can interoperate with each other via cross-chain communication. The first IoTeX subchain is expected to be launched in Q2/Q3 2019 focusing on trusted computing.
- Execution layer, is an optional layer to which specific subchains can offload concrete computation/storage tasks. The segregation of verification & ordering of states from generation of states is extremely helpful to improve scalability, functionality and usability of a decentralized system.

In our design, all blockchains share the same pool of delegate resource which produces consensus to secure the entire network and is the cornerstone of the collective trust. With the collective trusted being provided, one can easily spin up a subchain as effortlessly as spinning up an EC2 instance on AWS Cloud. Thanks to the abstraction of EDR, subchains running within IoTeX Network can have dramatically different state transition and execution layers as well as the underlying crypto economics.

The reason why we separate duties across multiple blockchain layers we firmly believe in decentralized governance. Many DPoS blockchain manage governance tasks (i.e.,. staking/voting) on the core operational layer blockchain - IoTeX believes governance tasks should not be grouped with operational tasks on the same chain. For example, elected Delegates, as a vested interest group, may disregard staking/voting transactions in the block production process to mitigate being de-elected (i.e., conflict of interest). Furthermore, elected Delegates may enforce protocol upgrades (by upgrading their software without consent from other users) that are not favorable to the rest of the ecosystem.

### Root Chain

The root chain will be launched in Q1 2019 (a.k.a, Mainnet Alpha), which is consisted of the four layered components:

- Networking layer enables the peer-to-peer communication between IoTex nodes, and provide blockchain services (through [grpc](https://grpc.io/)) to other applications and users
- Consensus layer runs Roll-DPoS to select the active block producers among a pool of block producer candidates (who are elected via staking and voting), using a decentralized randomized algorithm (DKG + BLS).
- State transition layer is composed of five subprotocols and is responsible for transiting the states of the blockchain from one to the other.
- Programing layer implements the business logics for state transition. Currently it supports Ethereum virtual machine (EVM) with smart contracts written in Solidity. Developers could seamlessly port existing DApps onto it.

![IoTeX Rootchain Architecture](https://cdn-images-1.medium.com/max/2000/0*cPrsvVa1wIE0cqnS)

### Subprotocols and Actions

The state transition layer of IoTex root chain is flexible enough that any subprotocol can be plugged in without hustling.

- Account subprotocol provides the functionality for bookkeeping balances of accounts living on this blockchain.
- Execution subprotocol manages the execution of smart contracts and roll forward/back of the states.
- Poll subprotocol syncs with our staking/voting contracts living on Ethereum (which plays the role of Gravity chain before its ready), and instructs the delegates promotion/demotion on IoTeX root chain.
- Rewarding subprotocol is responsible for distributing block reward and epoch reward to eligible delegates and candidates.
- Multichain subprotocol manages sub-chain management and cross-chain communication which is a work-in-progress.

In the IoTeX network, transactions (the atomic operation unit to interact with the blockchain data) are referred to as "actions", and there are five types of actions corresponding to the five subprotocols as described. More information can be found [here](https://github.com/iotexproject/iotex-core/blob/master/proto/types/action.proto).

## Build and Run

The simplest way to get started with IoTeX software package is to run it in stand-alone mode for demonstration and testing purposes. "Stand-alone" indicates a single node comprises the entire blockchain by itself, which generates new block, validates the block, and adds the block to the blockchain. This simple mode allows user to quickly launch and test a blockchain with a single computer/node, without requiring much hardware resources.

### From the source

1. setup golang environment, e.g., [on Linux](https://medium.com/@RidhamTarpara/install-go-1-11-on-ubuntu-18-04-16-04-lts-8c098c503c5f), [on MacOS](https://medium.com/golang-learn/quick-go-setup-guide-on-mac-os-x-956b327222b8)
2. `git clone git@github.com:iotexproject/iotex-core.git`
3. `make run`

### Use docker image

1. Install docker on your host machine at https://docs.docker.com/install/. Once docker is properly installed and started, download the IoTeX docker image: `docker pull iotex/iotex-core:latest`

2. Download the config file config_delegate.yaml from [iotex-core](https://github.com/iotexproject/iotex-core). Open the file and change certain parameters of the stand-alone node as you need. For instance, blockCreationInterval specifies the amount of time it takes (in seconds) to produce next block. Change it to a larger value if you want block producing at a slower pace.

3. `sudo docker run -d -p 30100:14004 --mount type=bind,source=$PWD/config_delegate.yaml,target=/etc/iotex/config_local_delegate.yaml iotex/iotex-core:testnet iotex-server -config-path=/etc/iotex/config_local_delegate.yaml`

## Explorer

- [Github Repository](https://github.com/iotexproject/iotex-explorer)
- Demo Sites:
  - [Mainnnet](https://iotexscan.io)
  - [Testnet](https://testnet.iotexscan.io)

## Testnet

The IoTeX Testnet is now fully open for community and developers! Join our Testnet and interact with IoTeX network today!

### Set up the node

Our complete software is packaged in the form of a docker image plus a config file for the convenience of set-up and deployment. You can easily set up and run a node by following instructions at https://github.com/iotexproject/iotex-testnet.

As of now, your node will be join as a fullnode to IoTeX network. Once we open the staking/voting on the testnet, you could promote your fullnode to a delegate and participate in block production. Expect that in the next few weeks.

### Talk to us

If you encounter any technical problem when connecting to the testnet, please do not hesitate to contact us via [gitter](https://gitter.im/iotex-dev-community/Lobby). In addition to this, please file issues under https://github.com/iotexproject/iotex-core/issues and we will investigate.

## Write a Smart Contract

TBD

## Glossary

- Delegate: the blockchain node which is elected to propose and validate new blocks, a.k.a. block producer.

- [Solidity](https://en.wikipedia.org/wiki/Solidity): the contract oriented programming language.

- Epoch: an epoch is composed for 8640 blocks which is responsible by the same group of delegates.

- Block period: the interval in seconds that blocks are produced. During the launch of the mainnet, the block period is 10 seconds, which will be reduced as the protocol gets stabilized.
