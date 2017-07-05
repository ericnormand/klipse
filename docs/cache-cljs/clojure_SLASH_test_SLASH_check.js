goog.provide("clojure.test.check");

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.call(null,seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.call(null,non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed){
clojure.test.check.clojure_test.report_trial.call(null,property,num_trials,num_trials);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",(1415092211)),true,new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),num_trials,new cljs.core.Keyword(null,"seed","seed",(68613327)),seed], null);
});
/**
 * True if the value is not falsy or an exception
 */
clojure.test.check.not_falsey_or_exception_QMARK_ = (function clojure$test$check$not_falsey_or_exception_QMARK_(value){
var and__20196__auto__ = value;
if(cljs.core.truth_(and__20196__auto__)){
return cljs.core.not.call(null,clojure.test.check.impl.exception_like_QMARK_.call(null,value));
} else {
return and__20196__auto__;
}
});
/**
 * Tests `property` `num-tests` times.
 *   Takes optional keys `:seed` and `:max-size`. The seed parameter
 *   can be used to re-run previous tests, as the seed used is returned
 *   after a test is run. The max-size can be used to control the 'size'
 *   of generated values. The size will start at 0, and grow up to
 *   max-size, as the number of tests increases. Generators will use
 *   the size parameter to bound their growth. This prevents, for example,
 *   generating a five-thousand element vector on the very first test.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 *    (quick-check 100 p)
 *   
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__21610__auto__ = [];
var len__21607__auto___312 = arguments.length;
var i__21608__auto___313 = (0);
while(true){
if((i__21608__auto___313 < len__21607__auto___312)){
args__21610__auto__.push((arguments[i__21608__auto___313]));

var G__314 = (i__21608__auto___313 + (1));
i__21608__auto___313 = G__314;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__300){
var map__301 = p__300;
var map__301__$1 = ((((!((map__301 == null)))?((((map__301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__301):map__301);
var seed = cljs.core.get.call(null,map__301__$1,new cljs.core.Keyword(null,"seed","seed",(68613327)));
var max_size = cljs.core.get.call(null,map__301__$1,new cljs.core.Keyword(null,"max-size","max-size",(-874966132)),(200));
var vec__303 = clojure.test.check.make_rng.call(null,seed);
var created_seed = cljs.core.nth.call(null,vec__303,(0),null);
var rng = cljs.core.nth.call(null,vec__303,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete.call(null,property,num_tests,created_seed);
} else {
var vec__306 = size_seq__$1;
var seq__307 = cljs.core.seq.call(null,vec__306);
var first__308 = cljs.core.first.call(null,seq__307);
var seq__307__$1 = cljs.core.next.call(null,seq__307);
var size = first__308;
var rest_size_seq = seq__307__$1;
var vec__309 = clojure.test.check.random.split.call(null,rstate);
var r1 = cljs.core.nth.call(null,vec__309,(0),null);
var r2 = cljs.core.nth.call(null,vec__309,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen.call(null,property,r1,size);
var result_map = clojure.test.check.rose_tree.root.call(null,result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(result_map);
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_.call(null,result))){
clojure.test.check.clojure_test.report_trial.call(null,property,so_far,num_tests);

var G__315 = (so_far + (1));
var G__316 = rest_size_seq;
var G__317 = r2;
so_far = G__315;
size_seq__$1 = G__316;
rstate = G__317;
continue;
} else {
return clojure.test.check.failure.call(null,property,result_map_rose,so_far,size,created_seed);
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq297){
var G__298 = cljs.core.first.call(null,seq297);
var seq297__$1 = cljs.core.next.call(null,seq297);
var G__299 = cljs.core.first.call(null,seq297__$1);
var seq297__$2 = cljs.core.next.call(null,seq297__$1);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic(G__298,G__299,seq297__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",(-620132443)),total_nodes_visited,new cljs.core.Keyword(null,"depth","depth",(1768663640)),depth,new cljs.core.Keyword(null,"result","result",(1415092211)),new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(smallest),new cljs.core.Keyword(null,"smallest","smallest",(-152623883)),new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree){
var shrinks_this_depth = clojure.test.check.rose_tree.children.call(null,rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root.call(null,rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,nodes)){
return clojure.test.check.smallest_shrink.call(null,total_nodes_visited,depth,current_smallest);
} else {
var vec__318 = nodes;
var seq__319 = cljs.core.seq.call(null,vec__318);
var first__320 = cljs.core.first.call(null,seq__319);
var seq__319__$1 = cljs.core.next.call(null,seq__319);
var head = first__320;
var tail = seq__319__$1;
var result = new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
if(cljs.core.truth_(clojure.test.check.not_falsey_or_exception_QMARK_.call(null,result))){
var G__321 = tail;
var G__322 = current_smallest;
var G__323 = (total_nodes_visited + (1));
var G__324 = depth;
nodes = G__321;
current_smallest = G__322;
total_nodes_visited = G__323;
depth = G__324;
continue;
} else {
var temp__19642__auto__ = cljs.core.seq.call(null,clojure.test.check.rose_tree.children.call(null,head));
if(temp__19642__auto__){
var children = temp__19642__auto__;
var G__325 = children;
var G__326 = clojure.test.check.rose_tree.root.call(null,head);
var G__327 = (total_nodes_visited + (1));
var G__328 = (depth + (1));
nodes = G__325;
current_smallest = G__326;
total_nodes_visited = G__327;
depth = G__328;
continue;
} else {
var G__329 = tail;
var G__330 = clojure.test.check.rose_tree.root.call(null,head);
var G__331 = (total_nodes_visited + (1));
var G__332 = depth;
nodes = G__329;
current_smallest = G__330;
total_nodes_visited = G__331;
depth = G__332;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed){
var root = clojure.test.check.rose_tree.root.call(null,failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",(1415092211)).cljs$core$IFn$_invoke$arity$1(root);
var failing_args = new cljs.core.Keyword(null,"args","args",(1315556576)).cljs$core$IFn$_invoke$arity$1(root);
clojure.test.check.clojure_test.report_failure.call(null,property,result,trial_number,failing_args);

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"result","result",(1415092211)),result,new cljs.core.Keyword(null,"seed","seed",(68613327)),seed,new cljs.core.Keyword(null,"failing-size","failing-size",(-429562538)),size,new cljs.core.Keyword(null,"num-tests","num-tests",(2050041354)),(trial_number + (1)),new cljs.core.Keyword(null,"fail","fail",(1706214930)),cljs.core.vec.call(null,failing_args),new cljs.core.Keyword(null,"shrunk","shrunk",(-2041664412)),clojure.test.check.shrink_loop.call(null,failing_rose_tree)], null);
});
