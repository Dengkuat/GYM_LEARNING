step 1: Creating a remote repository on GitHub

after creating the repository 

copy the clone link

step 2: Copying the repository link

eg  **HTTPS link** (it looks like https://github.com/username/repo-name.git).

step 3: Clone the repository locally using ur prefered code editor( vs code)

```bash

cd ~/Documents/projects  - we changing the directorate 
//the path to the folder

git clone https://github.com/username/repo-name.git
//here we cloning the repostory using the link we copied
//this creates a folder of the repositoy in your local directory

git remote -v 
//this verifies the remote is set up correctly 
//output - origin  https://github.com/username/repo-name.git (fetch)
origin  https://github.com/username/repo-name.git (push)

git add .
//this adds changes to git

git commit -m 'Initial commit message'
//this commits and takes a snap shot 

git push original main
//push changes to github
```



```bash
git status 
// we checking the current status before we do anything future

echo "Hello Fit" > practice.txt
//we creating a new file practice.txt with some text inside

git status

git add practice.txt
//git add stages changes so Git knows you want to save them in commit

git status

git commit -m "Add practice.txt with hello text"
//this saves a snapshot of your changes, the
//m stands for message and lets you write a message

git log --online
//shows your history of commits

echo "L am learing Git" >> practice.txt
//>> adds a new line to the file

git status

git add practice.txt

git commit -m "Add learning message to practice.txt"

git push origin main
//sends the commited message to the remote repository on GitHub

```