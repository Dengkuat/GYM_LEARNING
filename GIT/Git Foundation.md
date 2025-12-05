Introduction to Git

**What is Git?**

- Git is a version control system
- It tracks changes in your code over time
- It allows multiple developers to collaborate on the same project

NOTE: Git keeps track of every changes made by you and lets you go back to any version at any time

**Why use Git?**

- Keeps track of your prokect history, who changes if collaborated, what change and when they where made
- lets you undo mistakes easily
- Helps you to collaborate with other
- Industry standards, almost 89% of software companies use Git

**Installing Git**

In windows os, download it from the Git website

Linux/ Mac os, its already installed or we can install it from the terminal 

if Git is already installed

```jsx
git --version
```

if Git is not already installed

```jsx
sudo apt install git 
```

```jsx
brew install git
```

**Configure Git (once on your computer only)**

Setting your indentity - important for commits

```jsx
git config -- global [user.name](http://user.name) "Your Name"
git config --global user.email "your.email@example.com"
```

Checking your settings

```jsx
git config --list
```

**Creating Your First Git Repository**

A repository tracked by Git 

Create a roject folder

```bash
mkdir my-first-git-project
cd my-first-git-project
```

Intialize Git

```bash
git init
//this creates a hidden .git folder-the brain of Git
```

Creating a file

```bash
echo "Hello Git!" > hello.text
//here we creating a folder hello.text
```

Check Git status

```bash
git status
//shows which files are tracked, untracked and unchanged
```

**Commit - saving your snapshot**

Adding the file 

```bash
git add hello.text
//we preparing teh file to be saved
//when we use the . we want to add everything at once
```

Commiting the file (saving the snapshot)

```bash
git commit -m "First commit : added hello.text"
//saves the changes into history
```

Checking commit history

```bash
git log
//lets we see what been saved so far
```

[Git practice command](https://www.notion.so/Git-practice-command-25ab532183ad8066a96cd8dad937b43b?pvs=21)