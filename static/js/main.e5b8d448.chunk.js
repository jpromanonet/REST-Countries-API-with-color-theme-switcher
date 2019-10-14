(window["webpackJsonprest-countries-api-app"]=window["webpackJsonprest-countries-api-app"]||[]).push([[0],{1:function(e,a,t){e.exports={container:"CountryDetails_container__2EX9N",countryDetails:"CountryDetails_countryDetails__2CzDB",dark:"CountryDetails_dark__kMKnb",light:"CountryDetails_light__2B-NA",backButton:"CountryDetails_backButton__2tI0i",main:"CountryDetails_main__2FoTB",flag:"CountryDetails_flag__2GPkJ",details:"CountryDetails_details__H94GQ",mainDetails:"CountryDetails_mainDetails__xigTZ",additionalDetails:"CountryDetails_additionalDetails__2_IZM",languages:"CountryDetails_languages__3Sx6S",detailsContainer:"CountryDetails_detailsContainer__2a-GJ",darkDetails:"CountryDetails_darkDetails__3WH48",lightDetails:"CountryDetails_lightDetails__Ok-K7"}},17:function(e,a,t){e.exports={container:"FilterBar_container__1Uhrt",filterBar:"FilterBar_filterBar__3Jrd1",regionFilter:"FilterBar_regionFilter__3g9DC",rotate:"FilterBar_rotate__2wf1v",arrow__Up:"FilterBar_arrow__Up__36Nkq",arrow__Down:"FilterBar_arrow__Down__2frAo"}},21:function(e,a,t){e.exports={container:"Dashboard_container__1_xqu",dashboard:"Dashboard_dashboard__3qYi2",fillTheRemainingHeight:"Dashboard_fillTheRemainingHeight__2bY6n"}},22:function(e,a,t){e.exports={container:"NavBar_container__3z4th",navBar:"NavBar_navBar__2bEBP",bold:"NavBar_bold__2GMVu",semiBold:"NavBar_semiBold__11Ckh"}},28:function(e,a,t){e.exports={countryList:"CountryList_countryList__YsN0o",error:"CountryList_error__1fj-x"}},3:function(e,a,t){e.exports={container:"Pagination_container__3KKpe","fa-ellipsis-h":"Pagination_fa-ellipsis-h__3fJTi",dark:"Pagination_dark__3oN3h",light:"Pagination_light__1aj-X",darkElements:"Pagination_darkElements__3mxbN",lightElements:"Pagination_lightElements__177mC",root:"Pagination_root__o1Dqf",loadingGif:"Pagination_loadingGif__k2oxf",pagination:"Pagination_pagination__wrDRy",nextPage:"Pagination_nextPage__MfUmZ",isActive:"Pagination_isActive__togTd",elipsis:"Pagination_elipsis__2Zwcw"}},43:function(e,a,t){e.exports={borderCountries:"BorderCountries_borderCountries__3B5__"}},44:function(e,a,t){e.exports=t(73)},66:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(39),l=t.n(o),i=t(11),c=t(12),s=t(14),u=t(13),m=t(15),d=t(19),g=t.n(d),h=t(8),p=t(10),f=(t(66),t(21)),E=t.n(f),_=t(22),C=t.n(_),k=function(e){var a=e.darkMode,t=(e.page,e.appModeChanger),n=e.homePage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"".concat(C.a.container," ").concat(C.a.navBar," ").concat(a?"dark darkElements":"light lightElements")},r.a.createElement(h.b,{to:n,className:C.a.bold},"Where in the world?"),r.a.createElement("button",{className:"".concat(C.a.semiBold," ").concat(a?"dark darkElements":"light lightElements"),onClick:t},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-moon"})," Light Mode"):r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"far fa-moon"})," Dark Mode"))))},v=t(27),b=t.n(v),N=t(42),y=t(20),D=t(17),w=t.n(D),M=function(e){var a=e.countrySearchField,t=e.darkMode,o=e.regionFilter,l=e.onCountrySearchFieldChange,i=e.onRegionChange,c=Object(n.useState)(!1),s=Object(y.a)(c,2),u=s[0],m=s[1],d=Object(n.useRef)(null);return function(e,a){var t=function(t){e.current&&!e.current.contains(t.target)&&a(!1)};Object(n.useEffect)((function(){return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}))}(d,m),r.a.createElement("div",{className:"".concat(w.a.filterBar," ").concat(w.a.container," ").concat(t?"dark":"light")},r.a.createElement("span",{className:t?"darkElements":"lightElements"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{type:"text",placeholder:"Search for a country...",onChange:function(e){return l(e.target.value)},value:a})),r.a.createElement("div",{className:w.a.regionFilter,ref:d},r.a.createElement("div",{className:t?"darkElements":"lightElements",onClick:function(){return m(!u)}},r.a.createElement("span",null,o&&r.a.createElement("button",{className:t?"darkElements":"lightElements",onClick:function(){return i("")}},r.a.createElement("i",{className:"fas fa-times"})),o?o.charAt(0).toUpperCase()+o.slice(1):"Filter by Region"),r.a.createElement("i",{className:"fas fa-arrow-left ".concat(u?w.a.arrow__Up:w.a.arrow__Down)})),u&&r.a.createElement("ul",{className:t?"darkElements":"lightElements",onClick:function(){var e=Object(N.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(a.target.innerHTML);case 2:m(!u);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},r.a.createElement("li",null,"africa"),r.a.createElement("li",null,"americas"),r.a.createElement("li",null,"asia"),r.a.createElement("li",null,"europe"),r.a.createElement("li",null,"oceania"))))},P=t(23),F=t.n(P),j=t(9),B=t.n(j),O=function(e){var a=e.capital,t=e.alpha2Code,n=e.darkMode,o=e.name,l=e.population,i=e.region,c=(e.flag,e.homePage);return r.a.createElement(h.b,{to:"".concat(c+o)},r.a.createElement("figure",{className:"".concat(B.a.countryItem," ").concat(n?"dark darkElements":"light lightElements")},r.a.createElement("div",{className:B.a.background,style:{background:"url(https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/".concat(t.toLowerCase(),".svg)")}}),r.a.createElement("figcaption",{className:B.a.textContainer},r.a.createElement("h2",null,o),r.a.createElement("div",null,"Population :",r.a.createElement("span",{className:n?B.a.darkCaption:B.a.lightCaption},F()(l).format(0,0))),r.a.createElement("div",null,"Region :",r.a.createElement("span",{className:n?B.a.darkCaption:B.a.lightCaption},i)),r.a.createElement("div",null,"Capital :",r.a.createElement("span",{className:n?B.a.darkCaption:B.a.lightCaption},a||"-")))))},S=function(e){var a=e.darkMode;e.homePage;return r.a.createElement("img",{className:"loadingGif",src:"./assets/pics/loading--".concat(a?"dark":"light",".svg"),alt:"loading"})},x=t(3),R=t.n(x),A=function(e,a,t){switch(t){case"INCREMENT":e(a+1);break;case"DECREMENT":e(a-1)}},I=function(e,a,t){if(1===a)return r.a.createElement("button",{className:R.a.isActive},"1");switch(e+1){case 1:case a:return function(e,a,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e+1===a?function(){return t(0)}:void 0,className:0===e?R.a.isActive:void 0},"1"),r.a.createElement("button",{className:R.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"})),r.a.createElement("button",{onClick:e+1===1?function(){return t(a-1)}:void 0,className:e+1===a?R.a.isActive:void 0},a))}(e,a,t);case 2:case a-1:return function(e,a,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return t(0)}},"1"),e+1===2?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:R.a.isActive},"2"),r.a.createElement("button",{className:R.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:R.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"})),r.a.createElement("button",{className:R.a.isActive},a-1)),r.a.createElement("button",{onClick:function(){return t(a-1)}},a))}(e,a,t);default:return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return t(0)}},"1"),r.a.createElement("button",{className:R.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"})),r.a.createElement("button",{className:R.a.isActive},e+1),r.a.createElement("button",{className:R.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"})),r.a.createElement("button",{onClick:function(){return t(a-1)}},a))}},L=function(e){var a=e.darkMode,t=e.currentPage,n=e.setCurrentPage,o=e.totalPages;return r.a.createElement("div",{className:"".concat(R.a.pagination," ").concat(a?"dark ":"light ")},r.a.createElement("button",{onClick:function(){return A(n,t,"DECREMENT")},disabled:0===t},r.a.createElement("i",{className:"fas fa-arrow-left"})),I(t,o,n),r.a.createElement("button",{className:R.a.nextPage,onClick:function(){return A(n,t,"INCREMENT")},disabled:t+1===o},r.a.createElement("i",{className:"fas fa-arrow-left"})))},T=t(28),J=t.n(T),U=function(e){var a=e.filteredCountries,t=e.darkMode,o=e.totalCountries,l=e.homePage,i=Object(n.useState)(0),c=Object(y.a)(i,2),s=c[0],u=c[1],m=Object(n.useState)(1),d=Object(y.a)(m,2),g=d[0],h=d[1];return Object(n.useEffect)((function(){var e=a.length>8?Math.ceil(a.length/8):1;h(e)}),[a]),Object(n.useEffect)((function(){u(0)}),[a]),r.a.createElement("section",{className:J.a.countryList},o.length>0?0!==a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,function(e,a,t,n){return e.slice(8*a,8*a+8).map((function(e){return r.a.createElement(O,Object.assign({key:e.name},e,{darkMode:t,homePage:n}))}))}(a,s,t,l)),r.a.createElement(L,{currentPage:s,darkMode:t,setCurrentPage:u,totalPages:g})):r.a.createElement("p",{className:J.a.error},"Oops, we have no idea what you're talking about",r.a.createElement("br",null),"Search for something else"):r.a.createElement(S,{darkMode:t}))},G=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={filteredCountries:null,countrySearchField:"",regionFilter:""},t.onCountrySearchFieldChange=function(e){t.setState((function(){return{countrySearchField:e}}),t.updateFilteredCountries)},t.onRegionChange=function(e){t.setState((function(){return{regionFilter:e}}),t.updateFilteredCountries)},t.updateFilteredCountries=function(){t.setState((function(e,a){var t=a.totalCountries,n=e.countrySearchField,r=e.regionFilter,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r&&(o=o.filter((function(e){return e.region.toLowerCase()===r.toLowerCase()}))),{filteredCountries:o}}))},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.countrySearchField,t=e.filteredCountries,n=e.regionFilter,o=this.props,l=o.totalCountries,i=o.homePage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:E.a.dashboard},r.a.createElement(k,{darkMode:this.props.darkMode,appModeChanger:this.props.appModeChanger,homePage:i}),r.a.createElement(M,{countrySearchField:a,darkMode:this.props.darkMode,regionFilter:n,onCountrySearchFieldChange:this.onCountrySearchFieldChange,onRegionChange:this.onRegionChange})),r.a.createElement("main",{className:"".concat(E.a.container," ").concat(E.a.dashboard," ").concat(E.a.fillTheRemainingHeight," ").concat(this.props.darkMode?"dark":"light")},r.a.createElement(U,{filteredCountries:t||l,homePage:i,totalCountries:l,darkMode:this.props.darkMode})))}}]),a}(n.Component),H=t(1),W=t.n(H),K=t(43),q=t.n(K),Y=function(e){var a=e.totalCountries,t=e.countryDetails,n=e.darkMode,o=e.homePage;return r.a.createElement("div",{className:n?"dark":"light"},function(e,a,t,n){var o=e.filter((function(e){return a.borders.includes(e.alpha3Code)}));return 0!==(o=o.map((function(e){return r.a.createElement(h.b,{to:"".concat(n).concat(e.name),key:e.name,className:t?"dark darkElements":"light lightElements"},e.name)}))).length&&r.a.createElement("div",{className:q.a.borderCountries},r.a.createElement("h3",null,"Border Countries: "),r.a.createElement("div",null," ",o))}(a,t,n,o))},Z=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={countryDetails:null},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://raw.githubusercontent.com/sinamoraddar/REST-Countries-API-with-color-theme-switcher--API/master/all.json").then((function(a){var t=a.data.find((function(a){return a.name===e.props.match.params.countryName}));e.setState((function(){return{countryDetails:t}}))})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(e){var a=this;e.location.key!==this.props.location.key&&g.a.get("https://raw.githubusercontent.com/sinamoraddar/REST-Countries-API-with-color-theme-switcher--API/master/all.json").then((function(e){var t=e.data.find((function(e){return e.name===a.props.match.params.countryName}));a.setState((function(){return{countryDetails:t}}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props,a=e.darkMode,t=e.appModeChanger,n=e.totalCountries,o=e.homePage,l=this.state.countryDetails;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"".concat(W.a.countryDetails," ").concat(a?"dark":"light")},r.a.createElement(k,{darkMode:a,homePage:o,appModeChanger:t}),r.a.createElement(h.b,{to:o,className:"".concat(W.a.backButton," ").concat(a?"dark darkElements":"light lightElements")},r.a.createElement("i",{className:"fas fa-arrow-left"}),"Back")),r.a.createElement("main",{className:"".concat(W.a.countryDetails," ").concat(W.a.main,"  ").concat(a?"dark":"light")},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:W.a.flag},r.a.createElement(S,{darkMode:a,homePage:o}),r.a.createElement("img",{src:"https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/".concat(l.alpha2Code.toLowerCase(),".svg"),alt:"".concat(l.name," flag")})),r.a.createElement("div",{className:W.a.details},r.a.createElement("h1",null," ",this.props.match.params.countryName),r.a.createElement("div",{className:W.a.detailsContainer},r.a.createElement("div",{className:W.a.mainDetails},r.a.createElement("p",null,"Native Name:"," ",r.a.createElement("span",{className:a?W.a.darkDetails:W.a.lightDetails},l.nativeName," ")),r.a.createElement("p",null,"Population:"," ",r.a.createElement("span",{className:a?W.a.darkDetails:W.a.lightDetails},F()(l.population).format(0,0))),r.a.createElement("p",null,"Region:"," ",r.a.createElement("span",{className:a?W.a.darkDetails:W.a.lightDetails},l.region)),r.a.createElement("p",null,"Sub Region:"," ",r.a.createElement("span",{className:a?W.a.darkDetails:W.a.lightDetails}," ",l.subregion)),r.a.createElement("p",null,"Capital:"," ",r.a.createElement("span",{className:a?W.a.darkDetails:W.a.lightDetails}," ",l.capital))),r.a.createElement("div",{className:W.a.additionalDetails},r.a.createElement("p",null,"Top Level Domain:"," ",r.a.createElement("span",{className:a?W.a.darkDetails:W.a.lightDetails},l.topLevelDomain)),r.a.createElement("p",null,"Currencies:"," ",r.a.createElement("span",{className:a?W.a.darkDetails:W.a.lightDetails}," ",l.currencies[0].name)),r.a.createElement("p",{className:W.a.languages},"Languages :",l.languages.map((function(e){var t=e.name;return r.a.createElement("span",{className:a?W.a.darkDetails:W.a.lightDetails,key:t},t)}))))),n&&r.a.createElement(Y,Object.assign({totalCountries:n,countryDetails:l},{darkMode:a,homePage:o})))):r.a.createElement(S,{darkMode:a,homePage:o})))}}]),a}(n.Component),z=function(){return r.a.createElement(r.a.Fragment,null,"404 not found")},X=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={darkMode:!0,totalCountries:[],homePage:"/REST-Countries-API-with-color-theme-switcher/"},t.appModeChanger=function(){t.setState((function(e){return{darkMode:!e.darkMode}}))},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://raw.githubusercontent.com/sinamoraddar/REST-Countries-API-with-color-theme-switcher--API/master/all.json").then((function(a){e.setState((function(){return{totalCountries:a.data}}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.darkMode,n=a.totalCountries,o=a.homePage;return console.log(o),console.log(n),r.a.createElement(h.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"".concat(o),render:function(a){return r.a.createElement(G,Object.assign({},a,{appModeChanger:e.appModeChanger,darkMode:t,homePage:o,totalCountries:n}))}}),r.a.createElement(p.a,{exact:!0,path:"".concat(o,":countryName"),render:function(a){return r.a.createElement(Z,Object.assign({},a,{darkMode:t,homePage:o,appModeChanger:e.appModeChanger,totalCountries:n}))}}),r.a.createElement(p.a,{component:z})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports={countryItem:"CountryItem_countryItem__3U-yw",background:"CountryItem_background__j1Wge",textContainer:"CountryItem_textContainer__1YuW0",darkCaption:"CountryItem_darkCaption__2pvJJ",lightCaption:"CountryItem_lightCaption__1Kie4"}}},[[44,1,2]]]);
//# sourceMappingURL=main.e5b8d448.chunk.js.map