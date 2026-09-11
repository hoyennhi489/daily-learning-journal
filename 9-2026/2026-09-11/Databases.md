# 1. Introduction to Databases

In this lesson, I learned about **AWS Database Services** and how AWS applies the **Shared Responsibility Model** to database services.

## 1.1. AWS Database Services

AWS provides many types of database services to meet different data storage and management needs.

The main types include:

* **Relational databases** → relational databases.
* **Nonrelational databases** → nonrelational databases.
* **In-memory caches** → store data in memory for fast access.
* **Purpose-built databases** → databases designed for specific needs.

AWS database services are scalable and designed to provide high reliability.

## 1.2. Shared Responsibility Model

AWS divides services into 3 groups based on the level of management:

* **Unmanaged services** → customers must manage many parts of the system.
* **Managed services** → AWS manages many parts of the infrastructure, while customers still need some configuration.
* **Fully managed services** → AWS manages almost all of the infrastructure and necessary operational tasks.

In the database module, AWS mainly uses **fully managed services**, along with some **managed services**, and there are no unmanaged services.

## 1.3. Benefits of Managed Database

Instead of installing and managing a database on **Amazon EC2**, a database service managed by AWS can be used.

This helps reduce tasks related to **database administration and maintenance**, allowing more focus on application development.

## 1.4. Key Knowledge

**AWS Database Services → Store and manage data**

**Fully managed → AWS manages most of the infrastructure and maintenance**

**Managed database → Reduces database administration work**

**Database services in the module → Mainly Fully Managed**

# 2. Relational Database Services

In this lesson, I learned about **relational databases**, **Amazon RDS**, and **Amazon Aurora**.

## 2.1. Relational Database

A **relational database** stores data in the form of **tables**, consisting of **rows** and **columns**.

Tables can have relationships with each other and use **SQL** to manage and query data.

For example, a product management database can store:

* ID
* Product Name
* Size
* Price

Relational databases are suitable for applications that need clearly structured data.

## 2.2. Amazon RDS

**Amazon RDS (Relational Database Service)** is a **managed relational database** service.

RDS supports AWS in performing many tasks such as:

* **Backups**
* **Patching**
* **Hardware provisioning**
* **Security**
* **Scaling**

RDS supports many database engines such as:

* MySQL
* PostgreSQL
* Oracle
* Microsoft SQL Server
* MariaDB
* Amazon Aurora

### RDS Use Cases

RDS can be used for:

* Web applications
* Enterprise workloads
* E-commerce product inventories

### RDS Benefits

* **Multi-AZ deployments** → increase availability and reduce downtime.
* **Automated backups** → automatically back up the database.
* **Security** → support encryption and network isolation.
* **Scalability** → resources can be increased when needed.

## 2.3. Amazon Aurora

**Amazon Aurora** is a **managed relational database** compatible with **MySQL and PostgreSQL**.

Aurora is designed to provide:

* **High performance**
* **High availability**
* **Automatic scaling**
* **Automated backups**
* **Data replication** across multiple Availability Zones
* **Fault tolerance**

### Aurora Use Cases

Aurora is suitable for:

* Gaming applications
* Media and content management
* Real-time analytics

## 2.4. RDS and Aurora

**Amazon RDS** → Managed relational database, supporting multiple database engines.

**Amazon Aurora** → Relational database compatible with MySQL and PostgreSQL, focusing on **high performance and high availability**.

## 2.5. Key Knowledge

**Relational Database → Tables + Rows + Columns + SQL**

**Amazon RDS → Managed relational database**

**Amazon Aurora → High performance + High availability + MySQL/PostgreSQL compatible**

**RDS Multi-AZ → Increases availability and reduces downtime**

# 3. NoSQL Database Services

## 3.1. NoSQL Database

**NoSQL** (non-relational database) is a type of database with a **flexible** data structure, different from relational databases such as Amazon RDS.

* Data is not required to have the same structure.
* Data can be stored as **key-value pairs**.
* Each item has a **unique key**.
* Each item can have different **attributes**.
* Attributes can be added or removed when needed.

For example:

**Key 1**

* Name: John Doe
* Address: 123 Any Street
* Favorite drink: Medium latte

**Key 2**

* Name: Mary Major
* Address: 100 Main Street
* Birthday: July 5, 1994

→ The two items do not need to have the same attributes.

## 3.2. Amazon DynamoDB

**Amazon DynamoDB** is a **fully managed NoSQL database service** from AWS.

DynamoDB supports:

* **Key-value data**
* **Document data**
* Fast and consistent performance.
* Automatically scales according to the amount of data and workload.
* Supports **high availability** and **durability**.
* Provides **data encryption** to protect data.
* Data is distributed across multiple servers to handle workloads.

## 3.3. Use Cases

DynamoDB is suitable for applications that need a **flexible, fast, and scalable** database, for example:

* **Gaming platforms**
* **Financial applications**
* **Mobile applications**
* Applications with users around the world.

## 3.4. Key Knowledge

**NoSQL → Flexible schema → Key-value / Document**

**DynamoDB → Fully managed NoSQL + Fast performance + Scalability**

When traffic is unstable and consistent performance is needed, **DynamoDB can automatically scale** to meet the demand.

That's right. Because you are writing a **learning journal**, you should not use phrases such as **“you will learn,” “you will create,” or “you will see.”** The writing should describe what has **already been learned / practiced**.

From this lesson, I will write in the following style:

* **I learned about...**
* **I learned...**
* **I practiced...**
* **I learned how to...**
* Or directly write the knowledge without a subject.

For example, the previous lesson should be written as:

# 4. AWS Databases Demonstration

## 4.1 Amazon RDS

**Amazon RDS** = a relational database service managed by AWS.

* Create an **RDS database instance** using the AWS Management Console.
* Use **Amazon RDS for MySQL**.
* Use **SQL** to create tables and add data.

## 4.2 DynamoDB

**DynamoDB** = a **NoSQL database** managed by AWS.

* Create a **DynamoDB table** using the Console.
* Add **items** to the table.
* Use **Scan** to view data in the table.

## 4.3 RDS and DynamoDB

|              | **Amazon RDS**        | **DynamoDB**                 |
| ------------ | --------------------- | ---------------------------- |
| Type         | Relational            | NoSQL                        |
| Data         | Tables, Rows, Columns | Items                        |
| Query        | SQL                   | NoSQL                        |
| Example      | MySQL                 | DynamoDB                     |
| Suitable for | Relational databases  | Applications that need NoSQL |

### Remember these 4 lines

**RDS → Relational Database → SQL**

**RDS for MySQL → MySQL + Tables**

**DynamoDB → NoSQL → Items**

**RDS ≠ DynamoDB → Relational vs NoSQL**

# 5. In-Memory Caching Services

## 5.1 In-Memory Cache

**In-memory cache** = a temporary storage layer for frequently used data, usually stored in **RAM**.

* RAM has very fast read and write speeds.
* Helps applications retrieve data faster.
* Reduces the number of times the main database is accessed.
* Can store:

  * **Session data**
  * Database query results
  * API results
  * Frequently used data

```text
Application
```

```text
     ↓
```

```text
Cache → Data exists → Return quickly
```

```text
     ↓
```

```text
Data does not exist
```

```text
     ↓
```

```text
Database
```

## 5.2 Amazon ElastiCache

**Amazon ElastiCache** = an **in-memory cache** service managed by AWS.

* Supports **Redis, Valkey, and Memcached**.
* Helps applications respond faster.
* Automatically detects and replaces failed nodes.
* Helps reduce the load on the main database.

## 5.3 Use Cases

**Session data management**

* Store users' login session information.

**Database query enhancement**

* Store frequently queried results to reduce the number of database accesses.

**Gaming leaderboards**

* Store game leaderboards for fast updates and retrieval.

## 5.4 Benefits

* **High performance** → very fast read and write speeds.
* **High availability** → the system can operate reliably.
* **Replication across multiple Availability Zones** → replicate data across multiple AZs.
* **Data encryption** → encrypt data.

### Remember these 4 lines

**In-memory cache → Temporary storage in RAM**

**ElastiCache → AWS-managed in-memory cache**

**ElastiCache → Redis / Valkey / Memcached**

**Goal → Increase speed + Reduce database load**

# 6. Additional Database Services

## 6.1 Amazon DocumentDB

**Amazon DocumentDB** = a database managed by AWS, compatible with **MongoDB**, used to store **JSON-like documents**.

* Suitable for data whose structure changes frequently.
* Does not require a fixed schema like relational databases.
* Can automatically scale.
* Provides continuous backups.
* Supports security.

**Use cases:**

* Content management systems.
* Catalogs and inventory.
* User profiles and personalization.

**Key point:**

→ **DocumentDB = MongoDB compatibility**

## 6.2 AWS Backup

**AWS Backup** = a service that centrally and automatically manages **backups** for many AWS resources.

It can manage backups for:

* **EBS**
* **EFS**
* Databases
* Some other AWS resources
* **On-premises** environments as well

Benefits:

* Centrally manage backups.
* Automate backups.
* Schedule backups.
* Encrypt data.
* Support backups to another **Region**.
* Help meet compliance requirements.

**Use cases:**

* Disaster recovery.
* Create consistent backup policies.
* Manage multiple backup systems from one place.

## 6.3 Amazon Neptune

**Amazon Neptune** = a **graph database** managed by AWS, designed for data with many **complex relationships**.

For example:

```text
User A ──friend──→ User B
```

```text
  │                  │
```

```text
 follows           likes
```

```text
  ↓                  ↓
```

```text
User C             Product
```

Suitable for:

* Social networks.
* Fraud detection.
* Search and recommendation systems.
* Data with many relationships.

Benefits:

* Fast queries for data with many relationships.
* Good performance and scalability.
* **High availability**.
* **Automatic failover** and backups.

## 6.4 Comparison

| **Service**    | **Main Purpose**                                 |
| -------------- | ------------------------------------------------ |
| **DocumentDB** | Database compatible with **MongoDB**             |
| **AWS Backup** | Centrally manage **backups**                     |
| **Neptune**    | Database for data with **complex relationships** |

### Remember these 4 lines

**DocumentDB → MongoDB compatibility**

**AWS Backup → Centralized + automated backups**

**Neptune → Graph Database → Complex relationships**

**Neptune → Fast queries for highly connected data**