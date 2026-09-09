# 1. Introduction to Going Global

In this lesson, I learned about **AWS Global Infrastructure** and how AWS helps businesses deploy applications across different regions around the world.

## 1.1. AWS Global Infrastructure

AWS has a global infrastructure that allows applications to operate in different regions and provides benefits such as:

* **High availability** – increases the ability of an application to stay available.
* **Elasticity** – makes it easy to increase or decrease resources based on demand.
* **Agility** – allows systems to be deployed and changed quickly.

The lesson focuses on three main topics:

* **AWS Regions**
* **Edge Locations**
* **Infrastructure as Code (IaC) and AWS CloudFormation**

## 1.2. AWS Regions

An **AWS Region** is a geographic area where AWS has infrastructure to provide cloud services.

When choosing a Region to deploy an application, several factors should be considered, such as:

* The location of customers.
* User needs in each region.
* Development and operating costs.
* Data and system requirements.

Depending on the application's needs, we can use **one or multiple Regions**.

## 1.3. AWS Edge Locations

**Edge Locations** are smaller infrastructure locations placed around the world to bring content closer to users.

Edge Locations can **cache** content such as:

* Images.
* Videos.
* Website resources.

When content is stored closer to users, they can access it faster and **reduce latency**.

→ Easy way to remember:

**Region = where AWS resources are deployed**

**Edge Location = where content is cached closer to users for faster access**

## 1.4. Infrastructure as Code (IaC)

**Infrastructure as Code (IaC)** is a way to use code or configuration to define and deploy infrastructure instead of setting everything up manually.

IaC helps to:

* Automatically deploy infrastructure.
* Create consistent environments.
* Reduce errors caused by manual configuration.
* Easily repeat deployments as the system grows.

## 1.5. AWS CloudFormation

**AWS CloudFormation** is a service that helps deploy and manage AWS resources using **Infrastructure as Code**.

For example, instead of creating each resource manually, we can define the resources in a template and then use CloudFormation to deploy them.

This helps make environments **more consistent and reliable**.

## 1.6. Key Points to Remember

**AWS Region → a geographic area where resources are deployed**

**Edge Location → brings or caches content closer to users to reduce latency**

**IaC → manages infrastructure using code**

**CloudFormation → automatically deploys AWS resources using IaC**

### Short Summary

When **Going Global** with AWS, it is important to understand:

**Regions** help deploy applications in different geographic areas.

**Edge Locations** bring content closer to users.

**CloudFormation + IaC** help automate infrastructure and keep it consistent as the system grows.

# 2. Choosing AWS Regions

In this lesson, I learned how to choose the right **AWS Region** based on the needs of a business and its applications.

## 2.1. Compliance

**Compliance** means following laws, regulations, and data protection requirements.

Different countries or regions may have different rules about data. Therefore, when choosing a Region, we need to consider the legal requirements that the business must follow.

For example, **GDPR** protects personal data and the privacy of users in the **EU**.

## 2.2. Proximity

**Proximity** means the distance between a Region and its users.

It is better to choose a Region **close to users** to:

* Reduce the time needed for data to travel.
* Reduce **latency**.
* Make applications respond faster.
* Improve the user experience.

→ **The closer the Region is to users → the lower the latency is usually.**

## 2.3. Feature Availability

Not all AWS services and features are available in every Region.

When choosing a Region, we need to check whether that Region provides the **services or features we need**.

For example, **AWS GovCloud Regions** are designed for U.S. government agencies and their contractors, with special security and compliance requirements.

## 2.4. Pricing

**Pricing** is also an important factor to consider.

Operating costs can be different between Regions. Besides service prices, costs can also be affected by:

* Taxes.
* Regional regulations.
* Storage and data transfer costs.
* **Data sovereignty** requirements.

**Data sovereignty** may require data to be stored in a specific region or country.

## 2.5. Four Factors for Choosing a Region

The four main factors to remember are:

| **Factor**               | **Meaning**                                          |
| ------------------------ | ---------------------------------------------------- |
| **Compliance**           | Does it meet legal and data protection requirements? |
| **Proximity**            | Is it close to users to reduce latency?              |
| **Feature Availability** | Does it provide the required services/features?      |
| **Pricing**              | Is the cost suitable?                                |

## 2.6. Key Points to Remember

When choosing an AWS Region, we should not consider location alone. We need to consider **Compliance, Proximity, Feature Availability, and Pricing**.

# 3. Diving Deeper into AWS Global Infrastructure

In this lesson, I learned more about **AWS Global Infrastructure**, especially how using multiple **Regions** and **Availability Zones (AZs)** can help build highly available systems, as well as the role of **Edge Locations**.

## 3.1. Multi-Region and Multi-AZ

To improve application reliability, we can deploy resources across **multiple Regions** and **multiple Availability Zones**.

Creating redundant resources in different locations helps applications continue working if a region or a component experiences a failure.

→ **Multi-Region + Multi-AZ = higher High Availability and Fault Tolerance.**

## 3.2. High Availability

**High availability** is the ability of a system to continue operating and minimize downtime.

In AWS, distributing resources across multiple AZs or Regions allows applications to continue working even when part of the infrastructure fails.

## 3.3. Agility

**Agility** is the ability to quickly change and adapt to new requirements.

AWS helps businesses:

* Change services quickly.
* Deploy applications quickly.
* Adjust infrastructure based on demand.

## 3.4. Elasticity

**Elasticity** is the ability to automatically **increase or decrease resources** based on demand.

For example, when the number of users increases, the system can increase resources. When demand decreases, resources can be reduced.

→ **Elasticity = automatically scaling resources based on demand.**

## 3.5. Edge Locations

In addition to **Regions** and **Availability Zones**, AWS also has **Edge Locations** around the world.

Edge Locations are placed close to users to provide **content caching and delivery with lower latency**.

For example, content such as:

* Images
* Videos
* Web content
* Applications

can be cached at Edge Locations so users can access it faster.

One service that uses Edge Locations is **Amazon CloudFront**, an AWS **Content Delivery Network (CDN)**.

## 3.6. Region, Availability Zone, and Edge Location

| **Component**              | **Meaning**                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Region**                 | A geographic area where AWS operates multiple Availability Zones                                            |
| **Availability Zone (AZ)** | One or more independent data centers within a Region, designed to limit the impact of failures in other AZs |
| **Edge Location**          | A location used to cache and deliver content close to users, helping reduce latency                         |

## 3.7. Simple Way to Remember

**Region → a large geographic area**

**AZ → independent locations inside a Region**

**Edge Location → a location close to users for caching/delivering content**

We can think of it like this:

**AWS Global Infrastructure**

→ **Region**

→ **Availability Zones**

→ **Edge Locations** across the global network to bring content closer to users.

## 3.8. Key Points to Remember

* Using **multiple Regions** helps improve fault tolerance at the regional level.
* Using **multiple AZs** improves reliability within a Region.
* **Edge Locations** help deliver content closer to users.
* **High Availability** → helps systems stay available more consistently.
* **Agility** → allows systems to change and deploy quickly.
* **Elasticity** → automatically increases or decreases resources based on demand.
