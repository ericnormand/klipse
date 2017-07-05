goog.provide("reagent.interop$macros");
reagent.interop$macros.js_call = (function reagent$interop$macros$js_call(f,args){
var argstr = clojure.string.join.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,args),"~{}"));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",(-1134233646),null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("~{}("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(argstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),f,args);
});
reagent.interop$macros.dot_args = (function reagent$interop$macros$dot_args(object,member){
if(((member instanceof cljs.core.Symbol)) || ((member instanceof cljs.core.Keyword))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Symbol or keyword expected, not "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,member))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (symbol? member) (keyword? member))")].join('')));
}

if((!((object instanceof cljs.core.Symbol))) || (cljs.core.not.call(null,cljs.core.re_find.call(null,/\./,cljs.core.name.call(null,object))))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Dot not allowed in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(object)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (not (symbol? object)) (not (re-find #\"\\.\" (name object))))")].join('')));
}

var n = cljs.core.name.call(null,member);
var field_QMARK_ = ((member instanceof cljs.core.Keyword)) || (cljs.core._EQ_.call(null,cljs.core.subs.call(null,n,(0),(1)),"-"));
var names = clojure.string.split.call(null,(((member instanceof cljs.core.Symbol))?clojure.string.replace.call(null,n,/^-/,""):n),/\./);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_QMARK_,names], null);
});
var ret__21633__auto___93 = (function (){
/**
 * Access member in a javascript object, in a Closure-safe way.
 *   'member' is assumed to be a field if it is a keyword or if
 *   the name starts with '-', otherwise the named function is
 *   called with the optional args.
 *   'member' may contain '.', to allow access in nested objects.
 *   If 'object' is a symbol it is not allowed contain '.'.
 * 
 *   ($ o :foo) is equivalent to (.-foo o), except that it gives
 *   the same result under advanced compilation.
 *   ($ o foo arg1 arg2) is the same as (.foo o arg1 arg2).
 */
reagent.interop$macros.$ = (function reagent$interop$macros$$(var_args){
var args__21610__auto__ = [];
var len__21607__auto___94 = arguments.length;
var i__21608__auto___95 = (0);
while(true){
if((i__21608__auto___95 < len__21607__auto___94)){
args__21610__auto__.push((arguments[i__21608__auto___95]));

var G__96 = (i__21608__auto___95 + (1));
i__21608__auto___95 = G__96;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((4) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((4)),(0),null)):null);
return reagent.interop$macros.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21611__auto__);
});

reagent.interop$macros.$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,object,member,args){
var vec__90 = reagent.interop$macros.dot_args.call(null,object,member);
var field = cljs.core.nth.call(null,vec__90,(0),null);
var names = cljs.core.nth.call(null,vec__90,(1),null);
if(cljs.core.truth_(field)){
if(cljs.core.empty_QMARK_.call(null,args)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Passing args to field doesn't make sense: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(member)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(empty? args)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",(6345791),null)),(function (){var x__21332__auto__ = object;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),names));
} else {
return reagent.interop$macros.js_call.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"aget","aget",(1491056546),null),object,names),args);
}
});

reagent.interop$macros.$.cljs$lang$maxFixedArity = (4);

reagent.interop$macros.$.cljs$lang$applyTo = (function (seq85){
var G__86 = cljs.core.first.call(null,seq85);
var seq85__$1 = cljs.core.next.call(null,seq85);
var G__87 = cljs.core.first.call(null,seq85__$1);
var seq85__$2 = cljs.core.next.call(null,seq85__$1);
var G__88 = cljs.core.first.call(null,seq85__$2);
var seq85__$3 = cljs.core.next.call(null,seq85__$2);
var G__89 = cljs.core.first.call(null,seq85__$3);
var seq85__$4 = cljs.core.next.call(null,seq85__$3);
return reagent.interop$macros.$.cljs$core$IFn$_invoke$arity$variadic(G__86,G__87,G__88,G__89,seq85__$4);
});

return null;
})()
;
reagent.interop$macros.$.cljs$lang$macro = true;

var ret__21633__auto___100 = /**
 * Set field in a javascript object, in a Closure-safe way.
 *   'field' should be a keyword or a symbol starting with '-'.
 *   'field' may contain '.', to allow access in nested objects.
 *   If 'object' is a symbol it is not allowed contain '.'.
 * 
 *   ($! o :foo 1) is equivalent to (set! (.-foo o) 1), except that it
 *   gives the same result under advanced compilation.
 */
reagent.interop$macros.$_BANG_ = (function reagent$interop$macros$$_BANG_(_AMPERSAND_form,_AMPERSAND_env,object,field,value){
var vec__97 = reagent.interop$macros.dot_args.call(null,object,field);
var field__$1 = cljs.core.nth.call(null,vec__97,(0),null);
var names = cljs.core.nth.call(null,vec__97,(1),null);
if(cljs.core.truth_(field__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Field name must start with - in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field__$1)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("field")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null)),(function (){var x__21332__auto__ = object;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})(),names,(function (){var x__21332__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21332__auto__);
})()));
});
reagent.interop$macros.$_BANG_.cljs$lang$macro = true;

