# 1. Introduction to Amazon EC2

In this lesson, I learned about **Amazon EC2 (Elastic Compute Cloud)** and how to use virtual servers on AWS instead of managing physical servers myself.

## 1.1. What is Amazon EC2?

* **Amazon EC2** provides **virtual servers** to run applications and tasks in the Cloud.
* I can **launch, scale, and terminate** EC2 instances based on my needs.
* I only pay for the time the instance is running.

## 1.2. On-premises vs Cloud

**On-premises:**

* I have to purchase hardware upfront.
* I need to wait for delivery, installation, and server configuration.
* The initial cost is high, and it is difficult to change capacity.

**Cloud with EC2:**

* I can launch a server within minutes.
* I can scale resources based on demand.
* I do not need to purchase and maintain hardware myself.
* It is more flexible and can be more cost-effective.

## 1.3. Multi-tenancy

**Multi-tenancy** is when multiple virtual machines can run on the same physical host.

* Each virtual machine is **isolated** from the others.
* The virtual machines can still **share physical resources** of the host machine.

## 1.4. EC2 Instance

When launching an EC2 instance, I need to determine important information such as:

* **Instance type** → the type and configuration of the server.
* **Operating system (OS)** → the operating system.

An EC2 instance can be **stopped** or **terminated** when it is no longer needed.

## 1.5. Key Knowledge to Remember

**Amazon EC2 = Virtual Server + On-demand + Scalable + Pay-as-you-go**

EC2 allows me to easily create and manage virtual servers without having to purchase and operate physical hardware myself.

# 2. Amazon EC2 Instance Types

In this lesson, I learned about **EC2 Instance Types** and how to choose the appropriate instance type based on an application's needs.

## 2.1. EC2 Instance Types

Amazon EC2 provides many instance types with different combinations of:

* **CPU** → processing power
* **Memory** → RAM
* **Storage** → storage capacity
* **Networking** → network performance

Each type is designed for different **use cases**.

## 2.2. Main EC2 Instance Types

| Instance Type             | Characteristics                              | Use Case                                                       |
| ------------------------- | -------------------------------------------- | -------------------------------------------------------------- |
| **General Purpose**       | A balance of CPU, memory, and networking     | Web servers, general-purpose applications                      |
| **Compute Optimized**     | Powerful CPU and high processing performance | Data processing, batch processing, high-performance computing  |
| **Memory Optimized**      | Large amounts of RAM                         | Large datasets, real-time analytics                            |
| **Storage Optimized**     | High storage performance and disk throughput | Large amounts of data that require fast read/write performance |
| **Accelerated Computing** | Uses GPUs or other accelerators              | Machine Learning, AI, graphics                                 |

## 2.3. Instance Family and Size

The name of an EC2 instance is determined based on:

* **Instance family** → the group of instances and their intended purpose.
* **Instance size** → the size and resource configuration of the instance.

## 2.4. Key Knowledge to Remember

There is no single EC2 instance that is suitable for every application. I need to choose an instance based on **CPU, memory, storage, and workload**.

* Need powerful CPU processing → **Compute Optimized**
* Need a large amount of RAM → **Memory Optimized**
* Need high storage performance → **Storage Optimized**
* Need a balanced configuration → **General Purpose**
* Need a GPU/accelerator → **Accelerated Computing**

# 3. How to Provision AWS Resources

In this lesson, I learned how to **provision AWS resources** through APIs and the three main ways to interact with AWS.

## 3.1. Three Ways to Interact with AWS

AWS provides three main methods for calling **AWS APIs**:

* **AWS Management Console** → a web-based interface that is easy to use and suitable for manual operations.
* **AWS CLI (Command Line Interface)** → uses the command line and is suitable for **automation and scripting**, helping reduce manual operations and errors.
* **AWS SDK (Software Development Kit)** → allows me to use code to interact with AWS services and build applications.

## 3.2. Shared Responsibility with Amazon EC2

With **Amazon EC2**, responsibilities are shared.

**AWS is responsible for:**

* Physical hardware
* Data centers
* Cloud infrastructure
* Security **of** the cloud

**The customer is responsible for:**

* Operating System (OS)
* Applications
* Data
* Network configuration
* Security Groups / firewall
* Updates and security patches
* Security **in** the cloud

## 3.3. Managed and Unmanaged Services

* **Unmanaged service:** The customer has to manage more components themselves. Example: **Amazon EC2**.
* **Managed service:** AWS manages more parts of the infrastructure and maintenance, helping reduce the customer's management workload.

## 3.4. Key Knowledge to Remember

**Management Console → Web UI**

**AWS CLI → Command line + Automation**

**AWS SDK → Code + AWS APIs**

With EC2, **AWS manages the cloud infrastructure**, while the **customer manages the OS, applications, data, and security configuration**.

# 4. Demo: Launching an Amazon EC2 Instance

In this lesson, I learned about the basic configurations required to **launch an EC2 instance** and the role of an **AMI (Amazon Machine Image)**.

## 4.1. Configurations When Launching an EC2 Instance

When creating an EC2 instance, I need to choose the following main components:

* **AMI (Amazon Machine Image)** → a pre-configured operating system and software.
* **Instance type** → determines the CPU, memory, and performance of the instance.
* **Permissions** → access permissions and security settings.
* **Storage** → storage capacity.

## 4.2. What is an AMI?

**AMI (Amazon Machine Image)** is a pre-configured image used to create an EC2 instance.

An AMI can include:

* **Operating System (OS)**
* **Storage configuration**
* **Architecture**
* **Permissions**
* **Pre-installed software**

An AMI can be used to create **multiple EC2 instances with the same configuration**.

## 4.3. Ways to Use an AMI

There are 3 main options:

1. **Custom AMI** → create an AMI with my own configuration and software.
2. **AWS AMI** → use an AMI prepared by AWS.
3. **AWS Marketplace AMI** → use an AMI provided by third parties.

## 4.4. Benefits of an AMI

An AMI helps create an environment that is **consistent and repeatable**.

When I need to create multiple EC2 instances, I can use the same AMI so that:

* The instances have the same configuration.
* Deployment errors are reduced.
* The application can be scaled more easily.
* Development and testing environments remain consistent.

## 4.5. Key Knowledge to Remember

**AMI → Pre-configured OS + Software + Configuration → Launch consistent EC2 instances**

**An AMI does not determine the instance size.** The instance type determines the resource configuration of an EC2 instance.

# 5. Amazon EC2 Pricing

In this lesson, I learned about the different **pricing options** for Amazon EC2 and how to choose the appropriate option to optimize costs.

## 5.1. Pricing Options

| Pricing Option              | When to Use                                                                 |
| --------------------------- | --------------------------------------------------------------------------- |
| **On-Demand Instances**     | I do not want a long-term commitment, or the workload is unpredictable.     |
| **Reserved Instances (RI)** | I use EC2 consistently over a long period.                                  |
| **Spot Instances**          | The workload can be interrupted and I want to maximize cost savings.        |
| **Savings Plans**           | I have stable usage and want to reduce costs through a usage commitment.    |
| **Dedicated Hosts**         | I need full control over a physical server.                                 |
| **Dedicated Instances**     | I need physical isolation but do not need control over the physical server. |

## 5.2. Dedicated Hosts vs Dedicated Instances

* **Dedicated Hosts:** Use an entire physical server and provide control over **instance placement** and **resource allocation**.
* **Dedicated Instances:** Instances are **isolated** from other AWS accounts, but I cannot choose the physical server.

## 5.3. Cost Optimization

AWS provides additional options to help optimize costs and capacity:

* **Savings Plans** → reduce costs with a usage commitment.
* **Capacity Reservations** → ensure EC2 capacity is available in an Availability Zone.
* **Reserved Instances** → suitable for workloads with stable usage over a long period.

## 5.4. Key Knowledge to Remember

* Need flexibility and do not know usage requirements yet → **On-Demand**
* Stable, long-term workload → **Reserved Instances / Savings Plans**
* Workload can be interrupted → **Spot Instances**
* Need full control over a physical server → **Dedicated Hosts**
* Need physical isolation → **Dedicated Instances**

# 6. Scaling Amazon EC2

In this lesson, I learned about **Scalability**, **Elasticity**, and how AWS automatically adjusts the number of EC2 instances based on demand.

## 6.1. Scalability

**Scalability** is the ability of a system to expand when the workload increases.

There are 2 approaches:

* **Scale up** → increase the CPU, RAM, or power of a single instance.
* **Scale out** → add more instances.

Scalability usually focuses on the system's **long-term ability to grow**.

## 6.2. Elasticity

**Elasticity** is the ability to automatically increase or decrease resources based on **real-time demand**.

* Demand increases → **Scale out**
* Demand decreases → **Scale in**

This helps use resources efficiently and avoids provisioning too many resources.

## 6.3. Amazon EC2 Auto Scaling

**EC2 Auto Scaling** automatically adjusts the number of EC2 instances based on the application's demand.

There are 2 approaches:

* **Dynamic Scaling** → adjusts resources based on current demand.
* **Predictive Scaling** → predicts demand and prepares resources in advance.

### Auto Scaling Group

An **Auto Scaling Group (ASG)** is a group of EC2 instances that can automatically scale.

An ASG has 3 main configurations:

* **Minimum capacity** → the minimum number of instances that must be running.
* **Desired capacity** → the desired number of instances.
* **Maximum capacity** → the maximum number of instances that can run.

## 6.4. Multiple Availability Zones

Deploying EC2 instances across **multiple Availability Zones** helps increase **High Availability**.

If one AZ experiences a failure, instances in another AZ can continue processing traffic.

## 6.5. Key Knowledge to Remember

**Scalability → The ability to scale a system**

**Elasticity → Automatically increasing/decreasing resources based on demand**

**EC2 Auto Scaling → Automatically adjusting the number of EC2 instances**

# 7. Directing Traffic with Elastic Load Balancing

In this lesson, I learned about **Elastic Load Balancing (ELB)** and how ELB distributes traffic across multiple EC2 instances to improve application performance and availability.

## 7.1. Elastic Load Balancing (ELB)

**ELB** automatically distributes **incoming traffic** to multiple resources, such as EC2 instances.

* The Load Balancer is the point that receives traffic from users.
* Traffic is distributed to available EC2 instances.
* It helps prevent a single instance from handling too much traffic.
* It improves **performance, scalability, and reliability**.

## 7.2. ELB and EC2 Auto Scaling

**ELB and EC2 Auto Scaling** are two different services, but they often work together:

* **Auto Scaling** → increases or decreases the number of EC2 instances based on demand.
* **ELB** → distributes traffic to active instances.

**Example:**

**High traffic → Auto Scaling adds EC2 instances → ELB distributes traffic → Application remains stable**

## 7.3. Routing Methods

ELB can use different routing methods:

* **Round Robin** → distributes traffic sequentially across servers.
* **Least Connections** → sends traffic to the server with the fewest active connections.
* **IP Hash** → uses the client IP address to consistently send traffic to the same server.
* **Least Response Time** → sends traffic to the server with the fastest response time.

## 7.4. Benefits of ELB

* **Efficient traffic distribution** → distributes traffic efficiently.
* **Automatic scaling support** → works well with Auto Scaling.
* **Simplified management** → simplifies traffic management.
* Increases **High Availability** and improves performance.

## 7.5. Key Knowledge to Remember

**ELB → Distribute traffic**

**EC2 Auto Scaling → Adjust the number of instances**

**ELB + Auto Scaling → Scalable + High Availability + Reliable application**

# 8. Messaging and Queuing

In this lesson, I learned how **Messaging and Queuing** help application components communicate reliably, reduce dependencies, and improve fault tolerance.

## 8.1. Tightly Coupled and Loosely Coupled

* **Tightly Coupled:** Components depend heavily on each other. If one component fails, other components may be affected, or the entire application may fail.
* **Loosely Coupled:** Components operate more independently. If one component fails, other components can continue operating.

**Microservices architecture** often uses loosely coupled components to improve **reliability, availability, and resilience**.

## 8.2. Amazon EventBridge

**Amazon EventBridge** is a serverless service that uses **events** to connect application components.

* It receives events from AWS services, custom applications, or third-party applications.
* It can **filter, transform, and route events** to the appropriate service.
* It helps build **event-driven, scalable, and reliable** systems.

**Example:**

When a customer places an order, EventBridge can send events to services such as **payment, restaurant, inventory, and delivery**.

## 8.3. Amazon SQS

**Amazon Simple Queue Service (Amazon SQS)** is a **message queuing** service that helps software components communicate reliably.

**Process:**

**Application → Message Queue → Service processes the message → Remove message**

**Benefits:**

* Messages are stored in the queue until they are processed.
* The receiving service does not need to be running continuously.
* It helps reduce dependencies between components.
* It prevents message loss when a service is temporarily unavailable.

## 8.4. Amazon SNS

**Amazon Simple Notification Service (Amazon SNS)** uses the **Publish-Subscribe** model.

* **Publisher** sends a message to an **SNS Topic**.
* **Subscribers** receive messages from the topic.
* A subscriber can be a web server, email endpoint, AWS Lambda, or other endpoints.

**Example:**

A company can send notifications about **new products, promotions, or events** to the appropriate group of customers who have subscribed to that topic.

## 8.5. Key Knowledge to Remember

| Service         | Main Role                                     |
| --------------- | --------------------------------------------- |
| **EventBridge** | Routes and processes events between services  |
| **SQS**         | Stores and processes messages through a queue |
| **SNS**         | Publishes messages to multiple subscribers    |

**SQS → Queue → Process messages**

**SNS → Publish → Topic → Subscribers**

**Loosely Coupled → Components operate independently → Increased reliability and resilience**
