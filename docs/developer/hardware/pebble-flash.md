---
title: Flash a new Firmware
---

# Flashing the Pebble Firmware

You will be required to flash a new firmware to the Pebble Tracker if you want to:

- Replace the cryptographic certificates used by Pebble to sign the measurements data object before transmission

- Update the modem firmware to switch between NB-IoT and LTE cellular standard (Pebble comes preconfigured for NB-IoT)

- Modify the firmware to customize the default behavior

:::warning
If your application requires signed data messages, you will want to update the Pebble Tracker firmware at least once to set your own cryptographic certificates before putting it into production.
:::

## Prerequisites

We assume you already cloned the Pebble Tracker Firmware repository, and installed the Nordic nRF Connect tool for your system. If you have not done so yet, follow the instructions for your system below:

:::: tabs

::: tab Windows

1. [Download and install nRF Connect 3.6.0 for Windows](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnectsetup360ia32.exe)

2. Open a command prompt and clone pebble Firmware repository:

```
cd %userprofile%
git clone https://github.com/iotexproject/pebble-firmware.git
```

:::

::: tab Linux

1. [Download nRF Connect 3.6.0 for Linux](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnect360x8664.AppImage)

2. Open a command prompt and clone the Pebble Firmware repository:

```
cd ~
git clone https://github.com/iotexproject/pebble-firmware.git
```

:::

::::

## Install and launch the Programmer App

You will need to install a custom Programmer app for nrf Connect, that is included in the pebble-firmware repository.

- Locate the following archive in the pebble firmware folder: `pebble-firmware/pc-nrfconnect-programmer-1.4.2.tgz`

- Extract the content in the following `nRF Connect` apps folder:

:::: tabs
::: tab Windows
`%userprofile%/.nrfconnect-apps/node_modules/`
:::

::: tab Linux
`~/.nrfconnect-apps/node_modules/`

For Linux only, in a terminal window, install the Pebble Tracker driver:

```sh
cd ~/pebble-firmware

dpkg -i pebble-udev_1.0.1-all.deb
```

:::

::::

Launch the **nRF Connect** tool, scroll down to the `Programmer-IoTeX` app and open it:

![](/img/developer/pebble-sdk/programmer_fig2.png)

In the programmer app window:

- Select the firmware hex file you want to flash **(1)**

- Put the Pebble Tracker in **MCUboot mode** (see next paragraph)

- Connect the Pebble Tracker to your computer with the USB cable and select it from the devices combo box in the programmer window **(2)**

- Click the **Write** button **(3)**

![](/img/developer/pebble-sdk/programmer_fig3.png)

The flashing process will last about 60 seconds, the led on Pebble Tracker will fast-blink red all the time. When the process is complete the Pebble Tracker will reboot automatically and the new firmware will be loaded.

## Put the Pebble Tracker in **MCUboot mode**

You can flash a new firmware to a Pebble Tracker through the USB port by putting the in _MCUboot mode_: in this mode Pebble Tracker will start the **MCUboot** secure bootloader instead of the main application, that will allow to receive and flash the new firmware through the USB cable.

To enable MCUboot mode:

- disconnect the USB cable from Pebble Tracker
- Press and keep pressed the Power Switch on Pebble Tracker
- Press the Reset button on the Pebble Tracker
- The RGB led will turn off
- Release the Power and Reset buttons

the device will stay in MCUboot mode for about 10 seconds, if in this period the firmware flashing process does not start it will reboot automatically in normal operation mode.
