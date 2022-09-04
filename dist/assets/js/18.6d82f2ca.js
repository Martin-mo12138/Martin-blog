(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{406:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"_3、数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、数据类型"}},[s._v("#")]),s._v(" 3、数据类型")]),s._v(" "),n("p",[s._v("简单数据类型\nNumber    数字类型；(不区分整数、浮点数、特殊值，都是Number类型)\nString    字符串类型；\nundefined undefined类型；(表示未定义)\nBoolean   布尔类型；(只有true和false两个字面量的值，必须是小写字母)\nnull      null类型；(本身是一个数据，从逻辑较多，null值表示一个空对象指针)(如果定义的变量准备在将来用于保存对象，最好将变量初始化为null)\n另外，还有复杂数据类型\nObject    对象类型")]),s._v(" "),n("h5",{attrs:{id:"检测数据类型的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检测数据类型的方法"}},[s._v("#")]),s._v(" 检测数据类型的方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script>\n    console.log(typeof(1)); \n    console.log(typeof(infinity));\n    console.log(typeof("1"))；\n    console.log(typeof(undefined));\n    console.log(typeof(true));\n    console.log(typeof(null));\n    var a = "123"\n    console.log(typeof(a));\n    \x3c!-- 也可以typeof *的形式 --\x3e\n    console.log(typeof null);\n    var a = "123"\n    console.log(typeof a);\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("推荐使用带括号的第一个方法，第二个方法会遇到下列情况")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script>\n    console.log(typeof(1+2));\n    console.log(typeof 1+2);\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://gitee.com/Mxinzhijie/lgnote-image/blob/master/js-part-1/dateTest.jpg",alt:"Image text"}})]),s._v(" "),n("h5",{attrs:{id:"转换成字符串类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转换成字符串类型"}},[s._v("#")]),s._v(" 转换成字符串类型")]),s._v(" "),n("p",[s._v("1、数据.toString()方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script>\n    console.log(true.toString());\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("2、String(数据)方法，有些值不能toString(),这个时候可以使用String()。比如：undefined和null")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script>\n    console.log(String(23));\n    console.log(String(undefined));\n    console.log(String(null));\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v('3、+号拼接字符串方式，num + ""，当+两边一个操作符 是字符串类型，一个操作符是其他类型的时候，会先把其他类型转换成字符串再进行字符串拼接，返回字符串；')]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script>\n    console.log("1"+2);\n    \x3c!-- 若不想带数字可以引空字符串 --\x3e\n    console.log(""+true);\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h5",{attrs:{id:"转换成数值类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转换成数值类型"}},[s._v("#")]),s._v(" 转换成数值类型")]),s._v(" "),n("p",[n("font",{attrs:{color:"darkblue"}},[s._v("方法一")]),s._v("\n转型函数Number()可以用于任何数据类型，将其他数据类型转为数字\n1、字符串：纯数字→对应数字；空字符串和空白字符串→0；非空非纯数字字符串→NaN；")],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script>\n    console.log(Number("123")); →123\n    console.log(Number("")); →0\n    console.log(Number(" ")); →0\n    console.log(Number("123abc")); →NaN\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("2、布尔值：true→1；false→0；")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script>\n    console.log(Number(true)); →1\n    console.log(Number(false)); →0\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("3、undefined：转为NaN；")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script>\n    console.log(Number(undefined)); →NaN\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("4、null：转为0")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script>\n    console.log(Number(null)); →0\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("font",{attrs:{color:"darkblue"}},[s._v("方法二")]),s._v("\nparseInt()方法：字符串转整数方法\n作用：第一，对浮点数进行取证操作；第二，将字符串转为整数数字。\n①对数字取整功能，直接舍弃小数部分，只保留整数；")],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<script>\n    console.log(parseInt(23.45)); →23\n<\/script>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("②将字符串转为整数数字，也包含取整功能；\n字符串中，必须是纯数字字符串，或者数字字符开头的字符串，才能转换为正常数字，且支取整数部分，如果不是数字打头的字符串，会转换为NaN。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script>\n    console.log(parseInt("123.45"));  →123\n    console.log(parseInt("123.46abc"));   →123\n    console.log(parseInt("a123.46abc"));   →NaN\n    console.log(parseInt(" "));   →NaN\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("font",{attrs:{color:"darkblue"}},[s._v("方法三")]),s._v("\nparseFloat()方法：字符串转浮点数方法\n作用：将字符串转为浮点数数字；\n要求：满足浮点数数字字符必须在字符串开始，如果不在开始返回值都是NaN；")],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script>\n    console.log(parseFloat("23.45"));  →23.45\n    console.log(parseFloat("23.45abc")); →23.45\n    console.log(parseFloat("a23.45abc")); →NaN\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h5",{attrs:{id:"转换成布尔类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转换成布尔类型"}},[s._v("#")]),s._v(" 转换成布尔类型")]),s._v(" "),n("p",[s._v('转型函数Boolean()可以用于任何数据类型，将其他数据类型转为布尔类型的值\n转为false：NaN、0、""空字符串、null、undefined；\n转为true：非0 非NaN数字、非空字符串；')]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script>\n    console.log(Boolean(NaN));\n    console.log(Boolean(0));\n    console.log(Boolean(""));\n    console.log(Boolean(NaN));\n    console.log(Boolean(123));\n    console.log(Boolean("123"));\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h5",{attrs:{id:"转换数据类型的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转换数据类型的应用"}},[s._v("#")]),s._v(" 转换数据类型的应用")]),s._v(" "),n("p",[s._v("例如：利用变量接受prompt()语句返回的用户输入数据，检测数据类型后，得到的是"),n("font",{attrs:{color:"red"}},[s._v("字符串类型")]),s._v("；如果想要获取的是数字类型的数据，则需要先将得到的字符串转为数字，避免出险字符串参与出现运算的情况")],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<script>\n    var num = parseInt(prompt("请输入你的年龄"));\n    \x3c!-- prompt语句可以返回用户输入的数据 --\x3e\n    var age = num + 50;\n    \x3c!-- 或 --\x3e\n    var num = prompt("请输入你的年龄")；\n    num = parseInt(num) + 50;\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h5",{attrs:{id:"谷歌浏览器控制台颜色区分数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#谷歌浏览器控制台颜色区分数据类型"}},[s._v("#")]),s._v(" 谷歌浏览器控制台颜色区分数据类型")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("字符串")]),s._v(" "),n("th",[s._v("黑色")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("数值")]),s._v(" "),n("td",[s._v("蓝色")])]),s._v(" "),n("tr",[n("td",[s._v("布尔")]),s._v(" "),n("td",[s._v("蓝色")])]),s._v(" "),n("tr",[n("td",[s._v("undefined")]),s._v(" "),n("td",[s._v("灰色")])]),s._v(" "),n("tr",[n("td",[s._v("null")]),s._v(" "),n("td",[s._v("灰色")])])])]),s._v(" "),n("hr")])}),[],!1,null,null,null);n.default=t.exports}}]);