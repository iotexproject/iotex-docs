---
title: Connect with AWS IoT Core
---

# Connect Pebble with AWS IoT Core

This document describes the process for connecting Pebble with the AWS IoT Core and validating that the connection has been established successfully.

## Download Certificates and Keys for Pebble

For establishing a secure MQTT connection (i.e., MQTT over TLS) between Pebble and AWS IoT Core, one needs to follow the steps in Section "Setup MQTT + S3" of the document "Setup AWS Pipeline for Pebble" for creating a policy (Step 1), creating AWS IoT Things (Step 2), and creating and activating certificates (Step 3). After these steps, you need to download the following certificates and keys. Note that you can only download those credentials once.

![](/img/developer/pebble_certificates.png)

## Flash the Cerdentials

Copy the contents of the device and AWS Root certificates as well as private key to the 'certificate.h' file located at 'nrf\applications\asset_tracker\src\certificates.h', where the macros 'NRF_CLOUD_CLIENT_PRIVATE_KEY', 'NRF_CLOUD_CLIENT_PUBLIC_CERTIFICATE', and 'NRF_CLOUD_CA_CERTIFICATE' specify the device private key (i.e., xxx-private.pem.key), the device certificate (i.e., xxx-certificate.pem.crt), and the AWS Root certificate (i.e., AmazonRootCA1.pem), respetively.

![](/img/developer/pebble_certificate_string.png)

Note that ’\n’ should be added at the end of each line (see the above figure).

Add the following definition to the configuration file (i.e., '\nrf\applications\asset_tracker\prj_thingy91_nrf9160ns.conf') for writing the certificates into the modem:

```c
CONFIG_USE_PROVISIONED_CERTIFICATES = n
CONFIG_MODEM_KEY_MGMT = y
```

[Compile the Pebble firmware and flash](/developer/hardware/pebble-flash) it into the device with either JTAG or serial port (mcuboot).

## Validate the connection in AWS IoT

In your AWS IoT console choose 'test' in left menu and specify the 'Subscription topic' to be 'topic/nrf-xxx', where 'xxx' is a unique 15-digit IMEI number of the modem in Pebble (This number has been printed out and can be found inside Pebble box). After clicking the 'Subscribe to topic' button, one is able to see the uploaded data from Pebble provided that the credentials have been written into the modem and the connection has been established successfully.
![](/img/developer/pebble_aws_iot_test.png)
