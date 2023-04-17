(this["webpackJsonpreact-coingecko-api"]=this["webpackJsonpreact-coingecko-api"]||[]).push([[0],{39:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(32),a=c.n(n),r=(c(38),c(39),c(12)),i=c(4),l=c.n(i),j=c(6),d=c(5),o=c(33),x=c.n(o),b=c(1),m=function(e){var t=e.coin,c=e.index,s=e.onSelectCoin,n=e.selectedCoin;return Object(b.jsxs)("tr",{onClick:function(){s(t)},style:{cursor:"pointer",backgroundColor:n&&n.id===t.id?"#212529":""},children:[Object(b.jsx)("td",{className:"text-muted",children:c}),Object(b.jsxs)("td",{children:[Object(b.jsx)("img",{src:t.image,alt:"",className:"img-fluid me-4",style:{width:"3%"}}),Object(b.jsx)("span",{children:t.name}),Object(b.jsx)("span",{className:"ms-3 text-muted",children:t.symbol})]}),Object(b.jsxs)("td",{children:["$",t.current_price.toLocaleString()]}),Object(b.jsxs)("td",{className:t.price_change_percentage_24h>0?"text-success":"text-danger",children:[t.price_change_percentage_24h.toFixed(2),"%"]}),Object(b.jsxs)("td",{children:["$",t.total_volume.toLocaleString()]})]})},u=["#","Coin","Precio","Cambios","24h Volume"],h=function(e){var t=e.coins,c=e.search,s=e.onSelectCoin,n=e.selectedCoin,a=null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(b.jsxs)("table",{className:"table table-dark mt-4 table-hover",id:"tabla-price",children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:u.map((function(e,t){return Object(b.jsx)("th",{children:e},t)}))})}),Object(b.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(b.jsx)(m,{coin:e,index:t+1,onSelectCoin:s,selectedCoin:n},e.id)}))})]})},p=function(e){var t,c=e.coin;return c?Object(b.jsx)("div",{className:"col-md-4 w-30",children:Object(b.jsx)("div",{id:"card-principal",className:"mt-4",children:Object(b.jsxs)("div",{id:"card",className:"card-body",children:[Object(b.jsx)("img",{src:c.image,alt:"",className:"img-fluid mb-4",onError:function(e){e.target.onerror=null,e.target.src="https://via.placeholder.com/150"}}),Object(b.jsxs)("h4",{className:"card-title",children:[c.name," (",c.symbol.toUpperCase(),")"]}),Object(b.jsx)("p",{className:"card-text",children:null===(t=c.description)||void 0===t?void 0:t.en}),Object(b.jsxs)("div",{className:"card-text d-flex justify-content-between align-items-center",children:[Object(b.jsx)("span",{className:"text-muted",children:"Precio Actual:"}),Object(b.jsx)("span",{className:"",children:c.current_price})]}),Object(b.jsxs)("div",{className:"card-text d-flex justify-content-between align-items-center",children:[Object(b.jsx)("span",{className:"text-muted",children:"Cambio de Precio (24h):"}),Object(b.jsxs)("span",{className:c.price_change_percentage_24h>0?"text-success":"text-danger",children:[c.price_change_percentage_24h.toFixed(2),"%"]})]}),Object(b.jsxs)("div",{className:"card-text d-flex justify-content-between align-items-center",children:[Object(b.jsx)("span",{className:"text-muted",children:"Mercado:"}),Object(b.jsx)("span",{className:"",children:c.market_cap})]}),Object(b.jsxs)("div",{className:"card-text d-flex justify-content-between align-items-center",children:[Object(b.jsx)("span",{className:"text-muted",children:"Volumen Total:"}),Object(b.jsx)("span",{className:"",children:c.total_volume})]}),Object(b.jsxs)("div",{className:"card-text d-flex justify-content-between align-items-center",children:[Object(b.jsx)("span",{className:"text-muted",children:"Circulacion:"}),Object(b.jsx)("span",{className:"",children:c.circulating_supply})]}),Object(b.jsxs)("div",{className:"card-text d-flex justify-content-between align-items-center",children:[Object(b.jsx)("span",{className:"text-muted",children:"Suministro Total:"}),Object(b.jsx)("span",{className:"",children:c.total_supply})]})]})})}):null};var O=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(d.a)(a,2),i=r[0],o=r[1],m=Object(s.useState)(null),u=Object(d.a)(m,2),O=u[0],f=u[1],g=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");case 3:t=e.sent,n(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){g()}),[]),Object(b.jsx)("div",{id:"container",className:"container",children:Object(b.jsxs)("div",{className:"d-flex p-2 flex-wrap flex-row-reverse",children:[Object(b.jsx)("input",{type:"text",placeholder:"Busca una Coin",className:"form-control bg-dark text-light border-0 mt-4 text-center",autoFocus:!0,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)(h,{coins:c,search:i,onSelectCoin:function(e){f(e)}}),Object(b.jsx)(p,{coin:O})]})})},f=(c(60),function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("nav",{id:"menu",children:[Object(b.jsxs)("a",{className:"logosteam",href:"",children:[Object(b.jsx)("i",{class:"fa-sharp fa-solid fa-coins fa-beat-fade"}),Object(b.jsx)("span",{className:"span",children:"Cripto Api"})]}),Object(b.jsxs)("ul",{className:"ul",children:[Object(b.jsx)("li",{className:"li",children:Object(b.jsx)(r.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)(r.b,{to:"./compra",children:"ComprasCoins"})})]})]})})}),g=c(3);var v=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(O,{})})},N=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"compras"}),Object(b.jsx)("h2",{children:"xD"})]})},_=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{path:"/",element:Object(b.jsx)(v,{})}),Object(b.jsx)(g.a,{path:"./inicio",element:Object(b.jsx)(v,{})}),Object(b.jsx)(g.a,{path:"/compra",element:Object(b.jsx)(N,{})})]})})},C=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{}),Object(b.jsx)(_,{})]})};a.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c17da682.chunk.js.map