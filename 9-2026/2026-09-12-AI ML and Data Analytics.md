# 1. Introduction to AI and Machine Learning

In this lesson, I learned about the basic concepts of **Artificial Intelligence (AI)** and **Machine Learning (ML)**.

## 1.1. Artificial Intelligence (AI)

**AI (Artificial Intelligence)** is a field that develops computer systems capable of performing tasks similar to humans.

## 1.2. Machine Learning (ML)

**ML (Machine Learning)** is a type of AI that helps computers learn from a large amount of **historical data** without needing to be given specific step-by-step instructions.

The Machine Learning process finds **patterns** in data to create an **ML model**.

The ML model can use new data to:

* Make **predictions**.
* Make **decisions**.

## 1.3. Key Knowledge

**AI → Computer systems perform tasks similar to humans.**

**ML → A type of AI that learns from data to create an ML model.**

**Historical data → Find patterns → ML model → Predictions / Decisions**

# 2. AI/ML on AWS

In this lesson, I learned about common **AI/ML use cases** and the 3 groups of AI/ML solutions on AWS.

## 2.1. Common ML Business Use Cases

Machine Learning can be used to:

* **Predict trends** → predict trends, such as future stock prices.
* **Make decisions** → support decision-making, such as routing a call to the correct department.
* **Detect anomalies** → detect unusual things, such as fraudulent transactions.
* **Recommendations** → provide product recommendations based on data.

## 2.2. AWS AI/ML Solutions

The AWS AI/ML stack has **3 solution layers**:

### AI Services

* **Pre-built and pre-trained models**.
* Used for specific AI functions.

### ML Services

* Allow users to build, train, and deploy their own **ML models**.
* **Amazon SageMaker AI** provides managed infrastructure to support this process.

### ML Frameworks and Infrastructure

* Allow users to build **fully customized** ML models.
* Use **purpose-built chips** and popular ML frameworks.

## 2.3. Key Knowledge

**AI Services → Pre-built models → Easy to use**

**ML Services → Build + Train + Deploy your own model**

**ML Frameworks & Infrastructure → Most customization**

# 3. AWS AI/ML Solutions

In this lesson, I learned about the **3 groups of AI/ML solutions on AWS**, from ready-to-use services to solutions that allow more customization.

## 3.1. Pre-built AWS AI Services

These are **pre-built and pre-trained AI services** that can be used immediately for different needs.

Some services include:

* **Amazon Comprehend:** analyzes text, finds keywords, and detects sentiment.
* **Amazon Polly:** converts text to speech.
* **Amazon Transcribe:** converts speech to text.
* **Amazon Translate:** translates text between multiple languages.
* **Amazon Kendra:** searches for information in documents.
* **Amazon Rekognition:** analyzes images and videos.
* **Amazon Textract:** recognizes and extracts text from documents.
* **Amazon Lex:** creates applications that can communicate using text or speech.
* **Amazon Personalize:** creates recommendations that are suitable for each user.

## 3.2. ML Services

**Amazon SageMaker AI** allows users to build, train, and deploy their own ML models without managing the infrastructure themselves.

SageMaker AI also supports monitoring the training process, analyzing data, and monitoring models.

## 3.3. ML Frameworks and Infrastructure

This is the level with the **highest customization**, for cases that need more control during the process of building and training ML models.

* **ML frameworks:** libraries and tools that support building ML models, such as **PyTorch** and **TensorFlow**.
* **AWS ML infrastructure:** uses AWS services and infrastructure to support specialized ML workloads.

### Remember

**3 AI/ML levels on AWS:**

1. **AI Services** → use pre-built models.
2. **ML Services** → build your own models with **SageMaker AI**.
3. **ML Frameworks & Infrastructure** → build ML solutions with a high level of customization.

# 4. Introduction to Generative AI on AWS

In this lesson, I learned about **Deep Learning**, **Generative AI**, and some Generative AI solutions on AWS.

## 4.1. Deep Learning

**Deep Learning (DL)** is a branch of **Machine Learning**. Deep Learning uses multiple layers of **artificial neural networks** to learn and process data.

The neural network layers process information and pass the results to the next layers to create a model.

## 4.2. Generative AI

**Generative AI** is a type of **Deep Learning** that uses very large ML models called **Foundation Models (FMs)**.

Foundation Models are pre-trained on a very large amount of data. Unlike traditional ML models, which are usually created for a specific task, Foundation Models can be used for many different tasks.

**Large Language Models (LLMs)** are a type of Foundation Model trained to process human language.

Generative AI can be used to create:

* Text
* Images
* Videos
* Music

## 4.3. Generative AI on AWS

AWS provides some main Generative AI solutions:

* **Amazon SageMaker JumpStart:** provides Foundation Models and pre-built ML solutions for quick deployment.
* **Amazon Bedrock:** a fully managed service that allows users to use and customize Foundation Models from Amazon and other AI companies.
* **Amazon Q:** an interactive AI assistant that can connect to business information and data.

### Remember

**Deep Learning → Generative AI → Foundation Models**

Three Generative AI solutions on AWS:

1. **SageMaker JumpStart** → pre-built models and solutions.
2. **Amazon Bedrock** → use and customize Foundation Models.
3. **Amazon Q** → interactive AI assistant.

# 5. AWS Generative AI Solutions

## 5.1 Amazon SageMaker JumpStart

**SageMaker JumpStart** = a library of pre-built ML models in **SageMaker AI**, helping users build, train, and deploy ML models faster.

* Provides many pre-built models.
* Supports:

  * Computer Vision
  * NLP
  * Tabular Data
* Models can be **fine-tuned** based on specific needs.
* Models can be deployed quickly.

**Use cases:**

* Quickly deploy ML models.
* Create customized models.
* Experiment and create prototypes.

## 5.2 Amazon Bedrock

**Amazon Bedrock** = an AWS-managed service for building **Generative AI** applications using **Foundation Models (FMs)**.

* Access multiple FMs through **one API**.
* Provides models from Amazon and other AI companies.
* Models can be tested and **fine-tuned**.
* No need to manage the infrastructure yourself.

**Use cases:**

* Build Generative AI applications for businesses.
* Create content using **text and images**.
* Build conversational AI applications.

## 5.3 Amazon Q

**Amazon Q** = a **Generative AI** assistant that helps businesses find information, create content, and support work.

### Amazon Q Business

**Amazon Q Business** = an AI assistant that uses business data and information.

* Answers questions based on company data.
* Helps solve problems.
* Helps perform some tasks.
* Connects securely to business systems.

**Use cases:**

* Search for information.
* Automate tasks.
* Get useful information from data.

### Amazon Q Developer

**Amazon Q Developer** = an AI assistant for developers.

* Suggests code.
* Creates functions and code snippets.
* Supports C#, Java, JavaScript, Python, and TypeScript.
* Integrates with many IDEs.
* Supports code checking.

**Use cases:**

* Write code faster.
* Improve reliability and security.
* Automatically check code.

## 5.4 Comparison

| **Service**             | **Main Purpose**                          |
| ----------------------- | ----------------------------------------- |
| **SageMaker JumpStart** | Build and deploy ML quickly               |
| **Amazon Bedrock**      | Build Generative AI applications with FMs |
| **Amazon Q Business**   | Support business information and work     |
| **Amazon Q Developer**  | Support programming                       |

### Remember these 4 lines

**SageMaker JumpStart → ML → Build and deploy quickly**

**Amazon Bedrock → Foundation Models → Generative AI**

**Amazon Q Business → Business data → Support work**

**Amazon Q Developer → Code → Support programming**

# 6. Introduction to Data Analytics

## 6.1 Data Pipelines for ETL

**ETL** = a process for preparing data so that **Data Analytics** and **AI/ML** can use clean and accessible data.

ETL has 3 steps:

1. **Extract** → collect data from multiple sources.
2. **Transform** → convert data into a consistent and easy-to-use format.
3. **Load** → load data into a target system such as a **Data Warehouse** or analytics platform.

**Data Pipeline** = an automated process that helps ETL work efficiently and can be repeated.

```text
Data Sources
```

```text
     ↓
```

```text
Extract
```

```text
     ↓
```

```text
Transform
```

```text
     ↓
```

```text
Load
```

```text
     ↓
```

```text
Data Warehouse / Analytics Platform
```

## 6.2 Data Analytics

**Data Analytics** = the process of transforming and analyzing historical data to find valuable **insights** and **trends**.

For example:

* A lending company analyzes data to explain decisions to customers.
* A medical researcher analyzes clinical trial data.
* An insurance company analyzes data to assess risk.

### Remember these 4 lines

**ETL → Extract → Transform → Load**

**Data Pipeline → Automates the ETL process**

**Data Analytics → Analyzes historical data**

**Goal → Valuable Insights + Trends**

# 7. Data Pipelines on AWS

## 7.1 Data Ingestion Services

**Data Ingestion** = bringing data from sources into a storage system.

There are 2 ways:

* **Real-time ingestion** → data needs to be brought in immediately.
* **Batch ingestion** → a period of waiting is acceptable.

### Amazon Kinesis Data Streams

* Used to collect **real-time** data.
* Processes large amounts of data from applications, streams, and sensors.
* Can automatically scale.

### Amazon Data Firehose

* Used to collect **near real-time** data.
* AWS manages resource provisioning and scaling.
* Delivers data to **Data Lakes, Data Warehouses**, and analytics services.

## 7.2 Data Storage Services

Data from multiple sources is often centralized in one place for analysis.

### Amazon S3

**Amazon S3** = a popular choice for building a **Data Lake**.

* Stores large amounts of data.
* Supports structured and unstructured data.
* Automatically scales as the amount of data increases.

### Amazon Redshift

**Amazon Redshift** = a managed **Data Warehouse** from AWS.

* Stores large amounts of structured or semi-structured data.
* Suitable for analyzing large datasets.

**Remember:**

`S3 → Data Lake → Raw Data`

`Redshift → Data Warehouse → Structured Data`

## 7.3 Data Cataloging Services

### AWS Glue Data Catalog

**AWS Glue Data Catalog** = a centralized place for storing **metadata** about data.

* Helps identify where the data is and what information it contains.
* Supports data search and management.
* Provides metadata for storage and analytics services.

## 7.4 Data Processing Services

**Data Processing** = cleaning and transforming data so that it is ready for analysis.

### AWS Glue

**AWS Glue** = a managed **ETL** service from AWS.

* Cleans data.
* Transforms data.
* Prepares data for analysis.
* Can use the **AWS Glue Data Catalog** to get metadata.

### Amazon EMR

**Amazon EMR** = a service for processing large amounts of data.

* Suitable for **Big Data**.
* AWS manages the creation and scaling of the system.
* Supports:

  * Apache Spark
  * Apache Hadoop
  * Apache Hive

## 7.5 Data Analysis and Visualization

### Amazon Athena

**Amazon Athena** = a service that uses **SQL** to query and analyze data.

* Can analyze data in **Amazon S3**.
* Serverless.
* Pay only for the queries that are performed.

### Amazon Redshift

* Analyzes large amounts of data using complex SQL queries.
* Suitable for frequent analysis and high-performance requirements.

### Amazon QuickSight

**Amazon QuickSight** = a service for creating **Dashboards** and **Reports**.

* Used by both technical and non-technical users.
* Creates interactive charts and dashboards.
* Can use **Amazon Q in QuickSight** to query using natural language.

### Amazon OpenSearch Service

* Searches data using keywords or natural language.
* Creates dashboards to monitor data in real time.
* Suitable for logs, traces, and metrics.

## 7.6 Data Pipeline Overview

```text
Data Sources
```

```text
     ↓
```

```text
Data Ingestion
```

```text
(Kinesis Data Streams / Data Firehose)
```

```text
     ↓
```

```text
Data Storage
```

```text
(S3 / Redshift)
```

```text
     ↓
```

```text
Data Catalog
```

```text
(Glue Data Catalog)
```

```text
     ↓
```

```text
Data Processing
```

```text
(Glue / EMR)
```

```text
     ↓
```

```text
Analysis & Visualization
```

```text
(Athena / Redshift / QuickSight / OpenSearch)
```

### Remember these 6 lines

**Kinesis Data Streams → Real-time ingestion**

**Data Firehose → Near real-time ingestion**

**S3 → Data Lake → Store large amounts of data**

**Redshift → Data Warehouse → Analyze large amounts of data**

**AWS Glue → ETL → Clean + transform data**

**QuickSight / OpenSearch → Visualization → Dashboard + Insights**

# 8. Data Analytics and AI/ML

## 8.1 Automated Data Pipeline in Real Life

An **e-commerce** company can use an **automated data pipeline** to automatically:

* Collect data from the application.
* Process and clean the data.
* Store the data.
* Provide the same dataset to multiple teams.

```text
E-commerce App
```

```text
      ↓
```

```text
Data Ingestion
```

```text
      ↓
```

```text
Data Processing
```

```text
      ↓
```

```text
Data Storage
```

```text
 ┌───────────────┬─────────────────┐
```

```text
 ↓               ↓
```

```text
Data Analytics   AI/ML
```

```text
 ↓               ↓
```

```text
Data Scientists  ML Engineers
```

## 8.2 Benefits

**Data Scientists** can use the data to:

* Analyze data.
* Find **insights** and trends.

**ML Engineers** can use the same data to:

* Train **ML models**.
* Develop AI/ML applications.

Using an **automated data pipeline** helps data reach the right place automatically and efficiently, and allows the data to be used for both **Data Analytics** and **AI/ML**.

## 8.3 Main Flow

**E-commerce data → Ingestion → Processing → Delivery → Analytics + ML Model Training**

### Remember these 4 lines

**Automated Data Pipeline → Collect + Process + Deliver data**

**Data Scientists → Data Analytics**

**ML Engineers → ML Model Training**

**One Data Set → Analytics + AI/ML**