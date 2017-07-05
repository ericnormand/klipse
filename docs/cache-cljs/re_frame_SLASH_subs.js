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
var seq__577_587 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__578_588 = null;
var count__579_589 = (0);
var i__580_590 = (0);
while(true){
if((i__580_590 < count__579_589)){
var vec__581_591 = cljs.core._nth.call(null,chunk__578_588,i__580_590);
var k_592 = cljs.core.nth.call(null,vec__581_591,(0),null);
var rxn_593 = cljs.core.nth.call(null,vec__581_591,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_593);

var G__594 = seq__577_587;
var G__595 = chunk__578_588;
var G__596 = count__579_589;
var G__597 = (i__580_590 + (1));
seq__577_587 = G__594;
chunk__578_588 = G__595;
count__579_589 = G__596;
i__580_590 = G__597;
continue;
} else {
var temp__19804__auto___598 = cljs.core.seq.call(null,seq__577_587);
if(temp__19804__auto___598){
var seq__577_599__$1 = temp__19804__auto___598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__577_599__$1)){
var c__21298__auto___600 = cljs.core.chunk_first.call(null,seq__577_599__$1);
var G__601 = cljs.core.chunk_rest.call(null,seq__577_599__$1);
var G__602 = c__21298__auto___600;
var G__603 = cljs.core.count.call(null,c__21298__auto___600);
var G__604 = (0);
seq__577_587 = G__601;
chunk__578_588 = G__602;
count__579_589 = G__603;
i__580_590 = G__604;
continue;
} else {
var vec__584_605 = cljs.core.first.call(null,seq__577_599__$1);
var k_606 = cljs.core.nth.call(null,vec__584_605,(0),null);
var rxn_607 = cljs.core.nth.call(null,vec__584_605,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_607);

var G__608 = cljs.core.next.call(null,seq__577_599__$1);
var G__609 = null;
var G__610 = (0);
var G__611 = (0);
seq__577_587 = G__608;
chunk__578_588 = G__609;
count__579_589 = G__610;
i__580_590 = G__611;
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
var _STAR_current_trace_STAR_612 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","dispose","sub/dispose",(365440536)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_v,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13__auto___625 = re_frame.interop.now.call(null);
var duration__14__auto___626 = (end__13__auto___625 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__613_627 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__614_628 = null;
var count__615_629 = (0);
var i__616_630 = (0);
while(true){
if((i__616_630 < count__615_629)){
var vec__617_631 = cljs.core._nth.call(null,chunk__614_628,i__616_630);
var k__15__auto___632 = cljs.core.nth.call(null,vec__617_631,(0),null);
var cb__16__auto___633 = cljs.core.nth.call(null,vec__617_631,(1),null);
try{cb__16__auto___633.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___626,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e620){var e__17__auto___634 = e620;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___632,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___634);
}
var G__635 = seq__613_627;
var G__636 = chunk__614_628;
var G__637 = count__615_629;
var G__638 = (i__616_630 + (1));
seq__613_627 = G__635;
chunk__614_628 = G__636;
count__615_629 = G__637;
i__616_630 = G__638;
continue;
} else {
var temp__19804__auto___639 = cljs.core.seq.call(null,seq__613_627);
if(temp__19804__auto___639){
var seq__613_640__$1 = temp__19804__auto___639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__613_640__$1)){
var c__21298__auto___641 = cljs.core.chunk_first.call(null,seq__613_640__$1);
var G__642 = cljs.core.chunk_rest.call(null,seq__613_640__$1);
var G__643 = c__21298__auto___641;
var G__644 = cljs.core.count.call(null,c__21298__auto___641);
var G__645 = (0);
seq__613_627 = G__642;
chunk__614_628 = G__643;
count__615_629 = G__644;
i__616_630 = G__645;
continue;
} else {
var vec__621_646 = cljs.core.first.call(null,seq__613_640__$1);
var k__15__auto___647 = cljs.core.nth.call(null,vec__621_646,(0),null);
var cb__16__auto___648 = cljs.core.nth.call(null,vec__621_646,(1),null);
try{cb__16__auto___648.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___626,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e624){var e__17__auto___649 = e624;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___647,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___649);
}
var G__650 = cljs.core.next.call(null,seq__613_640__$1);
var G__651 = null;
var G__652 = (0);
var G__653 = (0);
seq__613_627 = G__650;
chunk__614_628 = G__651;
count__615_629 = G__652;
i__616_630 = G__653;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_612;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___654 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___654;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__656 = arguments.length;
switch (G__656) {
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
var G__659 = arguments.length;
switch (G__659) {
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
var _STAR_current_trace_STAR_660 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","create","sub/create",(-1301317560)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_v], null)], null));

try{try{var temp__19642__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__19642__auto__)){
var cached = temp__19642__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___687 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___687;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___688 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___688;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___689 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___689;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13__auto___690 = re_frame.interop.now.call(null);
var duration__14__auto___691 = (end__13__auto___690 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__661_692 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__662_693 = null;
var count__663_694 = (0);
var i__664_695 = (0);
while(true){
if((i__664_695 < count__663_694)){
var vec__665_696 = cljs.core._nth.call(null,chunk__662_693,i__664_695);
var k__15__auto___697 = cljs.core.nth.call(null,vec__665_696,(0),null);
var cb__16__auto___698 = cljs.core.nth.call(null,vec__665_696,(1),null);
try{cb__16__auto___698.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___691,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e668){var e__17__auto___699 = e668;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___697,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___699);
}
var G__700 = seq__661_692;
var G__701 = chunk__662_693;
var G__702 = count__663_694;
var G__703 = (i__664_695 + (1));
seq__661_692 = G__700;
chunk__662_693 = G__701;
count__663_694 = G__702;
i__664_695 = G__703;
continue;
} else {
var temp__19804__auto___704 = cljs.core.seq.call(null,seq__661_692);
if(temp__19804__auto___704){
var seq__661_705__$1 = temp__19804__auto___704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__661_705__$1)){
var c__21298__auto___706 = cljs.core.chunk_first.call(null,seq__661_705__$1);
var G__707 = cljs.core.chunk_rest.call(null,seq__661_705__$1);
var G__708 = c__21298__auto___706;
var G__709 = cljs.core.count.call(null,c__21298__auto___706);
var G__710 = (0);
seq__661_692 = G__707;
chunk__662_693 = G__708;
count__663_694 = G__709;
i__664_695 = G__710;
continue;
} else {
var vec__669_711 = cljs.core.first.call(null,seq__661_705__$1);
var k__15__auto___712 = cljs.core.nth.call(null,vec__669_711,(0),null);
var cb__16__auto___713 = cljs.core.nth.call(null,vec__669_711,(1),null);
try{cb__16__auto___713.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___691,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e672){var e__17__auto___714 = e672;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___712,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___714);
}
var G__715 = cljs.core.next.call(null,seq__661_705__$1);
var G__716 = null;
var G__717 = (0);
var G__718 = (0);
seq__661_692 = G__715;
chunk__662_693 = G__716;
count__663_694 = G__717;
i__664_695 = G__718;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_660;
}} else {
var temp__19642__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__19642__auto__)){
var cached = temp__19642__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___719 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___719;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___720 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___720;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___721 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___721;

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
var _STAR_current_trace_STAR_673 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","create","sub/create",(-1301317560)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",(949994592)),dynv], null)], null));

try{try{var temp__19642__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__19642__auto__)){
var cached = temp__19642__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___722 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___722;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___723 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___723;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__19804__auto___724 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__19804__auto___724)){
var not_reactive_725 = temp__19804__auto___724;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_725);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___726 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___726;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_673){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_673))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_673){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_673))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_673){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__19642__auto__,_STAR_current_trace_STAR_673))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13__auto___727 = re_frame.interop.now.call(null);
var duration__14__auto___728 = (end__13__auto___727 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__674_729 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__675_730 = null;
var count__676_731 = (0);
var i__677_732 = (0);
while(true){
if((i__677_732 < count__676_731)){
var vec__678_733 = cljs.core._nth.call(null,chunk__675_730,i__677_732);
var k__15__auto___734 = cljs.core.nth.call(null,vec__678_733,(0),null);
var cb__16__auto___735 = cljs.core.nth.call(null,vec__678_733,(1),null);
try{cb__16__auto___735.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___728,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e681){var e__17__auto___736 = e681;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___734,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___736);
}
var G__737 = seq__674_729;
var G__738 = chunk__675_730;
var G__739 = count__676_731;
var G__740 = (i__677_732 + (1));
seq__674_729 = G__737;
chunk__675_730 = G__738;
count__676_731 = G__739;
i__677_732 = G__740;
continue;
} else {
var temp__19804__auto___741 = cljs.core.seq.call(null,seq__674_729);
if(temp__19804__auto___741){
var seq__674_742__$1 = temp__19804__auto___741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__674_742__$1)){
var c__21298__auto___743 = cljs.core.chunk_first.call(null,seq__674_742__$1);
var G__744 = cljs.core.chunk_rest.call(null,seq__674_742__$1);
var G__745 = c__21298__auto___743;
var G__746 = cljs.core.count.call(null,c__21298__auto___743);
var G__747 = (0);
seq__674_729 = G__744;
chunk__675_730 = G__745;
count__676_731 = G__746;
i__677_732 = G__747;
continue;
} else {
var vec__682_748 = cljs.core.first.call(null,seq__674_742__$1);
var k__15__auto___749 = cljs.core.nth.call(null,vec__682_748,(0),null);
var cb__16__auto___750 = cljs.core.nth.call(null,vec__682_748,(1),null);
try{cb__16__auto___750.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___728,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e685){var e__17__auto___751 = e685;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___749,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___751);
}
var G__752 = cljs.core.next.call(null,seq__674_742__$1);
var G__753 = null;
var G__754 = (0);
var G__755 = (0);
seq__674_729 = G__752;
chunk__675_730 = G__753;
count__676_731 = G__754;
i__677_732 = G__755;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_673;
}} else {
var temp__19642__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__19642__auto__)){
var cached = temp__19642__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___756 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),true,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___756;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___757 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",(86081880)),false], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___757;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__19804__auto___758 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__19804__auto___758)){
var not_reactive_759 = temp__19804__auto___758;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",(-436710552)),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_759);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___760 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",(-978969032)),true], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___760;

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
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__761){
var vec__762 = p__761;
var k = cljs.core.nth.call(null,vec__762,(0),null);
var v = cljs.core.nth.call(null,vec__762,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__18__auto___765 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",(1771418977)),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",(1771418977)).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",(563633497)),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",(563633497)),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",(1771418977))));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__18__auto___765;

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
var len__21607__auto___798 = arguments.length;
var i__21608__auto___799 = (0);
while(true){
if((i__21608__auto___799 < len__21607__auto___798)){
args__21610__auto__.push((arguments[i__21608__auto___799]));

var G__800 = (i__21608__auto___799 + (1));
i__21608__auto___799 = G__800;
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
var inputs_fn = (function (){var G__768 = cljs.core.count.call(null,input_args);
switch (G__768) {
case (0):
return ((function (G__768,computation_fn,input_args,err_header){
return (function() {
var G__802 = null;
var G__802__1 = (function (_){
return re_frame.db.app_db;
});
var G__802__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__802 = function(_,___$1){
switch(arguments.length){
case 1:
return G__802__1.call(this,_);
case 2:
return G__802__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__802.cljs$core$IFn$_invoke$arity$1 = G__802__1;
G__802.cljs$core$IFn$_invoke$arity$2 = G__802__2;
return G__802;
})()
;})(G__768,computation_fn,input_args,err_header))

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
var vec__769 = input_args;
var marker = cljs.core.nth.call(null,vec__769,(0),null);
var vec = cljs.core.nth.call(null,vec__769,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",(760412998)),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),err_header,"expected :<-, got:",marker);
}

return ((function (vec__769,marker,vec,G__768,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
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
;})(vec__769,marker,vec,G__768,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",(760412998)),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__768,computation_fn,input_args,err_header){
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
;})(pairs,markers,vecs,G__768,computation_fn,input_args,err_header))

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
var _STAR_current_trace_STAR_772 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","run","sub/run",(-1821315581)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_vec,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13__auto___803 = re_frame.interop.now.call(null);
var duration__14__auto___804 = (end__13__auto___803 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__773_805 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__774_806 = null;
var count__775_807 = (0);
var i__776_808 = (0);
while(true){
if((i__776_808 < count__775_807)){
var vec__777_809 = cljs.core._nth.call(null,chunk__774_806,i__776_808);
var k__15__auto___810 = cljs.core.nth.call(null,vec__777_809,(0),null);
var cb__16__auto___811 = cljs.core.nth.call(null,vec__777_809,(1),null);
try{cb__16__auto___811.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___804,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e780){var e__17__auto___812 = e780;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___810,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___812);
}
var G__813 = seq__773_805;
var G__814 = chunk__774_806;
var G__815 = count__775_807;
var G__816 = (i__776_808 + (1));
seq__773_805 = G__813;
chunk__774_806 = G__814;
count__775_807 = G__815;
i__776_808 = G__816;
continue;
} else {
var temp__19804__auto___817 = cljs.core.seq.call(null,seq__773_805);
if(temp__19804__auto___817){
var seq__773_818__$1 = temp__19804__auto___817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__773_818__$1)){
var c__21298__auto___819 = cljs.core.chunk_first.call(null,seq__773_818__$1);
var G__820 = cljs.core.chunk_rest.call(null,seq__773_818__$1);
var G__821 = c__21298__auto___819;
var G__822 = cljs.core.count.call(null,c__21298__auto___819);
var G__823 = (0);
seq__773_805 = G__820;
chunk__774_806 = G__821;
count__775_807 = G__822;
i__776_808 = G__823;
continue;
} else {
var vec__781_824 = cljs.core.first.call(null,seq__773_818__$1);
var k__15__auto___825 = cljs.core.nth.call(null,vec__781_824,(0),null);
var cb__16__auto___826 = cljs.core.nth.call(null,vec__781_824,(1),null);
try{cb__16__auto___826.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___804,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e784){var e__17__auto___827 = e784;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___825,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___827);
}
var G__828 = cljs.core.next.call(null,seq__773_818__$1);
var G__829 = null;
var G__830 = (0);
var G__831 = (0);
seq__773_805 = G__828;
chunk__774_806 = G__829;
count__775_807 = G__830;
i__776_808 = G__831;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_772;
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
var _STAR_current_trace_STAR_785 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",(-1267664310)),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),new cljs.core.Keyword("sub","run","sub/run",(-1821315581)),new cljs.core.Keyword(null,"tags","tags",(1771418977)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",(-1514170131)),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",(949994592)),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",(490869788)),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13__auto___832 = re_frame.interop.now.call(null);
var duration__14__auto___833 = (end__13__auto___832 - new cljs.core.Keyword(null,"start","start",(-355208981)).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__786_834 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__787_835 = null;
var count__788_836 = (0);
var i__789_837 = (0);
while(true){
if((i__789_837 < count__788_836)){
var vec__790_838 = cljs.core._nth.call(null,chunk__787_835,i__789_837);
var k__15__auto___839 = cljs.core.nth.call(null,vec__790_838,(0),null);
var cb__16__auto___840 = cljs.core.nth.call(null,vec__790_838,(1),null);
try{cb__16__auto___840.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___833,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e793){var e__17__auto___841 = e793;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___839,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___841);
}
var G__842 = seq__786_834;
var G__843 = chunk__787_835;
var G__844 = count__788_836;
var G__845 = (i__789_837 + (1));
seq__786_834 = G__842;
chunk__787_835 = G__843;
count__788_836 = G__844;
i__789_837 = G__845;
continue;
} else {
var temp__19804__auto___846 = cljs.core.seq.call(null,seq__786_834);
if(temp__19804__auto___846){
var seq__786_847__$1 = temp__19804__auto___846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__786_847__$1)){
var c__21298__auto___848 = cljs.core.chunk_first.call(null,seq__786_847__$1);
var G__849 = cljs.core.chunk_rest.call(null,seq__786_847__$1);
var G__850 = c__21298__auto___848;
var G__851 = cljs.core.count.call(null,c__21298__auto___848);
var G__852 = (0);
seq__786_834 = G__849;
chunk__787_835 = G__850;
count__788_836 = G__851;
i__789_837 = G__852;
continue;
} else {
var vec__794_853 = cljs.core.first.call(null,seq__786_847__$1);
var k__15__auto___854 = cljs.core.nth.call(null,vec__794_853,(0),null);
var cb__16__auto___855 = cljs.core.nth.call(null,vec__794_853,(1),null);
try{cb__16__auto___855.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",(1444101068)),duration__14__auto___833,new cljs.core.Keyword(null,"end","end",(-268185958)),re_frame.interop.now.call(null))], null));
}catch (e797){var e__17__auto___856 = e797;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"Error thrown from trace cb",k__15__auto___854,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__17__auto___856);
}
var G__857 = cljs.core.next.call(null,seq__786_847__$1);
var G__858 = null;
var G__859 = (0);
var G__860 = (0);
seq__786_834 = G__857;
chunk__787_835 = G__858;
count__788_836 = G__859;
i__789_837 = G__860;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_785;
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

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq766){
var G__767 = cljs.core.first.call(null,seq766);
var seq766__$1 = cljs.core.next.call(null,seq766);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__767,seq766__$1);
});

