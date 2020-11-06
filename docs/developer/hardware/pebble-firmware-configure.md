---
title: Configure the firmware
---

## Configure the firmware

If required, firmware parameters (e.g. MQTT parameters) can be customized before building a new image. You can configure the firmware both from inside Embedded Studio IDE or from command line.

Most common settings you will want to configure are the following:

**Enable/Disable GPS**<br>
`Asset Tracker > GPS > GPS Device`<br>

**MQTT Broker url**<br>
`Asset Tracker > IoTeX Hosted MQTT broker hostname`<br>

**Network mode (NB-IoT/LTE-M)**<br>
`Zephyr Kernel > Modules > Nordic nRF Connect > Libraries > nRF91 LTE Link control library > Select network mode`

### Configure the firmware in Embedded Studio

From the Embedded Studio, before starting the build process, choose **Configure nRF Connect SDK Project** in the **Project** menu, and choose **menuconfig** in the pop-up window.

You can use the search box to quickly locate te parameters you want to customize, e.g. and search "mqtt" to customize MQTT specific parameters:

![](/img/developer/pebble-sdk/firmware_fig8.png)

### Configure the firmware from command line

From command line, you can just run the following command to start the configuration menu:

:::: tabs
::: tab Windows

```sh
# Move into the firmware app folder
cd %userprofile%/ncs/v1.3.0/nrf/applications/asset_tracker
# Optionally, delete the old build folder to start from default configuration
rmdir build /S /Q
# Start the configuration tool
west build -t menuconfig -b thingy91_nrf9160ns
```

:::
::: tab Linux

```sh
cd ~
# Make sure to remove any previously created build directory
rmdir -rf build
# Start the command line configuration tool
west build -t menuconfig -b thingy91_nrf9160ns
```

:::
::::
this will start the configuration program from command line, allowing you to interactively set all the build configuration values for the firmware.
