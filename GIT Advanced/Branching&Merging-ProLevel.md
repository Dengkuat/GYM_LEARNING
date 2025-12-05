## Branching strategies

These are styles of how teams organise their branches

Git Flow(traditional, complex)

- Two long-lived branches
- main (production-ready)
- develop (integration branch)
- support branches: feature/*, release/*, hotifix/*

```bash
git checkout -b feature/login develop
git checkout develop
git merge --no-off feature/login
```

GitHub flow (simple, modern)

- only main is long-lived
- developers branch directly from main → feature → PR → merge

```bash
git checkout -b feature/payment main
git push origin feature/payment
```

Trunk-based development(very fast-paced)

Everyone commits small changes to main frequently (daily/continous)

Feature flags are used instead of long-lived branches

```bash
git checkout main
git pull origin main
git commit -m "Add quick fix with feature flag"
```

For Teams

- Git Flow → large projects with release cycles
- GitHub Flow → open-source, small teams
- Trunk-based → big companies, CI/CD heavy

## Fast-Forward vs Recursive Merges

fast forward merge

- happens when no new commits exist in target branch
- just moves the pointer forward

```bash
git checkout main
git merge feature/login
```

Recursice merger → 3 way

- happens when both branches are diverged
- Git creates a merge commits

```bash
git checkout main
git merge feature/dashboard
//so here it will create a new commit with the two parents
```

## Merge Conflicts  And Resolving Cleanly

Conflicts occur when the same file/line is modified differently

```bash
git checkout main
git merge feature/profile
//resulting into a conflict 

the conflict looks like this
<<<<<<< HEAD
code from main
=======
code from feature
>>>>>>> feature/profile
```

So we can fix this manually then just stage and commit the file

```bash
git add file.js
git commit 
so this will now finalize the merge conflict
```

## Git Merge —squash

- combines all commits from a branch into a single commit
- Usefull for cleaning history

```bash
git checkout main
git merge --squash feature/cart
git commit -m "Add shopping cart feature"
```

## Usefull Commands

```bash
git branch -d feature/cart 
//safe to delete if u finished merging

git branch -D feature/cart
//force delete even if not merged

git log --merges --oneline
//shows the merged history

gitk -- all
//visualize with GUI
```

[
**Branching & Merging Practice Script**](https://www.notion.so/Branching-Merging-Practice-Script-264b532183ad80179a41cd8671c9d54f?pvs=21)