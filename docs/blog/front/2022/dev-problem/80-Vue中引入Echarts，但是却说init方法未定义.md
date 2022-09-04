---
title: Vue中引入Echarts，但是却说init方法未定义
date: 2022-06-30
cover: https://pic.imgdb.cn/item/630b5e6716f2c2beb17bd66f.jpg
tags:
 - 前端
 - dev-problem
categories:
 -  dev-problem
---


TypeError: Cannot read properties of undefined (reading ‘init‘)

解决办法：

> 将`import echarts from 'echarts'` 的引入方式改为：`import * as echarts from 'echarts'`

```vue
<script>
import * as echarts from 'echarts'
</script>
```

