goog.provide("reagent.debug$macros");
var ret__21633__auto___336 = (function (){
/**
 * Print with console.log, if it exists.
 */
reagent.debug$macros.log = (function reagent$debug$macros$log(var_args){
var args__21610__auto__ = [];
var len__21607__auto___337 = arguments.length;
var i__21608__auto___338 = (0);
while(true){
if((i__21608__auto___338 < len__21607__auto___337)){
args__21610__auto__.push((arguments[i__21608__auto___338]));

var G__339 = (i__21608__auto___338 + (1));
i__21608__auto___338 = G__339;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",(-1792886083),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".log",".log",(565247729),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",(-1426368245),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});

reagent.debug$macros.log.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.log.cljs$lang$applyTo = (function (seq333){
var G__334 = cljs.core.first.call(null,seq333);
var seq333__$1 = cljs.core.next.call(null,seq333);
var G__335 = cljs.core.first.call(null,seq333__$1);
var seq333__$2 = cljs.core.next.call(null,seq333__$1);
return reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic(G__334,G__335,seq333__$2);
});

return null;
})()
;
reagent.debug$macros.log.cljs$lang$macro = true;

var ret__21633__auto___343 = (function (){
/**
 * Print with console.warn.
 */
reagent.debug$macros.warn = (function reagent$debug$macros$warn(var_args){
var args__21610__auto__ = [];
var len__21607__auto___344 = arguments.length;
var i__21608__auto___345 = (0);
while(true){
if((i__21608__auto___345 < len__21607__auto___344)){
args__21610__auto__.push((arguments[i__21608__auto___345]));

var G__346 = (i__21608__auto___345 + (1));
i__21608__auto___345 = G__346;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",(-1792886083),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".warn",".warn",(-2099751158),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"reagent.debug.tracking","reagent.debug.tracking",(478501764),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"reagent.debug.track-console","reagent.debug.track-console",(-179485171),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",(-1426368245),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Warning: "),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
} else {
return null;
}
});

reagent.debug$macros.warn.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.warn.cljs$lang$applyTo = (function (seq340){
var G__341 = cljs.core.first.call(null,seq340);
var seq340__$1 = cljs.core.next.call(null,seq340);
var G__342 = cljs.core.first.call(null,seq340__$1);
var seq340__$2 = cljs.core.next.call(null,seq340__$1);
return reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic(G__341,G__342,seq340__$2);
});

return null;
})()
;
reagent.debug$macros.warn.cljs$lang$macro = true;

var ret__21633__auto___351 = (function (){
reagent.debug$macros.warn_unless = (function reagent$debug$macros$warn_unless(var_args){
var args__21610__auto__ = [];
var len__21607__auto___352 = arguments.length;
var i__21608__auto___353 = (0);
while(true){
if((i__21608__auto___353 < len__21607__auto___352)){
args__21610__auto__.push((arguments[i__21608__auto___353]));

var G__354 = (i__21608__auto___353 + (1));
i__21608__auto___353 = G__354;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((3) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((3)),(0),null)):null);
return reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21611__auto__);
});

reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,cond,forms){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__21332__auto__ = cond;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","warn","reagent.debug/warn",(-503321706),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
} else {
return null;
}
});

reagent.debug$macros.warn_unless.cljs$lang$maxFixedArity = (3);

reagent.debug$macros.warn_unless.cljs$lang$applyTo = (function (seq347){
var G__348 = cljs.core.first.call(null,seq347);
var seq347__$1 = cljs.core.next.call(null,seq347);
var G__349 = cljs.core.first.call(null,seq347__$1);
var seq347__$2 = cljs.core.next.call(null,seq347__$1);
var G__350 = cljs.core.first.call(null,seq347__$2);
var seq347__$3 = cljs.core.next.call(null,seq347__$2);
return reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic(G__348,G__349,G__350,seq347__$3);
});

return null;
})()
;
reagent.debug$macros.warn_unless.cljs$lang$macro = true;

var ret__21633__auto___358 = (function (){
/**
 * Print with console.error.
 */
reagent.debug$macros.error = (function reagent$debug$macros$error(var_args){
var args__21610__auto__ = [];
var len__21607__auto___359 = arguments.length;
var i__21608__auto___360 = (0);
while(true){
if((i__21608__auto___360 < len__21607__auto___359)){
args__21610__auto__.push((arguments[i__21608__auto___360]));

var G__361 = (i__21608__auto___360 + (1));
i__21608__auto___360 = G__361;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",(-1792886083),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".error",".error",(1756007195),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",(1181717262),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"reagent.debug.tracking","reagent.debug.tracking",(478501764),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"reagent.debug.track-console","reagent.debug.track-console",(-179485171),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console","js/console",(-1426368245),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
} else {
return null;
}
});

reagent.debug$macros.error.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.error.cljs$lang$applyTo = (function (seq355){
var G__356 = cljs.core.first.call(null,seq355);
var seq355__$1 = cljs.core.next.call(null,seq355);
var G__357 = cljs.core.first.call(null,seq355__$1);
var seq355__$2 = cljs.core.next.call(null,seq355__$1);
return reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic(G__356,G__357,seq355__$2);
});

return null;
})()
;
reagent.debug$macros.error.cljs$lang$macro = true;

var ret__21633__auto___365 = (function (){
/**
 * Print string with console.log
 */
reagent.debug$macros.println = (function reagent$debug$macros$println(var_args){
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

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",(-528007284),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});

reagent.debug$macros.println.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.println.cljs$lang$applyTo = (function (seq362){
var G__363 = cljs.core.first.call(null,seq362);
var seq362__$1 = cljs.core.next.call(null,seq362);
var G__364 = cljs.core.first.call(null,seq362__$1);
var seq362__$2 = cljs.core.next.call(null,seq362__$1);
return reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic(G__363,G__364,seq362__$2);
});

return null;
})()
;
reagent.debug$macros.println.cljs$lang$macro = true;

var ret__21633__auto___372 = (function (){
/**
 * Like standard prn, but prints using console.log (so that we get
 * nice clickable links to source in modern browsers).
 */
reagent.debug$macros.prn = (function reagent$debug$macros$prn(var_args){
var args__21610__auto__ = [];
var len__21607__auto___373 = arguments.length;
var i__21608__auto___374 = (0);
while(true){
if((i__21608__auto___374 < len__21607__auto___373)){
args__21610__auto__.push((arguments[i__21608__auto___374]));

var G__375 = (i__21608__auto___374 + (1));
i__21608__auto___374 = G__375;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",(-528007284),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});

reagent.debug$macros.prn.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.prn.cljs$lang$applyTo = (function (seq369){
var G__370 = cljs.core.first.call(null,seq369);
var seq369__$1 = cljs.core.next.call(null,seq369);
var G__371 = cljs.core.first.call(null,seq369__$1);
var seq369__$2 = cljs.core.next.call(null,seq369__$1);
return reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic(G__370,G__371,seq369__$2);
});

return null;
})()
;
reagent.debug$macros.prn.cljs$lang$macro = true;

var ret__21633__auto___376 = /**
 * Useful debugging macro that prints the source and value of x,
 * as well as package name and line number. Returns x.
 */
reagent.debug$macros.dbg = (function reagent$debug$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
var ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join('');
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40__auto__","x__40__auto__",(1107718951),null)),(function (){var x__21332__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","println","reagent.debug/println",(1987012298),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"dbg "),(function (){var x__21332__auto__ = ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,":"),(function (){var x__21332__auto__ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__21332__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40__auto__","x__40__auto__",(1107718951),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__40__auto__","x__40__auto__",(1107718951),null))));
});
reagent.debug$macros.dbg.cljs$lang$macro = true;

var ret__21633__auto___377 = /**
 * True if assertions are enabled.
 */
reagent.debug$macros.dev_QMARK_ = (function reagent$debug$macros$dev_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core._STAR_assert_STAR_){
return true;
} else {
return false;
}
});
reagent.debug$macros.dev_QMARK_.cljs$lang$macro = true;

var ret__21633__auto___381 = (function (){
reagent.debug$macros.time = (function reagent$debug$macros$time(var_args){
var args__21610__auto__ = [];
var len__21607__auto___382 = arguments.length;
var i__21608__auto___383 = (0);
while(true){
if((i__21608__auto___383 < len__21607__auto___382)){
args__21610__auto__.push((arguments[i__21608__auto___383]));

var G__384 = (i__21608__auto___383 + (1));
i__21608__auto___383 = G__384;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join('');
var label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form)))].join('');
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__41__auto__","label__41__auto__",(-1490065979),null)),(function (){var x__21332__auto__ = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__42__auto__","res__42__auto__",(1745170291),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console.time","js/console.time",(891683584),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__41__auto__","label__41__auto__",(-1490065979),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console.timeEnd","js/console.timeEnd",(274714029),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__41__auto__","label__41__auto__",(-1490065979),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__42__auto__","res__42__auto__",(1745170291),null))));
});

reagent.debug$macros.time.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.time.cljs$lang$applyTo = (function (seq378){
var G__379 = cljs.core.first.call(null,seq378);
var seq378__$1 = cljs.core.next.call(null,seq378);
var G__380 = cljs.core.first.call(null,seq378__$1);
var seq378__$2 = cljs.core.next.call(null,seq378__$1);
return reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic(G__379,G__380,seq378__$2);
});

return null;
})()
;
reagent.debug$macros.time.cljs$lang$macro = true;

