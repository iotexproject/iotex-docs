---
title: Configure the firmware
---

## Configure the firmware

If required, firmware parameters (e.g. MQTT parameters) can be customized before building the software.
You can configure the firmware both from inside Embedded Studio IDE or from command line.

### Configure the firmware in Embedded Studio

From the Embedded Studio, before starting the build process, choose **Configure nRF Connect SDK Project** in the **Project** menu, and choose **menuconfig** in the pop-up window.

You can use the search box to quickly locate te parameters you want to customize, e.g. and search "mqtt" to customize MQTT specific parameters:

![](/img/developer/pebble-sdk/firmware_fig8.png)

### Configure the firmware from command line

From command line, you can just run the following commands in the Firmware application folder

:::: tabs
::: tab Windows

```sh
cd %userprofile%/pebble-firmware/nrf/applications/asset_tracker
# Make sure to remove any previously created build directory
rmdir /s /q build
# Start the command line configuration tool
west build -t menuconfig -b thingy91_nrf9160ns
```

:::
::: tab Linux

```sh
cd ~/pebble-firmware/nrf/applications/asset_tracker
# Make sure to remove any previously created build directory
rmdir -rf build
# Start the command line configuration tool
west build -t menuconfig -b thingy91_nrf9160ns
```

:::
::::
this will start the configuration program from command line, allowing you to interactively set all the build configuration values for the firmware.
