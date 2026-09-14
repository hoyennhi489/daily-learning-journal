# 1. Introduction to Monitoring, Compliance, and Governance in the AWS Cloud

## 1.1 Monitoring AWS Resources

To effectively manage resources on the **AWS Cloud**, it is necessary to monitor resource usage, detect problems, and proactively handle them.

The process usually follows 4 steps:

```text
Secure → Monitor → Audit → Compliance
```

## 1.2 Secure

**Secure** = protecting data, systems, and infrastructure from unauthorized access, use, modification, or destruction.

·       Protect data.

·       Protect systems and infrastructure.

·       Prevent unauthorized access.

·       Use measures such as authentication, identity management, and firewalls.

## 1.3 Monitor

**Monitor** = continuously monitoring and analyzing system activities.

·       Monitor system activities.

·       Monitor network traffic.

·       Monitor security events.

·       Detect threats or unusual activities.

## 1.4 Audit

**Audit** = periodically checking to evaluate systems and security controls.

·       Check whether requirements are being met.

·       Check security policies and procedures.

·       Evaluate the effectiveness of security measures.

## 1.5 Compliance

**Compliance** = ensuring that security activities meet relevant requirements.

·       Regulations.

·       Industry standards.

·       Contractual obligations.

·       Security and management requirements of the organization.

## 1.6 Comparison

| **Activity**   | **Purpose**                     |
| -------------- | ------------------------------- |
| **Secure**     | Protect resources               |
| **Monitor**    | Monitor and detect problems     |
| **Audit**      | Periodically check and evaluate |
| **Compliance** | Ensure requirements are met     |

### Remember These 4 Lines

**Secure → Protect**

**Monitor → Monitor**

**Audit → Check**

**Compliance → Meet requirements**

**Process → Secure → Monitor → Audit → Compliance**

# 2. Introduction to Monitoring

## 2.1 What is Monitoring?

**Monitoring** = the process of continuously collecting, monitoring, and displaying the operational status of **AWS infrastructure, services, and applications**.

Purpose:

·       Monitor the **health and performance** of the system.

·       Detect potential problems.

·       Ensure that the system works well.

## 2.2 Why is Monitoring Important?

Monitoring helps continuously monitor and analyze:

·       System activities.

·       **Network traffic**.

·       **Security events**.

·       Unusual activities or threats.

Monitoring and **Observability** help ensure:

·       **Security** → security.

·       **Availability** → the system is always available.

·       **Reliability** → the system operates reliably.

·       **Performance** → good performance.

## 2.3 Monitoring Tools

Monitoring commonly uses:

·       **Real-time monitoring tools** → monitor in real time.

·       **Log collection and analysis** → collect and analyze logs.

·       **Dashboards** → display system information and status.

### Remember These 4 Lines

**Monitoring → Collect + Monitor + Analyze**

**Goal → Performance + Detect problems**

**Monitor → System + Network + Security**

**Monitoring → Security + Availability + Reliability + Performance**

# 3. Amazon CloudWatch

## 3.1 What is Amazon CloudWatch?

**Amazon CloudWatch** = a service used to **monitor** AWS resources and applications in real time.

CloudWatch provides an overview of:

·       **Resource utilization** → resource usage level.

·       **Application performance** → application performance.

·       **Operational health** → system operational status.

## 3.2 Main Features

### CloudWatch Metrics

**Metrics** = measurements of the activity of resources and applications.

Examples:

·       EC2 CPU utilization.

·       Resource utilization.

·       Application performance.

### CloudWatch Alarms

**Alarms** = set conditions to detect when a metric exceeds the allowed level.

Example:

```text
EC2 utilization is too high
```

```text
        ↓
```

```text
CloudWatch Alarm
```

```text
        ↓
```

```text
Automatically create more EC2 instances
```

```text
        ↓
```

```text
Share the load
```

### CloudWatch Dashboards

**Dashboards** = a place that displays metrics, alarms, and data in one interface.

·       Can be customized.

·       Makes it easier to monitor and analyze the system.

### CloudWatch Logs

**Logs** = collect logs from resources and applications.

·       Analyze application errors.

·       Find performance problems.

·       Monitor system activities.

## 3.3 Benefits

CloudWatch helps:

·       Monitor and analyze resources.

·       Automate operations.

·       View information centrally.

·       Proactively detect problems.

·       Get more insights into the system.

## 3.4 Use Case

**CloudWatch** is commonly used to:

·       Monitor infrastructure.

·       Monitor applications.

·       Detect performance issues.

·       Troubleshoot errors.

·       Automatically scale resources when needed.

## 3.5 Real-World Example

An online sales company runs an application on multiple **EC2** instances:

```text
EC2
```

```text
 ↓
```

```text
CloudWatch Metrics
```

```text
 ↓
```

```text
CPU utilization is too high
```

```text
 ↓
```

```text
CloudWatch Alarm
```

```text
 ↓
```

```text
Create more EC2 instances
```

```text
 ↓
```

```text
Reduce the load
```

At the same time:

```text
Application + EC2
```

```text
       ↓
```

```text
CloudWatch Logs
```

```text
       ↓
```

```text
Analyze errors + Performance
```

And the **CloudWatch Dashboard** displays all information in one place.

### Remember These 4 Lines

**Metrics → Measurements**

**Alarms → Alerts + Automatic actions**

**Dashboards → Centralized display**

**Logs → Collect + Analyze logs**

# 4. AWS CloudTrail

## 4.1 Why is Auditing Important?

**Auditing** = checking and recording activities to know:

·       **Who** performed an action.

·       **What they did**.

·       **When** the action happened.

·       **Which resource** was changed.

Auditing helps with:

·       **Troubleshooting** → find the cause when there is a problem.

·       **Compliance** → provide evidence and activity history.

·       **Security** → detect and investigate suspicious activities.

## 4.2 What is AWS CloudTrail?

**AWS CloudTrail** = a service that monitors **user activity** and **API usage** in the AWS Cloud.

CloudTrail records the history of **API calls**, helping identify:

```text
Who → What → When → On which resource
```

CloudTrail can monitor activities related to:

·       AWS resources.

·       On-premises resources.

·       Some activities with other cloud providers.

## 4.3 Benefits and Use Cases

### Benefits

CloudTrail helps with:

·       **Auditing** → monitor and check activities.

·       **Security monitoring** → monitor security.

·       **Operational troubleshooting** → find the cause of incidents.

·       **Compliance** → provide records to prove compliance.

·       Improve **security posture**.

### Use Cases

CloudTrail is commonly used for:

·       **Compliance and auditing**.

·       **Identifying security incidents**.

·       **Troubleshooting operational issues**.

## 4.4 CloudTrail Events

**Events** = activities or API calls recorded by CloudTrail.

Example:

```text
User
```

```text
 ↓
```

```text
Delete an S3 object
```

```text
 ↓
```

```text
CloudTrail Event
```

```text
 ↓
```

```text
Record who deleted it + time + action
```

## 4.5 CloudTrail Logs

**CloudTrail Logs** = files containing information about the activities/API activities recorded by CloudTrail.

Logs can be stored in **Amazon S3** for:

·       Long-term storage.

·       Auditing.

·       Compliance.

·       Investigating activities that have occurred.

## 4.6 CloudTrail Insights

**CloudTrail Insights** = detects **unusual activity** or unusual API activity.

Example:

```text
Normal API activity
```

```text
        ↓
```

```text
Suddenly increases unusually
```

```text
        ↓
```

```text
CloudTrail Insights
```

```text
        ↓
```

```text
Detect unusual activity
```

## 4.7 Difference Between Events, Logs, and Insights

| **Component** | **Function**                        |
| ------------- | ----------------------------------- |
| **Events**    | Record activities/API calls         |
| **Logs**      | Store activity records for auditing |
| **Insights**  | Detect unusual API activity         |

### Remember These 4 Lines

**CloudTrail → Monitor user activity + API usage**

**Events → Record API activities**

**Logs → Store records → S3 → Auditing + Compliance**

**Insights → Detect unusual API activity**

# 5. Compliance

## 5.1 What is Compliance?

**Compliance** = ensuring that cloud resources and data comply with:

·       **Regulations** → legal regulations.

·       **Industry standards** → industry standards.

·       **Internal policies** → internal policies.

·       **Security and data protection** requirements.

## 5.2 Benefits of Compliance with AWS

AWS helps meet compliance requirements through:

·       **Security controls** → inherit the security measures used by AWS.

·       **Third-party validation** → AWS is evaluated by third parties according to many global requirements.

·       **Automation** → simplify and automate compliance.

·       **On-demand compliance reports** → access compliance reports when needed.

## 5.3 What is AWS Artifact?

**AWS Artifact** = a service that provides **free, on-demand** access to:

·       AWS **security reports**.

·       AWS **compliance reports**.

·       Some **online agreements**.

### Benefits

AWS Artifact helps:

·       Manage compliance at scale.

·       Save time.

·       Access compliance reports when needed.

·       Review the security and compliance of third parties.

·       Deploy with more confidence.

## 5.4 Two Types of AWS Artifact

AWS Artifact includes **2 types**:

### AWS Artifact Agreements

**Agreements** = agreements between customers and AWS.

Used to:

·       Review agreements.

·       Accept agreements.

·       Manage agreements.

### AWS Artifact Reports

**Reports** = AWS **security and compliance** reports.

Used to:

·       Access compliance reports **on demand**.

·       Evaluate AWS security and compliance.

### Remember:

```text
AWS Artifact
```

```text
├── Agreements → Review + Accept + Manage
```

```text
└── Reports    → Access compliance reports
```

## 5.5 AWS Compliance Resources

The **AWS Compliance Portal** provides resources to learn about AWS compliance:

·       **Compliance stories** → see how companies solve compliance, governance, and auditing problems.

·       **Whitepapers** → compliance documents.

·       **Documentation** → guidance documentation.

·       **Risk and compliance** → information about AWS risk and compliance.

·       **Auditing security checklist** → a checklist to support auditing.

·       **Guides, workbooks, training** → guides and learning materials.

### Remember These 4 Lines

**Compliance → Comply with regulations + standards + policies**

**AWS Artifact → Compliance reports + Agreements**

**Reports → Access on demand**

**Agreements → Review + Accept + Manage**

# 6. Auditing AWS Resources for Compliance

## 6.1 What is AWS Config?

**AWS Config** = a service used to **assess, audit, and evaluate** the configuration of AWS resources.

AWS Config helps check whether a resource matches the **desired configuration** or the company's **configuration guidelines**.

### Benefits

·       Check configuration according to the **desired state**.

·       Monitor **configuration changes**.

·       Help with **troubleshooting**.

·       Support **remediation** when configurations are incorrect.

·       Continuously audit to support **security monitoring** and **compliance**.

### Use Cases

·       Check whether AWS resources have the required configuration.

·       Monitor configuration changes.

·       Audit security.

·       Troubleshooting and change management.

### Example

A company only allows developers to use certain **EC2 instance types** that have been approved:

```text
Developer creates EC2
```

```text
       ↓
```

```text
AWS Config checks
```

```text
       ↓
```

```text
Correct approved configuration?
```

```text
   ↓              ↓
```

```text
  Yes             No
```

```text
   ↓              ↓
```

```text
Compliant      Non-compliant
```

## 6.2 What is AWS Audit Manager?

**AWS Audit Manager** = a service that continuously audits **AWS usage** to simplify **risk and compliance assessment**.

Audit Manager focuses on **collecting evidence** and managing data used for auditing.

### Benefits

·       Automatically **collect evidence**.

·       Save audit time.

·       Support collaboration between teams.

·       Use **read-only permissions** to help ensure audit integrity.

### Use Cases

·       Automatically collect evidence.

·       Continuously audit to assess compliance.

·       Perform **internal risk assessments**.

## 6.3 AWS Config vs AWS Audit Manager

| **Service**           | **Main Purpose**                                                 |
| --------------------- | ---------------------------------------------------------------- |
| **AWS Config**        | Check **configuration of AWS resources**                         |
| **AWS Audit Manager** | Collect **evidence** and support **audit/compliance assessment** |

### How to Remember

**Config → Configuration**

**Audit Manager → Audit + Evidence**

### Remember These 4 Lines

**AWS Config → Check configuration**

**Config → Desired state + Configuration changes**

**AWS Audit Manager → Audit + Evidence**

**Approved EC2 configuration → AWS Config**

# 7. AWS Organizations

## 7.1 What is AWS Organizations?

**AWS Organizations** = a service that helps **centrally manage and govern multiple AWS accounts** in an organization.

It helps:

·       Manage multiple AWS accounts in one place.

·       Manage policies for groups of accounts.

·       Automatically create AWS accounts.

·       Control access permissions.

·       Manage and optimize costs across multiple accounts.

## 7.2 Benefits

AWS Organizations helps with:

·       **Scale quickly** → programmatically create new AWS accounts.

·       **Permission management** → manage permissions using **SCPs**.

·       **Cost management** → manage and optimize costs across accounts.

·       Centrally manage **security and governance**.

## 7.3 Use Cases

AWS Organizations is commonly used to:

·       Automatically create AWS accounts.

·       Provide tools and access for **security teams**.

·       Control user access to allowed services.

·       Share common resources between accounts.

## 7.4 Organization Structure

An **Organization** is a group of multiple AWS accounts managed centrally.

The structure is tree-shaped:

```text
Organization
```

```text
     │
```

```text
    Root
```

```text
   ├── OU
```

```text
   │    ├── Account
```

```text
   │    └── Account
```

```text
   │
```

```text
   └── OU
```

```text
        ├── Account
```

```text
        └── Account
```

### Main Components

**Root**

→ The top-level component of the Organization.

**Organizational Unit (OU)**

→ A group of AWS accounts with the same purpose or management requirements.

**Account**

→ An AWS account that can be directly under the Root or inside an OU.

When designing OUs, consider:

·       **Business needs**

·       **Security needs**

·       **Regulatory needs**

## 7.5 Service Control Policies (SCPs)

**SCP** = a policy used to **control the maximum permissions** that accounts in an Organization can use.

SCP can be applied to:

·       **Individual AWS account**

·       **Organizational Unit (OU)**

SCP does **not apply directly** to:

·       IAM users

·       IAM groups

·       IAM roles

### Example

```text
Organization
```

```text
     ↓
```

```text
   OU
```

```text
     ↓
```

```text
   SCP
```

```text
     ↓
```

```text
Account
```

```text
     ↓
```

```text
Limit allowed services/actions
```

**Note:** SCP does not grant permissions by itself. It sets the **maximum permission limit**; IAM permissions still need to be configured in the account.

### Remember These 4 Lines

**AWS Organizations → Centrally manage multiple AWS accounts**

**OU → Group AWS accounts**

**SCP → Limit maximum permissions**

**SCP applies to → Account + OU**

# 8. Governance

## 8.1 Governance in the AWS Cloud

**Governance** = managing and enforcing **rules, policies, and requirements** on AWS resources and accounts.

Three main services:

·       **AWS Control Tower** → manages governance for multiple accounts.

·       **AWS Service Catalog** → manages approved resources.

·       **AWS License Manager** → manages software licenses.

## 8.2 AWS Control Tower

**AWS Control Tower** = a service that helps **enforce and manage governance rules** for:

·       **Security**

·       **Operations**

·       **Compliance**

across multiple AWS accounts at scale.

### Benefits

·       Quickly set up a **multi-account environment**.

·       Use **preconfigured controls**.

·       Built-in governance and automation.

·       Can integrate third-party software.

·       Helps save management time.

### Use Cases

·       Deploy applications quickly.

·       Create (**provision**) AWS accounts that meet requirements.

·       Enforce security, operations, and compliance rules.

**Remember:**

`Control Tower → Multi-account + Governance + Security + Compliance`

## 8.3 AWS Service Catalog

**AWS Service Catalog** = a service that helps create, share, and manage a **catalog of approved AWS resources**.

Example:

```text
Approved Resources
```

```text
      ↓
```

```text
AWS Service Catalog
```

```text
      ↓
```

```text
Employee chooses resource
```

```text
      ↓
```

```text
Deploy according to standard configuration
```

### Benefits

·       Find and deploy approved resources quickly.

·       Allow **self-service**.

·       Save time.

·       Improve governance.

·       Ensure resources are deployed according to standards.

### Use Cases

·       Provision resources across multiple AWS accounts.

·       Apply **access controls**.

·       Deploy baseline networking and security tools.

·       Support provisioning **CI/CD pipelines**.

**Remember:**

`Service Catalog → Approved resources → Self-service deployment`

## 8.4 AWS License Manager

**AWS License Manager** = a service that helps **manage and govern software licenses**.

It is especially useful when using **BYOL (Bring Your Own License)**.

Example:

```text
Existing software license
```

```text
          ↓
```

```text
        BYOL
```

```text
          ↓
```

```text
AWS services such as EC2 Dedicated Hosts
```

```text
          ↓
```

```text
AWS License Manager
```

```text
          ↓
```

```text
Track + Control license usage
```

### Benefits

·       Track and manage licenses.

·       Increase visibility and control.

·       Optimize licensing costs.

·       Reduce the risk of **license noncompliance**.

### Use Cases

·       Manage software licenses.

·       Enforce **license usage limits**.

·       Block new launches when the limit is exceeded.

·       Automatically distribute and activate software entitlements.

·       Support Microsoft license management.

**Remember:**

`License Manager → Software licenses → Track + Control + Cost`

## 8.5 Comparison of 3 Governance Services

| **Service**         | **What is it used for?**                       |
| ------------------- | ---------------------------------------------- |
| **Control Tower**   | Governance for a **multi-account environment** |
| **Service Catalog** | Manage and deploy **approved AWS resources**   |
| **License Manager** | Manage **software licenses**                   |

### Quick Way to Remember

```text
Control Tower  → Accounts
```

```text
Service Catalog → Resources
```

```text
License Manager → Licenses
```

### Remember These 4 Lines

**Control Tower → Multi-account Governance**

**Service Catalog → Approved Resources**

**License Manager → Software Licenses**

**Secure + Compliant + Multi-account → Control Tower**

# 9. AWS Health

## 9.1 What is AWS Health?

**AWS Health** = a source of information used to monitor **events and changes** that may affect the health of AWS Cloud resources.

AWS Health provides notifications about:

·       **Service events** → AWS service incidents or events.

·       **Planned changes** → planned changes.

·       **Account notifications** → notifications related to the AWS account.

The purpose is to help detect problems and take action in a timely manner.

## 9.2 AWS Health Dashboard

**AWS Health Dashboard** = an interface for viewing **account-specific health information** and AWS Health events.

It can be used to:

·       View the AWS account's health information.

·       Receive updates about AWS Health events.

·       Monitor changes that affect resources.

·       Troubleshoot incidents.

·       Prepare for **lifecycle events**.

AWS Health can also be used **programmatically** through the **AWS Health API**.

## 9.3 Benefits

AWS Health Dashboard helps:

·       Provide **timely and actionable** information.

·       Provide guidance to **remedy issues**.

·       Manage service health.

·       Support automation and use at scale.

·       Help proactively prepare for changes.

## 9.4 Use Cases

**AWS Health Dashboard** is commonly used to:

·       View **account-specific health information**.

·       Monitor service events.

·       Prepare for **lifecycle events**.

·       Troubleshoot an incident.

## 9.5 Example

```text
AWS service has a planned change
```

```text
          ↓
```

```text
      AWS Health
```

```text
          ↓
```

```text
AWS Health Dashboard
```

```text
          ↓
```

```text
Notification + guidance
```

```text
          ↓
```

```text
Customer prepares / takes action
```

## 9.6 AWS Health vs CloudWatch

| **Service**    | **Main Purpose**                                                                      |
| -------------- | ------------------------------------------------------------------------------------- |
| **AWS Health** | Notifications about **AWS service events and changes** that affect accounts/resources |
| **CloudWatch** | Monitor **metrics, logs, and performance** of resources/applications                  |

### Remember These 4 Lines

**AWS Health → Monitor AWS events + changes**

**Health Dashboard → Account-specific health information**

**AWS Health → Service events + Planned changes + Account notifications**

**Health → Notifications + Guidance for handling issues**

# 10. AWS Trusted Advisor

## 10.1 What is AWS Trusted Advisor?

**AWS Trusted Advisor** = a service that continuously checks the AWS environment based on **AWS best practices**.

Main goals:

·       **Cost optimization** → optimize costs.

·       **Performance** → improve performance.

·       **Security** → find security gaps.

·       **Resilience** → improve resilience.

·       **Service limits** → monitor service limits.

Trusted Advisor does not only check once but can **continuously evaluate** the AWS environment.

## 10.2 Benefits

Trusted Advisor helps:

·       Apply **AWS best practices**.

·       Provide **recommendations**.

·       Prioritize issues that need to be handled.

·       Optimize resources at scale.

·       Reduce costs.

·       Improve performance and security.

## 10.3 Use Cases

Trusted Advisor can be used to:

·       **Optimize cost**.

·       Increase **efficiency**.

·       Improve **security**.

·       Improve **performance**.

·       Monitor **service limits**.

·       Check the AWS environment according to best practices.

### How to Remember

```text
Trusted Advisor
```

```text
      ↓
```

```text
Cost + Performance + Security
```

```text
      + Resilience + Service Limits
```

## 10.4 IAM Access Analyzer

**IAM Access Analyzer** = a service that helps analyze and manage **IAM permissions**, especially to achieve the goal of **least privilege**.

**Least privilege** = only grant **necessary** permissions, without giving unnecessary permissions.

IAM Access Analyzer helps:

·       **Set** fine-grained permissions.

·       **Verify** who can access which resource.

·       Check IAM policies.

·       Find and remove **broad access**.

·       Detect and handle **unused access**.

·       Automatically review IAM policies.

## 10.5 Benefits of IAM Access Analyzer

IAM Access Analyzer helps:

·       Refine permissions.

·       Validate IAM policies.

·       Achieve the goal of **least privilege**.

·       Automate IAM policy reviews.

·       Improve IAM security.

## 10.6 Trusted Advisor vs IAM Access Analyzer

| **Service**             | **Focuses on**                                          |
| ----------------------- | ------------------------------------------------------- |
| **Trusted Advisor**     | Cost, Performance, Security, Resilience, Service Limits |
| **IAM Access Analyzer** | IAM permissions + Least Privilege                       |

### How to Remember

**Trusted Advisor → Optimize the entire AWS environment**

**IAM Access Analyzer → Optimize IAM permissions**

### Remember These 4 Lines

**Trusted Advisor → AWS Best Practices**

**Trusted Advisor → Cost + Performance + Security + Resilience**

**IAM Access Analyzer → IAM Permissions**

**Least Privilege → Only grant necessary permissions**