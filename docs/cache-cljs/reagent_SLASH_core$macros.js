goog.provide("reagent.core$macros");
var ret__21633__auto___365 = (function (){
reagent.core$macros.with_let = (function reagent$core$macros$with_let(var_args){
var args__21610__auto__ = [];
var len__21607__auto___366 = arguments.length;
var i__21608__auto___367 = (0);
while(true){
if((i__21608__auto___367 < len__21607__auto___366)){
args__21610__auto__.push((arguments[i__21608__auto___367]));

var G__368 = (i__21608__auto___367 + (1));
i__21608__auto___367 = G__368;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((3) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((3)),(0),null)):null);
return reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21611__auto__);
});

reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){

return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.ratom","with-let","reagent.ratom/with-let",(511958283),null)),(function (){var x__21332__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),body));
});

reagent.core$macros.with_let.cljs$lang$maxFixedArity = (3);

reagent.core$macros.with_let.cljs$lang$applyTo = (function (seq361){
var G__362 = cljs.core.first.call(null,seq361);
var seq361__$1 = cljs.core.next.call(null,seq361);
var G__363 = cljs.core.first.call(null,seq361__$1);
var seq361__$2 = cljs.core.next.call(null,seq361__$1);
var G__364 = cljs.core.first.call(null,seq361__$2);
var seq361__$3 = cljs.core.next.call(null,seq361__$2);
return reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic(G__362,G__363,G__364,seq361__$3);
});

return null;
})()
;
reagent.core$macros.with_let.cljs$lang$macro = true;

