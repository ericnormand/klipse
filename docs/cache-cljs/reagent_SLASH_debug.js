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
var G__385__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",(-436710552))], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__386__i = 0, G__386__a = new Array(arguments.length -  0);
while (G__386__i < G__386__a.length) {G__386__a[G__386__i] = arguments[G__386__i + 0]; ++G__386__i;}
  args = new cljs.core.IndexedSeq(G__386__a,0,null);
} 
return G__385__delegate.call(this,args);};
G__385.cljs$lang$maxFixedArity = 0;
G__385.cljs$lang$applyTo = (function (arglist__387){
var args = cljs.core.seq(arglist__387);
return G__385__delegate(args);
});
G__385.cljs$core$IFn$_invoke$arity$variadic = G__385__delegate;
return G__385;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__388__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",(-978969032))], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__389__i = 0, G__389__a = new Array(arguments.length -  0);
while (G__389__i < G__389__a.length) {G__389__a[G__389__i] = arguments[G__389__i + 0]; ++G__389__i;}
  args = new cljs.core.IndexedSeq(G__389__a,0,null);
} 
return G__388__delegate.call(this,args);};
G__388.cljs$lang$maxFixedArity = 0;
G__388.cljs$lang$applyTo = (function (arglist__390){
var args = cljs.core.seq(arglist__390);
return G__388__delegate(args);
});
G__388.cljs$core$IFn$_invoke$arity$variadic = G__388__delegate;
return G__388;
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
