goog.provide("ajax.xml_http_request");
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",(-1937378906)),(1),new cljs.core.Keyword(null,"connection-established","connection-established",(-1403749733)),(2),new cljs.core.Keyword(null,"request-received","request-received",(2110590540)),(3),new cljs.core.Keyword(null,"processing-request","processing-request",(-264947221)),(4),new cljs.core.Keyword(null,"response-ready","response-ready",(245208276))], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__1099,handler){
var map__1100 = p__1099;
var map__1100__$1 = ((((!((map__1100 == null)))?((((map__1100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1100):map__1100);
var uri = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword(null,"uri","uri",(-774711847)));
var method = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword(null,"method","method",(55703592)));
var body = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword(null,"body","body",(-2049205669)));
var headers = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword(null,"headers","headers",(-835030129)));
var timeout = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword(null,"timeout","timeout",(-318625318)),(0));
var with_credentials = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",(-1163127235)),false);
var response_format = cljs.core.get.call(null,map__1100__$1,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__1100,map__1100__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__29_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",(245208276)),ajax.xml_http_request.ready_state.call(null,p1__29_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__1100,map__1100__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__19804__auto___1112 = new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__19804__auto___1112)){
var response_type_1113 = temp__19804__auto___1112;
this$__$1.responseType = cljs.core.name.call(null,response_type_1113);
} else {
}

var seq__1102_1114 = cljs.core.seq.call(null,headers);
var chunk__1103_1115 = null;
var count__1104_1116 = (0);
var i__1105_1117 = (0);
while(true){
if((i__1105_1117 < count__1104_1116)){
var vec__1106_1118 = cljs.core._nth.call(null,chunk__1103_1115,i__1105_1117);
var k_1119 = cljs.core.nth.call(null,vec__1106_1118,(0),null);
var v_1120 = cljs.core.nth.call(null,vec__1106_1118,(1),null);
this$__$1.setRequestHeader(k_1119,v_1120);

var G__1121 = seq__1102_1114;
var G__1122 = chunk__1103_1115;
var G__1123 = count__1104_1116;
var G__1124 = (i__1105_1117 + (1));
seq__1102_1114 = G__1121;
chunk__1103_1115 = G__1122;
count__1104_1116 = G__1123;
i__1105_1117 = G__1124;
continue;
} else {
var temp__19804__auto___1125 = cljs.core.seq.call(null,seq__1102_1114);
if(temp__19804__auto___1125){
var seq__1102_1126__$1 = temp__19804__auto___1125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1102_1126__$1)){
var c__21298__auto___1127 = cljs.core.chunk_first.call(null,seq__1102_1126__$1);
var G__1128 = cljs.core.chunk_rest.call(null,seq__1102_1126__$1);
var G__1129 = c__21298__auto___1127;
var G__1130 = cljs.core.count.call(null,c__21298__auto___1127);
var G__1131 = (0);
seq__1102_1114 = G__1128;
chunk__1103_1115 = G__1129;
count__1104_1116 = G__1130;
i__1105_1117 = G__1131;
continue;
} else {
var vec__1109_1132 = cljs.core.first.call(null,seq__1102_1126__$1);
var k_1133 = cljs.core.nth.call(null,vec__1109_1132,(0),null);
var v_1134 = cljs.core.nth.call(null,vec__1109_1132,(1),null);
this$__$1.setRequestHeader(k_1133,v_1134);

var G__1135 = cljs.core.next.call(null,seq__1102_1126__$1);
var G__1136 = null;
var G__1137 = (0);
var G__1138 = (0);
seq__1102_1114 = G__1135;
chunk__1103_1115 = G__1136;
count__1104_1116 = G__1137;
i__1105_1117 = G__1138;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__20219__auto__ = body;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
