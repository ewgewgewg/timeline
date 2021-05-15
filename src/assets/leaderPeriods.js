//from Wikipedia May 13-14, 2021 unless otherwise stated
//start is start of reign
//end is end of reign

const leaderPeriods = [
  //France
  {
    name: "Henry IV",
    flows: { France: true },
    start: 1589,
    end: 1610,
    link: "https://en.wikipedia.org/wiki/Henry_IV_of_France",
  },
  {
    name: "Louis XIII",
    flows: { France: true },
    start: 1610,
    end: 1643,
    link: "https://en.wikipedia.org/wiki/Louis_XIII_of_France",
  },
  {
    name: "Louis XIV",
    flows: { France: true },
    start: 1643,
    end: 1715,
    link: "https://en.wikipedia.org/wiki/Louis_XIV_of_France",
  },
  {
    name: "Louis XV",
    flows: { France: true },
    start: 1715,
    end: 1774,
    link: "https://en.wikipedia.org/wiki/Louis_XV_of_France",
  },
  {
    name: "Louis XVI",
    flows: { France: true },
    start: 1774,
    end: 1792,
    link: "https://en.wikipedia.org/wiki/Louis_XVI_of_France",
  },
  //Rome
  {
    name: "Augustus",
    flows: { Rome: true },
    start: -26,
    end: 14,
    link: "https://en.wikipedia.org/wiki/Augustus",
  },
  {
    name: "Tiberius",
    flows: { Rome: true },
    start: 14,
    end: 37,
    link: "https://en.wikipedia.org/wiki/Tiberius",
  },
  {
    name: "Caligula",
    flows: { Rome: true },
    start: 37,
    end: 41,
    link: "https://en.wikipedia.org/wiki/Caligula",
  },
  {
    name: "Claudius",
    flows: { Rome: true },
    start: 41,
    end: 54,
    link: "https://en.wikipedia.org/wiki/Claudius",
  },
  {
    name: "Nero",
    flows: { Rome: true },
    start: 54,
    end: 68,
    link: "https://en.wikipedia.org/wiki/Nero",
  },
  {
    name: "Galba",
    flows: { Rome: true },
    start: 68,
    end: 69,
    link: "https://en.wikipedia.org/wiki/Galba",
  },
  {
    name: "Otho",
    flows: { Rome: true },
    start: 69,
    end: 69,
    order: 1,
    link: "https://en.wikipedia.org/wiki/Otho",
  },
  {
    name: "Vitellius",
    flows: { Rome: true },
    start: 69,
    end: 69,
    order: 2,
    link: "https://en.wikipedia.org/wiki/Vitellius",
  },
  {
    name: "Vespasian",
    flows: { Rome: true },
    start: 69,
    end: 79,
    link: "https://en.wikipedia.org/wiki/Vespasian",
  },
  {
    name: "Titus",
    flows: { Rome: true },
    start: 79,
    end: 81,
    link: "https://en.wikipedia.org/wiki/Titus",
  },
  {
    name: "Domitian",
    flows: { Rome: true },
    start: 81,
    end: 96,
    link: "https://en.wikipedia.org/wiki/Domitian",
  },
  {
    name: "Nerva",
    flows: { Rome: true },
    start: 96,
    end: 98,
    link: "https://en.wikipedia.org/wiki/Nerva",
  },
  {
    name: "Trajan",
    flows: { Rome: true },
    start: 98,
    end: 117,
    link: "https://en.wikipedia.org/wiki/Trajan",
  },
  {
    name: "Hadrian",
    flows: { Rome: true },
    start: 117,
    end: 138,
    link: "https://en.wikipedia.org/wiki/Hadrian",
  },
  {
    name: "Antoninus Pius",
    flows: { Rome: true },
    start: 138,
    end: 161,
    link: "https://en.wikipedia.org/wiki/Antoninus_Pius",
  },
  {
    name: "Marcus Aurelius",
    flows: { Rome: true },
    start: 161,
    end: 180,
    link: "https://en.wikipedia.org/wiki/Marcus_Aurelius",
  },
  {
    name: "Lucius Verus",
    flows: { Rome: true },
    start: 161,
    end: 169,
    link: "https://en.wikipedia.org/wiki/Lucius_Verus",
  },
  {
    name: "Commodus",
    flows: { Rome: true },
    start: 180,
    end: 192,
    link: "https://en.wikipedia.org/wiki/Commodus",
  },
  {
    name: "Pertinax",
    flows: { Rome: true },
    start: 192,
    end: 193,
    link: "https://en.wikipedia.org/wiki/Pertinax",
  },
  {
    name: "Didius Julianus",
    flows: { Rome: true },
    start: 193,
    end: 193,
    link: "https://en.wikipedia.org/wiki/Didius_Julianus",
  },
  {
    name: "Septimius Severus",
    flows: { Rome: true },
    start: 193,
    end: 211,
    link: "https://en.wikipedia.org/wiki/Septimius_Severus",
  },
  {
    name: "Caracalla",
    flows: { Rome: true },
    start: 211,
    end: 217,
    link: "https://en.wikipedia.org/wiki/Caracalla",
  },
  {
    name: "Geta",
    flows: { Rome: true },
    start: 211,
    end: 212,
    link: "https://en.wikipedia.org/wiki/Geta_(emperor)",
  },
  {
    name: "Macrinus",
    flows: { Rome: true },
    start: 217,
    end: 218,
    link: "https://en.wikipedia.org/wiki/Macrinus",
  },
  {
    name: "Diadumenian",
    flows: { Rome: true },
    start: 218,
    end: 218,
    link: "https://en.wikipedia.org/wiki/Diadumenian",
  },
  {
    name: "Elagabalus",
    flows: { Rome: true },
    start: 218,
    end: 222,
    link: "https://en.wikipedia.org/wiki/Elagabalus",
  },
  {
    name: "Severus Alexander",
    flows: { Rome: true },
    start: 222,
    end: 235,
    link: "https://en.wikipedia.org/wiki/Severus_Alexander",
  },
  {
    name: "Maximinus Thrax",
    flows: { Rome: true },
    start: 235,
    end: 238,
    link: "https://en.wikipedia.org/wiki/Maximinus_Thrax",
  },
  {
    name: "Gordian I",
    flows: { Rome: true },
    start: 238,
    end: 238,
    order: 1,
    link: "https://en.wikipedia.org/wiki/Gordian_I",
  },
  {
    name: "Gordian II",
    flows: { Rome: true },
    start: 238,
    end: 238,
    order: 2,
    link: "https://en.wikipedia.org/wiki/Gordian_II",
  },
  {
    name: "Pupienus",
    flows: { Rome: true },
    start: 238,
    end: 238,
    order: 3,
    link: "https://en.wikipedia.org/wiki/Pupienus",
  },
  {
    name: "Balbinus",
    flows: { Rome: true },
    start: 238,
    end: 238,
    order: 4,
    link: "https://en.wikipedia.org/wiki/Balbinus",
  },
  {
    name: "Gordian III",
    flows: { Rome: true },
    start: 238,
    end: 244,
    link: "https://en.wikipedia.org/wiki/Gordian_III",
  },
  {
    name: "Philip the Arab",
    flows: { Rome: true },
    start: 244,
    end: 249,
    link: "https://en.wikipedia.org/wiki/Philip_the_Arab",
  },
  {
    name: "Philip II",
    flows: { Rome: true },
    start: 247,
    end: 249,
    link: "https://en.wikipedia.org/wiki/Philip_II_(Roman_emperor)",
  },
  {
    name: "Decius",
    flows: { Rome: true },
    start: 249,
    end: 251,
    link: "https://en.wikipedia.org/wiki/Decius",
  },
  //Russia
  {
    name: "Peter I the Great",
    flows: { Russia: true },
    start: 1721,
    end: 1725,
    link: "https://en.wikipedia.org/wiki/Peter_the_Great",
  },
  {
    name: "Catherine I",
    flows: { Russia: true },
    start: 1725,
    end: 1727,
    link: "https://en.wikipedia.org/wiki/Catherine_I_of_Russia",
  },
  {
    name: "Peter II",
    flows: { Russia: true },
    start: 1727,
    end: 1730,
    link: "https://en.wikipedia.org/wiki/Peter_II_of_Russia",
  },
  {
    name: "Anna Ioannovna",
    flows: { Russia: true },
    start: 1730,
    end: 1740,
    link: "https://en.wikipedia.org/wiki/Anna_of_Russia",
  },
  {
    name: "Ivan VI",
    flows: { Russia: true },
    start: 1740,
    end: 1741,
    link: "https://en.wikipedia.org/wiki/Ivan_VI_of_Russia",
  },
  {
    name: "Elizabeth Petrovna",
    flows: { Russia: true },
    start: 1741,
    end: 1761,
    link: "https://en.wikipedia.org/wiki/Elizabeth_Petrovna",
  },
  {
    name: "Peter III",
    flows: { Russia: true },
    start: 1761,
    end: 1762,
    link: "https://en.wikipedia.org/wiki/Peter_III_of_Russia",
  },
  {
    name: "Catherine II the Great",
    flows: { Russia: true },
    start: 1762,
    end: 1796,
    link: "https://en.wikipedia.org/wiki/Catherine_the_Great",
  },
  {
    name: "Paul I",
    flows: { Russia: true },
    start: 1796,
    end: 1801,
    link: "https://en.wikipedia.org/wiki/Paul_I_of_Russia",
  },
  {
    name: "Alexander I",
    flows: { Russia: true },
    start: 1801,
    end: 1825,
    link: "https://en.wikipedia.org/wiki/Alexander_I_of_Russia",
  },
  {
    name: "Nicholas I",
    flows: { Russia: true },
    start: 1825,
    end: 1855,
    link: "https://en.wikipedia.org/wiki/Nicholas_I_of_Russia",
  },
  {
    name: "Alexander II",
    flows: { Russia: true },
    start: 1855,
    end: 1881,
    link: "https://en.wikipedia.org/wiki/Alexander_II_of_Russia",
  },
  {
    name: "Alexander III",
    flows: { Russia: true },
    start: 1881,
    end: 1894,
    link: "https://en.wikipedia.org/wiki/Alexander_III_of_Russia",
  },
  {
    name: "Nicolas II",
    flows: { Russia: true },
    start: 1894,
    end: 1917,
    link: "https://en.wikipedia.org/wiki/Nicholas_II_of_Russia",
  },
  {
    name: "Georgy Lvov",
    flows: { Russia: true },
    start: 1917,
    end: 1917,
    order: 1,
    link: "https://en.wikipedia.org/wiki/Georgy_Lvov",
  },
  {
    name: "Alexander Kerensky",
    flows: { Russia: true },
    start: 1917,
    end: 1917,
    order: 2,
    link: "https://en.wikipedia.org/wiki/Alexander_Kerensky",
  },
  {
    name: "Vladimir Lenin",
    flows: { Russia: true, "Soviet Union": true },
    start: 1917,
    end: 1924,
    link: "https://en.wikipedia.org/wiki/Vladimir_Lenin",
  },
  {
    name: "Joseph Stalin",
    flows: { Russia: true, "Soviet Union": true },
    start: 1924,
    end: 1953,
    link: "https://en.wikipedia.org/wiki/Joseph_Stalin",
  },
  {
    name: "Georgy Malenkov",
    flows: { Russia: true, "Soviet Union": true },
    start: 1953,
    end: 1953,
    link: "https://en.wikipedia.org/wiki/Georgy_Malenkov",
  },
  {
    name: "Nikita Khrushchev",
    flows: { Russia: true, "Soviet Union": true },
    start: 1953,
    end: 1964,
    link: "https://en.wikipedia.org/wiki/Nikita_Khrushchev",
  },
  {
    name: "Leonid Brezhnev",
    flows: { Russia: true, "Soviet Union": true },
    start: 1964,
    end: 1982,
    link: "https://en.wikipedia.org/wiki/Leonid_Brezhnev",
  },
  {
    name: "Yuri Andropov",
    flows: { Russia: true, "Soviet Union": true },
    start: 1982,
    end: 1984,
    link: "https://en.wikipedia.org/wiki/Yuri_Andropov",
  },
  {
    name: "Konstantin Chernenko",
    flows: { Russia: true, "Soviet Union": true },
    start: 1984,
    end: 1985,
    link: "https://en.wikipedia.org/wiki/Konstantin_Chernenko",
  },
  {
    name: "Mikhail Gorbachev",
    flows: { Russia: true, "Soviet Union": true },
    start: 1985,
    end: 1991,
    link: "https://en.wikipedia.org/wiki/Mikhail_Gorbachev",
  },
  {
    name: "Boris Yeltsin",
    flows: { Russia: true },
    start: 1991,
    end: 1999,
    link: "https://en.wikipedia.org/wiki/Boris_Yeltsin",
  },
  {
    name: "Vladimir Putin",
    flows: { Russia: true },
    start: 1999,
    end: 2008,
    link: "https://en.wikipedia.org/wiki/Vladimir_Putin",
  },
  {
    name: "Dimitry Medvedev",
    flows: { Russia: true },
    start: 2008,
    end: 2012,
    link: "https://en.wikipedia.org/wiki/Dmitry_Medvedev",
  },
  {
    name: "Vladimir Putin",
    flows: { Russia: true },
    start: 2012,
    end: "At Least 2021",
    link: "https://en.wikipedia.org/wiki/Vladimir_Putin",
  },
  //Maurya
  {
    name: "Chandragupta Maurya",
    flows: { India: true, Maurya: true },
    start: -320,
    end: -296,
    link: "https://en.wikipedia.org/wiki/Chandragupta_Maurya",
  },
  {
    name: "Chandragupta Maurya",
    flows: { India: true, Maurya: true },
    start: -320,
    end: -296,
    link: "https://en.wikipedia.org/wiki/Chandragupta_Maurya",
  },
  {
    name: "Bindusara Amitraghata",
    flows: { India: true, Maurya: true },
    start: -296,
    end: -272,
    link: "https://en.wikipedia.org/wiki/Bindusara_Amitraghata",
  },
  {
    name: "Ashoka",
    flows: { India: true, Maurya: true },
    start: -267,
    end: -231,
    link: "https://en.wikipedia.org/wiki/Ashoka",
  },
  {
    name: "Dasharatha",
    flows: { India: true, Maurya: true },
    start: -231,
    end: -223,
    link: "https://en.wikipedia.org/wiki/Dasharatha_Maurya",
  },
  {
    name: "Samprati",
    flows: { India: true, Maurya: true },
    start: -223,
    end: -214,
    link: "https://en.wikipedia.org/wiki/Samprati",
  },
  {
    name: "Shalishuka",
    flows: { India: true, Maurya: true },
    start: -214,
    end: -201,
    link: "https://en.wikipedia.org/wiki/Shalishuka",
  },
  {
    name: "Devavarman",
    flows: { India: true, Maurya: true },
    start: -201,
    end: -194,
    link: "https://en.wikipedia.org/wiki/Devavarman",
  },
  {
    name: "Shatadhanvan",
    flows: { India: true, Maurya: true },
    start: -194,
    end: -186,
    link: "https://en.wikipedia.org/wiki/Shatadhanvan",
  },
  {
    name: "Brihadratha",
    flows: { India: true, Maurya: true },
    start: -186,
    end: -179,
    link: "https://en.wikipedia.org/wiki/Brihadratha_Maurya",
  },
  //China
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
];

export default leaderPeriods;
