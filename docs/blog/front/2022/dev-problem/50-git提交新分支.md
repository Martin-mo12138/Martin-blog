---
title: git提交新分支
date: 2022-05-30
cover: https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/devproblem.jpg
tags:
 - 前端
 - dev-problem
categories:
 -  dev-problem
---

```powershell
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git branch //查看当前分支
* login
  master
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git checkout -b user //创建新分支并命名为user
Switched to a new branch 'user'
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git branch //查看当前分支
  login
  master
* user
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git status //查看当前分支状态
On branch user
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   .eslintrc.js
        modified:   src/assets/css/global.css
        modified:   src/components/Home.vue
        modified:   src/components/Login.vue
        modified:   src/main.js
        modified:   src/plugins/element.js
        modified:   src/router/index.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/assets/bg.jpg
        src/assets/tx.jpg
        src/components/User/
        src/components/Welcome.vue

no changes added to commit (use "git add" and/or "git commit -a")
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git add . //添加当前分支所有内容到暂存区
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git status //查看当前分支状态
On branch user
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   .eslintrc.js
        new file:   src/assets/bg.jpg
        modified:   src/assets/css/global.css
        new file:   src/assets/tx.jpg
        modified:   src/components/Home.vue
        modified:   src/components/Login.vue
        new file:   src/components/User/User.vue
        new file:   src/components/Welcome.vue
        modified:   src/main.js
        modified:   src/plugins/element.js
        modified:   src/router/index.js

PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git commit -m "完成用户列表功能的开发" //注明提交信息提交到版本库
[user 19743c6] 完成用户列表功能的开发
 11 files changed, 646 insertions(+), 133 deletions(-)
 create mode 100644 src/assets/bg.jpg
 create mode 100644 src/assets/tx.jpg
 create mode 100644 src/components/User/User.vue
 create mode 100644 src/components/Welcome.vue
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git status //查看当前分支状态
On branch user
nothing to commit, working tree clean
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git branch //查看当前分支
  login
  master
* user
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git push -u origin user //新建远程原始分支并推送到远程库
Enumerating objects: 34, done.
Counting objects: 100% (34/34), done.
Delta compression using up to 12 threads
Compressing objects: 100% (16/16), done.
Writing objects: 100% (20/20), 328.68 KiB | 21.91 MiB/s, done.
Total 20 (delta 5), reused 0 (delta 0), pack-reused 0
remote: Powered by GITEE.COM [GNK-6.4]
remote: Create a pull request for 'user' on Gitee by visiting:
remote:     https://gitee.com/Mxinzhijie/vue_shop/pull/new/Mxinzhijie:user...Mxinzhijie:master
To https://gitee.com/Mxinzhijie/vue_shop.git
 * [new branch]      user -> user
branch 'user' set up to track 'origin/user'.
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git branch //查看当前分支
  login
  master
* user
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git checkout master //切换到master主分支
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git branch //查看当前分支
  login
* master
  user
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git merge user //将user合并到master上
Updating 2e1db84..19743c6
Fast-forward
 .eslintrc.js                 |   3 +-
 src/assets/bg.jpg            | Bin 0 -> 268943 bytes
 src/assets/css/global.css    |  10 ++
 src/assets/tx.jpg            | Bin 0 -> 64116 bytes
 src/components/Home.vue      | 159 ++++++++++++++++++++++--
 src/components/Login.vue     | 222 ++++++++++++++++++----------------
 src/components/User/User.vue | 279 +++++++++++++++++++++++++++++++++++++++++++
 src/components/Welcome.vue   |  15 +++
 src/main.js                  |   8 +-
 src/plugins/element.js       |  46 ++++++-
 src/router/index.js          |  37 ++++--
 11 files changed, 646 insertions(+), 133 deletions(-)
 create mode 100644 src/assets/bg.jpg
 create mode 100644 src/assets/tx.jpg
 create mode 100644 src/components/User/User.vue
 create mode 100644 src/components/Welcome.vue
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> git push
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote: Powered by GITEE.COM [GNK-6.4]
To https://gitee.com/Mxinzhijie/vue_shop.git
   2e1db84..19743c6  master -> master
PS C:\Users\65485\Desktop\Vue1\code\vue_shop> 
```