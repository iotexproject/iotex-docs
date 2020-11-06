---
title: Deploy your own backend service
---

# Deploy your own backend service

You can configure your own backend service to receive the data from your Pebble Trackers. The backend service will allow you to archive, visualize, and even send the data to a IoTeX Blockchain Smart Contract.

## Hardware Requirements

To run the backend services, you will need a machine with least 2CPU and 4GB memory with Debian or Ubuntu Linux. You can use an AWS or GCP virtual server, or if you want to use your local PC/laptop, make sure it has a public IP (e.g., using ngrok), where pebble can send data to.

## Install Docker CE

You can install Docker CE by following the official documentation at [https://docs.docker.com/engine/installation/](https://docs.docker.com/engine/installation/)

Optionally, you can your Linux user to the `Docker` Group: that will allow you to use the `docker` command without `sudo`:

```sh
sudo groupadd docker; sudo usermod -aG docker $USER
```

To make sure it has been applied you need to log out and login again then type:

```
cat /etc/group | grep docker
```

should return something like `docker:x:999:ubuntu`.

## Install Docker Compose

You can install Docker Compose by following the official documentation at [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Install the SDK for MQTT

```sh
sudo apt-get update
sudo apt install python3-pip
pip3 install AWSIoTPythonSDK
```

## Configure git

Make sure your `git`, installation is correctly configured (e.g., with the correct SSH key if required), so that the `git clone` command will work properly.

## Run Pebble Backend Configuration

To start the backend configuration run:

```sh
cd ~/pebble-backend-master
./setup-dev.sh
```

this will download all docker images and code repos first, and may take a while before completion.

## Start the backend service

To start the backend service run:

```sh
./start-dev.sh
```

Make sure all the docker images are up and running by running

```sh
docker ps
```

and you should see something like below:

```
CONTAINER ID        IMAGE                            COMMAND                  CREATED             STATUS              PORTS
                                  NAMES
116b6aa864c8        minio/minio:latest               "/usr/bin/docker-ent…"   14 minutes ago      Up 14 minutes       0.0.0.0:9000->9000/tcp
                                  docker-compose_minio_1
a651095d850d        iotex-hmq:local                  "/hmq -c /config/con…"   14 minutes ago      Up 14 minutes       0.0.0.0:1884->1883/tcp
                                  docker-compose_hmq_1
a67d65f71c76        thingsboard/tb-gateway:latest    "/bin/sh ./start-gat…"   14 minutes ago      Up 14 minutes
                                  docker-compose_thingsboard-gateway_1
9ce61f993ca5        iotex-blockchain-data:local      "pebble-data-contain…"   14 minutes ago      Up 14 minutes
                                  docker-compose_api-server_1
cbb292f45664        thingsboard/tb-postgres:latest   "start-tb.sh"            14 minutes ago      Up 14 minutes       0.0.0.0:1883->1883/tcp, 0.0.0.0:5683->5
683/udp, 0.0.0.0:8080->9090/tcp   docker-compose_thingsboard_1
```

Make sure port `1884` is exposed for MQTT and port `8080` is exposed for Thingsboard, from any other machine type (replace `1.2.3.4`with the actual IP address of your backend server):

```sh
telnet 1.2.3.4 1884
telnet 1.2.3.4 8080
```

## Configure thingsboard

Login in Thingsboard via [http://1.2.3.4:8080/]() with the default username: `tenant@thingsboard.org` and password `tenant` (feel free to change your password after login).

In Thingsboard, create a Gateway device:
![](/img/developer/pebble-backend/create-gateway-1.jpg)

![](/img/developer/pebble-backend/create-gateway-2.jpg)

![](/img/developer/pebble-backend/create-gateway-3.jpg)

Copy the `Access Token` of the gateway device and paste it in the configuration file of the gateway:

![](/img/developer/pebble-backend/create-gateway-4.jpg)

```
sudo nano ~/pebble-var/conf/tb-gateway/conf/tb_gateway.yaml
```

Replace `xxxxxxxxxxxxx` with the newly copied token

```yaml
thingsboard:
  host: thingsboard
  port: 1883
  security:
    accessToken: xxxxxxxxxxxxx
storage:
  type: memory
  read_records_count: 100
  max_records_count: 100000

connectors:
  - name: MQTT Broker Connector
    type: mqtt
    configuration: mqtt.json
```

6. Restart the gateway service with:

```
docker restart docker-compose_thingsboard-gateway_1
```

7. Congrats! You just setup the pebble backend, which is ready to receive data from Pebble Trackers!

## Visualize the Data on Thingsboard

To visualize some data, you can use the `mock` tool to generate and send some test data compliant with the Pebble Tracker data specs.

### Inject Mock Data

Run the following on the sPebble Backend server:

```
cd pebble-backend-master/scripts
./mock-dev.sh
```

This script continously produce data points according to pebble data specification, and inject it into the local `1884` port. If you run into an issue, e.g., not see data flow in, you can run directly `python3 ./run-dev.py -e localhost -p 1884 -id device/pebble-1/data -pf ../data/sample.txt` to debug.

### Visualize the data

Import the predefined dashboard:

![](/img/developer/pebble-backend/import-dashboard-1.jpg)

drop example/dashboard/pebble_1.json to the box

![](/img/developer/pebble-backend/import-dashboard-2.jpg)

![](/img/developer/pebble-backend/import-dashboard-3.jpg)

Click the Modify Icon at the bottom right of the screen:

![](/img/developer/pebble-backend/import-dashboard-4.jpg)

Select the device `pebble-1`from the dropdown:

![](/img/developer/pebble-backend/import-dashboard-5.jpg)
