## Difference between merge and rebase

Merge → creates a new commit that combines histories → it keeps the branching graph

Rebase → Rewrites commit history → puts your branch commit on top of the target branch

- Cleaner, linear history
- but dangerous if you rebase commits already pushed and shared

Demo Idea

Creating main and feature branches

Commits changes on both

```bash
git merge main
git log --oneline --graph --decorate

//then we can reset it now
git rebase main
git log --oneline --graph --decorate 
```

Comparison of its commands

git merge branchName

git rebase branchName

## Interactive rebase for cleaning commits history (git rebase -i)

concept

- When reweiting history, reorder, squash, edit, or drop commits
- Usefull before pushing to remote → makes the prs cleaner

Demo Idea

```bash
//when u have alot of small commits 
then 
	git rebase -i
```

In the interactivity editor 

- Change Pick to squash → combines commits
- Change pick to reward → edit commits message

Command

git rebase -i HEAD~N

inside the editor pick, reword, squash, edit, drop

## Fixing Commits (git commit — amend)

Concept

- Amend lets you change the last commit - message or even staged content
- Dosnt add a new commit, but rewrites the previous one

Demo Idea 

When u commit a file with a typo

Fix typo stage it then run 

```bash
git commit --amend
Then this will update ur previous message
```

commands

git commit —amend

Add -m “new message ” if you are only changing the message

## Reordering, Squash and splitting commits

concept

- Reorder → changes the order of commits as they appear in history
- Squash → Combine multiple commits into one
- Split → Break a commit into multiple smaller commits
- Demo idea
- Reorder → git rebase -i and swap commits order in the editor
- Squash → git rebase -i change pick to squash
- Split → during git rebase -i, mark commit as edit, then

```bash
git reset HEAD^
git add file1
git commit -m "first part"
git add file2
git commit -m "second part"
git rebase --continue
```

commands

git rebase -i HEAD~N
git reset HEAD^

git rebase —continue

Key commands to master about rebase

git rebase branchName → rewrites commits and move the commits to the top of the branch 

git rebase -i HEAD~N → rewrites last N commits interactively

git reflog → lifesaver when things go wrong, it shows all the movement of HEAD

Demo idea

```bash
mess up a rebase intentially, then recover it
git reflog 
git reset --hard commit hash
```

[Commands Practice](https://www.notion.so/Commands-Practice-265b532183ad801c9f13de0035b7c88b?pvs=21)