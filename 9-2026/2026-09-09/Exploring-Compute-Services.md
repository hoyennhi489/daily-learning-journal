# 1. Introduction to Serverless Computing

In this lesson, I learned about **Serverless Computing** and different compute services on AWS.

## 1.1. Unmanaged Services

**Unmanaged services** such as **Amazon EC2** provide a high level of control over virtual machines.

AWS manages the **physical infrastructure**, while components such as the **OS, network configuration, and applications** need to be configured and managed separately.

## 1.2. Managed Services

**Managed services** help reduce the amount of infrastructure management required.

AWS takes responsibility for more operational tasks, making application deployment and management simpler.

## 1.3. Fully Managed / Serverless Services

**Serverless services** are fully managed and do not require users to provision or manage servers.

Example: **AWS Lambda**.

AWS handles:

* Infrastructure
* Scaling
* Availability
* Server maintenance

Serverless allows developers to focus on **application code** instead of managing servers.

## 1.4. Comparing the Models

**Unmanaged → More components need to be configured and managed**

**Managed → AWS manages more of the infrastructure**

**Serverless → No server management, focus on application code**

## 1.5. Key Knowledge to Remember

**EC2 → Unmanaged compute**

**Managed services → Reduce infrastructure management**

**Serverless → Fully managed, automatic scaling, and no server management**

# 2. AWS Lambda

In this lesson, I learned about **AWS Lambda** – a **serverless** service used to run code without having to manage servers myself.

## 2.1. What is AWS Lambda?

* **AWS Lambda** allows code to run when an **event** occurs.
* I do not need to create, install, or manage servers myself.
* AWS manages the underlying **infrastructure**.
* Lambda can **automatically increase or decrease resources** depending on the number of requests.
* I only pay based on the **amount of time the code actually runs**.
* I can adjust the **memory** allocated to a function to improve performance.

## 2.2. How Does Lambda Work?

A typical Lambda workflow includes:

1. **Trigger** – an event that activates Lambda, such as a user uploading a file.
2. **Lambda Function** – the code that runs when the event occurs.
3. **Runtime** – the environment in which Lambda runs the code.
4. **Scaling** – Lambda automatically adjusts the required resources based on the number of requests.

**Example:**

When a user uploads an image, the **trigger** activates Lambda → Lambda runs the function to process the image → AWS automatically scales the resources if many users upload images at the same time.

## 2.3. What is Lambda Used For?

Lambda is suitable for **event-driven** applications, for example:

* **Real-time image processing:** Automatically resize or apply filters when users upload images.
* **Personalized content delivery:** Process data to provide content that is appropriate for each user.
* **Game event processing:** Respond quickly when events occur in a game.

## 2.4. Example: Amazon SQS with Lambda

**Amazon SQS** can be combined with Lambda to create an automated workflow:

**Message → SQS Queue → Lambda Function → Log**

Lambda receives messages from SQS and executes the corresponding function. During this process, **permissions** must be configured so that Lambda has permission to access SQS.

## 2.5. What is Still the User's Responsibility?

When using Lambda, AWS manages the underlying servers, scaling, and operating system.

The user is still responsible for things such as:

* **Managing data access permissions**
* Lambda code
* Function configuration and the required permissions

## 2.6. Key Points

**AWS Lambda = Run code without managing servers.**

The most important points:

* **Serverless**
* **Run code when an event occurs**
* **Automatic scaling**
* **No need to manage servers**
* **Pay based on execution time**
* Main components: **Trigger + Function + Runtime + Scaling**

# 3. Containers and Orchestration on AWS

In this lesson, I learned about **Containers** and AWS services used to run, store, and manage containers.

## 3.1. What is a Container?

A **container** packages an application together with everything it needs to run, such as **code, libraries, and dependencies**.

This allows the application to run **consistently across different environments**, such as a developer's machine, a testing environment, and production.

### Container vs Virtual Machine (VM)

* **Containers** are lightweight and start faster.
* Containers **share the host operating system**, so they use fewer resources.
* **VMs** run their own operating system through a **hypervisor**, so they generally use more resources and take longer to start.

## 3.2. Containers Help Make Application Deployment More Consistent

A common problem is that an application works well on a developer's machine but fails in another environment because of **missing dependencies or different configurations**.

Containers solve this problem by packaging the application and the required environment into the same container.

→ Therefore, the application can run **more consistently across environments**, and troubleshooting becomes easier.

## 3.3. What is Orchestration?

When there are only a few containers, they can be managed manually. However, when an application has **hundreds or thousands of containers**, managing them manually becomes very difficult.

**Container orchestration** helps automatically:

* Deploy containers
* Scale containers
* Manage the container lifecycle
* Monitor and manage multiple containers

AWS provides several key services for working with containers, including **ECS, EKS, ECR, and Fargate**.

## 3.4. Amazon ECS

**Amazon ECS (Elastic Container Service)** is AWS's **container orchestration** service.

ECS helps run and manage containers, such as **Docker containers**.

ECS can run in two main ways:

* **ECS + Amazon EC2:** Provides more control over the infrastructure and EC2 instances.
* **ECS + AWS Fargate:** No need to manage servers yourself, making it suitable when the focus is on application development.

## 3.5. Amazon EKS

**Amazon EKS (Elastic Kubernetes Service)** is an AWS-managed service for running **Kubernetes**.

EKS helps deploy, manage, and scale containerized applications using Kubernetes.

It can be used with:

* **EKS + Amazon EC2:** Provides more control and customization over the infrastructure.
* **EKS + AWS Fargate:** Uses Kubernetes without requiring users to manage servers.

## 3.6. Amazon ECR

**Amazon ECR (Elastic Container Registry)** is used to **store, manage, and deploy container images**.

Simply:

**ECR = A place to store container images.**

For example, after creating a Docker image, I can **push** the image to ECR, and AWS container services can then **pull** the image and use it to run a container.

ECR supports container images based on the **OCI (Open Container Initiative)** standard.

## 3.7. AWS Fargate

**AWS Fargate** is a **serverless compute engine for containers**.

Fargate can work with both **ECS and EKS**.

Key points:

* No need to create servers yourself.
* No need to manage servers.
* AWS manages the underlying infrastructure.
* I can focus on the container and application.
* I pay based on the resources required to run the container.

Simply:

**ECS/EKS → Orchestrate containers**

**Fargate → Provides compute to run containers without managing servers**

**ECR → Stores container images**

## 3.8. How to Remember the 4 Services

| Service         | Main Function                           |
| --------------- | --------------------------------------- |
| **Amazon ECS**  | Manage and run containers on AWS        |
| **Amazon EKS**  | Manage Kubernetes and containers        |
| **Amazon ECR**  | Store and manage container images       |
| **AWS Fargate** | Run containers without managing servers |

## 3.9. Key Points to Remember

**Container** packages an application so that it can run consistently across different environments.

**Orchestration** automatically manages, deploys, and scales multiple containers.

The four services to remember:

**ECR = Store images**

**ECS = Manage containers**

**EKS = Manage Kubernetes**

**Fargate = Run containers without managing servers**

# 4. Additional Compute Services

In this lesson, I learned about some additional **compute services** on AWS. Each service is designed for a different purpose, such as deploying web applications, processing large numbers of jobs, creating simple servers, or using AWS in an on-premises environment.

## 4.1. AWS Elastic Beanstalk

**Elastic Beanstalk** makes it easier to deploy, manage, and scale **web applications**.

I only need to provide my **code**, and Elastic Beanstalk can automatically handle:

* Creating the required infrastructure
* **Auto Scaling** when traffic changes
* **Load balancing**
* Monitoring the application's health

It supports many programming languages and frameworks such as **Java, .NET, Python, Node.js, and Docker**.

**Used for:** Web applications, REST APIs, mobile backends, and microservices.

→ Simply remember: **Elastic Beanstalk = Upload code and AWS helps with deployment, scaling, and monitoring.**

## 4.2. AWS Batch

**AWS Batch** is used to run **batch computing workloads** – tasks that need to process large amounts of data or many jobs at the same time.

AWS Batch automatically:

* Schedules jobs
* Manages compute resources
* Scales resources based on demand
* Allocates appropriate resources for each job

**Used for:** Scientific computing, financial analysis, video processing, big data, machine learning, and genomics.

→ Simply remember: **AWS Batch = Run and manage large-scale computing jobs in batches.**

## 4.3. Amazon Lightsail

**Amazon Lightsail** provides basic resources such as:

* **Virtual Private Server (VPS)**
* Storage
* Database
* Networking

Lightsail is simpler to use and offers **predictable monthly pricing**, making it suitable for people who do not want to work with complex AWS infrastructure.

**Used for:**

* Small websites
* Blogs
* Simple web applications
* Small business websites
* Development and testing
* Learning AWS

→ Simply remember: **Lightsail = Simple AWS solution for small websites and workloads.**

## 4.4. AWS Outposts

**AWS Outposts** extends AWS infrastructure and services to **on-premises data centers**.

This allows businesses to use an environment similar to the AWS Cloud directly at their own location.

**Used for:**

* Applications that require **low latency**
* Processing data at a specific location
* Modernizing legacy systems
* Use cases with **compliance** or **data residency** requirements

→ Simply remember: **Outposts = Bring AWS to on-premises environments.**

## 4.5. How to Remember the 4 Services

| Service               | Main Function                          |
| --------------------- | -------------------------------------- |
| **Elastic Beanstalk** | Deploy and scale web applications      |
| **AWS Batch**         | Run large computing workloads          |
| **Lightsail**         | Simple VPS and cloud services          |
| **AWS Outposts**      | Extend AWS to on-premises environments |

## 4.6. Key Points to Remember

**Elastic Beanstalk → Web applications**

**AWS Batch → Batch computing**

**Lightsail → Simple VPS**

**AWS Outposts → On-premises / Hybrid Cloud**
