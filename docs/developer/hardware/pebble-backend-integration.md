---
title: Integrate with IoTeX Backend
---

# Integrate Pebble Tracker with IoTeX Backend

The IoTeX Backend Service is a suite of free tools that allow to store, visualize and manipulate data from IoT devices. It's made of three different components:

1. [**MinIO**](https://min.io): a Amazon S3 compatible cloud storage service that enables to build cloud-native data infrastructure for machine learning, analytics and application data workloads.

2. [**hmq**](https://github.com/fhmq/hmq): a free and High Performance MQTT Broker

3. [**Thingsboard**](https://thingsboard.io): an Open-source IoT Platform for Device management, data collection, processing and visualization for your IoT solution

In this document you will learn how to send the data from Pebble Tracker to the IoTeX Backend Service.

## Prerequisites

1. Make sure you have a Pebble Tracker development environment configured on your machine: see the **Develop and Build the Firmware** documentation [[windows](pebble-build-windows) | [Linux](pebble-build-linux)]

2. Make sure you can acess a Pebble Backend service: you can deploy your own Backend server by following [the Pebble Backend Configuration](pebble-backend-configuration) guide, or you can use the IoTeX public backend available at [http://trypebble.io](http://trypebble.io)

::: tip
If you don't have access to a cloud server, you can still deploy the backend locally in your network, and use tools like [ngrok](https://ngrok.com) or [no-ip](https://www.noip.com) to make your local server publicly accessible.
:::

::: danger
The IoTeX Public Backend is only intended as a support tool for development, not for production uses: keep in mind that any data sent to [http://trypebble.io](http://trypebble.io) is publicly accessible.
:::

## Configure the Firmware to use the IoTeX backend

In order to have Pebble Tracker data sent to the IoTeX Pebble Backend you only need to configure the `MQTT_BROKER_HOSTNAME` setting in the firmware configuration with the ip address or the url of the pebble backend you want to use (set it to `trypebble.io` if you want to use the IoTeX Public Backend).

1. Follow the [Pebble Tracker Firmware Configuration][pebble-firmware-configure] guide to configure the firmware, find the `MQTT_BROKER_HOSTNAME` setting and configure it with the backend url. Also find the `MQTT_BROKER_PORT` setting and make sure it's configured with the hmq port - which is 1884 in the default backedn installation)

2. Save the firmware configuration and build the firmware [[Windows](pebble-build-windows.md#build-pebble-tracker-application-firmware) | [Linux](pebble-build-linux.md#compile-project-with-command-line)]

3. [Flash the firmware](pebble-flash) in your Pebble Tracker

## Visualize Pebble Tracker data

Once your device is restarted and connected to the Internet, it will immediately start sending data to the IoTeX Backend: if you deployed your own Backend server, please make sure that it's accessibly from a public ip address, and that the ports 1884 and 8080 are open for the MQTT broker and Thingsboard services respectively.

Access the backend Thingsboard at [trypebble.io](http://trypebble.io) (or your custom beckend url on port 8080) and use the default username and password: **Username**: `tenant@thingsboard.org`
**Password**: `tenant`.

![](/img/developer/pebble-backend/thingsboard-login.png)

In the navigation panle, click on **devices**: you should see your Pebble Tracker among the listed devices, with label `nrf-...` followed by the IMEI number:

![](/img/developer/pebble-backend/thingsboard-device.png)

In the navigation panle, click on **dashboards** and select the Pebble Tracked dashboard to see the incoming data:

![](/img/developer/pebble-backend/thingsboard-dashboard.png)
