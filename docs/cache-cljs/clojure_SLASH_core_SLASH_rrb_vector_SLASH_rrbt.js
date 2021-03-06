// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector.rrbt');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
goog.require('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.rrbt.rrbt_concat_threshold = (33);
clojure.core.rrb_vector.rrbt.max_extra_search_steps = (2);

/**
 * @interface
 */
clojure.core.rrb_vector.rrbt.AsRRBT = function(){};

clojure.core.rrb_vector.rrbt._as_rrbt = (function clojure$core$rrb_vector$rrbt$_as_rrbt(v){
if((!((v == null))) && (!((v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 == null)))){
return v.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1(v);
} else {
var x__10157__auto__ = (((v == null))?null:v);
var m__10158__auto__ = (clojure.core.rrb_vector.rrbt._as_rrbt[goog.typeOf(x__10157__auto__)]);
if(!((m__10158__auto__ == null))){
return (m__10158__auto__.cljs$core$IFn$_invoke$arity$1 ? m__10158__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__10158__auto__.call(null,v));
} else {
var m__10158__auto____$1 = (clojure.core.rrb_vector.rrbt._as_rrbt["_"]);
if(!((m__10158__auto____$1 == null))){
return (m__10158__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__10158__auto____$1.cljs$core$IFn$_invoke$arity$1(v) : m__10158__auto____$1.call(null,v));
} else {
throw cljs.core.missing_protocol("AsRRBT.-as-rrbt",v);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ASeq}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.RRBChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2179858668;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.toString = (function (){
var self__ = this;
var coll = this;
return cljs.core.pr_str_STAR_(coll);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__15961 = self__.vec;
var G__15962 = self__.node;
var G__15963 = self__.i;
var G__15964 = (self__.off + (1));
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4(G__15961,G__15962,G__15963,G__15964) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__15961,G__15962,G__15963,G__15964));
})();
if((s == null)){
return null;
} else {
return s;
}
} else {
return coll__$1.cljs$core$IChunkedNext$_chunked_next$arity$1(null);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__9881__auto__ = self__.__hash;
if(!((h__9881__auto__ == null))){
return h__9881__auto__;
} else {
var h__9881__auto____$1 = cljs.core.hash_coll(coll__$1);
self__.__hash = h__9881__auto____$1;

return h__9881__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_sequential(coll__$1,other);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)),f);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.vec,(self__.i + self__.off),cljs.core.count(self__.vec)),f,start);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (self__.node[self__.off]);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(((self__.off + (1)) < self__.node.length)){
var s = (function (){var G__15965 = self__.vec;
var G__15966 = self__.node;
var G__15967 = self__.i;
var G__15968 = (self__.off + (1));
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4(G__15965,G__15966,G__15967,G__15968) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__15965,G__15966,G__15967,G__15968));
})();
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
} else {
return coll__$1.cljs$core$IChunkedSeq$_chunked_rest$arity$1(null);
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return coll__$1;
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.array_chunk.cljs$core$IFn$_invoke$arity$2(self__.node,self__.off);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(function (){var G__15969 = self__.vec;
var G__15970 = (self__.i + l);
var G__15971 = (0);
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(G__15969,G__15970,G__15971) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__15969,G__15970,G__15971));
})():null);
if((s == null)){
return cljs.core.List.EMPTY;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
var coll__$1 = this;
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5(self__.vec,self__.node,self__.i,self__.off,m) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m));
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var coll__$1 = this;
return cljs.core.cons(o,coll__$1);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count(self__.vec)))?(function (){var G__15972 = self__.vec;
var G__15973 = (self__.i + l);
var G__15974 = (0);
return (clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(G__15972,G__15973,G__15974) : clojure.core.rrb_vector.rrbt.rrb_chunked_seq.call(null,G__15972,G__15973,G__15974));
})():null);
if((s == null)){
return null;
} else {
return s;
}
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/RRBChunkedSeq";

clojure.core.rrb_vector.rrbt.RRBChunkedSeq.cljs$lang$ctorPrWriter = (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"clojure.core.rrb-vector.rrbt/RRBChunkedSeq");
});

clojure.core.rrb_vector.rrbt.__GT_RRBChunkedSeq = (function clojure$core$rrb_vector$rrbt$__GT_RRBChunkedSeq(vec,node,i,off,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,__hash));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq = (function clojure$core$rrb_vector$rrbt$rrb_chunked_seq(var_args){
var args15975 = [];
var len__10660__auto___15978 = arguments.length;
var i__10661__auto___15979 = (0);
while(true){
if((i__10661__auto___15979 < len__10660__auto___15978)){
args15975.push((arguments[i__10661__auto___15979]));

var G__15980 = (i__10661__auto___15979 + (1));
i__10661__auto___15979 = G__15980;
continue;
} else {
}
break;
}

var G__15977 = args15975.length;
switch (G__15977) {
case 3:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15975.length)].join('')));

}
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3 = (function (vec,i,off){
var cnt = vec.cnt;
var shift = vec.shift;
var root = vec.root;
var tail = vec.tail;
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,clojure.core.rrb_vector.trees.array_for(cnt,shift,root,tail,i),i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$4 = (function (vec,node,i,off){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,null,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$5 = (function (vec,node,i,off,meta){
return (new clojure.core.rrb_vector.rrbt.RRBChunkedSeq(vec,node,i,off,meta,null));
});

clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$lang$maxFixedArity = 5;

clojure.core.rrb_vector.rrbt.slice_right = (function clojure$core$rrb_vector$rrbt$slice_right(node,shift,end){
if((shift === (0))){
var arr = node.arr;
var new_arr = (new Array(end));
cljs.core.array_copy(arr,(0),new_arr,(0),end);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
var rngs = ((cljs.core.not(reg_QMARK_))?clojure.core.rrb_vector.nodes.ranges(node):null);
var i = (((end - (1)) >> shift) & (31));
var i__$1 = (cljs.core.truth_(reg_QMARK_)?i:(function (){var j = i;
while(true){
if((end <= (rngs[j]))){
return j;
} else {
var G__15988 = (j + (1));
j = G__15988;
continue;
}
break;
}
})());
var child_end = (cljs.core.truth_(reg_QMARK_)?(function (){var ce = cljs.core.mod(end,((1) << shift));
if((ce === (0))){
return ((1) << shift);
} else {
return ce;
}
})():(((i__$1 > (0)))?(end - (rngs[(i__$1 - (1))])):end));
var arr = node.arr;
var new_child = (function (){var G__15985 = (arr[i__$1]);
var G__15986 = (shift - (5));
var G__15987 = child_end;
return (clojure.core.rrb_vector.rrbt.slice_right.cljs$core$IFn$_invoke$arity$3 ? clojure.core.rrb_vector.rrbt.slice_right.cljs$core$IFn$_invoke$arity$3(G__15985,G__15986,G__15987) : clojure.core.rrb_vector.rrbt.slice_right.call(null,G__15985,G__15986,G__15987));
})();
var regular_child_QMARK_ = (((shift === (5)))?((32) === new_child.arr.length):clojure.core.rrb_vector.nodes.regular_QMARK_(new_child));
var new_arr = (new Array((cljs.core.truth_((function (){var and__9427__auto__ = reg_QMARK_;
if(cljs.core.truth_(and__9427__auto__)){
return regular_child_QMARK_;
} else {
return and__9427__auto__;
}
})())?(32):(33))));
var new_child_rng = (cljs.core.truth_(regular_child_QMARK_)?(function (){var m = cljs.core.mod(child_end,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(((shift === (5)))?new_child.arr.length:clojure.core.rrb_vector.nodes.last_range(new_child)));
cljs.core.array_copy(arr,(0),new_arr,(0),i__$1);

(new_arr[i__$1] = new_child);

if(cljs.core.not((function (){var and__9427__auto__ = reg_QMARK_;
if(cljs.core.truth_(and__9427__auto__)){
return regular_child_QMARK_;
} else {
return and__9427__auto__;
}
})())){
var new_rngs_15989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step_15990 = ((1) << shift);
if(cljs.core.truth_(reg_QMARK_)){
var n__10460__auto___15991 = i__$1;
var j_15992 = (0);
while(true){
if((j_15992 < n__10460__auto___15991)){
(new_rngs_15989[j_15992] = ((j_15992 + (1)) * step_15990));

var G__15993 = (j_15992 + (1));
j_15992 = G__15993;
continue;
} else {
}
break;
}
} else {
var n__10460__auto___15994 = i__$1;
var j_15995 = (0);
while(true){
if((j_15995 < n__10460__auto___15994)){
(new_rngs_15989[j_15995] = (rngs[j_15995]));

var G__15996 = (j_15995 + (1));
j_15995 = G__15996;
continue;
} else {
}
break;
}
}

(new_rngs_15989[i__$1] = ((((i__$1 > (0)))?(new_rngs_15989[(i__$1 - (1))]):(0)) + new_child_rng));

(new_rngs_15989[(32)] = (i__$1 + (1)));

(new_arr[(32)] = new_rngs_15989);
} else {
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.rrbt.slice_left = (function clojure$core$rrb_vector$rrbt$slice_left(node,shift,start,end){
if((shift === (0))){
var arr = node.arr;
var new_len = (arr.length - start);
var new_arr = (new Array(new_len));
cljs.core.array_copy(arr,start,new_arr,(0),new_len);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var reg_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(node);
var arr = node.arr;
var rngs = ((cljs.core.not(reg_QMARK_))?clojure.core.rrb_vector.nodes.ranges(node):null);
var i = ((start >> shift) & (31));
var i__$1 = (cljs.core.truth_(reg_QMARK_)?i:(function (){var j = i;
while(true){
if((start < (rngs[j]))){
return j;
} else {
var G__16005 = (j + (1));
j = G__16005;
continue;
}
break;
}
})());
var len = (cljs.core.truth_(reg_QMARK_)?(function (){var i__$2 = i__$1;
while(true){
if(((i__$2 === (32))) || (((arr[i__$2]) == null))){
return i__$2;
} else {
var G__16006 = (i__$2 + (1));
i__$2 = G__16006;
continue;
}
break;
}
})():(rngs[(32)]));
var child_start = (((i__$1 > (0)))?(start - (cljs.core.truth_(reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):start);
var child_end = (function (){var x__9784__auto__ = ((1) << shift);
var y__9785__auto__ = (((i__$1 > (0)))?(end - (cljs.core.truth_(reg_QMARK_)?(i__$1 * ((1) << shift)):(rngs[(i__$1 - (1))]))):end);
return ((x__9784__auto__ < y__9785__auto__) ? x__9784__auto__ : y__9785__auto__);
})();
var new_child = (function (){var G__16001 = (arr[i__$1]);
var G__16002 = (shift - (5));
var G__16003 = child_start;
var G__16004 = child_end;
return (clojure.core.rrb_vector.rrbt.slice_left.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.rrbt.slice_left.cljs$core$IFn$_invoke$arity$4(G__16001,G__16002,G__16003,G__16004) : clojure.core.rrb_vector.rrbt.slice_left.call(null,G__16001,G__16002,G__16003,G__16004));
})();
var new_len = (len - i__$1);
var new_len__$1 = (((new_child == null))?(new_len - (1)):new_len);
if((new_len__$1 === (0))){
return null;
} else {
if(cljs.core.truth_(reg_QMARK_)){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rng0 = (cljs.core.truth_((function (){var or__9439__auto__ = (new_child == null);
if(or__9439__auto__){
return or__9439__auto__;
} else {
var or__9439__auto____$1 = (shift === (5));
if(or__9439__auto____$1){
return or__9439__auto____$1;
} else {
return clojure.core.rrb_vector.nodes.regular_QMARK_(new_child);
}
}
})())?(((1) << shift) - ((start >> (shift - (5))) & (31))):clojure.core.rrb_vector.nodes.last_range(new_child));
var step = ((1) << shift);
var j_16007 = (0);
var r_16008 = rng0;
while(true){
if((j_16007 < new_len__$1)){
(rngs__$1[j_16007] = r_16008);

var G__16009 = (j_16007 + (1));
var G__16010 = (r_16008 + step);
j_16007 = G__16009;
r_16008 = G__16010;
continue;
} else {
}
break;
}

(rngs__$1[(new_len__$1 - (1))] = (end - start));

(rngs__$1[(32)] = new_len__$1);

cljs.core.array_copy(arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if(!((new_child == null))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = rngs__$1);

return cljs.core.__GT_VectorNode(node.edit,new_arr);
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var j_16011 = (0);
var i_16012__$2 = i__$1;
while(true){
if((j_16011 < new_len__$1)){
(new_rngs[j_16011] = ((rngs[i_16012__$2]) - start));

var G__16013 = (j_16011 + (1));
var G__16014 = (i_16012__$2 + (1));
j_16011 = G__16013;
i_16012__$2 = G__16014;
continue;
} else {
}
break;
}

(new_rngs[(32)] = new_len__$1);

cljs.core.array_copy(arr,(((new_child == null))?(i__$1 + (1)):i__$1),new_arr,(0),new_len__$1);

if(!((new_child == null))){
(new_arr[(0)] = new_child);
} else {
}

(new_arr[(32)] = new_rngs);

return cljs.core.__GT_VectorNode(node.edit,new_arr);

}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {clojure.core.rrb_vector.rrbt.AsRRBT}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.rrb_vector.protocols.PSliceableVector}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IMapEntry}
 * @implements {clojure.core.rrb_vector.rrbt.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {clojure.core.rrb_vector.protocols.PSpliceableVector}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
clojure.core.rrb_vector.rrbt.Vector = (function (cnt,shift,root,tail,meta,__hash){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2315152159;
this.cljs$lang$protocol_mask$partition1$ = 2052;
})
clojure.core.rrb_vector.rrbt.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,k,null);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this$,f,init){
var self__ = this;
var this$__$1 = this;
var i = (0);
var j = (0);
var init__$1 = init;
var arr = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,i);
var lim = (arr.length - (1));
var step = (lim + (1));
while(true){
var init__$2 = (function (){var G__16016 = init__$1;
var G__16017 = (i + j);
var G__16018 = (arr[j]);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16016,G__16017,G__16018) : f.call(null,G__16016,G__16017,G__16018));
})();
if(cljs.core.reduced_QMARK_(init__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(init__$2) : cljs.core.deref.call(null,init__$2));
} else {
if((j < lim)){
var G__16029 = i;
var G__16030 = (j + (1));
var G__16031 = init__$2;
var G__16032 = arr;
var G__16033 = lim;
var G__16034 = step;
i = G__16029;
j = G__16030;
init__$1 = G__16031;
arr = G__16032;
lim = G__16033;
step = G__16034;
continue;
} else {
var i__$1 = (i + step);
if((i__$1 < self__.cnt)){
var arr__$1 = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,i__$1);
var len = arr__$1.length;
var lim__$1 = (len - (1));
var G__16035 = i__$1;
var G__16036 = (0);
var G__16037 = init__$2;
var G__16038 = arr__$1;
var G__16039 = lim__$1;
var G__16040 = len;
i = G__16035;
j = G__16036;
init__$1 = G__16037;
arr = G__16038;
lim = G__16039;
step = G__16040;
continue;
} else {
return init__$2;
}
}
}
break;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = (self__.cnt - self__.tail.length);
if((tail_off <= i)){
return (self__.tail[(i - tail_off)]);
} else {
var i__$1 = i;
var node = self__.root;
var shift__$1 = self__.shift;
while(true){
if((shift__$1 === (0))){
var arr = node.arr;
return (arr[((i__$1 >> shift__$1) & (31))]);
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
var arr = node.arr;
var idx = ((i__$1 >> shift__$1) & (31));
var i__$2 = i__$1;
var node__$1 = (arr[idx]);
var shift__$2 = (shift__$1 - (5));
while(true){
var arr__$1 = node__$1.arr;
var idx__$1 = ((i__$2 >> shift__$2) & (31));
if((shift__$2 === (0))){
return (arr__$1[idx__$1]);
} else {
var G__16041 = i__$2;
var G__16042 = (arr__$1[idx__$1]);
var G__16043 = (shift__$2 - (5));
i__$2 = G__16041;
node__$1 = G__16042;
shift__$2 = G__16043;
continue;
}
break;
}
} else {
var arr = node.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges(node);
var idx = (function (){var j = ((i__$1 >> shift__$1) & (31));
while(true){
if((i__$1 < (rngs[j]))){
return j;
} else {
var G__16044 = (j + (1));
j = G__16044;
continue;
}
break;
}
})();
var i__$2 = (((idx === (0)))?i__$1:(i__$1 - (rngs[(idx - (1))])));
var G__16045 = i__$2;
var G__16046 = (arr[idx]);
var G__16047 = (shift__$1 - (5));
i__$1 = G__16045;
node = G__16046;
shift__$1 = G__16047;
continue;
}
}
break;
}
}
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if(((i >= (0))) && ((i < self__.cnt))){
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,i);
} else {
return not_found;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,this$__$1);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
if((i >= tail_off)){
var new_tail = (new Array(self__.tail.length));
var idx = (i - tail_off);
cljs.core.array_copy(self__.tail,(0),new_tail,(0),self__.tail.length);

(new_tail[idx] = val);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,clojure.core.rrb_vector.trees.do_assoc(self__.shift,self__.root,i,val),self__.tail,self__.meta,null));
}
} else {
if((i === self__.cnt)){
return this$__$1.cljs$core$ICollection$_conj$arity$2(null,val);
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(0));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(1));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return this$__$1.cljs$core$IIndexed$_nth$arity$2(null,(self__.cnt - (1)));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
} else {
if((self__.tail.length > (1))){
var new_tail = (new Array((self__.tail.length - (1))));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),new_tail.length);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var new_tail = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var root_cnt = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
var new_root = clojure.core.rrb_vector.trees.pop_tail(self__.shift,root_cnt,self__.root.edit,self__.root);
if((new_root == null)){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
if(((self__.shift > (5))) && (((new_root.arr[(1)]) == null))){
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),(self__.shift - (5)),(new_root.arr[(0)]),new_tail,self__.meta,null));
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt - (1)),self__.shift,new_root,new_tail,self__.meta,null));

}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt > (0))){
return (new cljs.core.RSeq(this$__$1,(self__.cnt - (1)),null));
} else {
return null;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__9881__auto__ = self__.__hash;
if(!((h__9881__auto__ == null))){
return h__9881__auto__;
} else {
var h__9881__auto____$1 = cljs.core.hash_coll(this$__$1);
self__.__hash = h__9881__auto____$1;

return h__9881__auto____$1;
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__16019 = self__.cnt;
var G__16020 = self__.shift;
var G__16021 = clojure.core.rrb_vector.transients.editable_root(self__.root);
var G__16022 = clojure.core.rrb_vector.transients.editable_tail(self__.tail);
var G__16023 = self__.tail.length;
return (clojure.core.rrb_vector.rrbt.__GT_Transient.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.rrbt.__GT_Transient.cljs$core$IFn$_invoke$arity$5(G__16019,G__16020,G__16021,G__16022,G__16023) : clojure.core.rrb_vector.rrbt.__GT_Transient.call(null,G__16019,G__16020,G__16021,G__16022,G__16023));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,self__.meta);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSliceableVector$_slicev$arity$3 = (function (this$,start,end){
var self__ = this;
var this$__$1 = this;
var new_cnt = (end - start);
if(((start < (0))) || ((end > self__.cnt))){
throw (new Error("vector index out of bounds"));
} else {
if((start === end)){
return cljs.core.empty(this$__$1);
} else {
if((start > end)){
throw (new Error("start index greater than end index"));
} else {
var tail_off = clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail);
if((start >= tail_off)){
var new_tail = (new Array(new_cnt));
cljs.core.array_copy(self__.tail,(start - tail_off),new_tail,(0),new_cnt);

return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var tail_cut_QMARK_ = (end > tail_off);
var new_root = ((tail_cut_QMARK_)?self__.root:clojure.core.rrb_vector.rrbt.slice_right(self__.root,self__.shift,end));
var new_root__$1 = (((start === (0)))?new_root:clojure.core.rrb_vector.rrbt.slice_left(new_root,self__.shift,start,(function (){var x__9784__auto__ = end;
var y__9785__auto__ = tail_off;
return ((x__9784__auto__ < y__9785__auto__) ? x__9784__auto__ : y__9785__auto__);
})()));
var new_tail = ((tail_cut_QMARK_)?(function (){var new_len = (end - tail_off);
var new_tail = (new Array(new_len));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),new_len);

return new_tail;
})():clojure.core.rrb_vector.trees.array_for(new_cnt,self__.shift,new_root__$1,[],(new_cnt - (1))));
var new_root__$2 = ((tail_cut_QMARK_)?new_root__$1:clojure.core.rrb_vector.trees.pop_tail(self__.shift,new_cnt,new_root__$1.edit,new_root__$1));
if((new_root__$2 == null)){
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,(5),clojure.core.rrb_vector.nodes.empty_node,new_tail,self__.meta,null));
} else {
var r = new_root__$2;
var s = self__.shift;
while(true){
if(((s > (5))) && (((r.arr[(1)]) == null))){
var G__16048 = (r.arr[(0)]);
var G__16049 = (s - (5));
r = G__16048;
s = G__16049;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector(new_cnt,s,r,new_tail,self__.meta,null));
}
break;
}
}
}

}
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,f);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f,start);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IVector$_assoc_n$arity$3(null,k,v);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.cnt === (0))){
return null;
} else {
if((clojure.core.rrb_vector.trees.tail_offset(self__.cnt,self__.tail) === (0))){
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(self__.tail);
} else {
return clojure.core.rrb_vector.rrbt.rrb_chunked_seq.cljs$core$IFn$_invoke$arity$3(this$__$1,(0),(0));

}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,self__.tail,meta__$1,self__.__hash));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
if((self__.tail.length < (32))){
var tail_len = self__.tail.length;
var new_tail = (new Array((tail_len + (1))));
cljs.core.array_copy(self__.tail,(0),new_tail,(0),tail_len);

(new_tail[tail_len] = val);

return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,self__.root,new_tail,self__.meta,null));
} else {
var tail_node = cljs.core.__GT_VectorNode(self__.root.edit,self__.tail);
var new_tail = (function (){var new_arr = [null];
(new_arr[(0)] = val);

return new_arr;
})();
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.overflow_QMARK_(self__.root,self__.shift,self__.cnt))){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(self__.root))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var G__16024_16050 = new_arr;
(G__16024_16050[(0)] = self__.root);

(G__16024_16050[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges(self__.root)[(31)]);
var G__16025_16051 = new_arr;
(G__16025_16051[(0)] = self__.root);

(G__16025_16051[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));

(G__16025_16051[(32)] = new_rngs);


var G__16026_16052 = new_rngs;
(G__16026_16052[(0)] = root_total_range);

(G__16026_16052[(1)] = (root_total_range + (32)));

(G__16026_16052[(32)] = (2));


return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),(self__.shift + (5)),new_root,new_tail,self__.meta,null));
}
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((self__.cnt + (1)),self__.shift,clojure.core.rrb_vector.trees.push_tail(self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node),new_tail,self__.meta,null));
}
}
});

clojure.core.rrb_vector.rrbt.Vector.prototype.call = (function() {
var G__16053 = null;
var G__16053__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});
var G__16053__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});
G__16053 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__16053__2.call(this,self__,k);
case 3:
return G__16053__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__16053.cljs$core$IFn$_invoke$arity$2 = G__16053__2;
G__16053.cljs$core$IFn$_invoke$arity$3 = G__16053__3;
return G__16053;
})()
;

clojure.core.rrb_vector.rrbt.Vector.prototype.apply = (function (self__,args16015){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args16015)));
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$IIndexed$_nth$arity$2(null,k);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$IIndexed$_nth$arity$3(null,k,not_found);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_indexed.cljs$core$IFn$_invoke$arity$2(this$__$1,that);
});

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.rrb_vector.rrbt.Vector.prototype.clojure$core$rrb_vector$protocols$PSpliceableVector$_splicev$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
var G__16027 = this$__$1;
var G__16028 = clojure.core.rrb_vector.rrbt._as_rrbt(that);
return (clojure.core.rrb_vector.rrbt.splice_rrbts.cljs$core$IFn$_invoke$arity$2 ? clojure.core.rrb_vector.rrbt.splice_rrbts.cljs$core$IFn$_invoke$arity$2(G__16027,G__16028) : clojure.core.rrb_vector.rrbt.splice_rrbts.call(null,G__16027,G__16028));
});

clojure.core.rrb_vector.rrbt.Vector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Vector";

clojure.core.rrb_vector.rrbt.Vector.cljs$lang$ctorPrWriter = (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"clojure.core.rrb-vector.rrbt/Vector");
});

clojure.core.rrb_vector.rrbt.__GT_Vector = (function clojure$core$rrb_vector$rrbt$__GT_Vector(cnt,shift,root,tail,meta,__hash){
return (new clojure.core.rrb_vector.rrbt.Vector(cnt,shift,root,tail,meta,__hash));
});

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
return (new clojure.core.rrb_vector.rrbt.Vector(cljs.core.count(this$__$1),this$__$1.shift,this$__$1.root,this$__$1.tail,cljs.core.meta(this$__$1),null));
});

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.clojure$core$rrb_vector$rrbt$AsRRBT$_as_rrbt$arity$1 = (function (this$){
var this$__$1 = this;
var v = this$__$1.v;
var start = this$__$1.start;
var end = this$__$1.end;
return clojure.core.rrb_vector.protocols._slicev(clojure.core.rrb_vector.rrbt._as_rrbt(v),start,end);
});
clojure.core.rrb_vector.rrbt.shift_from_to = (function clojure$core$rrb_vector$rrbt$shift_from_to(node,from,to){
while(true){
if((from === to)){
return node;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
var G__16060 = cljs.core.__GT_VectorNode(node.edit,(function (){var G__16057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__16057[(0)] = node);

return G__16057;
})());
var G__16061 = ((5) + from);
var G__16062 = to;
node = G__16060;
from = G__16061;
to = G__16062;
continue;
} else {
var G__16063 = cljs.core.__GT_VectorNode(node.edit,(function (){var G__16058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__16058[(0)] = node);

(G__16058[(32)] = (function (){var G__16059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__16059[(0)] = clojure.core.rrb_vector.nodes.last_range(node));

(G__16059[(32)] = (1));

return G__16059;
})());

return G__16058;
})());
var G__16064 = ((5) + from);
var G__16065 = to;
node = G__16063;
from = G__16064;
to = G__16065;
continue;

}
}
break;
}
});
clojure.core.rrb_vector.rrbt.slot_count = (function clojure$core$rrb_vector$rrbt$slot_count(node,shift){
var arr = node.arr;
if((shift === (0))){
return arr.length;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
return clojure.core.rrb_vector.nodes.index_of_nil(arr);
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges(node);
return (rngs[(32)]);
}
}
});
clojure.core.rrb_vector.rrbt.subtree_branch_count = (function clojure$core$rrb_vector$rrbt$subtree_branch_count(node,shift){
var arr = node.arr;
var cs = (shift - (5));
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))){
var i = (0);
var sbc = (0);
while(true){
if((i === (32))){
return sbc;
} else {
var temp__6736__auto__ = (arr[i]);
if(cljs.core.truth_(temp__6736__auto__)){
var child = temp__6736__auto__;
var G__16066 = (i + (1));
var G__16067 = (sbc + clojure.core.rrb_vector.rrbt.slot_count(child,cs));
i = G__16066;
sbc = G__16067;
continue;
} else {
return sbc;
}
}
break;
}
} else {
var lim = (clojure.core.rrb_vector.nodes.ranges(node)[(32)]);
var i = (0);
var sbc = (0);
while(true){
if((i === lim)){
return sbc;
} else {
var child = (arr[i]);
var G__16068 = (i + (1));
var G__16069 = (sbc + clojure.core.rrb_vector.rrbt.slot_count(child,cs));
i = G__16068;
sbc = G__16069;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.rrbt.leaf_seq = (function clojure$core$rrb_vector$rrbt$leaf_seq(arr){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__16070_SHARP_){
return p1__16070_SHARP_.arr;
}),cljs.core.array_seq([cljs.core.take.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.nodes.index_of_nil(arr),arr)], 0));
});
clojure.core.rrb_vector.rrbt.rebalance_leaves = (function clojure$core$rrb_vector$rrbt$rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves){
var slc1 = clojure.core.rrb_vector.rrbt.slot_count(n1,(5));
var slc2 = clojure.core.rrb_vector.rrbt.slot_count(n2,(5));
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n1,(5));
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n2,(5));
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot((p - (1)),(32)) + (1)));
if((e <= clojure.core.rrb_vector.rrbt.max_extra_search_steps)){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var reg_QMARK_ = (cljs.core.mod(p,(32)) === (0));
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr);
var i_16071 = (0);
var bs_16072 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.leaf_seq(n1.arr),clojure.core.rrb_vector.rrbt.leaf_seq(n2.arr)));
while(true){
var temp__6738__auto___16073 = cljs.core.seq(bs_16072);
if(temp__6738__auto___16073){
var xs__7294__auto___16074 = temp__6738__auto___16073;
var block_16075 = cljs.core.first(xs__7294__auto___16074);
var a_16076__$1 = (new Array(cljs.core.count(block_16075)));
var i_16077__$1 = (0);
var xs_16078 = cljs.core.seq(block_16075);
while(true){
if(xs_16078){
(a_16076__$1[i_16077__$1] = cljs.core.first(xs_16078));

var G__16079 = (i_16077__$1 + (1));
var G__16080 = cljs.core.next(xs_16078);
i_16077__$1 = G__16079;
xs_16078 = G__16080;
continue;
} else {
}
break;
}

(new_arr[i_16071] = cljs.core.__GT_VectorNode(null,a_16076__$1));

var G__16081 = (i_16071 + (1));
var G__16082 = cljs.core.next(bs_16072);
i_16071 = G__16081;
bs_16072 = G__16082;
continue;
} else {
}
break;
}

if(!(reg_QMARK_)){
(new_arr[(32)] = clojure.core.rrb_vector.nodes.regular_ranges((5),p));
} else {
}

transferred_leaves.val = sbc2;

return [new_n1,null];
} else {
var reg_QMARK_ = (cljs.core.mod(p,(32)) === (0));
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = (new Array(((reg_QMARK_)?(32):(33))));
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode(null,new_arr2);
var i_16083 = (0);
var bs_16084 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.leaf_seq((new Array(n1))),clojure.core.rrb_vector.rrbt.leaf_seq((new Array(n2)))));
while(true){
var temp__6738__auto___16085 = cljs.core.seq(bs_16084);
if(temp__6738__auto___16085){
var xs__7294__auto___16086 = temp__6738__auto___16085;
var block_16087 = cljs.core.first(xs__7294__auto___16086);
var a_16088__$1 = (new Array(cljs.core.count(block_16087)));
var i_16089__$1 = (0);
var xs_16090 = cljs.core.seq(block_16087);
while(true){
if(xs_16090){
(a_16088__$1[i_16089__$1] = cljs.core.first(xs_16090));

var G__16091 = (i_16089__$1 + (1));
var G__16092 = cljs.core.next(xs_16090);
i_16089__$1 = G__16091;
xs_16090 = G__16092;
continue;
} else {
}
break;
}

if((i_16083 < (32))){
(new_arr1[i_16083] = cljs.core.__GT_VectorNode(null,a_16088__$1));
} else {
(new_arr2[(i_16083 - (32))] = cljs.core.__GT_VectorNode(null,a_16088__$1));
}

var G__16093 = (i_16083 + (1));
var G__16094 = cljs.core.next(bs_16084);
i_16083 = G__16093;
bs_16084 = G__16094;
continue;
} else {
}
break;
}

if(!(reg_QMARK_)){
(new_arr2[(32)] = clojure.core.rrb_vector.nodes.regular_ranges((5),(p - (1024))));
} else {
}

transferred_leaves.val = ((1024) - sbc1);

return [new_n1,new_n2];

}
}
});
clojure.core.rrb_vector.rrbt.child_seq = (function clojure$core$rrb_vector$rrbt$child_seq(node,shift,cnt){
var arr = node.arr;
var rngs = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(node))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt):clojure.core.rrb_vector.nodes.ranges(node));
var cs = (cljs.core.truth_(rngs)?(rngs[(32)]):clojure.core.rrb_vector.nodes.index_of_nil(arr));
var cseq = ((function (arr,rngs,cs){
return (function clojure$core$rrb_vector$rrbt$child_seq_$_cseq(c,r){
var arr__$1 = c.arr;
var rngs__$1 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(c))?clojure.core.rrb_vector.nodes.regular_ranges((shift - (5)),r):clojure.core.rrb_vector.nodes.ranges(c));
var gcs = (cljs.core.truth_(rngs__$1)?(rngs__$1[(32)]):clojure.core.rrb_vector.nodes.index_of_nil(arr__$1));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,cljs.core.take.cljs$core$IFn$_invoke$arity$2(gcs,arr__$1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(gcs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,rngs__$1,cljs.core.cons((0),rngs__$1))));
});})(arr,rngs,cs))
;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cseq,cljs.core.array_seq([cljs.core.take.cljs$core$IFn$_invoke$arity$2(cs,arr),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cs,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,rngs,cljs.core.cons((0),rngs)))], 0));
});
clojure.core.rrb_vector.rrbt.rebalance = (function clojure$core$rrb_vector$rrbt$rebalance(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((n2 == null)){
return [n1,null];
} else {
var slc1 = clojure.core.rrb_vector.rrbt.slot_count(n1,shift);
var slc2 = clojure.core.rrb_vector.rrbt.slot_count(n2,shift);
var a = (slc1 + slc2);
var sbc1 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n1,shift);
var sbc2 = clojure.core.rrb_vector.rrbt.subtree_branch_count(n2,shift);
var p = (sbc1 + sbc2);
var e = (a - (cljs.core.quot((p - (1)),(32)) + (1)));
if((e <= clojure.core.rrb_vector.rrbt.max_extra_search_steps)){
return [n1,n2];
} else {
if(((sbc1 + sbc2) <= (1024))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr);
var i_16107 = (0);
var bs_16108 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.child_seq(n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq(n2,shift,cnt2)));
while(true){
var temp__6738__auto___16109 = cljs.core.seq(bs_16108);
if(temp__6738__auto___16109){
var xs__7294__auto___16110 = temp__6738__auto___16109;
var block_16111 = cljs.core.first(xs__7294__auto___16110);
var a_16112__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_16113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_16112__$1[(32)] = r_16113);

(r_16113[(32)] = cljs.core.count(block_16111));

var i_16114__$1 = (0);
var o_16115 = (0);
var gcs_16116 = cljs.core.seq(block_16111);
while(true){
var temp__6738__auto___16117__$1 = cljs.core.seq(gcs_16116);
if(temp__6738__auto___16117__$1){
var xs__7294__auto___16118__$1 = temp__6738__auto___16117__$1;
var vec__16101_16119 = cljs.core.first(xs__7294__auto___16118__$1);
var gc_16120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101_16119,(0),null);
var gcr_16121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101_16119,(1),null);
(a_16112__$1[i_16114__$1] = gc_16120);

(r_16113[i_16114__$1] = (o_16115 + gcr_16121));

var G__16122 = (i_16114__$1 + (1));
var G__16123 = (o_16115 + gcr_16121);
var G__16124 = cljs.core.next(gcs_16116);
i_16114__$1 = G__16122;
o_16115 = G__16123;
gcs_16116 = G__16124;
continue;
} else {
}
break;
}

(new_arr[i_16107] = cljs.core.__GT_VectorNode(null,a_16112__$1));

(new_rngs[i_16107] = ((r_16113[((r_16113[(32)]) - (1))]) + (((i_16107 > (0)))?(new_rngs[(i_16107 - (1))]):(0))));

(new_rngs[(32)] = (i_16107 + (1)));

var G__16125 = (i_16107 + (1));
var G__16126 = cljs.core.next(bs_16108);
i_16107 = G__16125;
bs_16108 = G__16126;
continue;
} else {
}
break;
}

(new_arr[(32)] = new_rngs);

transferred_leaves.val = cnt2;

return [new_n1,null];
} else {
var new_arr1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs2 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_n1 = cljs.core.__GT_VectorNode(null,new_arr1);
var new_n2 = cljs.core.__GT_VectorNode(null,new_arr2);
var i_16127 = (0);
var bs_16128 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((32),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.rrb_vector.rrbt.child_seq(n1,shift,cnt1),clojure.core.rrb_vector.rrbt.child_seq(n2,shift,cnt2)));
while(true){
var temp__6738__auto___16129 = cljs.core.seq(bs_16128);
if(temp__6738__auto___16129){
var xs__7294__auto___16130 = temp__6738__auto___16129;
var block_16131 = cljs.core.first(xs__7294__auto___16130);
var a_16132__$1 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var r_16133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(a_16132__$1[(32)] = r_16133);

(r_16133[(32)] = cljs.core.count(block_16131));

var i_16134__$1 = (0);
var o_16135 = (0);
var gcs_16136 = cljs.core.seq(block_16131);
while(true){
var temp__6738__auto___16137__$1 = cljs.core.seq(gcs_16136);
if(temp__6738__auto___16137__$1){
var xs__7294__auto___16138__$1 = temp__6738__auto___16137__$1;
var vec__16104_16139 = cljs.core.first(xs__7294__auto___16138__$1);
var gc_16140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16104_16139,(0),null);
var gcr_16141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16104_16139,(1),null);
(a_16132__$1[i_16134__$1] = gc_16140);

(r_16133[i_16134__$1] = (o_16135 + gcr_16141));

var G__16142 = (i_16134__$1 + (1));
var G__16143 = (o_16135 + gcr_16141);
var G__16144 = cljs.core.next(gcs_16136);
i_16134__$1 = G__16142;
o_16135 = G__16143;
gcs_16136 = G__16144;
continue;
} else {
}
break;
}

if(((i_16127 < (32))) && ((((i_16127 * (32)) + cljs.core.count(block_16131)) > sbc1))){
var tbs_16145 = (((i_16127 * (32)) + cljs.core.count(block_16131)) - sbc1);
var li_16146 = ((r_16133[(32)]) - (1));
var d_16147 = (((tbs_16145 >= (32)))?(r_16133[li_16146]):((r_16133[li_16146]) - (r_16133[(li_16146 - tbs_16145)])));
transferred_leaves.val = (transferred_leaves.val + d_16147);
} else {
}

var new_arr_16148 = (((i_16127 < (32)))?new_arr1:new_arr2);
var new_rngs_16149 = (((i_16127 < (32)))?new_rngs1:new_rngs2);
var i_16150__$1 = cljs.core.mod(i_16127,(32));
(new_arr_16148[i_16150__$1] = cljs.core.__GT_VectorNode(null,a_16132__$1));

(new_rngs_16149[i_16150__$1] = ((r_16133[((r_16133[(32)]) - (1))]) + (((i_16150__$1 > (0)))?(new_rngs_16149[(i_16150__$1 - (1))]):(0))));

(new_rngs_16149[(32)] = (i_16150__$1 + (1)));

var G__16151 = (i_16127 + (1));
var G__16152 = cljs.core.next(bs_16128);
i_16127 = G__16151;
bs_16128 = G__16152;
continue;
} else {
}
break;
}

(new_arr1[(32)] = new_rngs1);

(new_arr2[(32)] = new_rngs2);

return [new_n1,new_n2];

}
}
}
});
clojure.core.rrb_vector.rrbt.zippath = (function clojure$core$rrb_vector$rrbt$zippath(shift,n1,cnt1,n2,cnt2,transferred_leaves){
if((shift === (5))){
return clojure.core.rrb_vector.rrbt.rebalance_leaves(n1,cnt1,n2,cnt2,transferred_leaves);
} else {
var c1 = clojure.core.rrb_vector.nodes.last_child(n1);
var c2 = clojure.core.rrb_vector.nodes.first_child(n2);
var ccnt1 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(n1))?(function (){var m = cljs.core.mod(cnt1,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(function (){var rngs = clojure.core.rrb_vector.nodes.ranges(n1);
var i = ((rngs[(32)]) - (1));
if((i === (0))){
return (rngs[(0)]);
} else {
return ((rngs[i]) - (rngs[(i - (1))]));
}
})());
var ccnt2 = (cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(n2))?(function (){var m = cljs.core.mod(cnt2,((1) << shift));
if((m === (0))){
return ((1) << shift);
} else {
return m;
}
})():(clojure.core.rrb_vector.nodes.ranges(n2)[(0)]));
var next_transferred_leaves = (new cljs.core.Box((0)));
var vec__16162 = (function (){var G__16165 = (shift - (5));
var G__16166 = c1;
var G__16167 = ccnt1;
var G__16168 = c2;
var G__16169 = ccnt2;
var G__16170 = next_transferred_leaves;
return (clojure.core.rrb_vector.rrbt.zippath.cljs$core$IFn$_invoke$arity$6 ? clojure.core.rrb_vector.rrbt.zippath.cljs$core$IFn$_invoke$arity$6(G__16165,G__16166,G__16167,G__16168,G__16169,G__16170) : clojure.core.rrb_vector.rrbt.zippath.call(null,G__16165,G__16166,G__16167,G__16168,G__16169,G__16170));
})();
var new_c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162,(0),null);
var new_c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162,(1),null);
var d = next_transferred_leaves.val;
transferred_leaves.val = (transferred_leaves.val + d);

return clojure.core.rrb_vector.rrbt.rebalance(shift,(((c1 === new_c1))?n1:clojure.core.rrb_vector.nodes.replace_rightmost_child(shift,n1,new_c1,d)),(cnt1 + d),(cljs.core.truth_(new_c2)?(((c2 === new_c2))?n2:clojure.core.rrb_vector.nodes.replace_leftmost_child(shift,n2,cnt2,new_c2,d)):clojure.core.rrb_vector.nodes.remove_leftmost_child(shift,n2)),(cnt2 - d),transferred_leaves);
}
});
clojure.core.rrb_vector.rrbt.squash_nodes = (function clojure$core$rrb_vector$rrbt$squash_nodes(shift,n1,cnt1,n2,cnt2){
var arr1 = n1.arr;
var arr2 = n2.arr;
var li1 = clojure.core.rrb_vector.nodes.index_of_nil(arr1);
var li2 = clojure.core.rrb_vector.nodes.index_of_nil(arr2);
var slots = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(li1,arr1),cljs.core.take.cljs$core$IFn$_invoke$arity$2(li2,arr2));
if((cljs.core.count(slots) > (32))){
return [n1,n2];
} else {
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs1 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(li1,(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(n1))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt1):clojure.core.rrb_vector.nodes.ranges(n1)));
var rngs2 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(li2,(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(n2))?clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt2):clojure.core.rrb_vector.nodes.ranges(n2)));
var rngs2__$1 = (function (){var r = cljs.core.last(rngs1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots){
return (function (p1__16171_SHARP_){
return (p1__16171_SHARP_ + r);
});})(r,new_rngs,new_arr,rngs1,rngs2,arr1,arr2,li1,li2,slots))
,rngs2);
})();
var rngs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rngs1,rngs2__$1);
(new_arr[(32)] = new_rngs);

var i_16172 = (0);
var cs_16173 = cljs.core.seq(slots);
while(true){
if(cs_16173){
(new_arr[i_16172] = cljs.core.first(cs_16173));

var G__16174 = (i_16172 + (1));
var G__16175 = cljs.core.next(cs_16173);
i_16172 = G__16174;
cs_16173 = G__16175;
continue;
} else {
}
break;
}

var i_16176 = (0);
var rngs_16177__$1 = cljs.core.seq(rngs);
while(true){
if(rngs_16177__$1){
(new_rngs[i_16176] = cljs.core.first(rngs_16177__$1));

var G__16178 = (i_16176 + (1));
var G__16179 = cljs.core.next(rngs_16177__$1);
i_16176 = G__16178;
rngs_16177__$1 = G__16179;
continue;
} else {
(new_rngs[(32)] = i_16176);
}
break;
}

return [cljs.core.__GT_VectorNode(null,new_arr),null];
}
});
clojure.core.rrb_vector.rrbt.splice_rrbts = (function clojure$core$rrb_vector$rrbt$splice_rrbts(v1,v2){
if((cljs.core.count(v1) === (0))){
return v2;
} else {
if((cljs.core.count(v2) < clojure.core.rrb_vector.rrbt.rrbt_concat_threshold)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v1,v2);
} else {
var s1 = v1.shift;
var s2 = v2.shift;
var r1 = v1.root;
var o_QMARK_ = clojure.core.rrb_vector.nodes.overflow_QMARK_(r1,s1,(cljs.core.count(v1) + ((32) - v1.tail.length)));
var r1__$1 = (cljs.core.truth_(o_QMARK_)?(function (){var tail = v1.tail;
var tail_node = cljs.core.__GT_VectorNode(null,tail);
var reg_QMARK_ = (function (){var and__9427__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_(r1);
if(cljs.core.truth_(and__9427__auto__)){
return (tail.length === (32));
} else {
return and__9427__auto__;
}
})();
var arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
(arr[(0)] = r1);

(arr[(1)] = clojure.core.rrb_vector.nodes.new_path_STAR_(s1,tail_node));

if(cljs.core.not(reg_QMARK_)){
var rngs_16194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs_16194[(32)] = (2));

(rngs_16194[(0)] = (cljs.core.count(v1) - tail.length));

(rngs_16194[(1)] = cljs.core.count(v1));

(arr[(32)] = rngs_16194);
} else {
}

return cljs.core.__GT_VectorNode(null,arr);
})():clojure.core.rrb_vector.nodes.fold_tail(r1,s1,clojure.core.rrb_vector.trees.tail_offset(v1.cnt,v1.tail),v1.tail));
var s1__$1 = (cljs.core.truth_(o_QMARK_)?(s1 + (5)):s1);
var r2 = v2.root;
var s = (function (){var x__9777__auto__ = s1__$1;
var y__9778__auto__ = s2;
return ((x__9777__auto__ > y__9778__auto__) ? x__9777__auto__ : y__9778__auto__);
})();
var r1__$2 = clojure.core.rrb_vector.rrbt.shift_from_to(r1__$1,s1__$1,s);
var r2__$1 = clojure.core.rrb_vector.rrbt.shift_from_to(r2,s2,s);
var transferred_leaves = (new cljs.core.Box((0)));
var vec__16187 = clojure.core.rrb_vector.rrbt.zippath(s,r1__$2,cljs.core.count(v1),r2__$1,(cljs.core.count(v2) - v2.tail.length),transferred_leaves);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16187,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16187,(1),null);
var d = transferred_leaves.val;
var ncnt1 = (cljs.core.count(v1) + d);
var ncnt2 = ((cljs.core.count(v2) - v2.tail.length) - d);
var vec__16190 = (((n2 === r2__$1))?clojure.core.rrb_vector.rrbt.squash_nodes(s,n1,ncnt1,n2,ncnt2):[n1,n2]);
var n1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(0),null);
var n2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(1),null);
var ncnt1__$1 = (cljs.core.truth_(n2__$1)?ncnt1:(ncnt1 + ncnt2));
var ncnt2__$1 = (cljs.core.truth_(n2__$1)?ncnt2:(0));
if(cljs.core.truth_(n2__$1)){
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(null,arr);
(arr[(0)] = n1__$1);

(arr[(1)] = n2__$1);

(arr[(32)] = (function (){var G__16193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__16193[(0)] = ncnt1__$1);

(G__16193[(1)] = (ncnt1__$1 + ncnt2__$1));

(G__16193[(32)] = (2));

return G__16193;
})());

return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count(v1) + cljs.core.count(v2)),(s + (5)),new_root,v2.tail,null,null));
} else {
var r = n1__$1;
var s__$1 = s;
while(true){
if(((s__$1 > (5))) && (((r.arr[(1)]) == null))){
var G__16195 = (r.arr[(0)]);
var G__16196 = (s__$1 - (5));
r = G__16195;
s__$1 = G__16196;
continue;
} else {
return (new clojure.core.rrb_vector.rrbt.Vector((cljs.core.count(v1) + cljs.core.count(v2)),s__$1,r,v2.tail,null,null));
}
break;
}
}

}
}
});

/**
* @constructor
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.ITransientVector}
 * @implements {cljs.core.ITransientAssociative}
*/
clojure.core.rrb_vector.rrbt.Transient = (function (cnt,shift,root,tail,tidx){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.tidx = tidx;
this.cljs$lang$protocol_mask$partition1$ = 88;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.tidx < (32))){
(self__.tail[self__.tidx] = o);

self__.cnt = (self__.cnt + (1));

self__.tidx = (self__.tidx + (1));

return this$__$1;
} else {
var tail_node = cljs.core.__GT_VectorNode(self__.root.edit,self__.tail);
var new_tail = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_tail[(0)] = o);

self__.tail = new_tail;

self__.tidx = (1);

if(cljs.core.truth_(clojure.core.rrb_vector.nodes.overflow_QMARK_(self__.root,self__.shift,self__.cnt))){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(self__.root))){
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var G__16197_16200 = new_arr;
(G__16197_16200[(0)] = self__.root);

(G__16197_16200[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));


self__.root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
} else {
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_root = cljs.core.__GT_VectorNode(self__.root.edit,new_arr);
var root_total_range = (clojure.core.rrb_vector.nodes.ranges(self__.root)[(31)]);
var G__16198_16201 = new_arr;
(G__16198_16201[(0)] = self__.root);

(G__16198_16201[(1)] = clojure.core.rrb_vector.trees.new_path(self__.tail,self__.root.edit,self__.shift,tail_node));

(G__16198_16201[(32)] = new_rngs);


var G__16199_16202 = new_rngs;
(G__16199_16202[(0)] = root_total_range);

(G__16199_16202[(1)] = (root_total_range + (32)));

(G__16199_16202[(32)] = (2));


self__.root = new_root;

self__.shift = (self__.shift + (5));

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
} else {
var new_root = clojure.core.rrb_vector.transients.push_tail_BANG_(self__.shift,self__.cnt,self__.root.edit,self__.root,tail_node);
self__.root = new_root;

self__.cnt = (self__.cnt + (1));

return this$__$1;
}
}
} else {
throw (new Error("conj! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
self__.root.edit = null;

var trimmed_tail = (new Array(self__.tidx));
cljs.core.array_copy(self__.tail,(0),trimmed_tail,(0),self__.tidx);

return (new clojure.core.rrb_vector.rrbt.Vector(self__.cnt,self__.shift,self__.root,trimmed_tail,null,null));
} else {
throw (new Error("persistent! called twice"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(null,key,val);
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (this$,i,val){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((((0) <= i)) && ((i < self__.cnt))){
var tail_off = (self__.cnt - self__.tidx);
if((tail_off <= i)){
(self__.tail[(i - tail_off)] = val);
} else {
self__.root = clojure.core.rrb_vector.transients.do_assoc_BANG_(self__.shift,self__.root.edit,self__.root,i,val);
}

return this$__$1;
} else {
if((i === self__.cnt)){
return this$__$1.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,val);
} else {
return cljs.core.vector_index_out_of_bounds(i,self__.cnt);

}
}
} else {
throw (new Error("assoc! after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
if((self__.cnt === (0))){
throw (new Error("Can't pop empty vector"));
} else {
if(((1) === self__.cnt)){
self__.cnt = (0);

self__.tidx = (0);

(self__.tail[(0)] = null);

return this$__$1;
} else {
if((self__.tidx > (1))){
self__.cnt = (self__.cnt - (1));

self__.tidx = (self__.tidx - (1));

(self__.tail[self__.tidx] = null);

return this$__$1;
} else {
var new_tail_base = clojure.core.rrb_vector.trees.array_for(self__.cnt,self__.shift,self__.root,self__.tail,(self__.cnt - (2)));
var new_tail = cljs.core.aclone(new_tail_base);
var new_tidx = new_tail_base.length;
var new_root = clojure.core.rrb_vector.transients.pop_tail_BANG_(self__.shift,self__.cnt,self__.root.edit,self__.root);
if((new_root == null)){
self__.cnt = (self__.cnt - (1));

self__.root = clojure.core.rrb_vector.transients.ensure_editable(self__.root.edit,clojure.core.rrb_vector.nodes.empty_node);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
if(((self__.shift > (5))) && (((new_root.arr[(1)]) == null))){
self__.cnt = (self__.cnt - (1));

self__.shift = (self__.shift - (5));

self__.root = (new_root.arr[(0)]);

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;
} else {
self__.cnt = (self__.cnt - (1));

self__.root = new_root;

self__.tail = new_tail;

self__.tidx = new_tidx;

return this$__$1;

}
}

}
}
}
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.root.edit){
return self__.cnt;
} else {
throw (new Error("count after persistent!"));
}
});

clojure.core.rrb_vector.rrbt.Transient.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tidx","tidx",1939123455,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$type = true;

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorStr = "clojure.core.rrb-vector.rrbt/Transient";

clojure.core.rrb_vector.rrbt.Transient.cljs$lang$ctorPrWriter = (function (this__10096__auto__,writer__10097__auto__,opt__10098__auto__){
return cljs.core._write(writer__10097__auto__,"clojure.core.rrb-vector.rrbt/Transient");
});

clojure.core.rrb_vector.rrbt.__GT_Transient = (function clojure$core$rrb_vector$rrbt$__GT_Transient(cnt,shift,root,tail,tidx){
return (new clojure.core.rrb_vector.rrbt.Transient(cnt,shift,root,tail,tidx));
});

