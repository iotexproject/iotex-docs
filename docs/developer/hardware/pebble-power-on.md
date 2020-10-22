---
title: Assemble and Turn on
---

# Assemble and Turn on your Pebble Tracker

## Unboxing

You Pebble Tracker box contains the following:

- The actual Pebble Tracker board
- The GPS Antenna
- A male, 2-poles 1.25mm pitch power connector
- A label with the IMEI number for your board

![](/img/developer/pebble-unbox.jpg)

## Board Layout

Relevant slots, connectors and switches on Pebble tracker include the following:

- Power connector: this is a 2-poles, 1.25mm pitch, female connector. Please notice that Pebble Tracker power circuit does not provide polarity-inversion protection, therfore please check the polarity carefully when connecting the battery or any power supply

- SIM card slot: this is a micro-SIM slot where you can insert any IoT SIM card. Pebble tracker supports both LTE and NB-IoT standards, but it's shipped with NB-IoT firmware. If you need LTE support then you will be required to flash the refpective LTE firmware (see [TODO]).
- Data port
  ![](/img/developer/pebble-layout.jpg)

## Connecting the GPS Antenna

If you want to use Pebble Tracker GPS data, its preferable to connect the GPS antenna. Find the GPS Antenna connector on the board and carefully conenct the antenna. The antenna also provides an adesive strip to conveniently fix it to any surface.

## Adding a battery

Pebble Tracker requires a DC power supply in the range of 3V - 5V, that must be provided to the power connector using a 2-poles 1.25mm pitch male connector. You can both find a battery that fits the space in the Pebble Tracker case, or reassemble the case to provide more space to fit your battery. If your battery does not provide the correct connector for Pebble Tracher, you can replace it with the extra power connector included in the package.

Once the battery is connected you can press the reset button: you will see the RGB led light up and blinking every 5s.

![](/img/developer/pebble-connected.jpg)

## Charging the battery

You can connect Pebble to a USB charger or to your PC using the micro-usb connector to recharge your battery. Once the battery is fully charged you will see the RGB led to light up in green.
