---
title: Development Modes
---

# Pebble Development Modes

Pebble applications can be developed in two modes, namely _devloper_ and _production_ modes, depending on the choice of the backend architecture.

## Developer Mode

The developer mode facilitates development of Pebble applications on a single machine using the dockerized applications listed below. In such mode, MQTT communications between a Pebble and the hmq are **not secure**:

- [hmq](https://github.com/fhmq/hmq): A free and high performance MQTT broker
- [minIO](https://min.io/): A kubernetes native, high performance object storage
- [ThingsBoard](https://thingsboard.io/): An open-source IoT platform

![](/img/developer/pebble-dev-modes/pebble_devmod_fig1.png)

See [Setup in Developer Mode](/developer/hardware/pebble-backend-configuration) for instructions on how to configure the backend service

## Production Mode

In the production mode, the backend is built using the following AWS services and open-source software.

- [AWS IoT Core](https://aws.amazon.com/iot-core/): A managed cloud service that lets connected devices easily and securely interact with cloud applications and other devices
- [AWS S3](https://aws.amazon.com/s3/): An object storage service that offers industry-leading scalability, data availability, security, and performance
- [ThingsBoard](https://thingsboard.io/): An open-source IoT platform

![](/img/developer/pebble-dev-modes/pebble_devmod_fig2.png)

The production mode enables a developer to connect and manage a large number of Pebble devices. In such mode, MQTT communications between Pebble devices and AWS IoT Core are protected by the Transport Layer Security (TLS) protocol.

See [Setup in Production Mode](/developer/hardware/pebble-aws-configuration) for instructions on how to configure AWS IoT to connect with Pebble devices.
