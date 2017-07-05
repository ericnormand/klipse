goog.provide("re_frame.trace$macros");
re_frame.trace$macros.id = cljs.core.atom.call(null,(0));
re_frame.trace$macros._STAR_current_trace_STAR_ = null;
re_frame.trace$macros.reset_tracing_BANG_ = (function re_frame$trace$macros$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace$macros.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace$macros.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace$macros.is_trace_enabled_QMARK_ = (function re_frame$trace$macros$is_trace_enabled_QMARK_(){
return re_frame.trace$macros.trace_enabled_QMARK_;
});
re_frame.trace$macros.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace$macros.register_trace_cb = (function re_frame$trace$macros$register_trace_cb(key,f){
return cljs.core.swap_BANG_.call(null,re_frame.trace$macros.trace_cbs,cljs.core.assoc,key,f);
});
re_frame.trace$macros.remove_trace_cb = (function re_frame$trace$macros$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace$macros.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace$macros.next_id = (function re_frame$trace$macros$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace$macros.id,cljs.core.inc);
});
re_frame.trace$macros.start_trace = (function re_frame$trace$macros$start_trace(p__513){
var map__514 = p__513;
var map__514__$1 = ((((!((map__514 == null)))?((((map__514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__514):map__514);
var operation = cljs.core.get.call(null,map__514__$1,new cljs.core.Keyword(null,"operation","operation",(-1267664310)));
var op_type = cljs.core.get.call(null,map__514__$1,new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)));
var tags = cljs.core.get.call(null,map__514__$1,new cljs.core.Keyword(null,"tags","tags",(1771418977)));
var child_of = cljs.core.get.call(null,map__514__$1,new cljs.core.Keyword(null,"child-of","child-of",(-903376662)));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",(-1388402092)),re_frame.trace$macros.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",(-1267664310)),operation,new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)),op_type,new cljs.core.Keyword(null,"tags","tags",(1771418977)),tags,new cljs.core.Keyword(null,"child-of","child-of",(-903376662)),(function (){var or__20219__auto__ = child_of;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(re_frame.trace$macros._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",(-355208981)),re_frame.interop.now.call(null)], null);
});
var ret__21633__auto___523 = re_frame.trace$macros.finish_trace = (function re_frame$trace$macros$finish_trace(_AMPERSAND_form,_AMPERSAND_env,trace){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","is-trace-enabled?","re-frame.trace/is-trace-enabled?",(-746708463),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__13__auto__","end__13__auto__",(-763198444),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.interop","now","re-frame.interop/now",(458059402),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"duration__14__auto__","duration__14__auto__",(-451102918),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",(187040141),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__13__auto__","end__13__auto__",(-763198444),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"start","start",(-355208981))),(function (){var x__21332__auto__ = trace;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",(-169320766),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__15__auto__","k__15__auto__",(1820747924),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cb__16__auto__","cb__16__auto__",(1332823393),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","trace-cbs","re-frame.trace/trace-cbs",(-1947456548),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cb__16__auto__","cb__16__auto__",(1332823393),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",(322326297),null)),(function (){var x__21332__auto__ = trace;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"duration","duration",(1444101068))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"duration__14__auto__","duration__14__auto__",(-451102918),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end","end",(-268185958))),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.interop","now","re-frame.interop/now",(458059402),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"default","default",(-1987822328))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__17__auto__","e__17__auto__",(568015820),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.loggers","console","re-frame.loggers/console",(-317229304),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"error","error",(-978969032))),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Error thrown from trace cb"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__15__auto__","k__15__auto__",(1820747924),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"while storing"),(function (){var x__21332__auto__ = trace;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"e__17__auto__","e__17__auto__",(568015820),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});
re_frame.trace$macros.finish_trace.cljs$lang$macro = true;


var ret__21633__auto___524 = (function (){
/**
 * Create a trace inside the scope of the with-trace macro
 * 
 *        Common keys for trace-opts
 *        :op-type - what kind of operation is this? e.g. :sub/create, :render.
 *        :operation - identifier for the operation, for an subscription it would be the subscription keyword
 *        tags - a map of arbitrary kv pairs
 */
re_frame.trace$macros.with_trace = (function re_frame$trace$macros$with_trace(var_args){
var args__21610__auto__ = [];
var len__21607__auto___525 = arguments.length;
var i__21608__auto___526 = (0);
while(true){
if((i__21608__auto___526 < len__21607__auto___525)){
args__21610__auto__.push((arguments[i__21608__auto___526]));

var G__527 = (i__21608__auto___526 + (1));
i__21608__auto___526 = G__527;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((3) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((3)),(0),null)):null);
return re_frame.trace$macros.with_trace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21611__auto__);
});

re_frame.trace$macros.with_trace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__520,body){
var map__521 = p__520;
var map__521__$1 = ((((!((map__521 == null)))?((((map__521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__521):map__521);
var trace_opts = map__521__$1;
var operation = cljs.core.get.call(null,map__521__$1,new cljs.core.Keyword(null,"operation","operation",(-1267664310)));
var op_type = cljs.core.get.call(null,map__521__$1,new cljs.core.Keyword(null,"op-type","op-type",(-1636141668)));
var tags = cljs.core.get.call(null,map__521__$1,new cljs.core.Keyword(null,"tags","tags",(1771418977)));
var child_of = cljs.core.get.call(null,map__521__$1,new cljs.core.Keyword(null,"child-of","child-of",(-903376662)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","is-trace-enabled?","re-frame.trace/is-trace-enabled?",(-746708463),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","*current-trace*","re-frame.trace/*current-trace*",(-1928561546),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","start-trace","re-frame.trace/start-trace",(-774485496),null)),(function (){var x__21332__auto__ = trace_opts;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",(-1273693247),null)),body,(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","finish-trace","re-frame.trace/finish-trace",(-504356059),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","*current-trace*","re-frame.trace/*current-trace*",(-1928561546),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});

re_frame.trace$macros.with_trace.cljs$lang$maxFixedArity = (3);

re_frame.trace$macros.with_trace.cljs$lang$applyTo = (function (seq516){
var G__517 = cljs.core.first.call(null,seq516);
var seq516__$1 = cljs.core.next.call(null,seq516);
var G__518 = cljs.core.first.call(null,seq516__$1);
var seq516__$2 = cljs.core.next.call(null,seq516__$1);
var G__519 = cljs.core.first.call(null,seq516__$2);
var seq516__$3 = cljs.core.next.call(null,seq516__$2);
return re_frame.trace$macros.with_trace.cljs$core$IFn$_invoke$arity$variadic(G__517,G__518,G__519,seq516__$3);
});

return null;
})()
;
re_frame.trace$macros.with_trace.cljs$lang$macro = true;


var ret__21633__auto___528 = re_frame.trace$macros.merge_trace_BANG_ = (function re_frame$trace$macros$merge_trace_BANG_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","is-trace-enabled?","re-frame.trace/is-trace-enabled?",(-746708463),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-trace__18__auto__","new-trace__18__auto__",(-301925167),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update","cljs.core/update",(-908565906),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","*current-trace*","re-frame.trace/*current-trace*",(-1928561546),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tags","tags",(1771418977))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",(-822184067),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tags","tags",(1771418977))),(function (){var x__21332__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",(-822184067),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",(-432349815),null)),(function (){var x__21332__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tags","tags",(1771418977)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("re-frame.trace","*current-trace*","re-frame.trace/*current-trace*",(-1928561546),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new-trace__18__auto__","new-trace__18__auto__",(-301925167),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null)));
});
re_frame.trace$macros.merge_trace_BANG_.cljs$lang$macro = true;

