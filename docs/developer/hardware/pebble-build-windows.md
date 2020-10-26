---
title: Develop and Build the Pebble Firmware (Windows)
---

# Develop and Build the Pebble Firmware (Windows)

[[toc]]

## Install Dependencies

Dependencies on Windows can be installed using Chocolatey a packacge manager.

In the Windows Start menu type "power" then right-click "Power Shell" app and "Run as Administrator, to open a command prompt with administrative privileges.

Run the following command in the shell:

```sh
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

wait a few seconds for the command to complete, if no errors appear then Chocolatey is ready to be used!

Open an Administrator Command Prompt window: press the Windows key, type “cmd.exe”, right-click the result, and choose “Run as Administrator”.

Disable global confirmation to avoid having to confirm installation of individual programs:

```sh
choco feature enable -n allowGlobalConfirmation
```

Use choco to install dependencies:

```sh
choco install cmake --installargs 'ADD_CMAKE_TO_PATH=System'
choco install ninja gperf python git wget unzip visualstudio2019buildtools
```

Install west:

```
pip3 install west # Requires administrative privileges
```

Open a new cmd.exe window as a regular user to continue.

## Install Compiler Toolchain

Download the ARM embedded compiler toolchain and set environment variables

```sh
cd %HOMEPATH%
# Download the package
wget https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/9-2020q2/gcc-arm-none-eabi-9-2020-q2-update-win32.zip
# Extract
unzip gcc-arm-none-eabi-9-2020-q2-update-win32.zip -d c:\gnuarmemb

# Create %HOMEPATH%\zephyrrc.cmd for easy env variables management
echo set ZEPHYR_TOOLCHAIN_VARIANT=gnuarmemb >> %HOMEPATH%\zephyrrc.cmd
echo set GNUARMEMB_TOOLCHAIN_PATH=c:\gnuarmemb >> %HOMEPATH%\zephyrrc.cmd
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

Install python dependencies (run terminal as Administrator)

```sh
cd %HOMEPATH%/pebble-firmware/2020poc

pip3 install -r zephyr/scripts/requirements.txt
pip3 install -r nrf/scripts/requirements.txt
pip3 install -r bootloader/mcuboot/scripts/requirements.txt # Build Tools for Visual Studio are required for some requirements

# Test the west command
west --version
```

You can continue from a normal terminal window.

## Compile Project with Command Line

Before trying to build the project you must set required environment variables for Zephyr, to do so you can run:

```sh
# Load environment variables for the Zephyr SDK
%userprofile%/pebble-firmware/2020poc/zephyr/zephyr-env.cmd
```

Among other things, this will also source your `%userprofie%/zephyrrc` where the arm toolchain environment variables are set: you can use this file to add any customization to the environment.

:::warning
Please notice that the environment variables will be lost if you close your terminal window: run `%userprofile%/pebble-firmware/2020poc/zephyr/zephyr-env.cmd` again to get them back
:::

The project can then be compiled with the following commands:

```sh
cd %userprofile%/pebble-firmware/2020poc/nrf/applications/asset_tracker
# Make sure to remove any previously created build directory
rmdir /s /q build
# Start the build process

```

After the project is compiled successfully, you can flash the new Pebble firmware that is available at `~/pebble-firmware/2020poc/nrf/applications/asset_tracker/build/zephyr/merged.hex`.

## [Optional] Configure the project before the build

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
