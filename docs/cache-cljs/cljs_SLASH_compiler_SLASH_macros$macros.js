goog.provide("cljs.compiler.macros$macros");
var ret__21633__auto___116 = (function (){
(function (){
cljs.compiler.macros$macros.emit_wrap = (function cljs$compiler$macros$macros$emit_wrap(var_args){
var args__21610__auto__ = [];
var len__21607__auto___117 = arguments.length;
var i__21608__auto___118 = (0);
while(true){
if((i__21608__auto___118 < len__21607__auto___117)){
args__21610__auto__.push((arguments[i__21608__auto___118]));

var G__119 = (i__21608__auto___118 + (1));
i__21608__auto___118 = G__119;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((3) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((3)),(0),null)):null);
return cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.compiler.macros$macros.emit_wrap;},new cljs.core.Symbol("cljs.compiler.macros$macros","emit-wrap","cljs.compiler.macros$macros/emit-wrap",(-487627327),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.compiler.macros$macros","cljs.compiler.macros$macros",(927678429),null),new cljs.core.Symbol(null,"emit-wrap","emit-wrap",(1840886782),null),"cljs/compiler/macros.clj",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(12),true,(12),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.compiler.macros$macros.emit_wrap)?cljs.compiler.macros$macros.emit_wrap.cljs$lang$test:null)])));})()
;

cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__7__auto__","env__7__auto__",(-69262235),null)),(function (){var x__21332__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"return","return",(-1891502105))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"context","context",(-830191113))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__7__auto__","env__7__auto__",(-69262235),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.compiler","emits","cljs.compiler/emits",(-1296164997),null)),cljs.core._conj(cljs.core.List.EMPTY,"return ")));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})(),body,(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null)),(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"expr","expr",(745722291))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"context","context",(-830191113))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"env__7__auto__","env__7__auto__",(-69262235),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.compiler","emitln","cljs.compiler/emitln",(-1309380807),null)),cljs.core._conj(cljs.core.List.EMPTY,";")));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})()], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})()], 0)));
});

cljs.compiler.macros$macros.emit_wrap.cljs$lang$maxFixedArity = (3);

cljs.compiler.macros$macros.emit_wrap.cljs$lang$applyTo = (function (seq112){
var G__113 = cljs.core.first(seq112);
var seq112__$1 = cljs.core.next(seq112);
var G__114 = cljs.core.first(seq112__$1);
var seq112__$2 = cljs.core.next(seq112__$1);
var G__115 = cljs.core.first(seq112__$2);
var seq112__$3 = cljs.core.next(seq112__$2);
return cljs.compiler.macros$macros.emit_wrap.cljs$core$IFn$_invoke$arity$variadic(G__113,G__114,G__115,seq112__$3);
});

return new cljs.core.Var(function(){return cljs.compiler.macros$macros.emit_wrap;},new cljs.core.Symbol("cljs.compiler.macros$macros","emit-wrap","cljs.compiler.macros$macros/emit-wrap",(-487627327),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.compiler.macros$macros","cljs.compiler.macros$macros",(927678429),null),new cljs.core.Symbol(null,"emit-wrap","emit-wrap",(1840886782),null),"cljs/compiler/macros.clj",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(12),true,(12),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),null,(cljs.core.truth_(cljs.compiler.macros$macros.emit_wrap)?cljs.compiler.macros$macros.emit_wrap.cljs$lang$test:null)]));
})()
;
cljs.compiler.macros$macros.emit_wrap.cljs$lang$macro = true;

