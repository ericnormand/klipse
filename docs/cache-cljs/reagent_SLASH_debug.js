goog.provide("reagent.debug");
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__79__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",(-436710552))], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__79 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80__i = 0, G__80__a = new Array(arguments.length -  0);
while (G__80__i < G__80__a.length) {G__80__a[G__80__i] = arguments[G__80__i + 0]; ++G__80__i;}
  args = new cljs.core.IndexedSeq(G__80__a,0,null);
} 
return G__79__delegate.call(this,args);};
G__79.cljs$lang$maxFixedArity = 0;
G__79.cljs$lang$applyTo = (function (arglist__81){
var args = cljs.core.seq(arglist__81);
return G__79__delegate(args);
});
G__79.cljs$core$IFn$_invoke$arity$variadic = G__79__delegate;
return G__79;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__82__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",(-978969032))], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__82 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83__i = 0, G__83__a = new Array(arguments.length -  0);
while (G__83__i < G__83__a.length) {G__83__a[G__83__i] = arguments[G__83__i + 0]; ++G__83__i;}
  args = new cljs.core.IndexedSeq(G__83__a,0,null);
} 
return G__82__delegate.call(this,args);};
G__82.cljs$lang$maxFixedArity = 0;
G__82.cljs$lang$applyTo = (function (arglist__84){
var args = cljs.core.seq(arglist__84);
return G__82__delegate(args);
});
G__82.cljs$core$IFn$_invoke$arity$variadic = G__82__delegate;
return G__82;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
