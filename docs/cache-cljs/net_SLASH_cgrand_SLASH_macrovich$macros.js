goog.provide("net.cgrand.macrovich$macros");
var ret__21633__auto___473 = (function (){
/**
 * This block will only be evaluated at the correct time for macro definition, at other times its content
 * are removed.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojure.
 * For self-hosted Clojurescript the block is only visible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich$macros.deftime = (function net$cgrand$macrovich$macros$deftime(var_args){
var args__21610__auto__ = [];
var len__21607__auto___474 = arguments.length;
var i__21608__auto___475 = (0);
while(true){
if((i__21608__auto___475 < len__21607__auto___474)){
args__21610__auto__.push((arguments[i__21608__auto___475]));

var G__476 = (i__21608__auto___475 + (1));
i__21608__auto___475 = G__476;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich$macros.deftime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

net.cgrand.macrovich$macros.deftime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\$macros/,cljs.core.name.call(null,cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_))))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
} else {
return null;
}
});

net.cgrand.macrovich$macros.deftime.cljs$lang$maxFixedArity = (2);

net.cgrand.macrovich$macros.deftime.cljs$lang$applyTo = (function (seq470){
var G__471 = cljs.core.first.call(null,seq470);
var seq470__$1 = cljs.core.next.call(null,seq470);
var G__472 = cljs.core.first.call(null,seq470__$1);
var seq470__$2 = cljs.core.next.call(null,seq470__$1);
return net.cgrand.macrovich$macros.deftime.cljs$core$IFn$_invoke$arity$variadic(G__471,G__472,seq470__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.deftime.cljs$lang$macro = true;

var ret__21633__auto___480 = (function (){
/**
 * This block content is not included at macro definition time.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojurescript.
 * For self-hosted Clojurescript the block is invisible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich$macros.usetime = (function net$cgrand$macrovich$macros$usetime(var_args){
var args__21610__auto__ = [];
var len__21607__auto___481 = arguments.length;
var i__21608__auto___482 = (0);
while(true){
if((i__21608__auto___482 < len__21607__auto___481)){
args__21610__auto__.push((arguments[i__21608__auto___482]));

var G__483 = (i__21608__auto___482 + (1));
i__21608__auto___482 = G__483;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich$macros.usetime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

net.cgrand.macrovich$macros.usetime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*\$macros/,cljs.core.name.call(null,cljs.core.ns_name.call(null,cljs.core._STAR_ns_STAR_))))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),body));
} else {
return null;
}
});

net.cgrand.macrovich$macros.usetime.cljs$lang$maxFixedArity = (2);

net.cgrand.macrovich$macros.usetime.cljs$lang$applyTo = (function (seq477){
var G__478 = cljs.core.first.call(null,seq477);
var seq477__$1 = cljs.core.next.call(null,seq477);
var G__479 = cljs.core.first.call(null,seq477__$1);
var seq477__$2 = cljs.core.next.call(null,seq477__$1);
return net.cgrand.macrovich$macros.usetime.cljs$core$IFn$_invoke$arity$variadic(G__478,G__479,seq477__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.usetime.cljs$lang$macro = true;

var ret__21633__auto___490 = (function (){
net.cgrand.macrovich$macros.case$ = (function net$cgrand$macrovich$macros$case(var_args){
var args__21610__auto__ = [];
var len__21607__auto___491 = arguments.length;
var i__21608__auto___492 = (0);
while(true){
if((i__21608__auto___492 < len__21607__auto___491)){
args__21610__auto__.push((arguments[i__21608__auto___492]));

var G__493 = (i__21608__auto___492 + (1));
i__21608__auto___492 = G__493;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__487){
var map__488 = p__487;
var map__488__$1 = ((((!((map__488 == null)))?((((map__488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__488):map__488);
var cljs__$1 = cljs.core.get.call(null,map__488__$1,new cljs.core.Keyword(null,"cljs","cljs",(1492417629)));
var clj = cljs.core.get.call(null,map__488__$1,new cljs.core.Keyword(null,"clj","clj",(-660495428)));
if(cljs.core.contains_QMARK_.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"&env","&env",(-919163083),null))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ns","ns",(441598760))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&env","&env",(-919163083),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = clj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
} else {
return cljs__$1;

}
});

net.cgrand.macrovich$macros.case$.cljs$lang$maxFixedArity = (2);

net.cgrand.macrovich$macros.case$.cljs$lang$applyTo = (function (seq484){
var G__485 = cljs.core.first.call(null,seq484);
var seq484__$1 = cljs.core.next.call(null,seq484);
var G__486 = cljs.core.first.call(null,seq484__$1);
var seq484__$2 = cljs.core.next.call(null,seq484__$1);
return net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__485,G__486,seq484__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.case$.cljs$lang$macro = true;

var ret__21633__auto___508 = (function (){
net.cgrand.macrovich$macros.replace = (function net$cgrand$macrovich$macros$replace(var_args){
var args__21610__auto__ = [];
var len__21607__auto___509 = arguments.length;
var i__21608__auto___510 = (0);
while(true){
if((i__21608__auto___510 < len__21607__auto___509)){
args__21610__auto__.push((arguments[i__21608__auto___510]));

var G__511 = (i__21608__auto___510 + (1));
i__21608__auto___510 = G__511;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((3) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((3)),(0),null)):null);
return net.cgrand.macrovich$macros.replace.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21611__auto__);
});

net.cgrand.macrovich$macros.replace.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,map_or_maps,body){
var smap = ((cljs.core.map_QMARK_.call(null,map_or_maps))?map_or_maps:cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,map_or_maps));
var walk = ((function (smap){
return (function net$cgrand$macrovich$macros$walk(form){
if(cljs.core.contains_QMARK_.call(null,smap,form)){
return smap.call(null,form);
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),(function (){var iter__21262__auto__ = ((function (smap){
return (function net$cgrand$macrovich$macros$walk_$_iter__498(s__499){
return (new cljs.core.LazySeq(null,((function (smap){
return (function (){
var s__499__$1 = s__499;
while(true){
var temp__19804__auto__ = cljs.core.seq.call(null,s__499__$1);
if(temp__19804__auto__){
var s__499__$2 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__499__$2)){
var c__21260__auto__ = cljs.core.chunk_first.call(null,s__499__$2);
var size__21261__auto__ = cljs.core.count.call(null,c__21260__auto__);
var b__501 = cljs.core.chunk_buffer.call(null,size__21261__auto__);
if((function (){var i__500 = (0);
while(true){
if((i__500 < size__21261__auto__)){
var vec__502 = cljs.core._nth.call(null,c__21260__auto__,i__500);
var k = cljs.core.nth.call(null,vec__502,(0),null);
var v = cljs.core.nth.call(null,vec__502,(1),null);
cljs.core.chunk_append.call(null,b__501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$macros$walk.call(null,k),net$cgrand$macrovich$macros$walk.call(null,v)], null));

var G__512 = (i__500 + (1));
i__500 = G__512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__501),net$cgrand$macrovich$macros$walk_$_iter__498.call(null,cljs.core.chunk_rest.call(null,s__499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__501),null);
}
} else {
var vec__505 = cljs.core.first.call(null,s__499__$2);
var k = cljs.core.nth.call(null,vec__505,(0),null);
var v = cljs.core.nth.call(null,vec__505,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$macros$walk.call(null,k),net$cgrand$macrovich$macros$walk.call(null,v)], null),net$cgrand$macrovich$macros$walk_$_iter__498.call(null,cljs.core.rest.call(null,s__499__$2)));
}
} else {
return null;
}
break;
}
});})(smap))
,null,null));
});})(smap))
;
return iter__21262__auto__.call(null,form);
})()),cljs.core.meta.call(null,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,cljs.core.map.call(null,net$cgrand$macrovich$macros$walk,form),cljs.core.meta.call(null,form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,net$cgrand$macrovich$macros$walk),form),cljs.core.meta.call(null,form));
} else {
return form;

}
}
}
}
});})(smap))
;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),cljs.core.map.call(null,walk,body)));
});

net.cgrand.macrovich$macros.replace.cljs$lang$maxFixedArity = (3);

net.cgrand.macrovich$macros.replace.cljs$lang$applyTo = (function (seq494){
var G__495 = cljs.core.first.call(null,seq494);
var seq494__$1 = cljs.core.next.call(null,seq494);
var G__496 = cljs.core.first.call(null,seq494__$1);
var seq494__$2 = cljs.core.next.call(null,seq494__$1);
var G__497 = cljs.core.first.call(null,seq494__$2);
var seq494__$3 = cljs.core.next.call(null,seq494__$2);
return net.cgrand.macrovich$macros.replace.cljs$core$IFn$_invoke$arity$variadic(G__495,G__496,G__497,seq494__$3);
});

return null;
})()
;
net.cgrand.macrovich$macros.replace.cljs$lang$macro = true;

