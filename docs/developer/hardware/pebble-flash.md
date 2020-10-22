---
title: Flash a new Firmware
---

# Flashing the Pebble Firmware

Flashing a new firmware for Pebble Tracker can be required for the following reasons:

- Updating cryptographic certificates used by Pebble to sign the data before sending them
- Updating the modem firmware to be compliant with LTE cellular band (Pebble comes preconfigured for NB-IoT)
- Modifying the default Pebble firmware to customize the default behavior

:::warning
You will always be required to flash the firmware at least once to update the cryptographic certificates with your own. Even if you received a Pebble Tracker that is preconfigured with default certificates for plug&play operation, you will still want to update it with your own certificates before installing the tracker in production.
:::

[[toc]]

## Linux

### SEGGER JTAG programmer

Download J-Link driver at
https://www.segger.com/downloads/jlink/#SystemView and install it

Connect J-Link with Pebble using the Data port on Pebble Tracker

Download the flashing tool (i.e., nRFCommandLineTools1090Linuxamd64.tar.gz) from https://www.nordicsemi.com/Software-and-tools/Development-Tools/nRF-Command-Line-Tools/Download#infotabs and unzip it

Install J-Link and nrfjprog

```sh
sudo dpkg -i JLink_Linux_V680a_x86_64.deb
sudo dpkg -i nRF-Command-Line-Tools_10_9_0_Linux-amd64.deb
```

Flash firmware with

```sh
cd ncs/nrf/applications/asset_tracker
west flash
```

### Serial port

Flashing the firmware using the serial port is currently not supported in Linux and must be performed in Windows.

## Windows

### SEGGER JTAG Programmer

#### Serial port
