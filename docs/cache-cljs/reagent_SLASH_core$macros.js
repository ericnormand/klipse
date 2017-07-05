goog.provide("reagent.core$macros");
var ret__21633__auto___680 = (function (){
reagent.core$macros.with_let = (function reagent$core$macros$with_let(var_args){
var args__21610__auto__ = [];
var len__21607__auto___681 = arguments.length;
var i__21608__auto___682 = (0);
while(true){
if((i__21608__auto___682 < len__21607__auto___681)){
args__21610__auto__.push((arguments[i__21608__auto___682]));

var G__683 = (i__21608__auto___682 + (1));
i__21608__auto___682 = G__683;
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

reagent.core$macros.with_let.cljs$lang$applyTo = (function (seq676){
var G__677 = cljs.core.first.call(null,seq676);
var seq676__$1 = cljs.core.next.call(null,seq676);
var G__678 = cljs.core.first.call(null,seq676__$1);
var seq676__$2 = cljs.core.next.call(null,seq676__$1);
var G__679 = cljs.core.first.call(null,seq676__$2);
var seq676__$3 = cljs.core.next.call(null,seq676__$2);
return reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic(G__677,G__678,G__679,seq676__$3);
});

return null;
})()
;
reagent.core$macros.with_let.cljs$lang$macro = true;

