---
title: The Application Firmware
---

# Flashing the Application Firmware

The application firmware is the software that manages the high level behavior of Pebble: sensors data colloction, MQTT client operations, blockchain communication, etc...

## Prerequisites

We assume you already cloned the Pebble Firmware repository, and installed the Nordic nRF Connect tool for your system. If you have not done so yet, follow the instructions for your system below:

##### Install nRF Connect & Programmer

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

3. then, in a terminal window, install the Pebble Linux driver:

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
```

:::

::::

## Install and launch the Programmer App

You will need to install a custom Programmer app for nrf Connect, that is included in the pebble-firmware repository.

- Locate the following archive in the pebble firmware folder: `pebble-firmware/pc-nrfconnect-programmer-1.4.2.tgz`

- Extract the content of the archive in the `nRF Connect` apps folder:

:::: tabs
::: tab Windows
In Windows, extract in the following path:

`%userprofile%/.nrfconnect-apps/local/`
:::

::: tab Linux
In Linux, extract in the following path:

`~/.nrfconnect-apps/local/`

:::

::: tab MacOS
In MacOS, extract in the following path:

`~/.nrfconnect-apps/local/`

:::

::::

Launch the **nRF Connect** tool, scroll down to the `Programmer` app and open it:

![](/img/developer/pebble-sdk/programmer_fig2.png)

Connect Pebble to your computer using the USB cable, and follow the instructions in following two sections to flash the **Pebble Application Firmware** or the **Pebble Modem Firmware** respectively.

### Flash the Pebble Application Firmware<span id="pebble_flash_app">.</span>

1. Select the firmware hex file you want to flash (if you built a new firmware, find the `zephyr/app_signed.hex` file in the build folder) **(1)**

2. Select your device from the devices combo box in the programmer window **(2)**

3. Put Pebble in **MCUboot mode** ([see the section below](#put-pebble-tracker-in-mcuboot-mode)) and click the **Write** button **(3)**

![](/img/developer/pebble-sdk/programmer_fig3.png)

The flashing process will last about 60 seconds: the red led on the boards will blink during the whole process. Eventually, Pebble will reboot automatically and the new firmware will be loaded.

### Flash the Pebble Modem Firmware

::: warning
Please notice that updating the modem firmware will also **erase** the Pebble Application Firmware: you will need to [flash the application firmware again](#pebble_flash_app).
:::

1. Download the [nRF9160 modem firmware binary](https://www.nordicsemi.com/Products/Low-power-cellular-IoT/nRF9160/Download) from Nordic: please notice that the officially supported version is [v1.2.0](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Dev-Kits/nRF9160-DK/nRF9160-modem-FW/mfwnrf9160120.zip])

2. Select your device from the devices combo box in the programmer window ( make sure your device is connected with the IoTeX programmer properly, as indicated by the green solid dot nect to the combobox)

3. Enter the **MCUboot mode** for your Pebble ([see the section below](#put-pebble-tracker-in-mcuboot-mode)) and click the **Update Modem** button

4. Select the modem firmware binary file `mfw_nrf9160_1.2.0.zip` you just downloaded and click **Open** to start the modem update process.

![](/img/developer/pebble-sdk/programmer_fig4.png)

The flashing process will last about 2 minutes: the red led on the board will blink during the whole process.

## Put Pebble in **MCUboot mode**

You can flash a new firmware to a Pebble through the USB port by putting the board in _MCUboot mode_: in this mode Pebble will start the **MCUboot** secure bootloader instead of the main application firmware, that will allow to receive a new firmware through the USB cable.

Follow the instruction below to enable MCUboot on Pebble (please refer to the [assembling](pebble-power-on.md#board-layout) guide to locate the buttons on the board):

1. On Pebble, press and **keep pressed** the [Power Button](pebble-power-on.md#board-layout)
2. While the Power Button is pressed, **press and release** the [Reset Button](pebble-power-on.md#board-layout)
3. The **blue led** will turn on: keep the Power Button pressed for ~5s until the blue led goes off and it turns int steady red.

The MCUBoot mode is now enabled and you can release the Power button:

![](/img/developer/pebble-mcuboot.jpg)

the device will stay in MCUboot mode for about 20 seconds, if during this period the firmware flashing process does not start Pebble will reboot automatically in normal operation mode.
