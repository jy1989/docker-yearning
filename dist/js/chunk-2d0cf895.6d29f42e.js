(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf895"],{"63ac":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Row",[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[r("Icon",{attrs:{type:"md-person"}}),t._v("\n        权限审核\n      ")],1),r("Row",[r("Col",{attrs:{span:"24"}},[r("Table",{attrs:{border:"",columns:t.permissoncolums,data:t.permissondata,stripe:""}}),r("br"),r("Page",{ref:"perpage",attrs:{total:t.per_pn,"show-elevator":"","page-size":20},on:{"on-change":t.permisson_list}})],1)],1)],1)],1),r("Modal",{attrs:{width:800},model:{value:t.editInfodModal,callback:function(e){t.editInfodModal=e},expression:"editInfodModal"}},[r("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[t._v("权限申请单")]),r("Form",{attrs:{"label-width":120,"label-position":"top"}},[[r("FormItem",{attrs:{label:"DDL及索引权限:"}},[r("RadioGroup",{model:{value:t.perList.ddl,callback:function(e){t.$set(t.perList,"ddl",e)},expression:"perList.ddl"}},[r("Radio",{attrs:{label:"1"}},[t._v("是")]),r("Radio",{attrs:{label:"0"}},[t._v("否")])],1)],1),"0"!==t.perList.ddl?[r("FormItem",{attrs:{label:"连接名:"}},[r("CheckboxGroup",{model:{value:t.perList.ddl_source,callback:function(e){t.$set(t.perList,"ddl_source",e)},expression:"perList.ddl_source"}},t._l(t.connectionList,function(e){return r("Checkbox",{key:e.Source,attrs:{label:e.Source}},[r("Tag",{key:e.Source,attrs:{color:"purple"}},[t._v(" "+t._s(e.Source))])],1)}),1)],1)]:t._e(),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"DML权限:"}},[r("RadioGroup",{model:{value:t.perList.dml,callback:function(e){t.$set(t.perList,"dml",e)},expression:"perList.dml"}},[r("Radio",{attrs:{label:"1"}},[t._v("是")]),r("Radio",{attrs:{label:"0"}},[t._v("否")])],1)],1),"1"===t.perList.dml?[r("FormItem",{attrs:{label:"连接名:"}},[r("CheckboxGroup",{model:{value:t.perList.dml_source,callback:function(e){t.$set(t.perList,"dml_source",e)},expression:"perList.dml_source"}},t._l(t.connectionList,function(e){return r("Checkbox",{key:e.Source,attrs:{label:e.Source}},[r("Tag",{key:e.Source,attrs:{color:"geekblue"}},[t._v(" "+t._s(e.Source))])],1)}),1)],1)]:t._e(),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"数据查询权限:"}},[r("RadioGroup",{model:{value:t.perList.query,callback:function(e){t.$set(t.perList,"query",e)},expression:"perList.query"}},[r("Radio",{attrs:{label:"1"}},[t._v("是")]),r("Radio",{attrs:{label:"0"}},[t._v("否")])],1)],1),"1"===t.perList.query?[r("FormItem",{attrs:{label:"连接名:"}},[r("CheckboxGroup",{model:{value:t.perList.query_source,callback:function(e){t.$set(t.perList,"query_source",e)},expression:"perList.query_source"}},t._l(t.query_list,function(e){return r("Checkbox",{key:e.Source,attrs:{label:e.Source}},[r("Tag",{key:e.Source,attrs:{color:"geekblue"}},[t._v(" "+t._s(e.Source))])],1)}),1)],1)]:t._e(),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}})],r("FormItem",{attrs:{label:"上级审核人范围:"}},[r("CheckboxGroup",{model:{value:t.perList.auditor,callback:function(e){t.$set(t.perList,"auditor",e)},expression:"perList.auditor"}},t._l(t.auditor,function(e){return r("Checkbox",{key:e.Username,attrs:{label:e.Username}},[r("Tag",{key:e.Username,attrs:{color:"geekblue"}},[t._v(" "+t._s(e.Username))])],1)}),1)],1),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"用户管理权限:"}},["0"===t.perList.user?r("p",[t._v("否")]):r("p",[t._v("是")])]),r("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #dddee1"}}),r("br"),r("FormItem",{attrs:{label:"数据库管理权限:"}},["0"===t.perList.base?r("p",[t._v("否")]):r("p",[t._v("是")])])],2),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"primary"},on:{click:function(e){t.editInfodModal=!1}}},[t._v("取消")]),2===t.orderStatus.s?r("Button",{attrs:{type:"error"},on:{click:t.reject}},[t._v("驳回")]):t._e(),2===t.orderStatus.s?r("Button",{attrs:{type:"success"},on:{click:t.savedata}},[t._v("同意")]):t._e()],1)],1)],1)},s=[],a=r("bc3a"),i=r.n(a),n={name:"permissions",data:function(){var t=this;return{permissondata:[],permissoncolums:[{title:"申请编号",key:"WorkId"},{title:"申请人",key:"Username"},{title:"申请时间",key:"Date"},{title:"状态",key:"status",width:150,render:function(t,e){var r=e.row,o="",s="";return 2===r.Status?(o="primary",s="待审核"):0===r.Status?(o="error",s="驳回"):1===r.Status&&(o="success",s="已执行"),t("Tag",{props:{type:"dot",color:o}},s)},sortable:!0,filters:[{label:"已执行",value:1},{label:"驳回",value:0},{label:"待审核",value:2}]},{title:"操作",key:"action",width:200,align:"center",render:function(e,r){return e("div",[e("Button",{props:{size:"small",type:"text"},on:{click:function(){t.modalinfo(r.row)}}},"查看")])}}],per_pn:1,editInfodModal:!1,perList:{},connectionList:[],query_list:[],auditor:[],orderStatus:{s:"",work_id:""}}},methods:{permisson_list:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;i.a.get("".concat(this.$config.url,"/rules?page=").concat(e)).then(function(e){t.permissondata=e.data.data,t.per_pn=e.data.pg}).catch(function(e){t.$config.err_notice(t,e)})},init:function(){var t=this;i.a.put("".concat(this.$config.url,"/dash/userinfo")).then(function(e){t.connectionList=e.data.source,t.query_list=e.data.query,t.auditor=e.data.au})},modalinfo:function(t){this.editInfodModal=!0,this.perList=t.Permissions,this.orderStatus.s=t.Status,this.orderStatus.work_id=t.WorkId},savedata:function(){var t=this;i.a.put("".concat(this.$config.url,"/rules/allow"),{WorkId:this.orderStatus.work_id,Permission:this.perList}).then(function(e){t.$config.notice(e.data),t.editInfodModal=!1,t.permisson_list()}).catch(function(e){t.$config.err_notice(t,e)})},reject:function(){var t=this;i.a.put("".concat(this.$config.url,"/rules/reject"),{WorkId:this.orderStatus.work_id}).then(function(e){t.$config.notice(e.data),t.editInfodModal=!1,t.permisson_list()}).catch(function(e){t.$config.err_notice(t,e)})}},mounted:function(){this.permisson_list(),this.init()}},l=n,c=r("2877"),d=Object(c["a"])(l,o,s,!1,null,"0976a48a",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0cf895.6d29f42e.js.map