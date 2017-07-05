goog.provide("re_frame.subs");
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",(-2093760025));
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__892_902 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__893_903 = null;
var count__894_904 = (0);
var i__895_905 = (0);
while(true){
if((i__895_905 < count__894_904)){
var vec__896_906 = cljs.core._nth.call(null,chunk__893_903,i__895_905);
var k_907 = cljs.core.nth.call(null,vec__896_906,(0),null);
var rxn_908 = cljs.core.nth.call(null,vec__896_906,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_908);

var G__909 = seq__892_902;
var G__910 = chunk__893_903;
var G__911 = count__894_904;
var G__912 = (i__895_905 + (1));
seq__892_902 = G__909;
chunk__893_903 = G__910;
count__894_904 = G__911;
i__895_905 = G__912;
continue;
} else {
var temp__19804__auto___913 = cljs.core.seq.call(null,seq__892_902);
if(temp__19804__auto___913){
var seq__892_914__$1 = temp__19804__auto___913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__892_914__$1)){
var c__21298__auto___915 = cljs.core.chunk_first.call(null,seq__892_914__$1);
var G__916 = cljs.core.chunk_rest.call(null,seq__892_914__$1);
var G__917 = c__21298__auto___915;
var G__918 = cljs.core.count.call(null,c__21298__auto___915);
var G__919 = (0);
seq__892_902 = G__916;
chunk__893_903 = G__917;
count__894_904 = G__918;
i__895_905 = G__919;
continue;
} else {
var vec__899_920 = cljs.core.first.call(null,seq__892_914__$1);
var k_921 = cljs.core.nth.call(null,vec__899_920,(0),null);
var rxn_922 = cljs.core.nth.call(null,vec__899_920,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_922);

var G__923 = cljs.core.next.call(null,seq__892_914__$1);
var G__924 = null;
var G__925 = (0);
var G__926 = (0);
seq__892_902 = G__923;
chunk__893_903 = G__924;
count__894_904 = G__925;
i__895_905 = G__926;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_927 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","dispose","sub/dispose",(365440536)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_v,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__52__auto___940 = re_frame.interop.now.call(null);
var duration__53__auto___941 = (end__52__auto___940 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__928_942 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__929_943 = null;
var count__930_944 = (0);
var i__931_945 = (0);
while(true){
if((i__931_945 < count__930_944)){
var vec__932_946 = cljs.core._nth.call(null,chunk__929_943,i__931_945);
var k__54__auto___947 = cljs.core.nth.call(null,vec__932_946,(0),null);
var cb__55__auto___948 = cljs.core.nth.call(null,vec__932_946,(1),null);
try{cb__55__auto___948.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___941,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e935){var e__56__auto___949 = e935;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___947,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___949);
}
var G__950 = seq__928_942;
var G__951 = chunk__929_943;
var G__952 = count__930_944;
var G__953 = (i__931_945 + (1));
seq__928_942 = G__950;
chunk__929_943 = G__951;
count__930_944 = G__952;
i__931_945 = G__953;
continue;
} else {
var temp__19804__auto___954 = cljs.core.seq.call(null,seq__928_942);
if(temp__19804__auto___954){
var seq__928_955__$1 = temp__19804__auto___954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__928_955__$1)){
var c__21298__auto___956 = cljs.core.chunk_first.call(null,seq__928_955__$1);
var G__957 = cljs.core.chunk_rest.call(null,seq__928_955__$1);
var G__958 = c__21298__auto___956;
var G__959 = cljs.core.count.call(null,c__21298__auto___956);
var G__960 = (0);
seq__928_942 = G__957;
chunk__929_943 = G__958;
count__930_944 = G__959;
i__931_945 = G__960;
continue;
} else {
var vec__936_961 = cljs.core.first.call(null,seq__928_955__$1);
var k__54__auto___962 = cljs.core.nth.call(null,vec__936_961,(0),null);
var cb__55__auto___963 = cljs.core.nth.call(null,vec__936_961,(1),null);
try{cb__55__auto___963.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___941,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e939){var e__56__auto___964 = e939;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___962,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___964);
}
var G__965 = cljs.core.next.call(null,seq__928_955__$1);
var G__966 = null;
var G__967 = (0);
var G__968 = (0);
seq__928_942 = G__965;
chunk__929_943 = G__966;
count__930_944 = G__967;
i__931_945 = G__968;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_927;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___969 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___969;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__971 = arguments.length;
switch (G__971) {
case (1):
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = (2);

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__974 = arguments.length;
switch (G__974) {
case (1):
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_975 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","create","sub/create",(-1301317560)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_v], null)], null));

try{try{var temp__19642__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__19642__auto__)){
var cached = temp__19642__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1002 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1002;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1003 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1003;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1004 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1004;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__52__auto___1005 = re_frame.interop.now.call(null);
var duration__53__auto___1006 = (end__52__auto___1005 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__976_1007 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__977_1008 = null;
var count__978_1009 = (0);
var i__979_1010 = (0);
while(true){
if((i__979_1010 < count__978_1009)){
var vec__980_1011 = cljs.core._nth.call(null,chunk__977_1008,i__979_1010);
var k__54__auto___1012 = cljs.core.nth.call(null,vec__980_1011,(0),null);
var cb__55__auto___1013 = cljs.core.nth.call(null,vec__980_1011,(1),null);
try{cb__55__auto___1013.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___1006,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e983){var e__56__auto___1014 = e983;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___1012,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___1014);
}
var G__1015 = seq__976_1007;
var G__1016 = chunk__977_1008;
var G__1017 = count__978_1009;
var G__1018 = (i__979_1010 + (1));
seq__976_1007 = G__1015;
chunk__977_1008 = G__1016;
count__978_1009 = G__1017;
i__979_1010 = G__1018;
continue;
} else {
var temp__19804__auto___1019 = cljs.core.seq.call(null,seq__976_1007);
if(temp__19804__auto___1019){
var seq__976_1020__$1 = temp__19804__auto___1019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__976_1020__$1)){
var c__21298__auto___1021 = cljs.core.chunk_first.call(null,seq__976_1020__$1);
var G__1022 = cljs.core.chunk_rest.call(null,seq__976_1020__$1);
var G__1023 = c__21298__auto___1021;
var G__1024 = cljs.core.count.call(null,c__21298__auto___1021);
var G__1025 = (0);
seq__976_1007 = G__1022;
chunk__977_1008 = G__1023;
count__978_1009 = G__1024;
i__979_1010 = G__1025;
continue;
} else {
var vec__984_1026 = cljs.core.first.call(null,seq__976_1020__$1);
var k__54__auto___1027 = cljs.core.nth.call(null,vec__984_1026,(0),null);
var cb__55__auto___1028 = cljs.core.nth.call(null,vec__984_1026,(1),null);
try{cb__55__auto___1028.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___1006,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e987){var e__56__auto___1029 = e987;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___1027,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___1029);
}
var G__1030 = cljs.core.next.call(null,seq__976_1020__$1);
var G__1031 = null;
var G__1032 = (0);
var G__1033 = (0);
seq__976_1007 = G__1030;
chunk__977_1008 = G__1031;
count__978_1009 = G__1032;
i__979_1010 = G__1033;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_975;
}} else {
var temp__19642__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__19642__auto__)){
var cached = temp__19642__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1034 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1034;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1035 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1035;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1036 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1036;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_988 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","create","sub/create",(-1301317560)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",(949994592)),dynv], null)], null));

try{try{var temp__19642__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__19642__auto__)){
var cached = temp__19642__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1037 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1037;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1038 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1038;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__19804__auto___1039 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__19804__auto___1039)){
var not_reactive_1040 = temp__19804__auto___1039;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_1040);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1041 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1041;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_988){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_988))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_988){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_988))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_988){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_988))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__52__auto___1042 = re_frame.interop.now.call(null);
var duration__53__auto___1043 = (end__52__auto___1042 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__989_1044 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__990_1045 = null;
var count__991_1046 = (0);
var i__992_1047 = (0);
while(true){
if((i__992_1047 < count__991_1046)){
var vec__993_1048 = cljs.core._nth.call(null,chunk__990_1045,i__992_1047);
var k__54__auto___1049 = cljs.core.nth.call(null,vec__993_1048,(0),null);
var cb__55__auto___1050 = cljs.core.nth.call(null,vec__993_1048,(1),null);
try{cb__55__auto___1050.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___1043,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e996){var e__56__auto___1051 = e996;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___1049,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___1051);
}
var G__1052 = seq__989_1044;
var G__1053 = chunk__990_1045;
var G__1054 = count__991_1046;
var G__1055 = (i__992_1047 + (1));
seq__989_1044 = G__1052;
chunk__990_1045 = G__1053;
count__991_1046 = G__1054;
i__992_1047 = G__1055;
continue;
} else {
var temp__19804__auto___1056 = cljs.core.seq.call(null,seq__989_1044);
if(temp__19804__auto___1056){
var seq__989_1057__$1 = temp__19804__auto___1056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__989_1057__$1)){
var c__21298__auto___1058 = cljs.core.chunk_first.call(null,seq__989_1057__$1);
var G__1059 = cljs.core.chunk_rest.call(null,seq__989_1057__$1);
var G__1060 = c__21298__auto___1058;
var G__1061 = cljs.core.count.call(null,c__21298__auto___1058);
var G__1062 = (0);
seq__989_1044 = G__1059;
chunk__990_1045 = G__1060;
count__991_1046 = G__1061;
i__992_1047 = G__1062;
continue;
} else {
var vec__997_1063 = cljs.core.first.call(null,seq__989_1057__$1);
var k__54__auto___1064 = cljs.core.nth.call(null,vec__997_1063,(0),null);
var cb__55__auto___1065 = cljs.core.nth.call(null,vec__997_1063,(1),null);
try{cb__55__auto___1065.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___1043,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e1000){var e__56__auto___1066 = e1000;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___1064,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___1066);
}
var G__1067 = cljs.core.next.call(null,seq__989_1057__$1);
var G__1068 = null;
var G__1069 = (0);
var G__1070 = (0);
seq__989_1044 = G__1067;
chunk__990_1045 = G__1068;
count__991_1046 = G__1069;
i__992_1047 = G__1070;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_988;
}} else {
var temp__19642__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__19642__auto__)){
var cached = temp__19642__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1071 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1071;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1072 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1072;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__19804__auto___1073 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__19804__auto___1073)){
var not_reactive_1074 = temp__19804__auto___1073;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_1074);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1075 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1075;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__19642__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__19642__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__19642__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__19642__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__19642__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__19642__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__1076){
var vec__1077 = p__1076;
var k = cljs.core.nth.call(null,vec__1077,(0),null);
var v = cljs.core.nth.call(null,vec__1077,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__57__auto___1080 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",(563633497)),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",(563633497)),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__57__auto___1080;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__21610__auto__ = [];
var len__21607__auto___1110 = arguments.length;
var i__21608__auto___1111 = (0);
while(true){
if((i__21608__auto___1111 < len__21607__auto___1110)){
args__21610__auto__.push((arguments[i__21608__auto___1111]));

var G__1112 = (i__21608__auto___1111 + (1));
i__21608__auto___1111 = G__1112;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((1) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21611__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__1083 = cljs.core.count.call(null,input_args);
switch (G__1083) {
case (0):
return ((function (G__1083,computation_fn,input_args,err_header){
return (function() {
var G__1114 = null;
var G__1114__1 = (function (_){
return re_frame.db.app_db;
});
var G__1114__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__1114 = function(_,___$1){
switch(arguments.length){
case 1:
return G__1114__1.call(this,_);
case 2:
return G__1114__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__1114.cljs$core$IFn$_invoke$arity$1 = G__1114__1;
G__1114.cljs$core$IFn$_invoke$arity$2 = G__1114__2;
return G__1114;
})()
;})(G__1083,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
return ((function (G__1083,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__1083,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__1083,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__1083,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_1084 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","run","sub/run",(-1821315581)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_vec,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__52__auto___1115 = re_frame.interop.now.call(null);
var duration__53__auto___1116 = (end__52__auto___1115 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__1085_1117 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__1086_1118 = null;
var count__1087_1119 = (0);
var i__1088_1120 = (0);
while(true){
if((i__1088_1120 < count__1087_1119)){
var vec__1089_1121 = cljs.core._nth.call(null,chunk__1086_1118,i__1088_1120);
var k__54__auto___1122 = cljs.core.nth.call(null,vec__1089_1121,(0),null);
var cb__55__auto___1123 = cljs.core.nth.call(null,vec__1089_1121,(1),null);
try{cb__55__auto___1123.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___1116,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e1092){var e__56__auto___1124 = e1092;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___1122,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___1124);
}
var G__1125 = seq__1085_1117;
var G__1126 = chunk__1086_1118;
var G__1127 = count__1087_1119;
var G__1128 = (i__1088_1120 + (1));
seq__1085_1117 = G__1125;
chunk__1086_1118 = G__1126;
count__1087_1119 = G__1127;
i__1088_1120 = G__1128;
continue;
} else {
var temp__19804__auto___1129 = cljs.core.seq.call(null,seq__1085_1117);
if(temp__19804__auto___1129){
var seq__1085_1130__$1 = temp__19804__auto___1129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1085_1130__$1)){
var c__21298__auto___1131 = cljs.core.chunk_first.call(null,seq__1085_1130__$1);
var G__1132 = cljs.core.chunk_rest.call(null,seq__1085_1130__$1);
var G__1133 = c__21298__auto___1131;
var G__1134 = cljs.core.count.call(null,c__21298__auto___1131);
var G__1135 = (0);
seq__1085_1117 = G__1132;
chunk__1086_1118 = G__1133;
count__1087_1119 = G__1134;
i__1088_1120 = G__1135;
continue;
} else {
var vec__1093_1136 = cljs.core.first.call(null,seq__1085_1130__$1);
var k__54__auto___1137 = cljs.core.nth.call(null,vec__1093_1136,(0),null);
var cb__55__auto___1138 = cljs.core.nth.call(null,vec__1093_1136,(1),null);
try{cb__55__auto___1138.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___1116,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e1096){var e__56__auto___1139 = e1096;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___1137,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___1139);
}
var G__1140 = cljs.core.next.call(null,seq__1085_1130__$1);
var G__1141 = null;
var G__1142 = (0);
var G__1143 = (0);
seq__1085_1117 = G__1140;
chunk__1086_1118 = G__1141;
count__1087_1119 = G__1142;
i__1088_1120 = G__1143;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_1084;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_1097 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","run","sub/run",(-1821315581)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",(949994592)),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__52__auto___1144 = re_frame.interop.now.call(null);
var duration__53__auto___1145 = (end__52__auto___1144 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__1098_1146 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__1099_1147 = null;
var count__1100_1148 = (0);
var i__1101_1149 = (0);
while(true){
if((i__1101_1149 < count__1100_1148)){
var vec__1102_1150 = cljs.core._nth.call(null,chunk__1099_1147,i__1101_1149);
var k__54__auto___1151 = cljs.core.nth.call(null,vec__1102_1150,(0),null);
var cb__55__auto___1152 = cljs.core.nth.call(null,vec__1102_1150,(1),null);
try{cb__55__auto___1152.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___1145,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e1105){var e__56__auto___1153 = e1105;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___1151,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___1153);
}
var G__1154 = seq__1098_1146;
var G__1155 = chunk__1099_1147;
var G__1156 = count__1100_1148;
var G__1157 = (i__1101_1149 + (1));
seq__1098_1146 = G__1154;
chunk__1099_1147 = G__1155;
count__1100_1148 = G__1156;
i__1101_1149 = G__1157;
continue;
} else {
var temp__19804__auto___1158 = cljs.core.seq.call(null,seq__1098_1146);
if(temp__19804__auto___1158){
var seq__1098_1159__$1 = temp__19804__auto___1158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1098_1159__$1)){
var c__21298__auto___1160 = cljs.core.chunk_first.call(null,seq__1098_1159__$1);
var G__1161 = cljs.core.chunk_rest.call(null,seq__1098_1159__$1);
var G__1162 = c__21298__auto___1160;
var G__1163 = cljs.core.count.call(null,c__21298__auto___1160);
var G__1164 = (0);
seq__1098_1146 = G__1161;
chunk__1099_1147 = G__1162;
count__1100_1148 = G__1163;
i__1101_1149 = G__1164;
continue;
} else {
var vec__1106_1165 = cljs.core.first.call(null,seq__1098_1159__$1);
var k__54__auto___1166 = cljs.core.nth.call(null,vec__1106_1165,(0),null);
var cb__55__auto___1167 = cljs.core.nth.call(null,vec__1106_1165,(1),null);
try{cb__55__auto___1167.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___1145,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e1109){var e__56__auto___1168 = e1109;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___1166,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___1168);
}
var G__1169 = cljs.core.next.call(null,seq__1098_1159__$1);
var G__1170 = null;
var G__1171 = (0);
var G__1172 = (0);
seq__1098_1146 = G__1169;
chunk__1099_1147 = G__1170;
count__1100_1148 = G__1171;
i__1101_1149 = G__1172;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_1097;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq1081){
var G__1082 = cljs.core.first.call(null,seq1081);
var seq1081__$1 = cljs.core.next.call(null,seq1081);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__1082,seq1081__$1);
});

