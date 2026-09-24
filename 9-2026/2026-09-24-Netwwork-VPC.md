# Network - VPC

### 1. VPC

* **VPC (Virtual Private Cloud)** = a virtual private network on AWS.
* A VPC is located in **1 Region** and can contain multiple **Subnets**.
* A **Subnet belongs to only 1 Availability Zone (AZ)**.
* **Public Subnet**: can connect to the Internet.
* **Private Subnet**: does not have direct Internet access.

### 2. Main Components

* **Route Table** → determines where traffic goes.
* **Internet Gateway (IGW)** → connects the VPC to the Internet.
* **Security Group (SG)** → controls traffic at the **Resource** level.
* **NACL** → controls traffic at the **Subnet** level.

### 3. VPC Peering

* Connects **one VPC to another VPC**.
* Provides a direct **1-to-1 connection**.
* The CIDRs of the two VPCs **must not overlap**.

### 4. Transit Gateway

* Used to connect **multiple VPCs and networks** through a central hub.
* Useful when there are many VPCs instead of creating multiple Peering connections.

### 5. VPC Endpoint

* Allows a VPC to connect to **AWS Services through a private network**.
* No need to go through the Public Internet.
* **Gateway Endpoint** → S3, DynamoDB.
* **Interface Endpoint** → used for many other AWS services.

### 6. Bastion Host

* A **middle server** used to access servers in a Private Subnet.
* Helps manage servers that do not allow direct access from the Internet.

### 7. Direct Connect

* Connects **On-premises → AWS** through a private network connection.
* Different from VPN because VPN uses the **Public Internet**.

### 8. NAT Gateway

* Allows resources in a **Private Subnet → Internet** to access the outside world.
* Resources from the Internet **cannot initiate a connection back to** the Private Subnet through NAT.

### 9. VPC Flow Logs

* Records information about **network traffic** in a VPC.
* Used to **monitor, inspect, and troubleshoot** network problems.