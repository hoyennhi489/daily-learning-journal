# GREP Command in Linux

### 1. What is Grep?

Grep = **Global Regular Expression Print**
Used to search for a string or pattern in:

* File names
* File contents
* Directories
* Output of other commands via a pipe

---

### 2. Initial Example

In a directory, there is a file:
`names.txt`
The file contains a list of names not in alphabetical order.

---

### 3. Basic Searching with Grep

Search for names starting with “Sam”:

```bash
grep Sam names.txt
```

**Result:**
Names that start with “Sam” like Sam, Samantha, Samuel…

**Note:**

* Grep is **case-sensitive**.
* If you search with lowercase:

```bash
grep sam names.txt
```

The result will differ because uppercase letters do not match.
You can also search for “sam” in the middle or end of a name.

---

### 4. Using the `-i` Flag to Ignore Case

```bash
grep -i Sam names.txt
```

**Result includes:**

* Names starting with Sam
* Names containing Sam at any position
* Case-insensitive: matches Sam, sam, SAM…

---

### 5. Using the `-w` Flag for Exact Match

```bash
grep -w Sam names.txt
```

**Result:**

* Only `Sam`
* Does not return Samantha, Samuel, Sammy…

`-w` = match the whole word (exact match).

---

### 6. Grep with Pipe (`|`)

A pipe passes the output of one command as input to another.

Example: filter files in the `/bin` directory that contain “zip”:

```bash
ls /bin | grep zip
```

**Result:**
Displays files like:

```
zip
gzip
bzip2
unzip
```

Additional options:

* **Case-insensitive:**

```bash
ls /bin | grep -i zip
```

* **Exact match:**

```bash
ls /bin | grep -w zip
```

---

### Grep Command Summary

| Command                 | Function                          |                                  |
| ----------------------- | --------------------------------- | -------------------------------- |
| `grep text file.txt`    | Search for text in a file         |                                  |
| `grep -i text file.txt` | Case-insensitive search           |                                  |
| `grep -w text file.txt` | Exact whole-word match            |                                  |
| `command                | grep text`                        | Filter output of another command |
| `grep -n text file.txt` | Show line numbers containing text |                                  |

---

# Git and GitHub

### 1. Version Control

Version control helps developers to:

* Track changes to source code over time
* Revert to previous versions if needed
* See who changed what and when
* Collaborate effectively without overwriting each other’s files

**Real-life example:**
When you update an app on your phone, you are downloading a new version tracked by version control.

---

### 2. What is Git?

Git = **Version Control System (VCS)**
Git was created by Linus Torvalds to manage changes in the Linux kernel, which has thousands of contributors every day.

Git solves problems like: tracking all changes, comparing versions, restoring errors quickly and safely.

**Benefits of Git:**

* Fast and efficient
* Very reliable
* Free and open-source
* Easy-to-learn commands
* Mainly used via command line

Git helps you manage all changes in a project, even when working alone.

---

### 3. What is GitHub?

GitHub = **Cloud-based Git hosting platform** with a web interface.

GitHub uses Git to manage repositories and adds powerful features:

* Visual interface to manage repositories
* Access control
* Pull Requests (for code review & merging)
* Automation (CI/CD)
* Issues (bug/feature tracking)
* Wiki & documentation
* Projects (task management)

GitHub offers various plans (from free to enterprise) depending on organization size.

GitHub is like a social network:

* Personal profiles
* People can follow you
* Projects can be private or public
* Anyone can contribute to public projects via pull requests

---

### 4. Difference Between Git and GitHub

| Git                           | GitHub                                      |
| ----------------------------- | ------------------------------------------- |
| Version control tool          | Cloud-based Git hosting service             |
| Runs locally via command line | Provides web interface                      |
| No internet required          | Internet required                           |
| Tracks source code changes    | Shares repos, collaboration, pull requests… |

**Summary:**

* Git = engine
* GitHub = hosting + sharing + collaboration platform

---

# Git, GitHub, and Git Workflow

---

### 1. What is GitHub?

GitHub is a **cloud-based hosting service** used to manage Git repositories through a web interface.

GitHub works like a social network for developers:

* You can follow other users.
* Projects can be public or private.
* Developers worldwide can contribute code via pull requests.

In the previous video, you created and cloned a repository to your computer. This section explains how to pull a repository to your local machine.

---

### 2. Navigating Directories and Checking Repository Contents

#### 2.1 Move into the repository directory

```bash
cd my-first-repo
```

#### 2.2 List all files (including hidden files)

```bash
ls -la
```

`-la` = list all → shows all regular and hidden files.

Inside a repository, there are two important items:

* `README.md` → created when you created the repository on GitHub.
* `.git` → hidden directory containing all Git data (commit history, configuration, branches, etc.).

#### 2.3 About the `.git` directory

* In Linux, any directory starting with a dot (.) is hidden.
* `.git` is automatically created by GitHub when you create a repository (no need to run `git init`).

---

### 3. Git Workflow

Git manages changes through **three main states**:

#### 3.1 Modified

* Occurs when you add, delete, or edit files in the **working directory**.
* Git knows the file has changed but is not yet tracked.

#### 3.2 Staged

* Add files to the **staging area** using:

```bash
git add filename
```

* Git starts tracking changes.
* This is a “safe” step before committing.

#### 3.3 Committed

* Save changes using:

```bash
git commit -m "commit message"
```

* Git creates a snapshot of the changes at that point.

---

### 4. Example of Git Workflow

**Full process:**

1. **Working Directory**
   → Edit a file → file becomes `modified`
2. **Staging Area**
   → Run `git add` → file becomes `staged`
3. **Local Git Repository**
   → `git commit` → file becomes `committed`
4. **Remote Repository (GitHub)**
   → `git push` → file is uploaded to GitHub
   → Others can fetch, checkout, or merge into their repos.

---

### Checking Git Status, Adding Files, Staging, Unstaging, and Committing

#### 1. Check current directory

```bash
pwd
```

Result shows you are in:

```
my-first-repo
```

#### 2. Check directory contents

```bash
ls -la
```

Result shows:

* `README.md`
* Hidden `.git` directory (contains all Git data)

#### 3. Check current Git status

```bash
git status
```

Git will show:

* You are on branch `main`.
* Branch is “up to date” with `origin/main` → local and GitHub are the same.
* “working tree clean” → no changes.

#### 4. Add a new file

Create a file:

```bash
touch test.txt
```

Run again:

```bash
git status
```

Git shows:

* One untracked file → `test.txt`
* Untracked = Git is not tracking this file yet.

#### 5. Stage the file (git add)

Purpose: add the file to Git’s tracking and prepare for commit.

```bash
git add test.txt
```

Check again:

```bash
git status
```

Git shows:

* `test.txt` is in “Changes to be committed” → file is now staged.

#### 6. Unstage a file if needed

Git suggests:

```bash
git restore --staged test.txt
```

After running:

* File returns to untracked state.
* Check again with `git status`.
* To stage again:

```bash
git add test.txt
```

#### 7. Clear the screen

```bash
clear
```

#### 8. Commit the file

Commit staged changes:

```bash
git commit -m "adding a new file for testing"
```

Git will display:

* “1 file changed”
* “create mode” → `test.txt` was created.

#### 9. Check status after commit

```bash
git status
```

Git shows:

* Nothing to commit
* Working tree clean

But an important message appears:

* Git reminds you to run `git push` to upload this commit to GitHub.

**This emphasizes:**

* Changes exist **only locally** until you run `git push`.
* Only then do they appear in the remote repository (GitHub).

---

### 10. Key Takeaways

* `git status` → always the first command to check your state.
* `touch` → creates a file.
* `git add` → stages the file.
* `git restore --staged` → unstages a file.
* `git commit -m` → saves a snapshot.
* Commit exists locally → use `git push` to upload to GitHub.

---

# Git Branching Workflow – Creating Branches, Working, Pushing, and Pull Requests

---

### 1. Check Directory and Git Status

Open the command line and verify you are in the correct directory:

```bash
pwd
```

Result shows you are in:

```
my-first-repo
```

Check Git status:

```bash
git status
```

If there are no changes:

* Git shows “working tree clean.”
* Branch `main` is up-to-date with `origin/main`.

---

### 2. Create a New Branch

Create a branch to work separately from `main`.

**Two ways:**

**Option 1: Using `git checkout -b`**

```bash
git checkout -b feature/lesson
```

* Creates a new branch
* Switches to the new branch immediately

**Option 2: Using `git branch`**

```bash
git branch feature/lesson
```

* Only creates the branch, does not switch to it

Check the current branch:

```bash
git branch
```

* The branch with `*` is the current branch.
* All changes you make from now on will only affect `feature/lesson`, leaving `main` unchanged.

---

### 3. Why Use a Separate Branch?

* `main` is unaware of any changes in `feature/lesson`.
* Even if you push code, `main` remains the same.
* To update `main`, you must **merge**.
* Merges are usually handled via **Pull Requests (PRs)**.

---

### 4. Purpose of Pull Request

A Pull Request (PR):

* Sends a code review request to the team.
* Checks:

  * Code quality and standards
  * Unit/integration tests pass
  * Potential bugs
* Only after approval are changes merged into `main`.

---

### 5. Add a File in the Feature Branch

Create a file:

```bash
touch test2.txt
```

Stage the file:

```bash
git add test2.txt
```

Commit the file:

```bash
git commit -m "Add test2.txt"
```

---

### 6. Push the New Branch to GitHub

```bash
git push -u origin feature/lesson
```

* `-u` (upstream) tells Git to remember the remote branch.
* Next time, you can simply run `git push`.
* If using HTTPS, GitHub will ask for login.

After pushing:

* GitHub recognizes the new branch
* Suggests creating a Pull Request

---

### 7. Create a Pull Request on GitHub

On GitHub:

1. GitHub shows a banner: **Compare & pull request**
2. Click the button to open PR
3. Check:

   * Base branch: `main`
   * Compare branch: `feature/lesson`
4. You will see:

   * 1 commit
   * File differences: `test2.txt`
5. Click **Create Pull Request**

Team will:

* Review the code
* Approve or request changes

After approval, you can merge.

---

### 8. Merge and Handle Branch After Merge

* After a successful merge, GitHub asks if you want to delete the branch.
* Deleting or keeping the branch is optional.
* In this example, the branch is kept.

---

### 9. Update `main` Locally

In the command line:
Switch to `main`:

```bash
git checkout main
```

Pull latest changes from GitHub:

```bash
git pull
```

Now `test2.txt` appears in the `main` directory.

Check files:

```bash
ls
```

You should see:

* `README.md`
* `test.txt`
* `test2.txt`

---

### 10. Conclusion – Git Branching Workflow

**Full process:**

1. Check status
2. Create branch
3. Work in the branch
4. Add → Commit → Push
5. Create Pull Request
6. Review and merge
7. Update `main` branch

This is the **standard workflow** in any development team, especially with multiple contributors.

---

# Remote vs Local in Git & GitHub

---

### 1. Before the Internet – Why Remote is Needed

* In the past, backing up or transferring project files was manual → slow & error-prone.
* Today, with cloud services like GitHub, developers can store code on a **remote server** and share easily.
* Git allows moving code **from local → remote** and vice versa.

---

### 2. Key Concepts (Very Important)

**Local**

* Your computer (laptop/desktop/mobile)
* Where you edit code, commit, work offline

**Remote**

* Repository stored elsewhere, usually on GitHub
* Used to share code with others
* Each remote has a unique URL
* Only authorized users can access

**Repo**

* Repository = project storage (local or remote)

**Clone**

* Copy the entire repo from GitHub → local machine (first local copy)

**Pull**

* Fetch latest changes from GitHub to local

**Push**

* Send commits from local → GitHub

---

### 3. Standard Workflow

1. Clone the project from remote (first time)
2. Work locally (modify → stage → commit)
3. Push commits to remote for others to see
4. Others pull to update their local repo

---

### 4. Example: Project “coding-project-one”

* Repo on GitHub = remote repo
* Users can:

  * Clone if first time
  * Pull if already cloned
* After modifying code → push to GitHub
* Others see changes only after pulling

---

### 5. Benefits of Git

* Work offline → commit freely
* When online → push changes to GitHub
* Easy to synchronize between multiple developers

---

### 6. Terminal Practice

**Create a new local repo:**

```bash
mkdir my-second-repo
cd my-second-repo
git init
```

* This repo is only local, not connected to GitHub
* Check remotes:

```bash
git remote -v
```

→ Nothing shows

**Connect local repo to GitHub remote:**

1. Go to another folder with a GitHub-connected repo (`my-first-repo`)

```bash
cd my-first-repo
git remote -v
```

→ Shows GitHub URL

2. Back to the new repo:

```bash
cd ../my-second-repo
```

3. Add remote:

```bash
git remote add origin git@github.com:GitTutorials101/my-first-repo.git
```

4. Verify:

```bash
git remote -v
```

**Pull code from remote to local:**

```bash
git pull
```

* The folder is still empty because the branch does not exist locally

**Create branch matching remote branch:**

```bash
git checkout main
```

Check files:

```bash
ls
```

→ `README.md`, `test.txt`, `test2.txt` appear

---

### 7. Conclusion

* **Local** = where you work
* **Remote** = where code is stored & shared (GitHub)
* Important commands:

  * `clone` → get repo first time
  * `pull` → get updates
  * `push` → send updates
  * `remote add` → connect local ↔ remote
  * `checkout` → switch/create branch

Understanding **local vs remote** helps you work efficiently in a team and manage code better.

---

# Git Push and Git Pull (Pushing and Pulling in GitHub)

---

### 1. Review: `git add` and `git commit`

Before pushing changes to GitHub, you need to:

* `git add` → stage files in the staging area
* `git commit` → take a snapshot in your **local repository**

After this step, changes exist only on your machine, not on GitHub.

---

### 2. Git Push – Upload Changes to Remote

**What is Remote?**

* **Remote repository** = code storage on GitHub or another server
* **Local repository** = repo on your machine

**When to use `git push`?**

* When you want to send commits from local → GitHub

Check status:

```bash
git status
```

Git may show:

```
Your branch is ahead of 'origin/main' by 1 commit.
```

Meaning: local has new commits → GitHub does not

Push command:

```bash
git push origin main
```

* `origin` = remote name (default)

* `main` = branch name on GitHub

* If using HTTPS, GitHub will request login

**Result:**

* Files appear on GitHub
* Git checks for conflicts:

  * No conflicts → auto merge
  * Conflicts → push is rejected

---

### 3. Before Push – Always `git pull`

To avoid conflicts, always run:

```bash
git pull
```

* Someone else may have changed code on GitHub while you were working

---

### 4. Git Pull – Fetch Changes to Local

**When to use `git pull`?**

* Working in a team
* Updating to the latest code from GitHub
* Remote has changes that local does not

**Example:**

1. Edit `test.txt` directly on GitHub
2. Commit changes on GitHub
3. Local does not yet have this change

Check local:

```bash
cat test.txt
```

→ File is empty

Run:

```bash
git pull
```

Git shows:

```
1 file changed, 1 insertion
```

Check again:

```bash
cat test.txt
```

→ New content appears: `"this is my change"`

**How Git Pull Works:**

* Downloads snapshot from remote
* Compares with local snapshot
* If no conflicts → automatically merges
* Result: local has the latest version

---

# Git Blame – Who Changed What and When?

---

### 1. Purpose of `git blame`

* Important for tracking code changes in a large team
* `git blame` helps you:

  * See who edited
  * See when edits occurred
  * See which lines were changed

---

### 2. Basic Structure of `git blame`

Command:

```bash
git blame <filename>
```

Example:

```bash
git blame feature.js
```

Each line shows:

| Component   | Meaning                 |
| ----------- | ----------------------- |
| Commit ID   | Hash of the commit      |
| Author      | Who made the commit     |
| Timestamp   | Date and time of commit |
| Line number | Line number in the file |
| Content     | Code content            |

**Note:** One commit ID may appear multiple times if it changed multiple lines.

---

### 3. Limit Line Display

If the file is large, show lines X to Y:

```bash
git blame -l -L 5,15 setup.py
```

* `-L 5,15` → show lines 5 to 15 only
* `-l` → show full hash instead of shortened hash

---

### 4. Customize Output

* Show author email: use corresponding flag (`git blame --help`)
* Change date format
* Show only part of the file as needed

---

### 5. View Commit Details for a Line

1. Get commit ID from `git blame`
2. Run:

```bash
git log -p <commit_id>
```

* `git blame` → shows line, author, and timestamp
* `git log -p` → shows detailed changes made in that commit

---

### 6. Practical Example

a. In a public repo (MK docs), select Python file `setup.py`
b. Run:

```bash
git blame setup.py
```

c. See who edited which line
d. View commit details:

```bash
git log -p <hash_commit>
```

e. Limit line range:

```bash
git blame -l -L 5,15 setup.py
```

---

### 7. Conclusion

* `git blame` → track file or line edit history
* Very useful in team collaboration
* Combine with `git log -p` to see full details of changes