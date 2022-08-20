---
title: Vue中使用el-tabs造成页面卡死的问题
date: 2022-06-15
cover: https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/devproblem.jpg
tags:
 - 前端
 - dev-problem
categories:
 -  dev-problem
---


后台管理程序开发过程过程中，遇到了使用el-tabs卡死的问题，el-tabs局部注册，且注册正常

上网查阅到的解决方法为：

>在el-tabs外层用`<el-col :span=24></el-col>`包裹即可

```vue
<template>
	<el-col :span="24">
   <el-tabs v-model="activeName">
     <el-tab-pane label="动态参数" name="many">动态参数</el-tab-pane>
     <el-tab-pane label="静态属性" name="only">静态属性</el-tab-pane>
   </el-tabs>
 </el-col>
</template>
```

