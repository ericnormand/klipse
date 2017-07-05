goog.provide("re_frame.fx");
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",(-1237829572));
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",(-1388402092)),new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)),new cljs.core.Keyword(null,"after","after",(594996914)),(function re_frame$fx$do_fx_after(context){
var seq__1243 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",(-282369292)).cljs$core$IFn$_invoke$arity$1(context));
var chunk__1244 = null;
var count__1245 = (0);
var i__1246 = (0);
while(true){
if((i__1246 < count__1245)){
var vec__1247 = cljs.core._nth.call(null,chunk__1244,i__1246);
var effect_k = cljs.core.nth.call(null,vec__1247,(0),null);
var value = cljs.core.nth.call(null,vec__1247,(1),null);
var temp__19642__auto___1253 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__19642__auto___1253)){
var effect_fn_1254 = temp__19642__auto___1253;
effect_fn_1254.call(null,value);
} else {
}

var G__1255 = seq__1243;
var G__1256 = chunk__1244;
var G__1257 = count__1245;
var G__1258 = (i__1246 + (1));
seq__1243 = G__1255;
chunk__1244 = G__1256;
count__1245 = G__1257;
i__1246 = G__1258;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq.call(null,seq__1243);
if(temp__19804__auto__){
var seq__1243__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1243__$1)){
var c__21298__auto__ = cljs.core.chunk_first.call(null,seq__1243__$1);
var G__1259 = cljs.core.chunk_rest.call(null,seq__1243__$1);
var G__1260 = c__21298__auto__;
var G__1261 = cljs.core.count.call(null,c__21298__auto__);
var G__1262 = (0);
seq__1243 = G__1259;
chunk__1244 = G__1260;
count__1245 = G__1261;
i__1246 = G__1262;
continue;
} else {
var vec__1250 = cljs.core.first.call(null,seq__1243__$1);
var effect_k = cljs.core.nth.call(null,vec__1250,(0),null);
var value = cljs.core.nth.call(null,vec__1250,(1),null);
var temp__19642__auto___1263 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__19642__auto___1263)){
var effect_fn_1264 = temp__19642__auto___1263;
effect_fn_1264.call(null,value);
} else {
}

var G__1265 = cljs.core.next.call(null,seq__1243__$1);
var G__1266 = null;
var G__1267 = (0);
var G__1268 = (0);
seq__1243 = G__1265;
chunk__1244 = G__1266;
count__1245 = G__1267;
i__1246 = G__1268;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",(291951390)),(function (value){
var seq__1269 = cljs.core.seq.call(null,value);
var chunk__1270 = null;
var count__1271 = (0);
var i__1272 = (0);
while(true){
if((i__1272 < count__1271)){
var map__1273 = cljs.core._nth.call(null,chunk__1270,i__1272);
var map__1273__$1 = ((((!((map__1273 == null)))?((((map__1273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1273):map__1273);
var effect = map__1273__$1;
var ms = cljs.core.get.call(null,map__1273__$1,new cljs.core.Keyword(null,"ms","ms",(-1152709733)));
var dispatch = cljs.core.get.call(null,map__1273__$1,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__1269,chunk__1270,count__1271,i__1272,map__1273,map__1273__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__1269,chunk__1270,count__1271,i__1272,map__1273,map__1273__$1,effect,ms,dispatch))
,ms);
}

var G__1277 = seq__1269;
var G__1278 = chunk__1270;
var G__1279 = count__1271;
var G__1280 = (i__1272 + (1));
seq__1269 = G__1277;
chunk__1270 = G__1278;
count__1271 = G__1279;
i__1272 = G__1280;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq.call(null,seq__1269);
if(temp__19804__auto__){
var seq__1269__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1269__$1)){
var c__21298__auto__ = cljs.core.chunk_first.call(null,seq__1269__$1);
var G__1281 = cljs.core.chunk_rest.call(null,seq__1269__$1);
var G__1282 = c__21298__auto__;
var G__1283 = cljs.core.count.call(null,c__21298__auto__);
var G__1284 = (0);
seq__1269 = G__1281;
chunk__1270 = G__1282;
count__1271 = G__1283;
i__1272 = G__1284;
continue;
} else {
var map__1275 = cljs.core.first.call(null,seq__1269__$1);
var map__1275__$1 = ((((!((map__1275 == null)))?((((map__1275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1275):map__1275);
var effect = map__1275__$1;
var ms = cljs.core.get.call(null,map__1275__$1,new cljs.core.Keyword(null,"ms","ms",(-1152709733)));
var dispatch = cljs.core.get.call(null,map__1275__$1,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__1269,chunk__1270,count__1271,i__1272,map__1275,map__1275__$1,effect,ms,dispatch,seq__1269__$1,temp__19804__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__1269,chunk__1270,count__1271,i__1272,map__1275,map__1275__$1,effect,ms,dispatch,seq__1269__$1,temp__19804__auto__))
,ms);
}

var G__1285 = cljs.core.next.call(null,seq__1269__$1);
var G__1286 = null;
var G__1287 = (0);
var G__1288 = (0);
seq__1269 = G__1285;
chunk__1270 = G__1286;
count__1271 = G__1287;
i__1272 = G__1288;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",(-504469236)),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",(-978969032)),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__1289 = cljs.core.seq.call(null,value);
var chunk__1290 = null;
var count__1291 = (0);
var i__1292 = (0);
while(true){
if((i__1292 < count__1291)){
var event = cljs.core._nth.call(null,chunk__1290,i__1292);
re_frame.router.dispatch.call(null,event);

var G__1293 = seq__1289;
var G__1294 = chunk__1290;
var G__1295 = count__1291;
var G__1296 = (i__1292 + (1));
seq__1289 = G__1293;
chunk__1290 = G__1294;
count__1291 = G__1295;
i__1292 = G__1296;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq.call(null,seq__1289);
if(temp__19804__auto__){
var seq__1289__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1289__$1)){
var c__21298__auto__ = cljs.core.chunk_first.call(null,seq__1289__$1);
var G__1297 = cljs.core.chunk_rest.call(null,seq__1289__$1);
var G__1298 = c__21298__auto__;
var G__1299 = cljs.core.count.call(null,c__21298__auto__);
var G__1300 = (0);
seq__1289 = G__1297;
chunk__1290 = G__1298;
count__1291 = G__1299;
i__1292 = G__1300;
continue;
} else {
var event = cljs.core.first.call(null,seq__1289__$1);
re_frame.router.dispatch.call(null,event);

var G__1301 = cljs.core.next.call(null,seq__1289__$1);
var G__1302 = null;
var G__1303 = (0);
var G__1304 = (0);
seq__1289 = G__1301;
chunk__1290 = G__1302;
count__1291 = G__1303;
i__1292 = G__1304;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",(-1096518994)),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__1305 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__1306 = null;
var count__1307 = (0);
var i__1308 = (0);
while(true){
if((i__1308 < count__1307)){
var event = cljs.core._nth.call(null,chunk__1306,i__1308);
clear_event.call(null,event);

var G__1309 = seq__1305;
var G__1310 = chunk__1306;
var G__1311 = count__1307;
var G__1312 = (i__1308 + (1));
seq__1305 = G__1309;
chunk__1306 = G__1310;
count__1307 = G__1311;
i__1308 = G__1312;
continue;
} else {
var temp__19804__auto__ = cljs.core.seq.call(null,seq__1305);
if(temp__19804__auto__){
var seq__1305__$1 = temp__19804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1305__$1)){
var c__21298__auto__ = cljs.core.chunk_first.call(null,seq__1305__$1);
var G__1313 = cljs.core.chunk_rest.call(null,seq__1305__$1);
var G__1314 = c__21298__auto__;
var G__1315 = cljs.core.count.call(null,c__21298__auto__);
var G__1316 = (0);
seq__1305 = G__1313;
chunk__1306 = G__1314;
count__1307 = G__1315;
i__1308 = G__1316;
continue;
} else {
var event = cljs.core.first.call(null,seq__1305__$1);
clear_event.call(null,event);

var G__1317 = cljs.core.next.call(null,seq__1305__$1);
var G__1318 = null;
var G__1319 = (0);
var G__1320 = (0);
seq__1305 = G__1317;
chunk__1306 = G__1318;
count__1307 = G__1319;
i__1308 = G__1320;
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
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",(993250759)),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));
