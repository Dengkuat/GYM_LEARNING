Collabrations in git

when multiple developers work together, git enables smooth collaborations through remote repostitories eg github

Remote repository basics

- git remote -v → see remotes
- git clone <repo_url> → copy remote repo to your machine
- git fetch → downloads changes but not merges
- git pull → fetch and merges changes into current branch
- git push → uploads local commits to remote repositories

Branching in collaborations

Each developer usually works on a feature branch

eg, a person working on the feature-login

another one works on the feature-dashboard

later we can merge both to the main

NOTE ; never merge firectly to the main

              always create pull requests or merge requets

Why use branches

- To work on feature independently without affecting the main branch
- To isolate experimental or bug fixes
- To collaborate safly with teammates

Making changes in a branch

Work like the normal commit add and commit 

only that u have to be in that branch using git checkout

making the commits on that branch not affect the other branches

Merging branches

Merging is combining the changes from one branch to another

Most common use when u merge a feature into main when its ready

```bash
git checkout main
git merge new-feature
```

Possible outcomes

1. Fast-forward merging 

Happens when the main hasnt moced since the branch

so Git command will just move the branch forward not extra commit or merge error

1. Three-way merge 

Happens when both the branches have commits

Git creates a merge commit that ties the histories together

1. Merge Coflict

Occurs when the same part of the file was changed in both branches

Git stops the merge and ask you to fix conflicts manually 

```bash
# After git merge, edit files with <<<<<<< markers
git add resolved-file
git commit  # completes the merge
```

Delete branches

Once the branch is merged, ou can clean up safly

```bash
git branch -d new-feature   # Safe delete, only if merged
git branch -D new-feature   # Force delete, even if unmerged
```

Viweing Merges

```bash
git log --online --graph --decorate --all
git log --merges
```