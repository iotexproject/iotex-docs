---
title: Build on Linux
---

# Develop and Build the Pebble Firmware (Linux)

[[toc]]

## Install Dependencies

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

## Install the Nordic SDK

the Nordic SDK is managed by the `west`tool, so we first need to install **west**: open a terminal and type

```sh
# Install west
pip3 install --user -U west
# Make sure the `west`executable is in front of your PATH:
echo 'export PATH=~/.local/bin:"$PATH"' >> ~/.bashrc
source ~/.bashrc
# Check that west is correctly installed
west --version
```

In your home directory, crate a folder named `ncs`: we will install the SDK there:

```sh
mkdir ~/ncs
cd ~/ncs
# Initialize the folder
west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.3.0
# Download all required repositories
west update
# Export a Zephyr CMake package. This allows CMake to automatically load the boilerplate code required for building nRF Connect SDK applications:
west zephyr-export
```

Install required python dependencies

```sh
pip3 install -r zephyr/scripts/requirements.txt
pip3 install -r nrf/scripts/requirements.txt
pip3 install -r bootloader/mcuboot/scripts/requirements.txt

```

## Install Compiler Toolchain

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

## Compile Project with Command Line

Before trying to build the project you must set required environment variables for Zephyr, to do so you can run:

```sh
# Load environment variables for the Zephyr SDK
source ~/ncs/zephyr/zephyr-env.sh
```

Among other things, this will also source your `~/.zephyrrc` where the arm toolchain environment variables are set: you can use this file to add any customization to the environment.

:::warning
Please notice that the environment variables will be lost if you close your terminal window: run `source ~/ncs/zephyr/zephyr-env.sh` again to get them back
:::

The project can then be compiled with the following commands:

```sh
cd ~
# Make sure to remove any previously created build directory
rm -rf build/
# Start the build process
west build -b thingy91_nrf9160ns ~/pebble-firmware/nrf/applications/asset_tracker/
```

After the project is compiled successfully, you can flash the new Pebble firmware that is available at `~/build/zephyr/app_signed.hex`.

See [how to configure the frimware](pebble-configure) before the build.
See [how to flash the frimware](pebble-flash).
