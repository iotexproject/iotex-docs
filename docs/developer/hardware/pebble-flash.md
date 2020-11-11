---
title: Flash the Firmware
---

# Flashing the Pebble Firmware

You will be required to flash a new firmware to the Pebble Tracker if you want to:

- Replace the cryptographic certificates used by Pebble to sign the measurements data before transmission

- Update the modem firmware to switch between NB-IoT and LTE cellular standard (Pebble comes preconfigured for NB-IoT)

- Enable/Disable sensors, configure MQTT or other firmware settings

## Prerequisites

We assume you already cloned the Pebble Tracker Firmware repository, and installed the Nordic nRF Connect tool for your system. If you have not done so yet, follow the instructions for your system below:

### Install nRF Connect & Programmer

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

1. Install [JLINK_ARM for Linux](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)

2. [Download nRF Connect 3.6.0 for Linux](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnect360x8664.AppImage)

3. then, in a terminal window, install the Pebble Tracker Linux driver:

```sh
cd ~/pebble-firmware

dpkg -i pebble-udev_1.0.1-all.deb
```

4. Open a command prompt and clone the Pebble Firmware repository:

```
cd ~
git clone https://github.com/iotexproject/pebble-firmware.git
```

:::
::: tab MacOS

1. Install [JLINK_ARM for macOS](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)

2. Install the [CP210x USB to UART Bridge Virtual COM Port (VCP) driver for macOS](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) to allow the Programmer app to read /dev/tty.SLAB_USBtoUART\* CP2105 serial port device

3. Install [nRF Connect for Desktop v3.6.0 for MacOS](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnect360.dmg)

4. Open a command prompt and clone the Pebble Firmware repository:

```
cd ~
git clone https://github.com/iotexproject/pebble-firmware.git
:::

::::

## Install and launch the Programmer App

You will need to install a custom Programmer app for nrf Connect, that is included in the pebble-firmware repository.

- Locate the following archive in the pebble firmware folder: `pebble-firmware/pc-nrfconnect-programmer-1.4.2.tgz`

- Extract the content of the archive in the `nRF Connect` apps folder:

:::: tabs
::: tab Windows
In Windows, extract in the following path:

`%userprofile%/.nrfconnect-apps/node_modules/`
:::

::: tab Linux
In Linux, extract in the following path:

`~/.nrfconnect-apps/node_modules/`


:::

::: tab MacOS
In MacOS, extract in the following path:

`~/.nrfconnect-apps/node_modules/`

:::

::::

Launch the **nRF Connect** tool, scroll down to the `Programmer` app and open it:

![](/img/developer/pebble-sdk/programmer_fig2.png)

Connect Pebble Tracker to your computer using the USB cable, then in the programmer app window do the following steps:

1. Select the firmware hex file you want to flash (typically `app_signed.hex`) **(1)**

2. Select your device from the devices combo box in the programmer window **(2)**

3. Put Pebble Tracker in **MCUboot mode** ([see next paragraph](#put-pebble-tracker-in-mcuboot-mode)) and click the **Write** button **(3)**

![](/img/developer/pebble-sdk/programmer_fig3.png)

The flashing process will last about 60 seconds: the red led on the boards will flash quickly during the whole process. Eventually, Pebble Tracker will reboot automatically and the new firmware will be loaded.

## Put Pebble Tracker in **MCUboot mode**

You can flash a new firmware to a Pebble Tracker through the USB port by putting the board in _MCUboot mode_: in this mode Pebble Tracker will start the **MCUboot** secure bootloader instead of the main application firmware, that will allow to receive a new firmware through the USB cable.

Follow the instruction below to enable MCUboot on Pebble Tracker (please refer to the [assembling](pebble-power-on.md#board-layout) guide to locate the buttons on the board):

1. Press and keep pressed the [Reset Button](pebble-power-on.md#board-layout) on Pebble Tracker
2. Press and release the [Power Button](pebble-power-on.md#board-layout) on the Pebble Tracker
3. The blue led will turn on => Keep pressing the Reset Button until the led turns off (~5s)
5. The MCUBoot mode is now enabled: release the Reset button

the device will stay in MCUboot mode for about 10 seconds, if during this period the firmware flashing process does not start Pebble will reboot automatically in normal operation mode.
```
