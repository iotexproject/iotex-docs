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

### Create a blockchain account

### Edit the Api server configuration

### Set the Api server url in Thingsboard

### Run the Api server
