(this.webpackJsonptimeline=this.webpackJsonptimeline||[]).push([[0],{44:function(i,e,n){},45:function(i,e,n){},46:function(i,e,n){},53:function(i,e,n){"use strict";n.r(e);var t=n(0),a=n.n(t),r=n(7),o=n.n(r),s=(n(44),n(26)),p=n(82),l=n(83),d=(n(45),function(i){return i<1?"".concat(-1*i+1," BCE"):i}),k=[{name:"Augustus",polity:"Rome",start:-26,end:14,link:"https://en.wikipedia.org/wiki/Augustus"},{name:"Tiberius",polity:"Rome",start:14,end:37,link:"https://en.wikipedia.org/wiki/Tiberius"},{name:"Caligula",polity:"Rome",start:37,end:41,link:"https://en.wikipedia.org/wiki/Caligula"},{name:"Claudius",polity:"Rome",start:41,end:54,link:"https://en.wikipedia.org/wiki/Claudius"},{name:"Nero",polity:"Rome",start:54,end:68,link:"https://en.wikipedia.org/wiki/Nero"},{name:"Galba",polity:"Rome",start:68,end:69,link:"https://en.wikipedia.org/wiki/Galba"},{name:"Otho",polity:"Rome",start:69,end:69,order:1,link:"https://en.wikipedia.org/wiki/Otho"},{name:"Vitellius",polity:"Rome",start:69,end:69,order:2,link:"https://en.wikipedia.org/wiki/Vitellius"},{name:"Vespasian",polity:"Rome",start:69,end:79,link:"https://en.wikipedia.org/wiki/Vespasian"},{name:"Titus",polity:"Rome",start:79,end:81,link:"https://en.wikipedia.org/wiki/Titus"},{name:"Domitian",polity:"Rome",start:81,end:96,link:"https://en.wikipedia.org/wiki/Domitian"},{name:"Nerva",polity:"Rome",start:96,end:98,link:"https://en.wikipedia.org/wiki/Nerva"},{name:"Trajan",polity:"Rome",start:98,end:117,link:"https://en.wikipedia.org/wiki/Trajan"},{name:"Hadrian",polity:"Rome",start:117,end:138,link:"https://en.wikipedia.org/wiki/Hadrian"},{name:"Antoninus Pius",polity:"Rome",start:138,end:161,link:"https://en.wikipedia.org/wiki/Antoninus_Pius"},{name:"Marcus Aurelius",polity:"Rome",start:161,end:180,link:"https://en.wikipedia.org/wiki/Marcus_Aurelius"},{name:"Lucius Verus",polity:"Rome",start:161,end:169,link:"https://en.wikipedia.org/wiki/Lucius_Verus"},{name:"Commodus",polity:"Rome",start:180,end:192,link:"https://en.wikipedia.org/wiki/Commodus"},{name:"Pertinax",polity:"Rome",start:192,end:193,link:"https://en.wikipedia.org/wiki/Pertinax"},{name:"Didius Julianus",polity:"Rome",start:193,end:193,link:"https://en.wikipedia.org/wiki/Didius_Julianus"},{name:"Septimius Severus",polity:"Rome",start:193,end:211,link:"https://en.wikipedia.org/wiki/Septimius_Severus"},{name:"Caracalla",polity:"Rome",start:211,end:217,link:"https://en.wikipedia.org/wiki/Caracalla"},{name:"Wang Mang",polity:"China",start:9,end:23,link:"https://en.wikipedia.org/wiki/Wang_Mang"},{name:"Gengshi Emperor",polity:"China",start:23,end:25,link:"https://en.wikipedia.org/wiki/Gengshi_Emperor"},{name:"Emperor Guangwu",polity:"China",start:25,end:57,link:"https://en.wikipedia.org/wiki/Emperor_Guangwu_of_Han"},{name:"Emperor Ming",polity:"China",start:58,end:75,link:"https://en.wikipedia.org/wiki/Emperor_Ming_of_Han"},{name:"Emperor Zhang",polity:"China",start:76,end:88,link:"https://en.wikipedia.org/wiki/Emperor_Zhang_of_Han"},{name:"Emperor He",polity:"China",start:89,end:105,link:"https://en.wikipedia.org/wiki/Emperor_He_of_Han"},{name:"Emperor Shang",polity:"China",start:106,end:106,link:"https://en.wikipedia.org/wiki/Emperor_Shang_of_Han"},{name:"Emperor An",polity:"China",start:106,end:125,link:"https://en.wikipedia.org/wiki/Emperor_An_of_Han"},{name:"Marquess of Beixiang",polity:"China",start:125,end:125,link:"https://en.wikipedia.org/wiki/Marquess_of_Beixiang"},{name:"Emperor Shun",polity:"China",start:125,end:144,link:"https://en.wikipedia.org/wiki/Emperor_Shun_of_Han"},{name:"Emperor Chong",polity:"China",start:144,end:145,link:"https://en.wikipedia.org/wiki/Emperor_Chong_of_Han"},{name:"Emperor Zhi",polity:"China",start:145,end:146,link:"https://en.wikipedia.org/wiki/Emperor_Zhi_of_Han"},{name:"Emperor Huan",polity:"China",start:146,end:168,link:"https://en.wikipedia.org/wiki/Emperor_Huan_of_Han"},{name:"Emperor Ling",polity:"China",start:168,end:189,link:"https://en.wikipedia.org/wiki/Emperor_Ling_of_Han"},{name:"Emperor Shao",polity:"China",start:189,end:189,link:"https://en.wikipedia.org/wiki/Liu_Bian"},{name:"Emperor Xian",polity:"China",start:189,end:220,link:"https://en.wikipedia.org/wiki/Emperor_Xian_of_Han"}],m={Rome:{name:"Rome"},China:{name:"China"}},u=(n(46),n(9)),h=function(){var i=Object(t.useState)(""),e=Object(s.a)(i,2),n=e[0],a=e[1];return Object(u.jsxs)("div",{className:"timeline",children:[Object(u.jsxs)(p.a,{value:n,onChange:function(i){return a(i.target.value)},children:[Object(u.jsx)(l.a,{value:"",children:"None"}),function(){var i=[];for(var e in m)i.push(e);i.sort((function(i,e){return i-e}));for(var n=[],t=0,a=i;t<a.length;t++){var r=a[t];n.push(Object(u.jsx)(l.a,{value:r,children:r}))}return n}()]}),Object(u.jsx)("div",{className:"timelineScroll",children:function(i){return k.filter((function(e){return e.polity===i})).sort((function(i,e){if(i.start===e.start){if(i.end===e.end)try{return i.order-e.order}catch(n){return i.end-e.end}return i.end-e.end}return i.start-e.start})).map((function(i){return Object(u.jsx)("div",{children:Object(u.jsxs)("a",{href:i.link,target:"_blank",rel:"noreferrer",children:[i.name," : ",d(i.start)," - ",d(i.end)]})})}))}(n)})]})};var c=function(){var i=Object(t.useState)(2),e=Object(s.a)(i,2),n=e[0],a=e[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"selectColumns",children:[Object(u.jsx)("div",{children:"Select Number of Columns"}),Object(u.jsxs)(p.a,{value:n,onChange:function(i){return a(i.target.value)},children:[Object(u.jsx)(l.a,{value:1,children:"One"}),Object(u.jsx)(l.a,{value:2,children:"Two"}),Object(u.jsx)(l.a,{value:3,children:"Three"}),Object(u.jsx)(l.a,{value:4,children:"Four"}),Object(u.jsx)(l.a,{value:5,children:"Five"})]})]}),Object(u.jsx)("div",{className:"body",children:new Array(n).fill().map((function(i){return Object(u.jsx)(h,{})}))})]})},w=function(i){i&&i instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(e){var n=e.getCLS,t=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(i),t(i),a(i),r(i),o(i)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(c,{})}),document.getElementById("root")),w()}},[[53,1,2]]]);
//# sourceMappingURL=main.c29dafa2.chunk.js.map