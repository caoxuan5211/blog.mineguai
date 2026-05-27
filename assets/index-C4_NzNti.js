(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))c(j);new MutationObserver(j=>{for(const G of j)if(G.type==="childList")for(const L of G.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&c(L)}).observe(document,{childList:!0,subtree:!0});function S(j){const G={};return j.integrity&&(G.integrity=j.integrity),j.referrerPolicy&&(G.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?G.credentials="include":j.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function c(j){if(j.ep)return;j.ep=!0;const G=S(j);fetch(j.href,G)}})();var oo={exports:{}},be={};var bu;function pd(){if(bu)return be;bu=1;var y=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function S(c,j,G){var L=null;if(G!==void 0&&(L=""+G),j.key!==void 0&&(L=""+j.key),"key"in j){G={};for(var X in j)X!=="key"&&(G[X]=j[X])}else G=j;return j=G.ref,{$$typeof:y,type:c,key:L,ref:j!==void 0?j:null,props:G}}return be.Fragment=A,be.jsx=S,be.jsxs=S,be}var Au;function od(){return Au||(Au=1,oo.exports=pd()),oo.exports}var m=od(),co={exports:{}},Ae={},io={exports:{}},ro={};var Cu;function cd(){return Cu||(Cu=1,(function(y){function A(v,T){var q=v.length;v.push(T);s:for(;0<q;){var ps=q-1>>>1,us=v[ps];if(0<j(us,T))v[ps]=T,v[q]=us,q=ps;else break s}}function S(v){return v.length===0?null:v[0]}function c(v){if(v.length===0)return null;var T=v[0],q=v.pop();if(q!==T){v[0]=q;s:for(var ps=0,us=v.length,r=us>>>1;ps<r;){var D=2*(ps+1)-1,M=v[D],O=D+1,Y=v[O];if(0>j(M,q))O<us&&0>j(Y,M)?(v[ps]=Y,v[O]=q,ps=O):(v[ps]=M,v[D]=q,ps=D);else if(O<us&&0>j(Y,q))v[ps]=Y,v[O]=q,ps=O;else break s}}return T}function j(v,T){var q=v.sortIndex-T.sortIndex;return q!==0?q:v.id-T.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var G=performance;y.unstable_now=function(){return G.now()}}else{var L=Date,X=L.now();y.unstable_now=function(){return L.now()-X}}var H=[],g=[],N=1,_=null,k=3,K=!1,js=!1,rs=!1,Gs=!1,Bs=typeof setTimeout=="function"?setTimeout:null,An=typeof clearTimeout=="function"?clearTimeout:null,Ss=typeof setImmediate<"u"?setImmediate:null;function pn(v){for(var T=S(g);T!==null;){if(T.callback===null)c(g);else if(T.startTime<=v)c(g),T.sortIndex=T.expirationTime,A(H,T);else break;T=S(g)}}function Cn(v){if(rs=!1,pn(v),!js)if(S(H)!==null)js=!0,Xs||(Xs=!0,ks());else{var T=S(g);T!==null&&gn(Cn,T.startTime-v)}}var Xs=!1,I=-1,ws=5,Dn=-1;function wl(){return Gs?!0:!(y.unstable_now()-Dn<ws)}function Sn(){if(Gs=!1,Xs){var v=y.unstable_now();Dn=v;var T=!0;try{s:{js=!1,rs&&(rs=!1,An(I),I=-1),K=!0;var q=k;try{n:{for(pn(v),_=S(H);_!==null&&!(_.expirationTime>v&&wl());){var ps=_.callback;if(typeof ps=="function"){_.callback=null,k=_.priorityLevel;var us=ps(_.expirationTime<=v);if(v=y.unstable_now(),typeof us=="function"){_.callback=us,pn(v),T=!0;break n}_===S(H)&&c(H),pn(v)}else c(H);_=S(H)}if(_!==null)T=!0;else{var r=S(g);r!==null&&gn(Cn,r.startTime-v),T=!1}}break s}finally{_=null,k=q,K=!1}T=void 0}}finally{T?ks():Xs=!1}}}var ks;if(typeof Ss=="function")ks=function(){Ss(Sn)};else if(typeof MessageChannel<"u"){var bl=new MessageChannel,Hn=bl.port2;bl.port1.onmessage=Sn,ks=function(){Hn.postMessage(null)}}else ks=function(){Bs(Sn,0)};function gn(v,T){I=Bs(function(){v(y.unstable_now())},T)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(v){v.callback=null},y.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ws=0<v?Math.floor(1e3/v):5},y.unstable_getCurrentPriorityLevel=function(){return k},y.unstable_next=function(v){switch(k){case 1:case 2:case 3:var T=3;break;default:T=k}var q=k;k=T;try{return v()}finally{k=q}},y.unstable_requestPaint=function(){Gs=!0},y.unstable_runWithPriority=function(v,T){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var q=k;k=v;try{return T()}finally{k=q}},y.unstable_scheduleCallback=function(v,T,q){var ps=y.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ps+q:ps):q=ps,v){case 1:var us=-1;break;case 2:us=250;break;case 5:us=1073741823;break;case 4:us=1e4;break;default:us=5e3}return us=q+us,v={id:N++,callback:T,priorityLevel:v,startTime:q,expirationTime:us,sortIndex:-1},q>ps?(v.sortIndex=q,A(g,v),S(H)===null&&v===S(g)&&(rs?(An(I),I=-1):rs=!0,gn(Cn,q-ps))):(v.sortIndex=us,A(H,v),js||K||(js=!0,Xs||(Xs=!0,ks()))),v},y.unstable_shouldYield=wl,y.unstable_wrapCallback=function(v){var T=k;return function(){var q=k;k=T;try{return v.apply(this,arguments)}finally{k=q}}}})(ro)),ro}var Du;function id(){return Du||(Du=1,io.exports=cd()),io.exports}var uo={exports:{}},w={};var Su;function rd(){if(Su)return w;Su=1;var y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),L=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),k=Symbol.iterator;function K(r){return r===null||typeof r!="object"?null:(r=k&&r[k]||r["@@iterator"],typeof r=="function"?r:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rs=Object.assign,Gs={};function Bs(r,D,M){this.props=r,this.context=D,this.refs=Gs,this.updater=M||js}Bs.prototype.isReactComponent={},Bs.prototype.setState=function(r,D){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,D,"setState")},Bs.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function An(){}An.prototype=Bs.prototype;function Ss(r,D,M){this.props=r,this.context=D,this.refs=Gs,this.updater=M||js}var pn=Ss.prototype=new An;pn.constructor=Ss,rs(pn,Bs.prototype),pn.isPureReactComponent=!0;var Cn=Array.isArray;function Xs(){}var I={H:null,A:null,T:null,S:null},ws=Object.prototype.hasOwnProperty;function Dn(r,D,M){var O=M.ref;return{$$typeof:y,type:r,key:D,ref:O!==void 0?O:null,props:M}}function wl(r,D){return Dn(r.type,D,r.props)}function Sn(r){return typeof r=="object"&&r!==null&&r.$$typeof===y}function ks(r){var D={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(M){return D[M]})}var bl=/\/+/g;function Hn(r,D){return typeof r=="object"&&r!==null&&r.key!=null?ks(""+r.key):D.toString(36)}function gn(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Xs,Xs):(r.status="pending",r.then(function(D){r.status==="pending"&&(r.status="fulfilled",r.value=D)},function(D){r.status==="pending"&&(r.status="rejected",r.reason=D)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function v(r,D,M,O,Y){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var es=!1;if(r===null)es=!0;else switch(V){case"bigint":case"string":case"number":es=!0;break;case"object":switch(r.$$typeof){case y:case A:es=!0;break;case N:return es=r._init,v(es(r._payload),D,M,O,Y)}}if(es)return Y=Y(r),es=O===""?"."+Hn(r,0):O,Cn(Y)?(M="",es!=null&&(M=es.replace(bl,"$&/")+"/"),v(Y,D,M,"",function(Ta){return Ta})):Y!=null&&(Sn(Y)&&(Y=wl(Y,M+(Y.key==null||r&&r.key===Y.key?"":(""+Y.key).replace(bl,"$&/")+"/")+es)),D.push(Y)),1;es=0;var Ls=O===""?".":O+":";if(Cn(r))for(var gs=0;gs<r.length;gs++)O=r[gs],V=Ls+Hn(O,gs),es+=v(O,D,M,V,Y);else if(gs=K(r),typeof gs=="function")for(r=gs.call(r),gs=0;!(O=r.next()).done;)O=O.value,V=Ls+Hn(O,gs++),es+=v(O,D,M,V,Y);else if(V==="object"){if(typeof r.then=="function")return v(gn(r),D,M,O,Y);throw D=String(r),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return es}function T(r,D,M){if(r==null)return r;var O=[],Y=0;return v(r,O,"","",function(V){return D.call(M,V,Y++)}),O}function q(r){if(r._status===-1){var D=r._result;D=D(),D.then(function(M){(r._status===0||r._status===-1)&&(r._status=1,r._result=M)},function(M){(r._status===0||r._status===-1)&&(r._status=2,r._result=M)}),r._status===-1&&(r._status=0,r._result=D)}if(r._status===1)return r._result.default;throw r._result}var ps=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},us={map:T,forEach:function(r,D,M){T(r,function(){D.apply(this,arguments)},M)},count:function(r){var D=0;return T(r,function(){D++}),D},toArray:function(r){return T(r,function(D){return D})||[]},only:function(r){if(!Sn(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return w.Activity=_,w.Children=us,w.Component=Bs,w.Fragment=S,w.Profiler=j,w.PureComponent=Ss,w.StrictMode=c,w.Suspense=H,w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,w.__COMPILER_RUNTIME={__proto__:null,c:function(r){return I.H.useMemoCache(r)}},w.cache=function(r){return function(){return r.apply(null,arguments)}},w.cacheSignal=function(){return null},w.cloneElement=function(r,D,M){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var O=rs({},r.props),Y=r.key;if(D!=null)for(V in D.key!==void 0&&(Y=""+D.key),D)!ws.call(D,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&D.ref===void 0||(O[V]=D[V]);var V=arguments.length-2;if(V===1)O.children=M;else if(1<V){for(var es=Array(V),Ls=0;Ls<V;Ls++)es[Ls]=arguments[Ls+2];O.children=es}return Dn(r.type,Y,O)},w.createContext=function(r){return r={$$typeof:L,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:G,_context:r},r},w.createElement=function(r,D,M){var O,Y={},V=null;if(D!=null)for(O in D.key!==void 0&&(V=""+D.key),D)ws.call(D,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(Y[O]=D[O]);var es=arguments.length-2;if(es===1)Y.children=M;else if(1<es){for(var Ls=Array(es),gs=0;gs<es;gs++)Ls[gs]=arguments[gs+2];Y.children=Ls}if(r&&r.defaultProps)for(O in es=r.defaultProps,es)Y[O]===void 0&&(Y[O]=es[O]);return Dn(r,V,Y)},w.createRef=function(){return{current:null}},w.forwardRef=function(r){return{$$typeof:X,render:r}},w.isValidElement=Sn,w.lazy=function(r){return{$$typeof:N,_payload:{_status:-1,_result:r},_init:q}},w.memo=function(r,D){return{$$typeof:g,type:r,compare:D===void 0?null:D}},w.startTransition=function(r){var D=I.T,M={};I.T=M;try{var O=r(),Y=I.S;Y!==null&&Y(M,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(Xs,ps)}catch(V){ps(V)}finally{D!==null&&M.types!==null&&(D.types=M.types),I.T=D}},w.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},w.use=function(r){return I.H.use(r)},w.useActionState=function(r,D,M){return I.H.useActionState(r,D,M)},w.useCallback=function(r,D){return I.H.useCallback(r,D)},w.useContext=function(r){return I.H.useContext(r)},w.useDebugValue=function(){},w.useDeferredValue=function(r,D){return I.H.useDeferredValue(r,D)},w.useEffect=function(r,D){return I.H.useEffect(r,D)},w.useEffectEvent=function(r){return I.H.useEffectEvent(r)},w.useId=function(){return I.H.useId()},w.useImperativeHandle=function(r,D,M){return I.H.useImperativeHandle(r,D,M)},w.useInsertionEffect=function(r,D){return I.H.useInsertionEffect(r,D)},w.useLayoutEffect=function(r,D){return I.H.useLayoutEffect(r,D)},w.useMemo=function(r,D){return I.H.useMemo(r,D)},w.useOptimistic=function(r,D){return I.H.useOptimistic(r,D)},w.useReducer=function(r,D,M){return I.H.useReducer(r,D,M)},w.useRef=function(r){return I.H.useRef(r)},w.useState=function(r){return I.H.useState(r)},w.useSyncExternalStore=function(r,D,M){return I.H.useSyncExternalStore(r,D,M)},w.useTransition=function(){return I.H.useTransition()},w.version="19.2.6",w}var _u;function fo(){return _u||(_u=1,uo.exports=rd()),uo.exports}var yo={exports:{}},Us={};var ju;function ud(){if(ju)return Us;ju=1;var y=fo();function A(H){var g="https://react.dev/errors/"+H;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)g+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+H+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function S(){}var c={d:{f:S,r:function(){throw Error(A(522))},D:S,C:S,L:S,m:S,X:S,S,M:S},p:0,findDOMNode:null},j=Symbol.for("react.portal");function G(H,g,N){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:_==null?null:""+_,children:H,containerInfo:g,implementation:N}}var L=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function X(H,g){if(H==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Us.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,Us.createPortal=function(H,g){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(A(299));return G(H,g,null,N)},Us.flushSync=function(H){var g=L.T,N=c.p;try{if(L.T=null,c.p=2,H)return H()}finally{L.T=g,c.p=N,c.d.f()}},Us.preconnect=function(H,g){typeof H=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(H,g))},Us.prefetchDNS=function(H){typeof H=="string"&&c.d.D(H)},Us.preinit=function(H,g){if(typeof H=="string"&&g&&typeof g.as=="string"){var N=g.as,_=X(N,g.crossOrigin),k=typeof g.integrity=="string"?g.integrity:void 0,K=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;N==="style"?c.d.S(H,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:_,integrity:k,fetchPriority:K}):N==="script"&&c.d.X(H,{crossOrigin:_,integrity:k,fetchPriority:K,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Us.preinitModule=function(H,g){if(typeof H=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var N=X(g.as,g.crossOrigin);c.d.M(H,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(H)},Us.preload=function(H,g){if(typeof H=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var N=g.as,_=X(N,g.crossOrigin);c.d.L(H,N,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Us.preloadModule=function(H,g){if(typeof H=="string")if(g){var N=X(g.as,g.crossOrigin);c.d.m(H,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(H)},Us.requestFormReset=function(H){c.d.r(H)},Us.unstable_batchedUpdates=function(H,g){return H(g)},Us.useFormState=function(H,g,N){return L.H.useFormState(H,g,N)},Us.useFormStatus=function(){return L.H.useHostTransitionStatus()},Us.version="19.2.6",Us}var Tu;function yd(){if(Tu)return yo.exports;Tu=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(A){console.error(A)}}return y(),yo.exports=ud(),yo.exports}var Mu;function fd(){if(Mu)return Ae;Mu=1;var y=id(),A=fo(),S=yd();function c(s){var n="https://react.dev/errors/"+s;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)n+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+s+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function G(s){var n=s,l=s;if(s.alternate)for(;n.return;)n=n.return;else{s=n;do n=s,(n.flags&4098)!==0&&(l=n.return),s=n.return;while(s)}return n.tag===3?l:null}function L(s){if(s.tag===13){var n=s.memoizedState;if(n===null&&(s=s.alternate,s!==null&&(n=s.memoizedState)),n!==null)return n.dehydrated}return null}function X(s){if(s.tag===31){var n=s.memoizedState;if(n===null&&(s=s.alternate,s!==null&&(n=s.memoizedState)),n!==null)return n.dehydrated}return null}function H(s){if(G(s)!==s)throw Error(c(188))}function g(s){var n=s.alternate;if(!n){if(n=G(s),n===null)throw Error(c(188));return n!==s?null:s}for(var l=s,a=n;;){var e=l.return;if(e===null)break;var t=e.alternate;if(t===null){if(a=e.return,a!==null){l=a;continue}break}if(e.child===t.child){for(t=e.child;t;){if(t===l)return H(e),s;if(t===a)return H(e),n;t=t.sibling}throw Error(c(188))}if(l.return!==a.return)l=e,a=t;else{for(var F=!1,p=e.child;p;){if(p===l){F=!0,l=e,a=t;break}if(p===a){F=!0,a=e,l=t;break}p=p.sibling}if(!F){for(p=t.child;p;){if(p===l){F=!0,l=t,a=e;break}if(p===a){F=!0,a=t,l=e;break}p=p.sibling}if(!F)throw Error(c(189))}}if(l.alternate!==a)throw Error(c(190))}if(l.tag!==3)throw Error(c(188));return l.stateNode.current===l?s:n}function N(s){var n=s.tag;if(n===5||n===26||n===27||n===6)return s;for(s=s.child;s!==null;){if(n=N(s),n!==null)return n;s=s.sibling}return null}var _=Object.assign,k=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),js=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),Gs=Symbol.for("react.strict_mode"),Bs=Symbol.for("react.profiler"),An=Symbol.for("react.consumer"),Ss=Symbol.for("react.context"),pn=Symbol.for("react.forward_ref"),Cn=Symbol.for("react.suspense"),Xs=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),ws=Symbol.for("react.lazy"),Dn=Symbol.for("react.activity"),wl=Symbol.for("react.memo_cache_sentinel"),Sn=Symbol.iterator;function ks(s){return s===null||typeof s!="object"?null:(s=Sn&&s[Sn]||s["@@iterator"],typeof s=="function"?s:null)}var bl=Symbol.for("react.client.reference");function Hn(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===bl?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case rs:return"Fragment";case Bs:return"Profiler";case Gs:return"StrictMode";case Cn:return"Suspense";case Xs:return"SuspenseList";case Dn:return"Activity"}if(typeof s=="object")switch(s.$$typeof){case js:return"Portal";case Ss:return s.displayName||"Context";case An:return(s._context.displayName||"Context")+".Consumer";case pn:var n=s.render;return s=s.displayName,s||(s=n.displayName||n.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case I:return n=s.displayName||null,n!==null?n:Hn(s.type)||"Memo";case ws:n=s._payload,s=s._init;try{return Hn(s(n))}catch{}}return null}var gn=Array.isArray,v=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ps=[],us=-1;function r(s){return{current:s}}function D(s){0>us||(s.current=ps[us],ps[us]=null,us--)}function M(s,n){us++,ps[us]=s.current,s.current=n}var O=r(null),Y=r(null),V=r(null),es=r(null);function Ls(s,n){switch(M(V,n),M(Y,s),M(O,null),n.nodeType){case 9:case 11:s=(s=n.documentElement)&&(s=s.namespaceURI)?Qr(s):0;break;default:if(s=n.tagName,n=n.namespaceURI)n=Qr(n),s=Zr(n,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}D(O),M(O,s)}function gs(){D(O),D(Y),D(V)}function Ta(s){s.memoizedState!==null&&M(es,s);var n=O.current,l=Zr(n,s.type);n!==l&&(M(Y,s),M(O,l))}function Ce(s){Y.current===s&&(D(O),D(Y)),es.current===s&&(D(es),me._currentValue=q)}var Yt,vo;function Al(s){if(Yt===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",vo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+s+vo}var Qt=!1;function Zt(s,n){if(!s||Qt)return"";Qt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(h){var E=h}Reflect.construct(s,[],C)}else{try{C.call()}catch(h){E=h}s.call(C.prototype)}}else{try{throw Error()}catch(h){E=h}(C=s())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(h){if(h&&E&&typeof h.stack=="string")return[h.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var e=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");e&&e.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var t=a.DetermineComponentFrameRoot(),F=t[0],p=t[1];if(F&&p){var o=F.split(`
`),d=p.split(`
`);for(e=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;e<d.length&&!d[e].includes("DetermineComponentFrameRoot");)e++;if(a===o.length||e===d.length)for(a=o.length-1,e=d.length-1;1<=a&&0<=e&&o[a]!==d[e];)e--;for(;1<=a&&0<=e;a--,e--)if(o[a]!==d[e]){if(a!==1||e!==1)do if(a--,e--,0>e||o[a]!==d[e]){var x=`
`+o[a].replace(" at new "," at ");return s.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",s.displayName)),x}while(1<=a&&0<=e);break}}}finally{Qt=!1,Error.prepareStackTrace=l}return(l=s?s.displayName||s.name:"")?Al(l):""}function Bu(s,n){switch(s.tag){case 26:case 27:case 5:return Al(s.type);case 16:return Al("Lazy");case 13:return s.child!==n&&n!==null?Al("Suspense Fallback"):Al("Suspense");case 19:return Al("SuspenseList");case 0:case 15:return Zt(s.type,!1);case 11:return Zt(s.type.render,!1);case 1:return Zt(s.type,!0);case 31:return Al("Activity");default:return""}}function bo(s){try{var n="",l=null;do n+=Bu(s,l),l=s,s=s.return;while(s);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Kt=Object.prototype.hasOwnProperty,Vt=y.unstable_scheduleCallback,Jt=y.unstable_cancelCallback,Uu=y.unstable_shouldYield,Lu=y.unstable_requestPaint,$s=y.unstable_now,qu=y.unstable_getCurrentPriorityLevel,Ao=y.unstable_ImmediatePriority,Co=y.unstable_UserBlockingPriority,De=y.unstable_NormalPriority,Xu=y.unstable_LowPriority,Do=y.unstable_IdlePriority,wu=y.log,ku=y.unstable_setDisableYieldValue,Ma=null,Ps=null;function $n(s){if(typeof wu=="function"&&ku(s),Ps&&typeof Ps.setStrictMode=="function")try{Ps.setStrictMode(Ma,s)}catch{}}var Is=Math.clz32?Math.clz32:Zu,Yu=Math.log,Qu=Math.LN2;function Zu(s){return s>>>=0,s===0?32:31-(Yu(s)/Qu|0)|0}var Se=256,_e=262144,je=4194304;function Cl(s){var n=s&42;if(n!==0)return n;switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return s&261888;case 262144:case 524288:case 1048576:case 2097152:return s&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return s&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return s}}function Te(s,n,l){var a=s.pendingLanes;if(a===0)return 0;var e=0,t=s.suspendedLanes,F=s.pingedLanes;s=s.warmLanes;var p=a&134217727;return p!==0?(a=p&~t,a!==0?e=Cl(a):(F&=p,F!==0?e=Cl(F):l||(l=p&~s,l!==0&&(e=Cl(l))))):(p=a&~t,p!==0?e=Cl(p):F!==0?e=Cl(F):l||(l=a&~s,l!==0&&(e=Cl(l)))),e===0?0:n!==0&&n!==e&&(n&t)===0&&(t=e&-e,l=n&-n,t>=l||t===32&&(l&4194048)!==0)?n:e}function Na(s,n){return(s.pendingLanes&~(s.suspendedLanes&~s.pingedLanes)&n)===0}function Ku(s,n){switch(s){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function So(){var s=je;return je<<=1,(je&62914560)===0&&(je=4194304),s}function Wt(s){for(var n=[],l=0;31>l;l++)n.push(s);return n}function Ha(s,n){s.pendingLanes|=n,n!==268435456&&(s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0)}function Vu(s,n,l,a,e,t){var F=s.pendingLanes;s.pendingLanes=l,s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0,s.expiredLanes&=l,s.entangledLanes&=l,s.errorRecoveryDisabledLanes&=l,s.shellSuspendCounter=0;var p=s.entanglements,o=s.expirationTimes,d=s.hiddenUpdates;for(l=F&~l;0<l;){var x=31-Is(l),C=1<<x;p[x]=0,o[x]=-1;var E=d[x];if(E!==null)for(d[x]=null,x=0;x<E.length;x++){var h=E[x];h!==null&&(h.lane&=-536870913)}l&=~C}a!==0&&_o(s,a,0),t!==0&&e===0&&s.tag!==0&&(s.suspendedLanes|=t&~(F&~n))}function _o(s,n,l){s.pendingLanes|=n,s.suspendedLanes&=~n;var a=31-Is(n);s.entangledLanes|=n,s.entanglements[a]=s.entanglements[a]|1073741824|l&261930}function jo(s,n){var l=s.entangledLanes|=n;for(s=s.entanglements;l;){var a=31-Is(l),e=1<<a;e&n|s[a]&n&&(s[a]|=n),l&=~e}}function To(s,n){var l=n&-n;return l=(l&42)!==0?1:$t(l),(l&(s.suspendedLanes|n))!==0?0:l}function $t(s){switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=128;break;case 268435456:s=134217728;break;default:s=0}return s}function Pt(s){return s&=-s,2<s?8<s?(s&134217727)!==0?32:268435456:8:2}function Mo(){var s=T.p;return s!==0?s:(s=window.event,s===void 0?32:du(s.type))}function No(s,n){var l=T.p;try{return T.p=s,n()}finally{T.p=l}}var Pn=Math.random().toString(36).slice(2),Ns="__reactFiber$"+Pn,Ys="__reactProps$"+Pn,kl="__reactContainer$"+Pn,It="__reactEvents$"+Pn,Ju="__reactListeners$"+Pn,Wu="__reactHandles$"+Pn,Ho="__reactResources$"+Pn,za="__reactMarker$"+Pn;function sF(s){delete s[Ns],delete s[Ys],delete s[It],delete s[Ju],delete s[Wu]}function Yl(s){var n=s[Ns];if(n)return n;for(var l=s.parentNode;l;){if(n=l[kl]||l[Ns]){if(l=n.alternate,n.child!==null||l!==null&&l.child!==null)for(s=Ir(s);s!==null;){if(l=s[Ns])return l;s=Ir(s)}return n}s=l,l=s.parentNode}return null}function Ql(s){if(s=s[Ns]||s[kl]){var n=s.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return s}return null}function Oa(s){var n=s.tag;if(n===5||n===26||n===27||n===6)return s.stateNode;throw Error(c(33))}function Zl(s){var n=s[Ho];return n||(n=s[Ho]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ts(s){s[za]=!0}var zo=new Set,Oo={};function Dl(s,n){Kl(s,n),Kl(s+"Capture",n)}function Kl(s,n){for(Oo[s]=n,s=0;s<n.length;s++)zo.add(n[s])}var $u=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ro={},Go={};function Pu(s){return Kt.call(Go,s)?!0:Kt.call(Ro,s)?!1:$u.test(s)?Go[s]=!0:(Ro[s]=!0,!1)}function Me(s,n,l){if(Pu(n))if(l===null)s.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":s.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){s.removeAttribute(n);return}}s.setAttribute(n,""+l)}}function Ne(s,n,l){if(l===null)s.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(n);return}s.setAttribute(n,""+l)}}function zn(s,n,l,a){if(a===null)s.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(l);return}s.setAttributeNS(n,l,""+a)}}function on(s){switch(typeof s){case"bigint":case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Bo(s){var n=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Iu(s,n,l){var a=Object.getOwnPropertyDescriptor(s.constructor.prototype,n);if(!s.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var e=a.get,t=a.set;return Object.defineProperty(s,n,{configurable:!0,get:function(){return e.call(this)},set:function(F){l=""+F,t.call(this,F)}}),Object.defineProperty(s,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(F){l=""+F},stopTracking:function(){s._valueTracker=null,delete s[n]}}}}function nF(s){if(!s._valueTracker){var n=Bo(s)?"checked":"value";s._valueTracker=Iu(s,n,""+s[n])}}function Uo(s){if(!s)return!1;var n=s._valueTracker;if(!n)return!0;var l=n.getValue(),a="";return s&&(a=Bo(s)?s.checked?"true":"false":s.value),s=a,s!==l?(n.setValue(s),!0):!1}function He(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}var sy=/[\n"\\]/g;function cn(s){return s.replace(sy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function lF(s,n,l,a,e,t,F,p){s.name="",F!=null&&typeof F!="function"&&typeof F!="symbol"&&typeof F!="boolean"?s.type=F:s.removeAttribute("type"),n!=null?F==="number"?(n===0&&s.value===""||s.value!=n)&&(s.value=""+on(n)):s.value!==""+on(n)&&(s.value=""+on(n)):F!=="submit"&&F!=="reset"||s.removeAttribute("value"),n!=null?aF(s,F,on(n)):l!=null?aF(s,F,on(l)):a!=null&&s.removeAttribute("value"),e==null&&t!=null&&(s.defaultChecked=!!t),e!=null&&(s.checked=e&&typeof e!="function"&&typeof e!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?s.name=""+on(p):s.removeAttribute("name")}function Lo(s,n,l,a,e,t,F,p){if(t!=null&&typeof t!="function"&&typeof t!="symbol"&&typeof t!="boolean"&&(s.type=t),n!=null||l!=null){if(!(t!=="submit"&&t!=="reset"||n!=null)){nF(s);return}l=l!=null?""+on(l):"",n=n!=null?""+on(n):l,p||n===s.value||(s.value=n),s.defaultValue=n}a=a??e,a=typeof a!="function"&&typeof a!="symbol"&&!!a,s.checked=p?s.checked:!!a,s.defaultChecked=!!a,F!=null&&typeof F!="function"&&typeof F!="symbol"&&typeof F!="boolean"&&(s.name=F),nF(s)}function aF(s,n,l){n==="number"&&He(s.ownerDocument)===s||s.defaultValue===""+l||(s.defaultValue=""+l)}function Vl(s,n,l,a){if(s=s.options,n){n={};for(var e=0;e<l.length;e++)n["$"+l[e]]=!0;for(l=0;l<s.length;l++)e=n.hasOwnProperty("$"+s[l].value),s[l].selected!==e&&(s[l].selected=e),e&&a&&(s[l].defaultSelected=!0)}else{for(l=""+on(l),n=null,e=0;e<s.length;e++){if(s[e].value===l){s[e].selected=!0,a&&(s[e].defaultSelected=!0);return}n!==null||s[e].disabled||(n=s[e])}n!==null&&(n.selected=!0)}}function qo(s,n,l){if(n!=null&&(n=""+on(n),n!==s.value&&(s.value=n),l==null)){s.defaultValue!==n&&(s.defaultValue=n);return}s.defaultValue=l!=null?""+on(l):""}function Xo(s,n,l,a){if(n==null){if(a!=null){if(l!=null)throw Error(c(92));if(gn(a)){if(1<a.length)throw Error(c(93));a=a[0]}l=a}l==null&&(l=""),n=l}l=on(n),s.defaultValue=l,a=s.textContent,a===l&&a!==""&&a!==null&&(s.value=a),nF(s)}function Jl(s,n){if(n){var l=s.firstChild;if(l&&l===s.lastChild&&l.nodeType===3){l.nodeValue=n;return}}s.textContent=n}var ny=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wo(s,n,l){var a=n.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?s.setProperty(n,""):n==="float"?s.cssFloat="":s[n]="":a?s.setProperty(n,l):typeof l!="number"||l===0||ny.has(n)?n==="float"?s.cssFloat=l:s[n]=(""+l).trim():s[n]=l+"px"}function ko(s,n,l){if(n!=null&&typeof n!="object")throw Error(c(62));if(s=s.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?s.setProperty(a,""):a==="float"?s.cssFloat="":s[a]="");for(var e in n)a=n[e],n.hasOwnProperty(e)&&l[e]!==a&&wo(s,e,a)}else for(var t in n)n.hasOwnProperty(t)&&wo(s,t,n[t])}function eF(s){if(s.indexOf("-")===-1)return!1;switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ly=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ze(s){return ay.test(""+s)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":s}function On(){}var tF=null;function FF(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Wl=null,$l=null;function Yo(s){var n=Ql(s);if(n&&(s=n.stateNode)){var l=s[Ys]||null;s:switch(s=n.stateNode,n.type){case"input":if(lF(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),n=l.name,l.type==="radio"&&n!=null){for(l=s;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<l.length;n++){var a=l[n];if(a!==s&&a.form===s.form){var e=a[Ys]||null;if(!e)throw Error(c(90));lF(a,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name)}}for(n=0;n<l.length;n++)a=l[n],a.form===s.form&&Uo(a)}break s;case"textarea":qo(s,l.value,l.defaultValue);break s;case"select":n=l.value,n!=null&&Vl(s,!!l.multiple,n,!1)}}}var pF=!1;function Qo(s,n,l){if(pF)return s(n,l);pF=!0;try{var a=s(n);return a}finally{if(pF=!1,(Wl!==null||$l!==null)&&(xt(),Wl&&(n=Wl,s=$l,$l=Wl=null,Yo(n),s)))for(n=0;n<s.length;n++)Yo(s[n])}}function Ra(s,n){var l=s.stateNode;if(l===null)return null;var a=l[Ys]||null;if(a===null)return null;l=a[n];s:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(s=s.type,a=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!a;break s;default:s=!1}if(s)return null;if(l&&typeof l!="function")throw Error(c(231,n,typeof l));return l}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oF=!1;if(Rn)try{var Ga={};Object.defineProperty(Ga,"passive",{get:function(){oF=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{oF=!1}var In=null,cF=null,Oe=null;function Zo(){if(Oe)return Oe;var s,n=cF,l=n.length,a,e="value"in In?In.value:In.textContent,t=e.length;for(s=0;s<l&&n[s]===e[s];s++);var F=l-s;for(a=1;a<=F&&n[l-a]===e[t-a];a++);return Oe=e.slice(s,1<a?1-a:void 0)}function Re(s){var n=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&n===13&&(s=13)):s=n,s===10&&(s=13),32<=s||s===13?s:0}function Ge(){return!0}function Ko(){return!1}function Qs(s){function n(l,a,e,t,F){this._reactName=l,this._targetInst=e,this.type=a,this.nativeEvent=t,this.target=F,this.currentTarget=null;for(var p in s)s.hasOwnProperty(p)&&(l=s[p],this[p]=l?l(t):t[p]);return this.isDefaultPrevented=(t.defaultPrevented!=null?t.defaultPrevented:t.returnValue===!1)?Ge:Ko,this.isPropagationStopped=Ko,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ge)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ge)},persist:function(){},isPersistent:Ge}),n}var Sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Be=Qs(Sl),Ba=_({},Sl,{view:0,detail:0}),ey=Qs(Ba),iF,rF,Ua,Ue=_({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yF,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Ua&&(Ua&&s.type==="mousemove"?(iF=s.screenX-Ua.screenX,rF=s.screenY-Ua.screenY):rF=iF=0,Ua=s),iF)},movementY:function(s){return"movementY"in s?s.movementY:rF}}),Vo=Qs(Ue),ty=_({},Ue,{dataTransfer:0}),Fy=Qs(ty),py=_({},Ba,{relatedTarget:0}),uF=Qs(py),oy=_({},Sl,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=Qs(oy),iy=_({},Sl,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),ry=Qs(iy),uy=_({},Sl,{data:0}),Jo=Qs(uy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(s){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(s):(s=dy[s])?!!n[s]:!1}function yF(){return Ey}var hy=_({},Ba,{key:function(s){if(s.key){var n=yy[s.key]||s.key;if(n!=="Unidentified")return n}return s.type==="keypress"?(s=Re(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?fy[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yF,charCode:function(s){return s.type==="keypress"?Re(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Re(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),my=Qs(hy),gy=_({},Ue,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wo=Qs(gy),xy=_({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yF}),vy=Qs(xy),by=_({},Sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=Qs(by),Cy=_({},Ue,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=Qs(Cy),Sy=_({},Sl,{newState:0,oldState:0}),_y=Qs(Sy),jy=[9,13,27,32],fF=Rn&&"CompositionEvent"in window,La=null;Rn&&"documentMode"in document&&(La=document.documentMode);var Ty=Rn&&"TextEvent"in window&&!La,$o=Rn&&(!fF||La&&8<La&&11>=La),Po=" ",Io=!1;function sc(s,n){switch(s){case"keyup":return jy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Pl=!1;function My(s,n){switch(s){case"compositionend":return nc(n);case"keypress":return n.which!==32?null:(Io=!0,Po);case"textInput":return s=n.data,s===Po&&Io?null:s;default:return null}}function Ny(s,n){if(Pl)return s==="compositionend"||!fF&&sc(s,n)?(s=Zo(),Oe=cF=In=null,Pl=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $o&&n.locale!=="ko"?null:n.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lc(s){var n=s&&s.nodeName&&s.nodeName.toLowerCase();return n==="input"?!!Hy[s.type]:n==="textarea"}function ac(s,n,l,a){Wl?$l?$l.push(a):$l=[a]:Wl=a,n=_t(n,"onChange"),0<n.length&&(l=new Be("onChange","change",null,l,a),s.push({event:l,listeners:n}))}var qa=null,Xa=null;function zy(s){Lr(s,0)}function Le(s){var n=Oa(s);if(Uo(n))return s}function ec(s,n){if(s==="change")return n}var tc=!1;if(Rn){var dF;if(Rn){var EF="oninput"in document;if(!EF){var Fc=document.createElement("div");Fc.setAttribute("oninput","return;"),EF=typeof Fc.oninput=="function"}dF=EF}else dF=!1;tc=dF&&(!document.documentMode||9<document.documentMode)}function pc(){qa&&(qa.detachEvent("onpropertychange",oc),Xa=qa=null)}function oc(s){if(s.propertyName==="value"&&Le(Xa)){var n=[];ac(n,Xa,s,FF(s)),Qo(zy,n)}}function Oy(s,n,l){s==="focusin"?(pc(),qa=n,Xa=l,qa.attachEvent("onpropertychange",oc)):s==="focusout"&&pc()}function Ry(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Le(Xa)}function Gy(s,n){if(s==="click")return Le(n)}function By(s,n){if(s==="input"||s==="change")return Le(n)}function Uy(s,n){return s===n&&(s!==0||1/s===1/n)||s!==s&&n!==n}var sn=typeof Object.is=="function"?Object.is:Uy;function wa(s,n){if(sn(s,n))return!0;if(typeof s!="object"||s===null||typeof n!="object"||n===null)return!1;var l=Object.keys(s),a=Object.keys(n);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var e=l[a];if(!Kt.call(n,e)||!sn(s[e],n[e]))return!1}return!0}function cc(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function ic(s,n){var l=cc(s);s=0;for(var a;l;){if(l.nodeType===3){if(a=s+l.textContent.length,s<=n&&a>=n)return{node:l,offset:n-s};s=a}s:{for(;l;){if(l.nextSibling){l=l.nextSibling;break s}l=l.parentNode}l=void 0}l=cc(l)}}function rc(s,n){return s&&n?s===n?!0:s&&s.nodeType===3?!1:n&&n.nodeType===3?rc(s,n.parentNode):"contains"in s?s.contains(n):s.compareDocumentPosition?!!(s.compareDocumentPosition(n)&16):!1:!1}function uc(s){s=s!=null&&s.ownerDocument!=null&&s.ownerDocument.defaultView!=null?s.ownerDocument.defaultView:window;for(var n=He(s.document);n instanceof s.HTMLIFrameElement;){try{var l=typeof n.contentWindow.location.href=="string"}catch{l=!1}if(l)s=n.contentWindow;else break;n=He(s.document)}return n}function hF(s){var n=s&&s.nodeName&&s.nodeName.toLowerCase();return n&&(n==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||n==="textarea"||s.contentEditable==="true")}var Ly=Rn&&"documentMode"in document&&11>=document.documentMode,Il=null,mF=null,ka=null,gF=!1;function yc(s,n,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gF||Il==null||Il!==He(a)||(a=Il,"selectionStart"in a&&hF(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ka&&wa(ka,a)||(ka=a,a=_t(mF,"onSelect"),0<a.length&&(n=new Be("onSelect","select",null,n,l),s.push({event:n,listeners:a}),n.target=Il)))}function _l(s,n){var l={};return l[s.toLowerCase()]=n.toLowerCase(),l["Webkit"+s]="webkit"+n,l["Moz"+s]="moz"+n,l}var sa={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionrun:_l("Transition","TransitionRun"),transitionstart:_l("Transition","TransitionStart"),transitioncancel:_l("Transition","TransitionCancel"),transitionend:_l("Transition","TransitionEnd")},xF={},fc={};Rn&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete sa.animationend.animation,delete sa.animationiteration.animation,delete sa.animationstart.animation),"TransitionEvent"in window||delete sa.transitionend.transition);function jl(s){if(xF[s])return xF[s];if(!sa[s])return s;var n=sa[s],l;for(l in n)if(n.hasOwnProperty(l)&&l in fc)return xF[s]=n[l];return s}var dc=jl("animationend"),Ec=jl("animationiteration"),hc=jl("animationstart"),qy=jl("transitionrun"),Xy=jl("transitionstart"),wy=jl("transitioncancel"),mc=jl("transitionend"),gc=new Map,vF="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vF.push("scrollEnd");function xn(s,n){gc.set(s,n),Dl(n,[s])}var qe=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)},rn=[],na=0,bF=0;function Xe(){for(var s=na,n=bF=na=0;n<s;){var l=rn[n];rn[n++]=null;var a=rn[n];rn[n++]=null;var e=rn[n];rn[n++]=null;var t=rn[n];if(rn[n++]=null,a!==null&&e!==null){var F=a.pending;F===null?e.next=e:(e.next=F.next,F.next=e),a.pending=e}t!==0&&xc(l,e,t)}}function we(s,n,l,a){rn[na++]=s,rn[na++]=n,rn[na++]=l,rn[na++]=a,bF|=a,s.lanes|=a,s=s.alternate,s!==null&&(s.lanes|=a)}function AF(s,n,l,a){return we(s,n,l,a),ke(s)}function Tl(s,n){return we(s,null,null,n),ke(s)}function xc(s,n,l){s.lanes|=l;var a=s.alternate;a!==null&&(a.lanes|=l);for(var e=!1,t=s.return;t!==null;)t.childLanes|=l,a=t.alternate,a!==null&&(a.childLanes|=l),t.tag===22&&(s=t.stateNode,s===null||s._visibility&1||(e=!0)),s=t,t=t.return;return s.tag===3?(t=s.stateNode,e&&n!==null&&(e=31-Is(l),s=t.hiddenUpdates,a=s[e],a===null?s[e]=[n]:a.push(n),n.lane=l|536870912),t):null}function ke(s){if(50<re)throw re=0,Hp=null,Error(c(185));for(var n=s.return;n!==null;)s=n,n=s.return;return s.tag===3?s.stateNode:null}var la={};function ky(s,n,l,a){this.tag=s,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(s,n,l,a){return new ky(s,n,l,a)}function CF(s){return s=s.prototype,!(!s||!s.isReactComponent)}function Gn(s,n){var l=s.alternate;return l===null?(l=nn(s.tag,n,s.key,s.mode),l.elementType=s.elementType,l.type=s.type,l.stateNode=s.stateNode,l.alternate=s,s.alternate=l):(l.pendingProps=n,l.type=s.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=s.flags&65011712,l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,n=s.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},l.sibling=s.sibling,l.index=s.index,l.ref=s.ref,l.refCleanup=s.refCleanup,l}function vc(s,n){s.flags&=65011714;var l=s.alternate;return l===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,n=l.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),s}function Ye(s,n,l,a,e,t){var F=0;if(a=s,typeof s=="function")CF(s)&&(F=1);else if(typeof s=="string")F=Jf(s,l,O.current)?26:s==="html"||s==="head"||s==="body"?27:5;else s:switch(s){case Dn:return s=nn(31,l,n,e),s.elementType=Dn,s.lanes=t,s;case rs:return Ml(l.children,e,t,n);case Gs:F=8,e|=24;break;case Bs:return s=nn(12,l,n,e|2),s.elementType=Bs,s.lanes=t,s;case Cn:return s=nn(13,l,n,e),s.elementType=Cn,s.lanes=t,s;case Xs:return s=nn(19,l,n,e),s.elementType=Xs,s.lanes=t,s;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Ss:F=10;break s;case An:F=9;break s;case pn:F=11;break s;case I:F=14;break s;case ws:F=16,a=null;break s}F=29,l=Error(c(130,s===null?"null":typeof s,"")),a=null}return n=nn(F,l,n,e),n.elementType=s,n.type=a,n.lanes=t,n}function Ml(s,n,l,a){return s=nn(7,s,a,n),s.lanes=l,s}function DF(s,n,l){return s=nn(6,s,null,n),s.lanes=l,s}function bc(s){var n=nn(18,null,null,0);return n.stateNode=s,n}function SF(s,n,l){return n=nn(4,s.children!==null?s.children:[],s.key,n),n.lanes=l,n.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},n}var Ac=new WeakMap;function un(s,n){if(typeof s=="object"&&s!==null){var l=Ac.get(s);return l!==void 0?l:(n={value:s,source:n,stack:bo(n)},Ac.set(s,n),n)}return{value:s,source:n,stack:bo(n)}}var aa=[],ea=0,Qe=null,Ya=0,yn=[],fn=0,sl=null,_n=1,jn="";function Bn(s,n){aa[ea++]=Ya,aa[ea++]=Qe,Qe=s,Ya=n}function Cc(s,n,l){yn[fn++]=_n,yn[fn++]=jn,yn[fn++]=sl,sl=s;var a=_n;s=jn;var e=32-Is(a)-1;a&=~(1<<e),l+=1;var t=32-Is(n)+e;if(30<t){var F=e-e%5;t=(a&(1<<F)-1).toString(32),a>>=F,e-=F,_n=1<<32-Is(n)+e|l<<e|a,jn=t+s}else _n=1<<t|l<<e|a,jn=s}function _F(s){s.return!==null&&(Bn(s,1),Cc(s,1,0))}function jF(s){for(;s===Qe;)Qe=aa[--ea],aa[ea]=null,Ya=aa[--ea],aa[ea]=null;for(;s===sl;)sl=yn[--fn],yn[fn]=null,jn=yn[--fn],yn[fn]=null,_n=yn[--fn],yn[fn]=null}function Dc(s,n){yn[fn++]=_n,yn[fn++]=jn,yn[fn++]=sl,_n=n.id,jn=n.overflow,sl=s}var Hs=null,fs=null,ss=!1,nl=null,dn=!1,TF=Error(c(519));function ll(s){var n=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qa(un(n,s)),TF}function Sc(s){var n=s.stateNode,l=s.type,a=s.memoizedProps;switch(n[Ns]=s,n[Ys]=a,l){case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":case"embed":W("load",n);break;case"video":case"audio":for(l=0;l<ye.length;l++)W(ye[l],n);break;case"source":W("error",n);break;case"img":case"image":case"link":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"input":W("invalid",n),Lo(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":W("invalid",n);break;case"textarea":W("invalid",n),Xo(n,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||n.textContent===""+l||a.suppressHydrationWarning===!0||kr(n.textContent,l)?(a.popover!=null&&(W("beforetoggle",n),W("toggle",n)),a.onScroll!=null&&W("scroll",n),a.onScrollEnd!=null&&W("scrollend",n),a.onClick!=null&&(n.onclick=On),n=!0):n=!1,n||ll(s,!0)}function _c(s){for(Hs=s.return;Hs;)switch(Hs.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:Hs=Hs.return}}function ta(s){if(s!==Hs)return!1;if(!ss)return _c(s),ss=!0,!1;var n=s.tag,l;if((l=n!==3&&n!==27)&&((l=n===5)&&(l=s.type,l=!(l!=="form"&&l!=="button")||Kp(s.type,s.memoizedProps)),l=!l),l&&fs&&ll(s),_c(s),n===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));fs=Pr(s)}else if(n===31){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(317));fs=Pr(s)}else n===27?(n=fs,El(s.type)?(s=Pp,Pp=null,fs=s):fs=n):fs=Hs?hn(s.stateNode.nextSibling):null;return!0}function Nl(){fs=Hs=null,ss=!1}function MF(){var s=nl;return s!==null&&(Js===null?Js=s:Js.push.apply(Js,s),nl=null),s}function Qa(s){nl===null?nl=[s]:nl.push(s)}var NF=r(null),Hl=null,Un=null;function al(s,n,l){M(NF,n._currentValue),n._currentValue=l}function Ln(s){s._currentValue=NF.current,D(NF)}function HF(s,n,l){for(;s!==null;){var a=s.alternate;if((s.childLanes&n)!==n?(s.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),s===l)break;s=s.return}}function zF(s,n,l,a){var e=s.child;for(e!==null&&(e.return=s);e!==null;){var t=e.dependencies;if(t!==null){var F=e.child;t=t.firstContext;s:for(;t!==null;){var p=t;t=e;for(var o=0;o<n.length;o++)if(p.context===n[o]){t.lanes|=l,p=t.alternate,p!==null&&(p.lanes|=l),HF(t.return,l,s),a||(F=null);break s}t=p.next}}else if(e.tag===18){if(F=e.return,F===null)throw Error(c(341));F.lanes|=l,t=F.alternate,t!==null&&(t.lanes|=l),HF(F,l,s),F=null}else F=e.child;if(F!==null)F.return=e;else for(F=e;F!==null;){if(F===s){F=null;break}if(e=F.sibling,e!==null){e.return=F.return,F=e;break}F=F.return}e=F}}function Fa(s,n,l,a){s=null;for(var e=n,t=!1;e!==null;){if(!t){if((e.flags&524288)!==0)t=!0;else if((e.flags&262144)!==0)break}if(e.tag===10){var F=e.alternate;if(F===null)throw Error(c(387));if(F=F.memoizedProps,F!==null){var p=e.type;sn(e.pendingProps.value,F.value)||(s!==null?s.push(p):s=[p])}}else if(e===es.current){if(F=e.alternate,F===null)throw Error(c(387));F.memoizedState.memoizedState!==e.memoizedState.memoizedState&&(s!==null?s.push(me):s=[me])}e=e.return}s!==null&&zF(n,s,l,a),n.flags|=262144}function Ze(s){for(s=s.firstContext;s!==null;){if(!sn(s.context._currentValue,s.memoizedValue))return!0;s=s.next}return!1}function zl(s){Hl=s,Un=null,s=s.dependencies,s!==null&&(s.firstContext=null)}function zs(s){return jc(Hl,s)}function Ke(s,n){return Hl===null&&zl(s),jc(s,n)}function jc(s,n){var l=n._currentValue;if(n={context:n,memoizedValue:l,next:null},Un===null){if(s===null)throw Error(c(308));Un=n,s.dependencies={lanes:0,firstContext:n},s.flags|=524288}else Un=Un.next=n;return l}var Yy=typeof AbortController<"u"?AbortController:function(){var s=[],n=this.signal={aborted:!1,addEventListener:function(l,a){s.push(a)}};this.abort=function(){n.aborted=!0,s.forEach(function(l){return l()})}},Qy=y.unstable_scheduleCallback,Zy=y.unstable_NormalPriority,bs={$$typeof:Ss,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function OF(){return{controller:new Yy,data:new Map,refCount:0}}function Za(s){s.refCount--,s.refCount===0&&Qy(Zy,function(){s.controller.abort()})}var Ka=null,RF=0,pa=0,oa=null;function Ky(s,n){if(Ka===null){var l=Ka=[];RF=0,pa=Up(),oa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return RF++,n.then(Tc,Tc),n}function Tc(){if(--RF===0&&Ka!==null){oa!==null&&(oa.status="fulfilled");var s=Ka;Ka=null,pa=0,oa=null;for(var n=0;n<s.length;n++)(0,s[n])()}}function Vy(s,n){var l=[],a={status:"pending",value:null,reason:null,then:function(e){l.push(e)}};return s.then(function(){a.status="fulfilled",a.value=n;for(var e=0;e<l.length;e++)(0,l[e])(n)},function(e){for(a.status="rejected",a.reason=e,e=0;e<l.length;e++)(0,l[e])(void 0)}),a}var Mc=v.S;v.S=function(s,n){yr=$s(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ky(s,n),Mc!==null&&Mc(s,n)};var Ol=r(null);function GF(){var s=Ol.current;return s!==null?s:ys.pooledCache}function Ve(s,n){n===null?M(Ol,Ol.current):M(Ol,n.pool)}function Nc(){var s=GF();return s===null?null:{parent:bs._currentValue,pool:s}}var ca=Error(c(460)),BF=Error(c(474)),Je=Error(c(542)),We={then:function(){}};function Hc(s){return s=s.status,s==="fulfilled"||s==="rejected"}function zc(s,n,l){switch(l=s[l],l===void 0?s.push(n):l!==n&&(n.then(On,On),n=l),n.status){case"fulfilled":return n.value;case"rejected":throw s=n.reason,Rc(s),s;default:if(typeof n.status=="string")n.then(On,On);else{if(s=ys,s!==null&&100<s.shellSuspendCounter)throw Error(c(482));s=n,s.status="pending",s.then(function(a){if(n.status==="pending"){var e=n;e.status="fulfilled",e.value=a}},function(a){if(n.status==="pending"){var e=n;e.status="rejected",e.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw s=n.reason,Rc(s),s}throw Gl=n,ca}}function Rl(s){try{var n=s._init;return n(s._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Gl=l,ca):l}}var Gl=null;function Oc(){if(Gl===null)throw Error(c(459));var s=Gl;return Gl=null,s}function Rc(s){if(s===ca||s===Je)throw Error(c(483))}var ia=null,Va=0;function $e(s){var n=Va;return Va+=1,ia===null&&(ia=[]),zc(ia,s,n)}function Ja(s,n){n=n.props.ref,s.ref=n!==void 0?n:null}function Pe(s,n){throw n.$$typeof===k?Error(c(525)):(s=Object.prototype.toString.call(n),Error(c(31,s==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":s)))}function Gc(s){function n(u,i){if(s){var f=u.deletions;f===null?(u.deletions=[i],u.flags|=16):f.push(i)}}function l(u,i){if(!s)return null;for(;i!==null;)n(u,i),i=i.sibling;return null}function a(u){for(var i=new Map;u!==null;)u.key!==null?i.set(u.key,u):i.set(u.index,u),u=u.sibling;return i}function e(u,i){return u=Gn(u,i),u.index=0,u.sibling=null,u}function t(u,i,f){return u.index=f,s?(f=u.alternate,f!==null?(f=f.index,f<i?(u.flags|=67108866,i):f):(u.flags|=67108866,i)):(u.flags|=1048576,i)}function F(u){return s&&u.alternate===null&&(u.flags|=67108866),u}function p(u,i,f,b){return i===null||i.tag!==6?(i=DF(f,u.mode,b),i.return=u,i):(i=e(i,f),i.return=u,i)}function o(u,i,f,b){var B=f.type;return B===rs?x(u,i,f.props.children,b,f.key):i!==null&&(i.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ws&&Rl(B)===i.type)?(i=e(i,f.props),Ja(i,f),i.return=u,i):(i=Ye(f.type,f.key,f.props,null,u.mode,b),Ja(i,f),i.return=u,i)}function d(u,i,f,b){return i===null||i.tag!==4||i.stateNode.containerInfo!==f.containerInfo||i.stateNode.implementation!==f.implementation?(i=SF(f,u.mode,b),i.return=u,i):(i=e(i,f.children||[]),i.return=u,i)}function x(u,i,f,b,B){return i===null||i.tag!==7?(i=Ml(f,u.mode,b,B),i.return=u,i):(i=e(i,f),i.return=u,i)}function C(u,i,f){if(typeof i=="string"&&i!==""||typeof i=="number"||typeof i=="bigint")return i=DF(""+i,u.mode,f),i.return=u,i;if(typeof i=="object"&&i!==null){switch(i.$$typeof){case K:return f=Ye(i.type,i.key,i.props,null,u.mode,f),Ja(f,i),f.return=u,f;case js:return i=SF(i,u.mode,f),i.return=u,i;case ws:return i=Rl(i),C(u,i,f)}if(gn(i)||ks(i))return i=Ml(i,u.mode,f,null),i.return=u,i;if(typeof i.then=="function")return C(u,$e(i),f);if(i.$$typeof===Ss)return C(u,Ke(u,i),f);Pe(u,i)}return null}function E(u,i,f,b){var B=i!==null?i.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return B!==null?null:p(u,i,""+f,b);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case K:return f.key===B?o(u,i,f,b):null;case js:return f.key===B?d(u,i,f,b):null;case ws:return f=Rl(f),E(u,i,f,b)}if(gn(f)||ks(f))return B!==null?null:x(u,i,f,b,null);if(typeof f.then=="function")return E(u,i,$e(f),b);if(f.$$typeof===Ss)return E(u,i,Ke(u,f),b);Pe(u,f)}return null}function h(u,i,f,b,B){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return u=u.get(f)||null,p(i,u,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case K:return u=u.get(b.key===null?f:b.key)||null,o(i,u,b,B);case js:return u=u.get(b.key===null?f:b.key)||null,d(i,u,b,B);case ws:return b=Rl(b),h(u,i,f,b,B)}if(gn(b)||ks(b))return u=u.get(f)||null,x(i,u,b,B,null);if(typeof b.then=="function")return h(u,i,f,$e(b),B);if(b.$$typeof===Ss)return h(u,i,f,Ke(i,b),B);Pe(i,b)}return null}function z(u,i,f,b){for(var B=null,ns=null,R=i,Z=i=0,P=null;R!==null&&Z<f.length;Z++){R.index>Z?(P=R,R=null):P=R.sibling;var ls=E(u,R,f[Z],b);if(ls===null){R===null&&(R=P);break}s&&R&&ls.alternate===null&&n(u,R),i=t(ls,i,Z),ns===null?B=ls:ns.sibling=ls,ns=ls,R=P}if(Z===f.length)return l(u,R),ss&&Bn(u,Z),B;if(R===null){for(;Z<f.length;Z++)R=C(u,f[Z],b),R!==null&&(i=t(R,i,Z),ns===null?B=R:ns.sibling=R,ns=R);return ss&&Bn(u,Z),B}for(R=a(R);Z<f.length;Z++)P=h(R,u,Z,f[Z],b),P!==null&&(s&&P.alternate!==null&&R.delete(P.key===null?Z:P.key),i=t(P,i,Z),ns===null?B=P:ns.sibling=P,ns=P);return s&&R.forEach(function(vl){return n(u,vl)}),ss&&Bn(u,Z),B}function U(u,i,f,b){if(f==null)throw Error(c(151));for(var B=null,ns=null,R=i,Z=i=0,P=null,ls=f.next();R!==null&&!ls.done;Z++,ls=f.next()){R.index>Z?(P=R,R=null):P=R.sibling;var vl=E(u,R,ls.value,b);if(vl===null){R===null&&(R=P);break}s&&R&&vl.alternate===null&&n(u,R),i=t(vl,i,Z),ns===null?B=vl:ns.sibling=vl,ns=vl,R=P}if(ls.done)return l(u,R),ss&&Bn(u,Z),B;if(R===null){for(;!ls.done;Z++,ls=f.next())ls=C(u,ls.value,b),ls!==null&&(i=t(ls,i,Z),ns===null?B=ls:ns.sibling=ls,ns=ls);return ss&&Bn(u,Z),B}for(R=a(R);!ls.done;Z++,ls=f.next())ls=h(R,u,Z,ls.value,b),ls!==null&&(s&&ls.alternate!==null&&R.delete(ls.key===null?Z:ls.key),i=t(ls,i,Z),ns===null?B=ls:ns.sibling=ls,ns=ls);return s&&R.forEach(function(Fd){return n(u,Fd)}),ss&&Bn(u,Z),B}function is(u,i,f,b){if(typeof f=="object"&&f!==null&&f.type===rs&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case K:s:{for(var B=f.key;i!==null;){if(i.key===B){if(B=f.type,B===rs){if(i.tag===7){l(u,i.sibling),b=e(i,f.props.children),b.return=u,u=b;break s}}else if(i.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===ws&&Rl(B)===i.type){l(u,i.sibling),b=e(i,f.props),Ja(b,f),b.return=u,u=b;break s}l(u,i);break}else n(u,i);i=i.sibling}f.type===rs?(b=Ml(f.props.children,u.mode,b,f.key),b.return=u,u=b):(b=Ye(f.type,f.key,f.props,null,u.mode,b),Ja(b,f),b.return=u,u=b)}return F(u);case js:s:{for(B=f.key;i!==null;){if(i.key===B)if(i.tag===4&&i.stateNode.containerInfo===f.containerInfo&&i.stateNode.implementation===f.implementation){l(u,i.sibling),b=e(i,f.children||[]),b.return=u,u=b;break s}else{l(u,i);break}else n(u,i);i=i.sibling}b=SF(f,u.mode,b),b.return=u,u=b}return F(u);case ws:return f=Rl(f),is(u,i,f,b)}if(gn(f))return z(u,i,f,b);if(ks(f)){if(B=ks(f),typeof B!="function")throw Error(c(150));return f=B.call(f),U(u,i,f,b)}if(typeof f.then=="function")return is(u,i,$e(f),b);if(f.$$typeof===Ss)return is(u,i,Ke(u,f),b);Pe(u,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,i!==null&&i.tag===6?(l(u,i.sibling),b=e(i,f),b.return=u,u=b):(l(u,i),b=DF(f,u.mode,b),b.return=u,u=b),F(u)):l(u,i)}return function(u,i,f,b){try{Va=0;var B=is(u,i,f,b);return ia=null,B}catch(R){if(R===ca||R===Je)throw R;var ns=nn(29,R,null,u.mode);return ns.lanes=b,ns.return=u,ns}}}var Bl=Gc(!0),Bc=Gc(!1),el=!1;function UF(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function LF(s,n){s=s.updateQueue,n.updateQueue===s&&(n.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,callbacks:null})}function tl(s){return{lane:s,tag:0,payload:null,callback:null,next:null}}function Fl(s,n,l){var a=s.updateQueue;if(a===null)return null;if(a=a.shared,(as&2)!==0){var e=a.pending;return e===null?n.next=n:(n.next=e.next,e.next=n),a.pending=n,n=ke(s),xc(s,null,l),n}return we(s,a,n,l),ke(s)}function Wa(s,n,l){if(n=n.updateQueue,n!==null&&(n=n.shared,(l&4194048)!==0)){var a=n.lanes;a&=s.pendingLanes,l|=a,n.lanes=l,jo(s,l)}}function qF(s,n){var l=s.updateQueue,a=s.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var e=null,t=null;if(l=l.firstBaseUpdate,l!==null){do{var F={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};t===null?e=t=F:t=t.next=F,l=l.next}while(l!==null);t===null?e=t=n:t=t.next=n}else e=t=n;l={baseState:a.baseState,firstBaseUpdate:e,lastBaseUpdate:t,shared:a.shared,callbacks:a.callbacks},s.updateQueue=l;return}s=l.lastBaseUpdate,s===null?l.firstBaseUpdate=n:s.next=n,l.lastBaseUpdate=n}var XF=!1;function $a(){if(XF){var s=oa;if(s!==null)throw s}}function Pa(s,n,l,a){XF=!1;var e=s.updateQueue;el=!1;var t=e.firstBaseUpdate,F=e.lastBaseUpdate,p=e.shared.pending;if(p!==null){e.shared.pending=null;var o=p,d=o.next;o.next=null,F===null?t=d:F.next=d,F=o;var x=s.alternate;x!==null&&(x=x.updateQueue,p=x.lastBaseUpdate,p!==F&&(p===null?x.firstBaseUpdate=d:p.next=d,x.lastBaseUpdate=o))}if(t!==null){var C=e.baseState;F=0,x=d=o=null,p=t;do{var E=p.lane&-536870913,h=E!==p.lane;if(h?($&E)===E:(a&E)===E){E!==0&&E===pa&&(XF=!0),x!==null&&(x=x.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});s:{var z=s,U=p;E=n;var is=l;switch(U.tag){case 1:if(z=U.payload,typeof z=="function"){C=z.call(is,C,E);break s}C=z;break s;case 3:z.flags=z.flags&-65537|128;case 0:if(z=U.payload,E=typeof z=="function"?z.call(is,C,E):z,E==null)break s;C=_({},C,E);break s;case 2:el=!0}}E=p.callback,E!==null&&(s.flags|=64,h&&(s.flags|=8192),h=e.callbacks,h===null?e.callbacks=[E]:h.push(E))}else h={lane:E,tag:p.tag,payload:p.payload,callback:p.callback,next:null},x===null?(d=x=h,o=C):x=x.next=h,F|=E;if(p=p.next,p===null){if(p=e.shared.pending,p===null)break;h=p,p=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}}while(!0);x===null&&(o=C),e.baseState=o,e.firstBaseUpdate=d,e.lastBaseUpdate=x,t===null&&(e.shared.lanes=0),rl|=F,s.lanes=F,s.memoizedState=C}}function Uc(s,n){if(typeof s!="function")throw Error(c(191,s));s.call(n)}function Lc(s,n){var l=s.callbacks;if(l!==null)for(s.callbacks=null,s=0;s<l.length;s++)Uc(l[s],n)}var ra=r(null),Ie=r(0);function qc(s,n){s=Vn,M(Ie,s),M(ra,n),Vn=s|n.baseLanes}function wF(){M(Ie,Vn),M(ra,ra.current)}function kF(){Vn=Ie.current,D(ra),D(Ie)}var ln=r(null),En=null;function pl(s){var n=s.alternate;M(xs,xs.current&1),M(ln,s),En===null&&(n===null||ra.current!==null||n.memoizedState!==null)&&(En=s)}function YF(s){M(xs,xs.current),M(ln,s),En===null&&(En=s)}function Xc(s){s.tag===22?(M(xs,xs.current),M(ln,s),En===null&&(En=s)):ol()}function ol(){M(xs,xs.current),M(ln,ln.current)}function an(s){D(ln),En===s&&(En=null),D(xs)}var xs=r(0);function st(s){for(var n=s;n!==null;){if(n.tag===13){var l=n.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Wp(l)||$p(l)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break;for(;n.sibling===null;){if(n.return===null||n.return===s)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qn=0,Q=null,os=null,As=null,nt=!1,ua=!1,Ul=!1,lt=0,Ia=0,ya=null,Jy=0;function hs(){throw Error(c(321))}function QF(s,n){if(n===null)return!1;for(var l=0;l<n.length&&l<s.length;l++)if(!sn(s[l],n[l]))return!1;return!0}function ZF(s,n,l,a,e,t){return qn=t,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,v.H=s===null||s.memoizedState===null?Ci:pp,Ul=!1,t=l(a,e),Ul=!1,ua&&(t=kc(n,l,a,e)),wc(s),t}function wc(s){v.H=le;var n=os!==null&&os.next!==null;if(qn=0,As=os=Q=null,nt=!1,Ia=0,ya=null,n)throw Error(c(300));s===null||Cs||(s=s.dependencies,s!==null&&Ze(s)&&(Cs=!0))}function kc(s,n,l,a){Q=s;var e=0;do{if(ua&&(ya=null),Ia=0,ua=!1,25<=e)throw Error(c(301));if(e+=1,As=os=null,s.updateQueue!=null){var t=s.updateQueue;t.lastEffect=null,t.events=null,t.stores=null,t.memoCache!=null&&(t.memoCache.index=0)}v.H=Di,t=n(l,a)}while(ua);return t}function Wy(){var s=v.H,n=s.useState()[0];return n=typeof n.then=="function"?se(n):n,s=s.useState()[0],(os!==null?os.memoizedState:null)!==s&&(Q.flags|=1024),n}function KF(){var s=lt!==0;return lt=0,s}function VF(s,n,l){n.updateQueue=s.updateQueue,n.flags&=-2053,s.lanes&=~l}function JF(s){if(nt){for(s=s.memoizedState;s!==null;){var n=s.queue;n!==null&&(n.pending=null),s=s.next}nt=!1}qn=0,As=os=Q=null,ua=!1,Ia=lt=0,ya=null}function qs(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return As===null?Q.memoizedState=As=s:As=As.next=s,As}function vs(){if(os===null){var s=Q.alternate;s=s!==null?s.memoizedState:null}else s=os.next;var n=As===null?Q.memoizedState:As.next;if(n!==null)As=n,os=s;else{if(s===null)throw Q.alternate===null?Error(c(467)):Error(c(310));os=s,s={memoizedState:os.memoizedState,baseState:os.baseState,baseQueue:os.baseQueue,queue:os.queue,next:null},As===null?Q.memoizedState=As=s:As=As.next=s}return As}function at(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function se(s){var n=Ia;return Ia+=1,ya===null&&(ya=[]),s=zc(ya,s,n),n=Q,(As===null?n.memoizedState:As.next)===null&&(n=n.alternate,v.H=n===null||n.memoizedState===null?Ci:pp),s}function et(s){if(s!==null&&typeof s=="object"){if(typeof s.then=="function")return se(s);if(s.$$typeof===Ss)return zs(s)}throw Error(c(438,String(s)))}function WF(s){var n=null,l=Q.updateQueue;if(l!==null&&(n=l.memoCache),n==null){var a=Q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(e){return e.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),l===null&&(l=at(),Q.updateQueue=l),l.memoCache=n,l=n.data[n.index],l===void 0)for(l=n.data[n.index]=Array(s),a=0;a<s;a++)l[a]=wl;return n.index++,l}function Xn(s,n){return typeof n=="function"?n(s):n}function tt(s){var n=vs();return $F(n,os,s)}function $F(s,n,l){var a=s.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=l;var e=s.baseQueue,t=a.pending;if(t!==null){if(e!==null){var F=e.next;e.next=t.next,t.next=F}n.baseQueue=e=t,a.pending=null}if(t=s.baseState,e===null)s.memoizedState=t;else{n=e.next;var p=F=null,o=null,d=n,x=!1;do{var C=d.lane&-536870913;if(C!==d.lane?($&C)===C:(qn&C)===C){var E=d.revertLane;if(E===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),C===pa&&(x=!0);else if((qn&E)===E){d=d.next,E===pa&&(x=!0);continue}else C={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(p=o=C,F=t):o=o.next=C,Q.lanes|=E,rl|=E;C=d.action,Ul&&l(t,C),t=d.hasEagerState?d.eagerState:l(t,C)}else E={lane:C,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},o===null?(p=o=E,F=t):o=o.next=E,Q.lanes|=C,rl|=C;d=d.next}while(d!==null&&d!==n);if(o===null?F=t:o.next=p,!sn(t,s.memoizedState)&&(Cs=!0,x&&(l=oa,l!==null)))throw l;s.memoizedState=t,s.baseState=F,s.baseQueue=o,a.lastRenderedState=t}return e===null&&(a.lanes=0),[s.memoizedState,a.dispatch]}function PF(s){var n=vs(),l=n.queue;if(l===null)throw Error(c(311));l.lastRenderedReducer=s;var a=l.dispatch,e=l.pending,t=n.memoizedState;if(e!==null){l.pending=null;var F=e=e.next;do t=s(t,F.action),F=F.next;while(F!==e);sn(t,n.memoizedState)||(Cs=!0),n.memoizedState=t,n.baseQueue===null&&(n.baseState=t),l.lastRenderedState=t}return[t,a]}function Yc(s,n,l){var a=Q,e=vs(),t=ss;if(t){if(l===void 0)throw Error(c(407));l=l()}else l=n();var F=!sn((os||e).memoizedState,l);if(F&&(e.memoizedState=l,Cs=!0),e=e.queue,np(Kc.bind(null,a,e,s),[s]),e.getSnapshot!==n||F||As!==null&&As.memoizedState.tag&1){if(a.flags|=2048,fa(9,{destroy:void 0},Zc.bind(null,a,e,l,n),null),ys===null)throw Error(c(349));t||(qn&127)!==0||Qc(a,n,l)}return l}function Qc(s,n,l){s.flags|=16384,s={getSnapshot:n,value:l},n=Q.updateQueue,n===null?(n=at(),Q.updateQueue=n,n.stores=[s]):(l=n.stores,l===null?n.stores=[s]:l.push(s))}function Zc(s,n,l,a){n.value=l,n.getSnapshot=a,Vc(n)&&Jc(s)}function Kc(s,n,l){return l(function(){Vc(n)&&Jc(s)})}function Vc(s){var n=s.getSnapshot;s=s.value;try{var l=n();return!sn(s,l)}catch{return!0}}function Jc(s){var n=Tl(s,2);n!==null&&Ws(n,s,2)}function IF(s){var n=qs();if(typeof s=="function"){var l=s;if(s=l(),Ul){$n(!0);try{l()}finally{$n(!1)}}}return n.memoizedState=n.baseState=s,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:s},n}function Wc(s,n,l,a){return s.baseState=l,$F(s,os,typeof a=="function"?a:Xn)}function $y(s,n,l,a,e){if(ot(s))throw Error(c(485));if(s=n.action,s!==null){var t={payload:e,action:s,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(F){t.listeners.push(F)}};v.T!==null?l(!0):t.isTransition=!1,a(t),l=n.pending,l===null?(t.next=n.pending=t,$c(n,t)):(t.next=l.next,n.pending=l.next=t)}}function $c(s,n){var l=n.action,a=n.payload,e=s.state;if(n.isTransition){var t=v.T,F={};v.T=F;try{var p=l(e,a),o=v.S;o!==null&&o(F,p),Pc(s,n,p)}catch(d){sp(s,n,d)}finally{t!==null&&F.types!==null&&(t.types=F.types),v.T=t}}else try{t=l(e,a),Pc(s,n,t)}catch(d){sp(s,n,d)}}function Pc(s,n,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Ic(s,n,a)},function(a){return sp(s,n,a)}):Ic(s,n,l)}function Ic(s,n,l){n.status="fulfilled",n.value=l,si(n),s.state=l,n=s.pending,n!==null&&(l=n.next,l===n?s.pending=null:(l=l.next,n.next=l,$c(s,l)))}function sp(s,n,l){var a=s.pending;if(s.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=l,si(n),n=n.next;while(n!==a)}s.action=null}function si(s){s=s.listeners;for(var n=0;n<s.length;n++)(0,s[n])()}function ni(s,n){return n}function li(s,n){if(ss){var l=ys.formState;if(l!==null){s:{var a=Q;if(ss){if(fs){n:{for(var e=fs,t=dn;e.nodeType!==8;){if(!t){e=null;break n}if(e=hn(e.nextSibling),e===null){e=null;break n}}t=e.data,e=t==="F!"||t==="F"?e:null}if(e){fs=hn(e.nextSibling),a=e.data==="F!";break s}}ll(a)}a=!1}a&&(n=l[0])}}return l=qs(),l.memoizedState=l.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:n},l.queue=a,l=vi.bind(null,Q,a),a.dispatch=l,a=IF(!1),t=Fp.bind(null,Q,!1,a.queue),a=qs(),e={state:n,dispatch:null,action:s,pending:null},a.queue=e,l=$y.bind(null,Q,e,t,l),e.dispatch=l,a.memoizedState=s,[n,l,!1]}function ai(s){var n=vs();return ei(n,os,s)}function ei(s,n,l){if(n=$F(s,n,ni)[0],s=tt(Xn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=se(n)}catch(F){throw F===ca?Je:F}else a=n;n=vs();var e=n.queue,t=e.dispatch;return l!==n.memoizedState&&(Q.flags|=2048,fa(9,{destroy:void 0},Py.bind(null,e,l),null)),[a,t,s]}function Py(s,n){s.action=n}function ti(s){var n=vs(),l=os;if(l!==null)return ei(n,l,s);vs(),n=n.memoizedState,l=vs();var a=l.queue.dispatch;return l.memoizedState=s,[n,a,!1]}function fa(s,n,l,a){return s={tag:s,create:l,deps:a,inst:n,next:null},n=Q.updateQueue,n===null&&(n=at(),Q.updateQueue=n),l=n.lastEffect,l===null?n.lastEffect=s.next=s:(a=l.next,l.next=s,s.next=a,n.lastEffect=s),s}function Fi(){return vs().memoizedState}function Ft(s,n,l,a){var e=qs();Q.flags|=s,e.memoizedState=fa(1|n,{destroy:void 0},l,a===void 0?null:a)}function pt(s,n,l,a){var e=vs();a=a===void 0?null:a;var t=e.memoizedState.inst;os!==null&&a!==null&&QF(a,os.memoizedState.deps)?e.memoizedState=fa(n,t,l,a):(Q.flags|=s,e.memoizedState=fa(1|n,t,l,a))}function pi(s,n){Ft(8390656,8,s,n)}function np(s,n){pt(2048,8,s,n)}function Iy(s){Q.flags|=4;var n=Q.updateQueue;if(n===null)n=at(),Q.updateQueue=n,n.events=[s];else{var l=n.events;l===null?n.events=[s]:l.push(s)}}function oi(s){var n=vs().memoizedState;return Iy({ref:n,nextImpl:s}),function(){if((as&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}function ci(s,n){return pt(4,2,s,n)}function ii(s,n){return pt(4,4,s,n)}function ri(s,n){if(typeof n=="function"){s=s();var l=n(s);return function(){typeof l=="function"?l():n(null)}}if(n!=null)return s=s(),n.current=s,function(){n.current=null}}function ui(s,n,l){l=l!=null?l.concat([s]):null,pt(4,4,ri.bind(null,n,s),l)}function lp(){}function yi(s,n){var l=vs();n=n===void 0?null:n;var a=l.memoizedState;return n!==null&&QF(n,a[1])?a[0]:(l.memoizedState=[s,n],s)}function fi(s,n){var l=vs();n=n===void 0?null:n;var a=l.memoizedState;if(n!==null&&QF(n,a[1]))return a[0];if(a=s(),Ul){$n(!0);try{s()}finally{$n(!1)}}return l.memoizedState=[a,n],a}function ap(s,n,l){return l===void 0||(qn&1073741824)!==0&&($&261930)===0?s.memoizedState=n:(s.memoizedState=l,s=dr(),Q.lanes|=s,rl|=s,l)}function di(s,n,l,a){return sn(l,n)?l:ra.current!==null?(s=ap(s,l,a),sn(s,n)||(Cs=!0),s):(qn&42)===0||(qn&1073741824)!==0&&($&261930)===0?(Cs=!0,s.memoizedState=l):(s=dr(),Q.lanes|=s,rl|=s,n)}function Ei(s,n,l,a,e){var t=T.p;T.p=t!==0&&8>t?t:8;var F=v.T,p={};v.T=p,Fp(s,!1,n,l);try{var o=e(),d=v.S;if(d!==null&&d(p,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var x=Vy(o,a);ne(s,n,x,Fn(s))}else ne(s,n,a,Fn(s))}catch(C){ne(s,n,{then:function(){},status:"rejected",reason:C},Fn())}finally{T.p=t,F!==null&&p.types!==null&&(F.types=p.types),v.T=F}}function sf(){}function ep(s,n,l,a){if(s.tag!==5)throw Error(c(476));var e=hi(s).queue;Ei(s,e,n,q,l===null?sf:function(){return mi(s),l(a)})}function hi(s){var n=s.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:q},next:null};var l={};return n.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:l},next:null},s.memoizedState=n,s=s.alternate,s!==null&&(s.memoizedState=n),n}function mi(s){var n=hi(s);n.next===null&&(n=s.alternate.memoizedState),ne(s,n.next.queue,{},Fn())}function tp(){return zs(me)}function gi(){return vs().memoizedState}function xi(){return vs().memoizedState}function nf(s){for(var n=s.return;n!==null;){switch(n.tag){case 24:case 3:var l=Fn();s=tl(l);var a=Fl(n,s,l);a!==null&&(Ws(a,n,l),Wa(a,n,l)),n={cache:OF()},s.payload=n;return}n=n.return}}function lf(s,n,l){var a=Fn();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ot(s)?bi(n,l):(l=AF(s,n,l,a),l!==null&&(Ws(l,s,a),Ai(l,n,a)))}function vi(s,n,l){var a=Fn();ne(s,n,l,a)}function ne(s,n,l,a){var e={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(ot(s))bi(n,e);else{var t=s.alternate;if(s.lanes===0&&(t===null||t.lanes===0)&&(t=n.lastRenderedReducer,t!==null))try{var F=n.lastRenderedState,p=t(F,l);if(e.hasEagerState=!0,e.eagerState=p,sn(p,F))return we(s,n,e,0),ys===null&&Xe(),!1}catch{}if(l=AF(s,n,e,a),l!==null)return Ws(l,s,a),Ai(l,n,a),!0}return!1}function Fp(s,n,l,a){if(a={lane:2,revertLane:Up(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ot(s)){if(n)throw Error(c(479))}else n=AF(s,l,a,2),n!==null&&Ws(n,s,2)}function ot(s){var n=s.alternate;return s===Q||n!==null&&n===Q}function bi(s,n){ua=nt=!0;var l=s.pending;l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n}function Ai(s,n,l){if((l&4194048)!==0){var a=n.lanes;a&=s.pendingLanes,l|=a,n.lanes=l,jo(s,l)}}var le={readContext:zs,use:et,useCallback:hs,useContext:hs,useEffect:hs,useImperativeHandle:hs,useLayoutEffect:hs,useInsertionEffect:hs,useMemo:hs,useReducer:hs,useRef:hs,useState:hs,useDebugValue:hs,useDeferredValue:hs,useTransition:hs,useSyncExternalStore:hs,useId:hs,useHostTransitionStatus:hs,useFormState:hs,useActionState:hs,useOptimistic:hs,useMemoCache:hs,useCacheRefresh:hs};le.useEffectEvent=hs;var Ci={readContext:zs,use:et,useCallback:function(s,n){return qs().memoizedState=[s,n===void 0?null:n],s},useContext:zs,useEffect:pi,useImperativeHandle:function(s,n,l){l=l!=null?l.concat([s]):null,Ft(4194308,4,ri.bind(null,n,s),l)},useLayoutEffect:function(s,n){return Ft(4194308,4,s,n)},useInsertionEffect:function(s,n){Ft(4,2,s,n)},useMemo:function(s,n){var l=qs();n=n===void 0?null:n;var a=s();if(Ul){$n(!0);try{s()}finally{$n(!1)}}return l.memoizedState=[a,n],a},useReducer:function(s,n,l){var a=qs();if(l!==void 0){var e=l(n);if(Ul){$n(!0);try{l(n)}finally{$n(!1)}}}else e=n;return a.memoizedState=a.baseState=e,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:e},a.queue=s,s=s.dispatch=lf.bind(null,Q,s),[a.memoizedState,s]},useRef:function(s){var n=qs();return s={current:s},n.memoizedState=s},useState:function(s){s=IF(s);var n=s.queue,l=vi.bind(null,Q,n);return n.dispatch=l,[s.memoizedState,l]},useDebugValue:lp,useDeferredValue:function(s,n){var l=qs();return ap(l,s,n)},useTransition:function(){var s=IF(!1);return s=Ei.bind(null,Q,s.queue,!0,!1),qs().memoizedState=s,[!1,s]},useSyncExternalStore:function(s,n,l){var a=Q,e=qs();if(ss){if(l===void 0)throw Error(c(407));l=l()}else{if(l=n(),ys===null)throw Error(c(349));($&127)!==0||Qc(a,n,l)}e.memoizedState=l;var t={value:l,getSnapshot:n};return e.queue=t,pi(Kc.bind(null,a,t,s),[s]),a.flags|=2048,fa(9,{destroy:void 0},Zc.bind(null,a,t,l,n),null),l},useId:function(){var s=qs(),n=ys.identifierPrefix;if(ss){var l=jn,a=_n;l=(a&~(1<<32-Is(a)-1)).toString(32)+l,n="_"+n+"R_"+l,l=lt++,0<l&&(n+="H"+l.toString(32)),n+="_"}else l=Jy++,n="_"+n+"r_"+l.toString(32)+"_";return s.memoizedState=n},useHostTransitionStatus:tp,useFormState:li,useActionState:li,useOptimistic:function(s){var n=qs();n.memoizedState=n.baseState=s;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=l,n=Fp.bind(null,Q,!0,l),l.dispatch=n,[s,n]},useMemoCache:WF,useCacheRefresh:function(){return qs().memoizedState=nf.bind(null,Q)},useEffectEvent:function(s){var n=qs(),l={impl:s};return n.memoizedState=l,function(){if((as&2)!==0)throw Error(c(440));return l.impl.apply(void 0,arguments)}}},pp={readContext:zs,use:et,useCallback:yi,useContext:zs,useEffect:np,useImperativeHandle:ui,useInsertionEffect:ci,useLayoutEffect:ii,useMemo:fi,useReducer:tt,useRef:Fi,useState:function(){return tt(Xn)},useDebugValue:lp,useDeferredValue:function(s,n){var l=vs();return di(l,os.memoizedState,s,n)},useTransition:function(){var s=tt(Xn)[0],n=vs().memoizedState;return[typeof s=="boolean"?s:se(s),n]},useSyncExternalStore:Yc,useId:gi,useHostTransitionStatus:tp,useFormState:ai,useActionState:ai,useOptimistic:function(s,n){var l=vs();return Wc(l,os,s,n)},useMemoCache:WF,useCacheRefresh:xi};pp.useEffectEvent=oi;var Di={readContext:zs,use:et,useCallback:yi,useContext:zs,useEffect:np,useImperativeHandle:ui,useInsertionEffect:ci,useLayoutEffect:ii,useMemo:fi,useReducer:PF,useRef:Fi,useState:function(){return PF(Xn)},useDebugValue:lp,useDeferredValue:function(s,n){var l=vs();return os===null?ap(l,s,n):di(l,os.memoizedState,s,n)},useTransition:function(){var s=PF(Xn)[0],n=vs().memoizedState;return[typeof s=="boolean"?s:se(s),n]},useSyncExternalStore:Yc,useId:gi,useHostTransitionStatus:tp,useFormState:ti,useActionState:ti,useOptimistic:function(s,n){var l=vs();return os!==null?Wc(l,os,s,n):(l.baseState=s,[s,l.queue.dispatch])},useMemoCache:WF,useCacheRefresh:xi};Di.useEffectEvent=oi;function op(s,n,l,a){n=s.memoizedState,l=l(a,n),l=l==null?n:_({},n,l),s.memoizedState=l,s.lanes===0&&(s.updateQueue.baseState=l)}var cp={enqueueSetState:function(s,n,l){s=s._reactInternals;var a=Fn(),e=tl(a);e.payload=n,l!=null&&(e.callback=l),n=Fl(s,e,a),n!==null&&(Ws(n,s,a),Wa(n,s,a))},enqueueReplaceState:function(s,n,l){s=s._reactInternals;var a=Fn(),e=tl(a);e.tag=1,e.payload=n,l!=null&&(e.callback=l),n=Fl(s,e,a),n!==null&&(Ws(n,s,a),Wa(n,s,a))},enqueueForceUpdate:function(s,n){s=s._reactInternals;var l=Fn(),a=tl(l);a.tag=2,n!=null&&(a.callback=n),n=Fl(s,a,l),n!==null&&(Ws(n,s,l),Wa(n,s,l))}};function Si(s,n,l,a,e,t,F){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(a,t,F):n.prototype&&n.prototype.isPureReactComponent?!wa(l,a)||!wa(e,t):!0}function _i(s,n,l,a){s=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(l,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(l,a),n.state!==s&&cp.enqueueReplaceState(n,n.state,null)}function Ll(s,n){var l=n;if("ref"in n){l={};for(var a in n)a!=="ref"&&(l[a]=n[a])}if(s=s.defaultProps){l===n&&(l=_({},l));for(var e in s)l[e]===void 0&&(l[e]=s[e])}return l}function ji(s){qe(s)}function Ti(s){console.error(s)}function Mi(s){qe(s)}function ct(s,n){try{var l=s.onUncaughtError;l(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Ni(s,n,l){try{var a=s.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ip(s,n,l){return l=tl(l),l.tag=3,l.payload={element:null},l.callback=function(){ct(s,n)},l}function Hi(s){return s=tl(s),s.tag=3,s}function zi(s,n,l,a){var e=l.type.getDerivedStateFromError;if(typeof e=="function"){var t=a.value;s.payload=function(){return e(t)},s.callback=function(){Ni(n,l,a)}}var F=l.stateNode;F!==null&&typeof F.componentDidCatch=="function"&&(s.callback=function(){Ni(n,l,a),typeof e!="function"&&(ul===null?ul=new Set([this]):ul.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function af(s,n,l,a,e){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=l.alternate,n!==null&&Fa(n,l,e,!0),l=ln.current,l!==null){switch(l.tag){case 31:case 13:return En===null?vt():l.alternate===null&&ms===0&&(ms=3),l.flags&=-257,l.flags|=65536,l.lanes=e,a===We?l.flags|=16384:(n=l.updateQueue,n===null?l.updateQueue=new Set([a]):n.add(a),Rp(s,a,e)),!1;case 22:return l.flags|=65536,a===We?l.flags|=16384:(n=l.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=n):(l=n.retryQueue,l===null?n.retryQueue=new Set([a]):l.add(a)),Rp(s,a,e)),!1}throw Error(c(435,l.tag))}return Rp(s,a,e),vt(),!1}if(ss)return n=ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=e,a!==TF&&(s=Error(c(422),{cause:a}),Qa(un(s,l)))):(a!==TF&&(n=Error(c(423),{cause:a}),Qa(un(n,l))),s=s.current.alternate,s.flags|=65536,e&=-e,s.lanes|=e,a=un(a,l),e=ip(s.stateNode,a,e),qF(s,e),ms!==4&&(ms=2)),!1;var t=Error(c(520),{cause:a});if(t=un(t,l),ie===null?ie=[t]:ie.push(t),ms!==4&&(ms=2),n===null)return!0;a=un(a,l),l=n;do{switch(l.tag){case 3:return l.flags|=65536,s=e&-e,l.lanes|=s,s=ip(l.stateNode,a,s),qF(l,s),!1;case 1:if(n=l.type,t=l.stateNode,(l.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||t!==null&&typeof t.componentDidCatch=="function"&&(ul===null||!ul.has(t))))return l.flags|=65536,e&=-e,l.lanes|=e,e=Hi(e),zi(e,s,l,a),qF(l,e),!1}l=l.return}while(l!==null);return!1}var rp=Error(c(461)),Cs=!1;function Os(s,n,l,a){n.child=s===null?Bc(n,null,l,a):Bl(n,s.child,l,a)}function Oi(s,n,l,a,e){l=l.render;var t=n.ref;if("ref"in a){var F={};for(var p in a)p!=="ref"&&(F[p]=a[p])}else F=a;return zl(n),a=ZF(s,n,l,F,t,e),p=KF(),s!==null&&!Cs?(VF(s,n,e),wn(s,n,e)):(ss&&p&&_F(n),n.flags|=1,Os(s,n,a,e),n.child)}function Ri(s,n,l,a,e){if(s===null){var t=l.type;return typeof t=="function"&&!CF(t)&&t.defaultProps===void 0&&l.compare===null?(n.tag=15,n.type=t,Gi(s,n,t,a,e)):(s=Ye(l.type,null,a,n,n.mode,e),s.ref=n.ref,s.return=n,n.child=s)}if(t=s.child,!gp(s,e)){var F=t.memoizedProps;if(l=l.compare,l=l!==null?l:wa,l(F,a)&&s.ref===n.ref)return wn(s,n,e)}return n.flags|=1,s=Gn(t,a),s.ref=n.ref,s.return=n,n.child=s}function Gi(s,n,l,a,e){if(s!==null){var t=s.memoizedProps;if(wa(t,a)&&s.ref===n.ref)if(Cs=!1,n.pendingProps=a=t,gp(s,e))(s.flags&131072)!==0&&(Cs=!0);else return n.lanes=s.lanes,wn(s,n,e)}return up(s,n,l,a,e)}function Bi(s,n,l,a){var e=a.children,t=s!==null?s.memoizedState:null;if(s===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(t=t!==null?t.baseLanes|l:l,s!==null){for(a=n.child=s.child,e=0;a!==null;)e=e|a.lanes|a.childLanes,a=a.sibling;a=e&~t}else a=0,n.child=null;return Ui(s,n,t,l,a)}if((l&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},s!==null&&Ve(n,t!==null?t.cachePool:null),t!==null?qc(n,t):wF(),Xc(n);else return a=n.lanes=536870912,Ui(s,n,t!==null?t.baseLanes|l:l,l,a)}else t!==null?(Ve(n,t.cachePool),qc(n,t),ol(),n.memoizedState=null):(s!==null&&Ve(n,null),wF(),ol());return Os(s,n,e,l),n.child}function ae(s,n){return s!==null&&s.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ui(s,n,l,a,e){var t=GF();return t=t===null?null:{parent:bs._currentValue,pool:t},n.memoizedState={baseLanes:l,cachePool:t},s!==null&&Ve(n,null),wF(),Xc(n),s!==null&&Fa(s,n,a,!0),n.childLanes=e,null}function it(s,n){return n=ut({mode:n.mode,children:n.children},s.mode),n.ref=s.ref,s.child=n,n.return=s,n}function Li(s,n,l){return Bl(n,s.child,null,l),s=it(n,n.pendingProps),s.flags|=2,an(n),n.memoizedState=null,s}function ef(s,n,l){var a=n.pendingProps,e=(n.flags&128)!==0;if(n.flags&=-129,s===null){if(ss){if(a.mode==="hidden")return s=it(n,a),n.lanes=536870912,ae(null,s);if(YF(n),(s=fs)?(s=$r(s,dn),s=s!==null&&s.data==="&"?s:null,s!==null&&(n.memoizedState={dehydrated:s,treeContext:sl!==null?{id:_n,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},l=bc(s),l.return=n,n.child=l,Hs=n,fs=null)):s=null,s===null)throw ll(n);return n.lanes=536870912,null}return it(n,a)}var t=s.memoizedState;if(t!==null){var F=t.dehydrated;if(YF(n),e)if(n.flags&256)n.flags&=-257,n=Li(s,n,l);else if(n.memoizedState!==null)n.child=s.child,n.flags|=128,n=null;else throw Error(c(558));else if(Cs||Fa(s,n,l,!1),e=(l&s.childLanes)!==0,Cs||e){if(a=ys,a!==null&&(F=To(a,l),F!==0&&F!==t.retryLane))throw t.retryLane=F,Tl(s,F),Ws(a,s,F),rp;vt(),n=Li(s,n,l)}else s=t.treeContext,fs=hn(F.nextSibling),Hs=n,ss=!0,nl=null,dn=!1,s!==null&&Dc(n,s),n=it(n,a),n.flags|=4096;return n}return s=Gn(s.child,{mode:a.mode,children:a.children}),s.ref=n.ref,n.child=s,s.return=n,s}function rt(s,n){var l=n.ref;if(l===null)s!==null&&s.ref!==null&&(n.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(c(284));(s===null||s.ref!==l)&&(n.flags|=4194816)}}function up(s,n,l,a,e){return zl(n),l=ZF(s,n,l,a,void 0,e),a=KF(),s!==null&&!Cs?(VF(s,n,e),wn(s,n,e)):(ss&&a&&_F(n),n.flags|=1,Os(s,n,l,e),n.child)}function qi(s,n,l,a,e,t){return zl(n),n.updateQueue=null,l=kc(n,a,l,e),wc(s),a=KF(),s!==null&&!Cs?(VF(s,n,t),wn(s,n,t)):(ss&&a&&_F(n),n.flags|=1,Os(s,n,l,t),n.child)}function Xi(s,n,l,a,e){if(zl(n),n.stateNode===null){var t=la,F=l.contextType;typeof F=="object"&&F!==null&&(t=zs(F)),t=new l(a,t),n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cp,n.stateNode=t,t._reactInternals=n,t=n.stateNode,t.props=a,t.state=n.memoizedState,t.refs={},UF(n),F=l.contextType,t.context=typeof F=="object"&&F!==null?zs(F):la,t.state=n.memoizedState,F=l.getDerivedStateFromProps,typeof F=="function"&&(op(n,l,F,a),t.state=n.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(F=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),F!==t.state&&cp.enqueueReplaceState(t,t.state,null),Pa(n,a,t,e),$a(),t.state=n.memoizedState),typeof t.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(s===null){t=n.stateNode;var p=n.memoizedProps,o=Ll(l,p);t.props=o;var d=t.context,x=l.contextType;F=la,typeof x=="object"&&x!==null&&(F=zs(x));var C=l.getDerivedStateFromProps;x=typeof C=="function"||typeof t.getSnapshotBeforeUpdate=="function",p=n.pendingProps!==p,x||typeof t.UNSAFE_componentWillReceiveProps!="function"&&typeof t.componentWillReceiveProps!="function"||(p||d!==F)&&_i(n,t,a,F),el=!1;var E=n.memoizedState;t.state=E,Pa(n,a,t,e),$a(),d=n.memoizedState,p||E!==d||el?(typeof C=="function"&&(op(n,l,C,a),d=n.memoizedState),(o=el||Si(n,l,o,a,E,d,F))?(x||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount()),typeof t.componentDidMount=="function"&&(n.flags|=4194308)):(typeof t.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),t.props=a,t.state=d,t.context=F,a=o):(typeof t.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{t=n.stateNode,LF(s,n),F=n.memoizedProps,x=Ll(l,F),t.props=x,C=n.pendingProps,E=t.context,d=l.contextType,o=la,typeof d=="object"&&d!==null&&(o=zs(d)),p=l.getDerivedStateFromProps,(d=typeof p=="function"||typeof t.getSnapshotBeforeUpdate=="function")||typeof t.UNSAFE_componentWillReceiveProps!="function"&&typeof t.componentWillReceiveProps!="function"||(F!==C||E!==o)&&_i(n,t,a,o),el=!1,E=n.memoizedState,t.state=E,Pa(n,a,t,e),$a();var h=n.memoizedState;F!==C||E!==h||el||s!==null&&s.dependencies!==null&&Ze(s.dependencies)?(typeof p=="function"&&(op(n,l,p,a),h=n.memoizedState),(x=el||Si(n,l,x,a,E,h,o)||s!==null&&s.dependencies!==null&&Ze(s.dependencies))?(d||typeof t.UNSAFE_componentWillUpdate!="function"&&typeof t.componentWillUpdate!="function"||(typeof t.componentWillUpdate=="function"&&t.componentWillUpdate(a,h,o),typeof t.UNSAFE_componentWillUpdate=="function"&&t.UNSAFE_componentWillUpdate(a,h,o)),typeof t.componentDidUpdate=="function"&&(n.flags|=4),typeof t.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof t.componentDidUpdate!="function"||F===s.memoizedProps&&E===s.memoizedState||(n.flags|=4),typeof t.getSnapshotBeforeUpdate!="function"||F===s.memoizedProps&&E===s.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=h),t.props=a,t.state=h,t.context=o,a=x):(typeof t.componentDidUpdate!="function"||F===s.memoizedProps&&E===s.memoizedState||(n.flags|=4),typeof t.getSnapshotBeforeUpdate!="function"||F===s.memoizedProps&&E===s.memoizedState||(n.flags|=1024),a=!1)}return t=a,rt(s,n),a=(n.flags&128)!==0,t||a?(t=n.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:t.render(),n.flags|=1,s!==null&&a?(n.child=Bl(n,s.child,null,e),n.child=Bl(n,null,l,e)):Os(s,n,l,e),n.memoizedState=t.state,s=n.child):s=wn(s,n,e),s}function wi(s,n,l,a){return Nl(),n.flags|=256,Os(s,n,l,a),n.child}var yp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fp(s){return{baseLanes:s,cachePool:Nc()}}function dp(s,n,l){return s=s!==null?s.childLanes&~l:0,n&&(s|=tn),s}function ki(s,n,l){var a=n.pendingProps,e=!1,t=(n.flags&128)!==0,F;if((F=t)||(F=s!==null&&s.memoizedState===null?!1:(xs.current&2)!==0),F&&(e=!0,n.flags&=-129),F=(n.flags&32)!==0,n.flags&=-33,s===null){if(ss){if(e?pl(n):ol(),(s=fs)?(s=$r(s,dn),s=s!==null&&s.data!=="&"?s:null,s!==null&&(n.memoizedState={dehydrated:s,treeContext:sl!==null?{id:_n,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},l=bc(s),l.return=n,n.child=l,Hs=n,fs=null)):s=null,s===null)throw ll(n);return $p(s)?n.lanes=32:n.lanes=536870912,null}var p=a.children;return a=a.fallback,e?(ol(),e=n.mode,p=ut({mode:"hidden",children:p},e),a=Ml(a,e,l,null),p.return=n,a.return=n,p.sibling=a,n.child=p,a=n.child,a.memoizedState=fp(l),a.childLanes=dp(s,F,l),n.memoizedState=yp,ae(null,a)):(pl(n),Ep(n,p))}var o=s.memoizedState;if(o!==null&&(p=o.dehydrated,p!==null)){if(t)n.flags&256?(pl(n),n.flags&=-257,n=hp(s,n,l)):n.memoizedState!==null?(ol(),n.child=s.child,n.flags|=128,n=null):(ol(),p=a.fallback,e=n.mode,a=ut({mode:"visible",children:a.children},e),p=Ml(p,e,l,null),p.flags|=2,a.return=n,p.return=n,a.sibling=p,n.child=a,Bl(n,s.child,null,l),a=n.child,a.memoizedState=fp(l),a.childLanes=dp(s,F,l),n.memoizedState=yp,n=ae(null,a));else if(pl(n),$p(p)){if(F=p.nextSibling&&p.nextSibling.dataset,F)var d=F.dgst;F=d,a=Error(c(419)),a.stack="",a.digest=F,Qa({value:a,source:null,stack:null}),n=hp(s,n,l)}else if(Cs||Fa(s,n,l,!1),F=(l&s.childLanes)!==0,Cs||F){if(F=ys,F!==null&&(a=To(F,l),a!==0&&a!==o.retryLane))throw o.retryLane=a,Tl(s,a),Ws(F,s,a),rp;Wp(p)||vt(),n=hp(s,n,l)}else Wp(p)?(n.flags|=192,n.child=s.child,n=null):(s=o.treeContext,fs=hn(p.nextSibling),Hs=n,ss=!0,nl=null,dn=!1,s!==null&&Dc(n,s),n=Ep(n,a.children),n.flags|=4096);return n}return e?(ol(),p=a.fallback,e=n.mode,o=s.child,d=o.sibling,a=Gn(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,d!==null?p=Gn(d,p):(p=Ml(p,e,l,null),p.flags|=2),p.return=n,a.return=n,a.sibling=p,n.child=a,ae(null,a),a=n.child,p=s.child.memoizedState,p===null?p=fp(l):(e=p.cachePool,e!==null?(o=bs._currentValue,e=e.parent!==o?{parent:o,pool:o}:e):e=Nc(),p={baseLanes:p.baseLanes|l,cachePool:e}),a.memoizedState=p,a.childLanes=dp(s,F,l),n.memoizedState=yp,ae(s.child,a)):(pl(n),l=s.child,s=l.sibling,l=Gn(l,{mode:"visible",children:a.children}),l.return=n,l.sibling=null,s!==null&&(F=n.deletions,F===null?(n.deletions=[s],n.flags|=16):F.push(s)),n.child=l,n.memoizedState=null,l)}function Ep(s,n){return n=ut({mode:"visible",children:n},s.mode),n.return=s,s.child=n}function ut(s,n){return s=nn(22,s,null,n),s.lanes=0,s}function hp(s,n,l){return Bl(n,s.child,null,l),s=Ep(n,n.pendingProps.children),s.flags|=2,n.memoizedState=null,s}function Yi(s,n,l){s.lanes|=n;var a=s.alternate;a!==null&&(a.lanes|=n),HF(s.return,n,l)}function mp(s,n,l,a,e,t){var F=s.memoizedState;F===null?s.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:e,treeForkCount:t}:(F.isBackwards=n,F.rendering=null,F.renderingStartTime=0,F.last=a,F.tail=l,F.tailMode=e,F.treeForkCount=t)}function Qi(s,n,l){var a=n.pendingProps,e=a.revealOrder,t=a.tail;a=a.children;var F=xs.current,p=(F&2)!==0;if(p?(F=F&1|2,n.flags|=128):F&=1,M(xs,F),Os(s,n,a,l),a=ss?Ya:0,!p&&s!==null&&(s.flags&128)!==0)s:for(s=n.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Yi(s,l,n);else if(s.tag===19)Yi(s,l,n);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break s;for(;s.sibling===null;){if(s.return===null||s.return===n)break s;s=s.return}s.sibling.return=s.return,s=s.sibling}switch(e){case"forwards":for(l=n.child,e=null;l!==null;)s=l.alternate,s!==null&&st(s)===null&&(e=l),l=l.sibling;l=e,l===null?(e=n.child,n.child=null):(e=l.sibling,l.sibling=null),mp(n,!1,e,l,t,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,e=n.child,n.child=null;e!==null;){if(s=e.alternate,s!==null&&st(s)===null){n.child=e;break}s=e.sibling,e.sibling=l,l=e,e=s}mp(n,!0,l,null,t,a);break;case"together":mp(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function wn(s,n,l){if(s!==null&&(n.dependencies=s.dependencies),rl|=n.lanes,(l&n.childLanes)===0)if(s!==null){if(Fa(s,n,l,!1),(l&n.childLanes)===0)return null}else return null;if(s!==null&&n.child!==s.child)throw Error(c(153));if(n.child!==null){for(s=n.child,l=Gn(s,s.pendingProps),n.child=l,l.return=n;s.sibling!==null;)s=s.sibling,l=l.sibling=Gn(s,s.pendingProps),l.return=n;l.sibling=null}return n.child}function gp(s,n){return(s.lanes&n)!==0?!0:(s=s.dependencies,!!(s!==null&&Ze(s)))}function tf(s,n,l){switch(n.tag){case 3:Ls(n,n.stateNode.containerInfo),al(n,bs,s.memoizedState.cache),Nl();break;case 27:case 5:Ta(n);break;case 4:Ls(n,n.stateNode.containerInfo);break;case 10:al(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,YF(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(pl(n),n.flags|=128,null):(l&n.child.childLanes)!==0?ki(s,n,l):(pl(n),s=wn(s,n,l),s!==null?s.sibling:null);pl(n);break;case 19:var e=(s.flags&128)!==0;if(a=(l&n.childLanes)!==0,a||(Fa(s,n,l,!1),a=(l&n.childLanes)!==0),e){if(a)return Qi(s,n,l);n.flags|=128}if(e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),M(xs,xs.current),a)break;return null;case 22:return n.lanes=0,Bi(s,n,l,n.pendingProps);case 24:al(n,bs,s.memoizedState.cache)}return wn(s,n,l)}function Zi(s,n,l){if(s!==null)if(s.memoizedProps!==n.pendingProps)Cs=!0;else{if(!gp(s,l)&&(n.flags&128)===0)return Cs=!1,tf(s,n,l);Cs=(s.flags&131072)!==0}else Cs=!1,ss&&(n.flags&1048576)!==0&&Cc(n,Ya,n.index);switch(n.lanes=0,n.tag){case 16:s:{var a=n.pendingProps;if(s=Rl(n.elementType),n.type=s,typeof s=="function")CF(s)?(a=Ll(s,a),n.tag=1,n=Xi(null,n,s,a,l)):(n.tag=0,n=up(null,n,s,a,l));else{if(s!=null){var e=s.$$typeof;if(e===pn){n.tag=11,n=Oi(null,n,s,a,l);break s}else if(e===I){n.tag=14,n=Ri(null,n,s,a,l);break s}}throw n=Hn(s)||s,Error(c(306,n,""))}}return n;case 0:return up(s,n,n.type,n.pendingProps,l);case 1:return a=n.type,e=Ll(a,n.pendingProps),Xi(s,n,a,e,l);case 3:s:{if(Ls(n,n.stateNode.containerInfo),s===null)throw Error(c(387));a=n.pendingProps;var t=n.memoizedState;e=t.element,LF(s,n),Pa(n,a,null,l);var F=n.memoizedState;if(a=F.cache,al(n,bs,a),a!==t.cache&&zF(n,[bs],l,!0),$a(),a=F.element,t.isDehydrated)if(t={element:a,isDehydrated:!1,cache:F.cache},n.updateQueue.baseState=t,n.memoizedState=t,n.flags&256){n=wi(s,n,a,l);break s}else if(a!==e){e=un(Error(c(424)),n),Qa(e),n=wi(s,n,a,l);break s}else for(s=n.stateNode.containerInfo,s.nodeType===9?s=s.body:s=s.nodeName==="HTML"?s.ownerDocument.body:s,fs=hn(s.firstChild),Hs=n,ss=!0,nl=null,dn=!0,l=Bc(n,null,a,l),n.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Nl(),a===e){n=wn(s,n,l);break s}Os(s,n,a,l)}n=n.child}return n;case 26:return rt(s,n),s===null?(l=au(n.type,null,n.pendingProps,null))?n.memoizedState=l:ss||(l=n.type,s=n.pendingProps,a=jt(V.current).createElement(l),a[Ns]=n,a[Ys]=s,Rs(a,l,s),Ts(a),n.stateNode=a):n.memoizedState=au(n.type,s.memoizedProps,n.pendingProps,s.memoizedState),null;case 27:return Ta(n),s===null&&ss&&(a=n.stateNode=su(n.type,n.pendingProps,V.current),Hs=n,dn=!0,e=fs,El(n.type)?(Pp=e,fs=hn(a.firstChild)):fs=e),Os(s,n,n.pendingProps.children,l),rt(s,n),s===null&&(n.flags|=4194304),n.child;case 5:return s===null&&ss&&((e=a=fs)&&(a=Gf(a,n.type,n.pendingProps,dn),a!==null?(n.stateNode=a,Hs=n,fs=hn(a.firstChild),dn=!1,e=!0):e=!1),e||ll(n)),Ta(n),e=n.type,t=n.pendingProps,F=s!==null?s.memoizedProps:null,a=t.children,Kp(e,t)?a=null:F!==null&&Kp(e,F)&&(n.flags|=32),n.memoizedState!==null&&(e=ZF(s,n,Wy,null,null,l),me._currentValue=e),rt(s,n),Os(s,n,a,l),n.child;case 6:return s===null&&ss&&((s=l=fs)&&(l=Bf(l,n.pendingProps,dn),l!==null?(n.stateNode=l,Hs=n,fs=null,s=!0):s=!1),s||ll(n)),null;case 13:return ki(s,n,l);case 4:return Ls(n,n.stateNode.containerInfo),a=n.pendingProps,s===null?n.child=Bl(n,null,a,l):Os(s,n,a,l),n.child;case 11:return Oi(s,n,n.type,n.pendingProps,l);case 7:return Os(s,n,n.pendingProps,l),n.child;case 8:return Os(s,n,n.pendingProps.children,l),n.child;case 12:return Os(s,n,n.pendingProps.children,l),n.child;case 10:return a=n.pendingProps,al(n,n.type,a.value),Os(s,n,a.children,l),n.child;case 9:return e=n.type._context,a=n.pendingProps.children,zl(n),e=zs(e),a=a(e),n.flags|=1,Os(s,n,a,l),n.child;case 14:return Ri(s,n,n.type,n.pendingProps,l);case 15:return Gi(s,n,n.type,n.pendingProps,l);case 19:return Qi(s,n,l);case 31:return ef(s,n,l);case 22:return Bi(s,n,l,n.pendingProps);case 24:return zl(n),a=zs(bs),s===null?(e=GF(),e===null&&(e=ys,t=OF(),e.pooledCache=t,t.refCount++,t!==null&&(e.pooledCacheLanes|=l),e=t),n.memoizedState={parent:a,cache:e},UF(n),al(n,bs,e)):((s.lanes&l)!==0&&(LF(s,n),Pa(n,null,null,l),$a()),e=s.memoizedState,t=n.memoizedState,e.parent!==a?(e={parent:a,cache:a},n.memoizedState=e,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=e),al(n,bs,a)):(a=t.cache,al(n,bs,a),a!==e.cache&&zF(n,[bs],l,!0))),Os(s,n,n.pendingProps.children,l),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function kn(s){s.flags|=4}function xp(s,n,l,a,e){if((n=(s.mode&32)!==0)&&(n=!1),n){if(s.flags|=16777216,(e&335544128)===e)if(s.stateNode.complete)s.flags|=8192;else if(gr())s.flags|=8192;else throw Gl=We,BF}else s.flags&=-16777217}function Ki(s,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)s.flags&=-16777217;else if(s.flags|=16777216,!ou(n))if(gr())s.flags|=8192;else throw Gl=We,BF}function yt(s,n){n!==null&&(s.flags|=4),s.flags&16384&&(n=s.tag!==22?So():536870912,s.lanes|=n,ma|=n)}function ee(s,n){if(!ss)switch(s.tailMode){case"hidden":n=s.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?s.tail=null:l.sibling=null;break;case"collapsed":l=s.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?n||s.tail===null?s.tail=null:s.tail.sibling=null:a.sibling=null}}function ds(s){var n=s.alternate!==null&&s.alternate.child===s.child,l=0,a=0;if(n)for(var e=s.child;e!==null;)l|=e.lanes|e.childLanes,a|=e.subtreeFlags&65011712,a|=e.flags&65011712,e.return=s,e=e.sibling;else for(e=s.child;e!==null;)l|=e.lanes|e.childLanes,a|=e.subtreeFlags,a|=e.flags,e.return=s,e=e.sibling;return s.subtreeFlags|=a,s.childLanes=l,n}function Ff(s,n,l){var a=n.pendingProps;switch(jF(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ds(n),null;case 1:return ds(n),null;case 3:return l=n.stateNode,a=null,s!==null&&(a=s.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ln(bs),gs(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(s===null||s.child===null)&&(ta(n)?kn(n):s===null||s.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,MF())),ds(n),null;case 26:var e=n.type,t=n.memoizedState;return s===null?(kn(n),t!==null?(ds(n),Ki(n,t)):(ds(n),xp(n,e,null,a,l))):t?t!==s.memoizedState?(kn(n),ds(n),Ki(n,t)):(ds(n),n.flags&=-16777217):(s=s.memoizedProps,s!==a&&kn(n),ds(n),xp(n,e,s,a,l)),null;case 27:if(Ce(n),l=V.current,e=n.type,s!==null&&n.stateNode!=null)s.memoizedProps!==a&&kn(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return ds(n),null}s=O.current,ta(n)?Sc(n):(s=su(e,a,l),n.stateNode=s,kn(n))}return ds(n),null;case 5:if(Ce(n),e=n.type,s!==null&&n.stateNode!=null)s.memoizedProps!==a&&kn(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return ds(n),null}if(t=O.current,ta(n))Sc(n);else{var F=jt(V.current);switch(t){case 1:t=F.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=F.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=F.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=F.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=F.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?F.createElement("select",{is:a.is}):F.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?F.createElement(e,{is:a.is}):F.createElement(e)}}t[Ns]=n,t[Ys]=a;s:for(F=n.child;F!==null;){if(F.tag===5||F.tag===6)t.appendChild(F.stateNode);else if(F.tag!==4&&F.tag!==27&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===n)break s;for(;F.sibling===null;){if(F.return===null||F.return===n)break s;F=F.return}F.sibling.return=F.return,F=F.sibling}n.stateNode=t;s:switch(Rs(t,e,a),e){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break s;case"img":a=!0;break s;default:a=!1}a&&kn(n)}}return ds(n),xp(n,n.type,s===null?null:s.memoizedProps,n.pendingProps,l),null;case 6:if(s&&n.stateNode!=null)s.memoizedProps!==a&&kn(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(s=V.current,ta(n)){if(s=n.stateNode,l=n.memoizedProps,a=null,e=Hs,e!==null)switch(e.tag){case 27:case 5:a=e.memoizedProps}s[Ns]=n,s=!!(s.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||kr(s.nodeValue,l)),s||ll(n,!0)}else s=jt(s).createTextNode(a),s[Ns]=n,n.stateNode=s}return ds(n),null;case 31:if(l=n.memoizedState,s===null||s.memoizedState!==null){if(a=ta(n),l!==null){if(s===null){if(!a)throw Error(c(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(c(557));s[Ns]=n}else Nl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ds(n),s=!1}else l=MF(),s!==null&&s.memoizedState!==null&&(s.memoizedState.hydrationErrors=l),s=!0;if(!s)return n.flags&256?(an(n),n):(an(n),null);if((n.flags&128)!==0)throw Error(c(558))}return ds(n),null;case 13:if(a=n.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(e=ta(n),a!==null&&a.dehydrated!==null){if(s===null){if(!e)throw Error(c(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e[Ns]=n}else Nl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ds(n),e=!1}else e=MF(),s!==null&&s.memoizedState!==null&&(s.memoizedState.hydrationErrors=e),e=!0;if(!e)return n.flags&256?(an(n),n):(an(n),null)}return an(n),(n.flags&128)!==0?(n.lanes=l,n):(l=a!==null,s=s!==null&&s.memoizedState!==null,l&&(a=n.child,e=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(e=a.alternate.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==e&&(a.flags|=2048)),l!==s&&l&&(n.child.flags|=8192),yt(n,n.updateQueue),ds(n),null);case 4:return gs(),s===null&&wp(n.stateNode.containerInfo),ds(n),null;case 10:return Ln(n.type),ds(n),null;case 19:if(D(xs),a=n.memoizedState,a===null)return ds(n),null;if(e=(n.flags&128)!==0,t=a.rendering,t===null)if(e)ee(a,!1);else{if(ms!==0||s!==null&&(s.flags&128)!==0)for(s=n.child;s!==null;){if(t=st(s),t!==null){for(n.flags|=128,ee(a,!1),s=t.updateQueue,n.updateQueue=s,yt(n,s),n.subtreeFlags=0,s=l,l=n.child;l!==null;)vc(l,s),l=l.sibling;return M(xs,xs.current&1|2),ss&&Bn(n,a.treeForkCount),n.child}s=s.sibling}a.tail!==null&&$s()>mt&&(n.flags|=128,e=!0,ee(a,!1),n.lanes=4194304)}else{if(!e)if(s=st(t),s!==null){if(n.flags|=128,e=!0,s=s.updateQueue,n.updateQueue=s,yt(n,s),ee(a,!0),a.tail===null&&a.tailMode==="hidden"&&!t.alternate&&!ss)return ds(n),null}else 2*$s()-a.renderingStartTime>mt&&l!==536870912&&(n.flags|=128,e=!0,ee(a,!1),n.lanes=4194304);a.isBackwards?(t.sibling=n.child,n.child=t):(s=a.last,s!==null?s.sibling=t:n.child=t,a.last=t)}return a.tail!==null?(s=a.tail,a.rendering=s,a.tail=s.sibling,a.renderingStartTime=$s(),s.sibling=null,l=xs.current,M(xs,e?l&1|2:l&1),ss&&Bn(n,a.treeForkCount),s):(ds(n),null);case 22:case 23:return an(n),kF(),a=n.memoizedState!==null,s!==null?s.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(l&536870912)!==0&&(n.flags&128)===0&&(ds(n),n.subtreeFlags&6&&(n.flags|=8192)):ds(n),l=n.updateQueue,l!==null&&yt(n,l.retryQueue),l=null,s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==l&&(n.flags|=2048),s!==null&&D(Ol),null;case 24:return l=null,s!==null&&(l=s.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Ln(bs),ds(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function pf(s,n){switch(jF(n),n.tag){case 1:return s=n.flags,s&65536?(n.flags=s&-65537|128,n):null;case 3:return Ln(bs),gs(),s=n.flags,(s&65536)!==0&&(s&128)===0?(n.flags=s&-65537|128,n):null;case 26:case 27:case 5:return Ce(n),null;case 31:if(n.memoizedState!==null){if(an(n),n.alternate===null)throw Error(c(340));Nl()}return s=n.flags,s&65536?(n.flags=s&-65537|128,n):null;case 13:if(an(n),s=n.memoizedState,s!==null&&s.dehydrated!==null){if(n.alternate===null)throw Error(c(340));Nl()}return s=n.flags,s&65536?(n.flags=s&-65537|128,n):null;case 19:return D(xs),null;case 4:return gs(),null;case 10:return Ln(n.type),null;case 22:case 23:return an(n),kF(),s!==null&&D(Ol),s=n.flags,s&65536?(n.flags=s&-65537|128,n):null;case 24:return Ln(bs),null;case 25:return null;default:return null}}function Vi(s,n){switch(jF(n),n.tag){case 3:Ln(bs),gs();break;case 26:case 27:case 5:Ce(n);break;case 4:gs();break;case 31:n.memoizedState!==null&&an(n);break;case 13:an(n);break;case 19:D(xs);break;case 10:Ln(n.type);break;case 22:case 23:an(n),kF(),s!==null&&D(Ol);break;case 24:Ln(bs)}}function te(s,n){try{var l=n.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var e=a.next;l=e;do{if((l.tag&s)===s){a=void 0;var t=l.create,F=l.inst;a=t(),F.destroy=a}l=l.next}while(l!==e)}}catch(p){Fs(n,n.return,p)}}function cl(s,n,l){try{var a=n.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var t=e.next;a=t;do{if((a.tag&s)===s){var F=a.inst,p=F.destroy;if(p!==void 0){F.destroy=void 0,e=n;var o=l,d=p;try{d()}catch(x){Fs(e,o,x)}}}a=a.next}while(a!==t)}}catch(x){Fs(n,n.return,x)}}function Ji(s){var n=s.updateQueue;if(n!==null){var l=s.stateNode;try{Lc(n,l)}catch(a){Fs(s,s.return,a)}}}function Wi(s,n,l){l.props=Ll(s.type,s.memoizedProps),l.state=s.memoizedState;try{l.componentWillUnmount()}catch(a){Fs(s,n,a)}}function Fe(s,n){try{var l=s.ref;if(l!==null){switch(s.tag){case 26:case 27:case 5:var a=s.stateNode;break;case 30:a=s.stateNode;break;default:a=s.stateNode}typeof l=="function"?s.refCleanup=l(a):l.current=a}}catch(e){Fs(s,n,e)}}function Tn(s,n){var l=s.ref,a=s.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(e){Fs(s,n,e)}finally{s.refCleanup=null,s=s.alternate,s!=null&&(s.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(e){Fs(s,n,e)}else l.current=null}function $i(s){var n=s.type,l=s.memoizedProps,a=s.stateNode;try{s:switch(n){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break s;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(e){Fs(s,s.return,e)}}function vp(s,n,l){try{var a=s.stateNode;Mf(a,s.type,l,n),a[Ys]=n}catch(e){Fs(s,s.return,e)}}function Pi(s){return s.tag===5||s.tag===3||s.tag===26||s.tag===27&&El(s.type)||s.tag===4}function bp(s){s:for(;;){for(;s.sibling===null;){if(s.return===null||Pi(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.tag===27&&El(s.type)||s.flags&2||s.child===null||s.tag===4)continue s;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Ap(s,n,l){var a=s.tag;if(a===5||a===6)s=s.stateNode,n?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(s,n):(n=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,n.appendChild(s),l=l._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=On));else if(a!==4&&(a===27&&El(s.type)&&(l=s.stateNode,n=null),s=s.child,s!==null))for(Ap(s,n,l),s=s.sibling;s!==null;)Ap(s,n,l),s=s.sibling}function ft(s,n,l){var a=s.tag;if(a===5||a===6)s=s.stateNode,n?l.insertBefore(s,n):l.appendChild(s);else if(a!==4&&(a===27&&El(s.type)&&(l=s.stateNode),s=s.child,s!==null))for(ft(s,n,l),s=s.sibling;s!==null;)ft(s,n,l),s=s.sibling}function Ii(s){var n=s.stateNode,l=s.memoizedProps;try{for(var a=s.type,e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Rs(n,a,l),n[Ns]=s,n[Ys]=l}catch(t){Fs(s,s.return,t)}}var Yn=!1,Ds=!1,Cp=!1,sr=typeof WeakSet=="function"?WeakSet:Set,Ms=null;function of(s,n){if(s=s.containerInfo,Qp=Rt,s=uc(s),hF(s)){if("selectionStart"in s)var l={start:s.selectionStart,end:s.selectionEnd};else s:{l=(l=s.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var e=a.anchorOffset,t=a.focusNode;a=a.focusOffset;try{l.nodeType,t.nodeType}catch{l=null;break s}var F=0,p=-1,o=-1,d=0,x=0,C=s,E=null;n:for(;;){for(var h;C!==l||e!==0&&C.nodeType!==3||(p=F+e),C!==t||a!==0&&C.nodeType!==3||(o=F+a),C.nodeType===3&&(F+=C.nodeValue.length),(h=C.firstChild)!==null;)E=C,C=h;for(;;){if(C===s)break n;if(E===l&&++d===e&&(p=F),E===t&&++x===a&&(o=F),(h=C.nextSibling)!==null)break;C=E,E=C.parentNode}C=h}l=p===-1||o===-1?null:{start:p,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Zp={focusedElem:s,selectionRange:l},Rt=!1,Ms=n;Ms!==null;)if(n=Ms,s=n.child,(n.subtreeFlags&1028)!==0&&s!==null)s.return=n,Ms=s;else for(;Ms!==null;){switch(n=Ms,t=n.alternate,s=n.flags,n.tag){case 0:if((s&4)!==0&&(s=n.updateQueue,s=s!==null?s.events:null,s!==null))for(l=0;l<s.length;l++)e=s[l],e.ref.impl=e.nextImpl;break;case 11:case 15:break;case 1:if((s&1024)!==0&&t!==null){s=void 0,l=n,e=t.memoizedProps,t=t.memoizedState,a=l.stateNode;try{var z=Ll(l.type,e);s=a.getSnapshotBeforeUpdate(z,t),a.__reactInternalSnapshotBeforeUpdate=s}catch(U){Fs(l,l.return,U)}}break;case 3:if((s&1024)!==0){if(s=n.stateNode.containerInfo,l=s.nodeType,l===9)Jp(s);else if(l===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Jp(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((s&1024)!==0)throw Error(c(163))}if(s=n.sibling,s!==null){s.return=n.return,Ms=s;break}Ms=n.return}}function nr(s,n,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Zn(s,l),a&4&&te(5,l);break;case 1:if(Zn(s,l),a&4)if(s=l.stateNode,n===null)try{s.componentDidMount()}catch(F){Fs(l,l.return,F)}else{var e=Ll(l.type,n.memoizedProps);n=n.memoizedState;try{s.componentDidUpdate(e,n,s.__reactInternalSnapshotBeforeUpdate)}catch(F){Fs(l,l.return,F)}}a&64&&Ji(l),a&512&&Fe(l,l.return);break;case 3:if(Zn(s,l),a&64&&(s=l.updateQueue,s!==null)){if(n=null,l.child!==null)switch(l.child.tag){case 27:case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}try{Lc(s,n)}catch(F){Fs(l,l.return,F)}}break;case 27:n===null&&a&4&&Ii(l);case 26:case 5:Zn(s,l),n===null&&a&4&&$i(l),a&512&&Fe(l,l.return);break;case 12:Zn(s,l);break;case 31:Zn(s,l),a&4&&er(s,l);break;case 13:Zn(s,l),a&4&&tr(s,l),a&64&&(s=l.memoizedState,s!==null&&(s=s.dehydrated,s!==null&&(l=mf.bind(null,l),Uf(s,l))));break;case 22:if(a=l.memoizedState!==null||Yn,!a){n=n!==null&&n.memoizedState!==null||Ds,e=Yn;var t=Ds;Yn=a,(Ds=n)&&!t?Kn(s,l,(l.subtreeFlags&8772)!==0):Zn(s,l),Yn=e,Ds=t}break;case 30:break;default:Zn(s,l)}}function lr(s){var n=s.alternate;n!==null&&(s.alternate=null,lr(n)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(n=s.stateNode,n!==null&&sF(n)),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}var Es=null,Zs=!1;function Qn(s,n,l){for(l=l.child;l!==null;)ar(s,n,l),l=l.sibling}function ar(s,n,l){if(Ps&&typeof Ps.onCommitFiberUnmount=="function")try{Ps.onCommitFiberUnmount(Ma,l)}catch{}switch(l.tag){case 26:Ds||Tn(l,n),Qn(s,n,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ds||Tn(l,n);var a=Es,e=Zs;El(l.type)&&(Es=l.stateNode,Zs=!1),Qn(s,n,l),de(l.stateNode),Es=a,Zs=e;break;case 5:Ds||Tn(l,n);case 6:if(a=Es,e=Zs,Es=null,Qn(s,n,l),Es=a,Zs=e,Es!==null)if(Zs)try{(Es.nodeType===9?Es.body:Es.nodeName==="HTML"?Es.ownerDocument.body:Es).removeChild(l.stateNode)}catch(t){Fs(l,n,t)}else try{Es.removeChild(l.stateNode)}catch(t){Fs(l,n,t)}break;case 18:Es!==null&&(Zs?(s=Es,Jr(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,l.stateNode),Sa(s)):Jr(Es,l.stateNode));break;case 4:a=Es,e=Zs,Es=l.stateNode.containerInfo,Zs=!0,Qn(s,n,l),Es=a,Zs=e;break;case 0:case 11:case 14:case 15:cl(2,l,n),Ds||cl(4,l,n),Qn(s,n,l);break;case 1:Ds||(Tn(l,n),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Wi(l,n,a)),Qn(s,n,l);break;case 21:Qn(s,n,l);break;case 22:Ds=(a=Ds)||l.memoizedState!==null,Qn(s,n,l),Ds=a;break;default:Qn(s,n,l)}}function er(s,n){if(n.memoizedState===null&&(s=n.alternate,s!==null&&(s=s.memoizedState,s!==null))){s=s.dehydrated;try{Sa(s)}catch(l){Fs(n,n.return,l)}}}function tr(s,n){if(n.memoizedState===null&&(s=n.alternate,s!==null&&(s=s.memoizedState,s!==null&&(s=s.dehydrated,s!==null))))try{Sa(s)}catch(l){Fs(n,n.return,l)}}function cf(s){switch(s.tag){case 31:case 13:case 19:var n=s.stateNode;return n===null&&(n=s.stateNode=new sr),n;case 22:return s=s.stateNode,n=s._retryCache,n===null&&(n=s._retryCache=new sr),n;default:throw Error(c(435,s.tag))}}function dt(s,n){var l=cf(s);n.forEach(function(a){if(!l.has(a)){l.add(a);var e=gf.bind(null,s,a);a.then(e,e)}})}function Ks(s,n){var l=n.deletions;if(l!==null)for(var a=0;a<l.length;a++){var e=l[a],t=s,F=n,p=F;s:for(;p!==null;){switch(p.tag){case 27:if(El(p.type)){Es=p.stateNode,Zs=!1;break s}break;case 5:Es=p.stateNode,Zs=!1;break s;case 3:case 4:Es=p.stateNode.containerInfo,Zs=!0;break s}p=p.return}if(Es===null)throw Error(c(160));ar(t,F,e),Es=null,Zs=!1,t=e.alternate,t!==null&&(t.return=null),e.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fr(n,s),n=n.sibling}var vn=null;function Fr(s,n){var l=s.alternate,a=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:Ks(n,s),Vs(s),a&4&&(cl(3,s,s.return),te(3,s),cl(5,s,s.return));break;case 1:Ks(n,s),Vs(s),a&512&&(Ds||l===null||Tn(l,l.return)),a&64&&Yn&&(s=s.updateQueue,s!==null&&(a=s.callbacks,a!==null&&(l=s.shared.hiddenCallbacks,s.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var e=vn;if(Ks(n,s),Vs(s),a&512&&(Ds||l===null||Tn(l,l.return)),a&4){var t=l!==null?l.memoizedState:null;if(a=s.memoizedState,l===null)if(a===null)if(s.stateNode===null){s:{a=s.type,l=s.memoizedProps,e=e.ownerDocument||e;n:switch(a){case"title":t=e.getElementsByTagName("title")[0],(!t||t[za]||t[Ns]||t.namespaceURI==="http://www.w3.org/2000/svg"||t.hasAttribute("itemprop"))&&(t=e.createElement(a),e.head.insertBefore(t,e.querySelector("head > title"))),Rs(t,a,l),t[Ns]=s,Ts(t),a=t;break s;case"link":var F=Fu("link","href",e).get(a+(l.href||""));if(F){for(var p=0;p<F.length;p++)if(t=F[p],t.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&t.getAttribute("rel")===(l.rel==null?null:l.rel)&&t.getAttribute("title")===(l.title==null?null:l.title)&&t.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){F.splice(p,1);break n}}t=e.createElement(a),Rs(t,a,l),e.head.appendChild(t);break;case"meta":if(F=Fu("meta","content",e).get(a+(l.content||""))){for(p=0;p<F.length;p++)if(t=F[p],t.getAttribute("content")===(l.content==null?null:""+l.content)&&t.getAttribute("name")===(l.name==null?null:l.name)&&t.getAttribute("property")===(l.property==null?null:l.property)&&t.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&t.getAttribute("charset")===(l.charSet==null?null:l.charSet)){F.splice(p,1);break n}}t=e.createElement(a),Rs(t,a,l),e.head.appendChild(t);break;default:throw Error(c(468,a))}t[Ns]=s,Ts(t),a=t}s.stateNode=a}else pu(e,s.type,s.stateNode);else s.stateNode=tu(e,a,s.memoizedProps);else t!==a?(t===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):t.count--,a===null?pu(e,s.type,s.stateNode):tu(e,a,s.memoizedProps)):a===null&&s.stateNode!==null&&vp(s,s.memoizedProps,l.memoizedProps)}break;case 27:Ks(n,s),Vs(s),a&512&&(Ds||l===null||Tn(l,l.return)),l!==null&&a&4&&vp(s,s.memoizedProps,l.memoizedProps);break;case 5:if(Ks(n,s),Vs(s),a&512&&(Ds||l===null||Tn(l,l.return)),s.flags&32){e=s.stateNode;try{Jl(e,"")}catch(z){Fs(s,s.return,z)}}a&4&&s.stateNode!=null&&(e=s.memoizedProps,vp(s,e,l!==null?l.memoizedProps:e)),a&1024&&(Cp=!0);break;case 6:if(Ks(n,s),Vs(s),a&4){if(s.stateNode===null)throw Error(c(162));a=s.memoizedProps,l=s.stateNode;try{l.nodeValue=a}catch(z){Fs(s,s.return,z)}}break;case 3:if(Nt=null,e=vn,vn=Tt(n.containerInfo),Ks(n,s),vn=e,Vs(s),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Sa(n.containerInfo)}catch(z){Fs(s,s.return,z)}Cp&&(Cp=!1,pr(s));break;case 4:a=vn,vn=Tt(s.stateNode.containerInfo),Ks(n,s),Vs(s),vn=a;break;case 12:Ks(n,s),Vs(s);break;case 31:Ks(n,s),Vs(s),a&4&&(a=s.updateQueue,a!==null&&(s.updateQueue=null,dt(s,a)));break;case 13:Ks(n,s),Vs(s),s.child.flags&8192&&s.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(ht=$s()),a&4&&(a=s.updateQueue,a!==null&&(s.updateQueue=null,dt(s,a)));break;case 22:e=s.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,d=Yn,x=Ds;if(Yn=d||e,Ds=x||o,Ks(n,s),Ds=x,Yn=d,Vs(s),a&8192)s:for(n=s.stateNode,n._visibility=e?n._visibility&-2:n._visibility|1,e&&(l===null||o||Yn||Ds||ql(s)),l=null,n=s;;){if(n.tag===5||n.tag===26){if(l===null){o=l=n;try{if(t=o.stateNode,e)F=t.style,typeof F.setProperty=="function"?F.setProperty("display","none","important"):F.display="none";else{p=o.stateNode;var C=o.memoizedProps.style,E=C!=null&&C.hasOwnProperty("display")?C.display:null;p.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(z){Fs(o,o.return,z)}}}else if(n.tag===6){if(l===null){o=n;try{o.stateNode.nodeValue=e?"":o.memoizedProps}catch(z){Fs(o,o.return,z)}}}else if(n.tag===18){if(l===null){o=n;try{var h=o.stateNode;e?Wr(h,!0):Wr(o.stateNode,!1)}catch(z){Fs(o,o.return,z)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===s)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break s;for(;n.sibling===null;){if(n.return===null||n.return===s)break s;l===n&&(l=null),n=n.return}l===n&&(l=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=s.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,dt(s,l))));break;case 19:Ks(n,s),Vs(s),a&4&&(a=s.updateQueue,a!==null&&(s.updateQueue=null,dt(s,a)));break;case 30:break;case 21:break;default:Ks(n,s),Vs(s)}}function Vs(s){var n=s.flags;if(n&2){try{for(var l,a=s.return;a!==null;){if(Pi(a)){l=a;break}a=a.return}if(l==null)throw Error(c(160));switch(l.tag){case 27:var e=l.stateNode,t=bp(s);ft(s,t,e);break;case 5:var F=l.stateNode;l.flags&32&&(Jl(F,""),l.flags&=-33);var p=bp(s);ft(s,p,F);break;case 3:case 4:var o=l.stateNode.containerInfo,d=bp(s);Ap(s,d,o);break;default:throw Error(c(161))}}catch(x){Fs(s,s.return,x)}s.flags&=-3}n&4096&&(s.flags&=-4097)}function pr(s){if(s.subtreeFlags&1024)for(s=s.child;s!==null;){var n=s;pr(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),s=s.sibling}}function Zn(s,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)nr(s,n.alternate,n),n=n.sibling}function ql(s){for(s=s.child;s!==null;){var n=s;switch(n.tag){case 0:case 11:case 14:case 15:cl(4,n,n.return),ql(n);break;case 1:Tn(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Wi(n,n.return,l),ql(n);break;case 27:de(n.stateNode);case 26:case 5:Tn(n,n.return),ql(n);break;case 22:n.memoizedState===null&&ql(n);break;case 30:ql(n);break;default:ql(n)}s=s.sibling}}function Kn(s,n,l){for(l=l&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,e=s,t=n,F=t.flags;switch(t.tag){case 0:case 11:case 15:Kn(e,t,l),te(4,t);break;case 1:if(Kn(e,t,l),a=t,e=a.stateNode,typeof e.componentDidMount=="function")try{e.componentDidMount()}catch(d){Fs(a,a.return,d)}if(a=t,e=a.updateQueue,e!==null){var p=a.stateNode;try{var o=e.shared.hiddenCallbacks;if(o!==null)for(e.shared.hiddenCallbacks=null,e=0;e<o.length;e++)Uc(o[e],p)}catch(d){Fs(a,a.return,d)}}l&&F&64&&Ji(t),Fe(t,t.return);break;case 27:Ii(t);case 26:case 5:Kn(e,t,l),l&&a===null&&F&4&&$i(t),Fe(t,t.return);break;case 12:Kn(e,t,l);break;case 31:Kn(e,t,l),l&&F&4&&er(e,t);break;case 13:Kn(e,t,l),l&&F&4&&tr(e,t);break;case 22:t.memoizedState===null&&Kn(e,t,l),Fe(t,t.return);break;case 30:break;default:Kn(e,t,l)}n=n.sibling}}function Dp(s,n){var l=null;s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==l&&(s!=null&&s.refCount++,l!=null&&Za(l))}function Sp(s,n){s=null,n.alternate!==null&&(s=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==s&&(n.refCount++,s!=null&&Za(s))}function bn(s,n,l,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)or(s,n,l,a),n=n.sibling}function or(s,n,l,a){var e=n.flags;switch(n.tag){case 0:case 11:case 15:bn(s,n,l,a),e&2048&&te(9,n);break;case 1:bn(s,n,l,a);break;case 3:bn(s,n,l,a),e&2048&&(s=null,n.alternate!==null&&(s=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==s&&(n.refCount++,s!=null&&Za(s)));break;case 12:if(e&2048){bn(s,n,l,a),s=n.stateNode;try{var t=n.memoizedProps,F=t.id,p=t.onPostCommit;typeof p=="function"&&p(F,n.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(o){Fs(n,n.return,o)}}else bn(s,n,l,a);break;case 31:bn(s,n,l,a);break;case 13:bn(s,n,l,a);break;case 23:break;case 22:t=n.stateNode,F=n.alternate,n.memoizedState!==null?t._visibility&2?bn(s,n,l,a):pe(s,n):t._visibility&2?bn(s,n,l,a):(t._visibility|=2,da(s,n,l,a,(n.subtreeFlags&10256)!==0||!1)),e&2048&&Dp(F,n);break;case 24:bn(s,n,l,a),e&2048&&Sp(n.alternate,n);break;default:bn(s,n,l,a)}}function da(s,n,l,a,e){for(e=e&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var t=s,F=n,p=l,o=a,d=F.flags;switch(F.tag){case 0:case 11:case 15:da(t,F,p,o,e),te(8,F);break;case 23:break;case 22:var x=F.stateNode;F.memoizedState!==null?x._visibility&2?da(t,F,p,o,e):pe(t,F):(x._visibility|=2,da(t,F,p,o,e)),e&&d&2048&&Dp(F.alternate,F);break;case 24:da(t,F,p,o,e),e&&d&2048&&Sp(F.alternate,F);break;default:da(t,F,p,o,e)}n=n.sibling}}function pe(s,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var l=s,a=n,e=a.flags;switch(a.tag){case 22:pe(l,a),e&2048&&Dp(a.alternate,a);break;case 24:pe(l,a),e&2048&&Sp(a.alternate,a);break;default:pe(l,a)}n=n.sibling}}var oe=8192;function Ea(s,n,l){if(s.subtreeFlags&oe)for(s=s.child;s!==null;)cr(s,n,l),s=s.sibling}function cr(s,n,l){switch(s.tag){case 26:Ea(s,n,l),s.flags&oe&&s.memoizedState!==null&&Wf(l,vn,s.memoizedState,s.memoizedProps);break;case 5:Ea(s,n,l);break;case 3:case 4:var a=vn;vn=Tt(s.stateNode.containerInfo),Ea(s,n,l),vn=a;break;case 22:s.memoizedState===null&&(a=s.alternate,a!==null&&a.memoizedState!==null?(a=oe,oe=16777216,Ea(s,n,l),oe=a):Ea(s,n,l));break;default:Ea(s,n,l)}}function ir(s){var n=s.alternate;if(n!==null&&(s=n.child,s!==null)){n.child=null;do n=s.sibling,s.sibling=null,s=n;while(s!==null)}}function ce(s){var n=s.deletions;if((s.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];Ms=a,ur(a,s)}ir(s)}if(s.subtreeFlags&10256)for(s=s.child;s!==null;)rr(s),s=s.sibling}function rr(s){switch(s.tag){case 0:case 11:case 15:ce(s),s.flags&2048&&cl(9,s,s.return);break;case 3:ce(s);break;case 12:ce(s);break;case 22:var n=s.stateNode;s.memoizedState!==null&&n._visibility&2&&(s.return===null||s.return.tag!==13)?(n._visibility&=-3,Et(s)):ce(s);break;default:ce(s)}}function Et(s){var n=s.deletions;if((s.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var a=n[l];Ms=a,ur(a,s)}ir(s)}for(s=s.child;s!==null;){switch(n=s,n.tag){case 0:case 11:case 15:cl(8,n,n.return),Et(n);break;case 22:l=n.stateNode,l._visibility&2&&(l._visibility&=-3,Et(n));break;default:Et(n)}s=s.sibling}}function ur(s,n){for(;Ms!==null;){var l=Ms;switch(l.tag){case 0:case 11:case 15:cl(8,l,n);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ms=a;else s:for(l=s;Ms!==null;){a=Ms;var e=a.sibling,t=a.return;if(lr(a),a===l){Ms=null;break s}if(e!==null){e.return=t,Ms=e;break s}Ms=t}}}var rf={getCacheForType:function(s){var n=zs(bs),l=n.data.get(s);return l===void 0&&(l=s(),n.data.set(s,l)),l},cacheSignal:function(){return zs(bs).controller.signal}},uf=typeof WeakMap=="function"?WeakMap:Map,as=0,ys=null,J=null,$=0,ts=0,en=null,il=!1,ha=!1,_p=!1,Vn=0,ms=0,rl=0,Xl=0,jp=0,tn=0,ma=0,ie=null,Js=null,Tp=!1,ht=0,yr=0,mt=1/0,gt=null,ul=null,_s=0,yl=null,ga=null,Jn=0,Mp=0,Np=null,fr=null,re=0,Hp=null;function Fn(){return(as&2)!==0&&$!==0?$&-$:v.T!==null?Up():Mo()}function dr(){if(tn===0)if(($&536870912)===0||ss){var s=_e;_e<<=1,(_e&3932160)===0&&(_e=262144),tn=s}else tn=536870912;return s=ln.current,s!==null&&(s.flags|=32),tn}function Ws(s,n,l){(s===ys&&(ts===2||ts===9)||s.cancelPendingCommit!==null)&&(xa(s,0),fl(s,$,tn,!1)),Ha(s,l),((as&2)===0||s!==ys)&&(s===ys&&((as&2)===0&&(Xl|=l),ms===4&&fl(s,$,tn,!1)),Mn(s))}function Er(s,n,l){if((as&6)!==0)throw Error(c(327));var a=!l&&(n&127)===0&&(n&s.expiredLanes)===0||Na(s,n),e=a?df(s,n):Op(s,n,!0),t=a;do{if(e===0){ha&&!a&&fl(s,n,0,!1);break}else{if(l=s.current.alternate,t&&!yf(l)){e=Op(s,n,!1),t=!1;continue}if(e===2){if(t=n,s.errorRecoveryDisabledLanes&t)var F=0;else F=s.pendingLanes&-536870913,F=F!==0?F:F&536870912?536870912:0;if(F!==0){n=F;s:{var p=s;e=ie;var o=p.current.memoizedState.isDehydrated;if(o&&(xa(p,F).flags|=256),F=Op(p,F,!1),F!==2){if(_p&&!o){p.errorRecoveryDisabledLanes|=t,Xl|=t,e=4;break s}t=Js,Js=e,t!==null&&(Js===null?Js=t:Js.push.apply(Js,t))}e=F}if(t=!1,e!==2)continue}}if(e===1){xa(s,0),fl(s,n,0,!0);break}s:{switch(a=s,t=e,t){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:fl(a,n,tn,!il);break s;case 2:Js=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(e=ht+300-$s(),10<e)){if(fl(a,n,tn,!il),Te(a,0,!0)!==0)break s;Jn=n,a.timeoutHandle=Kr(hr.bind(null,a,l,Js,gt,Tp,n,tn,Xl,ma,il,t,"Throttled",-0,0),e);break s}hr(a,l,Js,gt,Tp,n,tn,Xl,ma,il,t,null,-0,0)}}break}while(!0);Mn(s)}function hr(s,n,l,a,e,t,F,p,o,d,x,C,E,h){if(s.timeoutHandle=-1,C=n.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:On},cr(n,t,C);var z=(t&62914560)===t?ht-$s():(t&4194048)===t?yr-$s():0;if(z=$f(C,z),z!==null){Jn=t,s.cancelPendingCommit=z(Dr.bind(null,s,n,t,l,a,e,F,p,o,x,C,null,E,h)),fl(s,t,F,!d);return}}Dr(s,n,t,l,a,e,F,p,o)}function yf(s){for(var n=s;;){var l=n.tag;if((l===0||l===11||l===15)&&n.flags&16384&&(l=n.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var e=l[a],t=e.getSnapshot;e=e.value;try{if(!sn(t(),e))return!1}catch{return!1}}if(l=n.child,n.subtreeFlags&16384&&l!==null)l.return=n,n=l;else{if(n===s)break;for(;n.sibling===null;){if(n.return===null||n.return===s)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fl(s,n,l,a){n&=~jp,n&=~Xl,s.suspendedLanes|=n,s.pingedLanes&=~n,a&&(s.warmLanes|=n),a=s.expirationTimes;for(var e=n;0<e;){var t=31-Is(e),F=1<<t;a[t]=-1,e&=~F}l!==0&&_o(s,l,n)}function xt(){return(as&6)===0?(ue(0),!1):!0}function zp(){if(J!==null){if(ts===0)var s=J.return;else s=J,Un=Hl=null,JF(s),ia=null,Va=0,s=J;for(;s!==null;)Vi(s.alternate,s),s=s.return;J=null}}function xa(s,n){var l=s.timeoutHandle;l!==-1&&(s.timeoutHandle=-1,zf(l)),l=s.cancelPendingCommit,l!==null&&(s.cancelPendingCommit=null,l()),Jn=0,zp(),ys=s,J=l=Gn(s.current,null),$=n,ts=0,en=null,il=!1,ha=Na(s,n),_p=!1,ma=tn=jp=Xl=rl=ms=0,Js=ie=null,Tp=!1,(n&8)!==0&&(n|=n&32);var a=s.entangledLanes;if(a!==0)for(s=s.entanglements,a&=n;0<a;){var e=31-Is(a),t=1<<e;n|=s[e],a&=~t}return Vn=n,Xe(),l}function mr(s,n){Q=null,v.H=le,n===ca||n===Je?(n=Oc(),ts=3):n===BF?(n=Oc(),ts=4):ts=n===rp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,en=n,J===null&&(ms=1,ct(s,un(n,s.current)))}function gr(){var s=ln.current;return s===null?!0:($&4194048)===$?En===null:($&62914560)===$||($&536870912)!==0?s===En:!1}function xr(){var s=v.H;return v.H=le,s===null?le:s}function vr(){var s=v.A;return v.A=rf,s}function vt(){ms=4,il||($&4194048)!==$&&ln.current!==null||(ha=!0),(rl&134217727)===0&&(Xl&134217727)===0||ys===null||fl(ys,$,tn,!1)}function Op(s,n,l){var a=as;as|=2;var e=xr(),t=vr();(ys!==s||$!==n)&&(gt=null,xa(s,n)),n=!1;var F=ms;s:do try{if(ts!==0&&J!==null){var p=J,o=en;switch(ts){case 8:zp(),F=6;break s;case 3:case 2:case 9:case 6:ln.current===null&&(n=!0);var d=ts;if(ts=0,en=null,va(s,p,o,d),l&&ha){F=0;break s}break;default:d=ts,ts=0,en=null,va(s,p,o,d)}}ff(),F=ms;break}catch(x){mr(s,x)}while(!0);return n&&s.shellSuspendCounter++,Un=Hl=null,as=a,v.H=e,v.A=t,J===null&&(ys=null,$=0,Xe()),F}function ff(){for(;J!==null;)br(J)}function df(s,n){var l=as;as|=2;var a=xr(),e=vr();ys!==s||$!==n?(gt=null,mt=$s()+500,xa(s,n)):ha=Na(s,n);s:do try{if(ts!==0&&J!==null){n=J;var t=en;n:switch(ts){case 1:ts=0,en=null,va(s,n,t,1);break;case 2:case 9:if(Hc(t)){ts=0,en=null,Ar(n);break}n=function(){ts!==2&&ts!==9||ys!==s||(ts=7),Mn(s)},t.then(n,n);break s;case 3:ts=7;break s;case 4:ts=5;break s;case 7:Hc(t)?(ts=0,en=null,Ar(n)):(ts=0,en=null,va(s,n,t,7));break;case 5:var F=null;switch(J.tag){case 26:F=J.memoizedState;case 5:case 27:var p=J;if(F?ou(F):p.stateNode.complete){ts=0,en=null;var o=p.sibling;if(o!==null)J=o;else{var d=p.return;d!==null?(J=d,bt(d)):J=null}break n}}ts=0,en=null,va(s,n,t,5);break;case 6:ts=0,en=null,va(s,n,t,6);break;case 8:zp(),ms=6;break s;default:throw Error(c(462))}}Ef();break}catch(x){mr(s,x)}while(!0);return Un=Hl=null,v.H=a,v.A=e,as=l,J!==null?0:(ys=null,$=0,Xe(),ms)}function Ef(){for(;J!==null&&!Uu();)br(J)}function br(s){var n=Zi(s.alternate,s,Vn);s.memoizedProps=s.pendingProps,n===null?bt(s):J=n}function Ar(s){var n=s,l=n.alternate;switch(n.tag){case 15:case 0:n=qi(l,n,n.pendingProps,n.type,void 0,$);break;case 11:n=qi(l,n,n.pendingProps,n.type.render,n.ref,$);break;case 5:JF(n);default:Vi(l,n),n=J=vc(n,Vn),n=Zi(l,n,Vn)}s.memoizedProps=s.pendingProps,n===null?bt(s):J=n}function va(s,n,l,a){Un=Hl=null,JF(n),ia=null,Va=0;var e=n.return;try{if(af(s,e,n,l,$)){ms=1,ct(s,un(l,s.current)),J=null;return}}catch(t){if(e!==null)throw J=e,t;ms=1,ct(s,un(l,s.current)),J=null;return}n.flags&32768?(ss||a===1?s=!0:ha||($&536870912)!==0?s=!1:(il=s=!0,(a===2||a===9||a===3||a===6)&&(a=ln.current,a!==null&&a.tag===13&&(a.flags|=16384))),Cr(n,s)):bt(n)}function bt(s){var n=s;do{if((n.flags&32768)!==0){Cr(n,il);return}s=n.return;var l=Ff(n.alternate,n,Vn);if(l!==null){J=l;return}if(n=n.sibling,n!==null){J=n;return}J=n=s}while(n!==null);ms===0&&(ms=5)}function Cr(s,n){do{var l=pf(s.alternate,s);if(l!==null){l.flags&=32767,J=l;return}if(l=s.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!n&&(s=s.sibling,s!==null)){J=s;return}J=s=l}while(s!==null);ms=6,J=null}function Dr(s,n,l,a,e,t,F,p,o){s.cancelPendingCommit=null;do At();while(_s!==0);if((as&6)!==0)throw Error(c(327));if(n!==null){if(n===s.current)throw Error(c(177));if(t=n.lanes|n.childLanes,t|=bF,Vu(s,l,t,F,p,o),s===ys&&(J=ys=null,$=0),ga=n,yl=s,Jn=l,Mp=t,Np=e,fr=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(s.callbackNode=null,s.callbackPriority=0,xf(De,function(){return Mr(),null})):(s.callbackNode=null,s.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=v.T,v.T=null,e=T.p,T.p=2,F=as,as|=4;try{of(s,n,l)}finally{as=F,T.p=e,v.T=a}}_s=1,Sr(),_r(),jr()}}function Sr(){if(_s===1){_s=0;var s=yl,n=ga,l=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||l){l=v.T,v.T=null;var a=T.p;T.p=2;var e=as;as|=4;try{Fr(n,s);var t=Zp,F=uc(s.containerInfo),p=t.focusedElem,o=t.selectionRange;if(F!==p&&p&&p.ownerDocument&&rc(p.ownerDocument.documentElement,p)){if(o!==null&&hF(p)){var d=o.start,x=o.end;if(x===void 0&&(x=d),"selectionStart"in p)p.selectionStart=d,p.selectionEnd=Math.min(x,p.value.length);else{var C=p.ownerDocument||document,E=C&&C.defaultView||window;if(E.getSelection){var h=E.getSelection(),z=p.textContent.length,U=Math.min(o.start,z),is=o.end===void 0?U:Math.min(o.end,z);!h.extend&&U>is&&(F=is,is=U,U=F);var u=ic(p,U),i=ic(p,is);if(u&&i&&(h.rangeCount!==1||h.anchorNode!==u.node||h.anchorOffset!==u.offset||h.focusNode!==i.node||h.focusOffset!==i.offset)){var f=C.createRange();f.setStart(u.node,u.offset),h.removeAllRanges(),U>is?(h.addRange(f),h.extend(i.node,i.offset)):(f.setEnd(i.node,i.offset),h.addRange(f))}}}}for(C=[],h=p;h=h.parentNode;)h.nodeType===1&&C.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<C.length;p++){var b=C[p];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Rt=!!Qp,Zp=Qp=null}finally{as=e,T.p=a,v.T=l}}s.current=n,_s=2}}function _r(){if(_s===2){_s=0;var s=yl,n=ga,l=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||l){l=v.T,v.T=null;var a=T.p;T.p=2;var e=as;as|=4;try{nr(s,n.alternate,n)}finally{as=e,T.p=a,v.T=l}}_s=3}}function jr(){if(_s===4||_s===3){_s=0,Lu();var s=yl,n=ga,l=Jn,a=fr;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_s=5:(_s=0,ga=yl=null,Tr(s,s.pendingLanes));var e=s.pendingLanes;if(e===0&&(ul=null),Pt(l),n=n.stateNode,Ps&&typeof Ps.onCommitFiberRoot=="function")try{Ps.onCommitFiberRoot(Ma,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=v.T,e=T.p,T.p=2,v.T=null;try{for(var t=s.onRecoverableError,F=0;F<a.length;F++){var p=a[F];t(p.value,{componentStack:p.stack})}}finally{v.T=n,T.p=e}}(Jn&3)!==0&&At(),Mn(s),e=s.pendingLanes,(l&261930)!==0&&(e&42)!==0?s===Hp?re++:(re=0,Hp=s):re=0,ue(0)}}function Tr(s,n){(s.pooledCacheLanes&=n)===0&&(n=s.pooledCache,n!=null&&(s.pooledCache=null,Za(n)))}function At(){return Sr(),_r(),jr(),Mr()}function Mr(){if(_s!==5)return!1;var s=yl,n=Mp;Mp=0;var l=Pt(Jn),a=v.T,e=T.p;try{T.p=32>l?32:l,v.T=null,l=Np,Np=null;var t=yl,F=Jn;if(_s=0,ga=yl=null,Jn=0,(as&6)!==0)throw Error(c(331));var p=as;if(as|=4,rr(t.current),or(t,t.current,F,l),as=p,ue(0,!1),Ps&&typeof Ps.onPostCommitFiberRoot=="function")try{Ps.onPostCommitFiberRoot(Ma,t)}catch{}return!0}finally{T.p=e,v.T=a,Tr(s,n)}}function Nr(s,n,l){n=un(l,n),n=ip(s.stateNode,n,2),s=Fl(s,n,2),s!==null&&(Ha(s,2),Mn(s))}function Fs(s,n,l){if(s.tag===3)Nr(s,s,l);else for(;n!==null;){if(n.tag===3){Nr(n,s,l);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ul===null||!ul.has(a))){s=un(l,s),l=Hi(2),a=Fl(n,l,2),a!==null&&(zi(l,a,n,s),Ha(a,2),Mn(a));break}}n=n.return}}function Rp(s,n,l){var a=s.pingCache;if(a===null){a=s.pingCache=new uf;var e=new Set;a.set(n,e)}else e=a.get(n),e===void 0&&(e=new Set,a.set(n,e));e.has(l)||(_p=!0,e.add(l),s=hf.bind(null,s,n,l),n.then(s,s))}function hf(s,n,l){var a=s.pingCache;a!==null&&a.delete(n),s.pingedLanes|=s.suspendedLanes&l,s.warmLanes&=~l,ys===s&&($&l)===l&&(ms===4||ms===3&&($&62914560)===$&&300>$s()-ht?(as&2)===0&&xa(s,0):jp|=l,ma===$&&(ma=0)),Mn(s)}function Hr(s,n){n===0&&(n=So()),s=Tl(s,n),s!==null&&(Ha(s,n),Mn(s))}function mf(s){var n=s.memoizedState,l=0;n!==null&&(l=n.retryLane),Hr(s,l)}function gf(s,n){var l=0;switch(s.tag){case 31:case 13:var a=s.stateNode,e=s.memoizedState;e!==null&&(l=e.retryLane);break;case 19:a=s.stateNode;break;case 22:a=s.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),Hr(s,l)}function xf(s,n){return Vt(s,n)}var Ct=null,ba=null,Gp=!1,Dt=!1,Bp=!1,dl=0;function Mn(s){s!==ba&&s.next===null&&(ba===null?Ct=ba=s:ba=ba.next=s),Dt=!0,Gp||(Gp=!0,bf())}function ue(s,n){if(!Bp&&Dt){Bp=!0;do for(var l=!1,a=Ct;a!==null;){if(s!==0){var e=a.pendingLanes;if(e===0)var t=0;else{var F=a.suspendedLanes,p=a.pingedLanes;t=(1<<31-Is(42|s)+1)-1,t&=e&~(F&~p),t=t&201326741?t&201326741|1:t?t|2:0}t!==0&&(l=!0,Gr(a,t))}else t=$,t=Te(a,a===ys?t:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(t&3)===0||Na(a,t)||(l=!0,Gr(a,t));a=a.next}while(l);Bp=!1}}function vf(){zr()}function zr(){Dt=Gp=!1;var s=0;dl!==0&&Hf()&&(s=dl);for(var n=$s(),l=null,a=Ct;a!==null;){var e=a.next,t=Or(a,n);t===0?(a.next=null,l===null?Ct=e:l.next=e,e===null&&(ba=l)):(l=a,(s!==0||(t&3)!==0)&&(Dt=!0)),a=e}_s!==0&&_s!==5||ue(s),dl!==0&&(dl=0)}function Or(s,n){for(var l=s.suspendedLanes,a=s.pingedLanes,e=s.expirationTimes,t=s.pendingLanes&-62914561;0<t;){var F=31-Is(t),p=1<<F,o=e[F];o===-1?((p&l)===0||(p&a)!==0)&&(e[F]=Ku(p,n)):o<=n&&(s.expiredLanes|=p),t&=~p}if(n=ys,l=$,l=Te(s,s===n?l:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),a=s.callbackNode,l===0||s===n&&(ts===2||ts===9)||s.cancelPendingCommit!==null)return a!==null&&a!==null&&Jt(a),s.callbackNode=null,s.callbackPriority=0;if((l&3)===0||Na(s,l)){if(n=l&-l,n===s.callbackPriority)return n;switch(a!==null&&Jt(a),Pt(l)){case 2:case 8:l=Co;break;case 32:l=De;break;case 268435456:l=Do;break;default:l=De}return a=Rr.bind(null,s),l=Vt(l,a),s.callbackPriority=n,s.callbackNode=l,n}return a!==null&&a!==null&&Jt(a),s.callbackPriority=2,s.callbackNode=null,2}function Rr(s,n){if(_s!==0&&_s!==5)return s.callbackNode=null,s.callbackPriority=0,null;var l=s.callbackNode;if(At()&&s.callbackNode!==l)return null;var a=$;return a=Te(s,s===ys?a:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),a===0?null:(Er(s,a,n),Or(s,$s()),s.callbackNode!=null&&s.callbackNode===l?Rr.bind(null,s):null)}function Gr(s,n){if(At())return null;Er(s,n,!0)}function bf(){Of(function(){(as&6)!==0?Vt(Ao,vf):zr()})}function Up(){if(dl===0){var s=pa;s===0&&(s=Se,Se<<=1,(Se&261888)===0&&(Se=256)),dl=s}return dl}function Br(s){return s==null||typeof s=="symbol"||typeof s=="boolean"?null:typeof s=="function"?s:ze(""+s)}function Ur(s,n){var l=n.ownerDocument.createElement("input");return l.name=n.name,l.value=n.value,s.id&&l.setAttribute("form",s.id),n.parentNode.insertBefore(l,n),s=new FormData(s),l.parentNode.removeChild(l),s}function Af(s,n,l,a,e){if(n==="submit"&&l&&l.stateNode===e){var t=Br((e[Ys]||null).action),F=a.submitter;F&&(n=(n=F[Ys]||null)?Br(n.formAction):F.getAttribute("formAction"),n!==null&&(t=n,F=null));var p=new Be("action","action",null,a,e);s.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(dl!==0){var o=F?Ur(e,F):new FormData(e);ep(l,{pending:!0,data:o,method:e.method,action:t},null,o)}}else typeof t=="function"&&(p.preventDefault(),o=F?Ur(e,F):new FormData(e),ep(l,{pending:!0,data:o,method:e.method,action:t},t,o))},currentTarget:e}]})}}for(var Lp=0;Lp<vF.length;Lp++){var qp=vF[Lp],Cf=qp.toLowerCase(),Df=qp[0].toUpperCase()+qp.slice(1);xn(Cf,"on"+Df)}xn(dc,"onAnimationEnd"),xn(Ec,"onAnimationIteration"),xn(hc,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(qy,"onTransitionRun"),xn(Xy,"onTransitionStart"),xn(wy,"onTransitionCancel"),xn(mc,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),Dl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dl("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ye="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ye));function Lr(s,n){n=(n&4)!==0;for(var l=0;l<s.length;l++){var a=s[l],e=a.event;a=a.listeners;s:{var t=void 0;if(n)for(var F=a.length-1;0<=F;F--){var p=a[F],o=p.instance,d=p.currentTarget;if(p=p.listener,o!==t&&e.isPropagationStopped())break s;t=p,e.currentTarget=d;try{t(e)}catch(x){qe(x)}e.currentTarget=null,t=o}else for(F=0;F<a.length;F++){if(p=a[F],o=p.instance,d=p.currentTarget,p=p.listener,o!==t&&e.isPropagationStopped())break s;t=p,e.currentTarget=d;try{t(e)}catch(x){qe(x)}e.currentTarget=null,t=o}}}}function W(s,n){var l=n[It];l===void 0&&(l=n[It]=new Set);var a=s+"__bubble";l.has(a)||(qr(n,s,2,!1),l.add(a))}function Xp(s,n,l){var a=0;n&&(a|=4),qr(l,s,a,n)}var St="_reactListening"+Math.random().toString(36).slice(2);function wp(s){if(!s[St]){s[St]=!0,zo.forEach(function(l){l!=="selectionchange"&&(Sf.has(l)||Xp(l,!1,s),Xp(l,!0,s))});var n=s.nodeType===9?s:s.ownerDocument;n===null||n[St]||(n[St]=!0,Xp("selectionchange",!1,n))}}function qr(s,n,l,a){switch(du(n)){case 2:var e=sd;break;case 8:e=nd;break;default:e=ao}l=e.bind(null,n,l,s),e=void 0,!oF||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(e=!0),a?e!==void 0?s.addEventListener(n,l,{capture:!0,passive:e}):s.addEventListener(n,l,!0):e!==void 0?s.addEventListener(n,l,{passive:e}):s.addEventListener(n,l,!1)}function kp(s,n,l,a,e){var t=a;if((n&1)===0&&(n&2)===0&&a!==null)s:for(;;){if(a===null)return;var F=a.tag;if(F===3||F===4){var p=a.stateNode.containerInfo;if(p===e)break;if(F===4)for(F=a.return;F!==null;){var o=F.tag;if((o===3||o===4)&&F.stateNode.containerInfo===e)return;F=F.return}for(;p!==null;){if(F=Yl(p),F===null)return;if(o=F.tag,o===5||o===6||o===26||o===27){a=t=F;continue s}p=p.parentNode}}a=a.return}Qo(function(){var d=t,x=FF(l),C=[];s:{var E=gc.get(s);if(E!==void 0){var h=Be,z=s;switch(s){case"keypress":if(Re(l)===0)break s;case"keydown":case"keyup":h=my;break;case"focusin":z="focus",h=uF;break;case"focusout":z="blur",h=uF;break;case"beforeblur":case"afterblur":h=uF;break;case"click":if(l.button===2)break s;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=vy;break;case dc:case Ec:case hc:h=cy;break;case mc:h=Ay;break;case"scroll":case"scrollend":h=ey;break;case"wheel":h=Dy;break;case"copy":case"cut":case"paste":h=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Wo;break;case"toggle":case"beforetoggle":h=_y}var U=(n&4)!==0,is=!U&&(s==="scroll"||s==="scrollend"),u=U?E!==null?E+"Capture":null:E;U=[];for(var i=d,f;i!==null;){var b=i;if(f=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||f===null||u===null||(b=Ra(i,u),b!=null&&U.push(fe(i,b,f))),is)break;i=i.return}0<U.length&&(E=new h(E,z,null,l,x),C.push({event:E,listeners:U}))}}if((n&7)===0){s:{if(E=s==="mouseover"||s==="pointerover",h=s==="mouseout"||s==="pointerout",E&&l!==tF&&(z=l.relatedTarget||l.fromElement)&&(Yl(z)||z[kl]))break s;if((h||E)&&(E=x.window===x?x:(E=x.ownerDocument)?E.defaultView||E.parentWindow:window,h?(z=l.relatedTarget||l.toElement,h=d,z=z?Yl(z):null,z!==null&&(is=G(z),U=z.tag,z!==is||U!==5&&U!==27&&U!==6)&&(z=null)):(h=null,z=d),h!==z)){if(U=Vo,b="onMouseLeave",u="onMouseEnter",i="mouse",(s==="pointerout"||s==="pointerover")&&(U=Wo,b="onPointerLeave",u="onPointerEnter",i="pointer"),is=h==null?E:Oa(h),f=z==null?E:Oa(z),E=new U(b,i+"leave",h,l,x),E.target=is,E.relatedTarget=f,b=null,Yl(x)===d&&(U=new U(u,i+"enter",z,l,x),U.target=f,U.relatedTarget=is,b=U),is=b,h&&z)n:{for(U=_f,u=h,i=z,f=0,b=u;b;b=U(b))f++;b=0;for(var B=i;B;B=U(B))b++;for(;0<f-b;)u=U(u),f--;for(;0<b-f;)i=U(i),b--;for(;f--;){if(u===i||i!==null&&u===i.alternate){U=u;break n}u=U(u),i=U(i)}U=null}else U=null;h!==null&&Xr(C,E,h,U,!1),z!==null&&is!==null&&Xr(C,is,z,U,!0)}}s:{if(E=d?Oa(d):window,h=E.nodeName&&E.nodeName.toLowerCase(),h==="select"||h==="input"&&E.type==="file")var ns=ec;else if(lc(E))if(tc)ns=By;else{ns=Ry;var R=Oy}else h=E.nodeName,!h||h.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?d&&eF(d.elementType)&&(ns=ec):ns=Gy;if(ns&&(ns=ns(s,d))){ac(C,ns,l,x);break s}R&&R(s,E,d),s==="focusout"&&d&&E.type==="number"&&d.memoizedProps.value!=null&&aF(E,"number",E.value)}switch(R=d?Oa(d):window,s){case"focusin":(lc(R)||R.contentEditable==="true")&&(Il=R,mF=d,ka=null);break;case"focusout":ka=mF=Il=null;break;case"mousedown":gF=!0;break;case"contextmenu":case"mouseup":case"dragend":gF=!1,yc(C,l,x);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":yc(C,l,x)}var Z;if(fF)s:{switch(s){case"compositionstart":var P="onCompositionStart";break s;case"compositionend":P="onCompositionEnd";break s;case"compositionupdate":P="onCompositionUpdate";break s}P=void 0}else Pl?sc(s,l)&&(P="onCompositionEnd"):s==="keydown"&&l.keyCode===229&&(P="onCompositionStart");P&&($o&&l.locale!=="ko"&&(Pl||P!=="onCompositionStart"?P==="onCompositionEnd"&&Pl&&(Z=Zo()):(In=x,cF="value"in In?In.value:In.textContent,Pl=!0)),R=_t(d,P),0<R.length&&(P=new Jo(P,s,null,l,x),C.push({event:P,listeners:R}),Z?P.data=Z:(Z=nc(l),Z!==null&&(P.data=Z)))),(Z=Ty?My(s,l):Ny(s,l))&&(P=_t(d,"onBeforeInput"),0<P.length&&(R=new Jo("onBeforeInput","beforeinput",null,l,x),C.push({event:R,listeners:P}),R.data=Z)),Af(C,s,d,l,x)}Lr(C,n)})}function fe(s,n,l){return{instance:s,listener:n,currentTarget:l}}function _t(s,n){for(var l=n+"Capture",a=[];s!==null;){var e=s,t=e.stateNode;if(e=e.tag,e!==5&&e!==26&&e!==27||t===null||(e=Ra(s,l),e!=null&&a.unshift(fe(s,e,t)),e=Ra(s,n),e!=null&&a.push(fe(s,e,t))),s.tag===3)return a;s=s.return}return[]}function _f(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5&&s.tag!==27);return s||null}function Xr(s,n,l,a,e){for(var t=n._reactName,F=[];l!==null&&l!==a;){var p=l,o=p.alternate,d=p.stateNode;if(p=p.tag,o!==null&&o===a)break;p!==5&&p!==26&&p!==27||d===null||(o=d,e?(d=Ra(l,t),d!=null&&F.unshift(fe(l,d,o))):e||(d=Ra(l,t),d!=null&&F.push(fe(l,d,o)))),l=l.return}F.length!==0&&s.push({event:n,listeners:F})}var jf=/\r\n?/g,Tf=/\u0000|\uFFFD/g;function wr(s){return(typeof s=="string"?s:""+s).replace(jf,`
`).replace(Tf,"")}function kr(s,n){return n=wr(n),wr(s)===n}function cs(s,n,l,a,e,t){switch(l){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Jl(s,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Jl(s,""+a);break;case"className":Ne(s,"class",a);break;case"tabIndex":Ne(s,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(s,l,a);break;case"style":ko(s,a,t);break;case"data":if(n!=="object"){Ne(s,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||l!=="href")){s.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){s.removeAttribute(l);break}a=ze(""+a),s.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){s.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof t=="function"&&(l==="formAction"?(n!=="input"&&cs(s,n,"name",e.name,e,null),cs(s,n,"formEncType",e.formEncType,e,null),cs(s,n,"formMethod",e.formMethod,e,null),cs(s,n,"formTarget",e.formTarget,e,null)):(cs(s,n,"encType",e.encType,e,null),cs(s,n,"method",e.method,e,null),cs(s,n,"target",e.target,e,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){s.removeAttribute(l);break}a=ze(""+a),s.setAttribute(l,a);break;case"onClick":a!=null&&(s.onclick=On);break;case"onScroll":a!=null&&W("scroll",s);break;case"onScrollEnd":a!=null&&W("scrollend",s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(e.children!=null)throw Error(c(60));s.innerHTML=l}}break;case"multiple":s.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":s.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){s.removeAttribute("xlink:href");break}l=ze(""+a),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?s.setAttribute(l,""+a):s.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?s.setAttribute(l,""):s.removeAttribute(l);break;case"capture":case"download":a===!0?s.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?s.setAttribute(l,a):s.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?s.setAttribute(l,a):s.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?s.removeAttribute(l):s.setAttribute(l,a);break;case"popover":W("beforetoggle",s),W("toggle",s),Me(s,"popover",a);break;case"xlinkActuate":zn(s,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":zn(s,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":zn(s,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":zn(s,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":zn(s,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":zn(s,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":zn(s,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":zn(s,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":zn(s,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Me(s,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ly.get(l)||l,Me(s,l,a))}}function Yp(s,n,l,a,e,t){switch(l){case"style":ko(s,a,t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(l=a.__html,l!=null){if(e.children!=null)throw Error(c(60));s.innerHTML=l}}break;case"children":typeof a=="string"?Jl(s,a):(typeof a=="number"||typeof a=="bigint")&&Jl(s,""+a);break;case"onScroll":a!=null&&W("scroll",s);break;case"onScrollEnd":a!=null&&W("scrollend",s);break;case"onClick":a!=null&&(s.onclick=On);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(l))s:{if(l[0]==="o"&&l[1]==="n"&&(e=l.endsWith("Capture"),n=l.slice(2,e?l.length-7:void 0),t=s[Ys]||null,t=t!=null?t[l]:null,typeof t=="function"&&s.removeEventListener(n,t,e),typeof a=="function")){typeof t!="function"&&t!==null&&(l in s?s[l]=null:s.hasAttribute(l)&&s.removeAttribute(l)),s.addEventListener(n,a,e);break s}l in s?s[l]=a:a===!0?s.setAttribute(l,""):Me(s,l,a)}}}function Rs(s,n,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",s),W("load",s);var a=!1,e=!1,t;for(t in l)if(l.hasOwnProperty(t)){var F=l[t];if(F!=null)switch(t){case"src":a=!0;break;case"srcSet":e=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:cs(s,n,t,F,l,null)}}e&&cs(s,n,"srcSet",l.srcSet,l,null),a&&cs(s,n,"src",l.src,l,null);return;case"input":W("invalid",s);var p=t=F=e=null,o=null,d=null;for(a in l)if(l.hasOwnProperty(a)){var x=l[a];if(x!=null)switch(a){case"name":e=x;break;case"type":F=x;break;case"checked":o=x;break;case"defaultChecked":d=x;break;case"value":t=x;break;case"defaultValue":p=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(137,n));break;default:cs(s,n,a,x,l,null)}}Lo(s,t,p,o,d,F,e,!1);return;case"select":W("invalid",s),a=F=t=null;for(e in l)if(l.hasOwnProperty(e)&&(p=l[e],p!=null))switch(e){case"value":t=p;break;case"defaultValue":F=p;break;case"multiple":a=p;default:cs(s,n,e,p,l,null)}n=t,l=F,s.multiple=!!a,n!=null?Vl(s,!!a,n,!1):l!=null&&Vl(s,!!a,l,!0);return;case"textarea":W("invalid",s),t=e=a=null;for(F in l)if(l.hasOwnProperty(F)&&(p=l[F],p!=null))switch(F){case"value":a=p;break;case"defaultValue":e=p;break;case"children":t=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(c(91));break;default:cs(s,n,F,p,l,null)}Xo(s,a,e,t);return;case"option":for(o in l)l.hasOwnProperty(o)&&(a=l[o],a!=null)&&(o==="selected"?s.selected=a&&typeof a!="function"&&typeof a!="symbol":cs(s,n,o,a,l,null));return;case"dialog":W("beforetoggle",s),W("toggle",s),W("cancel",s),W("close",s);break;case"iframe":case"object":W("load",s);break;case"video":case"audio":for(a=0;a<ye.length;a++)W(ye[a],s);break;case"image":W("error",s),W("load",s);break;case"details":W("toggle",s);break;case"embed":case"source":case"link":W("error",s),W("load",s);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in l)if(l.hasOwnProperty(d)&&(a=l[d],a!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:cs(s,n,d,a,l,null)}return;default:if(eF(n)){for(x in l)l.hasOwnProperty(x)&&(a=l[x],a!==void 0&&Yp(s,n,x,a,l,void 0));return}}for(p in l)l.hasOwnProperty(p)&&(a=l[p],a!=null&&cs(s,n,p,a,l,null))}function Mf(s,n,l,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var e=null,t=null,F=null,p=null,o=null,d=null,x=null;for(h in l){var C=l[h];if(l.hasOwnProperty(h)&&C!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":o=C;default:a.hasOwnProperty(h)||cs(s,n,h,null,a,C)}}for(var E in a){var h=a[E];if(C=l[E],a.hasOwnProperty(E)&&(h!=null||C!=null))switch(E){case"type":t=h;break;case"name":e=h;break;case"checked":d=h;break;case"defaultChecked":x=h;break;case"value":F=h;break;case"defaultValue":p=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(137,n));break;default:h!==C&&cs(s,n,E,h,a,C)}}lF(s,F,p,o,d,x,t,e);return;case"select":h=F=p=E=null;for(t in l)if(o=l[t],l.hasOwnProperty(t)&&o!=null)switch(t){case"value":break;case"multiple":h=o;default:a.hasOwnProperty(t)||cs(s,n,t,null,a,o)}for(e in a)if(t=a[e],o=l[e],a.hasOwnProperty(e)&&(t!=null||o!=null))switch(e){case"value":E=t;break;case"defaultValue":p=t;break;case"multiple":F=t;default:t!==o&&cs(s,n,e,t,a,o)}n=p,l=F,a=h,E!=null?Vl(s,!!l,E,!1):!!a!=!!l&&(n!=null?Vl(s,!!l,n,!0):Vl(s,!!l,l?[]:"",!1));return;case"textarea":h=E=null;for(p in l)if(e=l[p],l.hasOwnProperty(p)&&e!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:cs(s,n,p,null,a,e)}for(F in a)if(e=a[F],t=l[F],a.hasOwnProperty(F)&&(e!=null||t!=null))switch(F){case"value":E=e;break;case"defaultValue":h=e;break;case"children":break;case"dangerouslySetInnerHTML":if(e!=null)throw Error(c(91));break;default:e!==t&&cs(s,n,F,e,a,t)}qo(s,E,h);return;case"option":for(var z in l)E=l[z],l.hasOwnProperty(z)&&E!=null&&!a.hasOwnProperty(z)&&(z==="selected"?s.selected=!1:cs(s,n,z,null,a,E));for(o in a)E=a[o],h=l[o],a.hasOwnProperty(o)&&E!==h&&(E!=null||h!=null)&&(o==="selected"?s.selected=E&&typeof E!="function"&&typeof E!="symbol":cs(s,n,o,E,a,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in l)E=l[U],l.hasOwnProperty(U)&&E!=null&&!a.hasOwnProperty(U)&&cs(s,n,U,null,a,E);for(d in a)if(E=a[d],h=l[d],a.hasOwnProperty(d)&&E!==h&&(E!=null||h!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,n));break;default:cs(s,n,d,E,a,h)}return;default:if(eF(n)){for(var is in l)E=l[is],l.hasOwnProperty(is)&&E!==void 0&&!a.hasOwnProperty(is)&&Yp(s,n,is,void 0,a,E);for(x in a)E=a[x],h=l[x],!a.hasOwnProperty(x)||E===h||E===void 0&&h===void 0||Yp(s,n,x,E,a,h);return}}for(var u in l)E=l[u],l.hasOwnProperty(u)&&E!=null&&!a.hasOwnProperty(u)&&cs(s,n,u,null,a,E);for(C in a)E=a[C],h=l[C],!a.hasOwnProperty(C)||E===h||E==null&&h==null||cs(s,n,C,E,a,h)}function Yr(s){switch(s){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nf(){if(typeof performance.getEntriesByType=="function"){for(var s=0,n=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var e=l[a],t=e.transferSize,F=e.initiatorType,p=e.duration;if(t&&p&&Yr(F)){for(F=0,p=e.responseEnd,a+=1;a<l.length;a++){var o=l[a],d=o.startTime;if(d>p)break;var x=o.transferSize,C=o.initiatorType;x&&Yr(C)&&(o=o.responseEnd,F+=x*(o<p?1:(p-d)/(o-d)))}if(--a,n+=8*(t+F)/(e.duration/1e3),s++,10<s)break}}if(0<s)return n/s/1e6}return navigator.connection&&(s=navigator.connection.downlink,typeof s=="number")?s:5}var Qp=null,Zp=null;function jt(s){return s.nodeType===9?s:s.ownerDocument}function Qr(s){switch(s){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zr(s,n){if(s===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return s===1&&n==="foreignObject"?0:s}function Kp(s,n){return s==="textarea"||s==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vp=null;function Hf(){var s=window.event;return s&&s.type==="popstate"?s===Vp?!1:(Vp=s,!0):(Vp=null,!1)}var Kr=typeof setTimeout=="function"?setTimeout:void 0,zf=typeof clearTimeout=="function"?clearTimeout:void 0,Vr=typeof Promise=="function"?Promise:void 0,Of=typeof queueMicrotask=="function"?queueMicrotask:typeof Vr<"u"?function(s){return Vr.resolve(null).then(s).catch(Rf)}:Kr;function Rf(s){setTimeout(function(){throw s})}function El(s){return s==="head"}function Jr(s,n){var l=n,a=0;do{var e=l.nextSibling;if(s.removeChild(l),e&&e.nodeType===8)if(l=e.data,l==="/$"||l==="/&"){if(a===0){s.removeChild(e),Sa(n);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")de(s.ownerDocument.documentElement);else if(l==="head"){l=s.ownerDocument.head,de(l);for(var t=l.firstChild;t;){var F=t.nextSibling,p=t.nodeName;t[za]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&t.rel.toLowerCase()==="stylesheet"||l.removeChild(t),t=F}}else l==="body"&&de(s.ownerDocument.body);l=e}while(l);Sa(n)}function Wr(s,n){var l=s;s=0;do{var a=l.nextSibling;if(l.nodeType===1?n?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(n?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(s===0)break;s--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||s++;l=a}while(l)}function Jp(s){var n=s.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var l=n;switch(n=n.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Jp(l),sF(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}s.removeChild(l)}}function Gf(s,n,l,a){for(;s.nodeType===1;){var e=l;if(s.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(s.nodeName!=="INPUT"||s.type!=="hidden"))break}else if(a){if(!s[za])switch(n){case"meta":if(!s.hasAttribute("itemprop"))break;return s;case"link":if(t=s.getAttribute("rel"),t==="stylesheet"&&s.hasAttribute("data-precedence"))break;if(t!==e.rel||s.getAttribute("href")!==(e.href==null||e.href===""?null:e.href)||s.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin)||s.getAttribute("title")!==(e.title==null?null:e.title))break;return s;case"style":if(s.hasAttribute("data-precedence"))break;return s;case"script":if(t=s.getAttribute("src"),(t!==(e.src==null?null:e.src)||s.getAttribute("type")!==(e.type==null?null:e.type)||s.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin))&&t&&s.hasAttribute("async")&&!s.hasAttribute("itemprop"))break;return s;default:return s}}else if(n==="input"&&s.type==="hidden"){var t=e.name==null?null:""+e.name;if(e.type==="hidden"&&s.getAttribute("name")===t)return s}else return s;if(s=hn(s.nextSibling),s===null)break}return null}function Bf(s,n,l){if(n==="")return null;for(;s.nodeType!==3;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!l||(s=hn(s.nextSibling),s===null))return null;return s}function $r(s,n){for(;s.nodeType!==8;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!n||(s=hn(s.nextSibling),s===null))return null;return s}function Wp(s){return s.data==="$?"||s.data==="$~"}function $p(s){return s.data==="$!"||s.data==="$?"&&s.ownerDocument.readyState!=="loading"}function Uf(s,n){var l=s.ownerDocument;if(s.data==="$~")s._reactRetry=n;else if(s.data!=="$?"||l.readyState!=="loading")n();else{var a=function(){n(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),s._reactRetry=a}}function hn(s){for(;s!=null;s=s.nextSibling){var n=s.nodeType;if(n===1||n===3)break;if(n===8){if(n=s.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return s}var Pp=null;function Pr(s){s=s.nextSibling;for(var n=0;s;){if(s.nodeType===8){var l=s.data;if(l==="/$"||l==="/&"){if(n===0)return hn(s.nextSibling);n--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||n++}s=s.nextSibling}return null}function Ir(s){s=s.previousSibling;for(var n=0;s;){if(s.nodeType===8){var l=s.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(n===0)return s;n--}else l!=="/$"&&l!=="/&"||n++}s=s.previousSibling}return null}function su(s,n,l){switch(n=jt(l),s){case"html":if(s=n.documentElement,!s)throw Error(c(452));return s;case"head":if(s=n.head,!s)throw Error(c(453));return s;case"body":if(s=n.body,!s)throw Error(c(454));return s;default:throw Error(c(451))}}function de(s){for(var n=s.attributes;n.length;)s.removeAttributeNode(n[0]);sF(s)}var mn=new Map,nu=new Set;function Tt(s){return typeof s.getRootNode=="function"?s.getRootNode():s.nodeType===9?s:s.ownerDocument}var Wn=T.d;T.d={f:Lf,r:qf,D:Xf,C:wf,L:kf,m:Yf,X:Zf,S:Qf,M:Kf};function Lf(){var s=Wn.f(),n=xt();return s||n}function qf(s){var n=Ql(s);n!==null&&n.tag===5&&n.type==="form"?mi(n):Wn.r(s)}var Aa=typeof document>"u"?null:document;function lu(s,n,l){var a=Aa;if(a&&typeof n=="string"&&n){var e=cn(n);e='link[rel="'+s+'"][href="'+e+'"]',typeof l=="string"&&(e+='[crossorigin="'+l+'"]'),nu.has(e)||(nu.add(e),s={rel:s,crossOrigin:l,href:n},a.querySelector(e)===null&&(n=a.createElement("link"),Rs(n,"link",s),Ts(n),a.head.appendChild(n)))}}function Xf(s){Wn.D(s),lu("dns-prefetch",s,null)}function wf(s,n){Wn.C(s,n),lu("preconnect",s,n)}function kf(s,n,l){Wn.L(s,n,l);var a=Aa;if(a&&s&&n){var e='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&l&&l.imageSrcSet?(e+='[imagesrcset="'+cn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(e+='[imagesizes="'+cn(l.imageSizes)+'"]')):e+='[href="'+cn(s)+'"]';var t=e;switch(n){case"style":t=Ca(s);break;case"script":t=Da(s)}mn.has(t)||(s=_({rel:"preload",href:n==="image"&&l&&l.imageSrcSet?void 0:s,as:n},l),mn.set(t,s),a.querySelector(e)!==null||n==="style"&&a.querySelector(Ee(t))||n==="script"&&a.querySelector(he(t))||(n=a.createElement("link"),Rs(n,"link",s),Ts(n),a.head.appendChild(n)))}}function Yf(s,n){Wn.m(s,n);var l=Aa;if(l&&s){var a=n&&typeof n.as=="string"?n.as:"script",e='link[rel="modulepreload"][as="'+cn(a)+'"][href="'+cn(s)+'"]',t=e;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":t=Da(s)}if(!mn.has(t)&&(s=_({rel:"modulepreload",href:s},n),mn.set(t,s),l.querySelector(e)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(he(t)))return}a=l.createElement("link"),Rs(a,"link",s),Ts(a),l.head.appendChild(a)}}}function Qf(s,n,l){Wn.S(s,n,l);var a=Aa;if(a&&s){var e=Zl(a).hoistableStyles,t=Ca(s);n=n||"default";var F=e.get(t);if(!F){var p={loading:0,preload:null};if(F=a.querySelector(Ee(t)))p.loading=5;else{s=_({rel:"stylesheet",href:s,"data-precedence":n},l),(l=mn.get(t))&&Ip(s,l);var o=F=a.createElement("link");Ts(o),Rs(o,"link",s),o._p=new Promise(function(d,x){o.onload=d,o.onerror=x}),o.addEventListener("load",function(){p.loading|=1}),o.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Mt(F,n,a)}F={type:"stylesheet",instance:F,count:1,state:p},e.set(t,F)}}}function Zf(s,n){Wn.X(s,n);var l=Aa;if(l&&s){var a=Zl(l).hoistableScripts,e=Da(s),t=a.get(e);t||(t=l.querySelector(he(e)),t||(s=_({src:s,async:!0},n),(n=mn.get(e))&&so(s,n),t=l.createElement("script"),Ts(t),Rs(t,"link",s),l.head.appendChild(t)),t={type:"script",instance:t,count:1,state:null},a.set(e,t))}}function Kf(s,n){Wn.M(s,n);var l=Aa;if(l&&s){var a=Zl(l).hoistableScripts,e=Da(s),t=a.get(e);t||(t=l.querySelector(he(e)),t||(s=_({src:s,async:!0,type:"module"},n),(n=mn.get(e))&&so(s,n),t=l.createElement("script"),Ts(t),Rs(t,"link",s),l.head.appendChild(t)),t={type:"script",instance:t,count:1,state:null},a.set(e,t))}}function au(s,n,l,a){var e=(e=V.current)?Tt(e):null;if(!e)throw Error(c(446));switch(s){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(n=Ca(l.href),l=Zl(e).hoistableStyles,a=l.get(n),a||(a={type:"style",instance:null,count:0,state:null},l.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){s=Ca(l.href);var t=Zl(e).hoistableStyles,F=t.get(s);if(F||(e=e.ownerDocument||e,F={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},t.set(s,F),(t=e.querySelector(Ee(s)))&&!t._p&&(F.instance=t,F.state.loading=5),mn.has(s)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},mn.set(s,l),t||Vf(e,s,l,F.state))),n&&a===null)throw Error(c(528,""));return F}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=l.async,l=l.src,typeof l=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Da(l),l=Zl(e).hoistableScripts,a=l.get(n),a||(a={type:"script",instance:null,count:0,state:null},l.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,s))}}function Ca(s){return'href="'+cn(s)+'"'}function Ee(s){return'link[rel="stylesheet"]['+s+"]"}function eu(s){return _({},s,{"data-precedence":s.precedence,precedence:null})}function Vf(s,n,l,a){s.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=s.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Rs(n,"link",l),Ts(n),s.head.appendChild(n))}function Da(s){return'[src="'+cn(s)+'"]'}function he(s){return"script[async]"+s}function tu(s,n,l){if(n.count++,n.instance===null)switch(n.type){case"style":var a=s.querySelector('style[data-href~="'+cn(l.href)+'"]');if(a)return n.instance=a,Ts(a),a;var e=_({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(s.ownerDocument||s).createElement("style"),Ts(a),Rs(a,"style",e),Mt(a,l.precedence,s),n.instance=a;case"stylesheet":e=Ca(l.href);var t=s.querySelector(Ee(e));if(t)return n.state.loading|=4,n.instance=t,Ts(t),t;a=eu(l),(e=mn.get(e))&&Ip(a,e),t=(s.ownerDocument||s).createElement("link"),Ts(t);var F=t;return F._p=new Promise(function(p,o){F.onload=p,F.onerror=o}),Rs(t,"link",a),n.state.loading|=4,Mt(t,l.precedence,s),n.instance=t;case"script":return t=Da(l.src),(e=s.querySelector(he(t)))?(n.instance=e,Ts(e),e):(a=l,(e=mn.get(t))&&(a=_({},l),so(a,e)),s=s.ownerDocument||s,e=s.createElement("script"),Ts(e),Rs(e,"link",a),s.head.appendChild(e),n.instance=e);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Mt(a,l.precedence,s));return n.instance}function Mt(s,n,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=a.length?a[a.length-1]:null,t=e,F=0;F<a.length;F++){var p=a[F];if(p.dataset.precedence===n)t=p;else if(t!==e)break}t?t.parentNode.insertBefore(s,t.nextSibling):(n=l.nodeType===9?l.head:l,n.insertBefore(s,n.firstChild))}function Ip(s,n){s.crossOrigin==null&&(s.crossOrigin=n.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=n.referrerPolicy),s.title==null&&(s.title=n.title)}function so(s,n){s.crossOrigin==null&&(s.crossOrigin=n.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=n.referrerPolicy),s.integrity==null&&(s.integrity=n.integrity)}var Nt=null;function Fu(s,n,l){if(Nt===null){var a=new Map,e=Nt=new Map;e.set(l,a)}else e=Nt,a=e.get(l),a||(a=new Map,e.set(l,a));if(a.has(s))return a;for(a.set(s,null),l=l.getElementsByTagName(s),e=0;e<l.length;e++){var t=l[e];if(!(t[za]||t[Ns]||s==="link"&&t.getAttribute("rel")==="stylesheet")&&t.namespaceURI!=="http://www.w3.org/2000/svg"){var F=t.getAttribute(n)||"";F=s+F;var p=a.get(F);p?p.push(t):a.set(F,[t])}}return a}function pu(s,n,l){s=s.ownerDocument||s,s.head.insertBefore(l,n==="title"?s.querySelector("head > title"):null)}function Jf(s,n,l){if(l===1||n.itemProp!=null)return!1;switch(s){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(s=n.disabled,typeof n.precedence=="string"&&s==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ou(s){return!(s.type==="stylesheet"&&(s.state.loading&3)===0)}function Wf(s,n,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var e=Ca(a.href),t=n.querySelector(Ee(e));if(t){n=t._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(s.count++,s=Ht.bind(s),n.then(s,s)),l.state.loading|=4,l.instance=t,Ts(t);return}t=n.ownerDocument||n,a=eu(a),(e=mn.get(e))&&Ip(a,e),t=t.createElement("link"),Ts(t);var F=t;F._p=new Promise(function(p,o){F.onload=p,F.onerror=o}),Rs(t,"link",a),l.instance=t}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(l,n),(n=l.state.preload)&&(l.state.loading&3)===0&&(s.count++,l=Ht.bind(s),n.addEventListener("load",l),n.addEventListener("error",l))}}var no=0;function $f(s,n){return s.stylesheets&&s.count===0&&Ot(s,s.stylesheets),0<s.count||0<s.imgCount?function(l){var a=setTimeout(function(){if(s.stylesheets&&Ot(s,s.stylesheets),s.unsuspend){var t=s.unsuspend;s.unsuspend=null,t()}},6e4+n);0<s.imgBytes&&no===0&&(no=62500*Nf());var e=setTimeout(function(){if(s.waitingForImages=!1,s.count===0&&(s.stylesheets&&Ot(s,s.stylesheets),s.unsuspend)){var t=s.unsuspend;s.unsuspend=null,t()}},(s.imgBytes>no?50:800)+n);return s.unsuspend=l,function(){s.unsuspend=null,clearTimeout(a),clearTimeout(e)}}:null}function Ht(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ot(this,this.stylesheets);else if(this.unsuspend){var s=this.unsuspend;this.unsuspend=null,s()}}}var zt=null;function Ot(s,n){s.stylesheets=null,s.unsuspend!==null&&(s.count++,zt=new Map,n.forEach(Pf,s),zt=null,Ht.call(s))}function Pf(s,n){if(!(n.state.loading&4)){var l=zt.get(s);if(l)var a=l.get(null);else{l=new Map,zt.set(s,l);for(var e=s.querySelectorAll("link[data-precedence],style[data-precedence]"),t=0;t<e.length;t++){var F=e[t];(F.nodeName==="LINK"||F.getAttribute("media")!=="not all")&&(l.set(F.dataset.precedence,F),a=F)}a&&l.set(null,a)}e=n.instance,F=e.getAttribute("data-precedence"),t=l.get(F)||a,t===a&&l.set(null,e),l.set(F,e),this.count++,a=Ht.bind(this),e.addEventListener("load",a),e.addEventListener("error",a),t?t.parentNode.insertBefore(e,t.nextSibling):(s=s.nodeType===9?s.head:s,s.insertBefore(e,s.firstChild)),n.state.loading|=4}}var me={$$typeof:Ss,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function If(s,n,l,a,e,t,F,p,o){this.tag=1,this.containerInfo=s,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=a,this.onUncaughtError=e,this.onCaughtError=t,this.onRecoverableError=F,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function cu(s,n,l,a,e,t,F,p,o,d,x,C){return s=new If(s,n,l,F,o,d,x,C,p),n=1,t===!0&&(n|=24),t=nn(3,null,null,n),s.current=t,t.stateNode=s,n=OF(),n.refCount++,s.pooledCache=n,n.refCount++,t.memoizedState={element:a,isDehydrated:l,cache:n},UF(t),s}function iu(s){return s?(s=la,s):la}function ru(s,n,l,a,e,t){e=iu(e),a.context===null?a.context=e:a.pendingContext=e,a=tl(n),a.payload={element:l},t=t===void 0?null:t,t!==null&&(a.callback=t),l=Fl(s,a,n),l!==null&&(Ws(l,s,n),Wa(l,s,n))}function uu(s,n){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var l=s.retryLane;s.retryLane=l!==0&&l<n?l:n}}function lo(s,n){uu(s,n),(s=s.alternate)&&uu(s,n)}function yu(s){if(s.tag===13||s.tag===31){var n=Tl(s,67108864);n!==null&&Ws(n,s,67108864),lo(s,67108864)}}function fu(s){if(s.tag===13||s.tag===31){var n=Fn();n=$t(n);var l=Tl(s,n);l!==null&&Ws(l,s,n),lo(s,n)}}var Rt=!0;function sd(s,n,l,a){var e=v.T;v.T=null;var t=T.p;try{T.p=2,ao(s,n,l,a)}finally{T.p=t,v.T=e}}function nd(s,n,l,a){var e=v.T;v.T=null;var t=T.p;try{T.p=8,ao(s,n,l,a)}finally{T.p=t,v.T=e}}function ao(s,n,l,a){if(Rt){var e=eo(a);if(e===null)kp(s,n,a,Gt,l),Eu(s,a);else if(ad(e,s,n,l,a))a.stopPropagation();else if(Eu(s,a),n&4&&-1<ld.indexOf(s)){for(;e!==null;){var t=Ql(e);if(t!==null)switch(t.tag){case 3:if(t=t.stateNode,t.current.memoizedState.isDehydrated){var F=Cl(t.pendingLanes);if(F!==0){var p=t;for(p.pendingLanes|=2,p.entangledLanes|=2;F;){var o=1<<31-Is(F);p.entanglements[1]|=o,F&=~o}Mn(t),(as&6)===0&&(mt=$s()+500,ue(0))}}break;case 31:case 13:p=Tl(t,2),p!==null&&Ws(p,t,2),xt(),lo(t,2)}if(t=eo(a),t===null&&kp(s,n,a,Gt,l),t===e)break;e=t}e!==null&&a.stopPropagation()}else kp(s,n,a,null,l)}}function eo(s){return s=FF(s),to(s)}var Gt=null;function to(s){if(Gt=null,s=Yl(s),s!==null){var n=G(s);if(n===null)s=null;else{var l=n.tag;if(l===13){if(s=L(n),s!==null)return s;s=null}else if(l===31){if(s=X(n),s!==null)return s;s=null}else if(l===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;s=null}else n!==s&&(s=null)}}return Gt=s,null}function du(s){switch(s){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qu()){case Ao:return 2;case Co:return 8;case De:case Xu:return 32;case Do:return 268435456;default:return 32}default:return 32}}var Fo=!1,hl=null,ml=null,gl=null,ge=new Map,xe=new Map,xl=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eu(s,n){switch(s){case"focusin":case"focusout":hl=null;break;case"dragenter":case"dragleave":ml=null;break;case"mouseover":case"mouseout":gl=null;break;case"pointerover":case"pointerout":ge.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xe.delete(n.pointerId)}}function ve(s,n,l,a,e,t){return s===null||s.nativeEvent!==t?(s={blockedOn:n,domEventName:l,eventSystemFlags:a,nativeEvent:t,targetContainers:[e]},n!==null&&(n=Ql(n),n!==null&&yu(n)),s):(s.eventSystemFlags|=a,n=s.targetContainers,e!==null&&n.indexOf(e)===-1&&n.push(e),s)}function ad(s,n,l,a,e){switch(n){case"focusin":return hl=ve(hl,s,n,l,a,e),!0;case"dragenter":return ml=ve(ml,s,n,l,a,e),!0;case"mouseover":return gl=ve(gl,s,n,l,a,e),!0;case"pointerover":var t=e.pointerId;return ge.set(t,ve(ge.get(t)||null,s,n,l,a,e)),!0;case"gotpointercapture":return t=e.pointerId,xe.set(t,ve(xe.get(t)||null,s,n,l,a,e)),!0}return!1}function hu(s){var n=Yl(s.target);if(n!==null){var l=G(n);if(l!==null){if(n=l.tag,n===13){if(n=L(l),n!==null){s.blockedOn=n,No(s.priority,function(){fu(l)});return}}else if(n===31){if(n=X(l),n!==null){s.blockedOn=n,No(s.priority,function(){fu(l)});return}}else if(n===3&&l.stateNode.current.memoizedState.isDehydrated){s.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Bt(s){if(s.blockedOn!==null)return!1;for(var n=s.targetContainers;0<n.length;){var l=eo(s.nativeEvent);if(l===null){l=s.nativeEvent;var a=new l.constructor(l.type,l);tF=a,l.target.dispatchEvent(a),tF=null}else return n=Ql(l),n!==null&&yu(n),s.blockedOn=l,!1;n.shift()}return!0}function mu(s,n,l){Bt(s)&&l.delete(n)}function ed(){Fo=!1,hl!==null&&Bt(hl)&&(hl=null),ml!==null&&Bt(ml)&&(ml=null),gl!==null&&Bt(gl)&&(gl=null),ge.forEach(mu),xe.forEach(mu)}function Ut(s,n){s.blockedOn===n&&(s.blockedOn=null,Fo||(Fo=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,ed)))}var Lt=null;function gu(s){Lt!==s&&(Lt=s,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){Lt===s&&(Lt=null);for(var n=0;n<s.length;n+=3){var l=s[n],a=s[n+1],e=s[n+2];if(typeof a!="function"){if(to(a||l)===null)continue;break}var t=Ql(l);t!==null&&(s.splice(n,3),n-=3,ep(t,{pending:!0,data:e,method:l.method,action:a},a,e))}}))}function Sa(s){function n(o){return Ut(o,s)}hl!==null&&Ut(hl,s),ml!==null&&Ut(ml,s),gl!==null&&Ut(gl,s),ge.forEach(n),xe.forEach(n);for(var l=0;l<xl.length;l++){var a=xl[l];a.blockedOn===s&&(a.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)hu(l),l.blockedOn===null&&xl.shift();if(l=(s.ownerDocument||s).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var e=l[a],t=l[a+1],F=e[Ys]||null;if(typeof t=="function")F||gu(l);else if(F){var p=null;if(t&&t.hasAttribute("formAction")){if(e=t,F=t[Ys]||null)p=F.formAction;else if(to(e)!==null)continue}else p=F.action;typeof p=="function"?l[a+1]=p:(l.splice(a,3),a-=3),gu(l)}}}function xu(){function s(t){t.canIntercept&&t.info==="react-transition"&&t.intercept({handler:function(){return new Promise(function(F){return e=F})},focusReset:"manual",scroll:"manual"})}function n(){e!==null&&(e(),e=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var t=navigation.currentEntry;t&&t.url!=null&&navigation.navigate(t.url,{state:t.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,e=null;return navigation.addEventListener("navigate",s),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",s),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),e!==null&&(e(),e=null)}}}function po(s){this._internalRoot=s}qt.prototype.render=po.prototype.render=function(s){var n=this._internalRoot;if(n===null)throw Error(c(409));var l=n.current,a=Fn();ru(l,a,s,n,null,null)},qt.prototype.unmount=po.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var n=s.containerInfo;ru(s.current,2,null,s,null,null),xt(),n[kl]=null}};function qt(s){this._internalRoot=s}qt.prototype.unstable_scheduleHydration=function(s){if(s){var n=Mo();s={blockedOn:null,target:s,priority:n};for(var l=0;l<xl.length&&n!==0&&n<xl[l].priority;l++);xl.splice(l,0,s),l===0&&hu(s)}};var vu=A.version;if(vu!=="19.2.6")throw Error(c(527,vu,"19.2.6"));T.findDOMNode=function(s){var n=s._reactInternals;if(n===void 0)throw typeof s.render=="function"?Error(c(188)):(s=Object.keys(s).join(","),Error(c(268,s)));return s=g(n),s=s!==null?N(s):null,s=s===null?null:s.stateNode,s};var td={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xt.isDisabled&&Xt.supportsFiber)try{Ma=Xt.inject(td),Ps=Xt}catch{}}return Ae.createRoot=function(s,n){if(!j(s))throw Error(c(299));var l=!1,a="",e=ji,t=Ti,F=Mi;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(e=n.onUncaughtError),n.onCaughtError!==void 0&&(t=n.onCaughtError),n.onRecoverableError!==void 0&&(F=n.onRecoverableError)),n=cu(s,1,!1,null,null,l,a,null,e,t,F,xu),s[kl]=n.current,wp(s),new po(n)},Ae.hydrateRoot=function(s,n,l){if(!j(s))throw Error(c(299));var a=!1,e="",t=ji,F=Ti,p=Mi,o=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(e=l.identifierPrefix),l.onUncaughtError!==void 0&&(t=l.onUncaughtError),l.onCaughtError!==void 0&&(F=l.onCaughtError),l.onRecoverableError!==void 0&&(p=l.onRecoverableError),l.formState!==void 0&&(o=l.formState)),n=cu(s,1,!0,n,l??null,a,e,o,t,F,p,xu),n.context=iu(null),l=n.current,a=Fn(),a=$t(a),e=tl(a),e.callback=null,Fl(l,e,a),l=a,n.current.lanes=l,Ha(n,l),Mn(n),s[kl]=n.current,wp(s),new qt(n)},Ae.version="19.2.6",Ae}var Nu;function dd(){if(Nu)return co.exports;Nu=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(A){console.error(A)}}return y(),co.exports=fd(),co.exports}var Ed=dd(),Nn=fo();const hd="怪话怪的档案",md=y=>y.kind==="home"?"/":y.kind==="dossier"?"/dossier/":y.kind==="clues"?"/clues/":y.kind==="clue"?`/clues/${y.clue}/`:y.kind==="evidence"?`/evidence/${y.evidence.meta.slug}/`:"/404.html",wt=y=>`/evidence/${y.meta.slug}/`,Eo=y=>`/clues/${y}/`,Hu=y=>y.split("/").map(A=>encodeURIComponent(decodeURIComponent(A))).join("/"),gd=(y,A)=>{const S=y.replace(/\/index\.html$/i,"/"),c=S.endsWith("/")?S:`${S}/`;if(c==="/")return{kind:"home",site:A};if(c==="/dossier/")return{kind:"dossier",site:A};if(c==="/clues/")return{kind:"clues",site:A};const j=c.match(/^\/evidence\/(.+)\/$/);if(j){const L=Hu(j[1]),X=A.evidences.find(H=>H.meta.slug===L);if(X)return{kind:"evidence",site:A,evidence:X}}const G=c.match(/^\/clues\/(.+)\/$/);if(G){const L=Hu(G[1]);if(A.clues.some(X=>X.slug===L))return{kind:"clue",site:A,clue:L}}return{kind:"not-found",site:A}},_a=y=>{const A=new Date(y);return Number.isNaN(A.getTime())?y:new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}).format(A)},ho=(y,A=18)=>{const S=y.trim();return S.length<=A?S:`${S.slice(0,A)}...`},ja=y=>[...y].sort((A,S)=>{const c=new Date(A.meta.date).getTime();return new Date(S.meta.date).getTime()-c}),mo=y=>`${Math.max(1,Math.round(y))} 分钟`,xd=[{label:"证物",hint:"evidence",href:"/"},{label:"档案",hint:"dossier",href:"/dossier/"},{label:"线索",hint:"clues",href:"/clues/"}];function vd({route:y}){const[A,S]=Nn.useState(!1),c=y.site;return m.jsxs(m.Fragment,{children:[m.jsx("a",{className:"skip-link",href:"#content",children:"跳到正文"}),m.jsx(Ad,{}),m.jsx(Cd,{}),m.jsx(Dd,{route:y,onSearch:()=>S(!0)}),m.jsx("main",{id:"content",className:"site-main",children:m.jsx(jd,{route:y})}),m.jsx(Ud,{site:c}),m.jsx(Gd,{site:c,open:A,onClose:()=>S(!1)})]})}function bd({path:y,site:A}){return m.jsx(vd,{route:gd(y,A)})}function Ad(){return m.jsx("script",{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:"(()=>{try{const p=localStorage.getItem('guai-persona')||'dark';document.documentElement.dataset.persona=p;}catch{document.documentElement.dataset.persona='dark';}})();"}})}function Cd(){return m.jsxs(m.Fragment,{children:[m.jsx("canvas",{className:"clue-canvas","data-clue-canvas":!0,"aria-hidden":"true"}),m.jsx("div",{className:"texture-field","aria-hidden":"true"})]})}function Dd({route:y,onSearch:A}){const[S,c]=Nn.useState(!1),[j,G]=Nn.useState("dark"),L=md(y),X=_=>_==="/"?y.kind==="home":L.startsWith(_),H=()=>{const _=Ru()==="dark"?"light":"dark";G(_),document.documentElement.dataset.persona=_,localStorage.setItem("guai-persona",_)},g=()=>{c(!1),A()},N=()=>{H(),c(!1)};return Nn.useEffect(()=>{G(Ru())},[]),Nn.useEffect(()=>{if(!S)return;const _=k=>{k.key==="Escape"&&c(!1)};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[S]),m.jsxs("header",{className:"site-header",children:[m.jsxs("a",{className:"brand-stamp",href:"/","aria-label":"返回证物首页",children:[m.jsx("strong",{children:"怪话怪"}),m.jsx("small",{children:"黑白档案"})]}),m.jsx("nav",{className:"paper-nav","aria-label":"主导航",children:m.jsx(zu,{isActive:X})}),m.jsxs("div",{className:"header-tools",children:[m.jsx("button",{className:"ink-button",type:"button",onClick:g,children:"搜寻"}),m.jsx(Ou,{persona:j,onToggle:H,className:"desktop-persona-toggle"}),m.jsx("button",{className:"ink-button menu-button",type:"button","aria-controls":"mobile-site-menu","aria-expanded":S,"aria-label":S?"关闭目录":"打开目录",onClick:()=>c(_=>!_),children:"目录"})]}),m.jsxs("div",{id:"mobile-site-menu",className:"mobile-menu",hidden:!S,children:[m.jsx("nav",{className:"mobile-nav","aria-label":"手机端目录",children:m.jsx(zu,{isActive:X,onNavigate:()=>c(!1)})}),m.jsx(Ou,{persona:j,onToggle:N,className:"mobile-persona-toggle"})]})]})}function zu({isActive:y,onNavigate:A}){return xd.map((S,c)=>m.jsxs("a",{href:S.href,className:y(S.href)?"is-active":"",style:{"--pin-tilt":`${[-5,3,-2][c]}deg`},onClick:A,children:[m.jsx("span",{children:S.label}),m.jsx("em",{children:S.hint})]},S.href))}function Ou({persona:y,onToggle:A,className:S=""}){return m.jsx("button",{className:`persona-toggle ${S}`.trim(),type:"button",onClick:A,"aria-label":"切换黑白人格",children:m.jsx("span",{children:y==="dark"?"反稿":"黑底"})})}function Ru(){return typeof document>"u"?"dark":document.documentElement.dataset.persona==="light"?"light":"dark"}function go({title:y,className:A=""}){const S=Sd(y);return m.jsx("h1",{className:`fragment-title ${A}`.trim(),"aria-label":y,children:S.map((c,j)=>m.jsx("span",{children:c},`${c}-${j}`))})}function Sd(y){const A=y.trim().replace(/\s+/g," ");if(A.length<=8)return[A];const S=/[A-Za-z0-9]/.test(A)&&/[\u4e00-\u9fff]/.test(A),c=S?9:A.length>24?7:9,G=(A.match(/[A-Za-z0-9+#.]+|[\u4e00-\u9fff]+|[^\s]/g)||[A]).flatMap(X=>_d(X,S&&/[\u4e00-\u9fff]/.test(X)?4:c)),L=[];return G.forEach(X=>{const H=L[L.length-1]||"";if(H&&`${H}${X}`.length<=c){L[L.length-1]=`${H}${X}`;return}L.push(X)}),L.slice(0,4).concat(L.length>4?[L.slice(4).join("")]:[])}function _d(y,A){if(y.length<=A)return[y];const S=[];for(let c=0;c<y.length;c+=A)S.push(y.slice(c,c+A));return S}function jd({route:y}){return y.kind==="home"?m.jsx(Td,{site:y.site}):y.kind==="dossier"?m.jsx(Nd,{site:y.site}):y.kind==="clues"?m.jsx(Hd,{site:y.site}):y.kind==="clue"?m.jsx(zd,{site:y.site,clue:y.clue}):y.kind==="evidence"?m.jsx(Od,{evidence:y.evidence,site:y.site}):m.jsx(Rd,{site:y.site})}function Td({site:y}){const A=ja(y.evidences),S=A[0],c=A.slice(0,7);return m.jsxs("section",{className:"home-stage",children:[m.jsxs("div",{className:"case-board",children:[m.jsxs("div",{className:"case-copy",children:[m.jsx("p",{className:"kicker",children:"博客索引 / notes"}),m.jsx(go,{title:hd,className:"home-title"}),m.jsxs("p",{className:"lead",children:[y.evidences.length," 篇记录 · ",y.clues.length," 个标签",S?` · 最近更新 ${_a(S.meta.date)}`:""]})]}),m.jsxs("div",{className:"identity-badge","aria-label":"身份章",children:[m.jsx("img",{src:"/assets/images/wanzi1.jpg",alt:"怪话怪头像"}),m.jsx("span",{children:"身份章"})]}),S?m.jsxs("a",{className:"lead-evidence",href:wt(S),children:[m.jsx("span",{children:"最新证物"}),m.jsx("strong",{children:ho(S.meta.title,14)}),m.jsxs("em",{children:[_a(S.meta.date)," · ",mo(S.meta.readingTime)]})]}):null,m.jsxs("div",{className:"string-map","aria-hidden":"true",children:[m.jsx("span",{}),m.jsx("span",{}),m.jsx("span",{})]})]}),m.jsx(Gu,{evidences:c,title:"桌面散落的证物"}),m.jsx(Md,{site:y})]})}function Gu({evidences:y,title:A}){return m.jsxs("section",{className:"evidence-section",children:[m.jsxs("div",{className:"section-head",children:[m.jsx("span",{children:A}),m.jsx("a",{href:"/dossier/",children:"打开档案"})]}),m.jsx("div",{className:"evidence-grid",children:y.map((S,c)=>m.jsx(xo,{evidence:S,index:c},S.meta.slug))})]})}function xo({evidence:y,index:A}){return m.jsxs("a",{className:"evidence-card",href:wt(y),style:{"--card-tilt":`${[-2.8,1.9,-.8,2.5,-1.6][A%5]}deg`,"--card-shift":`${[-10,12,2,-4,8][A%5]}px`},children:[m.jsxs("span",{className:"evidence-id",children:["E-",String(A+1).padStart(4,"0")]}),m.jsx("strong",{children:ho(y.meta.title)}),m.jsxs("span",{className:"evidence-meta",children:[_a(y.meta.date)," · ",mo(y.meta.readingTime)]}),m.jsxs("span",{className:"clue-list",children:[y.meta.draft?m.jsx("em",{children:"未定稿"}):null,y.meta.clues.slice(0,2).map(S=>m.jsxs("em",{children:["#",S]},S))]})]})}function Md({site:y}){return m.jsx("section",{className:"clue-strip","aria-label":"线索",children:y.clues.slice(0,16).map((A,S)=>m.jsxs("a",{href:Eo(A.slug),style:{"--clue-tilt":`${[-6,4,-2,5,-4][S%5]}deg`},children:["#",A.name,m.jsx("span",{children:A.count})]},A.slug))})}function Nd({site:y}){const A=Nn.useMemo(()=>{const S=new Map;return ja(y.evidences).forEach(c=>{const j=new Date(c.meta.date).getFullYear().toString();S.set(j,[...S.get(j)||[],c])}),Array.from(S.entries())},[y.evidences]);return m.jsxs("section",{className:"dossier-page page-shell",children:[m.jsx(kt,{eyebrow:"dossier",title:"档案柜",text:"按时间查看全部文章，草稿会保留未定稿标记。"}),m.jsx("div",{className:"timeline",children:A.map(([S,c])=>m.jsxs("section",{className:"year-stack",children:[m.jsx("h2",{children:S}),m.jsx("div",{className:"evidence-list",children:c.map((j,G)=>m.jsx(xo,{evidence:j,index:G},j.meta.slug))})]},S))})]})}function Hd({site:y}){return m.jsxs("section",{className:"page-shell",children:[m.jsx(kt,{eyebrow:"clues",title:"线索",text:"标签和分类合并显示，点击后查看相关文章。"}),m.jsx("div",{className:"clue-wall",children:y.clues.map((A,S)=>m.jsxs("a",{href:Eo(A.slug),style:{"--clue-tilt":`${(S%2?1:-1)*(2+S%5)}deg`},children:[m.jsxs("span",{children:["#",A.name]}),m.jsxs("em",{children:[m.jsx("span",{children:A.count})," 件证物"]})]},A.slug))})]})}function zd({site:y,clue:A}){const S=y.clues.find(j=>j.slug===A),c=ja(y.evidences).filter(j=>j.meta.clues.some(G=>encodeURIComponent(G.toLowerCase().replace(/\s+/g,"-"))===A));return m.jsxs("section",{className:"page-shell",children:[m.jsx(kt,{eyebrow:"clue file",title:`#${S?.name||A}`,text:"当前标签下的相关文章。"}),m.jsx("div",{className:"evidence-grid",children:c.map((j,G)=>m.jsx(xo,{evidence:j,index:G},j.meta.slug))})]})}function Od({evidence:y,site:A}){const S=A.evidences.findIndex(c=>c.meta.slug===y.meta.slug);return m.jsxs("article",{className:"evidence-page",children:[m.jsxs("header",{className:"evidence-hero",children:[m.jsx("a",{className:"back-link",href:"/dossier/",children:"返回档案柜"}),m.jsxs("p",{className:"kicker",children:["E-",String(S+1).padStart(4,"0")," / evidence"]}),m.jsx(go,{title:y.meta.title,className:"evidence-title"}),m.jsxs("div",{className:"evidence-hero-meta",children:[m.jsx("span",{children:_a(y.meta.date)}),m.jsx("span",{children:mo(y.meta.readingTime)}),y.meta.draft?m.jsx("span",{children:"未定稿证物"}):null]}),m.jsx("div",{className:"clue-list hero-clues",children:y.meta.clues.map(c=>m.jsxs("a",{href:Eo(encodeURIComponent(c.toLowerCase().replace(/\s+/g,"-"))),children:["#",c]},c))})]}),m.jsx("div",{className:"manuscript",dangerouslySetInnerHTML:{__html:y.html}})]})}function Rd({site:y}){return m.jsxs("section",{className:"page-shell not-found",children:[m.jsx(kt,{eyebrow:"404",title:"这份证物不存在",text:"路径不存在。可以回到档案柜，或者打开搜寻面板。"}),m.jsx(Gu,{evidences:ja(y.evidences).slice(0,4),title:"最近可疑证物"})]})}function kt({eyebrow:y,title:A,text:S}){return m.jsxs("header",{className:"page-header",children:[m.jsx("p",{className:"kicker",children:y}),m.jsx(go,{title:A,className:"page-title"}),m.jsx("p",{children:S})]})}function Gd({site:y,open:A,onClose:S}){const[c,j]=Nn.useState(""),[G,L]=Nn.useState(0),X=Nn.useMemo(()=>{const N=c.trim().toLowerCase();return N?ja(y.evidences).filter(_=>[_.meta.title,_.meta.clues.join(" "),_.plainText.slice(0,1200)].join(" ").toLowerCase().includes(N)).slice(0,12):ja(y.evidences).slice(0,8)},[c,y.evidences]);if(Nn.useEffect(()=>{L(0)},[c,X.length]),!A)return null;const H=()=>{const N=X[G];N&&(window.location.href=wt(N),S())},g=N=>{if(N.key==="Escape"){N.preventDefault(),S();return}if(X.length){if(N.key==="ArrowDown"){N.preventDefault(),L(_=>(_+1)%X.length);return}if(N.key==="ArrowUp"){N.preventDefault(),L(_=>(_-1+X.length)%X.length);return}N.key==="Enter"&&(N.preventDefault(),H())}};return m.jsxs("div",{className:"command-layer",role:"dialog","aria-modal":"true","aria-label":"搜寻证物",children:[m.jsx("button",{className:"command-backdrop",type:"button",onClick:S,"aria-label":"关闭搜寻"}),m.jsxs("section",{className:"command-panel",onKeyDown:g,children:[m.jsxs("div",{className:"command-head",children:[m.jsx("span",{children:"搜寻证物"}),m.jsx("button",{type:"button",onClick:S,children:"关闭"})]}),m.jsx("input",{autoFocus:!0,value:c,onChange:N=>j(N.target.value),placeholder:"输入标题、线索或正文片段"}),m.jsxs("div",{className:"command-results",role:"listbox","aria-label":"搜寻结果",children:[X.map((N,_)=>m.jsxs("a",{href:wt(N),className:_===G?"is-active":"",role:"option","aria-selected":_===G,onMouseEnter:()=>L(_),onClick:S,children:[m.jsxs("span",{children:["E-",String(_+1).padStart(4,"0")]}),m.jsx("strong",{children:ho(N.meta.title)}),m.jsx("em",{children:Bd(N)})]},N.meta.slug)),X.length?null:m.jsx("p",{className:"command-empty",children:"没有命中证物"})]})]})]})}function Bd(y){const A=y.meta.clues.slice(0,2).join(" / ");return A?`${_a(y.meta.date)} · ${A}`:_a(y.meta.date)}function Ud({site:y}){return m.jsxs("footer",{className:"site-footer",children:[m.jsxs("span",{children:[y.evidences.length," 件证物 / ",y.clues.length," 条线索"]}),m.jsx("a",{href:"/rss.xml",children:"RSS"})]})}const Ld={evidences:[{meta:{title:"测试",date:"2026-05-26T15:56:00.000Z",draft:!1,tags:[],categories:["测试"],clues:["测试"],slug:"%E6%88%91%E7%88%B1%E4%BD%A0",sourcePath:"src/content/evidence/我爱你.md",readingTime:1},html:`<h2>先说结论</h2>
<h3></h3>`,plainText:"先说结论"},{meta:{title:"Hugo项目整体架构与GitHub部署说明",date:"2026-04-24T16:00:00.000Z",draft:!0,tags:[],categories:[],clues:[],slug:"hugo%E9%A1%B9%E7%9B%AE%E6%95%B4%E4%BD%93%E6%9E%B6%E6%9E%84%E4%B8%8Egithub%E9%83%A8%E7%BD%B2%E8%AF%B4%E6%98%8E",sourcePath:"src/content/evidence/hugo项目整体架构与GitHub部署说明.md",readingTime:5},html:`<h2>先说结论</h2>
<p>这个博客能部署到 GitHub，不只是因为“用了 Hugo”，更关键是<strong>项目架构从一开始就把“源码”和“构建产物”拆开了</strong>：</p>
<ol>
<li><code>F:\\myblog</code> 是 Hugo 源码仓库，负责写文章、配主题、改模板。</li>
<li><code>F:\\myblog\\public</code> 是 Hugo 生成后的静态站点目录，同时它又是一个<strong>独立 Git 仓库</strong>。</li>
<li><code>public</code> 的远程仓库指向 <code>https://github.com/caoxuan5211/caoxuan5211.github.io.git</code>。</li>
<li>执行 <code>deploy.ps1</code> 时，Hugo 先把页面生成到 <code>public/</code>，再把 <code>public/</code> 里的静态文件推到 GitHub Pages 仓库。</li>
</ol>
<p>所以，确实可以说：<strong>是架构决定了部署方式</strong>。<br>
Hugo 只负责“生成静态文件”，而“怎么上传到 GitHub”是当前这个仓库结构和脚本流程决定的。</p>
<h2>当前项目的整体结构</h2>
<p>结合这个仓库，核心目录可以这样理解：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>F:\\myblog</span></span>
<span class="line"><span>├── content/           # Markdown 文章内容</span></span>
<span class="line"><span>├── layouts/           # 对主题模板的覆盖</span></span>
<span class="line"><span>├── static/            # 原样复制到网站根目录的静态资源</span></span>
<span class="line"><span>├── assets/            # 需要 Hugo 处理的资源</span></span>
<span class="line"><span>├── themes/PaperMod/   # 主题（当前是 Git submodule）</span></span>
<span class="line"><span>├── hugo.toml          # Hugo 主配置</span></span>
<span class="line"><span>├── deploy.ps1         # 本地一键部署脚本</span></span>
<span class="line"><span>└── public/            # Hugo 构建输出目录，同时是独立 Git 仓库</span></span>
<span class="line"><span></span></span></code></pre>
<p>这里最关键的是最后一行：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>public = 构建产物目录 + GitHub Pages 发布仓库</span></span>
<span class="line"><span></span></span></code></pre>
<p>这就是整个发布链路的核心设计。</p>
<h2>这一套架构是怎么工作的</h2>
<h3>1. 内容层：<code>content/</code></h3>
<p>你平时写的文章都在 <code>content/</code> 下面，比如：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>content/blog/</span></span>
<span class="line"><span>content/posts/</span></span>
<span class="line"><span></span></span></code></pre>
<p>这些文件本质上只是 Markdown + Front Matter。<br>
Hugo 不会把它们原样发到 GitHub，而是会把它们解析后生成 HTML。</p>
<h3>2. 表现层：主题 + 模板覆盖</h3>
<p>当前配置里：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>theme = 'PaperMod'</span></span>
<span class="line"><span></span></span></code></pre>
<p>主题在 <code>themes/PaperMod/</code>，而且从 <code>.gitmodules</code> 可以看出它是一个 Git submodule。<br>
这表示：</p>
<ul>
<li>主题本身独立维护</li>
<li>你的博客仓库只引用它</li>
<li>如果你要自定义主题，不一定直接改主题源码，也可以用 <code>layouts/</code> 覆盖主题模板</li>
</ul>
<p>也就是说，这个站点的页面结构不是写死在文章里的，而是：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>Markdown 内容</span></span>
<span class="line"><span>    + Hugo 渲染规则</span></span>
<span class="line"><span>    + PaperMod 主题模板</span></span>
<span class="line"><span>    + 你的自定义 layouts/static/assets</span></span>
<span class="line"><span>    = 最终静态页面</span></span>
<span class="line"><span></span></span></code></pre>
<h3>3. 配置层：<code>hugo.toml</code></h3>
<p><code>hugo.toml</code> 决定了站点的全局行为。当前仓库里比较关键的配置有：</p>
<ul>
<li><code>baseURL = 'https://blog.mineguai.com/'</code></li>
<li><code>theme = 'PaperMod'</code></li>
<li><code>home = ["HTML", "RSS", "JSON"]</code></li>
<li>自定义 CSS / JS 通过 <code>[params.assets]</code> 注入</li>
<li>搜索页依赖 <code>JSON</code> 输出和 <code>fuseOpts</code></li>
</ul>
<p>这里可以看出一件事：<br>
<strong>Hugo 配置决定“生成什么样的站点”，但不决定“怎么发布到 GitHub”。</strong></p>
<h3>4. 构建层：<code>hugo</code></h3>
<p>部署脚本里这一句最关键：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">hugo -D --cleanDestinationDir</span></span>
<span class="line"></span></code></pre>
<p>它做了两件事：</p>
<ol>
<li>把整个站点重新构建到 <code>public/</code></li>
<li>清理旧的构建产物，避免残留文件</li>
</ol>
<p>生成后，<code>public/</code> 里面就不再是 Markdown，而是：</p>
<ul>
<li><code>index.html</code></li>
<li><code>404.html</code></li>
<li><code>index.xml</code></li>
<li><code>index.json</code></li>
<li>各文章目录下的 <code>index.html</code></li>
<li>CSS / JS / 图片等静态资源</li>
</ul>
<p>所以从 GitHub Pages 的视角看，它根本不关心 Hugo。<br>
GitHub Pages 看到的只是一个普通静态网站目录。</p>
<h2>为什么说“是架构决定部署方式”</h2>
<p>因为 GitHub Pages 只认两种东西：</p>
<ol>
<li>一个仓库里的静态文件</li>
<li>一个可发布的分支/目录</li>
</ol>
<p>而你当前项目采用的是这类架构：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>源码仓库（myblog）</span></span>
<span class="line"><span>    ↓ 运行 hugo</span></span>
<span class="line"><span>生成静态文件（public）</span></span>
<span class="line"><span>    ↓ git push</span></span>
<span class="line"><span>GitHub Pages 仓库（caoxuan5211.github.io）</span></span>
<span class="line"><span>    ↓</span></span>
<span class="line"><span>blog.mineguai.com</span></span>
<span class="line"><span></span></span></code></pre>
<p>这里真正决定部署方式的，不是 Markdown，也不是主题，而是下面这几个架构选择：</p>
<h3>架构选择 1：源码与产物分离</h3>
<p><code>F:\\myblog</code> 保存源代码，<code>F:\\myblog\\public</code> 保存构建结果。<br>
这样做的好处是：</p>
<ul>
<li>源仓库更干净，不把大量生成文件混在源码里</li>
<li>发布逻辑清晰，<code>public/</code> 就是“待上线结果”</li>
<li>出问题时容易判断：是“渲染问题”还是“发布问题”</li>
</ul>
<h3>架构选择 2：<code>public/</code> 自己就是 Git 仓库</h3>
<p>这一步特别关键。<br>
如果 <code>public/</code> 只是普通文件夹，那它只能当本地输出目录；<br>
但当它本身也是一个独立仓库时，它就可以直接承担“发布仓库”的角色。</p>
<p>这就是为什么 <code>deploy.ps1</code> 会先：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">Set-Location F:\\myblog\\public</span></span>
<span class="line"><span style="color:#FFFFFF">git switch main</span></span>
<span class="line"></span></code></pre>
<p>然后再：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">git add .</span></span>
<span class="line"><span style="color:#FFFFFF">git commit -m </span><span style="color:#F4D9E5">"</span><span style="color:#E8E8E8">$msg</span><span style="color:#F4D9E5">"</span></span>
<span class="line"><span style="color:#FFFFFF">git push </span><span style="color:#FFFFFF">-f</span><span style="color:#FFFFFF"> origin main</span></span>
<span class="line"></span></code></pre>
<p>这已经不是 Hugo 的行为了，而是标准 Git 发布流程。</p>
<h3>架构选择 3：GitHub Pages 仓库单独承载静态站点</h3>
<p><code>public/.git/config</code> 里可以看到远程仓库：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>https://github.com/caoxuan5211/caoxuan5211.github.io.git</span></span>
<span class="line"><span></span></span></code></pre>
<p>这意味着部署目标不是当前源码仓库，而是专门用于 Pages 的仓库。<br>
这样做的好处：</p>
<ul>
<li>页面仓库保持纯静态文件，最适合 GitHub Pages</li>
<li>Hugo 源码仓库和线上站点解耦</li>
<li>可以随时换发布方式，而不必改内容组织方式</li>
</ul>
<h3>架构选择 4：自定义域名通过 <code>CNAME</code> 绑定</h3>
<p><code>public/CNAME</code> 里是：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>blog.mineguai.com</span></span>
<span class="line"><span></span></span></code></pre>
<p>这说明 GitHub Pages 部署完成后，最终是通过自定义域名访问。<br>
所以完整链路其实是：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>Hugo 源文件</span></span>
<span class="line"><span>→ 生成 public 静态站点</span></span>
<span class="line"><span>→ push 到 GitHub Pages 仓库</span></span>
<span class="line"><span>→ GitHub Pages 提供静态托管</span></span>
<span class="line"><span>→ CNAME 绑定到 blog.mineguai.com</span></span>
<span class="line"><span></span></span></code></pre>
<h2><code>deploy.ps1</code> 在这套架构中的角色</h2>
<p><code>deploy.ps1</code> 本质上是“把架构串起来”的自动化脚本。它不是简单执行一个命令，而是在串联四个阶段：</p>
<h3>阶段 1：进入发布仓库</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">Set-Location F:\\myblog\\public</span></span>
<span class="line"><span style="color:#FFFFFF">git switch </span><span style="color:#E8E8E8">$deployBranch</span></span>
<span class="line"></span></code></pre>
<p>目的：确保 <code>public/</code> 当前位于要发布的分支。</p>
<h3>阶段 2：从 Hugo 源码重新生成站点</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">Set-Location F:\\myblog</span></span>
<span class="line"><span style="color:#FFFFFF">hugo -D --cleanDestinationDir</span></span>
<span class="line"></span></code></pre>
<p>目的：从 <code>content/ + theme + layouts + static + assets + hugo.toml</code> 重新生成完整静态站点。</p>
<h3>阶段 3：提交构建结果</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">Set-Location F:\\myblog\\public</span></span>
<span class="line"><span style="color:#FFFFFF">git add .</span></span>
<span class="line"><span style="color:#FFFFFF">git commit -m </span><span style="color:#F4D9E5">"</span><span style="color:#E8E8E8">$msg</span><span style="color:#F4D9E5">"</span></span>
<span class="line"></span></code></pre>
<p>目的：把这次构建结果作为一次独立发布记录保存下来。</p>
<h3>阶段 4：推送到 GitHub</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">git push </span><span style="color:#FFFFFF">-f</span><span style="color:#FFFFFF"> origin </span><span style="color:#E8E8E8">$deployBranch</span></span>
<span class="line"></span></code></pre>
<p>目的：把最新静态站点强制推送到 GitHub Pages 仓库。</p>
<p>注意这里用了 <code>-f</code>，说明当前发布策略更偏向“<strong>以本地最新构建结果覆盖线上内容</strong>”。<br>
这也是架构选择的一部分：线上仓库不是协作开发仓库，而是发布产物仓库。</p>
<h2>这套方式和 GitHub Actions 自动部署有什么区别</h2>
<p>你现在这套不是“GitHub 自动构建”，而是“本地构建 + 推送产物”。</p>
<p>区别可以概括为：</p>
<h3>当前方式：本地构建后推送 <code>public/</code></h3>
<p>优点：</p>
<ul>
<li>本地结果可控，看到什么就发布什么</li>
<li>Hugo 版本、主题效果、构建参数都由本机控制</li>
<li>逻辑直观，出错位置容易定位</li>
</ul>
<p>缺点：</p>
<ul>
<li>必须在本地执行部署</li>
<li>换机器部署时要重配环境</li>
<li><code>public/</code> 仓库和源仓库要一起维护</li>
</ul>
<h3>另一种方式：源码 push 后由 GitHub Actions 构建</h3>
<p>优点：</p>
<ul>
<li>不依赖本地环境</li>
<li>提交源码后可自动发布</li>
<li>不需要把 <code>public/</code> 当独立仓库维护</li>
</ul>
<p>缺点：</p>
<ul>
<li>要额外维护 CI 配置</li>
<li>构建失败时排查链路更长</li>
<li>主题、子模块、Hugo 版本都要在 CI 里明确配置</li>
</ul>
<p>所以不是说哪种更“正确”，而是不同架构会导向不同部署方式。<br>
你现在这套架构，天然更适合<strong>本地构建、独立产物仓库、手动脚本发布</strong>。</p>
<h2>用一句话理解这套项目</h2>
<p>这个 Hugo 博客项目，本质上分成两层：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>上层：写内容、配主题、改模板（源码层）</span></span>
<span class="line"><span>下层：生成 HTML/CSS/JS 并发布到 GitHub Pages（产物层）</span></span>
<span class="line"><span></span></span></code></pre>
<p>而 <code>public/</code> 这个独立 Git 仓库，就是连接这两层的桥。</p>
<h2>适合你当前项目的理解方式</h2>
<p>如果以后你再看这个仓库，最实用的理解不是“这是一个 Hugo 项目”，而是：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>这是一个：</span></span>
<span class="line"><span>用 Hugo 生成静态页面、</span></span>
<span class="line"><span>用 PaperMod 负责展示、</span></span>
<span class="line"><span>用 content 管内容、</span></span>
<span class="line"><span>用 layouts/static/assets 做定制、</span></span>
<span class="line"><span>用 public 作为发布产物仓库、</span></span>
<span class="line"><span>再通过 deploy.ps1 推送到 GitHub Pages 的博客系统。</span></span>
<span class="line"><span></span></span></code></pre>
<p>这样你以后想改部署方式、换主题、拆仓库、迁移到 Actions，思路都会更清楚。</p>`,plainText:`先说结论 这个博客能部署到 GitHub，不只是因为“用了 Hugo”，更关键是 项目架构从一开始就把“源码”和“构建产物”拆开了 ： F:\\myblog 是 Hugo 源码仓库，负责写文章、配主题、改模板。 F:\\myblog\\public 是 Hugo 生成后的静态站点目录，同时它又是一个 独立 Git 仓库 。 public 的远程仓库指向 https://github.com/caoxuan5211/caoxuan5211.github.io.git 。 执行 deploy.ps1 时，Hugo 先把页面生成到 public/ ，再把 public/ 里的静态文件推到 GitHub Pages 仓库。 所以，确实可以说： 是架构决定了部署方式 。 Hugo 只负责“生成静态文件”，而“怎么上传到 GitHub”是当前这个仓库结构和脚本流程决定的。 当前项目的整体结构 结合这个仓库，核心目录可以这样理解： F:\\myblog ├── content/ # Markdown 文章内容 ├── layouts/ # 对主题模板的覆盖 ├── static/ # 原样复制到网站根目录的静态资源 ├── assets/ # 需要 Hugo 处理的资源 ├── themes/PaperMod/ # 主题（当前是 Git submodule） ├── hugo.toml # Hugo 主配置 ├── deploy.ps1 # 本地一键部署脚本 └── public/ # Hugo 构建输出目录，同时是独立 Git 仓库 这里最关键的是最后一行： public = 构建产物目录 + GitHub Pages 发布仓库 这就是整个发布链路的核心设计。 这一套架构是怎么工作的 1. 内容层： content/ 你平时写的文章都在 content/ 下面，比如： content/blog/ content/posts/ 这些文件本质上只是 Markdown + Front Matter。 Hugo 不会把它们原样发到 GitHub，而是会把它们解析后生成 HTML。 2. 表现层：主题 + 模板覆盖 当前配置里： theme = 'PaperMod' 主题在 themes/PaperMod/ ，而且从 .gitmodules 可以看出它是一个 Git submodule。 这表示： 主题本身独立维护 你的博客仓库只引用它 如果你要自定义主题，不一定直接改主题源码，也可以用 layouts/ 覆盖主题模板 也就是说，这个站点的页面结构不是写死在文章里的，而是： Markdown 内容 + Hugo 渲染规则 + PaperMod 主题模板 + 你的自定义 layouts/static/assets = 最终静态页面 3. 配置层： hugo.toml hugo.toml 决定了站点的全局行为。当前仓库里比较关键的配置有： baseURL = 'https://blog.mineguai.com/' theme = 'PaperMod' home = ["HTML", "RSS", "JSON"] 自定义 CSS / JS 通过 [params.assets] 注入 搜索页依赖 JSON 输出和 fuseOpts 这里可以看出一件事： Hugo 配置决定“生成什么样的站点”，但不决定“怎么发布到 GitHub”。 4. 构建层： hugo 部署脚本里这一句最关键： hugo -D --cleanDestinationDir 它做了两件事： 把整个站点重新构建到 public/ 清理旧的构建产物，避免残留文件 生成后， public/ 里面就不再是 Markdown，而是： index.html 404.html index.xml index.json 各文章目录下的 index.html CSS / JS / 图片等静态资源 所以从 GitHub Pages 的视角看，它根本不关心 Hugo。 GitHub Pages 看到的只是一个普通静态网站目录。 为什么说“是架构决定部署方式” 因为 GitHub Pages 只认两种东西： 一个仓库里的静态文件 一个可发布的分支/目录 而你当前项目采用的是这类架构： 源码仓库（myblog） ↓ 运行 hugo 生成静态文件（public） ↓ git push GitHub Pages 仓库（caoxuan5211.github.io） ↓ blog.mineguai.com 这里真正决定部署方式的，不是 Markdown，也不是主题，而是下面这几个架构选择： 架构选择 1：源码与产物分离 F:\\myblog 保存源代码， F:\\myblog\\public 保存构建结果。 这样做的好处是： 源仓库更干净，不把大量生成文件混在源码里 发布逻辑清晰， public/ 就是“待上线结果” 出问题时容易判断：是“渲染问题”还是“发布问题” 架构选择 2： public/ 自己就是 Git 仓库 这一步特别关键。 如果 public/ 只是普通文件夹，那它只能当本地输出目录； 但当它本身也是一个独立仓库时，它就可以直接承担“发布仓库”的角色。 这就是为什么 deploy.ps1 会先： Set-Location F:\\myblog\\public git switch main 然后再： git add . git commit -m " $msg " git push -f origin main 这已经不是 Hugo 的行为了，而是标准 Git 发布流程。 架构选择 3：GitHub Pages 仓库单独承载静态站点 public/.git/config 里可以看到远程仓库： https://github.com/caoxuan5211/caoxuan5211.github.io.git 这意味着部署目标不是当前源码仓库，而是专门用于 Pages 的仓库。 这样做的好处： 页面仓库保持纯静态文件，最适合 GitHub Pages Hugo 源码仓库和线上站点解耦 可以随时换发布方式，而不必改内容组织方式 架构选择 4：自定义域名通过 CNAME 绑定 public/CNAME 里是： blog.mineguai.com 这说明 GitHub Pages 部署完成后，最终是通过自定义域名访问。 所以完整链路其实是： Hugo 源文件 → 生成 public 静态站点 → push 到 GitHub Pages 仓库 → GitHub Pages 提供静态托管 → CNAME 绑定到 blog.mineguai.com deploy.ps1 在这套架构中的角色 deploy.ps1 本质上是“把架构串起来”的自动化脚本。它不是简单执行一个命令，而是在串联四个阶段： 阶段 1：进入发布仓库 Set-Location F:\\myblog\\public git switch $deployBranch 目的：确保 public/ 当前位于要发布的分支。 阶段 2：从 Hugo 源码重新生成站点 Set-Location F:\\myblog hugo -D --cleanDestinationDir 目的：从 content/ + theme + layouts + static + assets + hugo.toml 重新生成完整静态站点。 阶段 3：提交构建结果 Set-Location F:\\myblog\\public git add . git commit -m " $msg " 目的：把这次构建结果作为一次独立发布记录保存下来。 阶段 4：推送到 GitHub git push -f origin $deployBranch 目的：把最新静态站点强制推送到 GitHub Pages 仓库。 注意这里用了 -f ，说明当前发布策略更偏向“ 以本地最新构建结果覆盖线上内容 ”。 这也是架构选择的一部分：线上仓库不是协作开发仓库，而是发布产物仓库。 这套方式和 GitHub Actions 自动部署有什么区别 你现在这套不是“GitHub 自动构建”，而是“本地构建 + 推送产物”。 区别可以概括为： 当前方式：本地构建后推送 public/ 优点： 本地结果可控，看到什么就发布什么 Hugo 版本、主题效果、构建参数都由本机控制 逻辑直观，出错位置容易定位 缺点： 必须在本地执行部署 换机器部署时要重配环境 public/ 仓库和源仓库要一起维护 另一种方式：源码 push 后由 GitHub Actions 构建 优点： 不依赖本地环境 提交源码后可自动发布 不需要把 public/ 当独立仓库维护 缺点： 要额外维护 CI 配置 构建失败时排查链路更长 主题、子模块、Hugo 版本都要在 CI 里明确配置 所以不是说哪种更“正确”，而是不同架构会导向不同部署方式。 你现在这套架构，天然更适合 本地构建、独立产物仓库、手动脚本发布 。 用一句话理解这套项目 这个 Hugo 博客项目，本质上分成两层： 上层：写内容、配主题、改模板（源码层） 下层：生成 HTML/CSS/JS 并发布到 GitHub Pages（产物层） 而 public/ 这个独立 Git 仓库，就是连接这两层的桥。 适合你当前项目的理解方式 如果以后你再看这个仓库，最实用的理解不是“这是一个 Hugo 项目”，而是： 这是一个： 用 Hugo 生成静态页面、 用 PaperMod 负责展示、 用 content 管内容、 用 layouts/static/assets 做定制、 用 public 作为发布产物仓库、 再通过 deploy.ps1 推送到 GitHub Pages 的博客系统。 这样你以后想改部署方式、换主题、拆仓库、迁移到 Actions，思路都会更清楚。`},{meta:{title:"钥匙问题",date:"2026-04-14T15:22:12.000Z",draft:!1,tags:[],categories:[],clues:[],slug:"%E9%92%A5%E5%8C%99%E9%97%AE%E9%A2%98",sourcePath:"src/content/evidence/钥匙问题.md",readingTime:2},html:`<h1>P4890 解题代码详解（链式DP + 建模全过程）</h1>
<p><a href="https://www.luogu.com.cn/problem/solution/P4890">P4890 Never·island - 洛谷</a></p>
<hr>
<h1>一、整体思路（先建立全局认知）</h1>
<p>本题流程分三步：</p>
<ol>
<li><strong>离散化 + 扫描线建模</strong>
<ul>
<li>把区间拆成若干小段</li>
<li>转换成「点权 + 边权 + 固定贡献」</li>
</ul>
</li>
<li><strong>构建链式图</strong>
<ul>
<li>每个考察队是一个点</li>
<li>区间贡献变成：
<ul>
<li>点权（选一个点获得）</li>
<li>边权（两个点都选才获得）</li>
</ul>
</li>
</ul>
</li>
<li><strong>链上DP + 背包合并</strong>
<ul>
<li>每条链独立DP</li>
<li>最后用背包合并选 k 个点</li>
</ul>
</li>
</ol>
<hr>
<h1>二、变量说明（代码核心变量）</h1>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">int n, k;</span></span>
<span class="line"></span></code></pre>
<ul>
<li>n：区间数量</li>
<li>k：最多选的考察队数量</li>
</ul>
<hr>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">vector&#x3C;int> xs;</span></span>
<span class="line"></span></code></pre>
<ul>
<li>存所有端点（用于离散化）</li>
</ul>
<hr>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">struct </span><span style="color:#E8E8E8">Seg</span><span style="color:#FFFFFF"> {</span></span>
<span class="line"><span style="color:#FFFFFF">    int l, r, id_l, id_r;</span></span>
<span class="line"><span style="color:#FFFFFF">};</span></span>
<span class="line"></span></code></pre>
<ul>
<li>l, r：原始端点</li>
<li>id_l, id_r：离散化后的下标</li>
</ul>
<hr>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">long long </span><span style="color:#E8E8E8">node_w</span><span style="color:#FFFFFF">[MAXN];</span></span>
<span class="line"></span></code></pre>
<p>👉 点权数组</p>
<ul>
<li>node_w[i] 表示：选择第 i 个考察队获得的贡献</li>
</ul>
<hr>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">vector&#x3C;pair&#x3C;int,int>> </span><span style="color:#E8E8E8">adj</span><span style="color:#FFFFFF">[MAXN];</span></span>
<span class="line"></span></code></pre>
<p>👉 邻接表（存边）</p>
<ul>
<li>adj[u] = {v, weight}</li>
</ul>
<hr>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">long long base_ans;</span></span>
<span class="line"></span></code></pre>
<p>👉 必然贡献（情况4）</p>
<hr>
<h1>三、建模部分（最关键）</h1>
<h2>1️⃣ 离散化</h2>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">sort(</span><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">.begin(), </span><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">.end());</span></span>
<span class="line"><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">.erase(unique(</span><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">.begin(), </span><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">.end()), </span><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">.end());</span></span>
<span class="line"></span></code></pre>
<p>👉 把所有端点压缩到连续整数</p>
<hr>
<h2>2️⃣ 扫描每一小段区间</h2>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">for (int i = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">; i &#x3C; </span><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">.size(); i++) {</span></span>
<span class="line"><span style="color:#FFFFFF">    int len = </span><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">[i] - </span><span style="color:#E8E8E8">xs</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<p>👉 每个小段长度 = 相邻离散点差值</p>
<hr>
<h2>3️⃣ 判断左右端点归属（核心）</h2>
<p>假设：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">int L = </span><span style="color:#E8E8E8">belong_left</span><span style="color:#FFFFFF">[i];</span></span>
<span class="line"><span style="color:#FFFFFF">int R = </span><span style="color:#E8E8E8">belong_right</span><span style="color:#FFFFFF">[i];</span></span>
<span class="line"></span></code></pre>
<hr>
<h3>情况1：同一个队</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">if (L == R) {</span></span>
<span class="line"><span style="color:#E8E8E8">    node_w</span><span style="color:#FFFFFF">[L] += len;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<hr>
<h3>情况2：不同队</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">else {</span></span>
<span class="line"><span style="color:#E8E8E8">    adj</span><span style="color:#FFFFFF">[L].push_back({R, len});</span></span>
<span class="line"><span style="color:#E8E8E8">    adj</span><span style="color:#FFFFFF">[R].push_back({L, len});</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<hr>
<h3>情况3：都是起点</h3>
<p>（代码里通常已经合并到情况1）</p>
<hr>
<h3>情况4：左终点右起点</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">base_ans += len;</span></span>
<span class="line"></span></code></pre>
<hr>
<h1>四、为什么是“链”</h1>
<p>👉 每个点最多连接左右两个邻居
👉 不可能形成复杂图</p>
<p>所以：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>整个图 = 多条链</span></span>
<span class="line"><span></span></span></code></pre>
<hr>
<h1>五、链上DP</h1>
<h2>状态定义</h2>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i][j][</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">/</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">]</span></span>
<span class="line"></span></code></pre>
<p>含义：</p>

























<table><thead><tr><th>变量</th><th>含义</th></tr></thead><tbody><tr><td>i</td><td>当前处理第 i 个点</td></tr><tr><td>j</td><td>已选 j 个点</td></tr><tr><td>0</td><td>不选当前点</td></tr><tr><td>1</td><td>选当前点</td></tr></tbody></table>
<hr>
<h2>初始化</h2>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">] = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] = -INF;</span></span>
<span class="line"></span></code></pre>
<hr>
<h2>转移</h2>
<h3>不选当前点</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i][j][</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">] = max(</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][j][</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">], </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][j][</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">]);</span></span>
<span class="line"></span></code></pre>
<hr>
<h3>选当前点</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i][j][</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] = max(</span></span>
<span class="line"><span style="color:#E8E8E8">    dp</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][j-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">] + </span><span style="color:#E8E8E8">node_w</span><span style="color:#FFFFFF">[i],</span></span>
<span class="line"><span style="color:#E8E8E8">    dp</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][j-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] + </span><span style="color:#E8E8E8">node_w</span><span style="color:#FFFFFF">[i] + </span><span style="color:#E8E8E8">edge_w</span><span style="color:#FFFFFF">[i]</span></span>
<span class="line"><span style="color:#FFFFFF">);</span></span>
<span class="line"></span></code></pre>
<hr>
<h2>edge_w[i] 含义</h2>
<p>👉 i 和 i-1 之间的边权</p>
<hr>
<h1>六、链结果提取</h1>
<p>每条链算出：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#E8E8E8">f</span><span style="color:#FFFFFF">[x] = 选 x 个点的最大收益</span></span>
<span class="line"></span></code></pre>
<hr>
<h1>七、多链合并（背包）</h1>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">for (每条链) {</span></span>
<span class="line"><span style="color:#FFFFFF">    for (j = k → </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">) {</span></span>
<span class="line"><span style="color:#FFFFFF">        for (x = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF"> → 链长度) {</span></span>
<span class="line"><span style="color:#E8E8E8">            dp</span><span style="color:#FFFFFF">[j] = max(</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[j], </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[j-x] + </span><span style="color:#E8E8E8">f</span><span style="color:#FFFFFF">[x]);</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<hr>
<h1>八、最终答案</h1>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">answer = base_ans + </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[k];</span></span>
<span class="line"></span></code></pre>
<hr>
<h1>九、容易出错的点（你之前卡的）</h1>
<h2>❌ 1. dp没初始化为 -INF</h2>
<p>👉 会导致非法状态参与计算</p>
<hr>
<h2>❌ 2. 边权只在“两个点都选”时加</h2>
<p>👉 很多人写错成只要有边就加</p>
<hr>
<h2>❌ 3. 没拆链直接DP</h2>
<p>👉 会超复杂 + 错</p>
<hr>
<h2>❌ 4. 忘了 base_ans</h2>
<p>👉 会少一大块答案</p>
<hr>
<h1>十、复杂度</h1>
<ul>
<li>建图：O(n log n)</li>
<li>链DP：O(n * k)</li>
<li>背包合并：O(n * k)</li>
</ul>
<p>👉 总体：<strong>O(n²)</strong>（可过）</p>
<hr>
<h1>十一、一句话理解</h1>
<p>👉 本题就是：</p>
<blockquote>
<p><strong>把区间问题转成“链上选点 + 邻接奖励”的DP问题</strong></p>
</blockquote>
<hr>
<h1>十二、如果你还想更深入</h1>
<p>可以继续问我：</p>
<ul>
<li>👉 为什么不是网络流（你一开始的思路）</li>
<li>👉 如何从“区间”一步步推到“链”</li>
<li>👉 我帮你手画一个完整样例（强烈推荐）</li>
</ul>
<hr>`,plainText:"P4890 解题代码详解（链式DP + 建模全过程） P4890 Never·island - 洛谷 一、整体思路（先建立全局认知） 本题流程分三步： 离散化 + 扫描线建模 把区间拆成若干小段 转换成「点权 + 边权 + 固定贡献」 构建链式图 每个考察队是一个点 区间贡献变成： 点权（选一个点获得） 边权（两个点都选才获得） 链上DP + 背包合并 每条链独立DP 最后用背包合并选 k 个点 二、变量说明（代码核心变量） int n, k; n：区间数量 k：最多选的考察队数量 vector&#x3C;int> xs; 存所有端点（用于离散化） struct Seg { int l, r, id_l, id_r; }; l, r：原始端点 id_l, id_r：离散化后的下标 long long node_w [MAXN]; 👉 点权数组 node_w[i] 表示：选择第 i 个考察队获得的贡献 vector&#x3C;pair&#x3C;int,int>> adj [MAXN]; 👉 邻接表（存边） adj[u] = {v, weight} long long base_ans; 👉 必然贡献（情况4） 三、建模部分（最关键） 1️⃣ 离散化 sort( xs .begin(), xs .end()); xs .erase(unique( xs .begin(), xs .end()), xs .end()); 👉 把所有端点压缩到连续整数 2️⃣ 扫描每一小段区间 for (int i = 1 ; i &#x3C; xs .size(); i++) { int len = xs [i] - xs [i- 1 ]; } 👉 每个小段长度 = 相邻离散点差值 3️⃣ 判断左右端点归属（核心） 假设： int L = belong_left [i]; int R = belong_right [i]; 情况1：同一个队 if (L == R) { node_w [L] += len; } 情况2：不同队 else { adj [L].push_back({R, len}); adj [R].push_back({L, len}); } 情况3：都是起点 （代码里通常已经合并到情况1） 情况4：左终点右起点 base_ans += len; 四、为什么是“链” 👉 每个点最多连接左右两个邻居 👉 不可能形成复杂图 所以： 整个图 = 多条链 五、链上DP 状态定义 dp [i][j][ 0 / 1 ] 含义： 变量 含义 i 当前处理第 i 个点 j 已选 j 个点 0 不选当前点 1 选当前点 初始化 dp [ 0 ][ 0 ][ 0 ] = 0 ; dp [ 0 ][ 0 ][ 1 ] = -INF; 转移 不选当前点 dp [i][j][ 0 ] = max( dp [i- 1 ][j][ 0 ], dp [i- 1 ][j][ 1 ]); 选当前点 dp [i][j][ 1 ] = max( dp [i- 1 ][j- 1 ][ 0 ] + node_w [i], dp [i- 1 ][j- 1 ][ 1 ] + node_w [i] + edge_w [i] ); edge_w[i] 含义 👉 i 和 i-1 之间的边权 六、链结果提取 每条链算出： f [x] = 选 x 个点的最大收益 七、多链合并（背包） for (每条链) { for (j = k → 0 ) { for (x = 0 → 链长度) { dp [j] = max( dp [j], dp [j-x] + f [x]); } } } 八、最终答案 answer = base_ans + dp [k]; 九、容易出错的点（你之前卡的） ❌ 1. dp没初始化为 -INF 👉 会导致非法状态参与计算 ❌ 2. 边权只在“两个点都选”时加 👉 很多人写错成只要有边就加 ❌ 3. 没拆链直接DP 👉 会超复杂 + 错 ❌ 4. 忘了 base_ans 👉 会少一大块答案 十、复杂度 建图：O(n log n) 链DP：O(n * k) 背包合并：O(n * k) 👉 总体： O(n²) （可过） 十一、一句话理解 👉 本题就是： 把区间问题转成“链上选点 + 邻接奖励”的DP问题 十二、如果你还想更深入 可以继续问我： 👉 为什么不是网络流（你一开始的思路） 👉 如何从“区间”一步步推到“链” 👉 我帮你手画一个完整样例（强烈推荐）"},{meta:{title:"大创",date:"2026-04-14T15:09:55.000Z",draft:!1,tags:[],categories:[],clues:[],slug:"%E5%A4%A7%E5%88%9B",sourcePath:"src/content/evidence/大创.md",readingTime:10},html:`<h1>ArchRAG 项目理解入门</h1>
<h2>1. 项目一句话说明</h2>
<p>ArchRAG 是一个基于知识图谱的 Graph-based RAG 系统。它的核心目标不是只做“向量检索 + 生成”，而是把语料先构造成图，再把图中的<strong>实体</strong>与**社区（community）**组织成多层级结构，最后在查询时按层级检索并做答案生成。</p>
<p>这套仓库同时包含两部分：</p>
<ol>
<li><strong>论文方法本体的实现层</strong>：根目录 <code>src/*.py</code></li>
<li><strong>GraphRAG / Faiss 的基础设施层</strong>：
<ul>
<li><code>src/graphrag/</code>：Microsoft GraphRAG 的基线与图构建代码</li>
<li><code>HCHNSW/faiss/</code>：基于 Faiss 1.8.0 改造的自定义 ANN 索引实现</li>
</ul>
</li>
</ol>
<p>可以把它理解成：</p>
<p><code>GraphRAG 负责把文本变成 KG</code><br>
<code>ArchRAG 负责把 KG 进一步变成“层次社区索引”</code><br>
<code>HCHNSW 负责让多层检索真正跑得快</code></p>
<hr>
<h2>2. 仓库结构总览</h2>
<h3>2.1 需要优先读懂的目录</h3>





















































































<table><thead><tr><th>目录/文件</th><th>作用</th><th>是否核心</th></tr></thead><tbody><tr><td><code>README.md</code></td><td>项目总体说明、论文链接、基本运行方式</td><td>是</td></tr><tr><td><code>dataset/index.sh</code></td><td>离线建索引脚本样例</td><td>是</td></tr><tr><td><code>dataset/query.sh</code></td><td>在线问答评测脚本样例</td><td>是</td></tr><tr><td><code>dataset/settings.yaml</code></td><td>GraphRAG 图构建配置样例</td><td>是</td></tr><tr><td><code>src/index.py</code></td><td>ArchRAG 离线索引主入口</td><td>是</td></tr><tr><td><code>src/inference.py</code></td><td>ArchRAG 在线检索与生成主入口</td><td>是</td></tr><tr><td><code>src/attr_cluster.py</code></td><td>属性增强层次聚类核心逻辑</td><td>是</td></tr><tr><td><code>src/community_report.py</code></td><td>社区摘要/报告生成</td><td>是</td></tr><tr><td><code>src/client_reasoning.py</code></td><td>层级选择、map-reduce 生成、提示词组装</td><td>是</td></tr><tr><td><code>src/hchnsw_index.py</code></td><td>HCHNSW 索引构建与落盘</td><td>是</td></tr><tr><td><code>src/utils.py</code></td><td>参数解析、图读取、embedding、图增强工具</td><td>是</td></tr><tr><td><code>src/evaluate/</code></td><td>QA 评测、摘要评测、索引/聚类实验</td><td>重要</td></tr><tr><td><code>metric/</code></td><td>聚类质量指标与基线聚类实现</td><td>重要</td></tr><tr><td><code>src/graphrag/</code></td><td>GraphRAG 基线与 KG 构建</td><td>基础设施</td></tr><tr><td><code>HCHNSW/</code></td><td>改造版 Faiss，提供 <code>IndexHCHNSW*</code></td><td>基础设施</td></tr></tbody></table>
<h3>2.2 不要一开始陷进去的目录</h3>
<ul>
<li><code>HCHNSW/faiss/</code> 代码量极大，大部分是上游 Faiss；只需要关注 <code>IndexHCHNSW.*</code> 与 <code>impl/HCHNSW.*</code></li>
<li><code>src/graphrag/</code> 是 GraphRAG 基线和配套模块，不是 ArchRAG 创新点本身</li>
</ul>
<hr>
<h2>3. 论文在讲什么</h2>
<p>论文题目：<strong>ArchRAG: Attributed Community-based Hierarchical Retrieval-Augmented Generation</strong><br>
论文链接：<a href="https://arxiv.org/abs/2502.09891">https://arxiv.org/abs/2502.09891</a><br>
我核对到的 arXiv 页面显示最新版本为 <strong>v3，2025-08-08</strong>。</p>
<h3>3.1 论文要解决的三个问题</h3>
<p>论文对 GraphRAG 的批评可以概括成三点：</p>
<ol>
<li>
<p><strong>社区质量低</strong></p>
<ul>
<li>GraphRAG 主要依赖图结构做社区划分</li>
<li>忽略了实体/关系文本属性</li>
<li>导致同一社区里语义可能很杂，社区摘要质量也会受影响</li>
</ul>
</li>
<li>
<p><strong>粒度不灵活</strong></p>
<ul>
<li>现有方法通常只在某一个粒度上检索</li>
<li>抽象问题和细粒度事实问题很难同时兼顾</li>
</ul>
</li>
<li>
<p><strong>在线 token 成本高</strong></p>
<ul>
<li>特别是 GraphRAG 的 global search，需要遍历大量社区摘要</li>
<li>在真实问答中成本会非常高</li>
</ul>
</li>
</ol>
<h3>3.2 论文的核心主张</h3>
<p>ArchRAG 的回答是：</p>
<ol>
<li>用<strong>属性增强社区</strong>替代纯结构社区</li>
<li>用<strong>层次化社区结构</strong>同时覆盖抽象与具体问题</li>
<li>用<strong>C-HNSW / HCHNSW 这样的层次索引</strong>降低多层检索成本</li>
<li>用<strong>adaptive filtering + map/reduce</strong>减少长上下文直接塞给 LLM 的问题</li>
</ol>
<h3>3.3 论文方法的两阶段</h3>
<h4>阶段 A：离线索引</h4>
<ol>
<li>从语料构建 KG</li>
<li>对 KG 做属性增强与层次聚类</li>
<li>为每个社区生成 LLM 摘要</li>
<li>为每一层生成 level summary</li>
<li>把“社区 + 实体”一起写入 HCHNSW 索引</li>
</ol>
<h4>阶段 B：在线检索与生成</h4>
<ol>
<li>把问题编码成 query embedding</li>
<li>在 HCHNSW 上做多层搜索</li>
<li>同时取出实体、社区、关系、可选 chunk</li>
<li>先 map，再 reduce，得到最终答案</li>
</ol>
<hr>
<h2>4. 论文概念如何映射到代码</h2>
<p>这一节最重要。建议把“论文术语”和“代码文件”对应记住。</p>









































<table><thead><tr><th>论文概念</th><th>仓库实现</th></tr></thead><tbody><tr><td>KG construction</td><td><code>src/graphrag/</code> + <code>dataset/settings.yaml</code></td></tr><tr><td>attributed community / AC</td><td><code>src/attr_cluster.py</code></td></tr><tr><td>graph augmentation by attribute similarity</td><td><code>src/utils.py -> compute_distance()</code></td></tr><tr><td>community report generation</td><td><code>src/community_report.py</code></td></tr><tr><td>level summary</td><td><code>src/client_reasoning.py -> level_summary()</code></td></tr><tr><td>C-HNSW / HCHNSW index</td><td><code>src/hchnsw_index.py</code> + <code>HCHNSW/faiss/</code></td></tr><tr><td>hierarchical retrieval</td><td><code>src/inference.py -> hcarag_retrieval()</code></td></tr><tr><td>adaptive filtering-based generation</td><td><code>src/client_reasoning.py -> map_inference()/reduce_inference()</code></td></tr></tbody></table>
<hr>
<h2>5. 端到端执行流程</h2>
<h2>5.1 图构建阶段：先跑 GraphRAG</h2>
<p>对应资料：</p>
<ul>
<li><code>README.md</code></li>
<li><code>src/graphrag/README.md</code></li>
<li><code>dataset/settings.yaml</code></li>
</ul>
<p>流程大致是：</p>
<ol>
<li>把原始语料放进 <code>corpus/input</code></li>
<li>用 GraphRAG 从文本 chunk 中抽实体和关系</li>
<li>生成 <code>create_final_entities.parquet</code> 与 <code>create_final_relationships.parquet</code></li>
<li>把它们作为 ArchRAG 的输入图</li>
</ol>
<p>注意：</p>
<ul>
<li><code>dataset/settings.yaml</code> 里显式跳过了一些 GraphRAG 工作流，例如 <code>create_final_community_reports</code></li>
<li>说明这个项目只把 GraphRAG 当成 <strong>KG 构建器</strong>，而不是直接使用它自带的社区摘要/检索流程</li>
</ul>
<h2>5.2 ArchRAG 离线建索引</h2>
<p>主入口：<code>src/index.py</code></p>
<h3>代码级步骤</h3>
<ol>
<li>
<p><code>read_graph_nx()</code></p>
<ul>
<li>从 entity / relationship 文件读取图</li>
<li>位置：<code>src/utils.py</code></li>
</ul>
</li>
<li>
<p><code>process_entity_embedding()</code></p>
<ul>
<li>给实体算 embedding，并挂到 networkx 图节点上</li>
</ul>
</li>
<li>
<p><code>attr_cluster()</code></p>
<ul>
<li>位置：<code>src/attr_cluster.py</code></li>
<li>做多层聚类</li>
</ul>
</li>
<li>
<p><code>create_hchnsw_index()</code></p>
<ul>
<li>位置：<code>src/hchnsw_index.py</code></li>
<li>把多层社区和实体一起写入 HCHNSW</li>
</ul>
</li>
<li>
<p><code>make_level_summary()</code></p>
<ul>
<li>位置：<code>src/index.py</code></li>
<li>实际调用 <code>src/client_reasoning.py -> level_summary()</code></li>
</ul>
</li>
<li>
<p>保存多个中间/最终文件</p>
<ul>
<li><code>community_df_intermediate.csv</code></li>
<li><code>community_df_index.csv</code></li>
<li><code>entity_df_index.csv</code></li>
<li><code>relationship_df_index.csv</code></li>
<li><code>relationship_embedding.csv</code></li>
<li><code>level_summary.csv</code></li>
<li><code>hchnsw.index</code></li>
</ul>
</li>
</ol>
<h3>核心理解</h3>
<p>ArchRAG 的索引对象不是单一向量库，而是三层东西一起组成的：</p>
<ol>
<li><strong>实体</strong></li>
<li><strong>社区</strong></li>
<li><strong>层摘要</strong></li>
</ol>
<p>在线问答时真正起作用的是它们的组合，而不是某一个单独对象。</p>
<h2>5.3 在线问答</h2>
<p>主入口：<code>src/inference.py</code></p>
<p>整体函数链：</p>
<p><code>load_index()</code><br>
<code>-> hcarag()</code><br>
<code>-> hcarag_retrieval()</code><br>
<code>-> hcarag_inference()</code><br>
<code>-> hcarag_inference_direct()</code> 或 <code>hcarag_inference_mr()</code></p>
<h3>检索阶段做了什么</h3>
<ol>
<li>对 query 做 embedding</li>
<li>根据策略决定每层取多少个结果
<ul>
<li><code>global</code></li>
<li><code>all</code></li>
<li><code>inference</code></li>
</ul>
</li>
<li>按层调用 HCHNSW 搜索</li>
<li>合并得到候选实体/社区</li>
<li>从候选实体关联出的关系中，再按 embedding 相似度取 top-k 关系</li>
<li>可选：
<ul>
<li>取 vanilla chunk 检索结果</li>
<li>做 PPR refine</li>
</ul>
</li>
</ol>
<h3>生成阶段做了什么</h3>
<p>有两条路线：</p>
<ol>
<li>
<p><code>direct</code></p>
<ul>
<li>直接把实体/关系/社区拼 prompt，让 LLM 出答案</li>
</ul>
</li>
<li>
<p><code>mr</code></p>
<ul>
<li>先让 LLM 对问题做一步自由推理</li>
<li>再把检索结果拆成多个 chunk 做 map</li>
<li>每个 chunk 返回 <code>points</code></li>
<li>最后 reduce 汇总成答案</li>
</ul>
</li>
</ol>
<p>论文里说的 adaptive filtering，在代码里主要体现在这条 <code>mr</code> 路径上。</p>
<hr>
<h2>6. 核心模块逐个解读</h2>
<h2>6.1 <code>src/utils.py</code>：底座工具文件</h2>
<p>这个文件很重要，承担了四类职责：</p>
<ol>
<li>
<p><strong>参数解析</strong></p>
<ul>
<li><code>create_arg_parser()</code></li>
<li><code>create_inference_arg_parser()</code></li>
</ul>
</li>
<li>
<p><strong>图读取</strong></p>
<ul>
<li><code>read_graph_nx()</code></li>
<li>将实体和关系文件转成 NetworkX 图</li>
</ul>
</li>
<li>
<p><strong>embedding</strong></p>
<ul>
<li><code>entity_embedding()</code></li>
<li><code>relation_embedding()</code></li>
<li>通过 OpenAI-compatible API 或本地模型算向量</li>
</ul>
</li>
<li>
<p><strong>图增强</strong></p>
<ul>
<li><code>compute_distance()</code></li>
<li>先把原图边赋权为余弦相似度</li>
<li>再用 HNSW 找相似节点补边</li>
</ul>
</li>
</ol>
<h3>这里体现的论文思想</h3>
<p>论文里“属性增强”的本质，在这份代码里首先体现为：</p>
<ul>
<li>把实体文本变成 embedding</li>
<li>再用 embedding 相似度补图边与赋边权</li>
</ul>
<p>也就是说，这个仓库目前对“attribute”最直接的实现就是<strong>文本 embedding 驱动的图增强</strong>。</p>
<h2>6.2 <code>src/attr_cluster.py</code>：层次聚类主逻辑</h2>
<p>这是 ArchRAG 的算法核心。</p>
<p>主函数：<code>attr_cluster()</code></p>
<p>每一层循环都做：</p>
<ol>
<li>若 <code>augment_graph=True</code>，先 <code>compute_distance()</code> 得到增强图</li>
<li>用聚类算法得到社区
<ul>
<li>默认 <code>weighted_leiden</code></li>
<li>也支持 spectral clustering</li>
</ul>
</li>
<li>若不是第一层，把低层社区重新编号并映射到上层</li>
<li>为社区生成 LLM 报告</li>
<li>根据新社区重建图</li>
<li>进入下一层</li>
</ol>
<h3>关键设计</h3>
<p>这个实现不是“先一次性做完层次聚类，再统一摘要”，而是：</p>
<p><strong>一层聚类 -> 一层摘要 -> 用摘要/社区结果重构上层图 -> 再聚类</strong></p>
<p>这正对应论文里“LLM-based iterative hierarchical clustering framework”的叙事。</p>
<h3>终止条件</h3>
<ul>
<li>达到 <code>max_level</code></li>
<li>或者当前层聚类数低于 <code>min_clusters</code></li>
</ul>
<h2>6.3 <code>src/community_report.py</code>：社区报告生成</h2>
<p>职责：</p>
<ol>
<li>根据社区里的实体、关系、下级社区拼装文本</li>
<li>调 LLM 生成结构化 JSON 报告</li>
<li>解析出：
<ul>
<li><code>title</code></li>
<li><code>summary</code></li>
<li><code>findings</code></li>
<li><code>rating</code></li>
<li><code>rating_explanation</code></li>
</ul>
</li>
<li>再给报告文本算 embedding</li>
</ol>
<h3>为什么重要</h3>
<p>社区不只是一个 cluster id。<br>
在 ArchRAG 里，社区被提升成了<strong>可检索的语义对象</strong>。</p>
<p>这意味着社区有两种表示：</p>
<ol>
<li>图结构表示</li>
<li>文本摘要表示</li>
</ol>
<p>后续检索时真正喂给 LLM 的，主要是第二种。</p>
<h2>6.4 <code>src/client_reasoning.py</code>：查询理解与生成编排</h2>
<p>这份文件承担两类很重要的逻辑：</p>
<h3>A. 查询如何决定搜哪一层</h3>
<p><code>problem_reasoning()</code></p>
<p>它会让 LLM 读取：</p>
<ul>
<li>每层的 level summary</li>
<li>每层社区数量</li>
<li>每层随机社区例子</li>
</ul>
<p>然后输出每层的重要性分数，再转换成 <code>k_per_level</code>。</p>
<p>也就是说，论文中的“支持抽象问题与具体问题的分层检索”在代码里不是硬编码规则，而是<strong>LLM 决策的层级预算分配</strong>。</p>
<h3>B. 检索后怎么生成答案</h3>
<p>这里实现了：</p>
<ul>
<li><code>prep_e_r_content()</code></li>
<li><code>prep_community_content()</code></li>
<li><code>map_inference()</code></li>
<li><code>reduce_inference()</code></li>
</ul>
<p>它本质上是一个面向 token 限额的证据整理器。</p>
<h2>6.5 <code>src/hchnsw_index.py</code>：层次索引写入</h2>
<p>职责很清晰：</p>
<ol>
<li>读取社区向量和实体向量</li>
<li>把社区 level 与实体 level 合成 <code>combined_levels</code>
<ul>
<li>社区是 1..L</li>
<li>实体是 0</li>
</ul>
</li>
<li>调 <code>faiss.IndexHCHNSWFlat</code></li>
<li>调 <code>set_vector_level(levels)</code></li>
<li><code>add()</code> 所有向量</li>
</ol>
<p>这里可以把它理解成：</p>
<p><strong>把“多层社区 + 底层实体”压到一个支持层级搜索的 ANN 索引里。</strong></p>
<h2>6.6 <code>src/inference.py</code>：在线检索主链</h2>
<p>几个必须记住的函数：</p>
<ul>
<li><code>hcarag()</code></li>
<li><code>hcarag_retrieval()</code></li>
<li><code>load_strategy()</code></li>
<li><code>hcarag_inference_mr()</code></li>
</ul>
<h3><code>load_strategy()</code> 的三种检索策略</h3>
<ol>
<li>
<p><code>global</code></p>
<ul>
<li>每层取固定 <code>k_each_level</code></li>
</ul>
</li>
<li>
<p><code>all</code></p>
<ul>
<li>更接近 GraphRAG 风格，扩大低层取样范围</li>
</ul>
</li>
<li>
<p><code>inference</code></p>
<ul>
<li>先让 LLM 判断层级重要性</li>
<li>再按比例分配检索预算</li>
</ul>
</li>
</ol>
<p>这说明论文里的“adaptive hierarchical retrieval”在仓库中至少有一个明显落地点：<code>strategy=inference</code>。</p>
<hr>
<h2>7. HCHNSW 到底是什么</h2>
<p>对应目录：<code>HCHNSW/faiss/</code></p>
<h3>7.1 它不是普通 HNSW</h3>
<p>Faiss 原生提供的是 <code>IndexHNSW*</code>。<br>
这个项目新增的是 <code>IndexHCHNSW*</code>，核心特征有两个：</p>
<ol>
<li><strong>每个向量都有 level</strong></li>
<li><strong>搜索时可以指定 search_level</strong></li>
</ol>
<p>相关文件：</p>
<ul>
<li><code>HCHNSW/faiss/faiss/IndexHCHNSW.h</code></li>
<li><code>HCHNSW/faiss/faiss/IndexHCHNSW.cpp</code></li>
<li><code>HCHNSW/faiss/faiss/impl/HCHNSW.h</code></li>
<li><code>HCHNSW/faiss/faiss/impl/HCHNSW.cpp</code></li>
</ul>
<h3>7.2 从头文件看它提供了什么</h3>
<p><code>SearchParametersHCHNSW</code> 里新增了：</p>
<ul>
<li><code>search_level</code></li>
<li><code>entry_point</code></li>
<li><code>efSearch</code></li>
</ul>
<p><code>HCHNSW</code> 结构里新增了：</p>
<ul>
<li><code>levels</code></li>
<li><code>cross_neighbors</code></li>
<li><code>first_entry_points_in_level</code></li>
</ul>
<p>这说明它不是单纯把所有向量混在一个图里搜索，而是明确维护了<strong>层级信息</strong>和<strong>跨层入口</strong>。</p>
<h3>7.3 搜索过程怎么理解</h3>
<p>从 <code>impl/HCHNSW.cpp</code> 的 <code>HCHNSW::search()</code> 看，大致逻辑是：</p>
<ol>
<li>从最高层入口点出发</li>
<li>对高于目标层的各层做 greedy search</li>
<li>沿 <code>cross_neighbors</code> 逐层下降</li>
<li>到达目标层后再做该层近邻搜索</li>
</ol>
<p>这和论文叙述的“分层查找 + 逐层下钻”是一致的。</p>
<h3>7.4 这个模块在项目里的意义</h3>
<p>如果没有 HCHNSW，ArchRAG 只能：</p>
<ol>
<li>每层单独建一个 ANN 索引</li>
<li>或者完全不用 ANN，直接暴力遍历</li>
</ol>
<p>那样：</p>
<ul>
<li>工程实现更碎</li>
<li>多层检索切换更慢</li>
<li>不能自然支持跨层 entry point 传递</li>
</ul>
<p>所以 HCHNSW 是论文“效率提升”主张的关键支撑。</p>
<hr>
<h2>8. 评测与实验代码怎么读</h2>
<h2>8.1 主评测入口</h2>
<p><code>src/evaluate/test_qa.py</code></p>
<p>主要流程：</p>
<ol>
<li><code>load_index()</code></li>
<li>读取问题集</li>
<li>多进程跑 <code>hcarag()</code></li>
<li>保存预测结果</li>
<li>再调用 <code>src/evaluate/evaluate.py</code> 算指标</li>
</ol>
<h2>8.2 指标文件</h2>
<p><code>src/evaluate/evaluate.py</code></p>
<p>支持：</p>
<ul>
<li>KGQA 风格：Hit / F1 / Precision / Recall</li>
<li>DocQA 风格：Hit / EM / F1</li>
<li>NarrativeQA 风格：BLEU / METEOR / ROUGE-L</li>
</ul>
<h2>8.3 聚类与索引实验</h2>
<h3><code>src/evaluate/community_evaluate.py</code></h3>
<p>对比不同聚类方法：</p>
<ul>
<li>Leiden</li>
<li>SCAN</li>
<li>Spectral clustering</li>
</ul>
<h3><code>metric/metric.py</code></h3>
<p>聚类质量指标包括：</p>
<ul>
<li>Silhouette</li>
<li>Calinski-Harabasz</li>
<li>Davies-Bouldin</li>
<li>自定义 similarity</li>
<li>clustering entropy</li>
</ul>
<h3><code>src/evaluate/hchnsw_evaluate.py</code></h3>
<p>专门评估 HCHNSW 与“每层一个 HNSW baseline”之间的速度和 recall。</p>
<p>这说明项目不只是做 QA 指标，还试图对“索引结构本身”单独做实验。</p>
<hr>
<h2>9. 论文结论与仓库落地的对应关系</h2>
<p>基于论文与代码，我建议这样理解“论文贡献是否真的落地”：</p>
<h3>9.1 已明显落地的部分</h3>
<ol>
<li>
<p><strong>属性增强聚类</strong></p>
<ul>
<li>代码里通过 embedding 图增强 + weighted clustering 实现</li>
</ul>
</li>
<li>
<p><strong>层次社区摘要</strong></p>
<ul>
<li>社区报告与 level summary 都有实现</li>
</ul>
</li>
<li>
<p><strong>多层索引</strong></p>
<ul>
<li><code>IndexHCHNSWFlat</code> 已落地</li>
</ul>
</li>
<li>
<p><strong>多层检索</strong></p>
<ul>
<li>支持 per-level search 和层级预算</li>
</ul>
</li>
<li>
<p><strong>adaptive filtering 风格生成</strong></p>
<ul>
<li><code>map + reduce</code> 已有代码</li>
</ul>
</li>
</ol>
<h3>9.2 更像“论文思路”，但工程上还比较粗糙的部分</h3>
<ol>
<li>查询理解依赖 LLM 打分，稳定性仍受提示词影响</li>
<li>很多路径使用固定阈值和启发式参数</li>
<li>数据路径、API 路径、实验路径大量写死</li>
<li>离线/在线流程耦合较重，复现实验门槛不低</li>
</ol>
<hr>
<h2>10. 这个仓库和原版 GraphRAG 的关系</h2>
<p>可以这样记：</p>
<h3>GraphRAG 提供了什么</h3>
<ol>
<li>文本切 chunk</li>
<li>从文本抽实体和关系</li>
<li>基础图工作流</li>
</ol>
<h3>ArchRAG 在什么地方超出了 GraphRAG</h3>
<ol>
<li>不满足于纯结构社区</li>
<li>引入了多层社区迭代构建</li>
<li>引入了专门的层次 ANN 索引</li>
<li>不只做 global/local 二分，而是多层联合检索</li>
<li>生成阶段强调 adaptive filtering，而不是简单把所有检索结果拼接</li>
</ol>
<hr>
<h2>11. 当前代码的工程现状与问题</h2>
<p>这是做项目接手时必须知道的现实情况。</p>
<h3>11.1 可移植性一般</h3>
<p>很多脚本和评测代码里存在硬编码路径，例如：</p>
<ul>
<li><code>/mnt/data/wangshu/...</code></li>
<li>固定数据集目录</li>
<li>固定 index 文件位置</li>
</ul>
<p>这意味着：</p>
<ul>
<li>仓库<strong>不是开箱即用</strong></li>
<li>复现依赖原作者的目录组织方式</li>
</ul>
<h3>11.2 配置分散</h3>
<p>配置来源同时分布在：</p>
<ul>
<li><code>dataset/*.sh</code></li>
<li><code>dataset/settings.yaml</code></li>
<li><code>src/utils.py</code> 的 argparse 默认值</li>
</ul>
<p>这会导致参数真实生效位置不够直观。</p>
<h3>11.3 密钥与实验参数管理不规范</h3>
<p>样例脚本中出现了硬编码 API 配置位，说明项目还停留在实验脚本风格，而不是正式产品风格。</p>
<h3>11.4 测试不足</h3>
<p>虽然有 <code>src/evaluate/</code>，但更偏实验评测，不是单元测试/集成测试体系。</p>
<h3>11.5 模块边界还可以更清晰</h3>
<p>例如：</p>
<ul>
<li><code>utils.py</code> 过于臃肿</li>
<li>prompt、推理、数据处理有明显交叉</li>
<li>线上推理和实验脚本耦合较深</li>
</ul>
<hr>
<h2>12. 读代码建议顺序</h2>
<p>如果你要尽快上手，推荐顺序如下：</p>
<ol>
<li><code>README.md</code></li>
<li><code>dataset/index.sh</code></li>
<li><code>dataset/query.sh</code></li>
<li><code>src/index.py</code></li>
<li><code>src/inference.py</code></li>
<li><code>src/attr_cluster.py</code></li>
<li><code>src/community_report.py</code></li>
<li><code>src/client_reasoning.py</code></li>
<li><code>src/hchnsw_index.py</code></li>
<li><code>src/utils.py</code></li>
<li><code>src/evaluate/test_qa.py</code></li>
<li><code>HCHNSW/faiss/faiss/IndexHCHNSW.h</code></li>
<li><code>HCHNSW/faiss/faiss/impl/HCHNSW.h</code></li>
</ol>
<p>这个顺序的理由是：</p>
<ul>
<li>先看主流程</li>
<li>再看算法模块</li>
<li>最后再看底层索引</li>
</ul>
<hr>
<h2>13. 最值得做笔记的数据文件</h2>
<p>后续如果真的跑通一次，最值得保存和理解的中间产物是：</p>
<ol>
<li><code>create_final_entities.parquet</code></li>
<li><code>create_final_relationships.parquet</code></li>
<li><code>community_df_intermediate.csv</code></li>
<li><code>community_df_index.csv</code></li>
<li><code>level_summary.csv</code></li>
<li><code>entity_df_index.csv</code></li>
<li><code>relationship_df_index.csv</code></li>
<li><code>hchnsw.index</code></li>
</ol>
<p>建议你把这几份文件之间的字段关系单独再画一张图。</p>
<hr>
<h2>14. 论文实验结论可怎么理解</h2>
<p>结合论文摘要、方法段落与结果页，可以提炼出三点：</p>
<ol>
<li>
<p><strong>准确性更好</strong></p>
<ul>
<li>论文声称在 specific QA 上优于已有 graph-based RAG</li>
</ul>
</li>
<li>
<p><strong>token 成本更低</strong></p>
<ul>
<li>关键原因是不用像 GraphRAG global search 那样遍历全部社区</li>
</ul>
</li>
<li>
<p><strong>社区质量更高</strong></p>
<ul>
<li>论文给出了 attributed clustering 相比 Leiden 的社区质量提升</li>
</ul>
</li>
</ol>
<p>对照仓库实现，这些结论分别对应：</p>
<ol>
<li><code>src/evaluate/test_qa.py</code></li>
<li>多层检索 + map/reduce 过滤</li>
<li><code>metric/</code> 与 <code>community_evaluate.py</code></li>
</ol>
<hr>
<h2>15. 对项目的总体判断</h2>
<p>如果从“科研原型”角度看，这个项目的亮点很明确：</p>
<ol>
<li>用社区层次替代单层图检索</li>
<li>用属性增强改善社区质量</li>
<li>用 HCHNSW 把层次检索结构化落地</li>
</ol>
<p>如果从“工程产品”角度看，它还有明显短板：</p>
<ol>
<li>配置与路径硬编码较多</li>
<li>依赖外部环境较重</li>
<li>评测多、测试少</li>
<li>模块抽象仍偏实验脚本</li>
</ol>
<p>所以最准确的定位是：</p>
<p><strong>这是一个研究导向、方法亮点强、工程化程度中等的 GraphRAG 改造项目。</strong></p>
<hr>
<h2>16. 一页总结</h2>
<p>如果只记住最核心的内容，请记这四句：</p>
<ol>
<li>ArchRAG 的本质，是把 KG 上的“实体 + 社区”做成层次可检索结构。</li>
<li>离线阶段的关键是：图增强、层次聚类、社区摘要、HCHNSW 建索引。</li>
<li>在线阶段的关键是：多层检索、关系补充、adaptive filtering 生成。</li>
<li>这个仓库最有研究价值的部分不在 <code>src/graphrag/</code>，而在根级 <code>src/*.py</code> 和 <code>HCHNSW</code>。</li>
</ol>`,plainText:"ArchRAG 项目理解入门 1. 项目一句话说明 ArchRAG 是一个基于知识图谱的 Graph-based RAG 系统。它的核心目标不是只做“向量检索 + 生成”，而是把语料先构造成图，再把图中的 实体 与**社区（community）**组织成多层级结构，最后在查询时按层级检索并做答案生成。 这套仓库同时包含两部分： 论文方法本体的实现层 ：根目录 src/*.py GraphRAG / Faiss 的基础设施层 ： src/graphrag/ ：Microsoft GraphRAG 的基线与图构建代码 HCHNSW/faiss/ ：基于 Faiss 1.8.0 改造的自定义 ANN 索引实现 可以把它理解成： GraphRAG 负责把文本变成 KG ArchRAG 负责把 KG 进一步变成“层次社区索引” HCHNSW 负责让多层检索真正跑得快 2. 仓库结构总览 2.1 需要优先读懂的目录 目录/文件 作用 是否核心 README.md 项目总体说明、论文链接、基本运行方式 是 dataset/index.sh 离线建索引脚本样例 是 dataset/query.sh 在线问答评测脚本样例 是 dataset/settings.yaml GraphRAG 图构建配置样例 是 src/index.py ArchRAG 离线索引主入口 是 src/inference.py ArchRAG 在线检索与生成主入口 是 src/attr_cluster.py 属性增强层次聚类核心逻辑 是 src/community_report.py 社区摘要/报告生成 是 src/client_reasoning.py 层级选择、map-reduce 生成、提示词组装 是 src/hchnsw_index.py HCHNSW 索引构建与落盘 是 src/utils.py 参数解析、图读取、embedding、图增强工具 是 src/evaluate/ QA 评测、摘要评测、索引/聚类实验 重要 metric/ 聚类质量指标与基线聚类实现 重要 src/graphrag/ GraphRAG 基线与 KG 构建 基础设施 HCHNSW/ 改造版 Faiss，提供 IndexHCHNSW* 基础设施 2.2 不要一开始陷进去的目录 HCHNSW/faiss/ 代码量极大，大部分是上游 Faiss；只需要关注 IndexHCHNSW.* 与 impl/HCHNSW.* src/graphrag/ 是 GraphRAG 基线和配套模块，不是 ArchRAG 创新点本身 3. 论文在讲什么 论文题目： ArchRAG: Attributed Community-based Hierarchical Retrieval-Augmented Generation 论文链接： https://arxiv.org/abs/2502.09891 我核对到的 arXiv 页面显示最新版本为 v3，2025-08-08 。 3.1 论文要解决的三个问题 论文对 GraphRAG 的批评可以概括成三点： 社区质量低 GraphRAG 主要依赖图结构做社区划分 忽略了实体/关系文本属性 导致同一社区里语义可能很杂，社区摘要质量也会受影响 粒度不灵活 现有方法通常只在某一个粒度上检索 抽象问题和细粒度事实问题很难同时兼顾 在线 token 成本高 特别是 GraphRAG 的 global search，需要遍历大量社区摘要 在真实问答中成本会非常高 3.2 论文的核心主张 ArchRAG 的回答是： 用 属性增强社区 替代纯结构社区 用 层次化社区结构 同时覆盖抽象与具体问题 用 C-HNSW / HCHNSW 这样的层次索引 降低多层检索成本 用 adaptive filtering + map/reduce 减少长上下文直接塞给 LLM 的问题 3.3 论文方法的两阶段 阶段 A：离线索引 从语料构建 KG 对 KG 做属性增强与层次聚类 为每个社区生成 LLM 摘要 为每一层生成 level summary 把“社区 + 实体”一起写入 HCHNSW 索引 阶段 B：在线检索与生成 把问题编码成 query embedding 在 HCHNSW 上做多层搜索 同时取出实体、社区、关系、可选 chunk 先 map，再 reduce，得到最终答案 4. 论文概念如何映射到代码 这一节最重要。建议把“论文术语”和“代码文件”对应记住。 论文概念 仓库实现 KG construction src/graphrag/ + dataset/settings.yaml attributed community / AC src/attr_cluster.py graph augmentation by attribute similarity src/utils.py -> compute_distance() community report generation src/community_report.py level summary src/client_reasoning.py -> level_summary() C-HNSW / HCHNSW index src/hchnsw_index.py + HCHNSW/faiss/ hierarchical retrieval src/inference.py -> hcarag_retrieval() adaptive filtering-based generation src/client_reasoning.py -> map_inference()/reduce_inference() 5. 端到端执行流程 5.1 图构建阶段：先跑 GraphRAG 对应资料： README.md src/graphrag/README.md dataset/settings.yaml 流程大致是： 把原始语料放进 corpus/input 用 GraphRAG 从文本 chunk 中抽实体和关系 生成 create_final_entities.parquet 与 create_final_relationships.parquet 把它们作为 ArchRAG 的输入图 注意： dataset/settings.yaml 里显式跳过了一些 GraphRAG 工作流，例如 create_final_community_reports 说明这个项目只把 GraphRAG 当成 KG 构建器 ，而不是直接使用它自带的社区摘要/检索流程 5.2 ArchRAG 离线建索引 主入口： src/index.py 代码级步骤 read_graph_nx() 从 entity / relationship 文件读取图 位置： src/utils.py process_entity_embedding() 给实体算 embedding，并挂到 networkx 图节点上 attr_cluster() 位置： src/attr_cluster.py 做多层聚类 create_hchnsw_index() 位置： src/hchnsw_index.py 把多层社区和实体一起写入 HCHNSW make_level_summary() 位置： src/index.py 实际调用 src/client_reasoning.py -> level_summary() 保存多个中间/最终文件 community_df_intermediate.csv community_df_index.csv entity_df_index.csv relationship_df_index.csv relationship_embedding.csv level_summary.csv hchnsw.index 核心理解 ArchRAG 的索引对象不是单一向量库，而是三层东西一起组成的： 实体 社区 层摘要 在线问答时真正起作用的是它们的组合，而不是某一个单独对象。 5.3 在线问答 主入口： src/inference.py 整体函数链： load_index() -> hcarag() -> hcarag_retrieval() -> hcarag_inference() -> hcarag_inference_direct() 或 hcarag_inference_mr() 检索阶段做了什么 对 query 做 embedding 根据策略决定每层取多少个结果 global all inference 按层调用 HCHNSW 搜索 合并得到候选实体/社区 从候选实体关联出的关系中，再按 embedding 相似度取 top-k 关系 可选： 取 vanilla chunk 检索结果 做 PPR refine 生成阶段做了什么 有两条路线： direct 直接把实体/关系/社区拼 prompt，让 LLM 出答案 mr 先让 LLM 对问题做一步自由推理 再把检索结果拆成多个 chunk 做 map 每个 chunk 返回 points 最后 reduce 汇总成答案 论文里说的 adaptive filtering，在代码里主要体现在这条 mr 路径上。 6. 核心模块逐个解读 6.1 src/utils.py ：底座工具文件 这个文件很重要，承担了四类职责： 参数解析 create_arg_parser() create_inference_arg_parser() 图读取 read_graph_nx() 将实体和关系文件转成 NetworkX 图 embedding entity_embedding() relation_embedding() 通过 OpenAI-compatible API 或本地模型算向量 图增强 compute_distance() 先把原图边赋权为余弦相似度 再用 HNSW 找相似节点补边 这里体现的论文思想 论文里“属性增强”的本质，在这份代码里首先体现为： 把实体文本变成 embedding 再用 embedding 相似度补图边与赋边权 也就是说，这个仓库目前对“attribute”最直接的实现就是 文本 embedding 驱动的图增强 。 6.2 src/attr_cluster.py ：层次聚类主逻辑 这是 ArchRAG 的算法核心。 主函数： attr_cluster() 每一层循环都做： 若 augment_graph=True ，先 compute_distance() 得到增强图 用聚类算法得到社区 默认 weighted_leiden 也支持 spectral clustering 若不是第一层，把低层社区重新编号并映射到上层 为社区生成 LLM 报告 根据新社区重建图 进入下一层 关键设计 这个实现不是“先一次性做完层次聚类，再统一摘要”，而是： 一层聚类 -> 一层摘要 -> 用摘要/社区结果重构上层图 -> 再聚类 这正对应论文里“LLM-based iterative hierarchical clustering framework”的叙事。 终止条件 达到 max_level 或者当前层聚类数低于 min_clusters 6.3 src/community_report.py ：社区报告生成 职责： 根据社区里的实体、关系、下级社区拼装文本 调 LLM 生成结构化 JSON 报告 解析出： title summary findings rating rating_explanation 再给报告文本算 embedding 为什么重要 社区不只是一个 cluster id。 在 ArchRAG 里，社区被提升成了 可检索的语义对象 。 这意味着社区有两种表示： 图结构表示 文本摘要表示 后续检索时真正喂给 LLM 的，主要是第二种。 6.4 src/client_reasoning.py ：查询理解与生成编排 这份文件承担两类很重要的逻辑： A. 查询如何决定搜哪一层 problem_reasoning() 它会让 LLM 读取： 每层的 level summary 每层社区数量 每层随机社区例子 然后输出每层的重要性分数，再转换成 k_per_level 。 也就是说，论文中的“支持抽象问题与具体问题的分层检索”在代码里不是硬编码规则，而是 LLM 决策的层级预算分配 。 B. 检索后怎么生成答案 这里实现了： prep_e_r_content() prep_community_content() map_inference() reduce_inference() 它本质上是一个面向 token 限额的证据整理器。 6.5 src/hchnsw_index.py ：层次索引写入 职责很清晰： 读取社区向量和实体向量 把社区 level 与实体 level 合成 combined_levels 社区是 1..L 实体是 0 调 faiss.IndexHCHNSWFlat 调 set_vector_level(levels) add() 所有向量 这里可以把它理解成： 把“多层社区 + 底层实体”压到一个支持层级搜索的 ANN 索引里。 6.6 src/inference.py ：在线检索主链 几个必须记住的函数： hcarag() hcarag_retrieval() load_strategy() hcarag_inference_mr() load_strategy() 的三种检索策略 global 每层取固定 k_each_level all 更接近 GraphRAG 风格，扩大低层取样范围 inference 先让 LLM 判断层级重要性 再按比例分配检索预算 这说明论文里的“adaptive hierarchical retrieval”在仓库中至少有一个明显落地点： strategy=inference 。 7. HCHNSW 到底是什么 对应目录： HCHNSW/faiss/ 7.1 它不是普通 HNSW Faiss 原生提供的是 IndexHNSW* 。 这个项目新增的是 IndexHCHNSW* ，核心特征有两个： 每个向量都有 level 搜索时可以指定 search_level 相关文件： HCHNSW/faiss/faiss/IndexHCHNSW.h HCHNSW/faiss/faiss/IndexHCHNSW.cpp HCHNSW/faiss/faiss/impl/HCHNSW.h HCHNSW/faiss/faiss/impl/HCHNSW.cpp 7.2 从头文件看它提供了什么 SearchParametersHCHNSW 里新增了： search_level entry_point efSearch HCHNSW 结构里新增了： levels cross_neighbors first_entry_points_in_level 这说明它不是单纯把所有向量混在一个图里搜索，而是明确维护了 层级信息 和 跨层入口 。 7.3 搜索过程怎么理解 从 impl/HCHNSW.cpp 的 HCHNSW::search() 看，大致逻辑是： 从最高层入口点出发 对高于目标层的各层做 greedy search 沿 cross_neighbors 逐层下降 到达目标层后再做该层近邻搜索 这和论文叙述的“分层查找 + 逐层下钻”是一致的。 7.4 这个模块在项目里的意义 如果没有 HCHNSW，ArchRAG 只能： 每层单独建一个 ANN 索引 或者完全不用 ANN，直接暴力遍历 那样： 工程实现更碎 多层检索切换更慢 不能自然支持跨层 entry point 传递 所以 HCHNSW 是论文“效率提升”主张的关键支撑。 8. 评测与实验代码怎么读 8.1 主评测入口 src/evaluate/test_qa.py 主要流程： load_index() 读取问题集 多进程跑 hcarag() 保存预测结果 再调用 src/evaluate/evaluate.py 算指标 8.2 指标文件 src/evaluate/evaluate.py 支持： KGQA 风格：Hit / F1 / Precision / Recall DocQA 风格：Hit / EM / F1 NarrativeQA 风格：BLEU / METEOR / ROUGE-L 8.3 聚类与索引实验 src/evaluate/community_evaluate.py 对比不同聚类方法： Leiden SCAN Spectral clustering metric/metric.py 聚类质量指标包括： Silhouette Calinski-Harabasz Davies-Bouldin 自定义 similarity clustering entropy src/evaluate/hchnsw_evaluate.py 专门评估 HCHNSW 与“每层一个 HNSW baseline”之间的速度和 recall。 这说明项目不只是做 QA 指标，还试图对“索引结构本身”单独做实验。 9. 论文结论与仓库落地的对应关系 基于论文与代码，我建议这样理解“论文贡献是否真的落地”： 9.1 已明显落地的部分 属性增强聚类 代码里通过 embedding 图增强 + weighted clustering 实现 层次社区摘要 社区报告与 level summary 都有实现 多层索引 IndexHCHNSWFlat 已落地 多层检索 支持 per-level search 和层级预算 adaptive filtering 风格生成 map + reduce 已有代码 9.2 更像“论文思路”，但工程上还比较粗糙的部分 查询理解依赖 LLM 打分，稳定性仍受提示词影响 很多路径使用固定阈值和启发式参数 数据路径、API 路径、实验路径大量写死 离线/在线流程耦合较重，复现实验门槛不低 10. 这个仓库和原版 GraphRAG 的关系 可以这样记： GraphRAG 提供了什么 文本切 chunk 从文本抽实体和关系 基础图工作流 ArchRAG 在什么地方超出了 GraphRAG 不满足于纯结构社区 引入了多层社区迭代构建 引入了专门的层次 ANN 索引 不只做 global/local 二分，而是多层联合检索 生成阶段强调 adaptive filtering，而不是简单把所有检索结果拼接 11. 当前代码的工程现状与问题 这是做项目接手时必须知道的现实情况。 11.1 可移植性一般 很多脚本和评测代码里存在硬编码路径，例如： /mnt/data/wangshu/... 固定数据集目录 固定 index 文件位置 这意味着： 仓库 不是开箱即用 复现依赖原作者的目录组织方式 11.2 配置分散 配置来源同时分布在： dataset/*.sh dataset/settings.yaml src/utils.py 的 argparse 默认值 这会导致参数真实生效位置不够直观。 11.3 密钥与实验参数管理不规范 样例脚本中出现了硬编码 API 配置位，说明项目还停留在实验脚本风格，而不是正式产品风格。 11.4 测试不足 虽然有 src/evaluate/ ，但更偏实验评测，不是单元测试/集成测试体系。 11.5 模块边界还可以更清晰 例如： utils.py 过于臃肿 prompt、推理、数据处理有明显交叉 线上推理和实验脚本耦合较深 12. 读代码建议顺序 如果你要尽快上手，推荐顺序如下： README.md dataset/index.sh dataset/query.sh src/index.py src/inference.py src/attr_cluster.py src/community_report.py src/client_reasoning.py src/hchnsw_index.py src/utils.py src/evaluate/test_qa.py HCHNSW/faiss/faiss/IndexHCHNSW.h HCHNSW/faiss/faiss/impl/HCHNSW.h 这个顺序的理由是： 先看主流程 再看算法模块 最后再看底层索引 13. 最值得做笔记的数据文件 后续如果真的跑通一次，最值得保存和理解的中间产物是： create_final_entities.parquet create_final_relationships.parquet community_df_intermediate.csv community_df_index.csv level_summary.csv entity_df_index.csv relationship_df_index.csv hchnsw.index 建议你把这几份文件之间的字段关系单独再画一张图。 14. 论文实验结论可怎么理解 结合论文摘要、方法段落与结果页，可以提炼出三点： 准确性更好 论文声称在 specific QA 上优于已有 graph-based RAG token 成本更低 关键原因是不用像 GraphRAG global search 那样遍历全部社区 社区质量更高 论文给出了 attributed clustering 相比 Leiden 的社区质量提升 对照仓库实现，这些结论分别对应： src/evaluate/test_qa.py 多层检索 + map/reduce 过滤 metric/ 与 community_evaluate.py 15. 对项目的总体判断 如果从“科研原型”角度看，这个项目的亮点很明确： 用社区层次替代单层图检索 用属性增强改善社区质量 用 HCHNSW 把层次检索结构化落地 如果从“工程产品”角度看，它还有明显短板： 配置与路径硬编码较多 依赖外部环境较重 评测多、测试少 模块抽象仍偏实验脚本 所以最准确的定位是： 这是一个研究导向、方法亮点强、工程化程度中等的 GraphRAG 改造项目。 16. 一页总结 如果只记住最核心的内容，请记这四句： ArchRAG 的本质，是把 KG 上的“实体 + 社区”做成层次可检索结构。 离线阶段的关键是：图增强、层次聚类、社区摘要、HCHNSW 建索引。 在线阶段的关键是：多层检索、关系补充、adaptive filtering 生成。 这个仓库最有研究价值的部分不在 src/graphrag/ ，而在根级 src/*.py 和 HCHNSW 。"},{meta:{title:"测试main",date:"2026-04-13T14:02:20.000Z",draft:!0,tags:[],categories:[],clues:[],slug:"%E6%B5%8B%E8%AF%95main",sourcePath:"src/content/evidence/测试main.md",readingTime:1},html:"<h1>测试</h1>",plainText:"测试"},{meta:{title:"刷题",date:"2026-03-05T15:38:17.000Z",draft:!1,tags:[],categories:[],clues:[],slug:"%E5%88%B7%E9%A2%98",sourcePath:"src/content/evidence/刷题.md",readingTime:1},html:`<h1>常见类型 INF 设定（竞赛常用）</h1>





























































<table><thead><tr><th>类型</th><th>位数</th><th>理论最大值</th><th>常用 INF 写法</th><th>说明</th></tr></thead><tbody><tr><td><code>int</code></td><td>32bit</td><td>2,147,483,647</td><td><code>0x3f3f3f3f</code></td><td>最常见写法，可 <code>memset</code></td></tr><tr><td><code>int</code></td><td>32bit</td><td>2,147,483,647</td><td><code>1e9</code></td><td>简单直观</td></tr><tr><td><code>long long</code></td><td>64bit</td><td>9.22e18</td><td><code>1LL&#x3C;&#x3C;60</code></td><td>最常用</td></tr><tr><td><code>long long</code></td><td>64bit</td><td>9.22e18</td><td><code>4e18</code></td><td>也常见</td></tr><tr><td><code>float</code></td><td>32bit</td><td>~3.4e38</td><td><code>1e30f</code></td><td>防止精度问题</td></tr><tr><td><code>double</code></td><td>64bit</td><td>~1.7e308</td><td><code>1e100</code></td><td>Floyd/概率DP常用</td></tr><tr><td><code>double</code></td><td>64bit</td><td>~1.7e308</td><td><code>1e18</code></td><td>若数据规模较小</td></tr></tbody></table>
<h1>为什么 <code>0x3f3f3f3f</code> 特别流行</h1>
<p>原因是可以这样初始化：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>memset(dist, 0x3f, sizeof(dist));</span></span>
<span class="line"><span></span></span></code></pre>
<p>结果每个字节：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>00111111</span></span>
<span class="line"><span></span></span></code></pre>
<p>拼成：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>0x3f3f3f3f = 1061109567</span></span>
<span class="line"><span></span></span></code></pre>
<p>足够大且安全。</p>`,plainText:"常见类型 INF 设定（竞赛常用） 类型 位数 理论最大值 常用 INF 写法 说明 int 32bit 2,147,483,647 0x3f3f3f3f 最常见写法，可 memset int 32bit 2,147,483,647 1e9 简单直观 long long 64bit 9.22e18 1LL&#x3C;&#x3C;60 最常用 long long 64bit 9.22e18 4e18 也常见 float 32bit ~3.4e38 1e30f 防止精度问题 double 64bit ~1.7e308 1e100 Floyd/概率DP常用 double 64bit ~1.7e308 1e18 若数据规模较小 为什么 0x3f3f3f3f 特别流行 原因是可以这样初始化： memset(dist, 0x3f, sizeof(dist)); 结果每个字节： 00111111 拼成： 0x3f3f3f3f = 1061109567 足够大且安全。"},{meta:{title:"General",date:"2026-02-15T09:37:45.000Z",draft:!0,tags:[],categories:[],clues:[],slug:"general",sourcePath:"src/content/evidence/general.md",readingTime:1},html:`<h2>什么是URL</h2>
<h3>1. URL 的全称是什么？</h3>
<ul>
<li><strong>全称</strong>：<strong>U</strong>niform <strong>R</strong>esource <strong>L</strong>ocator</li>
<li><strong>中文翻译</strong>：<strong>统一资源定位符</strong></li>
</ul>
<h3>2. URL 是什么意思？</h3>
<p>通俗地说，URL 就是互联网上的 <strong>“万能地址”</strong>。</p>
<p>它的核心作用就是<strong>告诉计算机三件事</strong>：</p>
<ol>
<li><strong>怎么去？ (协议 Protocol)</strong>
<ul>
<li><code>http://</code>：用标准的网页送货车去。</li>
<li>(其他的还有 <code>https://</code> 加密车, <code>ftp://</code> 文件传输车, 本地文件车)。</li>
</ul>
</li>
<li><strong>去哪里？ (主机 Host + 端口 Port)</strong>
<ul>
<li><code>localhost</code>：去本机（如果是百度就是 <code>www.baidu.com</code>）。</li>
<li><code>:12345</code>：去这台机器的 12345 号“窗口”（不同的程序占用不同的端口，比如网页通常是 80，你的程序选了 12345）。</li>
</ul>
</li>
<li><strong>找什么？ (路径 Path)</strong>
<ul>
<li><code>/sse</code>：找一个叫 "sse" 的资源或接口。</li>
</ul>
</li>
</ol>`,plainText:'什么是URL 1. URL 的全称是什么？ 全称 ： U niform R esource L ocator 中文翻译 ： 统一资源定位符 2. URL 是什么意思？ 通俗地说，URL 就是互联网上的 “万能地址” 。 它的核心作用就是 告诉计算机三件事 ： 怎么去？ (协议 Protocol) http:// ：用标准的网页送货车去。 (其他的还有 https:// 加密车, ftp:// 文件传输车, 本地文件车)。 去哪里？ (主机 Host + 端口 Port) localhost ：去本机（如果是百度就是 www.baidu.com ）。 :12345 ：去这台机器的 12345 号“窗口”（不同的程序占用不同的端口，比如网页通常是 80，你的程序选了 12345）。 找什么？ (路径 Path) /sse ：找一个叫 "sse" 的资源或接口。'},{meta:{title:"Git_learn",date:"2026-02-15T08:01:55.000Z",draft:!0,tags:[],categories:[],clues:[],slug:"git_learn",sourcePath:"src/content/evidence/git_learn.md",readingTime:1},html:"<p><strong>查看当前仓库状态</strong>：<code>git status</code></p>\n<p><strong>查看已暂存内容</strong>: <code>git diff --cached</code></p>\n<p><strong>查看分支状态</strong>：<code>git br</code></p>\n<p>****：``</p>\n<p>****：``</p>\n<p>****：``</p>",plainText:"查看当前仓库状态 ： git status 查看已暂存内容 : git diff --cached 查看分支状态 ： git br ****：`` ****：`` ****：``"},{meta:{title:"最大团",date:"2026-01-09T07:52:21.000Z",draft:!1,tags:["最大团"],categories:["图论"],clues:["图论","最大团"],slug:"%E6%9C%80%E5%A4%A7%E5%9B%A2",sourcePath:"src/content/evidence/最大团.md",readingTime:2},html:`<p>简单起见，直接用mask遍历所有情况也就是从0-2<sup>n</sup>。</p>
<p>时间复杂度是O(2<sup>n</sup>·n<sup>2</sup>)</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include </span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main() {</span></span>
<span class="line"><span style="color:#FFFFFF">    ios::sync_with_stdio(</span><span style="color:#F4D9E5">false</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#E8E8E8">    cin</span><span style="color:#FFFFFF">.tie(</span><span style="color:#F4D9E5">nullptr</span><span style="color:#FFFFFF">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    int n, m;</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> n >> m;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;unsigned long long> adj(n, </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;vector&#x3C;long long>> w(n, vector&#x3C;long long>(n, </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    for (int i = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; i &#x3C; m; i++) {</span></span>
<span class="line"><span style="color:#FFFFFF">        int u, v;</span></span>
<span class="line"><span style="color:#FFFFFF">        long long ww;</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> u >> v >> ww;</span></span>
<span class="line"><span style="color:#FFFFFF">        --u; --v;</span></span>
<span class="line"><span style="color:#FFFFFF">        if (u == v) continue;</span></span>
<span class="line"><span style="color:#E8E8E8">        adj</span><span style="color:#FFFFFF">[u] |= (</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ULL &#x3C;&#x3C; v);</span></span>
<span class="line"><span style="color:#E8E8E8">        adj</span><span style="color:#FFFFFF">[v] |= (</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ULL &#x3C;&#x3C; u);</span></span>
<span class="line"><span style="color:#E8E8E8">        w</span><span style="color:#FFFFFF">[u][v] = </span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[v][u] = max(</span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[u][v], ww);</span><span style="color:#9A9A9A;font-style:italic"> // 重边取最大，想累加就改这里</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    long long bestW = LLONG_MIN;</span></span>
<span class="line"><span style="color:#FFFFFF">    unsigned long long bestMask = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //最优2进制团</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    unsigned long long ALL = (n == </span><span style="color:#F4D9E5">64</span><span style="color:#FFFFFF"> ? ~</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">ULL : ((</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ULL &#x3C;&#x3C; n) - </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">));</span></span>
<span class="line"><span style="color:#FFFFFF">    for (unsigned long long mask = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">; mask &#x3C;= ALL; mask++) {</span></span>
<span class="line"><span style="color:#FFFFFF">        bool ok = </span><span style="color:#F4D9E5">true</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //ok标记当前mask是不是团，如果不是团继续下一个mask(也就是mask++)</span></span>
<span class="line"><span style="color:#FFFFFF">        for (int i = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; i &#x3C; n; i++) </span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            if (mask &#x26; (</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ULL &#x3C;&#x3C; i))</span><span style="color:#9A9A9A;font-style:italic"> //i在当前mask里面</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                unsigned long long others = mask &#x26; ~(</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ULL &#x3C;&#x3C; i);</span><span style="color:#9A9A9A;font-style:italic"> //others是i之外的mask之内的点</span></span>
<span class="line"><span style="color:#FFFFFF">                if (others &#x26; ~</span><span style="color:#E8E8E8">adj</span><span style="color:#FFFFFF">[i])</span><span style="color:#9A9A9A;font-style:italic"> //如果这些i之外的mask之内的点与i之间存在没有边的情况就说明不是团,ok=false</span></span>
<span class="line"><span style="color:#FFFFFF">                { </span></span>
<span class="line"><span style="color:#FFFFFF">                    ok = </span><span style="color:#F4D9E5">false</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">                    break; </span></span>
<span class="line"><span style="color:#FFFFFF">                }</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">        if (!ok) continue;</span><span style="color:#9A9A9A;font-style:italic"> //如果不能成团直接排除这个mask</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">        long long sum = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">        for (int i = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; i &#x3C; n; i++) if (mask &#x26; (</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ULL &#x3C;&#x3C; i))</span><span style="color:#9A9A9A;font-style:italic"> //i点在mask内</span></span>
<span class="line"><span style="color:#FFFFFF">            for (int j = i + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">; j &#x3C; n; j++) if (mask &#x26; (</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ULL &#x3C;&#x3C; j))</span><span style="color:#9A9A9A;font-style:italic"> //j点也在musk内</span></span>
<span class="line"><span style="color:#FFFFFF">                sum += </span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[i][j];</span><span style="color:#9A9A9A;font-style:italic"> //直接加上w[i][j]因为就算没有边权值也是0不影响结果</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">        if (sum > bestW) {</span></span>
<span class="line"><span style="color:#FFFFFF">            bestW = sum;</span></span>
<span class="line"><span style="color:#FFFFFF">            bestMask = mask;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span><span style="color:#9A9A9A;font-style:italic"> //记录最大团</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; bestW &#x3C;&#x3C; </span><span style="color:#F4D9E5">"\\n"</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    bool first = </span><span style="color:#F4D9E5">true</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    for (int i = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; i &#x3C; n; i++) if (bestMask &#x26; (</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ULL &#x3C;&#x3C; i)) {</span></span>
<span class="line"><span style="color:#FFFFFF">        if (!first) cout &#x3C;&#x3C; </span><span style="color:#F4D9E5">' '</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">        first = </span><span style="color:#F4D9E5">false</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //这两行是输出格式化的，美观</span></span>
<span class="line"><span style="color:#FFFFFF">        cout &#x3C;&#x3C; (i + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span><span style="color:#9A9A9A;font-style:italic"> //下标转换为序号</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; </span><span style="color:#F4D9E5">"\\n"</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>`,plainText:`简单起见，直接用mask遍历所有情况也就是从0-2 n 。 时间复杂度是O(2 n ·n 2 ) #include &#x3C;bits/stdc++.h> using namespace std; int main() { ios::sync_with_stdio( false ); cin .tie( nullptr ); int n, m; cin >> n >> m; vector&#x3C;unsigned long long> adj(n, 0 ); vector&#x3C;vector&#x3C;long long>> w(n, vector&#x3C;long long>(n, 0 )); for (int i = 0 ; i &#x3C; m; i++) { int u, v; long long ww; cin >> u >> v >> ww; --u; --v; if (u == v) continue; adj [u] |= ( 1 ULL &#x3C;&#x3C; v); adj [v] |= ( 1 ULL &#x3C;&#x3C; u); w [u][v] = w [v][u] = max( w [u][v], ww); // 重边取最大，想累加就改这里 } long long bestW = LLONG_MIN; unsigned long long bestMask = 0 ; //最优2进制团 unsigned long long ALL = (n == 64 ? ~ 0 ULL : (( 1 ULL &#x3C;&#x3C; n) - 1 )); for (unsigned long long mask = 1 ; mask &#x3C;= ALL; mask++) { bool ok = true ; //ok标记当前mask是不是团，如果不是团继续下一个mask(也就是mask++) for (int i = 0 ; i &#x3C; n; i++) { if (mask &#x26; ( 1 ULL &#x3C;&#x3C; i)) //i在当前mask里面 { unsigned long long others = mask &#x26; ~( 1 ULL &#x3C;&#x3C; i); //others是i之外的mask之内的点 if (others &#x26; ~ adj [i]) //如果这些i之外的mask之内的点与i之间存在没有边的情况就说明不是团,ok=false { ok = false ; break; } } } if (!ok) continue; //如果不能成团直接排除这个mask long long sum = 0 ; for (int i = 0 ; i &#x3C; n; i++) if (mask &#x26; ( 1 ULL &#x3C;&#x3C; i)) //i点在mask内 for (int j = i + 1 ; j &#x3C; n; j++) if (mask &#x26; ( 1 ULL &#x3C;&#x3C; j)) //j点也在musk内 sum += w [i][j]; //直接加上w[i][j]因为就算没有边权值也是0不影响结果 if (sum > bestW) { bestW = sum; bestMask = mask; } //记录最大团 } cout &#x3C;&#x3C; bestW &#x3C;&#x3C; "\\n" ; bool first = true ; for (int i = 0 ; i &#x3C; n; i++) if (bestMask &#x26; ( 1 ULL &#x3C;&#x3C; i)) { if (!first) cout &#x3C;&#x3C; ' ' ; first = false ; //这两行是输出格式化的，美观 cout &#x3C;&#x3C; (i + 1 ); //下标转换为序号 } cout &#x3C;&#x3C; "\\n" ; return 0 ; }`},{meta:{title:"Learn Process",date:"2026-01-04T12:52:40.000Z",draft:!1,tags:[],categories:[],clues:[],slug:"learn-process",sourcePath:"src/content/evidence/learn process.md",readingTime:1},html:`<h1>图论</h1>
<ul>
<li>最大流</li>
<li>最短路径</li>
<li>最小生成树</li>
</ul>`,plainText:"图论 最大流 最短路径 最小生成树"},{meta:{title:"Cpp常用结构",date:"2025-12-16T08:17:18.000Z",draft:!1,tags:[],categories:[],clues:[],slug:"cpp%E5%B8%B8%E7%94%A8%E7%BB%93%E6%9E%84",sourcePath:"src/content/evidence/cpp常用结构.md",readingTime:1},html:`<h2>1.unordered_set</h2>
<h3>用处</h3>
<p>图结构常删除点边的时候可以用避免重复查找。</p>
<h3>函数</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">insert(),find(),erase(type)（删除指定元素）,clear()</span></span>
<span class="line"></span></code></pre>
<h2>2.memset</h2>
<h3>用法</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>void *memset(void *str, int c, size_t n)</span></span>
<span class="line"><span></span></span></code></pre>
<h3>参数</h3>
<ul>
<li><strong>str</strong> -- 指向要填充的内存区域的指针。</li>
<li><strong>c</strong> -- 要设置的值，通常是一个无符号字符。</li>
<li><strong>n</strong> -- 要被设置为该值的字节数。</li>
</ul>
<h3>例子</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">memset(str,</span><span style="color:#F4D9E5">'$'</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">7</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">memset(nums,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,sizeof(nums));</span></span>
<span class="line"></span></code></pre>`,plainText:"1.unordered_set 用处 图结构常删除点边的时候可以用避免重复查找。 函数 insert(),find(),erase(type)（删除指定元素）,clear() 2.memset 用法 void *memset(void *str, int c, size_t n) 参数 str -- 指向要填充的内存区域的指针。 c -- 要设置的值，通常是一个无符号字符。 n -- 要被设置为该值的字节数。 例子 memset(str, '$' , 7 ); memset(nums, 0 ,sizeof(nums));"},{meta:{title:"对电脑操作记录",date:"2025-11-18T07:21:20.000Z",draft:!0,tags:[],categories:[],clues:[],slug:"%E5%AF%B9%E7%94%B5%E8%84%91%E6%93%8D%E4%BD%9C%E8%AE%B0%E5%BD%95",sourcePath:"src/content/evidence/对电脑操作记录.md",readingTime:1},html:`<p>管理员身份运行cmd输入了<code>powercfg -h off</code>(<a href="https://www.bilibili.com/video/BV1Wt4y177Vu/?spm_id_from=333.337.search-card.all.click&#x26;vd_source=53aeb6c72e6f7efb612d0aa41f884a80">【建议收藏】全网最详细C 盘清理指南！！！绝对值得收藏！！！_哔哩哔哩_bilibili</a>)</p>
<p><figure class="missing-evidence"><span>证物缺失</span><code>C:%5CUsers%5C35678%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20251230234934922.png</code></figure></p>
<p>D:\\Program Files\\JiJiDown</p>`,plainText:"管理员身份运行cmd输入了 powercfg -h off ( 【建议收藏】全网最详细C 盘清理指南！！！绝对值得收藏！！！_哔哩哔哩_bilibili ) 证物缺失 C:%5CUsers%5C35678%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20251230234934922.png D:\\Program Files\\JiJiDown"},{meta:{title:"对电脑操作记录",date:"2025-11-18T07:21:20.000Z",draft:!0,tags:[],categories:[],clues:[],slug:"%E5%B7%AE%E5%88%86%E6%95%B0%E7%BB%84",sourcePath:"src/content/evidence/差分数组.md",readingTime:1},html:`<h2>一维差分数组</h2>
<h2>二维差分数组</h2>
<h2>差分数组例题</h2>
<h3>例题1：</h3>
<h3>例题2：</h3>`,plainText:"一维差分数组 二维差分数组 差分数组例题 例题1： 例题2："},{meta:{title:"图的染色解决",date:"2025-11-17T15:51:05.000Z",draft:!1,tags:["算法","图论"],categories:[],clues:["算法","图论"],slug:"%E5%9B%BE%E7%9A%84%E6%9F%93%E8%89%B2%E8%A7%A3%E5%86%B3",sourcePath:"src/content/evidence/图的染色解决.md",readingTime:2},html:`<h1>染色问题</h1>
<h2>同染色（连接点染相同颜色）</h2>
<h3>用法</h3>
<p>得到各个连通分量（分组）。</p>
<h3>代码</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"><span style="color:#FFFFFF">const int MAXN = </span><span style="color:#F4D9E5">100</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[MAXN][MAXN];</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[MAXN];</span></span>
<span class="line"><span style="color:#FFFFFF">int cnt;</span><span style="color:#9A9A9A;font-style:italic"> //连通分量数量</span></span>
<span class="line"><span style="color:#FFFFFF">void dfs(int </span><span style="color:#E8E8E8">index</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">n</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">c</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#E8E8E8">    color</span><span style="color:#FFFFFF">[index]=c;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++) if(</span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[index][i]&#x26;&#x26;!</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]) dfs(i,n,c);</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int n,m;</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> n >> m;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;m;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        int s,t;</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> s >> t;</span></span>
<span class="line"><span style="color:#E8E8E8">        graph</span><span style="color:#FFFFFF">[s][t]=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[t][s]=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(!</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i])</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            cnt++;</span></span>
<span class="line"><span style="color:#FFFFFF">            dfs(i,n,cnt);</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;vector&#x3C;int>> group(cnt+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,vector&#x3C;int>());</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++) </span><span style="color:#E8E8E8">group</span><span style="color:#FFFFFF">[</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]].push_back(i);</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=cnt;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        cout &#x3C;&#x3C; </span><span style="color:#F4D9E5">"颜色"</span><span style="color:#FFFFFF"> &#x3C;&#x3C; i &#x3C;&#x3C; </span><span style="color:#F4D9E5">":"</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">        for(int j=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;j&#x3C;</span><span style="color:#E8E8E8">group</span><span style="color:#FFFFFF">[i].size();j++) cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">group</span><span style="color:#FFFFFF">[i][j] &#x3C;&#x3C; </span><span style="color:#F4D9E5">' '</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">        cout &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<h2>异染色（连接点染不同颜色）</h2>
<h3>用法</h3>
<p>得到二分图。</p>
<h3>代码</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">const int MAXN = </span><span style="color:#F4D9E5">100</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //假如最大100个结点的图</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[MAXN][MAXN];</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[MAXN];</span><span style="color:#9A9A9A;font-style:italic"> //用于确定分组,颜色为1和2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int dfs(int </span><span style="color:#E8E8E8">index</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">n</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">c</span><span style="color:#FFFFFF">)</span><span style="color:#9A9A9A;font-style:italic"> //仅仅用来染色出发点所在的连通分量</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    //直接用对边不同色考虑</span></span>
<span class="line"><span style="color:#E8E8E8">    color</span><span style="color:#FFFFFF">[index]=c;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++) if(</span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[index][i] &#x26;&#x26; (</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]==c || (</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]==</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF"> &#x26;&#x26; !dfs(i,n,</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">-c))) ) return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int n,m;</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> n >> m;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;m;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        int s,t;</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> s >> t;</span></span>
<span class="line"><span style="color:#E8E8E8">        graph</span><span style="color:#FFFFFF">[s][t]=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[t][s]=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(!</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i])</span></span>
<span class="line"><span style="color:#FFFFFF">            if(!dfs(i,n,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">)) </span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                cout &#x3C;&#x3C; </span><span style="color:#F4D9E5">"错误，不是二分图"</span><span style="color:#FFFFFF"> &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">                return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;int> color1,color2;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]==</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">) </span><span style="color:#E8E8E8">color1</span><span style="color:#FFFFFF">.push_back(i);</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]==</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">) </span><span style="color:#E8E8E8">color2</span><span style="color:#FFFFFF">.push_back(i);</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; </span><span style="color:#F4D9E5">"染色结果:"</span><span style="color:#FFFFFF"> &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;</span><span style="color:#E8E8E8">color1</span><span style="color:#FFFFFF">.size();i++) cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">color1</span><span style="color:#FFFFFF">[i] &#x3C;&#x3C; </span><span style="color:#F4D9E5">' '</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;</span><span style="color:#E8E8E8">color2</span><span style="color:#FFFFFF">.size();i++) cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">color2</span><span style="color:#FFFFFF">[i] &#x3C;&#x3C; </span><span style="color:#F4D9E5">' '</span><span style="color:#FFFFFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<h2>注</h2>
<p>这两个染色问题都可以用邻接矩阵做。我用int-MAXN是因为简单:)。</p>`,plainText:`染色问题 同染色（连接点染相同颜色） 用法 得到各个连通分量（分组）。 代码 #include &#x3C;bits/stdc++.h> using namespace std; const int MAXN = 100 ; int graph [MAXN][MAXN]; int color [MAXN]; int cnt; //连通分量数量 void dfs(int index ,int n ,int c ) { color [index]=c; for(int i= 0 ;i&#x3C;n;i++) if( graph [index][i]&#x26;&#x26;! color [i]) dfs(i,n,c); } int main() { int n,m; cin >> n >> m; for(int i= 0 ;i&#x3C;m;i++) { int s,t; cin >> s >> t; graph [s][t]= 1 , graph [t][s]= 1 ; } for(int i= 0 ;i&#x3C;n;i++) { if(! color [i]) { cnt++; dfs(i,n,cnt); } } vector&#x3C;vector&#x3C;int>> group(cnt+ 1 ,vector&#x3C;int>()); for(int i= 0 ;i&#x3C;n;i++) group [ color [i]].push_back(i); for(int i= 1 ;i&#x3C;=cnt;i++) { cout &#x3C;&#x3C; "颜色" &#x3C;&#x3C; i &#x3C;&#x3C; ":" ; for(int j= 0 ;j&#x3C; group [i].size();j++) cout &#x3C;&#x3C; group [i][j] &#x3C;&#x3C; ' ' ; cout &#x3C;&#x3C; endl; } } 异染色（连接点染不同颜色） 用法 得到二分图。 代码 #include &#x3C;bits/stdc++.h> using namespace std; const int MAXN = 100 ; //假如最大100个结点的图 int graph [MAXN][MAXN]; int color [MAXN]; //用于确定分组,颜色为1和2 int dfs(int index ,int n ,int c ) //仅仅用来染色出发点所在的连通分量 { //直接用对边不同色考虑 color [index]=c; for(int i= 0 ;i&#x3C;n;i++) if( graph [index][i] &#x26;&#x26; ( color [i]==c || ( color [i]== 0 &#x26;&#x26; !dfs(i,n, 3 -c))) ) return 0 ; return 1 ; } int main() { int n,m; cin >> n >> m; for(int i= 0 ;i&#x3C;m;i++) { int s,t; cin >> s >> t; graph [s][t]= 1 , graph [t][s]= 1 ; } for(int i= 0 ;i&#x3C;n;i++) { if(! color [i]) if(!dfs(i,n, 1 )) { cout &#x3C;&#x3C; "错误，不是二分图" &#x3C;&#x3C; endl; return 0 ; } } vector&#x3C;int> color1,color2; for(int i= 0 ;i&#x3C;n;i++) { if( color [i]== 1 ) color1 .push_back(i); if( color [i]== 2 ) color2 .push_back(i); } cout &#x3C;&#x3C; "染色结果:" &#x3C;&#x3C; endl; for(int i= 0 ;i&#x3C; color1 .size();i++) cout &#x3C;&#x3C; color1 [i] &#x3C;&#x3C; ' ' ; cout &#x3C;&#x3C; endl; for(int i= 0 ;i&#x3C; color2 .size();i++) cout &#x3C;&#x3C; color2 [i] &#x3C;&#x3C; ' ' ; return 0 ; } 注 这两个染色问题都可以用邻接矩阵做。我用int-MAXN是因为简单:)。`},{meta:{title:"归并排序",date:"2025-11-17T12:13:46.000Z",draft:!1,tags:["算法","luogu"],categories:[],clues:["算法","luogu"],slug:"%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F",sourcePath:"src/content/evidence/归并排序.md",readingTime:1},html:`<h3><a href="https://www.luogu.com.cn/problem/P1177">P1177 【模板】排序 - 洛谷</a></h3>
<p>我用归并排序写的。(时间复杂度O(nlogn),空间复杂度O(n))。</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">vector&#x3C;int> A;</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">//归并排序</span></span>
<span class="line"><span style="color:#FFFFFF">void gbsort(int </span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">r</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;int> temp;</span></span>
<span class="line"><span style="color:#FFFFFF">    if(l==r) return;</span></span>
<span class="line"><span style="color:#FFFFFF">    int m=((l+r)>></span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    printf(</span><span style="color:#F4D9E5">"划分的区间:[%d,%d],[%d,%d]\\n"</span><span style="color:#FFFFFF">,l,m,m+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,r);</span></span>
<span class="line"><span style="color:#FFFFFF">    gbsort(l,m);</span></span>
<span class="line"><span style="color:#FFFFFF">    gbsort(m+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,r);</span></span>
<span class="line"><span style="color:#FFFFFF">    int curL=l,curR=m+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //左右分为[l,m] [m+1,r]</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;r-l+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if( curL>m )</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#E8E8E8">            temp</span><span style="color:#FFFFFF">.push_back(</span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[curR]);</span></span>
<span class="line"><span style="color:#FFFFFF">            curR++;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">        else if( curR>r )</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#E8E8E8">            temp</span><span style="color:#FFFFFF">.push_back(</span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[curL]);</span></span>
<span class="line"><span style="color:#FFFFFF">            curL++;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">        else if(</span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[curL]></span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[curR])</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#E8E8E8">            temp</span><span style="color:#FFFFFF">.push_back(</span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[curR]);</span></span>
<span class="line"><span style="color:#FFFFFF">            curR++;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">        else if(</span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[curL]&#x3C;=</span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[curR])</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#E8E8E8">            temp</span><span style="color:#FFFFFF">.push_back(</span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[curL]);</span></span>
<span class="line"><span style="color:#FFFFFF">            curL++;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=l;i&#x3C;=r;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#E8E8E8">        A</span><span style="color:#FFFFFF">[i]=</span><span style="color:#E8E8E8">temp</span><span style="color:#FFFFFF">[i-l];</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int N;</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> N;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;N;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        int x;</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> x;</span></span>
<span class="line"><span style="color:#E8E8E8">        A</span><span style="color:#FFFFFF">.push_back(x);</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // sort(A.begin(),A.end());</span></span>
<span class="line"><span style="color:#FFFFFF">    gbsort(</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,N-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;N;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">A</span><span style="color:#FFFFFF">[i] &#x3C;&#x3C; </span><span style="color:#F4D9E5">' '</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<p>C++标准库sort用的是快速排序</p>`,plainText:`P1177 【模板】排序 - 洛谷 我用归并排序写的。(时间复杂度O(nlogn),空间复杂度O(n))。 #include &#x3C;bits/stdc++.h> using namespace std; vector&#x3C;int> A; //归并排序 void gbsort(int l ,int r ) { vector&#x3C;int> temp; if(l==r) return; int m=((l+r)>> 1 ); printf( "划分的区间:[%d,%d],[%d,%d]\\n" ,l,m,m+ 1 ,r); gbsort(l,m); gbsort(m+ 1 ,r); int curL=l,curR=m+ 1 ; //左右分为[l,m] [m+1,r] for(int i= 0 ;i&#x3C;r-l+ 1 ;i++) { if( curL>m ) { temp .push_back( A [curR]); curR++; } else if( curR>r ) { temp .push_back( A [curL]); curL++; } else if( A [curL]> A [curR]) { temp .push_back( A [curR]); curR++; } else if( A [curL]&#x3C;= A [curR]) { temp .push_back( A [curL]); curL++; } } for(int i=l;i&#x3C;=r;i++) { A [i]= temp [i-l]; } } int main() { int N; cin >> N; for(int i= 0 ;i&#x3C;N;i++) { int x; cin >> x; A .push_back(x); } // sort(A.begin(),A.end()); gbsort( 0 ,N- 1 ); for(int i= 0 ;i&#x3C;N;i++) { cout &#x3C;&#x3C; A [i] &#x3C;&#x3C; ' ' ; } return 0 ; } C++标准库sort用的是快速排序`},{meta:{title:"洛谷 P1559",date:"2025-11-07T13:14:44.000Z",draft:!1,tags:[],categories:[],clues:[],slug:"%E6%B4%9B%E8%B0%B7-p1559",sourcePath:"src/content/evidence/洛谷 P1559.md",readingTime:1},html:`<h2><a href="https://www.luogu.com.cn/problem/P1559"> 运动员最佳匹配问题</a></h2>
<p>问题前面就不多说，简单模拟得到矩阵。</p>
<p>然后对矩阵用匈牙利得到最小匹配。</p>
<p><strong>我累了，看代码吧</strong></p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include </span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">const int MAXN = </span><span style="color:#F4D9E5">25</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">int n;</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">P</span><span style="color:#FFFFFF">[MAXN][MAXN], </span><span style="color:#E8E8E8">Q</span><span style="color:#FFFFFF">[MAXN][MAXN];</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">cost</span><span style="color:#FFFFFF">[MAXN][MAXN];</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">u</span><span style="color:#FFFFFF">[MAXN], </span><span style="color:#E8E8E8">v</span><span style="color:#FFFFFF">[MAXN], </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">[MAXN], </span><span style="color:#E8E8E8">way</span><span style="color:#FFFFFF">[MAXN];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int hungarian() {</span></span>
<span class="line"><span style="color:#FFFFFF">    for (int i = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">; i &#x3C;= n; i++) {</span></span>
<span class="line"><span style="color:#E8E8E8">        p</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">] = i;</span></span>
<span class="line"><span style="color:#FFFFFF">        int j0 = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">        vector&#x3C;int> minv(n+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">, INT_MAX);</span></span>
<span class="line"><span style="color:#FFFFFF">        vector&#x3C;bool> used(n+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">, </span><span style="color:#F4D9E5">false</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">        do {</span></span>
<span class="line"><span style="color:#E8E8E8">            used</span><span style="color:#FFFFFF">[j0] = </span><span style="color:#F4D9E5">true</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">            int i0 = </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">[j0], delta = INT_MAX, j1 = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">            for (int j = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">; j &#x3C;= n; j++) {</span></span>
<span class="line"><span style="color:#FFFFFF">                if (!</span><span style="color:#E8E8E8">used</span><span style="color:#FFFFFF">[j]) {</span></span>
<span class="line"><span style="color:#FFFFFF">                    int cur = -</span><span style="color:#E8E8E8">cost</span><span style="color:#FFFFFF">[i0][j] - </span><span style="color:#E8E8E8">u</span><span style="color:#FFFFFF">[i0] - </span><span style="color:#E8E8E8">v</span><span style="color:#FFFFFF">[j];</span><span style="color:#9A9A9A;font-style:italic"> // 取负数求最大匹配</span></span>
<span class="line"><span style="color:#FFFFFF">                    if (cur &#x3C; </span><span style="color:#E8E8E8">minv</span><span style="color:#FFFFFF">[j]) {</span></span>
<span class="line"><span style="color:#E8E8E8">                        minv</span><span style="color:#FFFFFF">[j] = cur;</span></span>
<span class="line"><span style="color:#E8E8E8">                        way</span><span style="color:#FFFFFF">[j] = j0;</span></span>
<span class="line"><span style="color:#FFFFFF">                    }</span></span>
<span class="line"><span style="color:#FFFFFF">                    if (</span><span style="color:#E8E8E8">minv</span><span style="color:#FFFFFF">[j] &#x3C; delta) {</span></span>
<span class="line"><span style="color:#FFFFFF">                        delta = </span><span style="color:#E8E8E8">minv</span><span style="color:#FFFFFF">[j];</span></span>
<span class="line"><span style="color:#FFFFFF">                        j1 = j;</span></span>
<span class="line"><span style="color:#FFFFFF">                    }</span></span>
<span class="line"><span style="color:#FFFFFF">                }</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">            for (int j = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; j &#x3C;= n; j++) {</span></span>
<span class="line"><span style="color:#FFFFFF">                if (</span><span style="color:#E8E8E8">used</span><span style="color:#FFFFFF">[j]) {</span></span>
<span class="line"><span style="color:#E8E8E8">                    u</span><span style="color:#FFFFFF">[</span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">[j]] += delta;</span></span>
<span class="line"><span style="color:#E8E8E8">                    v</span><span style="color:#FFFFFF">[j] -= delta;</span></span>
<span class="line"><span style="color:#FFFFFF">                } else {</span></span>
<span class="line"><span style="color:#E8E8E8">                    minv</span><span style="color:#FFFFFF">[j] -= delta;</span></span>
<span class="line"><span style="color:#FFFFFF">                }</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">            j0 = j1;</span></span>
<span class="line"><span style="color:#FFFFFF">        } while (</span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">[j0] != </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">        do {</span></span>
<span class="line"><span style="color:#FFFFFF">            int j1 = </span><span style="color:#E8E8E8">way</span><span style="color:#FFFFFF">[j0];</span></span>
<span class="line"><span style="color:#E8E8E8">            p</span><span style="color:#FFFFFF">[j0] = </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">[j1];</span></span>
<span class="line"><span style="color:#FFFFFF">            j0 = j1;</span></span>
<span class="line"><span style="color:#FFFFFF">        } while (j0);</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    int result = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    for (int j = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">; j &#x3C;= n; j++) result += </span><span style="color:#E8E8E8">cost</span><span style="color:#FFFFFF">[</span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">[j]][j];</span></span>
<span class="line"><span style="color:#FFFFFF">    return result;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main() {</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> n;</span></span>
<span class="line"><span style="color:#FFFFFF">    for (int i = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; i &#x3C; n; i++)</span></span>
<span class="line"><span style="color:#FFFFFF">        for (int j = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; j &#x3C; n; j++)</span></span>
<span class="line"><span style="color:#FFFFFF">            cin >> </span><span style="color:#E8E8E8">P</span><span style="color:#FFFFFF">[i][j];</span></span>
<span class="line"><span style="color:#FFFFFF">    for (int i = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; i &#x3C; n; i++)</span></span>
<span class="line"><span style="color:#FFFFFF">        for (int j = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; j &#x3C; n; j++)</span></span>
<span class="line"><span style="color:#FFFFFF">            cin >> </span><span style="color:#E8E8E8">Q</span><span style="color:#FFFFFF">[i][j];</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 构造竞赛优势矩阵</span></span>
<span class="line"><span style="color:#FFFFFF">    for (int i = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; i &#x3C; n; i++)</span></span>
<span class="line"><span style="color:#FFFFFF">        for (int j = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">; j &#x3C; n; j++)</span></span>
<span class="line"><span style="color:#E8E8E8">            cost</span><span style="color:#FFFFFF">[i+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][j+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] = </span><span style="color:#E8E8E8">P</span><span style="color:#FFFFFF">[i][j] * </span><span style="color:#E8E8E8">Q</span><span style="color:#FFFFFF">[j][i];</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; hungarian() &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>`,plainText:"运动员最佳匹配问题 问题前面就不多说，简单模拟得到矩阵。 然后对矩阵用匈牙利得到最小匹配。 我累了，看代码吧 #include &#x3C;bits/stdc++.h> using namespace std; const int MAXN = 25 ; int n; int P [MAXN][MAXN], Q [MAXN][MAXN]; int cost [MAXN][MAXN]; int u [MAXN], v [MAXN], p [MAXN], way [MAXN]; int hungarian() { for (int i = 1 ; i &#x3C;= n; i++) { p [ 0 ] = i; int j0 = 0 ; vector&#x3C;int> minv(n+ 1 , INT_MAX); vector&#x3C;bool> used(n+ 1 , false ); do { used [j0] = true ; int i0 = p [j0], delta = INT_MAX, j1 = 0 ; for (int j = 1 ; j &#x3C;= n; j++) { if (! used [j]) { int cur = - cost [i0][j] - u [i0] - v [j]; // 取负数求最大匹配 if (cur &#x3C; minv [j]) { minv [j] = cur; way [j] = j0; } if ( minv [j] &#x3C; delta) { delta = minv [j]; j1 = j; } } } for (int j = 0 ; j &#x3C;= n; j++) { if ( used [j]) { u [ p [j]] += delta; v [j] -= delta; } else { minv [j] -= delta; } } j0 = j1; } while ( p [j0] != 0 ); do { int j1 = way [j0]; p [j0] = p [j1]; j0 = j1; } while (j0); } int result = 0 ; for (int j = 1 ; j &#x3C;= n; j++) result += cost [ p [j]][j]; return result; } int main() { cin >> n; for (int i = 0 ; i &#x3C; n; i++) for (int j = 0 ; j &#x3C; n; j++) cin >> P [i][j]; for (int i = 0 ; i &#x3C; n; i++) for (int j = 0 ; j &#x3C; n; j++) cin >> Q [i][j]; // 构造竞赛优势矩阵 for (int i = 0 ; i &#x3C; n; i++) for (int j = 0 ; j &#x3C; n; j++) cost [i+ 1 ][j+ 1 ] = P [i][j] * Q [j][i]; cout &#x3C;&#x3C; hungarian() &#x3C;&#x3C; endl; return 0 ; }"},{meta:{title:"Hugo博客添加代码框复制功能",date:"2025-11-07T11:35:23.000Z",draft:!0,tags:["博客搭建问题"],categories:[],clues:["博客搭建问题"],slug:"hugo%E5%8D%9A%E5%AE%A2%E6%B7%BB%E5%8A%A0%E4%BB%A3%E7%A0%81%E6%A1%86%E5%A4%8D%E5%88%B6%E5%8A%9F%E8%83%BD",sourcePath:"src/content/evidence/hugo博客添加代码框复制功能.md",readingTime:2},html:`<p>由于鼠标拖动复制代码有点费力，我打算给每个代码块添加一个复制按钮（学学大佬orz ）。</p>
<p>经过长时间的搜索学习，我终于加上了（win）。</p>
<p>话不多说。</p>
<h2>构建</h2>
<p>首先，我们要清楚一点，hugo-papermod本身是不包含代码复制按钮功能的。</p>
<p>所以，我们要自己写，包括写css和js，同时要修改hugo的相关配置。</p>
<h2>步骤</h2>
<h3>1.写css/js文件</h3>
<ul>
<li>
<p><strong>static\\css\\extended\\code-copy.css</strong>(注意不要写错地方了，当然放在assests/css里面也未尝不可，但是相应的要修改一些文件，本人懒得搞了=-=)</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">.highlight-copy-btn {</span></span>
<span class="line"><span style="color:#FFFFFF">    position: absolute;</span></span>
<span class="line"><span style="color:#FFFFFF">    top: </span><span style="color:#F4D9E5">7</span><span style="color:#FFFFFF">px;</span></span>
<span class="line"><span style="color:#FFFFFF">    right: </span><span style="color:#F4D9E5">7</span><span style="color:#FFFFFF">px;</span></span>
<span class="line"><span style="color:#FFFFFF">    border: </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    border-radius: </span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">px;</span></span>
<span class="line"><span style="color:#FFFFFF">    width: </span><span style="color:#F4D9E5">28</span><span style="color:#FFFFFF">px;           </span><span style="color:#9A9A9A;font-style:italic">/* 固定按钮大小 */</span></span>
<span class="line"><span style="color:#FFFFFF">    height: </span><span style="color:#F4D9E5">28</span><span style="color:#FFFFFF">px;</span></span>
<span class="line"><span style="color:#FFFFFF">    background-color: </span><span style="color:#F4D9E5">#777</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    color: </span><span style="color:#F4D9E5">#fff</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    display: flex;         </span><span style="color:#9A9A9A;font-style:italic">/* flex 布局 */</span></span>
<span class="line"><span style="color:#FFFFFF">    align-items: center;   </span><span style="color:#9A9A9A;font-style:italic">/* 垂直居中 */</span></span>
<span class="line"><span style="color:#FFFFFF">    justify-content: center; </span><span style="color:#9A9A9A;font-style:italic">/* 水平居中 */</span></span>
<span class="line"><span style="color:#FFFFFF">    cursor: pointer;</span></span>
<span class="line"><span style="color:#FFFFFF">    padding: </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;            </span><span style="color:#9A9A9A;font-style:italic">/* 去掉多余 padding */</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">.highlight-copy-btn:hover {</span></span>
<span class="line"><span style="color:#FFFFFF">    background-color: </span><span style="color:#F4D9E5">#666</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">/* 控制 svg 图标大小 */</span></span>
<span class="line"><span style="color:#FFFFFF">.highlight-copy-btn i svg {</span></span>
<span class="line"><span style="color:#FFFFFF">    width: </span><span style="color:#F4D9E5">16</span><span style="color:#FFFFFF">px;</span></span>
<span class="line"><span style="color:#FFFFFF">    height: </span><span style="color:#F4D9E5">16</span><span style="color:#FFFFFF">px;</span></span>
<span class="line"><span style="color:#FFFFFF">    display: block;        </span><span style="color:#9A9A9A;font-style:italic">/* 避免 inline 导致偏上 */</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
</li>
<li>
<p><strong>static\\js\\code-copy.js</strong></p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">(function() {</span></span>
<span class="line"><span style="color:#F4D9E5">  'use strict'</span><span style="color:#FFFFFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">  // 切换图标</span></span>
<span class="line"><span style="color:#FFFFFF">  function flashCopyMessage(</span><span style="color:#E8E8E8">el</span><span style="color:#FFFFFF">, </span><span style="color:#E8E8E8">iconName</span><span style="color:#FFFFFF">) {</span></span>
<span class="line"><span style="color:#E8E8E8">    el</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">innerHTML</span><span style="color:#FFFFFF"> = </span><span style="color:#F4D9E5">\`&#x3C;i data-feather="\${</span><span style="color:#E8E8E8">iconName</span><span style="color:#F4D9E5">}">&#x3C;/i>\`</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    feather</span><span style="color:#FFFFFF">.replace(); </span><span style="color:#9A9A9A;font-style:italic">// 更新图标</span></span>
<span class="line"><span style="color:#FFFFFF">    setTimeout(function() {</span></span>
<span class="line"><span style="color:#E8E8E8">      el</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">innerHTML</span><span style="color:#FFFFFF"> = </span><span style="color:#F4D9E5">'&#x3C;i data-feather="copy">&#x3C;/i>'</span><span style="color:#FFFFFF">; </span><span style="color:#9A9A9A;font-style:italic">// 恢复复制图标</span></span>
<span class="line"><span style="color:#E8E8E8">      feather</span><span style="color:#FFFFFF">.replace();</span></span>
<span class="line"><span style="color:#FFFFFF">    }, </span><span style="color:#F4D9E5">1000</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">  // 复制文本</span></span>
<span class="line"><span style="color:#FFFFFF">  async function copyText(</span><span style="color:#E8E8E8">text</span><span style="color:#FFFFFF">, </span><span style="color:#E8E8E8">btn</span><span style="color:#FFFFFF">) {</span></span>
<span class="line"><span style="color:#FFFFFF">    try {</span></span>
<span class="line"><span style="color:#FFFFFF">      await </span><span style="color:#E8E8E8">navigator</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">clipboard</span><span style="color:#FFFFFF">.writeText(</span><span style="color:#E8E8E8">text</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">      flashCopyMessage(</span><span style="color:#E8E8E8">btn</span><span style="color:#FFFFFF">, </span><span style="color:#F4D9E5">'check'</span><span style="color:#FFFFFF">);   </span><span style="color:#9A9A9A;font-style:italic">// 成功图标</span></span>
<span class="line"><span style="color:#FFFFFF">    } catch (</span><span style="color:#E8E8E8">e</span><span style="color:#FFFFFF">) {</span></span>
<span class="line"><span style="color:#FFFFFF">      flashCopyMessage(</span><span style="color:#E8E8E8">btn</span><span style="color:#FFFFFF">, </span><span style="color:#F4D9E5">'x'</span><span style="color:#FFFFFF">);       </span><span style="color:#9A9A9A;font-style:italic">// 失败图标</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">  // 为每个代码块添加按钮</span></span>
<span class="line"><span style="color:#FFFFFF">  function addCopyButton(</span><span style="color:#E8E8E8">containerEl</span><span style="color:#FFFFFF">) {</span></span>
<span class="line"><span style="color:#FFFFFF">    var </span><span style="color:#E8E8E8">copyBtn</span><span style="color:#FFFFFF"> = </span><span style="color:#E8E8E8">document</span><span style="color:#FFFFFF">.createElement(</span><span style="color:#F4D9E5">"button"</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#E8E8E8">    copyBtn</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">className</span><span style="color:#FFFFFF"> = </span><span style="color:#F4D9E5">"highlight-copy-btn"</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    copyBtn</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">innerHTML</span><span style="color:#FFFFFF"> = </span><span style="color:#F4D9E5">'&#x3C;i data-feather="copy">&#x3C;/i>'</span><span style="color:#FFFFFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    var </span><span style="color:#E8E8E8">codeEl</span><span style="color:#FFFFFF"> = </span><span style="color:#E8E8E8">containerEl</span><span style="color:#FFFFFF">.querySelector(</span><span style="color:#F4D9E5">"pre code"</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    if (!</span><span style="color:#E8E8E8">codeEl</span><span style="color:#FFFFFF">) return;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E8E8E8">    copyBtn</span><span style="color:#FFFFFF">.addEventListener(</span><span style="color:#F4D9E5">'click'</span><span style="color:#FFFFFF">, function() {</span></span>
<span class="line"><span style="color:#FFFFFF">      copyText(</span><span style="color:#E8E8E8">codeEl</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">innerText</span><span style="color:#FFFFFF">, </span><span style="color:#E8E8E8">copyBtn</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E8E8E8">    containerEl</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">style</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">position</span><span style="color:#FFFFFF"> = </span><span style="color:#F4D9E5">"relative"</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    containerEl</span><span style="color:#FFFFFF">.appendChild(</span><span style="color:#E8E8E8">copyBtn</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#E8E8E8">    feather</span><span style="color:#FFFFFF">.replace(); </span><span style="color:#9A9A9A;font-style:italic">// 初始化图标</span></span>
<span class="line"><span style="color:#FFFFFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">  // 初始化所有高亮块</span></span>
<span class="line"><span style="color:#FFFFFF">  function init() {</span></span>
<span class="line"><span style="color:#FFFFFF">    var </span><span style="color:#E8E8E8">highlightBlocks</span><span style="color:#FFFFFF"> = </span><span style="color:#E8E8E8">document</span><span style="color:#FFFFFF">.getElementsByClassName(</span><span style="color:#F4D9E5">'highlight'</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    Array.prototype.</span><span style="color:#E8E8E8">forEach</span><span style="color:#FFFFFF">.call(</span><span style="color:#E8E8E8">highlightBlocks</span><span style="color:#FFFFFF">, </span><span style="color:#E8E8E8">addCopyButton</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E8E8E8">  document</span><span style="color:#FFFFFF">.addEventListener(</span><span style="color:#F4D9E5">"DOMContentLoaded"</span><span style="color:#FFFFFF">, </span><span style="color:#E8E8E8">init</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">})();</span></span>
<span class="line"></span></code></pre>
</li>
</ul>
<h3>2.修改配置文件</h3>
<p><strong>1.</strong> 把<code>themes\\PaperMod\\layouts\\partials\\head.html</code>拷贝一份到<code>layouts\\partials\\head.html</code>然后修改后者（<a href="/evidence/hugo%E5%8D%9A%E5%AE%A2%E9%85%8D%E7%BD%AE%26markdown%E8%AF%AD%E6%B3%95/" title="悬停指示（标题）">模板覆盖规则</a>）：</p>
<p>在文件结尾添加</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">{{ range .Site.Params.assets.customCSS }}</span></span>
<span class="line"><span style="color:#FFFFFF">  &#x3C;link rel=</span><span style="color:#F4D9E5">"stylesheet"</span><span style="color:#FFFFFF"> href=</span><span style="color:#F4D9E5">"{{ . | absURL }}"</span><span style="color:#FFFFFF">></span></span>
<span class="line"><span style="color:#FFFFFF">{{- end }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">{{ range .Site.Params.assets.customJS }}</span></span>
<span class="line"><span style="color:#FFFFFF">  &#x3C;script type=</span><span style="color:#F4D9E5">"text/javascript"</span><span style="color:#FFFFFF"> src=</span><span style="color:#F4D9E5">"{{ . | absURL }}"</span><span style="color:#FFFFFF"> defer>&#x3C;/script></span></span>
<span class="line"><span style="color:#FFFFFF">{{- end }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">{{ range $elem := .Site.Params.assets.customjscssraw }}</span></span>
<span class="line"><span style="color:#FFFFFF">  {{ $elem | safeHTML }}</span></span>
<span class="line"><span style="color:#FFFFFF">{{- end }}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<p><strong>2.</strong> 与之对应的要修改<code>hugo.toml</code>：</p>
<p>添加</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>[params.assets]</span></span>
<span class="line"><span>    customCSS = ["css/extended/code-copy.css","css/extended/custom-fonts.css"]</span></span>
<span class="line"><span>    customJS = ["js/code-copy.js"]</span></span>
<span class="line"><span>    customjscssraw = [</span></span>
<span class="line"><span>      "&#x3C;link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.min.css' integrity='sha256-2H3fkXt6FEmrReK448mDVGKb3WW2ZZw35gI7vqHOE4Y=' crossorigin='anonymous'>",</span></span>
<span class="line"><span>      "&#x3C;script src='https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js'>&#x3C;/script>"</span></span>
<span class="line"><span>    ] #图标库链接</span></span>
<span class="line"><span></span></span></code></pre>
<p>这两步其实是实现了：你在<code>hugo.toml</code>里面直接添加文件比如<code>css/extended/code-copy.css</code>（如上代码），对应的<code>head.html</code>里面添加的代码可以利用<code>range.Site.Params.assets.customJS</code>对配置中的文件进行链接。感觉其实相当于简化操作，就是原来我们需要在<code>head.html</code>里面手动添加&#x3C;<em>link</em>>，&#x3C;<em>script</em>>等，但是这样操作后我们只需要把css等相对于static的文件路径直接写入明面上的<code>hugo.toml</code>配置文件就好了。</p>
<p>另外，最后的图标库链接可以用自己喜欢的，我只添加了两个用的第二种（当然如果更换图标库js对应的使用代码也要修改，css也要相应调整）。</p>
<p>这样就实现代码块复制按钮的添加了。</p>
<h2>思考</h2>
<p>如果直接把css和js放在assets里面好像需要用到Hugo 的 <strong>资源管道（Hugo Pipes）</strong>，我没用。</p>
<h2>参考</h2>
<p><a href="https://zhuanlan.zhihu.com/p/442553846">(6 封私信) Hugo添加自定义css和javascript - 知乎</a></p>
<p><a href="https://huuuuuuo.github.io/post/hugo%E6%8F%92%E4%BB%B6%E4%B9%8B%E4%BB%A3%E7%A0%81%E5%9D%97%E6%8B%B7%E8%B4%9D%E6%8F%92%E4%BB%B6/">你可真是个大帅哥</a></p>`,plainText:`由于鼠标拖动复制代码有点费力，我打算给每个代码块添加一个复制按钮（学学大佬orz ）。 经过长时间的搜索学习，我终于加上了（win）。 话不多说。 构建 首先，我们要清楚一点，hugo-papermod本身是不包含代码复制按钮功能的。 所以，我们要自己写，包括写css和js，同时要修改hugo的相关配置。 步骤 1.写css/js文件 static\\css\\extended\\code-copy.css (注意不要写错地方了，当然放在assests/css里面也未尝不可，但是相应的要修改一些文件，本人懒得搞了=-=) .highlight-copy-btn { position: absolute; top: 7 px; right: 7 px; border: 0 ; border-radius: 4 px; width: 28 px; /* 固定按钮大小 */ height: 28 px; background-color: #777 ; color: #fff ; display: flex; /* flex 布局 */ align-items: center; /* 垂直居中 */ justify-content: center; /* 水平居中 */ cursor: pointer; padding: 0 ; /* 去掉多余 padding */ } .highlight-copy-btn:hover { background-color: #666 ; } /* 控制 svg 图标大小 */ .highlight-copy-btn i svg { width: 16 px; height: 16 px; display: block; /* 避免 inline 导致偏上 */ } static\\js\\code-copy.js (function() { 'use strict' ; // 切换图标 function flashCopyMessage( el , iconName ) { el . innerHTML = \`&#x3C;i data-feather="\${ iconName }">&#x3C;/i>\` ; feather .replace(); // 更新图标 setTimeout(function() { el . innerHTML = '&#x3C;i data-feather="copy">&#x3C;/i>' ; // 恢复复制图标 feather .replace(); }, 1000 ); } // 复制文本 async function copyText( text , btn ) { try { await navigator . clipboard .writeText( text ); flashCopyMessage( btn , 'check' ); // 成功图标 } catch ( e ) { flashCopyMessage( btn , 'x' ); // 失败图标 } } // 为每个代码块添加按钮 function addCopyButton( containerEl ) { var copyBtn = document .createElement( "button" ); copyBtn . className = "highlight-copy-btn" ; copyBtn . innerHTML = '&#x3C;i data-feather="copy">&#x3C;/i>' ; var codeEl = containerEl .querySelector( "pre code" ); if (! codeEl ) return; copyBtn .addEventListener( 'click' , function() { copyText( codeEl . innerText , copyBtn ); }); containerEl . style . position = "relative" ; containerEl .appendChild( copyBtn ); feather .replace(); // 初始化图标 } // 初始化所有高亮块 function init() { var highlightBlocks = document .getElementsByClassName( 'highlight' ); Array.prototype. forEach .call( highlightBlocks , addCopyButton ); } document .addEventListener( "DOMContentLoaded" , init ); })(); 2.修改配置文件 1. 把 themes\\PaperMod\\layouts\\partials\\head.html 拷贝一份到 layouts\\partials\\head.html 然后修改后者（ 模板覆盖规则 ）： 在文件结尾添加 {{ range .Site.Params.assets.customCSS }} &#x3C;link rel= "stylesheet" href= "{{ . | absURL }}" > {{- end }} {{ range .Site.Params.assets.customJS }} &#x3C;script type= "text/javascript" src= "{{ . | absURL }}" defer>&#x3C;/script> {{- end }} {{ range $elem := .Site.Params.assets.customjscssraw }} {{ $elem | safeHTML }} {{- end }} 2. 与之对应的要修改 hugo.toml ： 添加 [params.assets] customCSS = ["css/extended/code-copy.css","css/extended/custom-fonts.css"] customJS = ["js/code-copy.js"] customjscssraw = [ "&#x3C;link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/all.min.css' integrity='sha256-2H3fkXt6FEmrReK448mDVGKb3WW2ZZw35gI7vqHOE4Y=' crossorigin='anonymous'>", "&#x3C;script src='https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js'>&#x3C;/script>" ] #图标库链接 这两步其实是实现了：你在 hugo.toml 里面直接添加文件比如 css/extended/code-copy.css （如上代码），对应的 head.html 里面添加的代码可以利用 range.Site.Params.assets.customJS 对配置中的文件进行链接。感觉其实相当于简化操作，就是原来我们需要在 head.html 里面手动添加&#x3C; link >，&#x3C; script >等，但是这样操作后我们只需要把css等相对于static的文件路径直接写入明面上的 hugo.toml 配置文件就好了。 另外，最后的图标库链接可以用自己喜欢的，我只添加了两个用的第二种（当然如果更换图标库js对应的使用代码也要修改，css也要相应调整）。 这样就实现代码块复制按钮的添加了。 思考 如果直接把css和js放在assets里面好像需要用到Hugo 的 资源管道（Hugo Pipes） ，我没用。 参考 (6 封私信) Hugo添加自定义css和javascript - 知乎 你可真是个大帅哥`},{meta:{title:"匈牙利算法_指派问题",date:"2025-11-06T13:18:19.000Z",draft:!1,tags:["算法"],categories:[],clues:["算法"],slug:"%E5%8C%88%E7%89%99%E5%88%A9%E7%AE%97%E6%B3%95_%E6%8C%87%E6%B4%BE%E9%97%AE%E9%A2%98",sourcePath:"src/content/evidence/匈牙利算法_指派问题.md",readingTime:1},html:'<p>不详解，看<a href="/evidence/%E6%B4%9B%E8%B0%B7-p1559/" title="悬停指示（标题）">例题</a>就完了。</p>',plainText:"不详解，看 例题 就完了。"},{meta:{title:"KM算法",date:"2025-11-06T12:44:08.000Z",draft:!1,tags:["算法"],categories:[],clues:["算法"],slug:"km%E7%AE%97%E6%B3%95",sourcePath:"src/content/evidence/KM算法.md",readingTime:1},html:"",plainText:""},{meta:{title:"匈牙利算法",date:"2025-11-06T12:40:18.000Z",draft:!1,tags:["算法"],categories:[],clues:["算法"],slug:"%E5%8C%88%E7%89%99%E5%88%A9%E7%AE%97%E6%B3%95",sourcePath:"src/content/evidence/匈牙利算法.md",readingTime:3},html:`<h1>前提算法</h1>
<h2>二分图染色得到L，R数组</h2>
<p>（以下是利用染色得到二分图的代码）</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">const int MAXN = </span><span style="color:#F4D9E5">100</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //假如最大100个结点的图</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[MAXN][MAXN];</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[MAXN];</span><span style="color:#9A9A9A;font-style:italic"> //用于确定分组,颜色为1和2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int dfs(int </span><span style="color:#E8E8E8">index</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">n</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">c</span><span style="color:#FFFFFF">)</span><span style="color:#9A9A9A;font-style:italic"> //仅仅用来染色出发点所在的连通分量</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    //直接用对边不同色考虑</span></span>
<span class="line"><span style="color:#E8E8E8">    color</span><span style="color:#FFFFFF">[index]=c;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++) if(</span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[index][i] &#x26;&#x26; (</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]==c || (</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]==</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF"> &#x26;&#x26; !dfs(i,n,</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">-c))) ) return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int n,m;</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> n >> m;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;m;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        int s,t;</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> s >> t;</span></span>
<span class="line"><span style="color:#E8E8E8">        graph</span><span style="color:#FFFFFF">[s][t]=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[t][s]=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(!</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i])</span></span>
<span class="line"><span style="color:#FFFFFF">            if(!dfs(i,n,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">)) </span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                cout &#x3C;&#x3C; </span><span style="color:#F4D9E5">"错误，不是二分图"</span><span style="color:#FFFFFF"> &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">                return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;int> color1,color2;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]==</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">) </span><span style="color:#E8E8E8">color1</span><span style="color:#FFFFFF">.push_back(i);</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">color</span><span style="color:#FFFFFF">[i]==</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">) </span><span style="color:#E8E8E8">color2</span><span style="color:#FFFFFF">.push_back(i);</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; </span><span style="color:#F4D9E5">"染色结果:"</span><span style="color:#FFFFFF"> &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;</span><span style="color:#E8E8E8">color1</span><span style="color:#FFFFFF">.size();i++) cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">color1</span><span style="color:#FFFFFF">[i] &#x3C;&#x3C; </span><span style="color:#F4D9E5">' '</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;</span><span style="color:#E8E8E8">color2</span><span style="color:#FFFFFF">.size();i++) cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">color2</span><span style="color:#FFFFFF">[i] &#x3C;&#x3C; </span><span style="color:#F4D9E5">' '</span><span style="color:#FFFFFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<p>染色后，可以用来得到最大匹配，最大匹配又可以用来得到最小点覆盖，最小点覆盖又可以用来实现匈牙利算法，匈牙利算法用可以用来解决指派问题。顺了，都理顺了:)。</p>
<h1>最大匹配</h1>
<h3>面向问题</h3>
<p>求解一个二分图中的最大匹配问题。</p>
<h3>总体思路</h3>
<p>从任意一个顶点出发，</p>
<h3>写代码</h3>
<p><strong>1.</strong> 起步：初始化所用变量与内存。</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>const int MAXN : 根据题目调整</span></span>
<span class="line"><span>int n : 两边的顶点总数</span></span>
<span class="line"><span>int graph[MAXN][MAXN] : 基于二维数组的邻接矩阵</span></span>
<span class="line"><span>int match[MAXN] : match[i]表示与i匹配的点(因为最大匹配饱和点中每一个点都只可能与唯一点匹配)，如果为-1表示未匹配</span></span>
<span class="line"><span>int used[MAXN] : dfs访问标记（这个级别低于匹配标记match）</span></span>
<span class="line"><span></span></span></code></pre>
<p><strong>2.</strong> 深入： 了解所用函数。</p>
<ul>
<li>hungarian（）：匈牙利算法</li>
<li>dfs（）：寻找增广路径</li>
</ul>
<p><strong>3.</strong> 完整代码:</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"><span style="color:#FFFFFF">const int MAXN = </span><span style="color:#F4D9E5">20</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic">// 根据题目调整</span></span>
<span class="line"><span style="color:#FFFFFF">int n;</span><span style="color:#9A9A9A;font-style:italic">// 两边的顶点总数</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[MAXN][MAXN];</span><span style="color:#9A9A9A;font-style:italic">// 基于二维数组的邻接矩阵</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">match</span><span style="color:#FFFFFF">[MAXN];</span><span style="color:#9A9A9A;font-style:italic">// match[i]表示与i匹配的点(因为最大匹配饱和点中每一个点都只可能与唯一点匹配)，如果为-1表示未匹配</span></span>
<span class="line"><span style="color:#FFFFFF">bool </span><span style="color:#E8E8E8">used</span><span style="color:#FFFFFF">[MAXN];</span><span style="color:#9A9A9A;font-style:italic">// dfs访问标记（这个级别低于匹配标记match）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">bool dfs(int </span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">)</span><span style="color:#9A9A9A;font-style:italic"> //从x出发寻找增广路径</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">graph</span><span style="color:#FFFFFF">[x][i] &#x26;&#x26; </span><span style="color:#E8E8E8">used</span><span style="color:#FFFFFF">[i]==</span><span style="color:#F4D9E5">false</span><span style="color:#FFFFFF">)</span><span style="color:#9A9A9A;font-style:italic"> //这里避免了递归i的对象时再次返回i的情况</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#E8E8E8">            used</span><span style="color:#FFFFFF">[i] = </span><span style="color:#F4D9E5">true</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //打上dfs访问标记,防止循环卡死</span></span>
<span class="line"><span style="color:#FFFFFF">            if(</span><span style="color:#E8E8E8">match</span><span style="color:#FFFFFF">[i]==-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF"> || dfs(</span><span style="color:#E8E8E8">match</span><span style="color:#FFFFFF">[i])==</span><span style="color:#F4D9E5">true</span><span style="color:#FFFFFF">)</span><span style="color:#9A9A9A;font-style:italic"> //i点就是未匹配点直接满足x-i加匹配 || i点是匹配过的点,从i点对象开始找到未匹配点  这两种都说明找到了增广路径</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#E8E8E8">                match</span><span style="color:#FFFFFF">[i] = x;</span></span>
<span class="line"><span style="color:#E8E8E8">                match</span><span style="color:#FFFFFF">[x] = i;</span></span>
<span class="line"><span style="color:#FFFFFF">                return </span><span style="color:#F4D9E5">true</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">false</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //没true即false</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">//匈牙利算法求最大匹配数</span></span>
<span class="line"><span style="color:#FFFFFF">int hungarian()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    fill(match,match+n,-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    int res=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">match</span><span style="color:#FFFFFF">[i]==-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            fill(used,used+n,</span><span style="color:#F4D9E5">false</span><span style="color:#FFFFFF">);</span><span style="color:#9A9A9A;font-style:italic"> //清除dfs标记</span></span>
<span class="line"><span style="color:#FFFFFF">            if(dfs(i)) res++;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return res;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    //举个例子</span></span>
<span class="line"><span style="color:#FFFFFF">    n = </span><span style="color:#F4D9E5">8</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    int </span><span style="color:#E8E8E8">tmp</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">8</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">8</span><span style="color:#FFFFFF">] = {</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">},</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">},</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">},</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">},</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">},</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">},</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">},</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">}</span></span>
<span class="line"><span style="color:#FFFFFF">    };</span></span>
<span class="line"><span style="color:#FFFFFF">    memcpy(graph, tmp, sizeof(tmp));</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; </span><span style="color:#F4D9E5">"最大匹配边数量:"</span><span style="color:#FFFFFF"> &#x3C;&#x3C; hungarian() &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<h3>联系</h3>
<p>再加一点步骤就可以实现<a href="/evidence/%E5%8C%88%E7%89%99%E5%88%A9%E7%AE%97%E6%B3%95_%E6%8C%87%E6%B4%BE%E9%97%AE%E9%A2%98/">匈牙利指派算法</a>问题。</p>
<h3>参考</h3>
<p><a href="https://www.zhihu.com/question/313845998/answer/2268260397">Hungarian algorithm(匈牙利算法)的实现原理是什么？ - 鱼鲲的回答 - 知乎</a></p>
<h1>性质</h1>
<p>最大匹配（边）数量等于最小覆盖数量（点）(<a href="https://baike.baidu.com/item/%E6%9F%AF%E5%B0%BC%E5%B8%8C%E5%AE%9A%E7%90%86/19584092">柯尼希定理</a>)</p>
<p>在网上学了学如何通过最大匹配寻找最小点覆盖集。</p>
<p>现在总结一下，大致思路是</p>
<p>二分图嘛，就是左边一半，右边一半。</p>
<h1>最小覆盖</h1>
<h3>面向问题</h3>
<p>求解一个二分图中的最小覆盖问题。</p>
<h3>总体思路</h3>
<p>先求得最大匹配</p>
<h3>写代码</h3>`,plainText:`前提算法 二分图染色得到L，R数组 （以下是利用染色得到二分图的代码） #include &#x3C;bits/stdc++.h> using namespace std; const int MAXN = 100 ; //假如最大100个结点的图 int graph [MAXN][MAXN]; int color [MAXN]; //用于确定分组,颜色为1和2 int dfs(int index ,int n ,int c ) //仅仅用来染色出发点所在的连通分量 { //直接用对边不同色考虑 color [index]=c; for(int i= 0 ;i&#x3C;n;i++) if( graph [index][i] &#x26;&#x26; ( color [i]==c || ( color [i]== 0 &#x26;&#x26; !dfs(i,n, 3 -c))) ) return 0 ; return 1 ; } int main() { int n,m; cin >> n >> m; for(int i= 0 ;i&#x3C;m;i++) { int s,t; cin >> s >> t; graph [s][t]= 1 , graph [t][s]= 1 ; } for(int i= 0 ;i&#x3C;n;i++) { if(! color [i]) if(!dfs(i,n, 1 )) { cout &#x3C;&#x3C; "错误，不是二分图" &#x3C;&#x3C; endl; return 0 ; } } vector&#x3C;int> color1,color2; for(int i= 0 ;i&#x3C;n;i++) { if( color [i]== 1 ) color1 .push_back(i); if( color [i]== 2 ) color2 .push_back(i); } cout &#x3C;&#x3C; "染色结果:" &#x3C;&#x3C; endl; for(int i= 0 ;i&#x3C; color1 .size();i++) cout &#x3C;&#x3C; color1 [i] &#x3C;&#x3C; ' ' ; cout &#x3C;&#x3C; endl; for(int i= 0 ;i&#x3C; color2 .size();i++) cout &#x3C;&#x3C; color2 [i] &#x3C;&#x3C; ' ' ; return 0 ; } 染色后，可以用来得到最大匹配，最大匹配又可以用来得到最小点覆盖，最小点覆盖又可以用来实现匈牙利算法，匈牙利算法用可以用来解决指派问题。顺了，都理顺了:)。 最大匹配 面向问题 求解一个二分图中的最大匹配问题。 总体思路 从任意一个顶点出发， 写代码 1. 起步：初始化所用变量与内存。 const int MAXN : 根据题目调整 int n : 两边的顶点总数 int graph[MAXN][MAXN] : 基于二维数组的邻接矩阵 int match[MAXN] : match[i]表示与i匹配的点(因为最大匹配饱和点中每一个点都只可能与唯一点匹配)，如果为-1表示未匹配 int used[MAXN] : dfs访问标记（这个级别低于匹配标记match） 2. 深入： 了解所用函数。 hungarian（）：匈牙利算法 dfs（）：寻找增广路径 3. 完整代码: #include &#x3C;bits/stdc++.h> using namespace std; const int MAXN = 20 ; // 根据题目调整 int n; // 两边的顶点总数 int graph [MAXN][MAXN]; // 基于二维数组的邻接矩阵 int match [MAXN]; // match[i]表示与i匹配的点(因为最大匹配饱和点中每一个点都只可能与唯一点匹配)，如果为-1表示未匹配 bool used [MAXN]; // dfs访问标记（这个级别低于匹配标记match） bool dfs(int x ) //从x出发寻找增广路径 { for(int i= 0 ;i&#x3C;n;i++) { if( graph [x][i] &#x26;&#x26; used [i]== false ) //这里避免了递归i的对象时再次返回i的情况 { used [i] = true ; //打上dfs访问标记,防止循环卡死 if( match [i]==- 1 || dfs( match [i])== true ) //i点就是未匹配点直接满足x-i加匹配 || i点是匹配过的点,从i点对象开始找到未匹配点 这两种都说明找到了增广路径 { match [i] = x; match [x] = i; return true ; } } } return false ; //没true即false } //匈牙利算法求最大匹配数 int hungarian() { fill(match,match+n,- 1 ); int res= 0 ; for(int i= 0 ;i&#x3C;n;i++) { if( match [i]==- 1 ) { fill(used,used+n, false ); //清除dfs标记 if(dfs(i)) res++; } } return res; } int main() { //举个例子 n = 8 ; int tmp [ 8 ][ 8 ] = { { 0 , 0 , 0 , 0 , 1 , 0 , 1 , 0 }, { 0 , 0 , 0 , 0 , 1 , 0 , 0 , 0 }, { 0 , 0 , 0 , 0 , 1 , 1 , 0 , 0 }, { 0 , 0 , 0 , 0 , 0 , 0 , 1 , 1 }, { 1 , 1 , 1 , 0 , 0 , 0 , 0 , 0 }, { 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 }, { 1 , 0 , 0 , 1 , 0 , 0 , 0 , 0 }, { 0 , 0 , 0 , 1 , 0 , 0 , 0 , 0 } }; memcpy(graph, tmp, sizeof(tmp)); cout &#x3C;&#x3C; "最大匹配边数量:" &#x3C;&#x3C; hungarian() &#x3C;&#x3C; endl; return 0 ; } 联系 再加一点步骤就可以实现 匈牙利指派算法 问题。 参考 Hungarian algorithm(匈牙利算法)的实现原理是什么？ - 鱼鲲的回答 - 知乎 性质 最大匹配（边）数量等于最小覆盖数量（点）( 柯尼希定理 ) 在网上学了学如何通过最大匹配寻找最小点覆盖集。 现在总结一下，大致思路是 二分图嘛，就是左边一半，右边一半。 最小覆盖 面向问题 求解一个二分图中的最小覆盖问题。 总体思路 先求得最大匹配 写代码`},{meta:{title:"背包问题",date:"2025-11-05T04:58:42.000Z",draft:!0,tags:["算法"],categories:[],clues:["算法"],slug:"%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98",sourcePath:"src/content/evidence/背包问题.md",readingTime:2},html:`<h2>01背包</h2>
<h3>问题</h3>
<p>有<strong>N</strong>个物品要装到一个只能承重<strong>W</strong>的背包里，每个物品重量为<strong>w[i]</strong>（weight），价值为<strong>v[i]</strong>（value），问背包能装的最大价值</p>
<h3>前提</h3>
<p>每类物品只能装一个（此谓01）。</p>
<h3>二维解法</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#9A9A9A;font-style:italic">/*01背包二维数组解决*/</span></span>
<span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int N,W;</span><span style="color:#9A9A9A;font-style:italic"> //物品种类数,背包总能承受重量</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> N >> W;</span></span>
<span class="line"><span style="color:#FFFFFF">    int </span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[N+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> //每个物品的重量,从1开始</span></span>
<span class="line"><span style="color:#FFFFFF">    int </span><span style="color:#E8E8E8">v</span><span style="color:#FFFFFF">[N+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> //每个物品的价值,从1开始</span></span>
<span class="line"><span style="color:#FFFFFF">    int </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[N+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][W+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> //dp[i][j]表示考虑第i个物品,总重量为j时,能达到的最大价值</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=N;i++) cin >> </span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[i] >> </span><span style="color:#E8E8E8">v</span><span style="color:#FFFFFF">[i];</span><span style="color:#9A9A9A;font-style:italic"> //重量 价值</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;=N;i++) for(int j=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;j&#x3C;=W;j++) </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i][j]=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=N;i++) for(int j=W;j>=</span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[i];j--) </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i][j] = max(</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][j],</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">][j-</span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[i]]+</span><span style="color:#E8E8E8">v</span><span style="color:#FFFFFF">[i]);</span><span style="color:#9A9A9A;font-style:italic"> //(不用第i个物品,用第i个物品)</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[N][W];</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;    </span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<h3>一维解法</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int N,W;</span><span style="color:#9A9A9A;font-style:italic"> //物品种类数,背包总能承受重量</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> N >> W;</span></span>
<span class="line"><span style="color:#FFFFFF">    int </span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[N+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> //每个物品的重量,从1开始</span></span>
<span class="line"><span style="color:#FFFFFF">    int </span><span style="color:#E8E8E8">v</span><span style="color:#FFFFFF">[N+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> //每个物品的价值,从1开始</span></span>
<span class="line"><span style="color:#FFFFFF">    int </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[W+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> //dp[i][j]表示考虑第i个物品,总重量为j时,能达到的最大价值</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=N;i++) cin >> </span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[i] >> </span><span style="color:#E8E8E8">v</span><span style="color:#FFFFFF">[i];</span><span style="color:#9A9A9A;font-style:italic"> //重量 价值</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;=W;i++) </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i]=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=N;i++) for(int j=W;j>=</span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[i];j--) </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[j] = max(</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[j],</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[j-</span><span style="color:#E8E8E8">w</span><span style="color:#FFFFFF">[i]]+</span><span style="color:#E8E8E8">v</span><span style="color:#FFFFFF">[i]);</span><span style="color:#9A9A9A;font-style:italic"> //(不用第i个物品,用第i个物品)</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[W];</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;    </span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<h3>示例</h3>
<p><strong>输入</strong></p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>10 15</span></span>
<span class="line"><span>2 3</span></span>
<span class="line"><span>3 4</span></span>
<span class="line"><span>4 8</span></span>
<span class="line"><span>5 8</span></span>
<span class="line"><span>9 10</span></span>
<span class="line"><span>3 5</span></span>
<span class="line"><span>4 6</span></span>
<span class="line"><span>2 4</span></span>
<span class="line"><span>6 7</span></span>
<span class="line"><span>7 9</span></span>
<span class="line"><span></span></span></code></pre>
<p><strong>输出</strong></p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>26</span></span>
<span class="line"><span></span></span></code></pre>
<h2>完全背包</h2>
<p><a href="/evidence/kmp/" title="悬停指示（标题）">关于我</a></p>
<p><a href="/evidence/kmp/" style="color:red;" title="悬停指示（标题）">关于我</a></p>`,plainText:"01背包 问题 有 N 个物品要装到一个只能承重 W 的背包里，每个物品重量为 w[i] （weight），价值为 v[i] （value），问背包能装的最大价值 前提 每类物品只能装一个（此谓01）。 二维解法 /*01背包二维数组解决*/ #include &#x3C;bits/stdc++.h> using namespace std; int main() { int N,W; //物品种类数,背包总能承受重量 cin >> N >> W; int w [N+ 1 ]; //每个物品的重量,从1开始 int v [N+ 1 ]; //每个物品的价值,从1开始 int dp [N+ 1 ][W+ 1 ]; //dp[i][j]表示考虑第i个物品,总重量为j时,能达到的最大价值 for(int i= 1 ;i&#x3C;=N;i++) cin >> w [i] >> v [i]; //重量 价值 for(int i= 0 ;i&#x3C;=N;i++) for(int j= 0 ;j&#x3C;=W;j++) dp [i][j]= 0 ; for(int i= 1 ;i&#x3C;=N;i++) for(int j=W;j>= w [i];j--) dp [i][j] = max( dp [i- 1 ][j], dp [i- 1 ][j- w [i]]+ v [i]); //(不用第i个物品,用第i个物品) cout &#x3C;&#x3C; dp [N][W]; return 0 ; } 一维解法 int main() { int N,W; //物品种类数,背包总能承受重量 cin >> N >> W; int w [N+ 1 ]; //每个物品的重量,从1开始 int v [N+ 1 ]; //每个物品的价值,从1开始 int dp [W+ 1 ]; //dp[i][j]表示考虑第i个物品,总重量为j时,能达到的最大价值 for(int i= 1 ;i&#x3C;=N;i++) cin >> w [i] >> v [i]; //重量 价值 for(int i= 0 ;i&#x3C;=W;i++) dp [i]= 0 ; for(int i= 1 ;i&#x3C;=N;i++) for(int j=W;j>= w [i];j--) dp [j] = max( dp [j], dp [j- w [i]]+ v [i]); //(不用第i个物品,用第i个物品) cout &#x3C;&#x3C; dp [W]; return 0 ; } 示例 输入 10 15 2 3 3 4 4 8 5 8 9 10 3 5 4 6 2 4 6 7 7 9 输出 26 完全背包 关于我 关于我"},{meta:{title:"洛谷 P1382",date:"2025-11-04T14:36:22.000Z",draft:!1,tags:["luogu"],categories:["blog"],clues:["blog","luogu"],slug:"p1382",sourcePath:"src/content/evidence/P1382.md",readingTime:2},html:`<h2><a href="https://www.luogu.com.cn/problem/P1382">楼房</a></h2>
<h3>思路</h3>
<p>属于<strong>扫描线</strong>算法思想，通过动态维护当前高度集合，利用最大高度(<strong>天际线</strong>)来不断动态变化，同时记录轮廓拐点，最后顺序输出。</p>
<h3>题解</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include </span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"><span style="color:#FFFFFF">int n,cnt,num   ;</span></span>
<span class="line"><span style="color:#FFFFFF">struct </span><span style="color:#E8E8E8">build</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int h,l,r;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">100010</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> //楼房</span></span>
<span class="line"><span style="color:#FFFFFF">struct </span><span style="color:#E8E8E8">line</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int up,x,k;</span><span style="color:#9A9A9A;font-style:italic"> //up代表线高度(楼房左右边线),k代表出入属性,1代表入，2代表出</span></span>
<span class="line"><span style="color:#FFFFFF">}</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">200020</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">struct </span><span style="color:#E8E8E8">ANS</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int ax,ay;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">400040</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> //储存答案的交叉点</span></span>
<span class="line"><span style="color:#FFFFFF">int cmp(</span><span style="color:#E8E8E8">line</span><span style="color:#E8E8E8"> a</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">line</span><span style="color:#E8E8E8"> b</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    if(</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF"> != </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">) return </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">&#x3C;</span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    if(</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">k</span><span style="color:#FFFFFF"> != </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">k</span><span style="color:#FFFFFF">) return </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">k</span><span style="color:#FFFFFF">&#x3C;</span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">k</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic">//入度优先</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 区分入度出度考虑高度优先级</span></span>
<span class="line"><span style="color:#FFFFFF">    if(</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">k</span><span style="color:#FFFFFF"> == </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">) return </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF"> > </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //入度，高的优先</span></span>
<span class="line"><span style="color:#FFFFFF">    if(</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">k</span><span style="color:#FFFFFF"> == </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">) return </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF"> &#x3C; </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">.</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //出度，矮的优先</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"><span style="color:#FFFFFF">multiset&#x3C;int> s;</span></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> n;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">h</span><span style="color:#FFFFFF"> >> </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF"> >> </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">r</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">        l</span><span style="color:#FFFFFF">[++cnt] = {</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">h</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">};</span><span style="color:#9A9A9A;font-style:italic"> //楼左，入度</span></span>
<span class="line"><span style="color:#E8E8E8">        l</span><span style="color:#FFFFFF">[++cnt] = {</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">h</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">r</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">};</span><span style="color:#9A9A9A;font-style:italic"> //楼右，出度</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#E8E8E8">    s</span><span style="color:#FFFFFF">.insert(</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">);</span><span style="color:#9A9A9A;font-style:italic"> //初始化最高为0</span></span>
<span class="line"><span style="color:#FFFFFF">    sort(l+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,l+cnt+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,cmp);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=cnt;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        int m = *</span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">.rbegin();</span><span style="color:#9A9A9A;font-style:italic"> //存最大高度</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">k</span><span style="color:#FFFFFF">==</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            if(</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF"> &#x3C;= m) </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">.insert(</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">            else</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                ++num;</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[num].</span><span style="color:#E8E8E8">ax</span><span style="color:#FFFFFF">=</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">;</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[num].</span><span style="color:#E8E8E8">ay</span><span style="color:#FFFFFF">=m;</span></span>
<span class="line"><span style="color:#FFFFFF">                ++num;</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[num].</span><span style="color:#E8E8E8">ax</span><span style="color:#FFFFFF">=</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">;</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[num].</span><span style="color:#E8E8E8">ay</span><span style="color:#FFFFFF">=</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">                s</span><span style="color:#FFFFFF">.insert(</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">        else if(</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">k</span><span style="color:#FFFFFF"> == </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            if(</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF">==m &#x26;&#x26; </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">.count(m)==</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#E8E8E8">                s</span><span style="color:#FFFFFF">.erase(m);</span><span style="color:#9A9A9A;font-style:italic"> //移除该高度(存交叉点)，继续下</span></span>
<span class="line"><span style="color:#FFFFFF">                ++num;</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[num].</span><span style="color:#E8E8E8">ax</span><span style="color:#FFFFFF">=</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">;</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[num].</span><span style="color:#E8E8E8">ay</span><span style="color:#FFFFFF">=</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">                ++num;</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[num].</span><span style="color:#E8E8E8">ax</span><span style="color:#FFFFFF">=</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">;</span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[num].</span><span style="color:#E8E8E8">ay</span><span style="color:#FFFFFF">=*</span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">.rbegin();</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">            else </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">.erase(</span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">.find(</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">up</span><span style="color:#FFFFFF">));</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; num &#x3C;&#x3C; </span><span style="color:#F4D9E5">'\\n'</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=num;i++) cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">ax</span><span style="color:#FFFFFF"> &#x3C;&#x3C; </span><span style="color:#F4D9E5">' '</span><span style="color:#FFFFFF"> &#x3C;&#x3C; </span><span style="color:#E8E8E8">ans</span><span style="color:#FFFFFF">[i].</span><span style="color:#E8E8E8">ay</span><span style="color:#FFFFFF"> &#x3C;&#x3C; </span><span style="color:#F4D9E5">'\\n'</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<blockquote>
<p>这里代码借鉴（其实是抄的）了<a href="https://www.luogu.com.cn/problem/solution/P1382">题解</a>中<a href="https://www.luogu.com.cn/user/25390">shuri001</a>佬的代码，写得太好了，叹为观止。</p>
</blockquote>
<h3>附</h3>
<p>我看题解中还有一些用的线段树，可以学学，留。</p>`,plainText:"楼房 思路 属于 扫描线 算法思想，通过动态维护当前高度集合，利用最大高度( 天际线 )来不断动态变化，同时记录轮廓拐点，最后顺序输出。 题解 #include &#x3C;bits/stdc++.h> using namespace std; int n,cnt,num ; struct build { int h,l,r; } a [ 100010 ]; //楼房 struct line { int up,x,k; //up代表线高度(楼房左右边线),k代表出入属性,1代表入，2代表出 } l [ 200020 ]; struct ANS { int ax,ay; } ans [ 400040 ]; //储存答案的交叉点 int cmp( line a , line b ) { if( a . x != b . x ) return a . x &#x3C; b . x ; if( a . k != b . k ) return a . k &#x3C; b . k ; //入度优先 // 区分入度出度考虑高度优先级 if( a . k == 1 ) return a . up > b . up ; //入度，高的优先 if( a . k == 2 ) return a . up &#x3C; b . up ; //出度，矮的优先 } multiset&#x3C;int> s; int main() { cin >> n; for(int i= 1 ;i&#x3C;=n;i++) { cin >> a [i]. h >> a [i]. l >> a [i]. r ; l [++cnt] = { a [i]. h , a [i]. l , 1 }; //楼左，入度 l [++cnt] = { a [i]. h , a [i]. r , 2 }; //楼右，出度 } s .insert( 0 ); //初始化最高为0 sort(l+ 1 ,l+cnt+ 1 ,cmp); for(int i= 1 ;i&#x3C;=cnt;i++) { int m = * s .rbegin(); //存最大高度 if( l [i]. k == 1 ) { if( l [i]. up &#x3C;= m) s .insert( l [i]. up ); else { ++num; ans [num]. ax = l [i]. x ; ans [num]. ay =m; ++num; ans [num]. ax = l [i]. x ; ans [num]. ay = l [i]. up ; s .insert( l [i]. up ); } } else if( l [i]. k == 2 ) { if( l [i]. up ==m &#x26;&#x26; s .count(m)== 1 ) { s .erase(m); //移除该高度(存交叉点)，继续下 ++num; ans [num]. ax = l [i]. x ; ans [num]. ay = l [i]. up ; ++num; ans [num]. ax = l [i]. x ; ans [num]. ay =* s .rbegin(); } else s .erase( s .find( l [i]. up )); } } cout &#x3C;&#x3C; num &#x3C;&#x3C; '\\n' ; for(int i= 1 ;i&#x3C;=num;i++) cout &#x3C;&#x3C; ans [i]. ax &#x3C;&#x3C; ' ' &#x3C;&#x3C; ans [i]. ay &#x3C;&#x3C; '\\n' ; return 0 ; } 这里代码借鉴（其实是抄的）了 题解 中 shuri001 佬的代码，写得太好了，叹为观止。 附 我看题解中还有一些用的线段树，可以学学，留。"},{meta:{title:"Hugo博客配置&markdown语法",date:"2025-10-31T14:44:56.000Z",draft:!0,tags:[],categories:[],clues:[],slug:"hugo%E5%8D%9A%E5%AE%A2%E9%85%8D%E7%BD%AE%26markdown%E8%AF%AD%E6%B3%95",sourcePath:"src/content/evidence/hugo博客配置&markdown语法.md",readingTime:2},html:`<h2>hugo项目结构</h2>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>my-blog/</span></span>
<span class="line"><span>├── archetypes/         # 内容模板</span></span>
<span class="line"><span>├── assets/             # 需要 Hugo Pipes 处理的资源 (SCSS, JS)</span></span>
<span class="line"><span>├── content/            # Markdown 内容</span></span>
<span class="line"><span>├── layouts/            # 模板布局 (覆盖主题)</span></span>
<span class="line"><span>├── static/             # 静态文件 (图片, 字体)</span></span>
<span class="line"><span>├── themes/             # 主题目录</span></span>
<span class="line"><span>└── hugo.yaml           # 核心配置文件</span></span>
<span class="line"><span></span></span></code></pre>
<h2>快速生成并推送到github网页</h2>
<h3>1.Windows系统</h3>
<p>编辑一个<em><strong>deploy.ps1</strong></em>文件(<code>.bat</code> 是 cmd 的脚本，而 <code>.ps1</code> 是 PowerShell 的脚本)实现自动化推送。下面示例统一使用 <code>main</code> 作为部署分支：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">param (</span></span>
<span class="line"><span style="color:#FFFFFF">    [</span><span style="color:#E8E8E8">string</span><span style="color:#FFFFFF">]$msg = $(</span><span style="color:#E8E8E8">Read</span><span style="color:#FFFFFF">-</span><span style="color:#E8E8E8">Host</span><span style="color:#F4D9E5"> "请输入本次提交信息"</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">$deployBranch = "main"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF"># 先切到部署分支，确保 public/ 统一使用主分支</span></span>
<span class="line"><span style="color:#FFFFFF">Set-Location F:\\myblog\\public</span></span>
<span class="line"><span style="color:#FFFFFF">git switch $deployBranch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF"># 进入 Hugo 项目根目录并生成网页</span></span>
<span class="line"><span style="color:#FFFFFF">Set-Location F:\\myblog</span></span>
<span class="line"><span style="color:#FFFFFF">hugo -D --cleanDestinationDir</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF"># 进入 public/ 目录</span></span>
<span class="line"><span style="color:#FFFFFF">Set-Location F:\\myblog\\public</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF"># 添加构建产物</span></span>
<span class="line"><span style="color:#FFFFFF">git add .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">git diff --cached --quiet</span></span>
<span class="line"><span style="color:#FFFFFF">if ($</span><span style="color:#E8E8E8">LASTEXITCODE</span><span style="color:#FFFFFF"> -</span><span style="color:#E8E8E8">ne</span><span style="color:#FFFFFF"> 0) {</span></span>
<span class="line"><span style="color:#FFFFFF">    git commit -m </span><span style="color:#F4D9E5">"$msg"</span></span>
<span class="line"><span style="color:#FFFFFF">} else {</span></span>
<span class="line"><span style="color:#FFFFFF">    Write-Host </span><span style="color:#F4D9E5">"没有可提交的构建变更"</span><span style="color:#FFFFFF"> -ForegroundColor Yellow</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF"># 强制推送到 main 分支</span></span>
<span class="line"><span style="color:#FFFFFF">git push -f origin $deployBranch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF"># 输出提示信息</span></span>
<span class="line"><span style="color:#FFFFFF">Write-Host </span><span style="color:#F4D9E5">""</span></span>
<span class="line"><span style="color:#FFFFFF">Write-Host </span><span style="color:#F4D9E5">"======================================"</span><span style="color:#FFFFFF"> -ForegroundColor Yellow</span></span>
<span class="line"><span style="color:#FFFFFF">Write-Host </span><span style="color:#F4D9E5">"✅ 网站已成功部署！"</span><span style="color:#FFFFFF"> -ForegroundColor Green</span></span>
<span class="line"><span style="color:#FFFFFF">Write-Host </span><span style="color:#F4D9E5">"🌐 访问地址: https://blog.mineguai.com/"</span><span style="color:#FFFFFF"> -ForegroundColor Cyan</span></span>
<span class="line"><span style="color:#FFFFFF">Write-Host </span><span style="color:#F4D9E5">"🌿 部署分支: main"</span><span style="color:#FFFFFF"> -ForegroundColor Cyan</span></span>
<span class="line"><span style="color:#FFFFFF">Write-Host </span><span style="color:#F4D9E5">"======================================"</span><span style="color:#FFFFFF"> -ForegroundColor Yellow</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<h2>生成文档间链接</h2>
<h3>1.普通文档链接</h3>
<p>目前只用到了相对路径</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">关于我</span><span style="color:#FFFFFF">](/evidence/kmp/ </span><span style="color:#F4D9E5">"悬停指示（标题）"</span><span style="color:#FFFFFF">)</span></span>
<span class="line"></span></code></pre>
<h3>2.利用html语法多样化链接显示</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">&#x3C;a href=</span><span style="color:#F4D9E5">"/evidence/kmp/"</span><span style="color:#FFFFFF"> style=</span><span style="color:#F4D9E5">"color:red;"</span><span style="color:#FFFFFF"> title = </span><span style="color:#F4D9E5">"悬停指示（标题）"</span><span style="color:#FFFFFF">>关于我&#x3C;/a></span></span>
<span class="line"></span></code></pre>
<h2>hugo“模板覆盖”规则</h2>
<p>Hugo 会先在我们自己的站点根目录 <code>layouts/</code> 下查找模板文件，如果存在就用它，而不用 <code>themes/PaperMod/layouts/</code> 的文件（被覆盖了）。</p>
<p>例如：</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span>themes/PaperMod/layouts/partials/head.html  # papermod主题自带</span></span>
<span class="line"><span>myblog/layouts/partials/head.html       # 我们自己的的覆盖文件，会优先使用</span></span>
<span class="line"><span></span></span></code></pre>
<p>只要你在 <code>myblog/layouts/partials/</code> 里放同路径的文件，Hugo 就会用你自己的版本。</p>`,plainText:'hugo项目结构 my-blog/ ├── archetypes/ # 内容模板 ├── assets/ # 需要 Hugo Pipes 处理的资源 (SCSS, JS) ├── content/ # Markdown 内容 ├── layouts/ # 模板布局 (覆盖主题) ├── static/ # 静态文件 (图片, 字体) ├── themes/ # 主题目录 └── hugo.yaml # 核心配置文件 快速生成并推送到github网页 1.Windows系统 编辑一个 deploy.ps1 文件( .bat 是 cmd 的脚本，而 .ps1 是 PowerShell 的脚本)实现自动化推送。下面示例统一使用 main 作为部署分支： param ( [ string ]$msg = $( Read - Host "请输入本次提交信息" ) ) $deployBranch = "main" # 先切到部署分支，确保 public/ 统一使用主分支 Set-Location F:\\myblog\\public git switch $deployBranch # 进入 Hugo 项目根目录并生成网页 Set-Location F:\\myblog hugo -D --cleanDestinationDir # 进入 public/ 目录 Set-Location F:\\myblog\\public # 添加构建产物 git add . git diff --cached --quiet if ($ LASTEXITCODE - ne 0) { git commit -m "$msg" } else { Write-Host "没有可提交的构建变更" -ForegroundColor Yellow } # 强制推送到 main 分支 git push -f origin $deployBranch # 输出提示信息 Write-Host "" Write-Host "======================================" -ForegroundColor Yellow Write-Host "✅ 网站已成功部署！" -ForegroundColor Green Write-Host "🌐 访问地址: https://blog.mineguai.com/" -ForegroundColor Cyan Write-Host "🌿 部署分支: main" -ForegroundColor Cyan Write-Host "======================================" -ForegroundColor Yellow 生成文档间链接 1.普通文档链接 目前只用到了相对路径 [ 关于我 ](/evidence/kmp/ "悬停指示（标题）" ) 2.利用html语法多样化链接显示 &#x3C;a href= "/evidence/kmp/" style= "color:red;" title = "悬停指示（标题）" >关于我&#x3C;/a> hugo“模板覆盖”规则 Hugo 会先在我们自己的站点根目录 layouts/ 下查找模板文件，如果存在就用它，而不用 themes/PaperMod/layouts/ 的文件（被覆盖了）。 例如： themes/PaperMod/layouts/partials/head.html # papermod主题自带 myblog/layouts/partials/head.html # 我们自己的的覆盖文件，会优先使用 只要你在 myblog/layouts/partials/ 里放同路径的文件，Hugo 就会用你自己的版本。'},{meta:{title:"洛谷 P3372",date:"2025-10-31T14:00:08.000Z",draft:!0,tags:["luogu"],categories:[],clues:["luogu"],slug:"p3372",sourcePath:"src/content/evidence/P3372.md",readingTime:2},html:`<h2><a href="https://www.luogu.com.cn/problem/P3372">线段树1</a></h2>
<p>用到线段树基础知识</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">// 线段树我默认每个数组下标都是从1开始的</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">void build(const </span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">nums</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">t</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">long long getSum(</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">r</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">t</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">void update_plus(</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">r</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">t</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">,long long </span><span style="color:#E8E8E8">c</span><span style="color:#FFFFFF">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int n,m,type,l,r;</span></span>
<span class="line"><span style="color:#FFFFFF">    long long k;</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> n >> m;</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;long long> nums(n+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">), d(</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">*n+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">), b(</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">*n+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">, </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">);</span><span style="color:#9A9A9A;font-style:italic">  // 修改这里</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=n;i++) cin>></span><span style="color:#E8E8E8">nums</span><span style="color:#FFFFFF">[i];</span></span>
<span class="line"><span style="color:#FFFFFF">    build(nums,d,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,n,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    while(m--)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> type;</span></span>
<span class="line"><span style="color:#FFFFFF">        if(type==</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            cin >> l >> r;</span></span>
<span class="line"><span style="color:#FFFFFF">            cout &#x3C;&#x3C; getSum(d,b,l,r,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,n,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">) &#x3C;&#x3C; </span><span style="color:#F4D9E5">'\\n'</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">        else if(type==</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            cin >> l >> r >> k;</span></span>
<span class="line"><span style="color:#FFFFFF">            update_plus(d,b,l,r,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,n,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,k);</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">void build(const </span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">nums</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">t</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    if(s==t)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#E8E8E8">        d</span><span style="color:#FFFFFF">[p] = </span><span style="color:#E8E8E8">nums</span><span style="color:#FFFFFF">[s];</span></span>
<span class="line"><span style="color:#FFFFFF">        return;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    int m = s + ((t-s)>></span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    build(nums,d,s,m,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">*p);</span></span>
<span class="line"><span style="color:#FFFFFF">    build(nums,d,m+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,t,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">*p+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#E8E8E8">    d</span><span style="color:#FFFFFF">[p] = </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">*p] + </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">*p+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">long long getSum(</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">r</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">t</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    if(l&#x3C;=s &#x26;&#x26; t&#x3C;=r)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        return </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">[p];</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    int m = s + ((t-s)>></span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    long long sum=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    if (</span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p] &#x26;&#x26; s != t)</span><span style="color:#9A9A9A;font-style:italic"> //下传懒标记</span></span>
<span class="line"><span style="color:#FFFFFF">    {  </span></span>
<span class="line"><span style="color:#E8E8E8">        d</span><span style="color:#FFFFFF">[p*</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">] += </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p]*(m-s+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#E8E8E8">        d</span><span style="color:#FFFFFF">[p*</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] += </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p]*(t-m);</span></span>
<span class="line"><span style="color:#E8E8E8">        b</span><span style="color:#FFFFFF">[p*</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">] += </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p];</span></span>
<span class="line"><span style="color:#E8E8E8">        b</span><span style="color:#FFFFFF">[p*</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] += </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p];</span></span>
<span class="line"><span style="color:#E8E8E8">        b</span><span style="color:#FFFFFF">[p] = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    if(l&#x3C;=m) sum += getSum(d,b,l,r,s,m,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">*p);</span></span>
<span class="line"><span style="color:#FFFFFF">    if(r>m) sum += getSum(d,b,l,r,m+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,t,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">*p+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span><span style="color:#9A9A9A;font-style:italic">  //等价于r>=m+1</span></span>
<span class="line"><span style="color:#FFFFFF">    return sum;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">void update_plus(</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;long long>&#x26; </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">r</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">t</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">,long long </span><span style="color:#E8E8E8">c</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 当前区间为修改区间的子集时直接修改当前节点的值,修改后标记</span></span>
<span class="line"><span style="color:#FFFFFF">    if (l &#x3C;= s &#x26;&#x26; t &#x3C;= r) {</span></span>
<span class="line"><span style="color:#E8E8E8">        d</span><span style="color:#FFFFFF">[p] += (t - s + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">) * c, </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p] += c;</span></span>
<span class="line"><span style="color:#FFFFFF">        return;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    int m = s + ((t - s) >> </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    if (</span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p] &#x26;&#x26; s != t)</span><span style="color:#9A9A9A;font-style:italic"> //下放标记(不会有s==t的情况因为s==t的时候肯定是lr的子区间已经直接return了)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#E8E8E8">        d</span><span style="color:#FFFFFF">[p * </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">] += </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p] * (m - s + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">), </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">[p * </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF"> + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] += </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p] * (t - m);</span></span>
<span class="line"><span style="color:#E8E8E8">        b</span><span style="color:#FFFFFF">[p * </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">] += </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p], </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p * </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF"> + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] += </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[p];</span></span>
<span class="line"><span style="color:#E8E8E8">        b</span><span style="color:#FFFFFF">[p] = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    if (l &#x3C;= m) update_plus(d, b, l, r, s, m, p * </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">, c);</span></span>
<span class="line"><span style="color:#FFFFFF">    if (r > m) update_plus(d, b, l, r, m + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">, t, p * </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF"> + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">, c);</span></span>
<span class="line"><span style="color:#E8E8E8">    d</span><span style="color:#FFFFFF">[p] = </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">[p * </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">] + </span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">[p * </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF"> + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<p>这里用了懒惰区间标记。对有些当次不需要访问但是确实有变化的区间进行了标记，如果下次访问到了标记区间，则执行修改并下放标记。</p>
<p>nums,d,b分别代表原数组，区间数组（（从二叉树顶部为1开始(结点p子树为2p,2p+1）），结点懒惰标记数组。</p>
<p>update与getSum都需要用到标记判断与下放，判断条件是b[p] &#x26;&#x26; s != t。</p>`,plainText:"线段树1 用到线段树基础知识 #include &#x3C;bits/stdc++.h> using namespace std; // 线段树我默认每个数组下标都是从1开始的 void build(const vector &#x3C;long long>&#x26; nums , vector &#x3C;long long>&#x26; d ,int s ,int t ,int p ); long long getSum( vector &#x3C;long long>&#x26; d , vector &#x3C;long long>&#x26; b ,int l ,int r ,int s ,int t ,int p ); void update_plus( vector &#x3C;long long>&#x26; d , vector &#x3C;long long>&#x26; b ,int l ,int r ,int s ,int t ,int p ,long long c ); int main() { int n,m,type,l,r; long long k; cin >> n >> m; vector&#x3C;long long> nums(n+ 1 ), d( 4 *n+ 1 ), b( 4 *n+ 1 , 0 ); // 修改这里 for(int i= 1 ;i&#x3C;=n;i++) cin>> nums [i]; build(nums,d, 1 ,n, 1 ); while(m--) { cin >> type; if(type== 2 ) { cin >> l >> r; cout &#x3C;&#x3C; getSum(d,b,l,r, 1 ,n, 1 ) &#x3C;&#x3C; '\\n' ; } else if(type== 1 ) { cin >> l >> r >> k; update_plus(d,b,l,r, 1 ,n, 1 ,k); } } return 0 ; } void build(const vector &#x3C;long long>&#x26; nums , vector &#x3C;long long>&#x26; d ,int s ,int t ,int p ) { if(s==t) { d [p] = nums [s]; return; } int m = s + ((t-s)>> 1 ); build(nums,d,s,m, 2 *p); build(nums,d,m+ 1 ,t, 2 *p+ 1 ); d [p] = d [ 2 *p] + d [ 2 *p+ 1 ]; } long long getSum( vector &#x3C;long long>&#x26; d , vector &#x3C;long long>&#x26; b ,int l ,int r ,int s ,int t ,int p ) { if(l&#x3C;=s &#x26;&#x26; t&#x3C;=r) { return d [p]; } int m = s + ((t-s)>> 1 ); long long sum= 0 ; if ( b [p] &#x26;&#x26; s != t) //下传懒标记 { d [p* 2 ] += b [p]*(m-s+ 1 ); d [p* 2 + 1 ] += b [p]*(t-m); b [p* 2 ] += b [p]; b [p* 2 + 1 ] += b [p]; b [p] = 0 ; } if(l&#x3C;=m) sum += getSum(d,b,l,r,s,m, 2 *p); if(r>m) sum += getSum(d,b,l,r,m+ 1 ,t, 2 *p+ 1 ); //等价于r>=m+1 return sum; } void update_plus( vector &#x3C;long long>&#x26; d , vector &#x3C;long long>&#x26; b ,int l ,int r ,int s ,int t ,int p ,long long c ) { // 当前区间为修改区间的子集时直接修改当前节点的值,修改后标记 if (l &#x3C;= s &#x26;&#x26; t &#x3C;= r) { d [p] += (t - s + 1 ) * c, b [p] += c; return; } int m = s + ((t - s) >> 1 ); if ( b [p] &#x26;&#x26; s != t) //下放标记(不会有s==t的情况因为s==t的时候肯定是lr的子区间已经直接return了) { d [p * 2 ] += b [p] * (m - s + 1 ), d [p * 2 + 1 ] += b [p] * (t - m); b [p * 2 ] += b [p], b [p * 2 + 1 ] += b [p]; b [p] = 0 ; } if (l &#x3C;= m) update_plus(d, b, l, r, s, m, p * 2 , c); if (r > m) update_plus(d, b, l, r, m + 1 , t, p * 2 + 1 , c); d [p] = d [p * 2 ] + d [p * 2 + 1 ]; } 这里用了懒惰区间标记。对有些当次不需要访问但是确实有变化的区间进行了标记，如果下次访问到了标记区间，则执行修改并下放标记。 nums,d,b分别代表原数组，区间数组（（从二叉树顶部为1开始(结点p子树为2p,2p+1）），结点懒惰标记数组。 update与getSum都需要用到标记判断与下放，判断条件是b[p] &#x26;&#x26; s != t。"},{meta:{title:"洛谷 P1590",date:"2025-10-25T05:02:09.000Z",draft:!1,tags:["luogu"],categories:[],clues:["luogu"],slug:"p1590",sourcePath:"src/content/evidence/P1590.md",readingTime:1},html:`<h2><a href="https://www.luogu.com.cn/problem/P1590">失踪的7</a></h2>
<p>直接找pascal的n以内的最大值</p>
<p>由于需要删除7（单位大于7就减，小于7直接用）,所以可以把十进制转换为去除7的模拟九进制。</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include </span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">#define ll long long</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main() {</span></span>
<span class="line"><span style="color:#FFFFFF">    int t;</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> t;</span></span>
<span class="line"><span style="color:#FFFFFF">    while(t--)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        string s;</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> s;</span></span>
<span class="line"><span style="color:#FFFFFF">        ll result = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">        for(char c : s)</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            int dig = c-</span><span style="color:#F4D9E5">'0'</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">            if(dig > </span><span style="color:#F4D9E5">7</span><span style="color:#FFFFFF">) dig--;</span></span>
<span class="line"><span style="color:#FFFFFF">            result = result*</span><span style="color:#F4D9E5">9</span><span style="color:#FFFFFF"> + dig;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">        cout &#x3C;&#x3C; result &#x3C;&#x3C; </span><span style="color:#F4D9E5">"\\n"</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>`,plainText:`失踪的7 直接找pascal的n以内的最大值 由于需要删除7（单位大于7就减，小于7直接用）,所以可以把十进制转换为去除7的模拟九进制。 #include &#x3C;bits/stdc++.h> using namespace std; #define ll long long int main() { int t; cin >> t; while(t--) { string s; cin >> s; ll result = 0 ; for(char c : s) { int dig = c- '0' ; if(dig > 7 ) dig--; result = result* 9 + dig; } cout &#x3C;&#x3C; result &#x3C;&#x3C; "\\n" ; } return 0 ; }`},{meta:{title:"洛谷 P1393",date:"2025-10-04T16:00:50.000Z",draft:!1,tags:["luogu"],categories:[],clues:["luogu"],slug:"p1393",sourcePath:"src/content/evidence/P1393.md",readingTime:2},html:`<h2><a href="https://www.luogu.com.cn/problem/P1393">Mivik</a></h2>
<p>不会做</p>
<h3>观摩题解后的感触</h3>
<p>求概率取余时候除以的分母可以用模逆元转换为乘。</p>
<p><figure class="missing-evidence"><span>证物缺失</span><code>/images/P1393_1.png</code></figure></p>
<p>还有就是<em>KMP</em>中的<em>next</em>数组可以转换为<em>n</em>个等差数列（顺序排列，不交叉）。也就是<strong>字符串边界理论（<em>Border Theory</em>）</strong></p>
<p><a href="https://www.luogu.com.cn/problem/solution/P1393">题解</a>里面<em>FjswYuzu</em>写的还可以,有时间学学。</p>
<h3>题解(ctrl+c/v)</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"><span style="color:#FFFFFF">typedef long long LL;</span></span>
<span class="line"><span style="color:#FFFFFF">char </span><span style="color:#E8E8E8">buf</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">&#x3C;&#x3C;</span><span style="color:#F4D9E5">18</span><span style="color:#FFFFFF">],*p1=buf,*p2=buf;</span></span>
<span class="line"><span style="color:#FFFFFF">#define getchar() (p1==p2 &#x26;&#x26; (p2=(p1=buf)+fread(buf,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">&#x3C;&#x3C;</span><span style="color:#F4D9E5">18</span><span style="color:#FFFFFF">,stdin),p1==p2)?EOF:*p1++)</span></span>
<span class="line"><span style="color:#FFFFFF">int read()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">	int x=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">	char c=getchar();</span></span>
<span class="line"><span style="color:#FFFFFF">	while(c&#x3C;</span><span style="color:#F4D9E5">'0'</span><span style="color:#FFFFFF"> || c></span><span style="color:#F4D9E5">'9'</span><span style="color:#FFFFFF">)	c=getchar();</span></span>
<span class="line"><span style="color:#FFFFFF">	while(c>=</span><span style="color:#F4D9E5">'0'</span><span style="color:#FFFFFF"> &#x26;&#x26; c&#x3C;=</span><span style="color:#F4D9E5">'9'</span><span style="color:#FFFFFF">)	x=(x&#x3C;&#x3C;</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">)+(x&#x3C;&#x3C;</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">)+(c^</span><span style="color:#F4D9E5">'0'</span><span style="color:#FFFFFF">),c=getchar();</span></span>
<span class="line"><span style="color:#FFFFFF">	return x;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"><span style="color:#FFFFFF">void write(int </span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">	if(x></span><span style="color:#F4D9E5">9</span><span style="color:#FFFFFF">)	write(x/</span><span style="color:#F4D9E5">10</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">	putchar(x%</span><span style="color:#F4D9E5">10</span><span style="color:#FFFFFF">+</span><span style="color:#F4D9E5">'0'</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"><span style="color:#FFFFFF">const int MOD=</span><span style="color:#F4D9E5">998244353</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">inline int Add(int </span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">y</span><span style="color:#FFFFFF">){return x+y>=MOD?x+y-MOD:x+y;}</span></span>
<span class="line"><span style="color:#FFFFFF">inline int Sub(int </span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">y</span><span style="color:#FFFFFF">){return x&#x3C;y?x-y+MOD:x-y;}</span></span>
<span class="line"><span style="color:#FFFFFF">inline int Mul(int </span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">y</span><span style="color:#FFFFFF">){return </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">ll*x*y%MOD;}</span></span>
<span class="line"><span style="color:#FFFFFF">int QuickPow(int </span><span style="color:#E8E8E8">x</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">	int ans=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,base=x;</span></span>
<span class="line"><span style="color:#FFFFFF">	while(p)</span></span>
<span class="line"><span style="color:#FFFFFF">	{</span></span>
<span class="line"><span style="color:#FFFFFF">		if(p&#x26;</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">)	ans=Mul(ans,base);</span></span>
<span class="line"><span style="color:#FFFFFF">		base=Mul(base,base);</span></span>
<span class="line"><span style="color:#FFFFFF">		p>>=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">	}</span></span>
<span class="line"><span style="color:#FFFFFF">	return ans;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"><span style="color:#FFFFFF">int n,m,k;</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">100005</span><span style="color:#FFFFFF">],</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">100005</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">struct </span><span style="color:#E8E8E8">BorderSeq</span><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">	int l,r,d;</span></span>
<span class="line"><span style="color:#FFFFFF">	BorderSeq(){}</span></span>
<span class="line"><span style="color:#FFFFFF">	BorderSeq(int </span><span style="color:#E8E8E8">L</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">R</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">D</span><span style="color:#FFFFFF">){l=L,r=R,d=D;}</span></span>
<span class="line"><span style="color:#FFFFFF">}</span><span style="color:#E8E8E8">brd</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">200005</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">int cnt,</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">200005</span><span style="color:#FFFFFF">],</span><span style="color:#E8E8E8">sum</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">200005</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">pw</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">200005</span><span style="color:#FFFFFF">],</span><span style="color:#E8E8E8">ipw</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">200005</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">void Kmp()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">	int j=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">	for(int i=</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;i&#x3C;=k;++i)</span></span>
<span class="line"><span style="color:#FFFFFF">	{</span></span>
<span class="line"><span style="color:#FFFFFF">		while(j &#x26;&#x26; </span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">[j+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">]!=</span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">[i])	j=</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[j];</span></span>
<span class="line"><span style="color:#FFFFFF">		if(</span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">[j+</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">]==</span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">[i])	++j;</span></span>
<span class="line"><span style="color:#E8E8E8">		nxt</span><span style="color:#FFFFFF">[i]=j;</span></span>
<span class="line"><span style="color:#FFFFFF">	}</span></span>
<span class="line"><span style="color:#FFFFFF">	int now=</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[k],d=k-</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[k],fir=</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[k];</span></span>
<span class="line"><span style="color:#FFFFFF">	while(now)</span></span>
<span class="line"><span style="color:#FFFFFF">	{</span></span>
<span class="line"><span style="color:#FFFFFF">		if(d!=now-</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[now] || !</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[now])	</span><span style="color:#E8E8E8">brd</span><span style="color:#FFFFFF">[++cnt]=BorderSeq(now,fir,d),fir=</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[now];</span></span>
<span class="line"><span style="color:#FFFFFF">		if(!</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[now])	break;</span></span>
<span class="line"><span style="color:#FFFFFF">		d=now-</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[now],now=</span><span style="color:#E8E8E8">nxt</span><span style="color:#FFFFFF">[now];</span></span>
<span class="line"><span style="color:#FFFFFF">	}</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"><span style="color:#FFFFFF">vector&#x3C;int> </span><span style="color:#E8E8E8">Sum</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">20</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">200005</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">int </span><span style="color:#E8E8E8">pos</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">20</span><span style="color:#FFFFFF">][</span><span style="color:#F4D9E5">200005</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">int main(){</span></span>
<span class="line"><span style="color:#FFFFFF">	n=read(),m=read(),k=read();</span></span>
<span class="line"><span style="color:#FFFFFF">	for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=k;++i)	</span><span style="color:#E8E8E8">s</span><span style="color:#FFFFFF">[i]=read();</span></span>
<span class="line"><span style="color:#FFFFFF">	Kmp();</span></span>
<span class="line"><span style="color:#FFFFFF">	int invm=QuickPow(m,MOD-</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#E8E8E8">	pw</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">]=</span><span style="color:#E8E8E8">ipw</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">]=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">	for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=n;++i)	</span><span style="color:#E8E8E8">pw</span><span style="color:#FFFFFF">[i]=Mul(</span><span style="color:#E8E8E8">pw</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">],m);</span></span>
<span class="line"><span style="color:#FFFFFF">	for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;i&#x3C;=n;++i)	</span><span style="color:#E8E8E8">ipw</span><span style="color:#FFFFFF">[i]=Mul(</span><span style="color:#E8E8E8">ipw</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">],invm);</span></span>
<span class="line"><span style="color:#FFFFFF">	memset(pos,-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,sizeof pos);</span></span>
<span class="line"><span style="color:#FFFFFF">	for(int i=k;i&#x3C;=n;++i)</span></span>
<span class="line"><span style="color:#FFFFFF">	{</span></span>
<span class="line"><span style="color:#E8E8E8">		dp</span><span style="color:#FFFFFF">[i]=Sub(</span><span style="color:#E8E8E8">pw</span><span style="color:#FFFFFF">[i-k],</span><span style="color:#E8E8E8">sum</span><span style="color:#FFFFFF">[i-k]);</span></span>
<span class="line"><span style="color:#FFFFFF">		for(int j=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;j&#x3C;=cnt;++j)</span></span>
<span class="line"><span style="color:#FFFFFF">		{</span></span>
<span class="line"><span style="color:#FFFFFF">			int d=</span><span style="color:#E8E8E8">brd</span><span style="color:#FFFFFF">[j].</span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">,l=</span><span style="color:#E8E8E8">brd</span><span style="color:#FFFFFF">[j].</span><span style="color:#E8E8E8">l</span><span style="color:#FFFFFF">,r=</span><span style="color:#E8E8E8">brd</span><span style="color:#FFFFFF">[j].</span><span style="color:#E8E8E8">r</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">			int idx=(l+i-k)%d;</span></span>
<span class="line"><span style="color:#FFFFFF">			if(!</span><span style="color:#E8E8E8">Sum</span><span style="color:#FFFFFF">[j][idx].empty())</span></span>
<span class="line"><span style="color:#FFFFFF">			{</span></span>
<span class="line"><span style="color:#FFFFFF">				int L=l+i-k,R=r+i-k;</span></span>
<span class="line"><span style="color:#FFFFFF">				if(~</span><span style="color:#E8E8E8">pos</span><span style="color:#FFFFFF">[j][R])	</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i]=Sub(</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i],</span><span style="color:#E8E8E8">Sum</span><span style="color:#FFFFFF">[j][idx][</span><span style="color:#E8E8E8">pos</span><span style="color:#FFFFFF">[j][R]]);</span></span>
<span class="line"><span style="color:#FFFFFF">				if(</span><span style="color:#E8E8E8">pos</span><span style="color:#FFFFFF">[j][L]></span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">)	</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i]=Add(</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i],</span><span style="color:#E8E8E8">Sum</span><span style="color:#FFFFFF">[j][idx][</span><span style="color:#E8E8E8">pos</span><span style="color:#FFFFFF">[j][L]-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">]);</span></span>
<span class="line"><span style="color:#FFFFFF">			}</span></span>
<span class="line"><span style="color:#FFFFFF">		}</span></span>
<span class="line"><span style="color:#FFFFFF">		for(int j=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;j&#x3C;=cnt;++j)</span></span>
<span class="line"><span style="color:#FFFFFF">		{</span></span>
<span class="line"><span style="color:#FFFFFF">			int d=</span><span style="color:#E8E8E8">brd</span><span style="color:#FFFFFF">[j].</span><span style="color:#E8E8E8">d</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">			int idx=i%d;</span></span>
<span class="line"><span style="color:#E8E8E8">			pos</span><span style="color:#FFFFFF">[j][i]=int(</span><span style="color:#E8E8E8">Sum</span><span style="color:#FFFFFF">[j][idx].size());</span></span>
<span class="line"><span style="color:#E8E8E8">			Sum</span><span style="color:#FFFFFF">[j][idx].push_back(Add(</span><span style="color:#E8E8E8">Sum</span><span style="color:#FFFFFF">[j][idx].empty()?</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">:</span><span style="color:#E8E8E8">Sum</span><span style="color:#FFFFFF">[j][idx].back(),</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i]));</span></span>
<span class="line"><span style="color:#FFFFFF">		}</span></span>
<span class="line"><span style="color:#E8E8E8">		sum</span><span style="color:#FFFFFF">[i]=Add(Mul(</span><span style="color:#E8E8E8">sum</span><span style="color:#FFFFFF">[i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">],m),</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i]);</span></span>
<span class="line"><span style="color:#FFFFFF">	}</span></span>
<span class="line"><span style="color:#FFFFFF">	int ans=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">	for(int i=k;i&#x3C;=n;++i)	ans=Add(ans,Mul(</span><span style="color:#E8E8E8">dp</span><span style="color:#FFFFFF">[i],</span><span style="color:#E8E8E8">pw</span><span style="color:#FFFFFF">[n-i]));</span></span>
<span class="line"><span style="color:#FFFFFF">	write(Mul(ans,</span><span style="color:#E8E8E8">ipw</span><span style="color:#FFFFFF">[n]));</span></span>
<span class="line"><span style="color:#FFFFFF">	return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>`,plainText:"Mivik 不会做 观摩题解后的感触 求概率取余时候除以的分母可以用模逆元转换为乘。 证物缺失 /images/P1393_1.png 还有就是 KMP 中的 next 数组可以转换为 n 个等差数列（顺序排列，不交叉）。也就是 字符串边界理论（ Border Theory ） 题解 里面 FjswYuzu 写的还可以,有时间学学。 题解(ctrl+c/v) #include &#x3C;bits/stdc++.h> using namespace std; typedef long long LL; char buf [ 1 &#x3C;&#x3C; 18 ],*p1=buf,*p2=buf; #define getchar() (p1==p2 &#x26;&#x26; (p2=(p1=buf)+fread(buf, 1 , 1 &#x3C;&#x3C; 18 ,stdin),p1==p2)?EOF:*p1++) int read() { int x= 0 ; char c=getchar(); while(c&#x3C; '0' || c> '9' ) c=getchar(); while(c>= '0' &#x26;&#x26; c&#x3C;= '9' ) x=(x&#x3C;&#x3C; 1 )+(x&#x3C;&#x3C; 3 )+(c^ '0' ),c=getchar(); return x; } void write(int x ) { if(x> 9 ) write(x/ 10 ); putchar(x% 10 + '0' ); } const int MOD= 998244353 ; inline int Add(int x ,int y ){return x+y>=MOD?x+y-MOD:x+y;} inline int Sub(int x ,int y ){return x&#x3C;y?x-y+MOD:x-y;} inline int Mul(int x ,int y ){return 1 ll*x*y%MOD;} int QuickPow(int x ,int p ) { int ans= 1 ,base=x; while(p) { if(p&#x26; 1 ) ans=Mul(ans,base); base=Mul(base,base); p>>= 1 ; } return ans; } int n,m,k; int s [ 100005 ], nxt [ 100005 ]; struct BorderSeq { int l,r,d; BorderSeq(){} BorderSeq(int L ,int R ,int D ){l=L,r=R,d=D;} } brd [ 200005 ]; int cnt, dp [ 200005 ], sum [ 200005 ]; int pw [ 200005 ], ipw [ 200005 ]; void Kmp() { int j= 0 ; for(int i= 2 ;i&#x3C;=k;++i) { while(j &#x26;&#x26; s [j+ 1 ]!= s [i]) j= nxt [j]; if( s [j+ 1 ]== s [i]) ++j; nxt [i]=j; } int now= nxt [k],d=k- nxt [k],fir= nxt [k]; while(now) { if(d!=now- nxt [now] || ! nxt [now]) brd [++cnt]=BorderSeq(now,fir,d),fir= nxt [now]; if(! nxt [now]) break; d=now- nxt [now],now= nxt [now]; } } vector&#x3C;int> Sum [ 20 ][ 200005 ]; int pos [ 20 ][ 200005 ]; int main(){ n=read(),m=read(),k=read(); for(int i= 1 ;i&#x3C;=k;++i) s [i]=read(); Kmp(); int invm=QuickPow(m,MOD- 2 ); pw [ 0 ]= ipw [ 0 ]= 1 ; for(int i= 1 ;i&#x3C;=n;++i) pw [i]=Mul( pw [i- 1 ],m); for(int i= 1 ;i&#x3C;=n;++i) ipw [i]=Mul( ipw [i- 1 ],invm); memset(pos,- 1 ,sizeof pos); for(int i=k;i&#x3C;=n;++i) { dp [i]=Sub( pw [i-k], sum [i-k]); for(int j= 1 ;j&#x3C;=cnt;++j) { int d= brd [j]. d ,l= brd [j]. l ,r= brd [j]. r ; int idx=(l+i-k)%d; if(! Sum [j][idx].empty()) { int L=l+i-k,R=r+i-k; if(~ pos [j][R]) dp [i]=Sub( dp [i], Sum [j][idx][ pos [j][R]]); if( pos [j][L]> 0 ) dp [i]=Add( dp [i], Sum [j][idx][ pos [j][L]- 1 ]); } } for(int j= 1 ;j&#x3C;=cnt;++j) { int d= brd [j]. d ; int idx=i%d; pos [j][i]=int( Sum [j][idx].size()); Sum [j][idx].push_back(Add( Sum [j][idx].empty()? 0 : Sum [j][idx].back(), dp [i])); } sum [i]=Add(Mul( sum [i- 1 ],m), dp [i]); } int ans= 0 ; for(int i=k;i&#x3C;=n;++i) ans=Add(ans,Mul( dp [i], pw [n-i])); write(Mul(ans, ipw [n])); return 0 ; }"},{meta:{title:"hugo的github网页css显示失败问题",date:"2025-10-04T10:52:26.000Z",draft:!1,tags:[],categories:["wrong"],clues:["wrong"],slug:"wrong",sourcePath:"src/content/evidence/wrong.md",readingTime:1},html:`<p>打开网页后出现异常</p>
<p>当时github_pages生成的网页的css加载异常，<code>F12</code>用浏览器控制台看了之后发现是SRI不匹配问题。</p>
<p>后来找到了这篇博客:<a href="https://lizhuo.space/zh/posts/error-logs/hugo%E5%8F%91%E5%B8%83%E5%90%8E%E4%BB%85%E6%96%87%E6%9C%AC%E6%98%BE%E7%A4%BAcss%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD/">hugo发布css无法加载问题 | Le blog de Lz0o0</a></p>
<p>得以解决。</p>`,plainText:"打开网页后出现异常 当时github_pages生成的网页的css加载异常， F12 用浏览器控制台看了之后发现是SRI不匹配问题。 后来找到了这篇博客: hugo发布css无法加载问题 | Le blog de Lz0o0 得以解决。"},{meta:{title:"KMP",date:"2025-09-25T11:30:11.000Z",draft:!1,tags:["算法"],categories:[],clues:["算法"],slug:"kmp",sourcePath:"src/content/evidence/KMP.md",readingTime:2},html:`<p>感觉<code>KMP</code>很简单就没练过，用的时候太不熟练，写个博客熟悉熟悉。</p>
<p>其实主要就是两部分，一个是确定<code>next</code>数组，一个是利用<code>next</code>找子串，这两部分大致思路很简单，有点异曲同工。</p>
<p>具体细节代码中注释已经说的很清楚了，不再赘述。</p>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;int> getNext(const </span><span style="color:#E8E8E8">string</span><span style="color:#FFFFFF"> &#x26;</span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int m = </span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">.size();</span><span style="color:#9A9A9A;font-style:italic"> // 既可以用来初始化也可以作为循环出口</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;int> next(m);</span></span>
<span class="line"><span style="color:#E8E8E8">    next</span><span style="color:#FFFFFF">.push_back(</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">);</span><span style="color:#9A9A9A;font-style:italic"> // 一个字符无法匹配默认为0</span></span>
<span class="line"><span style="color:#FFFFFF">    int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> // 后缀匹配到的字符位置（只增不减）</span></span>
<span class="line"><span style="color:#FFFFFF">    int p=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> // 记录当前最大前缀(末)位置(其实也就是p=next[0])</span></span>
<span class="line"><span style="color:#FFFFFF">    while(i&#x3C;m)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">next</span><span style="color:#FFFFFF">[p] == </span><span style="color:#E8E8E8">next</span><span style="color:#FFFFFF">[i])</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            p++;</span><span style="color:#9A9A9A;font-style:italic"> // 缀数增加，要推进主串，同时构建next</span></span>
<span class="line"><span style="color:#E8E8E8">            next</span><span style="color:#FFFFFF">.push_back(p);</span></span>
<span class="line"><span style="color:#FFFFFF">            i++;</span><span style="color:#9A9A9A;font-style:italic"> // 向后推进</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">        else</span><span style="color:#9A9A9A;font-style:italic"> // 后缀断连</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            if(p == </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">)</span><span style="color:#9A9A9A;font-style:italic"> // 没有回退空间（找不到更小前后缀）,保持缀数不变,继续推进</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                i++;</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">            else</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                p = </span><span style="color:#E8E8E8">next</span><span style="color:#FFFFFF">[p-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span><span style="color:#9A9A9A;font-style:italic"> // 前后缀长度回退，循环继续</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return next;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    string text;</span><span style="color:#9A9A9A;font-style:italic">// 原串</span></span>
<span class="line"><span style="color:#FFFFFF">    string pattern;</span><span style="color:#9A9A9A;font-style:italic">// 要找的目标字符串</span></span>
<span class="line"><span style="color:#FFFFFF">    </span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> text;</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> pattern;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    int n=</span><span style="color:#E8E8E8">text</span><span style="color:#FFFFFF">.size();</span></span>
<span class="line"><span style="color:#FFFFFF">    int m=</span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">.size();</span></span>
<span class="line"><span style="color:#FFFFFF">    if(n &#x3C; m) return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //长度不符合标准</span></span>
<span class="line"><span style="color:#FFFFFF">    </span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;int> next = getNext(text);</span></span>
<span class="line"><span style="color:#FFFFFF">    </span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 这里只处理查找到第一个匹配串的位置，如果多个匹配点,重置变量(p),继续匹配不间断输出就行</span></span>
<span class="line"><span style="color:#FFFFFF">    </span></span>
<span class="line"><span style="color:#FFFFFF">    int j=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> // pattern(副)串匹配到的位置</span></span>
<span class="line"><span style="color:#FFFFFF">    int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> // text(主)串匹配到的位置</span></span>
<span class="line"><span style="color:#FFFFFF">    while(j&#x3C;m)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">[j] == </span><span style="color:#E8E8E8">text</span><span style="color:#FFFFFF">[i])</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            j++;</span></span>
<span class="line"><span style="color:#FFFFFF">            i++;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">        else</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            if(j==</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">)</span><span style="color:#9A9A9A;font-style:italic"> // 无法回退</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                i++;</span><span style="color:#9A9A9A;font-style:italic"> // 向前推进</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">            else</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                j = </span><span style="color:#E8E8E8">next</span><span style="color:#FFFFFF">[j-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 这时i位于找到的子串所在位置后面一个</span></span>
<span class="line"><span style="color:#FFFFFF">    printf(</span><span style="color:#F4D9E5">"第一个匹配的子串位置是[%d,%d]\\n"</span><span style="color:#FFFFFF">,i-m,i-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">);</span><span style="color:#9A9A9A;font-style:italic"> // 输出所在区间</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>`,plainText:'感觉 KMP 很简单就没练过，用的时候太不熟练，写个博客熟悉熟悉。 其实主要就是两部分，一个是确定 next 数组，一个是利用 next 找子串，这两部分大致思路很简单，有点异曲同工。 具体细节代码中注释已经说的很清楚了，不再赘述。 #include &#x3C;bits/stdc++.h> using namespace std; vector &#x3C;int> getNext(const string &#x26; pattern ) { int m = pattern .size(); // 既可以用来初始化也可以作为循环出口 vector&#x3C;int> next(m); next .push_back( 0 ); // 一个字符无法匹配默认为0 int i= 1 ; // 后缀匹配到的字符位置（只增不减） int p= 0 ; // 记录当前最大前缀(末)位置(其实也就是p=next[0]) while(i&#x3C;m) { if( next [p] == next [i]) { p++; // 缀数增加，要推进主串，同时构建next next .push_back(p); i++; // 向后推进 } else // 后缀断连 { if(p == 0 ) // 没有回退空间（找不到更小前后缀）,保持缀数不变,继续推进 { i++; } else { p = next [p- 1 ]; // 前后缀长度回退，循环继续 } } } return next; } int main() { string text; // 原串 string pattern; // 要找的目标字符串 cin >> text; cin >> pattern; int n= text .size(); int m= pattern .size(); if(n &#x3C; m) return 0 ; //长度不符合标准 vector&#x3C;int> next = getNext(text); // 这里只处理查找到第一个匹配串的位置，如果多个匹配点,重置变量(p),继续匹配不间断输出就行 int j= 0 ; // pattern(副)串匹配到的位置 int i= 0 ; // text(主)串匹配到的位置 while(j&#x3C;m) { if( pattern [j] == text [i]) { j++; i++; } else { if(j== 0 ) // 无法回退 { i++; // 向前推进 } else { j = next [j- 1 ]; } } } // 这时i位于找到的子串所在位置后面一个 printf( "第一个匹配的子串位置是[%d,%d]\\n" ,i-m,i- 1 ); // 输出所在区间 return 0 ; }'},{meta:{title:"深度学习",date:"2025-09-23T12:14:23.000Z",draft:!1,tags:["deep_learning"],categories:[],clues:["deep_learning"],slug:"deep_learning",sourcePath:"src/content/evidence/deep_learning.md",readingTime:1},html:`<h2>笔记</h2>
<h3>广播</h3>`,plainText:"笔记 广播"},{meta:{title:"洛谷 P3193",date:"2025-09-23T04:57:20.000Z",draft:!1,tags:["luogu"],categories:[],clues:["luogu"],slug:"p3193",sourcePath:"src/content/evidence/P3193.md",readingTime:2},html:`<h2><a href="https://www.luogu.com.cn/problem/P3193">[HNOI2008] GT考试</a></h2>
<h3>思路</h3>
<p>状态转移矩阵<code>T[i][j]</code>其实就是添加一个字符之后从状态<em>i</em>转移到状态<em>j</em>的方案数量，也就是先用<code>kmp</code>得到对应的T然后对于长度为N的串只需要让这个转移矩阵<em>N</em>次方就行了，然后<code>Tn[0][j]</code>就是子串最大匹配到j位的方案数，所求结果就是<code>Tn[0][0]</code>一直加到<code>Tn[0][M-1](M是子串的长度)</code>。</p>
<h3>算法</h3>
<p><strong>KMP 自动机建模 + 矩阵快速幂</strong></p>
<h3>主要函数以及主要流程</h3>
<ul>
<li>矩阵相乘函数</li>
<li>矩阵快速幂函数(利用到<strong>矩阵相乘函数</strong>和<strong>快速幂算法</strong>)</li>
<li>kmp算法(过于基础就不介绍了)</li>
<li>利用next函数得到基础转移矩阵T[m][n]</li>
<li>对T运用幂n函数得到Tn</li>
<li>Tn按照<a href="#%E6%80%9D%E8%B7%AF">思路</a>直接操作就行了</li>
</ul>
<h3>题解（借鉴了AI，自己敲的，我太强了）</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include</span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">typedef long long ll;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">// 得到next函数</span></span>
<span class="line"><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;int> getNext(</span><span style="color:#E8E8E8">string</span><span style="color:#E8E8E8"> pattern</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int m = </span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">.size();</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;int> next(m,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">);</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,j=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;m;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        while(j!=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF"> &#x26;&#x26; </span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">[i] != </span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">[j]) j = </span><span style="color:#E8E8E8">next</span><span style="color:#FFFFFF">[j-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">        if(</span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">[j] == </span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">[i]) j++;</span></span>
<span class="line"><span style="color:#E8E8E8">        next</span><span style="color:#FFFFFF">[i] = j;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return next;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">// 矩阵相乘函数</span></span>
<span class="line"><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;int>> matMul(</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;int>> </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">,</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;int>> </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">K</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int m = </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.size();</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;vector&#x3C;int>> res(m,vector&#x3C;int>(m,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">));</span><span style="color:#9A9A9A;font-style:italic"> //结果</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;m;i++)</span><span style="color:#9A9A9A;font-style:italic"> // i-k,k-j</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        for(int k=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;k&#x3C;m;k++)</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            if(</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i][k]!=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">)</span><span style="color:#9A9A9A;font-style:italic"> //剪枝减小工作量</span></span>
<span class="line"><span style="color:#FFFFFF">            {</span></span>
<span class="line"><span style="color:#FFFFFF">                for(int j=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;j&#x3C;m;j++)</span></span>
<span class="line"><span style="color:#FFFFFF">                {</span></span>
<span class="line"><span style="color:#E8E8E8">                    res</span><span style="color:#FFFFFF">[i][j] = (</span><span style="color:#E8E8E8">res</span><span style="color:#FFFFFF">[i][j] + (ll)</span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i][k] * </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[k][j]) % K;</span></span>
<span class="line"><span style="color:#FFFFFF">                }</span></span>
<span class="line"><span style="color:#FFFFFF">            }</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return res;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">// 矩阵幂函数(利用快速幂算法)</span></span>
<span class="line"><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;int>> matPow(</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;</span><span style="color:#E8E8E8">vector</span><span style="color:#FFFFFF">&#x3C;int>> </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">p</span><span style="color:#FFFFFF">,int </span><span style="color:#E8E8E8">K</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int m = </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">.size();</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;vector&#x3C;int>> res(m,vector&#x3C;int>(m,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">));</span><span style="color:#9A9A9A;font-style:italic"> //结果</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;m;i++) </span><span style="color:#E8E8E8">res</span><span style="color:#FFFFFF">[i][i] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> //单位矩阵用于起步</span></span>
<span class="line"><span style="color:#FFFFFF">    while(p!=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        if(p &#x26; </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">) res = matMul(res,a,K);</span></span>
<span class="line"><span style="color:#FFFFFF">        a = matMul(a,a,K);</span></span>
<span class="line"><span style="color:#FFFFFF">        p >>= </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span><span style="color:#9A9A9A;font-style:italic"> // p /= 2</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    return res;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#FFFFFF">    int N,M,K;</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // M&#x3C;=20 N&#x3C;=1e9 K&#x3C;=10000,所以不能暴力解</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> N >> M >> K;</span></span>
<span class="line"><span style="color:#FFFFFF">    string pattern;</span><span style="color:#9A9A9A;font-style:italic"> // 子串（此题中指的是不该出现的子串）</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> pattern;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 求 pattern 的状态转移方程T[i][j]</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 因为要用到pattern的next数组，所以先求next</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;int> next = getNext(pattern);</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;vector&#x3C;int>> T(M,vector&#x3C;int>(M,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">));</span><span style="color:#9A9A9A;font-style:italic"> // T[M][M],表示基础转移矩阵</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int m=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;m&#x3C;M;m++)</span><span style="color:#9A9A9A;font-style:italic"> // m为当前匹配数量,由于不准出现匹配到完整M的，所以最大长度为M-1</span></span>
<span class="line"><span style="color:#FFFFFF">    { </span></span>
<span class="line"><span style="color:#FFFFFF">        for(int digit=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;digit&#x3C;=</span><span style="color:#F4D9E5">9</span><span style="color:#FFFFFF">;digit++)</span><span style="color:#9A9A9A;font-style:italic"> // 尝试每一个数字,从而进行状态转移</span></span>
<span class="line"><span style="color:#FFFFFF">        {</span></span>
<span class="line"><span style="color:#FFFFFF">            int cur = m;</span><span style="color:#9A9A9A;font-style:italic"> // 从当前位置开始回退</span></span>
<span class="line"><span style="color:#FFFFFF">            while(cur!=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF"> &#x26;&#x26; (</span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">[cur]-</span><span style="color:#F4D9E5">'0'</span><span style="color:#FFFFFF">) != digit) cur = </span><span style="color:#E8E8E8">next</span><span style="color:#FFFFFF">[cur-</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">];</span></span>
<span class="line"><span style="color:#FFFFFF">            if((</span><span style="color:#E8E8E8">pattern</span><span style="color:#FFFFFF">[cur]-</span><span style="color:#F4D9E5">'0'</span><span style="color:#FFFFFF">) == digit) cur++;</span></span>
<span class="line"><span style="color:#FFFFFF">            if(cur &#x3C; M) </span><span style="color:#E8E8E8">T</span><span style="color:#FFFFFF">[m][cur] = (</span><span style="color:#E8E8E8">T</span><span style="color:#FFFFFF">[m][cur] + </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">) % K;</span></span>
<span class="line"><span style="color:#FFFFFF">        }</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 得到完整的状态转移矩阵</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;vector&#x3C;int>> Tn = matPow(T,N,K);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    ll result = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;M;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        result = (result + </span><span style="color:#E8E8E8">Tn</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">][i]) % K;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; result &#x3C;&#x3C; endl; </span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<h3>遇到问题</h3>
<ul>
<li><code>p>>1</code>不会改变<em>p</em>的值应该是<code>p>>=1</code></li>
<li><strong>int</strong>类型乘法要注意防止溢出，一般用<strong>ll</strong></li>
</ul>`,plainText:"[HNOI2008] GT考试 思路 状态转移矩阵 T[i][j] 其实就是添加一个字符之后从状态 i 转移到状态 j 的方案数量，也就是先用 kmp 得到对应的T然后对于长度为N的串只需要让这个转移矩阵 N 次方就行了，然后 Tn[0][j] 就是子串最大匹配到j位的方案数，所求结果就是 Tn[0][0] 一直加到 Tn[0][M-1](M是子串的长度) 。 算法 KMP 自动机建模 + 矩阵快速幂 主要函数以及主要流程 矩阵相乘函数 矩阵快速幂函数(利用到 矩阵相乘函数 和 快速幂算法 ) kmp算法(过于基础就不介绍了) 利用next函数得到基础转移矩阵T[m][n] 对T运用幂n函数得到Tn Tn按照 思路 直接操作就行了 题解（借鉴了AI，自己敲的，我太强了） #include &#x3C;bits/stdc++.h> using namespace std; typedef long long ll; // 得到next函数 vector &#x3C;int> getNext( string pattern ) { int m = pattern .size(); vector&#x3C;int> next(m, 0 ); for(int i= 1 ,j= 0 ;i&#x3C;m;i++) { while(j!= 0 &#x26;&#x26; pattern [i] != pattern [j]) j = next [j- 1 ]; if( pattern [j] == pattern [i]) j++; next [i] = j; } return next; } // 矩阵相乘函数 vector &#x3C; vector &#x3C;int>> matMul( vector &#x3C; vector &#x3C;int>> a , vector &#x3C; vector &#x3C;int>> b ,int K ) { int m = a .size(); vector&#x3C;vector&#x3C;int>> res(m,vector&#x3C;int>(m, 0 )); //结果 for(int i= 0 ;i&#x3C;m;i++) // i-k,k-j { for(int k= 0 ;k&#x3C;m;k++) { if( a [i][k]!= 0 ) //剪枝减小工作量 { for(int j= 0 ;j&#x3C;m;j++) { res [i][j] = ( res [i][j] + (ll) a [i][k] * b [k][j]) % K; } } } } return res; } // 矩阵幂函数(利用快速幂算法) vector &#x3C; vector &#x3C;int>> matPow( vector &#x3C; vector &#x3C;int>> a ,int p ,int K ) { int m = a .size(); vector&#x3C;vector&#x3C;int>> res(m,vector&#x3C;int>(m, 0 )); //结果 for(int i= 0 ;i&#x3C;m;i++) res [i][i] = 1 ; //单位矩阵用于起步 while(p!= 0 ) { if(p &#x26; 1 ) res = matMul(res,a,K); a = matMul(a,a,K); p >>= 1 ; // p /= 2 } return res; } int main() { int N,M,K; // M&#x3C;=20 N&#x3C;=1e9 K&#x3C;=10000,所以不能暴力解 cin >> N >> M >> K; string pattern; // 子串（此题中指的是不该出现的子串） cin >> pattern; // 求 pattern 的状态转移方程T[i][j] // 因为要用到pattern的next数组，所以先求next vector&#x3C;int> next = getNext(pattern); vector&#x3C;vector&#x3C;int>> T(M,vector&#x3C;int>(M, 0 )); // T[M][M],表示基础转移矩阵 for(int m= 0 ;m&#x3C;M;m++) // m为当前匹配数量,由于不准出现匹配到完整M的，所以最大长度为M-1 { for(int digit= 0 ;digit&#x3C;= 9 ;digit++) // 尝试每一个数字,从而进行状态转移 { int cur = m; // 从当前位置开始回退 while(cur!= 0 &#x26;&#x26; ( pattern [cur]- '0' ) != digit) cur = next [cur- 1 ]; if(( pattern [cur]- '0' ) == digit) cur++; if(cur &#x3C; M) T [m][cur] = ( T [m][cur] + 1 ) % K; } } // 得到完整的状态转移矩阵 vector&#x3C;vector&#x3C;int>> Tn = matPow(T,N,K); ll result = 0 ; for(int i= 0 ;i&#x3C;M;i++) { result = (result + Tn [ 0 ][i]) % K; } cout &#x3C;&#x3C; result &#x3C;&#x3C; endl; return 0 ; } 遇到问题 p>>1 不会改变 p 的值应该是 p>>=1 int 类型乘法要注意防止溢出，一般用 ll"},{meta:{title:"w",date:"2025-09-22T16:00:00.000Z",draft:!1,tags:["pictures"],categories:[],clues:["pictures"],slug:"first-blog/copy",sourcePath:"src/content/evidence/first-blog/copy.md",readingTime:1,cover:{image:"images/wanzi1.jpg",alt:"图丢了",relative:!0}},html:"<p>（加图改md路径）改了</p>",plainText:"（加图改md路径）改了"},{meta:{title:"洛谷 P1328",date:"2025-09-22T16:00:00.000Z",draft:!1,tags:["luogu"],categories:[],clues:["luogu"],slug:"p1328",sourcePath:"src/content/evidence/P1328.md",readingTime:1},html:`<h2><a href="https://www.luogu.com.cn/problem/P1328">生活大爆炸版石头剪刀布</a></h2>
<h3>思路</h3>
<ul>
<li>数字化选择方式</li>
<li>纯手抄一个<code>map&#x3C;pair&#x3C;int, int>, int> mp</code>用来记录出拳结果。如<code>mp[{2,0}] = 2</code>;表示<em>b</em>赢了</li>
<li>直接取余数组处理得到结果</li>
</ul>
<h3>题解</h3>
<pre class="shiki guai-evidence" style="background-color:#030303;color:#ffffff" tabindex="0"><code><span class="line"><span style="color:#FFFFFF">#include </span><span style="color:#F4D9E5">&#x3C;bits/stdc++.h></span></span>
<span class="line"><span style="color:#FFFFFF">using namespace std;</span></span>
<span class="line"><span style="color:#FFFFFF">int main()</span></span>
<span class="line"><span style="color:#FFFFFF">{</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 0 表示 剪刀，</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 1 表示 石头，</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 2 表示 布，</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 3 表示 蜥蜴人，</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 4 表示 斯波克</span></span>
<span class="line"><span style="color:#9A9A9A;font-style:italic">    // 结果0表示平局，1表示a赢，2表示b赢</span></span>
<span class="line"><span style="color:#FFFFFF">    map&#x3C;pair&#x3C;int, int>, int> mp;</span></span>
<span class="line"><span style="color:#FFFFFF">    int n,na,nb;</span></span>
<span class="line"><span style="color:#FFFFFF">    int </span><span style="color:#E8E8E8">result</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">]={</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">};</span><span style="color:#9A9A9A;font-style:italic"> //0无意义，1为a分数，2为b分数</span></span>
<span class="line"><span style="color:#FFFFFF">    cin >> n >> na >> nb;</span></span>
<span class="line"><span style="color:#FFFFFF">    vector&#x3C;int> a(na),b(nb);</span></span>
<span class="line"><span style="color:#FFFFFF">    for (int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;na;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i];</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    for (int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;nb;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        cin >> </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[i];</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;</span><span style="color:#F4D9E5">5</span><span style="color:#FFFFFF">;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#E8E8E8">        mp</span><span style="color:#FFFFFF">[{i,i}] = </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">3</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#E8E8E8">    mp</span><span style="color:#FFFFFF">[{</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">,</span><span style="color:#F4D9E5">4</span><span style="color:#FFFFFF">}] = </span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">    for(int i=</span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;i&#x3C;n;i++)</span></span>
<span class="line"><span style="color:#FFFFFF">    {</span></span>
<span class="line"><span style="color:#FFFFFF">        int xi = i%na;</span></span>
<span class="line"><span style="color:#FFFFFF">        int x = </span><span style="color:#E8E8E8">a</span><span style="color:#FFFFFF">[i%na];</span></span>
<span class="line"><span style="color:#FFFFFF">        int y = </span><span style="color:#E8E8E8">b</span><span style="color:#FFFFFF">[i%nb];</span></span>
<span class="line"><span style="color:#E8E8E8">        result</span><span style="color:#FFFFFF">[</span><span style="color:#E8E8E8">mp</span><span style="color:#FFFFFF">[{x,y}]]++;</span></span>
<span class="line"><span style="color:#FFFFFF">    }</span></span>
<span class="line"><span style="color:#FFFFFF">    cout &#x3C;&#x3C; </span><span style="color:#E8E8E8">result</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">1</span><span style="color:#FFFFFF">] &#x3C;&#x3C; </span><span style="color:#F4D9E5">" "</span><span style="color:#FFFFFF"> &#x3C;&#x3C; </span><span style="color:#E8E8E8">result</span><span style="color:#FFFFFF">[</span><span style="color:#F4D9E5">2</span><span style="color:#FFFFFF">] &#x3C;&#x3C; endl;</span></span>
<span class="line"><span style="color:#FFFFFF">    return </span><span style="color:#F4D9E5">0</span><span style="color:#FFFFFF">;</span></span>
<span class="line"><span style="color:#FFFFFF">}</span></span>
<span class="line"></span></code></pre>
<h2></h2>
<h3>优化</h3>
<p>看了别人的题解，大多是用一个二维<code>[5][5]</code>的数组存储对局输赢，后面处理简单一些。</p>`,plainText:'生活大爆炸版石头剪刀布 思路 数字化选择方式 纯手抄一个 map&#x3C;pair&#x3C;int, int>, int> mp 用来记录出拳结果。如 mp[{2,0}] = 2 ;表示 b 赢了 直接取余数组处理得到结果 题解 #include &#x3C;bits/stdc++.h> using namespace std; int main() { // 0 表示 剪刀， // 1 表示 石头， // 2 表示 布， // 3 表示 蜥蜴人， // 4 表示 斯波克 // 结果0表示平局，1表示a赢，2表示b赢 map&#x3C;pair&#x3C;int, int>, int> mp; int n,na,nb; int result [ 3 ]={ 0 }; //0无意义，1为a分数，2为b分数 cin >> n >> na >> nb; vector&#x3C;int> a(na),b(nb); for (int i= 0 ;i&#x3C;na;i++) { cin >> a [i]; } for (int i= 0 ;i&#x3C;nb;i++) { cin >> b [i]; } for(int i= 0 ;i&#x3C; 5 ;i++) { mp [{i,i}] = 0 ; } mp [{ 2 , 0 }] = 2 ; mp [{ 3 , 0 }] = 2 ; mp [{ 3 , 1 }] = 2 ; mp [{ 4 , 2 }] = 2 ; mp [{ 4 , 3 }] = 2 ; mp [{ 1 , 0 }] = 1 ; mp [{ 2 , 1 }] = 1 ; mp [{ 3 , 2 }] = 1 ; mp [{ 4 , 0 }] = 1 ; mp [{ 4 , 1 }] = 1 ; mp [{ 0 , 2 }] = 1 ; mp [{ 0 , 3 }] = 1 ; mp [{ 1 , 3 }] = 1 ; mp [{ 2 , 4 }] = 1 ; mp [{ 3 , 4 }] = 1 ; mp [{ 0 , 1 }] = 2 ; mp [{ 1 , 2 }] = 2 ; mp [{ 2 , 3 }] = 2 ; mp [{ 0 , 4 }] = 2 ; mp [{ 1 , 4 }] = 2 ; for(int i= 0 ;i&#x3C;n;i++) { int xi = i%na; int x = a [i%na]; int y = b [i%nb]; result [ mp [{x,y}]]++; } cout &#x3C;&#x3C; result [ 1 ] &#x3C;&#x3C; " " &#x3C;&#x3C; result [ 2 ] &#x3C;&#x3C; endl; return 0 ; } 优化 看了别人的题解，大多是用一个二维 [5][5] 的数组存储对局输赢，后面处理简单一些。'}],clues:[{slug:"%E7%AE%97%E6%B3%95",name:"算法",count:7},{slug:"luogu",name:"luogu",count:7},{slug:"%E5%9B%BE%E8%AE%BA",name:"图论",count:2},{slug:"%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E9%97%AE%E9%A2%98",name:"博客搭建问题",count:1},{slug:"%E6%B5%8B%E8%AF%95",name:"测试",count:1},{slug:"%E6%9C%80%E5%A4%A7%E5%9B%A2",name:"最大团",count:1},{slug:"blog",name:"blog",count:1},{slug:"deep_learning",name:"deep_learning",count:1},{slug:"pictures",name:"pictures",count:1},{slug:"wrong",name:"wrong",count:1}]};function qd(){const y=window.matchMedia("(prefers-reduced-motion: reduce)").matches,A=document.documentElement;let S=0;const c=".evidence-card, .manuscript > *, .paper-nav a, .clue-strip a, .clue-wall a, .clue-list a, .clue-list em",j=()=>{const g=document.documentElement.scrollHeight-window.innerHeight,N=g>0?window.scrollY/g:0;A.style.setProperty("--scroll-ratio",N.toFixed(4)),A.style.setProperty("--drift",(N*1e3).toFixed(2))};if(window.addEventListener("scroll",j,{passive:!0}),window.addEventListener("resize",j),j(),y)return;const G=()=>{S+=1,A.style.setProperty("--reflow",String(S)),document.querySelectorAll(c).forEach((g,N)=>{const _=Math.sin(N*9.17+S*1.31);g.style.setProperty("--chaos-x",`${(_*18).toFixed(2)}px`),g.style.setProperty("--chaos-y",`${(Math.cos(N*5.7+S)*12).toFixed(2)}px`),g.style.setProperty("--chaos-r",`${(_*2.4).toFixed(2)}deg`)})},L=(g,N,_=1)=>{const k=document.createElement("span");k.className="pink-trail",k.style.left=`${g}px`,k.style.top=`${N}px`,k.style.setProperty("--trail-x",`${((Math.random()-.5)*42*_).toFixed(2)}px`),k.style.setProperty("--trail-y",`${((Math.random()-.5)*34*_).toFixed(2)}px`),document.body.appendChild(k),window.setTimeout(()=>k.remove(),760)},X=(g,N)=>{for(let _=0;_<5;_+=1)window.setTimeout(()=>L(g,N,1.5+_*.18),_*18)};document.addEventListener("pointerdown",g=>{const N=g.target;if(N.closest(".clue-strip a, .clue-wall a, .clue-list a")){G(),X(g.clientX,g.clientY);return}N.closest("a, button, input, textarea, select, pre, code")||(G(),X(g.clientX,g.clientY))},{passive:!0});let H=0;window.addEventListener("pointermove",g=>{Date.now()-H<34||(H=Date.now(),L(g.clientX,g.clientY))},{passive:!0})}function Xd(){const y=document.querySelector("[data-clue-canvas]");if(!y)return;const A=y.getContext("2d",{alpha:!0});if(!A)return;const S=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let c=0,j=0,G=1,L=0,X=[];const H=()=>document.documentElement.dataset.persona==="light",g=()=>{G=Math.min(window.devicePixelRatio||1,2),c=window.innerWidth,j=window.innerHeight,y.width=Math.floor(c*G),y.height=Math.floor(j*G),y.style.width=`${c}px`,y.style.height=`${j}px`,A.setTransform(G,0,0,G,0,0);const k=c<760,K=k?18:Math.min(58,Math.max(34,Math.round(c/34)));X=Array.from({length:K},(js,rs)=>({x:c*(rs*37%100)/100,y:j*(rs*61%100)/100,vx:Math.sin(rs*2.17)*(k?.08:.16),vy:Math.cos(rs*1.73)*(k?.07:.13),r:1.2+rs%4*.55,a:.22+rs%5*.035}))},N=()=>{const k=H();A.clearRect(0,0,c,j),A.lineWidth=.8,X.forEach((K,js)=>{S||(K.x+=K.vx,K.y+=K.vy,K.x<-40&&(K.x=c+40),K.x>c+40&&(K.x=-40),K.y<-40&&(K.y=j+40),K.y>j+40&&(K.y=-40));for(let rs=js+1;rs<X.length;rs+=1){const Gs=X[rs],Bs=Math.hypot(K.x-Gs.x,K.y-Gs.y);if(Bs>165)continue;const An=(1-Bs/165)*(k?.11:.16);A.strokeStyle=`rgba(${k?"169, 91, 123":"242, 173, 200"}, ${An})`,A.beginPath(),A.moveTo(K.x,K.y);const Ss=Math.sin(js+rs)*18;A.quadraticCurveTo((K.x+Gs.x)/2+Ss,(K.y+Gs.y)/2-Ss,Gs.x,Gs.y),A.stroke()}A.fillStyle=`rgba(${k?"124, 48, 78":"255, 202, 222"}, ${K.a})`,A.beginPath(),A.arc(K.x,K.y,K.r,0,Math.PI*2),A.fill()}),S||(L=window.requestAnimationFrame(N))},_=()=>{window.cancelAnimationFrame(L),g(),N()};window.addEventListener("resize",_),new MutationObserver(_).observe(document.documentElement,{attributes:!0,attributeFilter:["data-persona"]}),_()}Ed.hydrateRoot(document.getElementById("root"),m.jsx(bd,{path:window.location.pathname,site:Ld}));Xd();qd();
