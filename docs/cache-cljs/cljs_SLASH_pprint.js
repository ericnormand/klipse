goog.provide("cljs.pprint");
(function (){
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__21610__auto__ = [];
var len__21607__auto___1244 = arguments.length;
var i__21608__auto___1245 = (0);
while(true){
if((i__21608__auto___1245 < len__21607__auto___1244)){
args__21610__auto__.push((arguments[i__21608__auto___1245]));

var G__1246 = (i__21608__auto___1245 + (1));
i__21608__auto___1245 = G__1246;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((0) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.pprint.print;},new cljs.core.Symbol("cljs.pprint","print","cljs.pprint/print",(-1225708628),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"print","print",(-1354873355),null),"cljs/pprint.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.pprint.print)?cljs.pprint.print.cljs$lang$test:null)])));})()
;

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq1243){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1243));
});

new cljs.core.Var(function(){return cljs.pprint.print;},new cljs.core.Symbol("cljs.pprint","print","cljs.pprint/print",(-1225708628),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"print","print",(-1354873355),null),"cljs/pprint.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(25),(25),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.pprint.print)?cljs.pprint.print.cljs$lang$test:null)]));
(function (){
cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__21610__auto__ = [];
var len__21607__auto___1248 = arguments.length;
var i__21608__auto___1249 = (0);
while(true){
if((i__21608__auto___1249 < len__21607__auto___1248)){
args__21610__auto__.push((arguments[i__21608__auto___1249]));

var G__1250 = (i__21608__auto___1249 + (1));
i__21608__auto___1249 = G__1250;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((0) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.pprint.println;},new cljs.core.Symbol("cljs.pprint","println","cljs.pprint/println",(-821091800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"println","println",(-733595439),null),"cljs/pprint.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.pprint.println)?cljs.pprint.println.cljs$lang$test:null)])));})()
;

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq1247){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1247));
});

new cljs.core.Var(function(){return cljs.pprint.println;},new cljs.core.Symbol("cljs.pprint","println","cljs.pprint/println",(-821091800),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"println","println",(-733595439),null),"cljs/pprint.cljs",(15),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(28),(28),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.pprint.println)?cljs.pprint.println.cljs$lang$test:null)]));
(function (){
cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__1251 = cljs.core._EQ_;
var expr__1252 = c;
if(cljs.core.truth_((pred__1251.cljs$core$IFn$_invoke$arity$2 ? pred__1251.cljs$core$IFn$_invoke$arity$2("\b",expr__1252) : pred__1251("\b",expr__1252)))){
return "\\backspace";
} else {
if(cljs.core.truth_((pred__1251.cljs$core$IFn$_invoke$arity$2 ? pred__1251.cljs$core$IFn$_invoke$arity$2("\t",expr__1252) : pred__1251("\t",expr__1252)))){
return "\\tab";
} else {
if(cljs.core.truth_((pred__1251.cljs$core$IFn$_invoke$arity$2 ? pred__1251.cljs$core$IFn$_invoke$arity$2("\n",expr__1252) : pred__1251("\n",expr__1252)))){
return "\\newline";
} else {
if(cljs.core.truth_((pred__1251.cljs$core$IFn$_invoke$arity$2 ? pred__1251.cljs$core$IFn$_invoke$arity$2("\f",expr__1252) : pred__1251("\f",expr__1252)))){
return "\\formfeed";
} else {
if(cljs.core.truth_((pred__1251.cljs$core$IFn$_invoke$arity$2 ? pred__1251.cljs$core$IFn$_invoke$arity$2("\r",expr__1252) : pred__1251("\r",expr__1252)))){
return "\\return";
} else {
if(cljs.core.truth_((pred__1251.cljs$core$IFn$_invoke$arity$2 ? pred__1251.cljs$core$IFn$_invoke$arity$2("\"",expr__1252) : pred__1251("\"",expr__1252)))){
return "\\\"";
} else {
if(cljs.core.truth_((pred__1251.cljs$core$IFn$_invoke$arity$2 ? pred__1251.cljs$core$IFn$_invoke$arity$2("\\",expr__1252) : pred__1251("\\",expr__1252)))){
return "\\\\";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
}); return (
new cljs.core.Var(function(){return cljs.pprint.print_char;},new cljs.core.Symbol("cljs.pprint","print-char","cljs.pprint/print-char",(941356485),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"print-char","print-char",(550510524),null),"cljs/pprint.cljs",(18),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(cljs.pprint.print_char)?cljs.pprint.print_char.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__21610__auto__ = [];
var len__21607__auto___1255 = arguments.length;
var i__21608__auto___1256 = (0);
while(true){
if((i__21608__auto___1256 < len__21607__auto___1255)){
args__21610__auto__.push((arguments[i__21608__auto___1256]));

var G__1257 = (i__21608__auto___1256 + (1));
i__21608__auto___1256 = G__1257;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((0) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.pprint.pr;},new cljs.core.Symbol("cljs.pprint","pr","cljs.pprint/pr",(959901194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pr","pr",(1056937027),null),"cljs/pprint.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),true,(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.pprint.pr)?cljs.pprint.pr.cljs$lang$test:null)])));})()
;

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq1254){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1254));
});

new cljs.core.Var(function(){return cljs.pprint.pr;},new cljs.core.Symbol("cljs.pprint","pr","cljs.pprint/pr",(959901194),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pr","pr",(1056937027),null),"cljs/pprint.cljs",(20),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),true,(43),(43),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.pprint.pr)?cljs.pprint.pr.cljs$lang$test:null)]));
(function (){
cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__21610__auto__ = [];
var len__21607__auto___1259 = arguments.length;
var i__21608__auto___1260 = (0);
while(true){
if((i__21608__auto___1260 < len__21607__auto___1259)){
args__21610__auto__.push((arguments[i__21608__auto___1260]));

var G__1261 = (i__21608__auto___1260 + (1));
i__21608__auto___1260 = G__1261;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((0) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.pprint.prn;},new cljs.core.Symbol("cljs.pprint","prn","cljs.pprint/prn",(1172050406),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"prn","prn",(1561684909),null),"cljs/pprint.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(46),(46),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.pprint.prn)?cljs.pprint.prn.cljs$lang$test:null)])));})()
;

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq1258){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq1258));
});

new cljs.core.Var(function(){return cljs.pprint.prn;},new cljs.core.Symbol("cljs.pprint","prn","cljs.pprint/prn",(1172050406),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"prn","prn",(1561684909),null),"cljs/pprint.cljs",(11),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(0),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"more","more",(-418290273),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(46),(46),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"more","more",(-418290273),null)], null)),null,(cljs.core.truth_(cljs.pprint.prn)?cljs.pprint.prn.cljs$lang$test:null)]));
/**
 * Returns true if n is an float.
 */
(function (){
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
}); return (
new cljs.core.Var(function(){return cljs.pprint.float_QMARK_;},new cljs.core.Symbol("cljs.pprint","float?","cljs.pprint/float?",(554811137),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"float?","float?",(673884616),null),"cljs/pprint.cljs",(22),(1),(54),(54),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Returns true if n is an float.",((cljs.pprint.float_QMARK_)?cljs.pprint.float_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Convert char to int
 */
(function (){
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.char_code;},new cljs.core.Symbol("cljs.pprint","char-code","cljs.pprint/char-code",(-2021209987),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"char-code","char-code",(-1900072444),null),"cljs/pprint.cljs",(16),(1),(62),(62),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),"Convert char to int",(cljs.core.truth_(cljs.pprint.char_code)?cljs.pprint.char_code.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__1262 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1262,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1262,(1),null);
var G__1265 = new_context;
var G__1266 = remainder;
var G__1267 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__1265;
lis__$1 = G__1266;
acc = G__1267;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.map_passing_context;},new cljs.core.Symbol("cljs.pprint","map-passing-context","cljs.pprint/map-passing-context",(1281452330),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map-passing-context","map-passing-context",(1462402925),null),"cljs/pprint.cljs",(27),(1),(74),(74),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",(1401825487),null),new cljs.core.Symbol(null,"initial-context","initial-context",(1607621432),null),new cljs.core.Symbol(null,"lis","lis",(649343131),null)], null)),null,(cljs.core.truth_(cljs.pprint.map_passing_context)?cljs.pprint.map_passing_context.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__1268 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1268,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1268,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__1271 = new_context;
var G__1272 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__1271;
acc = G__1272;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.consume;},new cljs.core.Symbol("cljs.pprint","consume","cljs.pprint/consume",(1842778154),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"consume","consume",(1712962161),null),"cljs/pprint.cljs",(15),(1),(85),(85),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",(1401825487),null),new cljs.core.Symbol(null,"initial-context","initial-context",(1607621432),null)], null)),null,(cljs.core.truth_(cljs.pprint.consume)?cljs.pprint.consume.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__1273 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1273,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1273,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1273,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__1276 = new_context;
var G__1277 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__1276;
acc = G__1277;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.consume_while;},new cljs.core.Symbol("cljs.pprint","consume-while","cljs.pprint/consume-while",(-2134406342),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"consume-while","consume-while",(-1743822595),null),"cljs/pprint.cljs",(21),(1),(93),(93),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",(1401825487),null),new cljs.core.Symbol(null,"initial-context","initial-context",(1607621432),null)], null)),null,(cljs.core.truth_(cljs.pprint.consume_while)?cljs.pprint.consume_while.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21262__auto__ = (function cljs$pprint$unzip_map_$_iter__1278(s__1279){
return (new cljs.core.LazySeq(null,(function (){
var s__1279__$1 = s__1279;
while(true){
var temp__19804__auto__ = cljs.core.seq(s__1279__$1);
if(temp__19804__auto__){
var s__1279__$2 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1279__$2)){
var c__21260__auto__ = cljs.core.chunk_first(s__1279__$2);
var size__21261__auto__ = cljs.core.count(c__21260__auto__);
var b__1281 = cljs.core.chunk_buffer(size__21261__auto__);
if((function (){var i__1280 = (0);
while(true){
if((i__1280 < size__21261__auto__)){
var vec__1282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21260__auto__,i__1280);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1282,(0),null);
var vec__1285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1282,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1285,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1285,(1),null);
cljs.core.chunk_append(b__1281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__1310 = (i__1280 + (1));
i__1280 = G__1310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1281),cljs$pprint$unzip_map_$_iter__1278(cljs.core.chunk_rest(s__1279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1281),null);
}
} else {
var vec__1288 = cljs.core.first(s__1279__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1288,(0),null);
var vec__1291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1288,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1291,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1291,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__1278(cljs.core.rest(s__1279__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21262__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21262__auto__ = (function cljs$pprint$unzip_map_$_iter__1294(s__1295){
return (new cljs.core.LazySeq(null,(function (){
var s__1295__$1 = s__1295;
while(true){
var temp__19804__auto__ = cljs.core.seq(s__1295__$1);
if(temp__19804__auto__){
var s__1295__$2 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1295__$2)){
var c__21260__auto__ = cljs.core.chunk_first(s__1295__$2);
var size__21261__auto__ = cljs.core.count(c__21260__auto__);
var b__1297 = cljs.core.chunk_buffer(size__21261__auto__);
if((function (){var i__1296 = (0);
while(true){
if((i__1296 < size__21261__auto__)){
var vec__1298 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21260__auto__,i__1296);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1298,(0),null);
var vec__1301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1298,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1301,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1301,(1),null);
cljs.core.chunk_append(b__1297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__1311 = (i__1296 + (1));
i__1296 = G__1311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1297),cljs$pprint$unzip_map_$_iter__1294(cljs.core.chunk_rest(s__1295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1297),null);
}
} else {
var vec__1304 = cljs.core.first(s__1295__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1304,(0),null);
var vec__1307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1304,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1307,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1307,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__1294(cljs.core.rest(s__1295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21262__auto__(m);
})())], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.unzip_map;},new cljs.core.Symbol("cljs.pprint","unzip-map","cljs.pprint/unzip-map",(455280148),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"unzip-map","unzip-map",(317388877),null),"cljs/pprint.cljs",(17),(1),(101),(101),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(cljs.pprint.unzip_map)?cljs.pprint.unzip_map.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21262__auto__ = (function cljs$pprint$tuple_map_$_iter__1312(s__1313){
return (new cljs.core.LazySeq(null,(function (){
var s__1313__$1 = s__1313;
while(true){
var temp__19804__auto__ = cljs.core.seq(s__1313__$1);
if(temp__19804__auto__){
var s__1313__$2 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1313__$2)){
var c__21260__auto__ = cljs.core.chunk_first(s__1313__$2);
var size__21261__auto__ = cljs.core.count(c__21260__auto__);
var b__1315 = cljs.core.chunk_buffer(size__21261__auto__);
if((function (){var i__1314 = (0);
while(true){
if((i__1314 < size__21261__auto__)){
var vec__1316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21260__auto__,i__1314);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1316,(1),null);
cljs.core.chunk_append(b__1315,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__1322 = (i__1314 + (1));
i__1314 = G__1322;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1315),cljs$pprint$tuple_map_$_iter__1312(cljs.core.chunk_rest(s__1313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1315),null);
}
} else {
var vec__1319 = cljs.core.first(s__1313__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1319,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__1312(cljs.core.rest(s__1313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21262__auto__(m);
})());
}); return (
new cljs.core.Var(function(){return cljs.pprint.tuple_map;},new cljs.core.Symbol("cljs.pprint","tuple-map","cljs.pprint/tuple-map",(-649762778),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"tuple-map","tuple-map",(-1040054753),null),"cljs/pprint.cljs",(17),(1),(108),(108),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"v1","v1",(-2141311508),null)], null)),null,(cljs.core.truth_(cljs.pprint.tuple_map)?cljs.pprint.tuple_map.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__1323 = (n - (1));
n = G__1323;
continue;

}
}
break;
}
} else {
return s;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.rtrim;},new cljs.core.Symbol("cljs.pprint","rtrim","cljs.pprint/rtrim",(864300687),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"rtrim","rtrim",(979195078),null),"cljs/pprint.cljs",(13),(1),(112),(112),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(cljs.pprint.rtrim)?cljs.pprint.rtrim.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__1324 = (n + (1));
n = G__1324;
continue;
}
break;
}
} else {
return s;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.ltrim;},new cljs.core.Symbol("cljs.pprint","ltrim","cljs.pprint/ltrim",(-1020558957),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"ltrim","ltrim",(-1000166486),null),"cljs/pprint.cljs",(13),(1),(123),(123),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(cljs.pprint.ltrim)?cljs.pprint.ltrim.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__1326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__1326) : test(G__1326));
})()))){
return pos;
} else {
var G__1327 = (pos + (1));
pos = G__1327;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.prefix_count;},new cljs.core.Symbol("cljs.pprint","prefix-count","cljs.pprint/prefix-count",(-2142961912),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"prefix-count","prefix-count",(-1717709519),null),"cljs/pprint.cljs",(20),(1),(133),(133),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aseq","aseq",(-1865515628),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),null,(cljs.core.truth_(cljs.pprint.prefix_count)?cljs.pprint.prefix_count.cljs$lang$test:null)])));})()
;

/**
 * @interface
 */
(function (){
cljs.pprint.IPrettyFlush = function(){}; return (
new cljs.core.Var(function(){return cljs.pprint.IPrettyFlush;},new cljs.core.Symbol("cljs.pprint","IPrettyFlush","cljs.pprint/IPrettyFlush",(-1890322983),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"jsdoc","jsdoc",(1745183516)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"IPrettyFlush","IPrettyFlush",(-160784496),null),"cljs/pprint.cljs",(26),(1),(144),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.with_meta(new cljs.core.Symbol(null,"-ppflush","-ppflush",(1004696281),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),null], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pp","pp",(927842543),null)], null)], null)])], null),(144),cljs.core.List.EMPTY,null,cljs.core.list("@interface"),((cljs.pprint.IPrettyFlush)?cljs.pprint.IPrettyFlush.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__21129__auto__ = (((pp == null))?null:pp);
var m__21130__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__21129__auto__)]);
if(!((m__21130__auto__ == null))){
return (m__21130__auto__.cljs$core$IFn$_invoke$arity$1 ? m__21130__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__21130__auto__(pp));
} else {
var m__21130__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__21130__auto____$1 == null))){
return (m__21130__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__21130__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__21130__auto____$1(pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.pprint._ppflush;},new cljs.core.Symbol("cljs.pprint","-ppflush","cljs.pprint/-ppflush",(-1019520880),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",(652470118)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol("cljs.pprint","IPrettyFlush","cljs.pprint/IPrettyFlush",(-1890322983),null),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"-ppflush","-ppflush",(1004696281),null),"cljs/pprint.cljs",(12),(1),(144),(145),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pp","pp",(927842543),null)], null)),null,((cljs.pprint._ppflush)?cljs.pprint._ppflush.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint._STAR_default_page_width_STAR_ = (72); return (
new cljs.core.Var(function(){return cljs.pprint._STAR_default_page_width_STAR_;},new cljs.core.Symbol("cljs.pprint","*default-page-width*","cljs.pprint/*default-page-width*",(1407737463),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*default-page-width*","*default-page-width*",(1513321534),null),"cljs/pprint.cljs",(53),(1),true,(151),(151),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint._STAR_default_page_width_STAR_)?cljs.pprint._STAR_default_page_width_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__1328 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__1328) : sym(G__1328));
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_field;},new cljs.core.Symbol("cljs.pprint","get-field","cljs.pprint/get-field",(-416314497),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-field","get-field",(-521883344),null),"cljs/pprint.cljs",(17),(1),(153),(153),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_field)?cljs.pprint.get_field.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
}); return (
new cljs.core.Var(function(){return cljs.pprint.set_field;},new cljs.core.Symbol("cljs.pprint","set-field","cljs.pprint/set-field",(-1730135234),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"set-field","set-field",(-1858530569),null),"cljs/pprint.cljs",(17),(1),(156),(156),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"new-val","new-val",(902372928),null)], null)),null,(cljs.core.truth_(cljs.pprint.set_field)?cljs.pprint.set_field.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_column;},new cljs.core.Symbol("cljs.pprint","get-column","cljs.pprint/get-column",(-1495656070),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-column","get-column",(-1357569885),null),"cljs/pprint.cljs",(18),(1),(159),(159),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_column)?cljs.pprint.get_column.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",(212345235)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_line;},new cljs.core.Symbol("cljs.pprint","get-line","cljs.pprint/get-line",(-1892814317),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-line","get-line",(-1763436460),null),"cljs/pprint.cljs",(16),(1),(162),(162),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_line)?cljs.pprint.get_line.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",(61366548)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_max_column;},new cljs.core.Symbol("cljs.pprint","get-max-column","cljs.pprint/get-max-column",(-1761548159),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-max-column","get-max-column",(-1639319738),null),"cljs/pprint.cljs",(22),(1),(165),(165),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_max_column)?cljs.pprint.get_max_column.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",(61366548)),new_max);

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.set_max_column;},new cljs.core.Symbol("cljs.pprint","set-max-column","cljs.pprint/set-max-column",(-1763975889),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"set-max-column","set-max-column",(-1641796762),null),"cljs/pprint.cljs",(22),(1),(168),(168),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"new-max","new-max",(1278168725),null)], null)),null,(cljs.core.truth_(cljs.pprint.set_max_column)?cljs.pprint.set_max_column.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",(185279322)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_writer;},new cljs.core.Symbol("cljs.pprint","get-writer","cljs.pprint/get-writer",(-1783959376),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-writer","get-writer",(-1930573065),null),"cljs/pprint.cljs",(18),(1),(172),(172),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_writer)?cljs.pprint.get_writer.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",(212345235)),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",(212345235))) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",(1153190599))) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",(185279322))),c);
}); return (
new cljs.core.Var(function(){return cljs.pprint.c_write_char;},new cljs.core.Symbol("cljs.pprint","c-write-char","cljs.pprint/c-write-char",(-1301619874),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"c-write-char","c-write-char",(-1422774937),null),"cljs/pprint.cljs",(20),(1),(176),(176),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(cljs.pprint.c_write_char)?cljs.pprint.c_write_char.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__1330 = arguments.length;
switch (G__1330) {
case (1):
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.pprint.column_writer;},new cljs.core.Symbol("cljs.pprint","column-writer","cljs.pprint/column-writer",(-1540832078),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"column-writer","column-writer",(-1125044405),null),"cljs/pprint.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(184),(184),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null)], null)),null,(cljs.core.truth_(cljs.pprint.column_writer)?cljs.pprint.column_writer.cljs$lang$test:null)])));})()
;

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",(61366548)),max_columns,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(0),new cljs.core.Keyword(null,"line","line",(212345235)),(0),new cljs.core.Keyword(null,"base","base",(185279322)),writer], null));
if(typeof cljs.pprint.t_cljs$pprint1331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint1331 = (function (writer,max_columns,fields,meta1332){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta1332 = meta1332;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_1333,meta1332__$1){
var self__ = this;
var _1333__$1 = this;
return (new cljs.pprint.t_cljs$pprint1331(self__.writer,self__.max_columns,self__.fields,meta1332__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint1331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_1333){
var self__ = this;
var _1333__$1 = this;
return self__.meta1332;
});})(fields))
;

cljs.pprint.t_cljs$pprint1331.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint1331.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint1331.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1334 = cljs.core._EQ_;
var expr__1335 = cljs.core.type(x);
if(cljs.core.truth_((pred__1334.cljs$core$IFn$_invoke$arity$2 ? pred__1334.cljs$core$IFn$_invoke$arity$2(String,expr__1335) : pred__1334(String,expr__1335)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599)),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599))) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",(1153190599)),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",(212345235)),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",(212345235))) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__1334,expr__1335,this$__$1,fields){
return (function (p1__111_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__111_SHARP_,"\n");
});})(s,nl,pred__1334,expr__1335,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",(185279322))),s);
} else {
if(cljs.core.truth_((pred__1334.cljs$core$IFn$_invoke$arity$2 ? pred__1334.cljs$core$IFn$_invoke$arity$2(Number,expr__1335) : pred__1334(Number,expr__1335)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1335)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint1331.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.Symbol(null,"meta1332","meta1332",(-787913449),null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint1331.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1331.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1331";

cljs.pprint.t_cljs$pprint1331.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__21075__auto__,writer__21076__auto__,opt__21077__auto__){
return cljs.core._write(writer__21076__auto__,"cljs.pprint/t_cljs$pprint1331");
});})(fields))
;

(function (){
cljs.pprint.__GT_t_cljs$pprint1331 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint1331(writer__$1,max_columns__$1,fields__$1,meta1332){
return (new cljs.pprint.t_cljs$pprint1331(writer__$1,max_columns__$1,fields__$1,meta1332));
});})(fields))
; return (
new cljs.core.Var(function(){return cljs.pprint.__GT_t_cljs$pprint1331;},new cljs.core.Symbol("cljs.pprint","->t_cljs$pprint1331","cljs.pprint/->t_cljs$pprint1331",(-823919446),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->t_cljs$pprint1331","->t_cljs$pprint1331",(-908422415),null),"cljs/pprint.cljs",true,(6),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(188),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.Symbol(null,"meta1332","meta1332",(-787913449),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),null,(cljs.core.truth_(cljs.pprint.__GT_t_cljs$pprint1331)?cljs.pprint.__GT_t_cljs$pprint1331.cljs$lang$test:null)])));})()
;

}

return (new cljs.pprint.t_cljs$pprint1331(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.pprint.column_writer;},new cljs.core.Symbol("cljs.pprint","column-writer","cljs.pprint/column-writer",(-1540832078),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"column-writer","column-writer",(-1125044405),null),"cljs/pprint.cljs",(21),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(184),(184),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null)], null)),null,(cljs.core.truth_(cljs.pprint.column_writer)?cljs.pprint.column_writer.cljs$lang$test:null)]));
(function (){
cljs.pprint.get_miser_width; return (
new cljs.core.Var(function(){return cljs.pprint.get_miser_width;},new cljs.core.Symbol("cljs.pprint","get-miser-width","cljs.pprint/get-miser-width",(-1380651307),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-miser-width","get-miser-width",(-1493187350),null),"cljs/pprint.cljs",(25),(1),(224),true,(224),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.get_miser_width)?cljs.pprint.get_miser_width.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21096__auto__,k__21097__auto__){
var self__ = this;
var this__21096__auto____$1 = this;
return this__21096__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21097__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21098__auto__,k1339,else__21099__auto__){
var self__ = this;
var this__21098__auto____$1 = this;
var G__1343 = k1339;
var G__1343__$1 = (((G__1343 instanceof cljs.core.Keyword))?G__1343.fqn:null);
switch (G__1343__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1339,else__21099__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21110__auto__,writer__21111__auto__,opts__21112__auto__){
var self__ = this;
var this__21110__auto____$1 = this;
var pr_pair__21113__auto__ = ((function (this__21110__auto____$1){
return (function (keyval__21114__auto__){
return cljs.core.pr_sequential_writer(writer__21111__auto__,cljs.core.pr_writer,""," ","",opts__21112__auto__,keyval__21114__auto__);
});})(this__21110__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__21111__auto__,pr_pair__21113__auto__,"#cljs.pprint.logical-block{",", ","}",opts__21112__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",(-878878779)),self__.parent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",(-300141526)),self__.section],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",(668080143)),self__.start_col],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",(-148200125)),self__.indent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),self__.done_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),self__.prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",(367373057)),self__.suffix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1338){
var self__ = this;
var G__1338__$1 = this;
return (new cljs.core.RecordIter((0),G__1338__$1,(10),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",(-878878779)),new cljs.core.Keyword(null,"section","section",(-300141526)),new cljs.core.Keyword(null,"start-col","start-col",(668080143)),new cljs.core.Keyword(null,"indent","indent",(-148200125)),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),new cljs.core.Keyword(null,"suffix","suffix",(367373057)),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21094__auto__){
var self__ = this;
var this__21094__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21091__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21100__auto__){
var self__ = this;
var this__21100__auto____$1 = this;
return ((10) + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21092__auto__){
var self__ = this;
var this__21092__auto____$1 = this;
var h__20889__auto__ = self__.__hash;
if(!((h__20889__auto__ == null))){
return h__20889__auto__;
} else {
var h__20889__auto____$1 = (function (){var fexpr__1344 = ((function (h__20889__auto__,this__21092__auto____$1){
return (function (coll__21093__auto__){
return ((1977012399) ^ cljs.core.hash_unordered_coll(coll__21093__auto__));
});})(h__20889__auto__,this__21092__auto____$1))
;
return fexpr__1344(this__21092__auto____$1);
})();
self__.__hash = h__20889__auto____$1;

return h__20889__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1340,other1341){
var self__ = this;
var this1340__$1 = this;
return (!((other1341 == null))) && ((this1340__$1.constructor === other1341.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.parent,other1341.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.section,other1341.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.start_col,other1341.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.indent,other1341.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.done_nl,other1341.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.intra_block_nl,other1341.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.prefix,other1341.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.per_line_prefix,other1341.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.suffix,other1341.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.logical_block_callback,other1341.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1340__$1.__extmap,other1341.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21105__auto__,k__21106__auto__){
var self__ = this;
var this__21105__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",(367373057)),null,new cljs.core.Keyword(null,"indent","indent",(-148200125)),null,new cljs.core.Keyword(null,"parent","parent",(-878878779)),null,new cljs.core.Keyword(null,"section","section",(-300141526)),null,new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),null,new cljs.core.Keyword(null,"start-col","start-col",(668080143)),null,new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),null], null), null),k__21106__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__21105__auto____$1),self__.__meta),k__21106__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__21106__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21103__auto__,k__21104__auto__,G__1338){
var self__ = this;
var this__21103__auto____$1 = this;
var pred__1345 = cljs.core.keyword_identical_QMARK_;
var expr__1346 = k__21104__auto__;
if(cljs.core.truth_((function (){var G__1348 = new cljs.core.Keyword(null,"parent","parent",(-878878779));
var G__1349 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1348,G__1349) : pred__1345(G__1348,G__1349));
})())){
return (new cljs.pprint.logical_block(G__1338,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1350 = new cljs.core.Keyword(null,"section","section",(-300141526));
var G__1351 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1350,G__1351) : pred__1345(G__1350,G__1351));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__1338,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1352 = new cljs.core.Keyword(null,"start-col","start-col",(668080143));
var G__1353 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1352,G__1353) : pred__1345(G__1352,G__1353));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__1338,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1354 = new cljs.core.Keyword(null,"indent","indent",(-148200125));
var G__1355 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1354,G__1355) : pred__1345(G__1354,G__1355));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__1338,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1356 = new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340));
var G__1357 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1356,G__1357) : pred__1345(G__1356,G__1357));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__1338,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1358 = new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875));
var G__1359 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1358,G__1359) : pred__1345(G__1358,G__1359));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__1338,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1360 = new cljs.core.Keyword(null,"prefix","prefix",(-265908465));
var G__1361 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1360,G__1361) : pred__1345(G__1360,G__1361));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__1338,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1362 = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813));
var G__1363 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1362,G__1363) : pred__1345(G__1362,G__1363));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__1338,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1364 = new cljs.core.Keyword(null,"suffix","suffix",(367373057));
var G__1365 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1364,G__1365) : pred__1345(G__1364,G__1365));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__1338,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1366 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194));
var G__1367 = expr__1346;
return (pred__1345.cljs$core$IFn$_invoke$arity$2 ? pred__1345.cljs$core$IFn$_invoke$arity$2(G__1366,G__1367) : pred__1345(G__1366,G__1367));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__1338,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__21104__auto__,G__1338),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21108__auto__){
var self__ = this;
var this__21108__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",(-878878779)),self__.parent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",(-300141526)),self__.section],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",(668080143)),self__.start_col],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",(-148200125)),self__.indent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),self__.done_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),self__.prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",(367373057)),self__.suffix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21095__auto__,G__1338){
var self__ = this;
var this__21095__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__1338,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21101__auto__,entry__21102__auto__){
var self__ = this;
var this__21101__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__21102__auto__)){
return this__21101__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__21101__auto____$1,entry__21102__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",(761652748),null),new cljs.core.Symbol(null,"section","section",(1340390001),null),new cljs.core.Symbol(null,"start-col","start-col",(-1986355626),null),new cljs.core.Symbol(null,"indent","indent",(1492331402),null),new cljs.core.Symbol(null,"done-nl","done-nl",(1259507187),null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",(-845608894),null),new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",(-1807493956),null),new cljs.core.Symbol(null,"suffix","suffix",(2007904584),null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",(-1041744575),null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__21118__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__21118__auto__,writer__21119__auto__){
return cljs.core._write(writer__21119__auto__,"cljs.pprint/logical-block");
});

(function (){
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_logical_block;},new cljs.core.Symbol("cljs.pprint","->logical-block","cljs.pprint/->logical-block",(98053017),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->logical-block","->logical-block",(1025594448),null),"cljs/pprint.cljs",(42),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(230),(230),cljs.core.list(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",(761652748),null),new cljs.core.Symbol(null,"section","section",(1340390001),null),new cljs.core.Symbol(null,"start-col","start-col",(-1986355626),null),new cljs.core.Symbol(null,"indent","indent",(1492331402),null),new cljs.core.Symbol(null,"done-nl","done-nl",(1259507187),null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",(-845608894),null),new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",(-1807493956),null),new cljs.core.Symbol(null,"suffix","suffix",(2007904584),null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",(-1041744575),null)], null)),null,(cljs.core.truth_(cljs.pprint.__GT_logical_block)?cljs.pprint.__GT_logical_block.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__1342){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"section","section",(-300141526)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(G__1342),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(G__1342),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1342,new cljs.core.Keyword(null,"parent","parent",(-878878779)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",(-300141526)),new cljs.core.Keyword(null,"start-col","start-col",(668080143)),new cljs.core.Keyword(null,"indent","indent",(-148200125)),new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)),new cljs.core.Keyword(null,"prefix","prefix",(-265908465)),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)),new cljs.core.Keyword(null,"suffix","suffix",(367373057)),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194))], 0))),null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map__GT_logical_block;},new cljs.core.Symbol("cljs.pprint","map->logical-block","cljs.pprint/map->logical-block",(39009066),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map->logical-block","map->logical-block",(228213101),null),"cljs/pprint.cljs",(42),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(230),(230),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1342","G__1342",(-1030669758),null)], null)),null,(cljs.core.truth_(cljs.pprint.map__GT_logical_block)?cljs.pprint.map__GT_logical_block.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__1369 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__1369;
continue;

}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.ancestor_QMARK_;},new cljs.core.Symbol("cljs.pprint","ancestor?","cljs.pprint/ancestor?",(1243304987),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"ancestor?","ancestor?",(1104429788),null),"cljs/pprint.cljs",(17),(1),(236),(236),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",(761652748),null),new cljs.core.Symbol(null,"child","child",(-2030468224),null)], null)),null,(cljs.core.truth_(cljs.pprint.ancestor_QMARK_)?cljs.pprint.ancestor_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.buffer_length;},new cljs.core.Symbol("cljs.pprint","buffer-length","cljs.pprint/buffer-length",(-90787864),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"buffer-length","buffer-length",(-228633055),null),"cljs/pprint.cljs",(21),(1),(243),(243),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null)], null)),null,(cljs.core.truth_(cljs.pprint.buffer_length)?cljs.pprint.buffer_length.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21096__auto__,k__21097__auto__){
var self__ = this;
var this__21096__auto____$1 = this;
return this__21096__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21097__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21098__auto__,k1371,else__21099__auto__){
var self__ = this;
var this__21098__auto____$1 = this;
var G__1375 = k1371;
var G__1375__$1 = (((G__1375 instanceof cljs.core.Keyword))?G__1375.fqn:null);
switch (G__1375__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1371,else__21099__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21110__auto__,writer__21111__auto__,opts__21112__auto__){
var self__ = this;
var this__21110__auto____$1 = this;
var pr_pair__21113__auto__ = ((function (this__21110__auto____$1){
return (function (keyval__21114__auto__){
return cljs.core.pr_sequential_writer(writer__21111__auto__,cljs.core.pr_writer,""," ","",opts__21112__auto__,keyval__21114__auto__);
});})(this__21110__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__21111__auto__,pr_pair__21113__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__21112__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",(-232669377)),self__.data],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1370){
var self__ = this;
var G__1370__$1 = this;
return (new cljs.core.RecordIter((0),G__1370__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21094__auto__){
var self__ = this;
var this__21094__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21091__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21100__auto__){
var self__ = this;
var this__21100__auto____$1 = this;
return ((5) + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21092__auto__){
var self__ = this;
var this__21092__auto____$1 = this;
var h__20889__auto__ = self__.__hash;
if(!((h__20889__auto__ == null))){
return h__20889__auto__;
} else {
var h__20889__auto____$1 = (function (){var fexpr__1376 = ((function (h__20889__auto__,this__21092__auto____$1){
return (function (coll__21093__auto__){
return ((1809113693) ^ cljs.core.hash_unordered_coll(coll__21093__auto__));
});})(h__20889__auto__,this__21092__auto____$1))
;
return fexpr__1376(this__21092__auto____$1);
})();
self__.__hash = h__20889__auto____$1;

return h__20889__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1372,other1373){
var self__ = this;
var this1372__$1 = this;
return (!((other1373 == null))) && ((this1372__$1.constructor === other1373.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1372__$1.type_tag,other1373.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1372__$1.data,other1373.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1372__$1.trailing_white_space,other1373.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1372__$1.start_pos,other1373.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1372__$1.end_pos,other1373.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1372__$1.__extmap,other1373.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21105__auto__,k__21106__auto__){
var self__ = this;
var this__21105__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"data","data",(-232669377)),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__21106__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__21105__auto____$1),self__.__meta),k__21106__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__21106__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21103__auto__,k__21104__auto__,G__1370){
var self__ = this;
var this__21103__auto____$1 = this;
var pred__1377 = cljs.core.keyword_identical_QMARK_;
var expr__1378 = k__21104__auto__;
if(cljs.core.truth_((function (){var G__1380 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1381 = expr__1378;
return (pred__1377.cljs$core$IFn$_invoke$arity$2 ? pred__1377.cljs$core$IFn$_invoke$arity$2(G__1380,G__1381) : pred__1377(G__1380,G__1381));
})())){
return (new cljs.pprint.buffer_blob(G__1370,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1382 = new cljs.core.Keyword(null,"data","data",(-232669377));
var G__1383 = expr__1378;
return (pred__1377.cljs$core$IFn$_invoke$arity$2 ? pred__1377.cljs$core$IFn$_invoke$arity$2(G__1382,G__1383) : pred__1377(G__1382,G__1383));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__1370,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1384 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996));
var G__1385 = expr__1378;
return (pred__1377.cljs$core$IFn$_invoke$arity$2 ? pred__1377.cljs$core$IFn$_invoke$arity$2(G__1384,G__1385) : pred__1377(G__1384,G__1385));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__1370,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1386 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1387 = expr__1378;
return (pred__1377.cljs$core$IFn$_invoke$arity$2 ? pred__1377.cljs$core$IFn$_invoke$arity$2(G__1386,G__1387) : pred__1377(G__1386,G__1387));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__1370,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1388 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1389 = expr__1378;
return (pred__1377.cljs$core$IFn$_invoke$arity$2 ? pred__1377.cljs$core$IFn$_invoke$arity$2(G__1388,G__1389) : pred__1377(G__1388,G__1389));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__1370,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__21104__auto__,G__1370),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21108__auto__){
var self__ = this;
var this__21108__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",(-232669377)),self__.data],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21095__auto__,G__1370){
var self__ = this;
var this__21095__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__1370,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21101__auto__,entry__21102__auto__){
var self__ = this;
var this__21101__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__21102__auto__)){
return this__21101__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__21101__auto____$1,entry__21102__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",(-1158428773),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__21118__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__21118__auto__,writer__21119__auto__){
return cljs.core._write(writer__21119__auto__,"cljs.pprint/buffer-blob");
});

(function (){
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_buffer_blob;},new cljs.core.Symbol("cljs.pprint","->buffer-blob","cljs.pprint/->buffer-blob",(-1635964838),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->buffer-blob","->buffer-blob",(-1759358445),null),"cljs/pprint.cljs",(21),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(250),(250),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",(-1158428773),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.__GT_buffer_blob)?cljs.pprint.__GT_buffer_blob.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__1374){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1374),new cljs.core.Keyword(null,"data","data",(-232669377)).cljs$core$IFn$_invoke$arity$1(G__1374),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(G__1374),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1374),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1374),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1374,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",(-232669377)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map__GT_buffer_blob;},new cljs.core.Symbol("cljs.pprint","map->buffer-blob","cljs.pprint/map->buffer-blob",(-1435385863),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map->buffer-blob","map->buffer-blob",(-1522884176),null),"cljs/pprint.cljs",(21),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(250),(250),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1374","G__1374",(-658523447),null)], null)),null,(cljs.core.truth_(cljs.pprint.map__GT_buffer_blob)?cljs.pprint.map__GT_buffer_blob.cljs$lang$test:null)])));})()
;


(function (){
cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)),data,trailing_white_space,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.make_buffer_blob;},new cljs.core.Symbol("cljs.pprint","make-buffer-blob","cljs.pprint/make-buffer-blob",(-1731715457),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"make-buffer-blob","make-buffer-blob",(-1483774970),null),"cljs/pprint.cljs",(1),(250),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",(1407862150),null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",(-1158428773),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.make_buffer_blob)?cljs.pprint.make_buffer_blob.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__98__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__98__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.buffer_blob_QMARK_;},new cljs.core.Symbol("cljs.pprint","buffer-blob?","cljs.pprint/buffer-blob?",(412085750),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"buffer-blob?","buffer-blob?",(565638717),null),"cljs/pprint.cljs",(1),(250),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x__98__auto__","x__98__auto__",(208555239),null)], null)),null,(cljs.core.truth_(cljs.pprint.buffer_blob_QMARK_)?cljs.pprint.buffer_blob_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21096__auto__,k__21097__auto__){
var self__ = this;
var this__21096__auto____$1 = this;
return this__21096__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21097__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21098__auto__,k1392,else__21099__auto__){
var self__ = this;
var this__21098__auto____$1 = this;
var G__1396 = k1392;
var G__1396__$1 = (((G__1396 instanceof cljs.core.Keyword))?G__1396.fqn:null);
switch (G__1396__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1392,else__21099__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21110__auto__,writer__21111__auto__,opts__21112__auto__){
var self__ = this;
var this__21110__auto____$1 = this;
var pr_pair__21113__auto__ = ((function (this__21110__auto____$1){
return (function (keyval__21114__auto__){
return cljs.core.pr_sequential_writer(writer__21111__auto__,cljs.core.pr_writer,""," ","",opts__21112__auto__,keyval__21114__auto__);
});})(this__21110__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__21111__auto__,pr_pair__21113__auto__,"#cljs.pprint.nl-t{",", ","}",opts__21112__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",(1174270348)),self__.type],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1391){
var self__ = this;
var G__1391__$1 = this;
return (new cljs.core.RecordIter((0),G__1391__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21094__auto__){
var self__ = this;
var this__21094__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21091__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21100__auto__){
var self__ = this;
var this__21100__auto____$1 = this;
return ((5) + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21092__auto__){
var self__ = this;
var this__21092__auto____$1 = this;
var h__20889__auto__ = self__.__hash;
if(!((h__20889__auto__ == null))){
return h__20889__auto__;
} else {
var h__20889__auto____$1 = (function (){var fexpr__1397 = ((function (h__20889__auto__,this__21092__auto____$1){
return (function (coll__21093__auto__){
return ((-1640656800) ^ cljs.core.hash_unordered_coll(coll__21093__auto__));
});})(h__20889__auto__,this__21092__auto____$1))
;
return fexpr__1397(this__21092__auto____$1);
})();
self__.__hash = h__20889__auto____$1;

return h__20889__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1393,other1394){
var self__ = this;
var this1393__$1 = this;
return (!((other1394 == null))) && ((this1393__$1.constructor === other1394.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1393__$1.type_tag,other1394.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1393__$1.type,other1394.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1393__$1.logical_block,other1394.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1393__$1.start_pos,other1394.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1393__$1.end_pos,other1394.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1393__$1.__extmap,other1394.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21105__auto__,k__21106__auto__){
var self__ = this;
var this__21105__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"type","type",(1174270348)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__21106__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__21105__auto____$1),self__.__meta),k__21106__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__21106__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21103__auto__,k__21104__auto__,G__1391){
var self__ = this;
var this__21103__auto____$1 = this;
var pred__1398 = cljs.core.keyword_identical_QMARK_;
var expr__1399 = k__21104__auto__;
if(cljs.core.truth_((function (){var G__1401 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1402 = expr__1399;
return (pred__1398.cljs$core$IFn$_invoke$arity$2 ? pred__1398.cljs$core$IFn$_invoke$arity$2(G__1401,G__1402) : pred__1398(G__1401,G__1402));
})())){
return (new cljs.pprint.nl_t(G__1391,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1403 = new cljs.core.Keyword(null,"type","type",(1174270348));
var G__1404 = expr__1399;
return (pred__1398.cljs$core$IFn$_invoke$arity$2 ? pred__1398.cljs$core$IFn$_invoke$arity$2(G__1403,G__1404) : pred__1398(G__1403,G__1404));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__1391,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1405 = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564));
var G__1406 = expr__1399;
return (pred__1398.cljs$core$IFn$_invoke$arity$2 ? pred__1398.cljs$core$IFn$_invoke$arity$2(G__1405,G__1406) : pred__1398(G__1405,G__1406));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__1391,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1407 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1408 = expr__1399;
return (pred__1398.cljs$core$IFn$_invoke$arity$2 ? pred__1398.cljs$core$IFn$_invoke$arity$2(G__1407,G__1408) : pred__1398(G__1407,G__1408));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__1391,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1409 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1410 = expr__1399;
return (pred__1398.cljs$core$IFn$_invoke$arity$2 ? pred__1398.cljs$core$IFn$_invoke$arity$2(G__1409,G__1410) : pred__1398(G__1409,G__1410));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__1391,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__21104__auto__,G__1391),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21108__auto__){
var self__ = this;
var this__21108__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",(1174270348)),self__.type],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21095__auto__,G__1391){
var self__ = this;
var this__21095__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__1391,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21101__auto__,entry__21102__auto__){
var self__ = this;
var this__21101__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__21102__auto__)){
return this__21101__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__21101__auto____$1,entry__21102__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__21118__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__21118__auto__,writer__21119__auto__){
return cljs.core._write(writer__21119__auto__,"cljs.pprint/nl-t");
});

(function (){
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_nl_t;},new cljs.core.Symbol("cljs.pprint","->nl-t","cljs.pprint/->nl-t",(-634978275),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->nl-t","->nl-t",(-756139310),null),"cljs/pprint.cljs",(14),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(253),(253),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.__GT_nl_t)?cljs.pprint.__GT_nl_t.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__1395){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1395),new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(G__1395),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__1395),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1395),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1395),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1395,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",(1174270348)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map__GT_nl_t;},new cljs.core.Symbol("cljs.pprint","map->nl-t","cljs.pprint/map->nl-t",(-345266792),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map->nl-t","map->nl-t",(-195899485),null),"cljs/pprint.cljs",(14),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(253),(253),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1395","G__1395",(445466732),null)], null)),null,(cljs.core.truth_(cljs.pprint.map__GT_nl_t)?cljs.pprint.map__GT_nl_t.cljs$lang$test:null)])));})()
;


(function (){
cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)),type,logical_block,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.make_nl_t;},new cljs.core.Symbol("cljs.pprint","make-nl-t","cljs.pprint/make-nl-t",(-966863124),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"make-nl-t","make-nl-t",(-560480477),null),"cljs/pprint.cljs",(1),(253),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",(-1480165421),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.make_nl_t)?cljs.pprint.make_nl_t.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__98__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__98__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.nl_t_QMARK_;},new cljs.core.Symbol("cljs.pprint","nl-t?","cljs.pprint/nl-t?",(166293869),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"nl-t?","nl-t?",(916560662),null),"cljs/pprint.cljs",(1),(253),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x__98__auto__","x__98__auto__",(208555239),null)], null)),null,(cljs.core.truth_(cljs.pprint.nl_t_QMARK_)?cljs.pprint.nl_t_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21096__auto__,k__21097__auto__){
var self__ = this;
var this__21096__auto____$1 = this;
return this__21096__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21097__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21098__auto__,k1413,else__21099__auto__){
var self__ = this;
var this__21098__auto____$1 = this;
var G__1417 = k1413;
var G__1417__$1 = (((G__1417 instanceof cljs.core.Keyword))?G__1417.fqn:null);
switch (G__1417__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1413,else__21099__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21110__auto__,writer__21111__auto__,opts__21112__auto__){
var self__ = this;
var this__21110__auto____$1 = this;
var pr_pair__21113__auto__ = ((function (this__21110__auto____$1){
return (function (keyval__21114__auto__){
return cljs.core.pr_sequential_writer(writer__21111__auto__,cljs.core.pr_writer,""," ","",opts__21112__auto__,keyval__21114__auto__);
});})(this__21110__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__21111__auto__,pr_pair__21113__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__21112__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1412){
var self__ = this;
var G__1412__$1 = this;
return (new cljs.core.RecordIter((0),G__1412__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21094__auto__){
var self__ = this;
var this__21094__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21091__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21100__auto__){
var self__ = this;
var this__21100__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21092__auto__){
var self__ = this;
var this__21092__auto____$1 = this;
var h__20889__auto__ = self__.__hash;
if(!((h__20889__auto__ == null))){
return h__20889__auto__;
} else {
var h__20889__auto____$1 = (function (){var fexpr__1418 = ((function (h__20889__auto__,this__21092__auto____$1){
return (function (coll__21093__auto__){
return ((-414877272) ^ cljs.core.hash_unordered_coll(coll__21093__auto__));
});})(h__20889__auto__,this__21092__auto____$1))
;
return fexpr__1418(this__21092__auto____$1);
})();
self__.__hash = h__20889__auto____$1;

return h__20889__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1414,other1415){
var self__ = this;
var this1414__$1 = this;
return (!((other1415 == null))) && ((this1414__$1.constructor === other1415.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1414__$1.type_tag,other1415.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1414__$1.logical_block,other1415.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1414__$1.start_pos,other1415.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1414__$1.end_pos,other1415.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1414__$1.__extmap,other1415.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21105__auto__,k__21106__auto__){
var self__ = this;
var this__21105__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__21106__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__21105__auto____$1),self__.__meta),k__21106__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__21106__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21103__auto__,k__21104__auto__,G__1412){
var self__ = this;
var this__21103__auto____$1 = this;
var pred__1419 = cljs.core.keyword_identical_QMARK_;
var expr__1420 = k__21104__auto__;
if(cljs.core.truth_((function (){var G__1422 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1423 = expr__1420;
return (pred__1419.cljs$core$IFn$_invoke$arity$2 ? pred__1419.cljs$core$IFn$_invoke$arity$2(G__1422,G__1423) : pred__1419(G__1422,G__1423));
})())){
return (new cljs.pprint.start_block_t(G__1412,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1424 = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564));
var G__1425 = expr__1420;
return (pred__1419.cljs$core$IFn$_invoke$arity$2 ? pred__1419.cljs$core$IFn$_invoke$arity$2(G__1424,G__1425) : pred__1419(G__1424,G__1425));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__1412,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1426 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1427 = expr__1420;
return (pred__1419.cljs$core$IFn$_invoke$arity$2 ? pred__1419.cljs$core$IFn$_invoke$arity$2(G__1426,G__1427) : pred__1419(G__1426,G__1427));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__1412,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1428 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1429 = expr__1420;
return (pred__1419.cljs$core$IFn$_invoke$arity$2 ? pred__1419.cljs$core$IFn$_invoke$arity$2(G__1428,G__1429) : pred__1419(G__1428,G__1429));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__1412,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__21104__auto__,G__1412),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21108__auto__){
var self__ = this;
var this__21108__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21095__auto__,G__1412){
var self__ = this;
var this__21095__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__1412,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21101__auto__,entry__21102__auto__){
var self__ = this;
var this__21101__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__21102__auto__)){
return this__21101__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__21101__auto____$1,entry__21102__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__21118__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__21118__auto__,writer__21119__auto__){
return cljs.core._write(writer__21119__auto__,"cljs.pprint/start-block-t");
});

(function (){
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_start_block_t;},new cljs.core.Symbol("cljs.pprint","->start-block-t","cljs.pprint/->start-block-t",(480344694),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->start-block-t","->start-block-t",(402145455),null),"cljs/pprint.cljs",(23),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(255),(255),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.__GT_start_block_t)?cljs.pprint.__GT_start_block_t.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__1416){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1416),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__1416),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1416),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1416),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1416,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map__GT_start_block_t;},new cljs.core.Symbol("cljs.pprint","map->start-block-t","cljs.pprint/map->start-block-t",(268005770),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map->start-block-t","map->start-block-t",(344330163),null),"cljs/pprint.cljs",(23),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(255),(255),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1416","G__1416",(-1388043727),null)], null)),null,(cljs.core.truth_(cljs.pprint.map__GT_start_block_t)?cljs.pprint.map__GT_start_block_t.cljs$lang$test:null)])));})()
;


(function (){
cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)),logical_block,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.make_start_block_t;},new cljs.core.Symbol("cljs.pprint","make-start-block-t","cljs.pprint/make-start-block-t",(-212118119),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"make-start-block-t","make-start-block-t",(-333689762),null),"cljs/pprint.cljs",(1),(255),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.make_start_block_t)?cljs.pprint.make_start_block_t.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__98__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__98__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.start_block_t_QMARK_;},new cljs.core.Symbol("cljs.pprint","start-block-t?","cljs.pprint/start-block-t?",(-383013879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"start-block-t?","start-block-t?",(-530408882),null),"cljs/pprint.cljs",(1),(255),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x__98__auto__","x__98__auto__",(208555239),null)], null)),null,(cljs.core.truth_(cljs.pprint.start_block_t_QMARK_)?cljs.pprint.start_block_t_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21096__auto__,k__21097__auto__){
var self__ = this;
var this__21096__auto____$1 = this;
return this__21096__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21097__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21098__auto__,k1432,else__21099__auto__){
var self__ = this;
var this__21098__auto____$1 = this;
var G__1436 = k1432;
var G__1436__$1 = (((G__1436 instanceof cljs.core.Keyword))?G__1436.fqn:null);
switch (G__1436__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1432,else__21099__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21110__auto__,writer__21111__auto__,opts__21112__auto__){
var self__ = this;
var this__21110__auto____$1 = this;
var pr_pair__21113__auto__ = ((function (this__21110__auto____$1){
return (function (keyval__21114__auto__){
return cljs.core.pr_sequential_writer(writer__21111__auto__,cljs.core.pr_writer,""," ","",opts__21112__auto__,keyval__21114__auto__);
});})(this__21110__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__21111__auto__,pr_pair__21113__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__21112__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1431){
var self__ = this;
var G__1431__$1 = this;
return (new cljs.core.RecordIter((0),G__1431__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21094__auto__){
var self__ = this;
var this__21094__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21091__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21100__auto__){
var self__ = this;
var this__21100__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21092__auto__){
var self__ = this;
var this__21092__auto____$1 = this;
var h__20889__auto__ = self__.__hash;
if(!((h__20889__auto__ == null))){
return h__20889__auto__;
} else {
var h__20889__auto____$1 = (function (){var fexpr__1437 = ((function (h__20889__auto__,this__21092__auto____$1){
return (function (coll__21093__auto__){
return ((1365867980) ^ cljs.core.hash_unordered_coll(coll__21093__auto__));
});})(h__20889__auto__,this__21092__auto____$1))
;
return fexpr__1437(this__21092__auto____$1);
})();
self__.__hash = h__20889__auto____$1;

return h__20889__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1433,other1434){
var self__ = this;
var this1433__$1 = this;
return (!((other1434 == null))) && ((this1433__$1.constructor === other1434.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1433__$1.type_tag,other1434.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1433__$1.logical_block,other1434.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1433__$1.start_pos,other1434.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1433__$1.end_pos,other1434.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1433__$1.__extmap,other1434.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21105__auto__,k__21106__auto__){
var self__ = this;
var this__21105__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__21106__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__21105__auto____$1),self__.__meta),k__21106__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__21106__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21103__auto__,k__21104__auto__,G__1431){
var self__ = this;
var this__21103__auto____$1 = this;
var pred__1438 = cljs.core.keyword_identical_QMARK_;
var expr__1439 = k__21104__auto__;
if(cljs.core.truth_((function (){var G__1441 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1442 = expr__1439;
return (pred__1438.cljs$core$IFn$_invoke$arity$2 ? pred__1438.cljs$core$IFn$_invoke$arity$2(G__1441,G__1442) : pred__1438(G__1441,G__1442));
})())){
return (new cljs.pprint.end_block_t(G__1431,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1443 = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564));
var G__1444 = expr__1439;
return (pred__1438.cljs$core$IFn$_invoke$arity$2 ? pred__1438.cljs$core$IFn$_invoke$arity$2(G__1443,G__1444) : pred__1438(G__1443,G__1444));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__1431,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1445 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1446 = expr__1439;
return (pred__1438.cljs$core$IFn$_invoke$arity$2 ? pred__1438.cljs$core$IFn$_invoke$arity$2(G__1445,G__1446) : pred__1438(G__1445,G__1446));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__1431,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1447 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1448 = expr__1439;
return (pred__1438.cljs$core$IFn$_invoke$arity$2 ? pred__1438.cljs$core$IFn$_invoke$arity$2(G__1447,G__1448) : pred__1438(G__1447,G__1448));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__1431,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__21104__auto__,G__1431),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21108__auto__){
var self__ = this;
var this__21108__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21095__auto__,G__1431){
var self__ = this;
var this__21095__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__1431,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21101__auto__,entry__21102__auto__){
var self__ = this;
var this__21101__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__21102__auto__)){
return this__21101__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__21101__auto____$1,entry__21102__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__21118__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__21118__auto__,writer__21119__auto__){
return cljs.core._write(writer__21119__auto__,"cljs.pprint/end-block-t");
});

(function (){
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_end_block_t;},new cljs.core.Symbol("cljs.pprint","->end-block-t","cljs.pprint/->end-block-t",(-471753075),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->end-block-t","->end-block-t",(-457247532),null),"cljs/pprint.cljs",(21),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(257),(257),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.__GT_end_block_t)?cljs.pprint.__GT_end_block_t.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__1435){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1435),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__1435),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1435),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1435),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1435,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map__GT_end_block_t;},new cljs.core.Symbol("cljs.pprint","map->end-block-t","cljs.pprint/map->end-block-t",(903938056),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map->end-block-t","map->end-block-t",(1294346835),null),"cljs/pprint.cljs",(21),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(257),(257),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1435","G__1435",(1034342549),null)], null)),null,(cljs.core.truth_(cljs.pprint.map__GT_end_block_t)?cljs.pprint.map__GT_end_block_t.cljs$lang$test:null)])));})()
;


(function (){
cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)),logical_block,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.make_end_block_t;},new cljs.core.Symbol("cljs.pprint","make-end-block-t","cljs.pprint/make-end-block-t",(789783156),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"make-end-block-t","make-end-block-t",(911490239),null),"cljs/pprint.cljs",(1),(257),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.make_end_block_t)?cljs.pprint.make_end_block_t.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__98__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__98__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.end_block_t_QMARK_;},new cljs.core.Symbol("cljs.pprint","end-block-t?","cljs.pprint/end-block-t?",(-232662708),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"end-block-t?","end-block-t?",(-337190011),null),"cljs/pprint.cljs",(1),(257),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x__98__auto__","x__98__auto__",(208555239),null)], null)),null,(cljs.core.truth_(cljs.pprint.end_block_t_QMARK_)?cljs.pprint.end_block_t_QMARK_.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21096__auto__,k__21097__auto__){
var self__ = this;
var this__21096__auto____$1 = this;
return this__21096__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21097__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21098__auto__,k1451,else__21099__auto__){
var self__ = this;
var this__21098__auto____$1 = this;
var G__1455 = k1451;
var G__1455__$1 = (((G__1455 instanceof cljs.core.Keyword))?G__1455.fqn:null);
switch (G__1455__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1451,else__21099__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21110__auto__,writer__21111__auto__,opts__21112__auto__){
var self__ = this;
var this__21110__auto____$1 = this;
var pr_pair__21113__auto__ = ((function (this__21110__auto____$1){
return (function (keyval__21114__auto__){
return cljs.core.pr_sequential_writer(writer__21111__auto__,cljs.core.pr_writer,""," ","",opts__21112__auto__,keyval__21114__auto__);
});})(this__21110__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__21111__auto__,pr_pair__21113__auto__,"#cljs.pprint.indent-t{",", ","}",opts__21112__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),self__.relative_to],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1450){
var self__ = this;
var G__1450__$1 = this;
return (new cljs.core.RecordIter((0),G__1450__$1,(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21094__auto__){
var self__ = this;
var this__21094__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21091__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21100__auto__){
var self__ = this;
var this__21100__auto____$1 = this;
return ((6) + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21092__auto__){
var self__ = this;
var this__21092__auto____$1 = this;
var h__20889__auto__ = self__.__hash;
if(!((h__20889__auto__ == null))){
return h__20889__auto__;
} else {
var h__20889__auto____$1 = (function (){var fexpr__1456 = ((function (h__20889__auto__,this__21092__auto____$1){
return (function (coll__21093__auto__){
return ((-1602780238) ^ cljs.core.hash_unordered_coll(coll__21093__auto__));
});})(h__20889__auto__,this__21092__auto____$1))
;
return fexpr__1456(this__21092__auto____$1);
})();
self__.__hash = h__20889__auto____$1;

return h__20889__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1452,other1453){
var self__ = this;
var this1452__$1 = this;
return (!((other1453 == null))) && ((this1452__$1.constructor === other1453.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1452__$1.type_tag,other1453.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1452__$1.logical_block,other1453.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1452__$1.relative_to,other1453.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1452__$1.offset,other1453.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1452__$1.start_pos,other1453.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1452__$1.end_pos,other1453.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1452__$1.__extmap,other1453.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21105__auto__,k__21106__auto__){
var self__ = this;
var this__21105__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),null,new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),null,new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),null,new cljs.core.Keyword(null,"offset","offset",(296498311)),null,new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),null,new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),null], null), null),k__21106__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__21105__auto____$1),self__.__meta),k__21106__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__21106__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21103__auto__,k__21104__auto__,G__1450){
var self__ = this;
var this__21103__auto____$1 = this;
var pred__1457 = cljs.core.keyword_identical_QMARK_;
var expr__1458 = k__21104__auto__;
if(cljs.core.truth_((function (){var G__1460 = new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267));
var G__1461 = expr__1458;
return (pred__1457.cljs$core$IFn$_invoke$arity$2 ? pred__1457.cljs$core$IFn$_invoke$arity$2(G__1460,G__1461) : pred__1457(G__1460,G__1461));
})())){
return (new cljs.pprint.indent_t(G__1450,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1462 = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564));
var G__1463 = expr__1458;
return (pred__1457.cljs$core$IFn$_invoke$arity$2 ? pred__1457.cljs$core$IFn$_invoke$arity$2(G__1462,G__1463) : pred__1457(G__1462,G__1463));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__1450,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1464 = new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051));
var G__1465 = expr__1458;
return (pred__1457.cljs$core$IFn$_invoke$arity$2 ? pred__1457.cljs$core$IFn$_invoke$arity$2(G__1464,G__1465) : pred__1457(G__1464,G__1465));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__1450,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1466 = new cljs.core.Keyword(null,"offset","offset",(296498311));
var G__1467 = expr__1458;
return (pred__1457.cljs$core$IFn$_invoke$arity$2 ? pred__1457.cljs$core$IFn$_invoke$arity$2(G__1466,G__1467) : pred__1457(G__1466,G__1467));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__1450,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1468 = new cljs.core.Keyword(null,"start-pos","start-pos",(668789086));
var G__1469 = expr__1458;
return (pred__1457.cljs$core$IFn$_invoke$arity$2 ? pred__1457.cljs$core$IFn$_invoke$arity$2(G__1468,G__1469) : pred__1457(G__1468,G__1469));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__1450,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1470 = new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926));
var G__1471 = expr__1458;
return (pred__1457.cljs$core$IFn$_invoke$arity$2 ? pred__1457.cljs$core$IFn$_invoke$arity$2(G__1470,G__1471) : pred__1457(G__1470,G__1471));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__1450,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__21104__auto__,G__1450),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21108__auto__){
var self__ = this;
var this__21108__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),self__.relative_to],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21095__auto__,G__1450){
var self__ = this;
var this__21095__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__1450,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21101__auto__,entry__21102__auto__){
var self__ = this;
var this__21101__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__21102__auto__)){
return this__21101__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__21101__auto____$1,entry__21102__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"relative-to","relative-to",(1170431476),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__21118__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__21118__auto__,writer__21119__auto__){
return cljs.core._write(writer__21119__auto__,"cljs.pprint/indent-t");
});

(function (){
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_indent_t;},new cljs.core.Symbol("cljs.pprint","->indent-t","cljs.pprint/->indent-t",(-139346255),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->indent-t","->indent-t",(-59091720),null),"cljs/pprint.cljs",(18),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(259),(259),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",(-233331740),null),new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"relative-to","relative-to",(1170431476),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.__GT_indent_t)?cljs.pprint.__GT_indent_t.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__1454){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(G__1454),new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(G__1454),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)).cljs$core$IFn$_invoke$arity$1(G__1454),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(G__1454),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)).cljs$core$IFn$_invoke$arity$1(G__1454),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926)).cljs$core$IFn$_invoke$arity$1(G__1454),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1454,new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)),new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"start-pos","start-pos",(668789086)),new cljs.core.Keyword(null,"end-pos","end-pos",(-1643883926))], 0))),null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map__GT_indent_t;},new cljs.core.Symbol("cljs.pprint","map->indent-t","cljs.pprint/map->indent-t",(-1896477787),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map->indent-t","map->indent-t",(-2042682886),null),"cljs/pprint.cljs",(18),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(259),(259),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1454","G__1454",(-1813624229),null)], null)),null,(cljs.core.truth_(cljs.pprint.map__GT_indent_t)?cljs.pprint.map__GT_indent_t.cljs$lang$test:null)])));})()
;


(function (){
cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.make_indent_t;},new cljs.core.Symbol("cljs.pprint","make-indent-t","cljs.pprint/make-indent-t",(1328799744),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"make-indent-t","make-indent-t",(1182062169),null),"cljs/pprint.cljs",(1),(259),cljs.core.list(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logical-block","logical-block",(1059508963),null),new cljs.core.Symbol(null,"relative-to","relative-to",(1170431476),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"start-pos","start-pos",(-1985646683),null),new cljs.core.Symbol(null,"end-pos","end-pos",(-3352399),null)], null)),null,(cljs.core.truth_(cljs.pprint.make_indent_t)?cljs.pprint.make_indent_t.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__98__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(x__98__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.indent_t_QMARK_;},new cljs.core.Symbol("cljs.pprint","indent-t?","cljs.pprint/indent-t?",(-483860483),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"indent-t?","indent-t?",(-337513084),null),"cljs/pprint.cljs",(1),(259),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x__98__auto__","x__98__auto__",(208555239),null)], null)),null,(cljs.core.truth_(cljs.pprint.indent_t_QMARK_)?cljs.pprint.indent_t_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
}); return (
new cljs.core.Var(function(){return cljs.pprint.pp_newline;},new cljs.core.Symbol("cljs.pprint","pp-newline","cljs.pprint/pp-newline",(-54672964),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pp-newline","pp-newline",(-134817723),null),"cljs/pprint.cljs",(26),(1),(261),(261),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.pp_newline)?cljs.pprint.pp_newline.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.emit_nl; return (
new cljs.core.Var(function(){return cljs.pprint.emit_nl;},new cljs.core.Symbol("cljs.pprint","emit-nl","cljs.pprint/emit-nl",(100637404),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"emit-nl","emit-nl",(482765973),null),"cljs/pprint.cljs",(17),(1),(263),true,(263),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.emit_nl)?cljs.pprint.emit_nl.cljs$lang$test:null)])));})()
;
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
(function (){
cljs.pprint.write_token = (function (){var method_table__21427__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21428__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21429__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21430__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21431__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__21427__auto__,prefer_table__21428__auto__,method_cache__21429__auto__,cached_hierarchy__21430__auto__,hierarchy__21431__auto__){
return (function (p1__113_SHARP_,p2__112_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(p2__112_SHARP_);
});})(method_table__21427__auto__,prefer_table__21428__auto__,method_cache__21429__auto__,cached_hierarchy__21430__auto__,hierarchy__21431__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__21431__auto__,method_table__21427__auto__,prefer_table__21428__auto__,method_cache__21429__auto__,cached_hierarchy__21430__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.pprint.write_token;},new cljs.core.Symbol("cljs.pprint","write-token","cljs.pprint/write-token",(1467482807),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write-token","write-token",(1816210760),null),"cljs/pprint.cljs",(39),(1),(265),(265),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.write_token)?cljs.pprint.write_token.cljs$lang$test:null)])));})()
;
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",(-373430594)),(function (this$,token){
var temp__19804__auto___1474 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19804__auto___1474)){
var cb_1475 = temp__19804__auto___1474;
var G__1473_1476 = new cljs.core.Keyword(null,"start","start",(-355208981));
(cb_1475.cljs$core$IFn$_invoke$arity$1 ? cb_1475.cljs$core$IFn$_invoke$arity$1(G__1473_1476) : cb_1475(G__1473_1476));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token);
var temp__19804__auto___1477 = new cljs.core.Keyword(null,"prefix","prefix",(-265908465)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__19804__auto___1477)){
var prefix_1478 = temp__19804__auto___1477;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_1478);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",(1544648735)),(function (this$,token){
var temp__19804__auto___1480 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19804__auto___1480)){
var cb_1481 = temp__19804__auto___1480;
var G__1479_1482 = new cljs.core.Keyword(null,"end","end",(-268185958));
(cb_1481.cljs$core$IFn$_invoke$arity$1 ? cb_1481.cljs$core$IFn$_invoke$arity$1(G__1479_1482) : cb_1481(G__1479_1482));
} else {
}

var temp__19804__auto__ = new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__19804__auto__)){
var suffix = temp__19804__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",(528318969)),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__1483 = cljs.core._EQ_;
var expr__1484 = new cljs.core.Keyword(null,"relative-to","relative-to",(-470100051)).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__1486 = new cljs.core.Keyword(null,"block","block",(664686210));
var G__1487 = expr__1484;
return (pred__1483.cljs$core$IFn$_invoke$arity$2 ? pred__1483.cljs$core$IFn$_invoke$arity$2(G__1486,G__1487) : pred__1483(G__1486,G__1487));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__1488 = new cljs.core.Keyword(null,"current","current",(-1088038603));
var G__1489 = expr__1484;
return (pred__1483.cljs$core$IFn$_invoke$arity$2 ? pred__1483.cljs$core$IFn$_invoke$arity$2(G__1488,G__1489) : pred__1483(G__1488,G__1489));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1484)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",(-1830112173)),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",(-232669377)).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114)),(function (this$,token){
if(cljs.core.truth_((function (){var or__20219__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)));
if(or__20219__auto__){
return or__20219__auto__;
} else {
var and__20196__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",(883462889))));
if(and__20196__auto__){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__20196__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl(this$,token));
} else {
var temp__19642__auto___1490 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19642__auto___1490)){
var tws_1491 = temp__19642__auto___1490;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1491);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
}));
(function (){
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__1492 = cljs.core.seq(tokens);
var chunk__1493 = null;
var count__1494 = (0);
var i__1495 = (0);
while(true){
if((i__1495 < count__1494)){
var token = chunk__1493.cljs$core$IIndexed$_nth$arity$2(null,i__1495);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114))))){
var temp__19642__auto___1496 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19642__auto___1496)){
var tws_1497 = temp__19642__auto___1496;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1497);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token(this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(token));

var tws_1498 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__20196__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__20196__auto__)){
return tws_1498;
} else {
return and__20196__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1498);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
}

var G__1499 = seq__1492;
var G__1500 = chunk__1493;
var G__1501 = count__1494;
var G__1502 = (i__1495 + (1));
seq__1492 = G__1499;
chunk__1493 = G__1500;
count__1494 = G__1501;
i__1495 = G__1502;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq(seq__1492);
if(temp__19804__auto__){
var seq__1492__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1492__$1)){
var c__21298__auto__ = cljs.core.chunk_first(seq__1492__$1);
var G__1503 = cljs.core.chunk_rest(seq__1492__$1);
var G__1504 = c__21298__auto__;
var G__1505 = cljs.core.count(c__21298__auto__);
var G__1506 = (0);
seq__1492 = G__1503;
chunk__1493 = G__1504;
count__1494 = G__1505;
i__1495 = G__1506;
continue;
} else {
var token = cljs.core.first(seq__1492__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",(-1873863267)).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",(-1608382114))))){
var temp__19642__auto___1507 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19642__auto___1507)){
var tws_1508 = temp__19642__auto___1507;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1508);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token(this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(token));

var tws_1509 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__20196__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__20196__auto__)){
return tws_1509;
} else {
return and__20196__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_1509);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
}

var G__1510 = cljs.core.next(seq__1492__$1);
var G__1511 = null;
var G__1512 = (0);
var G__1513 = (0);
seq__1492 = G__1510;
chunk__1493 = G__1511;
count__1494 = G__1512;
i__1495 = G__1513;
continue;
}
} else {
return null;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.write_tokens;},new cljs.core.Symbol("cljs.pprint","write-tokens","cljs.pprint/write-tokens",(-1995632649),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write-tokens","write-tokens",(1917187118),null),"cljs/pprint.cljs",(20),(1),(301),(301),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"tokens","tokens",(821592223),null),new cljs.core.Symbol(null,"force-trailing-whitespace","force-trailing-whitespace",(1456336951),null)], null)),null,(cljs.core.truth_(cljs.pprint.write_tokens)?cljs.pprint.write_tokens.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
}); return (
new cljs.core.Var(function(){return cljs.pprint.tokens_fit_QMARK_;},new cljs.core.Symbol("cljs.pprint","tokens-fit?","cljs.pprint/tokens-fit?",(723209145),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"tokens-fit?","tokens-fit?",(314725758),null),"cljs/pprint.cljs",(19),(1),(318),(318),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"tokens","tokens",(821592223),null)], null)),null,(cljs.core.truth_(cljs.pprint.tokens_fit_QMARK_)?cljs.pprint.tokens_fit_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__20219__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.linear_nl_QMARK_;},new cljs.core.Symbol("cljs.pprint","linear-nl?","cljs.pprint/linear-nl?",(346140424),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"linear-nl?","linear-nl?",(-308364991),null),"cljs/pprint.cljs",(18),(1),(324),(324),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"lb","lb",(950310490),null),new cljs.core.Symbol(null,"section","section",(1340390001),null)], null)),null,(cljs.core.truth_(cljs.pprint.linear_nl_QMARK_)?cljs.pprint.linear_nl_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width(this$));
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__20196__auto__ = miser_width;
if(cljs.core.truth_(and__20196__auto__)){
var and__20196__auto____$1 = maxcol;
if(cljs.core.truth_(and__20196__auto____$1)){
var and__20196__auto____$2 = (cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__20196__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__20196__auto____$2;
}
} else {
return and__20196__auto____$1;
}
} else {
return and__20196__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.miser_nl_QMARK_;},new cljs.core.Symbol("cljs.pprint","miser-nl?","cljs.pprint/miser-nl?",(-273692155),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"miser-nl?","miser-nl?",(-152788902),null),"cljs/pprint.cljs",(17),(1),(328),(328),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"lb","lb",(950310490),null),new cljs.core.Symbol(null,"section","section",(1340390001),null)], null)),null,(cljs.core.truth_(cljs.pprint.miser_nl_QMARK_)?cljs.pprint.miser_nl_QMARK_.cljs$lang$test:null)])));})()
;
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
(function (){
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__21427__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21428__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21429__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21430__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21431__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__21427__auto__,prefer_table__21428__auto__,method_cache__21429__auto__,cached_hierarchy__21430__auto__,hierarchy__21431__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__21427__auto__,prefer_table__21428__auto__,method_cache__21429__auto__,cached_hierarchy__21430__auto__,hierarchy__21431__auto__))
,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__21431__auto__,method_table__21427__auto__,prefer_table__21428__auto__,method_cache__21429__auto__,cached_hierarchy__21430__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.pprint.emit_nl_QMARK_;},new cljs.core.Symbol("cljs.pprint","emit-nl?","cljs.pprint/emit-nl?",(1379535965),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"emit-nl?","emit-nl?",(1256274566),null),"cljs/pprint.cljs",(36),(1),(335),(335),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.emit_nl_QMARK_)?cljs.pprint.emit_nl_QMARK_.cljs$lang$test:null)])));})()
;
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",(872268697)),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",(-556060186)),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",(883462889)),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(newl);
var or__20219__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
var or__20219__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__20219__auto____$1){
return or__20219__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)),(function (_,___$1,___$2,___$3){
return true;
}));
(function (){
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__114_SHARP_){
return cljs.core.not((function (){var and__20196__auto__ = cljs.pprint.nl_t_QMARK_(p1__114_SHARP_);
if(cljs.core.truth_(and__20196__auto__)){
return cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(p1__114_SHARP_),lb);
} else {
return and__20196__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_section;},new cljs.core.Symbol("cljs.pprint","get-section","cljs.pprint/get-section",(1303887224),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-section","get-section",(1955501217),null),"cljs/pprint.cljs",(19),(1),(358),(358),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_section)?cljs.pprint.get_section.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__115_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(p1__115_SHARP_);
return cljs.core.not((function (){var and__20196__auto__ = cljs.pprint.nl_t_QMARK_(p1__115_SHARP_);
if(cljs.core.truth_(and__20196__auto__)){
var or__20219__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__20219__auto__){
return or__20219__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__20196__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_sub_section;},new cljs.core.Symbol("cljs.pprint","get-sub-section","cljs.pprint/get-sub-section",(-1176832379),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-sub-section","get-sub-section",(-1595572020),null),"cljs/pprint.cljs",(23),(1),(365),(365),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buffer","buffer",(-2037140571),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_sub_section)?cljs.pprint.get_sub_section.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",(-381024340)).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",(1808826875)).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__1514 = new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__1514;
continue;
} else {
return null;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.update_nl_state;},new cljs.core.Symbol("cljs.pprint","update-nl-state","cljs.pprint/update-nl-state",(192892547),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"update-nl-state","update-nl-state",(305681608),null),"cljs/pprint.cljs",(23),(1),(373),(373),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lb","lb",(950310490),null)], null)),null,(cljs.core.truth_(cljs.pprint.update_nl_state)?cljs.pprint.update_nl_state.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",(-581022564)).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_1515 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_1515);

return cljs.pprint.update_nl_state(lb);
}); return (
new cljs.core.Var(function(){return cljs.pprint.emit_nl;},new cljs.core.Symbol("cljs.pprint","emit-nl","cljs.pprint/emit-nl",(100637404),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"emit-nl","emit-nl",(482765973),null),"cljs/pprint.cljs",(15),(1),(382),(382),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"nl","nl",(1731484120),null)], null)),null,(cljs.core.truth_(cljs.pprint.emit_nl)?cljs.pprint.emit_nl.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__116_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__116_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.split_at_newline;},new cljs.core.Symbol("cljs.pprint","split-at-newline","cljs.pprint/split-at-newline",(1996218018),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"split-at-newline","split-at-newline",(-1893715735),null),"cljs/pprint.cljs",(24),(1),(393),(393),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tokens","tokens",(821592223),null)], null)),null,(cljs.core.truth_(cljs.pprint.split_at_newline)?cljs.pprint.split_at_newline.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__1516 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1516,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1516,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__1519 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1519,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1519,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__1522 = newl;
var G__1523 = this$;
var G__1524 = section;
var G__1525 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__1522,G__1523,G__1524,G__1525) : cljs.pprint.emit_nl_QMARK_(G__1522,G__1523,G__1524,G__1525));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string(this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.write_token_string;},new cljs.core.Symbol("cljs.pprint","write-token-string","cljs.pprint/write-token-string",(1815936809),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write-token-string","write-token-string",(402376032),null),"cljs/pprint.cljs",(26),(1),(399),(399),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"tokens","tokens",(821592223),null)], null)),null,(cljs.core.truth_(cljs.pprint.write_token_string)?cljs.pprint.write_token_string.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__1526 = new_buffer;
buffer = G__1526;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.write_line;},new cljs.core.Symbol("cljs.pprint","write-line","cljs.pprint/write-line",(1867615210),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write-line","write-line",(1886036515),null),"cljs/pprint.cljs",(18),(1),(423),(423),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.write_line)?cljs.pprint.write_line.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.add_to_buffer;},new cljs.core.Symbol("cljs.pprint","add-to-buffer","cljs.pprint/add-to-buffer",(-1501969991),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"add-to-buffer","add-to-buffer",(-1364001922),null),"cljs/pprint.cljs",(21),(1),(433),(433),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"token","token",(429068312),null)], null)),null,(cljs.core.truth_(cljs.pprint.add_to_buffer)?cljs.pprint.add_to_buffer.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__19642__auto__ = new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19642__auto__)){
var buf = temp__19642__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.write_buffered_output;},new cljs.core.Symbol("cljs.pprint","write-buffered-output","cljs.pprint/write-buffered-output",(365228641),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write-buffered-output","write-buffered-output",(218883112),null),"cljs/pprint.cljs",(29),(1),(439),(439),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.write_buffered_output)?cljs.pprint.write_buffered_output.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__19804__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19804__auto__)){
var tws = temp__19804__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),null);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.write_white_space;},new cljs.core.Symbol("cljs.pprint","write-white-space","cljs.pprint/write-white-space",(898134995),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write-white-space","write-white-space",(851511786),null),"cljs/pprint.cljs",(25),(1),(446),(446),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.write_white_space)?cljs.pprint.write_white_space.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",(846941813)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",(-876713613)),new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_1531 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_1532 = (oldpos_1531 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos_1532);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_1531,newpos_1532));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__1527_1533 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__1528_1534 = null;
var count__1529_1535 = (0);
var i__1530_1536 = (0);
while(true){
if((i__1530_1536 < count__1529_1535)){
var l_1537__$1 = chunk__1528_1534.cljs$core$IIndexed$_nth$arity$2(null,i__1530_1536);
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_1537__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__1538 = seq__1527_1533;
var G__1539 = chunk__1528_1534;
var G__1540 = count__1529_1535;
var G__1541 = (i__1530_1536 + (1));
seq__1527_1533 = G__1538;
chunk__1528_1534 = G__1539;
count__1529_1535 = G__1540;
i__1530_1536 = G__1541;
continue;
} else {
var temp__19804__auto___1542 = cljs.core.seq(seq__1527_1533);
if(temp__19804__auto___1542){
var seq__1527_1543__$1 = temp__19804__auto___1542;
if(cljs.core.chunked_seq_QMARK_(seq__1527_1543__$1)){
var c__21298__auto___1544 = cljs.core.chunk_first(seq__1527_1543__$1);
var G__1545 = cljs.core.chunk_rest(seq__1527_1543__$1);
var G__1546 = c__21298__auto___1544;
var G__1547 = cljs.core.count(c__21298__auto___1544);
var G__1548 = (0);
seq__1527_1533 = G__1545;
chunk__1528_1534 = G__1546;
count__1529_1535 = G__1547;
i__1530_1536 = G__1548;
continue;
} else {
var l_1549__$1 = cljs.core.first(seq__1527_1543__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_1549__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__1550 = cljs.core.next(seq__1527_1543__$1);
var G__1551 = null;
var G__1552 = (0);
var G__1553 = (0);
seq__1527_1533 = G__1550;
chunk__1528_1534 = G__1551;
count__1529_1535 = G__1552;
i__1530_1536 = G__1553;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",(-876713613)),new cljs.core.Keyword(null,"writing","writing",(-1486865108)));

return cljs.core.last(lines);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.write_initial_lines;},new cljs.core.Symbol("cljs.pprint","write-initial-lines","cljs.pprint/write-initial-lines",(-1059532595),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write-initial-lines","write-initial-lines",(965753092),null),"cljs/pprint.cljs",(27),(1),(453),(453),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"Writer","Writer",(-1329856755),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"String","String",(-2070057435),null)], null))], null)),null,(cljs.core.truth_(cljs.pprint.write_initial_lines)?cljs.pprint.write_initial_lines.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.p_write_char;},new cljs.core.Symbol("cljs.pprint","p-write-char","cljs.pprint/p-write-char",(-920393035),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"p-write-char","p-write-char",(-261586690),null),"cljs/pprint.cljs",(20),(1),(478),(478),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"c","c",(-122660552),null)], null)),null,(cljs.core.truth_(cljs.pprint.p_write_char)?cljs.pprint.p_write_char.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)),new cljs.core.Keyword(null,"buffer-block","buffer-block",(-10937307)),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",(-1222834267)),new cljs.core.Keyword(null,"sections","sections",(-886710106)),new cljs.core.Keyword(null,"mode","mode",(654403691)),new cljs.core.Keyword(null,"pos","pos",(-864607220)),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),new cljs.core.Keyword(null,"base","base",(185279322)),new cljs.core.Keyword(null,"buffer-level","buffer-level",(928864731)),new cljs.core.Keyword(null,"buffer","buffer",(617295198))],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",(-1486865108)),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint1554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWriter}
 * @implements {cljs.pprint.IPrettyFlush}
*/
cljs.pprint.t_cljs$pprint1554 = (function (writer,max_columns,miser_width,lb,fields,meta1555){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta1555 = meta1555;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_1556,meta1555__$1){
var self__ = this;
var _1556__$1 = this;
return (new cljs.pprint.t_cljs$pprint1554(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta1555__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1554.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_1556){
var self__ = this;
var _1556__$1 = this;
return self__.meta1555;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1554.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1554.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1557 = cljs.core._EQ_;
var expr__1558 = cljs.core.type(x);
if(cljs.core.truth_((pred__1557.cljs$core$IFn$_invoke$arity$2 ? pred__1557.cljs$core$IFn$_invoke$arity$2(String,expr__1558) : pred__1557(String,expr__1558)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",(1496006996)),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__1557.cljs$core$IFn$_invoke$arity$2 ? pred__1557.cljs$core$IFn$_invoke$arity$2(Number,expr__1558) : pred__1557(Number,expr__1558)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1558)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1554.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1554.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint1554.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",(-876713613)))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",(617295198)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",(617295198)),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1554.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"miser-width","miser-width",(330482090),null),new cljs.core.Symbol(null,"lb","lb",(950310490),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.Symbol(null,"meta1555","meta1555",(-1018193115),null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint1554.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1554.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1554";

cljs.pprint.t_cljs$pprint1554.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__21075__auto__,writer__21076__auto__,opt__21077__auto__){
return cljs.core._write(writer__21076__auto__,"cljs.pprint/t_cljs$pprint1554");
});})(lb,fields))
;

(function (){
cljs.pprint.__GT_t_cljs$pprint1554 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint1554(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta1555){
return (new cljs.pprint.t_cljs$pprint1554(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta1555));
});})(lb,fields))
; return (
new cljs.core.Var(function(){return cljs.pprint.__GT_t_cljs$pprint1554;},new cljs.core.Symbol("cljs.pprint","->t_cljs$pprint1554","cljs.pprint/->t_cljs$pprint1554",(-610256570),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null,new cljs.core.Symbol("cljs.pprint","IPrettyFlush","cljs.pprint/IPrettyFlush",(-1890322983),null),null], null), null),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->t_cljs$pprint1554","->t_cljs$pprint1554",(-454503527),null),"cljs/pprint.cljs",true,(5),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(509),cljs.core.list(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"miser-width","miser-width",(330482090),null),new cljs.core.Symbol(null,"lb","lb",(950310490),null),new cljs.core.Symbol(null,"fields","fields",(-291534703),null),new cljs.core.Symbol(null,"meta1555","meta1555",(-1018193115),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IDeref","cljs.core/IDeref",(1331648568),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),null,(cljs.core.truth_(cljs.pprint.__GT_t_cljs$pprint1554)?cljs.pprint.__GT_t_cljs$pprint1554.cljs$lang$test:null)])));})()
;

}

return (new cljs.pprint.t_cljs$pprint1554(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.pprint.pretty_writer;},new cljs.core.Symbol("cljs.pprint","pretty-writer","cljs.pprint/pretty-writer",(295861173),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pretty-writer","pretty-writer",(417697260),null),"cljs/pprint.cljs",(21),(1),(494),(494),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"max-columns","max-columns",(-912112507),null),new cljs.core.Symbol(null,"miser-width","miser-width",(330482090),null)], null)),null,(cljs.core.truth_(cljs.pprint.pretty_writer)?cljs.pprint.pretty_writer.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$);

var temp__19804__auto___1561 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19804__auto___1561)){
var cb_1562 = temp__19804__auto___1561;
var G__1560_1563 = new cljs.core.Keyword(null,"start","start",(-355208981));
(cb_1562.cljs$core$IFn$_invoke$arity$1 ? cb_1562.cljs$core$IFn$_invoke$arity$1(G__1560_1563) : cb_1562(G__1560_1563));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.start_block;},new cljs.core.Symbol("cljs.pprint","start-block","cljs.pprint/start-block",(-270767114),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"start-block","start-block",(-1768455633),null),"cljs/pprint.cljs",(19),(1),(551),(551),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"prefix","prefix",(1374623062),null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",(-1807493956),null),new cljs.core.Symbol(null,"suffix","suffix",(2007904584),null)], null)),null,(cljs.core.truth_(cljs.pprint.start_block)?cljs.pprint.start_block.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",(367373057)).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__19804__auto___1565 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",(1612691194)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__19804__auto___1565)){
var cb_1566 = temp__19804__auto___1565;
var G__1564_1567 = new cljs.core.Keyword(null,"end","end",(-268185958));
(cb_1566.cljs$core$IFn$_invoke$arity$1 ? cb_1566.cljs$core$IFn$_invoke$arity$1(G__1564_1567) : cb_1566(G__1564_1567));
} else {
}
} else {
var oldpos_1568 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_1569 = (oldpos_1568 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",(-864607220)),newpos_1569);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_1568,newpos_1569));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)),new cljs.core.Keyword(null,"parent","parent",(-878878779)).cljs$core$IFn$_invoke$arity$1(lb));
}); return (
new cljs.core.Var(function(){return cljs.pprint.end_block;},new cljs.core.Symbol("cljs.pprint","end-block","cljs.pprint/end-block",(-397543401),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"end-block","end-block",(-210366898),null),"cljs/pprint.cljs",(17),(1),(571),(571),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.end_block)?cljs.pprint.end_block.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",(654403691)),new cljs.core.Keyword(null,"buffering","buffering",(-876713613)));

var pos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
}); return (
new cljs.core.Var(function(){return cljs.pprint.nl;},new cljs.core.Symbol("cljs.pprint","nl","cljs.pprint/nl",(2029860753),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"nl","nl",(1731484120),null),"cljs/pprint.cljs",(10),(1),(586),(586),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"type","type",(-1480165421),null)], null)),null,(cljs.core.truth_(cljs.pprint.nl)?cljs.pprint.nl.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",(-1466339776)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",(654403691)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",(-1486865108)))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",(-148200125)).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__1570 = cljs.core._EQ_;
var expr__1571 = relative_to;
if(cljs.core.truth_((function (){var G__1573 = new cljs.core.Keyword(null,"block","block",(664686210));
var G__1574 = expr__1571;
return (pred__1570.cljs$core$IFn$_invoke$arity$2 ? pred__1570.cljs$core$IFn$_invoke$arity$2(G__1573,G__1574) : pred__1570(G__1573,G__1574));
})())){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",(668080143)).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__1575 = new cljs.core.Keyword(null,"current","current",(-1088038603));
var G__1576 = expr__1571;
return (pred__1570.cljs$core$IFn$_invoke$arity$2 ? pred__1570.cljs$core$IFn$_invoke$arity$2(G__1575,G__1576) : pred__1570(G__1575,G__1576));
})())){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1571)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.indent;},new cljs.core.Symbol("cljs.pprint","indent","cljs.pprint/indent",(1370108405),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"indent","indent",(1492331402),null),"cljs/pprint.cljs",(14),(1),(591),(591),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"relative-to","relative-to",(1170431476),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs.pprint.indent)?cljs.pprint.indent.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_miser_width;},new cljs.core.Symbol("cljs.pprint","get-miser-width","cljs.pprint/get-miser-width",(-1380651307),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-miser-width","get-miser-width",(-1493187350),null),"cljs/pprint.cljs",(23),(1),(603),(603),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_miser_width)?cljs.pprint.get_miser_width.cljs$lang$test:null)])));})()
;
/**
 * Bind to true if you want write to use pretty printing
 */
(function (){
cljs.pprint._STAR_print_pretty_STAR_ = true; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pretty*","cljs.pprint/*print-pretty*",(-762636861),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-pretty*","*print-pretty*",(726795140),null),"cljs/pprint.cljs",(16),(1),true,(615),(617),cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",((cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])));})()
;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
(function (){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pprint-dispatch*","cljs.pprint/*print-pprint-dispatch*",(-1820734013),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-pprint-dispatch*","*print-pprint-dispatch*",(-1709114492),null),"cljs/pprint.cljs",(25),(1),true,(619),(623),cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])));})()
;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
(function (){
cljs.pprint._STAR_print_right_margin_STAR_ = (72); return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-right-margin*","cljs.pprint/*print-right-margin*",(-56183119),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-right-margin*","*print-right-margin*",(-437272454),null),"cljs/pprint.cljs",(22),(1),true,(625),(630),cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])));})()
;
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
(function (){
cljs.pprint._STAR_print_miser_width_STAR_ = (40); return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-miser-width*","cljs.pprint/*print-miser-width*",(1588913450),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-miser-width*","*print-miser-width*",(1206624211),null),"cljs/pprint.cljs",(21),(1),true,(632),(637),cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
(function (){
cljs.pprint._STAR_print_lines_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-lines*","cljs.pprint/*print-lines*",(534683484),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-lines*","*print-lines*",(75920659),null),"cljs/pprint.cljs",(14),(1),true,(640),(643),cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
(function (){
cljs.pprint._STAR_print_circle_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-circle*","cljs.pprint/*print-circle*",(1606185849),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-circle*","*print-circle*",(1148404994),null),"cljs/pprint.cljs",(15),(1),true,(646),(649),cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
(function (){
cljs.pprint._STAR_print_shared_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_shared_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-shared*","cljs.pprint/*print-shared*",(1370943413),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-shared*","*print-shared*",(1493169738),null),"cljs/pprint.cljs",(15),(1),true,(652),(655),cljs.core.List.EMPTY,"Mark repeated structures rather than repeat them (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_shared_STAR_)?cljs.pprint._STAR_print_shared_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
(function (){
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-suppress-namespaces*","cljs.pprint/*print-suppress-namespaces*",(1649488204),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-suppress-namespaces*","*print-suppress-namespaces*",(1795828355),null),"cljs/pprint.cljs",(28),(1),true,(657),(661),cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])));})()
;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
(function (){
cljs.pprint._STAR_print_radix_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-radix*","cljs.pprint/*print-radix*",(1558253641),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-radix*","*print-radix*",(1168517744),null),"cljs/pprint.cljs",(14),(1),true,(665),(670),cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])));})()
;
/**
 * The base to use for printing integers and rationals.
 */
(function (){
cljs.pprint._STAR_print_base_STAR_ = (10); return (
new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-base*","cljs.pprint/*print-base*",(1887526790),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*print-base*","*print-base*",(2037937791),null),"cljs/pprint.cljs",(13),(1),true,(672),(675),cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint._STAR_current_level_STAR_ = (0); return (
new cljs.core.Var(function(){return cljs.pprint._STAR_current_level_STAR_;},new cljs.core.Symbol("cljs.pprint","*current-level*","cljs.pprint/*current-level*",(1299227592),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*current-level*","*current-level*",(1412941843),null),"cljs/pprint.cljs",(48),(1),true,(682),(682),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint._STAR_current_level_STAR_)?cljs.pprint._STAR_current_level_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint._STAR_current_length_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_current_length_STAR_;},new cljs.core.Symbol("cljs.pprint","*current-length*","cljs.pprint/*current-length*",(-732560897),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*current-length*","*current-length*",(758115108),null),"cljs/pprint.cljs",(49),(1),true,(684),(684),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)?cljs.pprint._STAR_current_length_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_simple_number; return (
new cljs.core.Var(function(){return cljs.pprint.format_simple_number;},new cljs.core.Symbol("cljs.pprint","format-simple-number","cljs.pprint/format-simple-number",(-1220074419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-simple-number","format-simple-number",(-1203880300),null),"cljs/pprint.cljs",(30),(1),(690),true,(690),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.format_simple_number)?cljs.pprint.format_simple_number.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__117_SHARP_){
var temp__19804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__117_SHARP_));
if(cljs.core.truth_(temp__19804__auto__)){
var v = temp__19804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__117_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.table_ize;},new cljs.core.Symbol("cljs.pprint","table-ize","cljs.pprint/table-ize",(-1870997338),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"table-ize","table-ize",(-1750981985),null),"cljs/pprint.cljs",(17),(1),(712),(712),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),null,(cljs.core.truth_(cljs.pprint.table_ize)?cljs.pprint.table_ize.cljs$lang$test:null)])));})()
;
/**
 * Return true iff x is a PrettyWriter
 */
(function (){
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__20196__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__20196__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",(-1222834267)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__20196__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pretty_writer_QMARK_;},new cljs.core.Symbol("cljs.pprint","pretty-writer?","cljs.pprint/pretty-writer?",(-2126032890),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pretty-writer?","pretty-writer?",(-1970297089),null),"cljs/pprint.cljs",(22),(1),(717),(717),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"Return true iff x is a PrettyWriter",(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_)?cljs.pprint.pretty_writer_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
(function (){
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
}); return (
new cljs.core.Var(function(){return cljs.pprint.make_pretty_writer;},new cljs.core.Symbol("cljs.pprint","make-pretty-writer","cljs.pprint/make-pretty-writer",(90762412),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"make-pretty-writer","make-pretty-writer",(35899125),null),"cljs/pprint.cljs",(26),(1),(721),(721),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base-writer","base-writer",(681607634),null),new cljs.core.Symbol(null,"right-margin","right-margin",(830118221),null),new cljs.core.Symbol(null,"miser-width","miser-width",(330482090),null)], null)),"Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width",(cljs.core.truth_(cljs.pprint.make_pretty_writer)?cljs.pprint.make_pretty_writer.cljs$lang$test:null)])));})()
;
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
(function (){
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__20196__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__20196__auto__)){
var and__20196__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__20196__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__20196__auto____$1;
}
} else {
return and__20196__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr(object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_(object));
}
}

return length_reached;
}); return (
new cljs.core.Var(function(){return cljs.pprint.write_out;},new cljs.core.Symbol("cljs.pprint","write-out","cljs.pprint/write-out",(-338269326),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write-out","write-out",(-258400837),null),"cljs/pprint.cljs",(16),(1),(726),(726),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null)], null)),"Write an object to *out* subject to the current bindings of the printer control\nvariables. Use the kw-args argument to override individual variables for this call (and\nany recursive calls).\n\n*out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility\nof the caller.\n\nThis method is primarily intended for use by pretty print dispatch functions that\nalready know that the pretty printer will have set up their environment appropriately.\nNormal library clients should use the standard \"write\" interface. ",(cljs.core.truth_(cljs.pprint.write_out)?cljs.pprint.write_out.cljs$lang$test:null)])));})()
;
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
(function (){
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__21610__auto__ = [];
var len__21607__auto___1595 = arguments.length;
var i__21608__auto___1596 = (0);
while(true){
if((i__21608__auto___1596 < len__21607__auto___1595)){
args__21610__auto__.push((arguments[i__21608__auto___1596]));

var G__1597 = (i__21608__auto___1596 + (1));
i__21608__auto___1596 = G__1597;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((1) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.pprint.write;},new cljs.core.Symbol("cljs.pprint","write","cljs.pprint/write",(-196844020),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write","write",(-217117641),null),"cljs/pprint.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"kw-args","kw-args",(-950901690),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kw-args","kw-args",(-950901690),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(750),(750),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kw-args","kw-args",(-950901690),null)], null)),"Write an object subject to the current bindings of the printer control variables.\nUse the kw-args argument to override individual variables for this call (and any\nrecursive calls). Returns the string result if :stream is nil or nil otherwise.\n\nThe following keyword arguments can be passed with values:\n  Keyword              Meaning                              Default value\n  :stream              Writer for output or nil             true (indicates *out*)\n  :base                Base to use for writing rationals    Current value of *print-base*\n  :circle*             If true, mark circular structures    Current value of *print-circle*\n  :length              Maximum elements to show in sublists Current value of *print-length*\n  :level               Maximum depth                        Current value of *print-level*\n  :lines*              Maximum lines of output              Current value of *print-lines*\n  :miser-width         Width to enter miser mode            Current value of *print-miser-width*\n  :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*\n  :pretty              If true, do pretty printing          Current value of *print-pretty*\n  :radix               If true, prepend a radix specifier   Current value of *print-radix*\n  :readably*           If true, print readably              Current value of *print-readably*\n  :right-margin        The column for the right margin      Current value of *print-right-margin*\n  :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*\n\n  * = not yet supported\n",(cljs.core.truth_(cljs.pprint.write)?cljs.pprint.write.cljs$lang$test:null)])));})()
;

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",(1534941648)),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_1581 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_1582 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_1583 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_1584 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_1585 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_1586 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_1587 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_1588 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_1589 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_1590 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_1591 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_1592 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",(1903212362)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",(588987862)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",(1290497552)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",(-700165781)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",(-1310049437)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",(857016463)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",(1129599760)).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",(-810413306)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",(2130686956)).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",(1534941648))))?new cljs.core.Keyword(null,"stream","stream",(1534941648)).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__96__auto___1598 = base_writer;
var new_writer__97__auto___1599 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__96__auto___1598));
var _STAR_out_STAR_1593_1600 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__97__auto___1599)?cljs.pprint.make_pretty_writer(base_writer__96__auto___1598,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__96__auto___1598);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_1593_1600;
}} else {
var _STAR_out_STAR_1594_1601 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr(object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_1594_1601;
}}

if(optval === true){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_1592;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_1591;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_1590;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_1589;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_1588;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_1587;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_1586;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_1585;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_1584;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_1583;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_1582;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_1581;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq1579){
var G__1580 = cljs.core.first(seq1579);
var seq1579__$1 = cljs.core.next(seq1579);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__1580,seq1579__$1);
});

new cljs.core.Var(function(){return cljs.pprint.write;},new cljs.core.Symbol("cljs.pprint","write","cljs.pprint/write",(-196844020),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"write","write",(-217117641),null),"cljs/pprint.cljs",(12),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(1),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"kw-args","kw-args",(-950901690),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kw-args","kw-args",(-950901690),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(750),(750),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"kw-args","kw-args",(-950901690),null)], null)),"Write an object subject to the current bindings of the printer control variables.\nUse the kw-args argument to override individual variables for this call (and any\nrecursive calls). Returns the string result if :stream is nil or nil otherwise.\n\nThe following keyword arguments can be passed with values:\n  Keyword              Meaning                              Default value\n  :stream              Writer for output or nil             true (indicates *out*)\n  :base                Base to use for writing rationals    Current value of *print-base*\n  :circle*             If true, mark circular structures    Current value of *print-circle*\n  :length              Maximum elements to show in sublists Current value of *print-length*\n  :level               Maximum depth                        Current value of *print-level*\n  :lines*              Maximum lines of output              Current value of *print-lines*\n  :miser-width         Width to enter miser mode            Current value of *print-miser-width*\n  :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*\n  :pretty              If true, do pretty printing          Current value of *print-pretty*\n  :radix               If true, prepend a radix specifier   Current value of *print-radix*\n  :readably*           If true, print readably              Current value of *print-readably*\n  :right-margin        The column for the right margin      Current value of *print-right-margin*\n  :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*\n\n  * = not yet supported\n",(cljs.core.truth_(cljs.pprint.write)?cljs.pprint.write.cljs$lang$test:null)]));
(function (){
cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__1603 = arguments.length;
switch (G__1603) {
case (1):
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint;},new cljs.core.Symbol("cljs.pprint","pprint","cljs.pprint/pprint",(-1547147237),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint","pprint",(-1434237374),null),"cljs/pprint.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(813),(813),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint)?cljs.pprint.pprint.cljs$lang$test:null)])));})()
;

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_1604 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_1604;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__96__auto__ = writer;
var new_writer__97__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__96__auto__));
var _STAR_out_STAR_1605 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__97__auto__)?cljs.pprint.make_pretty_writer(base_writer__96__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__96__auto__);

try{var _STAR_print_pretty_STAR_1606_1608 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_1606_1608;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_1605;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.pprint.pprint;},new cljs.core.Symbol("cljs.pprint","pprint","cljs.pprint/pprint",(-1547147237),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint","pprint",(-1434237374),null),"cljs/pprint.cljs",(13),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(813),(813),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"object","object",(-1179821820),null),new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint)?cljs.pprint.pprint.cljs$lang$test:null)]));
(function (){
cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.set_pprint_dispatch;},new cljs.core.Symbol("cljs.pprint","set-pprint-dispatch","cljs.pprint/set-pprint-dispatch",(-1197698588),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"set-pprint-dispatch","set-pprint-dispatch",(-1547335761),null),"cljs/pprint.cljs",(26),(1),(826),(826),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",(-486723946),null)], null)),null,(cljs.core.truth_(cljs.pprint.set_pprint_dispatch)?cljs.pprint.set_pprint_dispatch.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices(arg)))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad argument: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". It must be one of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.check_enumerated_arg;},new cljs.core.Symbol("cljs.pprint","check-enumerated-arg","cljs.pprint/check-enumerated-arg",(-1494237719),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"check-enumerated-arg","check-enumerated-arg",(-1457220064),null),"cljs/pprint.cljs",(28),(1),(835),(835),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arg","arg",(-106730310),null),new cljs.core.Symbol(null,"choices","choices",(-1268824172),null)], null)),null,(cljs.core.truth_(cljs.pprint.check_enumerated_arg)?cljs.pprint.check_enumerated_arg.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__20196__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__20196__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__20196__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.level_exceeded;},new cljs.core.Symbol("cljs.pprint","level-exceeded","cljs.pprint/level-exceeded",(-1557018470),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"level-exceeded","level-exceeded",(-636837181),null),"cljs/pprint.cljs",(22),(1),(840),(840),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.pprint.level_exceeded)?cljs.pprint.level_exceeded.cljs$lang$test:null)])));})()
;
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
(function (){
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"linear","linear",(872268697)),null,new cljs.core.Keyword(null,"miser","miser",(-556060186)),null,new cljs.core.Keyword(null,"fill","fill",(883462889)),null,new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_newline;},new cljs.core.Symbol("cljs.pprint","pprint-newline","cljs.pprint/pprint-newline",(-896290881),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-newline","pprint-newline",(-841697210),null),"cljs/pprint.cljs",(21),(1),(843),(843),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",(923265724),null)], null)),"Print a conditional newline to a pretty printing stream. kind specifies if the\n  newline is :linear, :miser, :fill, or :mandatory.\n\n  This function is intended for use when writing custom dispatch functions.\n\n  Output is sent to *out* which must be a pretty printing writer.",(cljs.core.truth_(cljs.pprint.pprint_newline)?cljs.pprint.pprint_newline.cljs$lang$test:null)])));})()
;
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
(function (){
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",(664686210)),null,new cljs.core.Keyword(null,"current","current",(-1088038603)),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_indent;},new cljs.core.Symbol("cljs.pprint","pprint-indent","cljs.pprint/pprint-indent",(-1628472151),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-indent","pprint-indent",(-2062129840),null),"cljs/pprint.cljs",(20),(1),(854),(854),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"relative-to","relative-to",(1170431476),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),"Create an indent at this point in the pretty printing stream. This defines how\nfollowing lines are indented. relative-to can be either :block or :current depending\nwhether the indent should be computed relative to the start of the logical block or\nthe current column position. n is an offset.\n\nThis function is intended for use when writing custom dispatch functions.\n\nOutput is sent to *out* which must be a pretty printing writer.",(cljs.core.truth_(cljs.pprint.pprint_indent)?cljs.pprint.pprint_indent.cljs$lang$test:null)])));})()
;
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
(function (){
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",(212345235)),null,new cljs.core.Keyword(null,"section","section",(-300141526)),null,new cljs.core.Keyword(null,"line-relative","line-relative",(1149548219)),null,new cljs.core.Keyword(null,"section-relative","section-relative",(-658298724)),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_tab;},new cljs.core.Symbol("cljs.pprint","pprint-tab","cljs.pprint/pprint-tab",(-481059340),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-tab","pprint-tab",(-66407379),null),"cljs/pprint.cljs",(17),(1),(868),(868),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",(923265724),null),new cljs.core.Symbol(null,"colnum","colnum",(-630638915),null),new cljs.core.Symbol(null,"colinc","colinc",(1055658142),null)], null)),"Tab at this point in the pretty printing stream. kind specifies whether the tab\nis :line, :section, :line-relative, or :section-relative.\n\nColnum and colinc specify the target column and the increment to move the target\nforward if the output is already past the original target.\n\nThis function is intended for use when writing custom dispatch functions.\n\nOutput is sent to *out* which must be a pretty printing writer.\n\nTHIS FUNCTION IS NOT YET IMPLEMENTED.",(cljs.core.truth_(cljs.pprint.pprint_tab)?cljs.pprint.pprint_tab.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.compile_format; return (
new cljs.core.Var(function(){return cljs.pprint.compile_format;},new cljs.core.Symbol("cljs.pprint","compile-format","cljs.pprint/compile-format",(-1633629368),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"compile-format","compile-format",(-1771593359),null),"cljs/pprint.cljs",(24),(1),(890),true,(890),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.compile_format)?cljs.pprint.compile_format.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.execute_format; return (
new cljs.core.Var(function(){return cljs.pprint.execute_format;},new cljs.core.Symbol("cljs.pprint","execute-format","cljs.pprint/execute-format",(1971623147),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"execute-format","execute-format",(223314476),null),"cljs/pprint.cljs",(24),(1),(891),true,(891),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.execute_format)?cljs.pprint.execute_format.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.init_navigator; return (
new cljs.core.Var(function(){return cljs.pprint.init_navigator;},new cljs.core.Symbol("cljs.pprint","init-navigator","cljs.pprint/init-navigator",(1904204595),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"init-navigator","init-navigator",(2055521738),null),"cljs/pprint.cljs",(24),(1),(892),true,(892),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.init_navigator)?cljs.pprint.init_navigator.cljs$lang$test:null)])));})()
;
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
(function (){
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__21610__auto__ = [];
var len__21607__auto___1612 = arguments.length;
var i__21608__auto___1613 = (0);
while(true){
if((i__21608__auto___1613 < len__21607__auto___1612)){
args__21610__auto__.push((arguments[i__21608__auto___1613]));

var G__1614 = (i__21608__auto___1613 + (1));
i__21608__auto___1613 = G__1614;
continue;
} else {
}
break;
}

var argseq__21611__auto__ = ((((2) < args__21610__auto__.length))?(new cljs.core.IndexedSeq(args__21610__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21611__auto__);
}); return (
new cljs.core.Var(function(){return cljs.pprint.cl_format;},new cljs.core.Symbol("cljs.pprint","cl-format","cljs.pprint/cl-format",(-1100272469),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"see-also","see-also",(330781627)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"cl-format","cl-format",(-1229847214),null),"cljs/pprint.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"format-in","format-in",(-833774677),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"format-in","format-in",(-833774677),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(895),(895),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"format-in","format-in",(-833774677),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000","Common Lisp the Language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm","Common Lisp HyperSpec"], null)], null),"An implementation of a Common Lisp compatible format function. cl-format formats its\narguments to an output stream or string based on the format control string given. It\nsupports sophisticated formatting of structured data.\n\nWriter satisfies IWriter, true to output via *print-fn* or nil to output\nto a string, format-in is the format control string and the remaining arguments\nare the data to be formatted.\n\nThe format control string is a string to be output with embedded 'format directives'\ndescribing how to format the various arguments passed in.\n\nIf writer is nil, cl-format returns the formatted result string. Otherwise, cl-format\nreturns nil.\n\nFor example:\n (let [results [46 38 22]]\n        (cl-format true \"There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%\"\n                   (count results) results))\n\nPrints via *print-fn*:\n There are 3 results: 46, 38, 22\n\nDetailed documentation on format control strings is available in the \"Common Lisp the\nLanguage, 2nd edition\", Chapter 22 (available online at:\nhttp://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)\nand in the Common Lisp HyperSpec at\nhttp://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm",(cljs.core.truth_(cljs.pprint.cl_format)?cljs.pprint.cl_format.cljs$lang$test:null)])));})()
;

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format(format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator(args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format(writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq1609){
var G__1610 = cljs.core.first(seq1609);
var seq1609__$1 = cljs.core.next(seq1609);
var G__1611 = cljs.core.first(seq1609__$1);
var seq1609__$2 = cljs.core.next(seq1609__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__1610,G__1611,seq1609__$2);
});

new cljs.core.Var(function(){return cljs.pprint.cl_format;},new cljs.core.Symbol("cljs.pprint","cl-format","cljs.pprint/cl-format",(-1100272469),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"see-also","see-also",(330781627)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"cl-format","cl-format",(-1229847214),null),"cljs/pprint.cljs",(16),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"format-in","format-in",(-833774677),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null))], null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"format-in","format-in",(-833774677),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null)], null),(1),(895),(895),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"format-in","format-in",(-833774677),null),new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000","Common Lisp the Language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm","Common Lisp HyperSpec"], null)], null),"An implementation of a Common Lisp compatible format function. cl-format formats its\narguments to an output stream or string based on the format control string given. It\nsupports sophisticated formatting of structured data.\n\nWriter satisfies IWriter, true to output via *print-fn* or nil to output\nto a string, format-in is the format control string and the remaining arguments\nare the data to be formatted.\n\nThe format control string is a string to be output with embedded 'format directives'\ndescribing how to format the various arguments passed in.\n\nIf writer is nil, cl-format returns the formatted result string. Otherwise, cl-format\nreturns nil.\n\nFor example:\n (let [results [46 38 22]]\n        (cl-format true \"There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%\"\n                   (count results) results))\n\nPrints via *print-fn*:\n There are 3 results: 46, 38, 22\n\nDetailed documentation on format control strings is available in the \"Common Lisp the\nLanguage, 2nd edition\", Chapter 22 (available online at:\nhttp://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)\nand in the Common Lisp HyperSpec at\nhttp://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm",(cljs.core.truth_(cljs.pprint.cl_format)?cljs.pprint.cl_format.cljs$lang$test:null)]));
(function (){
cljs.pprint._STAR_format_str_STAR_ = null; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_format_str_STAR_;},new cljs.core.Symbol("cljs.pprint","*format-str*","cljs.pprint/*format-str*",(1651450729),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*format-str*","*format-str*",(447007410),null),"cljs/pprint.cljs",(45),(1),true,(932),(932),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint._STAR_format_str_STAR_)?cljs.pprint._STAR_format_str_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_error;},new cljs.core.Symbol("cljs.pprint","format-error","cljs.pprint/format-error",(593703147),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-error","format-error",(1512725040),null),"cljs/pprint.cljs",(20),(1),(934),(934),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",(1234475525),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_error)?cljs.pprint.format_error.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21096__auto__,k__21097__auto__){
var self__ = this;
var this__21096__auto____$1 = this;
return this__21096__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21097__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21098__auto__,k1616,else__21099__auto__){
var self__ = this;
var this__21098__auto____$1 = this;
var G__1620 = k1616;
var G__1620__$1 = (((G__1620 instanceof cljs.core.Keyword))?G__1620.fqn:null);
switch (G__1620__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1616,else__21099__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21110__auto__,writer__21111__auto__,opts__21112__auto__){
var self__ = this;
var this__21110__auto____$1 = this;
var pr_pair__21113__auto__ = ((function (this__21110__auto____$1){
return (function (keyval__21114__auto__){
return cljs.core.pr_sequential_writer(writer__21111__auto__,cljs.core.pr_writer,""," ","",opts__21112__auto__,keyval__21114__auto__);
});})(this__21110__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__21111__auto__,pr_pair__21113__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__21112__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",(-1817803783)),self__.seq],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",(-1241696419)),self__.rest],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",(-864607220)),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1615){
var self__ = this;
var G__1615__$1 = this;
return (new cljs.core.RecordIter((0),G__1615__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",(-1817803783)),new cljs.core.Keyword(null,"rest","rest",(-1241696419)),new cljs.core.Keyword(null,"pos","pos",(-864607220))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21094__auto__){
var self__ = this;
var this__21094__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21091__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21100__auto__){
var self__ = this;
var this__21100__auto____$1 = this;
return ((3) + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21092__auto__){
var self__ = this;
var this__21092__auto____$1 = this;
var h__20889__auto__ = self__.__hash;
if(!((h__20889__auto__ == null))){
return h__20889__auto__;
} else {
var h__20889__auto____$1 = (function (){var fexpr__1621 = ((function (h__20889__auto__,this__21092__auto____$1){
return (function (coll__21093__auto__){
return ((-402038447) ^ cljs.core.hash_unordered_coll(coll__21093__auto__));
});})(h__20889__auto__,this__21092__auto____$1))
;
return fexpr__1621(this__21092__auto____$1);
})();
self__.__hash = h__20889__auto____$1;

return h__20889__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1617,other1618){
var self__ = this;
var this1617__$1 = this;
return (!((other1618 == null))) && ((this1617__$1.constructor === other1618.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1617__$1.seq,other1618.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1617__$1.rest,other1618.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1617__$1.pos,other1618.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1617__$1.__extmap,other1618.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21105__auto__,k__21106__auto__){
var self__ = this;
var this__21105__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"seq","seq",(-1817803783)),null,new cljs.core.Keyword(null,"rest","rest",(-1241696419)),null,new cljs.core.Keyword(null,"pos","pos",(-864607220)),null], null), null),k__21106__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__21105__auto____$1),self__.__meta),k__21106__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__21106__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21103__auto__,k__21104__auto__,G__1615){
var self__ = this;
var this__21103__auto____$1 = this;
var pred__1622 = cljs.core.keyword_identical_QMARK_;
var expr__1623 = k__21104__auto__;
if(cljs.core.truth_((function (){var G__1625 = new cljs.core.Keyword(null,"seq","seq",(-1817803783));
var G__1626 = expr__1623;
return (pred__1622.cljs$core$IFn$_invoke$arity$2 ? pred__1622.cljs$core$IFn$_invoke$arity$2(G__1625,G__1626) : pred__1622(G__1625,G__1626));
})())){
return (new cljs.pprint.arg_navigator(G__1615,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1627 = new cljs.core.Keyword(null,"rest","rest",(-1241696419));
var G__1628 = expr__1623;
return (pred__1622.cljs$core$IFn$_invoke$arity$2 ? pred__1622.cljs$core$IFn$_invoke$arity$2(G__1627,G__1628) : pred__1622(G__1627,G__1628));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__1615,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1629 = new cljs.core.Keyword(null,"pos","pos",(-864607220));
var G__1630 = expr__1623;
return (pred__1622.cljs$core$IFn$_invoke$arity$2 ? pred__1622.cljs$core$IFn$_invoke$arity$2(G__1629,G__1630) : pred__1622(G__1629,G__1630));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__1615,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__21104__auto__,G__1615),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21108__auto__){
var self__ = this;
var this__21108__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",(-1817803783)),self__.seq],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",(-1241696419)),self__.rest],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",(-864607220)),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21095__auto__,G__1615){
var self__ = this;
var this__21095__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__1615,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21101__auto__,entry__21102__auto__){
var self__ = this;
var this__21101__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__21102__auto__)){
return this__21101__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__21101__auto____$1,entry__21102__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",(-177272256),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null),new cljs.core.Symbol(null,"pos","pos",(775924307),null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__21118__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__21118__auto__,writer__21119__auto__){
return cljs.core._write(writer__21119__auto__,"cljs.pprint/arg-navigator");
});

(function (){
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_arg_navigator;},new cljs.core.Symbol("cljs.pprint","->arg-navigator","cljs.pprint/->arg-navigator",(-1198748492),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->arg-navigator","->arg-navigator",(-1320704693),null),"cljs/pprint.cljs",(16),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(945),(946),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",(-177272256),null),new cljs.core.Symbol(null,"rest","rest",(398835108),null),new cljs.core.Symbol(null,"pos","pos",(775924307),null)], null)),null,(cljs.core.truth_(cljs.pprint.__GT_arg_navigator)?cljs.pprint.__GT_arg_navigator.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__1619){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(G__1619),new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(G__1619),new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(G__1619),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1619,new cljs.core.Keyword(null,"seq","seq",(-1817803783)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",(-1241696419)),new cljs.core.Keyword(null,"pos","pos",(-864607220))], 0))),null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map__GT_arg_navigator;},new cljs.core.Symbol("cljs.pprint","map->arg-navigator","cljs.pprint/map->arg-navigator",(375266329),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map->arg-navigator","map->arg-navigator",(1829843664),null),"cljs/pprint.cljs",(16),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(945),(946),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1619","G__1619",(-29922902),null)], null)),null,(cljs.core.truth_(cljs.pprint.map__GT_arg_navigator)?cljs.pprint.map__GT_arg_navigator.cljs$lang$test:null)])));})()
;

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
(function (){
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.init_navigator;},new cljs.core.Symbol("cljs.pprint","init-navigator","cljs.pprint/init-navigator",(1904204595),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"init-navigator","init-navigator",(2055521738),null),"cljs/pprint.cljs",(22),true,(1),(948),(948),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Create a new arg-navigator from the sequence with the position set to 0",(cljs.core.truth_(cljs.pprint.init_navigator)?cljs.pprint.init_navigator.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.next_arg;},new cljs.core.Symbol("cljs.pprint","next-arg","cljs.pprint/next-arg",(-1916832704),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"next-arg","next-arg",(-2065670773),null),"cljs/pprint.cljs",(16),(1),(956),(956),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null)], null)),null,(cljs.core.truth_(cljs.pprint.next_arg)?cljs.pprint.next_arg.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.next_arg_or_nil;},new cljs.core.Symbol("cljs.pprint","next-arg-or-nil","cljs.pprint/next-arg-or-nil",(1831426026),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"next-arg-or-nil","next-arg-or-nil",(1784789293),null),"cljs/pprint.cljs",(23),(1),(962),(962),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null)], null)),null,(cljs.core.truth_(cljs.pprint.next_arg_or_nil)?cljs.pprint.next_arg_or_nil.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__1632 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1632,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1632,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format(raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_format_arg;},new cljs.core.Symbol("cljs.pprint","get-format-arg","cljs.pprint/get-format-arg",(-291729680),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-format-arg","get-format-arg",(-431628151),null),"cljs/pprint.cljs",(22),(1),(969),(969),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_format_arg)?cljs.pprint.get_format_arg.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.relative_reposition; return (
new cljs.core.Var(function(){return cljs.pprint.relative_reposition;},new cljs.core.Symbol("cljs.pprint","relative-reposition","cljs.pprint/relative-reposition",(-1854387708),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"relative-reposition","relative-reposition",(-1719180081),null),"cljs/pprint.cljs",(29),(1),(976),true,(976),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.relative_reposition)?cljs.pprint.relative_reposition.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__1635 = navigator;
var G__1636 = (new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__1635,G__1636) : cljs.pprint.relative_reposition(G__1635,G__1636));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.absolute_reposition;},new cljs.core.Symbol("cljs.pprint","absolute-reposition","cljs.pprint/absolute-reposition",(-1498988380),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"absolute-reposition","absolute-reposition",(-1344383331),null),"cljs/pprint.cljs",(27),(1),(978),(978),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"position","position",(-371200385),null)], null)),null,(cljs.core.truth_(cljs.pprint.absolute_reposition)?cljs.pprint.absolute_reposition.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",(-1817803783)).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.relative_reposition;},new cljs.core.Symbol("cljs.pprint","relative-reposition","cljs.pprint/relative-reposition",(-1854387708),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"relative-reposition","relative-reposition",(-1719180081),null),"cljs/pprint.cljs",(27),(1),(983),(983),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"position","position",(-371200385),null)], null)),null,(cljs.core.truth_(cljs.pprint.relative_reposition)?cljs.pprint.relative_reposition.cljs$lang$test:null)])));})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__21096__auto__,k__21097__auto__){
var self__ = this;
var this__21096__auto____$1 = this;
return this__21096__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__21097__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__21098__auto__,k1638,else__21099__auto__){
var self__ = this;
var this__21098__auto____$1 = this;
var G__1642 = k1638;
var G__1642__$1 = (((G__1642 instanceof cljs.core.Keyword))?G__1642.fqn:null);
switch (G__1642__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k1638,else__21099__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__21110__auto__,writer__21111__auto__,opts__21112__auto__){
var self__ = this;
var this__21110__auto____$1 = this;
var pr_pair__21113__auto__ = ((function (this__21110__auto____$1){
return (function (keyval__21114__auto__){
return cljs.core.pr_sequential_writer(writer__21111__auto__,cljs.core.pr_writer,""," ","",opts__21112__auto__,keyval__21114__auto__);
});})(this__21110__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__21111__auto__,pr_pair__21113__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__21112__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",(-238706040)),self__.func],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",(-1043430536)),self__.def],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",(710516235)),self__.params],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__1637){
var self__ = this;
var G__1637__$1 = this;
return (new cljs.core.RecordIter((0),G__1637__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",(-238706040)),new cljs.core.Keyword(null,"def","def",(-1043430536)),new cljs.core.Keyword(null,"params","params",(710516235)),new cljs.core.Keyword(null,"offset","offset",(296498311))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__21094__auto__){
var self__ = this;
var this__21094__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__21091__auto__){
var self__ = this;
var this__21091__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__21100__auto__){
var self__ = this;
var this__21100__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__21092__auto__){
var self__ = this;
var this__21092__auto____$1 = this;
var h__20889__auto__ = self__.__hash;
if(!((h__20889__auto__ == null))){
return h__20889__auto__;
} else {
var h__20889__auto____$1 = (function (){var fexpr__1643 = ((function (h__20889__auto__,this__21092__auto____$1){
return (function (coll__21093__auto__){
return ((-829256337) ^ cljs.core.hash_unordered_coll(coll__21093__auto__));
});})(h__20889__auto__,this__21092__auto____$1))
;
return fexpr__1643(this__21092__auto____$1);
})();
self__.__hash = h__20889__auto____$1;

return h__20889__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1639,other1640){
var self__ = this;
var this1639__$1 = this;
return (!((other1640 == null))) && ((this1639__$1.constructor === other1640.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1639__$1.func,other1640.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1639__$1.def,other1640.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1639__$1.params,other1640.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1639__$1.offset,other1640.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this1639__$1.__extmap,other1640.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__21105__auto__,k__21106__auto__){
var self__ = this;
var this__21105__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"func","func",(-238706040)),null,new cljs.core.Keyword(null,"def","def",(-1043430536)),null,new cljs.core.Keyword(null,"params","params",(710516235)),null,new cljs.core.Keyword(null,"offset","offset",(296498311)),null], null), null),k__21106__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__21105__auto____$1),self__.__meta),k__21106__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__21106__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__21103__auto__,k__21104__auto__,G__1637){
var self__ = this;
var this__21103__auto____$1 = this;
var pred__1644 = cljs.core.keyword_identical_QMARK_;
var expr__1645 = k__21104__auto__;
if(cljs.core.truth_((function (){var G__1647 = new cljs.core.Keyword(null,"func","func",(-238706040));
var G__1648 = expr__1645;
return (pred__1644.cljs$core$IFn$_invoke$arity$2 ? pred__1644.cljs$core$IFn$_invoke$arity$2(G__1647,G__1648) : pred__1644(G__1647,G__1648));
})())){
return (new cljs.pprint.compiled_directive(G__1637,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1649 = new cljs.core.Keyword(null,"def","def",(-1043430536));
var G__1650 = expr__1645;
return (pred__1644.cljs$core$IFn$_invoke$arity$2 ? pred__1644.cljs$core$IFn$_invoke$arity$2(G__1649,G__1650) : pred__1644(G__1649,G__1650));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__1637,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1651 = new cljs.core.Keyword(null,"params","params",(710516235));
var G__1652 = expr__1645;
return (pred__1644.cljs$core$IFn$_invoke$arity$2 ? pred__1644.cljs$core$IFn$_invoke$arity$2(G__1651,G__1652) : pred__1644(G__1651,G__1652));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__1637,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__1653 = new cljs.core.Keyword(null,"offset","offset",(296498311));
var G__1654 = expr__1645;
return (pred__1644.cljs$core$IFn$_invoke$arity$2 ? pred__1644.cljs$core$IFn$_invoke$arity$2(G__1653,G__1654) : pred__1644(G__1653,G__1654));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__1637,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__21104__auto__,G__1637),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__21108__auto__){
var self__ = this;
var this__21108__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",(-238706040)),self__.func],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",(-1043430536)),self__.def],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",(710516235)),self__.params],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",(296498311)),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__21095__auto__,G__1637){
var self__ = this;
var this__21095__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__1637,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__21101__auto__,entry__21102__auto__){
var self__ = this;
var this__21101__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__21102__auto__)){
return this__21101__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__21102__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__21101__auto____$1,entry__21102__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",(1401825487),null),new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__21118__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__21118__auto__,writer__21119__auto__){
return cljs.core._write(writer__21119__auto__,"cljs.pprint/compiled-directive");
});

(function (){
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_compiled_directive;},new cljs.core.Symbol("cljs.pprint","->compiled-directive","cljs.pprint/->compiled-directive",(-1867947),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->compiled-directive","->compiled-directive",(-132626786),null),"cljs/pprint.cljs",(21),(1),true,new cljs.core.Keyword(null,"positional","positional",(-203580463)),(989),(990),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",(1401825487),null),new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs.pprint.__GT_compiled_directive)?cljs.pprint.__GT_compiled_directive.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__1641){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(G__1641),new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(G__1641),new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(G__1641),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(G__1641),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__1641,new cljs.core.Keyword(null,"func","func",(-238706040)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",(-1043430536)),new cljs.core.Keyword(null,"params","params",(710516235)),new cljs.core.Keyword(null,"offset","offset",(296498311))], 0))),null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map__GT_compiled_directive;},new cljs.core.Symbol("cljs.pprint","map->compiled-directive","cljs.pprint/map->compiled-directive",(-243948353),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"internal-ctor","internal-ctor",(937392560)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map->compiled-directive","map->compiled-directive",(-88960284),null),"cljs/pprint.cljs",(21),(1),true,new cljs.core.Keyword(null,"map","map",(1371690461)),(989),(990),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"G__1641","G__1641",(876017160),null)], null)),null,(cljs.core.truth_(cljs.pprint.map__GT_compiled_directive)?cljs.pprint.map__GT_compiled_directive.cljs$lang$test:null)])));})()
;

(function (){
cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__1656,navigator){
var vec__1657 = p__1656;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1657,(0),null);
var vec__1660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1657,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1660,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1660,(1),null);
var vec__1663 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196))))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1663,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1663,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.realize_parameter;},new cljs.core.Symbol("cljs.pprint","realize-parameter","cljs.pprint/realize-parameter",(548447092),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"realize-parameter","realize-parameter",(432781579),null),"cljs/pprint.cljs",(25),(1),(1000),(1000),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"param","param",(-640803946),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw-val","raw-val",(-2081106773),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)], null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null)], null)),null,(cljs.core.truth_(cljs.pprint.realize_parameter)?cljs.pprint.realize_parameter.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__1666 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1666,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.realize_parameter_list;},new cljs.core.Symbol("cljs.pprint","realize-parameter-list","cljs.pprint/realize-parameter-list",(503348823),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"realize-parameter-list","realize-parameter-list",(97096808),null),"cljs/pprint.cljs",(30),(1),(1016),(1016),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parameter-map","parameter-map",(1760538161),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null)], null)),null,(cljs.core.truth_(cljs.pprint.realize_parameter_list)?cljs.pprint.realize_parameter_list.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.opt_base_str; return (
new cljs.core.Var(function(){return cljs.pprint.opt_base_str;},new cljs.core.Symbol("cljs.pprint","opt-base-str","cljs.pprint/opt-base-str",(1717400769),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"opt-base-str","opt-base-str",(2132023944),null),"cljs/pprint.cljs",(22),(1),(1029),true,(1029),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.opt_base_str)?cljs.pprint.opt_base_str.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null); return (
new cljs.core.Var(function(){return cljs.pprint.special_radix_markers;},new cljs.core.Symbol("cljs.pprint","special-radix-markers","cljs.pprint/special-radix-markers",(1322352935),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"special-radix-markers","special-radix-markers",(1469508332),null),"cljs/pprint.cljs",(24),(1),(1031),(1032),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.special_radix_markers)?cljs.pprint.special_radix_markers.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__20219__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("r")].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_simple_number;},new cljs.core.Symbol("cljs.pprint","format-simple-number","cljs.pprint/format-simple-number",(-1220074419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-simple-number","format-simple-number",(-1203880300),null),"cljs/pprint.cljs",(28),(1),(1034),(1034),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_simple_number)?cljs.pprint.format_simple_number.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__1669 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1669,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1669,(1),null);
var base_output = (function (){var or__20219__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func(arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",(323570901)).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_ascii;},new cljs.core.Symbol("cljs.pprint","format-ascii","cljs.pprint/format-ascii",(294871848),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-ascii","format-ascii",(685005171),null),"cljs/pprint.cljs",(20),(1),(1044),(1044),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"print-func","print-func",(1058018671),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"arg-navigator","arg-navigator",(1660575364),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_ascii)?cljs.pprint.format_ascii.cljs$lang$test:null)])));})()
;
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
(function (){
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.integral_QMARK_;},new cljs.core.Symbol("cljs.pprint","integral?","cljs.pprint/integral?",(-2139316882),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"integral?","integral?",(-2027571295),null),"cljs/pprint.cljs",(17),(1),(1067),(1067),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),"returns true if a number is actually an integer (that is, has no fractional part)",(cljs.core.truth_(cljs.pprint.integral_QMARK_)?cljs.pprint.integral_QMARK_.cljs$lang$test:null)])));})()
;
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
(function (){
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__118_SHARP_){
if((p1__118_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__118_SHARP_,base),cljs.core.quot(p1__118_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.remainders;},new cljs.core.Symbol("cljs.pprint","remainders","cljs.pprint/remainders",(1708426614),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"remainders","remainders",(1829737391),null),"cljs/pprint.cljs",(18),(1),(1077),(1077),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Return the list of remainders (essentially the 'digits') of val in the given base",(cljs.core.truth_(cljs.pprint.remainders)?cljs.pprint.remainders.cljs$lang$test:null)])));})()
;
/**
 * Return val as a string in the given base
 */
(function (){
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__119_SHARP_){
if((p1__119_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__119_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__119_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.base_str;},new cljs.core.Symbol("cljs.pprint","base-str","cljs.pprint/base-str",(-1004113958),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"base-str","base-str",(-580019743),null),"cljs/pprint.cljs",(16),(1),(1089),(1089),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Return val as a string in the given base",(cljs.core.truth_(cljs.pprint.base_str)?cljs.pprint.base_str.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null); return (
new cljs.core.Var(function(){return cljs.pprint.javascript_base_formats;},new cljs.core.Symbol("cljs.pprint","javascript-base-formats","cljs.pprint/javascript-base-formats",(-477361289),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"javascript-base-formats","javascript-base-formats",(-321708792),null),"cljs/pprint.cljs",(26),(1),(1104),(1105),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.javascript_base_formats)?cljs.pprint.javascript_base_formats.cljs$lang$test:null)])));})()
;
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
(function (){
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
}); return (
new cljs.core.Var(function(){return cljs.pprint.opt_base_str;},new cljs.core.Symbol("cljs.pprint","opt-base-str","cljs.pprint/opt-base-str",(1717400769),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"opt-base-str","opt-base-str",(2132023944),null),"cljs/pprint.cljs",(20),(1),(1107),(1107),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"val","val",(1769233139),null)], null)),"Return val as a string in the given base. No cljs format, so no improved performance.",(cljs.core.truth_(cljs.pprint.opt_base_str)?cljs.pprint.opt_base_str.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
}); return (
new cljs.core.Var(function(){return cljs.pprint.group_by_STAR_;},new cljs.core.Symbol("cljs.pprint","group-by*","cljs.pprint/group-by*",(595123027),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"group-by*","group-by*",(461620586),null),"cljs/pprint.cljs",(17),(1),(1112),(1112),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",(2015706702),null),new cljs.core.Symbol(null,"lis","lis",(649343131),null)], null)),null,(cljs.core.truth_(cljs.pprint.group_by_STAR_)?cljs.pprint.group_by_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__1672 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1672,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1672,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_1675 = (arg < (0));
var pos_arg_1676 = ((neg_1675)?(- arg):arg);
var raw_str_1677 = cljs.pprint.opt_base_str(base,pos_arg_1676);
var group_str_1678 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_1675,pos_arg_1676,raw_str_1677,vec__1672,arg,arg_navigator__$1){
return (function (p1__120_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__120_SHARP_);
});})(neg_1675,pos_arg_1676,raw_str_1677,vec__1672,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)).cljs$core$IFn$_invoke$arity$1(params),raw_str_1677));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",(652859327)).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_1677);
var signed_str_1679 = ((neg_1675)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_1678)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_1678)].join(''):group_str_1678
));
var padded_str_1680 = (((signed_str_1679.length < new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params) - signed_str_1679.length),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_1679)].join(''):signed_str_1679);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_1680], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),(1),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",(1476951349)),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_integer;},new cljs.core.Symbol("cljs.pprint","format-integer","cljs.pprint/format-integer",(219485478),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-integer","format-integer",(349043949),null),"cljs/pprint.cljs",(22),(1),(1117),(1117),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",(1825810849),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"arg-navigator","arg-navigator",(1660575364),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_integer)?cljs.pprint.format_integer.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null); return (
new cljs.core.Var(function(){return cljs.pprint.english_cardinal_units;},new cljs.core.Symbol("cljs.pprint","english-cardinal-units","cljs.pprint/english-cardinal-units",(140527670),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"english-cardinal-units","english-cardinal-units",(815742589),null),"cljs/pprint.cljs",(28),(1),(1147),(1148),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.english_cardinal_units)?cljs.pprint.english_cardinal_units.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null); return (
new cljs.core.Var(function(){return cljs.pprint.english_ordinal_units;},new cljs.core.Symbol("cljs.pprint","english-ordinal-units","cljs.pprint/english-ordinal-units",(481434877),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"english-ordinal-units","english-ordinal-units",(368378546),null),"cljs/pprint.cljs",(27),(1),(1153),(1154),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.english_ordinal_units)?cljs.pprint.english_ordinal_units.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null); return (
new cljs.core.Var(function(){return cljs.pprint.english_cardinal_tens;},new cljs.core.Symbol("cljs.pprint","english-cardinal-tens","cljs.pprint/english-cardinal-tens",(-1817472294),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"english-cardinal-tens","english-cardinal-tens",(-1805473533),null),"cljs/pprint.cljs",(27),(1),(1159),(1160),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.english_cardinal_tens)?cljs.pprint.english_cardinal_tens.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null); return (
new cljs.core.Var(function(){return cljs.pprint.english_ordinal_tens;},new cljs.core.Symbol("cljs.pprint","english-ordinal-tens","cljs.pprint/english-ordinal-tens",(138757361),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"english-ordinal-tens","english-ordinal-tens",(319696184),null),"cljs/pprint.cljs",(26),(1),(1163),(1164),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.english_ordinal_tens)?cljs.pprint.english_ordinal_tens.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null); return (
new cljs.core.Var(function(){return cljs.pprint.english_scale_numbers;},new cljs.core.Symbol("cljs.pprint","english-scale-numbers","cljs.pprint/english-scale-numbers",(-1714335163),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"english-scale-numbers","english-scale-numbers",(-1608635508),null),"cljs/pprint.cljs",(27),(1),(1172),(1173),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.english_scale_numbers)?cljs.pprint.english_scale_numbers.cljs$lang$test:null)])));})()
;
/**
 * Convert a number less than 1000 to a cardinal english string
 */
(function (){
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hundred")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_simple_cardinal;},new cljs.core.Symbol("cljs.pprint","format-simple-cardinal","cljs.pprint/format-simple-cardinal",(913288138),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-simple-cardinal","format-simple-cardinal",(1028948467),null),"cljs/pprint.cljs",(30),(1),(1180),(1180),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",(-669195096),null)], null)),"Convert a number less than 1000 to a cardinal english string",(cljs.core.truth_(cljs.pprint.format_simple_cardinal)?cljs.pprint.format_simple_cardinal.cljs$lang$test:null)])));})()
;
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
(function (){
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__1681 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__1682 = (pos - (1));
var G__1683 = cljs.core.first(remainder);
var G__1684 = cljs.core.next(remainder);
acc = G__1681;
pos = G__1682;
this$ = G__1683;
remainder = G__1684;
continue;
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.add_english_scales;},new cljs.core.Symbol("cljs.pprint","add-english-scales","cljs.pprint/add-english-scales",(426407851),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"add-english-scales","add-english-scales",(515071458),null),"cljs/pprint.cljs",(26),(1),(1198),(1198),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parts","parts",(-1805428078),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),"Take a sequence of parts, add scale numbers (e.g., million) and combine into a string\n  offset is a factor of 10^3 to multiply by",(cljs.core.truth_(cljs.pprint.add_english_scales)?cljs.pprint.add_english_scales.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__1685 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1685,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1685,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_1688 = (((arg < (0)))?(- arg):arg);
var parts_1689 = cljs.pprint.remainders((1000),abs_arg_1688);
if((cljs.core.count(parts_1689) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_1690 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_1689);
var full_str_1691 = cljs.pprint.add_english_scales(parts_strs_1690,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_1691)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));
}
}

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_cardinal_english;},new cljs.core.Symbol("cljs.pprint","format-cardinal-english","cljs.pprint/format-cardinal-english",(1246755570),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-cardinal-english","format-cardinal-english",(1124650169),null),"cljs/pprint.cljs",(31),(1),(1221),(1221),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_cardinal_english)?cljs.pprint.format_cardinal_english.cljs$lang$test:null)])));})()
;
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
(function (){
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hundred")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_simple_ordinal;},new cljs.core.Symbol("cljs.pprint","format-simple-ordinal","cljs.pprint/format-simple-ordinal",(1699025669),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-simple-ordinal","format-simple-ordinal",(1812752846),null),"cljs/pprint.cljs",(29),(1),(1238),(1238),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",(-669195096),null)], null)),"Convert a number less than 1000 to a ordinal english string\n  Note this should only be used for the last one in the sequence",(cljs.core.truth_(cljs.pprint.format_simple_ordinal)?cljs.pprint.format_simple_ordinal.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__1692 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1692,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1692,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_1695 = (((arg < (0)))?(- arg):arg);
var parts_1696 = cljs.pprint.remainders((1000),abs_arg_1695);
if((cljs.core.count(parts_1696) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_1697 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_1696));
var head_str_1698 = cljs.pprint.add_english_scales(parts_strs_1697,(1));
var tail_str_1699 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_1696));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_1698))) && (!(cljs.core.empty_QMARK_(tail_str_1699))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_1698),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_1699)].join(''):((!(cljs.core.empty_QMARK_(head_str_1698)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_1698),cljs.core.str.cljs$core$IFn$_invoke$arity$1("th")].join(''):tail_str_1699
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));

var low_two_digits_1700 = cljs.core.rem(arg,(100));
var not_teens_1701 = (((11) < low_two_digits_1700)) || (((19) > low_two_digits_1700));
var low_digit_1702 = cljs.core.rem(low_two_digits_1700,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_1702 === (1))) && (not_teens_1701))?"st":((((low_digit_1702 === (2))) && (not_teens_1701))?"nd":((((low_digit_1702 === (3))) && (not_teens_1701))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_ordinal_english;},new cljs.core.Symbol("cljs.pprint","format-ordinal-english","cljs.pprint/format-ordinal-english",(1080759511),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-ordinal-english","format-ordinal-english",(1193426460),null),"cljs/pprint.cljs",(30),(1),(1260),(1260),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_ordinal_english)?cljs.pprint.format_ordinal_english.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null); return (
new cljs.core.Var(function(){return cljs.pprint.old_roman_table;},new cljs.core.Symbol("cljs.pprint","old-roman-table","cljs.pprint/old-roman-table",(1065314602),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"old-roman-table","old-roman-table",(874791891),null),"cljs/pprint.cljs",(21),(1),(1296),(1297),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.old_roman_table)?cljs.pprint.old_roman_table.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null); return (
new cljs.core.Var(function(){return cljs.pprint.new_roman_table;},new cljs.core.Symbol("cljs.pprint","new-roman-table","cljs.pprint/new-roman-table",(1010717852),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"new-roman-table","new-roman-table",(888621909),null),"cljs/pprint.cljs",(21),(1),(1303),(1304),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.new_roman_table)?cljs.pprint.new_roman_table.cljs$lang$test:null)])));})()
;
/**
 * Format a roman numeral using the specified look-up table
 */
(function (){
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__1703 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1703,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1703,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_1706 = cljs.pprint.remainders((10),arg);
var acc_1707 = cljs.core.PersistentVector.EMPTY;
var pos_1708 = (cljs.core.count(digits_1706) - (1));
var digits_1709__$1 = digits_1706;
while(true){
if(cljs.core.empty_QMARK_(digits_1709__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_1707)], 0));
} else {
var digit_1710 = cljs.core.first(digits_1709__$1);
var G__1711 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_1710))?acc_1707:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_1707,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_1708),(digit_1710 - (1)))));
var G__1712 = (pos_1708 - (1));
var G__1713 = cljs.core.next(digits_1709__$1);
acc_1707 = G__1711;
pos_1708 = G__1712;
digits_1709__$1 = G__1713;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530))," ",new cljs.core.Keyword(null,"commachar","commachar",(652859327)),",",new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(3),new cljs.core.Keyword(null,"colon","colon",(-965200945)),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),(0),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),(0),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),(0),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),(0)], null));
}

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_roman;},new cljs.core.Symbol("cljs.pprint","format-roman","cljs.pprint/format-roman",(1615397806),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-roman","format-roman",(1754166357),null),"cljs/pprint.cljs",(20),(1),(1310),(1310),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"table","table",(1075588491),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),"Format a roman numeral using the specified look-up table",(cljs.core.truth_(cljs.pprint.format_roman)?cljs.pprint.format_roman.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_old_roman;},new cljs.core.Symbol("cljs.pprint","format-old-roman","cljs.pprint/format-old-roman",(1360793375),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-old-roman","format-old-roman",(1591023056),null),"cljs/pprint.cljs",(24),(1),(1334),(1334),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_old_roman)?cljs.pprint.format_old_roman.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_new_roman;},new cljs.core.Symbol("cljs.pprint","format-new-roman","cljs.pprint/format-new-roman",(1367436567),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-new-roman","format-new-roman",(1229354844),null),"cljs/pprint.cljs",(24),(1),(1337),(1337),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_new_roman)?cljs.pprint.format_new_roman.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null); return (
new cljs.core.Var(function(){return cljs.pprint.special_chars;},new cljs.core.Symbol("cljs.pprint","special-chars","cljs.pprint/special-chars",(1952905452),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"special-chars","special-chars",(2101219619),null),"cljs/pprint.cljs",(19),(1),(1344),(1345),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.special_chars)?cljs.pprint.special_chars.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__1714 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1714,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1714,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Control-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pretty_character;},new cljs.core.Symbol("cljs.pprint","pretty-character","cljs.pprint/pretty-character",(2012399240),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pretty-character","pretty-character",(1882859697),null),"cljs/pprint.cljs",(24),(1),(1347),(1347),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.pretty_character)?cljs.pprint.pretty_character.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__1717 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1717,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1717,(1),null);
var pred__1720_1723 = cljs.core._EQ_;
var expr__1721_1724 = new cljs.core.Keyword(null,"char-format","char-format",(-1016499218)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((pred__1720_1723.cljs$core$IFn$_invoke$arity$2 ? pred__1720_1723.cljs$core$IFn$_invoke$arity$2("o",expr__1721_1724) : pred__1720_1723("o",expr__1721_1724)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__1720_1723.cljs$core$IFn$_invoke$arity$2 ? pred__1720_1723.cljs$core$IFn$_invoke$arity$2("u",expr__1721_1724) : pred__1720_1723("u",expr__1721_1724)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__1720_1723.cljs$core$IFn$_invoke$arity$2 ? pred__1720_1723.cljs$core$IFn$_invoke$arity$2(null,expr__1721_1724) : pred__1720_1723(null,expr__1721_1724)))){
cljs.pprint.print_char(c);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1721_1724)].join('')));
}
}
}

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.readable_character;},new cljs.core.Symbol("cljs.pprint","readable-character","cljs.pprint/readable-character",(972991432),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"readable-character","readable-character",(818257153),null),"cljs/pprint.cljs",(26),(1),(1361),(1361),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.readable_character)?cljs.pprint.readable_character.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__1725 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1725,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1725,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.plain_character;},new cljs.core.Symbol("cljs.pprint","plain-character","cljs.pprint/plain-character",(-1637766821),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"plain-character","plain-character",(-2027519204),null),"cljs/pprint.cljs",(23),(1),(1369),(1369),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.plain_character)?cljs.pprint.plain_character.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),token));
}); return (
new cljs.core.Var(function(){return cljs.pprint.abort_QMARK_;},new cljs.core.Symbol("cljs.pprint","abort?","cljs.pprint/abort?",(-1002889391),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"abort?","abort?",(-588189414),null),"cljs/pprint.cljs",(14),(1),(1376),(1376),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",(810340414),null)], null)),null,(cljs.core.truth_(cljs.pprint.abort_QMARK_)?cljs.pprint.abort_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__1728 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1728,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1728,(1),null);
var vec__1731 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1731,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1731,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
}); return (
new cljs.core.Var(function(){return cljs.pprint.execute_sub_format;},new cljs.core.Symbol("cljs.pprint","execute-sub-format","cljs.pprint/execute-sub-format",(-551239716),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"execute-sub-format","execute-sub-format",(-664821275),null),"cljs/pprint.cljs",(26),(1),(1381),(1381),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),new cljs.core.Symbol(null,"base-args","base-args",(371824705),null)], null)),null,(cljs.core.truth_(cljs.pprint.execute_sub_format)?cljs.pprint.execute_sub_format.cljs$lang$test:null)])));})()
;
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
(function (){
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.float_parts_base;},new cljs.core.Symbol("cljs.pprint","float-parts-base","cljs.pprint/float-parts-base",(-1353423281),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"float-parts-base","float-parts-base",(-1750230906),null),"cljs/pprint.cljs",(24),(1),(1399),(1399),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),"Produce string parts for the mantissa (normalize 1-9) and exponent",(cljs.core.truth_(cljs.pprint.float_parts_base)?cljs.pprint.float_parts_base.cljs$lang$test:null)])));})()
;
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
(function (){
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__1734 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1734,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1734,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.float_parts;},new cljs.core.Symbol("cljs.pprint","float-parts","cljs.pprint/float-parts",(1629782111),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"float-parts","float-parts",(1718467094),null),"cljs/pprint.cljs",(19),(1),(1413),(1413),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null)], null)),"Take care of leading and trailing zeros in decomposed floats",(cljs.core.truth_(cljs.pprint.float_parts)?cljs.pprint.float_parts.cljs$lang$test:null)])));})()
;
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
(function (){
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__1737 = (i - (1));
i = G__1737;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.inc_s;},new cljs.core.Symbol("cljs.pprint","inc-s","cljs.pprint/inc-s",(-471975637),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"inc-s","inc-s",(-353941652),null),"cljs/pprint.cljs",(13),(1),(1425),(1425),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),"Assumption: The input string consists of one or more decimal digits,\n  and no other characters. Return a string containing one or more\n  decimal digits containing a decimal number one larger than the input\n  string. The output string will always be the same length as the input\n  string, or one character longer.",(cljs.core.truth_(cljs.pprint.inc_s)?cljs.pprint.inc_s.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__20219__auto__ = d;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__20767__auto__ = (2);
var y__20768__auto__ = w;
return ((x__20767__auto__ > y__20768__auto__) ? x__20767__auto__ : y__20768__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__20767__auto__ = (e + (1));
var y__20768__auto__ = (w__$1 - (1));
return ((x__20767__auto__ > y__20768__auto__) ? x__20767__auto__ : y__20768__auto__);
})():(w__$1 + e)
));
var vec__1738 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1738,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1738,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1738,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1738,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.round_str;},new cljs.core.Symbol("cljs.pprint","round-str","cljs.pprint/round-str",(-191525395),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"round-str","round-str",(-35816668),null),"cljs/pprint.cljs",(17),(1),(1441),(1441),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"e","e",(-1273166571),null),new cljs.core.Symbol(null,"d","d",(-682293345),null),new cljs.core.Symbol(null,"w","w",(1994700528),null)], null)),null,(cljs.core.truth_(cljs.pprint.round_str)?cljs.pprint.round_str.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__1741 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1741,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1741,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.expand_fixed;},new cljs.core.Symbol("cljs.pprint","expand-fixed","cljs.pprint/expand-fixed",(1233867645),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"expand-fixed","expand-fixed",(1087399220),null),"cljs/pprint.cljs",(20),(1),(1487),(1487),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"e","e",(-1273166571),null),new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)),null,(cljs.core.truth_(cljs.pprint.expand_fixed)?cljs.pprint.expand_fixed.cljs$lang$test:null)])));})()
;
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
(function (){
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.insert_decimal;},new cljs.core.Symbol("cljs.pprint","insert-decimal","cljs.pprint/insert-decimal",(-1775580107),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"insert-decimal","insert-decimal",(-1894570294),null),"cljs/pprint.cljs",(22),(1),(1497),(1497),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"e","e",(-1273166571),null)], null)),"Insert the decimal point at the right spot in the number to match an exponent",(cljs.core.truth_(cljs.pprint.insert_decimal)?cljs.pprint.insert_decimal.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_fixed;},new cljs.core.Symbol("cljs.pprint","get-fixed","cljs.pprint/get-fixed",(-1700541856),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-fixed","get-fixed",(-1846890055),null),"cljs/pprint.cljs",(17),(1),(1505),(1505),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"e","e",(-1273166571),null),new cljs.core.Symbol(null,"d","d",(-682293345),null)], null)),null,(cljs.core.truth_(cljs.pprint.get_fixed)?cljs.pprint.get_fixed.cljs$lang$test:null)])));})()
;
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
(function (){
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.insert_scaled_decimal;},new cljs.core.Symbol("cljs.pprint","insert-scaled-decimal","cljs.pprint/insert-scaled-decimal",(89995341),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"insert-scaled-decimal","insert-scaled-decimal",(1007029892),null),"cljs/pprint.cljs",(29),(1),(1508),(1508),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"k","k",(-505765866),null)], null)),"Insert the decimal point at the right spot in the number to match an exponent",(cljs.core.truth_(cljs.pprint.insert_scaled_decimal)?cljs.pprint.insert_scaled_decimal.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
}); return (
new cljs.core.Var(function(){return cljs.pprint.convert_ratio;},new cljs.core.Symbol("cljs.pprint","convert-ratio","cljs.pprint/convert-ratio",(-78733243),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"convert-ratio","convert-ratio",(42585660),null),"cljs/pprint.cljs",(21),(1),(1516),(1516),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",(-555367584),null)], null)),null,(cljs.core.truth_(cljs.pprint.convert_ratio)?cljs.pprint.convert_ratio.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var vec__1744 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1744,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1744,(1),null);
var vec__1747 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1747,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1747,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__1750 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1750,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1750,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",(-2146297393)).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__20219__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__1753 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1753,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1753,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1753,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__20196__auto__ = w;
if(cljs.core.truth_(and__20196__auto__)){
var and__20196__auto____$1 = d;
if(cljs.core.truth_(and__20196__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__20196__auto____$1;
}
} else {
return and__20196__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_1756 = cljs.core.count(fixed_repr__$1);
var signed_len_1757 = (cljs.core.truth_(add_sign)?(len_1756 + (1)):len_1756);
var prepend_zero_1758__$1 = (prepend_zero) && (!((signed_len_1757 >= w)));
var append_zero_1759__$1 = (append_zero) && (!((signed_len_1757 >= w)));
var full_len_1760 = (((prepend_zero_1758__$1) || (append_zero_1759__$1))?(signed_len_1757 + (1)):signed_len_1757);
if(cljs.core.truth_((function (){var and__20196__auto__ = (full_len_1760 > w);
if(and__20196__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20196__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_1760),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_1758__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_1759__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.fixed_float;},new cljs.core.Symbol("cljs.pprint","fixed-float","cljs.pprint/fixed-float",(-1385724630),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"fixed-float","fixed-float",(-1539392659),null),"cljs/pprint.cljs",(19),(1),(1521),(1521),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.fixed_float)?cljs.pprint.fixed_float.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__1761 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1761,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1761,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__1767_1777 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__1768_1778 = G__1767_1777;
var mantissa_1779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1768_1778,(0),null);
var exp_1780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1768_1778,(1),null);
var G__1767_1781__$1 = G__1767_1777;
while(true){
var vec__1771_1782 = G__1767_1781__$1;
var mantissa_1783__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1771_1782,(0),null);
var exp_1784__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1771_1782,(1),null);
var w_1785 = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d_1786 = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var e_1787 = new cljs.core.Keyword(null,"e","e",(1381269198)).cljs$core$IFn$_invoke$arity$1(params);
var k_1788 = new cljs.core.Keyword(null,"k","k",(-2146297393)).cljs$core$IFn$_invoke$arity$1(params);
var expchar_1789 = (function (){var or__20219__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return "E";
}
})();
var add_sign_1790 = (function (){var or__20219__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_1791 = (k_1788 <= (0));
var scaled_exp_1792 = (exp_1784__$1 - (k_1788 - (1)));
var scaled_exp_str_1793 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_1792))].join('');
var scaled_exp_str_1794__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_1789),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_1792 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_1787)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_1787 - cljs.core.count(scaled_exp_str_1793)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_1793)].join('');
var exp_width_1795 = cljs.core.count(scaled_exp_str_1794__$1);
var base_mantissa_width_1796 = cljs.core.count(mantissa_1783__$1);
var scaled_mantissa_1797 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_1788),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_1783__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_1786)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_1786 - (base_mantissa_width_1796 - (1))) - (((k_1788 < (0)))?(- k_1788):(0))),"0")):null))].join('');
var w_mantissa_1798 = (cljs.core.truth_(w_1785)?(w_1785 - exp_width_1795):null);
var vec__1774_1799 = cljs.pprint.round_str(scaled_mantissa_1797,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_1788,(0)))?(d_1786 - (1)):(((k_1788 > (0)))?d_1786:(((k_1788 < (0)))?(d_1786 - (1)):null))),(cljs.core.truth_(w_mantissa_1798)?(w_mantissa_1798 - (cljs.core.truth_(add_sign_1790)?(1):(0))):null));
var rounded_mantissa_1800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1774_1799,(0),null);
var __1801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1774_1799,(1),null);
var incr_exp_1802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1774_1799,(2),null);
var full_mantissa_1803 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_1800,k_1788);
var append_zero_1804 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_1788,cljs.core.count(rounded_mantissa_1800))) && ((d_1786 == null));
if(cljs.core.not(incr_exp_1802)){
if(cljs.core.truth_(w_1785)){
var len_1805 = (cljs.core.count(full_mantissa_1803) + exp_width_1795);
var signed_len_1806 = (cljs.core.truth_(add_sign_1790)?(len_1805 + (1)):len_1805);
var prepend_zero_1807__$1 = (prepend_zero_1791) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_1806,w_1785)));
var full_len_1808 = ((prepend_zero_1807__$1)?(signed_len_1806 + (1)):signed_len_1806);
var append_zero_1809__$1 = (append_zero_1804) && ((full_len_1808 < w_1785));
if(cljs.core.truth_((function (){var and__20196__auto__ = (function (){var or__20219__auto__ = (full_len_1808 > w_1785);
if(or__20219__auto__){
return or__20219__auto__;
} else {
var and__20196__auto__ = e_1787;
if(cljs.core.truth_(and__20196__auto__)){
return ((exp_width_1795 - (2)) > e_1787);
} else {
return and__20196__auto__;
}
}
})();
if(cljs.core.truth_(and__20196__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20196__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_1785,new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_1785 - full_len_1808) - ((append_zero_1809__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_1790)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_1807__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_1803),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_1809__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_1794__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_1790)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_1791)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_1803),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_1804)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_1794__$1)].join('')], 0));
}
} else {
var G__1810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_1800,(exp_1784__$1 + (1))], null);
G__1767_1781__$1 = G__1810;
continue;
}
break;
}

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.exponential_float;},new cljs.core.Symbol("cljs.pprint","exponential-float","cljs.pprint/exponential-float",(-1250682590),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"exponential-float","exponential-float",(-1405284485),null),"cljs/pprint.cljs",(25),(1),(1568),(1568),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs.pprint.exponential_float)?cljs.pprint.exponential_float.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__1811 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1811,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1811,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__1814 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1814,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1814,(1),null);
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",(1381269198)).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,(0)))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__20767__auto__ = cljs.core.count(mantissa);
var y__20768__auto__ = (function (){var x__20788__auto__ = n;
var y__20789__auto__ = (7);
return ((x__20788__auto__ < y__20789__auto__) ? x__20788__auto__ : y__20789__auto__);
})();
return ((x__20767__auto__ > y__20768__auto__) ? x__20767__auto__ : y__20768__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",(354169001)),ww,new cljs.core.Keyword(null,"d","d",(1972142424)),dd,new cljs.core.Keyword(null,"k","k",(-2146297393)),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",(1476951349)),new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.general_float;},new cljs.core.Symbol("cljs.pprint","general-float","cljs.pprint/general-float",(-1073206146),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"general-float","general-float",(-885976569),null),"cljs/pprint.cljs",(21),(1),(1642),(1642),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.general_float)?cljs.pprint.general_float.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__1817 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1817,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1817,(1),null);
var vec__1820 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1820,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1820,(1),null);
var d = new cljs.core.Keyword(null,"d","d",(1972142424)).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",(354169001)).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__20219__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return (arg < (0));
}
})();
var vec__1823 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1823,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1823,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1823,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__20196__auto__ = new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__20196__auto__)){
return add_sign;
} else {
return and__20196__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__20196__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params));
if(and__20196__auto__){
return add_sign;
} else {
return and__20196__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.dollar_float;},new cljs.core.Symbol("cljs.pprint","dollar-float","cljs.pprint/dollar-float",(-558484038),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"dollar-float","dollar-float",(-680451101),null),"cljs/pprint.cljs",(20),(1),(1665),(1665),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.dollar_float)?cljs.pprint.dollar_float.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",(762528866)).cljs$core$IFn$_invoke$arity$1(params);
var vec__1826 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1826,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1826,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.choice_conditional;},new cljs.core.Symbol("cljs.pprint","choice-conditional","cljs.pprint/choice-conditional",(275301505),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"choice-conditional","choice-conditional",(681033432),null),"cljs/pprint.cljs",(26),(1),(1691),(1691),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"arg-navigator","arg-navigator",(1660575364),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.choice_conditional)?cljs.pprint.choice_conditional.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__1829 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1829,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1829,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.boolean_conditional;},new cljs.core.Symbol("cljs.pprint","boolean-conditional","cljs.pprint/boolean-conditional",(-1211189447),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"boolean-conditional","boolean-conditional",(-1090040382),null),"cljs/pprint.cljs",(27),(1),(1703),(1703),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"arg-navigator","arg-navigator",(1660575364),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.boolean_conditional)?cljs.pprint.boolean_conditional.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__1832 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1832,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1832,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.check_arg_conditional;},new cljs.core.Symbol("cljs.pprint","check-arg-conditional","cljs.pprint/check-arg-conditional",(1514169856),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"check-arg-conditional","check-arg-conditional",(1393118297),null),"cljs/pprint.cljs",(29),(1),(1715),(1715),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"arg-navigator","arg-navigator",(1660575364),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.check_arg_conditional)?cljs.pprint.check_arg_conditional.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__1835 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1835,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1835,(1),null);
var vec__1838 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1838,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1838,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__20219__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__20219__auto__){
return or__20219__auto__;
} else {
var and__20196__auto__ = max_count;
if(cljs.core.truth_(and__20196__auto__)){
return (count >= max_count);
} else {
return and__20196__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__1841 = (count + (1));
var G__1842 = iter_result;
var G__1843 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__1841;
args__$1 = G__1842;
last_pos = G__1843;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.iterate_sublist;},new cljs.core.Symbol("cljs.pprint","iterate-sublist","cljs.pprint/iterate-sublist",(442089011),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"iterate-sublist","iterate-sublist",(286303354),null),"cljs/pprint.cljs",(23),(1),(1732),(1732),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.iterate_sublist)?cljs.pprint.iterate_sublist.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__1844 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1844,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1844,(1),null);
var vec__1847 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1847,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1847,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__20219__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__20219__auto__){
return or__20219__auto__;
} else {
var and__20196__auto__ = max_count;
if(cljs.core.truth_(and__20196__auto__)){
return (count >= max_count);
} else {
return and__20196__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__1850 = (count + (1));
var G__1851 = cljs.core.next(arg_list__$1);
count = G__1850;
arg_list__$1 = G__1851;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.iterate_list_of_sublists;},new cljs.core.Symbol("cljs.pprint","iterate-list-of-sublists","cljs.pprint/iterate-list-of-sublists",(-1207075887),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"iterate-list-of-sublists","iterate-list-of-sublists",(-1580053016),null),"cljs/pprint.cljs",(32),(1),(1757),(1757),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.iterate_list_of_sublists)?cljs.pprint.iterate_list_of_sublists.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__1852 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1852,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1852,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__20219__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__20219__auto__){
return or__20219__auto__;
} else {
var and__20196__auto__ = max_count;
if(cljs.core.truth_(and__20196__auto__)){
return (count >= max_count);
} else {
return and__20196__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__1855 = (count + (1));
var G__1856 = iter_result;
var G__1857 = new cljs.core.Keyword(null,"pos","pos",(-864607220)).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__1855;
navigator__$2 = G__1856;
last_pos = G__1857;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.iterate_main_list;},new cljs.core.Symbol("cljs.pprint","iterate-main-list","cljs.pprint/iterate-main-list",(-1453679564),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"iterate-main-list","iterate-main-list",(-1604210067),null),"cljs/pprint.cljs",(25),(1),(1780),(1780),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.iterate_main_list)?cljs.pprint.iterate_main_list.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var vec__1858 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1858,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1858,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__20219__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__20219__auto__){
return or__20219__auto__;
} else {
var and__20196__auto__ = max_count;
if(cljs.core.truth_(and__20196__auto__)){
return (count >= max_count);
} else {
return and__20196__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__1861 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1861,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1861,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__1864 = (count + (1));
var G__1865 = navigator__$3;
count = G__1864;
navigator__$2 = G__1865;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.iterate_main_sublists;},new cljs.core.Symbol("cljs.pprint","iterate-main-sublists","cljs.pprint/iterate-main-sublists",(-1324721013),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"iterate-main-sublists","iterate-main-sublists",(-1204570430),null),"cljs/pprint.cljs",(29),(1),(1804),(1804),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.iterate_main_sublists)?cljs.pprint.iterate_main_sublists.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_logical_block; return (
new cljs.core.Var(function(){return cljs.pprint.format_logical_block;},new cljs.core.Symbol("cljs.pprint","format-logical-block","cljs.pprint/format-logical-block",(-1790043349),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-logical-block","format-logical-block",(-1408687662),null),"cljs/pprint.cljs",(30),(1),(1835),true,(1835),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.format_logical_block)?cljs.pprint.format_logical_block.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.justify_clauses; return (
new cljs.core.Var(function(){return cljs.pprint.justify_clauses;},new cljs.core.Symbol("cljs.pprint","justify-clauses","cljs.pprint/justify-clauses",(-110454534),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"justify-clauses","justify-clauses",(-265969117),null),"cljs/pprint.cljs",(25),(1),(1836),true,(1836),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.justify_clauses)?cljs.pprint.justify_clauses.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)).cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block(params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses(params,navigator,offsets));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.logical_block_or_justify;},new cljs.core.Symbol("cljs.pprint","logical-block-or-justify","cljs.pprint/logical-block-or-justify",(-287393839),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"logical-block-or-justify","logical-block-or-justify",(-677914136),null),"cljs/pprint.cljs",(32),(1),(1838),(1838),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.logical_block_or_justify)?cljs.pprint.logical_block_or_justify.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__1866 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_1869 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_1869;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1866,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1866,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__1870 = cljs.core.next(clauses__$1);
var G__1871 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__1872 = iter_result;
clauses__$1 = G__1870;
acc = G__1871;
navigator__$1 = G__1872;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.render_clauses;},new cljs.core.Symbol("cljs.pprint","render-clauses","cljs.pprint/render-clauses",(417699772),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"render-clauses","render-clauses",(-516125325),null),"cljs/pprint.cljs",(22),(1),(1847),(1847),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",(-1199594528),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"base-navigator","base-navigator",(1619563041),null)], null)),null,(cljs.core.truth_(cljs.pprint.render_clauses)?cljs.pprint.render_clauses.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__1873 = (function (){var temp__19804__auto__ = new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__19804__auto__)){
var else$ = temp__19804__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__1876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1873,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1876,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1873,(1),null);
var navigator__$1 = (function (){var or__20219__auto__ = new_navigator;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return navigator;
}
})();
var vec__1879 = (function (){var temp__19804__auto__ = new cljs.core.Keyword(null,"else-params","else-params",(-832171646)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__19804__auto__)){
var p = temp__19804__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1879,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1879,(1),null);
var navigator__$2 = (function (){var or__20219__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__20219__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",(962687677)).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__20219__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",(1742323262)).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var vec__1882 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1882,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1882,(1),null);
var slots = (function (){var x__20767__auto__ = (1);
var y__20768__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__20767__auto__ > y__20768__auto__) ? x__20767__auto__ : y__20768__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",(1230695445)).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",(323570901)).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__20767__auto__ = minpad;
var y__20768__auto__ = cljs.core.quot(total_pad,slots);
return ((x__20767__auto__ > y__20768__auto__) ? x__20767__auto__ : y__20768__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__20196__auto__ = eol_str;
if(cljs.core.truth_(and__20196__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__20196__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_1885__$1 = slots;
var extra_pad_1886__$1 = extra_pad;
var strs_1887__$1 = strs;
var pad_only_1888 = (function (){var or__20219__auto__ = new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_1887__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_1887__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_1888))?cljs.core.first(strs_1887__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__20219__auto__ = pad_only_1888;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
var or__20219__auto____$1 = cljs.core.next(strs_1887__$1);
if(or__20219__auto____$1){
return or__20219__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_1886__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",(2018584530)).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__1889 = (slots_1885__$1 - (1));
var G__1890 = (extra_pad_1886__$1 - (1));
var G__1891 = (cljs.core.truth_(pad_only_1888)?strs_1887__$1:cljs.core.next(strs_1887__$1));
var G__1892 = false;
slots_1885__$1 = G__1889;
extra_pad_1886__$1 = G__1890;
strs_1887__$1 = G__1891;
pad_only_1888 = G__1892;
continue;
} else {
}
break;
}

return navigator__$3;
}); return (
new cljs.core.Var(function(){return cljs.pprint.justify_clauses;},new cljs.core.Symbol("cljs.pprint","justify-clauses","cljs.pprint/justify-clauses",(-110454534),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"justify-clauses","justify-clauses",(-265969117),null),"cljs/pprint.cljs",(23),(1),(1863),(1863),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.justify_clauses)?cljs.pprint.justify_clauses.cljs$lang$test:null)])));})()
;
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
(function (){
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint1893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint1893 = (function (writer,meta1894){
this.writer = writer;
this.meta1894 = meta1894;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1895,meta1894__$1){
var self__ = this;
var _1895__$1 = this;
return (new cljs.pprint.t_cljs$pprint1893(self__.writer,meta1894__$1));
});

cljs.pprint.t_cljs$pprint1893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1895){
var self__ = this;
var _1895__$1 = this;
return self__.meta1894;
});

cljs.pprint.t_cljs$pprint1893.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint1893.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1896 = cljs.core._EQ_;
var expr__1897 = cljs.core.type(x);
if(cljs.core.truth_((pred__1896.cljs$core$IFn$_invoke$arity$2 ? pred__1896.cljs$core$IFn$_invoke$arity$2(String,expr__1897) : pred__1896(String,expr__1897)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__1896.cljs$core$IFn$_invoke$arity$2 ? pred__1896.cljs$core$IFn$_invoke$arity$2(Number,expr__1897) : pred__1896(Number,expr__1897)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1897)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint1893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"meta1894","meta1894",(161364509),null)], null);
});

cljs.pprint.t_cljs$pprint1893.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1893.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1893";

cljs.pprint.t_cljs$pprint1893.cljs$lang$ctorPrWriter = (function (this__21075__auto__,writer__21076__auto__,opt__21077__auto__){
return cljs.core._write(writer__21076__auto__,"cljs.pprint/t_cljs$pprint1893");
});

(function (){
cljs.pprint.__GT_t_cljs$pprint1893 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint1893(writer__$1,meta1894){
return (new cljs.pprint.t_cljs$pprint1893(writer__$1,meta1894));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_t_cljs$pprint1893;},new cljs.core.Symbol("cljs.pprint","->t_cljs$pprint1893","cljs.pprint/->t_cljs$pprint1893",(-2133670459),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->t_cljs$pprint1893","->t_cljs$pprint1893",(-1743135718),null),"cljs/pprint.cljs",true,(3),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1921),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"meta1894","meta1894",(161364509),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),null,(cljs.core.truth_(cljs.pprint.__GT_t_cljs$pprint1893)?cljs.pprint.__GT_t_cljs$pprint1893.cljs$lang$test:null)])));})()
;

}

return (new cljs.pprint.t_cljs$pprint1893(writer,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.pprint.downcase_writer;},new cljs.core.Symbol("cljs.pprint","downcase-writer","cljs.pprint/downcase-writer",(988013830),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"downcase-writer","downcase-writer",(37286911),null),"cljs/pprint.cljs",(23),(1),(1918),(1918),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),"Returns a proxy that wraps writer, converting all characters to lower case",(cljs.core.truth_(cljs.pprint.downcase_writer)?cljs.pprint.downcase_writer.cljs$lang$test:null)])));})()
;
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
(function (){
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint1899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint1899 = (function (writer,meta1900){
this.writer = writer;
this.meta1900 = meta1900;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1901,meta1900__$1){
var self__ = this;
var _1901__$1 = this;
return (new cljs.pprint.t_cljs$pprint1899(self__.writer,meta1900__$1));
});

cljs.pprint.t_cljs$pprint1899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1901){
var self__ = this;
var _1901__$1 = this;
return self__.meta1900;
});

cljs.pprint.t_cljs$pprint1899.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint1899.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1902 = cljs.core._EQ_;
var expr__1903 = cljs.core.type(x);
if(cljs.core.truth_((pred__1902.cljs$core$IFn$_invoke$arity$2 ? pred__1902.cljs$core$IFn$_invoke$arity$2(String,expr__1903) : pred__1902(String,expr__1903)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__1902.cljs$core$IFn$_invoke$arity$2 ? pred__1902.cljs$core$IFn$_invoke$arity$2(Number,expr__1903) : pred__1902(Number,expr__1903)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1903)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint1899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"meta1900","meta1900",(1931245125),null)], null);
});

cljs.pprint.t_cljs$pprint1899.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1899.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1899";

cljs.pprint.t_cljs$pprint1899.cljs$lang$ctorPrWriter = (function (this__21075__auto__,writer__21076__auto__,opt__21077__auto__){
return cljs.core._write(writer__21076__auto__,"cljs.pprint/t_cljs$pprint1899");
});

(function (){
cljs.pprint.__GT_t_cljs$pprint1899 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint1899(writer__$1,meta1900){
return (new cljs.pprint.t_cljs$pprint1899(writer__$1,meta1900));
}); return (
new cljs.core.Var(function(){return cljs.pprint.__GT_t_cljs$pprint1899;},new cljs.core.Symbol("cljs.pprint","->t_cljs$pprint1899","cljs.pprint/->t_cljs$pprint1899",(265965953),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->t_cljs$pprint1899","->t_cljs$pprint1899",(378750536),null),"cljs/pprint.cljs",true,(3),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1942),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"meta1900","meta1900",(1931245125),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),null,(cljs.core.truth_(cljs.pprint.__GT_t_cljs$pprint1899)?cljs.pprint.__GT_t_cljs$pprint1899.cljs$lang$test:null)])));})()
;

}

return (new cljs.pprint.t_cljs$pprint1899(writer,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.pprint.upcase_writer;},new cljs.core.Symbol("cljs.pprint","upcase-writer","cljs.pprint/upcase-writer",(465735326),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"upcase-writer","upcase-writer",(51077317),null),"cljs/pprint.cljs",(21),(1),(1939),(1939),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),"Returns a proxy that wraps writer, converting all characters to upper case",(cljs.core.truth_(cljs.pprint.upcase_writer)?cljs.pprint.upcase_writer.cljs$lang$test:null)])));})()
;
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
(function (){
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__20196__auto__ = first_QMARK_;
if(cljs.core.truth_(and__20196__auto__)){
var and__20196__auto____$1 = f;
if(cljs.core.truth_(and__20196__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__20196__auto____$1;
}
} else {
return and__20196__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__20196__auto__ = m;
if(cljs.core.truth_(and__20196__auto__)){
return (m.index + (1));
} else {
return and__20196__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.capitalize_string;},new cljs.core.Symbol("cljs.pprint","capitalize-string","cljs.pprint/capitalize-string",(-142077180),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"capitalize-string","capitalize-string",(-20904497),null),"cljs/pprint.cljs",(25),(1),(1960),(1960),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"first?","first?",(662603839),null)], null)),"Capitalizes the words in a string. If first? is false, don't capitalize the\n                                      first character of the string even if it's a letter.",(cljs.core.truth_(cljs.pprint.capitalize_string)?cljs.pprint.capitalize_string.cljs$lang$test:null)])));})()
;
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
(function (){
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint1905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint1905 = (function (writer,last_was_whitespace_QMARK_,meta1906){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta1906 = meta1906;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_1907,meta1906__$1){
var self__ = this;
var _1907__$1 = this;
return (new cljs.pprint.t_cljs$pprint1905(self__.writer,self__.last_was_whitespace_QMARK_,meta1906__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint1905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_1907){
var self__ = this;
var _1907__$1 = this;
return self__.meta1906;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint1905.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint1905.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1908 = cljs.core._EQ_;
var expr__1909 = cljs.core.type(x);
if(cljs.core.truth_((pred__1908.cljs$core$IFn$_invoke$arity$2 ? pred__1908.cljs$core$IFn$_invoke$arity$2(String,expr__1909) : pred__1908(String,expr__1909)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__1911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__1911);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__1908.cljs$core$IFn$_invoke$arity$2 ? pred__1908.cljs$core$IFn$_invoke$arity$2(Number,expr__1909) : pred__1908(Number,expr__1909)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1909)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint1905.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",(-1073928093),null),new cljs.core.Symbol(null,"meta1906","meta1906",(-1639988988),null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint1905.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1905.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1905";

cljs.pprint.t_cljs$pprint1905.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__21075__auto__,writer__21076__auto__,opt__21077__auto__){
return cljs.core._write(writer__21076__auto__,"cljs.pprint/t_cljs$pprint1905");
});})(last_was_whitespace_QMARK_))
;

(function (){
cljs.pprint.__GT_t_cljs$pprint1905 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint1905(writer__$1,last_was_whitespace_QMARK___$1,meta1906){
return (new cljs.pprint.t_cljs$pprint1905(writer__$1,last_was_whitespace_QMARK___$1,meta1906));
});})(last_was_whitespace_QMARK_))
; return (
new cljs.core.Var(function(){return cljs.pprint.__GT_t_cljs$pprint1905;},new cljs.core.Symbol("cljs.pprint","->t_cljs$pprint1905","cljs.pprint/->t_cljs$pprint1905",(-133709661),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->t_cljs$pprint1905","->t_cljs$pprint1905",(-247514524),null),"cljs/pprint.cljs",true,(5),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(1987),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",(-1073928093),null),new cljs.core.Symbol(null,"meta1906","meta1906",(-1639988988),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),null,(cljs.core.truth_(cljs.pprint.__GT_t_cljs$pprint1905)?cljs.pprint.__GT_t_cljs$pprint1905.cljs$lang$test:null)])));})()
;

}

return (new cljs.pprint.t_cljs$pprint1905(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.pprint.capitalize_word_writer;},new cljs.core.Symbol("cljs.pprint","capitalize-word-writer","cljs.pprint/capitalize-word-writer",(58609266),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"capitalize-word-writer","capitalize-word-writer",(196688059),null),"cljs/pprint.cljs",(30),(1),(1983),(1983),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),"Returns a proxy that wraps writer, capitalizing all words",(cljs.core.truth_(cljs.pprint.capitalize_word_writer)?cljs.pprint.capitalize_word_writer.cljs$lang$test:null)])));})()
;
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
(function (){
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint1912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint1912 = (function (writer,capped,meta1913){
this.writer = writer;
this.capped = capped;
this.meta1913 = meta1913;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint1912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_1914,meta1913__$1){
var self__ = this;
var _1914__$1 = this;
return (new cljs.pprint.t_cljs$pprint1912(self__.writer,self__.capped,meta1913__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint1912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_1914){
var self__ = this;
var _1914__$1 = this;
return self__.meta1913;
});})(capped))
;

cljs.pprint.t_cljs$pprint1912.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint1912.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__1915 = cljs.core._EQ_;
var expr__1916 = cljs.core.type(x);
if(cljs.core.truth_((pred__1915.cljs$core$IFn$_invoke$arity$2 ? pred__1915.cljs$core$IFn$_invoke$arity$2(String,expr__1916) : pred__1915(String,expr__1916)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__20196__auto__ = m;
if(cljs.core.truth_(and__20196__auto__)){
return m.index;
} else {
return and__20196__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__1915.cljs$core$IFn$_invoke$arity$2 ? pred__1915.cljs$core$IFn$_invoke$arity$2(Number,expr__1916) : pred__1915(Number,expr__1916)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__20196__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__20196__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__20196__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__1916)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint1912.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"capped","capped",(-1650988402),null),new cljs.core.Symbol(null,"meta1913","meta1913",(437858128),null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint1912.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint1912.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint1912";

cljs.pprint.t_cljs$pprint1912.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__21075__auto__,writer__21076__auto__,opt__21077__auto__){
return cljs.core._write(writer__21076__auto__,"cljs.pprint/t_cljs$pprint1912");
});})(capped))
;

(function (){
cljs.pprint.__GT_t_cljs$pprint1912 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint1912(writer__$1,capped__$1,meta1913){
return (new cljs.pprint.t_cljs$pprint1912(writer__$1,capped__$1,meta1913));
});})(capped))
; return (
new cljs.core.Var(function(){return cljs.pprint.__GT_t_cljs$pprint1912;},new cljs.core.Symbol("cljs.pprint","->t_cljs$pprint1912","cljs.pprint/->t_cljs$pprint1912",(-565849777),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocols","protocols",(-5615896)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"anonymous","anonymous",(447897231)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"factory","factory",(63933746)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",(-1426798630)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"->t_cljs$pprint1912","->t_cljs$pprint1912",(-948094848),null),"cljs/pprint.cljs",true,(5),new cljs.core.Keyword(null,"positional","positional",(-203580463)),(2013),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null),new cljs.core.Symbol(null,"capped","capped",(-1650988402),null),new cljs.core.Symbol(null,"meta1913","meta1913",(437858128),null)], null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",(-1981666051),null),null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",(-1459057517),null),null,new cljs.core.Symbol("cljs.core","IWriter","cljs.core/IWriter",(-1282590490),null),null], null), null),null,(cljs.core.truth_(cljs.pprint.__GT_t_cljs$pprint1912)?cljs.pprint.__GT_t_cljs$pprint1912.cljs$lang$test:null)])));})()
;

}

return (new cljs.pprint.t_cljs$pprint1912(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
}); return (
new cljs.core.Var(function(){return cljs.pprint.init_cap_writer;},new cljs.core.Symbol("cljs.pprint","init-cap-writer","cljs.pprint/init-cap-writer",(-174279783),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"init-cap-writer","init-cap-writer",(-861558336),null),"cljs/pprint.cljs",(23),(1),(2009),(2009),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),"Returns a proxy that wraps writer, capitalizing the first word",(cljs.core.truth_(cljs.pprint.init_cap_writer)?cljs.pprint.init_cap_writer.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_1918 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer(cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_1918;
}}); return (
new cljs.core.Var(function(){return cljs.pprint.modify_case;},new cljs.core.Symbol("cljs.pprint","modify-case","cljs.pprint/modify-case",(1525491611),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"modify-case","modify-case",(1134971986),null),"cljs/pprint.cljs",(19),(1),(2044),(2044),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"make-writer","make-writer",(-1342091864),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.modify_case)?cljs.pprint.modify_case.cljs$lang$test:null)])));})()
;
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
(function (){
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.get_pretty_writer;},new cljs.core.Symbol("cljs.pprint","get-pretty-writer","cljs.pprint/get-pretty-writer",(-2019656662),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"get-pretty-writer","get-pretty-writer",(-1905834397),null),"cljs/pprint.cljs",(24),(1),(2054),(2054),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",(1362963291),null)], null)),"Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's\nalready a pretty writer. Generally, it is unnecessary to call this function, since pprint,\nwrite, and cl-format all call it if they need to. However if you want the state to be\npreserved across calls, you will want to wrap them with this.\n\nFor example, when you want to generate column-aware output with multiple calls to cl-format,\ndo it like in this example:\n\n    (defn print-table [aseq column-width]\n      (binding [*out* (get-pretty-writer *out*)]\n        (doseq [row aseq]\n          (doseq [col row]\n            (cl-format true \"~4D~7,vT\" col column-width))\n          (prn))))\n\nNow when you run:\n\n    user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)\n\nIt prints a table of squares and cubes for the numbers from 1 to 10:\n\n       1      1       1\n       2      4       8\n       3      9      27\n       4     16      64\n       5     25     125\n       6     36     216\n       7     49     343\n       8     64     512\n       9     81     729\n      10    100    1000",(cljs.core.truth_(cljs.pprint.get_pretty_writer)?cljs.pprint.get_pretty_writer.cljs$lang$test:null)])));})()
;
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
(function (){
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.fresh_line;},new cljs.core.Symbol("cljs.pprint","fresh-line","cljs.pprint/fresh-line",(-1048356440),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"fresh-line","fresh-line",(-620992529),null),"cljs/pprint.cljs",(17),(1),(2095),(2095),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Make a newline if *out* is not already at the beginning of the line. If *out* is\nnot a pretty writer (which keeps track of columns), this function always outputs a newline.",(cljs.core.truth_(cljs.pprint.fresh_line)?cljs.pprint.fresh_line.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_1920 = new cljs.core.Keyword(null,"colnum","colnum",(2023796854)).cljs$core$IFn$_invoke$arity$1(params);
var colinc_1921 = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var current_1922 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_1923 = (((current_1922 < colnum_1920))?(colnum_1920 - current_1922):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_1921,(0)))?(0):(colinc_1921 - cljs.core.rem((current_1922 - colnum_1920),colinc_1921))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_1923," "))], 0));

return navigator;
}); return (
new cljs.core.Var(function(){return cljs.pprint.absolute_tabulation;},new cljs.core.Symbol("cljs.pprint","absolute-tabulation","cljs.pprint/absolute-tabulation",(2128341271),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"absolute-tabulation","absolute-tabulation",(1730332638),null),"cljs/pprint.cljs",(27),(1),(2104),(2104),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.absolute_tabulation)?cljs.pprint.absolute_tabulation.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_1924 = new cljs.core.Keyword(null,"colnum","colnum",(2023796854)).cljs$core$IFn$_invoke$arity$1(params);
var colinc_1925 = new cljs.core.Keyword(null,"colinc","colinc",(-584873385)).cljs$core$IFn$_invoke$arity$1(params);
var start_col_1926 = (colrel_1924 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_1927 = (((colinc_1925 > (0)))?cljs.core.rem(start_col_1926,colinc_1925):(0));
var space_count_1928 = (colrel_1924 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_1927))?(0):(colinc_1925 - offset_1927)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_1928," "))], 0));

return navigator;
}); return (
new cljs.core.Var(function(){return cljs.pprint.relative_tabulation;},new cljs.core.Symbol("cljs.pprint","relative-tabulation","cljs.pprint/relative-tabulation",(1279530262),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"relative-tabulation","relative-tabulation",(882707279),null),"cljs/pprint.cljs",(27),(1),(2115),(2115),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.relative_tabulation)?cljs.pprint.relative_tabulation.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",(-1989541586)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",(-1989541586)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__1929 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1929,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1929,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1932_1934 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1933_1935 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1933_1935;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1932_1934;
}}


return navigator__$1;
}); return (
new cljs.core.Var(function(){return cljs.pprint.format_logical_block;},new cljs.core.Symbol("cljs.pprint","format-logical-block","cljs.pprint/format-logical-block",(-1790043349),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"format-logical-block","format-logical-block",(-1408687662),null),"cljs/pprint.cljs",(28),(1),(2130),(2130),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.format_logical_block)?cljs.pprint.format_logical_block.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",(-1088038603)):new cljs.core.Keyword(null,"block","block",(664686210)));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
}); return (
new cljs.core.Var(function(){return cljs.pprint.set_indent;},new cljs.core.Symbol("cljs.pprint","set-indent","cljs.pprint/set-indent",(1348076569),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"set-indent","set-indent",(-1457710384),null),"cljs/pprint.cljs",(18),(1),(2148),(2148),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.set_indent)?cljs.pprint.set_indent.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",(542802336)):new cljs.core.Keyword(null,"fill","fill",(883462889))):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",(-556060186)):new cljs.core.Keyword(null,"linear","linear",(872268697))));
cljs.pprint.pprint_newline(kind);

return navigator;
}); return (
new cljs.core.Var(function(){return cljs.pprint.conditional_newline;},new cljs.core.Symbol("cljs.pprint","conditional-newline","cljs.pprint/conditional-newline",(1128245564),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"conditional-newline","conditional-newline",(2029426629),null),"cljs/pprint.cljs",(27),(1),(2154),(2154),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"navigator","navigator",(-604431588),null),new cljs.core.Symbol(null,"offsets","offsets",(-1926880158),null)], null)),null,(cljs.core.truth_(cljs.pprint.conditional_newline)?cljs.pprint.conditional_newline.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"A",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__121_SHARP_,p2__122_SHARP_,p3__123_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__121_SHARP_,p2__122_SHARP_,p3__123_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"S",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__124_SHARP_,p2__125_SHARP_,p3__126_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__124_SHARP_,p2__125_SHARP_,p3__126_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"D",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__127_SHARP_,p2__128_SHARP_,p3__129_SHARP_){
return cljs.pprint.format_integer((10),p1__127_SHARP_,p2__128_SHARP_,p3__129_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"B",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__130_SHARP_,p2__131_SHARP_,p3__132_SHARP_){
return cljs.pprint.format_integer((2),p1__130_SHARP_,p2__131_SHARP_,p3__132_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"O",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__133_SHARP_,p2__134_SHARP_,p3__135_SHARP_){
return cljs.pprint.format_integer((8),p1__133_SHARP_,p2__134_SHARP_,p3__135_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"X",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (p1__136_SHARP_,p2__137_SHARP_,p3__138_SHARP_){
return cljs.pprint.format_integer((16),p1__136_SHARP_,p2__137_SHARP_,p3__138_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"R",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",(185279322)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",(652859327)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",(-1980061083)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__139_SHARP_,p2__140_SHARP_,p3__141_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",(185279322)).cljs$core$IFn$_invoke$arity$1(p1__139_SHARP_),p1__139_SHARP_,p2__140_SHARP_,p3__141_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__20196__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__20196__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20196__auto__;
}
})())){
return (function (p1__142_SHARP_,p2__143_SHARP_,p3__144_SHARP_){
return cljs.pprint.format_old_roman(p1__142_SHARP_,p2__143_SHARP_,p3__144_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__145_SHARP_,p2__146_SHARP_,p3__147_SHARP_){
return cljs.pprint.format_new_roman(p1__145_SHARP_,p2__146_SHARP_,p3__147_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__148_SHARP_,p2__149_SHARP_,p3__150_SHARP_){
return cljs.pprint.format_ordinal_english(p1__148_SHARP_,p2__149_SHARP_,p3__150_SHARP_);
});
} else {
return (function (p1__151_SHARP_,p2__152_SHARP_,p3__153_SHARP_){
return cljs.pprint.format_cardinal_english(p1__151_SHARP_,p2__152_SHARP_,p3__153_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"P",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__1936 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1936,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1936,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"C",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",(-1016499218)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"F",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"E",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",(1381269198)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"G",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",(1381269198)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",(-2146297393)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",(-1620088106)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",(1986664222)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"$",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",(1972142424)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",(354169001)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"%",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__21412__auto___1954 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_1955 = (0);
while(true){
if((i_1955 < n__21412__auto___1954)){
cljs.pprint.prn();

var G__1956 = (i_1955 + (1));
i_1955 = G__1956;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"&",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_1957 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_1957 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__21412__auto___1958 = (cnt_1957 - (1));
var i_1959 = (0);
while(true){
if((i_1959 < n__21412__auto___1958)){
cljs.pprint.prn();

var G__1960 = (i_1959 + (1));
i_1959 = G__1960;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"|",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",(2139924085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__21412__auto___1961 = new cljs.core.Keyword(null,"count","count",(2139924085)).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_1962 = (0);
while(true){
if((i_1962 < n__21412__auto___1961)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__1963 = (i_1962 + (1));
i_1962 = G__1963;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"~",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"\n",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"T",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",(2023796854)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__154_SHARP_,p2__155_SHARP_,p3__156_SHARP_){
return cljs.pprint.relative_tabulation(p1__154_SHARP_,p2__155_SHARP_,p3__156_SHARP_);
});
} else {
return (function (p1__157_SHARP_,p2__158_SHARP_,p3__159_SHARP_){
return cljs.pprint.absolute_tabulation(p1__157_SHARP_,p2__158_SHARP_,p3__159_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"*",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",(562130025)).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"?",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__1939 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1939,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1939,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__1942 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1942,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1942,(1),null);
var vec__1945 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1945,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1945,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"(",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),null,new cljs.core.Keyword(null,"else","else",(-1508377146)),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__20196__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__20196__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20196__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__160_SHARP_,p2__161_SHARP_,p3__162_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__160_SHARP_,p2__161_SHARP_,p3__162_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),")",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"[",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",(762528866)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),true,new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.Keyword(null,"last","last",(1105735132))], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),";",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",(962687677)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",(1742323262)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",(-1628749125)),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"]",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"{",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",(2021275563)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",(-452581833)),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_((function (){var and__20196__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__20196__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20196__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"}",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"<",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",(1230695445)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",(-584873385)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",(323570901)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",(2018584530)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",(-452581833)),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)),true,new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.Keyword(null,"first","first",(-644103046))], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),">",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"^",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",(951899358)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",(1729550917)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",(-1486822496)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",(951899358)).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",(1729550917)).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",(-1486822496)).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",(244853007)):new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)));
if(cljs.core.truth_((function (){var and__20196__auto__ = arg1;
if(cljs.core.truth_(and__20196__auto__)){
var and__20196__auto____$1 = arg2;
if(cljs.core.truth_(and__20196__auto____$1)){
return arg3;
} else {
return and__20196__auto____$1;
}
} else {
return and__20196__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__20196__auto__ = arg1;
if(cljs.core.truth_(and__20196__auto__)){
return arg2;
} else {
return and__20196__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",(-1241696419)).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"W",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null,new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
if(cljs.core.truth_((function (){var or__20219__auto__ = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",(1290497552)),null,new cljs.core.Keyword(null,"length","length",(588987862)),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__1948 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1948,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1948,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__1951 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1951,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1951,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",(1705310333)),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"_",new cljs.core.Keyword(null,"params","params",(710516235)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"at","at",(1476951349)),null,new cljs.core.Keyword(null,"colon","colon",(-965200945)),null,new cljs.core.Keyword(null,"both","both",(-393648840)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",(793559132)),"I",new cljs.core.Keyword(null,"params","params",(710516235)),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",(562130025)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",(1775418075)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",(-965200945)),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]); return (
new cljs.core.Var(function(){return cljs.pprint.directive_table;},new cljs.core.Symbol("cljs.pprint","directive-table","cljs.pprint/directive-table",(-1138257669),null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",(-1269645878)),"cljs/pprint.cljs",new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Keyword(null,"doc","doc",(1913296891)),null,new cljs.core.Keyword(null,"line","line",(212345235)),(2166),new cljs.core.Keyword(null,"column","column",(2078222095)),(1),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"directive-table","directive-table",(-1558673742),null),new cljs.core.Keyword(null,"test","test",(577538877)),(cljs.core.truth_(cljs.pprint.directive_table)?cljs.pprint.directive_table.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.List.EMPTY], null)));})()
;
(function (){
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/; return (
new cljs.core.Var(function(){return cljs.pprint.param_pattern;},new cljs.core.Symbol("cljs.pprint","param-pattern","cljs.pprint/param-pattern",(-112930823),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"param-pattern","param-pattern",(-23210622),null),"cljs/pprint.cljs",(19),(1),(2448),(2449),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.param_pattern)?cljs.pprint.param_pattern.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196)),null,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335)),null], null), null); return (
new cljs.core.Var(function(){return cljs.pprint.special_params;},new cljs.core.Symbol("cljs.pprint","special-params","cljs.pprint/special-params",(-1822548144),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"special-params","special-params",(-1809321623),null),"cljs/pprint.cljs",(20),(1),(2451),(2452),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.special_params)?cljs.pprint.special_params.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__1964){
var vec__1965 = p__1964;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1965,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1965,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1965,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.extract_param;},new cljs.core.Symbol("cljs.pprint","extract-param","cljs.pprint/extract-param",(1191989888),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"extract-param","extract-param",(1322730713),null),"cljs/pprint.cljs",(21),(1),(2454),(2454),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"saw-comma","saw-comma",(357939663),null)], null)], null)),null,(cljs.core.truth_(cljs.pprint.extract_param)?cljs.pprint.extract_param.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.extract_params;},new cljs.core.Symbol("cljs.pprint","extract-params","cljs.pprint/extract-params",(301713972),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"extract-params","extract-params",(146979967),null),"cljs/pprint.cljs",(22),(1),(2468),(2468),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs.pprint.extract_params)?cljs.pprint.extract_params.cljs$lang$test:null)])));})()
;
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
(function (){
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__1968){
var vec__1969 = p__1968;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1969,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1969,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["v",null,"V",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",(-758446196)):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",(-1216589335)):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.translate_param;},new cljs.core.Symbol("cljs.pprint","translate-param","cljs.pprint/translate-param",(709499755),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"translate-param","translate-param",(620949778),null),"cljs/pprint.cljs",(23),(1),(2471),(2471),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)], null)),"Translate the string representation of a param to the internalized\n                                      representation",(cljs.core.truth_(cljs.pprint.translate_param)?cljs.pprint.translate_param.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",(-965200945)),"@",new cljs.core.Keyword(null,"at","at",(1476951349))], null); return (
new cljs.core.Var(function(){return cljs.pprint.flag_defs;},new cljs.core.Symbol("cljs.pprint","flag-defs","cljs.pprint/flag-defs",(1748821136),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"flag-defs","flag-defs",(1635245785),null),"cljs/pprint.cljs",(15),(1),(2483),(2484),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.flag_defs)?cljs.pprint.flag_defs.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__1972){
var vec__1973 = p__1972;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1973,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1973,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1973,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Flag \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.extract_flags;},new cljs.core.Symbol("cljs.pprint","extract-flags","cljs.pprint/extract-flags",(-470627802),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"extract-flags","extract-flags",(-628477921),null),"cljs/pprint.cljs",(21),(1),(2486),(2486),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs.pprint.extract_flags)?cljs.pprint.extract_flags.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",(1775418075)).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__20196__auto__ = cljs.core.not(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__20196__auto__){
return new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__20196__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"@\" is an illegal flag for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__20196__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__20196__auto__){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__20196__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("\":\" is an illegal flag for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__20196__auto__ = cljs.core.not(new cljs.core.Keyword(null,"both","both",(-393648840)).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__20196__auto__){
var and__20196__auto____$1 = new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__20196__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__20196__auto____$1;
}
} else {
return and__20196__auto__;
}
})())){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),(function (){var x__20788__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__20789__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",(1476951349)).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__20788__auto__ < y__20789__auto__) ? x__20788__auto__ : y__20789__auto__);
})());
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.check_flags;},new cljs.core.Symbol("cljs.pprint","check-flags","cljs.pprint/check-flags",(1323990516),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"check-flags","check-flags",(1193449355),null),"cljs/pprint.cljs",(19),(1),(2501),(2501),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"flags","flags",(-879017694),null)], null)),null,(cljs.core.truth_(cljs.pprint.check_flags)?cljs.pprint.check_flags.cljs$lang$test:null)])));})()
;
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
(function (){
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__163_SHARP_,p2__164_SHARP_){
var val = cljs.core.first(p1__163_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__164_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__164_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" has bad type in directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__163_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__21262__auto__ = (function cljs$pprint$map_params_$_iter__1976(s__1977){
return (new cljs.core.LazySeq(null,(function (){
var s__1977__$1 = s__1977;
while(true){
var temp__19804__auto__ = cljs.core.seq(s__1977__$1);
if(temp__19804__auto__){
var s__1977__$2 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1977__$2)){
var c__21260__auto__ = cljs.core.chunk_first(s__1977__$2);
var size__21261__auto__ = cljs.core.count(c__21260__auto__);
var b__1979 = cljs.core.chunk_buffer(size__21261__auto__);
if((function (){var i__1978 = (0);
while(true){
if((i__1978 < size__21261__auto__)){
var vec__1980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21260__auto__,i__1978);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1980,(0),null);
var vec__1983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1980,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1983,(0),null);
cljs.core.chunk_append(b__1979,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__1992 = (i__1978 + (1));
i__1978 = G__1992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1979),cljs$pprint$map_params_$_iter__1976(cljs.core.chunk_rest(s__1977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1979),null);
}
} else {
var vec__1986 = cljs.core.first(s__1977__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1986,(0),null);
var vec__1989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1986,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1989,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__1976(cljs.core.rest(s__1977__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21262__auto__(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__165_SHARP_,p2__166_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__165_SHARP_,p2__166_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__167_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__167_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
}); return (
new cljs.core.Var(function(){return cljs.pprint.map_params;},new cljs.core.Symbol("cljs.pprint","map-params","cljs.pprint/map-params",(1832007044),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map-params","map-params",(1711082621),null),"cljs/pprint.cljs",(18),(1),(2514),(2514),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"params","params",(-1943919534),null),new cljs.core.Symbol(null,"flags","flags",(-879017694),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),"Takes a directive definition and the list of actual parameters and\na map of flags and returns a map of the parameters and flags with defaults\nfilled in. We check to make sure that there are the right types and number\nof parameters as well.",(cljs.core.truth_(cljs.pprint.map_params)?cljs.pprint.map_params.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__1993 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1993,(0),null);
var vec__1996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1993,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1996,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1996,(1),null);
var vec__1999 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1999,(0),null);
var vec__2002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1999,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2002,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2002,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2002,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__2005 = new cljs.core.Keyword(null,"generator-fn","generator-fn",(811851656)).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__2005.cljs$core$IFn$_invoke$arity$2 ? fexpr__2005.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__2005(params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.compile_directive;},new cljs.core.Symbol("cljs.pprint","compile-directive","cljs.pprint/compile-directive",(-573498725),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"compile-directive","compile-directive",(-426089646),null),"cljs/pprint.cljs",(25),(1),(2544),(2544),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs.pprint.compile_directive)?cljs.pprint.compile_directive.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",(-1989541586)),s], null),offset,null,null,null));
}); return (
new cljs.core.Var(function(){return cljs.pprint.compile_raw_string;},new cljs.core.Symbol("cljs.pprint","compile-raw-string","cljs.pprint/compile-raw-string",(1717683231),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"compile-raw-string","compile-raw-string",(1864953382),null),"cljs/pprint.cljs",(26),(1),(2564),(2564),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null)], null)),null,(cljs.core.truth_(cljs.pprint.compile_raw_string)?cljs.pprint.compile_raw_string.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.right_bracket;},new cljs.core.Symbol("cljs.pprint","right-bracket","cljs.pprint/right-bracket",(-2117359522),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"right-bracket","right-bracket",(-1702579689),null),"cljs/pprint.cljs",(21),(1),(2567),(2567),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.right_bracket)?cljs.pprint.right_bracket.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",(-1628749125)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.separator_QMARK_;},new cljs.core.Symbol("cljs.pprint","separator?","cljs.pprint/separator?",(412876696),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"separator?","separator?",(22210129),null),"cljs/pprint.cljs",(18),(1),(2569),(2569),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.separator_QMARK_)?cljs.pprint.separator_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__20196__auto__ = new cljs.core.Keyword(null,"separator","separator",(-1628749125)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__20196__auto__)){
return new cljs.core.Keyword(null,"colon","colon",(-965200945)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__20196__auto__;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.else_separator_QMARK_;},new cljs.core.Symbol("cljs.pprint","else-separator?","cljs.pprint/else-separator?",(-202896864),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"else-separator?","else-separator?",(-53402647),null),"cljs/pprint.cljs",(23),(1),(2571),(2571),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null)], null)),null,(cljs.core.truth_(cljs.pprint.else_separator_QMARK_)?cljs.pprint.else_separator_QMARK_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.collect_clauses; return (
new cljs.core.Var(function(){return cljs.pprint.collect_clauses;},new cljs.core.Symbol("cljs.pprint","collect-clauses","cljs.pprint/collect-clauses",(1583040189),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"collect-clauses","collect-clauses",(1453076710),null),"cljs/pprint.cljs",(25),(1),(2575),true,(2575),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.collect_clauses)?cljs.pprint.collect_clauses.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__2006 = (function (){var G__2009 = new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$));
var G__2010 = new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$);
var G__2011 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__2009,G__2010,G__2011) : cljs.pprint.collect_clauses(G__2009,G__2010,G__2011));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2006,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2006,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
}); return (
new cljs.core.Var(function(){return cljs.pprint.process_bracket;},new cljs.core.Symbol("cljs.pprint","process-bracket","cljs.pprint/process-bracket",(1995193161),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"process-bracket","process-bracket",(1906644336),null),"cljs/pprint.cljs",(23),(1),(2577),(2577),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",(1028897902),null),new cljs.core.Symbol(null,"remainder","remainder",(-1608248897),null)], null)),null,(cljs.core.truth_(cljs.pprint.process_bracket)?cljs.pprint.process_bracket.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",(793559132)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",(951856080)),new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",(-1508377146)),null,new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",(-1628749125)),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
}); return (
new cljs.core.Var(function(){return cljs.pprint.process_clause;},new cljs.core.Symbol("cljs.pprint","process-clause","cljs.pprint/process-clause",(1522217507),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"process-clause","process-clause",(1105205352),null),"cljs/pprint.cljs",(22),(1),(2586),(2586),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bracket-info","bracket-info",(40438753),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"remainder","remainder",(-1608248897),null)], null)),null,(cljs.core.truth_(cljs.pprint.process_clause)?cljs.pprint.process_clause.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__2012){
var vec__2013 = p__2012;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2013,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2013,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2013,(2),null);
var vec__2016 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2016,(0),null);
var vec__2019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2016,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2019,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2019,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2019,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2019,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",(951856080)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",(-1508377146)):new cljs.core.Keyword(null,"clauses","clauses",(1454841241))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",(-1790676237)),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",(-1508377146)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",(-644103046)),new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",(-644103046)),new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",(-1508377146)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",(-832171646)),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",(-1628749125)))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",(-818967742)).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.collect_clauses;},new cljs.core.Symbol("cljs.pprint","collect-clauses","cljs.pprint/collect-clauses",(1583040189),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"collect-clauses","collect-clauses",(1453076710),null),"cljs/pprint.cljs",(23),(1),(2610),(2610),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bracket-info","bracket-info",(40438753),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"remainder","remainder",(-1608248897),null)], null)),null,(cljs.core.truth_(cljs.pprint.collect_clauses)?cljs.pprint.collect_clauses.cljs$lang$test:null)])));})()
;
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
(function (){
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",(-1600092774)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",(-452581833)).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
}); return (
new cljs.core.Var(function(){return cljs.pprint.process_nesting;},new cljs.core.Symbol("cljs.pprint","process-nesting","cljs.pprint/process-nesting",(-1417859975),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"process-nesting","process-nesting",(-1551493728),null),"cljs/pprint.cljs",(23),(1),(2659),(2659),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null)], null)),"Take a linearly compiled format and process the bracket directives to give it\n   the appropriate tree structure",(cljs.core.truth_(cljs.pprint.process_nesting)?cljs.pprint.process_nesting.cljs$lang$test:null)])));})()
;
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
(function (){
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_2022 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_2022){
return (function (p__2023){
var vec__2024 = p__2023;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2024,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2024,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_2022))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_2022;
}}); return (
new cljs.core.Var(function(){return cljs.pprint.compile_format;},new cljs.core.Symbol("cljs.pprint","compile-format","cljs.pprint/compile-format",(-1633629368),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"compile-format","compile-format",(-1771593359),null),"cljs/pprint.cljs",(22),(1),(2674),(2674),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format-str","format-str",(-1959229613),null)], null)),"Compiles format-str into a compiled format which can be used as an argument\nto cl-format just like a plain format string. Use this function for improved\nperformance when you're using the same format string repeatedly",(cljs.core.truth_(cljs.pprint.compile_format)?cljs.pprint.compile_format.cljs$lang$test:null)])));})()
;
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
(function (){
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__20219__auto__ = new cljs.core.Keyword(null,"pretty","pretty",(-1916372486)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",(1775418075)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",(-1043430536)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
var or__20219__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__20219__auto____$1)){
return or__20219__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",(-1508377146)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__2027 = cljs.core.next(format__$1);
format__$1 = G__2027;
continue;
}
}
break;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.needs_pretty;},new cljs.core.Symbol("cljs.pprint","needs-pretty","cljs.pprint/needs-pretty",(64088824),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"needs-pretty","needs-pretty",(949407875),null),"cljs/pprint.cljs",(20),(1),(2694),(2694),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null)], null)),"determine whether a given compiled format has any directives that depend on the\ncolumn number or pretty printing",(cljs.core.truth_(cljs.pprint.needs_pretty)?cljs.pprint.needs_pretty.cljs$lang$test:null)])));})()
;
/**
 * Executes the format with the arguments.
 */
(function (){
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__2029 = arguments.length;
switch (G__2029) {
case (3):
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.pprint.execute_format;},new cljs.core.Symbol("cljs.pprint","execute-format","cljs.pprint/execute-format",(1971623147),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"execute-format","execute-format",(223314476),null),"cljs/pprint.cljs",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stream","stream",(-1119494121),null),new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stream","stream",(-1119494121),null),new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),true,(1),(2719),(2719),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stream","stream",(-1119494121),null),new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Executes the format with the arguments.",(cljs.core.truth_(cljs.pprint.execute_format)?cljs.pprint.execute_format.cljs$lang$test:null)])));})()
;

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__20196__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__20196__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__20196__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_2030 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')) : cljs.core._STAR_print_fn_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_2030;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__2031 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",(710516235)).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2031,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2031,(1),null);
var vec__2034 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2034,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2034,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",(-1268706822)),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",(-238706040)).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = (3);

new cljs.core.Var(function(){return cljs.pprint.execute_format;},new cljs.core.Symbol("cljs.pprint","execute-format","cljs.pprint/execute-format",(1971623147),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"skip-wiki","skip-wiki",(-2018833298)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"execute-format","execute-format",(223314476),null),"cljs/pprint.cljs",(22),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(3),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stream","stream",(-1119494121),null),new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stream","stream",(-1119494121),null),new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),true,(1),(2719),(2719),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stream","stream",(-1119494121),null),new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"format","format",(333606761),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null)], null)),"Executes the format with the arguments.",(cljs.core.truth_(cljs.pprint.execute_format)?cljs.pprint.execute_format.cljs$lang$test:null)]));
(function (){
cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format); return (
new cljs.core.Var(function(){return cljs.pprint.cached_compile;},new cljs.core.Symbol("cljs.pprint","cached-compile","cljs.pprint/cached-compile",(194847165),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"cached-compile","cached-compile",(323111910),null),"cljs/pprint.cljs",(37),(1),(2757),(2757),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.cached_compile)?cljs.pprint.cached_compile.cljs$lang$test:null)])));})()
;
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
(function (){
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
}); return (
new cljs.core.Var(function(){return cljs.pprint.use_method;},new cljs.core.Symbol("cljs.pprint","use-method","cljs.pprint/use-method",(-1867903879),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"use-method","use-method",(-1737267650),null),"cljs/pprint.cljs",(18),(1),(2763),(2763),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"multifn","multifn",(-1904313150),null),new cljs.core.Symbol(null,"dispatch-val","dispatch-val",(69061000),null),new cljs.core.Symbol(null,"func","func",(1401825487),null)], null)),"Installs a function as a new method of multimethod associated with dispatch-value. ",(cljs.core.truth_(cljs.pprint.use_method)?cljs.pprint.use_method.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",(1377916282),null),"'",new cljs.core.Symbol(null,"var","var",(870848730),null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",(188719157),null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",(843087510),null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",(1013085760),null),"~"], null); return (
new cljs.core.Var(function(){return cljs.pprint.reader_macros;},new cljs.core.Symbol("cljs.pprint","reader-macros","cljs.pprint/reader-macros",(267165296),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"reader-macros","reader-macros",(389395641),null),"cljs/pprint.cljs",(36),(1),(2788),(2788),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.reader_macros)?cljs.pprint.reader_macros.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__2038 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__2038) : cljs.pprint.reader_macros(G__2038));
})();
if(cljs.core.truth_((function (){var and__20196__auto__ = macro_char;
if(cljs.core.truth_(and__20196__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__20196__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_reader_macro;},new cljs.core.Symbol("cljs.pprint","pprint-reader-macro","cljs.pprint/pprint-reader-macro",(1517072315),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-reader-macro","pprint-reader-macro",(1117241714),null),"cljs/pprint.cljs",(27),(1),(2796),(2796),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_reader_macro)?cljs.pprint.pprint_reader_macro.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2039_2042 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2040_2043 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count2041_2044 = (0);
var alis_2045__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2041_2044 < cljs.core._STAR_print_length_STAR_))){
if(alis_2045__$1){
cljs.pprint.write_out(cljs.core.first(alis_2045__$1));

if(cljs.core.next(alis_2045__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2046 = (length_count2041_2044 + (1));
var G__2047 = cljs.core.next(alis_2045__$1);
length_count2041_2044 = G__2046;
alis_2045__$1 = G__2047;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2040_2043;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2039_2042;
}}

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_simple_list;},new cljs.core.Symbol("cljs.pprint","pprint-simple-list","cljs.pprint/pprint-simple-list",(756939991),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-simple-list","pprint-simple-list",(635045534),null),"cljs/pprint.cljs",(26),(1),(2813),(2813),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_simple_list)?cljs.pprint.pprint_simple_list.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_list;},new cljs.core.Symbol("cljs.pprint","pprint-list","cljs.pprint/pprint-list",(-614793046),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-list","pprint-list",(-602793235),null),"cljs/pprint.cljs",(19),(1),(2823),(2823),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_list)?cljs.pprint.pprint_list.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2048_2051 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2049_2052 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count2050_2053 = (0);
var aseq_2054 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2050_2053 < cljs.core._STAR_print_length_STAR_))){
if(aseq_2054){
cljs.pprint.write_out(cljs.core.first(aseq_2054));

if(cljs.core.next(aseq_2054)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2055 = (length_count2050_2053 + (1));
var G__2056 = cljs.core.next(aseq_2054);
length_count2050_2053 = G__2055;
aseq_2054 = G__2056;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2049_2052;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2048_2051;
}}

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_vector;},new cljs.core.Symbol("cljs.pprint","pprint-vector","cljs.pprint/pprint-vector",(1034781727),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-vector","pprint-vector",(-982077914),null),"cljs/pprint.cljs",(21),(1),(2828),(2828),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"avec","avec",(531283965),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_vector)?cljs.pprint.pprint_vector.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_array = (function (){var format_in__107__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2057__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2057 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2058__i = 0, G__2058__a = new Array(arguments.length -  0);
while (G__2058__i < G__2058__a.length) {G__2058__a[G__2058__i] = arguments[G__2058__i + 0]; ++G__2058__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2058__a,0,null);
} 
return G__2057__delegate.call(this,args__109__auto__);};
G__2057.cljs$lang$maxFixedArity = 0;
G__2057.cljs$lang$applyTo = (function (arglist__2059){
var args__109__auto__ = cljs.core.seq(arglist__2059);
return G__2057__delegate(args__109__auto__);
});
G__2057.cljs$core$IFn$_invoke$arity$variadic = G__2057__delegate;
return G__2057;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})(); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_array;},new cljs.core.Symbol("cljs.pprint","pprint-array","cljs.pprint/pprint-array",(-1138995378),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-array","pprint-array",(-2058922617),null),"cljs/pprint.cljs",(35),(1),(2838),(2838),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.pprint_array)?cljs.pprint.pprint_array.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__2060 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__2063 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",(463499081),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",(770546058),null),new cljs.core.Symbol(null,"lift-ns","lift-ns",(602311926),null),"cljs/core.cljs",(15),(1),(9724),(9724),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__2063.cljs$core$IFn$_invoke$arity$1 ? fexpr__2063.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__2063(amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2060,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2060,(1),null);
var amap__$1 = (function (){var or__20219__auto__ = lift_map;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2064_2069 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2065_2070 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count2066_2071 = (0);
var aseq_2072 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2066_2071 < cljs.core._STAR_print_length_STAR_))){
if(aseq_2072){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2067_2073 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2068_2074 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_2072));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_2072)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2068_2074;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2067_2073;
}}


if(cljs.core.next(aseq_2072)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2075 = (length_count2066_2071 + (1));
var G__2076 = cljs.core.next(aseq_2072);
length_count2066_2071 = G__2075;
aseq_2072 = G__2076;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2065_2070;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2064_2069;
}}

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_map;},new cljs.core.Symbol("cljs.pprint","pprint-map","cljs.pprint/pprint-map",(1135098419),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-map","pprint-map",(988218484),null),"cljs/pprint.cljs",(18),(1),(2841),(2841),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"amap","amap",(635923055),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_map)?cljs.pprint.pprint_map.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_simple_default;},new cljs.core.Symbol("cljs.pprint","pprint-simple-default","cljs.pprint/pprint-simple-default",(-609339822),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-simple-default","pprint-simple-default",(546430869),null),"cljs/pprint.cljs",(29),(1),(2862),(2862),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_simple_default)?cljs.pprint.pprint_simple_default.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_set = (function (){var format_in__107__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2077__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2077 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2078__i = 0, G__2078__a = new Array(arguments.length -  0);
while (G__2078__i < G__2078__a.length) {G__2078__a[G__2078__i] = arguments[G__2078__i + 0]; ++G__2078__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2078__a,0,null);
} 
return G__2077__delegate.call(this,args__109__auto__);};
G__2077.cljs$lang$maxFixedArity = 0;
G__2077.cljs$lang$applyTo = (function (arglist__2079){
var args__109__auto__ = cljs.core.seq(arglist__2079);
return G__2077__delegate(args__109__auto__);
});
G__2077.cljs$core$IFn$_invoke$arity$variadic = G__2077__delegate;
return G__2077;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})(); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_set;},new cljs.core.Symbol("cljs.pprint","pprint-set","cljs.pprint/pprint-set",(-1762731483),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-set","pprint-set",(-1349127186),null),"cljs/pprint.cljs",(16),(1),(2866),(2866),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.pprint_set)?cljs.pprint.pprint_set.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null); return (
new cljs.core.Var(function(){return cljs.pprint.type_map;},new cljs.core.Symbol("cljs.pprint","type-map","cljs.pprint/type-map",(1041216721),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"type-map","type-map",(893688474),null),"cljs/pprint.cljs",(9),(1),(2868),(2869),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.type_map)?cljs.pprint.type_map.cljs$lang$test:null)])));})()
;
/**
 * Map ugly type names to something simpler
 */
(function (){
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__20219__auto__ = (function (){var temp__19804__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__19804__auto__)){
var match = temp__19804__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map(match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return name;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.map_ref_type;},new cljs.core.Symbol("cljs.pprint","map-ref-type","cljs.pprint/map-ref-type",(-1777478668),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"map-ref-type","map-ref-type",(-305858497),null),"cljs/pprint.cljs",(20),(1),(2872),(2872),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",(-810760592),null)], null)),"Map ugly type names to something simpler",(cljs.core.truth_(cljs.pprint.map_ref_type)?cljs.pprint.map_ref_type.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2080_2084 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2081_2085 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",(664686210)),(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

cljs.pprint.write_out((((function (){var and__20196__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__20196__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__20196__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",(1599158697)):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2081_2085;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2080_2084;
}}

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_ideref;},new cljs.core.Symbol("cljs.pprint","pprint-ideref","cljs.pprint/pprint-ideref",(-1952492023),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-ideref","pprint-ideref",(-1834587058),null),"cljs/pprint.cljs",(21),(1),(2879),(2879),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",(290524299),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_ideref)?cljs.pprint.pprint_ideref.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_pqueue = (function (){var format_in__107__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2086__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2086 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2087__i = 0, G__2087__a = new Array(arguments.length -  0);
while (G__2087__i < G__2087__a.length) {G__2087__a[G__2087__i] = arguments[G__2087__i + 0]; ++G__2087__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2087__a,0,null);
} 
return G__2086__delegate.call(this,args__109__auto__);};
G__2086.cljs$lang$maxFixedArity = 0;
G__2086.cljs$lang$applyTo = (function (arglist__2088){
var args__109__auto__ = cljs.core.seq(arglist__2088);
return G__2086__delegate(args__109__auto__);
});
G__2086.cljs$core$IFn$_invoke$arity$variadic = G__2086__delegate;
return G__2086;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})(); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_pqueue;},new cljs.core.Symbol("cljs.pprint","pprint-pqueue","cljs.pprint/pprint-pqueue",(-127405457),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-pqueue","pprint-pqueue",(-2027890668),null),"cljs/pprint.cljs",(36),(1),(2890),(2890),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.pprint_pqueue)?cljs.pprint.pprint_pqueue.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",(1455835879));
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",(-145586795));
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",(-1038572696));
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",(765357683));
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",(1902966158));
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",(304602554));
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",(-1987822328));

}
}
}
}
}
}
}
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.type_dispatcher;},new cljs.core.Symbol("cljs.pprint","type-dispatcher","cljs.pprint/type-dispatcher",(291155015),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"type-dispatcher","type-dispatcher",(370383372),null),"cljs/pprint.cljs",(23),(1),(2892),(2892),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",(-1672671807),null)], null)),null,(cljs.core.truth_(cljs.pprint.type_dispatcher)?cljs.pprint.type_dispatcher.cljs$lang$test:null)])));})()
;
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
(function (){
cljs.pprint.simple_dispatch = (function (){var method_table__21427__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21428__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21429__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21430__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21431__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__21431__auto__,method_table__21427__auto__,prefer_table__21428__auto__,method_cache__21429__auto__,cached_hierarchy__21430__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.pprint.simple_dispatch;},new cljs.core.Symbol("cljs.pprint","simple-dispatch","cljs.pprint/simple-dispatch",(1591517689),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"simple-dispatch","simple-dispatch",(623222658),null),"cljs/pprint.cljs",(26),(1),(2904),(2904),cljs.core.List.EMPTY,"The pretty print dispatch function for simple data structure format.",(cljs.core.truth_(cljs.pprint.simple_dispatch)?cljs.pprint.simple_dispatch.cljs$lang$test:null)])));})()
;
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",(765357683)),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",(1902966158)),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",(1371690461)),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",(304602554)),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",(-1987822328)),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
(function (){
cljs.pprint.pprint_simple_code_list; return (
new cljs.core.Var(function(){return cljs.pprint.pprint_simple_code_list;},new cljs.core.Symbol("cljs.pprint","pprint-simple-code-list","cljs.pprint/pprint-simple-code-list",(1843600142),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"declared","declared",(92336021)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-simple-code-list","pprint-simple-code-list",(1681454389),null),"cljs/pprint.cljs",(33),(1),(2921),true,(2921),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.pprint_simple_code_list)?cljs.pprint.pprint_simple_code_list.cljs$lang$test:null)])));})()
;
/**
 * Figure out which kind of brackets to use
 */
(function (){
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.brackets;},new cljs.core.Symbol("cljs.pprint","brackets","cljs.pprint/brackets",(817236814),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"brackets","brackets",(-934338431),null),"cljs/pprint.cljs",(16),(1),(2929),(2929),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",(16469056),null)], null)),"Figure out which kind of brackets to use",(cljs.core.truth_(cljs.pprint.brackets)?cljs.pprint.brackets.cljs$lang$test:null)])));})()
;
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
(function (){
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__2090 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2090,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2090,(1),null);
var vec__2093 = reference;
var seq__2094 = cljs.core.seq(vec__2093);
var first__2095 = cljs.core.first(seq__2094);
var seq__2094__$1 = cljs.core.next(seq__2094);
var keyw = first__2095;
var args = seq__2094__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2096_2112 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2097_2113 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__2098_2114 = (function (){var format_in__107__auto__ = "~w~:i";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args){
return (function() { 
var G__2115__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2115 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2116__i = 0, G__2116__a = new Array(arguments.length -  0);
while (G__2116__i < G__2116__a.length) {G__2116__a[G__2116__i] = arguments[G__2116__i + 0]; ++G__2116__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2116__a,0,null);
} 
return G__2115__delegate.call(this,args__109__auto__);};
G__2115.cljs$lang$maxFixedArity = 0;
G__2115.cljs$lang$applyTo = (function (arglist__2117){
var args__109__auto__ = cljs.core.seq(arglist__2117);
return G__2115__delegate(args__109__auto__);
});
G__2115.cljs$core$IFn$_invoke$arity$variadic = G__2115__delegate;
return G__2115;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args))
})();
(fexpr__2098_2114.cljs$core$IFn$_invoke$arity$1 ? fexpr__2098_2114.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__2098_2114(keyw));

var args_2118__$1 = args;
while(true){
if(cljs.core.seq(args_2118__$1)){
var fexpr__2099_2119 = (function (){var format_in__107__auto__ = " ";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (args_2118__$1,format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args){
return (function() { 
var G__2120__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2120 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2121__i = 0, G__2121__a = new Array(arguments.length -  0);
while (G__2121__i < G__2121__a.length) {G__2121__a[G__2121__i] = arguments[G__2121__i + 0]; ++G__2121__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2121__a,0,null);
} 
return G__2120__delegate.call(this,args__109__auto__);};
G__2120.cljs$lang$maxFixedArity = 0;
G__2120.cljs$lang$applyTo = (function (arglist__2122){
var args__109__auto__ = cljs.core.seq(arglist__2122);
return G__2120__delegate(args__109__auto__);
});
G__2120.cljs$core$IFn$_invoke$arity$variadic = G__2120__delegate;
return G__2120;
})()
;
;})(args_2118__$1,format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args))
})();
(fexpr__2099_2119.cljs$core$IFn$_invoke$arity$0 ? fexpr__2099_2119.cljs$core$IFn$_invoke$arity$0() : fexpr__2099_2119());

var arg_2123 = cljs.core.first(args_2118__$1);
if(cljs.core.sequential_QMARK_(arg_2123)){
var vec__2100_2124 = cljs.pprint.brackets(arg_2123);
var start_2125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2100_2124,(0),null);
var end_2126__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2100_2124,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2103_2127 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2104_2128 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_2125__$1,null,end_2126__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_2123),(3))) && ((cljs.core.second(arg_2123) instanceof cljs.core.Keyword))){
var vec__2105_2129 = arg_2123;
var ns_2130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2105_2129,(0),null);
var kw_2131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2105_2129,(1),null);
var lis_2132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2105_2129,(2),null);
var fexpr__2108_2133 = (function (){var format_in__107__auto__ = "~w ~w ";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (args_2118__$1,format_in__107__auto__,cf__108__auto__,vec__2105_2129,ns_2130,kw_2131,lis_2132,_STAR_current_level_STAR_2103_2127,_STAR_current_length_STAR_2104_2128,vec__2100_2124,start_2125__$1,end_2126__$1,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args){
return (function() { 
var G__2134__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2134 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2135__i = 0, G__2135__a = new Array(arguments.length -  0);
while (G__2135__i < G__2135__a.length) {G__2135__a[G__2135__i] = arguments[G__2135__i + 0]; ++G__2135__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2135__a,0,null);
} 
return G__2134__delegate.call(this,args__109__auto__);};
G__2134.cljs$lang$maxFixedArity = 0;
G__2134.cljs$lang$applyTo = (function (arglist__2136){
var args__109__auto__ = cljs.core.seq(arglist__2136);
return G__2134__delegate(args__109__auto__);
});
G__2134.cljs$core$IFn$_invoke$arity$variadic = G__2134__delegate;
return G__2134;
})()
;
;})(args_2118__$1,format_in__107__auto__,cf__108__auto__,vec__2105_2129,ns_2130,kw_2131,lis_2132,_STAR_current_level_STAR_2103_2127,_STAR_current_length_STAR_2104_2128,vec__2100_2124,start_2125__$1,end_2126__$1,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args))
})();
(fexpr__2108_2133.cljs$core$IFn$_invoke$arity$2 ? fexpr__2108_2133.cljs$core$IFn$_invoke$arity$2(ns_2130,kw_2131) : fexpr__2108_2133(ns_2130,kw_2131));

if(cljs.core.sequential_QMARK_(lis_2132)){
var fexpr__2109_2137 = (function (){var format_in__107__auto__ = ((cljs.core.vector_QMARK_(lis_2132))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (args_2118__$1,format_in__107__auto__,cf__108__auto__,vec__2105_2129,ns_2130,kw_2131,lis_2132,_STAR_current_level_STAR_2103_2127,_STAR_current_length_STAR_2104_2128,vec__2100_2124,start_2125__$1,end_2126__$1,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args){
return (function() { 
var G__2138__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2138 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2139__i = 0, G__2139__a = new Array(arguments.length -  0);
while (G__2139__i < G__2139__a.length) {G__2139__a[G__2139__i] = arguments[G__2139__i + 0]; ++G__2139__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2139__a,0,null);
} 
return G__2138__delegate.call(this,args__109__auto__);};
G__2138.cljs$lang$maxFixedArity = 0;
G__2138.cljs$lang$applyTo = (function (arglist__2140){
var args__109__auto__ = cljs.core.seq(arglist__2140);
return G__2138__delegate(args__109__auto__);
});
G__2138.cljs$core$IFn$_invoke$arity$variadic = G__2138__delegate;
return G__2138;
})()
;
;})(args_2118__$1,format_in__107__auto__,cf__108__auto__,vec__2105_2129,ns_2130,kw_2131,lis_2132,_STAR_current_level_STAR_2103_2127,_STAR_current_length_STAR_2104_2128,vec__2100_2124,start_2125__$1,end_2126__$1,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args))
})();
(fexpr__2109_2137.cljs$core$IFn$_invoke$arity$1 ? fexpr__2109_2137.cljs$core$IFn$_invoke$arity$1(lis_2132) : fexpr__2109_2137(lis_2132));
} else {
cljs.pprint.write_out(lis_2132);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__107__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (args_2118__$1,format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2103_2127,_STAR_current_length_STAR_2104_2128,vec__2100_2124,start_2125__$1,end_2126__$1,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args){
return (function() { 
var G__2141__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2141 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2142__i = 0, G__2142__a = new Array(arguments.length -  0);
while (G__2142__i < G__2142__a.length) {G__2142__a[G__2142__i] = arguments[G__2142__i + 0]; ++G__2142__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2142__a,0,null);
} 
return G__2141__delegate.call(this,args__109__auto__);};
G__2141.cljs$lang$maxFixedArity = 0;
G__2141.cljs$lang$applyTo = (function (arglist__2143){
var args__109__auto__ = cljs.core.seq(arglist__2143);
return G__2141__delegate(args__109__auto__);
});
G__2141.cljs$core$IFn$_invoke$arity$variadic = G__2141__delegate;
return G__2141;
})()
;
;})(args_2118__$1,format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2103_2127,_STAR_current_length_STAR_2104_2128,vec__2100_2124,start_2125__$1,end_2126__$1,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args))
})(),arg_2123);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2104_2128;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2103_2127;
}}


if(cljs.core.next(args_2118__$1)){
var fexpr__2110_2144 = (function (){var format_in__107__auto__ = "~_";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (args_2118__$1,format_in__107__auto__,cf__108__auto__,vec__2100_2124,start_2125__$1,end_2126__$1,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args){
return (function() { 
var G__2145__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2145 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2146__i = 0, G__2146__a = new Array(arguments.length -  0);
while (G__2146__i < G__2146__a.length) {G__2146__a[G__2146__i] = arguments[G__2146__i + 0]; ++G__2146__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2146__a,0,null);
} 
return G__2145__delegate.call(this,args__109__auto__);};
G__2145.cljs$lang$maxFixedArity = 0;
G__2145.cljs$lang$applyTo = (function (arglist__2147){
var args__109__auto__ = cljs.core.seq(arglist__2147);
return G__2145__delegate(args__109__auto__);
});
G__2145.cljs$core$IFn$_invoke$arity$variadic = G__2145__delegate;
return G__2145;
})()
;
;})(args_2118__$1,format_in__107__auto__,cf__108__auto__,vec__2100_2124,start_2125__$1,end_2126__$1,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args))
})();
(fexpr__2110_2144.cljs$core$IFn$_invoke$arity$0 ? fexpr__2110_2144.cljs$core$IFn$_invoke$arity$0() : fexpr__2110_2144());
} else {
}
} else {
cljs.pprint.write_out(arg_2123);

if(cljs.core.next(args_2118__$1)){
var fexpr__2111_2148 = (function (){var format_in__107__auto__ = "~:_";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (args_2118__$1,format_in__107__auto__,cf__108__auto__,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args){
return (function() { 
var G__2149__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2149 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2150__i = 0, G__2150__a = new Array(arguments.length -  0);
while (G__2150__i < G__2150__a.length) {G__2150__a[G__2150__i] = arguments[G__2150__i + 0]; ++G__2150__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2150__a,0,null);
} 
return G__2149__delegate.call(this,args__109__auto__);};
G__2149.cljs$lang$maxFixedArity = 0;
G__2149.cljs$lang$applyTo = (function (arglist__2151){
var args__109__auto__ = cljs.core.seq(arglist__2151);
return G__2149__delegate(args__109__auto__);
});
G__2149.cljs$core$IFn$_invoke$arity$variadic = G__2149__delegate;
return G__2149;
})()
;
;})(args_2118__$1,format_in__107__auto__,cf__108__auto__,arg_2123,_STAR_current_level_STAR_2096_2112,_STAR_current_length_STAR_2097_2113,vec__2090,start,end,vec__2093,seq__2094,first__2095,seq__2094__$1,keyw,args))
})();
(fexpr__2111_2148.cljs$core$IFn$_invoke$arity$0 ? fexpr__2111_2148.cljs$core$IFn$_invoke$arity$0() : fexpr__2111_2148());
} else {
}
}

var G__2152 = cljs.core.next(args_2118__$1);
args_2118__$1 = G__2152;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2097_2113;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2096_2112;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_ns_reference;},new cljs.core.Symbol("cljs.pprint","pprint-ns-reference","cljs.pprint/pprint-ns-reference",(392475554),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-ns-reference","pprint-ns-reference",(799256041),null),"cljs/pprint.cljs",(27),(1),(2936),(2936),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reference","reference",(-71163496),null)], null)),"Pretty print a single reference (import, use, etc.) from a namespace decl",(cljs.core.truth_(cljs.pprint.pprint_ns_reference)?cljs.pprint.pprint_ns_reference.cljs$lang$test:null)])));})()
;
/**
 * The pretty print dispatch chunk for the ns macro
 */
(function (){
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__2153 = alis;
var seq__2154 = cljs.core.seq(vec__2153);
var first__2155 = cljs.core.first(seq__2154);
var seq__2154__$1 = cljs.core.next(seq__2154);
var ns_sym = first__2155;
var first__2155__$1 = cljs.core.first(seq__2154__$1);
var seq__2154__$2 = cljs.core.next(seq__2154__$1);
var ns_name = first__2155__$1;
var stuff = seq__2154__$2;
var vec__2156 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2156,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2156,(1),null);
var vec__2159 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2159,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2159,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2162_2169 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2163_2170 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__2164_2171 = (function (){var format_in__107__auto__ = "~w ~1I~@_~w";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2162_2169,_STAR_current_length_STAR_2163_2170,vec__2153,seq__2154,first__2155,seq__2154__$1,ns_sym,first__2155__$1,seq__2154__$2,ns_name,stuff,vec__2156,doc_str,stuff__$1,vec__2159,attr_map,references){
return (function() { 
var G__2172__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2172 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2173__i = 0, G__2173__a = new Array(arguments.length -  0);
while (G__2173__i < G__2173__a.length) {G__2173__a[G__2173__i] = arguments[G__2173__i + 0]; ++G__2173__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2173__a,0,null);
} 
return G__2172__delegate.call(this,args__109__auto__);};
G__2172.cljs$lang$maxFixedArity = 0;
G__2172.cljs$lang$applyTo = (function (arglist__2174){
var args__109__auto__ = cljs.core.seq(arglist__2174);
return G__2172__delegate(args__109__auto__);
});
G__2172.cljs$core$IFn$_invoke$arity$variadic = G__2172__delegate;
return G__2172;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2162_2169,_STAR_current_length_STAR_2163_2170,vec__2153,seq__2154,first__2155,seq__2154__$1,ns_sym,first__2155__$1,seq__2154__$2,ns_name,stuff,vec__2156,doc_str,stuff__$1,vec__2159,attr_map,references))
})();
(fexpr__2164_2171.cljs$core$IFn$_invoke$arity$2 ? fexpr__2164_2171.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__2164_2171(ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__20219__auto__ = doc_str;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
var or__20219__auto____$1 = attr_map;
if(cljs.core.truth_(or__20219__auto____$1)){
return or__20219__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__2165_2175 = (function (){var format_in__107__auto__ = "~@:_";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2162_2169,_STAR_current_length_STAR_2163_2170,vec__2153,seq__2154,first__2155,seq__2154__$1,ns_sym,first__2155__$1,seq__2154__$2,ns_name,stuff,vec__2156,doc_str,stuff__$1,vec__2159,attr_map,references){
return (function() { 
var G__2176__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2176 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2177__i = 0, G__2177__a = new Array(arguments.length -  0);
while (G__2177__i < G__2177__a.length) {G__2177__a[G__2177__i] = arguments[G__2177__i + 0]; ++G__2177__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2177__a,0,null);
} 
return G__2176__delegate.call(this,args__109__auto__);};
G__2176.cljs$lang$maxFixedArity = 0;
G__2176.cljs$lang$applyTo = (function (arglist__2178){
var args__109__auto__ = cljs.core.seq(arglist__2178);
return G__2176__delegate(args__109__auto__);
});
G__2176.cljs$core$IFn$_invoke$arity$variadic = G__2176__delegate;
return G__2176;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2162_2169,_STAR_current_length_STAR_2163_2170,vec__2153,seq__2154,first__2155,seq__2154__$1,ns_sym,first__2155__$1,seq__2154__$2,ns_name,stuff,vec__2156,doc_str,stuff__$1,vec__2159,attr_map,references))
})();
(fexpr__2165_2175.cljs$core$IFn$_invoke$arity$0 ? fexpr__2165_2175.cljs$core$IFn$_invoke$arity$0() : fexpr__2165_2175());
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__20219__auto__ = attr_map;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__2167_2179 = attr_map;
var G__2168_2180 = cljs.core.seq(references);
var fexpr__2166_2181 = (function (){var format_in__107__auto__ = "~w~:[~;~:@_~]";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,G__2167_2179,G__2168_2180,_STAR_current_level_STAR_2162_2169,_STAR_current_length_STAR_2163_2170,vec__2153,seq__2154,first__2155,seq__2154__$1,ns_sym,first__2155__$1,seq__2154__$2,ns_name,stuff,vec__2156,doc_str,stuff__$1,vec__2159,attr_map,references){
return (function() { 
var G__2182__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2182 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2183__i = 0, G__2183__a = new Array(arguments.length -  0);
while (G__2183__i < G__2183__a.length) {G__2183__a[G__2183__i] = arguments[G__2183__i + 0]; ++G__2183__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2183__a,0,null);
} 
return G__2182__delegate.call(this,args__109__auto__);};
G__2182.cljs$lang$maxFixedArity = 0;
G__2182.cljs$lang$applyTo = (function (arglist__2184){
var args__109__auto__ = cljs.core.seq(arglist__2184);
return G__2182__delegate(args__109__auto__);
});
G__2182.cljs$core$IFn$_invoke$arity$variadic = G__2182__delegate;
return G__2182;
})()
;
;})(format_in__107__auto__,cf__108__auto__,G__2167_2179,G__2168_2180,_STAR_current_level_STAR_2162_2169,_STAR_current_length_STAR_2163_2170,vec__2153,seq__2154,first__2155,seq__2154__$1,ns_sym,first__2155__$1,seq__2154__$2,ns_name,stuff,vec__2156,doc_str,stuff__$1,vec__2159,attr_map,references))
})();
(fexpr__2166_2181.cljs$core$IFn$_invoke$arity$2 ? fexpr__2166_2181.cljs$core$IFn$_invoke$arity$2(G__2167_2179,G__2168_2180) : fexpr__2166_2181(G__2167_2179,G__2168_2180));
} else {
}

var references_2185__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_2185__$1));

var temp__19804__auto___2186 = cljs.core.next(references_2185__$1);
if(temp__19804__auto___2186){
var references_2187__$2 = temp__19804__auto___2186;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2188 = references_2187__$2;
references_2185__$1 = G__2188;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2163_2170;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2162_2169;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_ns;},new cljs.core.Symbol("cljs.pprint","pprint-ns","cljs.pprint/pprint-ns",(1240607735),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-ns","pprint-ns",(-1229258360),null),"cljs/pprint.cljs",(17),(1),(2970),(2970),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),"The pretty print dispatch chunk for the ns macro",(cljs.core.truth_(cljs.pprint.pprint_ns)?cljs.pprint.pprint_ns.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_hold_first = (function (){var format_in__107__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2189__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2189 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2190__i = 0, G__2190__a = new Array(arguments.length -  0);
while (G__2190__i < G__2190__a.length) {G__2190__a[G__2190__i] = arguments[G__2190__i + 0]; ++G__2190__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2190__a,0,null);
} 
return G__2189__delegate.call(this,args__109__auto__);};
G__2189.cljs$lang$maxFixedArity = 0;
G__2189.cljs$lang$applyTo = (function (arglist__2191){
var args__109__auto__ = cljs.core.seq(arglist__2191);
return G__2189__delegate(args__109__auto__);
});
G__2189.cljs$core$IFn$_invoke$arity$variadic = G__2189__delegate;
return G__2189;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})(); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_hold_first;},new cljs.core.Symbol("cljs.pprint","pprint-hold-first","cljs.pprint/pprint-hold-first",(1525159626),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-hold-first","pprint-hold-first",(1561394957),null),"cljs/pprint.cljs",(40),(1),(3001),(3001),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.pprint_hold_first)?cljs.pprint.pprint_hold_first.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__2192_2195 = (function (){var format_in__107__auto__ = " ~_";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2196__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2196 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2197__i = 0, G__2197__a = new Array(arguments.length -  0);
while (G__2197__i < G__2197__a.length) {G__2197__a[G__2197__i] = arguments[G__2197__i + 0]; ++G__2197__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2197__a,0,null);
} 
return G__2196__delegate.call(this,args__109__auto__);};
G__2196.cljs$lang$maxFixedArity = 0;
G__2196.cljs$lang$applyTo = (function (arglist__2198){
var args__109__auto__ = cljs.core.seq(arglist__2198);
return G__2196__delegate(args__109__auto__);
});
G__2196.cljs$core$IFn$_invoke$arity$variadic = G__2196__delegate;
return G__2196;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})();
(fexpr__2192_2195.cljs$core$IFn$_invoke$arity$0 ? fexpr__2192_2195.cljs$core$IFn$_invoke$arity$0() : fexpr__2192_2195());
} else {
var fexpr__2193_2199 = (function (){var format_in__107__auto__ = " ~@_";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2200__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2200 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2201__i = 0, G__2201__a = new Array(arguments.length -  0);
while (G__2201__i < G__2201__a.length) {G__2201__a[G__2201__i] = arguments[G__2201__i + 0]; ++G__2201__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2201__a,0,null);
} 
return G__2200__delegate.call(this,args__109__auto__);};
G__2200.cljs$lang$maxFixedArity = 0;
G__2200.cljs$lang$applyTo = (function (arglist__2202){
var args__109__auto__ = cljs.core.seq(arglist__2202);
return G__2200__delegate(args__109__auto__);
});
G__2200.cljs$core$IFn$_invoke$arity$variadic = G__2200__delegate;
return G__2200;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})();
(fexpr__2193_2199.cljs$core$IFn$_invoke$arity$0 ? fexpr__2193_2199.cljs$core$IFn$_invoke$arity$0() : fexpr__2193_2199());
}

var fexpr__2194 = (function (){var format_in__107__auto__ = "~{~w~^ ~_~}";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2203__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2203 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2204__i = 0, G__2204__a = new Array(arguments.length -  0);
while (G__2204__i < G__2204__a.length) {G__2204__a[G__2204__i] = arguments[G__2204__i + 0]; ++G__2204__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2204__a,0,null);
} 
return G__2203__delegate.call(this,args__109__auto__);};
G__2203.cljs$lang$maxFixedArity = 0;
G__2203.cljs$lang$applyTo = (function (arglist__2205){
var args__109__auto__ = cljs.core.seq(arglist__2205);
return G__2203__delegate(args__109__auto__);
});
G__2203.cljs$core$IFn$_invoke$arity$variadic = G__2203__delegate;
return G__2203;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})();
return (fexpr__2194.cljs$core$IFn$_invoke$arity$1 ? fexpr__2194.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__2194(alis));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.single_defn;},new cljs.core.Symbol("cljs.pprint","single-defn","cljs.pprint/single-defn",(2009536012),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"single-defn","single-defn",(2021669943),null),"cljs/pprint.cljs",(19),(1),(3008),(3008),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null),new cljs.core.Symbol(null,"has-doc-str?","has-doc-str?",(504334169),null)], null)),null,(cljs.core.truth_(cljs.pprint.single_defn)?cljs.pprint.single_defn.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__2206 = (function (){var format_in__107__auto__ = " ~_~{~w~^ ~_~}";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2207__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2207 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2208__i = 0, G__2208__a = new Array(arguments.length -  0);
while (G__2208__i < G__2208__a.length) {G__2208__a[G__2208__i] = arguments[G__2208__i + 0]; ++G__2208__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2208__a,0,null);
} 
return G__2207__delegate.call(this,args__109__auto__);};
G__2207.cljs$lang$maxFixedArity = 0;
G__2207.cljs$lang$applyTo = (function (arglist__2209){
var args__109__auto__ = cljs.core.seq(arglist__2209);
return G__2207__delegate(args__109__auto__);
});
G__2207.cljs$core$IFn$_invoke$arity$variadic = G__2207__delegate;
return G__2207;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})();
return (fexpr__2206.cljs$core$IFn$_invoke$arity$1 ? fexpr__2206.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__2206(alis));
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.multi_defn;},new cljs.core.Symbol("cljs.pprint","multi-defn","cljs.pprint/multi-defn",(52879713),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"multi-defn","multi-defn",(200275882),null),"cljs/pprint.cljs",(18),(1),(3017),(3017),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null),new cljs.core.Symbol(null,"has-doc-str?","has-doc-str?",(504334169),null)], null)),null,(cljs.core.truth_(cljs.pprint.multi_defn)?cljs.pprint.multi_defn.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__2210 = alis;
var seq__2211 = cljs.core.seq(vec__2210);
var first__2212 = cljs.core.first(seq__2211);
var seq__2211__$1 = cljs.core.next(seq__2211);
var defn_sym = first__2212;
var first__2212__$1 = cljs.core.first(seq__2211__$1);
var seq__2211__$2 = cljs.core.next(seq__2211__$1);
var defn_name = first__2212__$1;
var stuff = seq__2211__$2;
var vec__2213 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2213,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2213,(1),null);
var vec__2216 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2216,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2216,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2219_2224 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2220_2225 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__2221_2226 = (function (){var format_in__107__auto__ = "~w ~1I~@_~w";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2219_2224,_STAR_current_length_STAR_2220_2225,vec__2210,seq__2211,first__2212,seq__2211__$1,defn_sym,first__2212__$1,seq__2211__$2,defn_name,stuff,vec__2213,doc_str,stuff__$1,vec__2216,attr_map,stuff__$2){
return (function() { 
var G__2227__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2227 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2228__i = 0, G__2228__a = new Array(arguments.length -  0);
while (G__2228__i < G__2228__a.length) {G__2228__a[G__2228__i] = arguments[G__2228__i + 0]; ++G__2228__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2228__a,0,null);
} 
return G__2227__delegate.call(this,args__109__auto__);};
G__2227.cljs$lang$maxFixedArity = 0;
G__2227.cljs$lang$applyTo = (function (arglist__2229){
var args__109__auto__ = cljs.core.seq(arglist__2229);
return G__2227__delegate(args__109__auto__);
});
G__2227.cljs$core$IFn$_invoke$arity$variadic = G__2227__delegate;
return G__2227;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2219_2224,_STAR_current_length_STAR_2220_2225,vec__2210,seq__2211,first__2212,seq__2211__$1,defn_sym,first__2212__$1,seq__2211__$2,defn_name,stuff,vec__2213,doc_str,stuff__$1,vec__2216,attr_map,stuff__$2))
})();
(fexpr__2221_2226.cljs$core$IFn$_invoke$arity$2 ? fexpr__2221_2226.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__2221_2226(defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__2222_2230 = (function (){var format_in__107__auto__ = " ~_~w";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2219_2224,_STAR_current_length_STAR_2220_2225,vec__2210,seq__2211,first__2212,seq__2211__$1,defn_sym,first__2212__$1,seq__2211__$2,defn_name,stuff,vec__2213,doc_str,stuff__$1,vec__2216,attr_map,stuff__$2){
return (function() { 
var G__2231__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2231 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2232__i = 0, G__2232__a = new Array(arguments.length -  0);
while (G__2232__i < G__2232__a.length) {G__2232__a[G__2232__i] = arguments[G__2232__i + 0]; ++G__2232__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2232__a,0,null);
} 
return G__2231__delegate.call(this,args__109__auto__);};
G__2231.cljs$lang$maxFixedArity = 0;
G__2231.cljs$lang$applyTo = (function (arglist__2233){
var args__109__auto__ = cljs.core.seq(arglist__2233);
return G__2231__delegate(args__109__auto__);
});
G__2231.cljs$core$IFn$_invoke$arity$variadic = G__2231__delegate;
return G__2231;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2219_2224,_STAR_current_length_STAR_2220_2225,vec__2210,seq__2211,first__2212,seq__2211__$1,defn_sym,first__2212__$1,seq__2211__$2,defn_name,stuff,vec__2213,doc_str,stuff__$1,vec__2216,attr_map,stuff__$2))
})();
(fexpr__2222_2230.cljs$core$IFn$_invoke$arity$1 ? fexpr__2222_2230.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__2222_2230(doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__2223_2234 = (function (){var format_in__107__auto__ = " ~_~w";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2219_2224,_STAR_current_length_STAR_2220_2225,vec__2210,seq__2211,first__2212,seq__2211__$1,defn_sym,first__2212__$1,seq__2211__$2,defn_name,stuff,vec__2213,doc_str,stuff__$1,vec__2216,attr_map,stuff__$2){
return (function() { 
var G__2235__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2235 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2236__i = 0, G__2236__a = new Array(arguments.length -  0);
while (G__2236__i < G__2236__a.length) {G__2236__a[G__2236__i] = arguments[G__2236__i + 0]; ++G__2236__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2236__a,0,null);
} 
return G__2235__delegate.call(this,args__109__auto__);};
G__2235.cljs$lang$maxFixedArity = 0;
G__2235.cljs$lang$applyTo = (function (arglist__2237){
var args__109__auto__ = cljs.core.seq(arglist__2237);
return G__2235__delegate(args__109__auto__);
});
G__2235.cljs$core$IFn$_invoke$arity$variadic = G__2235__delegate;
return G__2235;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2219_2224,_STAR_current_length_STAR_2220_2225,vec__2210,seq__2211,first__2212,seq__2211__$1,defn_sym,first__2212__$1,seq__2211__$2,defn_name,stuff,vec__2213,doc_str,stuff__$1,vec__2216,attr_map,stuff__$2))
})();
(fexpr__2223_2234.cljs$core$IFn$_invoke$arity$1 ? fexpr__2223_2234.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__2223_2234(attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__20219__auto__ = doc_str;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__20219__auto__ = doc_str;
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2220_2225;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2219_2224;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list(alis));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_defn;},new cljs.core.Symbol("cljs.pprint","pprint-defn","cljs.pprint/pprint-defn",(-2056151752),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-defn","pprint-defn",(-1909000449),null),"cljs/pprint.cljs",(19),(1),(3023),(3023),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_defn)?cljs.pprint.pprint_defn.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2238_2243 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2239_2244 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count2240_2245 = (0);
var binding_2246 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2240_2245 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_2246)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2241_2247 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2242_2248 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_2246));

if(cljs.core.next(binding_2246)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out(cljs.core.second(binding_2246));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2242_2248;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2241_2247;
}}


if(cljs.core.next(cljs.core.rest(binding_2246))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2249 = (length_count2240_2245 + (1));
var G__2250 = cljs.core.next(cljs.core.rest(binding_2246));
length_count2240_2245 = G__2249;
binding_2246 = G__2250;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2239_2244;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2238_2243;
}}

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_binding_form;},new cljs.core.Symbol("cljs.pprint","pprint-binding-form","cljs.pprint/pprint-binding-form",(-1869245854),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-binding-form","pprint-binding-form",(-1411584981),null),"cljs/pprint.cljs",(27),(1),(3048),(3048),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding-vec","binding-vec",(643890319),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_binding_form)?cljs.pprint.pprint_binding_form.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2251_2256 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2252_2257 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__2253_2258 = (function (){var format_in__107__auto__ = "~w ~1I~@_";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2251_2256,_STAR_current_length_STAR_2252_2257,base_sym){
return (function() { 
var G__2259__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2259 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2260__i = 0, G__2260__a = new Array(arguments.length -  0);
while (G__2260__i < G__2260__a.length) {G__2260__a[G__2260__i] = arguments[G__2260__i + 0]; ++G__2260__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2260__a,0,null);
} 
return G__2259__delegate.call(this,args__109__auto__);};
G__2259.cljs$lang$maxFixedArity = 0;
G__2259.cljs$lang$applyTo = (function (arglist__2261){
var args__109__auto__ = cljs.core.seq(arglist__2261);
return G__2259__delegate(args__109__auto__);
});
G__2259.cljs$core$IFn$_invoke$arity$variadic = G__2259__delegate;
return G__2259;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2251_2256,_STAR_current_length_STAR_2252_2257,base_sym))
})();
(fexpr__2253_2258.cljs$core$IFn$_invoke$arity$1 ? fexpr__2253_2258.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__2253_2258(base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__2255_2262 = cljs.core.next(cljs.core.rest(alis));
var fexpr__2254_2263 = (function (){var format_in__107__auto__ = " ~_~{~w~^ ~_~}";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,G__2255_2262,_STAR_current_level_STAR_2251_2256,_STAR_current_length_STAR_2252_2257,base_sym){
return (function() { 
var G__2264__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2264 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2265__i = 0, G__2265__a = new Array(arguments.length -  0);
while (G__2265__i < G__2265__a.length) {G__2265__a[G__2265__i] = arguments[G__2265__i + 0]; ++G__2265__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2265__a,0,null);
} 
return G__2264__delegate.call(this,args__109__auto__);};
G__2264.cljs$lang$maxFixedArity = 0;
G__2264.cljs$lang$applyTo = (function (arglist__2266){
var args__109__auto__ = cljs.core.seq(arglist__2266);
return G__2264__delegate(args__109__auto__);
});
G__2264.cljs$core$IFn$_invoke$arity$variadic = G__2264__delegate;
return G__2264;
})()
;
;})(format_in__107__auto__,cf__108__auto__,G__2255_2262,_STAR_current_level_STAR_2251_2256,_STAR_current_length_STAR_2252_2257,base_sym))
})();
(fexpr__2254_2263.cljs$core$IFn$_invoke$arity$1 ? fexpr__2254_2263.cljs$core$IFn$_invoke$arity$1(G__2255_2262) : fexpr__2254_2263(G__2255_2262));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list(alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2252_2257;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2251_2256;
}}

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_let;},new cljs.core.Symbol("cljs.pprint","pprint-let","cljs.pprint/pprint-let",(1171110570),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-let","pprint-let",(1525973219),null),"cljs/pprint.cljs",(18),(1),(3063),(3063),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_let)?cljs.pprint.pprint_let.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_if = (function (){var format_in__107__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__){
return (function() { 
var G__2267__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2267 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2268__i = 0, G__2268__a = new Array(arguments.length -  0);
while (G__2268__i < G__2268__a.length) {G__2268__a[G__2268__i] = arguments[G__2268__i + 0]; ++G__2268__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2268__a,0,null);
} 
return G__2267__delegate.call(this,args__109__auto__);};
G__2267.cljs$lang$maxFixedArity = 0;
G__2267.cljs$lang$applyTo = (function (arglist__2269){
var args__109__auto__ = cljs.core.seq(arglist__2269);
return G__2267__delegate(args__109__auto__);
});
G__2267.cljs$core$IFn$_invoke$arity$variadic = G__2267__delegate;
return G__2267;
})()
;
;})(format_in__107__auto__,cf__108__auto__))
})(); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_if;},new cljs.core.Symbol("cljs.pprint","pprint-if","cljs.pprint/pprint-if",(1962279381),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-if","pprint-if",(1933571870),null),"cljs/pprint.cljs",(32),(1),(3077),(3077),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint.pprint_if)?cljs.pprint.pprint_if.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2270_2275 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2271_2276 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",(664686210)),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var length_count2272_2277 = (0);
var alis_2278__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2272_2277 < cljs.core._STAR_print_length_STAR_))){
if(alis_2278__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2273_2279 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2274_2280 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_2278__$1));

if(cljs.core.next(alis_2278__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out(cljs.core.second(alis_2278__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2274_2280;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2273_2279;
}}


if(cljs.core.next(cljs.core.rest(alis_2278__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2281 = (length_count2272_2277 + (1));
var G__2282 = cljs.core.next(cljs.core.rest(alis_2278__$1));
length_count2272_2277 = G__2281;
alis_2278__$1 = G__2282;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2271_2276;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2270_2275;
}}

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_cond;},new cljs.core.Symbol("cljs.pprint","pprint-cond","cljs.pprint/pprint-cond",(-1444429244),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-cond","pprint-cond",(-1859594867),null),"cljs/pprint.cljs",(19),(1),(3079),(3079),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_cond)?cljs.pprint.pprint_cond.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2283_2288 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2284_2289 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",(664686210)),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__107__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2283_2288,_STAR_current_length_STAR_2284_2289){
return (function() { 
var G__2290__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2290 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2291__i = 0, G__2291__a = new Array(arguments.length -  0);
while (G__2291__i < G__2291__a.length) {G__2291__a[G__2291__i] = arguments[G__2291__i + 0]; ++G__2291__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2291__a,0,null);
} 
return G__2290__delegate.call(this,args__109__auto__);};
G__2290.cljs$lang$maxFixedArity = 0;
G__2290.cljs$lang$applyTo = (function (arglist__2292){
var args__109__auto__ = cljs.core.seq(arglist__2292);
return G__2290__delegate(args__109__auto__);
});
G__2290.cljs$core$IFn$_invoke$arity$variadic = G__2290__delegate;
return G__2290;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_current_level_STAR_2283_2288,_STAR_current_length_STAR_2284_2289))
})(),alis);

var length_count2285_2293 = (0);
var alis_2294__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2285_2293 < cljs.core._STAR_print_length_STAR_))){
if(alis_2294__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2286_2295 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2287_2296 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_2294__$1));

if(cljs.core.next(alis_2294__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",(-556060186)));

cljs.pprint.write_out(cljs.core.second(alis_2294__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2287_2296;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2286_2295;
}}


if(cljs.core.next(cljs.core.rest(alis_2294__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2297 = (length_count2285_2293 + (1));
var G__2298 = cljs.core.next(cljs.core.rest(alis_2294__$1));
length_count2285_2293 = G__2297;
alis_2294__$1 = G__2298;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2284_2289;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2283_2288;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list(alis));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_condp;},new cljs.core.Symbol("cljs.pprint","pprint-condp","cljs.pprint/pprint-condp",(799524382),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-condp","pprint-condp",(930000087),null),"cljs/pprint.cljs",(20),(1),(3099),(3099),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_condp)?cljs.pprint.pprint_condp.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY; return (
new cljs.core.Var(function(){return cljs.pprint._STAR_symbol_map_STAR_;},new cljs.core.Symbol("cljs.pprint","*symbol-map*","cljs.pprint/*symbol-map*",(-159172766),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*symbol-map*","*symbol-map*",(265821609),null),"cljs/pprint.cljs",(45),(1),true,(3119),(3119),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint._STAR_symbol_map_STAR_)?cljs.pprint._STAR_symbol_map_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_2299 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_2299,args,nlis){
return (function (p1__168_SHARP_,p2__169_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__168_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__169_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_2299,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__2300 = (function (){var format_in__107__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__108__auto__ = ((typeof format_in__107__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__107__auto__) : cljs.pprint.cached_compile(format_in__107__auto__)):format_in__107__auto__);
return ((function (format_in__107__auto__,cf__108__auto__,_STAR_symbol_map_STAR_2299,args,nlis){
return (function() { 
var G__2301__delegate = function (args__109__auto__){
var navigator__110__auto__ = cljs.pprint.init_navigator(args__109__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__108__auto__,navigator__110__auto__);
};
var G__2301 = function (var_args){
var args__109__auto__ = null;
if (arguments.length > 0) {
var G__2302__i = 0, G__2302__a = new Array(arguments.length -  0);
while (G__2302__i < G__2302__a.length) {G__2302__a[G__2302__i] = arguments[G__2302__i + 0]; ++G__2302__i;}
  args__109__auto__ = new cljs.core.IndexedSeq(G__2302__a,0,null);
} 
return G__2301__delegate.call(this,args__109__auto__);};
G__2301.cljs$lang$maxFixedArity = 0;
G__2301.cljs$lang$applyTo = (function (arglist__2303){
var args__109__auto__ = cljs.core.seq(arglist__2303);
return G__2301__delegate(args__109__auto__);
});
G__2301.cljs$core$IFn$_invoke$arity$variadic = G__2301__delegate;
return G__2301;
})()
;
;})(format_in__107__auto__,cf__108__auto__,_STAR_symbol_map_STAR_2299,args,nlis))
})();
return (fexpr__2300.cljs$core$IFn$_invoke$arity$1 ? fexpr__2300.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__2300(nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_2299;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list(alis));
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_anon_func;},new cljs.core.Symbol("cljs.pprint","pprint-anon-func","cljs.pprint/pprint-anon-func",(314755654),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-anon-func","pprint-anon-func",(428450191),null),"cljs/pprint.cljs",(24),(1),(3121),(3121),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_anon_func)?cljs.pprint.pprint_anon_func.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_2304_2307 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_2305_2308 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",(664686210)),(1));

var length_count2306_2309 = (0);
var alis_2310__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count2306_2309 < cljs.core._STAR_print_length_STAR_))){
if(alis_2310__$1){
cljs.pprint.write_out(cljs.core.first(alis_2310__$1));

if(cljs.core.next(alis_2310__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",(872268697)));

var G__2311 = (length_count2306_2309 + (1));
var G__2312 = cljs.core.next(alis_2310__$1);
length_count2306_2309 = G__2311;
alis_2310__$1 = G__2312;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_2305_2308;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_2304_2307;
}}

return null;
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_simple_code_list;},new cljs.core.Symbol("cljs.pprint","pprint-simple-code-list","cljs.pprint/pprint-simple-code-list",(1843600142),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-simple-code-list","pprint-simple-code-list",(1681454389),null),"cljs/pprint.cljs",(31),(1),(3143),(3143),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_simple_code_list)?cljs.pprint.pprint_simple_code_list.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__21262__auto__ = (function cljs$pprint$two_forms_$_iter__2313(s__2314){
return (new cljs.core.LazySeq(null,(function (){
var s__2314__$1 = s__2314;
while(true){
var temp__19804__auto__ = cljs.core.seq(s__2314__$1);
if(temp__19804__auto__){
var s__2314__$2 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2314__$2)){
var c__21260__auto__ = cljs.core.chunk_first(s__2314__$2);
var size__21261__auto__ = cljs.core.count(c__21260__auto__);
var b__2316 = cljs.core.chunk_buffer(size__21261__auto__);
if((function (){var i__2315 = (0);
while(true){
if((i__2315 < size__21261__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21260__auto__,i__2315);
cljs.core.chunk_append(b__2316,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__2317 = (i__2315 + (1));
i__2315 = G__2317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2316),cljs$pprint$two_forms_$_iter__2313(cljs.core.chunk_rest(s__2314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2316),null);
}
} else {
var x = cljs.core.first(s__2314__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__2313(cljs.core.rest(s__2314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21262__auto__(amap);
})()], 0)));
}); return (
new cljs.core.Var(function(){return cljs.pprint.two_forms;},new cljs.core.Symbol("cljs.pprint","two-forms","cljs.pprint/two-forms",(-2045849317),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"two-forms","two-forms",(-1983566894),null),"cljs/pprint.cljs",(17),(1),(3156),(3156),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"amap","amap",(635923055),null)], null)),null,(cljs.core.truth_(cljs.pprint.two_forms)?cljs.pprint.two_forms.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__170_SHARP_){
var vec__2318 = p1__170_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2318,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2318,(1),null);
if(cljs.core.not((function (){var or__20219__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__20219__auto__)){
return or__20219__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__170_SHARP_;
}
});})(core))
,amap));
}); return (
new cljs.core.Var(function(){return cljs.pprint.add_core_ns;},new cljs.core.Symbol("cljs.pprint","add-core-ns","cljs.pprint/add-core-ns",(1723461288),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"add-core-ns","add-core-ns",(1585316083),null),"cljs/pprint.cljs",(19),(1),(3163),(3163),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"amap","amap",(635923055),null)], null)),null,(cljs.core.truth_(cljs.pprint.add_core_ns)?cljs.pprint.add_core_ns.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",(1975675962),null),new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.Symbol(null,"when-first","when-first",(821699168),null),new cljs.core.Symbol(null,"if","if",(1181717262),null),new cljs.core.Symbol(null,"condp","condp",(1054325175),null),new cljs.core.Symbol(null,"..","..",(-300507420),null),new cljs.core.Symbol(null,"defmacro","defmacro",(2054157304),null),new cljs.core.Symbol(null,"defn","defn",(-126010802),null),new cljs.core.Symbol(null,"loop","loop",(1244978678),null),new cljs.core.Symbol(null,"struct","struct",(325972931),null),new cljs.core.Symbol(null,"doseq","doseq",(221164135),null),new cljs.core.Symbol(null,"if-not","if-not",(-265415609),null),new cljs.core.Symbol(null,"when-not","when-not",(-1223136340),null),new cljs.core.Symbol(null,"def","def",(597100991),null),new cljs.core.Symbol(null,"when","when",(1064114221),null),new cljs.core.Symbol(null,"with-open","with-open",(172119667),null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",(837642072),null),new cljs.core.Symbol(null,"defonce","defonce",(-1681484013),null),new cljs.core.Symbol(null,"when-let","when-let",(-1383043480),null),new cljs.core.Symbol(null,"ns","ns",(2082130287),null),new cljs.core.Symbol(null,"dotimes","dotimes",(-818708397),null),new cljs.core.Symbol(null,"cond","cond",(1606708055),null),new cljs.core.Symbol(null,"let","let",(358118826),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"defn-","defn-",(1097765044),null),new cljs.core.Symbol(null,"locking","locking",(1542862874),null),new cljs.core.Symbol(null,"->","->",(-2139605430),null),new cljs.core.Symbol(null,"if-let","if-let",(1803593690),null),new cljs.core.Symbol(null,"binding","binding",(-2114503176),null),new cljs.core.Symbol(null,"struct-map","struct-map",(-1387540878),null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first]))); return (
new cljs.core.Var(function(){return cljs.pprint._STAR_code_table_STAR_;},new cljs.core.Symbol("cljs.pprint","*code-table*","cljs.pprint/*code-table*",(-630997919),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"dynamic","dynamic",(704819571)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"*code-table*","*code-table*",(-987198806),null),"cljs/pprint.cljs",(45),(1),true,(3172),(3172),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.pprint._STAR_code_table_STAR_)?cljs.pprint._STAR_code_table_STAR_.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__19642__auto__ = (function (){var G__2321 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__2321) : cljs.pprint._STAR_code_table_STAR_(G__2321));
})();
if(cljs.core.truth_(temp__19642__auto__)){
var special_form = temp__19642__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form(alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_code_list;},new cljs.core.Symbol("cljs.pprint","pprint-code-list","cljs.pprint/pprint-code-list",(227125420),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-code-list","pprint-code-list",(71484149),null),"cljs/pprint.cljs",(24),(1),(3189),(3189),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alis","alis",(1326818164),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_code_list)?cljs.pprint.pprint_code_list.cljs$lang$test:null)])));})()
;
(function (){
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__19642__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym(cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__19642__auto__)){
var arg_num = temp__19642__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr(sym));
}
}
}); return (
new cljs.core.Var(function(){return cljs.pprint.pprint_code_symbol;},new cljs.core.Symbol("cljs.pprint","pprint-code-symbol","cljs.pprint/pprint-code-symbol",(-313011552),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"pprint-code-symbol","pprint-code-symbol",(-443533077),null),"cljs/pprint.cljs",(26),(1),(3195),(3195),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null)], null)),null,(cljs.core.truth_(cljs.pprint.pprint_code_symbol)?cljs.pprint.pprint_code_symbol.cljs$lang$test:null)])));})()
;
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
(function (){
cljs.pprint.code_dispatch = (function (){var method_table__21427__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21428__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21429__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21430__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21431__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__21431__auto__,method_table__21427__auto__,prefer_table__21428__auto__,method_cache__21429__auto__,cached_hierarchy__21430__auto__));
})(); return (
new cljs.core.Var(function(){return cljs.pprint.code_dispatch;},new cljs.core.Symbol("cljs.pprint","code-dispatch","cljs.pprint/code-dispatch",(-423875137),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"code-dispatch","code-dispatch",(-511363514),null),"cljs/pprint.cljs",(16),(1),(3202),(3203),cljs.core.List.EMPTY,"The pretty print dispatch function for pretty printing Clojure code.",(cljs.core.truth_(cljs.pprint.code_dispatch)?cljs.pprint.code_dispatch.cljs$lang$test:null)])));})()
;
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",(765357683)),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",(-1038572696)),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",(1902966158)),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",(1371690461)),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",(304602554)),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",(1455835879)),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",(-145586795)),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",(-1987822328)),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
(function (){
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__20767__auto__ = (0);
var y__20768__auto__ = (width - cljs.core.count(s));
return ((x__20767__auto__ > y__20768__auto__) ? x__20767__auto__ : y__20768__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
}); return (
new cljs.core.Var(function(){return cljs.pprint.add_padding;},new cljs.core.Symbol("cljs.pprint","add-padding","cljs.pprint/add-padding",(769121533),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",(-558947994)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"add-padding","add-padding",(706658948),null),"cljs/pprint.cljs",(19),(1),(3297),(3297),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",(1256460050),null),new cljs.core.Symbol(null,"s","s",(-948495851),null)], null)),null,(cljs.core.truth_(cljs.pprint.add_padding)?cljs.pprint.add_padding.cljs$lang$test:null)])));})()
;
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
(function (){
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__2323 = arguments.length;
switch (G__2323) {
case (2):
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
}); return (
new cljs.core.Var(function(){return cljs.pprint.print_table;},new cljs.core.Symbol("cljs.pprint","print-table","cljs.pprint/print-table",(-1696208156),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.3",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"print-table","print-table",(-2093158225),null),"cljs/pprint.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(3301),(3301),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),"Prints a collection of maps in a textual table. Prints table headings\n   ks, and then a line of output for each row, corresponding to the keys\n   in ks. If ks are not specified, use the keys of the first item in rows.",(cljs.core.truth_(cljs.pprint.print_table)?cljs.pprint.print_table.cljs$lang$test:null)])));})()
;

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_2324 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_2324){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_2324){
return (function (p1__171_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__171_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_2324))
,rows));
});})(_STAR_print_newline_STAR_2324))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_2324){
return (function (p1__172_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__172_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_2324))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_2324){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__21262__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_2324){
return (function cljs$pprint$iter__2325(s__2326){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_2324){
return (function (){
var s__2326__$1 = s__2326;
while(true){
var temp__19804__auto__ = cljs.core.seq(s__2326__$1);
if(temp__19804__auto__){
var s__2326__$2 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2326__$2)){
var c__21260__auto__ = cljs.core.chunk_first(s__2326__$2);
var size__21261__auto__ = cljs.core.count(c__21260__auto__);
var b__2328 = cljs.core.chunk_buffer(size__21261__auto__);
if((function (){var i__2327 = (0);
while(true){
if((i__2327 < size__21261__auto__)){
var vec__2329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21260__auto__,i__2327);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2329,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2329,(1),null);
cljs.core.chunk_append(b__2328,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__2340 = (i__2327 + (1));
i__2327 = G__2340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2328),cljs$pprint$iter__2325(cljs.core.chunk_rest(s__2326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2328),null);
}
} else {
var vec__2332 = cljs.core.first(s__2326__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2332,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2332,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__2325(cljs.core.rest(s__2326__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_2324))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_2324))
;
return iter__21262__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__21262__auto__,widths,spacers,_STAR_print_newline_STAR_2324){
return (function (p1__173_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__173_SHARP_);
});})(iter__21262__auto__,widths,spacers,_STAR_print_newline_STAR_2324))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_2324))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__2335 = cljs.core.seq(rows);
var chunk__2336 = null;
var count__2337 = (0);
var i__2338 = (0);
while(true){
if((i__2338 < count__2337)){
var row = chunk__2336.cljs$core$IIndexed$_nth$arity$2(null,i__2338);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__2341 = seq__2335;
var G__2342 = chunk__2336;
var G__2343 = count__2337;
var G__2344 = (i__2338 + (1));
seq__2335 = G__2341;
chunk__2336 = G__2342;
count__2337 = G__2343;
i__2338 = G__2344;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq(seq__2335);
if(temp__19804__auto__){
var seq__2335__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__2335__$1)){
var c__21298__auto__ = cljs.core.chunk_first(seq__2335__$1);
var G__2345 = cljs.core.chunk_rest(seq__2335__$1);
var G__2346 = c__21298__auto__;
var G__2347 = cljs.core.count(c__21298__auto__);
var G__2348 = (0);
seq__2335 = G__2345;
chunk__2336 = G__2346;
count__2337 = G__2347;
i__2338 = G__2348;
continue;
} else {
var row = cljs.core.first(seq__2335__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__2349 = cljs.core.next(seq__2335__$1);
var G__2350 = null;
var G__2351 = (0);
var G__2352 = (0);
seq__2335 = G__2349;
chunk__2336 = G__2350;
count__2337 = G__2351;
i__2338 = G__2352;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_2324;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = (2);

new cljs.core.Var(function(){return cljs.pprint.print_table;},new cljs.core.Symbol("cljs.pprint","print-table","cljs.pprint/print-table",(-1696208156),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",(2057651688)),new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"top-fn","top-fn",(-2056129173)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],["1.3",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",(-966900911),null),new cljs.core.Symbol(null,"print-table","print-table",(-2093158225),null),"cljs/pprint.cljs",(18),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",(882626057)),false,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",(-690205543)),(2),new cljs.core.Keyword(null,"method-params","method-params",(-980792179)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",(1944829838)),cljs.core.list(null,null)], null),(1),(3301),(3301),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ks","ks",(-754231827),null),new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null)], null)),"Prints a collection of maps in a textual table. Prints table headings\n   ks, and then a line of output for each row, corresponding to the keys\n   in ks. If ks are not specified, use the keys of the first item in rows.",(cljs.core.truth_(cljs.pprint.print_table)?cljs.pprint.print_table.cljs$lang$test:null)]));
