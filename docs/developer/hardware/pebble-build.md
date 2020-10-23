---
title: Develop and Build the Firmware
---

# Develop and Build the Pebble Firmware

[[toc]]

## Linux

### Install Dependencies

If required, update your system:

```sh
sudo apt-get update
sudo apt-get upgrade
```

Install the required tools

```sh
sudo apt-get install --no-install-recommends git cmake ninja-build gperf ccache dfu-util device-tree-compiler wget python3-dev python3-pip python3-setuptools python3-tk python3-wheel xz-utils file make gcc gcc-multilib g++-multilib libsdl2-dev
```

Check your cmake version number and make sure it's higher than 3.13.1

```sh
cmake --version
```

:::details Optional: upgrade cmake
if cmake version is lower 3.13.1 the install the latest one:

```sh
cd ~

wget https://github.com/Kitware/CMake/releases/download/v3.15.3/cmake-3.15.3-Linux-x86_64.sh
chmod +x cmake-3.15.3-Linux-x86_64.sh
sudo ./cmake-3.15.3-Linux-x86_64.sh --skip-license --prefix=/usr/local

hash -r

```

:::

Check Device Tree Compiler (DTC) version number and make sure it's higher than 1.4.6

```sh
dtc --version
```

:::details Optional: upgrade dtc
if dtc version is lower than 1.4.6 the intall the latest one

```sh
wget https://launchpadlibrarian.net/384086505/device-tree-compiler_1.4.7-1_amd64.deb
sudo dpkg -i device-tree-compiler_1.4.7-1_amd64.deb
```

:::

Make sure Python version number is higher than 3.6

```sh
python3 --version
```

### Install Compiler Toolchain

One can follow the steps below to install the compiler toolchain.

Download the ARM embedded compiler toolchain and set environment variables

```sh
cd ~
# Download the package
wget https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-x86_64-linux.tar.bz2
# Extract
tar -jxvf gcc-arm-none-eabi-9-2020-q2-update-x86_64-linux.tar.bz2
# Rename the directory to ~\gnuarmemb
mv gcc-arm-none-eabi-9-2020-q2-update gnuarmemb

# Create ~/.zephyrrc for easy env variables management
echo 'export ZEPHYR_TOOLCHAIN_VARIANT=gnuarmemb' >> ~/.zephyrrc
echo 'export GNUARMEMB_TOOLCHAIN_PATH="~/gnuarmemb"' >> ~/.zephyrrc
```

Clone the Pebble-Firmware IoTeX repository:

```sh
git clone https://github.com/iotexproject/pebble-firmware.git
```

Clone the Zephyr SDK repository:

```sh
# Move to the firmware directory
cd pebble-firmware/2020poc
# Clone into the Zephyr directory
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

pip3 install -r zephyr/scripts/requirements.txt
pip3 install -r nrf/scripts/requirements.txt
pip3 install -r bootloader/mcuboot/scripts/requirements.txt

# Make sure the `west`executable is in front of your PATH:
echo 'export PATH=~/.local/bin:"$PATH"' >> ~/.bashrc
source ~/.bashrc

# Test the west command
west --version
```

### Compile Project with Command Line

Before trying to build the project you must set required environment variables for Zephyr, to do so you can run:

```sh
# Load environment variables for the Zephyr SDK
source ~/pebble-firmware/2020poc/zephyr/zephyr-env.sh
```

Among other things, this will also source your `~/.zephyrrc` where the arm toolchain environment variables are set: you can use this file to add any customization to the environment.

:::warning
Please notice that the environment variables will be lost if you close your terminal window: run `source ~/pebble-firmware/2020poc/zephyr/zephyr-env.sh` again to get them back
:::

The project can then be compiled with the following commands:

```sh
cd ~/pebble-firmware/2020poc/nrf/applications/asset_tracker
# Make sure to remove any previously created build directory
rm -rf build/
# Start the build process
west build -b thingy91_nrf9160ns
```

After the project is compiled successfully, you can flash the new Pebble firmware that is available at `~/pebble-firmware/2020poc/nrf/applications/asset_tracker/build/zephyr/merged.hex`.

### [Optional] Configure the project before the build

Optionally, the project can be configured before the build with the following command:

```sh
# Load Zephyr env variables, if you haven't done so yet in the current session
source ~/pebble-firmware/2020poc/zephyr/zephyr-env.sh

# Move into the Pebble application directory
cd ~/pebble-firmware/2020poc/nrf/applications/asset_tracker
# Make sure to remove any pre-existing build directory
rm -rf build/
# Run configuration
west build -t menuconfig -b thingy91_nrf9160ns
```

this will start the configuration program that will allow you to interactively set all the build configuration values for the application.
