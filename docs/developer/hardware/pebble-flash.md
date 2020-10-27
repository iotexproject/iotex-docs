---
title: Flash a new Firmware
---

# Flashing the Pebble Firmware

You will be required to flash a new firmware to the Pebble Tracker if you want to:

- Replace the cryptographic certificates used by Pebble to sign the measurements data object before transmission

- Update the modem firmware to switch between NB-IoT and LTE cellular standard (Pebble comes preconfigured for NB-IoT)

- Modify the firmware to customize the default behavior

:::warning
You will want to update the Pebble Tracker firmware at least once before putting it into production, to set your own cryptographic certificates.
:::

## Prerequisites

We assume you already cloned the Pebble Tracker Firmware repository, and installed the Nordic nRF Connect tool for your system. If you have not done so yet, follow the instructions for your system below:

:::: tabs

::: tab Windows
[download nRF Connect 3.6.0 for Windows](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnectsetup360ia32.exe)

Open a command prompt and clone pebble Firmware repository:

```
cd %userprofile%
git clone https://github.com/iotexproject/pebble-firmware.git
```

:::

::: tab Linux
[download nRF Connect 3.6.0 for Linux](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnect360x8664.AppImage)

Open a command prompt and clone the Pebble Firmware repository:

```
cd ~
git clone https://github.com/iotexproject/pebble-firmware.git
```

:::

::::

## Install and launch the Programmer App

You will need to install a custom Programmer app for nrf Connect.

- Locate the following archive in the pebble firmware folder: `pebble-firmware/iotex-pc-nrfconnect-programmer/Linux/pc-nrfconnect-programmer-1.4.2.tgz`

- Extract the content in the nRF Connect apps folder for your system:

:::: tabs
::: tab Windows
in Windows, extract the archive into the following directory:

`%userprofile%/.nrfconnect-apps/node_modules/`

and rename the extracted directory to `pc-nrfconnect-programmer`
:::

::: tab Linux
in Linux, extract the archive into the following directory:

`~/.nrfconnect-apps/node_modules/`

and rename the extracted directory to `pc-nrfconnect-programmer`.

In a terminal window, install the Pebble Tracker driver:

```sh
cd ~/pebble-firmware/iotex-pc-nrfconnect-programmer/Linux/

dpkg -i pebble-udev_1.0.1-all.deb

:::

::::

Launch the **nRF Connect** tool, scroll down to the programmer app and open it:

![](/img/developer/pebble-sdk/programmer_fig2.png)

In the programmer app window:

- Select the firmware hex file you want to flash **(1)** and put the Pebble Tracker in **recovery mode** (see next paragraph)

- Connect the Pebble Tracker to your computer with the USB cable and select it from the devices combo box in the programmer window **(2)**

- Click the **Write** button **(3)**

![](/img/developer/pebble-sdk/programmer_fig3.png)


## How to put the Pebble Tracker in **recovery mode**
You need to put the Pebble Tracker in the recovery mode to be able to flash the new firmware:

1. If connected, disconnect the USB cable
2. Disconnect the Battery
3. Press and keep pressed the **Reset Button** on Pebble Tracker
4. Re-connect the battery (the Blue led will turn on)
5. Kepp the reset button pressed until the blue led turns off (~ 5s)
6. Connect the Pebble tracker to your computer for flashing using the USB port

::: tip
Make sure you have already started the programmer app and selected the firmware file so that you will be ready to just select the device and click the **write** button in the programmer app before the Pebble Tracker turns back in normal mode.
:::
```
