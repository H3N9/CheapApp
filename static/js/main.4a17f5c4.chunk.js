(this.webpackJsonpcheap_app=this.webpackJsonpcheap_app||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(22),n=c.n(i),l=(c(29),c(12)),r=c(2),j=c(5),d=c(3),o=c(10),b=(c(18),c.p+"static/media/logo.e548eb03.png"),h=c(0),u=function(e){var t=e.text,c=e.path,s=e.menuActive;return Object(h.jsx)(j.b,{className:s,to:{pathname:c},children:"/CheapApp"!==c?Object(h.jsx)("p",{children:t}):Object(h.jsx)("img",Object(o.a)({className:"logo",src:b,alt:"Logo_SpaceX"},"alt","logo"))})},x=function(e){var t=e.addColor,c=M(),s=c.homeMenuActive,a=c.rocketMenuActive,i=c.launchMenuActive;return Object(h.jsxs)("div",{className:t,children:[Object(h.jsx)(u,{text:"Home",path:"/CheapApp",menuActive:s}),Object(h.jsx)(u,{text:"Rockets",path:"/rockets",menuActive:a}),Object(h.jsx)(u,{text:"Launches",path:"/launch",menuActive:i})]})},O=(c(36),c(17)),v=c.n(O),m=c(24),f=function(){var e=Object(m.a)(v.a.mark((function e(t,c){var s,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(200!==(s=e.sent).status){e.next=8;break}return e.next=6,s.json();case 6:a=e.sent,c(a);case 8:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),p=(c(38),function(e){var t=e.launch,c=e.id,s=t.links,a=t.launch_year,i=t.mission_name,n=t.launch_success,l=t.rocket,r=n?"LAUNCH SUCCESS":"LAUNCH FAIL",d=s.mission_patch_small,o=n?"success":"fail";return Object(h.jsxs)(j.b,{className:"cardLaunch",to:{pathname:"/launchDetail/".concat(c),state:t},children:[Object(h.jsx)("img",{src:d,className:"image-launch",alt:"Image logo"}),Object(h.jsx)("div",{className:"titleLuanch boxCenter",children:Object(h.jsx)("h1",{className:"text",children:i})}),Object(h.jsx)("div",{className:"titleLuanch boxCenter",children:Object(h.jsx)("h2",{className:"text",children:l.rocket_name})}),Object(h.jsx)("div",{className:"yearLaunch",children:Object(h.jsx)("p",{className:"text",children:a})}),Object(h.jsx)("div",{className:"resultLaunch ".concat(o),children:Object(h.jsx)("h3",{className:"text",children:r})})]})}),g=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),l=Object(r.a)(n,2),j=l[0],d=l[1],o=Object(s.useState)([]),b=Object(r.a)(o,2),u=b[0],x=b[1],O=Object(s.useState)("any"),v=Object(r.a)(O,2),m=v[0],g=v[1],N=Object(s.useState)("any"),k=Object(r.a)(N,2),_=k[0],y=k[1],A=Object(s.useState)("any"),C=Object(r.a)(A,2),S=C[0],L=C[1],E=Object(s.useState)(""),w=Object(r.a)(E,2),T=w[0],D=w[1],I=M().setlaunchMenuActive,R=function(e){i(e),d(e);var t=new Set(e.map((function(e){return e.launch_year}))),c=Array.from(t);x(c)},F=function(e){var t=e.year,s=e.result,a=e.name,i=e.rocket,n=c.slice();"any"===t||("reverse"===t?n.reverse():n=n.filter((function(e){return e.launch_year===t}))),"any"!==s&&(n=n.filter((function(e){var t="success"===s;return null===e.launch_success&&!t||e.launch_success===t}))),"any"!==i&&(n=n.filter((function(e){return e.rocket.rocket_name===i}))),n=n.filter((function(e){e.rocket.rocket_id;return e.mission_name.toLowerCase().includes(a.toLowerCase())})),d(n)};return Object(s.useEffect)((function(){return I("boxNavActive"),f("https://api.spacexdata.com/v3/launches",R),function(){I("boxNav")}}),[]),Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("div",{id:"launch-i",children:Object(h.jsx)("h1",{children:"LAUNCH"})}),Object(h.jsxs)("div",{id:"searchBar",children:[Object(h.jsxs)("div",{className:"selectBox",children:[Object(h.jsx)("div",{className:"select",children:Object(h.jsxs)("select",{name:"slct",id:"slct",onChange:function(e){var t=e.target.value;F({year:t,result:_,name:T,rocket:S}),g(t)},children:[Object(h.jsx)("option",{value:"0",selected:!0,disabled:!0,children:"YEAR"}),Object(h.jsx)("option",{value:"any",children:"ANY YEAR"}),Object(h.jsx)("option",{value:"reverse",children:"REVERSE YEAR"}),u.map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})}),Object(h.jsx)("div",{className:"select",children:Object(h.jsxs)("select",{name:"slct",id:"slct",onChange:function(e){var t=e.target.value;F({year:m,result:t,name:T,rocket:S}),y(t)},children:[Object(h.jsx)("option",{value:"0",selected:!0,disabled:!0,children:"RESULT"}),Object(h.jsx)("option",{value:"any",children:"ANY RESULT"}),Object(h.jsx)("option",{value:"success",children:"SUCCESS"}),Object(h.jsx)("option",{value:"fail",children:"FAIL"})]})}),Object(h.jsx)("div",{className:"select",children:Object(h.jsxs)("select",{name:"slct",id:"slct",onChange:function(e){var t=e.target.value;F({year:m,result:_,name:T,rocket:t}),L(t)},children:[Object(h.jsx)("option",{value:"0",selected:!0,disabled:!0,children:"ROCKET"}),Object(h.jsx)("option",{value:"any",children:"ANY ROCKET"}),Object(h.jsx)("option",{value:"Falcon 1",children:"Falcon 1"}),Object(h.jsx)("option",{value:"Falcon 9",children:"Falcon 9"}),Object(h.jsx)("option",{value:"Falcon Heavy",children:"Falcon Heavy"})]})})]}),Object(h.jsx)("div",{className:"input",children:Object(h.jsx)("input",{value:T,onChange:function(e){var t=e.target.value;F({year:m,result:_,name:t,rocket:S}),D(t)},placeholder:"Search name"})})]}),Object(h.jsx)("div",{id:"launchDetails",children:Object(h.jsx)("div",{id:"boxDetail",children:j.map((function(e,t){return Object(h.jsx)(p,{id:e.flight_number,launch:e},t)}))})}),Object(h.jsx)("div",{id:"endling"})]})},N=function(e){var t=e.rocket,c=t.rocket_id,s=t.flickr_images,a=t.rocket_name,i=t.description;return Object(h.jsx)("div",{className:"box",children:Object(h.jsx)(j.b,{className:"boxRocketLink",to:{pathname:"/rocketsDetail/".concat(c),state:{rocket:t}},children:Object(h.jsxs)("div",{className:"content",style:{backgroundImage:"url(".concat(s[0],")")},children:[Object(h.jsx)("h3",{children:a}),Object(h.jsx)("p",{children:i})]})})})},k=(c(39),function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],n=M().setRocketMenuActive;return Object(s.useEffect)((function(){return n("boxNavActive"),f("https://api.spacexdata.com/v3/rockets",i),function(){n("boxNav")}}),[]),Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsxs)("div",{id:"rocket-i",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"ROCKET"})}),Object(h.jsx)("div",{className:"gradientColor"})]}),Object(h.jsx)("div",{className:"container",children:c.map((function(e){return Object(h.jsx)(N,{rocket:e},e.rocket_id)}))})]})}),_=(c(20),function(e){var t=e.history,c=e.id,s=e.length,a=t.title,i=t.details,n=t.event_date_utc,l=new Date(n),r=s-1,j=l.getDate(),d=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][l.getMonth()],o=l.getFullYear();return Object(h.jsxs)("div",{className:"card",children:[0===c?Object(h.jsxs)("div",{className:"boxLines",children:[Object(h.jsx)("div",{className:"cycleLine"}),Object(h.jsx)("div",{className:"breakLine"})]}):Object(h.jsx)(h.Fragment,{}),Object(h.jsxs)("div",{className:"detail",children:[Object(h.jsxs)("div",{className:"dateCard",children:[Object(h.jsx)("h1",{children:j}),Object(h.jsx)("h1",{children:d}),Object(h.jsx)("h1",{children:o})]}),Object(h.jsxs)("div",{className:"textCard",children:[Object(h.jsx)("h1",{className:"titleCard",children:a}),Object(h.jsx)("p",{className:"detailCard",children:i})]})]}),Object(h.jsxs)("div",{className:"boxLines",children:[Object(h.jsx)("div",{className:"breakLine"}),c===r?Object(h.jsx)("div",{className:"cycleLine"}):Object(h.jsx)(h.Fragment,{})]})]})}),y=function(){var e=Object(s.useState)({}),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),l=Object(r.a)(n,2),j=l[0],d=l[1],o=Object(s.useState)(1),u=Object(r.a)(o,2),x=u[0],O=u[1];Object(s.useEffect)((function(){f("https://api.spacexdata.com/v3/info",i),f("https://api.spacexdata.com/v3/history",d)}),[]);return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsxs)("div",{className:"boxImage",children:[Object(h.jsx)("div",{id:"opcitryWrapI"}),Object(h.jsx)("img",{id:"name-i-image",src:b,alt:"SpaceX_logo"}),Object(h.jsx)("p",{id:"detail-i-image",children:c.summary})]}),Object(h.jsxs)("div",{id:"boxHistories",children:[Object(h.jsxs)("div",{id:"box-h-text",children:[Object(h.jsx)("h1",{children:"HISTORIES"}),Object(h.jsx)("p",{children:'"I think it is possible for ordinary people to choose to be extraoridnay." - Elon Musk'})]}),Object(h.jsx)("div",{id:"gradientColor"})]}),Object(h.jsx)("div",{id:"boxCard",children:Object(h.jsxs)("div",{id:"boxCard-C-G",children:[Object(h.jsxs)("div",{id:"viewMore",style:{opacity:x},children:[Object(h.jsx)("div",{className:"boxView",children:Object(h.jsx)("p",{children:"VIEW MORE DETAILS"})}),Object(h.jsx)("div",{className:"boxView",children:Object(h.jsx)("div",{id:"triangleMore",className:"shapes"})})]}),Object(h.jsx)("div",{id:"gradientColor-U"}),Object(h.jsxs)("div",{id:"boxCardContent",onScroll:function(e){var t=e.target.scrollTop;t>0?O(0):0===t&&O(1)},children:[j.map((function(e,t){return Object(h.jsx)(_,{id:t,length:j.length,history:e},e.id)})),x&&Object(h.jsx)("div",{})]}),Object(h.jsx)("div",{id:"gradientColor-D"})]})}),Object(h.jsx)("div",{id:"endingLine"})]})},A=function(e){var t=e.title,c=e.data,s=Object.keys(c);return Object(h.jsxs)("div",{className:"detailList",children:[Object(h.jsx)("div",{className:"titleDetailList",children:Object(h.jsx)("h3",{children:t})}),Object(h.jsx)("div",{className:"detailListInfo",children:s.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:e})}),Object(h.jsx)("p",{children:c[e]})]})}))})]})},C=function(e){var t=e.rocket,c=t.payload_weights,a=t.engines,i=t.first_stage,n=t.second_stage,r=t.flickr_images[0],j={height:"".concat(t.height.meters," m (").concat(t.height.feet," ft)"),diameter:"".concat(t.diameter.meters," m (").concat(t.diameter.feet," ft)"),mass:"".concat(t.mass.kg," kg (").concat(t.mass.lb," lb)")},d=c.reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(o.a)({},t.name,"".concat(t.kg," kg (").concat(t.lb," lb)")))}),{}),b={isp:a.isp.sea_level,thrust:"".concat(a.thrust_sea_level.kN," kN (").concat(a.thrust_sea_level.lbf," lbf)")},u={isp:a.isp.vacuum,thrust:"".concat(a.thrust_vacuum.kN," kN (").concat(a.thrust_vacuum.lbf," lbf)")},x={thrust:"".concat(i.thrust_sea_level.kN," kN (").concat(a.thrust_sea_level.lbf," lbf)")},O={thrust:"".concat(i.thrust_vacuum.kN," kN (").concat(a.thrust_vacuum.lbf," lbf)")},v={thrust:"".concat(n.thrust.kN," kN (").concat(n.thrust.lbf," lbf)")},m={option1:n.payloads.option_1||"-",option2:n.payloads.option_2||"-"},f=n.payloads.composite_fairing,p={height:"".concat(f.height.meters," m (").concat(f.height.feet," ft)"),diameter:"".concat(f.diameter.meters," m (").concat(f.diameter.feet," ft)")};return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"containerDetail",children:[Object(h.jsxs)("div",{className:"detail",id:"titleDetail",children:[Object(h.jsx)("h1",{children:t.rocket_name}),Object(h.jsx)("p",{children:t.description})]}),Object(h.jsxs)("div",{className:"detail",id:"aboutDetail",children:[Object(h.jsxs)("div",{className:"detailLeft",children:[Object(h.jsxs)("div",{className:"detailLeftInfo",children:[Object(h.jsx)("h2",{children:"engines"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"type :"})," ",a.type]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"number :"})," ",a.number]}),Object(h.jsxs)("div",{className:"detailListRow",children:[Object(h.jsx)(A,{title:"sea level",data:b}),Object(h.jsx)(A,{title:"vacuum",data:u})]})]}),Object(h.jsxs)("div",{className:"detailLeftInfo",children:[Object(h.jsx)("h2",{children:"first stage"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"fuel amount tons : "})," ",i.fuel_amount_tons]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"burn time sec : "})," ",i.burn_time_sec]}),Object(h.jsxs)("div",{className:"detailListRow",children:[Object(h.jsx)(A,{title:"sea level",data:x}),Object(h.jsx)(A,{title:"vacuum",data:O})]})]}),Object(h.jsxs)("div",{className:"detailLeftInfo",children:[Object(h.jsx)("h2",{children:"second stage"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"fuel amount tons : "})," ",n.fuel_amount_tons]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"burn time sec : "})," ",n.burn_time_sec]}),Object(h.jsxs)("div",{className:"detailListRow",children:[Object(h.jsx)(A,{title:"thrust",data:v}),Object(h.jsx)(A,{title:"payload",data:m})]}),Object(h.jsx)("div",{className:"detailListCol",children:Object(h.jsx)(A,{title:"payload composite fairing",data:p})})]})]}),Object(h.jsxs)("div",{className:"detailRight",children:[Object(h.jsx)("div",{className:"detailImage",children:Object(h.jsx)("img",{src:r,width:"100%"})}),Object(h.jsxs)("div",{className:"detailLeftInfo",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"first flight :"})," ",t.first_flight]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"rocket_type:"})," ",t.rocket_type]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"country :"})," ",t.country]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"company :"})," ",t.company]})]}),Object(h.jsx)(A,{title:"size",data:j}),Object(h.jsx)(A,{title:"payload weights",data:d}),Object(h.jsx)("div",{className:"detailImage",children:t.flickr_images.slice(1).map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:e,width:"100%"})},e)}))})]})]})]})})},S=(c(40),function(){var e=Object(d.f)(),t=Object(d.g)().rocketId,c=Object(s.useState)(void 0),a=Object(r.a)(c,2),i=a[0],n=a[1],l="https://api.spacexdata.com/v3/rockets/".concat(t),j=M().setRocketMenuActive;return Object(s.useEffect)((function(){return j("boxNavActive"),void 0===e.state?f(l,n):n(e.state.rocket),function(){j("boxNav")}}),[]),Object(h.jsxs)("div",{className:"rocketBackground",children:[Object(h.jsx)("div",{className:"navDummy"}),Object(h.jsx)("div",{className:"gradient",children:void 0!==i&&Object(h.jsx)(C,{rocket:i})})]})}),L=(c(21),function(e){var t=e.leftText,c=e.rightText,s=e.title,a=e.success,i=e.button,n=e.id,l=s?"title":"",r=a?"success":void 0===a?"":"fail";return Object(h.jsxs)("div",{className:"boxTextDetail",children:[Object(h.jsx)("div",{className:"leftText",children:Object(h.jsx)("h1",{className:"detailText ".concat(l," ").concat(r),children:t})}),Object(h.jsxs)("div",{className:"rightText",children:[!i&&Object(h.jsx)("h1",{className:"detailText ".concat(l," ").concat(r),children:c}),i&&Object(h.jsx)(j.b,{id:"buttonRocket",to:"/rocketsDetail/".concat(n),children:c})]})]})}),E=function(e){var t,c=e.launch,s=c.launch_date_utc,a=c.mission_name,i=c.rocket,n=c.launch_site,l=c.launch_failure_details,r=c.details,j=c.launch_success,d=c.links,o=i.rocket_name,b=i.rocket_id,u=i.rocket_type,x=i.second_stage.payloads[0],O=x.payload_id,v=x.payload_type,m=l||{},f=m.time,p=m.reason,g=d.mission_patch_small,N=n.site_name,k=new Date(s),_=k.getDate(),y=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][k.getMonth()],A=k.getFullYear();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{id:"detail-b"}),Object(h.jsx)("div",{className:"space-b"}),Object(h.jsxs)("div",{id:"boxDetail-1",children:[Object(h.jsxs)("div",{id:"date",children:[Object(h.jsx)("h1",{children:_}),Object(h.jsx)("h1",{children:y}),Object(h.jsx)("h1",{children:A})]}),Object(h.jsxs)("div",{id:"im-detail",children:[Object(h.jsx)(L,{leftText:"MISSION",rightText:a,title:!0,button:!1}),Object(h.jsx)(L,{leftText:o,rightText:"ROCKET DETAIL",title:!1,button:!0,id:b}),Object(h.jsx)(L,{leftText:"TYPE",rightText:u,title:!1,button:!1}),(t=j,t?Object(h.jsx)(L,{success:t,leftText:"LAUNCH SUCCESS",rightText:"",title:!1,button:!1}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(L,{success:t,leftText:"LAUNCH FAIL",rightText:"".concat(f," Times"),title:!1}),Object(h.jsx)(L,{success:t,leftText:"",rightText:p,title:!1,button:!1})]}))]}),Object(h.jsx)("div",{id:"logoImage",children:Object(h.jsx)("img",{src:g,alt:"Logo"})})]}),Object(h.jsx)("div",{className:"space-b"}),Object(h.jsxs)("div",{id:"detailLaunch",children:[Object(h.jsx)("h1",{children:"Detail"}),Object(h.jsxs)("div",{className:"textDetail",children:[Object(h.jsx)("h3",{children:"PAYLOAD :"}),Object(h.jsx)("h3",{children:O})]}),Object(h.jsxs)("div",{className:"textDetail",children:[Object(h.jsx)("h3",{children:"TYPE :"}),Object(h.jsx)("h3",{children:v})]}),Object(h.jsxs)("div",{className:"textDetail",children:[Object(h.jsx)("h3",{children:"LAUNCH SITE :"}),Object(h.jsx)("h3",{children:N})]}),Object(h.jsx)("div",{id:"underlineDetail"}),Object(h.jsx)("div",{id:"longReason",children:r})]}),Object(h.jsx)("div",{className:"space-b"}),Object(h.jsxs)("div",{id:"showcase",children:[d.youtube_id&&Object(h.jsxs)("div",{id:"video",children:[Object(h.jsx)("h1",{className:"titleShowcase-t",children:"Video"}),Object(h.jsx)("iframe",{id:"videoShowcase",src:"https://www.youtube.com/embed/".concat(d.youtube_id,"/"),allowFullScreen:!0})]}),0===d.flickr_images.length?null:Object(h.jsxs)("div",{id:"gallaryShowcase",children:[Object(h.jsx)("h1",{className:"titleShowcase-t",children:"Gallary"}),Object(h.jsx)("div",{className:"gallary",children:d.flickr_images.map((function(e){return Object(h.jsx)("img",{src:e,class:"imageShowcase",alt:e})}))})]})]})]})},w=function(){var e=Object(d.f)(),t=Object(d.g)().launchId,c=Object(s.useState)(!1),a=Object(r.a)(c,2),i=a[0],n=a[1],l=M().setlaunchMenuActive;return Object(s.useEffect)((function(){if(l("boxNavActive"),void 0===e.state){var c="https://api.spacexdata.com/v3/launches/".concat(t);f(c,n)}else n(e.state);return function(){l("boxNav")}}),[]),Object(h.jsx)(h.Fragment,{children:i&&Object(h.jsx)(E,{launch:i})})},T=window.innerHeight,D=Object(s.createContext)(),I={navBar:"navBar",histories:"name-i-b",detail:"name-i-b"},R={navBar:"navBar addColor",histories:"name-i-b leftStyle",detail:"name-i-b rightStyle"},F=function(){var e=Object(s.useState)(I),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)("boxNav"),n=Object(r.a)(i,2),o=n[0],b=n[1],u=Object(s.useState)("boxNav"),O=Object(r.a)(u,2),v=O[0],m=O[1],f=Object(s.useState)("boxNav"),p=Object(r.a)(f,2),N=p[0],_=p[1],A=Object(s.useCallback)((function(){var e=Object(l.a)({},c);window.pageYOffset/T*100+100>110&&c.navBar===I.navBar?e.navBar=R.navBar:e.navBar=I.navBar,a(e)}),[]);return Object(s.useEffect)((function(){return window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}),[]),Object(h.jsx)(j.a,{children:Object(h.jsxs)(D.Provider,{value:{homeMenuActive:o,sethomeMenuActive:b,rocketMenuActive:v,setRocketMenuActive:m,launchMenuActive:N,setlaunchMenuActive:_},children:[Object(h.jsx)(x,{addColor:c.navBar}),Object(h.jsx)("div",{id:"content",children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/CheapApp",children:Object(h.jsx)(y,{})}),Object(h.jsx)(d.a,{path:"/launch",children:Object(h.jsx)(g,{})}),Object(h.jsx)(d.a,{path:"/rockets",children:Object(h.jsx)(k,{})}),Object(h.jsx)(d.a,{path:"/rocketsDetail/:rocketId",children:Object(h.jsx)(S,{})}),Object(h.jsx)(d.a,{path:"/launchDetail/:launchId",children:Object(h.jsx)(w,{})})]})})]})})},M=function(){return Object(s.useContext)(D)};var B=function(){return Object(h.jsx)(F,{})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),U()}},[[41,1,2]]]);
//# sourceMappingURL=main.4a17f5c4.chunk.js.map