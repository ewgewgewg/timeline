const ChinaPeriods = [
  {
    name: "Wang Mang",
    flows: { China: true },
    start: 9,
    end: 23,
    link: "https://en.wikipedia.org/wiki/Wang_Mang",
  },
  {
    name: "Gengshi Emperor",
    flows: { China: true, "Han Dynasty": true },
    start: 23,
    end: 25,
    link: "https://en.wikipedia.org/wiki/Gengshi_Emperor",
  },
  {
    name: "Emperor Guangwu",
    flows: { China: true, "Han Dynasty": true },
    start: 25,
    end: 57,
    link: "https://en.wikipedia.org/wiki/Emperor_Guangwu_of_Han",
  },
  {
    name: "Emperor Ming",
    flows: { China: true, "Han Dynasty": true },
    start: 58,
    end: 75,
    link: "https://en.wikipedia.org/wiki/Emperor_Ming_of_Han",
  },
  {
    name: "Emperor Zhang",
    flows: { China: true, "Han Dynasty": true },
    start: 76,
    end: 88,
    link: "https://en.wikipedia.org/wiki/Emperor_Zhang_of_Han",
  },
  {
    name: "Emperor He",
    flows: { China: true, "Han Dynasty": true },
    start: 89,
    end: 105,
    link: "https://en.wikipedia.org/wiki/Emperor_He_of_Han",
  },
  {
    name: "Emperor Shang",
    flows: { China: true, "Han Dynasty": true },
    start: 106,
    end: 106,
    link: "https://en.wikipedia.org/wiki/Emperor_Shang_of_Han",
  },
  {
    name: "Emperor An",
    flows: { China: true, "Han Dynasty": true },
    start: 106,
    end: 125,
    link: "https://en.wikipedia.org/wiki/Emperor_An_of_Han",
  },
  {
    name: "Marquess of Beixiang",
    flows: { China: true, "Han Dynasty": true },
    start: 125,
    end: 125,
    link: "https://en.wikipedia.org/wiki/Marquess_of_Beixiang",
  },
  {
    name: "Emperor Shun",
    flows: { China: true, "Han Dynasty": true },
    start: 125,
    end: 144,
    link: "https://en.wikipedia.org/wiki/Emperor_Shun_of_Han",
  },
  {
    name: "Emperor Chong",
    flows: { China: true, "Han Dynasty": true },
    start: 144,
    end: 145,
    link: "https://en.wikipedia.org/wiki/Emperor_Chong_of_Han",
  },
  {
    name: "Emperor Zhi",
    flows: { China: true, "Han Dynasty": true },
    start: 145,
    end: 146,
    link: "https://en.wikipedia.org/wiki/Emperor_Zhi_of_Han",
  },
  {
    name: "Emperor Huan",
    flows: { China: true, "Han Dynasty": true },
    start: 146,
    end: 168,
    link: "https://en.wikipedia.org/wiki/Emperor_Huan_of_Han",
  },
  {
    name: "Emperor Ling",
    flows: { China: true, "Han Dynasty": true },
    start: 168,
    end: 189,
    link: "https://en.wikipedia.org/wiki/Emperor_Ling_of_Han",
  },
  {
    name: "Emperor Shao",
    flows: { China: true, "Han Dynasty": true },
    start: 189,
    end: 189,
    link: "https://en.wikipedia.org/wiki/Liu_Bian",
  },
  {
    name: "Emperor Xian",
    flows: { China: true, "Han Dynasty": true },
    start: 189,
    end: 220,
    link: "https://en.wikipedia.org/wiki/Emperor_Xian_of_Han",
  },
  //China 618-
  {
    name: "Emperor Gaozu",
    flows: { China: true, "Tang Dynasty": true },
    start: 618,
    end: 626,
    link: "https://en.wikipedia.org/wiki/Emperor_Gaozu_of_Tang",
  },
  {
    name: "Emperor Taizong",
    flows: { China: true, "Tang Dynasty": true },
    start: 627,
    end: 649,
    link: "https://en.wikipedia.org/wiki/Emperor_Taizong_of_Tang",
  },
  {
    name: "Emperor Gaozong",
    flows: { China: true, "Tang Dynasty": true },
    start: 650,
    end: 683,
    link: "https://en.wikipedia.org/wiki/Emperor_Gaozong_of_Tang_China",
  },
  {
    name: "Emperor Zhongzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 684,
    end: 684,
    link: "https://en.wikipedia.org/wiki/Emperor_Zhongzong_of_Tang_China",
  },
  {
    name: "Emperor Ruizong",
    flows: { China: true, "Tang Dynasty": true },
    start: 684,
    end: 690,
    link: "https://en.wikipedia.org/wiki/Emperor_Ruizong_of_Tang_China",
  },
  {
    name: "Wu Zetian",
    flows: { China: true },
    start: 690,
    end: 705,
    link: "https://en.wikipedia.org/wiki/Wu_Zetian",
  },
  {
    name: "Emperor Zhongzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 705,
    end: 710,
    link: "https://en.wikipedia.org/wiki/Emperor_Zhongzong_of_Tang_China",
  },
  {
    name: "Emperor Shang",
    flows: { China: true, "Tang Dynasty": true },
    start: 710,
    end: 710,
    link: "https://en.wikipedia.org/wiki/Emperor_Shang_of_Tang",
  },
  {
    name: "Emperor Ruizong",
    flows: { China: true, "Tang Dynasty": true },
    start: 710,
    end: 712,
    link: "https://en.wikipedia.org/wiki/Emperor_Ruizong_of_Tang_China",
  },
  {
    name: "Emperor Xuanzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 712,
    end: 756,
    link: "https://en.wikipedia.org/wiki/Emperor_Xuanzong_of_Tang_China",
  },
  {
    name: "Emperor Suzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 756,
    end: 762,
    link: "https://en.wikipedia.org/wiki/Emperor_Suzong_of_Tang",
  },
  {
    name: "Emperor Daizong",
    flows: { China: true, "Tang Dynasty": true },
    start: 762,
    end: 779,
    link: "https://en.wikipedia.org/wiki/Emperor_Daizong_of_Tang_China",
  },
  {
    name: "Emperor Dezong",
    flows: { China: true, "Tang Dynasty": true },
    start: 780,
    end: 805,
    link: "https://en.wikipedia.org/wiki/Emperor_Dezong_of_Tang_China",
  },
  {
    name: "Emperor Shunzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 805,
    end: 805,
    link: "https://en.wikipedia.org/wiki/Emperor_Shunzong_of_Tang_China",
  },
  {
    name: "Emperor Xianzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 806,
    end: 820,
    link: "https://en.wikipedia.org/wiki/Emperor_Xianzong_of_Tang_China",
  },
  {
    name: "Emperor Muzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 821,
    end: 824,
    link: "https://en.wikipedia.org/wiki/Emperor_Muzong_of_Tang_China",
  },
  {
    name: "Emperor Jingzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 824,
    end: 826,
    link: "https://en.wikipedia.org/wiki/Emperor_Jingzong_of_Tang_China",
  },
  {
    name: "Emperor Wenzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 826,
    end: 840,
    link: "https://en.wikipedia.org/wiki/Emperor_Wenzong_of_Tang_China",
  },
  {
    name: "Emperor Wuzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 840,
    end: 846,
    link: "https://en.wikipedia.org/wiki/Emperor_Wuzong_of_Tang_China",
  },
  {
    name: "Emperor Xuanzong",
    flows: { China: true, "Tang Dynasty": true },
    start: 846,
    end: 859,
    link: "https://en.wikipedia.org/wiki/Emperor_Xu%C4%81nzong",
  },
  {
    name: "Emperor Yizong",
    flows: { China: true, "Tang Dynasty": true },
    start: 859,
    end: 873,
    link: "https://en.wikipedia.org/wiki/Emperor_Yizong_of_Tang_China",
  },
  {
    name: "Emperor Xizong",
    flows: { China: true, "Tang Dynasty": true },
    start: 873,
    end: 888,
    link: "https://en.wikipedia.org/wiki/Emperor_Xizong_of_Tang_China",
  },
  {
    name: "Emperor Zhaozong",
    flows: { China: true, "Tang Dynasty": true },
    start: 888,
    end: 904,
    link: "https://en.wikipedia.org/wiki/Emperor_Zhaozong_of_Tang_China",
  },
  {
    name: "Emperor Ai",
    flows: { China: true, "Tang Dynasty": true },
    start: 904,
    end: 907,
    link: "https://en.wikipedia.org/wiki/Emperor_Ai_of_Tang_China",
  },
  //Song
  {
    name: "Emperor Taizu",
    flows: { China: true, "Song Dynasty": true },
    start: 960,
    end: 976,
    link: "https://en.wikipedia.org/wiki/Emperor_Taizu_of_Song_China",
  },
  {
    name: "Emperor Taizong",
    flows: { China: true, "Song Dynasty": true },
    start: 976,
    end: 997,
    link: "https://en.wikipedia.org/wiki/Emperor_Taizong_of_Song_China",
  },
  {
    name: "Emperor Zhenzong",
    flows: { China: true, "Song Dynasty": true },
    start: 997,
    end: 1022,
    link: "https://en.wikipedia.org/wiki/Emperor_Zhenzong_of_Song_China",
  },
  {
    name: "Emperor Renzong",
    flows: { China: true, "Song Dynasty": true },
    start: 1022,
    end: 1063,
    link: "https://en.wikipedia.org/wiki/Emperor_Renzong_of_Song_China",
  },
  {
    name: "Emperor Yingzong",
    flows: { China: true, "Song Dynasty": true },
    start: 1063,
    end: 1067,
    link: "https://en.wikipedia.org/wiki/Emperor_Yingzong_of_Song_China",
  },
  {
    name: "Emperor Shenzong",
    flows: { China: true, "Song Dynasty": true },
    start: 1067,
    end: 1085,
    link: "https://en.wikipedia.org/wiki/Emperor_Shenzong_of_Song_China",
  },
  {
    name: "Emperor Zhezong",
    flows: { China: true, "Song Dynasty": true },
    start: 1085,
    end: 1100,
    link: "https://en.wikipedia.org/wiki/Emperor_Zhezong_of_Song_China",
  },
  {
    name: "Emperor Huizong",
    flows: { China: true, "Song Dynasty": true },
    start: 1100,
    end: 1125,
    link: "https://en.wikipedia.org/wiki/Emperor_Huizong_of_Song_China",
  },
  {
    name: "Emperor Qinzong",
    flows: { China: true, "Song Dynasty": true },
    start: 1126,
    end: 1127,
    link: "https://en.wikipedia.org/wiki/Emperor_Qinzong_of_Song_China",
  },
  //Yuan
  {
    name: "Kublai Khan",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1271,
    end: 1294,
    link: "https://en.wikipedia.org/wiki/Kublai_Khan",
  },
  {
    name: "Temür Khan",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1294,
    end: 1308,
    link: "https://en.wikipedia.org/wiki/Tem%C3%BCr_Khan",
  },
  {
    name: "Külüg Khan",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1308,
    end: 1311,
    link: "https://en.wikipedia.org/wiki/K%C3%BCl%C3%BCg_Khan",
  },
  {
    name: "Ayurbarwada Buyantu Khan",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1311,
    end: 1321,
    link: "https://en.wikipedia.org/wiki/Ayurbarwada_Buyantu_Khan",
  },
  {
    name: "Gegeen Khan",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1321,
    end: 1323,
    link: "https://en.wikipedia.org/wiki/Gegeen_Khan",
  },
  {
    name: "Yesün Temür",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1323,
    end: 1328,
    link: "https://en.wikipedia.org/wiki/Yes%C3%BCn_Tem%C3%BCr_(Yuan_dynasty)",
  },
  {
    name: "Ragibagh Khan",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1328,
    end: 1328,
    link: "https://en.wikipedia.org/wiki/Ragibagh_Khan",
  },
  {
    name: "Jayaatu Khan Tugh Temür",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1328,
    end: 1329,
    link: "https://en.wikipedia.org/wiki/Jayaatu_Khan_Tugh_Tem%C3%BCr",
  },
  {
    name: "Khutughtu Khan Kusala",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1329,
    end: 1329,
    link: "https://en.wikipedia.org/wiki/Khutughtu_Khan_Kusala",
  },
  {
    name: "Jayaatu Khan Tugh Temür",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1329,
    end: 1332,
    link: "https://en.wikipedia.org/wiki/Jayaatu_Khan_Tugh_Tem%C3%BCr",
  },
  {
    name: "Rinchinbal Khan",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1332,
    end: 1332,
    link: "https://en.wikipedia.org/wiki/Rinchinbal_Khan",
  },
  {
    name: "Toghon Khan",
    flows: { China: true, Mongol: true, "Yuan Dynasty": true },
    start: 1333,
    end: 1368,
    link: "https://en.wikipedia.org/wiki/Toghon_Tem%C3%BCr",
  },
  //Ming
  {
    name: "Hongwu Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1368,
    end: 1398,
    link: "https://en.wikipedia.org/wiki/Hongwu_Emperor",
  },
  {
    name: "Jianwen Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1398,
    end: 1402,
    link: "https://en.wikipedia.org/wiki/Jianwen_Emperor",
  },
  {
    name: "Yongle Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1402,
    end: 1424,
    link: "https://en.wikipedia.org/wiki/Yongle_Emperor",
  },
  {
    name: "Hongxi Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1424,
    end: 1425,
    link: "https://en.wikipedia.org/wiki/Hongxi_Emperor",
  },
  {
    name: "Xuande Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1425,
    end: 1435,
    link: "https://en.wikipedia.org/wiki/Xuande_Emperor",
  },
  {
    name: "Emperor Yingzong",
    flows: { China: true, "Ming Dynasty": true },
    start: 1435,
    end: 1449,
    link: "https://en.wikipedia.org/wiki/Emperor_Yingzong_of_Ming",
  },
  {
    name: "Jingtai Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1449,
    end: 1457,
    link: "https://en.wikipedia.org/wiki/Jingtai_Emperor",
  },
  {
    name: "Emperor Yingzong",
    flows: { China: true, "Ming Dynasty": true },
    start: 1457,
    end: 1464,
    link: "https://en.wikipedia.org/wiki/Emperor_Yingzong_of_Ming",
  },
  {
    name: "Chenghua Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1464,
    end: 1487,
    link: "https://en.wikipedia.org/wiki/Chenghua_Emperor",
  },
  {
    name: "Hongzhi Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1487,
    end: 1505,
    link: "https://en.wikipedia.org/wiki/Hongzhi_Emperor",
  },
  {
    name: "Zhengde Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1505,
    end: 1521,
    link: "https://en.wikipedia.org/wiki/Zhengde_Emperor",
  },
  {
    name: "Jiaging Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1521,
    end: 1566,
    link: "https://en.wikipedia.org/wiki/Jiajing_Emperor",
  },
  {
    name: "Longqing Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1566,
    end: 1572,
    link: "https://en.wikipedia.org/wiki/Longqing_Emperor",
  },
  {
    name: "Wanli Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1572,
    end: 1620,
    link: "https://en.wikipedia.org/wiki/Wanli_Emperor",
  },
  {
    name: "Taichang Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1620,
    end: 1620,
    link: "https://en.wikipedia.org/wiki/Taichang_Emperor",
  },
  {
    name: "Tianqi Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1620,
    end: 1627,
    link: "https://en.wikipedia.org/wiki/Tianqi_Emperor",
  },
  {
    name: "Chongzhen Emperor",
    flows: { China: true, "Ming Dynasty": true },
    start: 1627,
    end: 1644,
    link: "https://en.wikipedia.org/wiki/Chongzhen_Emperor",
  },
  //Qing
  {
    name: "Huang Taiji",
    flows: { China: true, "Qing Dynasty": true },
    start: 1636,
    end: 1643,
    link: "https://en.wikipedia.org/wiki/Huang_Taiji",
  },
  {
    name: "Shunzhi Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1643,
    end: 1661,
    link: "https://en.wikipedia.org/wiki/Shunzhi_Emperor",
  },
  {
    name: "Kangxi Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1661,
    end: 1722,
    link: "https://en.wikipedia.org/wiki/Kangxi_Emperor",
  },
  {
    name: "Yongzheng Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1722,
    end: 1735,
    link: "https://en.wikipedia.org/wiki/Yongzheng_Emperor",
  },
  {
    name: "Qianlong Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1735,
    end: 1796,
    link: "https://en.wikipedia.org/wiki/Qianlong_Emperor",
  },
  {
    name: "Jiaqing Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1796,
    end: 1820,
    link: "https://en.wikipedia.org/wiki/Jiaqing_Emperor",
  },
  {
    name: "Daoguang Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1820,
    end: 1850,
    link: "https://en.wikipedia.org/wiki/Daoguang_Emperor",
  },
  {
    name: "Xianfeng Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1850,
    end: 1861,
    link: "https://en.wikipedia.org/wiki/Xianfeng_Emperor",
  },
  {
    name: "Tongzhi Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1861,
    end: 1875,
    link: "https://en.wikipedia.org/wiki/Tongzhi_Emperor",
  },
  {
    name: "Guangxu Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1875,
    end: 1908,
    link: "https://en.wikipedia.org/wiki/Guangxu_Emperor",
  },
  {
    name: "Xuantong Emperor",
    flows: { China: true, "Qing Dynasty": true },
    start: 1908,
    end: 1912,
    link: "https://en.wikipedia.org/wiki/Xuantong_Emperor",
  },
];

export default ChinaPeriods;
