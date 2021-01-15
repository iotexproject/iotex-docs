---
title: Quick Start
---

# Pebble Quick Start Guide

Congratulations on receiving your Pebble!

This quick start guide will help you quickly explore a small number of features of your Pebble.

## Hardware Setup

Before start using your Pebble, you need three simple steps to hook up the device with a few components (see the [Hardware Setup](pebble-power-on) guide for more details):

- Insert the IoT SIM card into the SIM card slot
- Connect the NB-IoT/LTE-M antenna
- Connect the rechargeable Lithium Polymer Ion battery pack
- Press the [Power Button](pebble-power-on.md#board-layout-image) for 2 seconds to Power on

Check out the [on-board RGB led](pebble-data-specs.md#led-status-table) to monitor the status of your Pebble.

## Dashboard Setup

The default firmware installed on Pebble will connect the device to [trypebble.io](https://trypebble.io), the **IoTeX free Pebble Backend Service** built using open-source software including [hmq](https://github.com/fhmq/hmq), [MinIO](https://min.io/) and [Thingsboard](https://thingsboard.io/).

::: danger
The IoTeX hosted backend solely aims for the initial validation of Pebble functionalities: **all the dashboards and data are accessible by all Pebble users**. As a result, we do encourage users to deploy their own backend service: check out [Deploy your own backend service](pebble-backend-configuration) for instructions on how to deploy your own backend, and [Configure AWS IoT Core](pebble-aws-configure) for instructions on how to deploy a backend for production.
:::

### Login to the Dashboard

To setup your dashboard, you can login into Thingsboard at http://trypebble.io:8080/login using the following credentials:

`Username: tenant@thingsboard.org`<br>
`Passworld: tenant`<br>

**Please Note that the login credentials are shared by all Pebble users, so please do not change them!**

### Create Your Dashboard

Before creating a dashboard for your Pebble, you need to ensure that the data from your device has been successfully filtered out by Thingsboard. To this end, you can click the **DEVICES** icon on the Thingboard console:

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig1.png)

In the **Devices** window, you can check whether your device IMEI number occurs in the list of device names, (your device name will look like `nrf-XXXXXXXXXXXX` where `XX..X` stands for the unique 15-digit IMEI number of your Pebble, which can be found printed on a lable inside the Pebble box).

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig2.png)

Once you located your Pebble's IMEI in the list, you can move on and click **DASHBOARDS** on the left menu. If you can't find your device in the list, [check out the status Led](pebble-data-specs.md#led-status-table) on your board to make sure it's connected to the cellular network, otherwise you may need to [reconfigure and flash a new firmware](pebble-build-linux) for your Pebble to support a different standard for the cellular network available in your country.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig3.png)

In the **Dashboards** window, you can click `+`on the top right corner and select **import dashboard**

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig4.png)

Download the [IoTeX's dashboard template](https://raw.githubusercontent.com/iotexproject/pebble-backend/master/example/dashboard/pebble_template.json) and drop the file into the pop-up window.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig5.png)

After clicking **IMPORT**, you will notice that a new dashboard named `pebble-1` showed up at the top of the list in the **Dashboards** window. You can then click the **Open dashboard** button to open your dashboard.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig6.png)

Once your dashboard is launched, you need to enter **edit mode** by clicking the orange edit button on the bottom right corner of your dashboard.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig7.png)

The first thing is to change is the title of the dashboard: rename it from `pebble-1` to your device name `nrf-xxxxxxxxxxxxxxx`, to differentiate your dashboard from those of other users.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig8.png)

Then you need to click **Entity aliases** button to set up the data source for your dashboard: in the **Entity aliases** window, you should first change the **Alias name** from `pebble-1` to your device name `**nrf-xxxxxxxxxxxxxxx**` and then click the **Edit alias** button on the right:

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig9.png)

In the **Edit alias** window, you need to click the line labeled **Device**, and choose your device from the drop-down list.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig10.png)

Saving your changes in the dialog boxes, then click the orange **Apply changes** button at the bottom right of the screen: the data stream from your Pebble will show in the dashboard.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig11.png)

### Config Your Pebble

As shown in your dashboard, the default firmware on Pebble sends all the following sensor/GPS data to the backend periodically:

- Temperature
- Air Pressure
- Humidity
- Gas
- 3-Axis Accelerometer
- 3-Axis Gyroscope
- Light Intensity
- Signal-to-Noise Ratio (SNR)
- Battery

If you would like to stop updating some sensor/GPS data on the dashboard, you can use the **CONFIG ME** button as follows:

1. Click the orange **Edit** button on the bottom right corner of your dashboard;

2. Click the 'Edit widget' button on the 'Config data collection' panel;

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig12.png)

3. Click **ADVANCED** in the pop-up window **CONFIG DATA COLLECTION**, select **Shared attribute** for the **Device attribute scope**, and copy the following JSON configuration into the **Device attribute parameters** field:

```json
{
  "data_channel": "7895"
}
```

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig13.png)

For selecting/deselecting certain sensors/GPS data, you can set '1'/'0' in the corresponding position as shown in the figure below and convert the resulting binary string to the corresponding decimal value that is then assinged to the **data_channel** field in the above JSON configuration.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig14.png)

In the above example, we set **data_channel** to be `7895` (corresponding to `1111011010111` in binary representation). As a result, the temperature will not be updated on the dashboard after Pebble receives this configuration.

4. After applying the changes and returning to the main dashboard, you can click the **CONFIG ME** button to send the new configuration to your Pebble;

5. The new configuration will take effect shortly and the selected sensor/GPS data will not be updated any longer.

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig15.png)

### Beep Your Pebble

For testing the buzzer on your Pebble, you can use the **BEEP ME** button and follow the same steps used in the above section **configing your Pebble**. The only difference is the JSON configuration in the **Device attribute parameters** field, that now becomes:

```json
{
  "beep": "2000"
}
```

![](/img/developer/pebble-quickstart/pebble_quick_start_guide_fig16.png)

After saving and clickeng the **BEEP ME** button on the card the buzzer of your Pebble will beep for 2000ms (as soon as the configuration is received).
