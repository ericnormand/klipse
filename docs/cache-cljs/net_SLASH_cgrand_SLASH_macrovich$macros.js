goog.provide("net.cgrand.macrovich$macros");
var ret__21633__auto___788 = (function (){
/**
 * This block will only be evaluated at the correct time for macro definition, at other times its content
 * are removed.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojure.
 * For self-hosted Clojurescript the block is only visible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich$macros.deftime = (function net$cgrand$macrovich$macros$deftime(var_args){
var args__21610__auto__ = [];
var len__21607__auto___789 = arguments.length;
var i__21608__auto___790 = (0);
while(true){
if((i__21608__auto___790 < len__21607__auto___789)){
args__21610__auto__.push((arguments[i__21608__auto___790]));

var G__791 = (i__21608__auto___790 + (1));
i__21608__auto___790 = G__791;
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

net.cgrand.macrovich$macros.deftime.cljs$lang$applyTo = (function (seq785){
var G__786 = cljs.core.first.call(null,seq785);
var seq785__$1 = cljs.core.next.call(null,seq785);
var G__787 = cljs.core.first.call(null,seq785__$1);
var seq785__$2 = cljs.core.next.call(null,seq785__$1);
return net.cgrand.macrovich$macros.deftime.cljs$core$IFn$_invoke$arity$variadic(G__786,G__787,seq785__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.deftime.cljs$lang$macro = true;

var ret__21633__auto___795 = (function (){
/**
 * This block content is not included at macro definition time.
 * For Clojure it always behaves like a `do` block.
 * For Clojurescript/JVM the block is only visible to Clojurescript.
 * For self-hosted Clojurescript the block is invisible when defining macros in the pseudo-namespace.
 */
net.cgrand.macrovich$macros.usetime = (function net$cgrand$macrovich$macros$usetime(var_args){
var args__21610__auto__ = [];
var len__21607__auto___796 = arguments.length;
var i__21608__auto___797 = (0);
while(true){
if((i__21608__auto___797 < len__21607__auto___796)){
args__21610__auto__.push((arguments[i__21608__auto___797]));

var G__798 = (i__21608__auto___797 + (1));
i__21608__auto___797 = G__798;
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

net.cgrand.macrovich$macros.usetime.cljs$lang$applyTo = (function (seq792){
var G__793 = cljs.core.first.call(null,seq792);
var seq792__$1 = cljs.core.next.call(null,seq792);
var G__794 = cljs.core.first.call(null,seq792__$1);
var seq792__$2 = cljs.core.next.call(null,seq792__$1);
return net.cgrand.macrovich$macros.usetime.cljs$core$IFn$_invoke$arity$variadic(G__793,G__794,seq792__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.usetime.cljs$lang$macro = true;

var ret__21633__auto___805 = (function (){
net.cgrand.macrovich$macros.case$ = (function net$cgrand$macrovich$macros$case(var_args){
var args__21610__auto__ = [];
var len__21607__auto___806 = arguments.length;
var i__21608__auto___807 = (0);
while(true){
if((i__21608__auto___807 < len__21607__auto___806)){
args__21610__auto__.push((arguments[i__21608__auto___807]));

var G__808 = (i__21608__auto___807 + (1));
i__21608__auto___807 = G__808;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__802){
var map__803 = p__802;
var map__803__$1 = ((((!((map__803 == null)))?((((map__803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__803):map__803);
var cljs__$1 = cljs.core.get.call(null,map__803__$1,new cljs.core.Keyword(null,"cljs","cljs",(1492417629)));
var clj = cljs.core.get.call(null,map__803__$1,new cljs.core.Keyword(null,"clj","clj",(-660495428)));
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

net.cgrand.macrovich$macros.case$.cljs$lang$applyTo = (function (seq799){
var G__800 = cljs.core.first.call(null,seq799);
var seq799__$1 = cljs.core.next.call(null,seq799);
var G__801 = cljs.core.first.call(null,seq799__$1);
var seq799__$2 = cljs.core.next.call(null,seq799__$1);
return net.cgrand.macrovich$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__800,G__801,seq799__$2);
});

return null;
})()
;
net.cgrand.macrovich$macros.case$.cljs$lang$macro = true;

var ret__21633__auto___823 = (function (){
net.cgrand.macrovich$macros.replace = (function net$cgrand$macrovich$macros$replace(var_args){
var args__21610__auto__ = [];
var len__21607__auto___824 = arguments.length;
var i__21608__auto___825 = (0);
while(true){
if((i__21608__auto___825 < len__21607__auto___824)){
args__21610__auto__.push((arguments[i__21608__auto___825]));

var G__826 = (i__21608__auto___825 + (1));
i__21608__auto___825 = G__826;
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
return (function net$cgrand$macrovich$macros$walk_$_iter__813(s__814){
return (new cljs.core.LazySeq(null,((function (smap){
return (function (){
var s__814__$1 = s__814;
while(true){
var temp__19804__auto__ = cljs.core.seq.call(null,s__814__$1);
if(temp__19804__auto__){
var s__814__$2 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__814__$2)){
var c__21260__auto__ = cljs.core.chunk_first.call(null,s__814__$2);
var size__21261__auto__ = cljs.core.count.call(null,c__21260__auto__);
var b__816 = cljs.core.chunk_buffer.call(null,size__21261__auto__);
if((function (){var i__815 = (0);
while(true){
if((i__815 < size__21261__auto__)){
var vec__817 = cljs.core._nth.call(null,c__21260__auto__,i__815);
var k = cljs.core.nth.call(null,vec__817,(0),null);
var v = cljs.core.nth.call(null,vec__817,(1),null);
cljs.core.chunk_append.call(null,b__816,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$macros$walk.call(null,k),net$cgrand$macrovich$macros$walk.call(null,v)], null));

var G__827 = (i__815 + (1));
i__815 = G__827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__816),net$cgrand$macrovich$macros$walk_$_iter__813.call(null,cljs.core.chunk_rest.call(null,s__814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__816),null);
}
} else {
var vec__820 = cljs.core.first.call(null,s__814__$2);
var k = cljs.core.nth.call(null,vec__820,(0),null);
var v = cljs.core.nth.call(null,vec__820,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net$cgrand$macrovich$macros$walk.call(null,k),net$cgrand$macrovich$macros$walk.call(null,v)], null),net$cgrand$macrovich$macros$walk_$_iter__813.call(null,cljs.core.rest.call(null,s__814__$2)));
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

net.cgrand.macrovich$macros.replace.cljs$lang$applyTo = (function (seq809){
var G__810 = cljs.core.first.call(null,seq809);
var seq809__$1 = cljs.core.next.call(null,seq809);
var G__811 = cljs.core.first.call(null,seq809__$1);
var seq809__$2 = cljs.core.next.call(null,seq809__$1);
var G__812 = cljs.core.first.call(null,seq809__$2);
var seq809__$3 = cljs.core.next.call(null,seq809__$2);
return net.cgrand.macrovich$macros.replace.cljs$core$IFn$_invoke$arity$variadic(G__810,G__811,G__812,seq809__$3);
});

return null;
})()
;
net.cgrand.macrovich$macros.replace.cljs$lang$macro = true;

