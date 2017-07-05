goog.provide("re_frame.fx");
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",(-1237829572));
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)),new cljs.core.Keyword(null,"after","after",(594996914)),(function re_frame$fx$do_fx_after(context){
var seq__931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",(-282369292)).cljs$core$IFn$_invoke$arity$1(context));
var chunk__932 = null;
var count__933 = (0);
var i__934 = (0);
while(true){
if((i__934 < count__933)){
var vec__935 = cljs.core._nth.call(null,chunk__932,i__934);
var effect_k = cljs.core.nth.call(null,vec__935,(0),null);
var value = cljs.core.nth.call(null,vec__935,(1),null);
var temp__19642__auto___941 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__19642__auto___941)){
var effect_fn_942 = temp__19642__auto___941;
effect_fn_942.call(null,value);
} else {
}

var G__943 = seq__931;
var G__944 = chunk__932;
var G__945 = count__933;
var G__946 = (i__934 + (1));
seq__931 = G__943;
chunk__932 = G__944;
count__933 = G__945;
i__934 = G__946;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq.call(null,seq__931);
if(temp__19804__auto__){
var seq__931__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__931__$1)){
var c__21298__auto__ = cljs.core.chunk_first.call(null,seq__931__$1);
var G__947 = cljs.core.chunk_rest.call(null,seq__931__$1);
var G__948 = c__21298__auto__;
var G__949 = cljs.core.count.call(null,c__21298__auto__);
var G__950 = (0);
seq__931 = G__947;
chunk__932 = G__948;
count__933 = G__949;
i__934 = G__950;
continue;
} else {
var vec__938 = cljs.core.first.call(null,seq__931__$1);
var effect_k = cljs.core.nth.call(null,vec__938,(0),null);
var value = cljs.core.nth.call(null,vec__938,(1),null);
var temp__19642__auto___951 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__19642__auto___951)){
var effect_fn_952 = temp__19642__auto___951;
effect_fn_952.call(null,value);
} else {
}

var G__953 = cljs.core.next.call(null,seq__931__$1);
var G__954 = null;
var G__955 = (0);
var G__956 = (0);
seq__931 = G__953;
chunk__932 = G__954;
count__933 = G__955;
i__934 = G__956;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",(291951390)),(function (value){
var seq__957 = cljs.core.seq.call(null,value);
var chunk__958 = null;
var count__959 = (0);
var i__960 = (0);
while(true){
if((i__960 < count__959)){
var map__961 = cljs.core._nth.call(null,chunk__958,i__960);
var map__961__$1 = ((((!((map__961 == null)))?((((map__961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__961):map__961);
var effect = map__961__$1;
var ms = cljs.core.get.call(null,map__961__$1,new cljs.core.Keyword(null,"ms","ms",(-1152709733)));
var dispatch = cljs.core.get.call(null,map__961__$1,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__957,chunk__958,count__959,i__960,map__961,map__961__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__957,chunk__958,count__959,i__960,map__961,map__961__$1,effect,ms,dispatch))
,ms);
}

var G__965 = seq__957;
var G__966 = chunk__958;
var G__967 = count__959;
var G__968 = (i__960 + (1));
seq__957 = G__965;
chunk__958 = G__966;
count__959 = G__967;
i__960 = G__968;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq.call(null,seq__957);
if(temp__19804__auto__){
var seq__957__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__957__$1)){
var c__21298__auto__ = cljs.core.chunk_first.call(null,seq__957__$1);
var G__969 = cljs.core.chunk_rest.call(null,seq__957__$1);
var G__970 = c__21298__auto__;
var G__971 = cljs.core.count.call(null,c__21298__auto__);
var G__972 = (0);
seq__957 = G__969;
chunk__958 = G__970;
count__959 = G__971;
i__960 = G__972;
continue;
} else {
var map__963 = cljs.core.first.call(null,seq__957__$1);
var map__963__$1 = ((((!((map__963 == null)))?((((map__963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__963):map__963);
var effect = map__963__$1;
var ms = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"ms","ms",(-1152709733)));
var dispatch = cljs.core.get.call(null,map__963__$1,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__957,chunk__958,count__959,i__960,map__963,map__963__$1,effect,ms,dispatch,seq__957__$1,temp__19804__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__957,chunk__958,count__959,i__960,map__963,map__963__$1,effect,ms,dispatch,seq__957__$1,temp__19804__auto__))
,ms);
}

var G__973 = cljs.core.next.call(null,seq__957__$1);
var G__974 = null;
var G__975 = (0);
var G__976 = (0);
seq__957 = G__973;
chunk__958 = G__974;
count__959 = G__975;
i__960 = G__976;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",(-504469236)),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__977 = cljs.core.seq.call(null,value);
var chunk__978 = null;
var count__979 = (0);
var i__980 = (0);
while(true){
if((i__980 < count__979)){
var event = cljs.core._nth.call(null,chunk__978,i__980);
re_frame.router.dispatch.call(null,event);

var G__981 = seq__977;
var G__982 = chunk__978;
var G__983 = count__979;
var G__984 = (i__980 + (1));
seq__977 = G__981;
chunk__978 = G__982;
count__979 = G__983;
i__980 = G__984;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq.call(null,seq__977);
if(temp__19804__auto__){
var seq__977__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__977__$1)){
var c__21298__auto__ = cljs.core.chunk_first.call(null,seq__977__$1);
var G__985 = cljs.core.chunk_rest.call(null,seq__977__$1);
var G__986 = c__21298__auto__;
var G__987 = cljs.core.count.call(null,c__21298__auto__);
var G__988 = (0);
seq__977 = G__985;
chunk__978 = G__986;
count__979 = G__987;
i__980 = G__988;
continue;
} else {
var event = cljs.core.first.call(null,seq__977__$1);
re_frame.router.dispatch.call(null,event);

var G__989 = cljs.core.next.call(null,seq__977__$1);
var G__990 = null;
var G__991 = (0);
var G__992 = (0);
seq__977 = G__989;
chunk__978 = G__990;
count__979 = G__991;
i__980 = G__992;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",(-1096518994)),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__993 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__994 = null;
var count__995 = (0);
var i__996 = (0);
while(true){
if((i__996 < count__995)){
var event = cljs.core._nth.call(null,chunk__994,i__996);
clear_event.call(null,event);

var G__997 = seq__993;
var G__998 = chunk__994;
var G__999 = count__995;
var G__1000 = (i__996 + (1));
seq__993 = G__997;
chunk__994 = G__998;
count__995 = G__999;
i__996 = G__1000;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq.call(null,seq__993);
if(temp__19804__auto__){
var seq__993__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__993__$1)){
var c__21298__auto__ = cljs.core.chunk_first.call(null,seq__993__$1);
var G__1001 = cljs.core.chunk_rest.call(null,seq__993__$1);
var G__1002 = c__21298__auto__;
var G__1003 = cljs.core.count.call(null,c__21298__auto__);
var G__1004 = (0);
seq__993 = G__1001;
chunk__994 = G__1002;
count__995 = G__1003;
i__996 = G__1004;
continue;
} else {
var event = cljs.core.first.call(null,seq__993__$1);
clear_event.call(null,event);

var G__1005 = cljs.core.next.call(null,seq__993__$1);
var G__1006 = null;
var G__1007 = (0);
var G__1008 = (0);
seq__993 = G__1005;
chunk__994 = G__1006;
count__995 = G__1007;
i__996 = G__1008;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",(993250759)),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));
