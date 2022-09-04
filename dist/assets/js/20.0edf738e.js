(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{411:function(s,a,n){"use strict";n.r(a);var e=n(0),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"表达式和语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表达式和语句"}},[s._v("#")]),s._v(" 表达式和语句")]),s._v(" "),a("p",[s._v("表达式：\n一个表达式可以产生一个值，有可能是运算、函数调用、字面量；\n表达式可以放在任何需要值的地方\n特点："),a("font",{attrs:{color:"red"}},[s._v("表达式会先执行出一个结果，然后再参与其他程序；")]),s._v("\n语句：\n可以理解为一个行为，一个程序有很多个语句组成，一般情况下分号，分割一个个语句；语句可以认为是给计算机的一个指令，执行这段代码；")],1),s._v(" "),a("h3",{attrs:{id:"_1、条件分支语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、条件分支语句"}},[s._v("#")]),s._v(" 1、条件分支语句")]),s._v(" "),a("h5",{attrs:{id:"if语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if语句"}},[s._v("#")]),s._v(" if语句")]),s._v(" "),a("p",[s._v("作用：通过某个指定的判断条件，决定走哪个分支的代码结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<scirpt>\n    if (condition expression) {\n        statement1; →ce ture\n    } else {\n        statement2; →ce false\n    }\n</scirpt>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script>\n    var s = parseFloat(prompt("请输入你的成绩"))；\n    if (s >= 60) {\n        alert ("及格");\n    } else {\n        alert("不及格")；\n    }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("if语句可以不带else使用，如果条件判断为false，则不执行结构体\n"),a("font",{attrs:{color:"red"}},[s._v("\n注意，如果结构体是单行语句可以省略{ }不写；")])],1),s._v(" "),a("h6",{attrs:{id:"多分支if语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多分支if语句"}},[s._v("#")]),s._v(" 多分支if语句")]),s._v(" "),a("p",[s._v("结构：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    if (条件1) {\n        满足1，结构体1\n    } else if (条件2) {\n        不满足1且满足2，结构体2\n    } else if (条件3) {\n        不满足1且不满足2且满足3结构体3\n    } else {\n        均不满足，结构体4\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("有的时候可以化简")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    if (条件1) {\n        满足1，结构体1\n    } else if (条件2) {\n        满足2，结构体2  不满足1，就往下走，走到2满足了，跳出\n    } else if (条件3) {\n        满足3结构体3\n    } else {\n        均不满足，结构体4\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h6",{attrs:{id:"嵌套if语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套if语句"}},[s._v("#")]),s._v(" 嵌套if语句")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script>\n    var sex = prompt("请输入您的性别","男")\n    var age = parseInt(prompt("请输入您的年龄","45"))\n    if ( sex == "男" ) {\n        \x3c!-- 这里一定记得是“==”，不是“=”，单等号是赋值； --\x3e\n        if ( age >= 60 ) {\n            alert("抓紧退休")\n        } else {\n            alert("退鸡毛退")\n        }\n    } else {\n        if ( age >= 55 ) {\n            alert("抓紧退休")\n        } else {\n            alert("退鸡毛退")\n        }\n    }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h5",{attrs:{id:"三元表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三元表达式"}},[s._v("#")]),s._v(" 三元表达式")]),s._v(" "),a("p",[s._v("语法：boolean_expression?true_value:false_value;\n当前面boolean_expression表达式的结果输出为真时，三元表达式输出的结果为true_value位置的内容；当前面boolean_expression表达式的结果输出为假时，三元表达式输出的结果为false_value位置的内容\nture_value和false_value这两个位置的内容可能是表达式，也可能是数据，但三元表达式输出的结果一定是数据；\n给变量赋值，根据条件二选一是，使用三元表达式更简单")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var a = 5;\n    var b = a >= 5 ? 1 : 0;\n    console.log(b); →1\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h5",{attrs:{id:"switch语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch语句"}},[s._v("#")]),s._v(" switch语句")]),s._v(" "),a("p",[s._v("开关语句允许一个程序求一个表达式的值，并且尝试去匹配表达式的值到一个case标签。\n如果匹配成功，这个程序执行相关的语句\n语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    switch (表达式) {\n        case 值1 ：\n                结构体1;\n                break;\n        case 值2 ：\n                结构体2;\n                break;\n        ……\n        default ：\n                结构体n;\n                break;\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("switch：关键字表示开始进入一个开关语句；\n表达式：会求出一个具体的值与case后面的值进行全等于(数据类型+值)匹配；从上往下进行匹配，如果匹配成功，会立即执行这个case后面的语句，直到遇到一个break，跳出整个switch语句；匹配不成功，就跳过case之间的语句，去匹配下一个case；\ncase：意为示例，作为关键字后面必须跟着一个空格，书写匹配的值；\ncase后面的结构体：每个case匹配成功之后要执行的语句；\nbreak：用于打断结构体，直接跳出程序；\ndefault：类似于if语句里的else，如果“表达式”的结果与所有case值都不匹配，则执行default后的结构体;")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script>\n    var xingzuo = prompt("请输入您的星座", "白羊座")\n    switch (xingzuo)  {\n        case "白羊座" :\n            alert("白羊好");\n            break;\n        case "巨蟹座" :\n            alert("巨蟹好");\n            break;\n        case "天蝎座" :\n            alert("天蝎好");\n            break;\n        case "狮子座" :\n            alert("狮子好");\n            break;\n        default :\n            alert("爷累了");\n            break;\n        }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("注意事项：\n1、default可以不写，相当于if语句没有else；\n2、 break关键字：根据结构需要，有时必须在每个case后面都要写，如果不写break，对应case的语句执行后，不会跳出switch，会继续执行下一个case语句，直到遇到break；\n不写break的特殊用法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script>\n    var month = parseInt(prompt("请输入月份", "1"));\n    switch (month) {\n        case 4:\n        case 6:\n        case 9:\n        case 11:\n            alert("这个月有30天");\n            break;\n        case 2:\n            alert("这个月有28天或29天");\n            break;\n        default:\n            alert("这个月有31天");\n            break;\n    }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"_2、循环语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、循环语句"}},[s._v("#")]),s._v(" 2、循环语句")]),s._v(" "),a("h5",{attrs:{id:"for循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for循环"}},[s._v("#")]),s._v(" for循环")]),s._v(" "),a("p",[s._v("for循环是一种"),a("font",{attrs:{color:"orange"}},[s._v("前测试循环语句")]),s._v("，条件为真继续循环，条件为假跳出循环；\nfor循环是一种反复执行一段代码，直到测试条件为假时停止；")],1),s._v(" "),a("h6",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("p",[s._v("呆板语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    for (定义循环变量;变量的最大值或最小值;步长) {\n        循环体；\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script>\n    for(var i = 1; i <= 100 ; i++) {\n        console.log("小明今年"+i+"岁了")\n    }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("for循环执行过程")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script>\n    for( 1 var i = 1; 2 i <= 100 ; 4 i++) {\n       3 console.log("这是上课的第"+i+"天");\n    }\n    5 console.log("毕业啦");\n    console.log(i); i→101\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("1234234234234……2345 重复执行n次234，直到i>100\n"),a("font",{attrs:{color:"red"}},[s._v("\n注意事项：\n1、小括号内部必须有两个分号；\n2、如果2位置语句不写，相当于没有设置入口条件，或者条件永远为真，就会出现死循环；\n3、for循环内可以嵌套if语句；")])],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    for(var i = 1 ; i <= 30 ; i+=4 ) {\n        if ( i % 3 == 0) {\n        console.log(i);  →9  21\n        }\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("4、for循环内也可以套for循环\n5、循环内的变量是全局变量，必须避免循环嵌套时起相同的变量名，内层和外层变量名必须不同，常用的变量名i,j,k;\n")]),s._v(" "),a("h5",{attrs:{id:"do-while循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-while循环"}},[s._v("#")]),s._v(" do while循环")]),s._v(" "),a("p",[s._v("do while循环是一种"),a("font",{attrs:{color:"orange"}},[s._v("后测试循环语句")]),s._v("，会先执行一次结构体，执行完了后才会去判断入口条件，如果条件为真能够继续下一次循环，如果条件为假，跳出循环；\n语法：")],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    do {\n        结构体;\n    } while (条件表达式);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var i = 1;\n    do {\n        console.log(i);\n        i++;\n    } while (i <= 10);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("font",{attrs:{color:"red"}},[a("p",[s._v("1、如果循环中需要循环变量参与，循环变量必须定义在循环外面，否则会被重置;\n2、循环变量自加的过程需要写在{}循环体内部；\n3、如果将循环变量写在结构体内，i的初始值每次都会被重置，容易出现死循环；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    do {\n        var o = 1；\n        console.log(i);\n        i++;\n    } while (i <= 10)；\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("4、变量自加过程写在输出语句前面和后面，结果是不同的；\n5、do while循环即便条件第一次测试就位假，也会执行一次结构体，所以do while循环，至少会执行一次循环体；\n")])]),a("p"),s._v(" "),a("h5",{attrs:{id:"while循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#while循环"}},[s._v("#")]),s._v(" while循环")]),s._v(" "),a("p",[s._v("while循环是一种"),a("font",{attrs:{color:"orange"}},[s._v("前测试循环语句")]),s._v(",在执行循环体之前都要测试入口条件，条件为真继续执行，条件为假直接跳出循环；\n语法：")],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    while (条件表达式) {\n        循环体；\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("当条件表达式为真时，执行循环体，如果为假，跳出循环；")]),s._v(" "),a("font",{attrs:{color:"red"}},[s._v("\n注意事项：\n1、如果需要循环变量参与，必须定义在循环外部，避免重置；\n2、循环变量自加的过程写在循环体内部；\n")]),s._v(" "),a("p",[s._v("小总结：先测试入口条件的循环→while for\n=必须先执行一次结构体的→do while")]),s._v(" "),a("h5",{attrs:{id:"break语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#break语句"}},[s._v("#")]),s._v(" break语句")]),s._v(" "),a("p",[s._v("break语句可以立即停止当前的循环；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    for (var i = 1 ; i <= 50 ; i++ ) {\n        if (i % 5 == 0) {\n            console.log(i); →5 \n            break; \n        }\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果有循环嵌套，内部循环的break想终止整个循环，就需要在break关键字后面空格加一个label名称，换句话说就是告诉他，俺要break谁；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    waiceng : for (var i = 1 ; i <= 4 ; i++ ) {\n        for (var j = 1 ; j <= 4 ; j++) {\n            console.log(i,j);\n            if (j >= 2) {\n                break waiceng;\n            }\n        }\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h5",{attrs:{id:"continue语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continue语句"}},[s._v("#")]),s._v(" continue语句")]),s._v(" "),a("p",[s._v("continue语句表示当前一次的循环数据不是我们想要的，会立即停止当前次的循环，立即进入下一次循环；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    for (var i = 1 ; i <= 30 ; i++) {\n        if (i % 5 = 0) {\n            continue;\n        }\n        console.log(i); →1-30之间，不是5倍数的数字\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果有循环嵌套，内部循环的continue想调过整个本次循环，就需要在continue关键字后面空格加一个label名称，换句话说就是告诉他，俺要continue谁；")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    waiceng : for (var i = 1 ; i <= 30 ; i++) {\n        if (i % 5 = 0) {\n            continue waiceng;\n        }\n        console.log(i); →1-30之间，不是5倍数的数字\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3、穷举思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、穷举思想"}},[s._v("#")]),s._v(" 3、穷举思想")]),s._v(" "),a("p",[s._v("实现方法：for循环+if语句\nfor循环：外层使用for循环进行一一列举；\nif语句：内层用if语句进行判断，筛选需要的数据，如果满足条件就操作数据，不满足添加跳过看下一次循环的数据；\n案例：输出6的约数;(约数：a % b == 0，a叫b的倍数，b叫a的约数)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script>\n    for (var i = 1 ; i <= 6 ; i++) {\n        if(6 % i == 0) {\n            console.log (i + "是6的约数");\n        }\n    }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_4、累加器和累乘器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、累加器和累乘器"}},[s._v("#")]),s._v(" 4、累加器和累乘器")]),s._v(" "),a("p",[s._v("累加器\n求1-10之间所有数字的和")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var j=0;\n    for (var i = 1 ; i <= 10 ; i++) {\n        j += i;\n    }\n    console.log(j);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("累乘器\n求1-10之间所有数字的积")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var j=1;\n    for (var i = 1 ; i <= 10 ; i++) {\n        j *= i;\n    }\n    console.log(j);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var j=1;\n    for (var i = 10; i >= 1 ; i--) {\n        j *= i;\n    }\n    console.log(j);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"水仙花数案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#水仙花数案例"}},[s._v("#")]),s._v(" 水仙花数案例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    for (var i = 100 ; i <= 999 ; i++) {\n        var ge = i % 10, \n        shi = parseInt(i / 10) % 10,\n        bai = parseInt(i / 100);\n        var sum = ge * ge * ge + shi * shi * shi + bai * bai * bai;\n        if ( sum == i ) {\n           console.log(i);\n        }\n    }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);