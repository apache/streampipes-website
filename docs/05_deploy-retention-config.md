---
id: deploy-retention-config
title: Enable Datalake Retention
sidebar_label: Enable Datalake Retention
---

This page provides instructions on how to enable and test the Datalake retention feature. The Datalake retention feature automates the process of deleting and saving the contents of the Datalake to either a local filesystem or a cloud provider (currently, only S3-compatible providers are supported) at predefined intervals. Retention actions are carried out as scheduled CRON jobs, executing at specified times.

## Prerequisites

To use a cloud provider, you must have an existing S3-compatible provider, along with the necessary authentication key, secret, and bucket. Alternatively, you can use the test settings provided below.

## Settings

### Deployment Setting

To enable the usage of the retention feature depending on the exact setting, two environment variables need to be set during streampipes deployment.

```yaml

    "SP_RETENTION_LOCAL_DIR":"/output",
    "SP_DATALAKE_SCHEDULER_CRON":"0 1 0 * * 6"

```

The `SP_DATALAKE_SCHEDULER_CRON` environment variable defines when the CRON job will run. By default, the job runs every Saturday at 00:01 (using the cron expression "0 1 0 * * 6"). For development environments, shorter intervals are often more useful. For example, setting it to "0 */2 * * * *" will execute the job every two minutes.

When using local file storage, you can specify the storage directory via the `SP_RETENTION_LOCAL_DIR` variable. If you need the data to be accessible outside the Docker container, an additional volume mapping will be required in the backend.

```yaml
[...]
  backend:
    [...]
    volumes:
      - ./output/:/output

[...]
```

### Configure Retention for a Measure

The retention configuration must be set individually for each desired DataLake. To configure retention settings:

1. Navigate to **Configuration > DataLake**.
2. Click on the **Retention Rate** icon in the corresponding column.
3. A dialog will appear, allowing you to configure the following options:
    - **Data to Retain**: Select which data should be retained.
    - **Retention Action**: Choose the retention action:
      - **Delete**
      - **Save**
      - **Save and Delete**

If **Save** is selected, you can also configure:

- **Export Format**: Specify the format in which the data will be exported.
- **Export Destination**: Choose the destination for the saved data:
  - **Folder**: No further configuration needed.
  - **S3**: Requires an existing Export Provider to be set up (see the section below for details).


#### Generate a new Export Provider

To create a new export provider go to `Configuration > DataLake`, click on `+` and provide the access key, secret, endpoint, bucket name, and region.

<img className="docs-image" src="/img/05_deploy-retention-config/NewExportProvider.png" alt="New Export Provider"/>

For the Test Setting below this might be: 
- **Access Key**: test
- **Access Secret**: test 
- **Endpoint**: http://0.0.0.0:4566
- **Bucket**: random 
- **Region**: us-east-1





## Test Setting 
For Testing and Developing S3-based Export Provider it is possible to rely on locally hosted docker container e.g., localstack. 
```yaml
services:
  localstack:
    image: localstack/localstack:latest
    container_name: localstack_main
    environment:
      - DOCKER_HOST=unix:///var/run/docker.sock
      - AWS_ACCESS_KEY_ID=test
      - AWS_SECRET_ACCESS_KEY=test
      - DEFAULT_REGION=us-east-1
      - SERVICES=s3  
    ports:
      - "4566:4566"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock" 
      - "localstack_data:/var/lib/localstack" 
volumes:
  localstack_data:
    driver: local
```

For local testing start the container `docker compose up`, create a new bucket with the following java script: 

```java

import java.net.URI;
import java.nio.file.Path;
import java.nio.file.Paths;

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;

public class S3TestClean {

    private static final String ACCESS_KEY = "test";
    private static final String SECRET_KEY = "test";
    private static final String ENDPOINT = "http://0.0.0.0:4566";
    private static final Region REGION = Region.US_EAST_1;
    private static final String BUCKET_NAME = "random";


    public static void main(String[] args) {
        System.setProperty("software.amazon.awssdk.enableDefaultMetrics", "true");

        try (S3Client s3 = createS3Client()) {
            createBucketIfNotExists(s3, BUCKET_NAME);
            listBuckets(s3);
            listObjects(s3);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static S3Client createS3Client() {
        return S3Client.builder()
                .endpointOverride(URI.create(ENDPOINT))
                .region(REGION)
                .credentialsProvider(
                        StaticCredentialsProvider.create(
                                AwsBasicCredentials.create(ACCESS_KEY, SECRET_KEY)
                        )
                )
                .build();
    }

        private static void createBucketIfNotExists(S3Client s3, String bucketName) {
        System.out.println("Checking if bucket exists: " + bucketName);
        try {
            ListBucketsResponse response = s3.listBuckets();
            boolean exists = response.buckets().stream()
                    .anyMatch(bucket -> bucket.name().equals(bucketName));

            if (!exists) {
                System.out.println("Bucket does not exist. Creating: " + bucketName);
                s3.createBucket(CreateBucketRequest.builder().bucket(bucketName).build());
            } else {
                System.out.println("Bucket already exists: " + bucketName);
            }
        } catch (S3Exception e) {
            System.err.println("Failed to check/create bucket: " + e.awsErrorDetails().errorMessage());
        }
    }

    private static void listBuckets(S3Client s3) {
        System.out.println("Listing S3 buckets:");
        try {
            ListBucketsResponse response = s3.listBuckets();
            response.buckets().forEach(bucket -> System.out.println(" - " + bucket.name()));
        } catch (S3Exception e) {
            System.err.println("Failed to list buckets: " + e.awsErrorDetails().errorMessage());
        }
    }

    private static void listObjects(S3Client s3) {
        System.out.println("Listing objects in bucket: " + BUCKET_NAME);
        try {
            ListObjectsV2Request request = ListObjectsV2Request.builder()
                    .bucket(BUCKET_NAME)
                    .build();

            ListObjectsV2Response response = s3.listObjectsV2(request);
            response.contents().forEach(obj -> System.out.println("File: " + obj.key()));
        } catch (S3Exception e) {
            System.err.println("Failed to list objects: " + e.awsErrorDetails().errorMessage());
        }
    }

  
}

```
Pom.xml dependencies:

```xml
 <dependency>
        <groupId>software.amazon.awssdk</groupId>
        <artifactId>s3</artifactId>
        <version>2.25.14</version> <!-- Use latest -->
    </dependency>

    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-api</artifactId>
        <version>2.0.17</version>  
    </dependency>


```