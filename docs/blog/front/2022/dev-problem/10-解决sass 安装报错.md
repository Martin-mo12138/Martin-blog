---
title: 解决sass 安装报错，踩坑记
date: 2022-05-20
cover: https://pic.imgdb.cn/item/630b5e6716f2c2beb17bd66f.jpg
tags:
 - 前端
 - dev-problem
categories:
 -  dev-problem
---

1. 不同的 node.js 版本需要安装不同的 `node-sass` 版本。并且要匹配合适的 `node-sass、sass-loader` 版本;

2. 解决办法:

   1. 将`nodejs `版本为改回 14.x，不要使用 16.x 等版本；

   2. 卸载node-sass 和 sass-loader

      ``` 
      npm uninstall node-sass sass-loader
      ```

   3. 安装匹配版本：

      ```
      npm install sass-loader@7.3.1 node-sass@4.14.1  -D
      ```

基本这种设置就能不会报错了。

**小结：安装sass 基本环境最佳匹配 `“nodejs 14.x” “sass-loader@7.3.1” “node-sass@4.14.1”`。**

另外在使用vue-cli创建项目时可以选择dart-sass= =，这个好像能避免这样的问题