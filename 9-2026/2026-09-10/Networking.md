# 1. Introduction to Networking

In this lesson, I learned about the basic components of **Networking in the AWS Cloud**, especially **VPC** and **Subnet**.

## 1.1. What is Networking?

**Networking** is how devices and systems connect to each other to **exchange data and share resources**.

In AWS, networking allows applications, data, and resources to connect and work together.

## 1.2. Amazon VPC

**Amazon VPC (Virtual Private Cloud)** is a **private virtual network** in AWS.

A VPC creates an **isolated** area where we can deploy AWS resources such as EC2.

→ **VPC = a private virtual network in AWS used to contain and connect resources.**

## 1.3. Subnet

A **Subnet** is a smaller part inside a VPC, used to **organize and divide resources**.

There are two main types:

* **Public subnet** → usually contains resources that need to be accessed from the Internet, such as a website.
* **Private subnet** → usually contains resources that do not need direct Internet access, such as a database.

## 1.4. Network Diagram

A **network diagram** is a diagram that shows how users, applications, and AWS resources **connect to each other**.

The diagram helps us understand how a system is designed for:

* **Security**
* **High availability**
* **Scalability**
* **Network connections**

## 1.5. Key Points to Remember

**VPC → Private virtual network in AWS**

**Subnet → Divides and organizes resources inside a VPC**

**Public subnet → Resources that can be accessed from the Internet**

**Private subnet → Resources that are kept private**

**VPC → Subnets → AWS Resources**

# 2. Connectivity to AWS

In this lesson, I learned more about the components of **Amazon VPC** and how to connect resources to the Internet or to a private network.

## 2.1. Amazon VPC

**Amazon VPC (Virtual Private Cloud)** is an isolated virtual network in AWS.

A VPC helps to:

* Organize AWS resources.
* Control connections between resources.
* Improve security.
* Control traffic entering and leaving the network.

## 2.2. Subnet

A **Subnet** is a part of a VPC used to organize resources.

* **Public subnet** → for resources that need Internet access.
* **Private subnet** → for resources that need to stay private, such as databases.

## 2.3. Internet Gateway

An **Internet Gateway** is a component that connects a **VPC to the Internet**.

For example:

**User → Internet → Internet Gateway → VPC → Resource**

An Internet Gateway is commonly used to allow resources in a **public subnet** to communicate with the Internet.

## 2.4. Virtual Private Gateway

A **Virtual Private Gateway** is used to create a **secure VPN connection** between a VPC and a private network, such as:

* On-premises data center
* Corporate network

A VPN connection helps **encrypt and protect** data when it travels over the Internet.

## 2.5. Key Concepts to Remember

**VPC → Private virtual network in AWS**

**Subnet → A smaller part inside a VPC used to organize resources**

**Internet Gateway → Connects a VPC to the Internet**

**Virtual Private Gateway → Connects a VPC to a private network through a VPN**

**VPN → A secure connection between a VPC and a private network**

# 3. More Ways to Connect to the AWS Cloud

In this lesson, I learned more ways to connect **clients, data centers, and other networks** to the AWS Cloud.

## 3.1. AWS Client VPN

**AWS Client VPN** is used to connect **remote workers** or on-premises networks to the AWS Cloud.

* Connects remotely to AWS resources.
* Can automatically scale up or down based on demand.
* Is a VPN service managed by AWS.

## 3.2. AWS Site-to-Site VPN

**AWS Site-to-Site VPN** creates a secure connection between a **data center/branch office** and the AWS Cloud.

* Connects networks together.
* Provides an encrypted and secure connection.
* Can be used for migration and communication between locations.

## 3.3. AWS PrivateLink

**AWS PrivateLink** allows private connections from a VPC to **services or resources** without going through the Internet.

* Provides a private and secure connection.
* Can connect to resources in another VPC.
* Does not require a public IP or Internet Gateway for this connection.

## 3.4. AWS Direct Connect

**AWS Direct Connect** creates a **dedicated private connection** between a company's network and a VPC on AWS.

* Provides a private connection without using a normal Internet connection.
* Provides high bandwidth.
* Is suitable for transferring large amounts of data or using a hybrid cloud.

## 3.5. Key Points to Remember

**Client VPN → Connects remote workers to AWS**

**Site-to-Site VPN → Connects a data center/branch office to AWS**

**PrivateLink → Provides private connections to services/resources**

**Direct Connect → Provides a dedicated connection with high bandwidth**

# 4. Subnets, Security Groups, and Network ACLs

## 4.1. Subnets

**Subnet** = a part of a VPC used to group resources.

* **Public subnet** → resources that need Internet access.
* **Private subnet** → resources that need to stay private, such as databases.

## 4.2. Network Traffic

**Network traffic** = data (**packets**) moving through a network.

A packet entering a VPC may go through:

**Internet → Internet Gateway → Network ACL → Subnet → Resource**

## 4.3. Network ACLs

**Network ACL** = a virtual firewall at the **Subnet level**.

* Controls **inbound + outbound** traffic.
* **Stateless** → does not remember connections.
* Has **Allow + Deny** rules.
* Return traffic must be checked again.

**Default NACL:** Allows inbound + outbound traffic.

**Custom NACL:** Denies traffic by default until rules are added.

## 4.4. Security Groups

**Security Group** = a virtual firewall at the **Resource/EC2 level**.

* Controls **inbound + outbound** traffic.
* **Stateful** → remembers connections.
* Has only **Allow rules**.
* Return traffic is automatically allowed if the original connection was allowed.

## 4.5. Security Group vs NACL

|                    | **Security Group**    | **Network ACL**                    |
| ------------------ | --------------------- | ---------------------------------- |
| **Level**          | EC2/Resource          | Subnet                             |
| **State**          | **Stateful**          | **Stateless**                      |
| **Rules**          | Allow                 | Allow + Deny                       |
| **Return traffic** | Automatically allowed | Must be allowed in both directions |

### Remember These 4 Lines

**Subnet → divides the VPC**

**NACL → Subnet → Stateless → Allow + Deny**

**Security Group → EC2 → Stateful → Allow**

**Security in a VPC → The customer is responsible**

# 5. Amazon VPC Demo

## 5.1. Creating an Amazon VPC

The first step is to create an **Amazon VPC** to contain resources in AWS.

When creating a VPC, we need to choose a **Region** that is suitable for where the resources will be located.

**Region → VPC → Resources**

## 5.2. Creating Subnets

Create:

* **2 Public Subnets**
* **2 Private Subnets**
* Subnets in **2 Availability Zones**

Using multiple AZs helps improve **High Availability**.

```text
Region
```

```text
├── AZ 1
```

```text
│   ├── Public Subnet
```

```text
│   └── Private Subnet
```

```text
│
```

```text
└── AZ 2
```

```text
    ├── Public Subnet
```

```text
    └── Private Subnet
```

## 5.3. Internet Gateway and Route Tables

An **Internet Gateway** allows users to access resources in a VPC from the Internet.

```text
Internet
```

```text
   ↓
```

```text
Internet Gateway
```

```text
   ↓
```

```text
VPC
```

A **Route Table** determines where network traffic should go.

In the demo:

* Create an **Internet Gateway** and attach it to the VPC.
* Create a **Route Table**.
* Add **routes**.
* Associate the **Public Subnets** with the Route Table.

A public subnet has a route to the Internet Gateway to allow Internet traffic.

## 5.4. After Creating the VPC

After creating the network, we can:

* Configure **Security Groups**.
* Configure **Network ACLs**.
* Add resources such as **EC2** or **Databases** to the subnets.

### Remember These 4 Steps

**VPC → creates the network**

**Subnets → divide the VPC**

**Internet Gateway → connects to the Internet**

**Route Table → determines where traffic goes**

# 6. Global Networking

## 6.1. Edge Networking

**Edge networking** = bringing data and processing closer to users to **reduce latency** and improve speed.

AWS has three main Edge networking services:

* **Amazon Route 53** → DNS, routes users.
* **Amazon CloudFront** → CDN, delivers content quickly.
* **AWS Global Accelerator** → improves application speed and reliability.

## 6.2. DNS

**DNS (Domain Name System)** = converts a **domain name → IP address**.

For example:

```text
www.example.com
```

```text
       ↓ DNS
```

```text
   IP Address
```

```text
       ↓
```

```text
    Website
```

DNS can be understood as the **phone book of the Internet**.

## 6.3. Amazon Route 53

**Amazon Route 53** = a **DNS** service used to route users to applications.

It is used to:

* Convert domain names → IP addresses/resources.
* Route users to **EC2, Load Balancers**, or resources outside AWS.
* Register new domains.
* Manage DNS records.
* Manage multiple domains in one place.

**Remember:**

**Route 53 → DNS → Domain → Resource**

## 6.4. Amazon CloudFront

**Amazon CloudFront** = a **CDN (Content Delivery Network)** used to bring content closer to users.

It can be used for:

* Websites.
* Images.
* Videos.
* Applications.
* Large media content.

CloudFront stores **copies (cache)** of content at **Edge Locations** close to users.

```text
User
```

```text
 ↓
```

```text
Edge Location near User
```

```text
 ↓
```

```text
CloudFront
```

```text
 ↓
```

```text
Content
```

→ This helps content **load faster**, reduces latency, and can reduce costs.

**Remember:**

**CloudFront → CDN → Content → User**

## 6.5. AWS Global Accelerator

**AWS Global Accelerator** uses the **AWS global network** to improve application speed and reliability.

It is used to:

* Reduce latency.
* Increase application availability.
* Provide intelligent traffic routing.
* Provide **fast failover** when a location has a problem.

```text
User
```

```text
 ↓
```

```text
AWS Global Network
```

```text
 ↓
```

```text
Application
```

**Remember:**

**Global Accelerator → speeds up application traffic**

## 6.6. Route 53 vs CloudFront vs Global Accelerator

| **Service**            | **What is it used for?**      |
| ---------------------- | ----------------------------- |
| **Route 53**           | DNS, domain → resource        |
| **CloudFront**         | Fast content delivery         |
| **Global Accelerator** | Speeds up application traffic |

### Remember These 4 Lines

**DNS → converts Domain → IP**

**Route 53 → DNS + Domain management**

**CloudFront → CDN + Content close to User**

**Global Accelerator → Faster + more reliable application traffic**

# 7. Global Architectures

## 7.1. AWS Direct Connect

**AWS Direct Connect** = a **private, dedicated connection** from a company network to AWS.

It is used when:

* High **bandwidth** is needed.
* Transferring **large amounts of data**.
* An application needs a stable connection.
* There are security or compliance requirements.

Multiple **Direct Connect connections** can be used for:

* **Failover** → if one connection fails, another connection can continue working.
* **Aggregate bandwidth** → combine the bandwidth of multiple connections.

```text
Company
```

```text
   ↓
```

```text
Direct Connect
```

```text
   ↓
```

```text
Virtual Private Gateway
```

```text
   ↓
```

```text
VPC
```

## 7.2. VPN vs Direct Connect

| **VPN**                              | **Direct Connect**                         |
| ------------------------------------ | ------------------------------------------ |
| Connection through the Internet      | Dedicated connection                       |
| Usually lower cost                   | Usually higher cost                        |
| Lower bandwidth                      | High bandwidth                             |
| Can be used for large data transfers | **More suitable** for large data transfers |
| Secure and quick to set up           | Private connection + high bandwidth        |

**Remember:**

**VPN → secure + uses the Internet**

**Direct Connect → dedicated + high bandwidth**

## 7.3. Multi-Region Architecture

**Multi-Region** = deploying resources in **multiple AWS Regions**.

The goals are to:

* Serve users in different locations.
* Reduce latency.
* Increase availability.
* If one Region has a problem, traffic can be moved to another Region.

An architecture can work like this:

```text
User
```

```text
 ↓
```

```text
Route 53
```

```text
 ↓
```

```text
CloudFront
```

```text
 ↓
```

```text
Region close to/suitable for the user
```

```text
 ↓
```

```text
Application Load Balancer
```

```text
 ↓
```

```text
Auto Scaling
```

```text
 ↓
```

```text
EC2
```

### Roles

**Route 53**

→ DNS and routes users to the application.

**CloudFront**

→ CDN that brings content closer to users through Edge Locations.

**Application Load Balancer**

→ Distributes traffic to EC2 instances.

**Auto Scaling**

→ Automatically increases or decreases the number of EC2 instances.

## 7.4. Real-World Global Architecture

For example, a company has users around the world:

```text
                 Route 53
```

```text
                    ↓
```

```text
                CloudFront
```

```text
               ↙         ↘
```

```text
          Region 1       Region 2
```

```text
             ↓             ↓
```

```text
            ALB           ALB
```

```text
             ↓             ↓
```

```text
          EC2/ASG       EC2/ASG
```

→ **Route 53** routes users.

→ **CloudFront** delivers content quickly.

→ **Multi-Region** helps increase availability and reduce latency.

### Remember These 4 Lines

**VPN → secure connection through the Internet**

**Direct Connect → dedicated connection + high bandwidth**

**Route 53 → DNS + routing**

**CloudFront → CDN + content close to users**
