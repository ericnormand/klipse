// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants false}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19102){
var map__19103 = p__19102;
var map__19103__$1 = ((((!((map__19103 == null)))?((((map__19103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19103):map__19103);
var m = map__19103__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19103__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19103__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19105_19149 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19106_19150 = null;
var count__19107_19151 = (0);
var i__19108_19152 = (0);
while(true){
if((i__19108_19152 < count__19107_19151)){
var f_19153 = chunk__19106_19150.cljs$core$IIndexed$_nth$arity$2(null,i__19108_19152);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19153], 0));

var G__19154 = seq__19105_19149;
var G__19155 = chunk__19106_19150;
var G__19156 = count__19107_19151;
var G__19157 = (i__19108_19152 + (1));
seq__19105_19149 = G__19154;
chunk__19106_19150 = G__19155;
count__19107_19151 = G__19156;
i__19108_19152 = G__19157;
continue;
} else {
var temp__5278__auto___19158 = cljs.core.seq(seq__19105_19149);
if(temp__5278__auto___19158){
var seq__19105_19159__$1 = temp__5278__auto___19158;
if(cljs.core.chunked_seq_QMARK_(seq__19105_19159__$1)){
var c__8986__auto___19160 = cljs.core.chunk_first(seq__19105_19159__$1);
var G__19161 = cljs.core.chunk_rest(seq__19105_19159__$1);
var G__19162 = c__8986__auto___19160;
var G__19163 = cljs.core.count(c__8986__auto___19160);
var G__19164 = (0);
seq__19105_19149 = G__19161;
chunk__19106_19150 = G__19162;
count__19107_19151 = G__19163;
i__19108_19152 = G__19164;
continue;
} else {
var f_19165 = cljs.core.first(seq__19105_19159__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19165], 0));

var G__19166 = cljs.core.next(seq__19105_19159__$1);
var G__19167 = null;
var G__19168 = (0);
var G__19169 = (0);
seq__19105_19149 = G__19166;
chunk__19106_19150 = G__19167;
count__19107_19151 = G__19168;
i__19108_19152 = G__19169;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19170 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8074__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8074__auto__)){
return or__8074__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19170], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19170)))?cljs.core.second(arglists_19170):arglists_19170)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19121_19174 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19122_19175 = null;
var count__19123_19176 = (0);
var i__19124_19177 = (0);
while(true){
if((i__19124_19177 < count__19123_19176)){
var vec__19125_19178 = chunk__19122_19175.cljs$core$IIndexed$_nth$arity$2(null,i__19124_19177);
var name_19179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19125_19178,(0),null);
var map__19128_19180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19125_19178,(1),null);
var map__19128_19181__$1 = ((((!((map__19128_19180 == null)))?((((map__19128_19180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19128_19180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19128_19180):map__19128_19180);
var doc_19182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19128_19181__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19128_19181__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19179], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19183], 0));

if(cljs.core.truth_(doc_19182)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19182], 0));
} else {
}

var G__19193 = seq__19121_19174;
var G__19194 = chunk__19122_19175;
var G__19195 = count__19123_19176;
var G__19196 = (i__19124_19177 + (1));
seq__19121_19174 = G__19193;
chunk__19122_19175 = G__19194;
count__19123_19176 = G__19195;
i__19124_19177 = G__19196;
continue;
} else {
var temp__5278__auto___19200 = cljs.core.seq(seq__19121_19174);
if(temp__5278__auto___19200){
var seq__19121_19201__$1 = temp__5278__auto___19200;
if(cljs.core.chunked_seq_QMARK_(seq__19121_19201__$1)){
var c__8986__auto___19202 = cljs.core.chunk_first(seq__19121_19201__$1);
var G__19203 = cljs.core.chunk_rest(seq__19121_19201__$1);
var G__19204 = c__8986__auto___19202;
var G__19205 = cljs.core.count(c__8986__auto___19202);
var G__19206 = (0);
seq__19121_19174 = G__19203;
chunk__19122_19175 = G__19204;
count__19123_19176 = G__19205;
i__19124_19177 = G__19206;
continue;
} else {
var vec__19134_19207 = cljs.core.first(seq__19121_19201__$1);
var name_19208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19134_19207,(0),null);
var map__19137_19209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19134_19207,(1),null);
var map__19137_19210__$1 = ((((!((map__19137_19209 == null)))?((((map__19137_19209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19137_19209.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19137_19209):map__19137_19209);
var doc_19211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137_19210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137_19210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19208], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19212], 0));

if(cljs.core.truth_(doc_19211)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19211], 0));
} else {
}

var G__19213 = cljs.core.next(seq__19121_19201__$1);
var G__19214 = null;
var G__19215 = (0);
var G__19216 = (0);
seq__19121_19174 = G__19213;
chunk__19122_19175 = G__19214;
count__19123_19176 = G__19215;
i__19124_19177 = G__19216;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19142 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19143 = null;
var count__19144 = (0);
var i__19145 = (0);
while(true){
if((i__19145 < count__19144)){
var role = chunk__19143.cljs$core$IIndexed$_nth$arity$2(null,i__19145);
var temp__5278__auto___19220__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5278__auto___19220__$1)){
var spec_19221 = temp__5278__auto___19220__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe(spec_19221)], 0));
} else {
}

var G__19222 = seq__19142;
var G__19223 = chunk__19143;
var G__19224 = count__19144;
var G__19225 = (i__19145 + (1));
seq__19142 = G__19222;
chunk__19143 = G__19223;
count__19144 = G__19224;
i__19145 = G__19225;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq(seq__19142);
if(temp__5278__auto____$1){
var seq__19142__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19142__$1)){
var c__8986__auto__ = cljs.core.chunk_first(seq__19142__$1);
var G__19229 = cljs.core.chunk_rest(seq__19142__$1);
var G__19230 = c__8986__auto__;
var G__19231 = cljs.core.count(c__8986__auto__);
var G__19232 = (0);
seq__19142 = G__19229;
chunk__19143 = G__19230;
count__19144 = G__19231;
i__19145 = G__19232;
continue;
} else {
var role = cljs.core.first(seq__19142__$1);
var temp__5278__auto___19233__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5278__auto___19233__$2)){
var spec_19234 = temp__5278__auto___19233__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe(spec_19234)], 0));
} else {
}

var G__19235 = cljs.core.next(seq__19142__$1);
var G__19236 = null;
var G__19237 = (0);
var G__19238 = (0);
seq__19142 = G__19235;
chunk__19143 = G__19236;
count__19144 = G__19237;
i__19145 = G__19238;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
