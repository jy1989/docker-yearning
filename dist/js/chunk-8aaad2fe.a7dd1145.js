(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8aaad2fe"],{"17d8":function(e,t,a){"use strict";var r=a("4373"),o=a.n(r);o.a},4373:function(e,t,a){},"61fa":function(e,t){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,a){"use strict";var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},n.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};r.inherits(n,o),n.getTagRule=function(e){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},n.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},n.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=n}),ace.define("ace/mode/mysql_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t,a){var r=e("../lib/oop"),o=(e("../lib/lang"),e("./doc_comment_highlight_rules").DocCommentHighlightRules),n=e("./text_highlight_rules").TextHighlightRules,i=function(){var e="alter|and|as|asc|between|count|create|delete|desc|distinct|drop|from|having|in|insert|into|is|join|like|not|on|or|order|select|set|table|union|update|values|where|accessible|action|add|after|algorithm|all|analyze|asensitive|at|authors|auto_increment|autocommit|avg|avg_row_length|before|binary|binlog|both|btree|cache|call|cascade|cascaded|case|catalog_name|chain|change|changed|character|check|checkpoint|checksum|class_origin|client_statistics|close|coalesce|code|collate|collation|collations|column|columns|comment|commit|committed|completion|concurrent|condition|connection|consistent|constraint|contains|continue|contributors|convert|cross|current_date|current_time|current_timestamp|current_user|cursor|data|database|databases|day_hour|day_microsecond|day_minute|day_second|deallocate|dec|declare|default|delay_key_write|delayed|delimiter|des_key_file|describe|deterministic|dev_pop|dev_samp|deviance|directory|disable|discard|distinctrow|div|dual|dumpfile|each|elseif|enable|enclosed|end|ends|engine|engines|enum|errors|escape|escaped|even|event|events|every|execute|exists|exit|explain|extended|fast|fetch|field|fields|first|flush|for|force|foreign|found_rows|full|fulltext|function|general|global|grant|grants|group|groupby_concat|handler|hash|help|high_priority|hosts|hour_microsecond|hour_minute|hour_second|if|ignore|ignore_server_ids|import|index|index_statistics|infile|inner|innodb|inout|insensitive|insert_method|install|interval|invoker|isolation|iterate|key|keys|kill|language|last|leading|leave|left|level|limit|linear|lines|list|load|local|localtime|localtimestamp|lock|logs|low_priority|master|master_heartbeat_period|master_ssl_verify_server_cert|masters|match|max|max_rows|maxvalue|message_text|middleint|migrate|min|min_rows|minute_microsecond|minute_second|mod|mode|modifies|modify|mutex|mysql_errno|natural|next|no|no_write_to_binlog|offline|offset|one|online|open|optimize|option|optionally|out|outer|outfile|pack_keys|parser|partition|partitions|password|phase|plugin|plugins|prepare|preserve|prev|primary|privileges|procedure|processlist|profile|profiles|purge|query|quick|range|read|read_write|reads|real|rebuild|recover|references|regexp|relaylog|release|remove|rename|reorganize|repair|repeatable|replace|acequire|resignal|restrict|resume|return|returns|revoke|right|rlike|rollback|rollup|row|row_format|rtree|savepoint|schedule|schema|schema_name|schemas|second_microsecond|security|sensitive|separator|serializable|server|session|share|show|signal|slave|slow|smallint|snapshot|soname|spatial|specific|sql|sql_big_result|sql_buffer_result|sql_cache|sql_calc_found_rows|sql_no_cache|sql_small_result|sqlexception|sqlstate|sqlwarning|ssl|start|starting|starts|status|std|stddev|stddev_pop|stddev_samp|storage|straight_join|subclass_origin|sum|suspend|table_name|table_statistics|tables|tablespace|temporary|terminated|to|trailing|transaction|trigger|triggers|truncate|uncommitted|undo|uninstall|unique|unlock|upgrade|usage|use|use_frm|user|user_resources|user_statistics|using|utc_date|utc_time|utc_timestamp|value|variables|varying|view|views|warnings|when|while|with|work|write|xa|xor|year_month|zerofill|begin|do|then|else|loop|repeat",t="by|bool|boolean|bit|blob|decimal|double|enum|float|long|longblob|longtext|medium|mediumblob|mediumint|mediumtext|time|timestamp|tinyblob|tinyint|tinytext|text|bigint|int|int1|int2|int3|int4|int8|integer|float|float4|float8|double|char|varbinary|varchar|varcharacter|precision|date|datetime|year|unsigned|signed|numeric|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",a="charset|clear|connect|edit|ego|exit|go|help|nopager|notee|nowarning|pager|print|prompt|quit|rehash|source|status|system|tee",r=this.createKeywordMapper({"support.function":t,keyword:e,constant:"false|true|null|unknown|date|time|timestamp|ODBCdotTable|zerolessFloat","variable.language":a},"identifier",!0);function n(e){var t=e.start,a=e.escape;return{token:"string.start",regex:t,next:[{token:"constant.language.escape",regex:a},{token:"string.end",next:"start",regex:t},{defaultToken:"string"}]}}this.$rules={start:[{token:"comment",regex:"(?:-- |#).*$"},n({start:'"',escape:/\\[0'"bnrtZ\\%_]?/}),n({start:"'",escape:/\\[0'"bnrtZ\\%_]?/}),o.getStartRule("doc-start"),{token:"comment",regex:/\/\*/,next:"comment"},{token:"constant.numeric",regex:/0[xX][0-9a-fA-F]+|[xX]'[0-9a-fA-F]+'|0[bB][01]+|[bB]'[01]+'/},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:r,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"constant.class",regex:"@@?[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"constant.buildin",regex:"`[^`]*`"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.embedRules(o,"doc-",[o.getEndRule("start")]),this.normalizeRules()};r.inherits(i,n),t.MysqlHighlightRules=i}),ace.define("ace/mode/mysql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/mysql_highlight_rules"],function(e,t,a){var r=e("../lib/oop"),o=e("../mode/text").Mode,n=e("./mysql_highlight_rules").MysqlHighlightRules,i=function(){this.HighlightRules=n,this.$behaviour=this.$defaultBehaviour};r.inherits(i,o),function(){this.lineCommentStart=["--","#"],this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/mysql"}.call(i.prototype),t.Mode=i})},"9cf0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Row",[a("Card",[a("div",{staticClass:"step-header-con"},[a("h3",[e._v(e._s(e.stepData.title))]),a("h5",[e._v(e._s(e.stepData.describe))])]),a("p",{staticClass:"step-content"}),a("Row",[a("i-col",{attrs:{span:"8"}},[a("Alert",{attrs:{type:"warning","show-icon":""}},[e._v("\n            注意事项:\n            "),a("span",{attrs:{slot:"desc"},slot:"desc"},[e._v("\n            1.必须填写查询说明\n            "),a("br"),e._v("\n            2.根据查询条件预估所需的查询时间\n            "),a("br"),e._v("\n            3.所有提交的查询语句均会进行审计记录\n            "),a("br"),e._v("\n            4.仅支持查询语句,不可使用非查询语句\n            "),a("br"),e._v("\n            5.已限制最大limit数，如自己输入的limit数大于平台配置的最大limit数则以平台配置的Limit数为准\n          ")])])],1),a("i-col",{attrs:{span:"12"}},[a("Form",{ref:"formItem",attrs:{model:e.formItem,rules:e.stepRules,"label-width":150}},[a("FormItem",{attrs:{label:"环境:",prop:"idc"}},[a("Select",{on:{"on-change":e.fetchSource},model:{value:e.formItem.idc,callback:function(t){e.$set(e.formItem,"idc",t)},expression:"formItem.idc"}},e._l(e.fetchData.idc,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1)],1),a("FormItem",{attrs:{label:"审核人:",prop:"assigned"}},[a("Select",{attrs:{filterable:""},model:{value:e.formItem.assigned,callback:function(t){e.$set(e.formItem,"assigned",t)},expression:"formItem.assigned"}},e._l(e.fetchData.assigned,function(t){return a("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}),1)],1),e.export_list?a("FormItem",{attrs:{label:"是否需要导出数据:",prop:"export"}},[a("RadioGroup",{model:{value:e.formItem.export,callback:function(t){e.$set(e.formItem,"export",t)},expression:"formItem.export"}},[a("Radio",{attrs:{label:1}},[e._v("是")]),a("Radio",{attrs:{label:0}},[e._v("否")])],1)],1):e._e(),a("FormItem",{attrs:{label:"查询说明：",prop:"text"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:8},placeholder:"请填写查询说明"},model:{value:e.formItem.text,callback:function(t){e.$set(e.formItem,"text",t)},expression:"formItem.text"}})],1),a("FormItem",{attrs:{label:""}},[a("Button",{staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)],1)],1),a("Steps",{staticStyle:{"margin-left":"10%"}},e._l(e.stepList1,function(e){return a("Step",{key:e.title,attrs:{title:e.title,content:e.describe}})}),1)],1)],1)],1)},o=[],n=a("bc3a"),i=a.n(n),c=a("efd9"),s={name:"work_flow",props:["msg"],mixins:[c["a"]],data:function(){return{export_list:!1,stepData:{title:"Yearning SQL查询系统",describe:"欢迎你！ ".concat(sessionStorage.getItem("user"))},stepList1:[{title:"提交",describe:"提交查询申请"},{title:"审核",describe:"等待审核结果"},{title:"查询",describe:"审核完毕，进入查询页面"}],stepRules:{text:[{required:!0,message:"请填写查询说明",trigger:"blur"}],idc:[{required:!0,message:"环境地址不得为空",trigger:"change"}],source:[{required:!0,message:"连接名不得为空",trigger:"change"}],assigned:[{required:!0,message:"审核人不得为空",trigger:"change"}]},item:{},formItem:{text:"",idc:"",export:0,assigned:""}}},methods:{fetchSource:function(e){var t=this;e&&i.a.get("".concat(this.$config.url,"/fetch/source/").concat(e,"/query")).then(function(e){"query"===e.data.x?t.fetchData.assigned=e.data.assigned:t.$config.notice("非法劫持参数！")}).catch(function(e){t.$config.err_notice(t,e)})},handleSubmit:function(){var e=this;this.$refs["formItem"].validate(function(t){t&&i.a.post("".concat(e.$config.url,"/query/refer"),{idc:e.formItem.idc,source:e.formItem.source,export:e.formItem.export,assigned:e.formItem.assigned,text:e.formItem.text}).then(function(){e.$router.push({name:"queryready"})}).catch(function(t){e.$config.err_notice(e,t)})})},fetchQueryStatus:function(){var e=this;i.a.put("".concat(this.$config.url,"/query/status")).then(function(t){1===t.data.status?e.$router.push({name:"querypage"}):2===t.data.status?e.$router.push({name:"queryready"}):(e.fetchIDC(),e.export_list=t.data.export)})}},mounted:function(){this.fetchQueryStatus()}},l=s,u=(a("17d8"),a("2877")),d=Object(u["a"])(l,r,o,!1,null,null,null);t["default"]=d.exports},b5a8:function(e,t){ace.define("ace/theme/xcode",["require","exports","module","ace/lib/dom"],function(e,t,a){t.isDark=!1,t.cssClass="ace-xcode",t.cssText=".ace-xcode .ace_gutter {background: #e8e8e8;color: #333}.ace-xcode .ace_print-margin {width: 1px;background: #e8e8e8}.ace-xcode {background-color: #FFFFFF;color: #000000}.ace-xcode .ace_cursor {color: #000000}.ace-xcode .ace_marker-layer .ace_selection {background: #B5D5FF}.ace-xcode.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-xcode .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-xcode .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #BFBFBF}.ace-xcode .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_gutter-active-line {background-color: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_marker-layer .ace_selected-word {border: 1px solid #B5D5FF}.ace-xcode .ace_constant.ace_language,.ace-xcode .ace_keyword,.ace-xcode .ace_meta,.ace-xcode .ace_variable.ace_language {color: #C800A4}.ace-xcode .ace_invisible {color: #BFBFBF}.ace-xcode .ace_constant.ace_character,.ace-xcode .ace_constant.ace_other {color: #275A5E}.ace-xcode .ace_constant.ace_numeric {color: #3A00DC}.ace-xcode .ace_entity.ace_other.ace_attribute-name,.ace-xcode .ace_support.ace_constant,.ace-xcode .ace_support.ace_function {color: #450084}.ace-xcode .ace_fold {background-color: #C800A4;border-color: #000000}.ace-xcode .ace_entity.ace_name.ace_tag,.ace-xcode .ace_support.ace_class,.ace-xcode .ace_support.ace_type {color: #790EAD}.ace-xcode .ace_storage {color: #C900A4}.ace-xcode .ace_string {color: #DF0002}.ace-xcode .ace_comment {color: #008E00}.ace-xcode .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})},efd9:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i}),a.d(t,"c",function(){return c});var r=a("bc3a"),o=a.n(r),n={data:function(){return{showing:!1,disable:!1,diffArgs:{title:"新建AutoTask",url:"auto"}}},methods:{toggleShow:function(){this.showing=this.showing=!0,this.disable=!1,this.diffArgs={title:"新建AutoTask",url:"auto"}}}},i={data:function(){return{fetchData:{idc:[],source:[],base:[],table:[],assigned:[]}}},methods:{fetchSource:function(e){var t=this;e&&o.a.get("".concat(this.$config.url,"/fetch/source/").concat(e,"/dml")).then(function(e){"dml"===e.data.x?(t.fetchData.source=e.data.source,t.fetchData.assigned=e.data.assigned):t.$config.notice("非法劫持参数！")}).catch(function(e){t.$config.err_notice(t,e)})},fetchBase:function(e){var t=this;e&&o.a.get("".concat(this.$config.url,"/fetch/base/").concat(e)).then(function(e){t.fetchData.base=e.data}).catch(function(e){t.$config.err_notice(t,e)})},fetchIDC:function(){var e=this;o.a.get("".concat(this.$config.url,"/fetch/idc")).then(function(t){e.fetchData.idc=t.data}).catch(function(t){e.$config.err_notice(e,t)})},fetchTable:function(){var e=this;this.formItem.database&&o.a.put("".concat(this.$config.url,"/fetch/table"),{source:this.formItem.source,base:this.formItem.database}).then(function(t){e.fetchData.table=t.data.table,e.wordList=e.$config.concat(e.wordList,t.data.highlight)}).catch(function(t){e.$config.err_notice(e,t)})}}},c={data:function(){return{testColumns:[{title:"阶段",key:"Status",width:"150"},{title:"错误等级",key:"Level",width:"100"},{title:"错误信息",key:"Error",tooltip:!0},{title:"当前检查的sql",key:"SQL",tooltip:!0},{title:"影响行数",key:"AffectRows",width:"120"}],ruleValidate:{idc:[{required:!0,message:"环境地址不得为空",trigger:"change"}],source:[{required:!0,message:"连接名不得为空",trigger:"change"}],database:[{required:!0,message:"数据库名不得为空",trigger:"change"}],table:[{required:!0,message:"数据表名不得为空",trigger:"change"}],tp:[{required:!0,message:"类型不得为空",trigger:"change"}],name:[{required:!0,message:"名称不得为空",trigger:"blur"}],text:[{required:!0,message:"提交说明不得为空",trigger:"blur"}],assigned:[{required:!0,message:"审核人不得为空",trigger:"change"}],backup:{required:!0,type:"number",message:"备份不得为空",trigger:"change"}},invalidDate:{disabledDate:function(e){return e&&e.valueOf()<Date.now()-864e5}}}},methods:{clearForm:function(){this.formItem=this.$config.clearObj(this.formItem)},setCompletions:function(e,t,a,r,o){o(null,this.wordList.map(function(e){return{caption:e.vl,value:e.vl,meta:e.meta}}))},editorInit:function(){a("61fa"),a("b5a8")}}}}}]);
//# sourceMappingURL=chunk-8aaad2fe.a7dd1145.js.map