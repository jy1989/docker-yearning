(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-830429d6"],{"03ce":function(e,t,r){"use strict";var o=r("5b89"),n=r.n(o);n.a},"4a4d":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Row",[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[r("Icon",{attrs:{type:"ios-crop"}}),e._v("\n        用户权限\n      ")],1),r("div",[r("Button",{attrs:{type:"primary"},on:{click:e.batchOpen}},[e._v("普通用户批量赋权")]),r("Input",{staticClass:"margin-left-10",staticStyle:{width:"15%"},attrs:{placeholder:"请填写用户名",clearable:""},model:{value:e.query.username,callback:function(t){e.$set(e.query,"username",t)},expression:"query.username"}}),r("Button",{staticClass:"margin-left-10",attrs:{type:"success"},on:{click:e.queryData}},[e._v("查询")]),r("Button",{staticClass:"margin-left-10",attrs:{type:"warning"},on:{click:e.queryCancel}},[e._v("重置")]),r("br"),r("br"),r("Table",{attrs:{border:"",columns:e.columns,data:e.data6,stripe:"",height:"550"},scopedSlots:e._u([{key:"action",fn:function(t){var o=t.row;return[r("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"info",size:"small"},on:{click:function(t){return e.editAuthGroup(o)}}},[e._v("\n              查看与编辑\n            ")]),r("Poptip",{attrs:{confirm:"",title:"确定要清空该用户的权限吗？",transfer:""},on:{"on-ok":function(t){return e.deleteAuthGroup(o)}}},[r("Button",{attrs:{type:"warning",size:"small"}},[e._v("清空权限")])],1)]}}])})],1),r("br"),r("Page",{ref:"total",attrs:{total:e.pagenumber,"show-elevator":"","page-size":10},on:{"on-change":e.splicpage}})],1)],1),r("Modal",{attrs:{width:800},model:{value:e.addAuthGroupModal,callback:function(t){e.addAuthGroupModal=t},expression:"addAuthGroupModal"}},[r("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("用户权限")]),r("Form",{attrs:{model:e.addAuthGroupForm,"label-width":120,"label-position":"top"}},[r("FormItem",{attrs:{label:"用户名"}},[e.is_more?r("Select",{attrs:{multiple:""},model:{value:e.addAuthGroupForm.more_user,callback:function(t){e.$set(e.addAuthGroupForm,"more_user",t)},expression:"addAuthGroupForm.more_user"}},e._l(e.more_user,function(e){return r("Option",{key:e,attrs:{value:e}})}),1):r("Input",{attrs:{readonly:e.isReadOnly},model:{value:e.addAuthGroupForm.groupname,callback:function(t){e.$set(e.addAuthGroupForm,"groupname",t)},expression:"addAuthGroupForm.groupname"}})],1),[r("FormItem",{attrs:{label:"DDL及索引权限:"}},[r("RadioGroup",{model:{value:e.permission.ddl,callback:function(t){e.$set(e.permission,"ddl",t)},expression:"permission.ddl"}},[r("Radio",{attrs:{label:"1"}},[e._v("是")]),r("Radio",{attrs:{label:"0"}},[e._v("否")])],1)],1),"1"===e.permission.ddl?[r("FormItem",{attrs:{label:"连接名:"}},[r("div",{staticStyle:{"border-bottom":"1px solid #e9e9e9","padding-bottom":"6px","margin-bottom":"6px"}},[r("Checkbox",{attrs:{indeterminate:e.indeterminate.ddl,value:e.checkAll.ddl},nativeOn:{click:function(t){return t.preventDefault(),e.ddlCheckAll("ddl_source","ddl","connection")}}},[e._v("全选\n              ")])],1),r("CheckboxGroup",{model:{value:e.permission.ddl_source,callback:function(t){e.$set(e.permission,"ddl_source",t)},expression:"permission.ddl_source"}},e._l(e.connectionList.connection,function(t){return r("Checkbox",{key:t.Source,attrs:{label:t.Source}},[r("Tag",{key:t.Source,attrs:{color:"purple"}},[e._v(" "+e._s(t.Source))])],1)}),1)],1)]:e._e(),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"DML权限:"}},[r("RadioGroup",{model:{value:e.permission.dml,callback:function(t){e.$set(e.permission,"dml",t)},expression:"permission.dml"}},[r("Radio",{attrs:{label:"1"}},[e._v("是")]),r("Radio",{attrs:{label:"0"}},[e._v("否")])],1)],1),"1"===e.permission.dml?[r("FormItem",{attrs:{label:"连接名:"}},[r("div",{staticStyle:{"border-bottom":"1px solid #e9e9e9","padding-bottom":"6px","margin-bottom":"6px"}},[r("Checkbox",{attrs:{indeterminate:e.indeterminate.dml,value:e.checkAll.dml},nativeOn:{click:function(t){return t.preventDefault(),e.ddlCheckAll("dml_source","dml","connection")}}},[e._v("全选\n              ")])],1),r("CheckboxGroup",{model:{value:e.permission.dml_source,callback:function(t){e.$set(e.permission,"dml_source",t)},expression:"permission.dml_source"}},e._l(e.connectionList.connection,function(t){return r("Checkbox",{key:t.Source,attrs:{label:t.Source}},[r("Tag",{key:t.Source,attrs:{color:"geekblue"}},[e._v(" "+e._s(t.Source))])],1)}),1)],1)]:e._e(),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"数据查询权限:"}},[r("RadioGroup",{model:{value:e.permission.query,callback:function(t){e.$set(e.permission,"query",t)},expression:"permission.query"}},[r("Radio",{attrs:{label:"1"}},[e._v("是")]),r("Radio",{attrs:{label:"0"}},[e._v("否")])],1)],1),"1"===e.permission.query?[r("FormItem",{attrs:{label:"连接名:"}},[r("div",{staticStyle:{"border-bottom":"1px solid #e9e9e9","padding-bottom":"6px","margin-bottom":"6px"}},[r("Checkbox",{attrs:{indeterminate:e.indeterminate.query,value:e.checkAll.query},nativeOn:{click:function(t){return t.preventDefault(),e.ddlCheckAll("query_source","query","query")}}},[e._v("全选\n              ")])],1),r("CheckboxGroup",{model:{value:e.permission.query_source,callback:function(t){e.$set(e.permission,"query_source",t)},expression:"permission.query_source"}},e._l(e.connectionList.query,function(t){return r("Checkbox",{key:t.Source,attrs:{label:t.Source}},[r("Tag",{key:t.Source,attrs:{color:"blue"}},[e._v(" "+e._s(t.Source))])],1)}),1)],1)]:e._e(),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"选择上级审核人:"}},[r("div",{staticStyle:{"border-bottom":"1px solid #e9e9e9","padding-bottom":"6px","margin-bottom":"6px"}},[r("Checkbox",{attrs:{indeterminate:e.indeterminate.person,value:e.checkAll.person},nativeOn:{click:function(t){return t.preventDefault(),e.ddlCheckAll("auditor","person","person")}}},[e._v("全选\n            ")])],1),r("CheckboxGroup",{model:{value:e.permission.auditor,callback:function(t){e.$set(e.permission,"auditor",t)},expression:"permission.auditor"}},e._l(e.connectionList.person,function(t){return r("Checkbox",{key:t.Username,attrs:{label:t.Username}},[r("Tag",{key:t.Username,attrs:{color:"cyan"}},[e._v(" "+e._s(t.Username))])],1)}),1)],1)],"admin"===e.addAuthGroupForm.rule?[r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"用户管理权限:"}},[r("RadioGroup",{model:{value:e.permission.user,callback:function(t){e.$set(e.permission,"user",t)},expression:"permission.user"}},[r("Radio",{attrs:{label:"1"}},[e._v("是")]),r("Radio",{attrs:{label:"0"}},[e._v("否")])],1)],1),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"数据库管理权限:"}},[r("RadioGroup",{model:{value:e.permission.base,callback:function(t){e.$set(e.permission,"base",t)},expression:"permission.base"}},[r("Radio",{attrs:{label:"1"}},[e._v("是")]),r("Radio",{attrs:{label:"0"}},[e._v("否")])],1)],1)]:e._e()],2),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"text"},on:{click:function(t){e.addAuthGroupModal=!1}}},[e._v("取消")]),r("Button",{attrs:{type:"primary"},on:{click:e.saveAddGroup}},[e._v("保存")])],1)],1)],1)},n=[],i=(r("ac4d"),r("8a81"),r("ac6a"),r("bc3a")),a=r.n(i),s={ddl:"0",ddlsource:[],dml:"0",dmlsource:[],query:"0",querysource:[],user:"0",base:"0",auditor:[]},l={name:"auth-group",data:function(){return{query:{username:"",valve:!1},more_user:[],is_more:!1,isReadOnly:!1,pagenumber:1,data6:[],columns:[{title:"ID",key:"ID",width:85,sortable:!0},{title:"用户名",key:"Username",sortable:!0},{title:"操作",key:"action",align:"center",slot:"action"}],permission:s,indeterminate:{ddl:!0,dml:!0,query:!0,person:!0},checkAll:{ddl:!1,dml:!1,query:!1,person:!1},connectionList:{connection:[],person:[],query:[]},addAuthGroupForm:{groupname:"",rule:"",more_user:[]},addAuthGroupModal:!1}},methods:{batchOpen:function(){this.addAuthGroupModal=!0,this.is_more=!0,this.permission=this.$config.clearOption(this.permission)},editAuthGroup:function(e){var t=[!0,!0,!1];this.isReadOnly=t[0],this.addAuthGroupModal=t[1],this.is_more=t[2],this.id=e.ID,this.addAuthGroupForm.groupname=e.Username,this.addAuthGroupForm.rule=e.Rule,this.permission=e.Permissions},singleAdd:function(){var e=this;a.a.post("".concat(this.$config.url,"/group/update"),{username:this.addAuthGroupForm.groupname,permission:this.permission}).then(function(t){e.$config.notice(t.data),e.$refs.total.currentPage=1,e.refreshgroup()}).catch(function(t){e.$config.err_notice(e,t)})},mulitAdd:function(){var e=this;a.a.post("".concat(this.$config.url,"/group/m/update"),{username:this.more_user,permission:this.permission}).then(function(t){e.$config.notice(t.data),e.$refs.total.currentPage=1,e.refreshgroup()}).catch(function(t){e.$config.err_notice(e,t)})},saveAddGroup:function(){this.is_more?this.mulitAdd():this.singleAdd(),this.addAuthGroupModal=!1},refreshgroup:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;a.a.get("".concat(this.$config.url,"/group?page=").concat(t,"&con=").concat(JSON.stringify(this.query))).then(function(t){var r=[];e.data6=t.data.data;var o=!0,n=!1,i=void 0;try{for(var a,s=e.data6[Symbol.iterator]();!(o=(a=s.next()).done);o=!0){var l=a.value;"guest"===l.Rule&&r.push(l.Username)}}catch(u){n=!0,i=u}finally{try{o||null==s.return||s.return()}finally{if(n)throw i}}e.more_user=r,e.pagenumber=parseInt(t.data.page),e.connectionList.connection=t.data.source,e.connectionList.query=t.data.query,e.connectionList.person=t.data.audit}).catch(function(t){e.$config.err_notice(e,t)})},splicpage:function(e){this.refreshgroup(e)},ddlCheckAll:function(e,t,r){this.checkAll[t]=!this.checkAll[t],this.indeterminate[t]=!1,this.checkAll[t]?this.permission[e]="person"===r?this.connectionList[r].map(function(e){return e.Username}):this.connectionList[r].map(function(e){return e.Source}):this.permission[e]=[]},deleteAuthGroup:function(e){var t=this;a.a.delete("".concat(this.$config.url,"/group/del/").concat(e.Username)).then(function(e){t.$config.notice(e.data),t.refreshgroup()}).catch(function(e){return t.$config.err_notice(t,e)})},queryData:function(){this.query.valve=!0,this.refreshgroup()},queryCancel:function(){this.$config.clearObj(this.query),this.refreshgroup()}},mounted:function(){this.refreshgroup()}},u=l,c=(r("03ce"),r("2877")),d=Object(c["a"])(u,o,n,!1,null,"2e25d55c",null);t["default"]=d.exports},"5b89":function(e,t,r){}}]);
//# sourceMappingURL=chunk-830429d6.e58f3be4.js.map