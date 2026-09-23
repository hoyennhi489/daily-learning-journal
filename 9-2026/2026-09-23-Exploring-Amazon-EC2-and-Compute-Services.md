# Module 2 – Exploring Amazon EC2 and Compute Services

In this module, I learned more about **Amazon EC2** and other Compute services. I understand that EC2 is a virtual server on AWS, where I can choose the operating system, CPU, RAM, storage, and network configuration based on my needs.

## 1. What is Amazon EC2?

### 1.1 What is EC2?

**Amazon EC2 (Elastic Compute Cloud)** is a service that provides **virtual machines** on AWS.

Instead of buying a physical server, installing an operating system, and placing the server in a Data Center, I can create an EC2 instance on AWS in a short time and pay based on usage.

An EC2 instance can have:

* Operating System (OS)
* CPU
* RAM
* Storage
* Network
* Security and access permissions

### 1.2 EC2 Instance

An EC2 virtual machine is called an **Instance**.

When creating an Instance, I need to choose a configuration that is suitable for its purpose.

For example:

* Web server
* Application server
* Database
* Processing / Computing
* Storage-related workloads

**Important point:** I should not only focus on how much CPU or RAM a machine has. First, I need to determine **what the machine will be used for**.

## 2. EC2 Instance Types

AWS provides different types of Instances for different needs.

### 2.1 General Purpose

**General Purpose** provides a balance between:

* CPU
* Memory
* Network

This type is suitable for common applications such as:

* Web server
* Code repository
* Applications that need a balanced configuration

Some common instance families use letters such as **T** or **M**.

### 2.2 Compute Optimized

**Compute Optimized** prioritizes **CPU / Processor**.

It is suitable for applications that require high computing performance.

Examples:

* High-performance computing
* Applications that require high CPU processing

This type usually uses the letter **C**.

### 2.3 Memory Optimized

**Memory Optimized** prioritizes **RAM**.

It is suitable for applications that require a large amount of memory, for example:

* Database
* Real-time processing
* Applications that need to keep a large amount of data in memory

This type usually uses the letter **R**.

### 2.4 Instance Size

Within the same Instance Type, there are different sizes.

For example:

* Small
* Medium
* Large
* ...

As the Instance size increases, CPU, RAM, and cost also increase.

**Can remember:**

> Instance Type = type of machine
> Instance Size = size/configuration of the machine

## 3. Instance Profile

### 3.1 What is an Instance Profile?

An **Instance Profile** allows me to assign permissions to an EC2 Instance so that the EC2 instance can access other AWS services.

For example:

An application running on EC2 needs to store images in **Amazon S3**.

Instead of putting an AWS Access Key into the source code, I can assign an **IAM Role** to the EC2 instance through an Instance Profile.

Then, the application running on EC2 can use the permissions that were granted.

### 3.2 Why Should I Use an Instance Profile?

This approach helps avoid putting **AWS credentials** directly into the source code.

For example:

**EC2 → IAM Role → S3**

Instead of:

**Application → Access Key → S3**

**Knowledge to remember:**

> I should not hard-code AWS credentials into an application.
> I can use an IAM Role + Instance Profile for EC2.

## 4. Placement Groups

A Placement Group is related to deciding **how EC2 Instances are placed on AWS infrastructure**.

### 4.1 Cluster

**Cluster** places Instances close together to improve communication and network performance.

It is suitable for workloads that require high network performance.

Example:

* High Performance Computing (HPC)

### 4.2 Partition

**Partition** divides Instances into different groups.

The purpose is to reduce the impact when part of the infrastructure has a failure.

### 4.3 Spread

**Spread** separates Instances across different underlying infrastructure.

The purpose is to reduce the risk of multiple Instances being affected at the same time.

**Can remember:**

| Placement Group | Main Purpose                                |
| --------------- | ------------------------------------------- |
| Cluster         | Improve network performance                 |
| Partition       | Separate Instances into partitions          |
| Spread          | Reduce the impact when infrastructure fails |

## 5. User Data and Metadata

### 5.1 User Data

**User Data** allows me to provide commands or scripts that EC2 automatically runs when an Instance is launched.

For example:

* Update the operating system
* Install a web server
* Install packages
* Start a service

For example, a newly created EC2 instance can automatically run a script to install a web server.

**Can remember:**

> User Data = a script that runs automatically when an EC2 instance is launched.

### 5.2 Metadata

**Instance Metadata** provides information about an EC2 Instance.

Examples:

* Instance information
* Public IP
* Instance ID
* AMI information

**Can remember:**

> User Data = commands sent to EC2 to run.
> Metadata = information retrieved from EC2.

## 6. EC2 Pricing

AWS provides several pricing options for EC2.

### 6.1 On-Demand

**On-Demand** is the simplest pricing option:

> Use as much as I need → pay for what I use.

There is no long-term commitment.

It is suitable when:

* I do not know the exact demand
* The workload changes
* I want flexibility

### 6.2 Reserved Instances

**Reserved Instances** are suitable when I know that I will use EC2 for a long period of time.

I commit to using EC2 for a certain period and can receive a lower price than On-Demand.

The commitment period can be:

* 1 year
* 3 years

### 6.3 Spot Instances

**Spot Instances** use AWS's unused capacity, so they can be significantly cheaper.

However, AWS can **reclaim the Instance** when it needs the capacity.

Therefore, Spot Instances are suitable for workloads that can be interrupted.

Examples:

* Batch processing
* Workloads that do not need to run continuously

### 6.4 Dedicated Hosts

A **Dedicated Host** provides a physical server dedicated to a customer.

Therefore, the cost is usually higher than other options.

### 6.5 Savings Plans

**Savings Plans** allow me to commit to a certain level of usage for a period of time in exchange for a lower price.

When choosing a pricing model, I need to consider:

* Usage duration
* Workload stability
* Ability to change the configuration
* Cost

## 7. EC2 Storage

EC2 can use several types of storage.

### 7.1 Amazon EBS

**Amazon EBS (Elastic Block Store)** is block storage that can be attached to an EC2 instance.

I can think of EBS as a disk attached to a machine.

One important point is:

> An EBS Volume belongs to one Availability Zone.

For example:

* EC2 in AZ-A → EBS is also in AZ-A
* An EBS volume in AZ-A cannot be directly attached to an EC2 instance in AZ-B

If I need to use it in another AZ, I can use a backup/snapshot to create a new volume in that AZ.

### 7.2 Delete on Termination

When creating an EBS volume, there is a **Delete on Termination** option.

If it is enabled:

> Terminate EC2 → EBS can also be deleted.

If it is disabled:

> Terminate EC2 → EBS remains.

This helps prevent data from being accidentally deleted together with the EC2 instance.

### 7.3 Instance Store

**Instance Store** is storage directly attached to the EC2 host.

Advantages:

* High performance
* Suitable for temporary data

Disadvantages:

* Data can be lost when the Instance is stopped, terminated, or moved to another host.

Therefore, Instance Store is more suitable for **temporary data** than data that needs to be stored long-term.

## 8. Amazon EFS

**Amazon EFS (Elastic File System)** is file storage that can be shared by multiple EC2 instances.

For example:

```text
EC2 A ─┐
EC2 B ─┼── EFS
EC2 C ─┘
```

Multiple EC2 instances can access the same filesystem.

EFS is suitable when:

* Multiple EC2 instances need to share files
* I do not want to manage storage capacity myself
* I need a filesystem that can scale

### 8.1 EBS and EFS

| Storage        | Description                                         |
| -------------- | --------------------------------------------------- |
| EBS            | Block storage, usually attached to one EC2 instance |
| EFS            | Shared file storage for multiple EC2 instances      |
| Instance Store | High-performance storage, but data can be lost      |

## 9. Amazon Machine Image (AMI)

### 9.1 What is an AMI?

**AMI (Amazon Machine Image)** is an image/template used to create an EC2 Instance.

An AMI can contain:

* Operating System
* Application
* Configuration
* Required settings

For example, I have finished configuring an EC2 instance with a web server.

I can create an **AMI** from that EC2 instance.

Then, I can use the AMI to create multiple other EC2 instances with the same configuration.

### 9.2 AMI by Region

An AMI has a scope based on its **Region**.

If I want to use an AMI in another Region, I need to **copy the AMI to that Region**.

**Can remember:**

> AMI = a template used to create EC2 instances.

## 10. Scaling EC2

When an application has many users, one EC2 instance may not have enough capacity to handle the workload.

There are two main ways to scale.

### 10.1 Vertical Scaling

**Vertical Scaling** means increasing the configuration of one Instance.

For example:

```text
2 CPU + 8 GB RAM
        ↓
4 CPU + 16 GB RAM
```

This means making **one machine more powerful**.

### 10.2 Horizontal Scaling

**Horizontal Scaling** means creating more Instances.

For example:

```text
1 EC2
  ↓
6 EC2
```

Instead of making one machine more powerful, I create multiple machines to handle the workload together.

**Can remember:**

> Vertical Scaling = Scale Up → a more powerful machine.
> Horizontal Scaling = Scale Out → more machines.

## 11. Elastic Load Balancing

When there are multiple EC2 instances, users cannot know which machine they should access.

**Elastic Load Balancing (ELB)** sits between users and EC2 instances.

```text
Users
  ↓
Load Balancer
  ↓
EC2
EC2
EC2
```

The Load Balancer receives requests and distributes them to suitable EC2 instances.

### 11.1 Application Load Balancer

**Application Load Balancer (ALB)** operates at **Layer 7**.

It is suitable for web applications using:

* HTTP
* HTTPS

### 11.2 Network Load Balancer

**Network Load Balancer (NLB)** operates at **Layer 4**.

It is suitable for workloads that require high network performance and protocols such as TCP.

### 11.3 Gateway Load Balancer

**Gateway Load Balancer (GWLB)** is used for cases that require traffic to be processed by network appliances.

**Can remember:**

| Load Balancer | Layer   | Example            |
| ------------- | ------- | ------------------ |
| ALB           | Layer 7 | HTTP/HTTPS, Web    |
| NLB           | Layer 4 | TCP, Network       |
| GWLB          | Layer 3 | Network appliances |

## 12. Auto Scaling

**Amazon EC2 Auto Scaling** helps automatically increase or decrease the number of EC2 instances based on demand.

Instead of manually creating EC2 instances, the system can automatically scale.

### 12.1 Capacity Settings

When using Auto Scaling, I need to define:

* **Minimum capacity**: the minimum number of Instances
* **Desired capacity**: the desired number of Instances
* **Maximum capacity**: the maximum number of Instances

For example:

```text
Minimum = 2
Desired = 3
Maximum = 10
```

Auto Scaling will not automatically create more Instances than the configured Maximum.

### 12.2 Health Check

Auto Scaling can check the health of an Instance.

If an Instance has a problem, the system can remove that Instance and create a new one.

### 12.3 Scaling Policy

A Scaling Policy determines **when to scale**.

Examples:

* CPU utilization
* Request traffic
* Schedule
* CloudWatch metrics

For example:

> If the average CPU utilization becomes high for a period of time → create additional EC2 instances.

### 12.4 Launch Template

A **Launch Template** contains the configuration that Auto Scaling uses to create new EC2 instances.

It can contain:

* AMI
* Instance type
* Security settings
* Network
* User Data

When additional EC2 instances are needed, Auto Scaling uses the Launch Template to create new Instances.

## 13. Docker and Container

In addition to EC2, AWS also supports **Container** technologies.

### 13.1 Docker

**Docker** is a technology used to package an application and the components needed for the application to run.

Containers package applications separately and make them easier to deploy.

For example:

```text
Application A → Container A
Application B → Container B
Application C → Container C
```

Each container has its own environment and reduces the impact between applications.

### 13.2 Container and Virtual Machine

A Virtual Machine usually has:

```text
Host
 ↓
Hypervisor
 ↓
VM
 ↓
Guest OS
 ↓
Application
```

Containers are usually lighter because multiple containers can share the host operating system.

## 14. Amazon ECR

**Amazon ECR (Elastic Container Registry)** is a service for storing Docker container images on AWS.

I can understand it simply as:

> Docker image → stored in ECR → ECS/Fargate retrieves the image to run it.

## 15. Amazon ECS

**Amazon ECS (Elastic Container Service)** is an AWS service used to run and manage containers.

ECS can run containers in several ways.

### 15.1 ECS with EC2

I create EC2 instances first.

Then, containers run on those EC2 instances.

### 15.2 ECS with Fargate

With **AWS Fargate**, I do not need to manage EC2 instances to run containers.

I only need to specify the required resources, such as:

* CPU
* RAM
* Container

AWS manages the underlying infrastructure.

**Can remember:**

> ECS = manages/runs containers.
> ECR = stores container images.
> Fargate = runs containers without managing servers.

## 16. AWS Lambda

### 16.1 What is Lambda?

**AWS Lambda** is a **serverless** service that allows me to run code without managing servers myself.

Instead of:

```text
Create EC2
→ Install OS
→ Deploy code
→ Run application
```

With Lambda:

```text
Write function
→ Deploy
→ Trigger
→ Lambda runs the function
```

### 16.2 How Does Lambda Work?

Lambda is suitable for workloads that run based on an **event/trigger**.

For example:

```text
User uploads image
        ↓
       S3
        ↓
      Lambda
        ↓
Create thumbnail
        ↓
       S3
```

Lambda only runs when it is triggered.

### 16.3 EC2 and Lambda

| EC2                                 | Lambda                                          |
| ----------------------------------- | ----------------------------------------------- |
| Need to create and manage Instances | No need to manage servers                       |
| Can run continuously                | Runs when triggered                             |
| Suitable for long-running workloads | Suitable for short functions/events             |
| Pay based on resources used         | Charged based on invocations and execution time |
| More control over the server        | AWS manages the infrastructure                  |

### 16.4 Lambda Limitations

Lambda has a limit on the execution time of a function.

Therefore, if an application needs to run for a long time or does not fit the event-driven model, EC2 or another service may be more suitable.

## 17. Amazon API Gateway

**Amazon API Gateway** can sit in front of Lambda to receive and process API requests.

For example:

```text
User
 ↓
API Gateway
 ↓
Lambda
 ↓
Database / Other AWS Services
```

API Gateway helps receive requests from clients and call the correct backend service.

## 18. AWS Batch

**AWS Batch** is suitable for workloads that need to be processed in batches.

Examples:

* Processing large amounts of data
* Computing
* Scoring
* Tasks that do not need to run continuously

The important point is that the workload can use compute resources when needed instead of maintaining a server continuously.

## 19. Amazon Lightsail

**Amazon Lightsail** provides a simpler cloud environment for small workloads.

It is suitable for:

* Small websites
* Development / Test
* Beginners
* Workloads that do not need a complex AWS architecture

Lightsail still provides resources such as:

* Compute
* Storage
* Networking

However, it provides fewer customization options than using multiple AWS services directly.

# Knowledge to Remember

| Concept          | What I need to remember                                     |
| ---------------- | ----------------------------------------------------------- |
| EC2              | Virtual server on AWS                                       |
| Instance Type    | Machine type, suitable for different workloads              |
| Instance Size    | Machine size/configuration                                  |
| Instance Profile | Assigns an IAM Role to EC2                                  |
| Placement Group  | Controls how EC2 instances are placed on the infrastructure |
| User Data        | Script that runs when an EC2 instance is launched           |
| Metadata         | Information about EC2                                       |
| AMI              | Template used to create EC2 instances                       |
| EBS              | Block storage for EC2                                       |
| EFS              | Shared file storage                                         |
| Instance Store   | High-performance storage, but data can be lost              |
| On-Demand        | Pay for what I use                                          |
| Reserved         | Long-term commitment to save costs                          |
| Spot             | Lower price but Instances can be reclaimed by AWS           |
| Load Balancer    | Distributes requests to multiple servers                    |
| Auto Scaling     | Automatically increases/decreases EC2 instances             |
| Docker           | Packages an application into a container                    |
| ECR              | Stores Docker images                                        |
| ECS              | Manages/runs containers                                     |
| Fargate          | Runs containers without managing servers                    |
| Lambda           | Runs code based on events without managing servers          |
| API Gateway      | Receives and manages API requests                           |
| AWS Batch        | Runs batch workloads                                        |
| Lightsail        | Simple cloud service for small workloads                    |