(function(e){function t(t){for(var a,c,r=t[0],i=t[1],s=t[2],d=0,h=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(h.length)h.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o={app:0},u=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09a7d835":"ac61b234","chunk-0c21a872":"33ddb443","chunk-2d0a4f7a":"2a2d4743","chunk-2d0aa214":"fa978395","chunk-2d0ce784":"22fa4b46","chunk-2d210f9a":"e2806550","chunk-2f69588e":"3940ab03","chunk-3802c676":"0483e3c5","chunk-40a6244d":"4c265a55","chunk-574a39a0":"e1a9fa6a","chunk-6eba7550":"3629db59","chunk-7e6c5d19":"7d9c266a","chunk-7e817746":"46a7025b","chunk-ed14c250":"fe80fc70"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09a7d835":1,"chunk-0c21a872":1,"chunk-2f69588e":1,"chunk-3802c676":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-09a7d835":"52c7c3c3","chunk-0c21a872":"e6444225","chunk-2d0a4f7a":"31d6cfe0","chunk-2d0aa214":"31d6cfe0","chunk-2d0ce784":"31d6cfe0","chunk-2d210f9a":"31d6cfe0","chunk-2f69588e":"859f4391","chunk-3802c676":"859f4391","chunk-40a6244d":"31d6cfe0","chunk-574a39a0":"31d6cfe0","chunk-6eba7550":"31d6cfe0","chunk-7e6c5d19":"31d6cfe0","chunk-7e817746":"31d6cfe0","chunk-ed14c250":"31d6cfe0"}[e]+".css",o=i.p+a,u=document.getElementsByTagName("link"),r=0;r<u.length;r++){var s=u[r],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return t()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){s=h[r],d=s.getAttribute("data-href");if(d===a||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete c[e],p.parentNode.removeChild(p),n(u)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=r(e);var h=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",h.name="ChunkLoadError",h.type=a,h.request=c,n[1](h)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var p=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={name:"App"},r=u,i=(n("5c0b"),n("2877")),s=Object(i["a"])(r,c,o,!1,null,null,null),d=s.exports,h=(n("d3b7"),n("8c4f")),p=h["a"].prototype.push;h["a"].prototype.push=function(e){return p.call(this,e).catch((function(e){return e}))},a["default"].use(h["a"]);var f=[{path:"*",redirect:"/"},{path:"/login",name:"Login",component:function(){return n.e("chunk-0c21a872").then(n.bind(null,"ddb4"))}},{path:"/",component:function(){return n.e("chunk-40a6244d").then(n.bind(null,"1511"))},children:[{path:"/",name:"UserHome",component:function(){return n.e("chunk-3802c676").then(n.bind(null,"4c92"))}},{path:"introduce",name:"Introduce",component:function(){return n.e("chunk-2d0ce784").then(n.bind(null,"601e"))}},{path:"products",name:"Products",component:function(){return n.e("chunk-6eba7550").then(n.bind(null,"6a2e"))}},{path:"product/:productId",name:"Product",component:function(){return n.e("chunk-2f69588e").then(n.bind(null,"5e61"))}},{path:"favorite",name:"Favorite",component:function(){return n.e("chunk-ed14c250").then(n.bind(null,"8b72"))}},{path:"coupons",name:"Coupons",component:function(){return n.e("chunk-2d0aa214").then(n.bind(null,"1065"))}},{path:"order",name:"Order",component:function(){return n.e("chunk-2d0a4f7a").then(n.bind(null,"0961"))}},{path:"checkout/:orderId",name:"CheckOut",component:function(){return n.e("chunk-2d210f9a").then(n.bind(null,"b9d1"))}}]},{path:"/admin",name:"Backstage",meta:{requiresAuth:!0},component:function(){return n.e("chunk-09a7d835").then(n.bind(null,"25eb"))},children:[{path:"productslist",name:"ProductsList",component:function(){return n.e("chunk-7e817746").then(n.bind(null,"a54c"))},meta:{requiresAuth:!0}},{path:"orderslist",name:"OrdersList",component:function(){return n.e("chunk-7e6c5d19").then(n.bind(null,"1f34"))},meta:{requiresAuth:!0}},{path:"couponslist",name:"CouponsList",component:function(){return n.e("chunk-574a39a0").then(n.bind(null,"5932"))},meta:{requiresAuth:!0}}]}],l=new h["a"]({scrollBehavior:function(e,t,n){return{x:0,y:0}},linkActiveClass:"active",routes:f}),m=l,g=n("bc3a"),v=n.n(g),y=n("a7fe"),b=n.n(y),k=(n("4989"),n("9062")),E=n.n(k),A=(n("e40d"),n("7bb1")),S=n("427f"),T=n.n(S),M=n("a925"),O=n("f5af"),_=n.n(O),L=(n("e829"),n("b311")),C=n.n(L),w=n("7212"),P=n.n(w);a["default"].prototype.$bus=new a["default"];n("a9e3"),n("b680"),n("ac1f"),n("5319");var D=function(e){var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,(function(e,t,n){var a=t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return a})))},I=function(e){var t=new Date(1e3*e);return t.toLocaleDateString()},x=(n("99af"),n("c740"),n("4160"),n("a434"),n("159b"),n("2f62"));a["default"].use(x["a"]);var F=new x["a"].Store({strict:!0,state:{isLoading:!1,products:[],messages:[],myFavorite:JSON.parse(localStorage.getItem("myFavorite"))||[],cart:{carts:{}},totalQty:0,sameProduct:!1,itemId:""},actions:{updataLoading:function(e,t){e.commit("LOADING",t)},getProducts:function(e){e.dispatch("updataLoading",!0);var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/products/all");v.a.get(t).then((function(t){e.commit("GET_PRODUCTS",t),e.dispatch("updataLoading",!1)}))},getCart:function(e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/cart");v.a.get(t).then((function(t){t.data.success&&e.commit("GET_CART",t.data.data)}))},delCart:function(e,t){e.dispatch("updataLoading",!0);var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/cart/").concat(t.id);console.log(t.id),v.a.delete(n).then((function(t){e.dispatch("getCart"),e.dispatch("updateMessage",{message:"商品已刪除",status:"danger"}),e.dispatch("updataLoading",!1)}))},updateMessage:function(e,t){var n=t.message,a=t.status,c=Math.floor(new Date/1e3);e.commit("UPDATE_MESSAGE",{message:n,status:a,timestamp:c}),e.dispatch("removeMessageWithTiming",c)},removeMessage:function(e,t){e.commit("REMOVE_MESSAGE",t)},removeMessageWithTiming:function(e,t){setTimeout((function(){e.commit("REMOVE_MESSAGE_TIMING",t)}),3e3)},addToCart:function(e,t){var n=t.id,a=t.qty;if(e.dispatch("updataLoading",!0),e.dispatch("getCart"),e.commit("ADD_SAMEPRODUCT",{id:n,qty:a}),e.state.sameProduct){console.log(e.state.itemId);var c="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/cart/").concat(e.state.itemId),o="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/cart"),u={product_id:n,qty:e.state.totalQty};v.a.delete(c).then((function(){return v.a.post(o,{data:u})})).then((function(t){e.dispatch("updateMessage",{message:t.data.message,status:"success"}),e.dispatch("getCart"),e.dispatch("updataLoading",!1)}))}else{var r="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/cart"),i={product_id:n,qty:a};v.a.post(r,{data:i}).then((function(t){t.data.success?e.dispatch("updateMessage",{message:t.data.message,status:"success"}):e.dispatch("updateMessage",{message:t.data.message,status:"danger"}),e.dispatch("getCart"),e.dispatch("updataLoading",!1)}))}},addMyFavorite:function(e,t){e.commit("ADD_MYFAVORITE",t)}},mutations:{LOADING:function(e,t){e.isLoading=t},GET_PRODUCTS:function(e,t){e.products=t.data.products,e.products.forEach((function(e){a["default"].set(e,"isLike",!1)})),e.products.forEach((function(t){e.myFavorite.forEach((function(e){e===t.id&&(t.isLike=!0)}))}))},GET_CART:function(e,t){e.cart=t},UPDATE_MESSAGE:function(e,t){var n=t.message,a=t.status,c=t.timestamp;e.messages.push({message:n,status:a,timestamp:c})},REMOVE_MESSAGE:function(e,t){e.messages.splice(t,1)},REMOVE_MESSAGE_TIMING:function(e,t){e.messages.forEach((function(n,a){n.timestamp===t&&e.messages.splice(a,1)}))},ADD_MYFAVORITE:function(e,t){e.products.forEach((function(e){e.id===t&&(e.isLike=!e.isLike)}));var n=e.myFavorite.findIndex((function(e){return e===t}));-1===n?e.myFavorite.push(t):e.myFavorite.splice(n,1),localStorage.setItem("myFavorite",JSON.stringify(e.myFavorite))},ADD_SAMEPRODUCT:function(e,t){e.totalQty=0,e.itemId="",e.sameProduct=!1,e.cart.carts.filter((function(n){n.product_id===t.id&&(e.itemId=n.id,e.sameProduct=!0,e.totalQty=t.qty+n.qty)}))}}});_.a.init({once:!0,duration:800}),a["default"].prototype.clipboard=C.a,a["default"].use(M["a"]),a["default"].use(P.a),a["default"].use(b.a,v.a),v.a.defaults.withCredentials=!0,a["default"].config.productionTip=!1,a["default"].component("Loading",E.a),a["default"].filter("currency",D),a["default"].filter("date",I);var G=new M["a"]({locale:"zhTW"});a["default"].use(A["a"],{events:"input|blur",i18n:G,dictionary:{zhTW:T.a}}),a["default"].config.productionTip=!1,new a["default"]({i18n:G,router:m,store:F,render:function(e){return e(d)}}).$mount("#app"),m.beforeEach((function(e,t,n){if(e.meta.requiresAuth){var a="".concat("https://vue-course-api.hexschool.io","/api/user/check");v.a.post(a).then((function(e){e.data.success?n():n({path:"/login"})}))}else n()}))},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),c=n.n(a);c.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ffac1c0a.js.map