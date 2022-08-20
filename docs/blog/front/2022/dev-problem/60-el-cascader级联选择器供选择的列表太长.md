---
title: el-cascader级联选择器供选择的列表太长
date: 2022-06-15
cover: https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/devproblem.jpg
tags:
 - 前端
 - dev-problem
categories:
 -  dev-problem
---

element-ui在2.13.0版本中添加了el-cascader[级联](https://so.csdn.net/so/search?q=级联&spm=1001.2101.3001.7020)选择器多选功能,但是在显示数据列表时太长了,超过了浏览器高度,导致列表上面的数据看不到

在我们的全局global.css中添加

```css
.el-cascader-menu {
height: 200px;
}
```

