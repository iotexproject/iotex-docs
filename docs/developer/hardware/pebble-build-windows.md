---
title: Build on Windows
---

# Develop and Build the Pebble Firmware (Windows)

[[toc]]

The Pebble Tracker firmware can be easily configured and built on Windows using the Pebble SDk: a customized version of the Nordic's nRF Connect SDK (v1.3.0):

## Download and Install nRF Connect for Windows

First access the Nordic [nRF Connect download page for Desktop](https://www.nordicsemi.com/Software-and-tools/Development-Tools/nRF-Connect-for-desktop/Download#infotabs) and download the latest version of **nRF Connect for Windows**:

![](/img/developer/pebble-sdk/one_click_fig1.png)

Double-click the downloaded executable file (e.g., nrfconnect-setup-3.6.0-ia32.exe) and complete the installation.

## Install the Nordic Toolchain Manager app

Launch nRF Connect, scroll down to **Toolchain Manager** and click the **Install** button to install the app:

![](/img/developer/pebble-sdk/one_click_fig2.png)

## Download and install the Pebble Tracker SDK package

Download The Pebble SDK installation at:

[https://pebbles-software-release.s3-us-west-1.amazonaws.com/ncs-toolchain-pebble_v1.3.0-20200618-509f057.zip](https://pebbles-software-release.s3-us-west-1.amazonaws.com/ncs-toolchain-pebble_v1.3.0-20200618-509f057.zip)

and save the file to a known location in your filesystem.

::: warning
Make sure that you have a Github account and that any SSH keys or authorization token for your account (if required) has been setup properly, before you click 'OK' in this step (you should make sure you can `git clone` a GitHub repository from command line)
:::

In the **nRF Connect** app, scroll down to the **Toolchain Manager** and click the **Open** button to open the app. In the toolchain manager window, click the _<u>Install package from other source</u>_ link at the bottom:

![](/img/developer/pebble-sdk/one_click_fig3.png)

select the file Pebble Tracker SDK package that you just downloaded (`ncs-toolchain-pebble_v1.3.0-20200618-509f057.zip`) and click `OK`

## Open and configure the Embedded Studio IDE

Once the SDK installation is completed, `nRF Connect SDK pebble_v1.3.0` will show up in the Toolchan Manager list: Click the **Open IDE** button:

![](/img/developer/pebble-sdk/one_click_fig4.png)

The compiler toolchain paths in Embedded Studio should be already set, just make sure they are configured correctly:

- Choose **Options** under the **Tools** menu
- Choose **nRF Connect** on the left side of the "Option" window
- Locate **Directories** section and configure "GNU ARM Embedded Toolchain Directory" and "Zephyr Base" to the corresponding directories, respectively (see the image):

![](/img/developer/pebble-sdk/one_click_fig6.png)

## Build Pebble Tracker Application Firmware

### Build in Embedded Studio IDE

In the Embedded Studio IDE and choose **Open nRF Connect SDK Project...** under the **File** menu and configure the paths of **CMakeLists.txt** and **Board Directory**, also set **Board Name** to `thingy91_nrf9160ns`, as shown in the image below (please adapt to your Windows user path):

![](/img/developer/pebble-sdk/one_click_fig5.png)

If required, after the project has been generated, you can configure the firmware parameters befor the build following the [firmware configuration instructions](pebble-configure).

Choose **Build Solution** from the **Build** menu to build the firmware: check out the output panel for the compilation output and wait until the end of the compilation process.

At the end of the build process you will find the new Pebble Tracker firmare file at:

```
C:\users\<your_username>\ncs\v1.3.0\nrf\applications\asset_tracker\build_thingy91_nrf9160ns\zephyr\app_signed.hex
```

### Build from Command Line

If you run into any troubles building the firmware application using Embedded Studio IDE, you can try building the firmware using the command line first.

To do so, locate and open the `git-bash.exe` terminal in your SDK folder:

`C:\john\ncs\v1.3.0\toolchain\git-bash.exe``

in the git-bash terminal, move to the pebble tracker application folder and compile the application:

```sh
cd %userprofile%/ncs/v1.3.0/nrf/applications/asset_tracker
# Make sure to remove any previously created build directory
rmdir /s /q build
# Start the build process
west build -b thingy91_nrf9160ns
```

Using this build command, the project will be generated in the `build` folder, and the firmware file will be built to the `build\zephyr\app_signed.hex` path.

See [how to configure the frimware](pebble-configure) before the build.
See [how to flash the frimware](pebble-flash).
