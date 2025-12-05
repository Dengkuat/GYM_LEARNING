# Summary of what to cover in Git Fundermentals

1. **Repo setup and first commits**
    - git init, git add, git commit
2. **Working directory → staging → commit history**
    - git status, git diff, git diff --staged, git log -1, git show
3. **Git objects**
    - Blobs, trees, commits
    - Inspecting them: git cat-file -t and git cat-file -p
4. **SHA hash identity**
    - Understanding that the hash depends **only on content**, not filename
5. **Detached HEAD basics**
    - Knowing why it happens and how to get back to a branch
6. **Simple history visualization**
    - git log --oneline --graph --decorate

How Git stores Data

Git is not like other other control versions 

It stores snap shots of the entire project at a given point of time

Each file is saved in a blob, binary large objects

Blob are grouped in tress that represent directories

Commits reference tress + meta data 

Everything in identified as SHA-1 or SHA-256 hash 

git Directory structure

When we (git init), git creates a hidden .git folder. This is ther repos database

So what do we find in the repos database

- object → stores blobs, tress, commits which are the actual data
- refs → stores refefernce branches or tags
- HEAD → tells Git which branch you are on
- config → repos specific configuration
- index → staging area prepares files for a commit

So when we delete .git, you lose your repos history since its the database

Working Directoray vs staging area vs commit history

- working directory → your acctual files - what we can see and edit
- staging area/ index → snapshots your preapring for a commit (git add)
- commit history → permanent snapshots stores in .git/object after git commit

use cases

- we can edit index.html → files changes are in the working directory
- you run git add index.html → to stage the change or staging out file for a commit
- you run git commit -/m “Update homepage” → takes a snapshot and change enters commit history that stays there permanently

Detached HEAD State

Normally, head points to the latest commit in your current branch 

If you checkout a commit directly eg git checkout <file name>, head is detached

You can explore history, but new commits won’t belong to any branch unless you create one

Related commands

git status → check whats’s stages, unstages or commited

git diff → see differences between working directory, staging and last commit 

git log —oneline —graph —decoreate → visualize commit history with branches 

got show <commit-hash> → see details of a specific commit 

Simple Questions

1. Why do the hashes change even though the filename is the same?

Because Git dosnt care about the file name in the blob object

A blob is purely the files conent

If the content changes then the SHA hash changes aswell

The filename is stored separatly in the tree of the tree object directory structure

The design makes Git content addrssable since the hash is litrally the uniqu Id for those bytes

[Practical sessions](https://www.notion.so/Practical-sessions-263b532183ad80c4ab4de72ef24d05d9?pvs=21)

[Understranding head](https://www.notion.so/Understranding-head-263b532183ad806d8c45fd8813862cf5?pvs=21)