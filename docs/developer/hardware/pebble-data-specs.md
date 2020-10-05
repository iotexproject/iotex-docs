---
title: Data Specification
---

# Specification of Pebble Data Format

## Introduction

JavaScript Object Notation (JSON) is utilized to represent the sensor data collected by a Pebble tracker as well as the corresponding ECDSA digital signature.

## Data types

Supported data types include _Number_, _String_ and _Array_ defined as follows:

| Data Type | Data Size              | Data Range              |
| --------- | ---------------------- | ----------------------- |
| Array     | 16-bit                 | -32768 ~ +32768         |
| Number    | 64-bit                 | -1.79E+308 ~ +1.79E+308 |
| String    | null-terminated string |

## Example

An example of a JSON object containing a data point collected by the Pebble tracker is shown below:

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

It consists of a sensor data object _"message"_, and a digital signature data object _"signature"_.

### Sensor Data Object

The sensor data object includes the following sensor data:

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

### Digital Signature Object

The Pebble tracker utilizes ECDSA over the elliptic curve sepc256r1 to sign the collected sensor data (i.e., the _message_ sub-object in the Pebble data format) and the digital signature data object contains the following signature data:

| Digital Signature | Data Type | Description                   |
| ----------------- | --------- | ----------------------------- |
| r                 | Number    | r value of an ECDSA signature |
| s                 | Number    | s value of an ECDSA signature |
