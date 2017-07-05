// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants false}
goog.provide('clojure.core.rrb_vector.transients');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.nodes');
goog.require('clojure.core.rrb_vector.trees');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
return (new cljs.core.VectorNode({},cljs.core.aclone(root.arr)));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(ret))){
var n_14452 = ret;
var shift_14453__$1 = shift;
while(true){
var arr_14454 = n_14452.arr;
var subidx_14455 = (((cnt - (1)) >> shift_14453__$1) & (31));
if((shift_14453__$1 === (5))){
(arr_14454[subidx_14455] = tail_node);
} else {
var child_14456 = (arr_14454[subidx_14455]);
if((child_14456 == null)){
(arr_14454[subidx_14455] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_14453__$1 - (5)),tail_node));
} else {
var editable_child_14457 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_14456);
(arr_14454[subidx_14455] = editable_child_14457);

var G__14458 = editable_child_14457;
var G__14459 = (shift_14453__$1 - (5));
n_14452 = G__14458;
shift_14453__$1 = G__14459;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = (((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)]));
if(!((ccnt === ((1) << shift)))){
var G__14447 = (shift - (5));
var G__14448 = (ccnt + (1));
var G__14449 = root_edit;
var G__14450 = child;
var G__14451 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__14447,G__14448,G__14449,G__14450,G__14451) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__14447,G__14448,G__14449,G__14450,G__14451));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(ret))){
var subidx = (((cnt - (1)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__14460 = (shift - (5));
var G__14461 = cnt;
var G__14462 = root_edit;
var G__14463 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__14460,G__14461,G__14462,G__14463) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__14460,G__14461,G__14462,G__14463));
})();
if(((child == null)) && ((subidx === (0)))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var subidx = (((cnt - (1)) >> shift) & (31));
var rngs = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if(((((rngs[(subidx__$1 + (1))]) | (0)) === (0))) || ((subidx__$1 === (31)))){
return subidx__$1;
} else {
var G__14472 = (subidx__$1 + (1));
subidx__$1 = G__14472;
continue;
}
break;
}
})();
if((shift > (5))){
var child = (ret.arr[subidx__$1]);
var child_cnt = (((subidx__$1 === (0)))?(rngs[(0)]):((rngs[subidx__$1]) - (rngs[(subidx__$1 - (1))])));
var new_child = (function (){var G__14466 = (shift - (5));
var G__14467 = child_cnt;
var G__14468 = root_edit;
var G__14469 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__14466,G__14467,G__14468,G__14469) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__14466,G__14467,G__14468,G__14469));
})();
if(((new_child == null)) && ((subidx__$1 === (0)))){
return null;
} else {
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(child))){
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - (32)));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx__$1] = ((rngs[subidx__$1]) - diff));

(arr[subidx__$1] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx__$1 === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx__$1]);
(arr[subidx__$1] = null);

(rngs[subidx__$1] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_(ret))){
var shift_14483__$1 = shift;
var node_14484 = ret;
while(true){
if((shift_14483__$1 === (0))){
var arr_14485 = node_14484.arr;
(arr_14485[(i & (31))] = val);
} else {
var arr_14487 = node_14484.arr;
var subidx_14488 = ((i >> shift_14483__$1) & (31));
var child_14489 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_14487[subidx_14488]));
(arr_14487[subidx_14488] = child_14489);

var G__14490 = (shift_14483__$1 - (5));
var G__14491 = child_14489;
shift_14483__$1 = G__14490;
node_14484 = G__14491;
continue;
}
break;
}
} else {
var arr_14492 = ret.arr;
var rngs_14493 = clojure.core.rrb_vector.nodes.ranges(ret);
var subidx_14494 = ((i >> shift) & (31));
var subidx_14495__$1 = (function (){var subidx__$1 = subidx_14494;
while(true){
if((i < ((rngs_14493[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__14497 = (subidx__$1 + (1));
subidx__$1 = G__14497;
continue;
}
break;
}
})();
var i_14496__$1 = (((subidx_14495__$1 === (0)))?i:(i - (rngs_14493[(subidx_14495__$1 - (1))])));
(arr_14492[subidx_14495__$1] = (function (){var G__14478 = (shift - (5));
var G__14479 = root_edit;
var G__14480 = (arr_14492[subidx_14495__$1]);
var G__14481 = i_14496__$1;
var G__14482 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__14478,G__14479,G__14480,G__14481,G__14482) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__14478,G__14479,G__14480,G__14481,G__14482));
})());
}

return ret;
});
