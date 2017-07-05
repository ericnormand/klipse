goog.provide("ajax.xml_http_request");
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",(-1937378906)),(1),new cljs.core.Keyword(null,"connection-established","connection-established",(-1403749733)),(2),new cljs.core.Keyword(null,"request-received","request-received",(2110590540)),(3),new cljs.core.Keyword(null,"processing-request","processing-request",(-264947221)),(4),new cljs.core.Keyword(null,"response-ready","response-ready",(245208276))], null).call(null,e.target.readyState);
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__1411,handler){
var map__1412 = p__1411;
var map__1412__$1 = ((((!((map__1412 == null)))?((((map__1412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1412):map__1412);
var uri = cljs.core.get.call(null,map__1412__$1,new cljs.core.Keyword(null,"uri","uri",(-774711847)));
var method = cljs.core.get.call(null,map__1412__$1,new cljs.core.Keyword(null,"method","method",(55703592)));
var body = cljs.core.get.call(null,map__1412__$1,new cljs.core.Keyword(null,"body","body",(-2049205669)));
var headers = cljs.core.get.call(null,map__1412__$1,new cljs.core.Keyword(null,"headers","headers",(-835030129)));
var timeout = cljs.core.get.call(null,map__1412__$1,new cljs.core.Keyword(null,"timeout","timeout",(-318625318)),(0));
var with_credentials = cljs.core.get.call(null,map__1412__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",(-1163127235)),false);
var response_format = cljs.core.get.call(null,map__1412__$1,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__1412,map__1412__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__68_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",(245208276)),ajax.xml_http_request.ready_state.call(null,p1__68_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__1412,map__1412__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__19804__auto___1424 = new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__19804__auto___1424)){
var response_type_1425 = temp__19804__auto___1424;
this$__$1.responseType = cljs.core.name.call(null,response_type_1425);
} else {
}

var seq__1414_1426 = cljs.core.seq.call(null,headers);
var chunk__1415_1427 = null;
var count__1416_1428 = (0);
var i__1417_1429 = (0);
while(true){
if((i__1417_1429 < count__1416_1428)){
var vec__1418_1430 = cljs.core._nth.call(null,chunk__1415_1427,i__1417_1429);
var k_1431 = cljs.core.nth.call(null,vec__1418_1430,(0),null);
var v_1432 = cljs.core.nth.call(null,vec__1418_1430,(1),null);
this$__$1.setRequestHeader(k_1431,v_1432);

var G__1433 = seq__1414_1426;
var G__1434 = chunk__1415_1427;
var G__1435 = count__1416_1428;
var G__1436 = (i__1417_1429 + (1));
seq__1414_1426 = G__1433;
chunk__1415_1427 = G__1434;
count__1416_1428 = G__1435;
i__1417_1429 = G__1436;
continue;
} else {
var temp__19804__auto___1437 = cljs.core.seq.call(null,seq__1414_1426);
if(temp__19804__auto___1437){
var seq__1414_1438__$1 = temp__19804__auto___1437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1414_1438__$1)){
var c__21298__auto___1439 = cljs.core.chunk_first.call(null,seq__1414_1438__$1);
var G__1440 = cljs.core.chunk_rest.call(null,seq__1414_1438__$1);
var G__1441 = c__21298__auto___1439;
var G__1442 = cljs.core.count.call(null,c__21298__auto___1439);
var G__1443 = (0);
seq__1414_1426 = G__1440;
chunk__1415_1427 = G__1441;
count__1416_1428 = G__1442;
i__1417_1429 = G__1443;
continue;
} else {
var vec__1421_1444 = cljs.core.first.call(null,seq__1414_1438__$1);
var k_1445 = cljs.core.nth.call(null,vec__1421_1444,(0),null);
var v_1446 = cljs.core.nth.call(null,vec__1421_1444,(1),null);
this$__$1.setRequestHeader(k_1445,v_1446);

var G__1447 = cljs.core.next.call(null,seq__1414_1438__$1);
var G__1448 = null;
var G__1449 = (0);
var G__1450 = (0);
seq__1414_1426 = G__1447;
chunk__1415_1427 = G__1448;
count__1416_1428 = G__1449;
i__1417_1429 = G__1450;
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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
