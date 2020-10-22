---
title: Integrate with IoTeX blockchain
---

# Integrate with IoTeX blockchain

We use the Rule Engine of Thingsboard to send messages to the blockchain:

![](/img/developer/pebble-backend/thingsboard-rules.jpg)

The first step is to filter the "message type": any message sent to Thingsboard enters the chain from the "input" node, and then flows into the following nodes.

## Filter the message type

The first node after the input is named "message type CommonData". This node checks the type of the received message, if the type is "Post Telemetry" (i.e. that's the message that includes Pebble' telemetry data) it will be transmitted to the "Script FilterGateway" node, otherwise it will be sent to the logs.

![](/img/developer/pebble-backend/thingsboard-messageType.jpg)

## Swicth device type

When a message enters the "script FilterGateway" node, the "deviceType" will be checked: if it is not "Gateway" (that's because the data entering Thingsboard comes through the Gateway device we configured, which produces data of type "Gateway", which needs to be filtered out), the it will be transmitted to the "rest api call Push Blockchain" node.

![](/img/developer/pebble-backend/thingsboard-deviceType.jpg)

## Push data to the blockchain:

When a message enters the "rest api call Push Blockchain" node, it's can only be a devices' post telemetries message. This node will then use the url set in its configuration to send the message data in a POST message to the api server.

![](/img/developer/pebble-backend/thingsboard-apiCurl.jpg)

## The IoTeX Api server

The Api server is a REST API proxy for sending gRPC calls to a IoTeX Gateway node.

The request:

```
HTTP 1.1 POST /api/v1/topic/{topic}/data
{
  // ...
  // body is json containing device telemetry data
}
```

will be sent to a deployed contract address, and then executed by the contract to execute further operations on chain. The reference code for this step is in [iotexproject/pebble-data-container](https://github.com/iotexproject/pebble-data-container/blob/master/blockchain/put.go#L68).
