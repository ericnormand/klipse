// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants false}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__13450){
var vec__13451 = p__13450;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13451,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__13462 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13462,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5278__auto__)){
var name__$1 = temp__5278__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__13469 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13469,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13469,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13469,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13469,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13469,(4),null);
var vec__13472 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13472,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13472,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13472,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13472,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13472,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__8074__auto__ = source;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__8074__auto__ = line;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__8074__auto__ = col;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__8074__auto__ = name;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__13483 = segmap;
var map__13483__$1 = ((((!((map__13483 == null)))?((((map__13483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13483):map__13483);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13483__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13483__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13483__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13483__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13483__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13483,map__13483__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13483,map__13483__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13483,map__13483__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__13483,map__13483__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13483,map__13483__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__13483,map__13483__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__13492 = arguments.length;
switch (G__13492) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__13502 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__13514 = cljs.core.next(segs__$1);
var G__13515 = nrelseg;
var G__13516 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__13514;
relseg__$1 = G__13515;
result__$1 = G__13516;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13502,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13502,(1),null);
var G__13517 = (gline + (1));
var G__13518 = cljs.core.next(lines__$1);
var G__13519 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__13520 = result__$1;
gline = G__13517;
lines__$1 = G__13518;
relseg = G__13519;
result = G__13520;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__13522 = segmap;
var map__13522__$1 = ((((!((map__13522 == null)))?((((map__13522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13522):map__13522);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13522__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13522__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13522__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13522__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13522,map__13522__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13522,map__13522__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__13521_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13521_SHARP_,d__$1);
});})(map__13522,map__13522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13522,map__13522__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__13532 = arguments.length;
switch (G__13532) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__13533 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__13555 = cljs.core.next(segs__$1);
var G__13556 = nrelseg;
var G__13557 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__13555;
relseg__$1 = G__13556;
result__$1 = G__13557;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13533,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13533,(1),null);
var G__13558 = (gline + (1));
var G__13559 = cljs.core.next(lines__$1);
var G__13560 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__13561 = result__$1;
gline = G__13558;
lines__$1 = G__13559;
relseg = G__13560;
result = G__13561;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__13562){
var vec__13563 = p__13562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13563,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__13569){
var vec__13570 = p__13569;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(4),null);
var seg = vec__13570;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__13570,gcol,sidx,line,col,name,seg,relseg){
return (function (p__13573){
var vec__13574 = p__13573;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13574,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__8074__auto__ = name;
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__13570,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__8074__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5276__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5276__auto__)){
var name = temp__5276__auto__;
var idx = (function (){var temp__5276__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5276__auto____$1)){
var idx = temp__5276__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__13633 = cljs.core.seq(infos);
var chunk__13634 = null;
var count__13635 = (0);
var i__13636 = (0);
while(true){
if((i__13636 < count__13635)){
var info = chunk__13634.cljs$core$IIndexed$_nth$arity$2(null,i__13636);
var segv_13790 = info__GT_segv(info,source_idx,line,col);
var gline_13791 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13792 = cljs.core.count(cljs.core.deref(lines));
if((gline_13791 > (lc_13792 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13633,chunk__13634,count__13635,i__13636,segv_13790,gline_13791,lc_13792,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_13791 - (lc_13792 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13790], null));
});})(seq__13633,chunk__13634,count__13635,i__13636,segv_13790,gline_13791,lc_13792,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13633,chunk__13634,count__13635,i__13636,segv_13790,gline_13791,lc_13792,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13791], null),cljs.core.conj,segv_13790);
});})(seq__13633,chunk__13634,count__13635,i__13636,segv_13790,gline_13791,lc_13792,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13793 = seq__13633;
var G__13794 = chunk__13634;
var G__13795 = count__13635;
var G__13796 = (i__13636 + (1));
seq__13633 = G__13793;
chunk__13634 = G__13794;
count__13635 = G__13795;
i__13636 = G__13796;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq(seq__13633);
if(temp__5278__auto__){
var seq__13633__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13633__$1)){
var c__8986__auto__ = cljs.core.chunk_first(seq__13633__$1);
var G__13797 = cljs.core.chunk_rest(seq__13633__$1);
var G__13798 = c__8986__auto__;
var G__13799 = cljs.core.count(c__8986__auto__);
var G__13800 = (0);
seq__13633 = G__13797;
chunk__13634 = G__13798;
count__13635 = G__13799;
i__13636 = G__13800;
continue;
} else {
var info = cljs.core.first(seq__13633__$1);
var segv_13801 = info__GT_segv(info,source_idx,line,col);
var gline_13802 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13803 = cljs.core.count(cljs.core.deref(lines));
if((gline_13802 > (lc_13803 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13633,chunk__13634,count__13635,i__13636,segv_13801,gline_13802,lc_13803,info,seq__13633__$1,temp__5278__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_13802 - (lc_13803 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13801], null));
});})(seq__13633,chunk__13634,count__13635,i__13636,segv_13801,gline_13802,lc_13803,info,seq__13633__$1,temp__5278__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13633,chunk__13634,count__13635,i__13636,segv_13801,gline_13802,lc_13803,info,seq__13633__$1,temp__5278__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13802], null),cljs.core.conj,segv_13801);
});})(seq__13633,chunk__13634,count__13635,i__13636,segv_13801,gline_13802,lc_13803,info,seq__13633__$1,temp__5278__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13804 = cljs.core.next(seq__13633__$1);
var G__13805 = null;
var G__13806 = (0);
var G__13807 = (0);
seq__13633 = G__13804;
chunk__13634 = G__13805;
count__13635 = G__13806;
i__13636 = G__13807;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__13644_13808 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__13645_13809 = null;
var count__13646_13810 = (0);
var i__13647_13811 = (0);
while(true){
if((i__13647_13811 < count__13646_13810)){
var vec__13648_13818 = chunk__13645_13809.cljs$core$IIndexed$_nth$arity$2(null,i__13647_13811);
var source_idx_13819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13648_13818,(0),null);
var vec__13651_13820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13648_13818,(1),null);
var __13821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13651_13820,(0),null);
var lines_13822__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13651_13820,(1),null);
var seq__13654_13823 = cljs.core.seq(lines_13822__$1);
var chunk__13655_13824 = null;
var count__13656_13825 = (0);
var i__13657_13826 = (0);
while(true){
if((i__13657_13826 < count__13656_13825)){
var vec__13664_13828 = chunk__13655_13824.cljs$core$IIndexed$_nth$arity$2(null,i__13657_13826);
var line_13829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13664_13828,(0),null);
var cols_13830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13664_13828,(1),null);
var seq__13667_13831 = cljs.core.seq(cols_13830);
var chunk__13668_13832 = null;
var count__13669_13833 = (0);
var i__13670_13834 = (0);
while(true){
if((i__13670_13834 < count__13669_13833)){
var vec__13671_13835 = chunk__13668_13832.cljs$core$IIndexed$_nth$arity$2(null,i__13670_13834);
var col_13836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13671_13835,(0),null);
var infos_13837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13671_13835,(1),null);
encode_cols(infos_13837,source_idx_13819,line_13829,col_13836);

var G__13841 = seq__13667_13831;
var G__13842 = chunk__13668_13832;
var G__13843 = count__13669_13833;
var G__13844 = (i__13670_13834 + (1));
seq__13667_13831 = G__13841;
chunk__13668_13832 = G__13842;
count__13669_13833 = G__13843;
i__13670_13834 = G__13844;
continue;
} else {
var temp__5278__auto___13845 = cljs.core.seq(seq__13667_13831);
if(temp__5278__auto___13845){
var seq__13667_13846__$1 = temp__5278__auto___13845;
if(cljs.core.chunked_seq_QMARK_(seq__13667_13846__$1)){
var c__8986__auto___13849 = cljs.core.chunk_first(seq__13667_13846__$1);
var G__13851 = cljs.core.chunk_rest(seq__13667_13846__$1);
var G__13852 = c__8986__auto___13849;
var G__13853 = cljs.core.count(c__8986__auto___13849);
var G__13854 = (0);
seq__13667_13831 = G__13851;
chunk__13668_13832 = G__13852;
count__13669_13833 = G__13853;
i__13670_13834 = G__13854;
continue;
} else {
var vec__13674_13855 = cljs.core.first(seq__13667_13846__$1);
var col_13856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13674_13855,(0),null);
var infos_13857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13674_13855,(1),null);
encode_cols(infos_13857,source_idx_13819,line_13829,col_13856);

var G__13858 = cljs.core.next(seq__13667_13846__$1);
var G__13859 = null;
var G__13860 = (0);
var G__13861 = (0);
seq__13667_13831 = G__13858;
chunk__13668_13832 = G__13859;
count__13669_13833 = G__13860;
i__13670_13834 = G__13861;
continue;
}
} else {
}
}
break;
}

var G__13862 = seq__13654_13823;
var G__13863 = chunk__13655_13824;
var G__13864 = count__13656_13825;
var G__13865 = (i__13657_13826 + (1));
seq__13654_13823 = G__13862;
chunk__13655_13824 = G__13863;
count__13656_13825 = G__13864;
i__13657_13826 = G__13865;
continue;
} else {
var temp__5278__auto___13866 = cljs.core.seq(seq__13654_13823);
if(temp__5278__auto___13866){
var seq__13654_13867__$1 = temp__5278__auto___13866;
if(cljs.core.chunked_seq_QMARK_(seq__13654_13867__$1)){
var c__8986__auto___13868 = cljs.core.chunk_first(seq__13654_13867__$1);
var G__13870 = cljs.core.chunk_rest(seq__13654_13867__$1);
var G__13871 = c__8986__auto___13868;
var G__13872 = cljs.core.count(c__8986__auto___13868);
var G__13873 = (0);
seq__13654_13823 = G__13870;
chunk__13655_13824 = G__13871;
count__13656_13825 = G__13872;
i__13657_13826 = G__13873;
continue;
} else {
var vec__13687_13874 = cljs.core.first(seq__13654_13867__$1);
var line_13875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687_13874,(0),null);
var cols_13876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687_13874,(1),null);
var seq__13694_13877 = cljs.core.seq(cols_13876);
var chunk__13695_13878 = null;
var count__13696_13879 = (0);
var i__13697_13880 = (0);
while(true){
if((i__13697_13880 < count__13696_13879)){
var vec__13698_13881 = chunk__13695_13878.cljs$core$IIndexed$_nth$arity$2(null,i__13697_13880);
var col_13882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698_13881,(0),null);
var infos_13883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13698_13881,(1),null);
encode_cols(infos_13883,source_idx_13819,line_13875,col_13882);

var G__13884 = seq__13694_13877;
var G__13885 = chunk__13695_13878;
var G__13886 = count__13696_13879;
var G__13887 = (i__13697_13880 + (1));
seq__13694_13877 = G__13884;
chunk__13695_13878 = G__13885;
count__13696_13879 = G__13886;
i__13697_13880 = G__13887;
continue;
} else {
var temp__5278__auto___13888__$1 = cljs.core.seq(seq__13694_13877);
if(temp__5278__auto___13888__$1){
var seq__13694_13889__$1 = temp__5278__auto___13888__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13694_13889__$1)){
var c__8986__auto___13890 = cljs.core.chunk_first(seq__13694_13889__$1);
var G__13891 = cljs.core.chunk_rest(seq__13694_13889__$1);
var G__13892 = c__8986__auto___13890;
var G__13893 = cljs.core.count(c__8986__auto___13890);
var G__13894 = (0);
seq__13694_13877 = G__13891;
chunk__13695_13878 = G__13892;
count__13696_13879 = G__13893;
i__13697_13880 = G__13894;
continue;
} else {
var vec__13704_13895 = cljs.core.first(seq__13694_13889__$1);
var col_13896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13704_13895,(0),null);
var infos_13897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13704_13895,(1),null);
encode_cols(infos_13897,source_idx_13819,line_13875,col_13896);

var G__13898 = cljs.core.next(seq__13694_13889__$1);
var G__13899 = null;
var G__13900 = (0);
var G__13901 = (0);
seq__13694_13877 = G__13898;
chunk__13695_13878 = G__13899;
count__13696_13879 = G__13900;
i__13697_13880 = G__13901;
continue;
}
} else {
}
}
break;
}

var G__13905 = cljs.core.next(seq__13654_13867__$1);
var G__13906 = null;
var G__13907 = (0);
var G__13908 = (0);
seq__13654_13823 = G__13905;
chunk__13655_13824 = G__13906;
count__13656_13825 = G__13907;
i__13657_13826 = G__13908;
continue;
}
} else {
}
}
break;
}

var G__13909 = seq__13644_13808;
var G__13910 = chunk__13645_13809;
var G__13911 = count__13646_13810;
var G__13912 = (i__13647_13811 + (1));
seq__13644_13808 = G__13909;
chunk__13645_13809 = G__13910;
count__13646_13810 = G__13911;
i__13647_13811 = G__13912;
continue;
} else {
var temp__5278__auto___13913 = cljs.core.seq(seq__13644_13808);
if(temp__5278__auto___13913){
var seq__13644_13914__$1 = temp__5278__auto___13913;
if(cljs.core.chunked_seq_QMARK_(seq__13644_13914__$1)){
var c__8986__auto___13915 = cljs.core.chunk_first(seq__13644_13914__$1);
var G__13916 = cljs.core.chunk_rest(seq__13644_13914__$1);
var G__13917 = c__8986__auto___13915;
var G__13918 = cljs.core.count(c__8986__auto___13915);
var G__13919 = (0);
seq__13644_13808 = G__13916;
chunk__13645_13809 = G__13917;
count__13646_13810 = G__13918;
i__13647_13811 = G__13919;
continue;
} else {
var vec__13710_13920 = cljs.core.first(seq__13644_13914__$1);
var source_idx_13921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710_13920,(0),null);
var vec__13713_13922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13710_13920,(1),null);
var __13923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13713_13922,(0),null);
var lines_13924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13713_13922,(1),null);
var seq__13716_13925 = cljs.core.seq(lines_13924__$1);
var chunk__13717_13926 = null;
var count__13718_13927 = (0);
var i__13719_13928 = (0);
while(true){
if((i__13719_13928 < count__13718_13927)){
var vec__13720_13929 = chunk__13717_13926.cljs$core$IIndexed$_nth$arity$2(null,i__13719_13928);
var line_13930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720_13929,(0),null);
var cols_13931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720_13929,(1),null);
var seq__13723_13936 = cljs.core.seq(cols_13931);
var chunk__13724_13937 = null;
var count__13725_13938 = (0);
var i__13726_13939 = (0);
while(true){
if((i__13726_13939 < count__13725_13938)){
var vec__13727_13940 = chunk__13724_13937.cljs$core$IIndexed$_nth$arity$2(null,i__13726_13939);
var col_13941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727_13940,(0),null);
var infos_13942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727_13940,(1),null);
encode_cols(infos_13942,source_idx_13921,line_13930,col_13941);

var G__13943 = seq__13723_13936;
var G__13944 = chunk__13724_13937;
var G__13945 = count__13725_13938;
var G__13946 = (i__13726_13939 + (1));
seq__13723_13936 = G__13943;
chunk__13724_13937 = G__13944;
count__13725_13938 = G__13945;
i__13726_13939 = G__13946;
continue;
} else {
var temp__5278__auto___13947__$1 = cljs.core.seq(seq__13723_13936);
if(temp__5278__auto___13947__$1){
var seq__13723_13948__$1 = temp__5278__auto___13947__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13723_13948__$1)){
var c__8986__auto___13949 = cljs.core.chunk_first(seq__13723_13948__$1);
var G__13950 = cljs.core.chunk_rest(seq__13723_13948__$1);
var G__13951 = c__8986__auto___13949;
var G__13952 = cljs.core.count(c__8986__auto___13949);
var G__13953 = (0);
seq__13723_13936 = G__13950;
chunk__13724_13937 = G__13951;
count__13725_13938 = G__13952;
i__13726_13939 = G__13953;
continue;
} else {
var vec__13732_13954 = cljs.core.first(seq__13723_13948__$1);
var col_13955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13732_13954,(0),null);
var infos_13956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13732_13954,(1),null);
encode_cols(infos_13956,source_idx_13921,line_13930,col_13955);

var G__13963 = cljs.core.next(seq__13723_13948__$1);
var G__13964 = null;
var G__13965 = (0);
var G__13966 = (0);
seq__13723_13936 = G__13963;
chunk__13724_13937 = G__13964;
count__13725_13938 = G__13965;
i__13726_13939 = G__13966;
continue;
}
} else {
}
}
break;
}

var G__13967 = seq__13716_13925;
var G__13968 = chunk__13717_13926;
var G__13969 = count__13718_13927;
var G__13970 = (i__13719_13928 + (1));
seq__13716_13925 = G__13967;
chunk__13717_13926 = G__13968;
count__13718_13927 = G__13969;
i__13719_13928 = G__13970;
continue;
} else {
var temp__5278__auto___13971__$1 = cljs.core.seq(seq__13716_13925);
if(temp__5278__auto___13971__$1){
var seq__13716_13972__$1 = temp__5278__auto___13971__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13716_13972__$1)){
var c__8986__auto___13973 = cljs.core.chunk_first(seq__13716_13972__$1);
var G__13974 = cljs.core.chunk_rest(seq__13716_13972__$1);
var G__13975 = c__8986__auto___13973;
var G__13976 = cljs.core.count(c__8986__auto___13973);
var G__13977 = (0);
seq__13716_13925 = G__13974;
chunk__13717_13926 = G__13975;
count__13718_13927 = G__13976;
i__13719_13928 = G__13977;
continue;
} else {
var vec__13758_13978 = cljs.core.first(seq__13716_13972__$1);
var line_13979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758_13978,(0),null);
var cols_13980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758_13978,(1),null);
var seq__13761_13981 = cljs.core.seq(cols_13980);
var chunk__13762_13982 = null;
var count__13763_13983 = (0);
var i__13764_13984 = (0);
while(true){
if((i__13764_13984 < count__13763_13983)){
var vec__13766_13985 = chunk__13762_13982.cljs$core$IIndexed$_nth$arity$2(null,i__13764_13984);
var col_13986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766_13985,(0),null);
var infos_13987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766_13985,(1),null);
encode_cols(infos_13987,source_idx_13921,line_13979,col_13986);

var G__13988 = seq__13761_13981;
var G__13989 = chunk__13762_13982;
var G__13990 = count__13763_13983;
var G__13991 = (i__13764_13984 + (1));
seq__13761_13981 = G__13988;
chunk__13762_13982 = G__13989;
count__13763_13983 = G__13990;
i__13764_13984 = G__13991;
continue;
} else {
var temp__5278__auto___13992__$2 = cljs.core.seq(seq__13761_13981);
if(temp__5278__auto___13992__$2){
var seq__13761_13993__$1 = temp__5278__auto___13992__$2;
if(cljs.core.chunked_seq_QMARK_(seq__13761_13993__$1)){
var c__8986__auto___13994 = cljs.core.chunk_first(seq__13761_13993__$1);
var G__13995 = cljs.core.chunk_rest(seq__13761_13993__$1);
var G__13996 = c__8986__auto___13994;
var G__13997 = cljs.core.count(c__8986__auto___13994);
var G__13998 = (0);
seq__13761_13981 = G__13995;
chunk__13762_13982 = G__13996;
count__13763_13983 = G__13997;
i__13764_13984 = G__13998;
continue;
} else {
var vec__13774_13999 = cljs.core.first(seq__13761_13993__$1);
var col_14000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13774_13999,(0),null);
var infos_14001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13774_13999,(1),null);
encode_cols(infos_14001,source_idx_13921,line_13979,col_14000);

var G__14006 = cljs.core.next(seq__13761_13993__$1);
var G__14007 = null;
var G__14008 = (0);
var G__14009 = (0);
seq__13761_13981 = G__14006;
chunk__13762_13982 = G__14007;
count__13763_13983 = G__14008;
i__13764_13984 = G__14009;
continue;
}
} else {
}
}
break;
}

var G__14010 = cljs.core.next(seq__13716_13972__$1);
var G__14011 = null;
var G__14012 = (0);
var G__14013 = (0);
seq__13716_13925 = G__14010;
chunk__13717_13926 = G__14011;
count__13718_13927 = G__14012;
i__13719_13928 = G__14013;
continue;
}
} else {
}
}
break;
}

var G__14014 = cljs.core.next(seq__13644_13914__$1);
var G__14015 = null;
var G__14016 = (0);
var G__14017 = (0);
seq__13644_13808 = G__14014;
chunk__13645_13809 = G__14015;
count__13646_13810 = G__14016;
i__13647_13811 = G__14017;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__13780 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13629_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13629_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?rel="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13630_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__13630_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13631_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__13631_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__13785 = G__13780;
var G__13786_14019 = G__13785;
var G__13787_14020 = "sourcesContent";
var G__13788_14021 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__13786_14019,G__13787_14020,G__13788_14021);

return G__13785;
} else {
return G__13780;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__14022 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14022,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14022,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__14029 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14029,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14029,(1),null);
var G__14044 = cljs.core.next(col_map_seq);
var G__14045 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14029,col,infos,vec__14022,line,col_map){
return (function (v,p__14032){
var map__14034 = p__14032;
var map__14034__$1 = ((((!((map__14034 == null)))?((((map__14034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14034):map__14034);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14034__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14034__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14029,col,infos,vec__14022,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__14044;
new_cols = G__14045;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__14046 = cljs.core.next(line_map_seq);
var G__14047 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__14046;
new_lines = G__14047;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__14054_14165 = cljs.core.seq(reverse_map);
var chunk__14055_14166 = null;
var count__14056_14167 = (0);
var i__14057_14168 = (0);
while(true){
if((i__14057_14168 < count__14056_14167)){
var vec__14058_14169 = chunk__14055_14166.cljs$core$IIndexed$_nth$arity$2(null,i__14057_14168);
var line_14170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14058_14169,(0),null);
var columns_14171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14058_14169,(1),null);
var seq__14062_14172 = cljs.core.seq(columns_14171);
var chunk__14063_14173 = null;
var count__14064_14174 = (0);
var i__14065_14175 = (0);
while(true){
if((i__14065_14175 < count__14064_14174)){
var vec__14072_14176 = chunk__14063_14173.cljs$core$IIndexed$_nth$arity$2(null,i__14065_14175);
var column_14177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072_14176,(0),null);
var column_info_14178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072_14176,(1),null);
var seq__14075_14179 = cljs.core.seq(column_info_14178);
var chunk__14076_14180 = null;
var count__14077_14181 = (0);
var i__14078_14182 = (0);
while(true){
if((i__14078_14182 < count__14077_14181)){
var map__14079_14183 = chunk__14076_14180.cljs$core$IIndexed$_nth$arity$2(null,i__14078_14182);
var map__14079_14184__$1 = ((((!((map__14079_14183 == null)))?((((map__14079_14183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14079_14183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14079_14183):map__14079_14183);
var gline_14185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14079_14184__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14079_14184__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14079_14184__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14185], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14075_14179,chunk__14076_14180,count__14077_14181,i__14078_14182,seq__14062_14172,chunk__14063_14173,count__14064_14174,i__14065_14175,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14079_14183,map__14079_14184__$1,gline_14185,gcol_14186,name_14187,vec__14072_14176,column_14177,column_info_14178,vec__14058_14169,line_14170,columns_14171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14186], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14170,new cljs.core.Keyword(null,"col","col",-1959363084),column_14177,new cljs.core.Keyword(null,"name","name",1843675177),name_14187], null));
});})(seq__14075_14179,chunk__14076_14180,count__14077_14181,i__14078_14182,seq__14062_14172,chunk__14063_14173,count__14064_14174,i__14065_14175,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14079_14183,map__14079_14184__$1,gline_14185,gcol_14186,name_14187,vec__14072_14176,column_14177,column_info_14178,vec__14058_14169,line_14170,columns_14171,inverted))
,cljs.core.sorted_map()));

var G__14199 = seq__14075_14179;
var G__14200 = chunk__14076_14180;
var G__14201 = count__14077_14181;
var G__14202 = (i__14078_14182 + (1));
seq__14075_14179 = G__14199;
chunk__14076_14180 = G__14200;
count__14077_14181 = G__14201;
i__14078_14182 = G__14202;
continue;
} else {
var temp__5278__auto___14203 = cljs.core.seq(seq__14075_14179);
if(temp__5278__auto___14203){
var seq__14075_14204__$1 = temp__5278__auto___14203;
if(cljs.core.chunked_seq_QMARK_(seq__14075_14204__$1)){
var c__8986__auto___14205 = cljs.core.chunk_first(seq__14075_14204__$1);
var G__14206 = cljs.core.chunk_rest(seq__14075_14204__$1);
var G__14207 = c__8986__auto___14205;
var G__14208 = cljs.core.count(c__8986__auto___14205);
var G__14209 = (0);
seq__14075_14179 = G__14206;
chunk__14076_14180 = G__14207;
count__14077_14181 = G__14208;
i__14078_14182 = G__14209;
continue;
} else {
var map__14091_14210 = cljs.core.first(seq__14075_14204__$1);
var map__14091_14211__$1 = ((((!((map__14091_14210 == null)))?((((map__14091_14210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14091_14210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14091_14210):map__14091_14210);
var gline_14212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091_14211__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091_14211__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091_14211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14212], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14075_14179,chunk__14076_14180,count__14077_14181,i__14078_14182,seq__14062_14172,chunk__14063_14173,count__14064_14174,i__14065_14175,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14091_14210,map__14091_14211__$1,gline_14212,gcol_14213,name_14214,seq__14075_14204__$1,temp__5278__auto___14203,vec__14072_14176,column_14177,column_info_14178,vec__14058_14169,line_14170,columns_14171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14213], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14170,new cljs.core.Keyword(null,"col","col",-1959363084),column_14177,new cljs.core.Keyword(null,"name","name",1843675177),name_14214], null));
});})(seq__14075_14179,chunk__14076_14180,count__14077_14181,i__14078_14182,seq__14062_14172,chunk__14063_14173,count__14064_14174,i__14065_14175,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14091_14210,map__14091_14211__$1,gline_14212,gcol_14213,name_14214,seq__14075_14204__$1,temp__5278__auto___14203,vec__14072_14176,column_14177,column_info_14178,vec__14058_14169,line_14170,columns_14171,inverted))
,cljs.core.sorted_map()));

var G__14215 = cljs.core.next(seq__14075_14204__$1);
var G__14216 = null;
var G__14217 = (0);
var G__14218 = (0);
seq__14075_14179 = G__14215;
chunk__14076_14180 = G__14216;
count__14077_14181 = G__14217;
i__14078_14182 = G__14218;
continue;
}
} else {
}
}
break;
}

var G__14219 = seq__14062_14172;
var G__14220 = chunk__14063_14173;
var G__14221 = count__14064_14174;
var G__14222 = (i__14065_14175 + (1));
seq__14062_14172 = G__14219;
chunk__14063_14173 = G__14220;
count__14064_14174 = G__14221;
i__14065_14175 = G__14222;
continue;
} else {
var temp__5278__auto___14223 = cljs.core.seq(seq__14062_14172);
if(temp__5278__auto___14223){
var seq__14062_14224__$1 = temp__5278__auto___14223;
if(cljs.core.chunked_seq_QMARK_(seq__14062_14224__$1)){
var c__8986__auto___14225 = cljs.core.chunk_first(seq__14062_14224__$1);
var G__14226 = cljs.core.chunk_rest(seq__14062_14224__$1);
var G__14227 = c__8986__auto___14225;
var G__14228 = cljs.core.count(c__8986__auto___14225);
var G__14229 = (0);
seq__14062_14172 = G__14226;
chunk__14063_14173 = G__14227;
count__14064_14174 = G__14228;
i__14065_14175 = G__14229;
continue;
} else {
var vec__14098_14230 = cljs.core.first(seq__14062_14224__$1);
var column_14231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14098_14230,(0),null);
var column_info_14232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14098_14230,(1),null);
var seq__14101_14233 = cljs.core.seq(column_info_14232);
var chunk__14102_14234 = null;
var count__14103_14235 = (0);
var i__14104_14236 = (0);
while(true){
if((i__14104_14236 < count__14103_14235)){
var map__14107_14237 = chunk__14102_14234.cljs$core$IIndexed$_nth$arity$2(null,i__14104_14236);
var map__14107_14238__$1 = ((((!((map__14107_14237 == null)))?((((map__14107_14237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14107_14237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14107_14237):map__14107_14237);
var gline_14239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107_14238__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107_14238__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107_14238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14239], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14101_14233,chunk__14102_14234,count__14103_14235,i__14104_14236,seq__14062_14172,chunk__14063_14173,count__14064_14174,i__14065_14175,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14107_14237,map__14107_14238__$1,gline_14239,gcol_14240,name_14241,vec__14098_14230,column_14231,column_info_14232,seq__14062_14224__$1,temp__5278__auto___14223,vec__14058_14169,line_14170,columns_14171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14240], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14170,new cljs.core.Keyword(null,"col","col",-1959363084),column_14231,new cljs.core.Keyword(null,"name","name",1843675177),name_14241], null));
});})(seq__14101_14233,chunk__14102_14234,count__14103_14235,i__14104_14236,seq__14062_14172,chunk__14063_14173,count__14064_14174,i__14065_14175,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14107_14237,map__14107_14238__$1,gline_14239,gcol_14240,name_14241,vec__14098_14230,column_14231,column_info_14232,seq__14062_14224__$1,temp__5278__auto___14223,vec__14058_14169,line_14170,columns_14171,inverted))
,cljs.core.sorted_map()));

var G__14242 = seq__14101_14233;
var G__14243 = chunk__14102_14234;
var G__14244 = count__14103_14235;
var G__14245 = (i__14104_14236 + (1));
seq__14101_14233 = G__14242;
chunk__14102_14234 = G__14243;
count__14103_14235 = G__14244;
i__14104_14236 = G__14245;
continue;
} else {
var temp__5278__auto___14248__$1 = cljs.core.seq(seq__14101_14233);
if(temp__5278__auto___14248__$1){
var seq__14101_14249__$1 = temp__5278__auto___14248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14101_14249__$1)){
var c__8986__auto___14250 = cljs.core.chunk_first(seq__14101_14249__$1);
var G__14251 = cljs.core.chunk_rest(seq__14101_14249__$1);
var G__14252 = c__8986__auto___14250;
var G__14253 = cljs.core.count(c__8986__auto___14250);
var G__14254 = (0);
seq__14101_14233 = G__14251;
chunk__14102_14234 = G__14252;
count__14103_14235 = G__14253;
i__14104_14236 = G__14254;
continue;
} else {
var map__14114_14255 = cljs.core.first(seq__14101_14249__$1);
var map__14114_14256__$1 = ((((!((map__14114_14255 == null)))?((((map__14114_14255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14114_14255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14114_14255):map__14114_14255);
var gline_14257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14114_14256__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14114_14256__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14114_14256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14257], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14101_14233,chunk__14102_14234,count__14103_14235,i__14104_14236,seq__14062_14172,chunk__14063_14173,count__14064_14174,i__14065_14175,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14114_14255,map__14114_14256__$1,gline_14257,gcol_14258,name_14259,seq__14101_14249__$1,temp__5278__auto___14248__$1,vec__14098_14230,column_14231,column_info_14232,seq__14062_14224__$1,temp__5278__auto___14223,vec__14058_14169,line_14170,columns_14171,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14258], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14170,new cljs.core.Keyword(null,"col","col",-1959363084),column_14231,new cljs.core.Keyword(null,"name","name",1843675177),name_14259], null));
});})(seq__14101_14233,chunk__14102_14234,count__14103_14235,i__14104_14236,seq__14062_14172,chunk__14063_14173,count__14064_14174,i__14065_14175,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14114_14255,map__14114_14256__$1,gline_14257,gcol_14258,name_14259,seq__14101_14249__$1,temp__5278__auto___14248__$1,vec__14098_14230,column_14231,column_info_14232,seq__14062_14224__$1,temp__5278__auto___14223,vec__14058_14169,line_14170,columns_14171,inverted))
,cljs.core.sorted_map()));

var G__14262 = cljs.core.next(seq__14101_14249__$1);
var G__14263 = null;
var G__14264 = (0);
var G__14265 = (0);
seq__14101_14233 = G__14262;
chunk__14102_14234 = G__14263;
count__14103_14235 = G__14264;
i__14104_14236 = G__14265;
continue;
}
} else {
}
}
break;
}

var G__14266 = cljs.core.next(seq__14062_14224__$1);
var G__14267 = null;
var G__14268 = (0);
var G__14269 = (0);
seq__14062_14172 = G__14266;
chunk__14063_14173 = G__14267;
count__14064_14174 = G__14268;
i__14065_14175 = G__14269;
continue;
}
} else {
}
}
break;
}

var G__14270 = seq__14054_14165;
var G__14271 = chunk__14055_14166;
var G__14272 = count__14056_14167;
var G__14273 = (i__14057_14168 + (1));
seq__14054_14165 = G__14270;
chunk__14055_14166 = G__14271;
count__14056_14167 = G__14272;
i__14057_14168 = G__14273;
continue;
} else {
var temp__5278__auto___14274 = cljs.core.seq(seq__14054_14165);
if(temp__5278__auto___14274){
var seq__14054_14275__$1 = temp__5278__auto___14274;
if(cljs.core.chunked_seq_QMARK_(seq__14054_14275__$1)){
var c__8986__auto___14276 = cljs.core.chunk_first(seq__14054_14275__$1);
var G__14277 = cljs.core.chunk_rest(seq__14054_14275__$1);
var G__14278 = c__8986__auto___14276;
var G__14279 = cljs.core.count(c__8986__auto___14276);
var G__14280 = (0);
seq__14054_14165 = G__14277;
chunk__14055_14166 = G__14278;
count__14056_14167 = G__14279;
i__14057_14168 = G__14280;
continue;
} else {
var vec__14117_14281 = cljs.core.first(seq__14054_14275__$1);
var line_14282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14117_14281,(0),null);
var columns_14283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14117_14281,(1),null);
var seq__14120_14284 = cljs.core.seq(columns_14283);
var chunk__14121_14285 = null;
var count__14122_14286 = (0);
var i__14123_14287 = (0);
while(true){
if((i__14123_14287 < count__14122_14286)){
var vec__14124_14288 = chunk__14121_14285.cljs$core$IIndexed$_nth$arity$2(null,i__14123_14287);
var column_14289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14124_14288,(0),null);
var column_info_14290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14124_14288,(1),null);
var seq__14144_14292 = cljs.core.seq(column_info_14290);
var chunk__14145_14293 = null;
var count__14146_14294 = (0);
var i__14147_14295 = (0);
while(true){
if((i__14147_14295 < count__14146_14294)){
var map__14148_14296 = chunk__14145_14293.cljs$core$IIndexed$_nth$arity$2(null,i__14147_14295);
var map__14148_14297__$1 = ((((!((map__14148_14296 == null)))?((((map__14148_14296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14148_14296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14148_14296):map__14148_14296);
var gline_14298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14148_14297__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14148_14297__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14148_14297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14298], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14144_14292,chunk__14145_14293,count__14146_14294,i__14147_14295,seq__14120_14284,chunk__14121_14285,count__14122_14286,i__14123_14287,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14148_14296,map__14148_14297__$1,gline_14298,gcol_14299,name_14300,vec__14124_14288,column_14289,column_info_14290,vec__14117_14281,line_14282,columns_14283,seq__14054_14275__$1,temp__5278__auto___14274,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14299], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14282,new cljs.core.Keyword(null,"col","col",-1959363084),column_14289,new cljs.core.Keyword(null,"name","name",1843675177),name_14300], null));
});})(seq__14144_14292,chunk__14145_14293,count__14146_14294,i__14147_14295,seq__14120_14284,chunk__14121_14285,count__14122_14286,i__14123_14287,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14148_14296,map__14148_14297__$1,gline_14298,gcol_14299,name_14300,vec__14124_14288,column_14289,column_info_14290,vec__14117_14281,line_14282,columns_14283,seq__14054_14275__$1,temp__5278__auto___14274,inverted))
,cljs.core.sorted_map()));

var G__14306 = seq__14144_14292;
var G__14307 = chunk__14145_14293;
var G__14308 = count__14146_14294;
var G__14309 = (i__14147_14295 + (1));
seq__14144_14292 = G__14306;
chunk__14145_14293 = G__14307;
count__14146_14294 = G__14308;
i__14147_14295 = G__14309;
continue;
} else {
var temp__5278__auto___14310__$1 = cljs.core.seq(seq__14144_14292);
if(temp__5278__auto___14310__$1){
var seq__14144_14311__$1 = temp__5278__auto___14310__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14144_14311__$1)){
var c__8986__auto___14312 = cljs.core.chunk_first(seq__14144_14311__$1);
var G__14313 = cljs.core.chunk_rest(seq__14144_14311__$1);
var G__14314 = c__8986__auto___14312;
var G__14315 = cljs.core.count(c__8986__auto___14312);
var G__14316 = (0);
seq__14144_14292 = G__14313;
chunk__14145_14293 = G__14314;
count__14146_14294 = G__14315;
i__14147_14295 = G__14316;
continue;
} else {
var map__14150_14317 = cljs.core.first(seq__14144_14311__$1);
var map__14150_14318__$1 = ((((!((map__14150_14317 == null)))?((((map__14150_14317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14150_14317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14150_14317):map__14150_14317);
var gline_14319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14150_14318__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14150_14318__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14150_14318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14319], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14144_14292,chunk__14145_14293,count__14146_14294,i__14147_14295,seq__14120_14284,chunk__14121_14285,count__14122_14286,i__14123_14287,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14150_14317,map__14150_14318__$1,gline_14319,gcol_14320,name_14321,seq__14144_14311__$1,temp__5278__auto___14310__$1,vec__14124_14288,column_14289,column_info_14290,vec__14117_14281,line_14282,columns_14283,seq__14054_14275__$1,temp__5278__auto___14274,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14320], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14282,new cljs.core.Keyword(null,"col","col",-1959363084),column_14289,new cljs.core.Keyword(null,"name","name",1843675177),name_14321], null));
});})(seq__14144_14292,chunk__14145_14293,count__14146_14294,i__14147_14295,seq__14120_14284,chunk__14121_14285,count__14122_14286,i__14123_14287,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14150_14317,map__14150_14318__$1,gline_14319,gcol_14320,name_14321,seq__14144_14311__$1,temp__5278__auto___14310__$1,vec__14124_14288,column_14289,column_info_14290,vec__14117_14281,line_14282,columns_14283,seq__14054_14275__$1,temp__5278__auto___14274,inverted))
,cljs.core.sorted_map()));

var G__14338 = cljs.core.next(seq__14144_14311__$1);
var G__14339 = null;
var G__14340 = (0);
var G__14341 = (0);
seq__14144_14292 = G__14338;
chunk__14145_14293 = G__14339;
count__14146_14294 = G__14340;
i__14147_14295 = G__14341;
continue;
}
} else {
}
}
break;
}

var G__14344 = seq__14120_14284;
var G__14345 = chunk__14121_14285;
var G__14346 = count__14122_14286;
var G__14347 = (i__14123_14287 + (1));
seq__14120_14284 = G__14344;
chunk__14121_14285 = G__14345;
count__14122_14286 = G__14346;
i__14123_14287 = G__14347;
continue;
} else {
var temp__5278__auto___14348__$1 = cljs.core.seq(seq__14120_14284);
if(temp__5278__auto___14348__$1){
var seq__14120_14349__$1 = temp__5278__auto___14348__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14120_14349__$1)){
var c__8986__auto___14350 = cljs.core.chunk_first(seq__14120_14349__$1);
var G__14351 = cljs.core.chunk_rest(seq__14120_14349__$1);
var G__14352 = c__8986__auto___14350;
var G__14353 = cljs.core.count(c__8986__auto___14350);
var G__14354 = (0);
seq__14120_14284 = G__14351;
chunk__14121_14285 = G__14352;
count__14122_14286 = G__14353;
i__14123_14287 = G__14354;
continue;
} else {
var vec__14154_14355 = cljs.core.first(seq__14120_14349__$1);
var column_14356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14154_14355,(0),null);
var column_info_14357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14154_14355,(1),null);
var seq__14157_14364 = cljs.core.seq(column_info_14357);
var chunk__14158_14365 = null;
var count__14159_14366 = (0);
var i__14160_14367 = (0);
while(true){
if((i__14160_14367 < count__14159_14366)){
var map__14161_14368 = chunk__14158_14365.cljs$core$IIndexed$_nth$arity$2(null,i__14160_14367);
var map__14161_14369__$1 = ((((!((map__14161_14368 == null)))?((((map__14161_14368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14161_14368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14161_14368):map__14161_14368);
var gline_14370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161_14369__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161_14369__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14161_14369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14370], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14157_14364,chunk__14158_14365,count__14159_14366,i__14160_14367,seq__14120_14284,chunk__14121_14285,count__14122_14286,i__14123_14287,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14161_14368,map__14161_14369__$1,gline_14370,gcol_14371,name_14372,vec__14154_14355,column_14356,column_info_14357,seq__14120_14349__$1,temp__5278__auto___14348__$1,vec__14117_14281,line_14282,columns_14283,seq__14054_14275__$1,temp__5278__auto___14274,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14371], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14282,new cljs.core.Keyword(null,"col","col",-1959363084),column_14356,new cljs.core.Keyword(null,"name","name",1843675177),name_14372], null));
});})(seq__14157_14364,chunk__14158_14365,count__14159_14366,i__14160_14367,seq__14120_14284,chunk__14121_14285,count__14122_14286,i__14123_14287,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14161_14368,map__14161_14369__$1,gline_14370,gcol_14371,name_14372,vec__14154_14355,column_14356,column_info_14357,seq__14120_14349__$1,temp__5278__auto___14348__$1,vec__14117_14281,line_14282,columns_14283,seq__14054_14275__$1,temp__5278__auto___14274,inverted))
,cljs.core.sorted_map()));

var G__14379 = seq__14157_14364;
var G__14380 = chunk__14158_14365;
var G__14381 = count__14159_14366;
var G__14382 = (i__14160_14367 + (1));
seq__14157_14364 = G__14379;
chunk__14158_14365 = G__14380;
count__14159_14366 = G__14381;
i__14160_14367 = G__14382;
continue;
} else {
var temp__5278__auto___14385__$2 = cljs.core.seq(seq__14157_14364);
if(temp__5278__auto___14385__$2){
var seq__14157_14388__$1 = temp__5278__auto___14385__$2;
if(cljs.core.chunked_seq_QMARK_(seq__14157_14388__$1)){
var c__8986__auto___14389 = cljs.core.chunk_first(seq__14157_14388__$1);
var G__14390 = cljs.core.chunk_rest(seq__14157_14388__$1);
var G__14391 = c__8986__auto___14389;
var G__14392 = cljs.core.count(c__8986__auto___14389);
var G__14393 = (0);
seq__14157_14364 = G__14390;
chunk__14158_14365 = G__14391;
count__14159_14366 = G__14392;
i__14160_14367 = G__14393;
continue;
} else {
var map__14163_14394 = cljs.core.first(seq__14157_14388__$1);
var map__14163_14395__$1 = ((((!((map__14163_14394 == null)))?((((map__14163_14394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14163_14394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14163_14394):map__14163_14394);
var gline_14396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14163_14395__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14163_14395__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14163_14395__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14396], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14157_14364,chunk__14158_14365,count__14159_14366,i__14160_14367,seq__14120_14284,chunk__14121_14285,count__14122_14286,i__14123_14287,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14163_14394,map__14163_14395__$1,gline_14396,gcol_14397,name_14398,seq__14157_14388__$1,temp__5278__auto___14385__$2,vec__14154_14355,column_14356,column_info_14357,seq__14120_14349__$1,temp__5278__auto___14348__$1,vec__14117_14281,line_14282,columns_14283,seq__14054_14275__$1,temp__5278__auto___14274,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14397], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14282,new cljs.core.Keyword(null,"col","col",-1959363084),column_14356,new cljs.core.Keyword(null,"name","name",1843675177),name_14398], null));
});})(seq__14157_14364,chunk__14158_14365,count__14159_14366,i__14160_14367,seq__14120_14284,chunk__14121_14285,count__14122_14286,i__14123_14287,seq__14054_14165,chunk__14055_14166,count__14056_14167,i__14057_14168,map__14163_14394,map__14163_14395__$1,gline_14396,gcol_14397,name_14398,seq__14157_14388__$1,temp__5278__auto___14385__$2,vec__14154_14355,column_14356,column_info_14357,seq__14120_14349__$1,temp__5278__auto___14348__$1,vec__14117_14281,line_14282,columns_14283,seq__14054_14275__$1,temp__5278__auto___14274,inverted))
,cljs.core.sorted_map()));

var G__14399 = cljs.core.next(seq__14157_14388__$1);
var G__14400 = null;
var G__14401 = (0);
var G__14402 = (0);
seq__14157_14364 = G__14399;
chunk__14158_14365 = G__14400;
count__14159_14366 = G__14401;
i__14160_14367 = G__14402;
continue;
}
} else {
}
}
break;
}

var G__14403 = cljs.core.next(seq__14120_14349__$1);
var G__14404 = null;
var G__14405 = (0);
var G__14406 = (0);
seq__14120_14284 = G__14403;
chunk__14121_14285 = G__14404;
count__14122_14286 = G__14405;
i__14123_14287 = G__14406;
continue;
}
} else {
}
}
break;
}

var G__14415 = cljs.core.next(seq__14054_14275__$1);
var G__14416 = null;
var G__14417 = (0);
var G__14418 = (0);
seq__14054_14165 = G__14415;
chunk__14055_14166 = G__14416;
count__14056_14167 = G__14417;
i__14057_14168 = G__14418;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
