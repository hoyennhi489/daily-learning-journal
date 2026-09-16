# 1. Introduction to Pricing and Support

## 1.1. AWS Pricing

**AWS Pricing** helps understand and manage costs when using
AWS services.

Some tools that support cost tracking and management:

·       **AWS
Billing Dashboard** → track billing and cost information.

·       **AWS
Budgets** → track and manage the AWS budget.

·       **AWS
Cost Explorer** → analyze and forecast AWS costs.

## 1.2. AWS Support

**AWS Support** provides support options when using AWS
services.

In this section, I learned about:

·       **AWS
Support Plans** → AWS support plans.

·       **AWS
Marketplace** → a place to find and use products and solutions from AWS and
partners.

·       **AWS
Partner Network (APN)** → AWS's network of partners.

## 1.3. Cost Optimization

**Cost Optimization** is managing and optimizing costs when
using the AWS Cloud.

The purpose is to use AWS services effectively and control costs.

## 1.4. Key Points

**AWS Pricing** → learn about and manage costs.

**AWS Support** → support options when using AWS.

**Cost Optimization** → manage and optimize AWS costs.

**Billing Dashboard + Budgets + Cost Explorer** → tools that
help track, manage, and forecast costs.

# 2. AWS Pricing Concepts

AWS uses a **Pay-as-you-go** model, which means customers only
pay for the services and resources they actually use, for the time they use
them, without needing long-term contracts or complicated licenses.

## 2.1 Three Main Concepts of AWS Pricing

### 1. Pay as you go

·       Pay
only for what you use.

·       No
long-term commitment is required.

### 2. Save when you commit

·       You
can save costs when you **commit to using AWS for a period of time**.

### 3. Pay less by using more

·       When
you use more, the cost per unit can be lower.

## 2.2 Factors Affecting Costs

The price of an AWS service can vary based on:

·       **Service
category/type** – type of service.

·       **Configuration**
– usage configuration.

·       **AWS
Region** – selected Region.

·       **Pricing
model** – pricing model.

To know the specific price of a service, see **Pricing** on the
page of that service.

## 2.3 Three Fundamental Drivers of Cost

AWS has 3 **fundamental drivers of cost**:

·       **Compute**
– computing resources.

·       **Storage**
– storage capacity.

·       **Data transfer** – data being transferred, especially
**outbound data transfer**.

These three factors affect each AWS service in different ways.

## 2.4 Example with Amazon EC2

When using **Amazon EC2**, costs can be affected by:

·       **Compute**
→ EC2 resources being used.

·       **Storage**
→ storage used for the instance.

·       **Data transfer** → data being transferred out.

Each service has a different pricing method, so you need to check
the **Pricing** of that service for details.

# 3. AWS Pricing and Billing Services

AWS has many services and tools that help **forecast, track, manage and view
AWS costs**.

## 3.1 AWS Organizations

**AWS Organizations** helps centrally manage and govern multiple AWS
accounts.

·       Create,
group, and manage multiple accounts.

·       Apply
security policies at the account level.

·       **Consolidated
billing**: combine billing for multiple accounts and pay using one
payment method.

**Use cases:**

·       Manage
multiple AWS accounts in one organization.

·       Apply
policies across the organization.

## 3.2 AWS Billing and Cost Management Dashboard

The Dashboard helps view and manage AWS costs centrally.

You can view:

·       Current
charges – current costs.

·       Usage
– usage level.

·       Forecasts
– cost forecasts.

·       Billing
reports and invoices.

·       Payment
methods.

·       Budgets
and consolidated billing.

**Use case:** View reports and charts about the amount of AWS
used each month.

## 3.3 AWS Budgets

**AWS Budgets** is used to set a **budget** and send **alerts**
when costs or usage exceed the set threshold.

**Use cases:**

·       Alert
when **projected costs** exceed the allowed amount.

·       Predict
future costs based on current usage trends.

**Remember:**

**Budgets = Set budget + Alert**

## 3.4 AWS Cost Explorer

**AWS Cost Explorer** helps:

·       Visualize
– visualize costs.

·       Analyze
– analyze costs.

·       Manage
– manage costs.

·       Forecast
– forecast costs.

You can view **spending patterns** and **trends** to find
opportunities to save.

**Use cases:**

·       Analyze
past costs.

·       Forecast future AWS costs.

**Remember:**

**Cost Explorer = Analyze + Forecast**

## 3.5 AWS Pricing Calculator

**AWS Pricing Calculator** is a web-based tool used to **estimate AWS
costs before deployment**.

You enter configurations such as:

·       Instance
type.

·       Storage.

·       Data transfer.

Then the Calculator provides a **cost breakdown** based on the
selected configuration.

**Use cases:**

·       Estimate
costs before deployment.

·       Compare costs between services and configurations.

**Remember:**

**Pricing Calculator = Estimate cost before deployment**

## 3.6 Distinguishing the Services

| **Service**            | **Main Function**                                     |
| ---------------------- | ----------------------------------------------------- |
| **AWS Organizations**  | Manage multiple AWS accounts + consolidated billing   |
| **Billing Dashboard**  | View and manage billing/cost                          |
| **AWS Budgets**        | Set a budget and alert when the threshold is exceeded |
| **Cost Explorer**      | Analyze and forecast costs                            |
| **Pricing Calculator** | Estimate costs before deployment                      |

# 4. AWS Support Plans

AWS provides many **Support Plans** for different needs, from
people who are new to AWS to businesses with critical systems.

Each higher plan adds more **tools, advanced support, and faster
response times**.

## 4.1 Basic Support

**Basic Support** is included for all AWS customers.

·       Includes
documentation, whitepapers, and AWS re:Post.

·       Includes
**Core AWS Trusted Advisor checks**.

·       Response
time:

o
General guidance: **< 24 hours**

o
Systems impaired: **< 12 hours**

·       No
**Technical Account Manager (TAM)**.

## 4.2 Developer Support

Suitable for **experimenting or testing** on AWS.

·       Includes
the benefits of Basic Support.

·       Includes
**Core AWS Trusted Advisor checks**.

·       Response
time:

o
Production system impaired: **< 4 hours**

o
Production system down: **< 1 hour**

·       No
TAM.

## 4.3 Business Support

Recommended as the minimum for **production workloads**.

·       Includes
the **Full set of AWS Trusted Advisor checks**.

·       Response
time:

o
Production system impaired: **< 4 hours**

o
Production system down: **< 1 hour**

·       No
TAM.

## 4.4 Enterprise On-Ramp Support

Suitable for **production and business-critical workloads**.

·       Includes
the **Full set of AWS Trusted Advisor checks**.

·       Includes
a **pool of Technical Account Managers (TAMs)**.

·       TAMs
provide proactive guidance on architecture, operations, and cost.

·       Business-critical
system down: **< 30 minutes**.

## 4.5 Enterprise Support

Suitable for **business-critical and mission-critical workloads**.

·       Includes
the **Full set of AWS Trusted Advisor checks**.

·       Includes
**prioritized recommendations** from the AWS account team.

·       Includes
a **designated Technical Account Manager (TAM)**.

·       TAM
provides architectural and operational guidance.

·       Business-critical
or mission-critical system down: **< 15 minutes**.

## 4.6 Technical Account Manager (TAM)

**TAM** is the main AWS contact who supports customers.

TAM can provide support with:

·       AWS
services.

·       Architecture.

·       Cost
optimization.

·       Operations.

·       Connecting
with AWS programs and experts.

**Enterprise On-Ramp:** has a pool of TAMs.

**Enterprise:** has a designated TAM.

## 4.7 Comparison

| **Support Plan**       | **Trusted Advisor**                       | **Response when critical system is down** | **TAM**        |
| ---------------------- | ----------------------------------------- | ----------------------------------------- | -------------- |
| **Basic**              | Core checks                               | No level for this                         | No             |
| **Developer**          | Core checks                               | < 1 hour production down                  | No             |
| **Business**           | Full checks                               | < 1 hour production down                  | No             |
| **Enterprise On-Ramp** | Full checks                               | < 30 minutes                              | Pool of TAMs   |
| **Enterprise**         | Full checks + prioritized recommendations | < 15 minutes                              | Designated TAM |

# 5. AWS Marketplace and AWS Partners

## 5.1 AWS Marketplace

**AWS Marketplace** = a **digital catalog** with thousands of
software products from Independent Software Vendors.

I can use AWS Marketplace to:

·       **Find**
→ find software.

·       **Test**
→ try/evaluate software.

·       **Buy**
→ buy software that runs on AWS.

·       View
**pricing** and **reviews** from other AWS customers.

### Main Product Types

**1. Software as a Service (SaaS)**

·       Business
applications → project management tools.

·       Marketing
tools → marketing and customer engagement tools.

·       Collaboration
tools → file sharing and collaboration.

**2. Machine Learning (ML) and AI**

·       Prebuilt
models → ready-made models for image recognition, language processing...

·       ML
algorithms → algorithms for training custom models.

**3. Data and Analytics**

·       Business
intelligence → data visualization and reporting.

·       Data
integration tools → data integration.

AWS Marketplace also allows you to find solutions by **industry**
and **use case**.

## 5.2 AWS Partner Network (APN)

**AWS Partner Network (APN)** = a global community of companies
that use **AWS technologies, programs, expertise, and tools** to build
solutions and services for customers.

AWS Partners can:

·       Build
specialized solutions.

·       Solve
technical problems.

·       Provide
solutions that fit business needs.

·       Work
with AWS to provide value to customers.

### Example

A retail company uses AWS to host its website.

The company can work with an **AWS Partner** specializing in:

·       Advanced
analytics

·       Machine
learning

·       Customer
personalization

to improve the customer experience on the website.

## 5.3 Benefits of Becoming an AWS Partner

### 1. Funding Benefits

AWS Partners can receive **funding benefits** through programs
for AWS Partners.

Purpose:

·       Build
solutions

·       Market
solutions

·       Sell
solutions

### 2. AWS Partner Events

Activities include:

·       Webinars

·       Virtual
workshops

·       In-person
learning

·       Networking
with other AWS Partners.

·       Learning
from AWS experts.

### 3. AWS Partner Training and Certification

AWS provides training programs specifically for partners to:

·       Learn
more about cloud.

·       Learn
AWS services.

·       Prepare
for certification.

·       Improve
AWS skills.

## 5.4 AWS Marketplace vs AWS Partner Network

| **AWS Marketplace** | **AWS Partner Network**           |                                            |
| ------------------- | --------------------------------- | ------------------------------------------ |
| **Purpose**         | Find and buy software             | Work with AWS                              |
| **Audience**        | Customers who need solutions      | Companies/partners                         |
| **Main content**    | Software, ML/AI, Data & Analytics | Solutions, services, expertise             |
| **Example**         | SaaS, ML models, analytics tools  | AWS Partner provides specialized solutions |

### Remember These 4 Lines

·       **AWS
Marketplace** → Find, Test, Buy software.

·       **Marketplace**
→ SaaS + ML/AI + Data & Analytics.

·       **AWS
Partner Network (APN)** → community of AWS Partners.

·       **Partner
benefits** → Funding + Events + Training & Certification.

# 6. Cost Optimization

## 6.1 Cost Optimization

**Cost Optimization** = finding ways to use AWS resources
efficiently to **reduce costs while still meeting the needs of the system**.

In this lesson, I reviewed ways to optimize AWS costs and how to
apply them to a real-world architecture.

## 6.2 Cost Optimization Techniques

### 1. Right-sizing

**Right-sizing** = choosing the right type and size of resource
for the needs.

Example:

·       If
an EC2 instance is too large but uses very little CPU → you can choose a
smaller instance.

·       You
should not pay for unnecessary capacity.

**Remember:**

`Right-sizing → Right resource, right size`

### 2. Auto Scaling

**Auto Scaling** = automatically increasing or decreasing the
number of resources based on demand.

Example:

```text
Low demand
```

```text
     ↓
```

```text
Fewer EC2 → reduce costs
```

```text
```

```text
High demand
```

```text
     ↓
```

```text
More EC2 → handle traffic
```

This helps avoid maintaining too many EC2 instances when they are
not needed.

### 3. Choose the Appropriate Pricing Model

AWS has many pricing methods. You can choose based on how you use
the resources:

·       **On-Demand**
→ pay based on usage, suitable for unstable workloads.

·       **Savings
Plans** → commit to a level of usage to receive a discount.

·       **Reserved
Instances** → suitable for stable workloads used for a long time.

·       **Spot
Instances** → use excess AWS capacity at a lower price, suitable for
workloads that can be interrupted.

**Remember:**

Stable/long-term workload → consider **Savings Plans / Reserved**.

Workload that can be interrupted → consider **Spot**.

## 6.3 Monitor and Manage Costs

You should regularly monitor AWS resources to identify:

·       Resources
that are no longer being used.

·       Resources
being used more than necessary.

·       Unusual
increases in costs.

·       Resources
that can be optimized.

Some AWS tools support cost management:

·       **AWS
Cost Explorer** → view and analyze costs.

·       **AWS
Budgets** → create a budget and alert when costs exceed the limit.

·       **AWS
Trusted Advisor** → provide recommendations for cost optimization.

## 6.4 Cost Optimization in Cloud Architecture

Cost optimization is not only about reducing the price of one
service. The architecture needs to be designed so that resources are used
efficiently.

Example:

```text
                Users
```

```text
                  ↓
```

```text
            Load Balancer
```

```text
                  ↓
```

```text
             EC2 / ASG
```

```text
                  ↓
```

```text
              Database
```

It can be optimized by:

·       **Auto
Scaling** → only run the number of EC2 instances needed.

·       **Right-sizing**
→ choose suitable EC2 instances.

·       **Pricing
Models** → choose the appropriate purchasing method for the workload.

·       **Monitoring**
→ monitor usage and cost to continue optimizing.

### Remember These 4 Lines

·       **Cost
Optimization** → use resources efficiently to reduce costs.

·       **Right-sizing**
→ choose the right resource size.

·       **Auto
Scaling** → increase/decrease resources based on demand.

·       **Pricing
Models** → choose the pricing method that fits the workload.
