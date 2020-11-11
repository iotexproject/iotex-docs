---
title: Send data to your backend server
---

# Connect to your Backend Service

## Prerequisites

1. Make sure you have the Pebble Firmware development environment configured on your machine: see the **Develop and Build the Firmware** documentation for [windows](pebble-build-windows) or [Linux/MacOs](pebble-build-linux).

2. Make sure you can acess your Pebble Backend service **on a public ip address**: you can deploy your own Backend server by following [the Pebble Backend Configuration](pebble-backend-configuration) guide.

::: tip
If you don't have access to a cloud server, you can still deploy the backend on a server in your local network, and use tools like [ngrok](https://ngrok.com) or [no-ip](https://www.noip.com) to make it publicly accessible.
:::

## Configure the Firmware to connect to backend

In order to have Pebble data sent to the IoTeX Pebble Backend you only need to configure the `MQTT_BROKER_HOSTNAME` setting in the firmware configuration with the ip address or the url of the pebble backend you want to use (set it to `trypebble.io` if you want to use the IoTeX Public Backend, this is the factory default).

1. Follow the [Pebble Firmware Configuration][pebble-firmware-configure] guide to start the firmware configuration tool, find the `MQTT_BROKER_HOSTNAME` setting and configure it with your backend url. Also find the `MQTT_BROKER_PORT` setting and make sure it's configured with the correct hmq port - 1884 is the default)

2. Save the configuration and build the firmware (see instructions for [Windows](pebble-build-windows.md#build-pebble-tracker-application-firmware) or [Linux/MacOS](pebble-build-linux.md#compile-project-with-command-line))

3. [Flash the firmware](pebble-flash) in your Pebble

## Visualize the data

Once your device is restarted and connected to the Internet, it will immediately start sending data to the IoTeX Backend: if you deployed your own Backend server, please make sure that it's accessible from a public ip address, and that the ports 1884 and 8080 are open for the MQTT broker and Thingsboard services respectively.

Access the backend Thingsboard at [trypebble.io](http://trypebble.io) (or your custom beckend url on port 8080) and use the default username and password: **Username**: `tenant@thingsboard.org`
**Password**: `tenant`.

![](/img/developer/pebble-backend/thingsboard-login.png)

In the navigation panle, click on **devices**: you should see your Pebble among the listed devices, with label `nrf-...` followed by the IMEI number:

![](/img/developer/pebble-backend/thingsboard-device.png)

In the navigation panle, click on **dashboards** and select the Pebble Tracked dashboard to see the incoming data:

![](/img/developer/pebble-backend/thingsboard-dashboard.png)
