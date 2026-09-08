# 1. What is Cloud Computing?

In this lesson, I learned about Cloud Computing and the different types of Cloud Deployment.

## 1.1. What is Cloud Computing?

Cloud Computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing.

**English definition:**

On-demand delivery of IT resources over the Internet with pay-as-you-go pricing.

This means that instead of having to purchase and manage all the hardware, servers, and infrastructure myself, I can use IT resources from a cloud provider through the Internet when needed.

I only pay based on the amount of resources I use.

It can be remembered as:

**Cloud Computing = IT Resources + On-demand + Internet + Pay-as-you-go**

Where:

* **IT Resources:** Information technology resources.
* **On-demand:** Providing and using resources when needed.
* **Internet:** Accessing resources through the Internet.
* **Pay-as-you-go:** Paying based on usage.

## 1.2. Cloud Deployment Types

Cloud resources can be deployed in many different ways.

In this lesson, I learned about 3 main types:

1. **Cloud-based deployment**
2. **On-premises deployment**
3. **Hybrid deployment**

Each type has its own benefits and characteristics. Understanding the different deployment types helps in choosing the appropriate model for an organization's needs.

## 1.3. Cloud-based Deployment

Cloud-based deployment is a method of deploying resources in the cloud.

IT resources are provided through the cloud instead of the organization having to build and manage the entire physical infrastructure itself.

**Example:**

An application can run on AWS resources instead of running on physical servers that the company purchases and manages itself.

## 1.4. On-premises Deployment

On-premises deployment is a method of deploying systems at the organization's own premises.

In this model, the organization owns and manages IT infrastructure such as:

* Servers
* Network devices
* Storage
* Database systems
* Physical infrastructure

**Example:**

A company purchases its own servers, places the servers in the company's data center, and is responsible for managing the system itself.

## 1.5. Hybrid Deployment

Hybrid deployment is a combination of:

**On-premises + Cloud**

Some resources are deployed at the organization's premises, while other resources are deployed in the cloud.

**Example:**

* Sensitive data is stored on-premises to meet compliance requirements.
* Cloud resources are used to scale the system when demand increases.

## 1.6. Comparison of Cloud Deployment Types

| Deployment Type | Characteristics                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Cloud-based** | Uses resources in the cloud                                       |
| **On-premises** | The system is deployed and managed at the organization's premises |
| **Hybrid**      | Combines cloud and on-premises                                    |

**How to remember:**

* **Cloud-based → Cloud**
* **On-premises → On-site**
* **Hybrid → Cloud + On-premises**

## 1.7. Knowledge Check

**Situation in the lesson:**

A charity organization has sensitive data, and this data must be kept within the country to meet compliance requirements.

The organization still needs the ability to scale the system quickly when demand increases seasonally.

Therefore, the organization decides to:

* Keep some on-premises resources to meet compliance requirements.
* Use cloud-based resources to have flexible scalability.

**Question:** Which type of cloud deployment is this?

**Answer:** Hybrid deployment.

**Reason:**

**On-premises + Cloud = Hybrid**

## 1.8. Knowledge I Gained

Through this lesson, I understand that Cloud Computing is the on-demand delivery of IT resources over the Internet with payment based on usage.

I can also distinguish between the 3 types of Cloud Deployment:

* **Cloud-based:** Deployed in the cloud.
* **On-premises:** Deployed at the organization's premises.
* **Hybrid:** Combines cloud and on-premises.

**The most important points I need to remember:**

**Cloud Computing = On-demand IT resources + Internet + Pay-as-you-go**

**Hybrid Deployment = Cloud + On-premises**

# 2. Benefits of the AWS Cloud

In this lesson, I learned about the 6 main benefits of the AWS Cloud.

## 2.1. Trade Fixed Expense for Variable Expense

Switch from fixed expenses to variable expenses.

Instead of purchasing servers and paying a large cost upfront, I can use cloud resources and pay based on usage.

## 2.2. Benefit from Massive Economies of Scale

AWS has a very large infrastructure, so it can take advantage of economies of scale, helping reduce costs and allowing even small businesses to use modern technology.

## 2.3. Stop Guessing Capacity

There is no need to guess in advance how many servers are needed.

I can increase or decrease resources based on actual demand.

**Demand increases → Scale up**

**Demand decreases → Scale down**

## 2.4. Increase Speed and Agility

The cloud helps deploy applications faster and makes it easier to adapt to changes in the business.

## 2.5. Stop Spending Money to Run and Maintain Data Centers

There is no need to build and maintain a physical data center yourself.

AWS manages the physical infrastructure, helping businesses reduce maintenance costs and save time.

## 2.6. Go Global in Minutes

AWS has a global infrastructure, allowing businesses to deploy applications in multiple regions around the world quickly.

## 2.7. Key Knowledge to Remember

**6 benefits of the AWS Cloud:**

1. **Fixed → Variable expense → Pay based on usage.**
2. **Economies of scale → Take advantage of large-scale infrastructure to reduce costs.**
3. **Stop guessing capacity → Scale according to demand.**
4. **Speed and agility → Deploy quickly and flexibly.**
5. **No data center maintenance → No need to manage a data center yourself.**
6. **Go global → Easily expand globally.**

# 3. Introduction to AWS Global Infrastructure

In this lesson, I learned about AWS Global Infrastructure, especially AWS Regions, Availability Zones, as well as the concepts of High Availability and Fault Tolerance.

## 3.1. AWS Regions and Availability Zones

AWS Global Infrastructure consists of physical locations around the world where AWS builds and operates data centers.

* **AWS Region:** A large geographic area containing multiple Availability Zones.
* **Availability Zone (AZ):** One or a group of data centers designed to operate independently from other AZs.

**Example:**

**1 Region → Multiple Availability Zones**

## 3.2. High Availability

High Availability means that a system is designed to operate continuously and reduce downtime.

AWS recommends distributing resources across multiple Availability Zones.

If one AZ experiences a failure, the other AZs can continue operating.

## 3.3. Fault Tolerance

Fault Tolerance is the ability of a system to continue operating even when part of the system experiences a failure.

AWS designs AZs with:

* Independent power
* Independent networking
* Independent connectivity

Distributing resources across multiple AZs creates redundancy and helps the system handle failures better.

## 3.4. Key Knowledge to Remember

**Region →** A geographic area containing multiple AZs

**Availability Zone →** An independent area containing data centers

**High Availability →** The system remains highly available and reduces downtime

**Fault Tolerance →** The system continues operating when part of it fails

# 4. The AWS Shared Responsibility Model

In this lesson, I learned about the AWS Shared Responsibility Model – a model that divides security responsibilities between AWS and the customer.

## 4.1. What is the AWS Shared Responsibility Model?

This is a model that helps determine which responsibilities belong to AWS and which responsibilities belong to the customer in the AWS Cloud environment.

Responsibilities are divided into 3 parts:

* **AWS responsibility:** AWS is responsible for the infrastructure of the cloud.
* **Customer responsibility:** The customer is responsible for what they deploy and configure in the cloud.
* **Shared responsibility:** Some issues involve both AWS and the customer.

## 4.2. AWS Responsibilities

AWS is responsible for protecting the infrastructure of the cloud, including:

* Data centers
* Hardware
* Networking and physical infrastructure
* Components of the AWS Cloud

## 4.3. Customer Responsibilities

The customer is responsible for security in the cloud, depending on the service being used.

**Examples:**

* Data
* Access permissions
* Resource configuration
* Operating systems on EC2
* Updates and security patches for the OS

## 4.4. Key Knowledge to Remember

**The most important point:**

**AWS → Security of the cloud**

**Customer → Security in the cloud**

Simply:

AWS protects the cloud infrastructure.

The customer protects and manages what they put in the cloud.

# 5. Applying Cloud Concepts to Real-Life Use Cases

In this lesson, I learned how Cloud concepts work together to solve real-world business problems.

## 5.1. Cloud in Real Life

* Concepts such as AWS Global Infrastructure and the AWS Shared Responsibility Model do not work independently but are combined to build real-world solutions.
* **Example:** A global e-commerce company deploys resources across multiple AWS Regions and Availability Zones.

## 5.2. Benefits of Using Multiple Regions and AZs

* Helps the system achieve High Availability and reduce downtime.
* If a Region or Availability Zone experiences a failure, other areas can continue operating.
* Suitable for businesses with customers in many parts of the world.

## 5.3. Shared Responsibility in Practice

* **AWS:** Responsible for protecting the Cloud infrastructure.
* **Company/Customer:** Responsible for securing and managing what they deploy in the Cloud.
* Both sides work together to ensure that the system is secure and operates reliably.

## 5.4. Key Knowledge to Remember

**AWS Global Infrastructure + Shared Responsibility Model → A real-world Cloud solution that is secure and capable of continuous operation.**
