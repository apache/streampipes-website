---
title: Explore StreamPipes with Data Simulators!
author: Philipp Zehnder
authorURL: "https://github.com/tenthe"
authorImageURL: "/img/zehnder.png"
---

### Introduction

Are you excited to explore Apache StreamPipes but find yourself without any sensors to play with? 
Or maybe you're looking to validate StreamPipes for your use case and kick off a Proof of Concept (PoC) but the hardware is not yet available? 
No worries—the **File Stream Adapter** is here to save the day!

With the File Stream Adapter, you can upload a file containing sensor data in various formats (JSON, CSV, XML) and replay this data, giving you a hands-on way to dive into StreamPipes. 
It's not meant for production use, but it's perfect for experimenting with StreamPipes using your own data.

This blog post will take you on a exciting journey through configuring the **File Stream Adapter** and using it to simulate sensor data streams.

:::info
The adapter supports any type of data as long as it contains a **valid timestamp** in the form of a **Unix timestamp in milliseconds**.
:::

### Adapter Configuration

Let's break down the configuration options for the **File Stream Adapter:**

<img src="/img/blog/2024-07-15/adapter_configuration.png" alt="Adapter Configuration"/>

#### Configuration Options Explained
1. **File:** Choose an existing file or upload a new one.
2. **Overwrite file time:** If checked, the current time at which the event is triggered is used for the timestamp of the event, regardless of the timestamp value in the file.
3. **Replay Once:** Decide if the file should be replayed once or continuously until stopped.
   - Options: `yes` (file is replayed once), `no` (file is replayed continuously)
4. **Replay Speed:** Set the frequency of events.
   - Options: `Keep original time`, `Fastest (Ignore original time)`, `Speed Up Factor`
5. **Format:** Choose the format to parse the events.
   - Options: `JSON`, `CSV`, `XML`, `Image` (experimental feature)

### Use Case: Create a Sensor Simulator

Let's create a simulation data stream using your own sensor data. First, store the sample CSV data in a local file.

```
timestamp,density,mass_flow,sensorId,sensor_fault_flags,temperature,volume_flow
1719897720887,41.82,6.306,flowrate01,false,41.9,3.365
1719897721952,45.09,9.659,flowrate01,false,43.2,4.103
1719897722958,42.84,9.532,flowrate01,true,42.6,3.110
1719897723964,49.58,1.929,flowrate01,true,40.3,3.4684
1719897724970,41.83,4.173,flowrate01,false,40.7,0.246
1719897725975,48.11,10.90,flowrate01,false,46.4,5.275
```

To set up the adapter, follow these steps:

1. Open StreamPipes Connect.
2. Click on `+ New Adapter`.
3. Select the `File Stream Adapter`.
4. Enter the following configuration:
   - **File:** Upload your sample data file.
   - **Overwrite file time:** Check this box to use the current timestamp instead of the original time of the event in the file.
   - **Replay Once:** Choose `no` to create an ongoing data stream.
   - **Replay Speed:** Select `Keep original time` to maintain the original event frequency.
   - **Format:** Pick `CSV`, set the delimiter as `,` and check the `Header` box.
5. Click `Next` once you've added the correct configuration.
6. Configure the event schema by editing the `timestamp` field and selecting `Mark as timestamp`. Save your changes.
7. You can add additional meta information to the event schema, but it's not required for this tutorial. Click `Next` when done.
8. Enter an `Adapter Name`.
9. Check the `Persist events` box to store the data in the StreamPipes data store.
10. Click `Start Adapter`.

Once configured, you should see the following preview:

<img src="/img/blog/2024-07-15/adapter_started.png" alt="Adapter Preview"/>

### Use Case: Persist CSV File to Data Lake

Now, let's store the entire content of the file in the data lake. Once stored, you can analyze it with the `Data Explorer`. Here’s how to configure the adapter:

- **Overwrite file time:** Leave this unchecked to retain the original timestamps.
- **Replay Once:** Choose `yes` to read the file only once.
- **Replay Speed:** Select `Fastest (Ignore original time)` to write data as fast as possible.

:::info
Ensure the `Persist events` checkbox is selected to save the data to the data lake during the `Start Adapter` configuration.
:::

### Conclusion

In this tutorial, we've explored how to use the File Stream Adapter in Apache StreamPipes to create a simulation data stream and persist CSV data into a data lake. 
This adapter lets you experiment with StreamPipes' capabilities and explore its functionality using your own data. 
Happy streaming!
