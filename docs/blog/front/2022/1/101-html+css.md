---
title: HTML学习笔记
date: 2022-01-15
cover: https://pic.imgdb.cn/item/630b5e6a16f2c2beb17bd98b.jpg
tags:
 - 前端
 - HTML
 - CSS
categories:
 -  学习笔记
---

#  移动端网页应用项目及开发

## 移动web开发基础

### 1. 兼容移动端主流浏览器，处理webkit内核即可；

### 2. 作为开发者无需关注分辨率，因为常用的尺寸单位是px，后续有手段解决；

### 3. 常见移动端屏幕尺寸可参考：https://material.io/devices；

    前端开发不建议纠结dp、doi、pt、ppi等单位；关注dpr，物理像素比；

### 4. 移动端调试方法：

    1、Chrome DevTools的模拟手机调试（目前阶段使用）；
    2、搭建本地web服务器，手机和服务器一个局域网内，通过手机访问服务器；
    3、使用外网服务器访问；

### 5. 视口

    1. 布局视口  网页布置的视口
    2. 视觉视口  手机看到的视口
    3. 理想视口  手动添加<meta>视口标签通知浏览器操作，
    添加<meta>视口标签的目的：布局视口的宽度应该与理想视口的宽度一致，
    简单理解就是设备有多宽，我们布局的视口就有多宽

### 6. 视口标签 

```
<meta name="viewport" content="width=device-width, user-scalable=no
,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0">
```

        视口宽度和设备保持一致
        不允许用户自行缩放
        视口的默认缩放比例1.0
        最大允许的缩放比例1.0
        最小允许的缩放比例1.0 

### 7. 多倍图

    问题：如果一个50*50px的图片放到Retina手机屏幕中，占有的物理像素点是100*100个，会造成图片模糊
    解决方法：使用一个本身就是100*100px 的图片去进行制作，替换原来的图片，然后设置图片的尺寸为50*50px
    启动图尺寸用来切图，开发尺寸用来切完图设置图的大小

### 8. 移动端主流方案

    1.单独制作移动端页面（主流）：京东商城手机版，淘宝触屏版，苏宁易购手机版，携程网手机版等；通常在网址域名前添加m，可以打开移动端；
        流式布局（百分比布局）；
        flex弹性布局（强烈推荐）； 
        less+rem+媒体查询布局；
        混合布局；
    2.响应式页面兼容移动端（其次）：三星手机官网等；
        媒体查询；
        bootstrap；

### 9.CSS初始化 normalize.css

    是可定制的CSS文件，他让不同的浏览器在渲染网页元素的时候形式更统一
    优点：保护了有价值的默认值；修复了浏览器的bug，解决了浏览器不一致的默认样式，提高了易用性，且具有详细的解释文档；
    官网地址：http://neocolas.github.io/normalize.css

### 10.CSS3盒子模型box-sizing：border-box

    移动端可以全部使用border-box
    PC端如果完全需要兼容，就用content-box，如果不考虑兼容性，就选择border-box

### 11. 特殊样式

    1、<!-- 点击高亮清除 -->
        -webkit-tap-highlight-color:transparent;
    2、<!-- 在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式 -->
        -webkit-appearance:none;
    3、<!-- 禁用长按页面时弹出菜单 -->
        img,a{-webkit-touch-callout:none;}

### 12.流式布局（百分比布局）

    通过将盒子的宽度设置成百分比，从而根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充
    1、max（min）-width最大（小）宽度；max（min）-height最大（小）高度
    2、京东顶部的fix内容一般以iphone6.7.8为标准制作，设置了10px，但是有的是二倍图有的是三倍图，所以大小会有变化

### 13. 二倍精灵图做法

    在firework里面把精灵图等比例缩放为原来的一半；
    之后根据新的大小测量坐标；
    注意代码里面background-size也要写:精灵图原来宽度的一半(是整个画布)；

### 14. 图片技术

    DPG图片压缩技术：京东自主研发，节省用户近50%的浏览流量，极大的提升了用户网页打开的速度，兼容jpeg，实现全平台，全浏览器的兼容，测试和图片和webp的清晰度没有差距
    webp图片格式：谷歌研发，旨在加快图片加载技术，图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器带宽资源和数据空间

### 15. background-image: linear-gradient(0deg, #f1503b, #c82519 50%) 

    这是背景的渐变色属性

## flex布局

###### 1、flex布局

    flex是flexible box的缩写，弹性布局的意思，任何一个容器都可以指定为flex布局
    当父盒子设为flex布局以后，子元素的float、clear和vertical-align属性将失效
    伸缩布局=弹性布局=伸缩盒布局=弹性盒布局=flex布局
    默认情况下，x轴=行=主轴，y轴=列=副轴

###### 2、flex布局父项常见属性

    flex-direction：设置主轴方向
        属性值  row 默认值，左到右
                row-reverse，右到左
                column 上到下
                column-reverse 下到上        
    justify-content：设置主轴上子元素排列方式
        属性值  flex-start 默认值，从头部开始，如果主轴是x轴，则从左到右
                flex-end 从尾部开始排列
                center 在主轴居中对齐（如果主轴是x轴则水平居中）
                space-around 平分剩余空间
                space-between 先两边贴边，再平分剩余空间（重要）
    flex-wrap：设置子元素是否换行
        属性值  nowrap 默认值，不换行
                wrap 换行
    align-content：设置侧轴上的子元素的排列方式（多行）
        属性值  flex-start 在侧轴的头部开始排列
                flex-end 在侧轴的尾部开始排列
                center 在侧轴的中间显示
                space-around 子项在侧轴平分剩余空间
                space-between 子项在侧轴先平均分布在两头，再平分剩余空间
                stretch 设置子项元素高度平分父元素高度
            注：单行情况下无效
    align-items：设置侧轴上的子元素的排列方式（单行）
        该属性是控制子项在侧轴（默认是y轴）上的排列方式
        在子项为单项（单行）的时候使用 
        属性值  flex-start 从上到下
                flex-end 从下到上
                center 挤在一起居中（垂直居中）
                stretch 拉伸（向着远离主轴的方向拉伸）
    flex-flow：复合属性，相当于同时设置了flex-direction盒flex-wrap

###### 3、flex布局子项常见属性

    flex：设置子项的份数，定义子项目分配父盒子的剩余空间，用flex来表示占多少份数。
        属性值 数字，默认值为0，数字1表示占总份数中的1份
    align-self: 控制子项自己在侧轴的排列方式，允许单个项目有与其他项不一样的对齐方式，可覆盖align-items属性
        属性值  默认auto，表示继承父元素的align-items属性，如果没有父元素则等同于stretch
    order: 属性，定义子项的排列顺序（前后顺序）
        属性值  数字，数值越小，排列越靠前，默认为0，如果想往前提，属性值可以负数
            注意：和z-index不一样

## rem适配布局

    rem+媒体查询

#### 1、rem单位

    em：相对单位，参考的是父级元素的字号大小的倍数，如果是2em表示字号的2倍；
    rem是一个相对的单位，类似em，但是em是父元素字体大小；
    rem的基准是相对于<html>元素的字体大小；
    比如：根元素（html）设置font-size=12px；非根元素设置width：2rem；转换为px表示就是24px；
    rem的优势：父元素文字大小可能不一致，但是整个页面只有一个<html>,可以很好的来控制整个页面的元素大小比例。

#### 2、媒体查询

    使用@media查询，可以针对不同的媒体类型定义不同的样式；
    @media可以针对不同的屏幕尺寸设置不同的样式；
    当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面；
    目前针对很多苹果手机、安卓手机、平板等设备都用得到多媒体查询
    媒体查询的 max-width，和min-width都是包含等于的，所以要注意端点的选择

###### 1、语法规范

    1、用@media开头，注意@符号
    2、mediatype媒体类型
    3、关键字and not only
    4、media feature 媒体属性 必须有小括号包含：@media mediatype and丨not丨only （media feature） {CSS-Code}
    5、only为了解决某一些浏览器内的不兼容问题出现的

###### 2、根据页面宽度改变背景颜色

    1、按照从大到小或者从小到大的思路；
    2、注意我们有最大值max-width和最小值min-width都是包含等于的；
    3、当屏幕小于540像素，背景颜色变为蓝色（x<=539）;
    4、当屏幕大于等于540并且小于等于969像素的时候背景颜色为绿色（540=<x<969）;
    5、当屏幕大于等于970像素的时候，背景颜色为红色（x>=970）
    注意：为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写，但是我们最喜欢的还是从小到大来写，这样代码更简洁

###### 3、引入资源

    示例：<link rel="stylesheet" href="style.css" media="screen and (min-width:400px)">

#### 3、rem适配方案技术使用（市场主流）

    技术方案1：less+媒体查询+rem
                iphone678 750px
                Android 1080px为主
                一般情况下，我们以一套或两套效果图适应大部分的屏幕，放弃极端屏或对其优雅降级，牺牲一些效果，现在基本以750px为准 
                页面元素的单位rem值 = 页面元素值px / html font-size字体大小 
    技术方案2：flexible.js+rem（推荐 ）
    两种方案现在都存在，方案二更简单；

#### 4、更改flexible.js默认字号

```
@media screen and (min-width: 750px) {
    html {
        font-size: 75px !important;
        <!-- 加important是因为html标签的权重在flexible.js下不够高 -->
    }
}
```

## CSS弊端

    css是一门非程序式语言，没有变量，函数，SCOPE（作用域）等概念
    css需要书写大量看似没有逻辑的代码，css冗余度比较高
    不方便维护以及扩展，不利于复用
    css没有很好的计算能力
    非前段开发工程师来讲，往往会因为缺少CSS编写经验而很难写出组织良好且易于维护的css代码

## less

    Less是一门CSS预处理语言，它扩展了CSS的动态特性
    若使用Less，需要先新建一个后缀名为 .less的文件，在这个 .less文件里书写Less语句
    Less文件内，可以导入less文件，方法：在需要引入的less文件内部，写入：@import "文件名（无后缀）"

###### 1、Less变量

    命名规范：必须以@为前缀；
             不能包含特殊字符
             不能以数字开头
             大小写敏感
             如：@color：pink；

###### 2、Less编译

    Less文件不能被html调用，所以需要把 .Less文件编译生成为 .css文件
    推荐方法（node.js）:在当前文件夹，使用cmd命令“lessc style.css>style.css”

###### 3、Less嵌套

```
CSS
#header {
    width:350px;
}
#header .logo {
    width: 300px;
}
等价于
Less
#header{
    width：350px;
    .logo {
        width:300px;
    }
}
```

```
如果遇见（交集丨伪类丨伪元素选择器）
内层选择器的前面没有&符号，则它被解析为父选择器的后代
若有&符号，它就被解析为父元素自身或父元素的伪类
CSS
a:hover {
    color:red;
}
Less
a{
    &:hover {
        color:red;
    }
} 
```

###### 4、Less运算

    任何数字、颜色或者变量都可以参与运算，Less提供了+-*/
    注意：1、参与元算的两个数字，可以一个有单位，一个没单位，最终单位就是唯一的那个单位
        如 width：200px + 50； 计算值为250px
         2、参与运算的两个数字，两个都有单位，最终单位取第一个数字的单位
        如 width：200px + 50px； 计算值为250px
           width:(200rem / 50px)； 计算值为4rem （除法需要加括号）
         3、也可以做变量运算
            @variable1=1px；
            @variable2=2px
            width：@variable1 + @variable2； 计算值为3px
         4、Less运算符左右必须加空格

## 响应式布局

### 响应式开发原理

    就是使用媒体查询针对不同宽度的设备进行布局和样式的设计，从而适配不同设备的目的

### 响应式布局容器

    响应式需要一个父级作为布局容器，来配合子级元素来实现变化效果；
    原理就是在不同屏幕下，通过媒体查询来改变布局容器（版心）的大小，再改变容器内子元素的排列方式和大小，从而实现不同屏幕下，不同的布局样式；
    响应式尺寸划分：
    超小屏幕（手机，小于768px），设置100%；
    小屏幕（平板，大于等于768px），布局容器宽度：750px；
    中等屏幕（桌面显示器，大于等于992px），布局容器宽度：970px；
    大屏幕（大桌面显示器，大于等于1200px），布局容器宽度：1170px；
    也可根据实际情况自己定义

## Bootstrap

    成熟且流行的前端框架之一，3.x.x版本使用的最多，此版本偏向用于开发响应式布局

### Bootstrap使用四部曲

    1、创建文件夹结构；2、创建html骨架结构（参考Bootstrap官网）； 3、引入相关样式文件； 4、书写内容；

### Bootstrap布局容器

    Bootstrap需要为页面内容和栅格系统包裹一个 .container容器
    1、 .container类：响应式布局的容器，固定宽度
                     大屏（>=1200px） -1170px   .col-lg-
                     中屏（>=992px） -970px     .col-md-
                     大屏（>=768px） -750px     .col-sm-
                     超小屏（100%）             .col-xs-
    2、 .container-fluid类：流式布局容器 百分百宽度
                            占据全部视口的容器
                            适合于制作移动端开发页面

### Boostrap栅格系统

    按照不同屏幕划分为1~12等份
    .container最大宽度  类前缀
    大屏（>=1200px）  .col-lg-
    中屏（>=992px）   .col-md-
    小屏（>=768px）   .col-sm-
    超小屏（100%）    .col-xs-
    col-lg-3 占三列
    .container默认有左右15px的padding
    所有栅格里的列也有默认的左右边距
    行（row）可以去除父容器作用15px的边距

```
<div class="container">
    <div class="row"></div>
    <!-- 这个.row类会清楚掉container的左右各15px的边距 -->
</div>
```

<font color=red>每种屏幕都需要设置份数，如果不设置，那么在当前屏幕大小下，就是占所有份；</font>

###### 1、列嵌套

    栅格系统内置的栅格系统将内容再次嵌套，就是把1/12再分12份；

```
<div class="col-sm-4">
    <div class="row">
        <div class="col-sm-6">小列</div>
        <div class="col-sm-6">小列</div>
    </div>
</div>
```

###### 2、列偏移   

    使用 .col-md-offset-份数类可以将列向右偏移（这些类实际上是通过选择器为当前元素增加了左侧margin

###### 3、列排序

    通过使用 .col-md-push-份数往右推和 .col-md-pull-份数往左拉两个类就可以很容易的改变列（column）的顺序

###### 4、响应式工具

| 类名       | 超小屏 | 小屏 | 中屏 | 大屏 |
| ---------- | ------ | ---- | ---- | ---- |
| .hidden-xs | 隐藏   | 可见 | 可见 | 可见 |
| .hidden-sm | 可见   | 隐藏 | 可见 | 可见 |
| .hidden-md | 可见   | 可见 | 隐藏 | 可见 |
| .hidden-lg | 可见   | 可见 | 可见 | 隐藏 |

与之相反的，visible-屏幕大小，是针对不同设备显示某个内容
<font color=red>形如.col-md-X的类名不是更改样式的首选，这是属于Boostrap的默认类名，更改样式倾向于选择具有含义的类名</font>
Bootstrap 功能很强大，涵盖了许多的内容，
如：h的样式，排版，图片是否响应，图片的形状，表格的样式，文字颜色等这些都是可以通过添加类名来实现的，基本上都可以网站的说明查到解决的方法
