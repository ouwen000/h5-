
var infos = [
  //主页
  { all: 'https://img.wenfree.cn/wey/wey_home_01.jpg', down:'https://img.wenfree.cn/wey/Arrow_Down.png' },
  //视频
  { 
    title:'https://img.wenfree.cn/wey/1080B_02.jpg',
    content: { 
      bg: "https://img.wenfree.cn/wey/bg-top.jpg", 
      video: 'https://img.wenfree.cn/wey/wey_2_1.mp4'
      },
    down: 'https://img.wenfree.cn/wey/Arrow_Down.png'
  },
  //幻灯
  { 
    title: 'https://img.wenfree.cn/wey/1080B_04.jpg', 
    swiper:[
      {
        url: [
          'https://img.wenfree.cn/wey/top_silder_01.png',
          'https://img.wenfree.cn/wey/top_silder_02.png',
          'https://img.wenfree.cn/wey/top_silder_03.png'
        ], 
      },
      {
        url: [
          'https://img.wenfree.cn/wey/hdb1.jpg',
          'https://img.wenfree.cn/wey/hdb2.jpg',
          'https://img.wenfree.cn/wey/hdb3.jpg'
        ],
      }
    ]
  },
  //填资料
  {
    title: 'https://img.wenfree.cn/wey/1080B_07.jpg',
    content:{
      background: 'https://img.wenfree.cn/wey/bg-bottom.jpg',
      top:'https://img.wenfree.cn/wey/top-icon.png',
      extra: [
        { label: '姓名', type: 'text', placeholder: '请输入您的姓名', data: 'name' },
        { label: '性别', type: 'picker', placeholder: '请选择', data: 'selGender' },
        { label: '电话', type: 'text', placeholder: '请输入您的电话', data: 'phone' },
        { label: '省份', type: 'picker', placeholder: '请选择', data: 'selProv' },
        { label: '城市', type: 'picker', placeholder: '请选择', data: 'selCity' },
        { label: '经销商', type: 'picker', placeholder: '请选择您的经销商', data: 'selSsss' },
        { label: '我已经阅读并接受个人信息保护', type: 'checkbox', label2: '法律声明*', data: 'apply' },
        { label: '提交', type: 'button', event: '' },
      ]
    }
  }
];

var gender = ['先生', '女士'];

var apiUrls = [
  'https://www.wey.com/index.php?m=tiyan&c=index&a=province2',
  'https://www.wey.com/index.php?m=tiyan&c=index&a=city2&b=',
  'https://www.wey.com/index.php?m=tiyan&c=index&a=distributor2&b='
];

module.exports = {
  // region: region,
  gender: gender,
  dataInfos: infos,
  // lawDesc: lawDesc,
  apiUrls: apiUrls
};