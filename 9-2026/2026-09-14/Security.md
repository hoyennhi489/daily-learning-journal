# 1. Introduction to Security on AWS

In this lesson, I learned about the basic concepts of **AWS Security**, including **Authentication**, **Authorization**, the **AWS Shared Responsibility Model**, and different types of **Security Controls**.

## 1.1. Authentication and Authorization

**Authentication** is the process of verifying the identity of a user or an entity using login information such as a username and password.

Example: An employee logs in to the company's system.

**Authorization** is the process of determining what a user is allowed to do after logging in.

Example: An employee is only allowed to view their own information.

## 1.2. AWS Shared Responsibility Model

Security on AWS is a shared responsibility between **AWS and the customer**.

·       **Customer – Security in the cloud:** the customer is responsible for protecting their data, systems, and applications, and controlling access to resources.

·       **AWS – Security of the cloud:** AWS is responsible for protecting AWS infrastructure, including hardware, virtualization systems, platform software, and Data Centers, Regions, Availability Zones, and Edge Locations.

## 1.3. AWS Security Controls

AWS provides many security mechanisms to protect resources. These mechanisms help:

·       **Prevent:** prevent security incidents.

·       **Protect:** protect networks, applications, and data.

·       **Detect and respond:** detect and handle security incidents.

### Remember

·       **Authentication** → Verify **who you are**.

·       **Authorization** → Determine **what you are allowed to do**.

·       **Customer** → Security **in** the cloud.

·       **AWS** → Security **of** the cloud.

·       Security Controls → **Prevent, Protect, Detect and respond**.

# 2. Preventing Unauthorized Access

In this lesson, I learned how **AWS Identity and Access Management (IAM)** helps protect AWS accounts and resources by managing **identity, permissions, and access**.

## 2.1. AWS Identity and Access Management (IAM)

**IAM** is a service that helps manage **identity and access permissions** to AWS services and resources.

By default, **every action is denied**. Users must be given permission before they can perform an action.

### Principle of Least Privilege

**Principle of Least Privilege** means:

Only give users or systems the permissions they actually need, and do not give unnecessary permissions.

Example: If an employee only needs to read data in S3, they should not be given permission to delete data.

IAM provides:

·       **IAM users** – represent users.

·       **IAM groups** – groups of users with the same permissions.

·       **IAM roles** – provide temporary access permissions.

·       **IAM policies** – define the actions that an identity is allowed to perform.

## 2.2. Root User and MFA

The **root user** is an account with very high permissions in AWS.

To protect the root user:

·       Use a **strong password**.

·       Enable **Multi-Factor Authentication (MFA)**.

**MFA** requires users to provide **two or more verification methods** to log in.

## 2.3. Additional Access Management Services

### AWS IAM Identity Center

**IAM Identity Center** helps centrally manage identity and access across multiple AWS accounts and applications.

It supports **Single Sign-On (SSO)**, allowing users to use one set of credentials to access multiple AWS services and accounts.

### AWS Secrets Manager

**Secrets Manager** is used to manage sensitive information such as:

·       Database credentials

·       API keys

·       Passwords

It also supports **rotating** and **retrieving** secrets securely.

### AWS Systems Manager

**Systems Manager** provides a central place to manage **nodes** across multiple accounts, Regions, hybrid environments, and multi-cloud environments.

It can help with:

·       Viewing node information.

·       Managing users.

·       Automating security patching.

·       Managing some system configurations.

## 2.4. Key Points

| **Concept**             | **Meaning**                              |
| ----------------------- | ---------------------------------------- |
| **IAM**                 | Managing identity and access             |
| **Least privilege**     | Only give necessary permissions          |
| **IAM User**            | Represents a user                        |
| **IAM Group**           | Groups users                             |
| **IAM Role**            | Provides temporary access permissions    |
| **IAM Policy**          | Defines permissions                      |
| **MFA**                 | Two or more verification methods         |
| **IAM Identity Center** | Centralized access management + SSO      |
| **Secrets Manager**     | Manages passwords, credentials, API keys |
| **Systems Manager**     | Manages nodes and automates systems      |

# 3. Protecting Networks and Applications

In this lesson, I learned about **DoS, DDoS** and how AWS protects **networks and applications** from these attacks.

## 3.1. DoS Attack

**DoS (Denial of Service)** is an attack in which an attacker sends **too much network traffic** to a web application.

When the application is overloaded:

·       The application cannot process more requests.

·       Legitimate users may not be able to access the website.

**Example:** A website receives too many fake requests at the same time → the server becomes overloaded → real customers cannot use the website.

## 3.2. DDoS Attack

**DDoS (Distributed Denial of Service)** is similar to DoS but uses **many controlled computers or devices** to send traffic to the target at the same time.

These devices are called **zombie bots**.

### Difference

| **DoS**                         | **DDoS**                           |
| ------------------------------- | ---------------------------------- |
| Usually from one source         | From many computers/devices        |
| Sends a large amount of traffic | Many devices send traffic together |
| Overloads the application       | Overloads the application          |

**Key point:**

👉 **DDoS = many compromised computers/devices attack together.**

## 3.3. AWS Protection Through Infrastructure

AWS has global infrastructure with:

·       **Regions**

·       **Availability Zones**

·       **Edge locations**

This infrastructure is designed to make it more difficult for attackers to overload the system.

Some components help protect networks and applications:

### Security Groups

Security groups help control **network traffic** to resources.

### Elastic Load Balancing (ELB)

**ELB** helps distribute traffic to appropriate resources, helping the application handle traffic more efficiently.

### AWS Regions

Multiple **Regions** help distribute resources across different areas instead of depending on a single location.

## 3.4. AWS Shield

**AWS Shield** is a service that helps protect AWS resources from **DDoS attacks**.

### AWS Shield Standard

·       Automatically protects against common types of DDoS attacks.

·       No additional cost.

·       Detects and mitigates malicious network traffic in real time.

### AWS Shield Advanced

·       It is a paid service.

·       Provides **detailed attack diagnostics**.

·       Can detect and mitigate more complex DDoS attacks.

·       Can integrate with:

o   Amazon CloudFront

o   Amazon Route 53

o   ELB

o   AWS WAF

## 3.5. AWS WAF

**AWS WAF (Web Application Firewall)** monitors **network requests** going into web applications.

WAF uses a **web ACL (Web Access Control List)** to check requests.

Example:

**Blocked IP → AWS WAF → Deny access**

**Legitimate request → AWS WAF → Allow access**

WAF can help block unwanted requests based on configured rules.

## 3.6. Key Points

| **Concept**             | **Meaning**                                                   |
| ----------------------- | ------------------------------------------------------------- |
| **DoS**                 | One attacker overloads an application with excessive traffic  |
| **DDoS**                | Many compromised computers/devices perform an attack together |
| **Security Groups**     | Control network traffic                                       |
| **ELB**                 | Distributes traffic                                           |
| **AWS Shield Standard** | Automatically protects against common DDoS attacks            |
| **AWS Shield Advanced** | Advanced protection and diagnostics                           |
| **AWS WAF**             | Web application firewall, checks requests                     |
| **Web ACL**             | Rules used to allow/deny requests                             |

# 4. Protecting Data

In this lesson, I learned how **encryption** helps protect data on AWS, especially data **at rest** and **in transit**.

## 4.1. Encryption Basics

**Encryption** is the process of transforming data into a form that cannot be read without the appropriate **key**.

It can be understood simply:

**Data → Encryption key → Encrypted data**

When the data needs to be used:

**Encrypted data → Decryption key → Original data**

Only a person or system with the appropriate key can access the encrypted data.

## 4.2. Types of Data Encryption

There are 2 main types of encryption:

### Data Encryption at Rest

Data that is **stored and not moving**.

Examples:

·       Data stored in a database.

·       Files stored in storage.

👉 **At rest = data is being stored.**

### Data Encryption in Transit

Data that is **moving between locations or systems**.

Example:

**Database → Web application**

SSL/TLS certificates are used to create **encrypted network connections** between systems.

👉 **In transit = data is moving.**

## 4.3. AWS Built-in Data Protection

Some AWS storage services have built-in data protection:

·       **Amazon S3**

·       **Amazon EBS**

·       **Amazon DynamoDB**

These services have built-in capabilities to protect data.

## 4.4. AWS Key Management Service (AWS KMS)

**AWS KMS** is used to:

·       Create cryptographic keys.

·       Manage cryptographic keys.

·       Encrypt data.

·       Decrypt data.

·       Control the use of keys.

You can also define which **IAM users and IAM roles** are allowed to manage keys.

A **cryptographic key** is a string of characters used to **encrypt and decrypt data**.

One important point in the lesson:

Keys are managed by AWS KMS and can be temporarily disabled so they cannot be used.

## 4.5. Amazon Macie

**Amazon Macie** helps protect **sensitive data at rest**.

Macie uses:

·       **Machine Learning (ML)**

·       **Automation**

to detect sensitive data stored in **Amazon S3**.

Macie can also help assess **security posture**, which is especially useful for **compliance** requirements.

## 4.6. AWS Certificate Manager (ACM)

**AWS Certificate Manager (ACM)** centrally manages **SSL/TLS certificates**.

SSL/TLS certificates help create **encrypted connections** to protect **data in transit**.

## 4.7. Key Points

| **Concept**         | **Meaning**                               |
| ------------------- | ----------------------------------------- |
| **Encryption**      | Encrypt data                              |
| **Decryption**      | Decrypt data                              |
| **Data at rest**    | Data that is being stored                 |
| **Data in transit** | Data that is moving                       |
| **AWS KMS**         | Creates and manages cryptographic keys    |
| **Amazon Macie**    | Detects and monitors sensitive data in S3 |
| **AWS ACM**         | Manages SSL/TLS certificates              |
| **SSL/TLS**         | Creates encrypted network connections     |

# 5. Detecting and Responding to Security Incidents

## 5.1 Amazon Inspector

**Amazon Inspector** = a service that automatically checks for **security vulnerabilities** and security issues.

·       Checks:

o   **EC2 instances**

o   **Containers**

o   **Lambda functions**

·       Detects software with vulnerabilities or unsafe configurations.

·       Issues are classified by severity.

·       Provides recommendations for remediation.

**Remember:**

**Inspector → Checks security vulnerabilities**

## 5.2 Amazon GuardDuty

**Amazon GuardDuty** = a service that detects **security threats** in AWS.

·       Continuously monitors account and network activity.

·       Uses:

o   Known malicious IP addresses.

o   Anomaly detection.

o   Machine Learning.

·       Provides **findings** and recommendations for handling them.

·       Can use **AWS Lambda** to automatically perform remediation actions.

**Remember:**

**GuardDuty → Detects threats**

## 5.3 Amazon Detective

**Amazon Detective** = a service that investigates the cause of a **security incident** after a threat has been detected.

·       Analyzes the activity of users and resources.

·       Uses **interactive visualizations** to view data.

·       Tracks events over a timeline.

·       Helps find the **root cause** of an issue.

**Remember:**

**Detective → Investigates the root cause**

## 5.4 AWS Security Hub

**AWS Security Hub** = a central place for security information from multiple services.

·       Aggregates **security findings** from AWS and partner services.

·       Displays **security and compliance** status in one interface.

·       Groups issues into **insights**.

·       Supports automated remediation.

**Remember:**

**Security Hub → Centralizes findings in one place**

## 5.5 Comparison

| **Service**          | **Main Purpose**                |
| -------------------- | ------------------------------- |
| **Amazon Inspector** | Checks security vulnerabilities |
| **Amazon GuardDuty** | Detects threats                 |
| **Amazon Detective** | Investigates the root cause     |
| **AWS Security Hub** | Centralizes security findings   |

### Easy-to-Remember Flow

```text
Inspector
```

```text
   ↓
```

```text
Check vulnerabilities
```

```text
```

```text
GuardDuty
```

```text
   ↓
```

```text
Detect threats
```

```text
```

```text
Detective
```

```text
   ↓
```

```text
Investigate the root cause
```

```text
```

```text
Security Hub
```

```text
   ↓
```

```text
Centralize and manage findings
```

### Remember These 4 Lines

**Inspector → Vulnerabilities → Check security vulnerabilities**

**GuardDuty → Threats → Detect threats**

**Detective → Root Cause → Investigate the root cause**

**Security Hub → Findings → Centralize security information**

# 6. Additional Security Resources

## 6.1 AWS Security Documentation

AWS provides many resources to learn about, protect, and handle **security** issues.

Important resources:

·       **Security, Identity, and Compliance on AWS** → general information about Security, Identity, and Compliance services.

·       **AWS Knowledge Center** → find answers, troubleshoot issues, and learn more about security services.

·       **AWS Security Documentation** → find security documentation for each product/service.

·       **AWS Security Blog** → find best practices, detailed information, and updates about security features.

**Remember:**

**Documentation → Learn and find information**

**Knowledge Center → Find answers + Troubleshooting**

**Security Blog → Best Practices + Updates**

## 6.2 AWS Marketplace Security Resources

**AWS Marketplace** = a place that provides third-party software and services that can run on AWS.

Types of security tools:

### Threat Detection and Prevention

·       Detect and prevent malicious activities.

### Identity and Access Management

·       Manage user access permissions.

·       Support authentication.

### Data Protection

·       Encrypt and protect sensitive data.

### Compliance and Governance

·       Help meet security and regulatory requirements.

## 6.3 Comparison

| **Resource**               | **Purpose**                           |
| -------------------------- | ------------------------------------- |
| **Security Documentation** | Learn about and protect AWS resources |
| **Knowledge Center**       | Find answers and troubleshoot issues  |
| **Security Blog**          | Best practices and updates            |
| **AWS Marketplace**        | Find third-party security software    |

### Remember These 4 Lines

**AWS Documentation → Security Documentation**

**Knowledge Center → Questions + Troubleshooting**

**Security Blog → Best Practices + Updates**

**AWS Marketplace → Third-party Security tools**