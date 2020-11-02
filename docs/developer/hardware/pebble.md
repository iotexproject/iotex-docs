---
title: Overview
---

# Pebble Tracker

[[toc]]

## Overview

IoTeX's Pebble Tracker meets the demand of applications that require strong data security, integrity protection, and multiparty trust across the entire supply chain. Existing asset tracking solutions lack critical security features, rendering them easily hackable and exposed to data corruption.

![](/img/developer/pebble.png)

## Processor

Pebble Tracker is powered by a 64 MHz Arm® Cortex®-M33, 1 MB Flash and 256 KB RAM, with automated power and clock management, Arm TrustZone, and Arm CryptoCell 310

## Sensors

Pebble Tracker combines an **environmental sensor** (temperature, relative humidity, barometric pressure, altitude, and volatile organic compounds - VOCs), a **motion sensor** (3-axis gyroscope, 3-axis accelerometer), and an ambient **light sensor**. It's also equipped with cellular network connectivity and integrated GPS supporting precise, long range tracking of asset data using established cellular infrastructure.
| Sensor | Details |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [ Environmental Sensor BME680](https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors-bme680/) | <li>Relative humidity</li><li>Barometric pressure</li><li>Ambient temperature</li><li>Air quality (VOC) </li> |
| [ Motion Sensor ICM-42605](https://www.invensense.com/products/motion-tracking/6-axis/icm-42605/) | <li>3-axis gyroscope</li><li>3-axis accelerometer </li> |
| [ External GPS TD1030](http://www.techtotop.com/detail.aspx?cid=956) | <li>Position accuracy: 3m </li><li>Speed accuracy: 0.1 m/s</li><li>Data frequency: 1 hz to 10 Hz</li> |
| [ Ambient Light Sensor AMS TSL2572](https://ams.com/tsl25721) | <li>45,000,000:1 Dynamic Range</li><li>Operation to 60,000 lux in Sunlight</li><li>Very High Sensitivity</li><li>Package UV Rejection Filter</li> |
| [ Buzzer Mallory Sonalert AST7525MATRQ](https://www.mallory-sonalert.com/DetailPage.aspx?Catalog_Number=AST7525MATRQ&Part_Id=452) | <li>Frequency: 2700 Hz</li><li>Sound Pressure Level (dB/min): 85 at 10cm </li> |

## Connectivity

Pebble Tracker includes a Multimode LTE-M/NB-IoT modem for celular communication.

## 2D Drawing

![](/img/developer/pebble-drawing.jpg)

Download [DXF](/pebble-top-view.dxf) | [PDF](/pebble-drawing.pdf)
