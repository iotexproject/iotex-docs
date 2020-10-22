---
title: Flash a new firmware
---

# Flash a new Firmware

Flashing a new firmware for Pebble Tracker can be required for the following reasons:

- Updating cryptographic certificates used by Pebble to sign the data before sending them
- Updating the modem firmware to be compliant with LTE cellular band (Pebble comes preconfigured for NB-IoT)
- Modifying the default Pebble firmware to customize the default behavior

:::warning
You will always be required to flash the firmware at least once to update the cryptographic certificates with your own. Even if you received a Pebble Tracker that is preconfigured with default certificates for plug&play operation, you will still want to update it with your own certificates before installing the tracker in production.
:::

## Linux

[[toc]]

### Install Dependencies

If required, update your system:

```sh
sudo apt-get update
sudo apt-get upgrade
```

Install the required tools

```sh
sudo apt-get install --no-install-recommends git cmake ninja-build gperf \
ccache dfu-util device-tree-compiler wget \
python3-dev python3-pip python3-setuptools python3-tk python3-wheel xz-utils file \
make gcc gcc-multilib g++-multilib libsdl2-dev

```

Check your cmake version number and make sure it's higher than 3.13.1

```sh
cmake --version
```

if it's lower 3.13.1 the install the latest one:

```sh
cd ~
wget https://github.com/Kitware/CMake/releases/download/v3.15.3/cmake-3.15.3-Linux-x86_64.sh
chmod +x cmake-3.15.3-Linux-x86_64.sh
sudo ./cmake-3.15.3-Linux-x86_64.sh --skip-license --prefix=/usr/local
hash -r

```

Check Device Tree Compiler (DTC) version number and make sure it's higher than 1.4.6

```sh
dtc --version
```

if it's lower than 1.4.6 the intall the latest one

```sh
wget https://launchpadlibrarian.net/384086505/device-tree-compiler_1.4.7-1_amd64.deb
sudo dpkg -i device-tree-compiler_1.4.7-1_amd64.deb

```

Install Python with version number higher than 3.6

```sh
sudo apt-get install python3.6
```

### Install Compiler Toolchain

One can follow the steps below to install the compiler toolchain.

Download the ARM embedded compiler toolchain and set environment variables

```sh
cd ~
wget https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-x86_64-linux.tar.bz2
tar -jxvf gcc-arm-none-eabi-9-2020-q2-update-x86_64-linux.tar.bz2
mv gcc-arm-none-eabi-9-2020-q2-update-x86_64 gnuarmemb
echo 'export ZEPHYR_TOOLCHAIN_VARIANT=gnuarmemb' >> ~/.zephyrrc
echo 'export GNUARMEMB_TOOLCHAIN_PATH="~/gnuarmemb"' >> ~/.zephyrrc
```

Clone the Pebble-Firmware IoTeX repository

```sh
git clone https://github.com/iotexproject/pebble-firmware.git
```

Clone the Zephyr SDK repository

```sh
cd pebble-firmware/2020poc
git clone -b v2.3.0-rc1-ncs1 https://github.com/nrfconnect/sdk-zephyr zephyr
```

Create a manifest-rev branch for West

```sh
cd zephyr
git branch manifest-rev
```

Install python dependencies

```sh
cd ~/pebble-firmware/2020poc
pip install -r zephyr/scripts/requirements.txt
pip install -r nrf/scripts/requirements.txt
pip install -r bootloader/mcuboot/scripts/requirements.txt
```

### Configure Project with Command Line

The project can be configured with the following command:

```sh
cd ~/pebble-firmware/2020poc
west build -t menuconfig
```

### Compile Project with Command Line

The project can be compiled with the following commands:

```sh
cd ~/pebble-firmware/2020poc
source zephyr/zephyr-env.sh
cd nrf/applications/asset_tracker
west build -b thingy91_nrf9160ns
```

After the project is compiled successfully, the Pebble firmware is available at ~/pebble-firmware/2020poc/nrf/applications/asset_tracker/build/zephyr/merged.hex.

### Flashing the Firmware

#### Using SEGGER JTAG programmer

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

#### Flash using serial port

Flashing the firmware using the serial port is currently not supported in Linux and must be performed in Windows.

## Windows

### Flash the firmware

#### Flash using serial port
