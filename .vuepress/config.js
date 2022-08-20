module.exports = {
  "title": "万事屋的打工仔",
  "description": "万事屋的打工仔,是万事屋内一个热衷于充实自己的菜鸡coder。",
  "dest": "dist",
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang', {
        theme: [
          'wanko'
        ],
        clean: false,
        messages: {
          welcome: '欢迎来到我的博客', home: '来！跟哥回家！', close: '大哥，憋关，求求了'
        },
        messageStyle: { right: '68px', bottom: '290px' },
        width: 250,
        height: 320
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player", {
        audios: [
          {
            name: '강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          },
          {
            name: '用胳膊当枕头',
            artist: '최낙타',
            url: 'https://assets.smallsunnyfox.com/music/3.mp3',
            cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
          }
        ]
      }
    ],
    [
      "sakura", {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: -1,   // 层级
        img: {
          replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...'     // 绝对路径
        }
      }
    ]
  ],
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "另一个博客",
    //     "desc": "vuepress_blog",
    //     "logo": "https://pan.zealsay.com/blog/logo.png",
    //     "link": "https://www.zealsay.com"
    //   },
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "logo": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://www.recoluan.com"
    //   }
    // ],
    // "valineConfig": {
    //   "appId": "xxx",// your appId
    //   "appKey": "xxx", // your appKey
    //   "avatar": "", //
    //   "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
    //   "requiredFields": ['nick', 'mail'], //设置必填项
    // },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "万事屋的打工仔",
    "authorAvatar": "https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/6b217a3d5378ac07b1af16005c883b9.jpg",
    // "record": "你的备案号 ", //icp备案
    "startYear": "2022",
    "info": "一名追求技术喜欢安静的程序猿",
    "socials": {
      "github": false, //github
      "gitlub": false, //gitlub
      "gitee": false, //gitee
      "jianshu": false, //简书
      "zhihu": false, //知乎
      "toutiao": false, //知乎
      "juejin": false, //掘金
      "segmentfault": false, //思否
      "csdn": false, //CSDN
      "wechat": false, //微信
      "qq": false //QQ
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
    {
      "zh": "年轻就是无限的可能。",
      "en": "Youth means limitless possibilities."
    },
    {
      "zh": "真正的梦就是现实的彼岸。",
      "en": "Real dream is the other shore of reality."
    },
    {
      "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
      "en": "Don't worry about the vague future, just strive for the clear present."
    },
    {
      "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
      "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
    }, {
      "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
      "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
    },
    {
      "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
      "en": "Life without regret, we can only do our best to not to regret."
    }
    ],
    "covers": [
      'https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/7.jpg',
      'https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/1.jpg',
      'https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/2.jpg',
      'https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/3.jpg',
      'https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/4.jpg',
      'https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/5.jpg',
      'https://cdn.jsdelivr.net/gh/Martin-mo12138/picbed/8.jpg'
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}