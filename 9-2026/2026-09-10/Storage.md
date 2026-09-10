# 1. Introduction to Storage

## 1.1 Cloud Storage

**Cloud Storage** = storing data on the AWS Cloud instead of buying and managing hardware ourselves.

AWS has 3 main types of storage:

* **Block storage**
* **Object storage**
* **File storage**

## 1.2 Block Storage

**Block storage** = storing data as **blocks**, working like a hard drive attached to **EC2**.

Features:

* **Low latency** → fast access.
* Can be **encrypted**.
* Can be **backed up using snapshots**.
* Suitable for EC2.

AWS has two main services:

### Amazon EC2 Instance Store

**Instance Store** = block storage directly attached to EC2.

* **Unmanaged**
* **Non-persistent** → data can be lost when EC2 is stopped or terminated.
* High performance.
* Suitable for **temporary data**.

### Amazon EBS

**Amazon Elastic Block Store (EBS)** = **persistent** block storage for EC2.

* **Managed**
* Data remains stored when EC2 is stopped.
* Has different volume types for different workloads.
* Can be backed up using **EBS Snapshots**.

**Remember:**

**Block → like a Hard Drive → EC2**

## 1.3 Object Storage

**Object storage** = storing data as **objects**.

It is suitable for large amounts of **unstructured data** such as:

* Images
* Videos
* Documents
* Backups
* Logs

### Amazon S3

**Amazon S3 (Simple Storage Service)** = an **object storage** service with very high scalability.

Used to:

* Store data.
* Retrieve data.
* Create backups.
* Store website files, images, videos, and documents.

**Remember:**

**S3 → Object Storage → stores many types of data**

## 1.4 File Storage

**File storage** = a file system shared over a network.

Multiple users or applications can **access the same data**.

AWS has two main services:

### Amazon EFS

**Amazon Elastic File System (EFS)** = a fully managed and automatically scalable file system.

* Used with the AWS Cloud.
* Can be used with on-premises resources.
* Uses **NFS**.

### Amazon FSx

**Amazon FSx** = managed file storage for popular file systems.

Examples:

* Windows File System
* Lustre
* NetApp ONTAP

**Remember:**

**File Storage → Shared files → EFS / FSx**

## 1.5 Additional Storage Services

### AWS Storage Gateway

**AWS Storage Gateway** = connects **on-premises ↔ AWS Cloud Storage**.

It is used when a company wants to:

* Keep its on-premises systems.
* But still use cloud storage.

### AWS Elastic Disaster Recovery

**AWS Elastic Disaster Recovery** = helps **recover/restore servers** in AWS when a failure occurs.

It can support:

* Physical servers
* Virtual servers
* Cloud-based servers

## 1.6 Storage and Shared Responsibility

AWS storage services can be divided into:

* **Fully managed**
* **Managed**
* **Unmanaged**

The more AWS manages → the less infrastructure the customer needs to manage.

For example:

| **Storage**            | **Type**      |
| ---------------------- | ------------- |
| **S3**                 | Fully managed |
| **EBS**                | Managed       |
| **EC2 Instance Store** | Unmanaged     |

### Remember These 4 Lines

**Block → EC2 → EBS / Instance Store**

**Object → S3 → Objects**

**File → EFS / FSx → Shared Files**

**Storage Gateway → On-premises ↔ Cloud**

# 2. EC2 Instance Store and Amazon Elastic Block Store (EBS)

## 2.1 Amazon EC2 Instance Store

**EC2 Instance Store** = block storage **directly attached to EC2**.

Features:

* **Temporary storage** → used for temporary data.
* **Non-persistent** → data is **lost when EC2 is stopped or terminated**.
* **High performance** → fast I/O.
* It is not an independent storage service.
* It may be available depending on the EC2 instance type.

It is suitable for:

* **Buffers**
* **Caches**
* **Scratch data**
* Data that does not need to be kept for a long time.

It is **not suitable** for important data that needs to be stored permanently.

### Benefits

* **Automatically available** → can be provided with EC2.
* **Cost-effective**
* **High performance**

```text
EC2
 ↓
Instance Store
 ↓
Temporary Data
```

## 2.2 Amazon EBS

**Amazon EBS (Elastic Block Store)** = **persistent block storage** for EC2.

We can think of EBS as an **external hard drive** attached to EC2.

Features:

* **Persistent** → data remains when EC2 is stopped or terminated.
* **Low latency + consistent performance**.
* Can **resize** the volume.
* Can **detach → attach** the volume to another EC2 instance.
* Can create **EBS Snapshots** for backup.

```text
EC2
 ↓
EBS Volume
 ↓
Persistent Data
```

## 2.3 EBS Use Cases

EBS is suitable for:

* **Database hosting**
* Application backup storage
* Development environments
* Applications that need data to be stored for a long time.

## 2.4 EBS Data Portability

An EBS volume can be **detached and reattached** when needed.

This is useful for:

* **Data migration** → moving data.
* **Instance type changes** → moving a volume to another EC2 instance.
* **Disaster recovery** → recovering after a failure.
* **Cost optimization** → optimizing costs.
* **Performance tuning** → adjusting performance.

## 2.5 Instance Store vs EBS

|                        | **EC2 Instance Store** | **Amazon EBS**           |
| ---------------------- | ---------------------- | ------------------------ |
| **Storage**            | Block                  | Block                    |
| **Persistence**        | ❌ No                   | ✅ Yes                    |
| **EC2 stop/terminate** | Data is lost           | Data remains             |
| **Performance**        | **High**               | Consistent + low latency |
| **Backup**             | Not suitable           | **EBS Snapshots**        |
| **Use case**           | Temporary data         | Persistent data          |

### Remember These 4 Lines

**Instance Store → Temporary → Data is lost when stopped/terminated**

**Instance Store → High Performance → Cache/Buffer/Scratch**

**EBS → Persistent → Data remains**

**EBS → EC2 → Snapshot → Backup**

# 3. Amazon Elastic Block Store (EBS) Data Lifecycle

## 3.1 EBS Snapshots

**EBS Snapshot** = a **point-in-time backup** of an EBS volume.

Used for:

* **Disaster recovery** → recovery after a failure.
* **Data migration** → moving data.
* **Volume resizing** → creating a new volume with a different size.
* Creating consistent backups for production workloads.

### Incremental Snapshot

EBS Snapshots are **incremental** → each new snapshot only stores the **blocks that have changed** since the previous snapshot.

```text
EBS Volume
    ↓
Snapshot 1 → stores the original data
    ↓
Data changes
    ↓
Snapshot 2 → stores only the changed data
```

Snapshots are redundantly stored using **Amazon S3**.

## 3.2 Creating Volumes from a Snapshot

A snapshot can be used to create **multiple EBS volumes**.

The new volume is a copy of the volume at the time the snapshot was created.

```text
             Snapshot
           ↙    ↓    ↘
       Volume  Volume  Volume
```

→ This is useful when we need to quickly create multiple **test environments** that are similar to production.

## 3.3 Customer Responsibility

Under the **Shared Responsibility Model**, the customer is responsible for managing EBS Snapshots.

The customer needs to:

* Schedule and create **regular backups**.
* Monitor **snapshot costs**.
* Delete unnecessary snapshots.
* Encrypt sensitive data.
* Check snapshot integrity.
* Regularly **test restores**.

## 3.4 Amazon Data Lifecycle Manager

**Amazon Data Lifecycle Manager (DLM)** = automatically manages the lifecycle of **EBS Snapshots**.

It can automatically:

* **Create** → create snapshots.
* **Retain** → keep snapshots for a specified period.
* **Delete** → delete old snapshots.

```text
Schedule
   ↓
Create Snapshot
   ↓
Keep for X days
   ↓
Delete old Snapshot
```

Benefits:

* Reduces manual work.
* Creates backups on a schedule.
* Automatically deletes old backups.
* Helps control storage costs.
* Supports compliance through retention policies.

## 3.5 EBS Snapshot vs Data Lifecycle Manager

| **EBS Snapshot**              | **Data Lifecycle Manager**              |
| ----------------------------- | --------------------------------------- |
| Backup of an EBS volume       | Automatically manages snapshots         |
| Can create snapshots          | **Automatically creates on a schedule** |
| Can manage retention manually | **Automatically manages retention**     |
| Can delete manually           | **Automatically deletes**               |
| Purpose: Data protection      | Purpose: Automation + backup management |

### Remember These 4 Lines

**EBS Snapshot → Point-in-time backup**

**Incremental → Only stores changed blocks**

**Snapshot → Can create multiple EBS volumes**

**Data Lifecycle Manager → Create + Retain + Delete automatically**

# 4. Amazon Simple Storage Service (Amazon S3)

## 4.1 Amazon S3

**Amazon S3 (Simple Storage Service)** = an **Object Storage** service used to store and retrieve data in the AWS Cloud.

Features:

* **Fully managed** → AWS manages the infrastructure.
* **Highly available**.
* Can store very large amounts of data.
* **99.999999999% (11 nines) durability**.
* Supports **Versioning** and **Lifecycle Management**.
* Has multiple **Storage Classes** to optimize costs.

Suitable for:

* Images
* Videos
* Documents
* Backups
* Application data
* Data lakes

## 4.2 S3 Objects

An **S3 Object** = a unit of data stored in S3.

An object usually contains:

* **Data** → the data/file.
* **Metadata** → information about the data.
* **Key** → the unique name of the object.

For example:

```text
S3 Bucket
└── images/cat.jpg
      ├── Data
      ├── Metadata
      └── Key
```

An object can be:

* Image
* Video
* Document
* Application data

## 4.3 S3 Buckets

**S3 Bucket** = a container used to store **objects**.

When creating a bucket, we need to choose:

* **Bucket name** → must be unique across AWS.
* **AWS Region** → where the bucket is stored.

A bucket can be configured with:

* **Versioning**
* **Logging**
* **Access permissions**

```text
S3
└── Bucket
    ├── Object 1
    ├── Object 2
    └── Object 3
```

## 4.4 S3 Benefits

* **Virtually unlimited storage** → can store very large amounts of data.
* **Highly durable** → 11 nines durability.
* **Object lifecycle management** → manages the lifecycle of data.
* **Many use cases** → backups, images, videos, documents, data lakes, and more.

## 4.5 S3 Security

Data in S3 is **private by default**.

Users need **permissions** to access the data.

### Bucket Policies

A **Bucket Policy** = a policy attached directly to an **S3 Bucket**.

Used to:

* Allow actions.
* Deny actions.
* Control access to the bucket and objects.

### Identity-based Policies

An **Identity-based Policy** = a policy attached to an **IAM identity**, such as a user or role.

→ It defines what that identity is allowed to do with S3.

### Encryption

**Encryption** = encrypting data to protect it.

It is especially important for **sensitive data**.

### Block Public Access

S3 has **Block Public Access** to prevent buckets or objects from becoming public by mistake.

If a Bucket Policy allows public access but **Block Public Access** is enabled → users may still not be able to access the data.

## 4.6 S3 Use Case

For example, a website needs to store images:

```text
User
 ↓
Website
 ↓
Amazon S3
 ↓
Images / Videos / Documents
```

S3 is very suitable for **storing and distributing application content and user-generated media**.

### Remember These 4 Lines

**S3 → Object Storage → Objects in Buckets**

**Object → Data + Metadata + Key**

**Bucket → Container for Objects**

**S3 → Private by default + Bucket Policy + IAM + Encryption**

# 5. Amazon S3 Storage Classes and S3 Lifecycle

## 5.1 S3 Storage Classes

**S3 Storage Class** = different ways S3 stores data with different levels of **performance, access, and cost**.

### S3 Standard

* The default S3 storage class.
* Used for data that is **accessed frequently**.
* Suitable for:

  * Cloud applications
  * Websites
  * Content distribution
  * Mobile & gaming applications
  * Big data analytics

If we upload an object without selecting a storage class → the default is **S3 Standard**.

## 5.2 S3 Lifecycle

**S3 Lifecycle** = automatically manages the lifecycle of objects to **reduce storage costs**.

There are two types of actions:

* **Transition actions** → automatically move an object to a **different storage class**.
* **Expiration actions** → automatically **delete an object** after a specified period.

For example:

```text
S3 Standard
    ↓ 30 days
S3 Standard-IA
    ↓ 90 days
S3 Glacier
    ↓
Delete
```

## 5.3 When to Use S3 Lifecycle?

### Periodic Logs

For example:

```text
New Logs
  ↓
Frequently used for 30 days
  ↓
Move to cheaper storage
  ↓
No longer needed
  ↓
Delete
```

→ There is no need to keep old logs in a more expensive storage class.

### Data with Changing Access Frequency

For example:

* First 30 days → accessed frequently.
* After that → accessed occasionally.
* After 90 days → rarely accessed.
* After some time → no longer needed.

We can use Lifecycle to automatically move data:

**Standard → Standard-IA → Glacier → Delete**

## 5.4 Cost Optimization

If data access changes over time:

| **Time**      | **Access** | **Storage**    |
| ------------- | ---------- | -------------- |
| 0–30 days     | Frequent   | S3 Standard    |
| 30–90 days    | Occasional | S3 Standard-IA |
| After 90 days | Rare       | S3 Glacier     |

→ **No need to create multiple buckets or move objects manually.**

### Remember These 4 Lines

**S3 Standard → frequently accessed data**

**Lifecycle → automatically manages Object lifecycle**

**Transition → moves to another Storage Class**

**Expiration → deletes the Object**

# 6. Amazon FSx

## 6.1 What is Amazon FSx?

**Amazon FSx** = a file storage service managed by AWS.

* High performance.
* Scalable.
* AWS manages hardware, updates, and backups.
* Supports different types of file systems.

## 6.2 Types of Amazon FSx

### FSx for Windows File Server

* Used for **Windows**.
* Supports **SMB**.
* Integrates with **Microsoft Active Directory**.
* Used to move Windows file servers to AWS.

### FSx for NetApp ONTAP

* Used for workloads that use **NetApp ONTAP**.
* Supports data management and storage.

### FSx for OpenZFS

* Based on **OpenZFS**.
* Supports **NFS**.
* Suitable for Linux/Unix workloads.

### FSx for Lustre

* High performance and high scalability.
* Used for:

  * Machine Learning
  * HPC
  * Big Data
  * Media workloads

### Remember These 4 Lines

**FSx → Managed File Storage by AWS**

**Windows File Server → Windows + SMB + Active Directory**

**OpenZFS → NFS**

**Lustre → ML + HPC + Big Data**

# 7. AWS Storage Gateway

## 7.1 What is AWS Storage Gateway?

**AWS Storage Gateway** = a service that connects **On-premises** with **AWS Cloud Storage**.

* Used for **Hybrid Cloud**.
* Can extend storage from on-premises servers to AWS.
* Frequently used data can be **cached locally** for faster access.
* Helps with:

  * Backing up data to the Cloud.
  * Reducing storage costs.
  * Keeping the current file access method.

## 7.2 Three Types of Gateways

### Amazon S3 File Gateway

**S3 File Gateway** = connects **On-premises → Amazon S3**.

* On-premises servers see it as a **file server**.
* Files are stored in **Amazon S3**.
* Frequently used data is cached locally.
* Suitable when a company wants to continue using its existing file-sharing method.

```text
On-premises
     ↓
S3 File Gateway
     ↓
Amazon S3
```

### Volume Gateway

**Volume Gateway** = provides **virtual storage volumes** for on-premises applications.

There are two modes:

**Cached Volume**

* Main data is stored in the Cloud.
* Frequently used data is cached locally.
* Provides fast access to frequently used data.

**Stored Volume**

* All data is stored locally.
* Backups are asynchronously stored in the Cloud as **EBS Snapshots**.

### Tape Gateway

**Tape Gateway** = replaces **physical tapes** with **virtual tapes**.

* Works like tape hardware with existing backup software.
* Data is stored in **Amazon S3**.
* Suitable for backup and long-term storage.

## 7.3 Comparing the 3 Gateway Types

| **Gateway**                 | **Used for**               | **Main data storage** |
| --------------------------- | -------------------------- | --------------------- |
| **S3 File Gateway**         | File sharing               | Amazon S3             |
| **Volume Gateway – Cached** | Storage + fast access      | Cloud + local cache   |
| **Volume Gateway – Stored** | Storage + backup           | Local + EBS Snapshots |
| **Tape Gateway**            | Backup using virtual tapes | Amazon S3             |

### Remember These 4 Lines

**Storage Gateway → On-premises ↔ AWS Cloud**

**S3 File Gateway → File → S3**

**Volume Gateway → Virtual Volumes**

**Tape Gateway → Virtual Tapes → S3**

# 8. AWS Elastic Disaster Recovery

## 8.1 What is Elastic Disaster Recovery?

**AWS Elastic Disaster Recovery (DRS)** = a service that **continuously replicates server data to AWS** so it can be recovered quickly when a server fails.

* Continuously replicates data at the **block level**.

* Supports:

  * Physical servers
  * Virtual servers

* Helps reduce **downtime** and **data loss**.

* Does not require maintaining a separate **backup data center**.

* Can **test disaster recovery** without interrupting the current system.

* When a failure occurs, **recovery instances** can be quickly created on AWS.

```text
On-premises Server
       ↓
Continuous Replication
       ↓
AWS
       ↓
Recovery Instance
```

## 8.2 Benefits

* **Business resilience** → helps systems continue working when a failure occurs.
* **Streamlined disaster recovery** → makes system recovery faster and easier.
* **Cost optimization** → reduces the cost of maintaining a backup data center.

## 8.3 Use Cases

### Healthcare

* Protect patient data.
* Replicate hospital servers to AWS.
* Help medical data remain accessible when the main system fails.
* Regularly **test disaster recovery**.

### Financial Services

* Protect important banking systems.
* Continuously replicate transaction processing systems.
* Quickly recover when the main data center fails.

### Manufacturing

* Protect production management systems.
* Replicate factory servers to AWS.
* Reduce disruption to operations and the supply chain.
* Regularly **test failover**.

### Remember These 4 Lines

**Elastic Disaster Recovery → Disaster Recovery for Servers**

**Block-level → Continuous Replication**

**On-premises → AWS → Recovery**

**Goal → Reduce Downtime + Reduce Data Loss**

# 9. Comparing Storage Services

## 9.1 Comparing Storage Services

AWS has many storage services, and each service is suitable for different needs:

| **Service**    | **Storage Type** | **Used for**                                     |
| -------------- | ---------------- | ------------------------------------------------ |
| **Amazon S3**  | Object Storage   | Storing **files, images, videos, backups**       |
| **Amazon EBS** | Block Storage    | Storing data for **EC2**                         |
| **Amazon EFS** | File Storage     | Sharing files between multiple **EC2** instances |

## 9.2 Amazon S3

**Amazon S3** = stores **Objects**.

* Stores files, images, videos, documents, and backups.
* Data is stored in a **Bucket**.
* Highly scalable.
* Suitable when we need to store a large amount of data and do not need to attach it directly to one EC2 instance.

```text
Application
     ↓
Amazon S3
     ↓
Bucket → Objects
```

**Example:** A company stores millions of product images → **S3**.

## 9.3 Amazon EBS

**Amazon EBS** = **Block Storage** for **EC2**.

* Attached to EC2.
* Suitable for operating systems, databases, and applications running on EC2.
* Data remains when EC2 is stopped.
* Can create a **Snapshot** for backup.

```text
EC2
 ↓
EBS Volume
 ↓
Data
```

**Example:** An EC2 instance runs a database and needs a disk to store data → **EBS**.

## 9.4 Amazon EFS

**Amazon EFS** = AWS-managed **File Storage**.

* Multiple EC2 instances can access the same file system.
* Suitable when multiple servers need to share files.
* Can automatically scale when the amount of data changes.

```text
EC2 ──┐
EC2 ──┼──→ EFS
EC2 ──┘
```

**Example:** Multiple EC2 instances need to access the same folder containing files → **EFS**.

## 9.5 How to Choose Storage

| **If you need...**                   | **Choose** |
| ------------------------------------ | ---------- |
| Store files, images, videos, backups | **S3**     |
| Storage for one EC2 instance         | **EBS**    |
| Multiple EC2 instances sharing files | **EFS**    |

### Remember These 4 Lines

**S3 → Object → Bucket → Files/Images/Videos**

**EBS → Block → EC2 → Database/Application**

**EFS → File → Multiple EC2 → Shared files**

**S3 ≠ EBS ≠ EFS → Choose based on your storage needs**