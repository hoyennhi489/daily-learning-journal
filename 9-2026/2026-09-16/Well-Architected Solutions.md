# 1. Introduction to Migration

## 1.1 Cloud Migration

**Cloud migration** = the process of moving **digital
assets, IT resources, applications, and databases** from **on-premises
infrastructure** to the **AWS Cloud**.

Migration is not simply a one-time data transfer. It is a process that
includes:

·       **Planning**
→ planning.

·       **Implementation**
→ carrying out the migration.

·       **Ongoing
management** → continuing to manage after moving to the cloud.

For large companies, migration is often performed in **multiple
phases/stages** instead of moving everything at once.

## 1.2 Three Phases of Large Cloud Migration

The migration process has **3 main phases**, performed in order:

```text
1. Assess
```

```text
     ↓
```

```text
2. Mobilize
```

```text
     ↓
```

```text
3. Migrate and Modernize
```

### Phase 1: Assess

**Assess** = evaluate the current environment and prepare for
migration.

Find out:

·       Where
applications are running.

·       Existing
databases and IT resources.

·       Which
workloads are suitable to move to AWS.

·       System
costs and requirements.

### Phase 2: Mobilize

**Mobilize** = prepare the organization and AWS environment for
migration.

Focus on:

·       Prepare
the AWS environment.

·       Identify
and resolve remaining issues.

·       Prepare
resources and the migration plan.

·       Ensure
the organization is ready for the migration.

**AWS Migration Hub** can help manage resources during this
phase.

### Phase 3: Migrate and Modernize

**Migrate** = move applications, data, and workloads to AWS.

**Modernize** = improve and modernize applications after or during
migration to make better use of the AWS Cloud.

Example:

```text
On-premises
```

```text
     ↓
```

```text
Migrate
```

```text
     ↓
```

```text
AWS Cloud
```

```text
     ↓
```

```text
Modernize
```

```text
     ↓
```

```text
Cloud-native / optimized application
```

## 1.3 AWS Migration Services

AWS provides many **services and tools** to support each phase of
migration.

**AWS Migration Hub** is a centralized place to help track and
manage migration, especially during **Mobilize** and **Migrate and
Modernize**.

Not every migration uses the same service. The choice of tool depends on
the workload and the company's needs.

### Remember These 4 Lines

·       **Cloud
Migration** → move IT resources from on-premises → AWS Cloud.

·       **Assess**
→ Evaluate.

·       **Mobilize**
→ Prepare.

·       **Migrate
and Modernize** → Move to AWS + Modernize.

# 2. AWS Cloud Adoption Framework

## 2.1 What is AWS CAF?

**AWS Cloud Adoption Framework (AWS CAF)** = a framework that
provides **AWS experience, best practices, and tools** to help companies
prepare for and carry out the process of moving to the AWS Cloud.

AWS CAF helps:

·       **Accelerate
migration** → accelerate the migration process.

·       **Organize
resources** → organize resources.

·       **Align
management** → help teams and management coordinate during the
transformation.

·       **Reduce
business risk** → reduce business risk.

·       **Improve
productivity** → increase productivity.

·       **Reduce
operational costs** → reduce operational costs.

·       **Improve
customer experience** → improve customer experience.

AWS CAF can be used to:

·       Migrate
**legacy infrastructure** and applications.

·       Migrate
and optimize **business processes**.

·       Improve
**operations**.

·       Create
**new business models** when moving to the cloud.

## 2.2 Six Perspectives of AWS CAF

AWS CAF has **6 perspectives** to consider different aspects of an
organization when preparing to move to the cloud.

```text
AWS Cloud Adoption Framework
```

```text
            │
```

```text
   ┌────────┼────────┐
```

```text
   ↓        ↓        ↓
```

```text
Business   People   Governance
```

```text
   ↓        ↓        ↓
```

```text
Platform   Security   Operations
```

### 1. Business Perspective

**Business** → focuses on **business strategy and business
outcomes**.

Focuses on:

·       Business
goals.

·       Business
value.

·       What
benefits cloud migration brings to the business.

·       Opportunities
to create **new products/services**.

**Remember:**

`Business → Business and business value`

### 2. People Perspective

**People** → focuses on **people, skills, and organizational
change**.

Focuses on:

·       Employees.

·       Skills
and training.

·       Roles
and responsibilities.

·       Organizational
change.

**Remember:**

`People → People + Skills`

### 3. Governance Perspective

**Governance** → focuses on **governance, policies, and
business processes**.

Focuses on:

·       Policies.

·       Business
processes.

·       Risk
management.

·       Compliance.

·       Managing
and controlling the cloud environment.

**Remember:**

`Governance → Policies + Control + Compliance`

### 4. Platform Perspective

**Platform** → focuses on **technology and architecture**.

The Platform perspective includes:

·       Principles
and patterns for deploying **new solutions in the cloud**.

·       Migration
of **on-premises workloads** to the cloud.

·       Architectural
models to understand and describe the structure of IT systems.

**Remember:**

`Platform → Technology + Architecture`

### 5. Security Perspective

**Security** → focuses on **security** in the cloud.

Focuses on:

·       Protecting
data.

·       Security
controls.

·       Identity
and access.

·       Risk
management.

·       Security
requirements.

**Remember:**

`Security → Protect + Control + Access`

### 6. Operations Perspective

**Operations** → focuses on **operating and managing the cloud
environment**.

Focuses on:

·       Day-to-day
operations.

·       Monitoring.

·       Managing
systems.

·       Maintaining
reliability.

·       Supporting
business operations.

**Remember:**

`Operations → Run + Monitor + Manage`

## 2.3 Six Perspectives Quick Reference

| **Perspective** | **Focuses on**                  |
| --------------- | ------------------------------- |
| **Business**    | Business goals and value        |
| **People**      | People and skills               |
| **Governance**  | Policies, processes, compliance |
| **Platform**    | Technology and architecture     |
| **Security**    | Security and access             |
| **Operations**  | Operating and managing systems  |

### Remember These 4 Lines

·       **AWS
CAF** → Framework that helps prepare for and move to the AWS Cloud.

·       **Business

* People** → Business and people.

·       **Governance

* Security** → Management and protection.

·       **Platform

* Operations** → Building and operating.

# 3. Seven Migration Strategies

## 3.1 What are the Seven Rs?

**Seven Migration Strategies** = 7 common strategies for moving
applications from **on-premises** to the **AWS Cloud**.

They are also called the **Seven Rs**.

The choice of strategy depends on:

·       Application
complexity.

·       Business
goals.

·       Migration
timeline.

·       Available
resources.

·       Current
state of the application.

·       Future
plans.

A company can use **different strategies** for different
applications.

## 3.2 Seven Migration Strategies

### 1. Rehost

**Rehost** = move an application to AWS while **keeping it almost
the same**, without many changes.

Also called **Lift and Shift**.

Example:

```text
On-premises EC2-like workload
```

```text
          ↓
```

```text
       Rehost
```

```text
          ↓
```

```text
      AWS Cloud
```

Suitable when:

·       You
want a fast migration.

·       The
application is difficult to change.

·       You
want to reduce migration effort.

**Remember:**

`Rehost → Lift and Shift → Move almost as-is`

### 2. Replatform

**Replatform** = move an application to AWS while making **some
small changes** to take advantage of the cloud.

Also called **Lift, Tinker, and Shift**.

Example:

·       Move
the database to a managed service.

·       Do
not change the application architecture too much.

**Remember:**

`Replatform → Small changes → Take advantage of Cloud`

### 3. Refactor

**Refactor** = change or rewrite an application to take full
advantage of **cloud-native features**.

This is usually a strategy with a greater level of change than Replatform.

Example:

```text
Old application
```

```text
     ↓
```

```text
   Refactor
```

```text
     ↓
```

```text
Cloud-native application
```

**Remember:**

`Refactor → Major changes → Cloud-native`

### 4. Repurchase

**Repurchase** = move to **a different product**.

Instead of continuing to use the current application, the company can buy or
use a new product.

Example:

```text
Existing software
```

```text
       ↓
```

```text
   Repurchase
```

```text
       ↓
```

```text
New product / SaaS
```

**Remember:**

`Repurchase → Different product`

### 5. Retire

**Retire** = stop using an application that is no longer needed.

If an application no longer provides value, the company can **retire**
it instead of migrating it.

Example:

```text
Unused application
```

```text
        ↓
```

```text
      Retire
```

```text
        ↓
```

```text
    Stop using
```

**Remember:**

`Retire → Not needed → Stop using`

### 6. Retain

**Retain** = keep the application in its current environment and
**do not migrate it yet**.

It may be retained because:

·       It
is not ready for migration.

·       The
application has special dependencies.

·       Migration
does not provide suitable benefits yet.

·       There
are business or technical reasons.

**Remember:**

`Retain → Keep → Not moved yet`

### 7. Relocate

**Relocate** = move a workload to AWS without needing to change the
application architecture much.

This strategy is often related to moving workloads between AWS environments
or from a current environment to AWS while keeping the workload structure
unchanged.

**Remember:**

`Relocate → Move workload → Keep the architecture`

## 3.3 Seven Rs Comparison

| **Strategy**   | **Simple meaning**                           |
| -------------- | -------------------------------------------- |
| **Rehost**     | Move almost as-is                            |
| **Replatform** | Small changes                                |
| **Refactor**   | Rewrite/make major changes for cloud-native  |
| **Repurchase** | Move to a different product                  |
| **Retire**     | Stop using                                   |
| **Retain**     | Keep it, do not migrate yet                  |
| **Relocate**   | Move workload, with few architecture changes |

### Quick Remember

```text
Rehost      → Move
```

```text
Replatform  → Small change
```

```text
Refactor    → Rewrite
```

```text
Repurchase  → New product
```

```text
Retire      → Remove
```

```text
Retain      → Keep
```

```text
Relocate    → Move workload
```

### Remember These 4 Lines

·       **Rehost**
→ Lift and Shift.

·       **Replatform**
→ Small changes.

·       **Refactor**
→ Rewrite for cloud-native.

·       **Repurchase**
→ Different product.

# 4. Migration Services and Tools

## 4.1 Migration Evaluator

**Migration Evaluator** = a service that helps **assess migration**
and build a **business case** for moving to the AWS Cloud.

Migration Evaluator analyzes:

·       **Current
state** → current system.

·       **Target
state** → planned system on AWS.

·       **Projected
cloud costs** → projected cloud costs.

### Benefits

·       Reduce
the need to guess migration costs.

·       Compare
multiple **cost-effective migration scenarios**.

·       Estimate
and reduce cloud costs.

·       Check
the ability to **reuse existing software licenses**.

·       View
server dependencies.

### When to Use It?

Use **Migration Evaluator** in the **Assess phase** when you
need to:

·       Assess
the current system.

·       Build
a business case.

·       Estimate
AWS costs.

·       Compare
migration scenarios.

**Remember:**

`Migration Evaluator → Assess + Business Case + Cost`

## 4.2 AWS Application Discovery Service

**AWS Application Discovery Service** = a service used to
**discover on-premises server inventory and connections**.

It collects:

·       Server
inventory.

·       Configuration
details.

·       Performance
details.

·       Database
information.

·       Connections
and dependencies between systems.

### Benefits

·       Get
a complete **snapshot** of the on-premises environment.

·       Identify
connections and dependencies.

·       Support
migration planning.

·       Integrate
data with **Migration Hub**.

### When to Use It?

Use it in the **Mobilize phase** for:

·       Discovery
and inventory.

·       Map
connections/dependencies.

·       Prepare
a migration plan.

**Remember:**

`Application Discovery Service → Discover + Inventory + Dependencies`

## 4.3 AWS Migration Hub

**AWS Migration Hub** = a **centralized hub** for tracking and
managing migration.

Migration Hub supports:

```text
Discovery
```

```text
   ↓
```

```text
Assessment
```

```text
   ↓
```

```text
Planning
```

```text
   ↓
```

```text
Migration
```

```text
   ↓
```

```text
Tracking
```

### Benefits

·       Have
**one centralized place** to manage migration.

·       Track
migration progress.

·       Support
collaboration between teams.

·       Provide
guidance and recommendations.

·       Provide
**prescriptive journey templates**.

·       No
charge for using Migration Hub.

### When to Use It?

Migration Hub can be used for:

·       Migration
assessment.

·       Migration
planning.

·       Tracking
migration.

·       Collaboration
between teams.

·       Modernization.

·       Fast-tracking
application refactoring.

**Remember:**

`Migration Hub → Centralized + Track + Manage Migration`

## 4.4 AWS Application Migration Service

**AWS Application Migration Service** = a service that helps
**move and modernize applications** from on-premises or the cloud to AWS.

It can support:

·       Physical
servers.

·       On-premises
infrastructure.

·       Cloud-based
applications.

·       Moving
between AWS Regions.

### Benefits

·       Streamline
migration.

·       Expedite
migration.

·       Reduce
migration costs.

·       Support
multiple source infrastructures with supported operating systems.

·       **Modernize
applications during migration**.

·       Allow
business operations to continue during replication.

**Remember:**

`Application Migration Service → Move + Modernize Applications`

## 4.5 AWS Migration and Modernization Competency Partners

If a company needs additional **expertise and assistance**, it can
work with **AWS Competency Partners**.

It can find **AWS Migration and Modernization Competency Partners**
that specialize in:

·       Different
phases of migration.

·       Different
types of migration.

·       Migration
and modernization solutions.

**Remember:**

`Competency Partners → Expertise + Migration Help`

## 4.6 Comparison of Migration Services

| **Service**                       | **Main Function**                 | **Phase**               |
| --------------------------------- | --------------------------------- | ----------------------- |
| **Migration Evaluator**           | Assessment + business case + cost | **Assess**              |
| **Application Discovery Service** | Discover servers + dependencies   | **Mobilize**            |
| **Migration Hub**                 | Centralize + track migration      | **Mobilize / Migrate**  |
| **Application Migration Service** | Move + modernize applications     | **Migrate & Modernize** |
| **Competency Partners**           | Migration experts and assistance  | Different phases        |

### Quick Way to Remember

```text
Evaluator
```

```text
→ "Is migration worth doing? How much will it cost?"
```

```text
```

```text
Discovery
```

```text
→ "What is in the current system? Where are the dependencies?"
```

```text
```

```text
Migration Hub
```

```text
→ "How is the migration progressing?"
```

```text
```

```text
Application Migration Service
```

```text
→ "How do I move the application?"
```

```text
```

```text
Competency Partners
```

```text
→ "I need expert assistance."
```

### Remember These 4 Lines

·       **Migration
Evaluator** → Business case + Cost.

·       **Application
Discovery Service** → Discover + Dependencies.

·       **Migration
Hub** → Centralize + Track migration.

·       **Application
Migration Service** → Move + Modernize applications.

# 5. Database Migrations

## 5.1 Migrating Databases to AWS

**Database migration** = the process of moving a database from
**on-premises** to the **AWS Cloud**.

When migrating a database, you can consider:

·       Move
to an **AWS managed database service**.

·       Move
to an **open source database** to reduce licensing costs.

·       Redesign
and improve the database architecture.

## 5.2 Homogeneous vs Heterogeneous Migration

### Homogeneous Migration

**Homogeneous migration** = the source and target use the **same
database engine**.

Example:

```text
Database A
```

```text
   ↓
```

```text
Same database engine
```

```text
   ↓
```

```text
Database A on AWS
```

→ Usually simpler.

### Heterogeneous Migration

**Heterogeneous migration** = the source and target use **different
database engines**.

Example:

```text
Commercial Database
```

```text
        ↓
```

```text
Different engine
```

```text
        ↓
```

```text
Open Source Database
```

→ More complex and may require application changes.

| **Homogeneous**                   | **Heterogeneous**                            |
| --------------------------------- | -------------------------------------------- |
| **Database engine**               | Same / Different                             |
| **Complexity**                    | Lower / Higher                               |
| **May require schema conversion** | Less / Usually needed                        |
| **Example**                       | Same engine → AWS / Commercial → Open Source |

## 5.3 AWS Database Migration Service (AWS DMS)

**AWS DMS** = a service that helps **migrate databases and
replicate data**.

AWS DMS can:

·       Migrate
databases quickly and securely.

·       Replicate
data continuously.

·       Support
**homogeneous migration**.

·       Support
**heterogeneous migration**.

·       Migrate
databases up to **terabytes** in size.

·       Help
reduce downtime and maintain **high availability**.

### Use Cases

Use AWS DMS to:

·       Move
to **managed databases**.

·       Reduce
**licensing costs**.

·       Replicate
ongoing database changes.

·       Improve
integration with **data lakes**.

·       Migrate
databases and data warehouses.

**Remember:**

**AWS DMS → Move/Replicate the data**

## 5.4 What is a Database Schema?

**Schema** = the structure and organization of data in a database.

A schema is like a **blueprint** of a database, describing:

·       Tables.

·       Fields/columns.

·       Data
types.

·       Relationships.

·       Database
objects.

When moving to a **different database engine**, the schema may not
be compatible and may need to be converted.

## 5.5 AWS Schema Conversion Tool (AWS SCT)

**AWS SCT** = a tool that helps **convert database schemas and
code objects** from one database engine to another.

It can convert:

·       Database
schemas.

·       Stored
procedures.

·       Views.

·       Functions.

·       Other
database code objects.

AWS SCT can also **estimate conversion effort** to help with
planning.

### Benefits

·       Automatically
analyze schemas.

·       Provide
recommendations.

·       Automatically
convert at scale.

·       Reduce
manual conversion effort.

·       Potentially
save many weeks or months of work.

### Use Cases

Use AWS SCT to:

·       Convert
**commercial database → open source database**.

·       Migrate
large data warehouse workloads.

·       Modernize/update
database schemas.

**Remember:**

**AWS SCT → Convert the schema and database code**

## 5.6 AWS DMS vs AWS SCT

This is a **very easy part to confuse when taking a test**.

| **Service** | **Main Function**                  |
| ----------- | ---------------------------------- |
| **AWS DMS** | Migrate/replicate **data**         |
| **AWS SCT** | Convert **schema + database code** |

It can be understood simply:

```text
Source Database
```

```text
      │
```

```text
      ├── AWS SCT
```

```text
      │      ↓
```

```text
      │  Convert Schema
```

```text
      │
```

```text
      └── AWS DMS
```

```text
             ↓
```

```text
        Move / Replicate Data
```

```text
             ↓
```

```text
       Target Database
```

### Remember:

**SCT = Schema Conversion Tool**

→ When you see **schema conversion, stored procedures, views, functions,
different database engine** → think of **AWS SCT**.

**DMS = Database Migration Service**

→ When you see **migrate data, replicate data, low downtime, ongoing
replication** → think of **AWS DMS**.

·       **Homogeneous**
→ Same database engine.

·       **Heterogeneous**
→ Different database engines.

·       **AWS
DMS** → Migrate + Replicate **data**.

·       **AWS
SCT** → Convert **schema + database code**.

# 6. Transferring Data Online

## 6.1. Online Data Transfer

When transferring data from **on-premises** to the **AWS Cloud**,
there are several services that support online data transfer.

Three main services in this lesson:

·       **AWS
DataSync**

·       **AWS
Transfer Family**

·       **AWS
Direct Connect**

Each service is suitable for a different need.

## 6.2. AWS DataSync

**AWS DataSync** = a service that helps **automate and accelerate
the transfer of large amounts of data** between on-premises storage and AWS.

Example:

```text
On-premises Storage
```

```text
        ↓
```

```text
   AWS DataSync
```

```text
        ↓
```

```text
Amazon S3 / AWS Storage
```

### Benefits

DataSync supports:

·       **Bandwidth
throttling** → limit the bandwidth used.

·       **Migration
scheduling** → schedule data transfers.

·       **Task
filtering** → filter the data that needs to be transferred.

·       **Task
reporting** → track and report progress.

·       **Encryption**
→ encrypt data.

·       **Network
optimization** → optimize the network.

·       **Rapid
data replication** → replicate data quickly.

### Use Cases

DataSync can be used to:

·       **Migrate
data** → move data to AWS.

·       **Archive
cold data** → store infrequently used data.

·       **Manage
hybrid data workflows** → manage data workflows between on-premises and
AWS.

**Remember:**

**DataSync = Large data + Automation + Schedule + Reporting**

## 6.3. AWS Transfer Family

**AWS Transfer Family** = a fully managed service for
**transferring files** into and out of AWS storage.

It supports multiple **transfer protocols**, including:

·       **FTP**

·       **SFTP**

·       **FTPS**

Files can be transferred directly to:

·       **Amazon
S3**

·       **Amazon
EFS**

Example:

```text
User / Partner
```

```text
      ↓
```

```text
AWS Transfer Family
```

```text
      ↓
```

```text
Amazon S3 / Amazon EFS
```

### Benefits

·       Simplify
the setup and management of file transfers.

·       Reduce
the need to manage complex infrastructure.

·       Support
**encryption** and **authentication**.

·       Protect
**data integrity** and **confidentiality**.

·       Ability
to **scale**.

·       Support
file-related workflows.

### Use Cases

·       Modernize
and manage **file transfers**.

·       Share
data with **employees** and **partners**.

·       Bring
transaction data into a **data lake**.

**Remember:**

**Transfer Family = File Transfer + FTP/SFTP/FTPS**

## 6.4. AWS Direct Connect

**AWS Direct Connect** = establishes a **dedicated private
connection** between the company's network and the **VPC** on AWS.

```text
Company Network
```

```text
       │
```

```text
       │ Dedicated Private Connection
```

```text
       ↓
```

```text
AWS Direct Connect
```

```text
       ↓
```

```text
AWS VPC
```

Because this is a **dedicated connection**, Direct Connect is
suitable when a large amount of data needs to be transferred with a stable
connection.

### Benefits

·       **Dedicated
connection** → dedicated connection.

·       **Fast**
→ fast data transfer.

·       **Reliable**
→ reliable.

·       **Secure**
→ secure.

·       Can
**reduce network costs**.

·       Increase
**bandwidth**.

**Remember:**

**Direct Connect = Dedicated Private Connection + High Bandwidth**

## 6.5. Comparison of 3 Services

| **Service**             | **Mainly used for**            | **Key point to remember**               |
| ----------------------- | ------------------------------ | --------------------------------------- |
| **AWS DataSync**        | Transfer large amounts of data | Schedule, automation, reporting         |
| **AWS Transfer Family** | Transfer files                 | FTP, SFTP, FTPS                         |
| **AWS Direct Connect**  | Connect network to AWS         | Dedicated private connection, bandwidth |

### Quick Way to Distinguish

·       Need
**schedule + track + report** when transferring data → **DataSync**

·       Need
**FTP/SFTP/FTPS** to transfer files → **Transfer Family**

·       Need
a **dedicated private connection** and high bandwidth → **Direct
Connect**

### Remember These 4 Lines

·       **DataSync**
→ Large data + Schedule + Reporting.

·       **Transfer
Family** → File transfer + FTP/SFTP/FTPS.

·       **Direct
Connect** → Dedicated private connection.

·       **Schedule

* Track + Report** → **DataSync**.

# 7. Transferring Data Offline

## 7.1. When Do You Need to Transfer Data Offline?

Normally, data can be transferred to AWS through the **Internet**
using services such as **AWS DataSync**.

However, there are cases where **online migration is not suitable**,
for example:

·       **Limited
bandwidth** → Internet speed is too slow.

·       At
**remote locations** → no Internet.

·       **Direct
Connect is not a suitable option**.

·       There
is a **very large amount of data**, such as **petabytes (PB)**.

·       Transferring
petabytes over the Internet may take more time than shipping a physical
device.

In these cases, **AWS Snowball Edge** can be used to transfer data
**offline**.

## 7.2. AWS Snowball Edge Storage Optimized

**AWS Snowball Edge Storage Optimized** = a physical AWS device
used to **transfer large amounts of data offline** from on-premises to AWS.

Instead of:

```text
On-premises
```

```text
     ↓
```

```text
 Internet
```

```text
     ↓
```

```text
    AWS
```

You can use:

```text
On-premises
```

```text
     ↓
```

```text
Snowball Edge
```

```text
     ↓
```

```text
Ship the device to AWS
```

```text
     ↓
```

```text
    AWS
```

Snowball Edge has **high-performance NVMe storage**, which helps
transfer data at high speeds.

It is especially suitable for transferring **multi-petabyte data**
from on-premises to AWS.

## 7.3. Benefits

The main benefits of **Snowball Edge Storage Optimized** are:

·       **Offline
data migration** → transfer data without the Internet.

·       **Large
storage capacity** → large storage capacity.

·       **High
performance** → high performance.

·       Supports
data transfer speeds of **gigabytes per second**.

·       Suitable
for workloads that need to transfer very large amounts of data.

·       Can
help avoid transferring huge amounts of data over the Internet.

## 7.4. Use Cases

### 1. Offline Data Migration

Use Snowball Edge when:

·       There
is no Internet.

·       Bandwidth
is limited.

·       The
data is too large to transfer online efficiently.

·       You
need to transfer **multi-petabyte data** to AWS.

### 2. Edge Computing

Snowball Edge can also be used for **edge computing** when a device
is needed that is:

·       **Secure**
→ secure.

·       **Rugged**
→ durable and suitable for special environments.

·       Capable
of processing/storing data where the data is generated.

## 7.5. Online vs Offline Comparison

| **Method**  | **Service**         | **When to use**                                               |
| ----------- | ------------------- | ------------------------------------------------------------- |
| **Online**  | AWS DataSync        | Have a network and need to automate data transfer             |
| **Online**  | AWS Transfer Family | Need to transfer files through FTP/SFTP/FTPS                  |
| **Online**  | AWS Direct Connect  | Need a dedicated private connection and high bandwidth        |
| **Offline** | Snowball Edge       | Internet/bandwidth is insufficient or data is extremely large |

### Remember:

**DataSync** → transfer data **online + automation**.

**Transfer Family** → transfer **files + FTP/SFTP/FTPS**.

**Direct Connect** → **dedicated private connection**.

**Snowball Edge** → transfer data **offline + very large amounts**.

·       **Offline
migration** → use when Internet/bandwidth is not suitable.

·       **Snowball
Edge** → physical device for transferring data offline.

·       **Multi-petabyte
data** → Snowball Edge is suitable.

·       **Snowball
Edge** → Data Migration + Edge Computing.