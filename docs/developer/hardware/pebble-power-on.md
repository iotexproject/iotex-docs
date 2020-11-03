---
title: Assemble and Power on
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

- **Power connector**: this is a 2-poles, 1.25mm pitch, female connector. Please notice that Pebble Tracker power circuit does not provide polarity-inversion protection, therfore please check the polarity carefully when connecting the battery or any power supply

- **SIM card slot**: this is a micro-SIM slot where you can insert any IoT SIM card.

- **Micro-USB port**: this port is used to charge the battery connected to the power supply input. The Micro-USB port can also be used to program the Pebble Tracker.

- **Reset button**: This is a small switch button that allows to reset the board software (short press) or to put the board in _recovery mode_ (see [TODO: Flashing the firmware]).

- **Data port**: the data port is used to program and debug the board using the SEGGER JLink programmer/debugger

- **Cellular and GPS antenna**: these two caoxial inputs allow the connection of a GPS and/or a cellular external antennas

![](/img/developer/pebble-layout.jpg)

## Inserting a SIM card

Insert a IoT Micor-SIM into the SIM card slot and press until it's locked inside. The Pebble tracker supports both LTE and NB-IoT radio standards: check which one is supported in your country and that the SIM card is compliant with te same standard. Pebble Tracker comes with NB-IoT firmware preinstalled: if you need LTE instead, then you will be required to flash the refpective LTE firmware (see [TODO: Flashing the firmware](TODO: Flashing the firmware)).

## Connecting the GPS Antenna

If you want to use Pebble Tracker GPS data, its preferable to connect the GPS antenna. Find the GPS Antenna connector on the board and carefully conenct the antenna. The antenna also provides an adesive strip to conveniently fix it to any surface.

## Connecting a battery

Pebble Tracker requires a DC power supply in the range of 3V - 5V, that must be provided to the power connector using a 2-poles 1.25mm pitch male connector. You can both find a battery that fits the space in the Pebble Tracker case, or reassemble the case to provide more space to fit your battery. If your battery does not provide the correct connector for Pebble Tracher, you can replace it with the extra power connector included in the package.

Once the battery is connected you can press the reset button: you will see the RGB led light up and blinking every 5s.

![](/img/developer/pebble-connected.jpg)

## Charging the battery

You can connect Pebble to a USB charger or to your PC using the micro-usb connector to recharge your battery. Once the battery is fully charged you will see the RGB led to light up in green.

## Status Led

Pebble Tracker includes an RGB led to show the status of the Pebble Tracker, the table below shows all the possible led states and the respective meaning:

| <small>LED Color (Blink Rate)</small>          | <small>GPS Signal</small> | <small>Charging</small> | <small>NB-IoT/LTE Connection</small> | <small>Flashing the Firmware</small> |
| :--------------------------------------------- | :-----------------------: | :---------------------: | :----------------------------------: | :----------------------------------: |
| <small>Blue (fast)</small>                     |                           |                         |                                      |                                      |
| <small>Blue (slow) </small>                    |                           |                         |                  ✓                   |                                      |
| <small>Red (steady) +<br>Purple (fast)</small> |                           |            ✓            |                                      |                                      |
| <small>Red (steady) +<br>Purple (slow)</small> |                           |            ✓            |                  ✓                   |                                      |
| <small>Cyan (fast)</small>                     |             ✓             |                         |                                      |                                      |
| <small>Cyan (slow) </small>                    |             ✓             |                         |                  ✓                   |                                      |
| <small>Red (steady) +<br>White (fast)</small>  |             ✓             |            ✓            |                                      |                                      |
| <small>Red (steady) +<br>White (slow)</small>  |             ✓             |            ✓            |                  ✓                   |                                      |
| <small>Red (fast)</small>                      |                           |                         |                                      |                  ✓                   |

Note that LED flahses ON-OFF every 500ms when in _fast_ mode, and every 5s when in _slow_ mode.
