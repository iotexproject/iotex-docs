(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{641:function(e,t,r){"use strict";r.r(t);var o=r(38),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"flashing-the-application-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-application-firmware"}},[e._v("#")]),e._v(" Flashing the Application Firmware")]),e._v(" "),r("p",[e._v("The application firmware is the software that manages the high level behavior of Pebble: sensors data colloction, MQTT client operations, blockchain communication, etc...")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("We assume you already cloned the Pebble Firmware repository, and installed the Nordic nRF Connect tool for your system. If you have not done so yet, follow the instructions for your system below:")]),e._v(" "),r("h5",{attrs:{id:"install-nrf-connect-programmer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-nrf-connect-programmer"}},[e._v("#")]),e._v(" Install nRF Connect & Programmer")]),e._v(" "),r("tabs",[r("tab",{attrs:{name:"Windows"}},[r("ol",[r("li",[r("p",[r("a",{attrs:{href:"https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnectsetup360ia32.exe",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install nRF Connect 3.6.0 for Windows"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Open a command prompt and clone pebble Firmware repository:")])])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cd %userprofile%\ngit clone https://github.com/iotexproject/pebble-firmware.git\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])])]),e._v(" "),r("tab",{attrs:{name:"Linux"}},[r("ol",[r("li",[r("p",[e._v("Install "),r("a",{attrs:{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank",rel:"noopener noreferrer"}},[e._v("JLINK_ARM for Linux"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnect360x8664.AppImage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download nRF Connect 3.6.0 for Linux"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("then, in a terminal window, install the Pebble Linux driver:")])])]),e._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/pebble-firmware\n\ndpkg -i pebble-udev_1.0.1-all.deb\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Open a command prompt and clone the Pebble Firmware repository:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cd ~\ngit clone https://github.com/iotexproject/pebble-firmware.git\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])])]),e._v(" "),r("tab",{attrs:{name:"MacOS"}},[r("ol",[r("li",[r("p",[e._v("Install "),r("a",{attrs:{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank",rel:"noopener noreferrer"}},[e._v("JLINK_ARM for macOS"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Install the "),r("a",{attrs:{href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("CP210x USB to UART Bridge Virtual COM Port (VCP) driver for macOS"),r("OutboundLink")],1),e._v(" to allow the Programmer app to read /dev/tty.SLAB_USBtoUART* CP2105 serial port device")])]),e._v(" "),r("li",[r("p",[e._v("Install "),r("a",{attrs:{href:"https://www.nordicsemi.com/-/media/Software-and-other-downloads/Desktop-software/nRF-Connect-for-Desktop/3-6-0/nrfconnect360.dmg",target:"_blank",rel:"noopener noreferrer"}},[e._v("nRF Connect for Desktop v3.6.0 for MacOS"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Open a command prompt and clone the Pebble Firmware repository:")])])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cd ~\ngit clone https://github.com/iotexproject/pebble-firmware.git\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])])])],1),e._v(" "),r("h2",{attrs:{id:"install-and-launch-the-programmer-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-and-launch-the-programmer-app"}},[e._v("#")]),e._v(" Install and launch the Programmer App")]),e._v(" "),r("p",[e._v("You will need to install a custom Programmer app for nrf Connect, that is included in the pebble-firmware repository.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Locate the following archive in the pebble firmware folder: "),r("code",[e._v("pebble-firmware/pc-nrfconnect-programmer-1.4.2.tgz")])])]),e._v(" "),r("li",[r("p",[e._v("Extract the content of the archive in the "),r("code",[e._v("nRF Connect")]),e._v(" apps folder:")])])]),e._v(" "),r("tabs",[r("tab",{attrs:{name:"Windows"}},[r("p",[e._v("In Windows, extract in the following path:")]),e._v(" "),r("p",[r("code",[e._v("%userprofile%/.nrfconnect-apps/local/")])])]),e._v(" "),r("tab",{attrs:{name:"Linux"}},[r("p",[e._v("In Linux, extract in the following path:")]),e._v(" "),r("p",[r("code",[e._v("~/.nrfconnect-apps/local/")])])]),e._v(" "),r("tab",{attrs:{name:"MacOS"}},[r("p",[e._v("In MacOS, extract in the following path:")]),e._v(" "),r("p",[r("code",[e._v("~/.nrfconnect-apps/local/")])])])],1),e._v(" "),r("p",[e._v("Launch the "),r("strong",[e._v("nRF Connect")]),e._v(" tool, scroll down to the "),r("code",[e._v("Programmer")]),e._v(" app and open it:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/developer/pebble-sdk/programmer_fig2.png",alt:""}})]),e._v(" "),r("p",[e._v("Connect Pebble to your computer using the USB cable, and follow the instructions in following two sections to flash the "),r("strong",[e._v("Pebble Application Firmware")]),e._v(" or the "),r("strong",[e._v("Pebble Modem Firmware")]),e._v(" respectively.")]),e._v(" "),r("h3",{attrs:{id:"flash-the-pebble-application-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flash-the-pebble-application-firmware"}},[e._v("#")]),e._v(" Flash the Pebble Application Firmware"),r("span",{attrs:{id:"pebble_flash_app"}},[e._v(".")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Select the firmware hex file you want to flash (if you built a new firmware, find the "),r("code",[e._v("zephyr/app_signed.hex")]),e._v(" file in the build folder) "),r("strong",[e._v("(1)")])])]),e._v(" "),r("li",[r("p",[e._v("Select your device from the devices combo box in the programmer window "),r("strong",[e._v("(2)")])])]),e._v(" "),r("li",[r("p",[e._v("Put Pebble in "),r("strong",[e._v("MCUboot mode")]),e._v(" ("),r("a",{attrs:{href:"#put-pebble-tracker-in-mcuboot-mode"}},[e._v("see the section below")]),e._v(") and click the "),r("strong",[e._v("Write")]),e._v(" button "),r("strong",[e._v("(3)")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/developer/pebble-sdk/programmer_fig3.png",alt:""}})]),e._v(" "),r("p",[e._v("The flashing process will last about 60 seconds: the red led on the boards will blink during the whole process. Eventually, Pebble will reboot automatically and the new firmware will be loaded.")]),e._v(" "),r("h3",{attrs:{id:"flash-the-pebble-modem-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flash-the-pebble-modem-firmware"}},[e._v("#")]),e._v(" Flash the Pebble Modem Firmware")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Please notice that updating the modem firmware will also "),r("strong",[e._v("erase")]),e._v(" the Pebble Application Firmware: you will need to "),r("a",{attrs:{href:"#pebble_flash_app"}},[e._v("flash the application firmware again")]),e._v(".")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Download the "),r("a",{attrs:{href:"https://www.nordicsemi.com/Products/Low-power-cellular-IoT/nRF9160/Download",target:"_blank",rel:"noopener noreferrer"}},[e._v("nRF9160 modem firmware binary"),r("OutboundLink")],1),e._v(" from Nordic: please notice that the officially supported version is "),r("a",{attrs:{href:"https://www.nordicsemi.com/-/media/Software-and-other-downloads/Dev-Kits/nRF9160-DK/nRF9160-modem-FW/mfwnrf9160120.zip%5D",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.2.0"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Select your device from the devices combo box in the programmer window ( make sure your device is connected with the IoTeX programmer properly, as indicated by the green solid dot nect to the combobox)")])]),e._v(" "),r("li",[r("p",[e._v("Enter the "),r("strong",[e._v("MCUboot mode")]),e._v(" for your Pebble ("),r("a",{attrs:{href:"#put-pebble-tracker-in-mcuboot-mode"}},[e._v("see the section below")]),e._v(") and click the "),r("strong",[e._v("Update Modem")]),e._v(" button")])]),e._v(" "),r("li",[r("p",[e._v("Select the modem firmware binary file "),r("code",[e._v("mfw_nrf9160_1.2.0.zip")]),e._v(" you just downloaded and click "),r("strong",[e._v("Open")]),e._v(" to start the modem update process.")])])]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/developer/pebble-sdk/programmer_fig4.png",alt:""}})]),e._v(" "),r("p",[e._v("The flashing process will last about 2 minutes: the red led on the board will blink during the whole process.")]),e._v(" "),r("h2",{attrs:{id:"put-pebble-in-mcuboot-mode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#put-pebble-in-mcuboot-mode"}},[e._v("#")]),e._v(" Put Pebble in "),r("strong",[e._v("MCUboot mode")])]),e._v(" "),r("p",[e._v("You can flash a new firmware to a Pebble through the USB port by putting the board in "),r("em",[e._v("MCUboot mode")]),e._v(": in this mode Pebble will start the "),r("strong",[e._v("MCUboot")]),e._v(" secure bootloader instead of the main application firmware, that will allow to receive a new firmware through the USB cable.")]),e._v(" "),r("p",[e._v("Follow the instruction below to enable MCUboot on Pebble (please refer to the "),r("RouterLink",{attrs:{to:"/developer/hardware/pebble-power-on.html#board-layout"}},[e._v("assembling")]),e._v(" guide to locate the buttons on the board):")],1),e._v(" "),r("ol",[r("li",[e._v("On Pebble, press and "),r("strong",[e._v("keep pressed")]),e._v(" the "),r("RouterLink",{attrs:{to:"/developer/hardware/pebble-power-on.html#board-layout"}},[e._v("Power Button")])],1),e._v(" "),r("li",[e._v("While the Power Button is pressed, "),r("strong",[e._v("press and release")]),e._v(" the "),r("RouterLink",{attrs:{to:"/developer/hardware/pebble-power-on.html#board-layout"}},[e._v("Reset Button")])],1),e._v(" "),r("li",[e._v("The "),r("strong",[e._v("blue led")]),e._v(" will turn on: keep the Power Button pressed for ~5s until the blue led goes off and it turns int steady red.")])]),e._v(" "),r("p",[e._v("The MCUBoot mode is now enabled and you can release the Power button:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/img/developer/pebble-mcuboot.jpg",alt:""}})]),e._v(" "),r("p",[e._v("the device will stay in MCUboot mode for about 20 seconds, if during this period the firmware flashing process does not start Pebble will reboot automatically in normal operation mode.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);