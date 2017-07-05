goog.provide("cljs.analyzer.api");
/**
 * Creates an empty compilation state Atom<Map>.
 */
(function (){
cljs.analyzer.api.empty_state = (function cljs$analyzer$api$empty_state(){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.empty_state;},new cljs.core.Symbol("cljs.analyzer.api","empty-state","cljs.analyzer.api/empty-state",(1387822432),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"empty-state","empty-state",(1008034606),null),"cljs/analyzer/api.cljc",(18),(1),(20),(20),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Creates an empty compilation state Atom<Map>.",(cljs.core.truth_(cljs.analyzer.api.empty_state)?cljs.analyzer.api.empty_state.cljs$lang$test:null)])));})()
;
var ret__21633__auto___128 = /**
 * Run the body with the given compilation state Atom<Map>.
 */
(function (){
cljs.analyzer.api.with_state = (function cljs$analyzer$api$with_state(_AMPERSAND_form,_AMPERSAND_env,state,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.env","with-compiler-env","cljs.env/with-compiler-env",(-1219561832),null)),(function (){var x__21332__auto__ = state;
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.with_state;},new cljs.core.Symbol("cljs.analyzer.api","with-state","cljs.analyzer.api/with-state",(-1025246638),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"with-state","with-state",(-670637024),null),"cljs/analyzer/api.cljc",(21),(1),(25),true,(25),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Run the body with the given compilation state Atom<Map>.",(cljs.core.truth_(cljs.analyzer.api.with_state)?cljs.analyzer.api.with_state.cljs$lang$test:null)])));})()
;
cljs.analyzer.api.with_state.cljs$lang$macro = true;

/**
 * Creates an empty analysis environment.
 */
(function (){
cljs.analyzer.api.empty_env = (function cljs$analyzer$api$empty_env(){
return cljs.analyzer.empty_env();
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.empty_env;},new cljs.core.Symbol("cljs.analyzer.api","empty-env","cljs.analyzer.api/empty-env",(1094838888),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"empty-env","empty-env",(1793510582),null),"cljs/analyzer/api.cljc",(16),(1),(31),(31),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Creates an empty analysis environment.",(cljs.core.truth_(cljs.analyzer.api.empty_env)?cljs.analyzer.api.empty_env.cljs$lang$test:null)])));})()
;
var ret__21633__auto___132 = (function (){
/**
 * Disable analyzer warnings for any analysis executed in body.
 */
(function (){
cljs.analyzer.api.no_warn = (function cljs$analyzer$api$no_warn(var_args){
var args__21610__auto__ = [];
var len__21607__auto___133 = arguments.length;
var i__21608__auto___134 = (0);
while(true){
if((i__21608__auto___134 < len__21607__auto___133)){
args__21610__auto__.push((arguments[i__21608__auto___134]));

var G__135 = (i__21608__auto___134 + (1));
i__21608__auto___134 = G__135;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.no_warn;},new cljs.core.Symbol("cljs.analyzer.api","no-warn","cljs.analyzer.api/no-warn",(302265735),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"no-warn","no-warn",(952060021),null),"cljs/analyzer/api.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(36),true,(36),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Disable analyzer warnings for any analysis executed in body.",(cljs.core.truth_(cljs.analyzer.api.no_warn)?cljs.analyzer.api.no_warn.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
var no_warnings = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__21332__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-warnings*","cljs.analyzer/*cljs-warnings*",(-289667730),null)),(function (){var x__21332__auto__ = no_warnings;
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
});

cljs.analyzer.api.no_warn.cljs$lang$maxFixedArity = (2);

cljs.analyzer.api.no_warn.cljs$lang$applyTo = (function (seq129){
var G__130 = cljs.core.first(seq129);
var seq129__$1 = cljs.core.next(seq129);
var G__131 = cljs.core.first(seq129__$1);
var seq129__$2 = cljs.core.next(seq129__$1);
return cljs.analyzer.api.no_warn.cljs$core$IFn$_invoke$arity$variadic(G__130,G__131,seq129__$2);
});

return new cljs.core.Var(function(){return cljs.analyzer.api.no_warn;},new cljs.core.Symbol("cljs.analyzer.api","no-warn","cljs.analyzer.api/no-warn",(302265735),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"no-warn","no-warn",(952060021),null),"cljs/analyzer/api.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(36),true,(36),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Disable analyzer warnings for any analysis executed in body.",(cljs.core.truth_(cljs.analyzer.api.no_warn)?cljs.analyzer.api.no_warn.cljs$lang$test:null)]));
})()
;
cljs.analyzer.api.no_warn.cljs$lang$macro = true;

/**
 * Test if the given warning-type is enabled.
 */
(function (){
cljs.analyzer.api.warning_enabled_QMARK_ = (function cljs$analyzer$api$warning_enabled_QMARK_(warning_type){
return (cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer._STAR_cljs_warnings_STAR_.cljs$core$IFn$_invoke$arity$1(warning_type) : cljs.analyzer._STAR_cljs_warnings_STAR_(warning_type));
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.warning_enabled_QMARK_;},new cljs.core.Symbol("cljs.analyzer.api","warning-enabled?","cljs.analyzer.api/warning-enabled?",(499636922),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"warning-enabled?","warning-enabled?",(-412949272),null),"cljs/analyzer/api.cljc",(23),(1),(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"warning-type","warning-type",(-943332174),null)], null)),"Test if the given warning-type is enabled.",(cljs.core.truth_(cljs.analyzer.api.warning_enabled_QMARK_)?cljs.analyzer.api.warning_enabled_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * The default warning handler.
 * 
 * Outputs the warning messages to *err*.
 */
(function (){
cljs.analyzer.api.default_warning_handler = (function cljs$analyzer$api$default_warning_handler(warning_type,env,extra){
return cljs.analyzer.default_warning_handler(warning_type,env,extra);
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.default_warning_handler;},new cljs.core.Symbol("cljs.analyzer.api","default-warning-handler","cljs.analyzer.api/default-warning-handler",(-2026862748),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"default-warning-handler","default-warning-handler",(-1649711786),null),"cljs/analyzer/api.cljc",(30),(1),(48),(48),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"warning-type","warning-type",(-943332174),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"extra","extra",(-1041866702),null)], null)),"The default warning handler.\n\n   Outputs the warning messages to *err*.",(cljs.core.truth_(cljs.analyzer.api.default_warning_handler)?cljs.analyzer.api.default_warning_handler.cljs$lang$test:null)])));})()
;
/**
 * Return the compiler options from compiler state.
 */
(function (){
cljs.analyzer.api.get_options = (function cljs$analyzer$api$get_options(var_args){
var G__137 = arguments.length;
switch (G__137) {
case (0):
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.get_options;},new cljs.core.Symbol("cljs.analyzer.api","get-options","cljs.analyzer.api/get-options",(1267718390),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"get-options","get-options",(652557604),null),"cljs/analyzer/api.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(55),(55),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),"Return the compiler options from compiler state.",(cljs.core.truth_(cljs.analyzer.api.get_options)?cljs.analyzer.api.get_options.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword(null,"options","options",(99638489)));
});

cljs.analyzer.api.get_options.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.analyzer.api.get_options;},new cljs.core.Symbol("cljs.analyzer.api","get-options","cljs.analyzer.api/get-options",(1267718390),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"get-options","get-options",(652557604),null),"cljs/analyzer/api.cljc",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(55),(55),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),"Return the compiler options from compiler state.",(cljs.core.truth_(cljs.analyzer.api.get_options)?cljs.analyzer.api.get_options.cljs$lang$test:null)]));
/**
 * Return the currently computed Google Closure js dependency index from the
 *   compiler state.
 */
(function (){
cljs.analyzer.api.get_js_index = (function cljs$analyzer$api$get_js_index(var_args){
var G__140 = arguments.length;
switch (G__140) {
case (0):
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.get_js_index;},new cljs.core.Symbol("cljs.analyzer.api","get-js-index","cljs.analyzer.api/get-js-index",(1499174317),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"get-js-index","get-js-index",(-1078528001),null),"cljs/analyzer/api.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(61),(61),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),"Return the currently computed Google Closure js dependency index from the\n  compiler state.",(cljs.core.truth_(cljs.analyzer.api.get_js_index)?cljs.analyzer.api.get_js_index.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.get_js_index.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",(-1887042131)));
});

cljs.analyzer.api.get_js_index.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.analyzer.api.get_js_index;},new cljs.core.Symbol("cljs.analyzer.api","get-js-index","cljs.analyzer.api/get-js-index",(1499174317),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"get-js-index","get-js-index",(-1078528001),null),"cljs/analyzer/api.cljc",(19),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(61),(61),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),"Return the currently computed Google Closure js dependency index from the\n  compiler state.",(cljs.core.truth_(cljs.analyzer.api.get_js_index)?cljs.analyzer.api.get_js_index.cljs$lang$test:null)]));
/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
(function (){
cljs.analyzer.api.resolve = (function cljs$analyzer$api$resolve(env,sym){
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
}catch (e142){var e = e142;
return cljs.analyzer.resolve_macro_var(env,sym);
}}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.resolve;},new cljs.core.Symbol("cljs.analyzer.api","resolve","cljs.analyzer.api/resolve",(498213843),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"resolve","resolve",(56086045),null),"cljs/analyzer/api.cljc",(14),(1),(144),(144),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),"Given an analysis environment resolve a var. Analogous to\n   clojure.core/resolve",(cljs.core.truth_(cljs.analyzer.api.resolve)?cljs.analyzer.api.resolve.cljs$lang$test:null)])));})()
;
/**
 * Return all namespaces. Analagous to clojure.core/all-ns but
 *   returns symbols identifying namespaces not Namespace instances.
 */
(function (){
cljs.analyzer.api.all_ns = (function cljs$analyzer$api$all_ns(var_args){
var G__144 = arguments.length;
switch (G__144) {
case (0):
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.all_ns;},new cljs.core.Symbol("cljs.analyzer.api","all-ns","cljs.analyzer.api/all-ns",(-1193821270),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"all-ns","all-ns",(1571857784),null),"cljs/analyzer/api.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(155),(155),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),"Return all namespaces. Analagous to clojure.core/all-ns but\n  returns symbols identifying namespaces not Namespace instances.",(cljs.core.truth_(cljs.analyzer.api.all_ns)?cljs.analyzer.api.all_ns.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_);
});

cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927))));
});

cljs.analyzer.api.all_ns.cljs$lang$maxFixedArity = (1);

new cljs.core.Var(function(){return cljs.analyzer.api.all_ns;},new cljs.core.Symbol("cljs.analyzer.api","all-ns","cljs.analyzer.api/all-ns",(-1193821270),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"all-ns","all-ns",(1571857784),null),"cljs/analyzer/api.cljc",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(155),(155),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null)], null)),"Return all namespaces. Analagous to clojure.core/all-ns but\n  returns symbols identifying namespaces not Namespace instances.",(cljs.core.truth_(cljs.analyzer.api.all_ns)?cljs.analyzer.api.all_ns.cljs$lang$test:null)]));
/**
 * Given a namespace return the corresponding namespace analysis map. Analagous
 *   to clojure.core/find-ns.
 */
(function (){
cljs.analyzer.api.find_ns = (function cljs$analyzer$api$find_ns(var_args){
var G__147 = arguments.length;
switch (G__147) {
case (1):
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.find_ns;},new cljs.core.Symbol("cljs.analyzer.api","find-ns","cljs.analyzer.api/find-ns",(-794316622),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"find-ns","find-ns",(-884829568),null),"cljs/analyzer/api.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(163),(163),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),"Given a namespace return the corresponding namespace analysis map. Analagous\n  to clojure.core/find-ns.",(cljs.core.truth_(cljs.analyzer.api.find_ns)?cljs.analyzer.api.find_ns.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1 = (function (sym){
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,sym);
});

cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927)),sym], null));
});

cljs.analyzer.api.find_ns.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.analyzer.api.find_ns;},new cljs.core.Symbol("cljs.analyzer.api","find-ns","cljs.analyzer.api/find-ns",(-794316622),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"find-ns","find-ns",(-884829568),null),"cljs/analyzer/api.cljc",(14),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(163),(163),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),"Given a namespace return the corresponding namespace analysis map. Analagous\n  to clojure.core/find-ns.",(cljs.core.truth_(cljs.analyzer.api.find_ns)?cljs.analyzer.api.find_ns.cljs$lang$test:null)]));
/**
 * Given a namespace return all the var analysis maps. Analagous to
 *   clojure.core/ns-interns but returns var analysis maps not vars.
 */
(function (){
cljs.analyzer.api.ns_interns = (function cljs$analyzer$api$ns_interns(var_args){
var G__150 = arguments.length;
switch (G__150) {
case (1):
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.ns_interns;},new cljs.core.Symbol("cljs.analyzer.api","ns-interns","cljs.analyzer.api/ns-interns",(848393034),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"ns-interns","ns-interns",(535532824),null),"cljs/analyzer/api.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(172),(172),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),"Given a namespace return all the var analysis maps. Analagous to\n  clojure.core/ns-interns but returns var analysis maps not vars.",(cljs.core.truth_(cljs.analyzer.api.ns_interns)?cljs.analyzer.api.ns_interns.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927)),ns,new cljs.core.Keyword(null,"macros","macros",(811339431))], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927)),ns,new cljs.core.Keyword(null,"defs","defs",(1398449717))], null))], 0));
});

cljs.analyzer.api.ns_interns.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.analyzer.api.ns_interns;},new cljs.core.Symbol("cljs.analyzer.api","ns-interns","cljs.analyzer.api/ns-interns",(848393034),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"ns-interns","ns-interns",(535532824),null),"cljs/analyzer/api.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(172),(172),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),"Given a namespace return all the var analysis maps. Analagous to\n  clojure.core/ns-interns but returns var analysis maps not vars.",(cljs.core.truth_(cljs.analyzer.api.ns_interns)?cljs.analyzer.api.ns_interns.cljs$lang$test:null)]));
/**
 * Given a namespace return all the public var analysis maps. Analagous to
 *   clojure.core/ns-publics but returns var analysis maps not vars.
 */
(function (){
cljs.analyzer.api.ns_publics = (function cljs$analyzer$api$ns_publics(var_args){
var G__153 = arguments.length;
switch (G__153) {
case (1):
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.ns_publics;},new cljs.core.Symbol("cljs.analyzer.api","ns-publics","cljs.analyzer.api/ns-publics",(792950390),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"ns-publics","ns-publics",(903350436),null),"cljs/analyzer/api.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(183),(183),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),"Given a namespace return all the public var analysis maps. Analagous to\n  clojure.core/ns-publics but returns var analysis maps not vars.",(cljs.core.truth_(cljs.analyzer.api.ns_publics)?cljs.analyzer.api.ns_publics.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.ns_publics.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__154){
var vec__155 = p__154;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__155,(1),null);
return new cljs.core.Keyword(null,"private","private",(-558947994)).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927)),ns,new cljs.core.Keyword(null,"macros","macros",(811339431))], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927)),ns,new cljs.core.Keyword(null,"defs","defs",(1398449717))], null))], 0))));
});

cljs.analyzer.api.ns_publics.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.analyzer.api.ns_publics;},new cljs.core.Symbol("cljs.analyzer.api","ns-publics","cljs.analyzer.api/ns-publics",(792950390),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"ns-publics","ns-publics",(903350436),null),"cljs/analyzer/api.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(183),(183),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),"Given a namespace return all the public var analysis maps. Analagous to\n  clojure.core/ns-publics but returns var analysis maps not vars.",(cljs.core.truth_(cljs.analyzer.api.ns_publics)?cljs.analyzer.api.ns_publics.cljs$lang$test:null)]));
/**
 * Given a namespace and a symbol return the corresponding var analysis map.
 *   Analagous to clojure.core/ns-resolve but returns var analysis map not Var.
 */
(function (){
cljs.analyzer.api.ns_resolve = (function cljs$analyzer$api$ns_resolve(var_args){
var G__160 = arguments.length;
switch (G__160) {
case (2):
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.ns_resolve;},new cljs.core.Symbol("cljs.analyzer.api","ns-resolve","cljs.analyzer.api/ns-resolve",(209200350),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"ns-resolve","ns-resolve",(1788675756),null),"cljs/analyzer/api.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(196),(196),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),"Given a namespace and a symbol return the corresponding var analysis map.\n  Analagous to clojure.core/ns-resolve but returns var analysis map not Var.",(cljs.core.truth_(cljs.analyzer.api.ns_resolve)?cljs.analyzer.api.ns_resolve.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2 = (function (ns,sym){
return cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3(cljs.env._STAR_compiler_STAR_,ns,sym);
});

cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$3 = (function (state,ns,sym){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927)),ns,new cljs.core.Keyword(null,"defs","defs",(1398449717)),sym], null));
});

cljs.analyzer.api.ns_resolve.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.analyzer.api.ns_resolve;},new cljs.core.Symbol("cljs.analyzer.api","ns-resolve","cljs.analyzer.api/ns-resolve",(209200350),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"ns-resolve","ns-resolve",(1788675756),null),"cljs/analyzer/api.cljc",(17),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(196),(196),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),"Given a namespace and a symbol return the corresponding var analysis map.\n  Analagous to clojure.core/ns-resolve but returns var analysis map not Var.",(cljs.core.truth_(cljs.analyzer.api.ns_resolve)?cljs.analyzer.api.ns_resolve.cljs$lang$test:null)]));
/**
 * Removes the namespace named by the symbol.
 */
(function (){
cljs.analyzer.api.remove_ns = (function cljs$analyzer$api$remove_ns(var_args){
var G__163 = arguments.length;
switch (G__163) {
case (1):
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.remove_ns;},new cljs.core.Symbol("cljs.analyzer.api","remove-ns","cljs.analyzer.api/remove-ns",(-1484953611),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"remove-ns","remove-ns",(-1915058781),null),"cljs/analyzer/api.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(205),(205),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),"Removes the namespace named by the symbol.",(cljs.core.truth_(cljs.analyzer.api.remove_ns)?cljs.analyzer.api.remove_ns.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,ns);
});

cljs.analyzer.api.remove_ns.cljs$core$IFn$_invoke$arity$2 = (function (state,ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927))], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns], 0));
});

cljs.analyzer.api.remove_ns.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.analyzer.api.remove_ns;},new cljs.core.Symbol("cljs.analyzer.api","remove-ns","cljs.analyzer.api/remove-ns",(-1484953611),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"remove-ns","remove-ns",(-1915058781),null),"cljs/analyzer/api.cljc",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(205),(205),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null)], null)),"Removes the namespace named by the symbol.",(cljs.core.truth_(cljs.analyzer.api.remove_ns)?cljs.analyzer.api.remove_ns.cljs$lang$test:null)]));
var ret__21633__auto___169 = (function (){
/**
 * Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation
 *   environment atom and runs body.
 */
(function (){
cljs.analyzer.api.in_cljs_user = (function cljs$analyzer$api$in_cljs_user(var_args){
var args__21610__auto__ = [];
var len__21607__auto___170 = arguments.length;
var i__21608__auto___171 = (0);
while(true){
if((i__21608__auto___171 < len__21607__auto___170)){
args__21610__auto__.push((arguments[i__21608__auto___171]));

var G__172 = (i__21608__auto___171 + (1));
i__21608__auto___171 = G__172;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((3) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((3)),(0),null)):null);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.analyzer.api.in_cljs_user;},new cljs.core.Symbol("cljs.analyzer.api","in-cljs-user","cljs.analyzer.api/in-cljs-user",(-754905481),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"in-cljs-user","in-cljs-user",(904915845),null),"cljs/analyzer/api.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(213),true,(213),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation\n  environment atom and runs body.",(cljs.core.truth_(cljs.analyzer.api.in_cljs_user)?cljs.analyzer.api.in_cljs_user.cljs$lang$test:null)])));})()
;

cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null)),(function (){var x__21332__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.analyzer","*cljs-ns*","cljs.analyzer/*cljs-ns*",(1242529789),null)),(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",(1377916282),null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs.user","cljs.user",(877795071),null))));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__21332__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.env","with-compiler-env","cljs.env/with-compiler-env",(-1219561832),null)),(function (){var x__21332__auto__ = env;
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__21332__auto__);
})()], 0)));
});

cljs.analyzer.api.in_cljs_user.cljs$lang$maxFixedArity = (3);

cljs.analyzer.api.in_cljs_user.cljs$lang$applyTo = (function (seq165){
var G__166 = cljs.core.first(seq165);
var seq165__$1 = cljs.core.next(seq165);
var G__167 = cljs.core.first(seq165__$1);
var seq165__$2 = cljs.core.next(seq165__$1);
var G__168 = cljs.core.first(seq165__$2);
var seq165__$3 = cljs.core.next(seq165__$2);
return cljs.analyzer.api.in_cljs_user.cljs$core$IFn$_invoke$arity$variadic(G__166,G__167,G__168,seq165__$3);
});

return new cljs.core.Var(function(){return cljs.analyzer.api.in_cljs_user;},new cljs.core.Symbol("cljs.analyzer.api","in-cljs-user","cljs.analyzer.api/in-cljs-user",(-754905481),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.analyzer.api","cljs.analyzer.api",(1016020812),null),new cljs.core.Symbol(null,"in-cljs-user","in-cljs-user",(904915845),null),"cljs/analyzer/api.cljc",(23),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"body","body",(-408674142),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(213),true,(213),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&form","&form",(1482799337),null),new cljs.core.Symbol(null,"&env","&env",(-919163083),null),new cljs.core.Symbol(null,"env","env",(-175281708),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"body","body",(-408674142),null)], null)),"Binds cljs.analyzer/*cljs-ns* to 'cljs.user and uses the given compilation\n  environment atom and runs body.",(cljs.core.truth_(cljs.analyzer.api.in_cljs_user)?cljs.analyzer.api.in_cljs_user.cljs$lang$test:null)]));
})()
;
cljs.analyzer.api.in_cljs_user.cljs$lang$macro = true;

