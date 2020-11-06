---
title: Technical Specifications
---

# Technical Specifications

[[toc]]

## Processor

Pebble Tracker is powered by a 64 MHz Arm® Cortex®-M33, 1 MB Flash and 256 KB RAM, with automated power and clock management, Arm TrustZone, and Arm CryptoCell 310

## Integrated Sensors

Pebble Tracker combines an **environmental sensor** (temperature, relative humidity, barometric pressure, altitude, and volatile organic compounds - VOCs), a **motion sensor** (3-axis gyroscope, 3-axis accelerometer), and an ambient **light sensor**. It's also equipped with cellular network connectivity and integrated GPS supporting precise, long range tracking of asset data using established cellular infrastructure.
| Sensor | Details |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ Environmental Sensor BME680](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors-bme680/) | <li>Relative humidity</li><li>Barometric pressure</li><li>Ambient temperature</li><li>Air quality (VOC) </li> |
| [ Motion Sensor ICM-42605](https://www.invensense.com/products/motion-tracking/6-axis/icm-42605/) | <li>3-axis gyroscope</li><li>3-axis accelerometer </li> |
| [ External GPS TD1030](http://www.techtotop.com/detail.aspx?cid=956) | <li>Position accuracy: 3m </li><li>Speed accuracy: 0.1 m/s</li><li>Data frequency: 1 hz to 10 Hz</li> |
| [ Ambient Light Sensor AMS TSL2572](https://ams.com/tsl25721) | <li>45,000,000:1 Dynamic Range</li><li>Operation to 60,000 lux in Sunlight</li><li>Very High Sensitivity</li><li>Package UV Rejection Filter</li> |
| [ Buzzer Mallory Sonalert AST7525MATRQ](https://www.mallory-sonalert.com/DetailPage.aspx?Catalog_Number=AST7525MATRQ&Part_Id=452) | <li>Frequency: 2700 Hz</li><li>Sound Pressure Level (dB/min): 85 at 10cm </li> |

## Network Connectivity

Pebble Tracker includes a Multimode LTE-M/NB-IoT modem for cellular communication. To have your Pebble Tracker connected to the Internet you will need an *I*oT-enabled\*\* SIM card that supports either NB-IoT or LTE standards.

## Data format

JavaScript Object Notation (JSON) is utilized to represent the sensor data collected by a Pebble tracker as well as the corresponding ECDSA digital signature. Pebble tracker utilizes ECDSA over the elliptic curve sepc256r1 to sign the collected sensor data (i.e., the _message_ field in the Pebble data format)

Supported data types include _Number_, _String_ and _Array_ defined as follows:

| Data Type | Data Size              | Data Range              |
| --------- | ---------------------- | ----------------------- |
| Array     | 16-bit                 | -32768 ~ +32768         |
| Number    | 64-bit                 | -1.79E+308 ~ +1.79E+308 |
| String    | null-terminated string |

An example of a JSON object containing a data point collected by the Pebble tracker is shown below, it consists of a sensor data object named _"message"_, and a digital signature data object named _"signature"_:

```json
{
	message: {
		SNR: 2,
		VBAT: 4.0750732421875,
		latitude: 3050.69225,
		longitude: 11448.65815,
		gas\_resistance: 1166811,
		temperature: 36.23188400268555,
		pressure: 1003.82000732421885,
		humidity: 55.755001068115234,
		gyroscope: [-12, 11, 14],
		accelerometer: [-711, -231, 8260],
		timestamp: 3443547577
	},

	signature:  {
		r: "D7797968EAA3FFE5F8057C9D97F707A4A96CBFC250115FE6293EBA5E90327174",
		s: "643A8CB823110376A5D30201463CF69CDF8CBF1C050EB85B023CABFB589C3222"
	}
}
```

The _message_ object includes the following sensor data:

| Sensor Data    | Data Type | Description                                           |
| -------------- | --------- | ----------------------------------------------------- |
| SNR            | Number    | Signal-to-noise ratio of NB-IoT/LET-M                 |
| VBAT           | Number    | Votage of battery                                     |
| latitude       | Number    | gps latitude                                          |
| longitude      | Number    | gps longitude                                         |
| gas_resistance | Number    | Air quality                                           |
| temperature    | Number    | Environmental temperature                             |
| pressure       | Number    | Air pressure                                          |
| humidity       | Number    | Environmental humidity                                |
| gyroscope      | Array     | Angular velocity around the X-axis, Y-axis and Z-axis |
| accelerometer  | Array     | Acceleration along the X-axis, Y-axis and Z-axis      |
| timestamp      | String    | Timestamp of sensor data sampling                     |

The _signature_ data object contains the following signature data:

| Digital Signature | Data Type | Description                   |
| ----------------- | --------- | ----------------------------- |
| r                 | Number    | r value of an ECDSA signature |
| s                 | Number    | s value of an ECDSA signature |

<div id="led-status-table"></div>

## Onboard RGB Led

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

Note that the led will blink at least twice in 1 second when in _fast_ mode, and once in 5 seconds when in _slow_ mode.

## 2D Drawing

![](/img/developer/pebble-drawing.jpg)

Download [DXF](/pebble-top-view.dxf) | [PDF](/pebble-drawing.pdf)
