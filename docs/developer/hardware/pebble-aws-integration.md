---
title: Send data to AWS IoT Core
---

# Send data to AWS IoT Core

This document describes the process for connecting Pebble with the AWS IoT Core and validating that the connection has been established successfully. You need to [configure an AWS IoT Policy and a _Thing_](pebble-aws-configuration), make sure you downloaded the AWS cryptographic certificates for that _Thing_ when you created it on AWS, and take note of the AWS IoT device data endpoint (you can find the endpoint in the AWS IoT console on the _Thing_'s details page, it should look similar to `a3qjEXAMPLEffp-ats.iot.us-west-2.amazonaws.com`).

![](/img/developer/pebble-certificates.png)

## Update the Cerdentials in the Firmware

In order for Pebble Tracker to send data to AWS we need to update the firmware to use the certificates we downloaded from AWS for our _Thing_: see the [Develop and Build the Firmware](pebble-build-windows) to learn how to configure your system to build and flash the Pebble Tracker firmware.

Edit the firmware source file `certificate.h` located at 'nrf\applications\asset*tracker\src\certificates.h', and replace the content for the macros 'NRF_CLOUD_CLIENT_PRIVATE_KEY', 'NRF_CLOUD_CLIENT_PUBLIC_CERTIFICATE', and 'NRF_CLOUD_CA_CERTIFICATE' with the AWS \_Thing* private key (i.e., xxx-private.pem.key), public certificate (i.e., xxx-certificate.pem.crt), and the AWS Root certificate (i.e., AmazonRootCA1.pem), respetively.

![](/img/developer/pebble_certificate_string.png)

Make sure that you edited the macros correctly (see the image) adding a new line character `\n`at the end of each line, without modifying, adding or deleting any character of the certificates.

## Configure the firmware to use the AWS certificate

To instruct the firmware to actually transfer the new certificates provided in `certificate.h` into the modem, uncomment the following lines in the Pebble Tracker application file before building the new firmware (i.e., '\nrf\applications\asset_tracker\prj_thingy91_nrf9160ns.conf')

```c
CONFIG_USE_PROVISIONED_CERTIFICATES = n
CONFIG_MODEM_KEY_MGMT = y
```

## Configure the AWS endpoint in Pebble Tracker

There is one last step to make before we can finally build the new firmware: set the endpoint of our AWS _Thing_ where the Pebble Tracker should send the data to. See [how to configure the firmware](pebble-firmware-configure) for instructions on how to start the firmware configuration, locate the `config MQTT_BROKER_HOSTNAME`item and set it to your AWS _Thing_ endpoint and save the configuration.

## Build and flash the modified firmware

Finally, you can [Compile the firmware](pebble-build-windows) and [flash it](pebble-flash) into the Pebble Tracker.

## Validate the connection in AWS IoT

In your AWS IoT console choose **test** in left menu and specify the **Subscription topic** to be `topic/nrf-XXXXXXXXXXXXXXX`, where `XXXXXXXXXXXXXXX` is the unique 15-digit IMEI number of your Pebble Tracker modem (you can find this number printed on a lable included in your Pebble Tracker box, also it's reported on the device serial port log output).

![](/img/developer/pebble_aws_iot_test.png)

If the connection between Pebble Tracker and AWS has been estabilished correctly, after clicking the **Subscribe to topic** button you will see the json messages incoming (by default, one every 30s) into the AWS test console.
