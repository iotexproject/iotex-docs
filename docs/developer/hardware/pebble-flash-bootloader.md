---
title: The Bootloader Firmware
---

# Flashing the Bootloader Firmware

The bootloader firmware is the software that runs before any other when the Pebble device is powered, and it is responsible for low level operations like booting into the application software, entering the DFU mode, etc...

## Prerequisites

The bootloader firmware cannot update itself through the USB interface, therefore you will need an appropriate hardware programmer to update the bootloader, like the [J-Link EDU Mini](https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/). Additionally, you need Segger Embedded Studio (Nordic Edition) to update the bootloader using the J-Link programmer.

## Open the Firmware project in SES

Follow [the firmware build document](/developer/hardware/pebble-build-windows.html#open-and-configure-the-embedded-studio-ide) to install the Nordic SDK, and to install and configure Segger Embedded Studio.

## Connect the J-Link programmer to Pebble

Pebble comes with a 10-pins debugger connector that can be used to plug in the J-Link programmer:

![](/img/developer/pebble-jlink-port.png)

1. Power Pebble through the USB port
1. Connect the J-Link programmer to Pebble J-Link connector
1. Connect the J-Link programmer USB to your PC

## Download the firmware

1. In [Segger Embedded Studio](/developer/hardware/pebble-build-windows.html#open-and-configure-the-embedded-studio-ide) open the Pebble Firmware project.
2. From the `Target` menu, select `Download zephyr/merged.hex`: this will download both the application and the bootloader firmware at the same time:

![](/img/developer/pebble-bootloader-download.png)

## Troubleshooting

From the `Target` menu, you can select `Verify zephyr/merged.hex` to compare the Pebble current bootloader+application firmware versus the current merged.hex file in the Pebble project build folder.

In case you receive the following error during the download:

![](/img/developer/pebble-bootloader-download-error.png)

1. Make sure Pebble is powered via USB
2. Make sure the J-Link connector is correctly plugged on both the J-Link programmer and Pebble connector
3. Make sure the orientation of the J-Link connector is correct (the cable pin-1 is aligned with the connector pin-1) on both the J-Link programmer and the Pebble connectors
