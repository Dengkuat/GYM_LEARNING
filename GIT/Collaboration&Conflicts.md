Conflict in Git

conflicts happen when two or more people change the same part of a file

1. when conflicts occur

during git merge or git pull

eg, you change line 10 of index.html

you teammate also changes line 10 directly

git dosnt know which one to keep leading to a conflict

1. Conflict makers

When a conflict happens, git marks the file like this

<<<<<<< HEAD
your changes

teammate’s changes

branch-name

1. resolving conflicts

**step**

- open the conflict file
- decide where to keep urs or there or merge both of them
- remove the conflict markers
- then mark the conflict as resolved - git add <file>
- complete the merge - git commit

Collaborate flow example

- git clone https://github.com/user/project.git
cd project
- creating your branch - git checkout -b feature-login
- work, commit then later on push - git push origin feature-login
- teammates also works on their branch
- when merging → conflicts appear → resolve as above