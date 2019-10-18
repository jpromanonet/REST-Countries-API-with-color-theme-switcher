(window["webpackJsonprest-countries-api-app"]=window["webpackJsonprest-countries-api-app"]||[]).push([[0],{1:function(e,t,a){e.exports={container:"CountryDetails_container__2EX9N",countryDetails:"CountryDetails_countryDetails__2CzDB",backButton:"CountryDetails_backButton__2tI0i",main:"CountryDetails_main__2FoTB",flag:"CountryDetails_flag__2GPkJ",details:"CountryDetails_details__H94GQ",mainDetails:"CountryDetails_mainDetails__xigTZ",additionalDetails:"CountryDetails_additionalDetails__2_IZM",languages:"CountryDetails_languages__3Sx6S",detailsContainer:"CountryDetails_detailsContainer__2a-GJ",darkDetails:"CountryDetails_darkDetails__3WH48",lightDetails:"CountryDetails_lightDetails__Ok-K7",error:"CountryDetails_error__2iCQZ"}},17:function(e,t,a){e.exports={container:"FilterBar_container__1Uhrt",filterBar:"FilterBar_filterBar__3Jrd1",regionFilter:"FilterBar_regionFilter__3g9DC",rotate:"FilterBar_rotate__2wf1v",dropDown:"FilterBar_dropDown__VJ6dZ",arrow__Up:"FilterBar_arrow__Up__36Nkq",arrow__Down:"FilterBar_arrow__Down__2frAo"}},20:function(e,t,a){e.exports={container:"Dashboard_container__1_xqu",dashboard:"Dashboard_dashboard__3qYi2",fillTheRemainingHeight:"Dashboard_fillTheRemainingHeight__2bY6n"}},21:function(e,t,a){e.exports={container:"NavBar_container__3z4th",bold:"NavBar_bold__2GMVu",semiBold:"NavBar_semiBold__11Ckh",navBar:"NavBar_navBar__2bEBP"}},28:function(e,t,a){e.exports={countryList:"CountryList_countryList__YsN0o",error:"CountryList_error__1fj-x"}},3:function(e,t,a){e.exports={container:"Pagination_container__3KKpe","fa-ellipsis-h":"Pagination_fa-ellipsis-h__3fJTi",dark:"Pagination_dark__3oN3h",light:"Pagination_light__1aj-X",darkElements:"Pagination_darkElements__3mxbN",lightElements:"Pagination_lightElements__177mC",root:"Pagination_root__o1Dqf",loadingGif:"Pagination_loadingGif__k2oxf",pagination:"Pagination_pagination__wrDRy",nextPage:"Pagination_nextPage__MfUmZ",isActive:"Pagination_isActive__togTd",elipsis:"Pagination_elipsis__2Zwcw"}},43:function(e,t,a){e.exports={borderCountries:"BorderCountries_borderCountries__3B5__"}},44:function(e,t,a){e.exports={notFoundPage:"NotFound_notFoundPage__1aQ1Y"}},45:function(e,t,a){e.exports=a(74)},67:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),i=a.n(o),l=a(11),c=a(12),s=a(14),u=a(13),m=a(15),d=a(22),h=a.n(d),g=a(6),f=a(10),p=(a(67),a(20)),E=a.n(p),_=a(21),C=a.n(_),k=function(e){var t=e.darkMode,a=e.appModeChanger,n=e.homePage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"".concat(C.a.container," ").concat(C.a.navBar," ").concat(t?"dark darkElements":"light lightElements")},r.a.createElement(g.b,{to:n,className:C.a.bold},"Where in the world?"),r.a.createElement("button",{className:"".concat(C.a.semiBold," ").concat(t?"dark darkElements":"light lightElements"),onClick:a},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-moon"})," Light Mode"):r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"far fa-moon"})," Dark Mode"))))},v=a(27),b=a.n(v),N=a(42),y=a(19),w=a(17),D=a.n(w),P=function(e){var t=e.countrySearchField,a=e.darkMode,o=e.regionFilter,i=e.onCountrySearchFieldChange,l=e.onRegionChange,c=e.scrollTo,s=Object(n.useState)(!1),u=Object(y.a)(s,2),m=u[0],d=u[1],h=Object(n.useRef)(null);return function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t(!1)};Object(n.useEffect)((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}))}(h,d),r.a.createElement("div",{ref:c,className:"".concat(D.a.filterBar," ").concat(D.a.container," ").concat(a?"dark":"light")},r.a.createElement("span",{className:a?"darkElements":"lightElements"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{type:"text",placeholder:"Search for a country...",onChange:function(e){return i(e.target.value)},value:t})),r.a.createElement("div",{className:D.a.regionFilter,ref:h},r.a.createElement("div",{className:a?"darkElements":"lightElements",onClick:function(){return d(!m)}},r.a.createElement("span",null,o&&r.a.createElement("button",{className:a?"darkElements":"lightElements",onClick:function(){return l("")}},r.a.createElement("i",{className:"fas fa-times"})),o?o.charAt(0).toUpperCase()+o.slice(1):"Filter by Region"),r.a.createElement("i",{className:"fas fa-arrow-left ".concat(m?D.a.arrow__Up:D.a.arrow__Down)})),m&&r.a.createElement("ul",{className:a?"darkElements":"lightElements",onClick:function(){var e=Object(N.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t.target.innerHTML);case 2:d(!m);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("li",null,"africa"),r.a.createElement("li",null,"americas"),r.a.createElement("li",null,"asia"),r.a.createElement("li",null,"europe"),r.a.createElement("li",null,"oceania"))))},M=a(23),F=a.n(M),j=a(9),S=a.n(j),O=function(e){var t=e.capital,a=e.alpha2Code,n=e.darkMode,o=e.name,i=e.population,l=e.region,c=e.homePage;return r.a.createElement(g.b,{to:"".concat(c,"countries/").concat(o)},r.a.createElement("figure",{className:"".concat(S.a.countryItem," ").concat(n?"dark darkElements":"light lightElements")},r.a.createElement("div",{className:S.a.background,style:{background:"url(https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/".concat(a.toLowerCase(),".svg)")}}),r.a.createElement("figcaption",{className:S.a.textContainer},r.a.createElement("h2",null,o),r.a.createElement("div",null,"Population :",r.a.createElement("span",{className:n?S.a.darkCaption:S.a.lightCaption},F()(i).format(0,0))),r.a.createElement("div",null,"Region :",r.a.createElement("span",{className:n?S.a.darkCaption:S.a.lightCaption},l)),r.a.createElement("div",null,"Capital :",r.a.createElement("span",{className:n?S.a.darkCaption:S.a.lightCaption},t||"-")))))},B=function(e){var t=e.darkMode;return r.a.createElement("img",{className:"loadingGif",src:"".concat("/REST-Countries-API-with-color-theme-switcher","/assets/pics/loading--").concat(t?"dark":"light",".svg"),alt:"loading"})},T=a(3),x=a.n(T),R=function(e){e.current.scrollIntoView({behavior:"smooth"})},A=function(e,t,a,n){switch(a){case"INCREMENT":R(n),e(t+1);break;case"DECREMENT":R(n),e(t-1)}},I=function(e,t,a,n){if(1===t)return r.a.createElement("button",{className:x.a.isActive},"1");switch(e+1){case 1:case t:return function(e,t,a,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:e+1===t?function(){a(0),R(n)}:void 0,className:0===e?x.a.isActive:void 0},"1"),r.a.createElement("button",{className:x.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"})),r.a.createElement("button",{onClick:e+1===1?function(){a(t-1),R(n)}:void 0,className:e+1===t?x.a.isActive:void 0},t))}(e,t,a,n);case 2:case t-1:return function(e,t,a,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){a(0),R(n)}},"1"),e+1===2?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:x.a.isActive},"2"),r.a.createElement("button",{className:x.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:x.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"})),r.a.createElement("button",{className:x.a.isActive},t-1)),r.a.createElement("button",{onClick:function(){a(t-1),R(n)}},t))}(e,t,a,n);default:return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){a(0),R(n)}},"1"),r.a.createElement("button",{className:x.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"})),r.a.createElement("button",{className:x.a.isActive},e+1),r.a.createElement("button",{className:x.a.elipsis},r.a.createElement("i",{className:"fas fa-ellipsis-h"})),r.a.createElement("button",{onClick:function(){a(t-1),R(n)}},t))}},L=function(e){var t=e.darkMode,a=e.currentPage,n=e.setCurrentPage,o=e.totalPages,i=e.scrollTo;return r.a.createElement("div",{className:"".concat(x.a.pagination," ").concat(t?"dark ":"light ")},r.a.createElement("button",{onClick:function(){A(n,a,"DECREMENT",i)},disabled:0===a},r.a.createElement("i",{className:"fas fa-arrow-left"})),I(a,o,n,i),r.a.createElement("button",{className:x.a.nextPage,onClick:function(){A(n,a,"INCREMENT",i)},disabled:a+1===o},r.a.createElement("i",{className:"fas fa-arrow-left"})))},W=a(28),U=a.n(W),J=function(e){var t=e.filteredCountries,a=e.darkMode,o=e.totalCountries,i=e.homePage,l=e.scrollTo,c=Object(n.useState)(0),s=Object(y.a)(c,2),u=s[0],m=s[1],d=Object(n.useState)(1),h=Object(y.a)(d,2),g=h[0],f=h[1];return Object(n.useEffect)((function(){var e=t.length>8?Math.ceil(t.length/8):1;f(e)}),[t]),Object(n.useEffect)((function(){m(0)}),[t]),r.a.createElement("section",{className:U.a.countryList},o.length>0?0!==t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,function(e,t,a,n){return e.slice(8*t,8*t+8).map((function(e){return r.a.createElement(O,Object.assign({key:e.name},e,{darkMode:a,homePage:n}))}))}(t,u,a,i)),r.a.createElement(L,{currentPage:u,darkMode:a,scrollTo:l,setCurrentPage:m,totalPages:g})):r.a.createElement("p",{className:U.a.error},"Oops, we have no idea what you're talking about",r.a.createElement("br",null),"Search for something else"):r.a.createElement(B,{darkMode:a}))},G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onCountrySearchFieldChange=function(e){a.setState((function(){return{countrySearchField:e}}),a.updateFilteredCountries)},a.onRegionChange=function(e){a.setState((function(){return{regionFilter:e}}),a.updateFilteredCountries)},a.updateFilteredCountries=function(){a.setState((function(e,t){var a=t.totalCountries,n=e.countrySearchField,r=e.regionFilter,o=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r&&(o=o.filter((function(e){return e.region.toLowerCase()===r.toLowerCase()}))),{filteredCountries:o}}))},a.scrollTo=r.a.createRef(null),a.state={filteredCountries:null,countrySearchField:"",regionFilter:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="Where in the World ?"}},{key:"render",value:function(){var e=this.state,t=e.countrySearchField,a=e.filteredCountries,n=e.regionFilter,o=this.props,i=o.totalCountries,l=o.homePage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:E.a.dashboard},r.a.createElement(k,{darkMode:this.props.darkMode,appModeChanger:this.props.appModeChanger,homePage:l}),r.a.createElement(P,{countrySearchField:t,darkMode:this.props.darkMode,regionFilter:n,onCountrySearchFieldChange:this.onCountrySearchFieldChange,onRegionChange:this.onRegionChange,scrollTo:this.scrollTo})),r.a.createElement("main",{className:"".concat(E.a.container," ").concat(E.a.dashboard," ").concat(E.a.fillTheRemainingHeight," ").concat(this.props.darkMode?"dark":"light")},r.a.createElement(J,{filteredCountries:a||i,homePage:l,totalCountries:i,darkMode:this.props.darkMode,scrollTo:this.scrollTo})))}}]),t}(n.Component),H=a(1),Z=a.n(H),Y=a(43),q=a.n(Y),K=function(e){var t=e.totalCountries,a=e.countryDetails,n=e.darkMode,o=e.homePage;return r.a.createElement("div",{className:"".concat(q.a.borderCountries," ").concat(n?"dark":"light")},function(e,t,a,n){var o=e.filter((function(e){return t.borders.includes(e.alpha3Code)}));return 0!==(o=o.map((function(e){return r.a.createElement(g.b,{to:"".concat(n,"countries/").concat(e.name),key:e.name,className:a?"dark darkElements":"light lightElements"},e.name)}))).length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Border Countries: "),r.a.createElement("div",null," ",o))}(t,a,n,o))},Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onRedirect=function(){return a.state.redirect&&r.a.createElement(f.a,{to:"/404"})},a.fetchCounrtyDetails=function(){h.a.get("https://raw.githubusercontent.com/sinamoraddar/REST-Countries-API-with-color-theme-switcher--API/master/all.json").then((function(e){var t=e.data.find((function(e){return e.name===a.props.match.params.countryName}));t?a.setState((function(){return{countryDetails:t}})):a.setState((function(){return{countryDetails:!0,notFoundStatus:!0}}))})).catch((function(e){return console.log(e)}))},a.state={countryDetails:null,notFoundStatus:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title=this.props.match.params.countryName,this.fetchCounrtyDetails()}},{key:"componentDidUpdate",value:function(e){document.title=this.props.match.params.countryName,e.location.key!==this.props.location.key&&this.fetchCounrtyDetails()}},{key:"render",value:function(){var e=this.props,t=e.darkMode,a=e.appModeChanger,n=e.totalCountries,o=e.homePage,i=this.state,l=i.countryDetails,c=i.notFoundStatus;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"".concat(Z.a.countryDetails," ").concat(t?"dark":"light")},r.a.createElement(k,{darkMode:t,homePage:o,appModeChanger:a}),r.a.createElement(g.b,{to:o,className:"".concat(Z.a.backButton," ").concat(t?"dark darkElements":"light lightElements")},r.a.createElement("i",{className:"fas fa-arrow-left"}),"Back")),r.a.createElement("main",{className:"".concat(Z.a.countryDetails," ").concat(Z.a.main,"  ").concat(t?"dark":"light")},l?c?r.a.createElement("p",{className:Z.a.error},"sorry we we have no idea about the thing you're looking for"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Z.a.flag},r.a.createElement("img",{src:"https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/".concat(l.alpha2Code.toLowerCase(),".svg"),alt:"".concat(l.name," flag")})),r.a.createElement("div",{className:Z.a.details},r.a.createElement("h1",null," ",this.props.match.params.countryName),r.a.createElement("div",{className:Z.a.detailsContainer},r.a.createElement("div",{className:Z.a.mainDetails},r.a.createElement("p",null,"Native Name:"," ",r.a.createElement("span",{className:t?Z.a.darkDetails:Z.a.lightDetails},l.nativeName," ")),r.a.createElement("p",null,"Population:"," ",r.a.createElement("span",{className:t?Z.a.darkDetails:Z.a.lightDetails},F()(l.population).format(0,0))),r.a.createElement("p",null,"Region:"," ",r.a.createElement("span",{className:t?Z.a.darkDetails:Z.a.lightDetails},l.region)),r.a.createElement("p",null,"Sub Region:"," ",r.a.createElement("span",{className:t?Z.a.darkDetails:Z.a.lightDetails}," ",l.subregion)),r.a.createElement("p",null,"Capital:"," ",r.a.createElement("span",{className:t?Z.a.darkDetails:Z.a.lightDetails}," ",l.capital))),r.a.createElement("div",{className:Z.a.additionalDetails},r.a.createElement("p",null,"Top Level Domain:"," ",r.a.createElement("span",{className:t?Z.a.darkDetails:Z.a.lightDetails},l.topLevelDomain)),r.a.createElement("p",null,"Currencies:"," ",r.a.createElement("span",{className:t?Z.a.darkDetails:Z.a.lightDetails}," ",l.currencies[0].name)),r.a.createElement("p",{className:Z.a.languages},"Languages :",l.languages.map((function(e){var a=e.name;return r.a.createElement("span",{className:t?Z.a.darkDetails:Z.a.lightDetails,key:a},a)}))))),n&&r.a.createElement(K,Object.assign({totalCountries:n,countryDetails:l},{darkMode:t,homePage:o})))):r.a.createElement(B,{darkMode:t,homePage:o})))}}]),t}(n.Component),V=a(44),z=a.n(V),X=function(e){var t=e.darkMode,a=e.homePage;return r.a.createElement("main",{className:"".concat(z.a.notFoundPage," ").concat(t?"dark":"light")},"404 not found",r.a.createElement(g.b,{to:a,className:t?"darkElements":"lightElements"},"Go Back Home"))},$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={darkMode:!0,totalCountries:[]},a.appModeChanger=function(){a.setState((function(e){return{darkMode:!e.darkMode}}))},a.homePage="/REST-Countries-API-with-color-theme-switcher/",a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://raw.githubusercontent.com/sinamoraddar/REST-Countries-API-with-color-theme-switcher--API/master/all.json").then((function(t){e.setState((function(){return{totalCountries:t.data}}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.darkMode,n=t.totalCountries;return r.a.createElement(g.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:this.homePage,render:function(t){return r.a.createElement(G,Object.assign({},t,{appModeChanger:e.appModeChanger,darkMode:a,homePage:e.homePage,totalCountries:n}))}}),r.a.createElement(f.b,{exact:!0,path:"".concat(this.homePage,"countries/:countryName"),render:function(t){return r.a.createElement(Q,Object.assign({},t,{darkMode:a,homePage:e.homePage,appModeChanger:e.appModeChanger,totalCountries:n}))}}),r.a.createElement(f.b,{render:function(t){return r.a.createElement(X,Object.assign({},t,{darkMode:a,homePage:e.homePage}))}})))}}]),t}(n.Component),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/REST-Countries-API-with-color-theme-switcher",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/REST-Countries-API-with-color-theme-switcher","/service-worker.js");ee?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()},9:function(e,t,a){e.exports={countryItem:"CountryItem_countryItem__3U-yw",background:"CountryItem_background__j1Wge",textContainer:"CountryItem_textContainer__1YuW0",darkCaption:"CountryItem_darkCaption__2pvJJ",lightCaption:"CountryItem_lightCaption__1Kie4"}}},[[45,1,2]]]);
//# sourceMappingURL=main.57fd0c52.chunk.js.map