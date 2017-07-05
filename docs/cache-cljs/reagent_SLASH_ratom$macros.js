goog.provide("reagent.ratom$macros");
var ret__21633__auto___432 = (function (){
reagent.ratom$macros.reaction = (function reagent$ratom$macros$reaction(var_args){
var args__21610__auto__ = [];
var len__21607__auto___433 = arguments.length;
var i__21608__auto___434 = (0);
while(true){
if((i__21608__auto___434 < len__21607__auto___433)){
args__21610__auto__.push((arguments[i__21608__auto___434]));

var G__435 = (i__21608__auto___434 + (1));
i__21608__auto___434 = G__435;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.ratom$macros.reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.ratom$macros.reaction.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.ratom","make-reaction","reagent.ratom/make-reaction",(272608527),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});

reagent.ratom$macros.reaction.cljs$lang$maxFixedArity = (2);

reagent.ratom$macros.reaction.cljs$lang$applyTo = (function (seq429){
var G__430 = cljs.core.first.call(null,seq429);
var seq429__$1 = cljs.core.next.call(null,seq429);
var G__431 = cljs.core.first.call(null,seq429__$1);
var seq429__$2 = cljs.core.next.call(null,seq429__$1);
return reagent.ratom$macros.reaction.cljs$core$IFn$_invoke$arity$variadic(G__430,G__431,seq429__$2);
});

return null;
})()
;
reagent.ratom$macros.reaction.cljs$lang$macro = true;

var ret__21633__auto___439 = (function (){
/**
 * Runs body immediately, and runs again whenever atoms deferenced in the body change. Body should side effect.
 */
reagent.ratom$macros.run_BANG_ = (function reagent$ratom$macros$run_BANG_(var_args){
var args__21610__auto__ = [];
var len__21607__auto___440 = arguments.length;
var i__21608__auto___441 = (0);
while(true){
if((i__21608__auto___441 < len__21607__auto___440)){
args__21610__auto__.push((arguments[i__21608__auto___441]));

var G__442 = (i__21608__auto___441 + (1));
i__21608__auto___441 = G__442;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.ratom$macros.run_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.ratom$macros.run_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"co__43__auto__","co__43__auto__",(157964759),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.ratom","make-reaction","reagent.ratom/make-reaction",(272608527),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437))),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"co__43__auto__","co__43__auto__",(157964759),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"co__43__auto__","co__43__auto__",(157964759),null))));
});

reagent.ratom$macros.run_BANG_.cljs$lang$maxFixedArity = (2);

reagent.ratom$macros.run_BANG_.cljs$lang$applyTo = (function (seq436){
var G__437 = cljs.core.first.call(null,seq436);
var seq436__$1 = cljs.core.next.call(null,seq436);
var G__438 = cljs.core.first.call(null,seq436__$1);
var seq436__$2 = cljs.core.next.call(null,seq436__$1);
return reagent.ratom$macros.run_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__437,G__438,seq436__$2);
});

return null;
})()
;
reagent.ratom$macros.run_BANG_.cljs$lang$macro = true;

var ret__21633__auto___450 = (function (){
reagent.ratom$macros.with_let = (function reagent$ratom$macros$with_let(var_args){
var args__21610__auto__ = [];
var len__21607__auto___451 = arguments.length;
var i__21608__auto___452 = (0);
while(true){
if((i__21608__auto___452 < len__21607__auto___451)){
args__21610__auto__.push((arguments[i__21608__auto___452]));

var G__453 = (i__21608__auto___452 + (1));
i__21608__auto___452 = G__453;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((3) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((3)),(0),null)):null);
return reagent.ratom$macros.with_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21611__auto__);
});

reagent.ratom$macros.with_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw (new Error("Assert failed: (vector? bindings)"));
}

var v = cljs.core.gensym.call(null,"with-let");
var k = cljs.core.keyword.call(null,v);
var init = cljs.core.gensym.call(null,"init");
var bs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",(-341242858),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",(-1012804190),null)),(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()))], null),cljs.core.map_indexed.call(null,((function (v,k,init){
return (function (i,x){
if(cljs.core.even_QMARK_.call(null,i)){
return x;
} else {
var j = cljs.core.quot.call(null,i,(2));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__21332__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null)),(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = j;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null)),(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = j;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
}
});})(v,k,init))
,bindings));
var vec__447 = (function (){var fin = cljs.core.last.call(null,body);
if((cljs.core.list_QMARK_.call(null,fin)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null),cljs.core.first.call(null,fin)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast.call(null,body),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.rest.call(null,fin)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body,null], null);
}
})();
var forms = cljs.core.nth.call(null,vec__447,(0),null);
var destroy = cljs.core.nth.call(null,vec__447,(1),null);
var add_destroy = (cljs.core.truth_(destroy)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"destroy__44__auto__","destroy__44__auto__",(-1799511224),null)),(function (){var x__21332__auto__ = destroy;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.ratom","reactive?","reagent.ratom/reactive?",(-358553475),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-destroy",".-destroy",(1564507507),null)),(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-destroy",".-destroy",(1564507507),null)),(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"destroy__44__auto__","destroy__44__auto__",(-1799511224),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"destroy__44__auto__","destroy__44__auto__",(-1799511224),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())):null);
var asserting = ((cljs.core._STAR_assert_STAR_)?true:false);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.ratom","with-let-values","reagent.ratom/with-let-values",(-575838306),null)),(function (){var x__21332__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__21332__auto__ = asserting;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-some","cljs.core/when-some",(1033431610),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__45__auto__","c__45__auto__",(-196793220),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.ratom","*ratom-context*","reagent.ratom/*ratom-context*",(13467415),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-generation",".-generation",(-761706147),null)),(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-ratomGeneration",".-ratomGeneration",(201782368),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__45__auto__","c__45__auto__",(-196793220),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","error","reagent.debug/error",(-1186466282),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Warning: The same with-let is being used more "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"than once in the same reactive context.")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",(250714521),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-generation",".-generation",(-761706147),null)),(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-ratomGeneration",".-ratomGeneration",(201782368),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__45__auto__","c__45__auto__",(-196793220),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = bs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__46__auto__","res__46__auto__",(-1966666840),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = add_destroy;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__46__auto__","res__46__auto__",(-1966666840),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});

reagent.ratom$macros.with_let.cljs$lang$maxFixedArity = (3);

reagent.ratom$macros.with_let.cljs$lang$applyTo = (function (seq443){
var G__444 = cljs.core.first.call(null,seq443);
var seq443__$1 = cljs.core.next.call(null,seq443);
var G__445 = cljs.core.first.call(null,seq443__$1);
var seq443__$2 = cljs.core.next.call(null,seq443__$1);
var G__446 = cljs.core.first.call(null,seq443__$2);
var seq443__$3 = cljs.core.next.call(null,seq443__$2);
return reagent.ratom$macros.with_let.cljs$core$IFn$_invoke$arity$variadic(G__444,G__445,G__446,seq443__$3);
});

return null;
})()
;
reagent.ratom$macros.with_let.cljs$lang$macro = true;

