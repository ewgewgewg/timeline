const GermanyPeriods = [
  //Frankish
  //Carolingian
  {
    name: "Charlemagne",
    flows: { "Holy Roman Empire": true, Carolingian: true },
    start: 800,
    end: 814,
    link: "https://en.wikipedia.org/wiki/Charlemagne",
  },
  {
    name: "Louis I",
    flows: { "Holy Roman Empire": true, Carolingian: true },
    start: 813,
    end: 840,
    link: "https://en.wikipedia.org/wiki/Louis_the_Pious",
  },
  {
    name: "Lothair I",
    flows: { "Holy Roman Empire": true, Carolingian: true },
    start: 823,
    end: 855,
    link: "https://en.wikipedia.org/wiki/Lothair_I",
  },
  {
    name: "Louis II",
    flows: { "Holy Roman Empire": true, Carolingian: true },
    start: 855,
    end: 875,
    link: "https://en.wikipedia.org/wiki/Louis_II_of_Italy",
  },
  {
    name: "Charles II",
    flows: { "Holy Roman Empire": true, Carolingian: true },
    start: 875,
    end: 877,
    link: "https://en.wikipedia.org/wiki/Charles_the_Bald",
  },
  {
    name: "Charles III",
    flows: { "Holy Roman Empire": true, Carolingian: true },
    start: 881,
    end: 888,
    link: "https://en.wikipedia.org/wiki/Charles_the_Fat",
  },
  //Restoration
  //Ottonian
  {
    name: "Otto I",
    flows: { "Holy Roman Empire": true, Ottonian: true },
    start: 936,
    end: 973,
    note: "emperor from 962",
    link: "https://en.wikipedia.org/wiki/Otto_I,_Holy_Roman_Emperor",
  },
  {
    name: "Otto II",
    flows: { "Holy Roman Empire": true, Ottonian: true },
    start: 961,
    end: 983,
    note: "emperor from 967",
    link: "https://en.wikipedia.org/wiki/Otto_II,_Holy_Roman_Emperor",
  },
  {
    name: "Otto III",
    flows: { "Holy Roman Empire": true, Ottonian: true },
    start: 983,
    end: 1002,
    note: "emperor from 996",
    link: "https://en.wikipedia.org/wiki/Otto_III,_Holy_Roman_Emperor",
  },
  {
    name: "Henry II",
    flows: { "Holy Roman Empire": true, Ottonian: true },
    start: 1002,
    end: 1024,
    note: "emperor from 1014",
    link: "https://en.wikipedia.org/wiki/Henry_II,_Holy_Roman_Emperor",
  },
  //Salian
  {
    name: "Conrad II",
    flows: { "Holy Roman Empire": true, Salian: true },
    start: 1024,
    end: 1039,
    note: "emperor from 1027",
    link: "https://en.wikipedia.org/wiki/Conrad_II,_Holy_Roman_Emperor",
  },
  {
    name: "Henry III",
    flows: { "Holy Roman Empire": true, Salian: true },
    start: 1028,
    end: 1056,
    note: "emperor from 1046",
    link: "https://en.wikipedia.org/wiki/Henry_III,_Holy_Roman_Emperor",
  },
  {
    name: "Henry IV",
    flows: { "Holy Roman Empire": true, Salian: true },
    start: 1054,
    end: 1106,
    note: "emperor from 1056",
    link: "https://en.wikipedia.org/wiki/Henry_IV,_Holy_Roman_Emperor",
  },
  {
    name: "Henry V",
    flows: { "Holy Roman Empire": true, Salian: true },
    start: 1099,
    end: 1125,
    note: "emperor from 1111",
    link: "https://en.wikipedia.org/wiki/Henry_V,_Holy_Roman_Emperor",
  },
  //Supplinburg
  {
    name: "Lothair II",
    flows: { "Holy Roman Empire": true, Salian: true },
    start: 1125,
    end: 1137,
    note: "emperor from 1133",
    link: "https://en.wikipedia.org/wiki/Lothair_II,_Holy_Roman_Emperor",
  },
  //Staufen
  {
    name: "Frederick I",
    flows: { "Holy Roman Empire": true, Staufen: true },
    start: 1152,
    end: 1190,
    note: "emperor from 1155",
    link: "https://en.wikipedia.org/wiki/Frederick_I,_Holy_Roman_Emperor",
  },
  {
    name: "Henry VI",
    flows: { "Holy Roman Empire": true, Staufen: true },
    start: 1169,
    end: 1197,
    note: "emperor from 1191",
    link: "https://en.wikipedia.org/wiki/Henry_VI,_Holy_Roman_Emperor",
  },
  //Welf
  {
    name: "Otto IV",
    flows: { "Holy Roman Empire": true, Staufen: true },
    start: 1198,
    end: 1215,
    note: "emperor from 1209",
    link: "https://en.wikipedia.org/wiki/Otto_IV,_Holy_Roman_Emperor",
  },
  //Staufen
  {
    name: "Frederick II",
    flows: { "Holy Roman Empire": true, Staufen: true },
    start: 1212,
    end: 1250,
    note: "emperor from 1220",
    link: "https://en.wikipedia.org/wiki/Frederick_II,_Holy_Roman_Emperor",
  },
  //break
  //Habsburg
  {
    name: "Frederick III",
    flows: { "Holy Roman Empire": true, Habsburg: true },
    start: 1440,
    end: 1493,
    note: "emperor from 1452",
    link: "https://en.wikipedia.org/wiki/Frederick_III,_Holy_Roman_Emperor",
  },
  {
    name: "Maximilian I",
    flows: { "Holy Roman Empire": true, Habsburg: true },
    start: 1486,
    end: 1519,
    note: "emperor from 1508",
    link: "https://en.wikipedia.org/wiki/Maximilian_I,_Holy_Roman_Emperor",
  },
  {
    name: "Charles V",
    flows: { "Holy Roman Empire": true, Habsburg: true },
    start: 1519,
    end: 1556,
    note: "emperor from 1519",
    link: "https://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor",
  },
  {
    name: "Ferdinand I",
    flows: { "Holy Roman Empire": true, Habsburg: true },
    start: 1531,
    end: 1564,
    note: "emperor from 1556",
    link: "https://en.wikipedia.org/wiki/Ferdinand_I,_Holy_Roman_Emperor",
  },
  {
    name: "Maximilian II",
    flows: { "Holy Roman Empire": true, Habsburg: true },
    start: 1562,
    end: 1576,
    note: "emperor from 1564",
    link: "https://en.wikipedia.org/wiki/Maximilian_II,_Holy_Roman_Emperor",
  },
  {
    name: "Rudolph II",
    flows: { "Holy Roman Empire": true, Habsburg: true },
    start: 1575,
    end: 1612,
    note: "emperor from 1576",
    link: "https://en.wikipedia.org/wiki/Rudolf_II,_Holy_Roman_Emperor",
  },
  //break
  //Prussia
  {
    name: "Frederick I",
    flows: { Prussia: true },
    start: 1701,
    end: 1713,
    link: "https://en.wikipedia.org/wiki/Frederick_I_of_Prussia",
  },
  {
    name: "Frederick William I",
    flows: { Prussia: true },
    start: 1713,
    end: 1740,
    link: "https://en.wikipedia.org/wiki/Frederick_William_I_of_Prussia",
  },
  {
    name: "Frederick II",
    flows: { Prussia: true },
    start: 1740,
    end: 1786,
    link: "https://en.wikipedia.org/wiki/Frederick_the_Great",
  },
  {
    name: "Frederick William II",
    flows: { Prussia: true },
    start: 1786,
    end: 1797,
    link: "https://en.wikipedia.org/wiki/Frederick_William_II_of_Prussia",
  },
  {
    name: "Frederick William III",
    flows: { Prussia: true },
    start: 1797,
    end: 1840,
    link: "https://en.wikipedia.org/wiki/Frederick_William_III_of_Prussia",
  },
  {
    name: "Frederick William IV",
    flows: { Prussia: true },
    start: 1840,
    end: 1861,
    link: "https://en.wikipedia.org/wiki/Frederick_William_IV_of_Prussia",
  },
  {
    name: "William I",
    flows: { Prussia: true },
    start: 1861,
    end: 1871,
    link: "https://en.wikipedia.org/wiki/William_I,_German_Emperor",
  },
  //Germany
  {
    name: "William I",
    flows: { Germany: true, Prussia: true },
    start: 1871,
    end: 1888,
    link: "https://en.wikipedia.org/wiki/William_I,_German_Emperor",
  },
  {
    name: "Friedrick III",
    flows: { Germany: true, Prussia: true },
    start: 1888,
    end: 1888,
    link: "https://en.wikipedia.org/wiki/Frederick_III,_German_Emperor",
  },
  {
    name: "William II",
    flows: { Germany: true, Prussia: true },
    start: 1888,
    end: 1918,
    link: "https://en.wikipedia.org/wiki/Wilhelm_II,_German_Emperor",
  },
];

export default GermanyPeriods;
