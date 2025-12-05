walk through 

git fundermentals

working with repositories 

branching and merging

collaboration and conflicts

1. Fundermentals
- git init → start of a new repo
- git status → check what’s happened
- git add <file> → stages the file for a commit
- git commit -m “message” → save a snapshot of the file
- git log → see history
- git log —online → see history thorugh the remote repo

1. Working with repositories
- git clone <url link> → gets a copy of the repo to the local repo
- git remote add origin <url link > → connect the local repo to github or remote repo
- git push origin main → uploads changes
- git pull origin main → gets the latest change

1. Branching and merging
- git branch feature-x → creates branch
- git checkout feature-x → switches to branch
- git merge feature feature-x → brings back into main
- git branch -d feature-x → deletes the branch
- git checkout main → switches back to the main

1. Collaboration and conflicts

conflits happen when two people change the same part if a file 

it is marked as this

```bash
<<<<<<< HEAD
your changes
```

```bash
their changes
```

```bash
branch-name
```