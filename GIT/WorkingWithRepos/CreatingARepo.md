What is a remote repository?

This is a version of your project that is hosted on the internet such as Github

Local one is the one in the computer local to the computer

- So the remote repo helps us to
- share code with work online
- collaborate on projects from anywhere

Git Hub acts as a remote server

- Github stores your project online
- It allows you to push your local changes and pull changes from othes
- You can see your project in the browser and collaborate easily

Remote operations

- git push - Uploads local changes the remove repo
- git pull - Fetch changes from remote and merger locally
- git fetch - Fetch the remote changes without merging

Origin is the default name git gives to your remote repo

Branching

Parallel timeline of the project

main/master - stable code

feature. branches - where you experiment or build new features without breaking the main

- git branch feature-login - creates a branch
- git checkout feature-login - switches to that branch
- git switch feature-login - a modern way to switch to that branch
- git branch - see all the branches existing

Merging

Once the feature is ready, then we can usually merge ut back into main

- git switch main - switches back to the main
- git merge feature-login - merge the feature branch

Types of merges

- fast forward merge - happens when main hasnt moved since you branched off
- three way merge - happens if both main and your branch have a new commit

Delete branch

After merging, its common to delete the feature branch to keep things clean

- delete locally

git branch -d feature-login

- delete from remote

git push origin —delete feature-login

Remote repository 

- Branches also exist remotely
- git push origin feature-login - pushes a branch to remote repository
- git pull origin main - pulls the updated from remote repository
- git fetch - fetches remote branches without merging

so in summary 

1. create branch, do work and commit the changes
2. merge branch into the main
3. delete branch optional but for cleaner codes yes
4. push, pull to sync from remote