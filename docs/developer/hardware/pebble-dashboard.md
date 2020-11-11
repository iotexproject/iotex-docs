---
title: Tracker Dashboard
---

# Pebble Dashboard

## Writing S3 data

1. Trackers collect data and places it in the corresponding topic of IOT-Core, such as `nrf-352656100458374`.
2. IOT-Core listens for the corresponding topic and adds the post-processing command: write to S3. Pay attention to the setting of role permissions. Make sure that the specified S3 bucket has writable permissions.
3. IOT-Core has Web-UI to mock data into topic, which can be manually filled with several records for verification.

The file format of S3 is determined in the IOT-Core [Action] configuration. The content of the file is the active data of tracker. Such as:

- GPS position information.
- Temperature, Pessure and Humidity.
- Gyroscope: AX AY AZ acceleration, GX GY GZ gravity acceleration.
- Voltage data: VBAT.

## Converting tracker data to Grtafana dashboard

### Create a kinesis data stream

Kinesis data stream is used to hook up lambda data processing functions. Enter the kinesis console and create a kinesis data stream. The number of slices is set to 1 and the name is `test-stream`.

### Create IAM role

- Create Role: `test-stream`, permission: `AmazonKinesisFullAccess`
- Create Role: `lambda_role`, permission: `AWSLambdaKinesisExecutionRole`

### IOT-Core to Kinesis data stream

- Enter the IOT core console and click `Action` in the left sidebar
- Create a rule with the following parameters:
  - The name is `test_stream`
  - SQL like: `select * from 'topic / nrf-352656100458374'`
  - Add operation: send the message to Amazon kinesis stream, and select role as `test-stream`.

### Create Lambda Function

- Create a lambda function:
  - Name: testInfluxdb
  - Runtime: Python 2.7
  - Role: `lambda_role`
- Click this function:
  - Add Trigger: Kinesis data stream, choose `test-stream`.
  - Edit python scripts
  - Save

Example:

```
import urllib2
import base64
import json
import time

g_influx_addr = "http://54.225.17.236:8086/write?db=pebble"
def write_point(info):
    #print str(info)
    dbreq = urllib2.Request(g_influx_addr, data = info)
    urllib2.urlopen(dbreq)

def lambda_handler(event, context):
    req_data = ""
    for record in event['Records']:
        payload = base64.b64decode(record['kinesis']['data'])
        print "Decoded payload: " + payload
        data = json.loads(payload)
        # temperature
        if 'T(degC)' in data:
            T = data['T(degC)']
            temp = "temperature,name=temperature C=" + str(T)
            #temp += " " + str(data['timestamp'] * 1000000)
            temp += " " + str(int(time.time()) * 1000000000)
            #print "req_str: " + str(temp)
            req_data += "\n"
            req_data += temp
        else:
            print("not found T")
        # pressure
        if 'P(hPa)' in data:
            P = data['P(hPa)']
            temp = "pressure,name=pressure P=" + str(P)
            #temp += " " + str(data['timestamp'] * 1000000)
            temp += " " + str(int(time.time()) * 1000000000)
            #print "req_str: " + str(temp)
            req_data += "\n"
            req_data += temp
        else:
            print("not found P")
        # location
        if "latitude" in data and "longitude" in data:
            latitude = data["latitude"]
            longitude = data["longitude"]
            temp = "location,name=location latitude=" + str(latitude)
            temp += ",longitude=" + str(longitude)
            #temp += " " + str(data['timestamp'] * 1000000)
            temp += " " + str(int(time.time()) * 1000000000)
            req_data += "\n"
            req_data += temp
        else:
            print "not found longitude latitude"
    if req_data == "":
        return
    print "req_data: " + str(req_data)
    write_point(req_data)
```

### Grafana Dashboard

http://docs.grafana.org/
