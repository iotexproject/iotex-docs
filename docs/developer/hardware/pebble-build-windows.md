---
title: Develop and Build the Pebble Firmware (Windows)
---

# Develop and Build the Pebble Firmware (Windows)

[[toc]]

## Download and Install nRF Connect for Desktop

The best way to install the toolchain for building Pebble Tracker firmware on Windows is to use the nRF Connect tool from Nordic Semiconductor:

- [download nRF Connect 3.6.0](https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnectsetup360ia32.exe)

- Install and run nRF Connect on your Windows machine

## Install required tools

Before installing the SDK, you need to install some required tools in your system. You can do that by following the "Getting Started Assistant" of the nRF Connect tool:

Launch **nRF Connect** tool you just installed and open **Getting Started Assistant**:

![](/img/developer/pebble-sdk/firmware_fig2.png)

Install the required tools following the step by step instructions from the **Install the Toolchain** section - ignore the other sections:

![](/img/developer/pebble-sdk/firmware_fig3.png)

Close the Getting Started Assistant window when finished.

## Install the SDK

After the requirements have been installed we can proceed with the installation of the SDK:

From the **nRF Connect** tool again open **Toolchain Manager**:

![](/img/developer/pebble-sdk/firmware_fig4.png)

Choose to install **nRF Connect SDK v1.3.0**, confirm the installation default path, and wait for the installation to complete (this will require some time):

![](/img/developer/pebble-sdk/firmware_fig5.png)

When the SDK installation is complete, you should find it installed in `%userprofile%/ncs`, where `%userprofile%` stands for your user home directory in Windows.

## Get the Pebble Firmware source code

Open a command prompt (search for `cmd.exe`in your Windows Start menu), and in the terminal type the following command to clone the Pebble Firmware repository:

```
cd %userprofile%
git clone https://github.com/iotexproject/pebble-firmware.git
```

delete the asset_tracker demo application folder that comes pre-installed with the SDK:

```
rmdir /s /q %userprofile%/ncs/v1.3.0/nrf/applications/asset_tracker
```

and replace it with the Pebble Tracker firmware application folder:

```
xcopy %userprofile%/pebble-firmware/2020poc/nrf/applications/asset_tracker %userprofile%/ncs/v1.3.0/nrf/applications /E /H
```

## Build the firmware with Embedded Studio IDE

- Download and install the [Embedded Studio IDE (v4.5.2)](https://www.segger.com/downloads/embedded-studio/Setup_EmbeddedStudio_ARM_v452_win_x64.exe)

### Configure Embedded Studio Toolchain paths

The compiler toolchain paths in Embedded Studio should be already set, just make sure they are configured as follows:

- Launch the Embedded Studio IDE and choose "Options" under the "Tools" menu
- Choose "nRF Connect" on the left side of the "Option" window
- Locate "Directories" section and configure "GNU ARM Embedded Toolchain Directory" and "Zephyr Base" to the corresponding directories, respectively

![](/img/developer/pebble-sdk/firmware_fig6.png)

### Build the Pebble Tracker Application

The Pebble App project is configured as follows:

- Launch the Embedded Studio IDE and choose "Open nRF Connect SDK Project..." under the "File" menu
- Configure the paths of "CMakeLists.txt" and "Board Directory" and set "Board Name" to "thingy91_nrf9160ns"
  ![](/img/developer/pebble-sdk/firmware_fig7.png)

## Build the Pebble Tracker Application using Command Line

If you run into any troubles building the firmware application using Embedded Studio, you can try building the firmware using the command line first.

To do so, locate and open the git-bash.exe terminal in your SDK folder:

`ncs/v1.3.0/toolchain/git-bash.exe``

in the terminal, move to the pebble tracker application folder and compile the application:

```sh
cd %userprofile%/ncs/v1.3.0/nrf/applications/asset_tracker
# Make sure to remove any previously created build directory
rmdir /s /q build
# Start the build process
west build -b thingy91_nrf9160ns
```

After the project is compiled successfully, you can flash the new Pebble firmware that is available at `~/pebble-firmware/2020poc/nrf/applications/asset_tracker/build/zephyr/merged.hex`.

## Configure the firmware before the build

Optionally, firmware parameters (e.g. MQTT parameters) can be customized before building the software.

### Configure the firmware in Embedded Studio

From the Embedded Studio, before starting the build process, choose **Configure nRF Connect SDK Project...** int the **Project** menu, and choose **menuconfig** in the pop-up window. You can use the search box to quickly locate te parameters you want to customize, e.g. and search "mqtt" to customize MQTT specific parameters:

![](/img/developer/pebble-sdk/firmware_fig8.png)

### Configure the firmware from command line

From command line, you can just run the following commands in the Firmware application folder

```sh
cd %userprofile%/ncs/v1.3.0/nrf/applications/asset_tracker
# Make sure to remove any previously created build directory
rmdir /s /q build
# Start the command line configuration tool
west build -t menuconfig -b thingy91_nrf9160ns
```

this will start the configuration program from command line, allowing you to interactively set all the build configuration values for the firmware.
