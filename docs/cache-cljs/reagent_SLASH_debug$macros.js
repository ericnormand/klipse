goog.provide("reagent.debug$macros");
var ret__21633__auto___25 = (function (){
/**
 * Print with console.log, if it exists.
 */
reagent.debug$macros.log = (function reagent$debug$macros$log(var_args){
var args__21610__auto__ = [];
var len__21607__auto___26 = arguments.length;
var i__21608__auto___27 = (0);
while(true){
if((i__21608__auto___27 < len__21607__auto___26)){
args__21610__auto__.push((arguments[i__21608__auto___27]));

var G__28 = (i__21608__auto___27 + (1));
i__21608__auto___27 = G__28;
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

reagent.debug$macros.log.cljs$lang$applyTo = (function (seq22){
var G__23 = cljs.core.first.call(null,seq22);
var seq22__$1 = cljs.core.next.call(null,seq22);
var G__24 = cljs.core.first.call(null,seq22__$1);
var seq22__$2 = cljs.core.next.call(null,seq22__$1);
return reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic(G__23,G__24,seq22__$2);
});

return null;
})()
;
reagent.debug$macros.log.cljs$lang$macro = true;

var ret__21633__auto___32 = (function (){
/**
 * Print with console.warn.
 */
reagent.debug$macros.warn = (function reagent$debug$macros$warn(var_args){
var args__21610__auto__ = [];
var len__21607__auto___33 = arguments.length;
var i__21608__auto___34 = (0);
while(true){
if((i__21608__auto___34 < len__21607__auto___33)){
args__21610__auto__.push((arguments[i__21608__auto___34]));

var G__35 = (i__21608__auto___34 + (1));
i__21608__auto___34 = G__35;
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

reagent.debug$macros.warn.cljs$lang$applyTo = (function (seq29){
var G__30 = cljs.core.first.call(null,seq29);
var seq29__$1 = cljs.core.next.call(null,seq29);
var G__31 = cljs.core.first.call(null,seq29__$1);
var seq29__$2 = cljs.core.next.call(null,seq29__$1);
return reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic(G__30,G__31,seq29__$2);
});

return null;
})()
;
reagent.debug$macros.warn.cljs$lang$macro = true;

var ret__21633__auto___40 = (function (){
reagent.debug$macros.warn_unless = (function reagent$debug$macros$warn_unless(var_args){
var args__21610__auto__ = [];
var len__21607__auto___41 = arguments.length;
var i__21608__auto___42 = (0);
while(true){
if((i__21608__auto___42 < len__21607__auto___41)){
args__21610__auto__.push((arguments[i__21608__auto___42]));

var G__43 = (i__21608__auto___42 + (1));
i__21608__auto___42 = G__43;
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

reagent.debug$macros.warn_unless.cljs$lang$applyTo = (function (seq36){
var G__37 = cljs.core.first.call(null,seq36);
var seq36__$1 = cljs.core.next.call(null,seq36);
var G__38 = cljs.core.first.call(null,seq36__$1);
var seq36__$2 = cljs.core.next.call(null,seq36__$1);
var G__39 = cljs.core.first.call(null,seq36__$2);
var seq36__$3 = cljs.core.next.call(null,seq36__$2);
return reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic(G__37,G__38,G__39,seq36__$3);
});

return null;
})()
;
reagent.debug$macros.warn_unless.cljs$lang$macro = true;

var ret__21633__auto___47 = (function (){
/**
 * Print with console.error.
 */
reagent.debug$macros.error = (function reagent$debug$macros$error(var_args){
var args__21610__auto__ = [];
var len__21607__auto___48 = arguments.length;
var i__21608__auto___49 = (0);
while(true){
if((i__21608__auto___49 < len__21607__auto___48)){
args__21610__auto__.push((arguments[i__21608__auto___49]));

var G__50 = (i__21608__auto___49 + (1));
i__21608__auto___49 = G__50;
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

reagent.debug$macros.error.cljs$lang$applyTo = (function (seq44){
var G__45 = cljs.core.first.call(null,seq44);
var seq44__$1 = cljs.core.next.call(null,seq44);
var G__46 = cljs.core.first.call(null,seq44__$1);
var seq44__$2 = cljs.core.next.call(null,seq44__$1);
return reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic(G__45,G__46,seq44__$2);
});

return null;
})()
;
reagent.debug$macros.error.cljs$lang$macro = true;

var ret__21633__auto___54 = (function (){
/**
 * Print string with console.log
 */
reagent.debug$macros.println = (function reagent$debug$macros$println(var_args){
var args__21610__auto__ = [];
var len__21607__auto___55 = arguments.length;
var i__21608__auto___56 = (0);
while(true){
if((i__21608__auto___56 < len__21607__auto___55)){
args__21610__auto__.push((arguments[i__21608__auto___56]));

var G__57 = (i__21608__auto___56 + (1));
i__21608__auto___56 = G__57;
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

reagent.debug$macros.println.cljs$lang$applyTo = (function (seq51){
var G__52 = cljs.core.first.call(null,seq51);
var seq51__$1 = cljs.core.next.call(null,seq51);
var G__53 = cljs.core.first.call(null,seq51__$1);
var seq51__$2 = cljs.core.next.call(null,seq51__$1);
return reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic(G__52,G__53,seq51__$2);
});

return null;
})()
;
reagent.debug$macros.println.cljs$lang$macro = true;

var ret__21633__auto___61 = (function (){
/**
 * Like standard prn, but prints using console.log (so that we get
 * nice clickable links to source in modern browsers).
 */
reagent.debug$macros.prn = (function reagent$debug$macros$prn(var_args){
var args__21610__auto__ = [];
var len__21607__auto___62 = arguments.length;
var i__21608__auto___63 = (0);
while(true){
if((i__21608__auto___63 < len__21607__auto___62)){
args__21610__auto__.push((arguments[i__21608__auto___63]));

var G__64 = (i__21608__auto___63 + (1));
i__21608__auto___63 = G__64;
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

reagent.debug$macros.prn.cljs$lang$applyTo = (function (seq58){
var G__59 = cljs.core.first.call(null,seq58);
var seq58__$1 = cljs.core.next.call(null,seq58);
var G__60 = cljs.core.first.call(null,seq58__$1);
var seq58__$2 = cljs.core.next.call(null,seq58__$1);
return reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic(G__59,G__60,seq58__$2);
});

return null;
})()
;
reagent.debug$macros.prn.cljs$lang$macro = true;

var ret__21633__auto___65 = /**
 * Useful debugging macro that prints the source and value of x,
 * as well as package name and line number. Returns x.
 */
reagent.debug$macros.dbg = (function reagent$debug$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
var ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join('');
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null)),(function (){var x__21332__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("reagent.debug","println","reagent.debug/println",(1987012298),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"dbg "),(function (){var x__21332__auto__ = ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,":"),(function (){var x__21332__auto__ = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__21332__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null))));
});
reagent.debug$macros.dbg.cljs$lang$macro = true;

var ret__21633__auto___66 = /**
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

var ret__21633__auto___70 = (function (){
reagent.debug$macros.time = (function reagent$debug$macros$time(var_args){
var args__21610__auto__ = [];
var len__21607__auto___71 = arguments.length;
var i__21608__auto___72 = (0);
while(true){
if((i__21608__auto___72 < len__21607__auto___71)){
args__21610__auto__.push((arguments[i__21608__auto___72]));

var G__73 = (i__21608__auto___72 + (1));
i__21608__auto___72 = G__73;
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
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null)),(function (){var x__21332__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null)),(function (){var x__21332__auto__ = label;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__3__auto__","res__3__auto__",(-1686286579),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",(1686842252),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console.time","js/console.time",(891683584),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","console.timeEnd","js/console.timeEnd",(274714029),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"res__3__auto__","res__3__auto__",(-1686286579),null))));
});

reagent.debug$macros.time.cljs$lang$maxFixedArity = (2);

reagent.debug$macros.time.cljs$lang$applyTo = (function (seq67){
var G__68 = cljs.core.first.call(null,seq67);
var seq67__$1 = cljs.core.next.call(null,seq67);
var G__69 = cljs.core.first.call(null,seq67__$1);
var seq67__$2 = cljs.core.next.call(null,seq67__$1);
return reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic(G__68,G__69,seq67__$2);
});

return null;
})()
;
reagent.debug$macros.time.cljs$lang$macro = true;

var ret__21633__auto___74 = reagent.debug$macros.assert_some = (function reagent$debug$macros$assert_some(_AMPERSAND_form,_AMPERSAND_env,value,tag){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),(function (){var x__21332__auto__ = tag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," must not be nil")));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});
reagent.debug$macros.assert_some.cljs$lang$macro = true;

var ret__21633__auto___75 = reagent.debug$macros.assert_component = (function reagent$debug$macros$assert_component(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",(1494246810),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Expected a reagent component, not "),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});
reagent.debug$macros.assert_component.cljs$lang$macro = true;

var ret__21633__auto___76 = reagent.debug$macros.assert_js_object = (function reagent$debug$macros$assert_js_object(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Expected a JS object, not "),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});
reagent.debug$macros.assert_js_object.cljs$lang$macro = true;

var ret__21633__auto___77 = reagent.debug$macros.assert_new_state = (function reagent$debug$macros$assert_new_state(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",(945071861),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Expected a valid new state, not "),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});
reagent.debug$macros.assert_new_state.cljs$lang$macro = true;

var ret__21633__auto___78 = reagent.debug$macros.assert_callable = (function reagent$debug$macros$assert_callable(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",(1075777968),null)),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",(1573873861),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Expected something callable, not "),(function (){var x__21332__auto__ = cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null)),(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});
reagent.debug$macros.assert_callable.cljs$lang$macro = true;

