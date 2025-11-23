# Introduction to Version Control

## 1. What is Version Control?

* Version Control is a system that tracks and manages changes to files in a project.
* It helps developers:

  * Revert to previous versions when errors occur.
  * Track who changed what and when.
  * Collaborate easily without worrying about data loss.
* Think of it like a “time machine” for programming projects.

## 2. Why is Version Control Important?

* When working with many files and multiple people, it’s easy to create confusion or lose data.
* Version Control helps to:

  * Manage changes in the project.
  * Resolve conflicts when multiple people edit the same file.
  * Easily restore old versions if needed.

## 3. Types of Version Control Systems

1. **Centralized**

   * All changes are stored on a single server.
   * Users send and fetch data from this server.
2. **Distributed**

   * Each user has a complete copy of the project.
   * Easier to work offline and synchronize when connected.

## 4. Popular Tools

* **Git:** a distributed version control system.
* **GitHub:** a project hosting service that facilitates sharing and team collaboration.

**Basic operations:**

* `add`: mark files to include in a version.
* `commit`: save changes to a version.
* `push`: upload changes to GitHub.
* `pull`: fetch the latest version from GitHub.

**Advanced operations:**

* **Branching:** create branches to test new features.
* **Forking:** copy someone else’s project for development.
* **Diff:** see differences between versions.
* **Blame:** see who changed which line of code.

## 5. Command-line and Unix

* Version Control often uses the command-line interface.
* Basic Unix commands help you manage files and use Git more effectively.

## 6. Summary

* Version Control = an essential tool for programming and teamwork.
* Git and GitHub are popular tools for practicing version control.
* Learning version control is a crucial step toward becoming a professional developer.

---

# Version Control (Detailed)

## 1. What is Version Control?

* Version Control is a system that records all changes to files in a project.
* Also called **source control** or **source code management**.
* It helps developers to:

  * View the entire history of changes.
  * Revert to previous versions when needed.
  * Manage changes such as adding, editing, or deleting files.
* Familiar example: word processors (Word, Google Docs) that auto-save and create restore points.

## 2. Objectives of Version Control

* Maintain an accurate **source of truth** for code, resources, and teams.
* Support team efficiency and reduce risk of errors.
* Integrate with **peer review**:

  * Developers review each other’s code before merging.
* Support **DevOps**:

  * Manage quality, deploy software quickly and accurately.

## 3. Benefits of Version Control

1. **Revision History:**

   * Stores all changes to revert to a stable version in case of errors.
2. **Identity Tracking:**

   * Records who made changes, helping the team track and analyze.
3. **Collaboration:**

   * Teams can submit code and track all changes easily.
4. **Automation & Efficiency:**

   * Supports automated testing and deployment.
   * Helps teams work faster and more reliably.

## 4. Version Control & Agile

* Teams often work using **Agile**:

  * Iteration = 2-week cycle.
  * Each iteration has a list of tasks to complete.
* Version Control helps to:

  * Manage complex tasks.
  * Enable effective testing, deployment, and collaboration.
  * Reduce the risk of breaking existing features when adding new ones.

## 5. Conclusion

* Version Control = a time machine for developers.
* Helps teams to:

  * Track changes.
  * Collaborate effectively.
  * Improve quality and development speed.
* Once you understand version control, you are ready to start using Git/GitHub or other version control systems.

---

# Collaboration and Version Control at Meta

## 1. Characteristics of Collaboration at Meta

* **Engineers lead every project:**

  * Responsible for coordinating with product managers, data scientists, and researchers.
  * Manage timelines and decide which features to build.
* Unlike other companies where product managers or leadership often lead projects.

## 2. Collaboration Methods

* **Communication:**

  * Chat to unblock each other.
  * Meetings when necessary.
  * Shared documents with comments and notes.
* **Code sharing and version control:**

  * Monolithic repository for the entire Instagram backend.

    * **Advantages:** easy to share and reuse code across teams.
    * **Disadvantages:** prone to merge conflicts because multiple engineers work simultaneously.

## 3. Version Control at Meta

* **Monolithic repository (large repository):**

  * Any engineer can improve any change.
  * No “ownership” limitation → “Nothing at Meta is someone else’s problem.”
* Compared to microservices (small, team-specific repositories):

  * **Microservices:** each team has its own codebase → reduces merge conflicts but limits code sharing.
  * **Monolithic:** requires small changes and gatekeepers to control deployments.

## 4. Challenges and Solutions

* **Merge conflicts are common → solutions:**

  * Make small changes to ease reverting.
  * Gatekeepers can quickly disable features if errors occur.
  * Share code with related projects (e.g., Messenger) → extensive testing needed.
* **Using git blame:**

  * View file history.
  * Know who wrote each line and the purpose of changes.
  * Helps with reverting and contacting the right person to understand the code.

## 5. Benefits

* Learn to work efficiently and collaborate effectively → project success.
* Gain diverse perspectives on features, users, and improvements.
* Result: better products through coordination among multiple engineers and teams.

## 6. Conclusion

* **Collaboration + Version Control** is key to success at Meta.
* Proper use:

  * Understand the code, reduce risks, increase efficiency.
  * Produce higher-quality products with multiple perspectives and better user experience.

---

# Git

## 1. What is Git?

* Git is a distributed version control system for tracking changes in source code and collaborating on projects.
* GitHub is an online platform for hosting Git repositories and team collaboration.

## 2. Initial Setup and Configuration

```bash
git config --global color.ui auto
git config --global user.name "[name]"
git config --global user.email "[email]"
```

* Set your name and email so Git records them for each commit.

## 3. Repository

| Purpose                | Command           | Notes                                          |
| ---------------------- | ----------------- | ---------------------------------------------- |
| Create new repository  | `git init`        | Initialize a Git repo in the current directory |
| Clone repo from GitHub | `git clone [url]` | Copy all files and full history                |

## 4. Saving Changes (Commit)

```bash
git add [file]
git commit -m "description message"
```

* `add`: move file to the staging area.
* `commit`: save a snapshot to version history.

## 5. Syncing with GitHub

| Command     | Function                                              |
| ----------- | ----------------------------------------------------- |
| `git fetch` | Download new history from remote but don’t merge      |
| `git merge` | Merge changes from another branch into current branch |
| `git pull`  | `fetch + merge` (update local from GitHub)            |
| `git push`  | Upload commits to GitHub                              |

## 6. Branches

| Command                       | Purpose             |
| ----------------------------- | ------------------- |
| `git branch [branch-name]`    | Create a new branch |
| `git checkout [branch-name]`  | Switch branch       |
| `git branch -d [branch-name]` | Delete branch       |

* Note: All commits are created in the current branch.

## 7. View History and Changes

| Command                   | Function                          |
| ------------------------- | --------------------------------- |
| `git log`                 | View commit history               |
| `git log --follow [file]` | View file history even if renamed |
| `git diff`                | Compare changes                   |

## 8. Undo and Edit History

| Command                     | Function                             |
| --------------------------- | ------------------------------------ |
| `git reset [commit]`        | Undo commit but keep changes         |
| `git reset --hard [commit]` | Delete all changes after that commit |

* Note: Resetting commits already pushed to GitHub can cause serious issues.

## 9. `.gitignore`

* Used to ignore files that do not need tracking (e.g., logs, build files, system files).

### Important Notes

* File lifecycle: **Working → Staged → Committed**
* Always `git pull` before `git push` to avoid conflicts
* Commit messages should be clear and descriptive
* GitHub Flow:
  `Main/Master → Create Feature Branch → Commit → Pull Request → Review → Merge`

---

# Centralized vs Distributed Version Control Systems

## 1. Problem to Solve

* When multiple developers work on the same codebase:

  * One adds new features while another fixes bugs.
  * Confusion and difficulty tracking changes.
* Version control manages all changes.

## 2. Types of Version Control

* Popular VCS: Git, Subversion, Perforce, AWS Code Commit, Mercurial
* Two main types:

### A. Centralized Version Control System (CVCS)

* **Structure:** Server + Client

  * Server: stores main repository with full code history
  * Client: local working copy
* **Workflow:**

  1. Developer pulls code from server.
  2. Work locally.
  3. Push changes back to server.
* **Advantages:**

  * Easy to learn, simple access control
* **Disadvantages:**

  * Slow if server connection required
  * Cannot work offline

### B. Distributed Version Control System (DVCS)

* **Structure:** Each developer is a “server” for their own copy

  * Pulling code also downloads full history locally
* **Workflow:**

  1. Pull to update new changes
  2. Work and commit locally without server connection
  3. Connect to server only when pushing/pulling
* **Advantages:**

  * Work offline
  * Faster and more efficient than CVCS
  * Supports DevOps and improves software lifecycle
* **Disadvantages:**

  * Managing multiple code copies can be more complex

## 3. Quick Comparison CVCS vs DVCS

| Feature        | CVCS                 | DVCS                |
| -------------- | -------------------- | ------------------- |
| Code history   | Server only          | Local copy included |
| Offline work   | No                   | Yes                 |
| Performance    | Slower               | Faster              |
| Access control | Easy                 | More complex        |
| Examples       | Subversion, Perforce | Git, Mercurial      |

## 4. Conclusion

* CVCS: easy to learn, good access control, but server-dependent
* DVCS: flexible, offline-capable, high performance → popular in DevOps
* Understanding differences helps developers choose the right VCS and work efficiently

---

# Revision History and Its Role in Software Development

## 1. Why Revision History is Important

* When multiple developers work on the same project, a single **source of truth** is essential.
* Revision history helps to:

  * Store all changes made to each file in the project.
  * Track who changed what, when, and why.
  * Facilitate collaboration and ensure work aligns with shared goals.

## 2. Change Management and Conflict Resolution

* When multiple developers work on the same project:

  * Work can overlap or source code conflicts may occur.
  * Revision history allows viewing the full lifecycle of changes, from project creation to the current state.
* Each change includes:

  * **Author** – the person who made the change
  * **Commit message** – the reason for the change
  * **Code and modifications**
  * **Date and time** of the change

## 3. Real-World Example: E-Commerce Development Team

* Suppose your team has four developers tasked with creating an A/B test feature for marketing to track user behavior.
* Typical workflow:

  1. **Commit:** Developer saves changes to the local repository.
  2. **Push:** Upload changes to the central repository.
  3. **Pull Request:** Create a merge request.
  4. **Peer Review:** Other team members review and approve or reject the changes.
* When conflicts occur:

  * Revision history provides full information to resolve issues: who, when, why, and what code was changed.
  * Helps manage merges efficiently, prevent errors, and keep the project on track.

## 4. Key Benefits of Revision History

* Safely manage and merge changes.
* Reduce the risk of data loss from accidental overwrites or deletions.
* Increase transparency and team collaboration.
* Support fast deployment of features and bug fixes without affecting other parts of the project.

## 5. Conclusion

* Revision history is an essential tool for team-based development.
* Helps developers:

  * Track the full development process
  * Identify and resolve conflicts
  * Ensure project quality and timelines
* Understanding revision history allows you to explain how developers use version control to handle conflicts during production.

---

# Interacting with Computers and the Command Line

## 1. Interacting with a Computer

* When first using a computer, you learn to use the mouse and keyboard. Initially slow, but gradually becomes proficient.
* **Interaction** = exchanging information: the computer sends data to you, and you send data back.

### Input and Output Devices

* **Input devices:** keyboard, mouse, microphone, camera, touchscreen, etc.
* **Output devices:** monitor, speakers, headphones, haptic devices, etc.
* **GUI (Graphical User Interface):** makes interaction easier but limits advanced operations.

## 2. Using the Command Line (CLI)

* The Command Line Interface (CLI) is a powerful way to interact with the computer, faster than GUI and less error-prone once mastered.
* Initially challenging, but offers long-term benefits.

### Basic CLI Tasks

* Create new directories: `mkdir`
* Create new files: `touch`
* Navigate directories: `cd`
* View command history: `history`
* Move, copy, merge directories, search files
* Advanced tasks: access remote servers, extract files, install/uninstall software, check disks, run scripts, use containers, create aliases, download files, control virtual software.

## 3. Real-World Example

**Goal:** create a project `myjsproject` on Desktop and open `example.js` in VS Code.

**Commands:**

1. Navigate to Desktop:

```bash
cd ~/Desktop
```

2. Create project folder:

```bash
mkdir myjsproject
```

3. Enter folder:

```bash
cd myjsproject
```

4. Create file `example.js`:

```bash
touch example.js
```

5. Open in VS Code:

```bash
code example.js
```

**Result:**

* Folder `myjsproject` on Desktop
* File `example.js` inside folder and opened in VS Code

## 4. Conclusion

* Command line allows far more advanced operations than GUI.
* Learning basic commands helps you interact efficiently with the computer and eventually become proficient.

---

# Introduction to Unix Commands

## 1. Interacting with Devices

* Using a phone or computer typically involves GUI:

  * It’s a layer over basic commands that helps perform actions like clicking, swiping, dragging.
* Example: creating a new folder on Desktop

  * **GUI:** right-click → New Folder
  * **Command line:** `mkdir`

## 2. History and Importance

* Unix was developed in 1969 by Ken Thompson, Dennis Ritchie, and the team at AT&T Labs.
* Linux was later developed by Linus Torvalds as a personal hobby project.
* Most cloud systems today (~90%) run on Linux.
* Unix commands are used on Linux and similar systems.

## 3. Helper Commands

* `man`: shows detailed documentation for a command

  * Example: `man ls` shows instructions for `ls` command
* **Flags:** extend or modify command behavior

  * Example: `ls -l` displays files with permissions, owner, etc.
  * `ls -a` shows all files, including hidden ones

## 4. Basic Unix Commands

* `cd` (change directory): navigate folders
* `ls`: display contents of current directory
* `pwd` (print working directory): show full path of current directory
* `cp`: copy files or directories
* `mv` (move): move files or directories

## 5. Conclusion

* Unix commands are the underlying layer beneath GUI, enabling faster and more precise operations.
* Mastering Unix commands is essential for software development, especially on Linux.
* When using devices, consider the commands running behind the GUI to accomplish tasks.

---

# Using Bash on Mac Terminal

## 1. How to Open Terminal on Mac

Terminal can be opened in three ways:

**a. Finder**

1. Click on **Finder** at the bottom of the screen.
2. Go to **Applications → Utilities → Terminal**.

**b. Launch Pad**

1. Press **F4** to open Launch Pad.
2. Type `Term` → select the **Terminal** icon.

**c. Spotlight**

1. Press **Command + Space** to open Spotlight.
2. Type `Terminal` or `Term` → select the **Terminal** icon.

---

## 2. Basic Bash Commands on Mac

| Command | Function                                   |
| ------- | ------------------------------------------ |
| cd      | Change directory                           |
| ls      | List directory contents                    |
| rm      | Delete files or directories                |
| mv      | Move files/directories                     |
| touch   | Create an empty file or update timestamp   |
| cp      | Copy files/directories                     |
| mkdir   | Create a new directory                     |
| pwd     | Display current path                       |
| cat     | Read or concatenate file content           |
| less    | View file content page by page             |
| grep    | Search for content in files or directories |

---

## 3. Using Flags

* Flags modify the behavior of commands.
* Example:

  * `ls -l` → show detailed list with permissions, owner, group
  * `ls -a` → show all files, including hidden files

---

## 4. Manual Pages (Man Pages)

* Every command has a manual page to see details, options, and flags.
* Example: `man ls` → shows manual for `ls` command

---

## 5. Editing Files with Vim

* Vim is a terminal text editor, improved from VI.

**Modes in Vim:**

1. **Normal mode (default):** move, delete, copy

   * `h, j, k, l` → move left, down, up, right
   * `/search_term` → search a word or phrase
2. **Insert mode:** input content directly (`i, a, o`)
3. **Command-line mode:** type `:` to execute commands

   * `:w` → save file
   * `:q` → quit Vim

---

# Using Bash on Windows

## 1. Check Bash Configuration Files

* Open terminal and navigate to home directory:

```bash
cd ~
```

* List all files (including hidden files):

```bash
ls -la
```

**Important files:**
**a. .bashrc**

* Contains shell configuration (colors, command history, etc.)
* Executed every time the terminal opens
* View content:

```bash
less .bashrc
```

**b. .bash_profile**

* Usually sets environment variables (Java home, Python home, etc.)
* View content:

```bash
less .bash_profile
```

---

## 2. Create a Basic Shell Script

* Open Vim to create a new file:

```bash
vim testshell.sh
```

* Switch to **Insert Mode** by pressing `i`
* Add the first line to specify script type:

```bash
#!/bin/bash
```

* Write a command to print to the screen:

```bash
echo "HelloWorld"
```

* Exit Insert Mode with `Esc`
* Save and quit Vim:

```bash
:wq!
```

---

## 3. Grant Execute Permission for Script

* Initially, the file only has read/write permissions; grant execute permission:

```bash
chmod 755 testshell.sh
```

* Verify:

```bash
ls -la
```

---

## 4. Run the Script

* Execute the script:

```bash
./testshell.sh
```

* Output:

```
HelloWorld
```

---

# Navigating and Managing Directories with Bash

## 1. Check Current Directory

* The `pwd` (print working directory) command shows your current location:

```bash
pwd
```

* Example: output `/` means you are in the **root directory**.

---

## 2. View Directory Contents

* The `ls` (list) command lists files and directories in the current folder:

```bash
ls
```

* Use the `-l` flag to display a detailed list:

```bash
ls -l
```

**Symbols in the list:**

* `l` → link file, e.g., `temp -> tmp`
* `d` → directory, e.g., `bin`
* `-` → standard file, e.g., `resolve.conf`

---

## 3. Change Directory

* The `cd` (change directory) command moves between directories:

```bash
cd etc        # enter the etc directory
cd ..         # go back to parent directory
cd /          # go back to root directory
```

* Check the current directory anytime:

```bash
pwd
```

---

## 4. Work with Multiple Directories

Example: Access the `ssh` folder inside `etc`:

```bash
cd etc
cd ssh
ls
cd ..         # back to etc
cd ..         # back to root
```

---

# Creating, Managing, and Moving Directories/Files in Bash

## 1. Check Current Directory

```bash
pwd
```

* Example: output `/` → you are in the root directory.

---

## 2. View Directory Contents

* List directories in detailed format:

```bash
ls -l
```

* Example: root folder contains a `projects` directory.

---

## 3. Create a New Directory

* `mkdir` (make directory) creates a new folder:

```bash
mkdir submissions
```

* Verify:

```bash
ls -l
```

* `submissions` folder appears.

---

## 4. Access the Directory

```bash
cd submissions
ls
```

* Initially, the folder is empty.

---

## 5. Create New Files

* `touch` creates empty files:

```bash
touch test1.txt
touch test2.txt
```

* Verify:

```bash
ls -l
```

* Files `test1.txt` and `test2.txt` appear in `submissions`.

---

## 6. Return to Root Directory

```bash
cd ..
pwd
ls -l
```

* You see `projects` and `submissions` directories.

---

## 7. Create Another Directory

```bash
mkdir archive
ls -l
```

* Result: three directories → `archive`, `projects`, `submissions`.

---

## 8. Move a Directory

* `mv` (move) command moves files or directories:

```bash
mv submissions archive
```

* Verify:

```bash
ls -l
```

* `submissions` disappears from root and is now inside `archive`.

---

## 9. Check Contents of Moved Directory

```bash
cd archive
ls -l
cd submissions
ls -l
```

* You can see `test1.txt` and `test2.txt` were moved as well.

---

## 10. Remember

* `clear` → clear the terminal screen for better visibility
* `ls -l` → always use to see permissions, owner, group
* `cd ..` → go back to parent directory
* `mv <source> <destination>` → move files or directories

---

# Files and Word Counting in Bash

## 1. List Directory and Enter Subdirectory

```bash
ls           # List current directory
cd archive   # Enter archive folder
ls           # Check contents inside
cd submissions  # Enter submissions folder
ls           # Check files inside
```

* Example: `submissions` contains two files: `file1.txt` and `file2.txt`.

---

## 2. View File Contents

* Use `cat` to display file content:

```bash
cat file1.txt
```

* Output shows the text inside `file1.txt`.

---

## 3. Count Words in a File

* Use `wc -w` to count words:

```bash
wc -w file1.txt
```

* Example output: `181` words in `file1.txt`.

---

## 4. Use Pipe to Combine Commands

* Pipe (`|`) allows sending the output of one command as input to another.
* Example: count the number of files in a directory:

```bash
ls | wc -l
```

* Result: `2` (because there are two files in the directory).

---

## 5. Count Words Across Multiple Files

* Combine `cat` and `wc -w` for multiple files:

```bash
cat file1.txt file2.txt | wc -w
```

* Result: total number of words in both files (example: `362`).

---

## Summary of Useful Commands

| Command      | Function               |                                       |
| ------------ | ---------------------- | ------------------------------------- |
| ls           | List files/directories |                                       |
| cd <folder>  | Change directory       |                                       |
| cat <file>   | View file content      |                                       |
| wc -w <file> | Count words            |                                       |
| `<command1>  | <command2>`            | Pipe output from command1 to command2 |

---

# Redirection in Linux

Every Linux command has **input** and **output**:

* **Standard Input (stdin)** → default: keyboard
* **Standard Output (stdout)** → default: screen
* **Standard Error (stderr)** → default: screen (for errors)

Linux uses numbers to reference streams:

| Stream | Number | Default  |
| ------ | ------ | -------- |
| stdin  | 0      | keyboard |
| stdout | 1      | screen   |
| stderr | 2      | screen   |

---

## 1. Redirect Input (stdin)

* Use `<` to take input from a file.
* Use `cat > file.txt` to save input from keyboard to a file:

```bash
cat > input.txt       # Start typing text
# Enter content
Ctrl+D                # Finish input
cat < input.txt       # Display file content
```

---

## 2. Redirect Output (stdout)

* Use `>` to send output to a file:

```bash
ls -l > output.txt    # Save directory listing into output.txt
cat output.txt        # View file content
```

* If the file does not exist, Linux will create it.

---

## 3. Redirect Error (stderr)

* Errors are sent to `stderr` (number 2), not `stdout`.
* Use `2>` to redirect errors to a file:

```bash
ls -l /bin/usr 2> error.txt  # "No such file or directory" goes to error.txt
less error.txt                # View errors
```

---

## 4. Redirect Both Output and Error

* Use `>` for stdout and `2>&1` to combine stderr with stdout in the same file:

```bash
ls -l /bin/ > error_output.txt 2>&1
less error_output.txt           # View both output and errors
```

---

## 5. Summary of Redirection Symbols

| Symbol | Function                            |
| ------ | ----------------------------------- |
| >      | Redirect stdout to file (overwrite) |
| >>     | Redirect stdout to file (append)    |
| <      | Redirect stdin from file            |
| 2>     | Redirect stderr to file             |
| 2>&1   | Merge stderr into stdout            |