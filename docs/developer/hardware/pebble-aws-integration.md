---
title: Send data to AWS IoT Core
---

# Send data to AWS IoT Core

This document describes the process for connecting Pebble with the AWS IoT Core and validating that the connection has been established successfully. You need to [configure an AWS IoT Policy and a _Thing_](pebble-aws-configuration), make sure you downloaded the AWS cryptographic certificates for that _Thing_ when you created it on AWS, and take note of the AWS IoT device data endpoint (you can find the endpoint in the AWS IoT console on the _Thing_'s details page, it should look similar to `a3qjEXAMPLEffp-ats.iot.us-west-2.amazonaws.com`).

![](/img/developer/pebble-certificates.png)

## Update the Cerdentials in the Firmware

In order for Pebble to send data to AWS we need to update the firmware to use the certificates we downloaded from AWS for our _Thing_: see the [Develop and Build the Firmware](pebble-build-windows) to learn how to configure your system to build and flash the Pebble firmware.

Edit the firmware source file `certificate.h` located at 'nrf\applications\asset*tracker\src\certificates.h', and replace the content for the macros 'NRF_CLOUD_CLIENT_PRIVATE_KEY', 'NRF_CLOUD_CLIENT_PUBLIC_CERTIFICATE', and 'NRF_CLOUD_CA_CERTIFICATE' with the AWS \_Thing* private key (i.e., xxx-private.pem.key), public certificate (i.e., xxx-certificate.pem.crt), and the AWS Root certificate (i.e., AmazonRootCA1.pem), respetively.

![](/img/developer/pebble_certificate_string.png)

Make sure that you edited the macros correctly (see the image) adding a new line character `\n`at the end of each line, without modifying, adding or deleting any character of the certificates.

## Configure the firmware to use the AWS certificate

To instruct the firmware to actually transfer the new certificates provided in `certificate.h` into the modem, in the firmware configuration locate the `Asset Tracker -> Use provisioned certificates` item and **uncheck** it, then locate the `Zephyr Kernel -> Modules -> Nordin nRF Connect -> Libraries -> nRF9160 modem key management library` and **enable it**

Check out [how to configure the firmware](pebble-firmware-configure) for instructions on how to start the firmware configuration. You can use the search functionality to quickly locate the setting you are loking for.

## Configure the AWS endpoint in Pebble

There is one last step to make before we can finally build the new firmware: set the endpoint of our AWS _Thing_ where the Pebble should send the data to. In the firmware configuration locate the `Asset Tracker -> MQTT_BROKER_HOSTNAME` item and set it to your AWS _Thing_ endpoint and save the configuration, then locate the `Asset Tracker -> MQTT_BROKER_PORT` and set it to `8883`.

Check out [how to configure the firmware](pebble-firmware-configure) for instructions on how to start the firmware configuration

## Build and flash the modified firmware

Finally, you can [Compile the firmware](pebble-build-windows) and [flash it](pebble-flash) into the Pebble.

## Validate the connection in AWS IoT

In your AWS IoT console choose **test** in left menu and specify the **Subscription topic** to be `device/nrf-XXXXXXXXXXXXXXX/data`, where `XXXXXXXXXXXXXXX` is the unique 15-digit IMEI number of your Pebble modem (you can find this number printed on a lable included in your Pebble box, also it's reported on the device serial port log output).

![](/img/developer/pebble_aws_iot_test.png)

If the connection between Pebble and AWS has been estabilished correctly, after clicking the **Subscribe to topic** button you will see the json messages incoming (by default, one every 30s) into the AWS test console.
