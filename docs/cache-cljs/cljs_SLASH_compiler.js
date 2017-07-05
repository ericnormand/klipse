// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants false}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__17450 = s;
var map__17450__$1 = ((((!((map__17450 == null)))?((((map__17450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17450):map__17450);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17450__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__17453 = info;
var map__17454 = G__17453;
var map__17454__$1 = ((((!((map__17454 == null)))?((((map__17454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17454):map__17454);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17454__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__17453__$1 = G__17453;
while(true){
var d__$2 = d__$1;
var map__17456 = G__17453__$1;
var map__17456__$1 = ((((!((map__17456 == null)))?((((map__17456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17456):map__17456);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17456__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__17461 = (d__$2 + (1));
var G__17462 = shadow__$1;
d__$1 = G__17461;
G__17453__$1 = G__17462;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__17463){
var map__17464 = p__17463;
var map__17464__$1 = ((((!((map__17464 == null)))?((((map__17464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17464):map__17464);
var name_var = map__17464__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__17466 = info;
var map__17466__$1 = ((((!((map__17466 == null)))?((((map__17466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17466):map__17466);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17466__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17466__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__17472 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__17472) : cljs.compiler.munge.call(null,G__17472));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__17486 = arguments.length;
switch (G__17486) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("self__."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge_str(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__17495 = cp;
switch (G__17495) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\u"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__17507_17518 = cljs.core.seq(s);
var chunk__17508_17519 = null;
var count__17509_17520 = (0);
var i__17510_17521 = (0);
while(true){
if((i__17510_17521 < count__17509_17520)){
var c_17522 = chunk__17508_17519.cljs$core$IIndexed$_nth$arity$2(null,i__17510_17521);
sb.append(cljs.compiler.escape_char(c_17522));

var G__17523 = seq__17507_17518;
var G__17524 = chunk__17508_17519;
var G__17525 = count__17509_17520;
var G__17526 = (i__17510_17521 + (1));
seq__17507_17518 = G__17523;
chunk__17508_17519 = G__17524;
count__17509_17520 = G__17525;
i__17510_17521 = G__17526;
continue;
} else {
var temp__5278__auto___17527 = cljs.core.seq(seq__17507_17518);
if(temp__5278__auto___17527){
var seq__17507_17528__$1 = temp__5278__auto___17527;
if(cljs.core.chunked_seq_QMARK_(seq__17507_17528__$1)){
var c__8986__auto___17529 = cljs.core.chunk_first(seq__17507_17528__$1);
var G__17530 = cljs.core.chunk_rest(seq__17507_17528__$1);
var G__17531 = c__8986__auto___17529;
var G__17532 = cljs.core.count(c__8986__auto___17529);
var G__17533 = (0);
seq__17507_17518 = G__17530;
chunk__17508_17519 = G__17531;
count__17509_17520 = G__17532;
i__17510_17521 = G__17533;
continue;
} else {
var c_17534 = cljs.core.first(seq__17507_17528__$1);
sb.append(cljs.compiler.escape_char(c_17534));

var G__17535 = cljs.core.next(seq__17507_17528__$1);
var G__17536 = null;
var G__17537 = (0);
var G__17538 = (0);
seq__17507_17518 = G__17535;
chunk__17508_17519 = G__17536;
count__17509_17520 = G__17537;
i__17510_17521 = G__17538;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__9106__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9107__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9108__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9109__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9110__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9110__auto__,method_table__9106__auto__,prefer_table__9107__auto__,method_cache__9108__auto__,cached_hierarchy__9109__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__14538__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__14538__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__17545_17555 = ast;
var map__17545_17556__$1 = ((((!((map__17545_17555 == null)))?((((map__17545_17555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17545_17555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17545_17555):map__17545_17555);
var env_17557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17545_17556__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_17557))){
var map__17548_17561 = env_17557;
var map__17548_17562__$1 = ((((!((map__17548_17561 == null)))?((((map__17548_17561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17548_17561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17548_17561):map__17548_17561);
var line_17563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17548_17562__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17548_17562__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__17548_17561,map__17548_17562__$1,line_17563,column_17564,map__17545_17555,map__17545_17556__$1,env_17557,val__14538__auto__){
return (function (m){
var minfo = (function (){var G__17552 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17552,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__17552;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_17563 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__17548_17561,map__17548_17562__$1,line_17563,column_17564,map__17545_17555,map__17545_17556__$1,env_17557,val__14538__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_17564)?(column_17564 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__17548_17561,map__17548_17562__$1,line_17563,column_17564,map__17545_17555,map__17545_17556__$1,env_17557,val__14538__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__17548_17561,map__17548_17562__$1,line_17563,column_17564,map__17545_17555,map__17545_17556__$1,env_17557,val__14538__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__17548_17561,map__17548_17562__$1,line_17563,column_17564,map__17545_17555,map__17545_17556__$1,env_17557,val__14538__auto__))
,cljs.core.sorted_map()));
});})(map__17548_17561,map__17548_17562__$1,line_17563,column_17564,map__17545_17555,map__17545_17556__$1,env_17557,val__14538__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__14538__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__9314__auto__ = [];
var len__9307__auto___17581 = arguments.length;
var i__9308__auto___17582 = (0);
while(true){
if((i__9308__auto___17582 < len__9307__auto___17581)){
args__9314__auto__.push((arguments[i__9308__auto___17582]));

var G__17583 = (i__9308__auto___17582 + (1));
i__9308__auto___17582 = G__17583;
continue;
} else {
}
break;
}

var argseq__9315__auto__ = ((((0) < args__9314__auto__.length))?(new cljs.core.IndexedSeq(args__9314__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__9315__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__17569_17584 = cljs.core.seq(xs);
var chunk__17570_17585 = null;
var count__17571_17586 = (0);
var i__17572_17587 = (0);
while(true){
if((i__17572_17587 < count__17571_17586)){
var x_17588 = chunk__17570_17585.cljs$core$IIndexed$_nth$arity$2(null,i__17572_17587);
if((x_17588 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_17588)){
cljs.compiler.emit(x_17588);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_17588)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_17588);
} else {
if(goog.isFunction(x_17588)){
(x_17588.cljs$core$IFn$_invoke$arity$0 ? x_17588.cljs$core$IFn$_invoke$arity$0() : x_17588.call(null));
} else {
var s_17589 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_17588], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__17569_17584,chunk__17570_17585,count__17571_17586,i__17572_17587,s_17589,x_17588){
return (function (p1__17567_SHARP_){
return (p1__17567_SHARP_ + cljs.core.count(s_17589));
});})(seq__17569_17584,chunk__17570_17585,count__17571_17586,i__17572_17587,s_17589,x_17588))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_17589], 0));

}
}
}
}

var G__17590 = seq__17569_17584;
var G__17591 = chunk__17570_17585;
var G__17592 = count__17571_17586;
var G__17593 = (i__17572_17587 + (1));
seq__17569_17584 = G__17590;
chunk__17570_17585 = G__17591;
count__17571_17586 = G__17592;
i__17572_17587 = G__17593;
continue;
} else {
var temp__5278__auto___17596 = cljs.core.seq(seq__17569_17584);
if(temp__5278__auto___17596){
var seq__17569_17597__$1 = temp__5278__auto___17596;
if(cljs.core.chunked_seq_QMARK_(seq__17569_17597__$1)){
var c__8986__auto___17598 = cljs.core.chunk_first(seq__17569_17597__$1);
var G__17599 = cljs.core.chunk_rest(seq__17569_17597__$1);
var G__17600 = c__8986__auto___17598;
var G__17601 = cljs.core.count(c__8986__auto___17598);
var G__17602 = (0);
seq__17569_17584 = G__17599;
chunk__17570_17585 = G__17600;
count__17571_17586 = G__17601;
i__17572_17587 = G__17602;
continue;
} else {
var x_17603 = cljs.core.first(seq__17569_17597__$1);
if((x_17603 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_17603)){
cljs.compiler.emit(x_17603);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_17603)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_17603);
} else {
if(goog.isFunction(x_17603)){
(x_17603.cljs$core$IFn$_invoke$arity$0 ? x_17603.cljs$core$IFn$_invoke$arity$0() : x_17603.call(null));
} else {
var s_17604 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_17603], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__17569_17584,chunk__17570_17585,count__17571_17586,i__17572_17587,s_17604,x_17603,seq__17569_17597__$1,temp__5278__auto___17596){
return (function (p1__17567_SHARP_){
return (p1__17567_SHARP_ + cljs.core.count(s_17604));
});})(seq__17569_17584,chunk__17570_17585,count__17571_17586,i__17572_17587,s_17604,x_17603,seq__17569_17597__$1,temp__5278__auto___17596))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_17604], 0));

}
}
}
}

var G__17605 = cljs.core.next(seq__17569_17597__$1);
var G__17606 = null;
var G__17607 = (0);
var G__17608 = (0);
seq__17569_17584 = G__17605;
chunk__17570_17585 = G__17606;
count__17571_17586 = G__17607;
i__17572_17587 = G__17608;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq17568){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17568));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__9314__auto__ = [];
var len__9307__auto___17615 = arguments.length;
var i__9308__auto___17616 = (0);
while(true){
if((i__9308__auto___17616 < len__9307__auto___17615)){
args__9314__auto__.push((arguments[i__9308__auto___17616]));

var G__17617 = (i__9308__auto___17616 + (1));
i__9308__auto___17616 = G__17617;
continue;
} else {
}
break;
}

var argseq__9315__auto__ = ((((0) < args__9314__auto__.length))?(new cljs.core.IndexedSeq(args__9314__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__9315__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_17610_17618 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println();
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_17610_17618;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__17611){
var map__17612 = p__17611;
var map__17612__$1 = ((((!((map__17612 == null)))?((((map__17612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17612):map__17612);
var m = map__17612__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17612__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq17609){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17609));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9178__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17619_17621 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17620_17622 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17619_17621,_STAR_print_fn_STAR_17620_17622,sb__9178__auto__){
return (function (x__9179__auto__){
return sb__9178__auto__.append(x__9179__auto__);
});})(_STAR_print_newline_STAR_17619_17621,_STAR_print_fn_STAR_17620_17622,sb__9178__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17620_17622;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17619_17621;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9178__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9106__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9107__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9108__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9109__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9110__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9110__auto__,method_table__9106__auto__,prefer_table__9107__auto__,method_cache__9108__auto__,cached_hierarchy__9109__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("failed compiling constant: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a valid ClojureScript constant.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new RegExp(\"\"))"], 0));
} else {
var vec__17632 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__17639_17641 = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17639_17641) : cljs.compiler.emit_constant.call(null,G__17639_17641));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__17640_17644 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17640_17644) : cljs.compiler.emit_constant.call(null,G__17640_17644));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

var G__17647_17648 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__17647_17648) : cljs.compiler.emit_constant.call(null,G__17647_17648));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
var value = (function (){var G__17649 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__17649) : x.call(null,G__17649));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
var value = (function (){var G__17651 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__17651) : x.call(null,G__17651));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__17654){
var map__17655 = p__17654;
var map__17655__$1 = ((((!((map__17655 == null)))?((((map__17655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17655):map__17655);
var ast = map__17655__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17655__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17655__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5276__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5276__auto__)){
var const_expr = temp__5276__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name)], null));
var or__8074__auto__ = js_module_name;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17657 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__17657);
} else {
return G__17657;
}
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__17659){
var map__17660 = p__17659;
var map__17660__$1 = ((((!((map__17660 == null)))?((((map__17660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17660):map__17660);
var arg = map__17660__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17660__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17660__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17660__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17660__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__17662 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__17662__$1 = ((((!((map__17662 == null)))?((((map__17662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17662):map__17662);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__17669){
var map__17670 = p__17669;
var map__17670__$1 = ((((!((map__17670 == null)))?((((map__17670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17670):map__17670);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__17678_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__17678_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__17679){
var map__17680 = p__17679;
var map__17680__$1 = ((((!((map__17680 == null)))?((((map__17680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17680):map__17680);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17680__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17680__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17680__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"])"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__17698){
var map__17699 = p__17698;
var map__17699__$1 = ((((!((map__17699 == null)))?((((map__17699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17699):map__17699);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17699__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17699__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__17712){
var map__17713 = p__17712;
var map__17713__$1 = ((((!((map__17713 == null)))?((((map__17713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17713):map__17713);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17713__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_17717 = cljs.core.count(items);
if((cnt_17717 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentVector(null, ",cnt_17717,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__17731_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__17731_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__17738){
var map__17739 = p__17738;
var map__17739__$1 = ((((!((map__17739 == null)))?((((map__17739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17739):map__17739);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17739__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep(items),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__17752){
var map__17753 = p__17752;
var map__17753__$1 = ((((!((map__17753 == null)))?((((map__17753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17753):map__17753);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17753__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17753__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17753__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["({"], 0));

var temp__5278__auto___17772 = cljs.core.seq(items);
if(temp__5278__auto___17772){
var items_17773__$1 = temp__5278__auto___17772;
var vec__17755_17774 = items_17773__$1;
var seq__17756_17775 = cljs.core.seq(vec__17755_17774);
var first__17757_17776 = cljs.core.first(seq__17756_17775);
var seq__17756_17777__$1 = cljs.core.next(seq__17756_17775);
var vec__17758_17778 = first__17757_17776;
var k_17779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17758_17778,(0),null);
var v_17780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17758_17778,(1),null);
var r_17781 = seq__17756_17777__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"",cljs.core.name(k_17779),"\": ",v_17780], 0));

var seq__17761_17784 = cljs.core.seq(r_17781);
var chunk__17762_17785 = null;
var count__17763_17786 = (0);
var i__17764_17787 = (0);
while(true){
if((i__17764_17787 < count__17763_17786)){
var vec__17765_17788 = chunk__17762_17785.cljs$core$IIndexed$_nth$arity$2(null,i__17764_17787);
var k_17789__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17765_17788,(0),null);
var v_17790__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17765_17788,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_17789__$1),"\": ",v_17790__$1], 0));

var G__17791 = seq__17761_17784;
var G__17792 = chunk__17762_17785;
var G__17793 = count__17763_17786;
var G__17794 = (i__17764_17787 + (1));
seq__17761_17784 = G__17791;
chunk__17762_17785 = G__17792;
count__17763_17786 = G__17793;
i__17764_17787 = G__17794;
continue;
} else {
var temp__5278__auto___17795__$1 = cljs.core.seq(seq__17761_17784);
if(temp__5278__auto___17795__$1){
var seq__17761_17796__$1 = temp__5278__auto___17795__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17761_17796__$1)){
var c__8986__auto___17797 = cljs.core.chunk_first(seq__17761_17796__$1);
var G__17798 = cljs.core.chunk_rest(seq__17761_17796__$1);
var G__17799 = c__8986__auto___17797;
var G__17800 = cljs.core.count(c__8986__auto___17797);
var G__17801 = (0);
seq__17761_17784 = G__17798;
chunk__17762_17785 = G__17799;
count__17763_17786 = G__17800;
i__17764_17787 = G__17801;
continue;
} else {
var vec__17769_17802 = cljs.core.first(seq__17761_17796__$1);
var k_17803__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769_17802,(0),null);
var v_17804__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17769_17802,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", \"",cljs.core.name(k_17803__$1),"\": ",v_17804__$1], 0));

var G__17806 = cljs.core.next(seq__17761_17796__$1);
var G__17807 = null;
var G__17808 = (0);
var G__17809 = (0);
seq__17761_17784 = G__17806;
chunk__17762_17785 = G__17807;
count__17763_17786 = G__17808;
i__17764_17787 = G__17809;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__17812){
var map__17813 = p__17812;
var map__17813__$1 = ((((!((map__17813 == null)))?((((map__17813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17813):map__17813);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17813__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17813__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__17822){
var map__17823 = p__17822;
var map__17823__$1 = ((((!((map__17823 == null)))?((((map__17823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17823):map__17823);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17823__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17823__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__8062__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8062__auto__){
var and__8062__auto____$1 = form;
if(cljs.core.truth_(and__8062__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8062__auto____$1;
}
} else {
return and__8062__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__17833){
var map__17834 = p__17833;
var map__17834__$1 = ((((!((map__17834 == null)))?((((map__17834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17834):map__17834);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17834__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17834__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__8074__auto__ = (function (){var fexpr__17837 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__17837.cljs$core$IFn$_invoke$arity$1 ? fexpr__17837.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__17837.call(null,tag));
})();
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__17838){
var map__17839 = p__17838;
var map__17839__$1 = ((((!((map__17839 == null)))?((((map__17839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17839):map__17839);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17839__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17839__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17839__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17839__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17839__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__8074__auto__ = unchecked;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__17860){
var map__17861 = p__17860;
var map__17861__$1 = ((((!((map__17861 == null)))?((((map__17861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17861):map__17861);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17861__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17861__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17861__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17861__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17861__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch (",v,") {"], 0));

var seq__17863_17882 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__17864_17883 = null;
var count__17865_17884 = (0);
var i__17866_17885 = (0);
while(true){
if((i__17866_17885 < count__17865_17884)){
var vec__17867_17886 = chunk__17864_17883.cljs$core$IIndexed$_nth$arity$2(null,i__17866_17885);
var ts_17887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17867_17886,(0),null);
var then_17888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17867_17886,(1),null);
var seq__17870_17889 = cljs.core.seq(ts_17887);
var chunk__17871_17890 = null;
var count__17872_17891 = (0);
var i__17873_17892 = (0);
while(true){
if((i__17873_17892 < count__17872_17891)){
var test_17893 = chunk__17871_17890.cljs$core$IIndexed$_nth$arity$2(null,i__17873_17892);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17893,":"], 0));

var G__17894 = seq__17870_17889;
var G__17895 = chunk__17871_17890;
var G__17896 = count__17872_17891;
var G__17897 = (i__17873_17892 + (1));
seq__17870_17889 = G__17894;
chunk__17871_17890 = G__17895;
count__17872_17891 = G__17896;
i__17873_17892 = G__17897;
continue;
} else {
var temp__5278__auto___17898 = cljs.core.seq(seq__17870_17889);
if(temp__5278__auto___17898){
var seq__17870_17899__$1 = temp__5278__auto___17898;
if(cljs.core.chunked_seq_QMARK_(seq__17870_17899__$1)){
var c__8986__auto___17900 = cljs.core.chunk_first(seq__17870_17899__$1);
var G__17901 = cljs.core.chunk_rest(seq__17870_17899__$1);
var G__17902 = c__8986__auto___17900;
var G__17903 = cljs.core.count(c__8986__auto___17900);
var G__17904 = (0);
seq__17870_17889 = G__17901;
chunk__17871_17890 = G__17902;
count__17872_17891 = G__17903;
i__17873_17892 = G__17904;
continue;
} else {
var test_17905 = cljs.core.first(seq__17870_17899__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17905,":"], 0));

var G__17906 = cljs.core.next(seq__17870_17899__$1);
var G__17907 = null;
var G__17908 = (0);
var G__17909 = (0);
seq__17870_17889 = G__17906;
chunk__17871_17890 = G__17907;
count__17872_17891 = G__17908;
i__17873_17892 = G__17909;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_17888], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_17888], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__17910 = seq__17863_17882;
var G__17911 = chunk__17864_17883;
var G__17912 = count__17865_17884;
var G__17913 = (i__17866_17885 + (1));
seq__17863_17882 = G__17910;
chunk__17864_17883 = G__17911;
count__17865_17884 = G__17912;
i__17866_17885 = G__17913;
continue;
} else {
var temp__5278__auto___17914 = cljs.core.seq(seq__17863_17882);
if(temp__5278__auto___17914){
var seq__17863_17915__$1 = temp__5278__auto___17914;
if(cljs.core.chunked_seq_QMARK_(seq__17863_17915__$1)){
var c__8986__auto___17916 = cljs.core.chunk_first(seq__17863_17915__$1);
var G__17917 = cljs.core.chunk_rest(seq__17863_17915__$1);
var G__17918 = c__8986__auto___17916;
var G__17919 = cljs.core.count(c__8986__auto___17916);
var G__17920 = (0);
seq__17863_17882 = G__17917;
chunk__17864_17883 = G__17918;
count__17865_17884 = G__17919;
i__17866_17885 = G__17920;
continue;
} else {
var vec__17875_17921 = cljs.core.first(seq__17863_17915__$1);
var ts_17922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17875_17921,(0),null);
var then_17923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17875_17921,(1),null);
var seq__17878_17924 = cljs.core.seq(ts_17922);
var chunk__17879_17925 = null;
var count__17880_17926 = (0);
var i__17881_17927 = (0);
while(true){
if((i__17881_17927 < count__17880_17926)){
var test_17928 = chunk__17879_17925.cljs$core$IIndexed$_nth$arity$2(null,i__17881_17927);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17928,":"], 0));

var G__17929 = seq__17878_17924;
var G__17930 = chunk__17879_17925;
var G__17931 = count__17880_17926;
var G__17932 = (i__17881_17927 + (1));
seq__17878_17924 = G__17929;
chunk__17879_17925 = G__17930;
count__17880_17926 = G__17931;
i__17881_17927 = G__17932;
continue;
} else {
var temp__5278__auto___17933__$1 = cljs.core.seq(seq__17878_17924);
if(temp__5278__auto___17933__$1){
var seq__17878_17934__$1 = temp__5278__auto___17933__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17878_17934__$1)){
var c__8986__auto___17935 = cljs.core.chunk_first(seq__17878_17934__$1);
var G__17936 = cljs.core.chunk_rest(seq__17878_17934__$1);
var G__17937 = c__8986__auto___17935;
var G__17938 = cljs.core.count(c__8986__auto___17935);
var G__17939 = (0);
seq__17878_17924 = G__17936;
chunk__17879_17925 = G__17937;
count__17880_17926 = G__17938;
i__17881_17927 = G__17939;
continue;
} else {
var test_17940 = cljs.core.first(seq__17878_17934__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",test_17940,":"], 0));

var G__17941 = cljs.core.next(seq__17878_17934__$1);
var G__17942 = null;
var G__17943 = (0);
var G__17944 = (0);
seq__17878_17924 = G__17941;
chunk__17879_17925 = G__17942;
count__17880_17926 = G__17943;
i__17881_17927 = G__17944;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",then_17923], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then_17923], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

var G__17945 = cljs.core.next(seq__17863_17915__$1);
var G__17946 = null;
var G__17947 = (0);
var G__17948 = (0);
seq__17863_17882 = G__17945;
chunk__17864_17883 = G__17946;
count__17865_17884 = G__17947;
i__17866_17885 = G__17948;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__17949){
var map__17950 = p__17949;
var map__17950__$1 = ((((!((map__17950 == null)))?((((map__17950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17950):map__17950);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17953 = env;
var G__17954 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__17953,G__17954) : cljs.compiler.resolve_type.call(null,G__17953,G__17954));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__17955 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17955,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17955,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__17955,fstr,rstr,ret_t,axstr){
return (function (p1__17952_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__17952_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__17952_SHARP_));
});})(idx,vec__17955,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__17958 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("function("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17958),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__17958;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17959 = env;
var G__17960 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__17959,G__17960) : cljs.compiler.resolve_type.call(null,G__17959,G__17960));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=")].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__17962_SHARP_){
return cljs.compiler.resolve_type(env,p1__17962_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__17966 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__17967 = cljs.core.seq(vec__17966);
var first__17968 = cljs.core.first(seq__17967);
var seq__17967__$1 = cljs.core.next(seq__17967);
var p = first__17968;
var first__17968__$1 = cljs.core.first(seq__17967__$1);
var seq__17967__$2 = cljs.core.next(seq__17967__$1);
var ts = first__17968__$1;
var first__17968__$2 = cljs.core.first(seq__17967__$2);
var seq__17967__$3 = cljs.core.next(seq__17967__$2);
var n = first__17968__$2;
var xs = seq__17967__$3;
if(cljs.core.truth_((function (){var and__8062__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__8062__auto__){
var and__8062__auto____$1 = ts;
if(cljs.core.truth_(and__8062__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8062__auto____$1;
}
} else {
return and__8062__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__17970 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__17971 = cljs.core.seq(vec__17970);
var first__17972 = cljs.core.first(seq__17971);
var seq__17971__$1 = cljs.core.next(seq__17971);
var p = first__17972;
var first__17972__$1 = cljs.core.first(seq__17971__$1);
var seq__17971__$2 = cljs.core.next(seq__17971__$1);
var ts = first__17972__$1;
var xs = seq__17971__$2;
if(cljs.core.truth_((function (){var and__8062__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__8062__auto__){
var and__8062__auto____$1 = ts;
if(cljs.core.truth_(and__8062__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8062__auto____$1;
}
} else {
return and__8062__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__17978 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__17977 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__17977.cljs$core$IFn$_invoke$arity$1 ? fexpr__17977.cljs$core$IFn$_invoke$arity$1(G__17978) : fexpr__17977.call(null,G__17978));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__17982 = arguments.length;
switch (G__17982) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__17996 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__17980_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__17980_SHARP_);
} else {
return p1__17980_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__17997 = cljs.core.seq(vec__17996);
var first__17998 = cljs.core.first(seq__17997);
var seq__17997__$1 = cljs.core.next(seq__17997);
var x = first__17998;
var ys = seq__17997__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__17999 = cljs.core.seq(ys);
var chunk__18000 = null;
var count__18001 = (0);
var i__18002 = (0);
while(true){
if((i__18002 < count__18001)){
var next_line = chunk__18000.cljs$core$IIndexed$_nth$arity$2(null,i__18002);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__18020 = seq__17999;
var G__18021 = chunk__18000;
var G__18022 = count__18001;
var G__18023 = (i__18002 + (1));
seq__17999 = G__18020;
chunk__18000 = G__18021;
count__18001 = G__18022;
i__18002 = G__18023;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__17999);
if(temp__5278__auto__){
var seq__17999__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17999__$1)){
var c__8986__auto__ = cljs.core.chunk_first(seq__17999__$1);
var G__18026 = cljs.core.chunk_rest(seq__17999__$1);
var G__18027 = c__8986__auto__;
var G__18028 = cljs.core.count(c__8986__auto__);
var G__18029 = (0);
seq__17999 = G__18026;
chunk__18000 = G__18027;
count__18001 = G__18028;
i__18002 = G__18029;
continue;
} else {
var next_line = cljs.core.first(seq__17999__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__18031 = cljs.core.next(seq__17999__$1);
var G__18032 = null;
var G__18033 = (0);
var G__18034 = (0);
seq__17999 = G__18031;
chunk__18000 = G__18032;
count__18001 = G__18033;
i__18002 = G__18034;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

var seq__18006_18036 = cljs.core.seq(docs__$2);
var chunk__18007_18037 = null;
var count__18008_18038 = (0);
var i__18009_18039 = (0);
while(true){
if((i__18009_18039 < count__18008_18038)){
var e_18043 = chunk__18007_18037.cljs$core$IIndexed$_nth$arity$2(null,i__18009_18039);
if(cljs.core.truth_(e_18043)){
print_comment_lines(e_18043);
} else {
}

var G__18044 = seq__18006_18036;
var G__18045 = chunk__18007_18037;
var G__18046 = count__18008_18038;
var G__18047 = (i__18009_18039 + (1));
seq__18006_18036 = G__18044;
chunk__18007_18037 = G__18045;
count__18008_18038 = G__18046;
i__18009_18039 = G__18047;
continue;
} else {
var temp__5278__auto___18050 = cljs.core.seq(seq__18006_18036);
if(temp__5278__auto___18050){
var seq__18006_18052__$1 = temp__5278__auto___18050;
if(cljs.core.chunked_seq_QMARK_(seq__18006_18052__$1)){
var c__8986__auto___18055 = cljs.core.chunk_first(seq__18006_18052__$1);
var G__18056 = cljs.core.chunk_rest(seq__18006_18052__$1);
var G__18057 = c__8986__auto___18055;
var G__18058 = cljs.core.count(c__8986__auto___18055);
var G__18059 = (0);
seq__18006_18036 = G__18056;
chunk__18007_18037 = G__18057;
count__18008_18038 = G__18058;
i__18009_18039 = G__18059;
continue;
} else {
var e_18062 = cljs.core.first(seq__18006_18052__$1);
if(cljs.core.truth_(e_18062)){
print_comment_lines(e_18062);
} else {
}

var G__18064 = cljs.core.next(seq__18006_18052__$1);
var G__18065 = null;
var G__18066 = (0);
var G__18067 = (0);
seq__18006_18036 = G__18064;
chunk__18007_18037 = G__18065;
count__18008_18038 = G__18066;
i__18009_18039 = G__18067;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__8062__auto__ = cljs.core.some(((function (opts){
return (function (p1__18071_SHARP_){
return goog.string.startsWith(p1__18071_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8062__auto__)){
var and__8062__auto____$1 = opts;
if(cljs.core.truth_(and__8062__auto____$1)){
var and__8062__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8062__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__8062__auto____$2;
}
} else {
return and__8062__auto____$1;
}
} else {
return and__8062__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__18089){
var map__18090 = p__18089;
var map__18090__$1 = ((((!((map__18090 == null)))?((((map__18090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18090):map__18090);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8074__auto__ = init;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ("], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",(function (){var temp__5276__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5276__auto__)){
var define = temp__5276__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");})()"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__8062__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__8062__auto__){
return test;
} else {
return and__8062__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__18152){
var map__18153 = p__18152;
var map__18153__$1 = ((((!((map__18153 == null)))?((((map__18153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18153):map__18153);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18153__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18153__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18153__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (",arglist,"){"], 0));

var seq__18158_18207 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__18159_18208 = null;
var count__18160_18209 = (0);
var i__18161_18210 = (0);
while(true){
if((i__18161_18210 < count__18160_18209)){
var vec__18165_18211 = chunk__18159_18208.cljs$core$IIndexed$_nth$arity$2(null,i__18161_18210);
var i_18212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18165_18211,(0),null);
var param_18213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18165_18211,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_18213);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__18218 = seq__18158_18207;
var G__18219 = chunk__18159_18208;
var G__18220 = count__18160_18209;
var G__18221 = (i__18161_18210 + (1));
seq__18158_18207 = G__18218;
chunk__18159_18208 = G__18219;
count__18160_18209 = G__18220;
i__18161_18210 = G__18221;
continue;
} else {
var temp__5278__auto___18224 = cljs.core.seq(seq__18158_18207);
if(temp__5278__auto___18224){
var seq__18158_18226__$1 = temp__5278__auto___18224;
if(cljs.core.chunked_seq_QMARK_(seq__18158_18226__$1)){
var c__8986__auto___18227 = cljs.core.chunk_first(seq__18158_18226__$1);
var G__18228 = cljs.core.chunk_rest(seq__18158_18226__$1);
var G__18229 = c__8986__auto___18227;
var G__18230 = cljs.core.count(c__8986__auto___18227);
var G__18231 = (0);
seq__18158_18207 = G__18228;
chunk__18159_18208 = G__18229;
count__18160_18209 = G__18230;
i__18161_18210 = G__18231;
continue;
} else {
var vec__18173_18232 = cljs.core.first(seq__18158_18226__$1);
var i_18233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18173_18232,(0),null);
var param_18234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18173_18232,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(param_18234);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglist," = cljs.core.next(",arglist,");"], 0));

var G__18239 = cljs.core.next(seq__18158_18226__$1);
var G__18240 = null;
var G__18241 = (0);
var G__18242 = (0);
seq__18158_18207 = G__18239;
chunk__18159_18208 = G__18240;
count__18160_18209 = G__18241;
i__18161_18210 = G__18242;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__18178_18245 = cljs.core.seq(params);
var chunk__18179_18246 = null;
var count__18180_18247 = (0);
var i__18181_18248 = (0);
while(true){
if((i__18181_18248 < count__18180_18247)){
var param_18254 = chunk__18179_18246.cljs$core$IIndexed$_nth$arity$2(null,i__18181_18248);
cljs.compiler.emit(param_18254);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18254,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18261 = seq__18178_18245;
var G__18262 = chunk__18179_18246;
var G__18263 = count__18180_18247;
var G__18264 = (i__18181_18248 + (1));
seq__18178_18245 = G__18261;
chunk__18179_18246 = G__18262;
count__18180_18247 = G__18263;
i__18181_18248 = G__18264;
continue;
} else {
var temp__5278__auto___18266 = cljs.core.seq(seq__18178_18245);
if(temp__5278__auto___18266){
var seq__18178_18268__$1 = temp__5278__auto___18266;
if(cljs.core.chunked_seq_QMARK_(seq__18178_18268__$1)){
var c__8986__auto___18270 = cljs.core.chunk_first(seq__18178_18268__$1);
var G__18272 = cljs.core.chunk_rest(seq__18178_18268__$1);
var G__18273 = c__8986__auto___18270;
var G__18274 = cljs.core.count(c__8986__auto___18270);
var G__18275 = (0);
seq__18178_18245 = G__18272;
chunk__18179_18246 = G__18273;
count__18180_18247 = G__18274;
i__18181_18248 = G__18275;
continue;
} else {
var param_18278 = cljs.core.first(seq__18178_18268__$1);
cljs.compiler.emit(param_18278);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18278,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18279 = cljs.core.next(seq__18178_18268__$1);
var G__18280 = null;
var G__18281 = (0);
var G__18282 = (0);
seq__18178_18245 = G__18279;
chunk__18179_18246 = G__18280;
count__18180_18247 = G__18281;
i__18181_18248 = G__18282;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name,"("], 0));

var seq__18190_18283 = cljs.core.seq(params);
var chunk__18191_18284 = null;
var count__18192_18285 = (0);
var i__18193_18286 = (0);
while(true){
if((i__18193_18286 < count__18192_18285)){
var param_18289 = chunk__18191_18284.cljs$core$IIndexed$_nth$arity$2(null,i__18193_18286);
cljs.compiler.emit(param_18289);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18289,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18290 = seq__18190_18283;
var G__18291 = chunk__18191_18284;
var G__18292 = count__18192_18285;
var G__18293 = (i__18193_18286 + (1));
seq__18190_18283 = G__18290;
chunk__18191_18284 = G__18291;
count__18192_18285 = G__18292;
i__18193_18286 = G__18293;
continue;
} else {
var temp__5278__auto___18296 = cljs.core.seq(seq__18190_18283);
if(temp__5278__auto___18296){
var seq__18190_18297__$1 = temp__5278__auto___18296;
if(cljs.core.chunked_seq_QMARK_(seq__18190_18297__$1)){
var c__8986__auto___18298 = cljs.core.chunk_first(seq__18190_18297__$1);
var G__18299 = cljs.core.chunk_rest(seq__18190_18297__$1);
var G__18300 = c__8986__auto___18298;
var G__18301 = cljs.core.count(c__8986__auto___18298);
var G__18302 = (0);
seq__18190_18283 = G__18299;
chunk__18191_18284 = G__18300;
count__18192_18285 = G__18301;
i__18193_18286 = G__18302;
continue;
} else {
var param_18306 = cljs.core.first(seq__18190_18297__$1);
cljs.compiler.emit(param_18306);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18306,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18309 = cljs.core.next(seq__18190_18297__$1);
var G__18310 = null;
var G__18311 = (0);
var G__18312 = (0);
seq__18190_18283 = G__18309;
chunk__18191_18284 = G__18310;
count__18192_18285 = G__18311;
i__18193_18286 = G__18312;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__18315 = cljs.core.seq(params);
var chunk__18316 = null;
var count__18317 = (0);
var i__18318 = (0);
while(true){
if((i__18318 < count__18317)){
var param = chunk__18316.cljs$core$IIndexed$_nth$arity$2(null,i__18318);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18334 = seq__18315;
var G__18335 = chunk__18316;
var G__18336 = count__18317;
var G__18337 = (i__18318 + (1));
seq__18315 = G__18334;
chunk__18316 = G__18335;
count__18317 = G__18336;
i__18318 = G__18337;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__18315);
if(temp__5278__auto__){
var seq__18315__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18315__$1)){
var c__8986__auto__ = cljs.core.chunk_first(seq__18315__$1);
var G__18339 = cljs.core.chunk_rest(seq__18315__$1);
var G__18340 = c__8986__auto__;
var G__18341 = cljs.core.count(c__8986__auto__);
var G__18342 = (0);
seq__18315 = G__18339;
chunk__18316 = G__18340;
count__18317 = G__18341;
i__18318 = G__18342;
continue;
} else {
var param = cljs.core.first(seq__18315__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18347 = cljs.core.next(seq__18315__$1);
var G__18348 = null;
var G__18349 = (0);
var G__18350 = (0);
seq__18315 = G__18347;
chunk__18316 = G__18348;
count__18317 = G__18349;
i__18318 = G__18350;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__18352){
var map__18353 = p__18352;
var map__18353__$1 = ((((!((map__18353 == null)))?((((map__18353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18353):map__18353);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__i")].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__18387){
var map__18388 = p__18387;
var map__18388__$1 = ((((!((map__18388 == null)))?((((map__18388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18388):map__18388);
var f = map__18388__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

var name_18421__$1 = (function (){var or__8074__auto__ = name;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_18422 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_18421__$1);
var delegate_name_18423 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18422),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",delegate_name_18423," = function ("], 0));

var seq__18394_18426 = cljs.core.seq(params);
var chunk__18395_18427 = null;
var count__18396_18428 = (0);
var i__18397_18429 = (0);
while(true){
if((i__18397_18429 < count__18396_18428)){
var param_18432 = chunk__18395_18427.cljs$core$IIndexed$_nth$arity$2(null,i__18397_18429);
cljs.compiler.emit(param_18432);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18432,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18435 = seq__18394_18426;
var G__18436 = chunk__18395_18427;
var G__18437 = count__18396_18428;
var G__18438 = (i__18397_18429 + (1));
seq__18394_18426 = G__18435;
chunk__18395_18427 = G__18436;
count__18396_18428 = G__18437;
i__18397_18429 = G__18438;
continue;
} else {
var temp__5278__auto___18439 = cljs.core.seq(seq__18394_18426);
if(temp__5278__auto___18439){
var seq__18394_18440__$1 = temp__5278__auto___18439;
if(cljs.core.chunked_seq_QMARK_(seq__18394_18440__$1)){
var c__8986__auto___18441 = cljs.core.chunk_first(seq__18394_18440__$1);
var G__18442 = cljs.core.chunk_rest(seq__18394_18440__$1);
var G__18443 = c__8986__auto___18441;
var G__18444 = cljs.core.count(c__8986__auto___18441);
var G__18445 = (0);
seq__18394_18426 = G__18442;
chunk__18395_18427 = G__18443;
count__18396_18428 = G__18444;
i__18397_18429 = G__18445;
continue;
} else {
var param_18446 = cljs.core.first(seq__18394_18440__$1);
cljs.compiler.emit(param_18446);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18446,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18447 = cljs.core.next(seq__18394_18440__$1);
var G__18448 = null;
var G__18449 = (0);
var G__18450 = (0);
seq__18394_18426 = G__18447;
chunk__18395_18427 = G__18448;
count__18396_18428 = G__18449;
i__18397_18429 = G__18450;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_18422," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_18455 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_18455,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",delegate_name_18423,".call(this,"], 0));

var seq__18403_18456 = cljs.core.seq(params);
var chunk__18404_18457 = null;
var count__18405_18458 = (0);
var i__18406_18459 = (0);
while(true){
if((i__18406_18459 < count__18405_18458)){
var param_18461 = chunk__18404_18457.cljs$core$IIndexed$_nth$arity$2(null,i__18406_18459);
cljs.compiler.emit(param_18461);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18461,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18464 = seq__18403_18456;
var G__18465 = chunk__18404_18457;
var G__18466 = count__18405_18458;
var G__18467 = (i__18406_18459 + (1));
seq__18403_18456 = G__18464;
chunk__18404_18457 = G__18465;
count__18405_18458 = G__18466;
i__18406_18459 = G__18467;
continue;
} else {
var temp__5278__auto___18468 = cljs.core.seq(seq__18403_18456);
if(temp__5278__auto___18468){
var seq__18403_18469__$1 = temp__5278__auto___18468;
if(cljs.core.chunked_seq_QMARK_(seq__18403_18469__$1)){
var c__8986__auto___18470 = cljs.core.chunk_first(seq__18403_18469__$1);
var G__18471 = cljs.core.chunk_rest(seq__18403_18469__$1);
var G__18472 = c__8986__auto___18470;
var G__18473 = cljs.core.count(c__8986__auto___18470);
var G__18474 = (0);
seq__18403_18456 = G__18471;
chunk__18404_18457 = G__18472;
count__18405_18458 = G__18473;
i__18406_18459 = G__18474;
continue;
} else {
var param_18475 = cljs.core.first(seq__18403_18469__$1);
cljs.compiler.emit(param_18475);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18475,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([","], 0));
}

var G__18477 = cljs.core.next(seq__18403_18469__$1);
var G__18478 = null;
var G__18479 = (0);
var G__18480 = (0);
seq__18403_18456 = G__18477;
chunk__18404_18457 = G__18478;
count__18405_18458 = G__18479;
i__18406_18459 = G__18480;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18422,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18422,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_18421__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18422,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_18423,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_18422,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__18490){
var map__18491 = p__18490;
var map__18491__$1 = ((((!((map__18491 == null)))?((((map__18491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18491):map__18491);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18491__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__18491,map__18491__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__18482_SHARP_){
var and__8062__auto__ = p1__18482_SHARP_;
if(cljs.core.truth_(and__8062__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__18482_SHARP_));
} else {
return and__8062__auto__;
}
});})(map__18491,map__18491__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_18581__$1 = (function (){var or__8074__auto__ = name;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_18582 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_18581__$1);
var maxparams_18583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_18584 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_18581__$1,mname_18582,maxparams_18583,loop_locals,map__18491,map__18491__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18582),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_18581__$1,mname_18582,maxparams_18583,loop_locals,map__18491,map__18491__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_18585 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_18581__$1,mname_18582,maxparams_18583,mmap_18584,loop_locals,map__18491,map__18491__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__18483_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__18483_SHARP_)));
});})(name_18581__$1,mname_18582,maxparams_18583,mmap_18584,loop_locals,map__18491,map__18491__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_18584));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",mname_18582," = null;"], 0));

var seq__18505_18588 = cljs.core.seq(ms_18585);
var chunk__18506_18589 = null;
var count__18507_18590 = (0);
var i__18508_18591 = (0);
while(true){
if((i__18508_18591 < count__18507_18590)){
var vec__18509_18595 = chunk__18506_18589.cljs$core$IIndexed$_nth$arity$2(null,i__18508_18591);
var n_18596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18509_18595,(0),null);
var meth_18597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18509_18595,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_18596," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_18597))){
cljs.compiler.emit_variadic_fn_method(meth_18597);
} else {
cljs.compiler.emit_fn_method(meth_18597);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__18599 = seq__18505_18588;
var G__18600 = chunk__18506_18589;
var G__18601 = count__18507_18590;
var G__18602 = (i__18508_18591 + (1));
seq__18505_18588 = G__18599;
chunk__18506_18589 = G__18600;
count__18507_18590 = G__18601;
i__18508_18591 = G__18602;
continue;
} else {
var temp__5278__auto___18603 = cljs.core.seq(seq__18505_18588);
if(temp__5278__auto___18603){
var seq__18505_18604__$1 = temp__5278__auto___18603;
if(cljs.core.chunked_seq_QMARK_(seq__18505_18604__$1)){
var c__8986__auto___18605 = cljs.core.chunk_first(seq__18505_18604__$1);
var G__18606 = cljs.core.chunk_rest(seq__18505_18604__$1);
var G__18607 = c__8986__auto___18605;
var G__18608 = cljs.core.count(c__8986__auto___18605);
var G__18609 = (0);
seq__18505_18588 = G__18606;
chunk__18506_18589 = G__18607;
count__18507_18590 = G__18608;
i__18508_18591 = G__18609;
continue;
} else {
var vec__18514_18610 = cljs.core.first(seq__18505_18604__$1);
var n_18611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18514_18610,(0),null);
var meth_18612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18514_18610,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",n_18611," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_18612))){
cljs.compiler.emit_variadic_fn_method(meth_18612);
} else {
cljs.compiler.emit_fn_method(meth_18612);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));

var G__18613 = cljs.core.next(seq__18505_18604__$1);
var G__18614 = null;
var G__18615 = (0);
var G__18616 = (0);
seq__18505_18588 = G__18613;
chunk__18506_18589 = G__18614;
count__18507_18590 = G__18615;
i__18508_18591 = G__18616;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18582," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_18583),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_18583)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_18583));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["switch(arguments.length){"], 0));

var seq__18524_18618 = cljs.core.seq(ms_18585);
var chunk__18525_18619 = null;
var count__18526_18620 = (0);
var i__18527_18621 = (0);
while(true){
if((i__18527_18621 < count__18526_18620)){
var vec__18528_18624 = chunk__18525_18619.cljs$core$IIndexed$_nth$arity$2(null,i__18527_18621);
var n_18625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18528_18624,(0),null);
var meth_18626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18528_18624,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_18626))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_18630 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_18630," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_18633 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18630," = new cljs.core.IndexedSeq(",a_18633,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_18625,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_18583)),(((cljs.core.count(maxparams_18583) > (1)))?", ":null),restarg_18630,");"], 0));
} else {
var pcnt_18634 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18626));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_18634,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_18625,".call(this",(((pcnt_18634 === (0)))?null:cljs.core._conj((function (){var x__9009__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18634,maxparams_18583));
return cljs.core._conj(cljs.core.List.EMPTY,x__9009__auto__);
})(),",")),");"], 0));
}

var G__18635 = seq__18524_18618;
var G__18636 = chunk__18525_18619;
var G__18637 = count__18526_18620;
var G__18638 = (i__18527_18621 + (1));
seq__18524_18618 = G__18635;
chunk__18525_18619 = G__18636;
count__18526_18620 = G__18637;
i__18527_18621 = G__18638;
continue;
} else {
var temp__5278__auto___18639 = cljs.core.seq(seq__18524_18618);
if(temp__5278__auto___18639){
var seq__18524_18640__$1 = temp__5278__auto___18639;
if(cljs.core.chunked_seq_QMARK_(seq__18524_18640__$1)){
var c__8986__auto___18641 = cljs.core.chunk_first(seq__18524_18640__$1);
var G__18642 = cljs.core.chunk_rest(seq__18524_18640__$1);
var G__18643 = c__8986__auto___18641;
var G__18644 = cljs.core.count(c__8986__auto___18641);
var G__18645 = (0);
seq__18524_18618 = G__18642;
chunk__18525_18619 = G__18643;
count__18526_18620 = G__18644;
i__18527_18621 = G__18645;
continue;
} else {
var vec__18541_18648 = cljs.core.first(seq__18524_18640__$1);
var n_18649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18541_18648,(0),null);
var meth_18650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18541_18648,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_18650))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["default:"], 0));

var restarg_18652 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",restarg_18652," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_18653 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18652," = new cljs.core.IndexedSeq(",a_18653,",0,null);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_18649,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_18583)),(((cljs.core.count(maxparams_18583) > (1)))?", ":null),restarg_18652,");"], 0));
} else {
var pcnt_18655 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18650));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["case ",pcnt_18655,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",n_18649,".call(this",(((pcnt_18655 === (0)))?null:cljs.core._conj((function (){var x__9009__auto__ = cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18655,maxparams_18583));
return cljs.core._conj(cljs.core.List.EMPTY,x__9009__auto__);
})(),",")),");"], 0));
}

var G__18656 = cljs.core.next(seq__18524_18640__$1);
var G__18657 = null;
var G__18658 = (0);
var G__18659 = (0);
seq__18524_18618 = G__18656;
chunk__18525_18619 = G__18657;
count__18526_18620 = G__18658;
i__18527_18621 = G__18659;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["throw(new Error('Invalid arity: ' + (arguments.length - 1)));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18582,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18582,".cljs$lang$applyTo = ",cljs.core.some(((function (name_18581__$1,mname_18582,maxparams_18583,mmap_18584,ms_18585,loop_locals,map__18491,map__18491__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__18489_SHARP_){
var vec__18550 = p1__18489_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18550,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18550,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_18581__$1,mname_18582,maxparams_18583,mmap_18584,ms_18585,loop_locals,map__18491,map__18491__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_18585),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__18556_18660 = cljs.core.seq(ms_18585);
var chunk__18557_18661 = null;
var count__18558_18662 = (0);
var i__18559_18663 = (0);
while(true){
if((i__18559_18663 < count__18558_18662)){
var vec__18561_18664 = chunk__18557_18661.cljs$core$IIndexed$_nth$arity$2(null,i__18559_18663);
var n_18665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18561_18664,(0),null);
var meth_18666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18561_18664,(1),null);
var c_18667 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18666));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_18666))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18582,".cljs$core$IFn$_invoke$arity$variadic = ",n_18665,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18582,".cljs$core$IFn$_invoke$arity$",c_18667," = ",n_18665,";"], 0));
}

var G__18668 = seq__18556_18660;
var G__18669 = chunk__18557_18661;
var G__18670 = count__18558_18662;
var G__18671 = (i__18559_18663 + (1));
seq__18556_18660 = G__18668;
chunk__18557_18661 = G__18669;
count__18558_18662 = G__18670;
i__18559_18663 = G__18671;
continue;
} else {
var temp__5278__auto___18672 = cljs.core.seq(seq__18556_18660);
if(temp__5278__auto___18672){
var seq__18556_18673__$1 = temp__5278__auto___18672;
if(cljs.core.chunked_seq_QMARK_(seq__18556_18673__$1)){
var c__8986__auto___18674 = cljs.core.chunk_first(seq__18556_18673__$1);
var G__18675 = cljs.core.chunk_rest(seq__18556_18673__$1);
var G__18676 = c__8986__auto___18674;
var G__18677 = cljs.core.count(c__8986__auto___18674);
var G__18678 = (0);
seq__18556_18660 = G__18675;
chunk__18557_18661 = G__18676;
count__18558_18662 = G__18677;
i__18559_18663 = G__18678;
continue;
} else {
var vec__18565_18679 = cljs.core.first(seq__18556_18673__$1);
var n_18680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18565_18679,(0),null);
var meth_18681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18565_18679,(1),null);
var c_18686 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18681));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_18681))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18582,".cljs$core$IFn$_invoke$arity$variadic = ",n_18680,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mname_18582,".cljs$core$IFn$_invoke$arity$",c_18686," = ",n_18680,";"], 0));
}

var G__18687 = cljs.core.next(seq__18556_18673__$1);
var G__18688 = null;
var G__18689 = (0);
var G__18690 = (0);
seq__18556_18660 = G__18687;
chunk__18557_18661 = G__18688;
count__18558_18662 = G__18689;
i__18559_18663 = G__18690;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return ",mname_18582,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__18692){
var map__18693 = p__18692;
var map__18693__$1 = ((((!((map__18693 == null)))?((((map__18693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18693):map__18693);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18693__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18693__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18693__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8062__auto__ = statements;
if(cljs.core.truth_(and__8062__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8062__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__18697_18706 = cljs.core.seq(statements);
var chunk__18698_18707 = null;
var count__18699_18708 = (0);
var i__18700_18709 = (0);
while(true){
if((i__18700_18709 < count__18699_18708)){
var s_18710 = chunk__18698_18707.cljs$core$IIndexed$_nth$arity$2(null,i__18700_18709);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18710], 0));

var G__18711 = seq__18697_18706;
var G__18712 = chunk__18698_18707;
var G__18713 = count__18699_18708;
var G__18714 = (i__18700_18709 + (1));
seq__18697_18706 = G__18711;
chunk__18698_18707 = G__18712;
count__18699_18708 = G__18713;
i__18700_18709 = G__18714;
continue;
} else {
var temp__5278__auto___18715 = cljs.core.seq(seq__18697_18706);
if(temp__5278__auto___18715){
var seq__18697_18716__$1 = temp__5278__auto___18715;
if(cljs.core.chunked_seq_QMARK_(seq__18697_18716__$1)){
var c__8986__auto___18717 = cljs.core.chunk_first(seq__18697_18716__$1);
var G__18718 = cljs.core.chunk_rest(seq__18697_18716__$1);
var G__18719 = c__8986__auto___18717;
var G__18720 = cljs.core.count(c__8986__auto___18717);
var G__18721 = (0);
seq__18697_18706 = G__18718;
chunk__18698_18707 = G__18719;
count__18699_18708 = G__18720;
i__18700_18709 = G__18721;
continue;
} else {
var s_18722 = cljs.core.first(seq__18697_18716__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18722], 0));

var G__18723 = cljs.core.next(seq__18697_18716__$1);
var G__18724 = null;
var G__18725 = (0);
var G__18726 = (0);
seq__18697_18706 = G__18723;
chunk__18698_18707 = G__18724;
count__18699_18708 = G__18725;
i__18700_18709 = G__18726;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__8062__auto__ = statements;
if(cljs.core.truth_(and__8062__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8062__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__18728){
var map__18729 = p__18728;
var map__18729__$1 = ((((!((map__18729 == null)))?((((map__18729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18729):map__18729);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18729__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8074__auto__ = name;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("finally block cannot contain constant"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__18742,is_loop){
var map__18743 = p__18742;
var map__18743__$1 = ((((!((map__18743 == null)))?((((map__18743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18743):map__18743);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18743__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_18745_18769 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_18745_18769,context,map__18743,map__18743__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_18745_18769,context,map__18743,map__18743__$1,bindings,expr,env))
,bindings):null));

try{var seq__18749_18775 = cljs.core.seq(bindings);
var chunk__18750_18776 = null;
var count__18751_18777 = (0);
var i__18752_18778 = (0);
while(true){
if((i__18752_18778 < count__18751_18777)){
var map__18753_18780 = chunk__18750_18776.cljs$core$IIndexed$_nth$arity$2(null,i__18752_18778);
var map__18753_18781__$1 = ((((!((map__18753_18780 == null)))?((((map__18753_18780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18753_18780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18753_18780):map__18753_18780);
var binding_18782 = map__18753_18781__$1;
var init_18783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753_18781__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_18782);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_18783,";"], 0));

var G__18788 = seq__18749_18775;
var G__18789 = chunk__18750_18776;
var G__18790 = count__18751_18777;
var G__18791 = (i__18752_18778 + (1));
seq__18749_18775 = G__18788;
chunk__18750_18776 = G__18789;
count__18751_18777 = G__18790;
i__18752_18778 = G__18791;
continue;
} else {
var temp__5278__auto___18795 = cljs.core.seq(seq__18749_18775);
if(temp__5278__auto___18795){
var seq__18749_18797__$1 = temp__5278__auto___18795;
if(cljs.core.chunked_seq_QMARK_(seq__18749_18797__$1)){
var c__8986__auto___18798 = cljs.core.chunk_first(seq__18749_18797__$1);
var G__18801 = cljs.core.chunk_rest(seq__18749_18797__$1);
var G__18802 = c__8986__auto___18798;
var G__18803 = cljs.core.count(c__8986__auto___18798);
var G__18804 = (0);
seq__18749_18775 = G__18801;
chunk__18750_18776 = G__18802;
count__18751_18777 = G__18803;
i__18752_18778 = G__18804;
continue;
} else {
var map__18759_18805 = cljs.core.first(seq__18749_18797__$1);
var map__18759_18806__$1 = ((((!((map__18759_18805 == null)))?((((map__18759_18805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18759_18805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18759_18805):map__18759_18805);
var binding_18807 = map__18759_18806__$1;
var init_18808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18759_18806__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var "], 0));

cljs.compiler.emit(binding_18807);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" = ",init_18808,";"], 0));

var G__18811 = cljs.core.next(seq__18749_18797__$1);
var G__18812 = null;
var G__18813 = (0);
var G__18814 = (0);
seq__18749_18775 = G__18811;
chunk__18750_18776 = G__18812;
count__18751_18777 = G__18813;
i__18752_18778 = G__18814;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_18745_18769;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__18831){
var map__18832 = p__18831;
var map__18832__$1 = ((((!((map__18832 == null)))?((((map__18832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18832):map__18832);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18832__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9096__auto___18849 = cljs.core.count(exprs);
var i_18850 = (0);
while(true){
if((i_18850 < n__9096__auto___18849)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_18850) : temps.call(null,i_18850))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_18850) : exprs.call(null,i_18850)),";"], 0));

var G__18851 = (i_18850 + (1));
i_18850 = G__18851;
continue;
} else {
}
break;
}

var n__9096__auto___18852 = cljs.core.count(exprs);
var i_18853 = (0);
while(true){
if((i_18853 < n__9096__auto___18852)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_18853) : params.call(null,i_18853)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_18853) : temps.call(null,i_18853)),";"], 0));

var G__18854 = (i_18853 + (1));
i_18853 = G__18854;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__18855){
var map__18856 = p__18855;
var map__18856__$1 = ((((!((map__18856 == null)))?((((map__18856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18856):map__18856);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18856__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18856__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18856__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(function (){"], 0));
} else {
}

var seq__18862_18877 = cljs.core.seq(bindings);
var chunk__18863_18878 = null;
var count__18864_18879 = (0);
var i__18865_18880 = (0);
while(true){
if((i__18865_18880 < count__18864_18879)){
var map__18866_18881 = chunk__18863_18878.cljs$core$IIndexed$_nth$arity$2(null,i__18865_18880);
var map__18866_18882__$1 = ((((!((map__18866_18881 == null)))?((((map__18866_18881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18866_18881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18866_18881):map__18866_18881);
var binding_18883 = map__18866_18882__$1;
var init_18884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18866_18882__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_18883)," = ",init_18884,";"], 0));

var G__18886 = seq__18862_18877;
var G__18887 = chunk__18863_18878;
var G__18888 = count__18864_18879;
var G__18889 = (i__18865_18880 + (1));
seq__18862_18877 = G__18886;
chunk__18863_18878 = G__18887;
count__18864_18879 = G__18888;
i__18865_18880 = G__18889;
continue;
} else {
var temp__5278__auto___18891 = cljs.core.seq(seq__18862_18877);
if(temp__5278__auto___18891){
var seq__18862_18892__$1 = temp__5278__auto___18891;
if(cljs.core.chunked_seq_QMARK_(seq__18862_18892__$1)){
var c__8986__auto___18895 = cljs.core.chunk_first(seq__18862_18892__$1);
var G__18896 = cljs.core.chunk_rest(seq__18862_18892__$1);
var G__18897 = c__8986__auto___18895;
var G__18898 = cljs.core.count(c__8986__auto___18895);
var G__18899 = (0);
seq__18862_18877 = G__18896;
chunk__18863_18878 = G__18897;
count__18864_18879 = G__18898;
i__18865_18880 = G__18899;
continue;
} else {
var map__18873_18900 = cljs.core.first(seq__18862_18892__$1);
var map__18873_18901__$1 = ((((!((map__18873_18900 == null)))?((((map__18873_18900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18873_18900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18873_18900):map__18873_18900);
var binding_18902 = map__18873_18901__$1;
var init_18903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18873_18901__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_18902)," = ",init_18903,";"], 0));

var G__18906 = cljs.core.next(seq__18862_18892__$1);
var G__18907 = null;
var G__18908 = (0);
var G__18909 = (0);
seq__18862_18877 = G__18906;
chunk__18863_18878 = G__18907;
count__18864_18879 = G__18908;
i__18865_18880 = G__18909;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__18917){
var map__18918 = p__18917;
var map__18918__$1 = ((((!((map__18918 == null)))?((((map__18918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18918):map__18918);
var expr = map__18918__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8062__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8062__auto__){
var and__8062__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8062__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8062__auto____$1;
}
} else {
return and__8062__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8062__auto__ = protocol;
if(cljs.core.truth_(and__8062__auto__)){
var and__8062__auto____$1 = tag;
if(cljs.core.truth_(and__8062__auto____$1)){
var or__8074__auto__ = (function (){var and__8062__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__8062__auto____$2){
var and__8062__auto____$3 = protocol;
if(cljs.core.truth_(and__8062__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8062__auto____$3;
}
} else {
return and__8062__auto____$2;
}
})();
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
var and__8062__auto____$2 = (function (){var or__8074__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__8074__auto____$1){
return or__8074__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8062__auto____$2)){
var or__8074__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__8074__auto____$1){
return or__8074__auto____$1;
} else {
var and__8062__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__8062__auto____$3){
var and__8062__auto____$4 = cljs.core.not((function (){var fexpr__18951 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null);
return (fexpr__18951.cljs$core$IFn$_invoke$arity$1 ? fexpr__18951.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__18951.call(null,tag));
})());
if(and__8062__auto____$4){
var temp__5278__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5278__auto__)){
var ps = temp__5278__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__8062__auto____$4;
}
} else {
return and__8062__auto____$3;
}
}
} else {
return and__8062__auto____$2;
}
}
} else {
return and__8062__auto____$1;
}
} else {
return and__8062__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8074__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8074__auto__){
return or__8074__auto__;
} else {
var or__8074__auto____$1 = (function (){var temp__5278__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5278__auto__)){
var ns_str = temp__5278__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__8074__auto____$1)){
return or__8074__auto____$1;
} else {
return !(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag(env,f))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)));
var vec__18929 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8062__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8062__auto__)){
return (arity > mfa);
} else {
return and__8062__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18918,map__18918__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18918,map__18918__$1,expr,f,args,env){
return (function (p1__18913_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18913_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18918,map__18918__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18918,map__18918__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18918,map__18918__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18918,map__18918__$1,expr,f,args,env){
return (function (p1__18914_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18914_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18918,map__18918__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__18918,map__18918__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(1),null);
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_19017 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args),".",pimpl_19017,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_19021 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_19021,args)),(((mfa_19021 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_19021,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__8074__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
var or__8074__auto____$1 = js_QMARK_;
if(or__8074__auto____$1){
return or__8074__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797)))){
var fprop_19030 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(".cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_19030," ? ",f__$1,fprop_19030,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(",f__$1,fprop_19030," ? ",f__$1,fprop_19030,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__19036){
var map__19037 = p__19036;
var map__19037__$1 = ((((!((map__19037 == null)))?((((map__19037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19037):map__19037);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19037__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__19043){
var map__19044 = p__19043;
var map__19044__$1 = ((((!((map__19044 == null)))?((((map__19044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19044):map__19044);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19044__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__19065_19095 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps)));
var chunk__19066_19096 = null;
var count__19067_19097 = (0);
var i__19068_19098 = (0);
while(true){
if((i__19068_19098 < count__19067_19097)){
var lib_19101 = chunk__19066_19096.cljs$core$IIndexed$_nth$arity$2(null,i__19068_19098);
if(cljs.core.truth_((function (){var and__8062__auto__ = cljs.analyzer.foreign_dep_QMARK_(lib_19101);
if(and__8062__auto__){
var temp__5278__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(temp__5278__auto__)){
var map__19075 = temp__5278__auto__;
var map__19075__$1 = ((((!((map__19075 == null)))?((((map__19075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19075):map__19075);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19075__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
return !(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478)));
} else {
return null;
}
} else {
return and__8062__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var or__8074__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19101),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19101),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8074__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19101),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19101),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19101),"');"], 0));

}
}
}

var G__19109 = seq__19065_19095;
var G__19110 = chunk__19066_19096;
var G__19111 = count__19067_19097;
var G__19112 = (i__19068_19098 + (1));
seq__19065_19095 = G__19109;
chunk__19066_19096 = G__19110;
count__19067_19097 = G__19111;
i__19068_19098 = G__19112;
continue;
} else {
var temp__5278__auto___19113 = cljs.core.seq(seq__19065_19095);
if(temp__5278__auto___19113){
var seq__19065_19114__$1 = temp__5278__auto___19113;
if(cljs.core.chunked_seq_QMARK_(seq__19065_19114__$1)){
var c__8986__auto___19115 = cljs.core.chunk_first(seq__19065_19114__$1);
var G__19116 = cljs.core.chunk_rest(seq__19065_19114__$1);
var G__19117 = c__8986__auto___19115;
var G__19118 = cljs.core.count(c__8986__auto___19115);
var G__19119 = (0);
seq__19065_19095 = G__19116;
chunk__19066_19096 = G__19117;
count__19067_19097 = G__19118;
i__19068_19098 = G__19119;
continue;
} else {
var lib_19120 = cljs.core.first(seq__19065_19114__$1);
if(cljs.core.truth_((function (){var and__8062__auto__ = cljs.analyzer.foreign_dep_QMARK_(lib_19120);
if(and__8062__auto__){
var temp__5278__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.truth_(temp__5278__auto____$1)){
var map__19086 = temp__5278__auto____$1;
var map__19086__$1 = ((((!((map__19086 == null)))?((((map__19086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19086):map__19086);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19086__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
return !(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478)));
} else {
return null;
}
} else {
return and__8062__auto__;
}
})())){
} else {
if(cljs.core.truth_((function (){var or__8074__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19120),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19120),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__8074__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19120),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19120),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19120),"');"], 0));

}
}
}

var G__19130 = cljs.core.next(seq__19065_19114__$1);
var G__19131 = null;
var G__19132 = (0);
var G__19133 = (0);
seq__19065_19095 = G__19130;
chunk__19066_19096 = G__19131;
count__19067_19097 = G__19132;
i__19068_19098 = G__19133;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__19139){
var map__19140 = p__19139;
var map__19140__$1 = ((((!((map__19140 == null)))?((((map__19140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19140):map__19140);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19140__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19140__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19140__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19140__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19140__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19140__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19140__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__19146){
var map__19147 = p__19146;
var map__19147__$1 = ((((!((map__19147 == null)))?((((map__19147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19147):map__19147);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19147__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__19171){
var map__19172 = p__19171;
var map__19172__$1 = ((((!((map__19172 == null)))?((((map__19172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19172):map__19172);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19172__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19172__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19172__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19172__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19172__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__19184_19239 = cljs.core.seq(protocols);
var chunk__19185_19240 = null;
var count__19186_19241 = (0);
var i__19187_19242 = (0);
while(true){
if((i__19187_19242 < count__19186_19241)){
var protocol_19243 = chunk__19185_19240.cljs$core$IIndexed$_nth$arity$2(null,i__19187_19242);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19243)].join('')),"}"], 0));

var G__19244 = seq__19184_19239;
var G__19245 = chunk__19185_19240;
var G__19246 = count__19186_19241;
var G__19247 = (i__19187_19242 + (1));
seq__19184_19239 = G__19244;
chunk__19185_19240 = G__19245;
count__19186_19241 = G__19246;
i__19187_19242 = G__19247;
continue;
} else {
var temp__5278__auto___19248 = cljs.core.seq(seq__19184_19239);
if(temp__5278__auto___19248){
var seq__19184_19249__$1 = temp__5278__auto___19248;
if(cljs.core.chunked_seq_QMARK_(seq__19184_19249__$1)){
var c__8986__auto___19250 = cljs.core.chunk_first(seq__19184_19249__$1);
var G__19251 = cljs.core.chunk_rest(seq__19184_19249__$1);
var G__19252 = c__8986__auto___19250;
var G__19253 = cljs.core.count(c__8986__auto___19250);
var G__19254 = (0);
seq__19184_19239 = G__19251;
chunk__19185_19240 = G__19252;
count__19186_19241 = G__19253;
i__19187_19242 = G__19254;
continue;
} else {
var protocol_19255 = cljs.core.first(seq__19184_19249__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19255)].join('')),"}"], 0));

var G__19256 = cljs.core.next(seq__19184_19249__$1);
var G__19257 = null;
var G__19258 = (0);
var G__19259 = (0);
seq__19184_19239 = G__19256;
chunk__19185_19240 = G__19257;
count__19186_19241 = G__19258;
i__19187_19242 = G__19259;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__19188_19260 = cljs.core.seq(fields__$1);
var chunk__19189_19261 = null;
var count__19190_19262 = (0);
var i__19191_19263 = (0);
while(true){
if((i__19191_19263 < count__19190_19262)){
var fld_19264 = chunk__19189_19261.cljs$core$IIndexed$_nth$arity$2(null,i__19191_19263);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_19264," = ",fld_19264,";"], 0));

var G__19265 = seq__19188_19260;
var G__19266 = chunk__19189_19261;
var G__19267 = count__19190_19262;
var G__19268 = (i__19191_19263 + (1));
seq__19188_19260 = G__19265;
chunk__19189_19261 = G__19266;
count__19190_19262 = G__19267;
i__19191_19263 = G__19268;
continue;
} else {
var temp__5278__auto___19269 = cljs.core.seq(seq__19188_19260);
if(temp__5278__auto___19269){
var seq__19188_19270__$1 = temp__5278__auto___19269;
if(cljs.core.chunked_seq_QMARK_(seq__19188_19270__$1)){
var c__8986__auto___19271 = cljs.core.chunk_first(seq__19188_19270__$1);
var G__19272 = cljs.core.chunk_rest(seq__19188_19270__$1);
var G__19273 = c__8986__auto___19271;
var G__19274 = cljs.core.count(c__8986__auto___19271);
var G__19275 = (0);
seq__19188_19260 = G__19272;
chunk__19189_19261 = G__19273;
count__19190_19262 = G__19274;
i__19191_19263 = G__19275;
continue;
} else {
var fld_19276 = cljs.core.first(seq__19188_19270__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_19276," = ",fld_19276,";"], 0));

var G__19277 = cljs.core.next(seq__19188_19270__$1);
var G__19278 = null;
var G__19279 = (0);
var G__19280 = (0);
seq__19188_19260 = G__19277;
chunk__19189_19261 = G__19278;
count__19190_19262 = G__19279;
i__19191_19263 = G__19280;
continue;
}
} else {
}
}
break;
}

var seq__19192_19281 = cljs.core.seq(pmasks);
var chunk__19197_19282 = null;
var count__19198_19283 = (0);
var i__19199_19284 = (0);
while(true){
if((i__19199_19284 < count__19198_19283)){
var vec__19217_19285 = chunk__19197_19282.cljs$core$IIndexed$_nth$arity$2(null,i__19199_19284);
var pno_19286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217_19285,(0),null);
var pmask_19287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19217_19285,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_19286,"$ = ",pmask_19287,";"], 0));

var G__19288 = seq__19192_19281;
var G__19289 = chunk__19197_19282;
var G__19290 = count__19198_19283;
var G__19291 = (i__19199_19284 + (1));
seq__19192_19281 = G__19288;
chunk__19197_19282 = G__19289;
count__19198_19283 = G__19290;
i__19199_19284 = G__19291;
continue;
} else {
var temp__5278__auto___19292 = cljs.core.seq(seq__19192_19281);
if(temp__5278__auto___19292){
var seq__19192_19293__$1 = temp__5278__auto___19292;
if(cljs.core.chunked_seq_QMARK_(seq__19192_19293__$1)){
var c__8986__auto___19294 = cljs.core.chunk_first(seq__19192_19293__$1);
var G__19295 = cljs.core.chunk_rest(seq__19192_19293__$1);
var G__19296 = c__8986__auto___19294;
var G__19297 = cljs.core.count(c__8986__auto___19294);
var G__19298 = (0);
seq__19192_19281 = G__19295;
chunk__19197_19282 = G__19296;
count__19198_19283 = G__19297;
i__19199_19284 = G__19298;
continue;
} else {
var vec__19226_19299 = cljs.core.first(seq__19192_19293__$1);
var pno_19300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19226_19299,(0),null);
var pmask_19301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19226_19299,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_19300,"$ = ",pmask_19301,";"], 0));

var G__19302 = cljs.core.next(seq__19192_19293__$1);
var G__19303 = null;
var G__19304 = (0);
var G__19305 = (0);
seq__19192_19281 = G__19302;
chunk__19197_19282 = G__19303;
count__19198_19283 = G__19304;
i__19199_19284 = G__19305;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__19306){
var map__19307 = p__19306;
var map__19307__$1 = ((((!((map__19307 == null)))?((((map__19307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19307):map__19307);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19307__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19307__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19307__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19307__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19307__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["* @constructor"], 0));

var seq__19309_19327 = cljs.core.seq(protocols);
var chunk__19310_19328 = null;
var count__19311_19329 = (0);
var i__19312_19330 = (0);
while(true){
if((i__19312_19330 < count__19311_19329)){
var protocol_19331 = chunk__19310_19328.cljs$core$IIndexed$_nth$arity$2(null,i__19312_19330);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19331)].join('')),"}"], 0));

var G__19332 = seq__19309_19327;
var G__19333 = chunk__19310_19328;
var G__19334 = count__19311_19329;
var G__19335 = (i__19312_19330 + (1));
seq__19309_19327 = G__19332;
chunk__19310_19328 = G__19333;
count__19311_19329 = G__19334;
i__19312_19330 = G__19335;
continue;
} else {
var temp__5278__auto___19336 = cljs.core.seq(seq__19309_19327);
if(temp__5278__auto___19336){
var seq__19309_19337__$1 = temp__5278__auto___19336;
if(cljs.core.chunked_seq_QMARK_(seq__19309_19337__$1)){
var c__8986__auto___19338 = cljs.core.chunk_first(seq__19309_19337__$1);
var G__19339 = cljs.core.chunk_rest(seq__19309_19337__$1);
var G__19340 = c__8986__auto___19338;
var G__19341 = cljs.core.count(c__8986__auto___19338);
var G__19342 = (0);
seq__19309_19327 = G__19339;
chunk__19310_19328 = G__19340;
count__19311_19329 = G__19341;
i__19312_19330 = G__19342;
continue;
} else {
var protocol_19343 = cljs.core.first(seq__19309_19337__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19343)].join('')),"}"], 0));

var G__19344 = cljs.core.next(seq__19309_19337__$1);
var G__19345 = null;
var G__19346 = (0);
var G__19347 = (0);
seq__19309_19327 = G__19344;
chunk__19310_19328 = G__19345;
count__19311_19329 = G__19346;
i__19312_19330 = G__19347;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__19313_19348 = cljs.core.seq(fields__$1);
var chunk__19314_19349 = null;
var count__19315_19350 = (0);
var i__19316_19351 = (0);
while(true){
if((i__19316_19351 < count__19315_19350)){
var fld_19352 = chunk__19314_19349.cljs$core$IIndexed$_nth$arity$2(null,i__19316_19351);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_19352," = ",fld_19352,";"], 0));

var G__19353 = seq__19313_19348;
var G__19354 = chunk__19314_19349;
var G__19355 = count__19315_19350;
var G__19356 = (i__19316_19351 + (1));
seq__19313_19348 = G__19353;
chunk__19314_19349 = G__19354;
count__19315_19350 = G__19355;
i__19316_19351 = G__19356;
continue;
} else {
var temp__5278__auto___19357 = cljs.core.seq(seq__19313_19348);
if(temp__5278__auto___19357){
var seq__19313_19358__$1 = temp__5278__auto___19357;
if(cljs.core.chunked_seq_QMARK_(seq__19313_19358__$1)){
var c__8986__auto___19359 = cljs.core.chunk_first(seq__19313_19358__$1);
var G__19360 = cljs.core.chunk_rest(seq__19313_19358__$1);
var G__19361 = c__8986__auto___19359;
var G__19362 = cljs.core.count(c__8986__auto___19359);
var G__19363 = (0);
seq__19313_19348 = G__19360;
chunk__19314_19349 = G__19361;
count__19315_19350 = G__19362;
i__19316_19351 = G__19363;
continue;
} else {
var fld_19364 = cljs.core.first(seq__19313_19358__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.",fld_19364," = ",fld_19364,";"], 0));

var G__19365 = cljs.core.next(seq__19313_19358__$1);
var G__19366 = null;
var G__19367 = (0);
var G__19368 = (0);
seq__19313_19348 = G__19365;
chunk__19314_19349 = G__19366;
count__19315_19350 = G__19367;
i__19316_19351 = G__19368;
continue;
}
} else {
}
}
break;
}

var seq__19317_19369 = cljs.core.seq(pmasks);
var chunk__19318_19370 = null;
var count__19319_19371 = (0);
var i__19320_19372 = (0);
while(true){
if((i__19320_19372 < count__19319_19371)){
var vec__19321_19373 = chunk__19318_19370.cljs$core$IIndexed$_nth$arity$2(null,i__19320_19372);
var pno_19374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19321_19373,(0),null);
var pmask_19375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19321_19373,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_19374,"$ = ",pmask_19375,";"], 0));

var G__19376 = seq__19317_19369;
var G__19377 = chunk__19318_19370;
var G__19378 = count__19319_19371;
var G__19379 = (i__19320_19372 + (1));
seq__19317_19369 = G__19376;
chunk__19318_19370 = G__19377;
count__19319_19371 = G__19378;
i__19320_19372 = G__19379;
continue;
} else {
var temp__5278__auto___19380 = cljs.core.seq(seq__19317_19369);
if(temp__5278__auto___19380){
var seq__19317_19381__$1 = temp__5278__auto___19380;
if(cljs.core.chunked_seq_QMARK_(seq__19317_19381__$1)){
var c__8986__auto___19382 = cljs.core.chunk_first(seq__19317_19381__$1);
var G__19383 = cljs.core.chunk_rest(seq__19317_19381__$1);
var G__19384 = c__8986__auto___19382;
var G__19385 = cljs.core.count(c__8986__auto___19382);
var G__19386 = (0);
seq__19317_19369 = G__19383;
chunk__19318_19370 = G__19384;
count__19319_19371 = G__19385;
i__19320_19372 = G__19386;
continue;
} else {
var vec__19324_19387 = cljs.core.first(seq__19317_19381__$1);
var pno_19388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324_19387,(0),null);
var pmask_19389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19324_19387,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["this.cljs$lang$protocol_mask$partition",pno_19388,"$ = ",pmask_19389,";"], 0));

var G__19390 = cljs.core.next(seq__19317_19381__$1);
var G__19391 = null;
var G__19392 = (0);
var G__19393 = (0);
seq__19317_19369 = G__19390;
chunk__19318_19370 = G__19391;
count__19319_19371 = G__19392;
i__19320_19372 = G__19393;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["});"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__19394){
var map__19395 = p__19394;
var map__19395__$1 = ((((!((map__19395 == null)))?((((map__19395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19395):map__19395);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19395__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19395__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19395__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19395__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19395__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__19397){
var map__19398 = p__19397;
var map__19398__$1 = ((((!((map__19398 == null)))?((((map__19398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19398):map__19398);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8062__auto__ = code;
if(cljs.core.truth_(and__8062__auto__)){
var G__19400 = clojure.string.trim(code);
var G__19401 = "/*";
return goog.string.startsWith(G__19400,G__19401);
} else {
return and__8062__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
var env__17435__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__17435__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["goog.require('cljs.core');"], 0));

var seq__19405 = cljs.core.seq(table);
var chunk__19406 = null;
var count__19407 = (0);
var i__19408 = (0);
while(true){
if((i__19408 < count__19407)){
var vec__19409 = chunk__19406.cljs$core$IIndexed$_nth$arity$2(null,i__19408);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19409,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19409,(1),null);
var ns_19415 = cljs.core.namespace(sym);
var name_19416 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot emit constant for type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__19417 = seq__19405;
var G__19418 = chunk__19406;
var G__19419 = count__19407;
var G__19420 = (i__19408 + (1));
seq__19405 = G__19417;
chunk__19406 = G__19418;
count__19407 = G__19419;
i__19408 = G__19420;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__19405);
if(temp__5278__auto__){
var seq__19405__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19405__$1)){
var c__8986__auto__ = cljs.core.chunk_first(seq__19405__$1);
var G__19421 = cljs.core.chunk_rest(seq__19405__$1);
var G__19422 = c__8986__auto__;
var G__19423 = cljs.core.count(c__8986__auto__);
var G__19424 = (0);
seq__19405 = G__19421;
chunk__19406 = G__19422;
count__19407 = G__19423;
i__19408 = G__19424;
continue;
} else {
var vec__19412 = cljs.core.first(seq__19405__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19412,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19412,(1),null);
var ns_19425 = cljs.core.namespace(sym);
var name_19426 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot emit constant for type "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";\n"], 0));

var G__19427 = cljs.core.next(seq__19405__$1);
var G__19428 = null;
var G__19429 = (0);
var G__19430 = (0);
seq__19405 = G__19427;
chunk__19406 = G__19428;
count__19407 = G__19429;
i__19408 = G__19430;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__19432 = arguments.length;
switch (G__19432) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_19437 = cljs.core.first(ks);
var vec__19433_19438 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_19437);
var top_19439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19433_19438,(0),null);
var prefix_SINGLEQUOTE__19440 = vec__19433_19438;
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_19437)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__19440) == null))){
if(!((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_19439)) || (cljs.core.contains_QMARK_(known_externs,top_19439)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__19440)),";"], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_19439);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__19440)),";"], 0));
}
} else {
}

var m_19441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_19437);
if(cljs.core.empty_QMARK_(m_19441)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__19440,m_19441,top_level,known_externs);
}

var G__19442 = cljs.core.next(ks);
ks = G__19442;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

