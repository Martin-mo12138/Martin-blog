---
title: 关于vue的文件引入
date: 2022-05-25
cover: https://pic.imgdb.cn/item/630b5e6716f2c2beb17bd66f.jpg
tags:
 - 前端
 - dev-problem
categories:
 -  dev-problem
---

对于往外跳转再往内目录比较复杂的，可以从src目录开始往下直接找到要跳转的目录

@代表的是src

````
import '@/styles/index.scss'
````

scss的引入可以采用

```vue
<style lang="scss">
	@import '~@/styles/variables.scss'
<style>
```

