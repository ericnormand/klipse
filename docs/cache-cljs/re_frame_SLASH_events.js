goog.provide("re_frame.events");
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",(301435442));
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__64_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__64_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__19804__auto___847 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__19804__auto___847)){
var not_i_848 = temp__19804__auto___847;
if(cljs.core.fn_QMARK_.call(null,not_i_848)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_848);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_848);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__19642__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__19642__auto__)){
var interceptors = temp__19642__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_849 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_850 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),event_id,new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",(301435442)),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__52__auto___863 = re_frame.interop.now.call(null);
var duration__53__auto___864 = (end__52__auto___863 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__851_865 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__852_866 = null;
var count__853_867 = (0);
var i__854_868 = (0);
while(true){
if((i__854_868 < count__853_867)){
var vec__855_869 = cljs.core._nth.call(null,chunk__852_866,i__854_868);
var k__54__auto___870 = cljs.core.nth.call(null,vec__855_869,(0),null);
var cb__55__auto___871 = cljs.core.nth.call(null,vec__855_869,(1),null);
try{cb__55__auto___871.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___864,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e858){var e__56__auto___872 = e858;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___870,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___872);
}
var G__873 = seq__851_865;
var G__874 = chunk__852_866;
var G__875 = count__853_867;
var G__876 = (i__854_868 + (1));
seq__851_865 = G__873;
chunk__852_866 = G__874;
count__853_867 = G__875;
i__854_868 = G__876;
continue;
} else {
var temp__19804__auto___877 = cljs.core.seq.call(null,seq__851_865);
if(temp__19804__auto___877){
var seq__851_878__$1 = temp__19804__auto___877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__851_878__$1)){
var c__21298__auto___879 = cljs.core.chunk_first.call(null,seq__851_878__$1);
var G__880 = cljs.core.chunk_rest.call(null,seq__851_878__$1);
var G__881 = c__21298__auto___879;
var G__882 = cljs.core.count.call(null,c__21298__auto___879);
var G__883 = (0);
seq__851_865 = G__880;
chunk__852_866 = G__881;
count__853_867 = G__882;
i__854_868 = G__883;
continue;
} else {
var vec__859_884 = cljs.core.first.call(null,seq__851_878__$1);
var k__54__auto___885 = cljs.core.nth.call(null,vec__859_884,(0),null);
var cb__55__auto___886 = cljs.core.nth.call(null,vec__859_884,(1),null);
try{cb__55__auto___886.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__53__auto___864,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e862){var e__56__auto___887 = e862;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__54__auto___885,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__56__auto___887);
}
var G__888 = cljs.core.next.call(null,seq__851_878__$1);
var G__889 = null;
var G__890 = (0);
var G__891 = (0);
seq__851_865 = G__888;
chunk__852_866 = G__889;
count__853_867 = G__890;
i__854_868 = G__891;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_850;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_849;
}}
} else {
return null;
}
});
