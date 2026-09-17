# 1. Introduction to Well-Architected Solutions

## 1.1. AWS Well-Architected Framework

**AWS Well-Architected Framework** = a framework that helps evaluate and design cloud architecture on AWS better.

The framework helps check whether the system is:

·       **Functional**
→ works correctly.

·       **Efficient**
→ uses resources efficiently.

·       **Secure**
→ safe and secure.

·       **Reliable**
→ reliable.

·       Able to **grow and be maintained for a long time**.

In simple terms:

**Well-Architected Framework = a way to check whether an AWS architecture is well designed or not.**

## 1.2. AWS Specialized Services

In the next part of the course, I will learn more about some **AWS Specialized Services** for specific needs such as:

·       **Development**
→ application development.

·       **Business applications**
→ business applications.

·       **End-user computing**
→ computers and applications for end users.

·       **Internet of Things (IoT)**
→ devices connected to the Internet.

These are specialized services used for specific use cases.

## 1.3. Purpose of the Well-Architected Framework

When building a system on AWS, it is not enough to just make the application **work**.

I also need to consider:

·       Is the system **secure**?

·       Does it **operate reliably**?

·       Is it **cost-optimized**?

·       Does it have **good performance**?

·       Is it easy to **operate and scale**?

The AWS Well-Architected Framework gives me a systematic way to consider these issues.

### Remember these 4 lines

·       **AWS Well-Architected Framework** → a framework for evaluating AWS architecture.

·       **Functional** → works correctly.

·       **Efficient + Secure** → efficient + secure.

·       **Specialized Services** → services for specialized needs.

# 2. AWS Specialized Services

## 2.1. What are AWS Specialized Services?

**AWS Specialized Services** = AWS services designed for **specific needs**.

In this lesson, I learned about 4 groups of services:

·       **Development services** → application development.

·       **Business application services** → business applications.

·       **End-user computing services** → provide applications and desktops for users.

·       **IoT services** → manage IoT devices.

## 2.2. Development Services

### AWS CodeBuild

**AWS CodeBuild** = a **fully managed** service used to:

·       Compile source code.

·       Run tests.

·       Create software packages to deploy.

·       Automatically scale based on demand.

**Remember:**

**CodeBuild = Build + Test**

### AWS CodePipeline

**AWS CodePipeline** = a **CI/CD** service that automates the process:

**Build → Test → Deploy**

It can monitor a source code repository. When the code changes, the pipeline can automatically perform the next steps.

**Remember:**

**CodePipeline = CI/CD + Build + Test + Deploy**

### AWS X-Ray

**AWS X-Ray** = a tool that helps **monitor, debug, and analyze application performance**.

It helps me see requests moving through different parts of the system to find:

·       Performance bottlenecks.

·       Errors.

·       Problems in the application.

**Remember:**

**X-Ray = Debug + Performance**

### AWS AppSync

**AWS AppSync** = a **fully managed GraphQL** service.

It helps create **GraphQL APIs** so the frontend can connect to and get data from the backend.

**GraphQL** = the client can request **exactly the data it needs**.

**Remember:**

**AppSync = GraphQL API**

### AWS Amplify

**AWS Amplify** = helps develop, deploy, and manage **full-stack applications** on AWS.

It can support functions such as:

·       Authentication.

·       APIs.

·       Storage.

·       Hosting.

**Remember:**

**Amplify = Develop + Deploy + Manage Full-stack Apps**

## 2.3. Business Application Services

### Amazon Connect

**Amazon Connect** = an **AI-powered contact center** service on the cloud.

It supports:

·       **Call routing** → routing calls.

·       **Recording** → recording.

·       **Analytics** → analysis.

It is used to build and manage a **customer service call center**.

**Remember:**

**Amazon Connect = Customer Service + Call Center**

### Amazon SES

**Amazon Simple Email Service (Amazon SES)** = an email service that can send **large amounts of email**.

Examples:

·       Marketing emails.

·       Transactional emails.

·       Email automation.

**Remember:**

**SES = Send Emails**

## 2.4. End-user Computing Services

### Amazon AppStream 2.0

**Amazon AppStream 2.0** = a service that streams applications from the cloud to users' devices.

Users can use applications **without installing the software directly on their computers**.

**Remember:**

**AppStream 2.0 = Stream Applications**

### Amazon WorkSpaces

**Amazon WorkSpaces** = a **fully managed cloud-based desktop** service.

Employees can access their work desktop from any device with an Internet connection.

**Remember:**

**WorkSpaces = Cloud Desktop**

### Amazon WorkSpaces Secure Browser

**Amazon WorkSpaces Secure Browser** = a **fully managed remote enterprise browser**.

It allows employees to access:

·       Private websites.

·       SaaS applications.

·       Public Internet.

Without IT needing to manage client software, infrastructure, or VPN connections.

**Remember:**

**WorkSpaces Secure Browser = Secure Remote Browser**

## 2.5. IoT Services

**Internet of Things (IoT)** = a network of **physical devices** with sensors and software that can collect and exchange data over the Internet.

Examples:

·       Smart security cameras.

·       Smart pet feeders.

·       Smart irrigation systems.

### AWS IoT Core

**AWS IoT Core** = a cloud service that helps **connect physical devices to cloud applications securely**.

It supports:

·       Connecting devices.

·       Collecting data.

·       Processing data.

·       Securing connections.

·       Remote monitoring and control.

**Remember:**

**IoT Core = Connect + Manage IoT Devices**

## 2.6. Quick Comparison

| **Service**                   | **Main Function**              |
| ----------------------------- | ------------------------------ |
| **CodeBuild**                 | Build + Test code              |
| **CodePipeline**              | CI/CD + Deploy                 |
| **X-Ray**                     | Debug + Performance            |
| **AppSync**                   | GraphQL API                    |
| **Amplify**                   | Full-stack applications        |
| **Amazon Connect**            | Customer service / Call center |
| **Amazon SES**                | Send emails                    |
| **AppStream 2.0**             | Stream applications            |
| **WorkSpaces**                | Cloud desktop                  |
| **WorkSpaces Secure Browser** | Secure remote browser          |
| **IoT Core**                  | Connect/manage IoT devices     |

### Remember these 4 lines

·       **CodeBuild / CodePipeline** → Build / CI/CD.

·       **X-Ray / AppSync / Amplify** → Debug / GraphQL / Full-stack.

·       **Connect / SES** → Call center / Email.

·       **AppStream / WorkSpaces / IoT Core** → Applications / Cloud Desktop / IoT.

# 3. AWS Well-Architected Framework

## 3.1. What is the AWS Well-Architected Framework?

**AWS Well-Architected Framework** = a framework that helps me **evaluate and improve cloud architecture** so that the system is:

·       **Secure**
→ secure.

·       **High-performing**
→ high performance.

·       **Resilient**
→ able to handle failures and recover.

·       **Efficient**
→ uses resources efficiently.

The framework includes **6 pillars** and can be applied to different workloads.

## 3.2. Six Pillars

### 1. Operational Excellence

**Operational Excellence** = focuses on **operating and monitoring the system**, while continuously improving processes.

Examples:

·       Automate deployment using a **CI/CD pipeline**.

·       Respond to and handle events effectively.

·       Continuously improve operations.

**Remember:**

**Operational Excellence = Run + Monitor + Improve**

### 2. Security

**Security** = protecting systems and data.

Focuses on:

·       Protecting data.

·       Protecting systems.

·       **Data integrity**.

·       **Least privilege access**.

·       Building security from the beginning.

**Remember:**

**Security = Protect + Least Privilege**

### 3. Reliability

**Reliability** = ensuring that the system can **handle failures and recover** when problems occur.

Focuses on:

·       Recovery planning.

·       The ability to recover when the system has a failure.

·       Handling disruptions.

·       Adjusting the system when business/customer needs change.

**Remember:**

**Reliability = Recover + Handle Failures**

### 4. Performance Efficiency

**Performance Efficiency** = using resources **efficiently**.

Examples:

·       Choose the right type and size of an **EC2 instance**.

·       **Rightsizing** based on workload and memory requirements.

·       Continuously adjust when business needs change.

**Remember:**

**Performance Efficiency = Use Resources Efficiently**

### 5. Cost Optimization

**Cost Optimization** = controlling and reducing costs by using resources appropriately.

Examples:

If an EC2 instance is **underutilized** → it can be changed to a smaller instance.

If a service is no longer needed → **deprovision** it so I do not continue paying for it.

**Remember:**

**Cost Optimization = Optimize Resources + Reduce Cost**

### 6. Sustainability

**Sustainability** = designing systems that save energy and reduce environmental impact.

Examples:

·       If I do not need EC2 to run continuously → I can use **AWS Lambda**.

·       If I do not need a large RDS → use a smaller instance.

·       Reduce unnecessary resources → reduce energy consumption and carbon emissions.

**Remember:**

**Sustainability = Energy Efficiency + Reduce Environmental Impact**

## 3.3. AWS Well-Architected Tool

**AWS Well-Architected Tool (AWS WA Tool)** = a **free** service that helps evaluate and improve workloads based on the **6 pillars**.

AWS WA Tool can:

·       Review workloads.

·       Evaluate the 6 pillars.

·       Track **milestones**.

·       Create improvement plans.

·       Use **custom lenses** for different assessment needs.

·       Support team collaboration and progress tracking.

Simple workflow:

```text
Create Workload
```

```text
     ↓
```

```text
Run AWS WA Tool
```

```text
     ↓
```

```text
Review Questions
```

```text
     ↓
```

```text
Find Potential Issues
```

```text
     ↓
```

```text
Get Recommendations / Remediations
```

```text
     ↓
```

```text
Improve Architecture
```

**Remember:**

**AWS WA Tool = Assess + Improve Workloads**

## 3.4. Comparison of the 6 Pillars

| **Pillar**                 | **Main Idea**                             |
| -------------------------- | ----------------------------------------- |
| **Operational Excellence** | Operations + improvement                  |
| **Security**               | Protect systems + data                    |
| **Reliability**            | Handle failures + recovery                |
| **Performance Efficiency** | Use resources efficiently                 |
| **Cost Optimization**      | Optimize and reduce costs                 |
| **Sustainability**         | Save energy + reduce environmental impact |

### Remember these 4 lines

·       **Operational Excellence** → Run + Monitor + Improve.

·       **Security + Reliability** → Protect + Recover.

·       **Performance + Cost** → Efficient + Save.

·       **Sustainability** → Energy + Environment.

# 4. Specialized Use Cases

## 4.1. What are Specialized Use Cases?

**Specialized Use Cases** = combining multiple **AWS services** to solve a specific real-world need.

An application can use multiple AWS services at the same time. Each service has a different task.

## 4.2. Serverless Web Backend + X-Ray

Architecture:

```text
Customer
```

```text
   ↓ HTTP
```

```text
API Gateway
```

```text
   ↓
```

```text
Lambda
```

```text
   ↓
```

```text
DynamoDB
```

```text
AWS X-Ray → tracks the entire request
```

·       **Amazon API Gateway** = receives and checks API requests.

·       **AWS Lambda** = runs backend code without managing servers.

·       **Amazon DynamoDB** = stores data.

·       **AWS X-Ray** = tracks requests and finds errors/performance problems.

Workflow:

**Customer → API Gateway → Lambda → DynamoDB → Response → Customer**

**X-Ray** can trace the request through these components to identify where the problem occurs.

**Remember:**

`API Gateway = API`

`Lambda = Run Code`

`DynamoDB = Store Data`

`X-Ray = Trace + Troubleshoot`

## 4.3. Static Website + Contact Form + SES

Architecture:

```text
Customer
```

```text
   ↓
```

```text
Static Website
```

```text
   ↓
```

```text
Amazon S3
```

```text
   ↓ Contact Form
```

```text
API Gateway
```

```text
   ↓
```

```text
Lambda
```

```text
   ↓
```

```text
Amazon SES
```

```text
   ↓
```

```text
Email → Business Owner
```

·       **Amazon S3** = hosts the static website.

·       **API Gateway** = receives requests from the contact form.

·       **Lambda** = processes the request.

·       **Amazon SES** = sends an email to the business owner.

Important point:

This website **does not need a separate server** to process the contact form.

When a user submits the form:

**Contact Form → API Gateway → Lambda → SES → Email**

**Remember:**

`S3 = Static Website`

`API Gateway = Receive Request`

`Lambda = Process`

`SES = Send Email`

## 4.4. Customer Support + Callback

Architecture uses:

·       **Amazon Connect**

·       **AWS Lambda**

·       **Amazon CloudFront**

The purpose is to provide an **alternate channel and callback option** for customer support.

Example:

```text
Customer
```

```text
   ↓
```

```text
Amazon Connect
```

```text
   ↓
```

```text
Callback / Chat / Email
```

```text
   ↓
```

```text
Customer Support
```

If customers have to wait too long when calling, they can choose **callback** instead of continuing to wait.

In this architecture:

·       **Amazon Connect** = customer support/contact center.

·       **Lambda** = processes logic.

·       **CloudFront** = is combined in the customer support architecture.

**Remember:**

`Amazon Connect = Customer Support`

`Lambda = Process Logic`

`CloudFront = Part of the Architecture`

## 4.5. Three Architectures to Remember

| **Use case**                  | **AWS Services**                        | **Purpose**                     |
| ----------------------------- | --------------------------------------- | ------------------------------- |
| Serverless Web Backend        | API Gateway + Lambda + DynamoDB + X-Ray | Backend + Database + Monitoring |
| Static Website + Contact Form | S3 + API Gateway + Lambda + SES         | Website + Send Email            |
| Customer Support Callback     | Connect + Lambda + CloudFront           | Customer support + Callback     |

## 4.6. The Most Important Points of the Lesson

AWS services can **be combined with each other** to solve different business problems.

Examples:

·       Need a **serverless backend** → API Gateway + Lambda + DynamoDB.

·       Need to **track requests** → X-Ray.

·       Need a **static website** → S3.

·       Need to **send emails** → SES.

·       Need **customer support** → Amazon Connect.

### Remember these 4 lines

·       **API Gateway + Lambda + DynamoDB** → Serverless Web Backend.

·       **X-Ray** → Trace and find problems in an application.

·       **S3 + API Gateway + Lambda + SES** → Website with a Contact Form that sends email.

·       **Amazon Connect + Lambda + CloudFront** → Customer Support with a callback option.