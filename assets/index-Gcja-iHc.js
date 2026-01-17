var rv=Object.defineProperty;var sv=(s,e,n)=>e in s?rv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var wn=(s,e,n)=>sv(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function Gm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var yc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function ov(){if(Pp)return ft;Pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function S(U,ne,Ie){this.props=U,this.context=ne,this.refs=w,this.updater=Ie||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=S.prototype;function I(U,ne,Ie){this.props=U,this.context=ne,this.refs=w,this.updater=Ie||y}var D=I.prototype=new g;D.constructor=I,E(D,S.prototype),D.isPureReactComponent=!0;var P=Array.isArray,X=Object.prototype.hasOwnProperty,z={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function j(U,ne,Ie){var Z,ue={},Me=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)X.call(ne,Z)&&!N.hasOwnProperty(Z)&&(ue[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)ue.children=Ie;else if(1<Te){for(var Ue=Array(Te),Qe=0;Qe<Te;Qe++)Ue[Qe]=arguments[Qe+2];ue.children=Ue}if(U&&U.defaultProps)for(Z in Te=U.defaultProps,Te)ue[Z]===void 0&&(ue[Z]=Te[Z]);return{$$typeof:s,type:U,key:Me,ref:ve,props:ue,_owner:z.current}}function C(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return ne[Ie]})}var ie=/\/+/g;function K(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):ne.toString(36)}function fe(U,ne,Ie,Z,ue){var Me=typeof U;(Me==="undefined"||Me==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case s:case e:ve=!0}}if(ve)return ve=U,ue=ue(ve),U=Z===""?"."+K(ve,0):Z,P(ue)?(Ie="",U!=null&&(Ie=U.replace(ie,"$&/")+"/"),fe(ue,ne,Ie,"",function(Qe){return Qe})):ue!=null&&(R(ue)&&(ue=C(ue,Ie+(!ue.key||ve&&ve.key===ue.key?"":(""+ue.key).replace(ie,"$&/")+"/")+U)),ne.push(ue)),1;if(ve=0,Z=Z===""?".":Z+":",P(U))for(var Te=0;Te<U.length;Te++){Me=U[Te];var Ue=Z+K(Me,Te);ve+=fe(Me,ne,Ie,Ue,ue)}else if(Ue=x(U),typeof Ue=="function")for(U=Ue.call(U),Te=0;!(Me=U.next()).done;)Me=Me.value,Ue=Z+K(Me,Te++),ve+=fe(Me,ne,Ie,Ue,ue);else if(Me==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(U,ne,Ie){if(U==null)return U;var Z=[],ue=0;return fe(U,Z,"","",function(Me){return ne.call(Ie,Me,ue++)}),Z}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},B={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:B,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:he,forEach:function(U,ne,Ie){he(U,function(){ne.apply(this,arguments)},Ie)},count:function(U){var ne=0;return he(U,function(){ne++}),ne},toArray:function(U){return he(U,function(ne){return ne})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=S,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ft.act=se,ft.cloneElement=function(U,ne,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=E({},U.props),ue=U.key,Me=U.ref,ve=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=z.current),ne.key!==void 0&&(ue=""+ne.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Ue in ne)X.call(ne,Ue)&&!N.hasOwnProperty(Ue)&&(Z[Ue]=ne[Ue]===void 0&&Te!==void 0?Te[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ie;else if(1<Ue){Te=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)Te[Qe]=arguments[Qe+2];Z.children=Te}return{$$typeof:s,type:U.type,key:ue,ref:Me,props:Z,_owner:ve}},ft.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},ft.createElement=j,ft.createFactory=function(U){var ne=j.bind(null,U);return ne.type=U,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:f,render:U}},ft.isValidElement=R,ft.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:oe}},ft.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},ft.startTransition=function(U){var ne=B.transition;B.transition={};try{U()}finally{B.transition=ne}},ft.unstable_act=se,ft.useCallback=function(U,ne){return le.current.useCallback(U,ne)},ft.useContext=function(U){return le.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return le.current.useDeferredValue(U)},ft.useEffect=function(U,ne){return le.current.useEffect(U,ne)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(U,ne,Ie){return le.current.useImperativeHandle(U,ne,Ie)},ft.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},ft.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},ft.useMemo=function(U,ne){return le.current.useMemo(U,ne)},ft.useReducer=function(U,ne,Ie){return le.current.useReducer(U,ne,Ie)},ft.useRef=function(U){return le.current.useRef(U)},ft.useState=function(U){return le.current.useState(U)},ft.useSyncExternalStore=function(U,ne,Ie){return le.current.useSyncExternalStore(U,ne,Ie)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var bp;function qf(){return bp||(bp=1,yc.exports=ov()),yc.exports}var Ht=qf();const Rl=Gm(Ht);var el={},Mc={exports:{}},In={},Ec={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function av(){return Dp||(Dp=1,(function(s){function e(B,ae){var se=B.length;B.push(ae);e:for(;0<se;){var U=se-1>>>1,ne=B[U];if(0<a(ne,ae))B[U]=ae,B[se]=ne,se=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],se=B.pop();if(se!==ae){B[0]=se;e:for(var U=0,ne=B.length,Ie=ne>>>1;U<Ie;){var Z=2*(U+1)-1,ue=B[Z],Me=Z+1,ve=B[Me];if(0>a(ue,se))Me<ne&&0>a(ve,ue)?(B[U]=ve,B[Me]=se,U=Me):(B[U]=ue,B[Z]=se,U=Z);else if(Me<ne&&0>a(ve,se))B[U]=ve,B[Me]=se,U=Me;else break e}}return ae}function a(B,ae){var se=B.sortIndex-ae.sortIndex;return se!==0?se:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var p=[],m=[],_=1,v=null,x=3,y=!1,E=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(B){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=B)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function P(B){if(w=!1,D(B),!E)if(n(p)!==null)E=!0,oe(X);else{var ae=n(m);ae!==null&&le(P,ae.startTime-B)}}function X(B,ae){E=!1,w&&(w=!1,g(j),j=-1),y=!0;var se=x;try{for(D(ae),v=n(p);v!==null&&(!(v.expirationTime>ae)||B&&!k());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var ne=U(v.expirationTime<=ae);ae=s.unstable_now(),typeof ne=="function"?v.callback=ne:v===n(p)&&r(p),D(ae)}else r(p);v=n(p)}if(v!==null)var Ie=!0;else{var Z=n(m);Z!==null&&le(P,Z.startTime-ae),Ie=!1}return Ie}finally{v=null,x=se,y=!1}}var z=!1,N=null,j=-1,C=5,R=-1;function k(){return!(s.unstable_now()-R<C)}function ie(){if(N!==null){var B=s.unstable_now();R=B;var ae=!0;try{ae=N(!0,B)}finally{ae?K():(z=!1,N=null)}}else z=!1}var K;if(typeof I=="function")K=function(){I(ie)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=ie,K=function(){he.postMessage(null)}}else K=function(){S(ie,0)};function oe(B){N=B,z||(z=!0,K())}function le(B,ae){j=S(function(){B(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,oe(X))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var se=x;x=ae;try{return B()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return ae()}finally{x=se}},s.unstable_scheduleCallback=function(B,ae,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,B={id:_++,callback:ae,priorityLevel:B,startTime:se,expirationTime:ne,sortIndex:-1},se>U?(B.sortIndex=se,e(m,B),n(p)===null&&B===n(m)&&(w?(g(j),j=-1):w=!0,le(P,se-U))):(B.sortIndex=ne,e(p,B),E||y||(E=!0,oe(X))),B},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(B){var ae=x;return function(){var se=x;x=ae;try{return B.apply(this,arguments)}finally{x=se}}}})(Tc)),Tc}var Lp;function lv(){return Lp||(Lp=1,Ec.exports=av()),Ec.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function uv(){if(Ip)return In;Ip=1;var s=qf(),e=lv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function y(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,u){if(i===null||typeof i>"u"||y(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,o,u,d,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);S[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);S[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);S[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,u){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ie=!1;function Z(t,i){if(!t||Ie)return"";Ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){u=J}t.call(i.prototype)}else{try{throw Error()}catch(J){u=J}t()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var d=J.stack.split(`
`),h=u.stack.split(`
`),M=d.length-1,L=h.length-1;1<=M&&0<=L&&d[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(d[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||d[M]!==h[L]){var F=`
`+d[M].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=M&&0<=L);break}}}finally{Ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function ue(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case z:return"Portal";case C:return"Profiler";case j:return"StrictMode";case K:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ue(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Qe(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ue(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function Dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function xn(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){dt(t,i);var o=Te(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Rt(t,i,o){(i!=="number"||Dt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Xe=Array.isArray;function b(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Xe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Te(o)}}function pe(t,i){var o=Te(i.value),u=Te(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function ge(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ce(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ce(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){ze.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function $e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=$e(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,re=null,de=null;function be(t){if(t=So(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ma(i),Ae(t.stateNode,t.type,i))}}function Pe(t){re?de?de.push(t):de=[t]:re=t}function rt(){if(re){var t=re,i=de;if(de=re=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function It(t,i){return t(i)}function $t(){}var vt=!1;function Rn(t,i,o){if(vt)return t(i,o);vt=!0;try{return It(t,i,o)}finally{vt=!1,(re!==null||de!==null)&&($t(),rt())}}function Sn(t,i){var o=t.stateNode;if(o===null)return null;var u=ma(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ts=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){ts=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{ts=!1}function Mi(t,i,o,u,d,h,M,L,F){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(_e){this.onError(_e)}}var Ei=!1,Er=null,Tr=!1,ji=null,qo={onError:function(t){Ei=!0,Er=t}};function ns(t,i,o,u,d,h,M,L,F){Ei=!1,Er=null,Mi.apply(qo,arguments)}function $o(t,i,o,u,d,h,M,L,F){if(ns.apply(this,arguments),Ei){if(Ei){var J=Er;Ei=!1,Er=null}else throw Error(n(198));Tr||(Tr=!0,ji=J)}}function fi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ko(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Zo(t){if(fi(t)!==t)throw Error(n(188))}function Wl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Zo(d),t;if(h===u)return Zo(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=h;else{for(var M=!1,L=d.child;L;){if(L===o){M=!0,o=d,u=h;break}if(L===u){M=!0,u=d,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,u=d;break}if(L===u){M=!0,u=h,o=d;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Qo(t){return t=Wl(t),t!==null?Jo(t):null}function Jo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Jo(t);if(i!==null)return i;t=t.sibling}return null}var A=e.unstable_scheduleCallback,W=e.unstable_cancelCallback,ee=e.unstable_shouldYield,te=e.unstable_requestPaint,H=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Le=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,et=e.unstable_LowPriority,tt=e.unstable_IdlePriority,je=null,st=null;function yt(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:qe,Ft=Math.log,_t=Math.LN2;function qe(t){return t>>>=0,t===0?32:31-(Ft(t)/_t|0)|0}var Vt=64,mt=4194304;function on(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~d;L!==0?u=on(L):(h&=M,h!==0&&(u=on(h)))}else M=o&~d,M!==0?u=on(M):h!==0&&(u=on(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Mt(i),d=1<<o,u|=t[o],i&=~d;return u}function yn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Mt(h),L=1<<M,F=d[M];F===-1?((L&o)===0||(L&u)!==0)&&(d[M]=yn(L,i)):F<=i&&(t.expiredLanes|=L),h&=~L}}function Pt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mn(){var t=Vt;return Vt<<=1,(Vt&4194240)===0&&(Vt=64),t}function cn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Xt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=o}function fn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Mt(o),h=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~h}}function Ar(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Mt(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var ht=0;function ad(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ld,Xl,ud,cd,fd,jl=!1,ea=[],Yi=null,qi=null,$i=null,io=new Map,ro=new Map,Ki=[],Ag="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(t,i,o,u,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:h,targetContainers:[d]},i!==null&&(i=So(i),i!==null&&Xl(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Rg(t,i,o,u,d){switch(i){case"focusin":return Yi=so(Yi,t,i,o,u,d),!0;case"dragenter":return qi=so(qi,t,i,o,u,d),!0;case"mouseover":return $i=so($i,t,i,o,u,d),!0;case"pointerover":var h=d.pointerId;return io.set(h,so(io.get(h)||null,t,i,o,u,d)),!0;case"gotpointercapture":return h=d.pointerId,ro.set(h,so(ro.get(h)||null,t,i,o,u,d)),!0}return!1}function hd(t){var i=Rr(t.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ko(o),i!==null){t.blockedOn=i,fd(t.priority,function(){ud(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ta(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);At=u,o.target.dispatchEvent(u),At=null}else return i=So(o),i!==null&&Xl(i),t.blockedOn=o,!1;i.shift()}return!0}function pd(t,i,o){ta(t)&&o.delete(i)}function Cg(){jl=!1,Yi!==null&&ta(Yi)&&(Yi=null),qi!==null&&ta(qi)&&(qi=null),$i!==null&&ta($i)&&($i=null),io.forEach(pd),ro.forEach(pd)}function oo(t,i){t.blockedOn===i&&(t.blockedOn=null,jl||(jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cg)))}function ao(t){function i(d){return oo(d,t)}if(0<ea.length){oo(ea[0],t);for(var o=1;o<ea.length;o++){var u=ea[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Yi!==null&&oo(Yi,t),qi!==null&&oo(qi,t),$i!==null&&oo($i,t),io.forEach(i),ro.forEach(i),o=0;o<Ki.length;o++)u=Ki[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)hd(o),o.blockedOn===null&&Ki.shift()}var is=P.ReactCurrentBatchConfig,na=!0;function Pg(t,i,o,u){var d=ht,h=is.transition;is.transition=null;try{ht=1,Yl(t,i,o,u)}finally{ht=d,is.transition=h}}function bg(t,i,o,u){var d=ht,h=is.transition;is.transition=null;try{ht=4,Yl(t,i,o,u)}finally{ht=d,is.transition=h}}function Yl(t,i,o,u){if(na){var d=ql(t,i,o,u);if(d===null)fu(t,i,u,ia,o),dd(t,u);else if(Rg(d,t,i,o,u))u.stopPropagation();else if(dd(t,u),i&4&&-1<Ag.indexOf(t)){for(;d!==null;){var h=So(d);if(h!==null&&ld(h),h=ql(t,i,o,u),h===null&&fu(t,i,u,ia,o),h===d)break;d=h}d!==null&&u.stopPropagation()}else fu(t,i,u,null,o)}}var ia=null;function ql(t,i,o,u){if(ia=null,t=G(u),t=Rr(t),t!==null)if(i=fi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ko(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ia=t,null}function md(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case Le:return 4;case Fe:case et:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Zi=null,$l=null,ra=null;function gd(){if(ra)return ra;var t,i=$l,o=i.length,u,d="value"in Zi?Zi.value:Zi.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(u=1;u<=M&&i[o-u]===d[h-u];u++);return ra=d.slice(t,1<u?1-u:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function _d(){return!1}function On(t){function i(o,u,d,h,M){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?oa:_d,this.isPropagationStopped=_d,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=On(rs),lo=se({},rs,{view:0,detail:0}),Dg=On(lo),Zl,Ql,uo,aa=se({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Zl=t.screenX-uo.screenX,Ql=t.screenY-uo.screenY):Ql=Zl=0,uo=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),vd=On(aa),Lg=se({},aa,{dataTransfer:0}),Ig=On(Lg),Ug=se({},lo,{relatedTarget:0}),Jl=On(Ug),Ng=se({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Fg=On(Ng),Og=se({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zg=On(Og),Bg=se({},rs,{data:0}),xd=On(Bg),kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Vg[t])?!!i[t]:!1}function eu(){return Gg}var Wg=se({},lo,{key:function(t){if(t.key){var i=kg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xg=On(Wg),jg=se({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=On(jg),Yg=se({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),qg=On(Yg),$g=se({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=On($g),Zg=se({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=On(Zg),Jg=[9,13,27,32],tu=f&&"CompositionEvent"in window,co=null;f&&"documentMode"in document&&(co=document.documentMode);var e_=f&&"TextEvent"in window&&!co,yd=f&&(!tu||co&&8<co&&11>=co),Md=" ",Ed=!1;function Td(t,i){switch(t){case"keyup":return Jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function t_(t,i){switch(t){case"compositionend":return wd(i);case"keypress":return i.which!==32?null:(Ed=!0,Md);case"textInput":return t=i.data,t===Md&&Ed?null:t;default:return null}}function n_(t,i){if(ss)return t==="compositionend"||!tu&&Td(t,i)?(t=gd(),ra=$l=Zi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yd&&i.locale!=="ko"?null:i.data;default:return null}}var i_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!i_[t.type]:i==="textarea"}function Rd(t,i,o,u){Pe(u),i=da(i,"onChange"),0<i.length&&(o=new Kl("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var fo=null,ho=null;function r_(t){Xd(t,0)}function la(t){var i=cs(t);if(pt(i))return t}function s_(t,i){if(t==="change")return i}var Cd=!1;if(f){var nu;if(f){var iu="oninput"in document;if(!iu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),iu=typeof Pd.oninput=="function"}nu=iu}else nu=!1;Cd=nu&&(!document.documentMode||9<document.documentMode)}function bd(){fo&&(fo.detachEvent("onpropertychange",Dd),ho=fo=null)}function Dd(t){if(t.propertyName==="value"&&la(ho)){var i=[];Rd(i,ho,t,G(t)),Rn(r_,i)}}function o_(t,i,o){t==="focusin"?(bd(),fo=i,ho=o,fo.attachEvent("onpropertychange",Dd)):t==="focusout"&&bd()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return la(ho)}function l_(t,i){if(t==="click")return la(i)}function u_(t,i){if(t==="input"||t==="change")return la(i)}function c_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:c_;function po(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!ei(t[d],i[d]))return!1}return!0}function Ld(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,i){var o=Ld(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ld(o)}}function Ud(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ud(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Nd(){for(var t=window,i=Dt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Dt(t.document)}return i}function ru(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function f_(t){var i=Nd(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ud(o.ownerDocument.documentElement,o)){if(u!==null&&ru(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(u.start,d);u=u.end===void 0?h:Math.min(u.end,d),!t.extend&&h>u&&(d=u,u=h,h=d),d=Id(o,h);var M=Id(o,u);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>u?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d_=f&&"documentMode"in document&&11>=document.documentMode,os=null,su=null,mo=null,ou=!1;function Fd(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ou||os==null||os!==Dt(u)||(u=os,"selectionStart"in u&&ru(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),mo&&po(mo,u)||(mo=u,u=da(su,"onSelect"),0<u.length&&(i=new Kl("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=os)))}function ua(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},au={},Od={};f&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ca(t){if(au[t])return au[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Od)return au[t]=i[o];return t}var zd=ca("animationend"),Bd=ca("animationiteration"),kd=ca("animationstart"),Hd=ca("transitionend"),Vd=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Vd.set(t,i),l(i,[t])}for(var lu=0;lu<Gd.length;lu++){var uu=Gd[lu],h_=uu.toLowerCase(),p_=uu[0].toUpperCase()+uu.slice(1);Qi(h_,"on"+p_)}Qi(zd,"onAnimationEnd"),Qi(Bd,"onAnimationIteration"),Qi(kd,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Hd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m_=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Wd(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,$o(u,i,void 0,t),t.currentTarget=null}function Xd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var M=u.length-1;0<=M;M--){var L=u[M],F=L.instance,J=L.currentTarget;if(L=L.listener,F!==h&&d.isPropagationStopped())break e;Wd(d,L,J),h=F}else for(M=0;M<u.length;M++){if(L=u[M],F=L.instance,J=L.currentTarget,L=L.listener,F!==h&&d.isPropagationStopped())break e;Wd(d,L,J),h=F}}}if(Tr)throw t=ji,Tr=!1,ji=null,t}function Ut(t,i){var o=i[_u];o===void 0&&(o=i[_u]=new Set);var u=t+"__bubble";o.has(u)||(jd(i,t,2,!1),o.add(u))}function cu(t,i,o){var u=0;i&&(u|=4),jd(o,t,u,i)}var fa="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[fa]){t[fa]=!0,r.forEach(function(o){o!=="selectionchange"&&(m_.has(o)||cu(o,!1,t),cu(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fa]||(i[fa]=!0,cu("selectionchange",!1,i))}}function jd(t,i,o,u){switch(md(i)){case 1:var d=Pg;break;case 4:d=bg;break;default:d=Yl}o=d.bind(null,i,o,t),d=void 0,!ts||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function fu(t,i,o,u,d){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var L=u.stateNode.containerInfo;if(L===d||L.nodeType===8&&L.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var F=M.tag;if((F===3||F===4)&&(F=M.stateNode.containerInfo,F===d||F.nodeType===8&&F.parentNode===d))return;M=M.return}for(;L!==null;){if(M=Rr(L),M===null)return;if(F=M.tag,F===5||F===6){u=h=M;continue e}L=L.parentNode}}u=u.return}Rn(function(){var J=h,_e=G(o),xe=[];e:{var me=Vd.get(t);if(me!==void 0){var De=Kl,ke=t;switch(t){case"keypress":if(sa(o)===0)break e;case"keydown":case"keyup":De=Xg;break;case"focusin":ke="focus",De=Jl;break;case"focusout":ke="blur",De=Jl;break;case"beforeblur":case"afterblur":De=Jl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=Ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=qg;break;case zd:case Bd:case kd:De=Fg;break;case Hd:De=Kg;break;case"scroll":De=Dg;break;case"wheel":De=Qg;break;case"copy":case"cut":case"paste":De=zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Sd}var He=(i&4)!==0,jt=!He&&t==="scroll",Y=He?me!==null?me+"Capture":null:me;He=[];for(var V=J,q;V!==null;){q=V;var Ee=q.stateNode;if(q.tag===5&&Ee!==null&&(q=Ee,Y!==null&&(Ee=Sn(V,Y),Ee!=null&&He.push(vo(V,Ee,q)))),jt)break;V=V.return}0<He.length&&(me=new De(me,ke,null,o,_e),xe.push({event:me,listeners:He}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",me&&o!==At&&(ke=o.relatedTarget||o.fromElement)&&(Rr(ke)||ke[Ti]))break e;if((De||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,De?(ke=o.relatedTarget||o.toElement,De=J,ke=ke?Rr(ke):null,ke!==null&&(jt=fi(ke),ke!==jt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(De=null,ke=J),De!==ke)){if(He=vd,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=Sd,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),jt=De==null?me:cs(De),q=ke==null?me:cs(ke),me=new He(Ee,V+"leave",De,o,_e),me.target=jt,me.relatedTarget=q,Ee=null,Rr(_e)===J&&(He=new He(Y,V+"enter",ke,o,_e),He.target=q,He.relatedTarget=jt,Ee=He),jt=Ee,De&&ke)t:{for(He=De,Y=ke,V=0,q=He;q;q=ls(q))V++;for(q=0,Ee=Y;Ee;Ee=ls(Ee))q++;for(;0<V-q;)He=ls(He),V--;for(;0<q-V;)Y=ls(Y),q--;for(;V--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=ls(He),Y=ls(Y)}He=null}else He=null;De!==null&&Yd(xe,me,De,He,!1),ke!==null&&jt!==null&&Yd(xe,jt,ke,He,!0)}}e:{if(me=J?cs(J):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Ge=s_;else if(Ad(me))if(Cd)Ge=u_;else{Ge=a_;var Ke=o_}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=l_);if(Ge&&(Ge=Ge(t,J))){Rd(xe,Ge,o,_e);break e}Ke&&Ke(t,me,J),t==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Rt(me,"number",me.value)}switch(Ke=J?cs(J):window,t){case"focusin":(Ad(Ke)||Ke.contentEditable==="true")&&(os=Ke,su=J,mo=null);break;case"focusout":mo=su=os=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Fd(xe,o,_e);break;case"selectionchange":if(d_)break;case"keydown":case"keyup":Fd(xe,o,_e)}var Ze;if(tu)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ss?Td(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(yd&&o.locale!=="ko"&&(ss||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ss&&(Ze=gd()):(Zi=_e,$l="value"in Zi?Zi.value:Zi.textContent,ss=!0)),Ke=da(J,nt),0<Ke.length&&(nt=new xd(nt,t,null,o,_e),xe.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=wd(o),Ze!==null&&(nt.data=Ze)))),(Ze=e_?t_(t,o):n_(t,o))&&(J=da(J,"onBeforeInput"),0<J.length&&(_e=new xd("onBeforeInput","beforeinput",null,o,_e),xe.push({event:_e,listeners:J}),_e.data=Ze))}Xd(xe,i)})}function vo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function da(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Sn(t,o),h!=null&&u.unshift(vo(t,h,d)),h=Sn(t,i),h!=null&&u.push(vo(t,h,d))),t=t.return}return u}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yd(t,i,o,u,d){for(var h=i._reactName,M=[];o!==null&&o!==u;){var L=o,F=L.alternate,J=L.stateNode;if(F!==null&&F===u)break;L.tag===5&&J!==null&&(L=J,d?(F=Sn(o,h),F!=null&&M.unshift(vo(o,F,L))):d||(F=Sn(o,h),F!=null&&M.push(vo(o,F,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var g_=/\r\n?/g,__=/\u0000|\uFFFD/g;function qd(t){return(typeof t=="string"?t:""+t).replace(g_,`
`).replace(__,"")}function ha(t,i,o){if(i=qd(i),qd(t)!==i&&o)throw Error(n(425))}function pa(){}var du=null,hu=null;function pu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,v_=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,x_=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(t){return $d.resolve(null).then(t).catch(S_)}:mu;function S_(t){setTimeout(function(){throw t})}function gu(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),ao(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);ao(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Kd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),di="__reactFiber$"+us,xo="__reactProps$"+us,Ti="__reactContainer$"+us,_u="__reactEvents$"+us,y_="__reactListeners$"+us,M_="__reactHandles$"+us;function Rr(t){var i=t[di];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ti]||o[di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Kd(t);t!==null;){if(o=t[di])return o;t=Kd(t)}return i}t=o,o=t.parentNode}return null}function So(t){return t=t[di]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ma(t){return t[xo]||null}var vu=[],fs=-1;function er(t){return{current:t}}function Nt(t){0>fs||(t.current=vu[fs],vu[fs]=null,fs--)}function Lt(t,i){fs++,vu[fs]=t.current,t.current=i}var tr={},dn=er(tr),Cn=er(!1),Cr=tr;function ds(t,i){var o=t.type.contextTypes;if(!o)return tr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(t){return t=t.childContextTypes,t!=null}function ga(){Nt(Cn),Nt(dn)}function Zd(t,i,o){if(dn.current!==tr)throw Error(n(168));Lt(dn,i),Lt(Cn,o)}function Qd(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,ve(t)||"Unknown",d));return se({},o,u)}function _a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Cr=dn.current,Lt(dn,t),Lt(Cn,Cn.current),!0}function Jd(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=Qd(t,i,Cr),u.__reactInternalMemoizedMergedChildContext=t,Nt(Cn),Nt(dn),Lt(dn,t)):Nt(Cn),Lt(Cn,o)}var wi=null,va=!1,xu=!1;function eh(t){wi===null?wi=[t]:wi.push(t)}function E_(t){va=!0,eh(t)}function nr(){if(!xu&&wi!==null){xu=!0;var t=0,i=ht;try{var o=wi;for(ht=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}wi=null,va=!1}catch(d){throw wi!==null&&(wi=wi.slice(t+1)),A(Re,nr),d}finally{ht=i,xu=!1}}return null}var hs=[],ps=0,xa=null,Sa=0,Gn=[],Wn=0,Pr=null,Ai=1,Ri="";function br(t,i){hs[ps++]=Sa,hs[ps++]=xa,xa=t,Sa=i}function th(t,i,o){Gn[Wn++]=Ai,Gn[Wn++]=Ri,Gn[Wn++]=Pr,Pr=t;var u=Ai;t=Ri;var d=32-Mt(u)-1;u&=~(1<<d),o+=1;var h=32-Mt(i)+d;if(30<h){var M=d-d%5;h=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ai=1<<32-Mt(i)+d|o<<d|u,Ri=h+t}else Ai=1<<h|o<<d|u,Ri=t}function Su(t){t.return!==null&&(br(t,1),th(t,1,0))}function yu(t){for(;t===xa;)xa=hs[--ps],hs[ps]=null,Sa=hs[--ps],hs[ps]=null;for(;t===Pr;)Pr=Gn[--Wn],Gn[Wn]=null,Ri=Gn[--Wn],Gn[Wn]=null,Ai=Gn[--Wn],Gn[Wn]=null}var zn=null,Bn=null,Ot=!1,ti=null;function nh(t,i){var o=qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function ih(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Bn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=qn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,zn=t,Bn=null,!0):!1;default:return!1}}function Mu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eu(t){if(Ot){var i=Bn;if(i){var o=i;if(!ih(t,i)){if(Mu(t))throw Error(n(418));i=Ji(o.nextSibling);var u=zn;i&&ih(t,i)?nh(u,o):(t.flags=t.flags&-4097|2,Ot=!1,zn=t)}}else{if(Mu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,zn=t}}}function rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function ya(t){if(t!==zn)return!1;if(!Ot)return rh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!pu(t.type,t.memoizedProps)),i&&(i=Bn)){if(Mu(t))throw sh(),Error(n(418));for(;i;)nh(t,i),i=Ji(i.nextSibling)}if(rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Bn=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=zn?Ji(t.stateNode.nextSibling):null;return!0}function sh(){for(var t=Bn;t;)t=Ji(t.nextSibling)}function ms(){Bn=zn=null,Ot=!1}function Tu(t){ti===null?ti=[t]:ti.push(t)}var T_=P.ReactCurrentBatchConfig;function yo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=d.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function oh(t){var i=t._init;return i(t._payload)}function ah(t){function i(Y,V){if(t){var q=Y.deletions;q===null?(Y.deletions=[V],Y.flags|=16):q.push(V)}}function o(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function u(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=cr(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,q){return Y.index=q,t?(q=Y.alternate,q!==null?(q=q.index,q<V?(Y.flags|=2,V):q):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,V,q,Ee){return V===null||V.tag!==6?(V=mc(q,Y.mode,Ee),V.return=Y,V):(V=d(V,q),V.return=Y,V)}function F(Y,V,q,Ee){var Ge=q.type;return Ge===N?_e(Y,V,q.props.children,Ee,q.key):V!==null&&(V.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===oe&&oh(Ge)===V.type)?(Ee=d(V,q.props),Ee.ref=yo(Y,V,q),Ee.return=Y,Ee):(Ee=ja(q.type,q.key,q.props,null,Y.mode,Ee),Ee.ref=yo(Y,V,q),Ee.return=Y,Ee)}function J(Y,V,q,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==q.containerInfo||V.stateNode.implementation!==q.implementation?(V=gc(q,Y.mode,Ee),V.return=Y,V):(V=d(V,q.children||[]),V.return=Y,V)}function _e(Y,V,q,Ee,Ge){return V===null||V.tag!==7?(V=zr(q,Y.mode,Ee,Ge),V.return=Y,V):(V=d(V,q),V.return=Y,V)}function xe(Y,V,q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=mc(""+V,Y.mode,q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case X:return q=ja(V.type,V.key,V.props,null,Y.mode,q),q.ref=yo(Y,null,V),q.return=Y,q;case z:return V=gc(V,Y.mode,q),V.return=Y,V;case oe:var Ee=V._init;return xe(Y,Ee(V._payload),q)}if(Xe(V)||ae(V))return V=zr(V,Y.mode,q,null),V.return=Y,V;Ma(Y,V)}return null}function me(Y,V,q,Ee){var Ge=V!==null?V.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return Ge!==null?null:L(Y,V,""+q,Ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case X:return q.key===Ge?F(Y,V,q,Ee):null;case z:return q.key===Ge?J(Y,V,q,Ee):null;case oe:return Ge=q._init,me(Y,V,Ge(q._payload),Ee)}if(Xe(q)||ae(q))return Ge!==null?null:_e(Y,V,q,Ee,null);Ma(Y,q)}return null}function De(Y,V,q,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(q)||null,L(V,Y,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case X:return Y=Y.get(Ee.key===null?q:Ee.key)||null,F(V,Y,Ee,Ge);case z:return Y=Y.get(Ee.key===null?q:Ee.key)||null,J(V,Y,Ee,Ge);case oe:var Ke=Ee._init;return De(Y,V,q,Ke(Ee._payload),Ge)}if(Xe(Ee)||ae(Ee))return Y=Y.get(q)||null,_e(V,Y,Ee,Ge,null);Ma(V,Ee)}return null}function ke(Y,V,q,Ee){for(var Ge=null,Ke=null,Ze=V,nt=V=0,rn=null;Ze!==null&&nt<q.length;nt++){Ze.index>nt?(rn=Ze,Ze=null):rn=Ze.sibling;var Et=me(Y,Ze,q[nt],Ee);if(Et===null){Ze===null&&(Ze=rn);break}t&&Ze&&Et.alternate===null&&i(Y,Ze),V=h(Et,V,nt),Ke===null?Ge=Et:Ke.sibling=Et,Ke=Et,Ze=rn}if(nt===q.length)return o(Y,Ze),Ot&&br(Y,nt),Ge;if(Ze===null){for(;nt<q.length;nt++)Ze=xe(Y,q[nt],Ee),Ze!==null&&(V=h(Ze,V,nt),Ke===null?Ge=Ze:Ke.sibling=Ze,Ke=Ze);return Ot&&br(Y,nt),Ge}for(Ze=u(Y,Ze);nt<q.length;nt++)rn=De(Ze,Y,nt,q[nt],Ee),rn!==null&&(t&&rn.alternate!==null&&Ze.delete(rn.key===null?nt:rn.key),V=h(rn,V,nt),Ke===null?Ge=rn:Ke.sibling=rn,Ke=rn);return t&&Ze.forEach(function(fr){return i(Y,fr)}),Ot&&br(Y,nt),Ge}function He(Y,V,q,Ee){var Ge=ae(q);if(typeof Ge!="function")throw Error(n(150));if(q=Ge.call(q),q==null)throw Error(n(151));for(var Ke=Ge=null,Ze=V,nt=V=0,rn=null,Et=q.next();Ze!==null&&!Et.done;nt++,Et=q.next()){Ze.index>nt?(rn=Ze,Ze=null):rn=Ze.sibling;var fr=me(Y,Ze,Et.value,Ee);if(fr===null){Ze===null&&(Ze=rn);break}t&&Ze&&fr.alternate===null&&i(Y,Ze),V=h(fr,V,nt),Ke===null?Ge=fr:Ke.sibling=fr,Ke=fr,Ze=rn}if(Et.done)return o(Y,Ze),Ot&&br(Y,nt),Ge;if(Ze===null){for(;!Et.done;nt++,Et=q.next())Et=xe(Y,Et.value,Ee),Et!==null&&(V=h(Et,V,nt),Ke===null?Ge=Et:Ke.sibling=Et,Ke=Et);return Ot&&br(Y,nt),Ge}for(Ze=u(Y,Ze);!Et.done;nt++,Et=q.next())Et=De(Ze,Y,nt,Et.value,Ee),Et!==null&&(t&&Et.alternate!==null&&Ze.delete(Et.key===null?nt:Et.key),V=h(Et,V,nt),Ke===null?Ge=Et:Ke.sibling=Et,Ke=Et);return t&&Ze.forEach(function(iv){return i(Y,iv)}),Ot&&br(Y,nt),Ge}function jt(Y,V,q,Ee){if(typeof q=="object"&&q!==null&&q.type===N&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case X:e:{for(var Ge=q.key,Ke=V;Ke!==null;){if(Ke.key===Ge){if(Ge=q.type,Ge===N){if(Ke.tag===7){o(Y,Ke.sibling),V=d(Ke,q.props.children),V.return=Y,Y=V;break e}}else if(Ke.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===oe&&oh(Ge)===Ke.type){o(Y,Ke.sibling),V=d(Ke,q.props),V.ref=yo(Y,Ke,q),V.return=Y,Y=V;break e}o(Y,Ke);break}else i(Y,Ke);Ke=Ke.sibling}q.type===N?(V=zr(q.props.children,Y.mode,Ee,q.key),V.return=Y,Y=V):(Ee=ja(q.type,q.key,q.props,null,Y.mode,Ee),Ee.ref=yo(Y,V,q),Ee.return=Y,Y=Ee)}return M(Y);case z:e:{for(Ke=q.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===q.containerInfo&&V.stateNode.implementation===q.implementation){o(Y,V.sibling),V=d(V,q.children||[]),V.return=Y,Y=V;break e}else{o(Y,V);break}else i(Y,V);V=V.sibling}V=gc(q,Y.mode,Ee),V.return=Y,Y=V}return M(Y);case oe:return Ke=q._init,jt(Y,V,Ke(q._payload),Ee)}if(Xe(q))return ke(Y,V,q,Ee);if(ae(q))return He(Y,V,q,Ee);Ma(Y,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,V!==null&&V.tag===6?(o(Y,V.sibling),V=d(V,q),V.return=Y,Y=V):(o(Y,V),V=mc(q,Y.mode,Ee),V.return=Y,Y=V),M(Y)):o(Y,V)}return jt}var gs=ah(!0),lh=ah(!1),Ea=er(null),Ta=null,_s=null,wu=null;function Au(){wu=_s=Ta=null}function Ru(t){var i=Ea.current;Nt(Ea),t._currentValue=i}function Cu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function vs(t,i){Ta=t,wu=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(bn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(wu!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(Ta===null)throw Error(n(308));_s=t,Ta.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Dr=null;function Pu(t){Dr===null?Dr=[t]:Dr.push(t)}function uh(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Pu(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ci(t,u)}function Ci(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ch(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(xt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ci(t,o)}return d=u.interleaved,d===null?(i.next=i,Pu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ci(t,o)}function wa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Ar(t,o)}}function fh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Aa(t,i,o,u){var d=t.updateQueue;ir=!1;var h=d.firstBaseUpdate,M=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var F=L,J=F.next;F.next=null,M===null?h=J:M.next=J,M=F;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=J:L.next=J,_e.lastBaseUpdate=F))}if(h!==null){var xe=d.baseState;M=0,_e=J=F=null,L=h;do{var me=L.lane,De=L.eventTime;if((u&me)===me){_e!==null&&(_e=_e.next={eventTime:De,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var ke=t,He=L;switch(me=i,De=o,He.tag){case 1:if(ke=He.payload,typeof ke=="function"){xe=ke.call(De,xe,me);break e}xe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=He.payload,me=typeof ke=="function"?ke.call(De,xe,me):ke,me==null)break e;xe=se({},xe,me);break e;case 2:ir=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,me=d.effects,me===null?d.effects=[L]:me.push(L))}else De={eventTime:De,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(J=_e=De,F=xe):_e=_e.next=De,M|=me;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;me=L,L=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(_e===null&&(F=xe),d.baseState=F,d.firstBaseUpdate=J,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Ur|=M,t.lanes=M,t.memoizedState=xe}}function dh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var Mo={},hi=er(Mo),Eo=er(Mo),To=er(Mo);function Lr(t){if(t===Mo)throw Error(n(174));return t}function Du(t,i){switch(Lt(To,i),Lt(Eo,t),Lt(hi,Mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}Nt(hi),Lt(hi,i)}function xs(){Nt(hi),Nt(Eo),Nt(To)}function hh(t){Lr(To.current);var i=Lr(hi.current),o=Ve(i,t.type);i!==o&&(Lt(Eo,t),Lt(hi,o))}function Lu(t){Eo.current===t&&(Nt(hi),Nt(Eo))}var Bt=er(0);function Ra(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Iu=[];function Uu(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Ca=P.ReactCurrentDispatcher,Nu=P.ReactCurrentBatchConfig,Ir=0,kt=null,Kt=null,tn=null,Pa=!1,wo=!1,Ao=0,w_=0;function hn(){throw Error(n(321))}function Fu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ei(t[o],i[o]))return!1;return!0}function Ou(t,i,o,u,d,h){if(Ir=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?P_:b_,t=o(u,d),wo){h=0;do{if(wo=!1,Ao=0,25<=h)throw Error(n(301));h+=1,tn=Kt=null,i.updateQueue=null,Ca.current=D_,t=o(u,d)}while(wo)}if(Ca.current=La,i=Kt!==null&&Kt.next!==null,Ir=0,tn=Kt=kt=null,Pa=!1,i)throw Error(n(300));return t}function zu(){var t=Ao!==0;return Ao=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?kt.memoizedState=tn=t:tn=tn.next=t,tn}function jn(){if(Kt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=tn===null?kt.memoizedState:tn.next;if(i!==null)tn=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},tn===null?kt.memoizedState=tn=t:tn=tn.next=t}return tn}function Ro(t,i){return typeof i=="function"?i(t):i}function Bu(t){var i=jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Kt,d=u.baseQueue,h=o.pending;if(h!==null){if(d!==null){var M=d.next;d.next=h.next,h.next=M}u.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,u=u.baseState;var L=M=null,F=null,J=h;do{var _e=J.lane;if((Ir&_e)===_e)F!==null&&(F=F.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:t(u,J.action);else{var xe={lane:_e,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};F===null?(L=F=xe,M=u):F=F.next=xe,kt.lanes|=_e,Ur|=_e}J=J.next}while(J!==null&&J!==h);F===null?M=u:F.next=L,ei(u,i.memoizedState)||(bn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=F,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do h=d.lane,kt.lanes|=h,Ur|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ku(t){var i=jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do h=t(h,M.action),M=M.next;while(M!==d);ei(h,i.memoizedState)||(bn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,u]}function ph(){}function mh(t,i){var o=kt,u=jn(),d=i(),h=!ei(u.memoizedState,d);if(h&&(u.memoizedState=d,bn=!0),u=u.queue,Hu(vh.bind(null,o,u,t),[t]),u.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,Co(9,_h.bind(null,o,u,d,i),void 0,null),nn===null)throw Error(n(349));(Ir&30)!==0||gh(o,i,d)}return d}function gh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function _h(t,i,o,u){i.value=o,i.getSnapshot=u,xh(i)&&Sh(t)}function vh(t,i,o){return o(function(){xh(i)&&Sh(t)})}function xh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ei(t,o)}catch{return!0}}function Sh(t){var i=Ci(t,1);i!==null&&si(i,t,1,-1)}function yh(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},i.queue=t,t=t.dispatch=C_.bind(null,kt,t),[i.memoizedState,t]}function Co(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Mh(){return jn().memoizedState}function ba(t,i,o,u){var d=pi();kt.flags|=t,d.memoizedState=Co(1|i,o,void 0,u===void 0?null:u)}function Da(t,i,o,u){var d=jn();u=u===void 0?null:u;var h=void 0;if(Kt!==null){var M=Kt.memoizedState;if(h=M.destroy,u!==null&&Fu(u,M.deps)){d.memoizedState=Co(i,o,h,u);return}}kt.flags|=t,d.memoizedState=Co(1|i,o,h,u)}function Eh(t,i){return ba(8390656,8,t,i)}function Hu(t,i){return Da(2048,8,t,i)}function Th(t,i){return Da(4,2,t,i)}function wh(t,i){return Da(4,4,t,i)}function Ah(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Rh(t,i,o){return o=o!=null?o.concat([t]):null,Da(4,4,Ah.bind(null,i,t),o)}function Vu(){}function Ch(t,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Fu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Ph(t,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Fu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function bh(t,i,o){return(Ir&21)===0?(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=o):(ei(o,i)||(o=Mn(),kt.lanes|=o,Ur|=o,t.baseState=!0),i)}function A_(t,i){var o=ht;ht=o!==0&&4>o?o:4,t(!0);var u=Nu.transition;Nu.transition={};try{t(!1),i()}finally{ht=o,Nu.transition=u}}function Dh(){return jn().memoizedState}function R_(t,i,o){var u=lr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Lh(t))Ih(i,o);else if(o=uh(t,i,o,u),o!==null){var d=Tn();si(o,t,u,d),Uh(o,i,u)}}function C_(t,i,o){var u=lr(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Lh(t))Ih(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(d.hasEagerState=!0,d.eagerState=L,ei(L,M)){var F=i.interleaved;F===null?(d.next=d,Pu(i)):(d.next=F.next,F.next=d),i.interleaved=d;return}}catch{}finally{}o=uh(t,i,d,u),o!==null&&(d=Tn(),si(o,t,u,d),Uh(o,i,u))}}function Lh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function Ih(t,i){wo=Pa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Uh(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Ar(t,o)}}var La={readContext:Xn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},P_={readContext:Xn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:Eh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ba(4194308,4,Ah.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ba(4194308,4,t,i)},useInsertionEffect:function(t,i){return ba(4,2,t,i)},useMemo:function(t,i){var o=pi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=pi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=R_.bind(null,kt,t),[u.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:yh,useDebugValue:Vu,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=yh(!1),i=t[0];return t=A_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=kt,d=pi();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));(Ir&30)!==0||gh(u,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Eh(vh.bind(null,u,h,t),[t]),u.flags|=2048,Co(9,_h.bind(null,u,h,o,i),void 0,null),o},useId:function(){var t=pi(),i=nn.identifierPrefix;if(Ot){var o=Ri,u=Ai;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ao++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=w_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},b_={readContext:Xn,useCallback:Ch,useContext:Xn,useEffect:Hu,useImperativeHandle:Rh,useInsertionEffect:Th,useLayoutEffect:wh,useMemo:Ph,useReducer:Bu,useRef:Mh,useState:function(){return Bu(Ro)},useDebugValue:Vu,useDeferredValue:function(t){var i=jn();return bh(i,Kt.memoizedState,t)},useTransition:function(){var t=Bu(Ro)[0],i=jn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Dh,unstable_isNewReconciler:!1},D_={readContext:Xn,useCallback:Ch,useContext:Xn,useEffect:Hu,useImperativeHandle:Rh,useInsertionEffect:Th,useLayoutEffect:wh,useMemo:Ph,useReducer:ku,useRef:Mh,useState:function(){return ku(Ro)},useDebugValue:Vu,useDeferredValue:function(t){var i=jn();return Kt===null?i.memoizedState=t:bh(i,Kt.memoizedState,t)},useTransition:function(){var t=ku(Ro)[0],i=jn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Dh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Gu(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ia={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=Tn(),d=lr(t),h=Pi(u,d);h.payload=i,o!=null&&(h.callback=o),i=rr(t,h,d),i!==null&&(si(i,t,d,u),wa(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=Tn(),d=lr(t),h=Pi(u,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=rr(t,h,d),i!==null&&(si(i,t,d,u),wa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),u=lr(t),d=Pi(o,u);d.tag=2,i!=null&&(d.callback=i),i=rr(t,d,u),i!==null&&(si(i,t,u,o),wa(i,t,u))}};function Nh(t,i,o,u,d,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,h,M):i.prototype&&i.prototype.isPureReactComponent?!po(o,u)||!po(d,h):!0}function Fh(t,i,o){var u=!1,d=tr,h=i.contextType;return typeof h=="object"&&h!==null?h=Xn(h):(d=Pn(i)?Cr:dn.current,u=i.contextTypes,h=(u=u!=null)?ds(t,d):tr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ia,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Oh(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Ia.enqueueReplaceState(i,i.state,null)}function Wu(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},bu(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Xn(h):(h=Pn(i)?Cr:dn.current,d.context=ds(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Gu(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ia.enqueueReplaceState(d,d.state,null),Aa(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,i){try{var o="",u=i;do o+=ue(u),u=u.return;while(u);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Xu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function ju(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var L_=typeof WeakMap=="function"?WeakMap:Map;function zh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ka||(ka=!0,ac=u),ju(t,i)},o}function Bh(t,i,o){o=Pi(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){ju(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){ju(t,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function kh(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new L_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=j_.bind(null,t,i,o),i.then(t,t))}function Hh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Vh(t,i,o,u,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var I_=P.ReactCurrentOwner,bn=!1;function En(t,i,o,u){i.child=t===null?lh(i,null,o,u):gs(i,t.child,o,u)}function Gh(t,i,o,u,d){o=o.render;var h=i.ref;return vs(i,d),u=Ou(t,i,o,u,h,d),o=zu(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,bi(t,i,d)):(Ot&&o&&Su(i),i.flags|=1,En(t,i,u,d),i.child)}function Wh(t,i,o,u,d){if(t===null){var h=o.type;return typeof h=="function"&&!pc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Xh(t,i,h,u,d)):(t=ja(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:po,o(M,u)&&t.ref===i.ref)return bi(t,i,d)}return i.flags|=1,t=cr(h,u),t.ref=i.ref,t.return=i,i.child=t}function Xh(t,i,o,u,d){if(t!==null){var h=t.memoizedProps;if(po(h,u)&&t.ref===i.ref)if(bn=!1,i.pendingProps=u=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,bi(t,i,d)}return Yu(t,i,o,u,d)}function jh(t,i,o){var u=i.pendingProps,d=u.children,h=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Ms,kn),kn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(Ms,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:o,Lt(Ms,kn),kn|=u}else h!==null?(u=h.baseLanes|o,i.memoizedState=null):u=o,Lt(Ms,kn),kn|=u;return En(t,i,d,o),i.child}function Yh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Yu(t,i,o,u,d){var h=Pn(o)?Cr:dn.current;return h=ds(i,h),vs(i,d),o=Ou(t,i,o,u,h,d),u=zu(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,bi(t,i,d)):(Ot&&u&&Su(i),i.flags|=1,En(t,i,o,d),i.child)}function qh(t,i,o,u,d){if(Pn(o)){var h=!0;_a(i)}else h=!1;if(vs(i,d),i.stateNode===null)Na(t,i),Fh(i,o,u),Wu(i,o,u,d),u=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var F=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=Xn(J):(J=Pn(o)?Cr:dn.current,J=ds(i,J));var _e=o.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==u||F!==J)&&Oh(i,M,u,J),ir=!1;var me=i.memoizedState;M.state=me,Aa(i,u,M,d),F=i.memoizedState,L!==u||me!==F||Cn.current||ir?(typeof _e=="function"&&(Gu(i,o,_e,u),F=i.memoizedState),(L=ir||Nh(i,o,L,u,me,F,J))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=F),M.props=u,M.state=F,M.context=J,u=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,ch(t,i),L=i.memoizedProps,J=i.type===i.elementType?L:ni(i.type,L),M.props=J,xe=i.pendingProps,me=M.context,F=o.contextType,typeof F=="object"&&F!==null?F=Xn(F):(F=Pn(o)?Cr:dn.current,F=ds(i,F));var De=o.getDerivedStateFromProps;(_e=typeof De=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==xe||me!==F)&&Oh(i,M,u,F),ir=!1,me=i.memoizedState,M.state=me,Aa(i,u,M,d);var ke=i.memoizedState;L!==xe||me!==ke||Cn.current||ir?(typeof De=="function"&&(Gu(i,o,De,u),ke=i.memoizedState),(J=ir||Nh(i,o,J,u,me,ke,F)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,ke,F),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,ke,F)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ke),M.props=u,M.state=ke,M.context=F,u=J):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),u=!1)}return qu(t,i,o,u,h,d)}function qu(t,i,o,u,d,h){Yh(t,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&Jd(i,o,!1),bi(t,i,h);u=i.stateNode,I_.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&M?(i.child=gs(i,t.child,null,h),i.child=gs(i,null,L,h)):En(t,i,L,h),i.memoizedState=u.state,d&&Jd(i,o,!0),i.child}function $h(t){var i=t.stateNode;i.pendingContext?Zd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Zd(t,i.context,!1),Du(t,i.containerInfo)}function Kh(t,i,o,u,d){return ms(),Tu(d),i.flags|=256,En(t,i,o,u),i.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zh(t,i,o){var u=i.pendingProps,d=Bt.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(d&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Lt(Bt,d&1),t===null)return Eu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,t=u.fallback,h?(u=i.mode,h=i.child,M={mode:"hidden",children:M},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ya(M,u,0,null),t=zr(t,u,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ku(o),i.memoizedState=$u,t):Zu(i,M));if(d=t.memoizedState,d!==null&&(L=d.dehydrated,L!==null))return U_(t,i,M,u,L,d,o);if(h){h=u.fallback,M=i.mode,d=t.child,L=d.sibling;var F={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=F,i.deletions=null):(u=cr(d,F),u.subtreeFlags=d.subtreeFlags&14680064),L!==null?h=cr(L,h):(h=zr(h,M,o,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,M=t.child.memoizedState,M=M===null?Ku(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=$u,u}return h=t.child,t=h.sibling,u=cr(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function Zu(t,i){return i=Ya({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ua(t,i,o,u){return u!==null&&Tu(u),gs(i,t.child,null,o),t=Zu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function U_(t,i,o,u,d,h,M){if(o)return i.flags&256?(i.flags&=-257,u=Xu(Error(n(422))),Ua(t,i,M,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=u.fallback,d=i.mode,u=Ya({mode:"visible",children:u.children},d,0,null),h=zr(h,d,M,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&gs(i,t.child,null,M),i.child.memoizedState=Ku(M),i.memoizedState=$u,h);if((i.mode&1)===0)return Ua(t,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var L=u.dgst;return u=L,h=Error(n(419)),u=Xu(h,u,void 0),Ua(t,i,M,u)}if(L=(M&t.childLanes)!==0,bn||L){if(u=nn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Ci(t,d),si(u,t,d,-1))}return hc(),u=Xu(Error(n(421))),Ua(t,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Y_.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,Bn=Ji(d.nextSibling),zn=i,Ot=!0,ti=null,t!==null&&(Gn[Wn++]=Ai,Gn[Wn++]=Ri,Gn[Wn++]=Pr,Ai=t.id,Ri=t.overflow,Pr=i),i=Zu(i,u.children),i.flags|=4096,i)}function Qh(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Cu(t.return,i,o)}function Qu(t,i,o,u,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=o,h.tailMode=d)}function Jh(t,i,o){var u=i.pendingProps,d=u.revealOrder,h=u.tail;if(En(t,i,u.children,o),u=Bt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qh(t,o,i);else if(t.tag===19)Qh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Lt(Bt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ra(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Qu(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ra(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Qu(i,!0,o,null,h);break;case"together":Qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Na(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function bi(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ur|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=cr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=cr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function N_(t,i,o){switch(i.tag){case 3:$h(i),ms();break;case 5:hh(i);break;case 1:Pn(i.type)&&_a(i);break;case 4:Du(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Lt(Ea,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Lt(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Zh(t,i,o):(Lt(Bt,Bt.current&1),t=bi(t,i,o),t!==null?t.sibling:null);Lt(Bt,Bt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Jh(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(Bt,Bt.current),u)break;return null;case 22:case 23:return i.lanes=0,jh(t,i,o)}return bi(t,i,o)}var ep,Ju,tp,np;ep=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ju=function(){},tp=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,Lr(hi.current);var h=null;switch(o){case"input":d=O(t,d),u=O(t,u),h=[];break;case"select":d=se({},d,{value:void 0}),u=se({},u,{value:void 0}),h=[];break;case"textarea":d=T(t,d),u=T(t,u),h=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=pa)}ct(o,u);var M;o=null;for(J in d)if(!u.hasOwnProperty(J)&&d.hasOwnProperty(J)&&d[J]!=null)if(J==="style"){var L=d[J];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in u){var F=u[J];if(L=d!=null?d[J]:void 0,u.hasOwnProperty(J)&&F!==L&&(F!=null||L!=null))if(J==="style")if(L){for(M in L)!L.hasOwnProperty(M)||F&&F.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in F)F.hasOwnProperty(M)&&L[M]!==F[M]&&(o||(o={}),o[M]=F[M])}else o||(h||(h=[]),h.push(J,o)),o=F;else J==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(h=h||[]).push(J,F)):J==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(J,""+F):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(F!=null&&J==="onScroll"&&Ut("scroll",t),h||L===F||(h=[])):(h=h||[]).push(J,F))}o&&(h=h||[]).push("style",o);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},np=function(t,i,o,u){o!==u&&(i.flags|=4)};function Po(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function F_(t,i,o){var u=i.pendingProps;switch(yu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Pn(i.type)&&ga(),pn(i),null;case 3:return u=i.stateNode,xs(),Nt(Cn),Nt(dn),Uu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(ya(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(cc(ti),ti=null))),Ju(t,i),pn(i),null;case 5:Lu(i);var d=Lr(To.current);if(o=i.type,t!==null&&i.stateNode!=null)tp(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return pn(i),null}if(t=Lr(hi.current),ya(i)){u=i.stateNode,o=i.type;var h=i.memoizedProps;switch(u[di]=i,u[xo]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",u),Ut("close",u);break;case"iframe":case"object":case"embed":Ut("load",u);break;case"video":case"audio":for(d=0;d<go.length;d++)Ut(go[d],u);break;case"source":Ut("error",u);break;case"img":case"image":case"link":Ut("error",u),Ut("load",u);break;case"details":Ut("toggle",u);break;case"input":xn(u,h),Ut("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",u);break;case"textarea":$(u,h),Ut("invalid",u)}ct(o,h),d=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?u.textContent!==L&&(h.suppressHydrationWarning!==!0&&ha(u.textContent,L,t),d=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&ha(u.textContent,L,t),d=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ut("scroll",u)}switch(o){case"input":Ct(u),Ye(u,h,!0);break;case"textarea":Ct(u),ge(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=pa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ce(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=M.createElement(o,{is:u.is}):(t=M.createElement(o),o==="select"&&(M=t,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):t=M.createElementNS(t,o),t[di]=i,t[xo]=u,ep(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,u),o){case"dialog":Ut("cancel",t),Ut("close",t),d=u;break;case"iframe":case"object":case"embed":Ut("load",t),d=u;break;case"video":case"audio":for(d=0;d<go.length;d++)Ut(go[d],t);d=u;break;case"source":Ut("error",t),d=u;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),d=u;break;case"details":Ut("toggle",t),d=u;break;case"input":xn(t,u),d=O(t,u),Ut("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=se({},u,{value:void 0}),Ut("invalid",t);break;case"textarea":$(t,u),d=T(t,u),Ut("invalid",t);break;default:d=u}ct(o,d),L=d;for(h in L)if(L.hasOwnProperty(h)){var F=L[h];h==="style"?Je(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ne(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&lt(t,F):typeof F=="number"&&lt(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Ut("scroll",t):F!=null&&D(t,h,F,M))}switch(o){case"input":Ct(t),Ye(t,u,!1);break;case"textarea":Ct(t),ge(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Te(u.value));break;case"select":t.multiple=!!u.multiple,h=u.value,h!=null?b(t,!!u.multiple,h,!1):u.defaultValue!=null&&b(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=pa)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(t&&i.stateNode!=null)np(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Lr(To.current),Lr(hi.current),ya(i)){if(u=i.stateNode,o=i.memoizedProps,u[di]=i,(h=u.nodeValue!==o)&&(t=zn,t!==null))switch(t.tag){case 3:ha(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(u.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[di]=i,i.stateNode=u}return pn(i),null;case 13:if(Nt(Bt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sh(),ms(),i.flags|=98560,h=!1;else if(h=ya(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[di]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),h=!1}else ti!==null&&(cc(ti),ti=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):hc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return xs(),Ju(t,i),t===null&&_o(i.stateNode.containerInfo),pn(i),null;case 10:return Ru(i.type._context),pn(i),null;case 17:return Pn(i.type)&&ga(),pn(i),null;case 19:if(Nt(Bt),h=i.memoizedState,h===null)return pn(i),null;if(u=(i.flags&128)!==0,M=h.rendering,M===null)if(u)Po(h,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ra(t),M!==null){for(i.flags|=128,Po(h,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)h=o,t=u,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(Bt,Bt.current&1|2),i.child}t=t.sibling}h.tail!==null&&H()>Es&&(i.flags|=128,u=!0,Po(h,!1),i.lanes=4194304)}else{if(!u)if(t=Ra(M),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Po(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ot)return pn(i),null}else 2*H()-h.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,u=!0,Po(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=H(),i.sibling=null,o=Bt.current,Lt(Bt,u?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return dc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(kn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function O_(t,i){switch(yu(i),i.tag){case 1:return Pn(i.type)&&ga(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Nt(Cn),Nt(dn),Uu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Lu(i),null;case 13:if(Nt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(Bt),null;case 4:return xs(),null;case 10:return Ru(i.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var Fa=!1,mn=!1,z_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ys(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Gt(t,i,u)}else o.current=null}function ec(t,i,o){try{o()}catch(u){Gt(t,i,u)}}var ip=!1;function B_(t,i){if(du=na,t=Nd(),ru(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,F=-1,J=0,_e=0,xe=t,me=null;t:for(;;){for(var De;xe!==o||d!==0&&xe.nodeType!==3||(L=M+d),xe!==h||u!==0&&xe.nodeType!==3||(F=M+u),xe.nodeType===3&&(M+=xe.nodeValue.length),(De=xe.firstChild)!==null;)me=xe,xe=De;for(;;){if(xe===t)break t;if(me===o&&++J===d&&(L=M),me===h&&++_e===u&&(F=M),(De=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=De}o=L===-1||F===-1?null:{start:L,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(hu={focusedElem:t,selectionRange:o},na=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var He=ke.memoizedProps,jt=ke.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:ni(i.type,He),jt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Gt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ke=ip,ip=!1,ke}function bo(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&ec(i,o,h)}d=d.next}while(d!==u)}}function Oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function tc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function rp(t){var i=t.alternate;i!==null&&(t.alternate=null,rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[xo],delete i[_u],delete i[y_],delete i[M_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sp(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=pa));else if(u!==4&&(t=t.child,t!==null))for(nc(t,i,o),t=t.sibling;t!==null;)nc(t,i,o),t=t.sibling}function ic(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(ic(t,i,o),t=t.sibling;t!==null;)ic(t,i,o),t=t.sibling}var an=null,ii=!1;function sr(t,i,o){for(o=o.child;o!==null;)ap(t,i,o),o=o.sibling}function ap(t,i,o){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(je,o)}catch{}switch(o.tag){case 5:mn||ys(o,i);case 6:var u=an,d=ii;an=null,sr(t,i,o),an=u,ii=d,an!==null&&(ii?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(ii?(t=an,o=o.stateNode,t.nodeType===8?gu(t.parentNode,o):t.nodeType===1&&gu(t,o),ao(t)):gu(an,o.stateNode));break;case 4:u=an,d=ii,an=o.stateNode.containerInfo,ii=!0,sr(t,i,o),an=u,ii=d;break;case 0:case 11:case 14:case 15:if(!mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var h=d,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&ec(o,i,M),d=d.next}while(d!==u)}sr(t,i,o);break;case 1:if(!mn&&(ys(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(L){Gt(o,i,L)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(mn=(u=mn)||o.memoizedState!==null,sr(t,i,o),mn=u):sr(t,i,o);break;default:sr(t,i,o)}}function lp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new z_),i.forEach(function(u){var d=q_.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ri(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:an=L.stateNode,ii=!1;break e;case 3:an=L.stateNode.containerInfo,ii=!0;break e;case 4:an=L.stateNode.containerInfo,ii=!0;break e}L=L.return}if(an===null)throw Error(n(160));ap(h,M,d),an=null,ii=!1;var F=d.alternate;F!==null&&(F.return=null),d.return=null}catch(J){Gt(d,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)up(i,t),i=i.sibling}function up(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),mi(t),u&4){try{bo(3,t,t.return),Oa(3,t)}catch(He){Gt(t,t.return,He)}try{bo(5,t,t.return)}catch(He){Gt(t,t.return,He)}}break;case 1:ri(i,t),mi(t),u&512&&o!==null&&ys(o,o.return);break;case 5:if(ri(i,t),mi(t),u&512&&o!==null&&ys(o,o.return),t.flags&32){var d=t.stateNode;try{lt(d,"")}catch(He){Gt(t,t.return,He)}}if(u&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&dt(d,h),it(L,M);var J=it(L,h);for(M=0;M<F.length;M+=2){var _e=F[M],xe=F[M+1];_e==="style"?Je(d,xe):_e==="dangerouslySetInnerHTML"?Ne(d,xe):_e==="children"?lt(d,xe):D(d,_e,xe,J)}switch(L){case"input":ut(d,h);break;case"textarea":pe(d,h);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var De=h.value;De!=null?b(d,!!h.multiple,De,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(d,!!h.multiple,h.defaultValue,!0):b(d,!!h.multiple,h.multiple?[]:"",!1))}d[xo]=h}catch(He){Gt(t,t.return,He)}}break;case 6:if(ri(i,t),mi(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(He){Gt(t,t.return,He)}}break;case 3:if(ri(i,t),mi(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch(He){Gt(t,t.return,He)}break;case 4:ri(i,t),mi(t);break;case 13:ri(i,t),mi(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(oc=H())),u&4&&lp(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(mn=(J=mn)||_e,ri(i,t),mn=J):ri(i,t),mi(t),u&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!_e&&(t.mode&1)!==0)for(Oe=t,_e=t.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(me=Oe,De=me.child,me.tag){case 0:case 11:case 14:case 15:bo(4,me,me.return);break;case 1:ys(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(He){Gt(u,o,He)}}break;case 5:ys(me,me.return);break;case 22:if(me.memoizedState!==null){dp(xe);continue}}De!==null?(De.return=me,Oe=De):dp(xe)}_e=_e.sibling}e:for(_e=null,xe=t;;){if(xe.tag===5){if(_e===null){_e=xe;try{d=xe.stateNode,J?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=xe.stateNode,F=xe.memoizedProps.style,M=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=$e("display",M))}catch(He){Gt(t,t.return,He)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=J?"":xe.memoizedProps}catch(He){Gt(t,t.return,He)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ri(i,t),mi(t),u&4&&lp(t);break;case 21:break;default:ri(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(sp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(lt(d,""),u.flags&=-33);var h=op(t);ic(t,h,d);break;case 3:case 4:var M=u.stateNode.containerInfo,L=op(t);nc(t,L,M);break;default:throw Error(n(161))}}catch(F){Gt(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function k_(t,i,o){Oe=t,cp(t)}function cp(t,i,o){for(var u=(t.mode&1)!==0;Oe!==null;){var d=Oe,h=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Fa;if(!M){var L=d.alternate,F=L!==null&&L.memoizedState!==null||mn;L=Fa;var J=mn;if(Fa=M,(mn=F)&&!J)for(Oe=d;Oe!==null;)M=Oe,F=M.child,M.tag===22&&M.memoizedState!==null?hp(d):F!==null?(F.return=M,Oe=F):hp(d);for(;h!==null;)Oe=h,cp(h),h=h.sibling;Oe=d,Fa=L,mn=J}fp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Oe=h):fp(t)}}function fp(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Oa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ni(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&dh(i,h,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}dh(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var _e=J.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&ao(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}mn||i.flags&512&&tc(i)}catch(me){Gt(i,i.return,me)}}if(i===t){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function dp(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function hp(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Oa(4,i)}catch(F){Gt(i,o,F)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(F){Gt(i,d,F)}}var h=i.return;try{tc(i)}catch(F){Gt(i,h,F)}break;case 5:var M=i.return;try{tc(i)}catch(F){Gt(i,M,F)}}}catch(F){Gt(i,i.return,F)}if(i===t){Oe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Oe=L;break}Oe=i.return}}var H_=Math.ceil,za=P.ReactCurrentDispatcher,rc=P.ReactCurrentOwner,Yn=P.ReactCurrentBatchConfig,xt=0,nn=null,Yt=null,ln=0,kn=0,Ms=er(0),Zt=0,Do=null,Ur=0,Ba=0,sc=0,Lo=null,Dn=null,oc=0,Es=1/0,Di=null,ka=!1,ac=null,or=null,Ha=!1,ar=null,Va=0,Io=0,lc=null,Ga=-1,Wa=0;function Tn(){return(xt&6)!==0?H():Ga!==-1?Ga:Ga=H()}function lr(t){return(t.mode&1)===0?1:(xt&2)!==0&&ln!==0?ln&-ln:T_.transition!==null?(Wa===0&&(Wa=Mn()),Wa):(t=ht,t!==0||(t=window.event,t=t===void 0?16:md(t.type)),t)}function si(t,i,o,u){if(50<Io)throw Io=0,lc=null,Error(n(185));Xt(t,o,u),((xt&2)===0||t!==nn)&&(t===nn&&((xt&2)===0&&(Ba|=o),Zt===4&&ur(t,ln)),Ln(t,u),o===1&&xt===0&&(i.mode&1)===0&&(Es=H()+500,va&&nr()))}function Ln(t,i){var o=t.callbackNode;wr(t,i);var u=Jn(t,t===nn?ln:0);if(u===0)o!==null&&W(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&W(o),i===1)t.tag===0?E_(mp.bind(null,t)):eh(mp.bind(null,t)),x_(function(){(xt&6)===0&&nr()}),o=null;else{switch(ad(u)){case 1:o=Re;break;case 4:o=Le;break;case 16:o=Fe;break;case 536870912:o=tt;break;default:o=Fe}o=Ep(o,pp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function pp(t,i){if(Ga=-1,Wa=0,(xt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ts()&&t.callbackNode!==o)return null;var u=Jn(t,t===nn?ln:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=Xa(t,u);else{i=u;var d=xt;xt|=2;var h=_p();(nn!==t||ln!==i)&&(Di=null,Es=H()+500,Fr(t,i));do try{W_();break}catch(L){gp(t,L)}while(!0);Au(),za.current=h,xt=d,Yt!==null?i=0:(nn=null,ln=0,i=Zt)}if(i!==0){if(i===2&&(d=Pt(t),d!==0&&(u=d,i=uc(t,d))),i===1)throw o=Do,Fr(t,0),ur(t,u),Ln(t,H()),o;if(i===6)ur(t,u);else{if(d=t.current.alternate,(u&30)===0&&!V_(d)&&(i=Xa(t,u),i===2&&(h=Pt(t),h!==0&&(u=h,i=uc(t,h))),i===1))throw o=Do,Fr(t,0),ur(t,u),Ln(t,H()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Or(t,Dn,Di);break;case 3:if(ur(t,u),(u&130023424)===u&&(i=oc+500-H(),10<i)){if(Jn(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){Tn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=mu(Or.bind(null,t,Dn,Di),i);break}Or(t,Dn,Di);break;case 4:if(ur(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var M=31-Mt(u);h=1<<M,M=i[M],M>d&&(d=M),u&=~h}if(u=d,u=H()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*H_(u/1960))-u,10<u){t.timeoutHandle=mu(Or.bind(null,t,Dn,Di),u);break}Or(t,Dn,Di);break;case 5:Or(t,Dn,Di);break;default:throw Error(n(329))}}}return Ln(t,H()),t.callbackNode===o?pp.bind(null,t):null}function uc(t,i){var o=Lo;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Xa(t,i),t!==2&&(i=Dn,Dn=o,i!==null&&cc(i)),t}function cc(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function V_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],h=d.getSnapshot;d=d.value;try{if(!ei(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~sc,i&=~Ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mt(i),u=1<<o;t[o]=-1,i&=~u}}function mp(t){if((xt&6)!==0)throw Error(n(327));Ts();var i=Jn(t,0);if((i&1)===0)return Ln(t,H()),null;var o=Xa(t,i);if(t.tag!==0&&o===2){var u=Pt(t);u!==0&&(i=u,o=uc(t,u))}if(o===1)throw o=Do,Fr(t,0),ur(t,i),Ln(t,H()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,Dn,Di),Ln(t,H()),null}function fc(t,i){var o=xt;xt|=1;try{return t(i)}finally{xt=o,xt===0&&(Es=H()+500,va&&nr())}}function Nr(t){ar!==null&&ar.tag===0&&(xt&6)===0&&Ts();var i=xt;xt|=1;var o=Yn.transition,u=ht;try{if(Yn.transition=null,ht=1,t)return t()}finally{ht=u,Yn.transition=o,xt=i,(xt&6)===0&&nr()}}function dc(){kn=Ms.current,Nt(Ms)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,v_(o)),Yt!==null)for(o=Yt.return;o!==null;){var u=o;switch(yu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ga();break;case 3:xs(),Nt(Cn),Nt(dn),Uu();break;case 5:Lu(u);break;case 4:xs();break;case 13:Nt(Bt);break;case 19:Nt(Bt);break;case 10:Ru(u.type._context);break;case 22:case 23:dc()}o=o.return}if(nn=t,Yt=t=cr(t.current,null),ln=kn=i,Zt=0,Do=null,sc=Ba=Ur=0,Dn=Lo=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,h=o.pending;if(h!==null){var M=h.next;h.next=d,u.next=M}o.pending=u}Dr=null}return t}function gp(t,i){do{var o=Yt;try{if(Au(),Ca.current=La,Pa){for(var u=kt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Pa=!1}if(Ir=0,tn=Kt=kt=null,wo=!1,Ao=0,rc.current=null,o===null||o.return===null){Zt=1,Do=i,Yt=null;break}e:{var h=t,M=o.return,L=o,F=i;if(i=ln,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var J=F,_e=L,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var De=Hh(M);if(De!==null){De.flags&=-257,Vh(De,M,L,h,i),De.mode&1&&kh(h,J,i),i=De,F=J;var ke=i.updateQueue;if(ke===null){var He=new Set;He.add(F),i.updateQueue=He}else ke.add(F);break e}else{if((i&1)===0){kh(h,J,i),hc();break e}F=Error(n(426))}}else if(Ot&&L.mode&1){var jt=Hh(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Vh(jt,M,L,h,i),Tu(Ss(F,L));break e}}h=F=Ss(F,L),Zt!==4&&(Zt=2),Lo===null?Lo=[h]:Lo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=zh(h,F,i);fh(h,Y);break e;case 1:L=F;var V=h.type,q=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(or===null||!or.has(q)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Bh(h,L,i);fh(h,Ee);break e}}h=h.return}while(h!==null)}xp(o)}catch(Ge){i=Ge,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function _p(){var t=za.current;return za.current=La,t===null?La:t}function hc(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),nn===null||(Ur&268435455)===0&&(Ba&268435455)===0||ur(nn,ln)}function Xa(t,i){var o=xt;xt|=2;var u=_p();(nn!==t||ln!==i)&&(Di=null,Fr(t,i));do try{G_();break}catch(d){gp(t,d)}while(!0);if(Au(),xt=o,za.current=u,Yt!==null)throw Error(n(261));return nn=null,ln=0,Zt}function G_(){for(;Yt!==null;)vp(Yt)}function W_(){for(;Yt!==null&&!ee();)vp(Yt)}function vp(t){var i=Mp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?xp(t):Yt=i,rc.current=null}function xp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=F_(o,i,kn),o!==null){Yt=o;return}}else{if(o=O_(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Zt===0&&(Zt=5)}function Or(t,i,o){var u=ht,d=Yn.transition;try{Yn.transition=null,ht=1,X_(t,i,o,u)}finally{Yn.transition=d,ht=u}return null}function X_(t,i,o,u){do Ts();while(ar!==null);if((xt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(fn(t,h),t===nn&&(Yt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ha||(Ha=!0,Ep(Fe,function(){return Ts(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Yn.transition,Yn.transition=null;var M=ht;ht=1;var L=xt;xt|=4,rc.current=null,B_(t,o),up(o,t),f_(hu),na=!!du,hu=du=null,t.current=o,k_(o),te(),xt=L,ht=M,Yn.transition=h}else t.current=o;if(Ha&&(Ha=!1,ar=t,Va=d),h=t.pendingLanes,h===0&&(or=null),yt(o.stateNode),Ln(t,H()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(ka)throw ka=!1,t=ac,ac=null,t;return(Va&1)!==0&&t.tag!==0&&Ts(),h=t.pendingLanes,(h&1)!==0?t===lc?Io++:(Io=0,lc=t):Io=0,nr(),null}function Ts(){if(ar!==null){var t=ad(Va),i=Yn.transition,o=ht;try{if(Yn.transition=null,ht=16>t?16:t,ar===null)var u=!1;else{if(t=ar,ar=null,Va=0,(xt&6)!==0)throw Error(n(331));var d=xt;for(xt|=4,Oe=t.current;Oe!==null;){var h=Oe,M=h.child;if((Oe.flags&16)!==0){var L=h.deletions;if(L!==null){for(var F=0;F<L.length;F++){var J=L[F];for(Oe=J;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:bo(8,_e,h)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,De=_e.return;if(rp(_e),_e===J){Oe=null;break}if(me!==null){me.return=De,Oe=me;break}Oe=De}}}var ke=h.alternate;if(ke!==null){var He=ke.child;if(He!==null){ke.child=null;do{var jt=He.sibling;He.sibling=null,He=jt}while(He!==null)}}Oe=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Oe=M;else e:for(;Oe!==null;){if(h=Oe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:bo(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,Oe=Y;break e}Oe=h.return}}var V=t.current;for(Oe=V;Oe!==null;){M=Oe;var q=M.child;if((M.subtreeFlags&2064)!==0&&q!==null)q.return=M,Oe=q;else e:for(M=V;Oe!==null;){if(L=Oe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Oa(9,L)}}catch(Ge){Gt(L,L.return,Ge)}if(L===M){Oe=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Oe=Ee;break e}Oe=L.return}}if(xt=d,nr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(je,t)}catch{}u=!0}return u}finally{ht=o,Yn.transition=i}}return!1}function Sp(t,i,o){i=Ss(o,i),i=zh(t,i,1),t=rr(t,i,1),i=Tn(),t!==null&&(Xt(t,1,i),Ln(t,i))}function Gt(t,i,o){if(t.tag===3)Sp(t,t,o);else for(;i!==null;){if(i.tag===3){Sp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){t=Ss(o,t),t=Bh(i,t,1),i=rr(i,t,1),t=Tn(),i!==null&&(Xt(i,1,t),Ln(i,t));break}}i=i.return}}function j_(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Zt===4||Zt===3&&(ln&130023424)===ln&&500>H()-oc?Fr(t,0):sc|=o),Ln(t,i)}function yp(t,i){i===0&&((t.mode&1)===0?i=1:(i=mt,mt<<=1,(mt&130023424)===0&&(mt=4194304)));var o=Tn();t=Ci(t,i),t!==null&&(Xt(t,i,o),Ln(t,o))}function Y_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),yp(t,o)}function q_(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),yp(t,o)}var Mp;Mp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Cn.current)bn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return bn=!1,N_(t,i,o);bn=(t.flags&131072)!==0}else bn=!1,Ot&&(i.flags&1048576)!==0&&th(i,Sa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Na(t,i),t=i.pendingProps;var d=ds(i,dn.current);vs(i,o),d=Ou(null,i,u,t,d,o);var h=zu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(u)?(h=!0,_a(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,bu(i),d.updater=Ia,i.stateNode=d,d._reactInternals=i,Wu(i,u,t,o),i=qu(null,i,u,!0,h,o)):(i.tag=0,Ot&&h&&Su(i),En(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Na(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=K_(u),t=ni(u,t),d){case 0:i=Yu(null,i,u,t,o);break e;case 1:i=qh(null,i,u,t,o);break e;case 11:i=Gh(null,i,u,t,o);break e;case 14:i=Wh(null,i,u,ni(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ni(u,d),Yu(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ni(u,d),qh(t,i,u,d,o);case 3:e:{if($h(i),t===null)throw Error(n(387));u=i.pendingProps,h=i.memoizedState,d=h.element,ch(t,i),Aa(i,u,null,o);var M=i.memoizedState;if(u=M.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Ss(Error(n(423)),i),i=Kh(t,i,u,o,d);break e}else if(u!==d){d=Ss(Error(n(424)),i),i=Kh(t,i,u,o,d);break e}else for(Bn=Ji(i.stateNode.containerInfo.firstChild),zn=i,Ot=!0,ti=null,o=lh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),u===d){i=bi(t,i,o);break e}En(t,i,u,o)}i=i.child}return i;case 5:return hh(i),t===null&&Eu(i),u=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,M=d.children,pu(u,d)?M=null:h!==null&&pu(u,h)&&(i.flags|=32),Yh(t,i),En(t,i,M,o),i.child;case 6:return t===null&&Eu(i),null;case 13:return Zh(t,i,o);case 4:return Du(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=gs(i,null,u,o):En(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ni(u,d),Gh(t,i,u,d,o);case 7:return En(t,i,i.pendingProps,o),i.child;case 8:return En(t,i,i.pendingProps.children,o),i.child;case 12:return En(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,h=i.memoizedProps,M=d.value,Lt(Ea,u._currentValue),u._currentValue=M,h!==null)if(ei(h.value,M)){if(h.children===d.children&&!Cn.current){i=bi(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var F=L.firstContext;F!==null;){if(F.context===u){if(h.tag===1){F=Pi(-1,o&-o),F.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var _e=J.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),J.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),Cu(h.return,o,i),L.lanes|=o;break}F=F.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),Cu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}En(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,vs(i,o),d=Xn(d),u=u(d),i.flags|=1,En(t,i,u,o),i.child;case 14:return u=i.type,d=ni(u,i.pendingProps),d=ni(u.type,d),Wh(t,i,u,d,o);case 15:return Xh(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ni(u,d),Na(t,i),i.tag=1,Pn(u)?(t=!0,_a(i)):t=!1,vs(i,o),Fh(i,u,d),Wu(i,u,d,o),qu(null,i,u,!0,t,o);case 19:return Jh(t,i,o);case 22:return jh(t,i,o)}throw Error(n(156,i.tag))};function Ep(t,i){return A(t,i)}function $_(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,o,u){return new $_(t,i,o,u)}function pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K_(t){if(typeof t=="function")return pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===he)return 14}return 2}function cr(t,i){var o=t.alternate;return o===null?(o=qn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ja(t,i,o,u,d,h){var M=2;if(u=t,typeof t=="function")pc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case N:return zr(o.children,d,h,i);case j:M=8,d|=8;break;case C:return t=qn(12,o,i,d|2),t.elementType=C,t.lanes=h,t;case K:return t=qn(13,o,i,d),t.elementType=K,t.lanes=h,t;case fe:return t=qn(19,o,i,d),t.elementType=fe,t.lanes=h,t;case le:return Ya(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case k:M=9;break e;case ie:M=11;break e;case he:M=14;break e;case oe:M=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(M,o,i,d),i.elementType=t,i.type=u,i.lanes=h,i}function zr(t,i,o,u){return t=qn(7,t,u,i),t.lanes=o,t}function Ya(t,i,o,u){return t=qn(22,t,u,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function mc(t,i,o){return t=qn(6,t,null,i),t.lanes=o,t}function gc(t,i,o){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Z_(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _c(t,i,o,u,d,h,M,L,F){return t=new Z_(t,i,o,L,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(h),t}function Q_(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Tp(t){if(!t)return tr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Pn(o))return Qd(t,o,i)}return i}function wp(t,i,o,u,d,h,M,L,F){return t=_c(o,u,!0,t,d,h,M,L,F),t.context=Tp(null),o=t.current,u=Tn(),d=lr(o),h=Pi(u,d),h.callback=i??null,rr(o,h,d),t.current.lanes=d,Xt(t,d,u),Ln(t,u),t}function qa(t,i,o,u){var d=i.current,h=Tn(),M=lr(d);return o=Tp(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(h,M),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=rr(d,i,M),t!==null&&(si(t,d,M,h),wa(t,d,M)),M}function $a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ap(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function vc(t,i){Ap(t,i),(t=t.alternate)&&Ap(t,i)}function J_(){return null}var Rp=typeof reportError=="function"?reportError:function(t){console.error(t)};function xc(t){this._internalRoot=t}Ka.prototype.render=xc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qa(t,i,null,null)},Ka.prototype.unmount=xc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nr(function(){qa(null,t,null,null)}),i[Ti]=null}};function Ka(t){this._internalRoot=t}Ka.prototype.unstable_scheduleHydration=function(t){if(t){var i=cd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&hd(t)}};function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function ev(t,i,o,u,d){if(d){if(typeof u=="function"){var h=u;u=function(){var J=$a(M);h.call(J)}}var M=wp(i,u,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=M,t[Ti]=M.current,_o(t.nodeType===8?t.parentNode:t),Nr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var L=u;u=function(){var J=$a(F);L.call(J)}}var F=_c(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=F,t[Ti]=F.current,_o(t.nodeType===8?t.parentNode:t),Nr(function(){qa(i,F,o,u)}),F}function Qa(t,i,o,u,d){var h=o._reactRootContainer;if(h){var M=h;if(typeof d=="function"){var L=d;d=function(){var F=$a(M);L.call(F)}}qa(i,M,t,d)}else M=ev(o,i,t,d,u);return $a(M)}ld=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=on(i.pendingLanes);o!==0&&(Ar(i,o|1),Ln(i,H()),(xt&6)===0&&(Es=H()+500,nr()))}break;case 13:Nr(function(){var u=Ci(t,1);if(u!==null){var d=Tn();si(u,t,1,d)}}),vc(t,1)}},Xl=function(t){if(t.tag===13){var i=Ci(t,134217728);if(i!==null){var o=Tn();si(i,t,134217728,o)}vc(t,134217728)}},ud=function(t){if(t.tag===13){var i=lr(t),o=Ci(t,i);if(o!==null){var u=Tn();si(o,t,i,u)}vc(t,i)}},cd=function(){return ht},fd=function(t,i){var o=ht;try{return ht=t,i()}finally{ht=o}},Ae=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=ma(u);if(!d)throw Error(n(90));pt(u),ut(u,d)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},It=fc,$t=Nr;var tv={usingClientEntryPoint:!1,Events:[So,cs,ma,Pe,rt,fc]},Uo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nv={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qo(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||J_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{je=Ja.inject(nv),st=Ja}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv,In.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sc(i))throw Error(n(200));return Q_(t,i,null,o)},In.createRoot=function(t,i){if(!Sc(t))throw Error(n(299));var o=!1,u="",d=Rp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=_c(t,1,!1,null,null,o,!1,u,d),t[Ti]=i.current,_o(t.nodeType===8?t.parentNode:t),new xc(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Qo(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Nr(t)},In.hydrate=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!0,o)},In.hydrateRoot=function(t,i,o){if(!Sc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,h="",M=Rp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=wp(i,null,t,1,o??null,d,!1,h,M),t[Ti]=i.current,_o(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Ka(i)},In.render=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!1,o)},In.unmountComponentAtNode=function(t){if(!Za(t))throw Error(n(40));return t._reactRootContainer?(Nr(function(){Qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1},In.unstable_batchedUpdates=fc,In.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!Za(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qa(t,i,o,!1,u)},In.version="18.3.1-next-f1338f8080-20240426",In}var Up;function cv(){if(Up)return Mc.exports;Up=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mc.exports=uv(),Mc.exports}var Np;function fv(){if(Np)return el;Np=1;var s=cv();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var dv=fv();const hv=Gm(dv);var wc={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function pv(){if(Fp)return No;Fp=1;var s=qf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,m){var _,v={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(_ in p)r.call(p,_)&&!l.hasOwnProperty(_)&&(v[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:f,key:x,ref:y,props:v,_owner:a.current}}return No.Fragment=n,No.jsx=c,No.jsxs=c,No}var Op;function mv(){return Op||(Op=1,wc.exports=pv()),wc.exports}var We=mv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $f="171",gv=0,zp=1,_v=2,Wm=1,vv=2,Oi=3,yr=0,Nn=1,Bi=2,xr=0,Vs=1,Bp=2,kp=3,Hp=4,xv=5,Yr=100,Sv=101,yv=102,Mv=103,Ev=104,Tv=200,wv=201,Av=202,Rv=203,sf=204,of=205,Cv=206,Pv=207,bv=208,Dv=209,Lv=210,Iv=211,Uv=212,Nv=213,Fv=214,af=0,lf=1,uf=2,Xs=3,cf=4,ff=5,df=6,hf=7,Xm=0,Ov=1,zv=2,Sr=0,Bv=1,kv=2,Hv=3,Vv=4,Gv=5,Wv=6,Xv=7,jm=300,js=301,Ys=302,pf=303,mf=304,kl=306,gf=1e3,Zr=1001,_f=1002,ci=1003,jv=1004,tl=1005,_i=1006,Ac=1007,Qr=1008,Gi=1009,Ym=1010,qm=1011,Wo=1012,Kf=1013,Jr=1014,ki=1015,Xo=1016,Zf=1017,Qf=1018,qs=1020,$m=35902,Km=1021,Zm=1022,ui=1023,Qm=1024,Jm=1025,Gs=1026,$s=1027,eg=1028,Jf=1029,tg=1030,ed=1031,td=1033,Cl=33776,Pl=33777,bl=33778,Dl=33779,vf=35840,xf=35841,Sf=35842,yf=35843,Mf=36196,Ef=37492,Tf=37496,wf=37808,Af=37809,Rf=37810,Cf=37811,Pf=37812,bf=37813,Df=37814,Lf=37815,If=37816,Uf=37817,Nf=37818,Ff=37819,Of=37820,zf=37821,Ll=36492,Bf=36494,kf=36495,ng=36283,Hf=36284,Vf=36285,Gf=36286,Yv=3200,qv=3201,ig=0,$v=1,vr="",Kn="srgb",Ks="srgb-linear",Nl="linear",bt="srgb",ws=7680,Vp=519,Kv=512,Zv=513,Qv=514,rg=515,Jv=516,e0=517,t0=518,n0=519,Gp=35044,Wp="300 es",Hi=2e3,Fl=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Il=Math.PI/180,Wf=180/Math.PI;function jo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function i0(s,e){return(s%e+e)%e}function Rc(s,e,n){return(1-n)*s+n*e}function Fo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,l,c,f,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,p,m)}set(e,n,r,a,l,c,f,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],y=r[5],E=r[8],w=a[0],S=a[3],g=a[6],I=a[1],D=a[4],P=a[7],X=a[2],z=a[5],N=a[8];return l[0]=c*w+f*I+p*X,l[3]=c*S+f*D+p*z,l[6]=c*g+f*P+p*N,l[1]=m*w+_*I+v*X,l[4]=m*S+_*D+v*z,l[7]=m*g+_*P+v*N,l[2]=x*w+y*I+E*X,l[5]=x*S+y*D+E*z,l[8]=x*g+y*P+E*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return n*c*_-n*f*m-r*l*_+r*f*p+a*l*m-a*c*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],m=e[7],_=e[8],v=_*c-f*m,x=f*p-_*l,y=m*l-c*p,E=n*v+r*x+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(a*m-_*r)*w,e[2]=(f*r-a*c)*w,e[3]=x*w,e[4]=(_*n-a*p)*w,e[5]=(a*l-f*n)*w,e[6]=y*w,e[7]=(r*p-m*n)*w,e[8]=(c*n-r*l)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*c+m*f)+c+e,-a*m,a*p,-a*(-m*c+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new ot;function sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function r0(){const s=Ol("canvas");return s.style.display="block",s}const Xp={};function Bs(s){s in Xp||(Xp[s]=!0,console.warn(s))}function s0(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function o0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function a0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l0(){const s={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===bt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(a.r=Ws(a.r),a.g=Ws(a.g),a.b=Ws(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===vr?Nl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ks]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:jp,fromXYZ:Yp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:jp,fromXYZ:Yp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const Tt=l0();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class u0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Ol("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Vi(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c0=0;class og{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Pc(a[c].image)):l.push(Pc(a[c]))}else l=Pc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?u0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f0=0;class Fn extends Qs{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=Zr,a=Zr,l=_i,c=Qr,f=ui,p=Gi,m=Fn.DEFAULT_ANISOTROPY,_=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=jo(),this.name="",this.source=new og(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case _f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case _f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=jm;Fn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],y=p[5],E=p[9],w=p[2],S=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-w)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+w)<.1&&Math.abs(E+S)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,P=(y+1)/2,X=(g+1)/2,z=(_+x)/4,N=(v+w)/4,j=(E+S)/4;return D>P&&D>X?D<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(D),a=z/r,l=N/r):P>X?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=z/a,l=j/a):X<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(X),r=N/l,a=j/l),this.set(r,a,l,n),this}let I=Math.sqrt((S-E)*(S-E)+(v-w)*(v-w)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(v-w)/I,this.z=(x-_)/I,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d0 extends Qs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Fn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new og(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends d0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ag extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h0 extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,f){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=l[c+0],y=l[c+1],E=l[c+2],w=l[c+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=y,e[n+2]=E,e[n+3]=w;return}if(v!==w||p!==x||m!==y||_!==E){let S=1-f;const g=p*x+m*y+_*E+v*w,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const X=Math.sqrt(D),z=Math.atan2(X,g*I);S=Math.sin(S*z)/X,f=Math.sin(f*z)/X}const P=f*I;if(p=p*S+x*P,m=m*S+y*P,_=_*S+E*P,v=v*S+w*P,S===1-f){const X=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=X,m*=X,_*=X,v*=X}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,c){const f=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=l[c],x=l[c+1],y=l[c+2],E=l[c+3];return e[n]=f*E+_*v+p*y-m*x,e[n+1]=p*E+_*x+m*v-f*y,e[n+2]=m*E+_*y+f*x-p*v,e[n+3]=_*E-f*v-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(a/2),v=f(l/2),x=p(r/2),y=p(a/2),E=p(l/2);switch(c){case"XYZ":this._x=x*_*v+m*y*E,this._y=m*y*v-x*_*E,this._z=m*_*E+x*y*v,this._w=m*_*v-x*y*E;break;case"YXZ":this._x=x*_*v+m*y*E,this._y=m*y*v-x*_*E,this._z=m*_*E-x*y*v,this._w=m*_*v+x*y*E;break;case"ZXY":this._x=x*_*v-m*y*E,this._y=m*y*v+x*_*E,this._z=m*_*E+x*y*v,this._w=m*_*v-x*y*E;break;case"ZYX":this._x=x*_*v-m*y*E,this._y=m*y*v+x*_*E,this._z=m*_*E-x*y*v,this._w=m*_*v+x*y*E;break;case"YZX":this._x=x*_*v+m*y*E,this._y=m*y*v+x*_*E,this._z=m*_*E-x*y*v,this._w=m*_*v-x*y*E;break;case"XZY":this._x=x*_*v-m*y*E,this._y=m*y*v-x*_*E,this._z=m*_*E+x*y*v,this._w=m*_*v+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],f=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+f+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-p)*y,this._y=(l-m)*y,this._z=(c-a)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(_-p)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+m)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(l-m)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(c-a)/y,this._x=(l+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,f=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+c*f+a*m-l*p,this._y=a*_+c*p+l*f-r*m,this._z=l*_+c*m+r*p-a*f,this._w=c*_-r*f-a*p-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,f),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=c*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,p=e.w,m=2*(c*a-f*r),_=2*(f*n-l*a),v=2*(l*r-c*n);return this.x=n+p*m+c*v-f*_,this.y=r+p*_+f*m-l*v,this.z=a+p*v+l*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,f=n.y,p=n.z;return this.x=a*p-l*f,this.y=l*c-r*p,this.z=r*f-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bc=new Q,qp=new Js;class Yo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,oi):oi.fromBufferAttribute(l,c),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),il.subVectors(this.max,Oo),Rs.subVectors(e.a,Oo),Cs.subVectors(e.b,Oo),Ps.subVectors(e.c,Oo),dr.subVectors(Cs,Rs),hr.subVectors(Ps,Cs),Br.subVectors(Rs,Ps);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Br.z,Br.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Br.z,0,-Br.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Br.y,Br.x,0];return!Dc(n,Rs,Cs,Ps,il)||(n=[1,0,0,0,1,0,0,0,1],!Dc(n,Rs,Cs,Ps,il))?!1:(rl.crossVectors(dr,hr),n=[rl.x,rl.y,rl.z],Dc(n,Rs,Cs,Ps,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],oi=new Q,nl=new Yo,Rs=new Q,Cs=new Q,Ps=new Q,dr=new Q,hr=new Q,Br=new Q,Oo=new Q,il=new Q,rl=new Q,kr=new Q;function Dc(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){kr.fromArray(s,l);const f=a.x*Math.abs(kr.x)+a.y*Math.abs(kr.y)+a.z*Math.abs(kr.z),p=e.dot(kr),m=n.dot(kr),_=r.dot(kr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const p0=new Yo,zo=new Q,Lc=new Q;class Hl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):p0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Lc)),this.expandByPoint(zo.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new Q,Ic=new Q,sl=new Q,pr=new Q,Uc=new Q,ol=new Q,Nc=new Q;class nd{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ic.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Ic);const l=e.distanceTo(n)*.5,c=-this.direction.dot(sl),f=pr.dot(this.direction),p=-pr.dot(sl),m=pr.lengthSq(),_=Math.abs(1-c*c);let v,x,y,E;if(_>0)if(v=c*p-f,x=c*f-p,E=l*_,v>=0)if(x>=-E)if(x<=E){const w=1/_;v*=w,x*=w,y=v*(v+c*x+2*f)+x*(c*v+x+2*p)+m}else x=l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*p)+m;else x=-l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*p)+m;else x<=-E?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-p),l),y=-v*v+x*(x+2*p)+m):x<=E?(v=0,x=Math.min(Math.max(-l,-p),l),y=x*(x+2*p)+m):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-p),l),y=-v*v+x*(x+2*p)+m);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),y=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Ic).addScaledVector(sl,x),y}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,p=r+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,f,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,l){Uc.subVectors(n,e),ol.subVectors(r,e),Nc.crossVectors(Uc,ol);let c=this.direction.dot(Nc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,e);const p=f*this.direction.dot(ol.crossVectors(pr,ol));if(p<0)return null;const m=f*this.direction.dot(Uc.cross(pr));if(m<0||p+m>c)return null;const _=-f*pr.dot(Nc);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,r,a,l,c,f,p,m,_,v,x,y,E,w,S){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,p,m,_,v,x,y,E,w,S)}set(e,n,r,a,l,c,f,p,m,_,v,x,y,E,w,S){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=f,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=y,g[7]=E,g[11]=w,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),l=1/bs.setFromMatrixColumn(e,1).length(),c=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*_,y=c*v,E=f*_,w=f*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=y+E*m,n[5]=x-w*m,n[9]=-f*p,n[2]=w-x*m,n[6]=E+y*m,n[10]=c*p}else if(e.order==="YXZ"){const x=p*_,y=p*v,E=m*_,w=m*v;n[0]=x+w*f,n[4]=E*f-y,n[8]=c*m,n[1]=c*v,n[5]=c*_,n[9]=-f,n[2]=y*f-E,n[6]=w+x*f,n[10]=c*p}else if(e.order==="ZXY"){const x=p*_,y=p*v,E=m*_,w=m*v;n[0]=x-w*f,n[4]=-c*v,n[8]=E+y*f,n[1]=y+E*f,n[5]=c*_,n[9]=w-x*f,n[2]=-c*m,n[6]=f,n[10]=c*p}else if(e.order==="ZYX"){const x=c*_,y=c*v,E=f*_,w=f*v;n[0]=p*_,n[4]=E*m-y,n[8]=x*m+w,n[1]=p*v,n[5]=w*m+x,n[9]=y*m-E,n[2]=-m,n[6]=f*p,n[10]=c*p}else if(e.order==="YZX"){const x=c*p,y=c*m,E=f*p,w=f*m;n[0]=p*_,n[4]=w-x*v,n[8]=E*v+y,n[1]=v,n[5]=c*_,n[9]=-f*_,n[2]=-m*_,n[6]=y*v+E,n[10]=x-w*v}else if(e.order==="XZY"){const x=c*p,y=c*m,E=f*p,w=f*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+w,n[5]=c*_,n[9]=y*v-E,n[2]=E*v-y,n[6]=f*_,n[10]=w*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,g0)}lookAt(e,n,r){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),mr.crossVectors(r,Hn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),mr.crossVectors(r,Hn)),mr.normalize(),al.crossVectors(Hn,mr),a[0]=mr.x,a[4]=al.x,a[8]=Hn.x,a[1]=mr.y,a[5]=al.y,a[9]=Hn.y,a[2]=mr.z,a[6]=al.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],y=r[13],E=r[2],w=r[6],S=r[10],g=r[14],I=r[3],D=r[7],P=r[11],X=r[15],z=a[0],N=a[4],j=a[8],C=a[12],R=a[1],k=a[5],ie=a[9],K=a[13],fe=a[2],he=a[6],oe=a[10],le=a[14],B=a[3],ae=a[7],se=a[11],U=a[15];return l[0]=c*z+f*R+p*fe+m*B,l[4]=c*N+f*k+p*he+m*ae,l[8]=c*j+f*ie+p*oe+m*se,l[12]=c*C+f*K+p*le+m*U,l[1]=_*z+v*R+x*fe+y*B,l[5]=_*N+v*k+x*he+y*ae,l[9]=_*j+v*ie+x*oe+y*se,l[13]=_*C+v*K+x*le+y*U,l[2]=E*z+w*R+S*fe+g*B,l[6]=E*N+w*k+S*he+g*ae,l[10]=E*j+w*ie+S*oe+g*se,l[14]=E*C+w*K+S*le+g*U,l[3]=I*z+D*R+P*fe+X*B,l[7]=I*N+D*k+P*he+X*ae,l[11]=I*j+D*ie+P*oe+X*se,l[15]=I*C+D*K+P*le+X*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],y=e[14],E=e[3],w=e[7],S=e[11],g=e[15];return E*(+l*p*v-a*m*v-l*f*x+r*m*x+a*f*y-r*p*y)+w*(+n*p*y-n*m*x+l*c*x-a*c*y+a*m*_-l*p*_)+S*(+n*m*v-n*f*y-l*c*v+r*c*y+l*f*_-r*m*_)+g*(-a*f*_-n*p*v+n*f*x+a*c*v-r*c*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],y=e[11],E=e[12],w=e[13],S=e[14],g=e[15],I=v*S*m-w*x*m+w*p*y-f*S*y-v*p*g+f*x*g,D=E*x*m-_*S*m-E*p*y+c*S*y+_*p*g-c*x*g,P=_*w*m-E*v*m+E*f*y-c*w*y-_*f*g+c*v*g,X=E*v*p-_*w*p-E*f*x+c*w*x+_*f*S-c*v*S,z=n*I+r*D+a*P+l*X;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=I*N,e[1]=(w*x*l-v*S*l-w*a*y+r*S*y+v*a*g-r*x*g)*N,e[2]=(f*S*l-w*p*l+w*a*m-r*S*m-f*a*g+r*p*g)*N,e[3]=(v*p*l-f*x*l-v*a*m+r*x*m+f*a*y-r*p*y)*N,e[4]=D*N,e[5]=(_*S*l-E*x*l+E*a*y-n*S*y-_*a*g+n*x*g)*N,e[6]=(E*p*l-c*S*l-E*a*m+n*S*m+c*a*g-n*p*g)*N,e[7]=(c*x*l-_*p*l+_*a*m-n*x*m-c*a*y+n*p*y)*N,e[8]=P*N,e[9]=(E*v*l-_*w*l-E*r*y+n*w*y+_*r*g-n*v*g)*N,e[10]=(c*w*l-E*f*l+E*r*m-n*w*m-c*r*g+n*f*g)*N,e[11]=(_*f*l-c*v*l-_*r*m+n*v*m+c*r*y-n*f*y)*N,e[12]=X*N,e[13]=(_*w*a-E*v*a+E*r*x-n*w*x-_*r*S+n*v*S)*N,e[14]=(E*f*a-c*w*a-E*r*p+n*w*p+c*r*S-n*f*S)*N,e[15]=(c*v*a-_*f*a+_*r*p-n*v*p-c*r*x+n*f*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,f=e.y,p=e.z,m=l*c,_=l*f;return this.set(m*c+r,m*f-a*p,m*p+a*f,0,m*f+a*p,_*f+r,_*p-a*c,0,m*p-a*f,_*p+a*c,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,m=l+l,_=c+c,v=f+f,x=l*m,y=l*_,E=l*v,w=c*_,S=c*v,g=f*v,I=p*m,D=p*_,P=p*v,X=r.x,z=r.y,N=r.z;return a[0]=(1-(w+g))*X,a[1]=(y+P)*X,a[2]=(E-D)*X,a[3]=0,a[4]=(y-P)*z,a[5]=(1-(x+g))*z,a[6]=(S+I)*z,a[7]=0,a[8]=(E+D)*N,a[9]=(S-I)*N,a[10]=(1-(x+w))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=bs.set(a[0],a[1],a[2]).length();const c=bs.set(a[4],a[5],a[6]).length(),f=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const m=1/l,_=1/c,v=1/f;return ai.elements[0]*=m,ai.elements[1]*=m,ai.elements[2]*=m,ai.elements[4]*=_,ai.elements[5]*=_,ai.elements[6]*=_,ai.elements[8]*=v,ai.elements[9]*=v,ai.elements[10]*=v,n.setFromRotationMatrix(ai),r.x=l,r.y=c,r.z=f,this}makePerspective(e,n,r,a,l,c,f=Hi){const p=this.elements,m=2*l/(n-e),_=2*l/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let y,E;if(f===Hi)y=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Fl)y=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,l,c,f=Hi){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(c-l),x=(n+e)*m,y=(r+a)*_;let E,w;if(f===Hi)E=(c+l)*v,w=-2*v;else if(f===Fl)E=l*v,w=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new Q,ai=new zt,m0=new Q(0,0,0),g0=new Q(1,1,1),mr=new Q,al=new Q,Hn=new Q,$p=new zt,Kp=new Js;class yi{constructor(e=0,n=0,r=0,a=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _0=0;const Zp=new Q,Ds=new Js,Ui=new zt,ll=new Q,Bo=new Q,v0=new Q,x0=new Js,Qp=new Q(1,0,0),Jp=new Q(0,1,0),em=new Q(0,0,1),tm={type:"added"},S0={type:"removed"},Ls={type:"childadded",child:null},Fc={type:"childremoved",child:null};class un extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new Q,n=new yi,r=new Js,a=new Q(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new ot}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Bo,ll,this.up):Ui.lookAt(ll,Bo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ds.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(S0),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(l(e.animations,p))}}if(n){const f=c(e.geometries),p=c(e.materials),m=c(e.textures),_=c(e.images),v=c(e.shapes),x=c(e.skeletons),y=c(e.animations),E=c(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}un.DEFAULT_UP=new Q(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new Q,Ni=new Q,Oc=new Q,Fi=new Q,Is=new Q,Us=new Q,nm=new Q,zc=new Q,Bc=new Q,kc=new Q,Hc=new Wt,Vc=new Wt,Gc=new Wt;class Qn{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){li.subVectors(a,n),Ni.subVectors(r,n),Oc.subVectors(e,n);const c=li.dot(li),f=li.dot(Ni),p=li.dot(Oc),m=Ni.dot(Ni),_=Ni.dot(Oc),v=c*m-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,y=(m*p-f*_)*x,E=(c*_-f*p)*x;return l.set(1-y-E,E,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,r,a,l,c,f,p){return this.getBarycoord(e,n,r,a,Fi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Fi.x),p.addScaledVector(c,Fi.y),p.addScaledVector(f,Fi.z),p)}static getInterpolatedAttribute(e,n,r,a,l,c){return Hc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),Hc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,r),Gc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Hc,l.x),c.addScaledVector(Vc,l.y),c.addScaledVector(Gc,l.z),c}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),Ni.subVectors(e,n),li.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return Qn.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,f;Is.subVectors(a,r),Us.subVectors(l,r),zc.subVectors(e,r);const p=Is.dot(zc),m=Us.dot(zc);if(p<=0&&m<=0)return n.copy(r);Bc.subVectors(e,a);const _=Is.dot(Bc),v=Us.dot(Bc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(r).addScaledVector(Is,c);kc.subVectors(e,l);const y=Is.dot(kc),E=Us.dot(kc);if(E>=0&&y<=E)return n.copy(l);const w=y*m-p*E;if(w<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(Us,f);const S=_*E-y*v;if(S<=0&&v-_>=0&&y-E>=0)return nm.subVectors(l,a),f=(v-_)/(v-_+(y-E)),n.copy(a).addScaledVector(nm,f);const g=1/(S+w+x);return c=w*g,f=x*g,n.copy(r).addScaledVector(Is,c).addScaledVector(Us,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Wc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class St{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=i0(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Wc(c,l,e+1/3),this.g=Wc(c,l,e),this.b=Wc(c,l,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=lg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Tt.fromWorkingColorSpace(_n.copy(this),e),Math.round(gt(_n.r*255,0,255))*65536+Math.round(gt(_n.g*255,0,255))*256+Math.round(gt(_n.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(_n.copy(this),n);const r=_n.r,a=_n.g,l=_n.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let p,m;const _=(f+c)/2;if(f===c)p=0,m=0;else{const v=c-f;switch(m=_<=.5?v/(c+f):v/(2-c-f),c){case r:p=(a-l)/v+(a<l?6:0);break;case a:p=(l-r)/v+2;break;case l:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Kn){Tt.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,a=_n.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(ul);const r=Rc(gr.h,ul.h,n),a=Rc(gr.s,ul.s,n),l=Rc(gr.l,ul.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new St;St.NAMES=lg;let y0=0;class eo extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Vs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=of,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sf&&(r.blendSrc=this.blendSrc),this.blendDst!==of&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ug extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new Q,cl=new wt;class xi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Gp,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gp&&(e.usage=this.usage),e}}class cg extends xi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class fg extends xi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Si extends xi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let M0=0;const $n=new zt,Xc=new un,Ns=new Q,Vn=new Yo,ko=new Yo,sn=new Q;class Wi extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?fg:cg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ot().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Xc.lookAt(e),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Si(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];ko.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(Vn.min,ko.min),Vn.expandByPoint(sn),sn.addVectors(Vn.max,ko.max),Vn.expandByPoint(sn)):(Vn.expandByPoint(ko.min),Vn.expandByPoint(ko.max))}Vn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)sn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)sn.fromBufferAttribute(f,m),p&&(Ns.fromBufferAttribute(e,m),sn.add(Ns)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let j=0;j<r.count;j++)f[j]=new Q,p[j]=new Q;const m=new Q,_=new Q,v=new Q,x=new wt,y=new wt,E=new wt,w=new Q,S=new Q;function g(j,C,R){m.fromBufferAttribute(r,j),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,R),x.fromBufferAttribute(l,j),y.fromBufferAttribute(l,C),E.fromBufferAttribute(l,R),_.sub(m),v.sub(m),y.sub(x),E.sub(x);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(k),S.copy(v).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(k),f[j].add(w),f[C].add(w),f[R].add(w),p[j].add(S),p[C].add(S),p[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let j=0,C=I.length;j<C;++j){const R=I[j],k=R.start,ie=R.count;for(let K=k,fe=k+ie;K<fe;K+=3)g(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const D=new Q,P=new Q,X=new Q,z=new Q;function N(j){X.fromBufferAttribute(a,j),z.copy(X);const C=f[j];D.copy(C),D.sub(X.multiplyScalar(X.dot(C))).normalize(),P.crossVectors(z,C);const k=P.dot(p[j])<0?-1:1;c.setXYZW(j,D.x,D.y,D.z,k)}for(let j=0,C=I.length;j<C;++j){const R=I[j],k=R.start,ie=R.count;for(let K=k,fe=k+ie;K<fe;K+=3)N(e.getX(K+0)),N(e.getX(K+1)),N(e.getX(K+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new Q,l=new Q,c=new Q,f=new Q,p=new Q,m=new Q,_=new Q,v=new Q;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),w=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,S),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),f.add(_),p.add(_),m.add(_),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,l),v.subVectors(a,l),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,v=f.normalized,x=new m.constructor(p.length*_);let y=0,E=0;for(let w=0,S=p.length;w<S;w++){f.isInterleavedBufferAttribute?y=p[w]*f.data.stride+f.offset:y=p[w]*_;for(let g=0;g<_;g++)x[E++]=m[y++]}return new xi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wi,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let _=0,v=m.length;_<v;_++){const x=m[_],y=e(x,r);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const m=c[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];_.push(y.toJSON(e.data))}_.length>0&&(a[p]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let x=0,y=v.length;x<y;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new zt,Hr=new nd,fl=new Hl,rm=new Q,dl=new Q,hl=new Q,pl=new Q,jc=new Q,ml=new Q,sm=new Q,gl=new Q;class vi extends un{constructor(e=new Wi,n=new ug){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){ml.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const _=f[p],v=l[p];_!==0&&(jc.fromBufferAttribute(v,e),c?ml.addScaledVector(jc,_):ml.addScaledVector(jc.sub(n),_))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(fl.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(fl,rm)===null||Hr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(im),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,x=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,w=x.length;E<w;E++){const S=x[E],g=c[S.materialIndex],I=Math.max(S.start,y.start),D=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let P=I,X=D;P<X;P+=3){const z=f.getX(P),N=f.getX(P+1),j=f.getX(P+2);a=_l(this,g,e,r,m,_,v,z,N,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let S=E,g=w;S<g;S+=3){const I=f.getX(S),D=f.getX(S+1),P=f.getX(S+2);a=_l(this,c,e,r,m,_,v,I,D,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,w=x.length;E<w;E++){const S=x[E],g=c[S.materialIndex],I=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let P=I,X=D;P<X;P+=3){const z=P,N=P+1,j=P+2;a=_l(this,g,e,r,m,_,v,z,N,j),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const E=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let S=E,g=w;S<g;S+=3){const I=S,D=S+1,P=S+2;a=_l(this,c,e,r,m,_,v,I,D,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function E0(s,e,n,r,a,l,c,f){let p;if(e.side===Nn?p=r.intersectTriangle(c,l,a,!0,f):p=r.intersectTriangle(a,l,c,e.side===yr,f),p===null)return null;gl.copy(f),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function _l(s,e,n,r,a,l,c,f,p,m){s.getVertexPosition(f,dl),s.getVertexPosition(p,hl),s.getVertexPosition(m,pl);const _=E0(s,e,n,r,dl,hl,pl,sm);if(_){const v=new Q;Qn.getBarycoord(sm,dl,hl,pl,v),a&&(_.uv=Qn.getInterpolatedAttribute(a,f,p,m,v,new wt)),l&&(_.uv1=Qn.getInterpolatedAttribute(l,f,p,m,v,new wt)),c&&(_.normal=Qn.getInterpolatedAttribute(c,f,p,m,v,new Q),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new Q,materialIndex:0};Qn.getNormal(dl,hl,pl,x.normal),_.face=x,_.barycoord=v}return _}class to extends Wi{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const p=[],m=[],_=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,r,n,e,c,l,0),E("z","y","x",1,-1,r,n,-e,c,l,1),E("x","z","y",1,1,e,r,n,a,c,2),E("x","z","y",1,-1,e,r,-n,a,c,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new Si(m,3)),this.setAttribute("normal",new Si(_,3)),this.setAttribute("uv",new Si(v,2));function E(w,S,g,I,D,P,X,z,N,j,C){const R=P/N,k=X/j,ie=P/2,K=X/2,fe=z/2,he=N+1,oe=j+1;let le=0,B=0;const ae=new Q;for(let se=0;se<oe;se++){const U=se*k-K;for(let ne=0;ne<he;ne++){const Ie=ne*R-ie;ae[w]=Ie*I,ae[S]=U*D,ae[g]=fe,m.push(ae.x,ae.y,ae.z),ae[w]=0,ae[S]=0,ae[g]=z>0?1:-1,_.push(ae.x,ae.y,ae.z),v.push(ne/N),v.push(1-se/j),le+=1}}for(let se=0;se<j;se++)for(let U=0;U<N;U++){const ne=x+U+he*se,Ie=x+U+he*(se+1),Z=x+(U+1)+he*(se+1),ue=x+(U+1)+he*se;p.push(ne,Ie,ue),p.push(Ie,Z,ue),B+=6}f.addGroup(y,B,C),y+=B,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=Zs(s[n]);for(const a in r)e[a]=r[a]}return e}function T0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const w0={clone:Zs,merge:An};var A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=T0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class hg extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new Q,om=new wt,am=new wt;class Zn extends hg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wf*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,om,am),n.subVectors(am,om)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Il*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/p,n-=c.offsetY*r/m,a*=c.width/p,r*=c.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fs=-90,Os=1;class C0 extends un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Fs,Os,e,n);a.layers=this.layers,this.add(a);const l=new Zn(Fs,Os,e,n);l.layers=this.layers,this.add(l);const c=new Zn(Fs,Os,e,n);c.layers=this.layers,this.add(c);const f=new Zn(Fs,Os,e,n);f.layers=this.layers,this.add(f);const p=new Zn(Fs,Os,e,n);p.layers=this.layers,this.add(p);const m=new Zn(Fs,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,f,p]=n;for(const m of n)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class pg extends Fn{constructor(e,n,r,a,l,c,f,p,m,_){e=e!==void 0?e:[],n=n!==void 0?n:js,super(e,n,r,a,l,c,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P0 extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new pg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:_i}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new to(5,5,5),l=new Mr({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:xr});l.uniforms.tEquirect.value=n;const c=new vi(a,l),f=n.minFilter;return n.minFilter===Qr&&(n.minFilter=_i),new C0(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class b0 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yc=new Q,D0=new Q,L0=new ot;class Xr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Yc.subVectors(r,n).cross(D0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Yc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||L0.getNormalMatrix(e),a=this.coplanarPoint(Yc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Hl,vl=new Q;class rd{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,l=new Xr,c=new Xr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Hi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],y=a[8],E=a[9],w=a[10],S=a[11],g=a[12],I=a[13],D=a[14],P=a[15];if(r[0].setComponents(p-l,x-m,S-y,P-g).normalize(),r[1].setComponents(p+l,x+m,S+y,P+g).normalize(),r[2].setComponents(p+c,x+_,S+E,P+I).normalize(),r[3].setComponents(p-c,x-_,S-E,P-I).normalize(),r[4].setComponents(p-f,x-v,S-w,P-D).normalize(),n===Hi)r[5].setComponents(p+f,x+v,S+w,P+D).normalize();else if(n===Fl)r[5].setComponents(f,v,w,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mg extends eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zl=new Q,Bl=new Q,lm=new zt,Ho=new nd,xl=new Hl,qc=new Q,um=new Q;class I0 extends un{constructor(e=new Wi,n=new mg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)zl.fromBufferAttribute(n,a-1),Bl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=zl.distanceTo(Bl);e.setAttribute("lineDistance",new Si(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(a),xl.radius+=l,e.ray.intersectsSphere(xl)===!1)return;lm.copy(a).invert(),Ho.copy(e.ray).applyMatrix4(lm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const y=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let w=y,S=E-1;w<S;w+=m){const g=_.getX(w),I=_.getX(w+1),D=Sl(this,e,Ho,p,g,I);D&&n.push(D)}if(this.isLineLoop){const w=_.getX(E-1),S=_.getX(y),g=Sl(this,e,Ho,p,w,S);g&&n.push(g)}}else{const y=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let w=y,S=E-1;w<S;w+=m){const g=Sl(this,e,Ho,p,w,w+1);g&&n.push(g)}if(this.isLineLoop){const w=Sl(this,e,Ho,p,E-1,y);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Sl(s,e,n,r,a,l){const c=s.geometry.attributes.position;if(zl.fromBufferAttribute(c,a),Bl.fromBufferAttribute(c,l),n.distanceSqToSegment(zl,Bl,qc,um)>r)return;qc.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(qc);if(!(p<e.near||p>e.far))return{distance:p,point:um.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const cm=new Q,fm=new Q;class U0 extends I0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)cm.fromBufferAttribute(n,a),fm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+cm.distanceTo(fm);e.setAttribute("lineDistance",new Si(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ks extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gg extends Fn{constructor(e,n,r,a,l,c,f,p,m,_=Gs){if(_!==Gs&&_!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Gs&&(r=Jr),r===void 0&&_===$s&&(r=qs),super(null,a,l,c,f,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ci,this.minFilter=p!==void 0?p:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const yl=new Q,Ml=new Q,$c=new Q,El=new Qn;class N0 extends Wi{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const a=Math.pow(10,4),l=Math.cos(Il*n),c=e.getIndex(),f=e.getAttribute("position"),p=c?c.count:f.count,m=[0,0,0],_=["a","b","c"],v=new Array(3),x={},y=[];for(let E=0;E<p;E+=3){c?(m[0]=c.getX(E),m[1]=c.getX(E+1),m[2]=c.getX(E+2)):(m[0]=E,m[1]=E+1,m[2]=E+2);const{a:w,b:S,c:g}=El;if(w.fromBufferAttribute(f,m[0]),S.fromBufferAttribute(f,m[1]),g.fromBufferAttribute(f,m[2]),El.getNormal($c),v[0]=`${Math.round(w.x*a)},${Math.round(w.y*a)},${Math.round(w.z*a)}`,v[1]=`${Math.round(S.x*a)},${Math.round(S.y*a)},${Math.round(S.z*a)}`,v[2]=`${Math.round(g.x*a)},${Math.round(g.y*a)},${Math.round(g.z*a)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let I=0;I<3;I++){const D=(I+1)%3,P=v[I],X=v[D],z=El[_[I]],N=El[_[D]],j=`${P}_${X}`,C=`${X}_${P}`;C in x&&x[C]?($c.dot(x[C].normal)<=l&&(y.push(z.x,z.y,z.z),y.push(N.x,N.y,N.z)),x[C]=null):j in x||(x[j]={index0:m[I],index1:m[D],normal:$c.clone()})}}for(const E in x)if(x[E]){const{index0:w,index1:S}=x[E];yl.fromBufferAttribute(f,w),Ml.fromBufferAttribute(f,S),y.push(yl.x,yl.y,yl.z),y.push(Ml.x,Ml.y,Ml.z)}this.setAttribute("position",new Si(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Vl extends Wi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,_=p+1,v=e/f,x=n/p,y=[],E=[],w=[],S=[];for(let g=0;g<_;g++){const I=g*x-c;for(let D=0;D<m;D++){const P=D*v-l;E.push(P,-I,0),w.push(0,0,1),S.push(D/f),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<f;I++){const D=I+m*g,P=I+m*(g+1),X=I+1+m*(g+1),z=I+1+m*g;y.push(D,P,z),y.push(P,X,z)}this.setIndex(y),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(w,3)),this.setAttribute("uv",new Si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}class F0 extends eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ig,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O0 extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z0 extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _g extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Kc=new zt,dm=new Q,hm=new Q;class B0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rd,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;dm.setFromMatrixPosition(e.matrixWorld),n.position.copy(dm),hm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hm),n.updateMatrixWorld(),Kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vg extends hg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class k0 extends B0{constructor(){super(new vg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pm extends _g{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new k0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class H0 extends _g{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class V0 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const mm=new zt;class G0{constructor(e,n,r=0,a=1/0){this.ray=new nd(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return mm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mm),this}intersectObject(e,n=!0,r=[]){return Xf(e,this,r,n),r.sort(gm),r}intersectObjects(e,n=!0,r=[]){for(let a=0,l=e.length;a<l;a++)Xf(e[a],this,r,n);return r.sort(gm),r}}function gm(s,e){return s.distance-e.distance}function Xf(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let c=0,f=l.length;c<f;c++)Xf(l[c],e,n,!0)}}function _m(s,e,n,r){const a=W0(r);switch(n){case Km:return s*e;case Qm:return s*e;case Jm:return s*e*2;case eg:return s*e/a.components*a.byteLength;case Jf:return s*e/a.components*a.byteLength;case tg:return s*e*2/a.components*a.byteLength;case ed:return s*e*2/a.components*a.byteLength;case Zm:return s*e*3/a.components*a.byteLength;case ui:return s*e*4/a.components*a.byteLength;case td:return s*e*4/a.components*a.byteLength;case Cl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bl:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xf:case yf:return Math.max(s,16)*Math.max(e,8)/4;case vf:case Sf:return Math.max(s,8)*Math.max(e,8)/2;case Mf:case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ll:case Bf:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ng:case Hf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function W0(s){switch(s){case Gi:case Ym:return{byteLength:1,components:1};case Wo:case qm:case Xo:return{byteLength:2,components:1};case Zf:case Qf:return{byteLength:2,components:4};case Jr:case Kf:case ki:return{byteLength:4,components:1};case $m:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$f}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$f);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xg(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function X0(s){const e=new WeakMap;function n(f,p){const m=f.array,_=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),f.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],w=v[y];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,v[x]=w)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const w=v[y];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:l,update:c}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ex=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ox=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ox=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$x=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ES=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,US=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ey=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:j0,alphahash_pars_fragment:Y0,alphamap_fragment:q0,alphamap_pars_fragment:$0,alphatest_fragment:K0,alphatest_pars_fragment:Z0,aomap_fragment:Q0,aomap_pars_fragment:J0,batching_pars_vertex:ex,batching_vertex:tx,begin_vertex:nx,beginnormal_vertex:ix,bsdfs:rx,iridescence_fragment:sx,bumpmap_pars_fragment:ox,clipping_planes_fragment:ax,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:cx,color_fragment:fx,color_pars_fragment:dx,color_pars_vertex:hx,color_vertex:px,common:mx,cube_uv_reflection_fragment:gx,defaultnormal_vertex:_x,displacementmap_pars_vertex:vx,displacementmap_vertex:xx,emissivemap_fragment:Sx,emissivemap_pars_fragment:yx,colorspace_fragment:Mx,colorspace_pars_fragment:Ex,envmap_fragment:Tx,envmap_common_pars_fragment:wx,envmap_pars_fragment:Ax,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:zx,envmap_vertex:Cx,fog_vertex:Px,fog_pars_vertex:bx,fog_fragment:Dx,fog_pars_fragment:Lx,gradientmap_pars_fragment:Ix,lightmap_pars_fragment:Ux,lights_lambert_fragment:Nx,lights_lambert_pars_fragment:Fx,lights_pars_begin:Ox,lights_toon_fragment:Bx,lights_toon_pars_fragment:kx,lights_phong_fragment:Hx,lights_phong_pars_fragment:Vx,lights_physical_fragment:Gx,lights_physical_pars_fragment:Wx,lights_fragment_begin:Xx,lights_fragment_maps:jx,lights_fragment_end:Yx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:$x,logdepthbuf_pars_vertex:Kx,logdepthbuf_vertex:Zx,map_fragment:Qx,map_pars_fragment:Jx,map_particle_fragment:eS,map_particle_pars_fragment:tS,metalnessmap_fragment:nS,metalnessmap_pars_fragment:iS,morphinstance_vertex:rS,morphcolor_vertex:sS,morphnormal_vertex:oS,morphtarget_pars_vertex:aS,morphtarget_vertex:lS,normal_fragment_begin:uS,normal_fragment_maps:cS,normal_pars_fragment:fS,normal_pars_vertex:dS,normal_vertex:hS,normalmap_pars_fragment:pS,clearcoat_normal_fragment_begin:mS,clearcoat_normal_fragment_maps:gS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:vS,opaque_fragment:xS,packing:SS,premultiplied_alpha_fragment:yS,project_vertex:MS,dithering_fragment:ES,dithering_pars_fragment:TS,roughnessmap_fragment:wS,roughnessmap_pars_fragment:AS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:CS,shadowmap_vertex:PS,shadowmask_pars_fragment:bS,skinbase_vertex:DS,skinning_pars_vertex:LS,skinning_vertex:IS,skinnormal_vertex:US,specularmap_fragment:NS,specularmap_pars_fragment:FS,tonemapping_fragment:OS,tonemapping_pars_fragment:zS,transmission_fragment:BS,transmission_pars_fragment:kS,uv_pars_fragment:HS,uv_pars_vertex:VS,uv_vertex:GS,worldpos_vertex:WS,background_vert:XS,background_frag:jS,backgroundCube_vert:YS,backgroundCube_frag:qS,cube_vert:$S,cube_frag:KS,depth_vert:ZS,depth_frag:QS,distanceRGBA_vert:JS,distanceRGBA_frag:ey,equirect_vert:ty,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:ry,meshbasic_vert:sy,meshbasic_frag:oy,meshlambert_vert:ay,meshlambert_frag:ly,meshmatcap_vert:uy,meshmatcap_frag:cy,meshnormal_vert:fy,meshnormal_frag:dy,meshphong_vert:hy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:gy,meshtoon_vert:_y,meshtoon_frag:vy,points_vert:xy,points_frag:Sy,shadow_vert:yy,shadow_frag:My,sprite_vert:Ey,sprite_frag:Ty},Ce={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},gi={basic:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:An([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:An([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:An([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new St(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:An([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:An([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:An([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:An([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:An([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:An([Ce.common,Ce.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:An([Ce.lights,Ce.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};gi.physical={uniforms:An([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Tl={r:0,b:0,g:0},Gr=new yi,wy=new zt;function Ay(s,e,n,r,a,l,c){const f=new St(0);let p=l===!0?0:1,m,_,v=null,x=0,y=null;function E(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?n:e).get(P)),P}function w(D){let P=!1;const X=E(D);X===null?g(f,p):X&&X.isColor&&(g(X,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,P){const X=E(P);X&&(X.isCubeTexture||X.mapping===kl)?(_===void 0&&(_=new vi(new to(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Zs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,N,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Gr.copy(P.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.material.uniforms.envMap.value=X,_.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(wy.makeRotationFromEuler(Gr)),_.material.toneMapped=Tt.getTransfer(X.colorSpace)!==bt,(v!==X||x!==X.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,v=X,x=X.version,y=s.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new vi(new Vl(2,2),new Mr({name:"BackgroundMaterial",uniforms:Zs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(X.colorSpace)!==bt,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||x!==X.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=X,x=X.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,P){D.getRGB(Tl,dg(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,P,c)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(D,P=1){f.set(D),p=P,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(f,p)},render:w,addToRenderList:S,dispose:I}}function Ry(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function f(R,k,ie,K,fe){let he=!1;const oe=v(K,ie,k);l!==oe&&(l=oe,m(l.object)),he=y(R,K,ie,fe),he&&E(R,K,ie,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,P(R,k,ie,K),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function v(R,k,ie){const K=ie.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let he=fe[k.id];he===void 0&&(he={},fe[k.id]=he);let oe=he[K];return oe===void 0&&(oe=x(p()),he[K]=oe),oe}function x(R){const k=[],ie=[],K=[];for(let fe=0;fe<n;fe++)k[fe]=0,ie[fe]=0,K[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ie,attributeDivisors:K,object:R,attributes:{},index:null}}function y(R,k,ie,K){const fe=l.attributes,he=k.attributes;let oe=0;const le=ie.getAttributes();for(const B in le)if(le[B].location>=0){const se=fe[B];let U=he[B];if(U===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;oe++}return l.attributesNum!==oe||l.index!==K}function E(R,k,ie,K){const fe={},he=k.attributes;let oe=0;const le=ie.getAttributes();for(const B in le)if(le[B].location>=0){let se=he[B];se===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),fe[B]=U,oe++}l.attributes=fe,l.attributesNum=oe,l.index=K}function w(){const R=l.newAttributes;for(let k=0,ie=R.length;k<ie;k++)R[k]=0}function S(R){g(R,0)}function g(R,k){const ie=l.newAttributes,K=l.enabledAttributes,fe=l.attributeDivisors;ie[R]=1,K[R]===0&&(s.enableVertexAttribArray(R),K[R]=1),fe[R]!==k&&(s.vertexAttribDivisor(R,k),fe[R]=k)}function I(){const R=l.newAttributes,k=l.enabledAttributes;for(let ie=0,K=k.length;ie<K;ie++)k[ie]!==R[ie]&&(s.disableVertexAttribArray(ie),k[ie]=0)}function D(R,k,ie,K,fe,he,oe){oe===!0?s.vertexAttribIPointer(R,k,ie,fe,he):s.vertexAttribPointer(R,k,ie,K,fe,he)}function P(R,k,ie,K){w();const fe=K.attributes,he=ie.getAttributes(),oe=k.defaultAttributeValues;for(const le in he){const B=he[le];if(B.location>=0){let ae=fe[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const se=ae.normalized,U=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ie=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,Me=Z===s.INT||Z===s.UNSIGNED_INT||ae.gpuType===Kf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<B.locationSize;Qe++)g(B.location+Qe,ve.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<B.locationSize;Qe++)S(B.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Qe=0;Qe<B.locationSize;Qe++)D(B.location+Qe,U/B.locationSize,Z,se,Te*ue,(Ue+U/B.locationSize*Qe)*ue,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)g(B.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ve=0;ve<B.locationSize;ve++)D(B.location+ve,U/B.locationSize,Z,se,U*ue,U/B.locationSize*ve*ue,Me)}}else if(oe!==void 0){const se=oe[le];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(B.location,se);break;case 3:s.vertexAttrib3fv(B.location,se);break;case 4:s.vertexAttrib4fv(B.location,se);break;default:s.vertexAttrib1fv(B.location,se)}}}}I()}function X(){j();for(const R in r){const k=r[R];for(const ie in k){const K=k[ie];for(const fe in K)_(K[fe].object),delete K[fe];delete k[ie]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const ie in k){const K=k[ie];for(const fe in K)_(K[fe].object),delete K[fe];delete k[ie]}delete r[R.id]}function N(R){for(const k in r){const ie=r[k];if(ie[R.id]===void 0)continue;const K=ie[R.id];for(const fe in K)_(K[fe].object),delete K[fe];delete ie[R.id]}}function j(){C(),c=!0,l!==a&&(l=a,m(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:j,resetDefaultState:C,dispose:X,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:S,disableUnusedAttributes:I}}function Cy(s,e,n){let r;function a(m){r=m}function l(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function c(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function f(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let y=0;for(let E=0;E<v;E++)y+=_[E];n.update(y,r,1)}function p(m,_,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)c(m[E],_[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let E=0;for(let w=0;w<v;w++)E+=_[w]*x[w];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Py(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==ui&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const j=N===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Gi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ki&&!j)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:P,vertexTextures:X,maxSamples:z}}function by(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Xr,f=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||a;return a=x,r=v.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,w=v.clipIntersection,S=v.clipShadows,g=s.get(v);if(!a||E===null||E.length===0||l&&!S)l?_(null):m();else{const I=l?0:r,D=I*4;let P=g.clippingState||null;p.value=P,P=_(E,x,D,y);for(let X=0;X!==D;++X)P[X]=n[X];g.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,y,E){const w=v!==null?v.length:0;let S=null;if(w!==0){if(S=p.value,E!==!0||S===null){const g=y+w*4,I=x.matrixWorldInverse;f.getNormalMatrix(I),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,P=y;D!==w;++D,P+=4)c.copy(v[D]).applyMatrix4(I,f),c.normal.toArray(S,P),S[P+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function Dy(s){let e=new WeakMap;function n(c,f){return f===pf?c.mapping=js:f===mf&&(c.mapping=Ys),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===pf||f===mf)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const m=new P0(p.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",a),n(m.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Hs=4,vm=[.125,.215,.35,.446,.526,.582],qr=20,Zc=new vg,xm=new St;let Qc=null,Jc=0,ef=0,tf=!1;const jr=(1+Math.sqrt(5))/2,zs=1/jr,Sm=[new Q(-jr,zs,0),new Q(jr,zs,0),new Q(-zs,0,jr),new Q(zs,0,jr),new Q(0,jr,-zs),new Q(0,jr,zs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===js||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Xo,format:ui,colorSpace:Ks,depthBuffer:!1},a=Mm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ly(l)),this._blurMaterial=Iy(l,e,n)}return a}_compileMaterial(e){const n=new vi(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,r,a){const f=new Zn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(xm),_.toneMapping=Sr,_.autoClear=!1;const y=new ug({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),E=new vi(new to,y);let w=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,w=!0):(y.color.copy(xm),w=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(f.up.set(0,p[g],0),f.lookAt(m[g],0,0)):I===1?(f.up.set(0,0,p[g]),f.lookAt(0,m[g],0)):(f.up.set(0,p[g],0),f.lookAt(0,0,m[g]));const D=this._cubeSize;wl(a,I*D,g>2?D:0,D,D),_.setRenderTarget(a),w&&_.render(E,f),_.render(e,f)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=S}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===js||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new vi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;wl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Zc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Sm[(a-l-1)%Sm.length];this._blur(e,l-1,l,c,f)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,f){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new vi(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*qr-1),w=l/E,S=isFinite(l)?1+Math.floor(_*w):qr;S>qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${qr}`);const g=[];let I=0;for(let N=0;N<qr;++N){const j=N/w,C=Math.exp(-j*j/2);g.push(C),N===0?I+=C:N<S&&(I+=2*C)}for(let N=0;N<g.length;N++)g[N]=g[N]/I;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=g,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-r;const P=this._sizeLods[a],X=3*P*(a>D-Hs?a-D+Hs:0),z=4*(this._cubeSize-P);wl(n,X,z,3*P,2*P),p.setRenderTarget(n),p.render(v,Zc)}}function Ly(s){const e=[],n=[],r=[];let a=s;const l=s-Hs+1+vm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);n.push(f);let p=1/f;c>s-Hs?p=vm[c-s+Hs-1]:c===0&&(p=0),r.push(p);const m=1/(f-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,E=6,w=3,S=2,g=1,I=new Float32Array(w*E*y),D=new Float32Array(S*E*y),P=new Float32Array(g*E*y);for(let z=0;z<y;z++){const N=z%3*2/3-1,j=z>2?0:-1,C=[N,j,0,N+2/3,j,0,N+2/3,j+1,0,N,j,0,N+2/3,j+1,0,N,j+1,0];I.set(C,w*E*z),D.set(x,S*E*z);const R=[z,z,z,z,z,z];P.set(R,g*E*z)}const X=new Wi;X.setAttribute("position",new xi(I,w)),X.setAttribute("uv",new xi(D,S)),X.setAttribute("faceIndex",new xi(P,g)),e.push(X),a>Hs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Mm(s,e,n){const r=new es(s,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Iy(s,e,n){const r=new Float32Array(qr),a=new Q(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Em(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Tm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uy(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===pf||p===mf,_=p===js||p===Ys;if(m||_){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new ym(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const y=f.image;return m&&y&&y.height>0||_&&y&&a(y)?(n===null&&(n=new ym(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let p=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function Ny(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Fy(s,e,n,r){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",c),delete a[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,E=v.attributes.position;let w=0;if(y!==null){const I=y.array;w=y.version;for(let D=0,P=I.length;D<P;D+=3){const X=I[D+0],z=I[D+1],N=I[D+2];x.push(X,z,z,N,N,X)}}else if(E!==void 0){const I=E.array;w=E.version;for(let D=0,P=I.length/3-1;D<P;D+=3){const X=D+0,z=D+1,N=D+2;x.push(X,z,z,N,N,X)}}else return;const S=new(sg(x)?fg:cg)(x,1);S.version=w;const g=l.get(v);g&&e.remove(g),l.set(v,S)}function _(v){const x=l.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function Oy(s,e,n){let r;function a(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function p(x,y){s.drawElements(r,y,l,x*c),n.update(y,r,1)}function m(x,y,E){E!==0&&(s.drawElementsInstanced(r,y,l,x*c,E),n.update(y,r,E))}function _(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,x,0,E);let S=0;for(let g=0;g<E;g++)S+=y[g];n.update(S,r,1)}function v(x,y,E,w){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<x.length;g++)m(x[g]/c,y[g],w[g]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,l,x,0,w,0,E);let g=0;for(let I=0;I<E;I++)g+=y[I]*w[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function zy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function By(s,e,n){const r=new WeakMap,a=new Wt;function l(c,f,p){const m=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let R=function(){j.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let P=0;E===!0&&(P=1),w===!0&&(P=2),S===!0&&(P=3);let X=f.attributes.position.count*P,z=1;X>e.maxTextureSize&&(z=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const N=new Float32Array(X*z*4*v),j=new ag(N,X,z,v);j.type=ki,j.needsUpdate=!0;const C=P*4;for(let k=0;k<v;k++){const ie=g[k],K=I[k],fe=D[k],he=X*z*4*k;for(let oe=0;oe<ie.count;oe++){const le=oe*C;E===!0&&(a.fromBufferAttribute(ie,oe),N[he+le+0]=a.x,N[he+le+1]=a.y,N[he+le+2]=a.z,N[he+le+3]=0),w===!0&&(a.fromBufferAttribute(K,oe),N[he+le+4]=a.x,N[he+le+5]=a.y,N[he+le+6]=a.z,N[he+le+7]=0),S===!0&&(a.fromBufferAttribute(fe,oe),N[he+le+8]=a.x,N[he+le+9]=a.y,N[he+le+10]=a.z,N[he+le+11]=fe.itemSize===4?a.w:1)}}x={count:v,texture:j,size:new wt(X,z)},r.set(f,x),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const w=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function ky(s,e,n,r){let a=new WeakMap;function l(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function c(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:c}}const Sg=new Fn,wm=new gg(1,1),yg=new ag,Mg=new h0,Eg=new pg,Am=[],Rm=[],Cm=new Float32Array(16),Pm=new Float32Array(9),bm=new Float32Array(4);function no(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Am[a];if(l===void 0&&(l=new Float32Array(a),Am[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,s[c].toArray(l,f)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Gl(s,e){let n=Rm[e];n===void 0&&(n=new Int32Array(e),Rm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Hy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Vy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function Gy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function Wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function Xy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;bm.set(r),s.uniformMatrix2fv(this.addr,!1,bm),en(n,r)}}function jy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Pm.set(r),s.uniformMatrix3fv(this.addr,!1,Pm),en(n,r)}}function Yy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Cm.set(r),s.uniformMatrix4fv(this.addr,!1,Cm),en(n,r)}}function qy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function $y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function Ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function Zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function Qy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function nM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(wm.compareFunction=rg,l=wm):l=Sg,n.setTexture2D(e||l,a)}function iM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Mg,a)}function rM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Eg,a)}function sM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||yg,a)}function oM(s){switch(s){case 5126:return Hy;case 35664:return Vy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return jy;case 35676:return Yy;case 5124:case 35670:return qy;case 35667:case 35671:return $y;case 35668:case 35672:return Ky;case 35669:case 35673:return Zy;case 5125:return Qy;case 36294:return Jy;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}function aM(s,e){s.uniform1fv(this.addr,e)}function lM(s,e){const n=no(e,this.size,2);s.uniform2fv(this.addr,n)}function uM(s,e){const n=no(e,this.size,3);s.uniform3fv(this.addr,n)}function cM(s,e){const n=no(e,this.size,4);s.uniform4fv(this.addr,n)}function fM(s,e){const n=no(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function dM(s,e){const n=no(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function hM(s,e){const n=no(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function pM(s,e){s.uniform1iv(this.addr,e)}function mM(s,e){s.uniform2iv(this.addr,e)}function gM(s,e){s.uniform3iv(this.addr,e)}function _M(s,e){s.uniform4iv(this.addr,e)}function vM(s,e){s.uniform1uiv(this.addr,e)}function xM(s,e){s.uniform2uiv(this.addr,e)}function SM(s,e){s.uniform3uiv(this.addr,e)}function yM(s,e){s.uniform4uiv(this.addr,e)}function MM(s,e,n){const r=this.cache,a=e.length,l=Gl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Sg,l[c])}function EM(s,e,n){const r=this.cache,a=e.length,l=Gl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Mg,l[c])}function TM(s,e,n){const r=this.cache,a=e.length,l=Gl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Eg,l[c])}function wM(s,e,n){const r=this.cache,a=e.length,l=Gl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||yg,l[c])}function AM(s){switch(s){case 5126:return aM;case 35664:return lM;case 35665:return uM;case 35666:return cM;case 35674:return fM;case 35675:return dM;case 35676:return hM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return vM;case 36294:return xM;case 36295:return SM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return wM}}class RM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=oM(n.type)}}class CM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AM(n.type)}}class PM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function Dm(s,e){s.seq.push(e),s.map[e.id]=e}function bM(s,e,n){const r=s.name,a=r.length;for(nf.lastIndex=0;;){const l=nf.exec(r),c=nf.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&c+2===a){Dm(n,m===void 0?new RM(f,s,e):new CM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new PM(f),Dm(n,v)),n=v}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);bM(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Lm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const DM=37297;let LM=0;function IM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const Im=new ot;function UM(s){Tt._getMatrix(Im,Tt.workingColorSpace,s);const e=`mat3( ${Im.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Nl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Um(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+IM(s.getShaderSource(e),c)}else return a}function NM(s,e){const n=UM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function FM(s,e){let n;switch(e){case Bv:n="Linear";break;case kv:n="Reinhard";break;case Hv:n="Cineon";break;case Vv:n="ACESFilmic";break;case Wv:n="AgX";break;case Xv:n="Neutral";break;case Gv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new Q;function OM(){Tt.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function BM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function kM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return n}function Vo(s){return s!==""}function Nm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(s){return s.replace(HM,GM)}const VM=new Map;function GM(s,e){let n=at[e];if(n===void 0){const r=VM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return jf(n)}const WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(s){return s.replace(WM,XM)}function XM(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function zm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function YM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case Ys:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function $M(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xm:e="ENVMAP_BLENDING_MULTIPLY";break;case Ov:e="ENVMAP_BLENDING_MIX";break;case zv:e="ENVMAP_BLENDING_ADD";break}return e}function KM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function ZM(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=jM(n),m=YM(n),_=qM(n),v=$M(n),x=KM(n),y=zM(n),E=BM(l),w=a.createProgram();let S,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Vo).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Vo).join(`
`),g.length>0&&(g+=`
`)):(S=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),g=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?at.tonemapping_pars_fragment:"",n.toneMapping!==Sr?FM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,NM("linearToOutputTexel",n.outputColorSpace),OM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),c=jf(c),c=Nm(c,n),c=Fm(c,n),f=jf(f),f=Nm(f,n),f=Fm(f,n),c=Om(c),f=Om(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+S+c,P=I+g+f,X=Lm(a,a.VERTEX_SHADER,D),z=Lm(a,a.FRAGMENT_SHADER,P);a.attachShader(w,X),a.attachShader(w,z),n.index0AttributeName!==void 0?a.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function N(k){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(w).trim(),K=a.getShaderInfoLog(X).trim(),fe=a.getShaderInfoLog(z).trim();let he=!0,oe=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,X,z);else{const le=Um(a,X,"vertex"),B=Um(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ie+`
`+le+`
`+B)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(K===""||fe==="")&&(oe=!1);oe&&(k.diagnostics={runnable:he,programLog:ie,vertexShader:{log:K,prefix:S},fragmentShader:{log:fe,prefix:g}})}a.deleteShader(X),a.deleteShader(z),j=new Ul(a,w),C=kM(a,w)}let j;this.getUniforms=function(){return j===void 0&&N(this),j};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,DM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=X,this.fragmentShader=z,this}let QM=0;class JM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new eE(e),n.set(e,r)),r}}class eE{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}}function tE(s,e,n,r,a,l,c){const f=new id,p=new JM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function S(C,R,k,ie,K){const fe=ie.fog,he=K.geometry,oe=C.isMeshStandardMaterial?ie.environment:null,le=(C.isMeshStandardMaterial?n:e).get(C.envMap||oe),B=le&&le.mapping===kl?le.image.height:null,ae=E[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=se!==void 0?se.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ie,Z,ue,Me;if(ae){const vt=gi[ae];Ie=vt.vertexShader,Z=vt.fragmentShader}else Ie=C.vertexShader,Z=C.fragmentShader,p.update(C),ue=p.getVertexShaderID(C),Me=p.getFragmentShaderID(C);const ve=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ue=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,Ct=!!C.map,pt=!!C.matcap,Dt=!!le,O=!!C.aoMap,xn=!!C.lightMap,dt=!!C.bumpMap,ut=!!C.normalMap,Ye=!!C.displacementMap,Rt=!!C.emissiveMap,Xe=!!C.metalnessMap,b=!!C.roughnessMap,T=C.anisotropy>0,$=C.clearcoat>0,pe=C.dispersion>0,ge=C.iridescence>0,ce=C.sheen>0,Ve=C.transmission>0,we=T&&!!C.anisotropyMap,Ne=$&&!!C.clearcoatMap,lt=$&&!!C.clearcoatNormalMap,ye=$&&!!C.clearcoatRoughnessMap,ze=ge&&!!C.iridescenceMap,$e=ge&&!!C.iridescenceThicknessMap,Je=ce&&!!C.sheenColorMap,Be=ce&&!!C.sheenRoughnessMap,ct=!!C.specularMap,it=!!C.specularColorMap,At=!!C.specularIntensityMap,G=Ve&&!!C.transmissionMap,Ae=Ve&&!!C.thicknessMap,re=!!C.gradientMap,de=!!C.alphaMap,be=C.alphaTest>0,Pe=!!C.alphaHash,rt=!!C.extensions;let It=Sr;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(It=s.toneMapping);const $t={shaderID:ae,shaderType:C.type,shaderName:C.name,vertexShader:Ie,fragmentShader:Z,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:Me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&K.instanceColor!==null,instancingMorph:Ue&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ks,alphaToCoverage:!!C.alphaToCoverage,map:Ct,matcap:pt,envMap:Dt,envMapMode:Dt&&le.mapping,envMapCubeUVHeight:B,aoMap:O,lightMap:xn,bumpMap:dt,normalMap:ut,displacementMap:x&&Ye,emissiveMap:Rt,normalMapObjectSpace:ut&&C.normalMapType===$v,normalMapTangentSpace:ut&&C.normalMapType===ig,metalnessMap:Xe,roughnessMap:b,anisotropy:T,anisotropyMap:we,clearcoat:$,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:ye,dispersion:pe,iridescence:ge,iridescenceMap:ze,iridescenceThicknessMap:$e,sheen:ce,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ct,specularColorMap:it,specularIntensityMap:At,transmission:Ve,transmissionMap:G,thicknessMap:Ae,gradientMap:re,opaque:C.transparent===!1&&C.blending===Vs&&C.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:C.combine,mapUv:Ct&&w(C.map.channel),aoMapUv:O&&w(C.aoMap.channel),lightMapUv:xn&&w(C.lightMap.channel),bumpMapUv:dt&&w(C.bumpMap.channel),normalMapUv:ut&&w(C.normalMap.channel),displacementMapUv:Ye&&w(C.displacementMap.channel),emissiveMapUv:Rt&&w(C.emissiveMap.channel),metalnessMapUv:Xe&&w(C.metalnessMap.channel),roughnessMapUv:b&&w(C.roughnessMap.channel),anisotropyMapUv:we&&w(C.anisotropyMap.channel),clearcoatMapUv:Ne&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:lt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(C.sheenRoughnessMap.channel),specularMapUv:ct&&w(C.specularMap.channel),specularColorMapUv:it&&w(C.specularColorMap.channel),specularIntensityMapUv:At&&w(C.specularIntensityMap.channel),transmissionMapUv:G&&w(C.transmissionMap.channel),thicknessMapUv:Ae&&w(C.thicknessMap.channel),alphaMapUv:de&&w(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!he.attributes.uv&&(Ct||de),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:K.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Ct&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===bt,decodeVideoTextureEmissive:Rt&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===bt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Bi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return $t.vertexUv1s=m.has(1),$t.vertexUv2s=m.has(2),$t.vertexUv3s=m.has(3),m.clear(),$t}function g(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)R.push(k),R.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(I(R,C),D(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function I(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function D(C,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),C.push(f.mask)}function P(C){const R=E[C.type];let k;if(R){const ie=gi[R];k=w0.clone(ie.uniforms)}else k=C.uniforms;return k}function X(C,R){let k;for(let ie=0,K=_.length;ie<K;ie++){const fe=_[ie];if(fe.cacheKey===R){k=fe,++k.usedTimes;break}}return k===void 0&&(k=new ZM(s,R,C,l),_.push(k)),k}function z(C){if(--C.usedTimes===0){const R=_.indexOf(C);_[R]=_[_.length-1],_.pop(),C.destroy()}}function N(C){p.remove(C)}function j(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:P,acquireProgram:X,releaseProgram:z,releaseShaderCache:N,programs:_,dispose:j}}function nE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,p){s.get(c)[f]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function iE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function km(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(v,x,y,E,w,S){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:w,group:S},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=y,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=w,g.group=S),e++,g}function f(v,x,y,E,w,S){const g=c(v,x,y,E,w,S);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(v,x,y,E,w,S){const g=c(v,x,y,E,w,S);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||iE),r.length>1&&r.sort(x||Bm),a.length>1&&a.sort(x||Bm)}function _(){for(let v=e,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:_,sort:m}}function rE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new km,s.set(r,[c])):a>=l.length?(c=new km,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function sE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new St};break;case"SpotLight":n={position:new Q,direction:new Q,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function oE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let aE=0;function lE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uE(s){const e=new sE,n=oE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const a=new Q,l=new zt,c=new zt;function f(m){let _=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,E=0,w=0,S=0,g=0,I=0,D=0,P=0,X=0,z=0,N=0;m.sort(lE);for(let C=0,R=m.length;C<R;C++){const k=m[C],ie=k.color,K=k.intensity,fe=k.distance,he=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ie.r*K,v+=ie.g*K,x+=ie.b*K;else if(k.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(k.sh.coefficients[oe],K);N++}else if(k.isDirectionalLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const le=k.shadow,B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=k.shadow.matrix,I++}r.directional[y]=oe,y++}else if(k.isSpotLight){const oe=e.get(k);oe.position.setFromMatrixPosition(k.matrixWorld),oe.color.copy(ie).multiplyScalar(K),oe.distance=fe,oe.coneCos=Math.cos(k.angle),oe.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),oe.decay=k.decay,r.spot[w]=oe;const le=k.shadow;if(k.map&&(r.spotLightMap[X]=k.map,X++,le.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[w]=le.matrix,k.castShadow){const B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=he,P++}w++}else if(k.isRectAreaLight){const oe=e.get(k);oe.color.copy(ie).multiplyScalar(K),oe.halfWidth.set(k.width*.5,0,0),oe.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=oe,S++}else if(k.isPointLight){const oe=e.get(k);if(oe.color.copy(k.color).multiplyScalar(k.intensity),oe.distance=k.distance,oe.decay=k.decay,k.castShadow){const le=k.shadow,B=n.get(k);B.shadowIntensity=le.intensity,B.shadowBias=le.bias,B.shadowNormalBias=le.normalBias,B.shadowRadius=le.radius,B.shadowMapSize=le.mapSize,B.shadowCameraNear=le.camera.near,B.shadowCameraFar=le.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=k.shadow.matrix,D++}r.point[E]=oe,E++}else if(k.isHemisphereLight){const oe=e.get(k);oe.skyColor.copy(k.color).multiplyScalar(K),oe.groundColor.copy(k.groundColor).multiplyScalar(K),r.hemi[g]=oe,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==E||j.spotLength!==w||j.rectAreaLength!==S||j.hemiLength!==g||j.numDirectionalShadows!==I||j.numPointShadows!==D||j.numSpotShadows!==P||j.numSpotMaps!==X||j.numLightProbes!==N)&&(r.directional.length=y,r.spot.length=w,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+X-z,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=N,j.directionalLength=y,j.pointLength=E,j.spotLength=w,j.rectAreaLength=S,j.hemiLength=g,j.numDirectionalShadows=I,j.numPointShadows=D,j.numSpotShadows=P,j.numSpotMaps=X,j.numLightProbes=N,r.version=aE++)}function p(m,_){let v=0,x=0,y=0,E=0,w=0;const S=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const D=m[g];if(D.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),v++}else if(D.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(S),w++}}}return{setup:f,setupView:p,state:r}}function Hm(s){const e=new uE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function c(_){r.push(_)}function f(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function cE(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Hm(s),e.set(a,[f])):l>=c.length?(f=new Hm(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const fE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hE(s,e,n){let r=new rd;const a=new wt,l=new wt,c=new Wt,f=new O0({depthPacking:qv}),p=new z0,m={},_=n.maxTextureSize,v={[yr]:Nn,[Nn]:yr,[Bi]:Bi},x=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:fE,fragmentShader:dE}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Wi;E.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wm;let g=this.type;this.render=function(z,N,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(xr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const K=g!==Oi&&this.type===Oi,fe=g===Oi&&this.type!==Oi;for(let he=0,oe=z.length;he<oe;he++){const le=z[he],B=le.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const ae=B.getFrameExtents();if(a.multiply(ae),l.copy(B.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ae.x),a.x=l.x*ae.x,B.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ae.y),a.y=l.y*ae.y,B.mapSize.y=l.y)),B.map===null||K===!0||fe===!0){const U=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};B.map!==null&&B.map.dispose(),B.map=new es(a.x,a.y,U),B.map.texture.name=le.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const se=B.getViewportCount();for(let U=0;U<se;U++){const ne=B.getViewport(U);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),ie.viewport(c),B.updateMatrices(le,U),r=B.getFrustum(),P(N,j,B.camera,le,this.type)}B.isPointLightShadow!==!0&&this.type===Oi&&I(B,j),B.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(C,R,k)};function I(z,N){const j=e.update(w);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new es(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(N,null,j,x,w,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(N,null,j,y,w,null)}function D(z,N,j,C){let R=null;const k=j.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)R=k;else if(R=j.isPointLight===!0?p:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const ie=R.uuid,K=N.uuid;let fe=m[ie];fe===void 0&&(fe={},m[ie]=fe);let he=fe[K];he===void 0&&(he=R.clone(),fe[K]=he,N.addEventListener("dispose",X)),R=he}if(R.visible=N.visible,R.wireframe=N.wireframe,C===Oi?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:v[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ie=s.properties.get(R);ie.light=j}return R}function P(z,N,j,C,R){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Oi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,z.matrixWorld);const K=e.update(z),fe=z.material;if(Array.isArray(fe)){const he=K.groups;for(let oe=0,le=he.length;oe<le;oe++){const B=he[oe],ae=fe[B.materialIndex];if(ae&&ae.visible){const se=D(z,ae,C,R);z.onBeforeShadow(s,z,N,j,K,se,B),s.renderBufferDirect(j,null,K,se,z,B),z.onAfterShadow(s,z,N,j,K,se,B)}}}else if(fe.visible){const he=D(z,fe,C,R);z.onBeforeShadow(s,z,N,j,K,he,null),s.renderBufferDirect(j,null,K,he,z,null),z.onAfterShadow(s,z,N,j,K,he,null)}}const ie=z.children;for(let K=0,fe=ie.length;K<fe;K++)P(ie[K],N,j,C,R)}function X(z){z.target.removeEventListener("dispose",X);for(const j in m){const C=m[j],R=z.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const pE={[af]:lf,[uf]:df,[cf]:hf,[Xs]:ff,[lf]:af,[df]:uf,[hf]:cf,[ff]:Xs};function mE(s,e){function n(){let G=!1;const Ae=new Wt;let re=null;const de=new Wt(0,0,0,0);return{setMask:function(be){re!==be&&!G&&(s.colorMask(be,be,be,be),re=be)},setLocked:function(be){G=be},setClear:function(be,Pe,rt,It,$t){$t===!0&&(be*=It,Pe*=It,rt*=It),Ae.set(be,Pe,rt,It),de.equals(Ae)===!1&&(s.clearColor(be,Pe,rt,It),de.copy(Ae))},reset:function(){G=!1,re=null,de.set(-1,0,0,0)}}}function r(){let G=!1,Ae=!1,re=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const rt=e.get("EXT_clip_control");Ae?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const It=be;be=null,this.setClear(It)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Pe){re!==Pe&&!G&&(s.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(Ae&&(Pe=pE[Pe]),de!==Pe){switch(Pe){case af:s.depthFunc(s.NEVER);break;case lf:s.depthFunc(s.ALWAYS);break;case uf:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case cf:s.depthFunc(s.EQUAL);break;case ff:s.depthFunc(s.GEQUAL);break;case df:s.depthFunc(s.GREATER);break;case hf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),s.clearDepth(Pe),be=Pe)},reset:function(){G=!1,re=null,de=null,be=null,Ae=!1}}}function a(){let G=!1,Ae=null,re=null,de=null,be=null,Pe=null,rt=null,It=null,$t=null;return{setTest:function(vt){G||(vt?ve(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!G&&(s.stencilMask(vt),Ae=vt)},setFunc:function(vt,Rn,Sn){(re!==vt||de!==Rn||be!==Sn)&&(s.stencilFunc(vt,Rn,Sn),re=vt,de=Rn,be=Sn)},setOp:function(vt,Rn,Sn){(Pe!==vt||rt!==Rn||It!==Sn)&&(s.stencilOp(vt,Rn,Sn),Pe=vt,rt=Rn,It=Sn)},setLocked:function(vt){G=vt},setClear:function(vt){$t!==vt&&(s.clearStencil(vt),$t=vt)},reset:function(){G=!1,Ae=null,re=null,de=null,be=null,Pe=null,rt=null,It=null,$t=null}}}const l=new n,c=new r,f=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,y=[],E=null,w=!1,S=null,g=null,I=null,D=null,P=null,X=null,z=null,N=new St(0,0,0),j=0,C=!1,R=null,k=null,ie=null,K=null,fe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(B)[1]),oe=le>=1):B.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),oe=le>=2);let ae=null,se={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Ie=new Wt().fromArray(U),Z=new Wt().fromArray(ne);function ue(G,Ae,re,de){const be=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<re;rt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Ae+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Pe}const Me={};Me[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),c.setFunc(Xs),dt(!1),ut(zp),ve(s.CULL_FACE),O(xr);function ve(G){_[G]!==!0&&(s.enable(G),_[G]=!0)}function Te(G){_[G]!==!1&&(s.disable(G),_[G]=!1)}function Ue(G,Ae){return v[G]!==Ae?(s.bindFramebuffer(G,Ae),v[G]=Ae,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Qe(G,Ae){let re=y,de=!1;if(G){re=x.get(Ae),re===void 0&&(re=[],x.set(Ae,re));const be=G.textures;if(re.length!==be.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=be.length;Pe<rt;Pe++)re[Pe]=s.COLOR_ATTACHMENT0+Pe;re.length=be.length,de=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,de=!0);de&&s.drawBuffers(re)}function Ct(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const pt={[Yr]:s.FUNC_ADD,[Sv]:s.FUNC_SUBTRACT,[yv]:s.FUNC_REVERSE_SUBTRACT};pt[Mv]=s.MIN,pt[Ev]=s.MAX;const Dt={[Tv]:s.ZERO,[wv]:s.ONE,[Av]:s.SRC_COLOR,[sf]:s.SRC_ALPHA,[Lv]:s.SRC_ALPHA_SATURATE,[bv]:s.DST_COLOR,[Cv]:s.DST_ALPHA,[Rv]:s.ONE_MINUS_SRC_COLOR,[of]:s.ONE_MINUS_SRC_ALPHA,[Dv]:s.ONE_MINUS_DST_COLOR,[Pv]:s.ONE_MINUS_DST_ALPHA,[Iv]:s.CONSTANT_COLOR,[Uv]:s.ONE_MINUS_CONSTANT_COLOR,[Nv]:s.CONSTANT_ALPHA,[Fv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(G,Ae,re,de,be,Pe,rt,It,$t,vt){if(G===xr){w===!0&&(Te(s.BLEND),w=!1);return}if(w===!1&&(ve(s.BLEND),w=!0),G!==xv){if(G!==S||vt!==C){if((g!==Yr||P!==Yr)&&(s.blendEquation(s.FUNC_ADD),g=Yr,P=Yr),vt)switch(G){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bp:s.blendFunc(s.ONE,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,D=null,X=null,z=null,N.set(0,0,0),j=0,S=G,C=vt}return}be=be||Ae,Pe=Pe||re,rt=rt||de,(Ae!==g||be!==P)&&(s.blendEquationSeparate(pt[Ae],pt[be]),g=Ae,P=be),(re!==I||de!==D||Pe!==X||rt!==z)&&(s.blendFuncSeparate(Dt[re],Dt[de],Dt[Pe],Dt[rt]),I=re,D=de,X=Pe,z=rt),(It.equals(N)===!1||$t!==j)&&(s.blendColor(It.r,It.g,It.b,$t),N.copy(It),j=$t),S=G,C=!1}function xn(G,Ae){G.side===Bi?Te(s.CULL_FACE):ve(s.CULL_FACE);let re=G.side===Nn;Ae&&(re=!re),dt(re),G.blending===Vs&&G.transparent===!1?O(xr):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const de=G.stencilWrite;f.setTest(de),de&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Rt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function ut(G){G!==gv?(ve(s.CULL_FACE),G!==k&&(G===zp?s.cullFace(s.BACK):G===_v?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),k=G}function Ye(G){G!==ie&&(oe&&s.lineWidth(G),ie=G)}function Rt(G,Ae,re){G?(ve(s.POLYGON_OFFSET_FILL),(K!==Ae||fe!==re)&&(s.polygonOffset(Ae,re),K=Ae,fe=re)):Te(s.POLYGON_OFFSET_FILL)}function Xe(G){G?ve(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function b(G){G===void 0&&(G=s.TEXTURE0+he-1),ae!==G&&(s.activeTexture(G),ae=G)}function T(G,Ae,re){re===void 0&&(ae===null?re=s.TEXTURE0+he-1:re=ae);let de=se[re];de===void 0&&(de={type:void 0,texture:void 0},se[re]=de),(de.type!==G||de.texture!==Ae)&&(ae!==re&&(s.activeTexture(re),ae=re),s.bindTexture(G,Ae||Me[G]),de.type=G,de.texture=Ae)}function $(){const G=se[ae];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){Ie.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ie.copy(G))}function Be(G){Z.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Z.copy(G))}function ct(G,Ae){let re=m.get(Ae);re===void 0&&(re=new WeakMap,m.set(Ae,re));let de=re.get(G);de===void 0&&(de=s.getUniformBlockIndex(Ae,G.name),re.set(G,de))}function it(G,Ae){const de=m.get(Ae).get(G);p.get(Ae)!==de&&(s.uniformBlockBinding(Ae,de,G.__bindingPointIndex),p.set(Ae,de))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ae=null,se={},v={},x=new WeakMap,y=[],E=null,w=!1,S=null,g=null,I=null,D=null,P=null,X=null,z=null,N=new St(0,0,0),j=0,C=!1,R=null,k=null,ie=null,K=null,fe=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Qe,useProgram:Ct,setBlending:O,setMaterial:xn,setFlipSided:dt,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:Rt,setScissorTest:Xe,activeTexture:b,bindTexture:T,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ze,texImage3D:$e,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:ye,texSubImage2D:ce,texSubImage3D:Ve,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:Je,viewport:Be,reset:At}}function gE(s,e,n,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,_=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,T){return y?new OffscreenCanvas(b,T):Ol("canvas")}function w(b,T,$){let pe=1;const ge=Xe(b);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);v===void 0&&(v=E(ce,Ve));const we=T?E(ce,Ve):v;return we.width=ce,we.height=Ve,we.getContext("2d").drawImage(b,0,0,ce,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ve+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),b;return b}function S(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(b,T,$,pe,ge=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=T;if(T===s.RED&&($===s.FLOAT&&(ce=s.R32F),$===s.HALF_FLOAT&&(ce=s.R16F),$===s.UNSIGNED_BYTE&&(ce=s.R8)),T===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.R8UI),$===s.UNSIGNED_SHORT&&(ce=s.R16UI),$===s.UNSIGNED_INT&&(ce=s.R32UI),$===s.BYTE&&(ce=s.R8I),$===s.SHORT&&(ce=s.R16I),$===s.INT&&(ce=s.R32I)),T===s.RG&&($===s.FLOAT&&(ce=s.RG32F),$===s.HALF_FLOAT&&(ce=s.RG16F),$===s.UNSIGNED_BYTE&&(ce=s.RG8)),T===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RG8UI),$===s.UNSIGNED_SHORT&&(ce=s.RG16UI),$===s.UNSIGNED_INT&&(ce=s.RG32UI),$===s.BYTE&&(ce=s.RG8I),$===s.SHORT&&(ce=s.RG16I),$===s.INT&&(ce=s.RG32I)),T===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),$===s.UNSIGNED_INT&&(ce=s.RGB32UI),$===s.BYTE&&(ce=s.RGB8I),$===s.SHORT&&(ce=s.RGB16I),$===s.INT&&(ce=s.RGB32I)),T===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),$===s.UNSIGNED_INT&&(ce=s.RGBA32UI),$===s.BYTE&&(ce=s.RGBA8I),$===s.SHORT&&(ce=s.RGBA16I),$===s.INT&&(ce=s.RGBA32I)),T===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),T===s.RGBA){const Ve=ge?Nl:Tt.getTransfer(pe);$===s.FLOAT&&(ce=s.RGBA32F),$===s.HALF_FLOAT&&(ce=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ce=Ve===bt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(b,T){let $;return b?T===null||T===Jr||T===qs?$=s.DEPTH24_STENCIL8:T===ki?$=s.DEPTH32F_STENCIL8:T===Wo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Jr||T===qs?$=s.DEPTH_COMPONENT24:T===ki?$=s.DEPTH_COMPONENT32F:T===Wo&&($=s.DEPTH_COMPONENT16),$}function X(b,T){return S(b)===!0||b.isFramebufferTexture&&b.minFilter!==ci&&b.minFilter!==_i?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function z(b){const T=b.target;T.removeEventListener("dispose",z),j(T),T.isVideoTexture&&_.delete(T)}function N(b){const T=b.target;T.removeEventListener("dispose",N),R(T)}function j(b){const T=r.get(b);if(T.__webglInit===void 0)return;const $=b.source,pe=x.get($);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(b),Object.keys(pe).length===0&&x.delete($)}r.remove(b)}function C(b){const T=r.get(b);s.deleteTexture(T.__webglTexture);const $=b.source,pe=x.get($);delete pe[T.__cacheKey],c.memory.textures--}function R(b){const T=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=b.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ce=r.get($[pe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),c.memory.textures--),r.remove($[pe])}r.remove(b)}let k=0;function ie(){k=0}function K(){const b=k;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),k+=1,b}function fe(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function he(b,T){const $=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const pe=b.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,b,T);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+T)}function oe(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Z($,b,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+T)}function le(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Z($,b,T);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+T)}function B(b,T){const $=r.get(b);if(b.version>0&&$.__version!==b.version){ue($,b,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+T)}const ae={[gf]:s.REPEAT,[Zr]:s.CLAMP_TO_EDGE,[_f]:s.MIRRORED_REPEAT},se={[ci]:s.NEAREST,[jv]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[Ac]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},U={[Kv]:s.NEVER,[n0]:s.ALWAYS,[Zv]:s.LESS,[rg]:s.LEQUAL,[Qv]:s.EQUAL,[t0]:s.GEQUAL,[Jv]:s.GREATER,[e0]:s.NOTEQUAL};function ne(b,T){if(T.type===ki&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===_i||T.magFilter===Ac||T.magFilter===tl||T.magFilter===Qr||T.minFilter===_i||T.minFilter===Ac||T.minFilter===tl||T.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[T.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ci||T.minFilter!==tl&&T.minFilter!==Qr||T.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ie(b,T){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",z));const pe=T.source;let ge=x.get(pe);ge===void 0&&(ge={},x.set(pe,ge));const ce=fe(T);if(ce!==b.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[ce].usedTimes++;const Ve=ge[b.__cacheKey];Ve!==void 0&&(ge[b.__cacheKey].usedTimes--,Ve.usedTimes===0&&C(T)),b.__cacheKey=ce,b.__webglTexture=ge[ce].texture}return $}function Z(b,T,$){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Ie(b,T),ce=T.source;n.bindTexture(pe,b.__webglTexture,s.TEXTURE0+$);const Ve=r.get(ce);if(ce.version!==Ve.__version||ge===!0){n.activeTexture(s.TEXTURE0+$);const we=Tt.getPrimaries(Tt.workingColorSpace),Ne=T.colorSpace===vr?null:Tt.getPrimaries(T.colorSpace),lt=T.colorSpace===vr||we===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ye=w(T.image,!1,a.maxTextureSize);ye=Rt(T,ye);const ze=l.convert(T.format,T.colorSpace),$e=l.convert(T.type);let Je=D(T.internalFormat,ze,$e,T.colorSpace,T.isVideoTexture);ne(pe,T);let Be;const ct=T.mipmaps,it=T.isVideoTexture!==!0,At=Ve.__version===void 0||ge===!0,G=ce.dataReady,Ae=X(T,ye);if(T.isDepthTexture)Je=P(T.format===$s,T.type),At&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,ze,$e,null));else if(T.isDataTexture)if(ct.length>0){it&&At&&n.texStorage2D(s.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let re=0,de=ct.length;re<de;re++)Be=ct[re],it?G&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,ze,$e,Be.data):n.texImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,ze,$e,Be.data);T.generateMipmaps=!1}else it?(At&&n.texStorage2D(s.TEXTURE_2D,Ae,Je,ye.width,ye.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,ze,$e,ye.data)):n.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,ze,$e,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Je,ct[0].width,ct[0].height,ye.depth);for(let re=0,de=ct.length;re<de;re++)if(Be=ct[re],T.format!==ui)if(ze!==null)if(it){if(G)if(T.layerUpdates.size>0){const be=_m(Be.width,Be.height,T.format,T.type);for(const Pe of T.layerUpdates){const rt=Be.data.subarray(Pe*be/Be.data.BYTES_PER_ELEMENT,(Pe+1)*be/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Pe,Be.width,Be.height,1,ze,rt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,ye.depth,ze,Be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Je,Be.width,Be.height,ye.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,ye.depth,ze,$e,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,re,Je,Be.width,Be.height,ye.depth,0,ze,$e,Be.data)}else{it&&At&&n.texStorage2D(s.TEXTURE_2D,Ae,Je,ct[0].width,ct[0].height);for(let re=0,de=ct.length;re<de;re++)Be=ct[re],T.format!==ui?ze!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,ze,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?G&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Be.width,Be.height,ze,$e,Be.data):n.texImage2D(s.TEXTURE_2D,re,Je,Be.width,Be.height,0,ze,$e,Be.data)}else if(T.isDataArrayTexture)if(it){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Je,ye.width,ye.height,ye.depth),G)if(T.layerUpdates.size>0){const re=_m(ye.width,ye.height,T.format,T.type);for(const de of T.layerUpdates){const be=ye.data.subarray(de*re/ye.data.BYTES_PER_ELEMENT,(de+1)*re/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,ze,$e,be)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ze,$e,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ye.width,ye.height,ye.depth,0,ze,$e,ye.data);else if(T.isData3DTexture)it?(At&&n.texStorage3D(s.TEXTURE_3D,Ae,Je,ye.width,ye.height,ye.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ze,$e,ye.data)):n.texImage3D(s.TEXTURE_3D,0,Je,ye.width,ye.height,ye.depth,0,ze,$e,ye.data);else if(T.isFramebufferTexture){if(At)if(it)n.texStorage2D(s.TEXTURE_2D,Ae,Je,ye.width,ye.height);else{let re=ye.width,de=ye.height;for(let be=0;be<Ae;be++)n.texImage2D(s.TEXTURE_2D,be,Je,re,de,0,ze,$e,null),re>>=1,de>>=1}}else if(ct.length>0){if(it&&At){const re=Xe(ct[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Je,re.width,re.height)}for(let re=0,de=ct.length;re<de;re++)Be=ct[re],it?G&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,ze,$e,Be):n.texImage2D(s.TEXTURE_2D,re,Je,ze,$e,Be);T.generateMipmaps=!1}else if(it){if(At){const re=Xe(ye);n.texStorage2D(s.TEXTURE_2D,Ae,Je,re.width,re.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,$e,ye)}else n.texImage2D(s.TEXTURE_2D,0,Je,ze,$e,ye);S(T)&&g(pe),Ve.__version=ce.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function ue(b,T,$){if(T.image.length!==6)return;const pe=Ie(b,T),ge=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+$);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){n.activeTexture(s.TEXTURE0+$);const Ve=Tt.getPrimaries(Tt.workingColorSpace),we=T.colorSpace===vr?null:Tt.getPrimaries(T.colorSpace),Ne=T.colorSpace===vr||Ve===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let de=0;de<6;de++)!lt&&!ye?ze[de]=w(T.image[de],!0,a.maxCubemapSize):ze[de]=ye?T.image[de].image:T.image[de],ze[de]=Rt(T,ze[de]);const $e=ze[0],Je=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),ct=D(T.internalFormat,Je,Be,T.colorSpace),it=T.isVideoTexture!==!0,At=ce.__version===void 0||pe===!0,G=ge.dataReady;let Ae=X(T,$e);ne(s.TEXTURE_CUBE_MAP,T);let re;if(lt){it&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ct,$e.width,$e.height);for(let de=0;de<6;de++){re=ze[de].mipmaps;for(let be=0;be<re.length;be++){const Pe=re[be];T.format!==ui?Je!==null?it?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,Je,Be,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ct,Pe.width,Pe.height,0,Je,Be,Pe.data)}}}else{if(re=T.mipmaps,it&&At){re.length>0&&Ae++;const de=Xe(ze[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ct,de.width,de.height)}for(let de=0;de<6;de++)if(ye){it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ze[de].width,ze[de].height,Je,Be,ze[de].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,ze[de].width,ze[de].height,0,Je,Be,ze[de].data);for(let be=0;be<re.length;be++){const rt=re[be].image[de].image;it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,rt.width,rt.height,Je,Be,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,rt.width,rt.height,0,Je,Be,rt.data)}}else{it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Je,Be,ze[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ct,Je,Be,ze[de]);for(let be=0;be<re.length;be++){const Pe=re[be];it?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,Je,Be,Pe.image[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ct,Je,Be,Pe.image[de])}}}S(T)&&g(s.TEXTURE_CUBE_MAP),ce.__version=ge.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Me(b,T,$,pe,ge,ce){const Ve=l.convert($.format,$.colorSpace),we=l.convert($.type),Ne=D($.internalFormat,Ve,we,$.colorSpace),lt=r.get(T),ye=r.get($);if(ye.__renderTarget=T,!lt.__hasExternalTextures){const ze=Math.max(1,T.width>>ce),$e=Math.max(1,T.height>>ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,ce,Ne,ze,$e,T.depth,0,Ve,we,null):n.texImage2D(ge,ce,Ne,ze,$e,0,Ve,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ut(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,dt(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,T,$){if(s.bindRenderbuffer(s.RENDERBUFFER,b),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=P(T.stencilBuffer,ge),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=dt(T);ut(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ce,T.width,T.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ce,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ce,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,b)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],Ve=l.convert(ce.format,ce.colorSpace),we=l.convert(ce.type),Ne=D(ce.internalFormat,Ve,we,ce.colorSpace),lt=dt(T);$&&ut(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ne,T.width,T.height):ut(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ge=pe.__webglTexture,ce=dt(T);if(T.depthTexture.format===Gs)ut(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(T.depthTexture.format===$s)ut(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const T=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==b.depthTexture){const pe=b.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,b)}else if($){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[pe],b,!1);else{const ge=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,b,!1);else{const pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ge)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(b,T,$){const pe=r.get(b);T!==void 0&&Me(pe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Ue(b)}function Ct(b){const T=b.texture,$=r.get(b),pe=r.get(T);b.addEventListener("dispose",N);const ge=b.textures,ce=b.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,c.memory.textures++),ce){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)$.__webglFramebuffer[we][Ne]=s.createFramebuffer()}else $.__webglFramebuffer[we]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)$.__webglFramebuffer[we]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let we=0,Ne=ge.length;we<Ne;we++){const lt=r.get(ge[we]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&ut(b)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];$.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const lt=l.convert(Ne.format,Ne.colorSpace),ye=l.convert(Ne.type),ze=D(Ne.internalFormat,lt,ye,Ne.colorSpace,b.isXRRenderTarget===!0),$e=dt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,ze,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,$.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ve($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Me($.__webglFramebuffer[we][Ne],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Me($.__webglFramebuffer[we],b,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(T)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let we=0,Ne=ge.length;we<Ne;we++){const lt=ge[we],ye=r.get(lt);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ne(s.TEXTURE_2D,lt),Me($.__webglFramebuffer,b,lt,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),S(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),ne(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Me($.__webglFramebuffer[Ne],b,T,s.COLOR_ATTACHMENT0,we,Ne);else Me($.__webglFramebuffer,b,T,s.COLOR_ATTACHMENT0,we,0);S(T)&&g(we),n.unbindTexture()}b.depthBuffer&&Ue(b)}function pt(b){const T=b.textures;for(let $=0,pe=T.length;$<pe;$++){const ge=T[$];if(S(ge)){const ce=I(b),Ve=r.get(ge).__webglTexture;n.bindTexture(ce,Ve),g(ce),n.unbindTexture()}}}const Dt=[],O=[];function xn(b){if(b.samples>0){if(ut(b)===!1){const T=b.textures,$=b.width,pe=b.height;let ge=s.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(b),we=T.length>1;if(we)for(let Ne=0;Ne<T.length;Ne++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const lt=r.get(T[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,s.NEAREST),p===!0&&(Dt.length=0,O.length=0,Dt.push(s.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Dt.push(ce),O.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<T.length;Ne++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const lt=r.get(T[Ne]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const T=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function dt(b){return Math.min(a.maxSamples,b.samples)}function ut(b){const T=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(b){const T=c.render.frame;_.get(b)!==T&&(_.set(b,T),b.update())}function Rt(b,T){const $=b.colorSpace,pe=b.format,ge=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Ks&&$!==vr&&(Tt.getTransfer($)===bt?(pe!==ui||ge!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=B,this.rebindTextures=Qe,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ut}function _E(s,e){function n(r,a=vr){let l;const c=Tt.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Zf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===$m)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ym)return s.BYTE;if(r===qm)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Kf)return s.INT;if(r===Jr)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Xo)return s.HALF_FLOAT;if(r===Km)return s.ALPHA;if(r===Zm)return s.RGB;if(r===ui)return s.RGBA;if(r===Qm)return s.LUMINANCE;if(r===Jm)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===eg)return s.RED;if(r===Jf)return s.RED_INTEGER;if(r===tg)return s.RG;if(r===ed)return s.RG_INTEGER;if(r===td)return s.RGBA_INTEGER;if(r===Cl||r===Pl||r===bl||r===Dl)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Cl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Cl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vf||r===xf||r===Sf||r===yf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===vf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mf||r===Ef||r===Tf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Mf||r===Ef)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Tf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Df||r===Lf||r===If||r===Uf||r===Nf||r===Ff||r===Of||r===zf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===wf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Af)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Df)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===If)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ff)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Of)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zf)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ll||r===Bf||r===kf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ll)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ng||r===Hf||r===Vf||r===Gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ll)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Hf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const vE={type:"move"};class rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const w of e.hand.values()){const S=n.getJointPose(w,r),g=this._getHandJoint(m,w);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),y=.02,E=.005;m.inputState.pinching&&x>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const xE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Fn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:xE,fragmentShader:SE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new Vl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ME extends Qs{constructor(e,n){super();const r=this;let a=null,l=1,c=null,f="local-floor",p=1,m=null,_=null,v=null,x=null,y=null,E=null;const w=new yE,S=n.getContextAttributes();let g=null,I=null;const D=[],P=[],X=new wt;let z=null;const N=new Zn;N.viewport=new Wt;const j=new Zn;j.viewport=new Wt;const C=[N,j],R=new V0;let k=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=D[Z];return ue===void 0&&(ue=new rf,D[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=D[Z];return ue===void 0&&(ue=new rf,D[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=D[Z];return ue===void 0&&(ue=new rf,D[Z]=ue),ue.getHandSpace()};function K(Z){const ue=P.indexOf(Z.inputSource);if(ue===-1)return;const Me=D[ue];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,m||c),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",he);for(let Z=0;Z<D.length;Z++){const ue=P[Z];ue!==null&&(P[Z]=null,D[Z].disconnect(ue))}k=null,ie=null,w.reset(),e.setRenderTarget(g),y=null,x=null,v=null,a=null,I=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(X),a.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,n,ue),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new es(y.framebufferWidth,y.framebufferHeight,{format:ui,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Me=null,ve=null;S.depth&&(ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=S.stencil?$s:Gs,Me=S.stencil?qs:Jr);const Te={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:l};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Te),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new es(x.textureWidth,x.textureHeight,{format:ui,type:Gi,depthTexture:new gg(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await a.requestReferenceSpace(f),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(Z){for(let ue=0;ue<Z.removed.length;ue++){const Me=Z.removed[ue],ve=P.indexOf(Me);ve>=0&&(P[ve]=null,D[ve].disconnect(Me))}for(let ue=0;ue<Z.added.length;ue++){const Me=Z.added[ue];let ve=P.indexOf(Me);if(ve===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=P.length){P.push(Me),ve=Ue;break}else if(P[Ue]===null){P[Ue]=Me,ve=Ue;break}if(ve===-1)break}const Te=D[ve];Te&&Te.connect(Me)}}const oe=new Q,le=new Q;function B(Z,ue,Me){oe.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=oe.distanceTo(le),Te=ue.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Qe=Te[14]/(Te[10]-1),Ct=Te[14]/(Te[10]+1),pt=(Te[9]+1)/Te[5],Dt=(Te[9]-1)/Te[5],O=(Te[8]-1)/Te[0],xn=(Ue[8]+1)/Ue[0],dt=Qe*O,ut=Qe*xn,Ye=ve/(-O+xn),Rt=Ye*-O;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=Qe+Ye,b=Ct+Ye,T=dt-Rt,$=ut+(ve-Rt),pe=pt*Ct/b*Xe,ge=Dt*Ct/b*Xe;Z.projectionMatrix.makePerspective(T,$,pe,ge,Xe,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ue=Z.near,Me=Z.far;w.texture!==null&&(w.depthNear>0&&(ue=w.depthNear),w.depthFar>0&&(Me=w.depthFar)),R.near=j.near=N.near=ue,R.far=j.far=N.far=Me,(k!==R.near||ie!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,ie=R.far),N.layers.mask=Z.layers.mask|2,j.layers.mask=Z.layers.mask|4,R.layers.mask=N.layers.mask|j.layers.mask;const ve=Z.parent,Te=R.cameras;ae(R,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?B(R,N,j):R.projectionMatrix.copy(N.projectionMatrix),se(Z,R,ve)};function se(Z,ue,Me){Me===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Z){p=Z,x!==null&&(x.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let U=null;function ne(Z,ue){if(_=ue.getViewerPose(m||c),E=ue,_!==null){const Me=_.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let ve=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<Me.length;Ue++){const Qe=Me[Ue];let Ct=null;if(y!==null)Ct=y.getViewport(Qe);else{const Dt=v.getViewSubImage(x,Qe);Ct=Dt.viewport,Ue===0&&(e.setRenderTargetTextures(I,Dt.colorTexture,x.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(I))}let pt=C[Ue];pt===void 0&&(pt=new Zn,pt.layers.enable(Ue),pt.viewport=new Wt,C[Ue]=pt),pt.matrix.fromArray(Qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ue===0&&(R.matrix.copy(pt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(pt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=v.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,a.renderState)}}for(let Me=0;Me<D.length;Me++){const ve=P[Me],Te=D[Me];ve!==null&&Te!==void 0&&Te.update(ve,ue,m||c)}U&&U(Z,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ie=new xg;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const Wr=new yi,EE=new zt;function TE(s,e){function n(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,dg(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,I,D,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(S,g):g.isMeshToonMaterial?(l(S,g),v(S,g)):g.isMeshPhongMaterial?(l(S,g),_(S,g)):g.isMeshStandardMaterial?(l(S,g),x(S,g),g.isMeshPhysicalMaterial&&y(S,g,P)):g.isMeshMatcapMaterial?(l(S,g),E(S,g)):g.isMeshDepthMaterial?l(S,g):g.isMeshDistanceMaterial?(l(S,g),w(S,g)):g.isMeshNormalMaterial?l(S,g):g.isLineBasicMaterial?(c(S,g),g.isLineDashedMaterial&&f(S,g)):g.isPointsMaterial?p(S,g,I,D):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,n(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Nn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,n(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Nn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,n(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,n(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,P=I.envMapRotation;D&&(S.envMap.value=D,Wr.copy(P),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),S.envMapRotation.value.setFromMatrix4(EE.makeRotationFromEuler(Wr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,S.aoMapTransform))}function c(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform))}function f(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,I,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*I,S.scale.value=D*.5,g.map&&(S.map.value=g.map,n(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,n(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,n(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function _(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function v(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function x(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function y(S,g,I){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Nn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function w(S,g){const I=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function wE(s,e,n,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,D){const P=D.program;r.uniformBlockBinding(I,P)}function m(I,D){let P=a[I.id];P===void 0&&(E(I),P=_(I),a[I.id]=P,I.addEventListener("dispose",S));const X=D.program;r.updateUBOMapping(I,X);const z=e.render.frame;l[I.id]!==z&&(x(I),l[I.id]=z)}function _(I){const D=v();I.__bindingPointIndex=D;const P=s.createBuffer(),X=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,X,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function v(){for(let I=0;I<f;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const D=a[I.id],P=I.uniforms,X=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,N=P.length;z<N;z++){const j=Array.isArray(P[z])?P[z]:[P[z]];for(let C=0,R=j.length;C<R;C++){const k=j[C];if(y(k,z,C,X)===!0){const ie=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let fe=0;for(let he=0;he<K.length;he++){const oe=K[he],le=w(oe);typeof oe=="number"||typeof oe=="boolean"?(k.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ie+fe,k.__data)):oe.isMatrix3?(k.__data[0]=oe.elements[0],k.__data[1]=oe.elements[1],k.__data[2]=oe.elements[2],k.__data[3]=0,k.__data[4]=oe.elements[3],k.__data[5]=oe.elements[4],k.__data[6]=oe.elements[5],k.__data[7]=0,k.__data[8]=oe.elements[6],k.__data[9]=oe.elements[7],k.__data[10]=oe.elements[8],k.__data[11]=0):(oe.toArray(k.__data,fe),fe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(I,D,P,X){const z=I.value,N=D+"_"+P;if(X[N]===void 0)return typeof z=="number"||typeof z=="boolean"?X[N]=z:X[N]=z.clone(),!0;{const j=X[N];if(typeof z=="number"||typeof z=="boolean"){if(j!==z)return X[N]=z,!0}else if(j.equals(z)===!1)return j.copy(z),!0}return!1}function E(I){const D=I.uniforms;let P=0;const X=16;for(let N=0,j=D.length;N<j;N++){const C=Array.isArray(D[N])?D[N]:[D[N]];for(let R=0,k=C.length;R<k;R++){const ie=C[R],K=Array.isArray(ie.value)?ie.value:[ie.value];for(let fe=0,he=K.length;fe<he;fe++){const oe=K[fe],le=w(oe),B=P%X,ae=B%le.boundary,se=B+ae;P+=ae,se!==0&&X-se<le.storage&&(P+=X-se),ie.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=P,P+=le.storage}}}const z=P%X;return z>0&&(P+=X-z),I.__size=P,I.__cache={},this}function w(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function S(I){const D=I.target;D.removeEventListener("dispose",S);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);c=[],a={},l={}}return{bind:p,update:m,dispose:g}}class AE{constructor(e={}){const{canvas:n=r0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),w=new Int32Array(4);let S=null,g=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Sr,this.toneMappingExposure=1;const P=this;let X=!1,z=0,N=0,j=null,C=-1,R=null;const k=new Wt,ie=new Wt;let K=null;const fe=new St(0);let he=0,oe=n.width,le=n.height,B=1,ae=null,se=null;const U=new Wt(0,0,oe,le),ne=new Wt(0,0,oe,le);let Ie=!1;const Z=new rd;let ue=!1,Me=!1;const ve=new zt,Te=new zt,Ue=new Q,Qe=new Wt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Dt(){return j===null?B:1}let O=r;function xn(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$f}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const W="webgl2";if(O=xn(W,A),O===null)throw xn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let dt,ut,Ye,Rt,Xe,b,T,$,pe,ge,ce,Ve,we,Ne,lt,ye,ze,$e,Je,Be,ct,it,At,G;function Ae(){dt=new Ny(O),dt.init(),it=new _E(O,dt),ut=new Py(O,dt,e,it),Ye=new mE(O,dt),ut.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Rt=new zy(O),Xe=new nE,b=new gE(O,dt,Ye,Xe,ut,it,Rt),T=new Dy(P),$=new Uy(P),pe=new X0(O),At=new Ry(O,pe),ge=new Fy(O,pe,Rt,At),ce=new ky(O,ge,pe,Rt),Je=new By(O,ut,b),ye=new by(Xe),Ve=new tE(P,T,$,dt,ut,At,ye),we=new TE(P,Xe),Ne=new rE,lt=new cE(dt),$e=new Ay(P,T,$,Ye,ce,y,p),ze=new hE(P,ce,ut),G=new wE(O,Rt,ut,Ye),Be=new Cy(O,dt,Rt),ct=new Oy(O,dt,Rt),Rt.programs=Ve.programs,P.capabilities=ut,P.extensions=dt,P.properties=Xe,P.renderLists=Ne,P.shadowMap=ze,P.state=Ye,P.info=Rt}Ae();const re=new ME(P,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(oe,le,!1))},this.getSize=function(A){return A.set(oe,le)},this.setSize=function(A,W,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,le=W,n.width=Math.floor(A*B),n.height=Math.floor(W*B),ee===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(oe*B,le*B).floor()},this.setDrawingBufferSize=function(A,W,ee){oe=A,le=W,B=ee,n.width=Math.floor(A*ee),n.height=Math.floor(W*ee),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,W,ee,te){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,W,ee,te),Ye.viewport(k.copy(U).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,W,ee,te){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,W,ee,te),Ye.scissor(ie.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){Ye.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(A=!0,W=!0,ee=!0){let te=0;if(A){let H=!1;if(j!==null){const Se=j.texture.format;H=Se===td||Se===ed||Se===Jf}if(H){const Se=j.texture.type,Re=Se===Gi||Se===Jr||Se===Wo||Se===qs||Se===Zf||Se===Qf,Le=$e.getClearColor(),Fe=$e.getClearAlpha(),et=Le.r,tt=Le.g,je=Le.b;Re?(E[0]=et,E[1]=tt,E[2]=je,E[3]=Fe,O.clearBufferuiv(O.COLOR,0,E)):(w[0]=et,w[1]=tt,w[2]=je,w[3]=Fe,O.clearBufferiv(O.COLOR,0,w))}else te|=O.COLOR_BUFFER_BIT}W&&(te|=O.DEPTH_BUFFER_BIT),ee&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),$e.dispose(),Ne.dispose(),lt.dispose(),Xe.dispose(),T.dispose(),$.dispose(),ce.dispose(),At.dispose(),G.dispose(),Ve.dispose(),re.dispose(),re.removeEventListener("sessionstart",ts),re.removeEventListener("sessionend",Xi),Mi.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const A=Rt.autoReset,W=ze.enabled,ee=ze.autoUpdate,te=ze.needsUpdate,H=ze.type;Ae(),Rt.autoReset=A,ze.enabled=W,ze.autoUpdate=ee,ze.needsUpdate=te,ze.type=H}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const W=A.target;W.removeEventListener("dispose",rt),It(W)}function It(A){$t(A),Xe.remove(A)}function $t(A){const W=Xe.get(A).programs;W!==void 0&&(W.forEach(function(ee){Ve.releaseProgram(ee)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,ee,te,H,Se){W===null&&(W=Ct);const Re=H.isMesh&&H.matrixWorld.determinant()<0,Le=Ko(A,W,ee,te,H);Ye.setMaterial(te,Re);let Fe=ee.index,et=1;if(te.wireframe===!0){if(Fe=ge.getWireframeAttribute(ee),Fe===void 0)return;et=2}const tt=ee.drawRange,je=ee.attributes.position;let st=tt.start*et,yt=(tt.start+tt.count)*et;Se!==null&&(st=Math.max(st,Se.start*et),yt=Math.min(yt,(Se.start+Se.count)*et)),Fe!==null?(st=Math.max(st,0),yt=Math.min(yt,Fe.count)):je!=null&&(st=Math.max(st,0),yt=Math.min(yt,je.count));const Mt=yt-st;if(Mt<0||Mt===1/0)return;At.setup(H,te,Le,ee,Fe);let Ft,_t=Be;if(Fe!==null&&(Ft=pe.get(Fe),_t=ct,_t.setIndex(Ft)),H.isMesh)te.wireframe===!0?(Ye.setLineWidth(te.wireframeLinewidth*Dt()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(H.isLine){let qe=te.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Dt()),H.isLineSegments?_t.setMode(O.LINES):H.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else H.isPoints?_t.setMode(O.POINTS):H.isSprite&&_t.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qe=H._multiDrawStarts,Vt=H._multiDrawCounts,mt=H._multiDrawCount,on=Fe?pe.get(Fe).bytesPerElement:1,Jn=Xe.get(te).currentProgram.getUniforms();for(let yn=0;yn<mt;yn++)Jn.setValue(O,"_gl_DrawID",yn),_t.render(qe[yn]/on,Vt[yn])}else if(H.isInstancedMesh)_t.renderInstances(st,Mt,H.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Vt=Math.min(ee.instanceCount,qe);_t.renderInstances(st,Mt,Vt)}else _t.render(st,Mt)};function vt(A,W,ee){A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,ns(A,W,ee),A.side=yr,A.needsUpdate=!0,ns(A,W,ee),A.side=Bi):ns(A,W,ee)}this.compile=function(A,W,ee=null){ee===null&&(ee=A),g=lt.get(ee),g.init(W),D.push(g),ee.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),A!==ee&&A.traverseVisible(function(H){H.isLight&&H.layers.test(W.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const te=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Se=H.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Le=Se[Re];vt(Le,ee,H),te.add(Le)}else vt(Se,ee,H),te.add(Se)}),D.pop(),g=null,te},this.compileAsync=function(A,W,ee=null){const te=this.compile(A,W,ee);return new Promise(H=>{function Se(){if(te.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){H(A);return}setTimeout(Se,10)}dt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Rn=null;function Sn(A){Rn&&Rn(A)}function ts(){Mi.stop()}function Xi(){Mi.start()}const Mi=new xg;Mi.setAnimationLoop(Sn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){Rn=A,re.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},re.addEventListener("sessionstart",ts),re.addEventListener("sessionend",Xi),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(W),W=re.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,W,j),g=lt.get(A,D.length),g.init(W),D.push(g),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,Me),S=Ne.get(A,I.length),S.init(),I.push(S),re.enabled===!0&&re.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&Ei(Se,W,-1/0,P.sortObjects)}Ei(A,W,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(ae,se),pt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,pt&&$e.addToRenderList(S,A),this.info.render.frame++,ue===!0&&ye.beginShadows();const ee=g.state.shadowsArray;ze.render(ee,A,W),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,H=S.transmissive;if(g.setupLights(),W.isArrayCamera){const Se=W.cameras;if(H.length>0)for(let Re=0,Le=Se.length;Re<Le;Re++){const Fe=Se[Re];Tr(te,H,A,Fe)}pt&&$e.render(A);for(let Re=0,Le=Se.length;Re<Le;Re++){const Fe=Se[Re];Er(S,A,Fe,Fe.viewport)}}else H.length>0&&Tr(te,H,A,W),pt&&$e.render(A),Er(S,A,W);j!==null&&(b.updateMultisampleRenderTarget(j),b.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(P,A,W),At.resetDefaultState(),C=-1,R=null,D.pop(),D.length>0?(g=D[D.length-1],ue===!0&&ye.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Ei(A,W,ee,te){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){te&&Qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=ce.update(A),Le=A.material;Le.visible&&S.push(A,Re,Le,ee,Qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=ce.update(A),Le=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qe.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Qe.copy(Re.boundingSphere.center)),Qe.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){const Fe=Re.groups;for(let et=0,tt=Fe.length;et<tt;et++){const je=Fe[et],st=Le[je.materialIndex];st&&st.visible&&S.push(A,Re,st,ee,Qe.z,je)}}else Le.visible&&S.push(A,Re,Le,ee,Qe.z,null)}}const Se=A.children;for(let Re=0,Le=Se.length;Re<Le;Re++)Ei(Se[Re],W,ee,te)}function Er(A,W,ee,te){const H=A.opaque,Se=A.transmissive,Re=A.transparent;g.setupLightsView(ee),ue===!0&&ye.setGlobalState(P.clippingPlanes,ee),te&&Ye.viewport(k.copy(te)),H.length>0&&ji(H,W,ee),Se.length>0&&ji(Se,W,ee),Re.length>0&&ji(Re,W,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Tr(A,W,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new es(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Xo:Gi,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[te.id],Re=te.viewport||k;Se.setSize(Re.z,Re.w);const Le=P.getRenderTarget();P.setRenderTarget(Se),P.getClearColor(fe),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),pt&&$e.render(ee);const Fe=P.toneMapping;P.toneMapping=Sr;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),ue===!0&&ye.setGlobalState(P.clippingPlanes,te),ji(A,ee,te),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),dt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let je=0,st=W.length;je<st;je++){const yt=W[je],Mt=yt.object,Ft=yt.geometry,_t=yt.material,qe=yt.group;if(_t.side===Bi&&Mt.layers.test(te.layers)){const Vt=_t.side;_t.side=Nn,_t.needsUpdate=!0,qo(Mt,ee,te,Ft,_t,qe),_t.side=Vt,_t.needsUpdate=!0,tt=!0}}tt===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}P.setRenderTarget(Le),P.setClearColor(fe,he),et!==void 0&&(te.viewport=et),P.toneMapping=Fe}function ji(A,W,ee){const te=W.isScene===!0?W.overrideMaterial:null;for(let H=0,Se=A.length;H<Se;H++){const Re=A[H],Le=Re.object,Fe=Re.geometry,et=te===null?Re.material:te,tt=Re.group;Le.layers.test(ee.layers)&&qo(Le,W,ee,Fe,et,tt)}}function qo(A,W,ee,te,H,Se){A.onBeforeRender(P,W,ee,te,H,Se),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(P,W,ee,te,A,Se),H.transparent===!0&&H.side===Bi&&H.forceSinglePass===!1?(H.side=Nn,H.needsUpdate=!0,P.renderBufferDirect(ee,W,te,H,A,Se),H.side=yr,H.needsUpdate=!0,P.renderBufferDirect(ee,W,te,H,A,Se),H.side=Bi):P.renderBufferDirect(ee,W,te,H,A,Se),A.onAfterRender(P,W,ee,te,H,Se)}function ns(A,W,ee){W.isScene!==!0&&(W=Ct);const te=Xe.get(A),H=g.state.lights,Se=g.state.shadowsArray,Re=H.state.version,Le=Ve.getParameters(A,H.state,Se,W,ee),Fe=Ve.getProgramCacheKey(Le);let et=te.programs;te.environment=A.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(A.isMeshStandardMaterial?$:T).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",rt),et=new Map,te.programs=et);let tt=et.get(Fe);if(tt!==void 0){if(te.currentProgram===tt&&te.lightsStateVersion===Re)return fi(A,Le),tt}else Le.uniforms=Ve.getUniforms(A),A.onBeforeCompile(Le,P),tt=Ve.acquireProgram(Le,Fe),et.set(Fe,tt),te.uniforms=Le.uniforms;const je=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=ye.uniform),fi(A,Le),te.needsLights=Wl(A),te.lightsStateVersion=Re,te.needsLights&&(je.ambientLightColor.value=H.state.ambient,je.lightProbe.value=H.state.probe,je.directionalLights.value=H.state.directional,je.directionalLightShadows.value=H.state.directionalShadow,je.spotLights.value=H.state.spot,je.spotLightShadows.value=H.state.spotShadow,je.rectAreaLights.value=H.state.rectArea,je.ltc_1.value=H.state.rectAreaLTC1,je.ltc_2.value=H.state.rectAreaLTC2,je.pointLights.value=H.state.point,je.pointLightShadows.value=H.state.pointShadow,je.hemisphereLights.value=H.state.hemi,je.directionalShadowMap.value=H.state.directionalShadowMap,je.directionalShadowMatrix.value=H.state.directionalShadowMatrix,je.spotShadowMap.value=H.state.spotShadowMap,je.spotLightMatrix.value=H.state.spotLightMatrix,je.spotLightMap.value=H.state.spotLightMap,je.pointShadowMap.value=H.state.pointShadowMap,je.pointShadowMatrix.value=H.state.pointShadowMatrix),te.currentProgram=tt,te.uniformsList=null,tt}function $o(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ul.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function fi(A,W){const ee=Xe.get(A);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Ko(A,W,ee,te,H){W.isScene!==!0&&(W=Ct),b.resetTextureUnits();const Se=W.fog,Re=te.isMeshStandardMaterial?W.environment:null,Le=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ks,Fe=(te.isMeshStandardMaterial?$:T).get(te.envMap||Re),et=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,tt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),je=!!ee.morphAttributes.position,st=!!ee.morphAttributes.normal,yt=!!ee.morphAttributes.color;let Mt=Sr;te.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Mt=P.toneMapping);const Ft=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Ft!==void 0?Ft.length:0,qe=Xe.get(te),Vt=g.state.lights;if(ue===!0&&(Me===!0||A!==R)){const Xt=A===R&&te.id===C;ye.setState(te,A,Xt)}let mt=!1;te.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Vt.state.version||qe.outputColorSpace!==Le||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isBatchedMesh&&qe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&qe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qe.instancingMorph===!1&&H.morphTexture!==null||qe.envMap!==Fe||te.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ye.numPlanes||qe.numIntersection!==ye.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==tt||qe.morphTargets!==je||qe.morphNormals!==st||qe.morphColors!==yt||qe.toneMapping!==Mt||qe.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,qe.__version=te.version);let on=qe.currentProgram;mt===!0&&(on=ns(te,W,H));let Jn=!1,yn=!1,wr=!1;const Pt=on.getUniforms(),Mn=qe.uniforms;if(Ye.useProgram(on.program)&&(Jn=!0,yn=!0,wr=!0),te.id!==C&&(C=te.id,yn=!0),Jn||R!==A){Ye.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),o0(ve),a0(ve),Pt.setValue(O,"projectionMatrix",ve)):Pt.setValue(O,"projectionMatrix",A.projectionMatrix),Pt.setValue(O,"viewMatrix",A.matrixWorldInverse);const fn=Pt.map.cameraPosition;fn!==void 0&&fn.setValue(O,Ue.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Pt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,yn=!0,wr=!0)}if(H.isSkinnedMesh){Pt.setOptional(O,H,"bindMatrix"),Pt.setOptional(O,H,"bindMatrixInverse");const Xt=H.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Pt.setValue(O,"boneTexture",Xt.boneTexture,b))}H.isBatchedMesh&&(Pt.setOptional(O,H,"batchingTexture"),Pt.setValue(O,"batchingTexture",H._matricesTexture,b),Pt.setOptional(O,H,"batchingIdTexture"),Pt.setValue(O,"batchingIdTexture",H._indirectTexture,b),Pt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Pt.setValue(O,"batchingColorTexture",H._colorsTexture,b));const cn=ee.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Je.update(H,ee,on),(yn||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Pt.setValue(O,"receiveShadow",H.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Mn.envMap.value=Fe,Mn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(Mn.envMapIntensity.value=W.environmentIntensity),yn&&(Pt.setValue(O,"toneMappingExposure",P.toneMappingExposure),qe.needsLights&&Zo(Mn,wr),Se&&te.fog===!0&&we.refreshFogUniforms(Mn,Se),we.refreshMaterialUniforms(Mn,te,B,le,g.state.transmissionRenderTarget[A.id]),Ul.upload(O,$o(qe),Mn,b)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ul.upload(O,$o(qe),Mn,b),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Pt.setValue(O,"center",H.center),Pt.setValue(O,"modelViewMatrix",H.modelViewMatrix),Pt.setValue(O,"normalMatrix",H.normalMatrix),Pt.setValue(O,"modelMatrix",H.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Xt=te.uniformsGroups;for(let fn=0,Ar=Xt.length;fn<Ar;fn++){const ht=Xt[fn];G.update(ht,on),G.bind(ht,on)}}return on}function Zo(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Wl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,W,ee){Xe.get(A.texture).__webglTexture=W,Xe.get(A.depthTexture).__webglTexture=ee;const te=Xe.get(A);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=ee===void 0,te.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const ee=Xe.get(A);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,ee=0){j=A,z=W,N=ee;let te=!0,H=null,Se=!1,Re=!1;if(A){const Fe=Xe.get(A);if(Fe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(O.FRAMEBUFFER,null),te=!1;else if(Fe.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Fe.__hasExternalTextures)b.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Fe.__boundDepthTexture!==je){if(je!==null&&Xe.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const tt=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?H=tt[W][ee]:H=tt[W],Se=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?H=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?H=tt[ee]:H=tt,k.copy(A.viewport),ie.copy(A.scissor),K=A.scissorTest}else k.copy(U).multiplyScalar(B).floor(),ie.copy(ne).multiplyScalar(B).floor(),K=Ie;if(Ye.bindFramebuffer(O.FRAMEBUFFER,H)&&te&&Ye.drawBuffers(A,H),Ye.viewport(k),Ye.scissor(ie),Ye.setScissorTest(K),Se){const Fe=Xe.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,ee)}else if(Re){const Fe=Xe.get(A.texture),et=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.__webglTexture,ee||0,et)}C=-1},this.readRenderTargetPixels=function(A,W,ee,te,H,Se,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){Ye.bindFramebuffer(O.FRAMEBUFFER,Le);try{const Fe=A.texture,et=Fe.format,tt=Fe.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-te&&ee>=0&&ee<=A.height-H&&O.readPixels(W,ee,te,H,it.convert(et),it.convert(tt),Se)}finally{const Fe=j!==null?Xe.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,W,ee,te,H,Se,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const Fe=A.texture,et=Fe.format,tt=Fe.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-te&&ee>=0&&ee<=A.height-H){Ye.bindFramebuffer(O.FRAMEBUFFER,Le);const je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(W,ee,te,H,it.convert(et),it.convert(tt),0);const st=j!==null?Xe.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,st);const yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await s0(O,yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(je),O.deleteSync(yt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,ee=0){A.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const te=Math.pow(2,-ee),H=Math.floor(A.image.width*te),Se=Math.floor(A.image.height*te),Re=W!==null?W.x:0,Le=W!==null?W.y:0;b.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,Re,Le,H,Se),Ye.unbindTexture()};const Qo=O.createFramebuffer(),Jo=O.createFramebuffer();this.copyTextureToTexture=function(A,W,ee=null,te=null,H=0,Se=null){A.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,A=arguments[1],W=arguments[2],Se=arguments[3]||0,ee=null),Se===null&&(H!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=H,H=0):Se=0);let Re,Le,Fe,et,tt,je,st,yt,Mt;const Ft=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ee!==null)Re=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Fe=ee.isBox3?ee.max.z-ee.min.z:1,et=ee.min.x,tt=ee.min.y,je=ee.isBox3?ee.min.z:0;else{const cn=Math.pow(2,-H);Re=Math.floor(Ft.width*cn),Le=Math.floor(Ft.height*cn),A.isDataArrayTexture?Fe=Ft.depth:A.isData3DTexture?Fe=Math.floor(Ft.depth*cn):Fe=1,et=0,tt=0,je=0}te!==null?(st=te.x,yt=te.y,Mt=te.z):(st=0,yt=0,Mt=0);const _t=it.convert(W.format),qe=it.convert(W.type);let Vt;W.isData3DTexture?(b.setTexture3D(W,0),Vt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),Vt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),Vt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=O.getParameter(O.UNPACK_ROW_LENGTH),on=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Jn=O.getParameter(O.UNPACK_SKIP_PIXELS),yn=O.getParameter(O.UNPACK_SKIP_ROWS),wr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,et),O.pixelStorei(O.UNPACK_SKIP_ROWS,tt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const Pt=A.isDataArrayTexture||A.isData3DTexture,Mn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const cn=Xe.get(A),Xt=Xe.get(W),fn=Xe.get(cn.__renderTarget),Ar=Xe.get(Xt.__renderTarget);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let ht=0;ht<Fe;ht++)Pt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,H,je+ht),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.get(W).__webglTexture,Se,Mt+ht)),O.blitFramebuffer(et,tt,Re,Le,st,yt,Re,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Xe.has(A)){const cn=Xe.get(A),Xt=Xe.get(W);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,Qo),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Jo);for(let fn=0;fn<Fe;fn++)Pt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cn.__webglTexture,H,je+fn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cn.__webglTexture,H),Mn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,Se,Mt+fn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,Se),H!==0?O.blitFramebuffer(et,tt,Re,Le,st,yt,Re,Le,O.COLOR_BUFFER_BIT,O.NEAREST):Mn?O.copyTexSubImage3D(Vt,Se,st,yt,Mt+fn,et,tt,Re,Le):O.copyTexSubImage2D(Vt,Se,st,yt,et,tt,Re,Le);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Vt,Se,st,yt,Mt,Re,Le,Fe,_t,qe,Ft.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Vt,Se,st,yt,Mt,Re,Le,Fe,_t,Ft.data):O.texSubImage3D(Vt,Se,st,yt,Mt,Re,Le,Fe,_t,qe,Ft):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,st,yt,Re,Le,_t,qe,Ft.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,st,yt,Ft.width,Ft.height,_t,Ft.data):O.texSubImage2D(O.TEXTURE_2D,Se,st,yt,Re,Le,_t,qe,Ft);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,on),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Jn),O.pixelStorei(O.UNPACK_SKIP_ROWS,yn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,wr),Se===0&&W.generateMipmaps&&O.generateMipmap(Vt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,W,ee=null,te=null,H=0){return A.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ee=arguments[0]||null,te=arguments[1]||null,A=arguments[2],W=arguments[3],H=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,ee,te,H)},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){z=0,N=0,j=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}const vn=class vn{constructor(e,n){this.camera=e,this.distance=n,this.theta=vn.DEFAULT_THETA,this.phi=vn.DEFAULT_PHI}updatePosition(){const e=this.distance*Math.sin(this.phi)*Math.cos(this.theta),n=this.distance*Math.cos(this.phi),r=this.distance*Math.sin(this.phi)*Math.sin(this.theta);this.camera.position.set(e,n,r),this.camera.lookAt(0,0,0)}rotate(e,n){this.theta+=e,this.phi+=n,this.phi=Math.max(vn.MIN_PHI,Math.min(vn.MAX_PHI,this.phi)),this.updatePosition()}zoom(e){this.distance+=e*this.distance,this.distance=Math.max(vn.MIN_DISTANCE,Math.min(vn.MAX_DISTANCE,this.distance)),this.updatePosition()}reset(e){this.distance=e,this.theta=vn.DEFAULT_THETA,this.phi=vn.DEFAULT_PHI,this.updatePosition()}setDistance(e){this.distance=e,this.updatePosition()}getState(){return{distance:this.distance,theta:this.theta,phi:this.phi}}};wn(vn,"MIN_DISTANCE",5),wn(vn,"MAX_DISTANCE",100),wn(vn,"DEFAULT_THETA",Math.PI/4),wn(vn,"DEFAULT_PHI",Math.PI/4),wn(vn,"MIN_PHI",.1),wn(vn,"MAX_PHI",Math.PI-.1);let $r=vn;class Tg{constructor(e,n,r=1,a={}){this.axis=e,this.layer=n,this.direction=r,this.metadata=a,Object.freeze(this)}}class od{constructor(){if(new.target===od)throw new TypeError("Cannot instantiate abstract class TwistyPuzzle")}getName(){throw new Error("Method 'getName()' must be implemented")}getDefaultSize(){throw new Error("Method 'getDefaultSize()' must be implemented")}getSizeVariants(){throw new Error("Method 'getSizeVariants()' must be implemented")}getCameraDistance(e){throw new Error("Method 'getCameraDistance()' must be implemented")}getScrambleMoveCount(e){throw new Error("Method 'getScrambleMoveCount()' must be implemented")}createInitialState(e){throw new Error("Method 'createInitialState()' must be implemented")}isSolved(e){throw new Error("Method 'isSolved()' must be implemented")}cloneState(e){throw new Error("Method 'cloneState()' must be implemented")}createPieceMeshes(e,n){throw new Error("Method 'createPieceMeshes()' must be implemented")}getRotationFromDrag(e,n,r,a){throw new Error("Method 'getRotationFromDrag()' must be implemented")}shouldPieceRotate(e,n){throw new Error("Method 'shouldPieceRotate()' must be implemented")}applyRotation(e,n,r){throw new Error("Method 'applyRotation()' must be implemented")}}class Go{constructor(e,n,r){this.x=e,this.y=n,this.z=r,Object.freeze(this)}equals(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}static fromObject(e){return new Go(e.x,e.y,e.z)}}class RE{constructor(e){this.colors=Object.freeze({...e})}getColor(e){return this.colors[e]}getAllColors(){return{...this.colors}}}class CE extends RE{constructor(){super({U:16777215,D:16776960,F:16711680,B:16737792,L:255,R:65280})}}class PE{calculateAngle(e,n,r){throw new Error("Method 'calculateAngle()' must be implemented")}}class bE extends PE{calculateAngle(e,n,r){var m;const{axis:a,metadata:l}=e,{faceNormal:c,dragDirection:f}=l;return((m={x:{vertical:-r*.01*(c.x>0?1:-1),horizontal:n*.01*(c.x>0?-1:1)},y:{vertical:-r*.01*(c.y>0?-1:1),horizontal:n*.01*(c.y>0?1:-1)},z:{vertical:-r*.01*(c.z>0?1:-1),horizontal:n*.01*(c.z>0?-1:1)}}[a])==null?void 0:m[f])||0}}const Qt=class Qt extends od{constructor(e=new CE,n=new bE){super(),this.colorScheme=e,this.rotationStrategy=n}getName(){return"Rubik's Cube"}getDefaultSize(){return 3}getSizeVariants(){return[{value:2,label:"2×2×2 Pocket Cube"},{value:3,label:"3×3×3 Classic"},{value:4,label:"4×4×4 Revenge"},{value:5,label:"5×5×5 Professor"}]}getCameraDistance(e){return e*4.5}getScrambleMoveCount(e){return Math.max(20,e*8)}createInitialState(e){const n=[];for(let r=0;r<e;r++)for(let a=0;a<e;a++)for(let l=0;l<e;l++)n.push(this._createPiece(r,a,l,e));return{size:e,pieces:n}}_createPiece(e,n,r,a){return{position:new Go(e,n,r),colors:{right:e===a-1?"R":null,left:e===0?"L":null,up:n===a-1?"U":null,down:n===0?"D":null,front:r===a-1?"F":null,back:r===0?"B":null}}}isSolved(e){const{pieces:n,size:r}=e;return[{check:l=>l.position.x===r-1,face:"right",expected:"R"},{check:l=>l.position.x===0,face:"left",expected:"L"},{check:l=>l.position.y===r-1,face:"up",expected:"U"},{check:l=>l.position.y===0,face:"down",expected:"D"},{check:l=>l.position.z===r-1,face:"front",expected:"F"},{check:l=>l.position.z===0,face:"back",expected:"B"}].every(({check:l,face:c,expected:f})=>n.filter(l).every(m=>m.colors[c]===f))}cloneState(e){return{size:e.size,pieces:e.pieces.map(n=>({position:new Go(n.position.x,n.position.y,n.position.z),colors:{...n.colors}}))}}createPieceMeshes(e,n,r=!1){r||e.clear();const a=[],{size:l,pieces:c}=n,f=(l-1)/2*(Qt.PIECE_SIZE+Qt.GAP);return c.forEach((p,m)=>{const _=this._createPieceMesh(p,m,f);e.add(_),a.push(_)}),a}_createPieceMesh(e,n,r){const{x:a,y:l,z:c}=e.position,f=[this._createMaterial(e.colors.right),this._createMaterial(e.colors.left),this._createMaterial(e.colors.up),this._createMaterial(e.colors.down),this._createMaterial(e.colors.front),this._createMaterial(e.colors.back)],p=new to(Qt.PIECE_SIZE,Qt.PIECE_SIZE,Qt.PIECE_SIZE),m=new vi(p,f);m.position.set(a*(Qt.PIECE_SIZE+Qt.GAP)-r,l*(Qt.PIECE_SIZE+Qt.GAP)-r,c*(Qt.PIECE_SIZE+Qt.GAP)-r),m.userData={gridPosition:e.position.toObject(),pieceIndex:n};const _=new N0(p),v=new U0(_,new mg({color:0,linewidth:2}));return m.add(v),m}_createMaterial(e){const n=e?this.colorScheme.getColor(e):1710618;return new F0({color:n,roughness:.4,metalness:.1})}getRotationFromDrag(e,n,r,a){if(!(e!=null&&e.face))return null;const{cubelet:l,face:c}=e,{x:f,y:p,z:m}=l.userData.gridPosition,_=c.normal.clone();_.transformDirection(l.matrixWorld);const v=Math.abs(n),y=Math.abs(r)>v?"vertical":"horizontal";let E,w;if(Math.abs(_.x)>.9)E="x",w=f;else if(Math.abs(_.y)>.9)E="y",w=p;else if(Math.abs(_.z)>.9)E="z",w=m;else return null;return new Tg(E,w,1,{faceNormal:_,dragDirection:y})}shouldPieceRotate(e,n){const{axis:r,layer:a}=n,l=e.userData.gridPosition;return r==="x"&&l.x===a||r==="y"&&l.y===a||r==="z"&&l.z===a}calculateRotationAngle(e,n,r){return this.rotationStrategy.calculateAngle(e,n,r)}applyRotation(e,n,r){const{axis:a,layer:l}=n,{pieces:c,size:f}=e,p=(r%4+4)%4;for(let m=0;m<p;m++)this._applySingleRotation(c,f,a,l)}_applySingleRotation(e,n,r,a){e.map((c,f)=>({piece:c,index:f,snapshot:this._snapshotPiece(c)})).filter(({snapshot:c})=>c.position[r]===a).forEach(({piece:c,snapshot:f})=>{const p=this._getRotationTransform(r,n),m=p.position(f.position);c.position=new Go(m.x,m.y,m.z),c.colors=p.colors(f.colors)})}_snapshotPiece(e){return{position:e.position.toObject(),colors:{...e.colors}}}_getRotationTransform(e,n){return{x:{position:a=>({x:a.x,y:a.z,z:n-1-a.y}),colors:a=>({...a,front:a.down,up:a.front,back:a.up,down:a.back})},y:{position:a=>({x:n-1-a.z,y:a.y,z:a.x}),colors:a=>({...a,front:a.left,right:a.front,back:a.right,left:a.back})},z:{position:a=>({x:a.y,y:n-1-a.x,z:a.z}),colors:a=>({...a,up:a.right,left:a.up,down:a.left,right:a.down})}}[e]}};wn(Qt,"PIECE_SIZE",.95),wn(Qt,"GAP",.05),wn(Qt,"ROTATION_THRESHOLD",Math.PI/4),wn(Qt,"DRAG_THRESHOLD",20),wn(Qt,"SNAP_ANGLE",Math.PI/2),wn(Qt,"ANIMATION_DURATION",150);let zi=Qt;const Kr=class Kr{constructor(e,n,r,a,l=new G0){this.mountElement=e,this.puzzle=n,this.size=r,this.callbacks=a,this.raycaster=l,this.scene=null,this.camera=null,this.renderer=null,this.puzzleGroup=null,this.pieceMeshes=[],this.cameraController=null,this.mouse=new wt,this.isDragging=!1,this.dragStart={x:0,y:0},this.lastMousePos={x:0,y:0},this.dragStartIntersection=null,this.rotatingGroup=null,this.isAnimating=!1,this.touches=[],this.lastPinchDistance=0,this.puzzleState=null,this._init()}_init(){this._setupScene(),this._setupLighting(),this._setupCamera(),this._setupRenderer(),this._createPuzzle(),this._setupEventListeners(),this._startRenderLoop()}_setupScene(){this.scene=new b0,this.scene.background=new St(657930),this.puzzleGroup=new ks,this.scene.add(this.puzzleGroup)}_setupLighting(){const e=new H0(16777215,.6);this.scene.add(e);const n=new pm(16777215,.5);n.position.set(5,5,5),this.scene.add(n);const r=new pm(16777215,.3);r.position.set(-5,5,-5),this.scene.add(r)}_setupCamera(){const e=this.mountElement.clientWidth/this.mountElement.clientHeight;this.camera=new Zn(45,e,.1,1e3);const n=this.puzzle.getCameraDistance(this.size);this.cameraController=new $r(this.camera,n),this.cameraController.updatePosition()}_setupRenderer(){this.renderer=new AE({antialias:!0}),this.renderer.setSize(this.mountElement.clientWidth,this.mountElement.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.mountElement.appendChild(this.renderer.domElement)}_createPuzzle(){this.puzzleState=this.puzzle.createInitialState(this.size),this.pieceMeshes=this.puzzle.createPieceMeshes(this.puzzleGroup,this.puzzleState),this.puzzleGroup.scale.set(1,1,1)}_setupEventListeners(){const e=this.renderer.domElement;this._boundHandlers={pointerDown:n=>this._handlePointerDown(n),pointerMove:n=>this._handlePointerMove(n),pointerUp:n=>this._handlePointerUp(n),wheel:n=>this._handleWheel(n),resize:()=>this._handleResize()},e.addEventListener("mousedown",this._boundHandlers.pointerDown),e.addEventListener("mousemove",this._boundHandlers.pointerMove),e.addEventListener("mouseup",this._boundHandlers.pointerUp),e.addEventListener("mouseleave",this._boundHandlers.pointerUp),e.addEventListener("wheel",this._boundHandlers.wheel,{passive:!1}),e.addEventListener("touchstart",this._boundHandlers.pointerDown,{passive:!1}),e.addEventListener("touchmove",this._boundHandlers.pointerMove,{passive:!1}),e.addEventListener("touchend",this._boundHandlers.pointerUp,{passive:!1}),window.addEventListener("resize",this._boundHandlers.resize)}_startRenderLoop(){const e=()=>{requestAnimationFrame(e),this.renderer.render(this.scene,this.camera)};e()}_handlePointerDown(e){if(e.preventDefault(),this.isAnimating)return;if(e.touches&&e.touches.length>1){this.touches=Array.from(e.touches),this.lastPinchDistance=this._getPinchDistance();return}const{clientX:n,clientY:r}=this._getPointerCoords(e);this.isDragging=!0,this.dragStart={x:n,y:r},this.lastMousePos={x:n,y:r},this.dragStartIntersection=this._getIntersection(n,r)}_handlePointerMove(e){if(e.preventDefault(),this.isAnimating)return;if(e.touches&&e.touches.length>1){this.touches=Array.from(e.touches);const f=this._getPinchDistance();if(this.lastPinchDistance>0){const p=f-this.lastPinchDistance;this.cameraController.zoom(-p*.01)}this.lastPinchDistance=f;return}if(!this.isDragging)return;const{clientX:n,clientY:r}=this._getPointerCoords(e),a=n-this.dragStart.x,l=r-this.dragStart.y,c=Math.sqrt(a*a+l*l);this.dragStartIntersection&&c>zi.DRAG_THRESHOLD&&!this.rotatingGroup?this._startLayerRotation(this.dragStartIntersection,a,l):this.rotatingGroup?this._updateLayerRotation(a,l):(!this.dragStartIntersection||c<zi.DRAG_THRESHOLD)&&this._rotateCamera(n,r)}_handlePointerUp(e){e.preventDefault(),e.touches&&e.touches.length===0&&(this.touches=[],this.lastPinchDistance=0),this.rotatingGroup&&this._finalizeLayerRotation(),this.isDragging=!1,this.dragStartIntersection=null}_handleWheel(e){e.preventDefault(),this.cameraController.zoom(e.deltaY*.001)}_handleResize(){this.camera.aspect=this.mountElement.clientWidth/this.mountElement.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.mountElement.clientWidth,this.mountElement.clientHeight)}_getPointerCoords(e){var n,r;return{clientX:e.clientX||((n=e.touches)==null?void 0:n[0].clientX),clientY:e.clientY||((r=e.touches)==null?void 0:r[0].clientY)}}_getPinchDistance(){if(this.touches.length<2)return 0;const e=this.touches[0].clientX-this.touches[1].clientX,n=this.touches[0].clientY-this.touches[1].clientY;return Math.sqrt(e*e+n*n)}_getIntersection(e,n){const r=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e-r.left)/r.width*2-1,this.mouse.y=-((n-r.top)/r.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const a=this.raycaster.intersectObjects(this.pieceMeshes,!0);if(a.length>0){let l=a[0].object;for(;l.parent&&!this.pieceMeshes.includes(l);)l=l.parent;if(this.pieceMeshes.includes(l))return{cubelet:l,point:a[0].point,face:a[0].face}}return null}_rotateCamera(e,n){const r=e-this.lastMousePos.x,a=n-this.lastMousePos.y;this.cameraController.rotate(r*.005,-a*.005),this.lastMousePos={x:e,y:n}}_startLayerRotation(e,n,r){var c,f;const a=this.puzzle.getRotationFromDrag(e,n,r,this.puzzleState);if(!a)return;const l=new ks;this.puzzleGroup.add(l),this.pieceMeshes.forEach(p=>{this.puzzle.shouldPieceRotate(p,a)&&(this.puzzleGroup.remove(p),l.add(p))}),this.rotatingGroup={group:l,rotation:a,startDelta:{x:n,y:r}},(f=(c=this.callbacks).onRotationStart)==null||f.call(c)}_updateLayerRotation(e,n){if(!this.rotatingGroup)return;const r=e-this.rotatingGroup.startDelta.x,a=n-this.rotatingGroup.startDelta.y,l=this.puzzle.calculateRotationAngle(this.rotatingGroup.rotation,r,a);this.rotatingGroup.group.rotation[this.rotatingGroup.rotation.axis]=l}_finalizeLayerRotation(){if(!this.rotatingGroup)return;const{group:e,rotation:n}=this.rotatingGroup,r=e.rotation[n.axis];let a=0;Math.abs(r)>zi.ROTATION_THRESHOLD&&(a=r>0?zi.SNAP_ANGLE:-zi.SNAP_ANGLE),this._animateRotation(r,a,()=>{var l,c,f,p;if(a!==0){const m=Math.round(a/zi.SNAP_ANGLE);this.puzzle.applyRotation(this.puzzleState,n,m),(c=(l=this.callbacks).onMove)==null||c.call(l)}this._mergeRotatingGroup(e),this.rotatingGroup=null,this.puzzle.isSolved(this.puzzleState)&&((p=(f=this.callbacks).onSolved)==null||p.call(f))})}_animateRotation(e,n,r){this.isAnimating=!0;const a=Kr.ROTATION_SNAP_DURATION,l=Date.now(),c=this.rotatingGroup.group,f=this.rotatingGroup.rotation.axis,p=()=>{const m=Date.now()-l,_=Math.min(m/a,1),v=1-Math.pow(1-_,3);c.rotation[f]=e+(n-e)*v,_<1?requestAnimationFrame(p):(c.rotation[f]=n,this.isAnimating=!1,r())};p()}_mergeRotatingGroup(e){[...e.children].forEach(r=>{const a=new Q;r.getWorldPosition(a);const l=new Js;r.getWorldQuaternion(l),e.remove(r),this.puzzleGroup.add(r),r.position.copy(a),r.quaternion.copy(l)}),this.puzzleGroup.remove(e)}scramble(){const e=this.puzzle.getScrambleMoveCount(this.size),n=["x","y","z"];for(let r=0;r<e;r++){const a=n[Math.floor(Math.random()*n.length)],l=Math.floor(Math.random()*this.size),c=Math.floor(Math.random()*3)+1,f=new Tg(a,l);this.puzzle.applyRotation(this.puzzleState,f,c)}this.pieceMeshes=this.puzzle.createPieceMeshes(this.puzzleGroup,this.puzzleState)}reset(){this.puzzleState=this.puzzle.createInitialState(this.size),this.pieceMeshes=this.puzzle.createPieceMeshes(this.puzzleGroup,this.puzzleState),this.cameraController.reset(this.puzzle.getCameraDistance(this.size))}updateSize(e){this.size=e,this.puzzleState=this.puzzle.createInitialState(this.size),this.pieceMeshes=this.puzzle.createPieceMeshes(this.puzzleGroup,this.puzzleState)}updatePuzzleAndSize(e,n){this.puzzle=e,this.size=n,this.puzzleState=e.createInitialState(n),this.pieceMeshes=e.createPieceMeshes(this.puzzleGroup,this.puzzleState,!0);const r=e.getCameraDistance(n);this.cameraController.setDistance(r)}animateTransition(e,n=!1){return new Promise(r=>{this.isAnimating=!0;const a=Kr.ANIMATION_DURATION,l=Date.now(),c=this.cameraController.getState(),f=c.theta,p=c.phi,m=$r.DEFAULT_THETA,_=$r.DEFAULT_PHI;let v=!1;const x=()=>{const y=Date.now()-l,E=Math.min(y/a,1);let w,S,g,I;if(E<.5){w=E*2;const D=w*w*w;S=1-D,n&&(g=f+(m-f)*D,I=p+(_-p)*D,this.cameraController.theta=g,this.cameraController.phi=I,this.cameraController.updatePosition())}else v||(v=!0,e()),w=(E-.5)*2,S=1-Math.pow(1-w,3),n&&(this.cameraController.theta=m,this.cameraController.phi=_,this.cameraController.updatePosition());this.puzzleGroup.scale.set(S,S,S),E<1?requestAnimationFrame(x):(this.puzzleGroup.scale.set(1,1,1),n&&(this.cameraController.theta=m,this.cameraController.phi=_,this.cameraController.updatePosition()),this.isAnimating=!1,r())};x()})}animatePuzzleSwitch(e,n){return new Promise(r=>{this.isAnimating=!0,this.puzzleGroup.scale.set(1,1,1);const a=Kr.ANIMATION_DURATION,l=Date.now(),c=this.cameraController.getState(),f=c.theta,p=c.phi,m=$r.DEFAULT_THETA,_=$r.DEFAULT_PHI;let v=!1,x=!1;const y=()=>{const E=Date.now()-l,w=Math.min(E/a,1);let S,g;if(w<.5){S=w*2;const I=S*S*S;g=1-I;const D=f+(m-f)*I,P=p+(_-p)*I;if(this.cameraController.theta=D,this.cameraController.phi=P,this.cameraController.updatePosition(),!v&&S>.9){for(v=!0;this.puzzleGroup.children.length>0;)this.puzzleGroup.remove(this.puzzleGroup.children[0]);this.pieceMeshes=[]}}else{if(!x){x=!0,this.puzzle=e,this.size=n,this.puzzleState=this.puzzle.createInitialState(this.size),this.pieceMeshes=this.puzzle.createPieceMeshes(this.puzzleGroup,this.puzzleState,!0);const D=this.puzzle.getCameraDistance(this.size);this.cameraController.setDistance(D)}S=(w-.5)*2,g=1-Math.pow(1-S,3),this.cameraController.theta=m,this.cameraController.phi=_,this.cameraController.updatePosition()}this.puzzleGroup.scale.set(g,g,g),w<1?requestAnimationFrame(y):(this.puzzleGroup.scale.set(1,1,1),this.cameraController.theta=m,this.cameraController.phi=_,this.cameraController.updatePosition(),this.isAnimating=!1,r())};y()})}dispose(){const e=this.renderer.domElement;e.removeEventListener("mousedown",this._boundHandlers.pointerDown),e.removeEventListener("mousemove",this._boundHandlers.pointerMove),e.removeEventListener("mouseup",this._boundHandlers.pointerUp),e.removeEventListener("mouseleave",this._boundHandlers.pointerUp),e.removeEventListener("wheel",this._boundHandlers.wheel),e.removeEventListener("touchstart",this._boundHandlers.pointerDown),e.removeEventListener("touchmove",this._boundHandlers.pointerMove),e.removeEventListener("touchend",this._boundHandlers.pointerUp),window.removeEventListener("resize",this._boundHandlers.resize),this.mountElement.removeChild(this.renderer.domElement),this.renderer.dispose()}};wn(Kr,"ANIMATION_DURATION",800),wn(Kr,"ROTATION_SNAP_DURATION",150);let Yf=Kr;const DE=Ht.forwardRef(({puzzle:s,size:e,onMoveComplete:n,onSolved:r,onRotationStart:a},l)=>{const c=Ht.useRef(null),f=Ht.useRef(null),p=Ht.useMemo(()=>({onMove:n,onSolved:r,onRotationStart:a}),[n,r,a]);return Ht.useEffect(()=>{if(!c.current)return;const m=new Yf(c.current,s,e,p);return f.current=m,()=>{m.dispose(),f.current=null}},[]),Ht.useEffect(()=>{f.current&&f.current.updatePuzzleAndSize(s,e)},[s,e]),Ht.useImperativeHandle(l,()=>({scramble:()=>{var m;return(m=f.current)==null?void 0:m.scramble()},reset:()=>{var m;return(m=f.current)==null?void 0:m.reset()},animateTransition:(...m)=>{var _;return(_=f.current)==null?void 0:_.animateTransition(...m)},animatePuzzleSwitch:(...m)=>{var _;return(_=f.current)==null?void 0:_.animatePuzzleSwitch(...m)}}),[]),We.jsx("div",{ref:c,className:"flex-1 w-full",style:{touchAction:"none"}})}),LE=({time:s,moves:e,isSolved:n})=>{const r=a=>{const l=Math.floor(a/6e4),c=Math.floor(a%6e4/1e3),f=Math.floor(a%1e3/10);return`${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}.${f.toString().padStart(2,"0")}`};return We.jsx("div",{className:"fixed top-24 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white min-w-[160px] pointer-events-none",children:We.jsxs("div",{className:"space-y-2",children:[We.jsxs("div",{className:"flex items-center justify-between gap-4",children:[We.jsx("span",{className:"text-white/60 text-sm",children:"Time:"}),We.jsx("span",{className:"font-mono font-bold text-lg",children:r(s)})]}),We.jsxs("div",{className:"flex items-center justify-between gap-4",children:[We.jsx("span",{className:"text-white/60 text-sm",children:"Moves:"}),We.jsx("span",{className:"font-mono font-bold text-lg",children:e})]}),We.jsxs("div",{className:"flex items-center justify-between gap-4",children:[We.jsx("span",{className:"text-white/60 text-sm",children:"Status:"}),We.jsx("span",{className:`text-xs px-2 py-1 rounded font-semibold ${n?"bg-green-500/20 text-green-400":"bg-orange-500/20 text-orange-400"}`,children:n?"Solved":"Scrambled"})]})]})})},IE=()=>We.jsxs("div",{className:"fixed bottom-4 left-4 text-white/50 text-sm bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10 max-w-xs pointer-events-none",children:[We.jsx("div",{className:"font-semibold mb-1 text-white/70",children:"Controls:"}),We.jsx("div",{children:"• Click and drag a face to rotate that layer"}),We.jsx("div",{children:"• Drag background to rotate the camera"}),We.jsx("div",{children:"• Scroll or pinch to zoom in/out"}),We.jsx("div",{children:"• Release quickly to snap to 90° rotation"})]}),UE=({puzzle:s,size:e,onSizeChange:n,onPuzzleChange:r,disabled:a})=>{const l=s.getSizeVariants();return We.jsx("div",{className:"flex gap-2",children:We.jsx("select",{value:e,onChange:c=>n(Number(c.target.value)),disabled:a,className:"bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer border border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:l.map(c=>We.jsx("option",{value:c.value,children:c.label},c.value))})})},NE=({onScramble:s,onReset:e,disabled:n})=>We.jsxs("div",{className:"flex gap-2",children:[We.jsx("button",{onClick:s,disabled:n,className:"bg-cyan-500/80 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:"Scramble"}),We.jsx("button",{onClick:e,disabled:n,className:"bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg font-semibold border border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed",children:"Reset"})]}),Vm={warning:{border:"border-yellow-500/30",gradient:"from-gray-900 to-black",titleColor:"text-yellow-400",buttonBg:"bg-yellow-500/20 hover:bg-yellow-500/30",buttonText:"text-yellow-400",buttonBorder:"border-yellow-500/30"},info:{border:"border-blue-500/30",gradient:"from-gray-900 to-black",titleColor:"text-blue-400",buttonBg:"bg-blue-500/20 hover:bg-blue-500/30",buttonText:"text-blue-400",buttonBorder:"border-blue-500/30"},success:{border:"border-green-500/30",gradient:"from-gray-900 to-black",titleColor:"text-green-400",buttonBg:"bg-green-500/20 hover:bg-green-500/30",buttonText:"text-green-400",buttonBorder:"border-green-500/30"},error:{border:"border-red-500/30",gradient:"from-gray-900 to-black",titleColor:"text-red-400",buttonBg:"bg-red-500/20 hover:bg-red-500/30",buttonText:"text-red-400",buttonBorder:"border-red-500/30"}},FE={disclaimer:"$/content/disclaimer.md"},wg=({type:s="info",title:e,content:n,icon:r,buttonText:a="Got it",onClose:l,isVisible:c=!0})=>{if(!c)return null;const f=Vm[s]||Vm.info;return We.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm",children:We.jsxs("div",{className:`bg-gradient-to-br ${f.gradient} border ${f.border} rounded-2xl p-8 max-w-md mx-4 shadow-2xl`,children:[We.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[r&&We.jsx("div",{className:"text-4xl",children:r}),We.jsxs("div",{className:"flex-1",children:[We.jsx("h2",{className:`text-2xl font-bold ${f.titleColor} mb-2`,children:e}),We.jsx("div",{className:"text-white/80 text-sm leading-relaxed",children:n})]})]}),We.jsx("button",{onClick:l,className:`w-full ${f.buttonBg} ${f.buttonText} font-semibold py-3 px-6 rounded-lg border ${f.buttonBorder} transition-all`,children:a})]})})},OE=s=>{if(!s)return null;const e=s.trim().split(`
`),n=[];for(let r=0;r<e.length;r++){const a=e[r].trim();if(a)if(a.startsWith("# "))n.push({type:"heading",text:a.slice(2),level:1});else if(a.startsWith("## "))n.push({type:"heading",text:a.slice(3),level:2});else if(a.startsWith("### "))n.push({type:"heading",text:a.slice(4),level:3});else if(a.startsWith("- ")||a.startsWith("• ")){const l=(a.startsWith("- "),a.slice(2));!n.length||n[n.length-1].type!=="list"?n.push({type:"list",items:[l]}):n[n.length-1].items.push(l)}else n.push({type:"paragraph",text:a})}return n},zE=({markdown:s})=>{const e=OE(s);return e?We.jsx("div",{className:"space-y-4",children:e.map((n,r)=>{switch(n.type){case"heading":const a=`h${n.level}`,l={1:"text-xl font-bold text-white",2:"text-lg font-semibold text-white",3:"text-base font-semibold text-white/90"};return Rl.createElement(a,{key:r,className:l[n.level]},n.text);case"list":return We.jsx("ul",{className:"text-white/70 text-sm space-y-1 pl-4",children:n.items.map((c,f)=>We.jsxs("li",{children:["• ",c]},f))},r);case"paragraph":return We.jsx("p",{className:"text-white/80 text-sm leading-relaxed",children:n.text},r);default:return null}})}):null};class BE{constructor(){this.cache=new Map}async load(e){if(this.cache.has(e))return this.cache.get(e);try{const n=await fetch(e);if(!n.ok)throw new Error(`Failed to load content: ${n.statusText}`);const r=await n.text();return this.cache.set(e,r),r}catch(n){return console.error(`Error loading content from ${e}:`,n),null}}clearCache(){this.cache.clear()}async preload(e){const n=e.map(r=>this.load(r));await Promise.all(n)}}const kE=new BE,HE=({isVisible:s,onClose:e})=>{const[n,r]=Ht.useState(""),[a,l]=Ht.useState(!0);Ht.useEffect(()=>{s&&(async()=>{l(!0);const p=await kE.load(FE.disclaimer);r(p||c()),l(!1)})()},[s]);const c=()=>"".trim();return a?null:We.jsx(wg,{type:"warning",title:"Disclaimer",icon:"⚠️",buttonText:"I Understand - View Anyway",content:We.jsx(zE,{markdown:n}),isVisible:s,onClose:e})},VE=({isVisible:s,onClose:e,time:n,moves:r})=>{const a=c=>{const f=Math.floor(c/6e4),p=Math.floor(c%6e4/1e3);return`${f}:${p.toString().padStart(2,"0")}`},l=We.jsxs("div",{className:"space-y-4",children:[We.jsx("p",{className:"text-white/80 text-sm",children:"Congratulations! You've successfully solved the puzzle!"}),We.jsx("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:We.jsxs("div",{className:"space-y-2 text-sm",children:[We.jsxs("div",{className:"flex justify-between",children:[We.jsx("span",{className:"text-white/60",children:"Time:"}),We.jsx("span",{className:"text-white font-semibold",children:a(n)})]}),We.jsxs("div",{className:"flex justify-between",children:[We.jsx("span",{className:"text-white/60",children:"Moves:"}),We.jsx("span",{className:"text-white font-semibold",children:r})]})]})})]});return We.jsx(wg,{type:"success",title:"🎉 Puzzle Solved!",content:l,buttonText:"Awesome!",isVisible:s,onClose:e})},GE=()=>{const[s,e]=Ht.useState(!0),[n,r]=Ht.useState(!1),a=Ht.useRef(null),[l,c]=Ht.useState(()=>new zi),[f,p]=Ht.useState(3),[m,_]=Ht.useState(0),[v,x]=Ht.useState(!1),[y,E]=Ht.useState(0),[w,S]=Ht.useState(!1),[g,I]=Ht.useState(!0),[D,P]=Ht.useState(!1);Ht.useEffect(()=>{let ie;return v&&!g&&(ie=setInterval(()=>{E(K=>K+10)},10)),()=>clearInterval(ie)},[v,g]);const X=()=>{_(ie=>ie+1),!v&&w&&x(!0)},z=()=>{!v&&w&&x(!0)},N=()=>{I(!0),x(!1),S(!1),r(!0)},j=async()=>{D||!a.current||(P(!0),await a.current.animateTransition(()=>{a.current.scramble(),S(!0),I(!1),_(0),E(0),x(!1)},!1),P(!1))},C=async()=>{D||!a.current||(P(!0),await a.current.animateTransition(()=>{a.current.reset(),S(!1),I(!0),_(0),E(0),x(!1)},!0),P(!1))},R=async ie=>{if(D||!a.current||ie===f)return;P(!0);const K=l;await a.current.animatePuzzleSwitch(K,ie),p(ie),S(!1),I(!0),_(0),E(0),x(!1),P(!1)},k=async ie=>{if(D||!a.current)return;P(!0);const K=ie.getDefaultSize();await a.current.animatePuzzleSwitch(ie,K),c(ie),p(K),S(!1),I(!0),_(0),E(0),x(!1),P(!1)};return We.jsxs("div",{className:"w-full h-screen bg-black flex flex-col overflow-hidden",children:[We.jsx(HE,{isVisible:s,onClose:()=>e(!1)}),We.jsx(VE,{isVisible:n,onClose:()=>r(!1),time:y,moves:m}),We.jsx(DE,{ref:a,puzzle:l,size:f,onMoveComplete:X,onSolved:N,onRotationStart:z}),We.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 p-4",children:We.jsx("div",{className:"max-w-4xl mx-auto",children:We.jsxs("div",{className:"bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between gap-3 flex-wrap",children:[We.jsx(UE,{puzzle:l,size:f,onSizeChange:R,onPuzzleChange:k,disabled:D}),We.jsx(NE,{onScramble:j,onReset:C,disabled:D})]})})}),We.jsx(LE,{time:y,moves:m,isSolved:g}),We.jsx(IE,{})]})},WE=hv.createRoot(document.getElementById("root"));WE.render(Rl.createElement(Rl.StrictMode,null,Rl.createElement(GE)));
