(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mine"],{"81bd":function(e,t,n){"use strict";var r=n("c481"),o=n.n(r);o.a},a621:function(e,t,n){"use strict";n.r(t);var r=n("d48b"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},c481:function(e,t,n){},c514:function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))},d48b:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{}},computed:i({},(0,r.mapState)(["userInfo","appProperties"])),onLoad:function(){var t=this;if(t.$request("/config","get").then((function(e){console.log("刷新配置信息:"+JSON.stringify(e.data)),t.$store.commit("set_app_properties",e.data)})),!this.userInfo){var n=e.getStorageSync("userInfo");n&&(console.log("不登录，走本地缓存"),this.$store.commit("login",n))}},methods:{login:function(){e.navigateTo({url:"/pages/login/login"})},logout:function(){var t=this;this.userInfo?e.showModal({content:"是否退出登录?",cancelText:"取消",confirmText:"退出登录",success:function(n){n.confirm&&t.$request("/user/logout","delete").then((function(n){t.$store.commit("logout"),e.reLaunch({url:"/pages/login/login"})}))}}):this.$msg("请先登录")},toZaixiankefu:function(){e.navigateTo({url:"/pages/services/zai_xian_ke_fu/zai_xian_ke_fu"})},addresses:function(){this.userInfo?e.navigateTo({url:"/pages/address/address"}):this.login()},orders:function(){this.userInfo?e.navigateTo({url:"/pages/orders/orders"}):this.login()},userinfo:function(){this.userInfo?e.navigateTo({url:"/pages/mine/userinfo"}):this.login()},services:function(){e.navigateTo({url:"/pages/services/services"})}}};t.default=c}).call(this,n("543d")["default"])},dc10:function(e,t,n){"use strict";(function(e){n("10b9");r(n("66fd"));var t=r(n("eba9"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},eba9:function(e,t,n){"use strict";n.r(t);var r=n("c514"),o=n("a621");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("81bd");var u,c=n("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"6d148a25",null,!1,r["a"],u);t["default"]=a.exports}},[["dc10","common/runtime","common/vendor"]]]);