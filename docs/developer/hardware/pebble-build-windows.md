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

Install the required tools following the step by step instructions from the **Install the Toolchain** section (ignore the other sections):

![](/img/developer/pebble-sdk/firmware_fig3.png)

Close the Getting Started Assistant window when finished.

## Install the SDK

After the requirements have been installed we can proceed with the installation of the SDK:

From the **nRF Connect** tool again open **Toolchain Manager**:

![](/img/developer/pebble-sdk/firmware_fig4.png)

Choose to install **nRF Connect SDK v1.3.0**, confirm the installation default path, and wait for the installation to complete (this will require some time):

![](/img/developer/pebble-sdk/firmware_fig5.png)

When the SDK installation is complete, you will find it installed in the `c:\users\<your_username>\ncs\` folder.

## Get the Pebble Firmware source code

Open a command prompt (search for `cmd.exe`in your Windows Start menu), and in the terminal type the following command to clone the Pebble Firmware repository:

```
cd %userprofile%
git clone https://github.com/iotexproject/pebble-firmware.git
```

## Build the firmware within Embedded Studio IDE

- Download and install the [Embedded Studio IDE (v4.5.2)](https://www.segger.com/downloads/embedded-studio/Setup_EmbeddedStudio_ARM_v452_win_x64.exe)

### Configure Embedded Studio Toolchain paths

The compiler toolchain paths in Embedded Studio should be already set, just make sure they are configured correctly:

- Launch the Embedded Studio IDE and choose "Options" under the "Tools" menu
- Choose "nRF Connect" on the left side of the "Option" window
- Locate "Directories" section and configure "GNU ARM Embedded Toolchain Directory" and "Zephyr Base" to the corresponding directories, respectively (see the image):

![](/img/developer/pebble-sdk/firmware_fig6.png)

### Open Pebble Tracker Application

The Pebble App project is configured as follows:

- Launch the Embedded Studio IDE and choose "Open nRF Connect SDK Project..." under the "File" menu
- Configure the paths of "CMakeLists.txt" and "Board Directory" and set "Board Name" to "thingy91_nrf9160ns"
  ![](/img/developer/pebble-sdk/firmware_fig7.png)

### Build the firmware

Choose **Build Solution** from the **Build** menu to build the firmware: check out the output panel for the end of the compilation.

At the end of the build process you will find the new Pebble Tracker firmare file at:

`C:\users\<your_username>\pebble-firmware\nrf\applications\asset_tracker\build_thingy91_nrf9160ns\zephyr\app_signed.hex`

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

After the project is compiled successfully, you can flash the new Pebble firmware that is available at `C:\users\<your_username>\pebble-firmware\nrf\applications\asset_tracker/build_thingy91_nrf9160ns\zephyr\app_signed.hex`.

See [how to configure the frimware](pebble-configure) before the build.
See [how to flash the frimware](pebble-flash).
