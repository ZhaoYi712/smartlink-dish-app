(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/orders/detail"],{1848:function(e,n,t){"use strict";var r={listCell:function(){return t.e("components/list-cell/list-cell").then(t.bind(null,"a486"))}},o=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}))},1854:function(e,n,t){"use strict";t.r(n);var r=t("1848"),o=t("f2f9");for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t("e38e");var i,c=t("f0c5"),l=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"46bc196c",null,!1,r["a"],i);n["default"]=l.exports},"482b":function(e,n,t){"use strict";(function(e){t("10b9");r(t("66fd"));var n=r(t("1854"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},4973:function(e,n,t){},"525f":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(t("17e7"));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){t.e("components/list-cell/list-cell").then(function(){return resolve(t("a486"))}.bind(null,t)).catch(t.oe)},u={components:{listCell:o},data:function(){return{orderInfo:{}}},onLoad:function(e){var n=e.orderNo;n&&this.getOrderInfo(n)},methods:{getOrderInfo:function(e){var n=this;this.$request("/order/detail/"+e,"get").then((function(e){n.orderInfo=e.data,console.log(JSON.stringify(e.data))}))},review:function(){e.navigateTo({url:"/pages/review/review"})}}};n.default=u}).call(this,t("543d")["default"])},e38e:function(e,n,t){"use strict";var r=t("4973"),o=t.n(r);o.a},f2f9:function(e,n,t){"use strict";t.r(n);var r=t("525f"),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a}},[["482b","common/runtime","common/vendor"]]]);