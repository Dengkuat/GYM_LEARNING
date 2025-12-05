git init

Initializes a new Git repositoy in your current folder

Creates a hidden .git folder where Git stores all version history

After this, your folder becames a local git repository

git remode add origin <repo-link>

Connects your local repo to remote repositoy on Github

origin is just a name for the remote default name Git uses

git branch -M main

Sets local branch to main( standard defaut branch name)

-M forces the rename in case the branch already exists with a differnet name

Some older Git version use master so this ensures consistency with GitHub 

git add hello.txt

stages the file for commit 

Think of it as “ I  want Git to track changes”

Can add multiple files at once using git add .

git commit -m

Creates a snapShot of your stages changes

-m specific for commit message, describes what the change is

this besically means save the version of my project with a note

git push

Uploads your local commits to the remote repository on the main branch

-u sets this branch to track the remote branch, so in the future you can just run git push or git pull without specifying the origin main