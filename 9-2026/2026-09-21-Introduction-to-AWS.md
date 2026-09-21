# Module 1 – Introduction to AWS

In this module, I learned the basic concepts of AWS and Cloud Computing. This is a foundation for understanding what AWS is, how AWS organizes its services, how security responsibilities are shared between AWS and customers, and how to get started with AWS.

## 1. What is “Cloud Computing”?

### 1.1 What is Cloud Computing?

**Cloud Computing** is the use of IT resources and services over the Internet instead of building and managing all the physical hardware on-site.

Examples of resources that can be used in the Cloud:

* **Compute** – servers and processing power.
* **Storage** – data storage.
* **Database** – databases.
* **Networking** – networks.
* **Applications** – applications and software.

Instead of buying servers, hard drives, networking equipment, renting a data center, and managing electricity, cooling systems, and maintenance, I can use resources provided by AWS.

### 1.2 Characteristics of Cloud Computing

I can remember Cloud Computing through these main ideas:

* **On-demand** – use resources when they are needed.
* **Pay-as-you-go** – pay based on the amount of resources used.
* **Internet** – access resources through a network.
* **Scalable** – resources can be increased or decreased when demand changes.
* **Managed services** – AWS can manage part or all of the infrastructure depending on the service.

### 1.3 How is Cloud different from On-premises?

| On-premises                            | Cloud                           |
| -------------------------------------- | ------------------------------- |
| Buy and manage servers yourself        | Rent resources from the Cloud   |
| Build the infrastructure yourself      | AWS provides the infrastructure |
| Maintain the hardware yourself         | AWS manages the hardware        |
| May require a large initial investment | Pay based on usage              |
| Difficult to scale quickly             | Can scale flexibly              |

**Important point:** Cloud Computing helps businesses reduce the need to build and operate all of their IT infrastructure themselves.

## 2. AWS Reference Model

### 2.1 AWS has many services

AWS provides many different services that are divided into multiple categories.

Some important service categories are:

| Category             | Examples                                   |
| -------------------- | ------------------------------------------ |
| **Compute**          | Amazon EC2, AWS Lambda                     |
| **Storage**          | Amazon S3, Amazon EBS                      |
| **Database**         | Amazon RDS, Amazon DynamoDB                |
| **Networking**       | Amazon VPC, Amazon Route 53                |
| **Security**         | IAM, AWS KMS, AWS CloudTrail               |
| **Management**       | AWS CloudFormation, AWS Config             |
| **Integration**      | Amazon SQS, Amazon SNS, AWS Step Functions |
| **Machine Learning** | Amazon SageMaker                           |

### 2.2 Services and Managed Services

When using AWS, I do not necessarily have to manage everything myself.

For example:

* With **Amazon EC2**, I still have to manage many parts of the server.
* With **managed services**, AWS manages more parts of the infrastructure for me.
* Therefore, I can focus more on my application and business needs.

### 2.3 How to Learn About an AWS Service

When learning about a service, I can use:

* AWS Documentation.
* User Guides.
* AWS Getting Started resources.
* Whitepapers.
* Tutorial videos.
* AWS Skill Builder.
* Hands-on practice on AWS.

**Important point:** I do not need to memorize all AWS services. First, I need to understand **what a service is used for and when to use it**.

## 3. AWS Shared Responsibility Model

### 3.1 What is the Shared Responsibility Model?

The **AWS Shared Responsibility Model** is a model that divides security responsibilities between AWS and the customer.

I can understand it simply as:

> **AWS is responsible for security of the Cloud, while customers are responsible for security in the Cloud.**

### 3.2 AWS Responsibilities

AWS is responsible for the physical infrastructure and Cloud platform.

Examples:

* Data centers.
* Physical servers.
* Physical networking.
* Physical security.
* AWS hardware infrastructure.

AWS ensures that its infrastructure is protected and operated securely.

### 3.3 Customer Responsibilities

Customers are responsible for what they configure and use.

Examples:

* Data.
* Users and access permissions.
* Passwords.
* MFA.
* Security Group configuration.
* Network configuration.
* Operating system configuration on EC2.
* Updating and patching the operating system when needed.

For example, if I create an EC2 instance and configure the firewall too loosely, AWS is not automatically responsible for that configuration. I have to configure security correctly.

### 3.4 Easy Way to Remember

| AWS                  | Customer               |
| -------------------- | ---------------------- |
| Data center          | Data                   |
| Physical hardware    | Users                  |
| Physical network     | Access permissions     |
| Physical security    | OS on EC2              |
| Cloud infrastructure | Security configuration |

**Important point:** AWS provides security tools, but customers still need to use and configure those tools correctly.

## 4. AWS Training & Certification

### 4.1 AWS Training

AWS provides learning materials and training programs to help people learn about Cloud and AWS.

I can learn through:

* AWS Skill Builder.
* Digital Training.
* AWS Documentation.
* Hands-on labs.
* Whitepapers.

### 4.2 AWS Certification

AWS certifications have several levels.

Some main levels are:

1. **Foundational** – basic knowledge.
2. **Associate** – more advanced knowledge for specific roles.
3. **Professional** – advanced professional-level knowledge.
4. **Specialty** – specialized knowledge in a specific area.

Examples:

* Cloud Practitioner – basic Cloud knowledge.
* Solutions Architect – designing solutions on AWS.
* Developer – developing applications on AWS.
* Operations – operating AWS systems.

**Important point:** Certifications help demonstrate AWS knowledge and skills, but more importantly, I need to understand the services and know how to apply them in real-world situations.

## 5. Getting Started With AWS

### 5.1 Getting Started with AWS

After creating an AWS account, I can log in to the **AWS Management Console** to use AWS services.

The AWS Console allows me to:

* Search for services.
* Create resources.
* Configure resources.
* Manage my account.
* Monitor systems.
* Check costs.

### 5.2 Region

A **Region** (ree-juhn) is a geographic area where AWS has its infrastructure.

When working with AWS, I need to pay attention to choosing the correct **Region**, because resources created in different Regions can operate independently.

### 5.3 Things to Do When Getting Started

When using an AWS account, I need to pay attention to security and costs:

* Do not use the **root user** for everyday tasks.
* Enable **MFA**.
* Monitor activity using **AWS CloudTrail**.
* Monitor costs and set up **Billing Alerts / Budgets**.
* Check running resources to avoid unnecessary costs.

### 5.4 AWS Free Tier

AWS offers free usage for some services and within certain usage limits.

However:

> **Free does not mean that everything is free.**

If I exceed the free usage limits or use services that are not included in the free usage, charges may apply.

Therefore, when practicing with AWS, I need to check:

* The services I am using.
* The resources that are running.
* The Region.
* Usage.
* Costs.

# Knowledge to Remember

After this module, I need to remember these 5 main points:

1. **Cloud Computing** means using IT resources through the Internet based on demand.

2. **AWS** provides many services for Compute, Storage, Database, Networking, Security, and many other areas.

3. **Shared Responsibility Model** divides security responsibilities between AWS and customers.

4. **AWS Training & Certification** helps people learn and demonstrate their AWS knowledge.

5. When getting started with AWS, I need to understand the **AWS Console, Region, MFA, CloudTrail, and cost management**.
