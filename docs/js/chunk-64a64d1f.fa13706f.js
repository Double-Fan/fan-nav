(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64a64d1f"],{4816:function(e,t,a){"use strict";a("c3a6")},"9c40":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchbar"},[a("button",{staticClass:"btn btn-logo",on:{click:e.toggleSearchType}},[0==e.searchType?a("i",{staticClass:"fab fa-google"}):a("i",{staticClass:"fas fa-paw"})]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],ref:"search-input",staticClass:"search-input",attrs:{type:"text"},domProps:{value:e.keyword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)},input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),a("button",{staticClass:"btn btn-search",on:{click:e.search}},[a("i",{staticClass:"fas fa-search",staticStyle:{color:"#9aa0a6"}})])])},c=[],n={name:"SearchBar",data:function(){return{keyword:"",searchType:0}},methods:{toggleSearchType:function(){0==this.searchType?this.searchType=1:this.searchType=0},search:function(){switch(this.searchType){case 1:window.open("https://www.baidu.com/s?wd=".concat(this.keyword),"_self");break;default:window.open("https://www.google.com/search?q=".concat(this.keyword),"_self")}}},mounted:function(){this.$refs["search-input"].focus()}},o=n,r=(a("4816"),a("2877")),i=Object(r["a"])(o,s,c,!1,null,"6e1cfe4c",null);t["default"]=i.exports},c3a6:function(e,t,a){}}]);
//# sourceMappingURL=chunk-64a64d1f.fa13706f.js.map