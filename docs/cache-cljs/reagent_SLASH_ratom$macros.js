goog.provide("reagent.ratom$macros");
var ret__21633__auto___119 = (function (){
reagent.ratom$macros.reaction = (function reagent$ratom$macros$reaction(var_args){
var args__21610__auto__ = [];
var len__21607__auto___120 = arguments.length;
var i__21608__auto___121 = (0);
while(true){
if((i__21608__auto___121 < len__21607__auto___120)){
args__21610__auto__.push((arguments[i__21608__auto___121]));

var G__122 = (i__21608__auto___121 + (1));
i__21608__auto___121 = G__122;
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

reagent.ratom$macros.reaction.cljs$lang$applyTo = (function (seq116){
var G__117 = cljs.core.first.call(null,seq116);
var seq116__$1 = cljs.core.next.call(null,seq116);
var G__118 = cljs.core.first.call(null,seq116__$1);
var seq116__$2 = cljs.core.next.call(null,seq116__$1);
return reagent.ratom$macros.reaction.cljs$core$IFn$_invoke$arity$variadic(G__117,G__118,seq116__$2);
});

return null;
})()
;
reagent.ratom$macros.reaction.cljs$lang$macro = true;

var ret__21633__auto___126 = (function (){
/**
 * Runs body immediately, and runs again whenever atoms deferenced in the body change. Body should side effect.
 */
reagent.ratom$macros.run_BANG_ = (function reagent$ratom$macros$run_BANG_(var_args){
var args__21610__auto__ = [];
var len__21607__auto___127 = arguments.length;
var i__21608__auto___128 = (0);
while(true){
if((i__21608__auto___128 < len__21607__auto___127)){
args__21610__auto__.push((arguments[i__21608__auto___128]));

var G__129 = (i__21608__auto___128 + (1));
i__21608__auto___128 = G__129;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.ratom$macros.run_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.ratom$macros.run_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"co__4__auto__","co__4__auto__",(-557447875),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.ratom","make-reaction","reagent.ratom/make-reaction",(272608527),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),body));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437))),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"co__4__auto__","co__4__auto__",(-557447875),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"co__4__auto__","co__4__auto__",(-557447875),null))));
});

reagent.ratom$macros.run_BANG_.cljs$lang$maxFixedArity = (2);

reagent.ratom$macros.run_BANG_.cljs$lang$applyTo = (function (seq123){
var G__124 = cljs.core.first.call(null,seq123);
var seq123__$1 = cljs.core.next.call(null,seq123);
var G__125 = cljs.core.first.call(null,seq123__$1);
var seq123__$2 = cljs.core.next.call(null,seq123__$1);
return reagent.ratom$macros.run_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__124,G__125,seq123__$2);
});

return null;
})()
;
reagent.ratom$macros.run_BANG_.cljs$lang$macro = true;

var ret__21633__auto___137 = (function (){
reagent.ratom$macros.with_let = (function reagent$ratom$macros$with_let(var_args){
var args__21610__auto__ = [];
var len__21607__auto___138 = arguments.length;
var i__21608__auto___139 = (0);
while(true){
if((i__21608__auto___139 < len__21607__auto___138)){
args__21610__auto__.push((arguments[i__21608__auto___139]));

var G__140 = (i__21608__auto___139 + (1));
i__21608__auto___139 = G__140;
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("with-let bindings must be a vector, not "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,bindings))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(vector? bindings)")].join('')));
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
var vec__134 = (function (){var fin = cljs.core.last.call(null,body);
if((cljs.core.list_QMARK_.call(null,fin)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"finally","finally",(-1065347064),null),cljs.core.first.call(null,fin)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast.call(null,body),cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.rest.call(null,fin)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body,null], null);
}
})();
var forms = cljs.core.nth.call(null,vec__134,(0),null);
var destroy = cljs.core.nth.call(null,vec__134,(1),null);
var add_destroy = (cljs.core.truth_(destroy)?cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"destroy__5__auto__","destroy__5__auto__",(1453534789),null)),(function (){var x__21332__auto__ = destroy;
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"destroy__5__auto__","destroy__5__auto__",(1453534789),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"destroy__5__auto__","destroy__5__auto__",(1453534789),null))));
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
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-some","cljs.core/when-some",(1033431610),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__6__auto__","c__6__auto__",(-1394462158),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.ratom","*ratom-context*","reagent.ratom/*ratom-context*",(13467415),null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-generation",".-generation",(-761706147),null)),(function (){var x__21332__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-ratomGeneration",".-ratomGeneration",(201782368),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__6__auto__","c__6__auto__",(-1394462158),null))));
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
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-ratomGeneration",".-ratomGeneration",(201782368),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__6__auto__","c__6__auto__",(-1394462158),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = bs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__7__auto__","res__7__auto__",(1382659853),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = add_destroy;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__7__auto__","res__7__auto__",(1382659853),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});

reagent.ratom$macros.with_let.cljs$lang$maxFixedArity = (3);

reagent.ratom$macros.with_let.cljs$lang$applyTo = (function (seq130){
var G__131 = cljs.core.first.call(null,seq130);
var seq130__$1 = cljs.core.next.call(null,seq130);
var G__132 = cljs.core.first.call(null,seq130__$1);
var seq130__$2 = cljs.core.next.call(null,seq130__$1);
var G__133 = cljs.core.first.call(null,seq130__$2);
var seq130__$3 = cljs.core.next.call(null,seq130__$2);
return reagent.ratom$macros.with_let.cljs$core$IFn$_invoke$arity$variadic(G__131,G__132,G__133,seq130__$3);
});

return null;
})()
;
reagent.ratom$macros.with_let.cljs$lang$macro = true;

