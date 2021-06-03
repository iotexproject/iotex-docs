(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{637:function(a,t,e){"use strict";e.r(t);var s=e(38),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"pebble-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pebble-dashboard"}},[a._v("#")]),a._v(" Pebble Dashboard")]),a._v(" "),e("h2",{attrs:{id:"writing-s3-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-s3-data"}},[a._v("#")]),a._v(" Writing S3 data")]),a._v(" "),e("ol",[e("li",[a._v("Trackers collect data and places it in the corresponding topic of IOT-Core, such as "),e("code",[a._v("nrf-352656100458374")]),a._v(".")]),a._v(" "),e("li",[a._v("IOT-Core listens for the corresponding topic and adds the post-processing command: write to S3. Pay attention to the setting of role permissions. Make sure that the specified S3 bucket has writable permissions.")]),a._v(" "),e("li",[a._v("IOT-Core has Web-UI to mock data into topic, which can be manually filled with several records for verification.")])]),a._v(" "),e("p",[a._v("The file format of S3 is determined in the IOT-Core [Action] configuration. The content of the file is the active data of tracker. Such as:")]),a._v(" "),e("ul",[e("li",[a._v("GPS position information.")]),a._v(" "),e("li",[a._v("Temperature, Pessure and Humidity.")]),a._v(" "),e("li",[a._v("Gyroscope: AX AY AZ acceleration, GX GY GZ gravity acceleration.")]),a._v(" "),e("li",[a._v("Voltage data: VBAT.")])]),a._v(" "),e("h2",{attrs:{id:"converting-tracker-data-to-grtafana-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#converting-tracker-data-to-grtafana-dashboard"}},[a._v("#")]),a._v(" Converting tracker data to Grtafana dashboard")]),a._v(" "),e("h3",{attrs:{id:"create-a-kinesis-data-stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-kinesis-data-stream"}},[a._v("#")]),a._v(" Create a kinesis data stream")]),a._v(" "),e("p",[a._v("Kinesis data stream is used to hook up lambda data processing functions. Enter the kinesis console and create a kinesis data stream. The number of slices is set to 1 and the name is "),e("code",[a._v("test-stream")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"create-iam-role"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-iam-role"}},[a._v("#")]),a._v(" Create IAM role")]),a._v(" "),e("ul",[e("li",[a._v("Create Role: "),e("code",[a._v("test-stream")]),a._v(", permission: "),e("code",[a._v("AmazonKinesisFullAccess")])]),a._v(" "),e("li",[a._v("Create Role: "),e("code",[a._v("lambda_role")]),a._v(", permission: "),e("code",[a._v("AWSLambdaKinesisExecutionRole")])])]),a._v(" "),e("h3",{attrs:{id:"iot-core-to-kinesis-data-stream"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iot-core-to-kinesis-data-stream"}},[a._v("#")]),a._v(" IOT-Core to Kinesis data stream")]),a._v(" "),e("ul",[e("li",[a._v("Enter the IOT core console and click "),e("code",[a._v("Action")]),a._v(" in the left sidebar")]),a._v(" "),e("li",[a._v("Create a rule with the following parameters:\n"),e("ul",[e("li",[a._v("The name is "),e("code",[a._v("test_stream")])]),a._v(" "),e("li",[a._v("SQL like: "),e("code",[a._v("select * from 'topic / nrf-352656100458374'")])]),a._v(" "),e("li",[a._v("Add operation: send the message to Amazon kinesis stream, and select role as "),e("code",[a._v("test-stream")]),a._v(".")])])])]),a._v(" "),e("h3",{attrs:{id:"create-lambda-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-lambda-function"}},[a._v("#")]),a._v(" Create Lambda Function")]),a._v(" "),e("ul",[e("li",[a._v("Create a lambda function:\n"),e("ul",[e("li",[a._v("Name: testInfluxdb")]),a._v(" "),e("li",[a._v("Runtime: Python 2.7")]),a._v(" "),e("li",[a._v("Role: "),e("code",[a._v("lambda_role")])])])]),a._v(" "),e("li",[a._v("Click this function:\n"),e("ul",[e("li",[a._v("Add Trigger: Kinesis data stream, choose "),e("code",[a._v("test-stream")]),a._v(".")]),a._v(" "),e("li",[a._v("Edit python scripts")]),a._v(" "),e("li",[a._v("Save")])])])]),a._v(" "),e("p",[a._v("Example:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('import urllib2\nimport base64\nimport json\nimport time\n\ng_influx_addr = "http://54.225.17.236:8086/write?db=pebble"\ndef write_point(info):\n    #print str(info)\n    dbreq = urllib2.Request(g_influx_addr, data = info)\n    urllib2.urlopen(dbreq)\n\ndef lambda_handler(event, context):\n    req_data = ""\n    for record in event[\'Records\']:\n        payload = base64.b64decode(record[\'kinesis\'][\'data\'])\n        print "Decoded payload: " + payload\n        data = json.loads(payload)\n        # temperature\n        if \'T(degC)\' in data:\n            T = data[\'T(degC)\']\n            temp = "temperature,name=temperature C=" + str(T)\n            #temp += " " + str(data[\'timestamp\'] * 1000000)\n            temp += " " + str(int(time.time()) * 1000000000)\n            #print "req_str: " + str(temp)\n            req_data += "\\n"\n            req_data += temp\n        else:\n            print("not found T")\n        # pressure\n        if \'P(hPa)\' in data:\n            P = data[\'P(hPa)\']\n            temp = "pressure,name=pressure P=" + str(P)\n            #temp += " " + str(data[\'timestamp\'] * 1000000)\n            temp += " " + str(int(time.time()) * 1000000000)\n            #print "req_str: " + str(temp)\n            req_data += "\\n"\n            req_data += temp\n        else:\n            print("not found P")\n        # location\n        if "latitude" in data and "longitude" in data:\n            latitude = data["latitude"]\n            longitude = data["longitude"]\n            temp = "location,name=location latitude=" + str(latitude)\n            temp += ",longitude=" + str(longitude)\n            #temp += " " + str(data[\'timestamp\'] * 1000000)\n            temp += " " + str(int(time.time()) * 1000000000)\n            req_data += "\\n"\n            req_data += temp\n        else:\n            print "not found longitude latitude"\n    if req_data == "":\n        return\n    print "req_data: " + str(req_data)\n    write_point(req_data)\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br"),e("span",{staticClass:"line-number"},[a._v("33")]),e("br"),e("span",{staticClass:"line-number"},[a._v("34")]),e("br"),e("span",{staticClass:"line-number"},[a._v("35")]),e("br"),e("span",{staticClass:"line-number"},[a._v("36")]),e("br"),e("span",{staticClass:"line-number"},[a._v("37")]),e("br"),e("span",{staticClass:"line-number"},[a._v("38")]),e("br"),e("span",{staticClass:"line-number"},[a._v("39")]),e("br"),e("span",{staticClass:"line-number"},[a._v("40")]),e("br"),e("span",{staticClass:"line-number"},[a._v("41")]),e("br"),e("span",{staticClass:"line-number"},[a._v("42")]),e("br"),e("span",{staticClass:"line-number"},[a._v("43")]),e("br"),e("span",{staticClass:"line-number"},[a._v("44")]),e("br"),e("span",{staticClass:"line-number"},[a._v("45")]),e("br"),e("span",{staticClass:"line-number"},[a._v("46")]),e("br"),e("span",{staticClass:"line-number"},[a._v("47")]),e("br"),e("span",{staticClass:"line-number"},[a._v("48")]),e("br"),e("span",{staticClass:"line-number"},[a._v("49")]),e("br"),e("span",{staticClass:"line-number"},[a._v("50")]),e("br"),e("span",{staticClass:"line-number"},[a._v("51")]),e("br"),e("span",{staticClass:"line-number"},[a._v("52")]),e("br"),e("span",{staticClass:"line-number"},[a._v("53")]),e("br"),e("span",{staticClass:"line-number"},[a._v("54")]),e("br"),e("span",{staticClass:"line-number"},[a._v("55")]),e("br")])]),e("h3",{attrs:{id:"grafana-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grafana-dashboard"}},[a._v("#")]),a._v(" Grafana Dashboard")]),a._v(" "),e("p",[a._v("http://docs.grafana.org/")])])}),[],!1,null,null,null);t.default=n.exports}}]);