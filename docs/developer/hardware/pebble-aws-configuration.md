---
title: Configure AWS IoT Core
---

# Configure AWS IoT Core to receive data from Pebble

To integrate Pebble with AWS IoT Core we will need to setup a Policy, configure a new _Thing_, and download the cryptographic certificates required for Pebble to send data to AWS.

## Create the AWS IoT policy

We will create an AWS IoT policy that allows your Pebble to connect and send messages to AWS IoT.

1. In the AWS IoT console, if a _Get started_ button appears, choose it. Otherwise, in the navigation pane, expand **Secure**, and then choose **Policies**.

2. If a _"You don't have any policies yet"_ dialog box appears, choose **Create a policy**. Otherwise, choose **Create**.

3. Enter a name for the AWS IoT policy (for example, PebbleTrackerPolicy).
   In the Add statements section, replace the existing policy with the following JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "iot:*",
      "Resource": "*"
    }
  ]
}
```

![](/img/developer/pebble-aws/aws0.png)

## Create the AWS IoT thing, certificate and private key

We will create a _Thing_ in the AWS IoT registry to represent your Pebble.

1. In the [AWS IoT console](https://console.aws.amazon.com/iot/home), in the navigation pane, choose **Manage**, and then choose **Things**.

2. If a You don't have any things yet dialog box is displayed, choose **Register a thing**. Otherwise, choose **Create**.

3. On the _"Creating AWS IoT things"_ page, choose **Create a single thing**.

![](/img/developer/pebble-aws/aws1.png)

4. On the _"Add your device to the device registry"_ page, enter a name for your IoT thing (for example, **PebbleTracker**), and then choose **Next**.

::: warning
You can't change the name of a thing after you create it. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.
:::

![](/img/developer/pebble-aws/aws2.png)

5. On the _"Add a certificate for your thing"_ page, choose **Create certificate**.

6. Choose the Download links to download the certificate, private key, and root CA certificate.

::: warning
This is the only time you can download your certificate and private key for your device: make sure you download and backup them!
:::

![](/img/developer/pebble-aws/aws3.png)

7. Choose Activate.

8. Choose Attach a policy.

9. For _"Add a policy for your thing"_, choose **PebbleTrackerPolicy**, and then choose **Register Thing**.

![](/img/developer/pebble-aws/aws4.png)

## Take note of your AWS device data endpoin

The AWS device data endpoint is required for the IoT devices to send data to the correct server via REST API:

1. In the navigation panel select **Manage -> Things**, then click the _Thing_ name you just created (e.g. _PebbleTracker_), and click on **Interactin** in the left menu and take note of your AWS endpoint:

![](/img/developer/pebble-aws/aws5.png)

You can also find the endpoint in the settings page of AWS IoT console, just select **settings** from the navigation panel. The endpoint should look similar to

`a3qjEXAMPLEffp-ats.iot.us-west-2.amazonaws.com`
