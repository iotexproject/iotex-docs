---
title: Configure Thingsboard Rulechain
---

:::warning
This document is not updated.
:::

# Configure Thingsboard Rulechain

We use the Rule Engine of Thingsboard to send messages to the blockchain:

![](/img/developer/pebble-backend/thingsboard-rules.jpg)

A thingsboard rule chain works such that any MQTT message sent to the Thingsboard server will enter the "chain" from the "input" node, and then flows into the chain being "processed", "analized" or "filtered" by the following nodes.

To integrate with the IoTeX blockchain using this method you must [deploy your own Pebble Backend Server](pebble-backend-configuration), then:

1. Access your Thingsboard server on port 8080, in Thingsboard, click the **Rule Chains** from the left navigation panel, finally click the `+`button then `Import` to import a rule chain:

![](/img/developer/pebble-blockchain/thingsboard-add-rulechain.png)

## Filter the message type

The first node after the input is named "message type CommonData". This node checks the type of the received message, if the type is "Post Telemetry" (i.e. that's the message that includes Pebble' telemetry data) it will be transmitted to the "Script FilterGateway" node, otherwise it will be sent to the logs.

![](/img/developer/pebble-backend/thingsboard-messageType.jpg)

## Swicth device type

When a message enters the "script FilterGateway" node, the "deviceType" will be checked: if it is not "Gateway" (that's because the data entering Thingsboard comes through the Gateway device we configured, which produces data of type "Gateway", which needs to be filtered out), the it will be transmitted to the "rest api call Push Blockchain" node.

![](/img/developer/pebble-backend/thingsboard-deviceType.jpg)

## Push data to the blockchain:

When a message enters the "rest api call Push Blockchain" node, it's can only be a devices' post telemetries message. This node will then use the url set in its configuration to send the message data in a POST message to the api server.

![](/img/developer/pebble-backend/thingsboard-apiCurl.jpg)
