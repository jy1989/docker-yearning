(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1238aed9"],{8610:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Card",[n("div",{staticClass:"step-header-con"},[n("h3",[t._v(t._s(t.stepData.title))]),n("h5",[t._v(t._s(t.stepData.describe))]),n("h4",{staticStyle:{"margin-top":"5%"}},[t._v(t._s(t.stepData.content))]),n("br"),n("br"),n("Button",{on:{click:t.back}},[t._v("返回")]),n("Button",{on:{click:t.del}},[t._v("撤销")])],1),n("div",{staticClass:"step-content",staticStyle:{height:"150px"}}),n("Steps",{staticStyle:{"margin-left":"10%"},attrs:{current:1}},t._l(t.stepList1,function(t){return n("Step",{key:t.title,attrs:{title:t.title,content:t.describe}})}),1)],1)],1)],1)},a=[],i=n("bc3a"),c=n.n(i),r={name:"put_ready",props:["msg"],data:function(){return{stepData:{title:"Yearning SQL查询系统",describe:"欢迎你！ ".concat(sessionStorage.getItem("user")),content:"你的工单已提交审核，请等待管理员批准！"},step:{remark:"",timer:""},stepList1:[{title:"提交",describe:"提交查询申请"},{title:"审核",describe:"等待审核结果"},{title:"查询",describe:"审核完毕，进入查询页面"}]}},methods:{back:function(){this.$router.push({name:"home_index"})},del:function(){var t=this;c.a.delete("".concat(this.$config.url,"/query/undo")).then(function(){t.$router.push({name:"query"})})}},mounted:function(){var t=this;c.a.put("".concat(this.$config.url,"/query/status")).then(function(e){1===e.data.status&&t.$router.push({name:"querypage"})})}},u=r,o=(n("a4cb"),n("2877")),l=Object(o["a"])(u,s,a,!1,null,null,null);e["default"]=l.exports},a4cb:function(t,e,n){"use strict";var s=n("cd64"),a=n.n(s);a.a},cd64:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1238aed9.f764be90.js.map