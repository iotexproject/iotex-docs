---
title: Configure the API Server
---

## Configure the Api server

The Api server is a REST API proxy for converting incoming REST API requests into valid smart contract calls that are broadcast tho the IoTeX Blockchain through gRPC calls.

The Api server receives requests from a Thingsboard rule chain previously [configured to send telemetry data over REST API calls](pebble-blockchain-tbrule) that look like the one below:

```json
HTTP 1.1 POST /api/v1/topic/{topic}/data
{
  // ...
  // body is the json object containing device telemetry data
}
```

The API server will process the received requests, generate and sign a IoTeX Smart Contract Call action that is then sent to a Blockchain endpoint to be broadcast to the IoTeX network.
The data will then be processed by the contract to execute further operations on chain.

## Setup an API Server

Since the API server is the tool responsible for building and signing blockchain transactions and send the data so a smart contract, you should deploy your own server and configure it with your blockchain credentials.

### Clone and build the Api server code

```sh
git clone https://github.com/iotexproject/...

cd ...

make build
```

### Create a blockchain account

You need a IoTeX blockchain account for the Api server to sign blockchain transactions and send the telemetry data to a Smart Contract. You can create a new account using [ioPay Wallet](iopay.iotex.io) or [ioctl]() command line client. Eventually, you will need to generate and save the keystore file for this account into the Api server folder.

### Edit the Api server configuration

Create a `.env` file to hold the configuration for the Api server, containing the settings below:

```yaml
# put a IoTeX andpointhere - e.g api.iotex.one:443
IO_ENDPOINT=""
# The address of the smart contract to send the data to
CONTRACT_ADDRESS=""
# The address of the account that will be used to sign contract tx
# i.e. the one that you just created and exported in keystore
VAULT_ADDRESS=""
# The password of the keystore file
VAULT_PASSWORD="strong password here"
# Gas price for the contract transactions in [Qev] units - e.g. 1
GAS_PRICE=1
# Gas price for the contract transactions in [Qev] units - e.g. 200000
GAS_LIMIT=200000
# Blockchain Polling interval
SLEEP_INTERVAL=<Waiting time for obtaining contract execution result>
```

### Set the Api server url in Thingsboard

Into your Pebble Backend, login to Thingsboard and edit the [Rule Chain](pebble-blockchain-tbrule) so that the REST API Call will point to the Api server

### Run the Api server

Launch the Api server with the following command:

```sh
./bin/pebble-data-container
```
