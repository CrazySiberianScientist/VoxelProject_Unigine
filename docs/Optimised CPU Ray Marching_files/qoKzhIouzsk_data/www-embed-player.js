(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return ja(a,a)}
function ja(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ma});
var na=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if(typeof Object.setPrototypeOf=="function")qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function z(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function wa(){this.A=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.I=this.j=null}
function xa(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
wa.prototype.H=function(a){this.i=a};
function ya(a,b){a.j={exception:b,gd:!0};a.h=a.o||a.D}
wa.prototype.return=function(a){this.j={return:a};this.h=this.D};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.F=function(a){this.h=a};
function za(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function Aa(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.I.splice(0)[0];(b=a.j=a.j||b)?b.gd?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.u;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Fa(a)}a.h.u=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.gd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u.next,b,a.h.H):(a.h.H(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u["throw"],b,a.h.H):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return pa});
u("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.D)}};
b.prototype.W=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ha(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.V(g):this.u(g)}};
b.prototype.V=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.oa(h,g):this.u(g)};
b.prototype.D=function(g){this.H(2,g)};
b.prototype.u=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.fa();this.I()};
b.prototype.fa=function(){var g=this;e(function(){if(g.T()){var h=da.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.I=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ha=function(g){var h=this.o();g.Xb(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(v){try{l(r(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Xb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).Xb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){r[v]=x;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Xb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||ua});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||da});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&la(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function La(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=La(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Pa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(Math.random()*1E9>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ta:Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(){return Date.now()}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Ya(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var bb=globalThis.trustedTypes,cb;function db(){var a=null;if(!bb)return a;try{var b=function(c){return c};
a=bb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function eb(){cb===void 0&&(cb=db());return cb}
;function fb(a){this.h=a}
fb.prototype.toString=function(){return this.h+""};
function gb(a){var b=eb();return new fb(b?b.createScriptURL(a):a)}
function hb(a){if(a instanceof fb)return a.h;throw Error("");}
;var ib=ha([""]),jb=ja(["\x00"],["\\0"]),kb=ja(["\n"],["\\n"]),lb=ja(["\x00"],["\\u0000"]);function mb(a){return a.toString().indexOf("`")===-1}
mb(function(a){return a(ib)})||mb(function(a){return a(jb)})||mb(function(a){return a(kb)})||mb(function(a){return a(lb)});function nb(a){this.h=a}
nb.prototype.toString=function(){return this.h};
var ob=new nb("about:invalid#zClosurez");function pb(a){this.oe=a}
function qb(a){return new pb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var rb=[qb("data"),qb("http"),qb("https"),qb("mailto"),qb("ftp"),new pb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],sb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function tb(a){if(a instanceof nb)if(a instanceof nb)a=a.h;else throw Error("");else a=sb.test(a)?a:void 0;return a}
;function ub(a,b){b=tb(b);b!==void 0&&(a.href=b)}
;function wb(){this.h=xb[0].toLowerCase()}
wb.prototype.toString=function(){return this.h};function yb(a){this.h=a}
yb.prototype.toString=function(){return this.h+""};function zb(a){var b="true".toString(),c=[new wb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof wb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Ab(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Bb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Cb(a,b){if(b instanceof fb)a.href=hb(b).toString(),a.rel="stylesheet";else{if(Bb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=tb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Db(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};function Fb(a){var b=Db(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function Gb(a,b){if(b instanceof Eb)b=b.h;else throw Error("");a.textContent=b;Fb(a)}
function Hb(a,b){a.src=hb(b);Fb(a)}
;var Ib=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Jb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Kb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Lb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Mb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Jb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Nb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Ob(a,b){b=Ib(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Pb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Qb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Rb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Sb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Tb[c])c=Tb[c];else{c=String(c);if(!Tb[c]){var f=/function\s+([^\(]+)/m.exec(c);Tb[c]=f?f[1]:"[Anonymous]"}c=Tb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Sb(a,b){b||(b={});b[Ub(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Ub(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Sb(d,b));a=a.errors;if(Array.isArray(a)){d=1;for(var e=0;e<a.length&&!(d>4);e++)b[Ub(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Sb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Ub(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Tb={};function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xb(a){return a?decodeURI(a):a}
function Yb(a,b){return b.match(Wb)[a]||null}
function Zb(a){return Xb(Yb(3,a))}
function $b(a){var b=a.match(Wb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ac(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function bc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function cc(a){var b=[],c;for(c in a)bc(c,a[c],b);return b.join("&")}
function dc(a,b){b=cc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function ec(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var fc=/#|$/,hc=/[?&]($|#)/;function ic(a,b){for(var c=a.search(fc),d=0,e,f=[];(e=ec(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(hc,"$1")}
;function jc(a){var b=b===void 0?Number("31"):b;for(var c=[],d=0;d<kc(a,lc,1).length;d++){var e=kc(a,lc,1)[d];mc(e,2)<=b&&c.push(Number(mc(e,1)))}return c}
function nc(a){var b=b===void 0?Number("31"):b;for(var c=[],d=0;d<kc(a,lc,1).length;d++){var e=kc(a,lc,1)[d];mc(e,2)>b&&c.push(Number(mc(e,1)))}return c}
;function oc(a){return{fieldType:2,fieldName:a}}
function F(a){return{fieldType:3,fieldName:a}}
;function pc(a){this.h=a;a.Pa("/client_streamz/bg/fic",F("ke"))}
function qc(a){this.h=a;a.Pa("/client_streamz/bg/fiec",F("ke"),oc("ec"))}
function rc(a){this.h=a;a.nb("/client_streamz/bg/fil",F("ke"))}
rc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function sc(a){this.h=a;a.Pa("/client_streamz/bg/fcc",oc("ph"),F("ke"))}
function tc(a){this.h=a;a.nb("/client_streamz/bg/fcd",oc("ph"),F("ke"))}
tc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function uc(a){this.h=a;a.Pa("/client_streamz/bg/fsc",F("ke"))}
function vc(a){this.h=a;a.nb("/client_streamz/bg/fsl",F("ke"))}
vc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};
function wc(a){this.h=a;a.nb("/client_streamz/bg/frs",F("ke"))}
wc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function xc(a){this.h=a;a.nb("/client_streamz/bg/wrl",F("mn"),oc("ac"),oc("sc"),F("rk"),F("mk"))}
xc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function yc(a){this.h=a;a.nb("/client_streamz/bg/el",F("en"),F("rk"),F("mk"))}
yc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function zc(a){this.h=a;a.Pa("/client_streamz/bg/cec",oc("ec"),F("rk"),F("mk"))}
function Ac(a){a.Pa("/client_streamz/bg/po/csc",oc("cs"),F("rk"),F("mk"))}
function Bc(a){a.Pa("/client_streamz/bg/po/ctav",F("av"),F("rk"),F("mk"))}
function Cc(a){a.Pa("/client_streamz/bg/po/cwsc",F("su"),F("rk"),F("mk"))}
;function Dc(a){C.setTimeout(function(){throw a;},0)}
;var Ec,Fc=E("CLOSURE_FLAGS"),Gc=Fc&&Fc[610401301];Ec=Gc!=null?Gc:!1;function Hc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ic,Jc=C.navigator;Ic=Jc?Jc.userAgentData||null:null;function Kc(a){return Ec?Ic?Ic.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function G(a){return Hc().indexOf(a)!=-1}
;function Lc(){return Ec?!!Ic&&Ic.brands.length>0:!1}
function Mc(){return Lc()?!1:G("Opera")}
function Nc(){return G("Firefox")||G("FxiOS")}
function Oc(){return Lc()?Kc("Chromium"):(G("Chrome")||G("CriOS"))&&!(Lc()?0:G("Edge"))||G("Silk")}
;function Pc(){return Ec?!!Ic&&!!Ic.platform:!1}
function Qc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;var Rc=Mc(),Sc=Lc()?!1:G("Trident")||G("MSIE"),Tc=G("Edge"),Uc=G("Gecko")&&!(Hc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Vc=Hc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge");Vc&&G("Mobile");Pc()||G("Macintosh");Pc()||G("Windows");(Pc()?Ic.platform==="Linux":G("Linux"))||Pc()||G("CrOS");var Wc=Pc()?Ic.platform==="Android":G("Android");Qc();G("iPad");G("iPod");Qc()||G("iPad")||G("iPod");Hc().toLowerCase().indexOf("kaios");Nc();var Xc=Qc()||G("iPod"),Yc=G("iPad");!G("Android")||Oc()||Nc()||Mc()||G("Silk");Oc();var Zc=G("Safari")&&!(Oc()||(Lc()?0:G("Coast"))||Mc()||(Lc()?0:G("Edge"))||(Lc()?Kc("Microsoft Edge"):G("Edg/"))||(Lc()?Kc("Opera"):G("OPR"))||Nc()||G("Silk")||G("Android"))&&!(Qc()||G("iPad")||G("iPod"));var $c={},ad=null;function bd(a,b){Oa(a);b===void 0&&(b=0);cd();b=$c[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function dd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;ed(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ed(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=ad[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
cd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function cd(){if(!ad){ad={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));$c[c]=d;for(var e=0;e<d.length;e++){var f=d[e];ad[f]===void 0&&(ad[f]=e)}}}}
;var fd=typeof Uint8Array!=="undefined",gd=!Sc&&typeof btoa==="function";function hd(a){if(!gd)return bd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var id=/[-_.]/g,jd={"-":"+",_:"/",".":"="};function kd(a){return jd[a]||""}
function ld(a){return fd&&a!=null&&a instanceof Uint8Array}
var md={};var nd;function od(a){if(a!==md)throw Error("illegal external caller");}
function pd(a,b){od(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
pd.prototype.sizeBytes=function(){od(md);var a=this.h;if(a!=null&&!ld(a))if(typeof a==="string")if(gd){id.test(a)&&(a=a.replace(id,kd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=dd(a);else La(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};var qd;function rd(){var a=Error();Qb(a,"incident");Dc(a)}
function sd(a){a=Error(a);Qb(a,"warning");return a}
;function td(){return typeof BigInt==="function"}
;function ud(a){return Array.prototype.slice.call(a)}
;var vd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function wd(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var xd=wd(),yd=wd("2ex"),zd=wd("1oa");Math.max.apply(Math,ka(Object.values({Sg:1,Qg:2,Pg:4,Vg:8,Ug:16,Tg:32,yf:64,Xg:128,Og:256,Ng:512,Rg:1024,Ef:2048,Wg:4096,Ff:8192,zf:16384})));var Ad=vd?function(a,b){a[xd]|=b}:function(a,b){a.Ta!==void 0?a.Ta|=b:Object.defineProperties(a,{Ta:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Bd=vd?function(a){return a[xd]|0}:function(a){return a.Ta|0},Cd=vd?function(a){return a[xd]}:function(a){return a.Ta},Dd=vd?function(a,b){a[xd]=b}:function(a,b){a.Ta!==void 0?a.Ta=b:Object.defineProperties(a,{Ta:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ed(a,b){Dd(b,(a|0)&-14591)}
function Fd(a,b){Dd(b,(a|34)&-14557)}
;var Gd={},Hd={};function Id(a){return!(!a||typeof a!=="object"||a.h!==Hd)}
function Jd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Kd(a){return!Array.isArray(a)||a.length?!1:Bd(a)&1?!0:!1}
var Ld,Md=[];Dd(Md,55);Ld=Object.freeze(Md);function Nd(a){if(a&2)throw Error();}
var Od=Object.freeze({});Object.freeze({});var Pd=Object.freeze({});function Qd(a){a.jh=!0;return a}
;var Rd=Qd(function(a){return typeof a==="number"}),Sd=Qd(function(a){return typeof a==="string"}),Td=Qd(function(a){return typeof a==="boolean"});
function Ud(){var a=Vd;return Qd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;var Wd=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function Xd(a){var b=a;if(Sd(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Rd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Wd?BigInt(a):a=Td(a)?a?"1":"0":Sd(a)?a.trim()||"0":String(a)}
var ce=Qd(function(a){return Wd?a>=Yd&&a<=Zd:a[0]==="-"?$d(a,ae):$d(a,be)}),ae=Number.MIN_SAFE_INTEGER.toString(),Yd=Wd?BigInt(Number.MIN_SAFE_INTEGER):void 0,be=Number.MAX_SAFE_INTEGER.toString(),Zd=Wd?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function $d(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var de=0,ee=0;function fe(a){var b=a>>>0;de=b;ee=(a-b)/4294967296>>>0}
function ge(a){if(a<0){fe(0-a);var b=w(he(de,ee));a=b.next().value;b=b.next().value;de=a>>>0;ee=b>>>0}else fe(a)}
function ie(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else td()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+je(c)+je(a));return c}
function je(a){a=String(a);return"0000000".slice(a.length)+a}
function ke(){var a=de,b=ee;b&2147483648?td()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(he(a,b)),a=b.next().value,b=b.next().value,a="-"+ie(a,b)):a=ie(a,b);return a}
function he(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function le(a){return a.displayName||a.name||"unknown type name"}
function me(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+La(a)+": "+a);return a}
var ne=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function oe(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:ne.test(a)}
function pe(a){if(typeof a!=="number")throw sd("int32");if(!Number.isFinite(a))throw sd("int32");return a|0}
function qe(a){return a==null?a:pe(a)}
function re(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function se(a){var b=0;b=b===void 0?0:b;if(!oe(a))throw sd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return te(a);case "bigint":return String(BigInt.asIntN(64,a));default:return ue(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Xd(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=td()?Xd(BigInt.asIntN(64,BigInt(a))):Xd(ve(a))),a;case "bigint":return Xd(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?Xd(we(a)):Xd(ue(a))}case 0:switch(c){case "string":return te(a);
case "bigint":return Xd(BigInt.asIntN(64,a));default:return we(a)}default:return Ab(b,"Unknown format requested type for int64")}}
function xe(a){return a==null?a:se(a)}
function ye(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function ve(a){a.indexOf(".");if(ye(a))return a;if(a.length<16)ge(Number(a));else if(td())a=BigInt(a),de=Number(a&BigInt(4294967295))>>>0,ee=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");ee=de=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ee*=1E6,de=de*1E6+d,de>=4294967296&&(ee+=Math.trunc(de/4294967296),ee>>>=0,de>>>=0);b&&(b=w(he(de,ee)),a=b.next().value,b=b.next().value,de=a,ee=b)}return ke()}
function we(a){oe(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){ge(a);var b=de,c=ee;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function ue(a){oe(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);ye(b)?a=b:(ge(a),a=ke())}return a}
function te(a){oe(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return ve(a)}
function ze(a){if(a==null)return a;if(typeof a==="bigint")return ce(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=ce(a)?Number(a):String(a)),a;if(oe(a))return typeof a==="number"?we(a):te(a)}
function Ae(a){if(typeof a!=="string")throw Error();return a}
function Be(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ce(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+le(b)+" but got "+(a&&le(a.constructor)));}
function De(a,b,c){if(a!=null&&typeof a==="object"&&a.Ec===Gd)return a;if(Array.isArray(a)){var d=Bd(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Dd(a,e);return new b(a)}}
;function Ee(a){Fe===void 0&&(Fe=typeof Proxy==="function"?Ge(Proxy):null);if(!Fe||!He())return a;var b=Ie(a);if(b)return b;if(Math.random()>.01)return a;Je(a);b=new Fe(a,{set:function(c,d,e){Ke();c[d]=e;return!0}});
Le(a,b);return b}
function Ke(){rd()}
var Me=void 0,Ne=void 0;function Ie(a){var b;return(b=Me)==null?void 0:b.get(a)}
function Oe(a){var b;return((b=Ne)==null?void 0:b.get(a))||a}
function Le(a,b){(Me||(Me=new Pe)).set(a,b);(Ne||(Ne=new Pe)).set(b,a)}
var Fe=void 0,Pe=void 0;function He(){Pe===void 0&&(Pe=typeof WeakMap==="function"?Ge(WeakMap):null);return Pe}
function Ge(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Qe=void 0;function Je(a){if(Qe===void 0){var b=new Fe([],{});Qe=Array.prototype.concat.call([],b).length===1}Qe&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
function Re(a,b,c){if(He()){if(Se(a,b)){if(c)return}else if(Math.random()>.01)return;var d=a.length;c={length:d};for(var e=0;e<Math.min(d,10);e++){if(d<=10)var f=e;else{f=d/10;var g=Math.floor(e*f);f=g+Math.floor(Math.random()*(Math.floor((e+1)*f)-g))}c[f]=a[f]}Te(a,c)?(d=Ue||(Ue=new Pe),e=d.get(b),e||(e=new Pe,d.set(b,e)),e.set(a,c)):(rd(),Ve(a,b))}}
function We(a,b){var c=Se(a,b);c&&!Te(a,c)&&(Xe(),Ve(a,b))}
function Te(a,b){if(a.length!==b.length)return!1;for(var c in b){var d=Number(c),e;if(e=Number.isInteger(d))e=a[d],d=b[d],e=!(Number.isNaN(e)?Number.isNaN(d):e===d);if(e)return!1}return!0}
function Ye(a){var b;if(a&&(b=Ue)!=null&&b.has(a)&&(b=a.G))for(var c=0;c<b.length;c++){var d=b[c];if(c===b.length-1&&Jd(d))for(var e in d){var f=d[e];Array.isArray(f)&&We(f,a)}else Array.isArray(d)&&We(d,a)}}
function Xe(){rd()}
var Ue=void 0;function Se(a,b){var c,d;return(c=Ue)==null?void 0:(d=c.get(b))==null?void 0:d.get(a)}
function Ve(a,b){var c,d;(c=Ue)==null||(d=c.get(b))==null||d.delete(a)}
;var Ze;function $e(a,b){Bd(b);Ze=b;a=new a(b);Ze=void 0;return a}
function I(a,b,c){a==null&&(a=Ze);Ze=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=Bd(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Jd(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&1023)<<
15}}}Dd(a,d);return a}
;function af(a,b){return bf(b)}
function bf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return ce(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Kd(a))return}else{if(ld(a))return hd(a);if(a instanceof pd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=hd(b)}}}return a}
;function cf(a,b,c){a=ud(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function df(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Kd(a)?void 0:e&&Bd(a)&2?a:ef(a,b,c,d!==void 0,e);else if(Jd(a)){var f={},g;for(g in a)f[g]=df(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function ef(a,b,c,d,e){var f=d||c?Bd(a):0;d=d?!!(f&32):void 0;a=ud(a);for(var g=0;g<a.length;g++)a[g]=df(a[g],b,c,d,e);c&&c(f,a);return a}
function ff(a){return a.Ec===Gd?a.toJSON():bf(a)}
;function gf(a,b,c){c=c===void 0?Fd:c;if(a!=null){if(fd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Bd(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Dd(a,(d|34)&-12293),a):ef(a,gf,d&4?Fd:c,!0,!0)}a.Ec===Gd&&(c=a.G,d=Cd(c),a=d&2?a:hf(a,c,d,!0));return a}}
function hf(a,b,c,d){Ye(a);return $e(a.constructor,jf(b,c,d))}
function jf(a,b,c){var d=c||b&2?Fd:Ed,e=!!(b&32);a=cf(a,b,function(f){return gf(f,e,d)});
Ad(a,32|(c?2:0));return a}
function kf(a){var b=a.G,c=Cd(b);return c&2?hf(a,b,c,!1):a}
;function lf(a,b){a=a.G;return mf(a,Cd(a),b)}
function nf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function mf(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(nf(a,b,e,c)&&yd!=null){var g;a=(g=qd)!=null?g:qd={};g=a[yd]||0;g>=4||(a[yd]=g+1,rd())}return d}return nf(a,b,e,c)}}
function of(a,b,c){var d=a.G,e=Cd(d);Nd(e);pf(d,e,b,c);return a}
function pf(a,b,c,d){Jd(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&Dd(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function qf(a){return rf(a,sf,11,!1)!==void 0}
function tf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function uf(a,b,c){var d=a.G,e=Cd(d);Nd(e);if(b==null)return pf(d,e,3),a;b=Oe(b);if(!Array.isArray(b))throw sd();var f=Bd(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===Pd||!1);if(!(4&f)){f=21;h&&(b=ud(b),g=0,f=vf(f,e),f=wf(f,e,!0));for(var l=0;l<b.length;l++)b[l]=c(b[l])}k?(b=ud(b),g=0,f=vf(f,e),f=wf(f,e,!0)):h||Re(b,a);f!==g&&Dd(b,f);pf(d,e,3,b);return a}
function xf(a,b,c,d){a=a.G;var e=Cd(a);Nd(e);if(d==null){var f=yf(a);if(zf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=yf(a);var g=zf(f,a,e,c);g!==b&&(g&&(e=pf(a,e,g)),f.set(c,b))}pf(a,e,b,d)}
function yf(a){if(vd){var b;return(b=a[zd])!=null?b:a[zd]=new Map}if(zd in a)return a[zd];b=new Map;Object.defineProperty(a,zd,{value:b});return b}
function zf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];mf(b,c,g)!=null&&(e!==0&&(c=pf(b,c,e)),e=g)}a.set(d,e);return e}
function rf(a,b,c,d){a=a.G;var e=Cd(a);d=mf(a,e,c,d);b=De(d,b,e);b!==d&&b!=null&&pf(a,e,c,b);return b}
function Af(a,b,c,d){b=rf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.G;d=Cd(a);if(!(d&2)){var e=kf(b);e!==b&&(b=e,pf(a,d,c,b))}return b}
function kc(a,b,c){var d=void 0===Od?2:5;var e=Cd(a.G),f=e,g=!(2&e);e=a.G;var h=!!(2&f);d=h?1:d;g&&(g=!h);h=mf(e,f,c);h=Array.isArray(h)?h:Ld;var k=Bd(h),l=h;We(l,a);d!==2&&d!==1||Ve(l,a);l=!!(4&k);if(!l){var m=k;m===0&&(m=vf(m,f));k=h;m|=1;var n=f,r=!!(2&m);r&&(n|=2);for(var t=!r,v=!0,x=0,y=0;x<k.length;x++){var H=De(k[x],b,n);if(H instanceof b){if(!r){var J=!!(Bd(H.G)&2);t&&(t=!J);v&&(v=J)}k[y++]=H}}y<x&&(k.length=y);m|=4;m=v?m|16:m&-17;m=t?m|8:m&-9;Dd(k,m);r&&Object.freeze(k);k=m}if(g&&!(8&k||
!h.length&&(d===1||d===4&&32&k))){tf(k)?(h=ud(h),k=vf(k,f),f=pf(e,f,c,h)):Ve(h,a);b=h;g=k;for(k=0;k<b.length;k++)m=b[k],n=kf(m),m!==n&&(b[k]=n);g|=8;g=b.length?g&-17:g|16;Dd(b,g);k=g}if(d===1||d===4&&32&k)tf(k)||(a=k,f=!!(32&k),k|=!h.length||16&k&&(!l||f)?2:2048,k!==a&&Dd(h,k),Object.freeze(h));else if(l=d!==5?!1:!!(32&k)||tf(k)||!!Ie(h),(d===2||l)&&tf(k)&&(h=ud(h),k=vf(k,f),k=wf(k,f,!1),Dd(h,k),f=pf(e,f,c,h)),tf(k)||(c=k,k=wf(k,f,!1),k!==c&&Dd(h,k)),l){var N=Ee(h);Re(h,a,!0)}else if(d===2){var P;
(P=Me)==null||P.delete(h)}return N||h}
function Bf(a,b,c,d){d!=null?Ce(d,b):d=void 0;return of(a,c,d)}
function Cf(a,b,c,d){var e=a.G,f=Cd(e);Nd(f);if(d==null)return pf(e,f,c),a;d=Oe(d);if(!Array.isArray(d))throw sd();for(var g=Bd(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===Pd||!1),n=!0,r=!0,t=0;t<d.length;t++){var v=d[t];Ce(v,b);k||(v=!!(Bd(v.G)&2),n&&(n=!v),r&&(r=v))}k||(g|=5,g=n?g|8:g&-9,g=r?g|16:g&-17);m||l&&g!==h?(d=ud(d),h=0,g=vf(g,f),g=wf(g,f,!0)):l||Re(d,a);g!==h&&Dd(d,g);pf(e,f,c,d);return a}
function vf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function wf(a,b,c){32&b&&c||(a&=-33);return a}
function Df(a){a=lf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):oe(a)?c==="string"?te(a):b?ue(a):we(a):void 0;return b}
function Ef(a,b){return a!=null?a:b}
function Ff(a){var b=b===void 0?!1:b;a=lf(a,4);return Ef(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,b)}
function mc(a,b,c){c=c===void 0?0:c;return Ef(re(lf(a,b)),c)}
function Gf(a,b){var c=c===void 0?"":c;a=lf(a,b);return Ef(a==null||typeof a==="string"?a:void 0,c)}
function Hf(a){var b=0;b=b===void 0?0:b;a=lf(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return Ef(a,b)}
function If(a,b,c){return of(a,b,Be(c))}
function Jf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw sd("enum");c|=0}return of(a,b,c)}
;function Kf(a){return a}
function Lf(a){return a}
function Mf(a,b,c,d){return Nf(a,b,c,d,Of,Pf)}
function Qf(a,b,c,d){return Nf(a,b,c,d,Rf,Sf)}
function Nf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var r=c[n];d&&n===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Tf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;r=g;for(var v=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var H=e(y,t)+f(n,r,v);H<l&&(a=1+y,l=H);n++;t--;v+=Tf(y);r=Math.max(r,y)}}b=e(0,0)+f(n,r,v);b<l&&(a=0,l=b);if(d){n=h;r=g;v=m;t=k;for(var J in d)d=+J,isNaN(d)||d>=
1024||(n--,t++,v-=J.length,g=e(d,t)+f(n,r,v),g<l&&(a=1+d,l=g))}return a}
function Sf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Rf(a,b){return(a>1?a-1:0)+(a-b)*4}
function Pf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Of(a){return 40+4*a}
function Tf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Uf,Vf;function K(a,b,c){this.G=I(a,b,c)}
p=K.prototype;p.toJSON=function(){return Wf(this)};
p.serialize=function(a){try{return Vf=!0,a&&(Uf=a===Lf||a!==Kf&&a!==Mf&&a!==Qf?Lf:a),JSON.stringify(Wf(this),af)}finally{a&&(Uf=void 0),Vf=!1}};
function Xf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Ad(b,32);return $e(a,b)}
p.clone=function(){var a=this.G;return hf(this,a,Cd(a),!1)};
p.Ec=Gd;p.toString=function(){try{return Vf=!0,Wf(this).toString()}finally{Vf=!1}};
function Wf(a){Ye(a);var b;Vf?b=a.G:b=ef(a.G,ff,void 0,void 0,!1);var c=!Vf,d=Cd(c?a.G:b);if(a=b.length){var e=b[a-1],f=Jd(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!Uf&&!(d&512);var k,l=(k=Uf)!=null?k:Lf;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;var r;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],v=l-g;t==null||Kd(t)||Id(t)&&t.size===0||(f=m[l]=void 0,((f=r)!=null?f:r={})[v]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,
((l=r)!=null?l:r={})[x]=n[x];else if(t=n[x],Array.isArray(t)&&(Kd(t)||Id(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(v=m.length;v<=t;v++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=r)!=null?l:r={})[x]=t);f||(r=n);if(r)for(var y in r){n=r;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){r=d[a-1];if(!(r==null||Kd(r)||Id(r)&&r.size===0))break;var H=!0}if(d!==b||m||H){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(H||m||n)d.length=a;n&&d.push(n)}H=
d}else H=b;return H}
;function Yf(a){return function(b){return Xf(a,b)}}
;function Zf(a){this.G=I(a)}
z(Zf,K);function $f(a,b){return uf(a,b,pe)}
;function ag(a){this.G=I(a)}
z(ag,K);var bg=[1,2,3];function cg(a){this.G=I(a)}
z(cg,K);var dg=[1,2,3];function eg(a){this.G=I(a)}
z(eg,K);function fg(a){this.G=I(a)}
z(fg,K);function gg(a){this.G=I(a)}
z(gg,K);function hg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function ig(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],y=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var J=y^v&(x^y);var N=1518500249}else J=v^x^y,N=1859775393;else t<60?(J=v&x|y&(v|x),N=2400959708):(J=v^x^y,N=3395469782);J=((n<<5|n>>>27)&4294967295)+J+H+N+r[t]&4294967295;H=y;y=x;x=(v<<30|v>>>2)&4294967295;v=n;n=J}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+H&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var v=24;v>=0;v-=8)n[r++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Rd:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function jg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,kg(hg(d),a,c||null)].join(" "):null}
function kg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Jb(d,function(h){e.push(h)}),lg(e.join(" "));
var f=[],g=[];Jb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Jb(d,function(h){e.push(h)});
a=lg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function lg(a){var b=ig();b.update(a);return b.Rd().toLowerCase()}
;var mg={};function ng(a){this.h=a||{cookie:""}}
p=ng.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Mb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Ke;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Mb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ab(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Mb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ab(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var og=new ng(typeof document=="undefined"?null:document);function pg(a){return!!mg.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function qg(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;pg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new ng(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");pg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function rg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new ng(document)).get(b));return a?jg(a,c,d):null}
function sg(a,b){b=b===void 0?!1:b;var c=hg(String(C.location.href)),d=[];if(qg(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new ng(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?jg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&pg(b)&&((b=rg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=rg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function tg(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function ug(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?ug.apply(null,d):tg(d)}}
;function L(){this.da=this.da;this.D=this.D}
L.prototype.da=!1;L.prototype.dispose=function(){this.da||(this.da=!0,this.aa())};
L.prototype[Symbol.dispose]=function(){this.dispose()};
function vg(a,b){a.addOnDisposeCallback(Wa(tg,b))}
L.prototype.addOnDisposeCallback=function(a,b){this.da?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
L.prototype.aa=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function wg(a){this.G=I(a)}
z(wg,K);function xg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Xa()};
this.i=this.h()}
xg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
xg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
xg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
xg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function yg(a){this.G=I(a)}
z(yg,K);function zg(a){this.G=I(a)}
z(zg,K);function Ag(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Ag.prototype;p.clone=function(){return new Ag(this.x,this.y)};
p.equals=function(a){return a instanceof Ag&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Bg(a,b){this.width=a;this.height=b}
p=Bg.prototype;p.clone=function(){return new Bg(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Cg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Dg(a){var b=Eg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Fg(a){for(var b in a)return!1;return!0}
function Gg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Hg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Ig(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Jg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Kg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Kg(a[c]);return b}
var Lg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Lg.length;f++)c=Lg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ng(a,b){this.h=a===Og&&b||""}
Ng.prototype.toString=function(){return this.h};
var Og={};new Ng(Og,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Pg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Qg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Rg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Sg=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Tg(a){this.h=this.i=this.j=a}
Tg.prototype.reset=function(){this.h=this.i=this.j};
Tg.prototype.getValue=function(){return this.i};function Ug(a){this.G=I(a)}
z(Ug,K);Ug.prototype.cc=function(){return Hf(this)};function Vg(a){this.G=I(a)}
z(Vg,K);function Wg(a){this.G=I(a)}
z(Wg,K);function Xg(a,b){Cf(a,Vg,1,b)}
;function sf(a){this.G=I(a)}
z(sf,K);var Yg=["platform","platformVersion","architecture","model","uaFullVersion"],Zg=new Wg,$g=null;function ah(a,b){b=b===void 0?Yg:b;if(!$g){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Vg;f=If(f,1,e.brand);return If(f,2,e.version)});
Xg(of(Zg,2,me(a.mobile)),c);$g=a.getHighEntropyValues(b)}var d=new Set(b);return $g.then(function(e){var f=Zg.clone();d.has("platform")&&If(f,3,e.platform);d.has("platformVersion")&&If(f,4,e.platformVersion);d.has("architecture")&&If(f,5,e.architecture);d.has("model")&&If(f,6,e.model);d.has("uaFullVersion")&&If(f,7,e.uaFullVersion);return f}).catch(function(){return Zg.clone()})}
;function bh(a){this.G=I(a)}
z(bh,K);function eh(a){this.G=I(a,4)}
z(eh,K);function fh(a){this.G=I(a,35)}
z(fh,K);function gh(a){this.G=I(a,19)}
z(gh,K);gh.prototype.Pb=function(a){return Jf(this,2,a)};function hh(a){this.G=I(a,8)}
z(hh,K);var ih=Yf(hh);function jh(a){this.G=I(a)}
z(jh,K);var kh=new function(){this.ctor=jh;this.isRepeated=0;this.h=Af;this.defaultValue=void 0};function lh(a){L.call(this);var b=this;this.componentId="";this.j=[];this.W="";this.pageId=null;this.fa=this.T=-1;this.experimentIds=null;this.I=this.u=0;this.ha=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Ib=a.Ib||function(){};
this.i=new mh(a.logSource,a.cb);this.network=a.network;this.zb=a.zb||null;this.bufferSize=1E3;this.A=a.jf||null;this.sessionIndex=a.sessionIndex||null;this.Gb=a.Gb||!1;this.logger=null;this.withCredentials=!a.Xc;this.cb=a.cb||!1;this.H=typeof URLSearchParams!=="undefined"&&!!(new URL(nh())).searchParams&&!!(new URL(nh())).searchParams.set;var c=Jf(new bh,1,1);oh(this.i,c);this.o=new Tg(1E4);a=ph(this,a.Rc);this.h=new xg(this.o.getValue(),a);this.V=new xg(6E5,a);this.Gb||this.V.start();this.cb||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.vc()}),document.addEventListener("pagehide",this.vc.bind(this)))}
z(lh,L);function ph(a,b){return a.H?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
p=lh.prototype;p.aa=function(){this.vc();this.h.stop();this.V.stop();L.prototype.aa.call(this)};
p.log=function(a){if(this.H){a=a.clone();var b=this.ha++;a=of(a,21,xe(b));this.componentId&&If(a,26,this.componentId);if(Df(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";of(b,1,xe(c))}ze(lf(a,15))==null&&of(a,15,xe((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Bf(b,wg,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Gb||this.h.enabled||this.h.start()}};
p.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.fa>d&&this.T<d)b&&b("throttled");else{this.network&&(typeof this.network.cc==="function"?qh(this.i,this.network.cc()):qh(this.i,0));var e=rh(this.i,this.j,this.u,this.I,this.zb);d={};var f=this.Ib();f&&(d.Authorization=f);this.A||(this.A=nh());try{var g=(new URL(this.A)).toString()}catch(k){g=(new URL(this.A,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.W===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize();d={url:g.toString(),body:h,ah:1,qd:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.o.reset();c.h.setInterval(c.o.getValue());if(k){var l=null;try{var m=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=ih(m)}catch(n){}l&&(k=Number,m="-1",m=m===void 0?"0":m,m=Ef(Df(l),m),k=k(m),k>0&&(c.T=Date.now(),c.fa=c.T+k),l=kh.ctor?kh.h(l,kh.ctor,175237375,!0):kh.h(l,175237375,null,!0),l=l===null?void 0:l)&&(l=mc(l,1,-1),l!==-1&&(c.o=new Tg(l<1?1:l),c.h.setInterval(c.o.getValue())))}a&&a();c.I=0};
h=function(k,l){var m=kc(e,fh,3);var n=ze(lf(e,14));n=n==null?void 0:n;var r=c.o;r.h=Math.min(3E5,r.h*2);r.i=Math.min(3E5,r.h+Math.round(.1*(Math.random()-.5)*2*r.h));c.h.setInterval(c.o.getValue());k===401&&f&&(c.W=f);n&&(c.u+=n);l===void 0&&(l=c.isRetryable(k));l&&(c.j=m.concat(c.j),c.Gb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.I};
c.network&&c.network.send(d,g,h)}}}};
p.vc=function(){sh(this.i,!0);this.flush();sh(this.i,!1)};
p.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function nh(){return"https://play.google.com/log?format=json&hasfast=true"}
function mh(a,b){this.cb=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new gh;Number.isInteger(a)&&this.h.Pb(a);b||(this.locale=document.documentElement.getAttribute("lang"));oh(this,new bh)}
mh.prototype.Pb=function(a){this.h.Pb(a);return this};
function oh(a,b){Bf(a.h,bh,1,b);Hf(b)||Jf(b,1,1);a.cb||(b=th(a),Gf(b,5)||If(b,5,a.locale));a.i&&(b=th(a),Af(b,Wg,9)||Bf(b,Wg,9,a.i))}
function qh(a,b){qf(uh(a))&&(a=vh(a),Jf(a,1,b))}
function sh(a,b){qf(uh(a))&&(a=vh(a),of(a,2,me(b)))}
function uh(a){return Af(a.h,bh,1)}
function wh(a){var b=b===void 0?Yg:b;var c=a.cb?void 0:window;c?ah(c,b).then(function(d){a.i=d;d=th(a);Bf(d,Wg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function th(a){a=uh(a);var b=Af(a,sf,11);b||(b=new sf,Bf(a,sf,11,b));return b}
function vh(a){a=th(a);var b=Af(a,Ug,10);b||(b=new Ug,of(b,2,me(!1)),Bf(a,Ug,10,b));return b}
function rh(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(qf(uh(a))){var h=vh(a);of(h,3,qe(d))}qf(uh(a))&&(d=vh(a),of(d,4,qe(f)));qf(uh(a))&&(f=vh(a),of(f,5,qe(g)));a=a.h.clone();g=Date.now().toString();a=of(a,4,xe(g));b=b.slice();b=Cf(a,fh,3,b);e&&(a=new yg,e=of(a,13,qe(e)),a=new zg,e=Bf(a,yg,2,e),a=new eh,e=Bf(a,zg,1,e),e=Jf(e,2,9),Bf(b,eh,18,e));c&&of(b,14,xe(c));return b}
;function xh(){this.Hd=typeof AbortController!=="undefined"}
xh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return A(function(v){switch(v.h){case 1:return f=(e=d.Hd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.qd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.F(3);break}if((l=b)==null){v.F(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.I=[v.j];v.o=0;v.D=0;clearTimeout(f);Ba(v);break;case 2:m=Aa(v);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}v.F(3)}})};
xh.prototype.cc=function(){return 4};function yh(a,b){L.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.o=!1;this.network=null;this.componentId="";this.pageId=this.i=this.zb=null}
z(yh,L);yh.prototype.Xc=function(){this.u=!0;return this};
function zh(a){a.network||(a.network=new xh);var b=new lh({logSource:a.logSource,Ib:a.Ib?a.Ib:sg,sessionIndex:a.sessionIndex,jf:a.j,cb:a.o,Gb:!1,Xc:a.u,Rc:a.Rc,network:a.network});vg(a,b);if(a.h){var c=a.h,d=th(b.i);If(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.zb&&(b.zb=a.zb);a.pageId&&(b.pageId=a.pageId);a.i&&((d=a.i)?(b.experimentIds||(b.experimentIds=new wg),c=b.experimentIds,d=d.serialize(),If(c,4,d)):b.experimentIds&&of(b.experimentIds,4));wh(b.i);a.network.Pb&&a.network.Pb(a.logSource);
a.network.Ve&&a.network.Ve(b);return b}
;function Ah(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;L.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new yh(a,"0"),a.componentId=b,vg(this,a),c!==""&&(a.j=c),d&&(a.o=!0),e&&(a.h=e),g&&(a.network=g),b=zh(a));this.h=b}
z(Ah,L);
Ah.prototype.flush=function(a){var b=a||[];if(b.length){a=new gg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new fg;f=If(f,1,e.i);var g=Bh(e);f=uf(f,g,Ae);g=[];var h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.wc(l)||[],r=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new cg;switch(m){case 3:x=Number(x);Number.isFinite(x)&&xf(v,1,dg,xe(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);xf(v,2,dg,x)}r.push(v)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new eg;r=Bf(t,cg,2,r);t=l;v=[];x=Ch(e);for(var y=0;y<x.length;y++){var H=x[y],J=t[y],N=new ag;switch(H){case 3:xf(N,1,bg,Be(String(J)));break;case 2:H=Number(J);Number.isFinite(H)&&xf(N,2,bg,qe(H));break;case 1:xf(N,3,bg,me(J==="true"))}v.push(N)}Cf(r,ag,1,v);g.push(r)}}Cf(f,eg,4,g);c.push(f);e.clear()}Cf(a,fg,1,c);b=this.h;b.H&&(a instanceof fh?b.log(a):(c=new fh,a=a.serialize(),a=If(c,8,a),b.log(a)));this.h.flush()}};function Dh(a){this.h=a}
;function Eh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function Ch(a){return a.fields.map(function(b){return b.fieldType})}
function Bh(a){return a.fields.map(function(b){return b.fieldName})}
p=Eh.prototype;p.Id=function(a){var b=B.apply(1,arguments),c=this.wc(b);c?c.push(new Dh(a)):this.td(a,b)};
p.td=function(a){var b=this.Qc(B.apply(1,arguments));this.h.set(b,[new Dh(a)])};
p.wc=function(){var a=this.Qc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.ae=function(){var a=this.wc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Qc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Fh(a,b){Eh.call(this,a,3,b)}
z(Fh,Eh);Fh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ae(b);d&&(c=d.h);this.td(c+a,b)};function Gh(a,b){Eh.call(this,a,2,b)}
z(Gh,Eh);Gh.prototype.record=function(a){this.Id(a,B.apply(1,arguments))};function Hh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Hh.prototype.stopPropagation=function(){this.j=!0};
Hh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ih(a,b){Hh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Ya(Ih,Hh);
Ih.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Ih.Ba.preventDefault.call(this)};
Ih.prototype.stopPropagation=function(){Ih.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ih.prototype.preventDefault=function(){Ih.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Jh="closure_listenable_"+(Math.random()*1E6|0);var Kh=0;function Lh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.dc=e;this.key=++Kh;this.Ob=this.Wb=!1}
function Mh(a){a.Ob=!0;a.listener=null;a.proxy=null;a.src=null;a.dc=null}
;function Nh(a){this.src=a;this.listeners={};this.h=0}
Nh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Oh(a,b,d,e);g>-1?(b=a[g],c||(b.Wb=!1)):(b=new Lh(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
Nh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Oh(e,b,c,d);return b>-1?(Mh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Ph(a,b){var c=b.type;c in a.listeners&&Ob(a.listeners[c],b)&&(Mh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Oh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ob&&f.listener==b&&f.capture==!!c&&f.dc==d)return e}return-1}
;var Qh="closure_lm_"+(Math.random()*1E6|0),Rh={},Sh=0;function Th(a,b,c,d,e){if(d&&d.once)Uh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Th(a,b[f],c,d,e);else c=Vh(c),a&&a[Jh]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):Wh(a,b,c,!1,d,e)}
function Wh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=Xh(a);h||(a[Qh]=h=new Nh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Yh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Sg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Zh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Sh++}}
function Yh(){function a(c){return b.call(a.src,a.listener,c)}
var b=$h;return a}
function Uh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Uh(a,b[f],c,d,e);else c=Vh(c),a&&a[Jh]?a.h.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):Wh(a,b,c,!0,d,e)}
function ai(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ai(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Vh(c),a&&a[Jh])?a.h.remove(String(b),c,d,e):a&&(a=Xh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Oh(b,c,d,e)),(c=a>-1?b[a]:null)&&bi(c))}
function bi(a){if(typeof a!=="number"&&a&&!a.Ob){var b=a.src;if(b&&b[Jh])Ph(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Zh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Sh--;(c=Xh(b))?(Ph(c,a),c.h==0&&(c.src=null,b[Qh]=null)):Mh(a)}}}
function Zh(a){return a in Rh?Rh[a]:Rh[a]="on"+a}
function $h(a,b){if(a.Ob)a=!0;else{b=new Ih(b,this);var c=a.listener,d=a.dc||a.src;a.Wb&&bi(a);a=c.call(d,b)}return a}
function Xh(a){a=a[Qh];return a instanceof Nh?a:null}
var ci="__closure_events_fn_"+(Math.random()*1E9>>>0);function Vh(a){if(typeof a==="function")return a;a[ci]||(a[ci]=function(b){return a.handleEvent(b)});
return a[ci]}
;function di(){L.call(this);this.h=new Nh(this);this.Ia=this;this.fa=null}
Ya(di,L);di.prototype[Jh]=!0;p=di.prototype;p.addEventListener=function(a,b,c,d){Th(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){ai(this,a,b,c,d)};
function ei(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Ia;c=b.type||b;typeof b==="string"?b=new Hh(b,a):b instanceof Hh?b.target=b.target||a:(e=b,b=new Hh(c,a),Mg(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=fi(g,c,!0,b)&&e}b.j||(g=b.h=a,e=fi(g,c,!0,b)&&e,b.j||(e=fi(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=fi(g,c,!1,b)&&e}
p.aa=function(){di.Ba.aa.call(this);this.removeAllListeners();this.fa=null};
p.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
p.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Mh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function fi(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ob&&g.capture==c){var h=g.listener,k=g.dc||g.src;g.Wb&&Ph(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function gi(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
gi.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function hi(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;var ii;function ji(){if(typeof MessageChannel!=="undefined"){var a=new MessageChannel,b={},c=b;a.port1.onmessage=function(){if(b.next!==void 0){b=b.next;var d=b.Uc;b.Uc=null;d()}};
return function(d){c.next={Uc:d};c=c.next;a.port2.postMessage(0)}}return function(d){C.setTimeout(d,0)}}
;function ki(){this.i=this.h=null}
ki.prototype.add=function(a,b){var c=li.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
ki.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var li=new gi(function(){return new mi},function(a){return a.reset()});
function mi(){this.next=this.scope=this.h=null}
mi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
mi.prototype.reset=function(){this.next=this.scope=this.h=null};var ni,oi=!1,pi=new ki;function qi(a,b){ni||ri();oi||(ni(),oi=!0);pi.add(a,b)}
function ri(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);ni=function(){a.then(si)}}else ni=function(){var b=si;
ii||(ii=ji());ii(b)}}
function si(){for(var a;a=pi.remove();){try{a.h.call(a.scope)}catch(b){Dc(b)}hi(li,a)}oi=!1}
;function ti(){}
function ui(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function vi(a){this.h=0;this.A=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=ti)try{var b=this;a.call(void 0,function(c){wi(b,2,c)},function(c){wi(b,3,c)})}catch(c){wi(this,3,c)}}
function xi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
xi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var yi=new gi(function(){return new xi},function(a){a.reset()});
function zi(a,b,c){var d=yi.get();d.i=a;d.h=b;d.context=c;return d}
function Ai(a){return new vi(function(b,c){c(a)})}
vi.prototype.then=function(a,b,c){return Bi(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
vi.prototype.$goog_Thenable=!0;p=vi.prototype;p.oc=function(a,b){return Bi(this,null,a,b)};
p.catch=vi.prototype.oc;p.cancel=function(a){if(this.h==0){var b=new Ci(a);qi(function(){Di(this,b)},this)}};
function Di(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?Di(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Ei(c),Fi(c,e,3,b)))}a.j=null}else wi(a,3,b)}
function Gi(a,b){a.i||a.h!=2&&a.h!=3||Hi(a);a.o?a.o.next=b:a.i=b;a.o=b}
function Bi(a,b,c,d){var e=zi(null,null,null);e.child=new vi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Ci?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Gi(a,e);return e.child}
p.gf=function(a){this.h=0;wi(this,2,a)};
p.hf=function(a){this.h=0;wi(this,3,a)};
function wi(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.gf,f=a.hf;if(d instanceof vi){Gi(d,zi(e||ti,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if(typeof k==="function"){Ii(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,Hi(a),b!=3||c instanceof Ci||Ji(a,c))}}
function Ii(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Hi(a){a.u||(a.u=!0,qi(a.Vd,a))}
function Ei(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
p.Vd=function(){for(var a;a=Ei(this);)Fi(this,a,this.h,this.A);this.u=!1};
function Fi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,Ki(b,c,d);else try{b.j?b.i.call(b.context):Ki(b,c,d)}catch(e){Li.call(null,e)}hi(yi,b)}
function Ki(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Ji(a,b){a.D=!0;qi(function(){a.D&&Li.call(null,b)})}
var Li=Dc;function Ci(a){Za.call(this,a)}
Ya(Ci,Za);Ci.prototype.name="cancel";function Mi(a,b){di.call(this);this.j=a||1;this.i=b||C;this.o=Va(this.df,this);this.u=Xa()}
Ya(Mi,di);p=Mi.prototype;p.enabled=!1;p.Ea=null;p.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
p.df=function(){if(this.enabled){var a=Xa()-this.u;a>0&&a<this.j*.8?this.Ea=this.i.setTimeout(this.o,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),ei(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.o,this.j),this.u=Xa())};
p.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
p.aa=function(){Mi.Ba.aa.call(this);this.stop();delete this.i};function Ni(a){L.call(this);this.H=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new Mi(this.flushInterval);this.h.listen("tick",this.Cb,!1,this);vg(this,this.h)}
z(Ni,L);p=Ni.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Oi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Cb()}
p.Cb=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.u);Pi(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Pa=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Fh(a,b))};
p.nb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Gh(a,b))};
function Qi(a,b){return a.A.has(b)?void 0:a.i.get(b)}
p.Bb=function(a){this.Gd(a,1,B.apply(1,arguments))};
p.Gd=function(a,b){var c=B.apply(2,arguments),d=Qi(this,a);d&&d instanceof Fh&&(d.j(b,c),Oi(this))};
p.record=function(a,b){var c=B.apply(2,arguments),d=Qi(this,a);d&&d instanceof Gh&&(d.record(b,c),Oi(this))};
function Pi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ri(){}
Ri.prototype.serialize=function(a){var b=[];Si(this,a,b);return b.join("")};
function Si(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Si(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Ti(d,c),c.push(":"),Si(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ti(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ui={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Vi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ti(a,b){b.push('"',a.replace(Vi,function(c){var d=Ui[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ui[c]=d);return d}),'"')}
;function Wi(){}
Wi.prototype.h=null;Wi.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var Xi;function Yi(){}
Ya(Yi,Wi);Xi=new Yi;function Zi(a){di.call(this);this.headers=new Map;this.ya=a||null;this.i=!1;this.I=this.U=null;this.o=this.W="";this.j=this.V=this.u=this.T=!1;this.H=0;this.A=null;this.oa="";this.ha=!1}
Ya(Zi,di);var $i=/^https?$/i,aj=["POST","PUT"],bj=[];function cj(a,b,c,d,e,f,g){var h=new Zi;bj.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Nd,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
p=Zi.prototype;p.Nd=function(){this.dispose();Ob(bj,this)};
p.send=function(a,b,c,d){if(this.U)throw Error("[goog.net.XhrIo] Object is active with another request="+this.W+"; newUri="+a);b=b?b.toUpperCase():"GET";this.W=a;this.o="";this.T=!1;this.i=!0;this.U=new XMLHttpRequest;this.I=this.ya?this.ya.getOptions():Xi.getOptions();this.U.onreadystatechange=Va(this.ld,this);try{this.getStatus(),this.V=!0,this.U.open(b,String(a),!0),this.V=!1}catch(g){this.getStatus();dj(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if(typeof d.keys==="function"&&typeof d.get==="function"){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Ib(aj,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.U.setRequestHeader(d,c);this.oa&&(this.U.responseType=this.oa);"withCredentials"in this.U&&this.U.withCredentials!==this.ha&&(this.U.withCredentials=this.ha);try{ej(this),this.H>0&&(this.getStatus(),this.A=setTimeout(this.ff.bind(this),this.H)),this.getStatus(),this.u=!0,this.U.send(a),
this.u=!1}catch(g){this.getStatus(),dj(this,g)}};
p.ff=function(){typeof Ka!="undefined"&&this.U&&(this.o="Timed out after "+this.H+"ms, aborting",this.getStatus(),ei(this,"timeout"),this.abort(8))};
function dj(a,b){a.i=!1;a.U&&(a.j=!0,a.U.abort(),a.j=!1);a.o=b;fj(a);gj(a)}
function fj(a){a.T||(a.T=!0,ei(a,"complete"),ei(a,"error"))}
p.abort=function(){this.U&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.U.abort(),this.j=!1,ei(this,"complete"),ei(this,"abort"),gj(this))};
p.aa=function(){this.U&&(this.i&&(this.i=!1,this.j=!0,this.U.abort(),this.j=!1),gj(this,!0));Zi.Ba.aa.call(this)};
p.ld=function(){this.da||(this.V||this.u||this.j?hj(this):this.ye())};
p.ye=function(){hj(this)};
function hj(a){if(a.i&&typeof Ka!="undefined")if(a.I[1]&&ij(a)==4&&a.getStatus()==2)a.getStatus();else if(a.u&&ij(a)==4)setTimeout(a.ld.bind(a),0);else if(ei(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(jj(a))ei(a,"complete"),ei(a,"success");else{try{var b=ij(a)>2?a.U.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";fj(a)}}finally{gj(a)}}}
function gj(a,b){if(a.U){ej(a);var c=a.U,d=a.I[0]?function(){}:null;
a.U=null;a.I=null;b||ei(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function ej(a){a.A&&(clearTimeout(a.A),a.A=null)}
p.isActive=function(){return!!this.U};
p.isComplete=function(){return ij(this)==4};
function jj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=Yb(1,String(a.W)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!$i.test(a?a.toLowerCase():"");c=b}return c}
function ij(a){return a.U?a.U.readyState:0}
p.getStatus=function(){try{return ij(this)>2?this.U.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function kj(){}
kj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
cj(a.url,function(d){d=d.target;if(jj(d)){try{var e=d.U?d.U.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.qd,a.timeoutMillis,a.withCredentials)};
kj.prototype.cc=function(){return 1};var lj={wa:"_",pc:"",Ra:[],qe:0};function mj(a,b,c){this.logger=a;this.event=b;if(c===void 0||c)this.h=nj()}
mj.prototype.start=function(){this.h=nj()};
mj.prototype.done=function(){this.h!=null&&this.logger.Lb(this.event,nj()-this.h)};
function oj(){L.apply(this,arguments)}
z(oj,L);function pj(a,b){var c=nj();b=b();a.Lb("n",nj()-c);return b}
function qj(){oj.apply(this,arguments)}
z(qj,oj);p=qj.prototype;p.hd=function(){};
p.Ac=function(){};
p.Bc=function(){};
p.Lb=function(){};
p.Fa=function(){};
p.Xa=function(){};
p.yd=function(){};
function rj(a,b,c){c=c===void 0?[]:c;oj.call(this);this.T=b;this.i=c;this.u=new Map;this.j=new Map;this.Ra=[];this.A=void 0;this.I=!1;b=Object.assign({},lj,a);this.wa=b.wa;this.pc=b.pc;this.H=b.qe;this.Ra=b.Ra;var d=new Zf,e;if((e=this.T)==null?0:Ff(e)){var f;this.Ra=(f=b.Ra)==null?void 0:f.sort(function(g,h){return g-h});
this.i=c.sort(function(g,h){return g-h});
$f(d,this.Ra.concat(this.i))}else $f(d,a.Ra);sj(this,d);this.u.set("h",1);this.u.set("u",2);this.u.set("k",3);this.j.set(25,1);this.j.set(26,2);this.j.set(27,3);this.j.set(28,4)}
z(rj,oj);p=rj.prototype;p.yd=function(a){var b;(b=this.T)!=null&&Ff(b)&&(a=a.sort(function(c,d){return c-d}),this.i!==a&&(this.i=a,a=$f(new Zf,this.Ra.concat(this.i)),sj(this,a)))};
function sj(a,b){var c=new yh(1828,"0");c.h="31";c.network=new kj;c.i=b;a.h&&(a.Xa(),a.h.dispose());a.o&&a.o.dispose();a.o=new Ah(1828,"","",!1,"",zh(c));a.h=new Ni(a.o);a.h.o=1E5;b=a.h;b.flushInterval=3E4;b.h.setInterval(3E4);a.ya=new rc(a.h);a.Ia=new uc(a.h);a.Ya=new vc(a.h);a.lb=new wc(a.h);a.oa=new qc(a.h);a.V=new sc(a.h);a.W=new tc(a.h);a.errorCount=new zc(a.h);a.fa=new yc(a.h);new xc(a.h);new Ac(a.h);new Bc(a.h);new Cc(a.h);a.ha=new pc(a.h);vg(a,a.o);vg(a,a.h)}
p.hd=function(){var a;(a=this.ha)!=null&&a.h.Bb("/client_streamz/bg/fic",this.wa)};
p.Ac=function(){var a;(a=this.Ia)!=null&&a.h.Bb("/client_streamz/bg/fsc",this.wa)};
p.Bc=function(a){var b;(b=this.lb)==null||b.record(a,this.wa)};
p.Lb=function(a,b){if(a==="t"){var c;(c=this.ya)==null||c.record(b,this.wa)}else if(a==="n"){var d;(d=this.Ya)==null||d.record(b,this.wa)}else if(a==="h"||a==="u"||a==="k"){if(a=this.u.get(a)){var e;(e=this.V)!=null&&e.h.Bb("/client_streamz/bg/fcc",a,this.wa);var f;(f=this.W)==null||f.record(b,a,this.wa)}}else{var g;(g=this.fa)==null||g.record(b,a,this.pc,this.wa)}};
p.Fa=function(a){var b=this.j.get(a);if(b){var c;(c=this.oa)!=null&&c.h.Bb("/client_streamz/bg/fiec",this.wa,b)}else{var d;(d=this.errorCount)!=null&&d.h.Bb("/client_streamz/bg/cec",a,this.pc,this.wa)}};
p.Xa=function(){var a=this;if(!this.H){var b;(b=this.h)==null||b.Cb()}else if(!this.I)if(b=nj(),this.A===void 0){this.A=b;var c;(c=this.h)==null||c.Cb()}else if(c=b-this.A,c>=this.H){this.A=b;var d;(d=this.h)==null||d.Cb()}else this.I=!0,setTimeout(function(){a.da||(a.I=!1,a.Xa())},this.H-c)};
function nj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function lc(a){this.G=I(a)}
z(lc,K);function tj(a){this.G=I(a)}
z(tj,K);var uj=Yf(tj);function vj(a){this.G=I(a,0,"bfkj")}
z(vj,K);var wj=function(a){return Qd(function(b){return b instanceof a&&!(Bd(b.G)&2)})}(vj);function xj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function yj(a){function b(y,H,J,N){Promise.resolve().then(function(){n.done();d.logger.Xa();m.resolve({Kd:y,Ye:H,qh:J,eh:N})})}
function c(y,H,J,N){if(!d.logger.da){var P="k";H?P="h":J&&(P="u");P!=="k"?N!==0&&d.logger.Lb(P,y):d.j<=0?(d.logger.Lb(P,y),d.j=Math.floor(Math.random()*200)):d.j--}}
L.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.i=[];if("challenge"in a&&wj(a.challenge)){var e=Gf(a.challenge,4);var f=Gf(a.challenge,5);Gf(a.challenge,7).length?this.h=uj(Gf(a.challenge,7)):this.h=Af(a.challenge,tj,6)}else e=a.program,f=a.ce;var g=new L;this.addOnDisposeCallback(function(){var y,H,J;return A(function(N){if(N.h==1)return N.yield(d.o,2);if(N.h!=3)return y=N.i,H=y.Ye,N.yield(Promise.all(d.i),3);d.i=[];d.logger.Xa();(J=H)==null||J();g.dispose();N.h=0})});
if(a.Ee!==!1)if(a.Od){this.logger=a.Od;var h;((h=this.h)==null?0:Ff(h))&&this.logger.yd(jc(this.h))}else{h=[];var k;if((k=this.h)==null?0:Ff(k))h=jc(this.h);var l;vg(g,this.logger=new rj((l=a.we)!=null?l:lj,this.h,h))}else vg(g,this.logger=new qj);var m=new xj;this.o=m.promise;var n=new mj(this.logger,"t",!0);this.logger.hd();if(!C[f])throw this.logger.Fa(25),Error("EGOU");if(!C[f].a)throw this.logger.Fa(26),Error("ELIU");try{var r=C[f].a;f=[[],[]];var t;if((t=this.h)==null?0:Ff(t)){var v=jc(this.h);
for(t=0;t<v.length;t++)f[0].push(v[t]),f[1].push(1);var x=nc(this.h);for(v=0;v<x.length;v++)f[0].push(x[v]),f[1].push(2)}this.u=w(r(e,b,!0,a.Ah,c,f)).next().value;this.Xe=m.promise.then(function(){})}catch(y){throw this.logger.Fa(28),y;
}}
z(yj,L);yj.prototype.snapshot=function(a){var b=this;if(this.da)throw Error("Already disposed");var c=new xj;this.i.push(c.promise);this.logger.Ac();return this.o.then(function(d){var e=d.Kd;return new Promise(function(f){var g=new mj(b.logger,"n");e(function(h){g.done();b.logger.Bc(h.length);b.logger.Xa();f(h)},[a.Wc,
a.Ze,a.lf,a.af])})}).finally(function(){return void c.resolve()})};
yj.prototype.vd=function(a){var b=this;if(this.da)throw Error("Already disposed");this.logger.Ac();var c=pj(this.logger,function(){return b.u([a.Wc,a.Ze,a.lf,a.af])});
this.logger.Bc(c.length);this.logger.Xa();return c};
yj.prototype.getLogger=function(){return this.logger};var zj=window;function Aj(a){var b=Bj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Cj(){var a=[];Aj(function(b){a.push(b)});
return a}
var Bj={mf:"allow-forms",nf:"allow-modals",pf:"allow-orientation-lock",qf:"allow-pointer-lock",rf:"allow-popups",sf:"allow-popups-to-escape-sandbox",tf:"allow-presentation",uf:"allow-same-origin",vf:"allow-scripts",wf:"allow-top-navigation",xf:"allow-top-navigation-by-user-activation"},Dj=ui(function(){return Cj()});
function Ej(){var a=Fj(),b={};Jb(Dj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Fj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Gj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Hj=(new Date).getTime();function Ij(a){di.call(this);var b=this;this.A=this.j=0;this.Da=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Jj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Kj(this)}
z(Ij,di);function Lj(){var a=Mj;Ij.h||(Ij.h=new Ij(a));return Ij.h}
Ij.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Da.qa(this.A);delete Ij.h};
Ij.prototype.va=function(){return this.i};
function Kj(a){a.A=a.Da.pa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(Jj(a),3):c.yield(Jj(a),3);Kj(a);c.h=0})},3E4)}
function Jj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Da.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.I=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Da.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ei(a,"networkstatus-online"):ei(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.F(3)}})})}
;function Nj(){this.data=[];this.h=-1}
Nj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Nj.prototype.get=function(a){return!!this.data[a]};
function Oj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Pj(){this.blockSize=-1}
;function Qj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Ya(Qj,Pj);Qj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Rj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Qj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Rj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Rj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Rj(this,e);f=0;break}}this.i=f;this.o+=b}};
Qj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Rj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Sj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Tj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Uj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Sj(a).match(/\S+/g)||[],b=Ib(a,b)>=0);return b}
function Vj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Uj(a,"inverted-hdpi")&&Tj(a,Array.prototype.filter.call(a.classList?a.classList:Sj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Wj(){}
Wj.prototype.next=function(){return Xj};
var Xj={done:!0,value:void 0};Wj.prototype.mb=function(){return this};function Yj(a){if(a instanceof Zj||a instanceof ak||a instanceof bk)return a;if(typeof a.next=="function")return new Zj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Zj(function(){return a[Symbol.iterator]()});
if(typeof a.mb=="function")return new Zj(function(){return a.mb()});
throw Error("Not an iterator or iterable.");}
function Zj(a){this.h=a}
Zj.prototype.mb=function(){return new ak(this.h())};
Zj.prototype[Symbol.iterator]=function(){return new bk(this.h())};
Zj.prototype.i=function(){return new bk(this.h())};
function ak(a){this.h=a}
z(ak,Wj);ak.prototype.next=function(){return this.h.next()};
ak.prototype[Symbol.iterator]=function(){return new bk(this.h)};
ak.prototype.i=function(){return new bk(this.h)};
function bk(a){Zj.call(this,function(){return a});
this.j=a}
z(bk,Zj);bk.prototype.next=function(){return this.j.next()};function M(a){L.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
Ya(M,L);p=M.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Sb(a)}return!1};
p.Sb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ob(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.kb=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];ck(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.da;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Sb(c)}}return e!=0}return!1};
function ck(a,b,c){qi(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Sb,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.aa=function(){M.Ba.aa.call(this);this.clear();this.j.length=0};function dk(a){this.h=a}
dk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Ri).serialize(b))};
dk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
dk.prototype.remove=function(a){this.h.remove(a)};function ek(a){this.h=a}
Ya(ek,dk);function fk(a){this.data=a}
function gk(a){return a===void 0||a instanceof fk?a:new fk(a)}
ek.prototype.set=function(a,b){ek.Ba.set.call(this,a,gk(b))};
ek.prototype.i=function(a){a=ek.Ba.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ek.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function hk(a){this.h=a}
Ya(hk,ek);hk.prototype.set=function(a,b,c){if(b=gk(b)){if(c){if(c<Xa()){hk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Xa()}hk.Ba.set.call(this,a,b)};
hk.prototype.i=function(a){var b=hk.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Xa()||c&&c>Xa())hk.prototype.remove.call(this,a);else return b}};function ik(){}
;function jk(){}
Ya(jk,ik);jk.prototype[Symbol.iterator]=function(){return Yj(this.mb(!0)).i()};
jk.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function kk(a){this.h=a;this.i=null}
Ya(kk,jk);p=kk.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){lk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){lk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){lk(this);this.h.removeItem(a)};
p.mb=function(a){lk(this);var b=0,c=this.h,d=new Wj;d.next=function(){if(b>=c.length)return Xj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){lk(this);this.h.clear()};
p.key=function(a){lk(this);return this.h.key(a)};
function lk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Dc(Error("Storage mechanism: Storage unavailable"))}
;function mk(){var a=null;try{a=C.localStorage||null}catch(b){}kk.call(this,a)}
Ya(mk,kk);function nk(a,b){this.i=a;this.h=b+"::"}
Ya(nk,jk);nk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
nk.prototype.get=function(a){return this.i.get(this.h+a)};
nk.prototype.remove=function(a){this.i.remove(this.h+a)};
nk.prototype.mb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Wj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},ok=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Mc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var pk={ob:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Zc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},qk={ob:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Zc:function(a){return[].concat.apply([],a)}};
O.We=function(){ok?(O.jb=Uint8Array,O.Ha=Uint16Array,O.Fd=Int32Array,O.assign(O,pk)):(O.jb=Array,O.Ha=Array,O.Fd=Array,O.assign(O,qk))};
O.We();var rk=!0;try{new Uint8Array(1)}catch(a){rk=!1}
function sk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.jb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var tk={};tk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var uk={},vk,wk=[],xk=0;xk<256;xk++){vk=xk;for(var yk=0;yk<8;yk++)vk=vk&1?3988292384^vk>>>1:vk>>>1;wk[xk]=vk}uk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^wk[(a^b[d])&255];return a^-1};var zk={};zk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Ak(a){for(var b=a.length;--b>=0;)a[b]=0}
var Bk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ck=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Dk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ek=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Fk=Array(576);Ak(Fk);var Gk=Array(60);Ak(Gk);var Hk=Array(512);Ak(Hk);var Ik=Array(256);Ak(Ik);var Jk=Array(29);Ak(Jk);var Kk=Array(30);Ak(Kk);function Lk(a,b,c,d,e){this.wd=a;this.Yd=b;this.Xd=c;this.Sd=d;this.ue=e;this.dd=a&&a.length}
var Mk,Nk,Ok;function Pk(a,b){this.Yc=a;this.wb=0;this.Va=b}
function Qk(a,b){a.Z[a.pending++]=b&255;a.Z[a.pending++]=b>>>8&255}
function Rk(a,b,c){a.ia>16-c?(a.na|=b<<a.ia&65535,Qk(a,a.na),a.na=b>>16-a.ia,a.ia+=c-16):(a.na|=b<<a.ia&65535,a.ia+=c)}
function Sk(a,b,c){Rk(a,c[b*2],c[b*2+1])}
function Tk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Uk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Tk(d[e]++,e))}
function Vk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.ab[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Ab=0;a.za=a.matches=0}
function Wk(a){a.ia>8?Qk(a,a.na):a.ia>0&&(a.Z[a.pending++]=a.na);a.na=0;a.ia=0}
function Xk(a,b,c){Wk(a);Qk(a,c);Qk(a,~c);O.ob(a.Z,a.window,b,c,a.pending);a.pending+=c}
function Yk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Zk(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Yk(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(Yk(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function $k(a,b,c){var d=0;if(a.za!==0){do{var e=a.Z[a.Fb+d*2]<<8|a.Z[a.Fb+d*2+1];var f=a.Z[a.zc+d];d++;if(e===0)Sk(a,f,b);else{var g=Ik[f];Sk(a,g+256+1,b);var h=Bk[g];h!==0&&(f-=Jk[g],Rk(a,f,h));e--;g=e<256?Hk[e]:Hk[256+(e>>>7)];Sk(a,g,c);h=Ck[g];h!==0&&(e-=Kk[g],Rk(a,e,h))}}while(d<a.za)}Sk(a,256,b)}
function al(a,b){var c=b.Yc,d=b.Va.wd,e=b.Va.dd,f=b.Va.Sd,g,h=-1;a.Ma=0;a.rb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.Ma]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ma<2;){var k=a.ba[++a.Ma]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Ab-=d[k*2+1])}b.wb=h;for(g=a.Ma>>1;g>=1;g--)Zk(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.Ma--],Zk(a,c,1),d=a.ba[1],a.ba[--a.rb]=g,a.ba[--a.rb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,Zk(a,c,1);while(a.Ma>=
2);a.ba[--a.rb]=a.ba[1];g=b.Yc;k=b.wb;d=b.Va.wd;e=b.Va.dd;f=b.Va.Yd;var l=b.Va.Xd,m=b.Va.ue,n,r=0;for(n=0;n<=15;n++)a.Ja[n]=0;g[a.ba[a.rb]*2+1]=0;for(b=a.rb+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ja[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Oa+=x*(n+v);e&&(a.Ab+=x*(d[t*2+1]+v))}}if(r!==0){do{for(n=m-1;a.Ja[n]===0;)n--;a.Ja[n]--;a.Ja[n+1]+=2;a.Ja[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ja[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Uk(c,h,a.Ja)}
function bl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function cl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Sk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Sk(a,l,a.ja),g--),Sk(a,16,a.ja),Rk(a,g-3,2)):g<=10?(Sk(a,17,a.ja),Rk(a,g-3,3)):(Sk(a,18,a.ja),Rk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function dl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var el=!1;function fl(a,b,c){a.Z[a.Fb+a.za*2]=b>>>8&255;a.Z[a.Fb+a.za*2+1]=b&255;a.Z[a.zc+a.za]=c&255;a.za++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Ik[c]+256+1)*2]++,a.ab[(b<256?Hk[b]:Hk[256+(b>>>7)])*2]++);return a.za===a.Kb-1}
;function gl(a,b){a.msg=zk[b];return b}
function hl(a){for(var b=a.length;--b>=0;)a[b]=0}
function il(a){var b=a.state,c=b.pending;c>a.R&&(c=a.R);c!==0&&(O.ob(a.output,b.Z,b.Nb,c,a.xb),a.xb+=c,b.Nb+=c,a.Nc+=c,a.R-=c,b.pending-=c,b.pending===0&&(b.Nb=0))}
function jl(a,b){var c=a.ta>=0?a.ta:-1,d=a.v-a.ta,e=0;if(a.level>0){a.M.uc===2&&(a.M.uc=dl(a));al(a,a.fc);al(a,a.Zb);bl(a,a.ra,a.fc.wb);bl(a,a.ab,a.Zb.wb);al(a,a.Sc);for(e=18;e>=3&&a.ja[Ek[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Rk(a,b?1:0,3),Xk(a,c,d);else if(a.strategy===4||g===f)Rk(a,2+(b?1:0),3),$k(a,Fk,Gk);else{Rk(a,4+(b?1:0),3);c=a.fc.wb+1;d=a.Zb.wb+1;e+=1;Rk(a,c-257,5);Rk(a,d-1,5);Rk(a,e-4,4);for(f=0;f<e;f++)Rk(a,
a.ja[Ek[f]*2+1],3);cl(a,a.ra,c-1);cl(a,a.ab,d-1);$k(a,a.ra,a.ab)}Vk(a);b&&Wk(a);a.ta=a.v;il(a.M)}
function R(a,b){a.Z[a.pending++]=b}
function kl(a,b){a.Z[a.pending++]=b>>>8&255;a.Z[a.pending++]=b&255}
function ll(a,b){var c=a.jd,d=a.v,e=a.xa,f=a.kd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.Wa,l=a.Ga,m=a.v+258,n=h[d+e-1],r=h[d+e];a.xa>=a.cd&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.vb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function ml(a){var b=a.la,c;do{var d=a.Dd-a.B-a.v;if(a.v>=b+(b-262)){O.ob(a.window,a.window,b,b,0);a.vb-=b;a.v-=b;a.ta-=b;var e=c=a.ec;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.ma===0)break;e=a.M;c=a.window;f=a.v+a.B;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,O.ob(c,e.input,e.gb,g,f),e.state.wrap===1?e.K=tk(e.K,c,g,f):e.state.wrap===2&&(e.K=uk(e.K,c,g,f)),e.gb+=g,e.ib+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.P=a.window[d],
a.P=(a.P<<a.La^a.window[d+1])&a.Ka;a.sa&&!(a.P=(a.P<<a.La^a.window[d+3-1])&a.Ka,a.Ga[d&a.Wa]=a.head[a.P],a.head[a.P]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.M.ma!==0)}
function nl(a,b){for(var c;;){if(a.B<262){ml(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.La^a.window[a.v+3-1])&a.Ka,c=a.Ga[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.la-262&&(a.S=ll(a,c));if(a.S>=3)if(c=fl(a,a.v-a.vb,a.S-3),a.B-=a.S,a.S<=a.Cc&&a.B>=3){a.S--;do a.v++,a.P=(a.P<<a.La^a.window[a.v+3-1])&a.Ka,a.Ga[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v;while(--a.S!==0);a.v++}else a.v+=a.S,a.S=0,a.P=a.window[a.v],a.P=(a.P<<a.La^a.window[a.v+1])&a.Ka;else c=fl(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(jl(a,!1),a.M.R===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(jl(a,!0),a.M.R===0?3:4):a.za&&(jl(a,!1),a.M.R===0)?1:2}
function ol(a,b){for(var c,d;;){if(a.B<262){ml(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.P=(a.P<<a.La^a.window[a.v+3-1])&a.Ka,c=a.Ga[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);a.xa=a.S;a.nd=a.vb;a.S=2;c!==0&&a.xa<a.Cc&&a.v-c<=a.la-262&&(a.S=ll(a,c),a.S<=5&&(a.strategy===1||a.S===3&&a.v-a.vb>4096)&&(a.S=2));if(a.xa>=3&&a.S<=a.xa){d=a.v+a.B-3;c=fl(a,a.v-1-a.nd,a.xa-3);a.B-=a.xa-1;a.xa-=2;do++a.v<=d&&(a.P=(a.P<<a.La^a.window[a.v+3-1])&a.Ka,a.Ga[a.v&a.Wa]=a.head[a.P],a.head[a.P]=a.v);
while(--a.xa!==0);a.eb=0;a.S=2;a.v++;if(c&&(jl(a,!1),a.M.R===0))return 1}else if(a.eb){if((c=fl(a,0,a.window[a.v-1]))&&jl(a,!1),a.v++,a.B--,a.M.R===0)return 1}else a.eb=1,a.v++,a.B--}a.eb&&(fl(a,0,a.window[a.v-1]),a.eb=0);a.sa=a.v<2?a.v:2;return b===4?(jl(a,!0),a.M.R===0?3:4):a.za&&(jl(a,!1),a.M.R===0)?1:2}
function pl(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){ml(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.S=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.S=258-(e-d);a.S>a.B&&(a.S=a.B)}a.S>=3?(c=fl(a,1,a.S-3),a.B-=a.S,a.v+=a.S,a.S=0):(c=fl(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(jl(a,!1),a.M.R===0))return 1}a.sa=0;return b===4?(jl(a,!0),a.M.R===0?3:4):
a.za&&(jl(a,!1),a.M.R===0)?1:2}
function ql(a,b){for(var c;;){if(a.B===0&&(ml(a),a.B===0)){if(b===0)return 1;break}a.S=0;c=fl(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(jl(a,!1),a.M.R===0))return 1}a.sa=0;return b===4?(jl(a,!0),a.M.R===0?3:4):a.za&&(jl(a,!1),a.M.R===0)?1:2}
function rl(a,b,c,d,e){this.de=a;this.te=b;this.xe=c;this.se=d;this.Zd=e}
var sl;sl=[new rl(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.B<=1){ml(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.ta+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,jl(a,!1),a.M.R===0)return 1;if(a.v-a.ta>=a.la-262&&(jl(a,!1),a.M.R===0))return 1}a.sa=0;if(b===4)return jl(a,!0),a.M.R===0?3:4;a.v>a.ta&&jl(a,!1);return 1}),
new rl(4,4,8,4,nl),new rl(4,5,16,8,nl),new rl(4,6,32,32,nl),new rl(4,4,16,16,ol),new rl(8,16,32,32,ol),new rl(8,16,128,128,ol),new rl(8,32,128,256,ol),new rl(32,128,258,1024,ol),new rl(32,258,258,4096,ol)];
function tl(){this.M=null;this.status=0;this.Z=null;this.wrap=this.pending=this.Nb=this.Aa=0;this.J=null;this.Ca=0;this.method=8;this.tb=-1;this.Wa=this.Pc=this.la=0;this.window=null;this.Dd=0;this.head=this.Ga=null;this.kd=this.cd=this.strategy=this.level=this.Cc=this.jd=this.xa=this.B=this.vb=this.v=this.eb=this.nd=this.S=this.ta=this.La=this.Ka=this.xc=this.ec=this.P=0;this.ra=new O.Ha(1146);this.ab=new O.Ha(122);this.ja=new O.Ha(78);hl(this.ra);hl(this.ab);hl(this.ja);this.Sc=this.Zb=this.fc=
null;this.Ja=new O.Ha(16);this.ba=new O.Ha(573);hl(this.ba);this.rb=this.Ma=0;this.depth=new O.Ha(573);hl(this.depth);this.ia=this.na=this.sa=this.matches=this.Ab=this.Oa=this.Fb=this.za=this.Kb=this.zc=0}
function ul(a,b){if(!a||!a.state||b>5||b<0)return a?gl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return gl(a,a.R===0?-5:-2);c.M=a;var d=c.tb;c.tb=b;if(c.status===42)if(c.wrap===2)a.K=0,R(c,31),R(c,139),R(c,8),c.J?(R(c,(c.J.text?1:0)+(c.J.Sa?2:0)+(c.J.extra?4:0)+(c.J.name?8:0)+(c.J.comment?16:0)),R(c,c.J.time&255),R(c,c.J.time>>8&255),R(c,c.J.time>>16&255),R(c,c.J.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.J.os&255),c.J.extra&&c.J.extra.length&&
(R(c,c.J.extra.length&255),R(c,c.J.extra.length>>8&255)),c.J.Sa&&(a.K=uk(a.K,c.Z,c.pending,0)),c.Ca=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Pc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;kl(c,e+(31-e%31));c.v!==0&&(kl(c,a.K>>>16),kl(c,a.K&65535));a.K=1}if(c.status===69)if(c.J.extra){for(e=c.pending;c.Ca<(c.J.extra.length&65535)&&(c.pending!==c.Aa||
(c.J.Sa&&c.pending>e&&(a.K=uk(a.K,c.Z,c.pending-e,e)),il(a),e=c.pending,c.pending!==c.Aa));)R(c,c.J.extra[c.Ca]&255),c.Ca++;c.J.Sa&&c.pending>e&&(a.K=uk(a.K,c.Z,c.pending-e,e));c.Ca===c.J.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.J.name){e=c.pending;do{if(c.pending===c.Aa&&(c.J.Sa&&c.pending>e&&(a.K=uk(a.K,c.Z,c.pending-e,e)),il(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.J.name.length?c.J.name.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.J.Sa&&c.pending>
e&&(a.K=uk(a.K,c.Z,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.J.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.J.Sa&&c.pending>e&&(a.K=uk(a.K,c.Z,c.pending-e,e)),il(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.J.comment.length?c.J.comment.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.J.Sa&&c.pending>e&&(a.K=uk(a.K,c.Z,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.J.Sa?(c.pending+2>c.Aa&&il(a),c.pending+2<=c.Aa&&(R(c,a.K&
255),R(c,a.K>>8&255),a.K=0,c.status=113)):c.status=113);if(c.pending!==0){if(il(a),a.R===0)return c.tb=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return gl(a,-5);if(c.status===666&&a.ma!==0)return gl(a,-5);if(a.ma!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?ql(c,b):c.strategy===3?pl(c,b):sl[c.level].Zd(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.R===0&&(c.tb=-1),0;if(d===2&&(b===1?(Rk(c,2,3),Sk(c,256,Fk),c.ia===16?(Qk(c,c.na),c.na=0,c.ia=0):c.ia>=8&&
(c.Z[c.pending++]=c.na&255,c.na>>=8,c.ia-=8)):b!==5&&(Rk(c,0,3),Xk(c,0,0),b===3&&(hl(c.head),c.B===0&&(c.v=0,c.ta=0,c.sa=0))),il(a),a.R===0))return c.tb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.K&255),R(c,a.K>>8&255),R(c,a.K>>16&255),R(c,a.K>>24&255),R(c,a.ib&255),R(c,a.ib>>8&255),R(c,a.ib>>16&255),R(c,a.ib>>24&255)):(kl(c,a.K>>>16),kl(c,a.K&65535));il(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var vl={};vl=function(){this.input=null;this.ib=this.ma=this.gb=0;this.output=null;this.Nc=this.R=this.xb=0;this.msg="";this.state=null;this.uc=2;this.K=0};var wl=Object.prototype.toString;
function xl(a){if(!(this instanceof xl))return new xl(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new vl;this.M.R=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=gl(b,-2);else{e===8&&(e=9);var k=new tl;b.state=k;k.M=b;k.wrap=h;k.J=null;k.Pc=e;k.la=1<<k.Pc;k.Wa=k.la-1;k.xc=f+7;k.ec=1<<k.xc;k.Ka=k.ec-1;k.La=~~((k.xc+3-1)/3);k.window=new O.jb(k.la*2);k.head=new O.Ha(k.ec);k.Ga=new O.Ha(k.la);k.Kb=1<<f+6;k.Aa=k.Kb*4;k.Z=new O.jb(k.Aa);k.Fb=1*k.Kb;k.zc=3*k.Kb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ib=b.Nc=0;b.uc=2;c=b.state;c.pending=0;c.Nb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.K=c.wrap===2?
0:1;c.tb=0;if(!el){d=Array(16);for(f=g=0;f<28;f++)for(Jk[f]=g,e=0;e<1<<Bk[f];e++)Ik[g++]=f;Ik[g-1]=f;for(f=g=0;f<16;f++)for(Kk[f]=g,e=0;e<1<<Ck[f];e++)Hk[g++]=f;for(g>>=7;f<30;f++)for(Kk[f]=g<<7,e=0;e<1<<Ck[f]-7;e++)Hk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Fk[e*2+1]=8,e++,d[8]++;for(;e<=255;)Fk[e*2+1]=9,e++,d[9]++;for(;e<=279;)Fk[e*2+1]=7,e++,d[7]++;for(;e<=287;)Fk[e*2+1]=8,e++,d[8]++;Uk(Fk,287,d);for(e=0;e<30;e++)Gk[e*2+1]=5,Gk[e*2]=Tk(e,5);Mk=new Lk(Fk,Bk,257,286,15);Nk=new Lk(Gk,
Ck,0,30,15);Ok=new Lk([],Dk,0,19,7);el=!0}c.fc=new Pk(c.ra,Mk);c.Zb=new Pk(c.ab,Nk);c.Sc=new Pk(c.ja,Ok);c.na=0;c.ia=0;Vk(c);c=0}else c=gl(b,-2);c===0&&(b=b.state,b.Dd=2*b.la,hl(b.head),b.Cc=sl[b.level].te,b.cd=sl[b.level].de,b.kd=sl[b.level].xe,b.jd=sl[b.level].se,b.v=0,b.ta=0,b.B=0,b.sa=0,b.S=b.xa=2,b.eb=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(zk[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.J=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=sk(a.dictionary):
wl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.K=tk(a.K,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(hl(l.head),l.v=0,l.ta=0,l.sa=0),c=new O.jb(l.la),O.ob(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.gb;e=a.input;a.ma=g;a.gb=0;a.input=f;for(ml(l);l.B>=3;){f=l.v;g=l.B-2;do l.P=(l.P<<l.La^l.window[f+3-1])&l.Ka,l.Ga[f&l.Wa]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.B=2;ml(l)}l.v+=l.B;l.ta=l.v;l.sa=l.B;l.B=0;l.S=l.xa=2;l.eb=0;a.gb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(zk[b]);this.Yg=!0}}
xl.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=sk(a):wl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.ma=c.input.length;do{c.R===0&&(c.output=new O.jb(d),c.xb=0,c.R=d);a=ul(c,e);if(a!==1&&a!==0)return yl(this,a),this.ended=!0,!1;if(c.R===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.Mc(c.output,c.xb);b=f;f=f.length;if(f<65537&&(b.subarray&&rk||!b.subarray))b=
String.fromCharCode.apply(null,O.Mc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Mc(c.output,c.xb),this.chunks.push(b)}while((c.ma>0||c.R===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=gl(c,-2):(c.state=null,a=d===113?gl(c,-3):0)):a=-2,yl(this,a),this.ended=!0,a===0;e===2&&(yl(this,0),c.R=0);return!0};
function yl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.Zc(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function zl(a,b){b=b||{};b.gzip=!0;b=new xl(b);b.push(a,!0);if(b.err)throw b.msg||zk[b.err];return b.result}
;function Al(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=gb(a):b=null;return b}
;function Bl(a){return gb(a===null?"null":a===void 0?"undefined":a)}
;function Cl(a){this.name=a}
;var Dl=new Cl("rawColdConfigGroup");var El=new Cl("rawHotConfigGroup");function Fl(a){this.G=I(a)}
z(Fl,K);function Gl(a){this.G=I(a)}
z(Gl,K);Gl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new pd(a,md):nd||(nd=new pd(null,md));else if(a.constructor!==pd)if(ld(a))a=a.length?new pd(new Uint8Array(a),md):nd||(nd=new pd(null,md));else throw Error();return of(this,1,a)};var Hl=new Cl("continuationCommand");var Il=new Cl("webCommandMetadata");var Jl=new Cl("signalServiceEndpoint");var Kl={Df:"EMBEDDED_PLAYER_MODE_UNKNOWN",Af:"EMBEDDED_PLAYER_MODE_DEFAULT",Cf:"EMBEDDED_PLAYER_MODE_PFP",Bf:"EMBEDDED_PLAYER_MODE_PFL"};var Ll=new Cl("feedbackEndpoint");var Vd={Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Hf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Gf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",If:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT"};var Ml=new Cl("shareEndpoint"),Nl=new Cl("shareEntityEndpoint"),Ol=new Cl("shareEntityServiceEndpoint"),Pl=new Cl("webPlayerShareEntityServiceEndpoint");var Ql=new Cl("playlistEditEndpoint");var Rl=new Cl("modifyChannelNotificationPreferenceEndpoint");var Sl=new Cl("unsubscribeEndpoint");var Tl=new Cl("subscribeEndpoint");function Ul(){var a=Vl;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Wl(a){D("yt.ads.biscotti.lastId_",a)}
;function Xl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Yl=C.window,Zl,$l,am=(Yl==null?void 0:(Zl=Yl.yt)==null?void 0:Zl.config_)||(Yl==null?void 0:($l=Yl.ytcfg)==null?void 0:$l.data_)||{};D("yt.config_",am);function bm(){Xl(am,arguments)}
function S(a,b){return a in am?am[a]:b}
function cm(a){var b=am.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var dm=[];function em(a){dm.forEach(function(b){return b(a)})}
function fm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){gm(b)}}:a}
function gm(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),bm("ERRORS",b));em(a)}
function hm(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),bm("ERRORS",f))}
;var im=/^[\w.]*$/,jm={q:!0,search_query:!0};function km(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=lm(f[0]||""),h=lm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Pb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(km);l.args=[{key:m,value:f[1],query:a,method:mm===n?"unchanged":n}];jm.hasOwnProperty(m)||hm(l)}}return c}
var mm=String(km);function nm(a){var b=[];Cg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Jb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function om(a){a.charAt(0)==="?"&&(a=a.substring(1));return km(a,"&")}
function pm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),om(a.length>1?a[1]:a[0])):{}}
function qm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=om(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return dc(a,e)+d}
function rm(a){if(!b)var b=window.location.href;var c=Yb(1,a),d=Zb(a);c&&d?(a=a.match(Wb),b=b.match(Wb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Zb(b)===d&&(Number(Yb(4,b))||null)===(Number(Yb(4,a))||null):!0;return a}
function lm(a){return a&&a.match(im)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function sm(a){var b=tm;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Hj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?zj:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=zj.screen)==null?void 0:k.height;var l;e.u_w=(l=zj.screen)==null?void 0:l.width;var m;e.u_ah=(m=zj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=zj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=zj.screen)==null?void 0:r.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Ma){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Ma){}try{var H=h.innerWidth;var J=h.innerHeight}catch(Ma){}try{var N=h.screenLeft;var P=h.screenTop}catch(Ma){}try{H=h.innerWidth,J=h.innerHeight}catch(Ma){}try{var va=h.screen.availWidth;var vb=h.screen.availTop}catch(Ma){}t=[N,P,t,v,va,vb,x,y,H,J];try{var ea=(b.h.top||window).document,Z=ea.compatMode==
"CSS1Compat"?ea.documentElement:ea.body;var oa=(new Bg(Z.clientWidth,Z.clientHeight)).round()}catch(Ma){oa=new Bg(-12245933,-12245933)}ea=oa;oa={};var Na=Na===void 0?C:Na;Z=new Nj;"SVGElement"in Na&&"createElementNS"in Na.document&&Z.set(0);v=Ej();v["allow-top-navigation-by-user-activation"]&&Z.set(1);v["allow-popups-to-escape-sandbox"]&&Z.set(2);Na.crypto&&Na.crypto.subtle&&Z.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&Z.set(4);Na=Oj(Z);oa.bc=Na;oa.bih=ea.height;oa.biw=ea.width;oa.brdim=t.join();
b=b.i;b=(oa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,oa.wgl=!!zj.WebGLRenderingContext,oa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var tm=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return nm(sm(a))});Xa();navigator.userAgent.indexOf(" (CrKey ");var um="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function wm(){if(!um)return null;var a=um();return"open"in a?a:null}
function xm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ym(a,b){typeof a==="function"&&(a=fm(a));return window.setTimeout(a,b)}
;var zm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(zm),["client_dev_set_cookie"]);function T(a){a=Am(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Bm(a,b){a=Am(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Am(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Cm(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Dm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Em="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(zm)),Fm=!1;function Gm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&fm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=wm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Hm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Im(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){hm(n)}}l.send(d);return l}
function Im(a,b){b=b===void 0?{}:b;var c=rm(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in Dm){var g=S(Dm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(Zb(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=Zb(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Xb(Yb(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Zb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Zb(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Zb(a)||(b["X-YouTube-Ad-Signals"]=nm(sm()));return b}
function Jm(a,b){b.method="POST";b.postParams||(b.postParams={});return Km(a,b)}
function Km(a,b){var c=b.format||"JSON";a=Lm(a,b);var d=Mm(a,b),e=!1,f=Nm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=xm(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Om(a,c,k,b.convertToSafeHtml);l&&(l=Pm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=ym(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Lm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=qm(a,b||{},!0);return a}
function Mm(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Zb(a)&&!b.withCredentials&&Zb(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=om(e),Mg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):cc(e));f=e||f&&!Fg(f);!Fm&&f&&b.method!=="POST"&&(Fm=!0,gm(Error("AJAX request with postData should use POST")));return e}
function Om(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,hm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Qm(a):null)e={},Jb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Rm(g)})}d&&Sm(e);
return e}
function Sm(a){if(Pa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=eb();d=new yb(e?e.createHTML(d):d);a[c]=d}else Sm(a[b])}}
function Pm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Qm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Rm(a){var b="";Jb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Hm(a){var b=window.location.search,c=Zb(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&rm(a)&&(c=document.location.hostname);var d=Xb(Yb(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=om(b),f={};Jb(Em,function(g){e[g]&&(f[g]=e[g])});
return qm(a,f||{},!1)}
var Nm=Gm;var Tm=[{Dc:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Dc:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Dc:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Vm={Ua:[],Qa:[{callback:Um,weight:500}]};function Um(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Wm(){this.Qa=[];this.Ua=[]}
var Xm;function Ym(){if(!Xm){var a=Xm=new Wm;a.Ua.length=0;a.Qa.length=0;Vm.Ua&&a.Ua.push.apply(a.Ua,Vm.Ua);Vm.Qa&&a.Qa.push.apply(a.Qa,Vm.Qa)}return Xm}
;var Zm=new M;function $m(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=an(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=an(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=an(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function an(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function bn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=cn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=$m(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?cn(f+".ve",g,h,k):0;d+=f;d+=cn(e,a[e],b,c);if(d>500)break}}else c[b]=dn(a),d+=c[b].length;else c[b]=dn(a),d+=c[b].length;return d}
function cn(a,b,c,d){c+="."+a;a=dn(b);d[c]=a;return c.length+a.length}
function dn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function en(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function fn(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function gn(){this.bf=!0}
function hn(){gn.h||(gn.h=new gn);return gn.h}
function jn(a,b){a={};var c=[],d=T("enable_first_party_auth_v2");"USER_SESSION_ID"in am&&d&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=sg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in am||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in am&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return a}
;var kn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ln(a,b,c,d,e){og.set(""+a,b,{Mb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function mn(a){return og.get(""+a,void 0)}
function nn(a,b,c){og.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function on(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!og.isEnabled())return!1;if(og.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?og.set("TESTCOOKIESENABLED","1",{Mb:60,Ke:"none",secure:!0}):og.set("TESTCOOKIESENABLED","1",{Mb:60});if(og.get("TESTCOOKIESENABLED")!=="1")return!1;og.remove("TESTCOOKIESENABLED");return!0}
;var pn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",pn);function qn(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=mn(this.h);a&&this.parse(a)}
var rn;function sn(){rn||(rn=new qn);return rn}
p=qn.prototype;p.get=function(a,b){tn(a);un(a);a=pn[a]!==void 0?pn[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){tn(a);un(a);if(b==null)throw Error("ExpectedNotNull");pn[a]=b.toString()};
function vn(a){return!!((wn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){tn(a);un(a);delete pn[a]};
p.clear=function(){for(var a in pn)delete pn[a]};
function un(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function tn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function wn(a){a=pn[a]!==void 0?pn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(pn[d]=c.toString())}};var xn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},yn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function zn(){var a=C.navigator;return a?a.connection:void 0}
function An(){var a=zn();if(a){var b=xn[a.type||"unknown"]||"CONN_UNKNOWN";a=xn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Bn(){var a=zn();if(a!=null&&a.effectiveType)return yn.hasOwnProperty(a.effectiveType)?yn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
z(U,Error);function Cn(){try{return Dn(),!0}catch(a){return!1}}
function Dn(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function En(){}
function Fn(a,b){return Mj.Za(a,0,b)}
En.prototype.pa=function(a,b){return this.Za(a,1,b)};
En.prototype.Db=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Gn=Bm("web_emulated_idle_callback_delay",300),Hn=1E3/60-3,In=[8,5,4,3,2,1,0];
function Jn(a){a=a===void 0?{}:a;L.call(this);this.i=[];this.j={};this.W=this.h=0;this.V=this.u=!1;this.I=[];this.T=this.fa=!1;for(var b=w(In),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.sc=a.timeout||1;this.H=Hn;this.A=0;this.oa=this.ze.bind(this);this.qc=this.ef.bind(this);this.Ia=this.Jd.bind(this);this.Ya=this.ee.bind(this);this.lb=this.De.bind(this);this.ya=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ha=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.oa)}
z(Jn,L);p=Jn.prototype;p.Db=function(a){var b=Xa();Kn(this,a);a=Xa()-b;this.u||(this.H-=a)};
p.Za=function(a,b,c){++this.W;if(b===10)return this.Db(a),this.W;var d=this.W;this.j[d]=a;this.u&&!c?this.I.push({id:d,priority:b}):(this.i[b].push(d),this.V||this.u||(this.h!==0&&Ln(this)!==this.A&&this.stop(),this.start()));return d};
p.qa=function(a){delete this.j[a]};
function Mn(a){a.I.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Nn(a){return!a.isHidden()&&a.ha}
function Ln(a){if(a.i[8].length){if(a.T)return 4;if(Nn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Nn(a)?3:2:1;return 0}
p.Fa=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Kn(a,b){try{b()}catch(c){a.Fa(c)}}
function On(a){for(var b=w(In),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.ee=function(a){var b=void 0;a&&(b=a.timeRemaining());this.fa=!0;Pn(this,b);this.fa=!1};
p.ef=function(){Pn(this)};
p.Jd=function(){Qn(this)};
p.De=function(a){this.T=!0;var b=Ln(this);b===4&&b!==this.A&&(this.stop(),this.start());Pn(this,void 0,a);this.T=!1};
p.ze=function(){this.isHidden()||Qn(this);this.h&&(this.stop(),this.start())};
function Qn(a){a.stop();a.u=!0;for(var b=Xa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Kn(a,e)}Rn(a);a.u=!1;On(a)&&a.start();b=Xa()-b;a.H-=b}
function Rn(a){for(var b=0,c=a.I.length;b<c;b++){var d=a.I[b];a.i[d.priority].push(d.id)}a.I.length=0}
function Pn(a,b,c){a.T&&a.A===4&&a.h||a.stop();a.u=!0;b=Xa()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Fa(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Kn(a,f);d=a.fa?0:1;d=a.o>d?a.o:d;if(!(Xa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Kn(a,c)}while(c&&Xa()<b)}a.u=!1;Rn(a);a.H=Hn;On(a)&&a.start()}
p.start=function(){this.V=!1;if(this.h===0)switch(this.A=Ln(this),this.A){case 1:var a=this.Ya;this.h=this.ya?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Gn);break;case 2:this.h=window.setTimeout(this.qc,this.sc);break;case 3:this.h=window.requestAnimationFrame(this.lb);break;case 4:this.h=window.setTimeout(this.Ia,0)}};
p.pause=function(){this.stop();this.V=!0};
p.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.ya?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.aa=function(){Mn(this);this.stop();this.ha&&document.removeEventListener("visibilitychange",this.oa);L.prototype.aa.call(this)};var Sn=E("yt.scheduler.instance.timerIdMap_")||{},Tn=Bm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Un=0,Vn=0;function Wn(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.da)a=new Jn(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Xn(){Yn();var a=E("ytglobal.schedulerInstanceInstance_");a&&(tg(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Yn(){Mn(Wn());for(var a in Sn)Sn.hasOwnProperty(a)&&delete Sn[Number(a)]}
function Zn(a,b,c){if(!c)return c=c===void 0,-Wn().Za(a,b,c);var d=window.setTimeout(function(){var e=Wn().Za(a,b);Sn[d]=e},c);
return d}
function $n(a){Wn().Db(a)}
function ao(a){var b=Wn();if(a<0)b.qa(-a);else{var c=Sn[a];c?(b.qa(c),delete Sn[a]):window.clearTimeout(a)}}
function bo(){co()}
function co(){window.clearTimeout(Un);Wn().start()}
function eo(){Wn().pause();window.clearTimeout(Un);Un=window.setTimeout(bo,Tn)}
function fo(){window.clearTimeout(Vn);Vn=window.setTimeout(function(){go(0)},Tn)}
function go(a){fo();var b=Wn();b.o=a;b.start()}
function ho(a){fo();var b=Wn();b.o>a&&(b.o=a,b.start())}
function io(){window.clearTimeout(Vn);var a=Wn();a.o=0;a.start()}
;function jo(){En.apply(this,arguments)}
z(jo,En);function ko(){jo.h||(jo.h=new jo);return jo.h}
jo.prototype.Za=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):ym(a,c||0)};
jo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
jo.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
jo.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Mj=ko();
T("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Xn),D("yt.scheduler.instance.addJob",Zn),D("yt.scheduler.instance.addImmediateJob",$n),D("yt.scheduler.instance.cancelJob",ao),D("yt.scheduler.instance.cancelAllJobs",Yn),D("yt.scheduler.instance.start",co),D("yt.scheduler.instance.pause",eo),D("yt.scheduler.instance.setPriorityThreshold",go),D("yt.scheduler.instance.enablePriorityThreshold",ho),D("yt.scheduler.instance.clearPriorityThreshold",io),D("yt.scheduler.initialized",
!0));function lo(a){var b=new mk;this.h=(a=b.isAvailable()?a?new nk(b,a):b:null)?new hk(a):null;this.i=document.domain||window.location.hostname}
lo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Ri).serialize(b))}catch(f){return}else e=escape(b);ln(a,e,c,this.i)};
lo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=mn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
lo.prototype.remove=function(a){this.h&&this.h.remove(a);nn(a,"/",this.i)};var mo=function(){var a;return function(){a||(a=new lo("ytidb"));return a}}();
function no(){var a;return(a=mo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var oo=[],po,qo=!1;function ro(){var a={};for(po=new so(a.handleError===void 0?to:a.handleError,a.logEvent===void 0?uo:a.logEvent);oo.length>0;)switch(a=oo.shift(),a.type){case "ERROR":po.Fa(a.payload);break;case "EVENT":po.logEvent(a.eventType,a.payload)}}
function vo(a){qo||(po?po.Fa(a):(oo.push({type:"ERROR",payload:a}),oo.length>10&&oo.shift()))}
function wo(a,b){qo||(po?po.logEvent(a,b):(oo.push({type:"EVENT",eventType:a,payload:b}),oo.length>10&&oo.shift()))}
;function xo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function yo(a){return a.substr(0,a.indexOf(":"))||a}
;var zo=Xc||Yc;function Ao(a){var b=Hc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Bo={},Co=(Bo.AUTH_INVALID="No user identifier specified.",Bo.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bo.MISSING_INDEX="Index not created.",Bo.MISSING_OBJECT_STORES="Object stores not created.",Bo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Bo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Bo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Bo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Bo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bo),Do={},Eo=(Do.AUTH_INVALID="ERROR",Do.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Do.EXPLICIT_ABORT="IGNORED",Do.IDB_NOT_SUPPORTED="ERROR",Do.MISSING_INDEX=
"WARNING",Do.MISSING_OBJECT_STORES="ERROR",Do.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Do.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Do.QUOTA_EXCEEDED="WARNING",Do.QUOTA_MAYBE_EXCEEDED="WARNING",Do.UNKNOWN_ABORT="WARNING",Do.INCOMPATIBLE_DB_VERSION="WARNING",Do),Fo={},Go=(Fo.AUTH_INVALID=!1,Fo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Fo.EXPLICIT_ABORT=!1,Fo.IDB_NOT_SUPPORTED=!1,Fo.MISSING_INDEX=!1,Fo.MISSING_OBJECT_STORES=!1,Fo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Fo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Fo.QUOTA_EXCEEDED=!1,Fo.QUOTA_MAYBE_EXCEEDED=!0,Fo.UNKNOWN_ABORT=!0,Fo.INCOMPATIBLE_DB_VERSION=!1,Fo);function Ho(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Co[a]:c;d=d===void 0?Eo[a]:d;e=e===void 0?Go[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Ho.prototype)}
z(Ho,U);function Io(a,b){Ho.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Co.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Io.prototype)}
z(Io,Ho);function Jo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Jo.prototype)}
z(Jo,Error);var Ko=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Lo(a,b,c,d){b=yo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Ho)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Ho("QUOTA_EXCEEDED",a);if(Zc&&e.name==="UnknownError")return new Ho("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Jo)return new Ho("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Ko.some(function(f){return e.message.includes(f)}))return new Ho("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Ho("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",md:e.name})];e.level="WARNING";return e}
function Mo(a,b,c){var d=no();return new Ho("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function No(a){if(!a)throw Error();throw a;}
function Oo(a){return a}
function Po(a){this.h=a}
function Qo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Qo.all=function(a){return new Qo(new Po(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={sb:0};f.sb<a.length;f={sb:f.sb},++f.sb)Qo.resolve(a[f.sb]).then(function(g){return function(h){d[g.sb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Qo.resolve=function(a){return new Qo(new Po(function(b,c){a instanceof Qo?a.then(b,c):b(a)}))};
Qo.reject=function(a){return new Qo(new Po(function(b,c){c(a)}))};
Qo.prototype.then=function(a,b){var c=this,d=a!=null?a:Oo,e=b!=null?b:No;return new Qo(new Po(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Ro(c,c,d,f,g)}),c.i.push(function(){So(c,c,e,f,g)})):c.state.status==="FULFILLED"?Ro(c,c,d,f,g):c.state.status==="REJECTED"&&So(c,c,e,f,g)}))};
Qo.prototype.catch=function(a){return this.then(void 0,a)};
function Ro(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Qo?To(a,b,f,d,e):d(f)}catch(g){e(g)}}
function So(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Qo?To(a,b,f,d,e):d(f)}catch(g){e(g)}}
function To(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Qo?To(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Uo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vo(a){return new Promise(function(b,c){Uo(a,b,c)})}
function Wo(a){return new Qo(new Po(function(b,c){Uo(a,b,c)}))}
;function Xo(a,b){return new Qo(new Po(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Yo=window,V=Yo.ytcsi&&Yo.ytcsi.now?Yo.ytcsi.now:Yo.performance&&Yo.performance.timing&&Yo.performance.now&&Yo.performance.timing.navigationStart?function(){return Yo.performance.timing.navigationStart+Yo.performance.now()}:function(){return(new Date).getTime()};function Zo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
p=Zo.prototype;p.add=function(a,b,c){return $o(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return $o(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return $o(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function ap(a,b,c){a=a.h.createObjectStore(b,c);return new bp(a)}
p.delete=function(a,b){return $o(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return $o(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function cp(a,b,c){return $o(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Wo(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function $o(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,v,x;return A(function(y){switch(y.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){y.F(4);break}g++;k=Math.round(V());za(y,5);l=a.h.transaction(b,e.mode);H=y.yield;var J=new dp(l);J=ep(J,d);return H.call(y,J,7);case 7:return m=y.i,n=Math.round(V()),fp(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:r=Aa(y);t=Math.round(V());v=Lo(r,
a.h.name,b.join(),a.h.version);if((x=v instanceof Ho&&!v.h)||g>=f)fp(a,k,t,g,v,b.join(),e),h=v;y.F(2);break;case 4:return y.return(Promise.reject(h))}})}
function fp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Ho&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&wo("QUOTA_EXCEEDED",{dbName:yo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Ho&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),wo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),gp(a,!1,d,f,b,g.tag),vo(e)):gp(a,!0,d,f,b,g.tag)}
function gp(a,b,c,d,e,f){wo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function bp(a){this.h=a}
p=bp.prototype;p.add=function(a,b){return Wo(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return Wo(this.h.clear()).then(function(){})};
function hp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return Wo(this.h.count(a))};
function ip(a,b){return jp(a,{query:b},function(c){return c.delete().then(function(){return kp(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?ip(this,a):Wo(this.h.delete(a))};
p.get=function(a){return Wo(this.h.get(a))};
p.index=function(a){try{return new lp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Jo(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function jp(a,b,c){a=a.h.openCursor(b.query,b.direction);return mp(a).then(function(d){return Xo(d,c)})}
function dp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Ho;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ep(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
dp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Ho("EXPLICIT_ABORT");};
dp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new bp(a),this.i.set(a,b));return b};
function lp(a){this.h=a}
p=lp.prototype;p.count=function(a){return Wo(this.h.count(a))};
p.delete=function(a){return np(this,{query:a},function(b){return b.delete().then(function(){return kp(b)})})};
p.get=function(a){return Wo(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function np(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return mp(a).then(function(d){return Xo(d,c)})}
function op(a,b){this.request=a;this.cursor=b}
function mp(a){return Wo(a).then(function(b){return b?new op(a,b):null})}
function kp(a){a.cursor.continue(void 0);return mp(a.request)}
op.prototype.delete=function(){return Wo(this.cursor.delete()).then(function(){})};
op.prototype.getValue=function(){return this.cursor.value};
op.prototype.update=function(a){return Wo(this.cursor.update(a))};function pp(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Zo(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ld,k=c.blocking,l=c.cf,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&wo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:yo(a)});var v=f(),x=new dp(g.transaction);
m&&m(v,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){wo("IDB_UNEXPECTEDLY_CLOSED",{dbName:yo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function qp(a,b,c){c=c===void 0?{}:c;return pp(a,b,c)}
function rp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ld)&&c.addEventListener("blocked",function(){e()}),g.yield(Vo(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=Aa(g),Lo(f,a,"",-1);})}
;function sp(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
sp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return qp(a,b,c)};
sp.prototype.delete=function(a){a=a===void 0?{}:a;return rp(this.name,a)};
function tp(a,b){return new Ho("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function up(a,b){if(!b)throw Mo("openWithToken",yo(a.name));return a.open()}
sp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,v;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,H=c.options,J=[],N=w(Object.keys(H.yb)),P=N.next();!P.done;P=N.next()){P=P.value;var va=H.yb[P],vb=va.Fe===void 0?Number.MAX_VALUE:va.Fe;!(y.h.version>=va.Eb)||y.h.version>=vb||y.h.objectStoreNames.contains(P)||J.push(P)}k=J;if(k.length===0){x.F(5);break}l=Object.keys(c.options.yb);
m=h.objectStoreNames();if(c.D<Bm("ytidb_reopen_db_retries",0))return c.D++,h.close(),vo(new Ho("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<Bm("ytidb_remake_db_retries",1))){x.F(6);break}c.o++;return x.yield(c.delete(),7);case 7:return vo(new Ho("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Io(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.F(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=x.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,tp(c,t);return x.return(r);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Lo(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw tp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,cf:b,upgrade:this.options.upgrade};return this.h=d=a()};var vp=new sp("YtIdbMeta",{yb:{databases:{Eb:1}},upgrade:function(a,b){b(1)&&ap(a,"databases",{keyPath:"actualName"})}});
function wp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(up(vp,b),2);c=d.i;return d.return($o(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Wo(f.h.put(a,void 0)).then(function(){})})}))})}
function xp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(up(vp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function yp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(up(vp,b),2)):e.h!=3?(d=e.i,e.yield($o(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return jp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return kp(g)})}),3)):e.return(c)})}
function zp(a){return yp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Ap(a,b,c){return yp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Bp(a){var b,c;return A(function(d){if(d.h==1)return b=Dn("YtIdbMeta hasAnyMeta other"),d.yield(yp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Cp,Dp=new function(){}(new function(){});
function Ep(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=no();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=zo)f=/WebKit\/([0-9]+)/.exec(Hc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Hc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Tc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(wp(d,Dp),4);case 4:return e.yield(xp("yt-idb-test-do-not-use",Dp),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Fp(){if(Cp!==void 0)return Cp;qo=!0;return Cp=Ep().then(function(a){qo=!1;var b;if((b=mo())!=null&&b.h){var c;b={hasSucceededOnce:((c=no())==null?void 0:c.hasSucceededOnce)||a};var d;(d=mo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Gp(){return E("ytglobal.idbToken_")||void 0}
function Hp(){var a=Gp();return a?Promise.resolve(a):Fp().then(function(b){(b=b?Dp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Ip=0;function Jp(a,b){Ip||(Ip=Mj.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Hp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Ap(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(rp(f.actualName),7);case 7:return h.yield(xp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=Aa(h),vo(g),d=!1;case 4:Mj.qa(Ip),Ip=0,d&&Jp(a,b),h.h=0}})}))}
function Kp(){var a;return A(function(b){return b.h==1?b.yield(Hp(),2):(a=b.i)?b.return(Bp(a)):b.return(!1)})}
new xj;function Lp(a){if(!Cn())throw a=new Ho("AUTH_INVALID",{dbName:a}),vo(a),a;var b=Dn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Mp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Hp(),2);case 2:g=m.i;if(!g)throw h=Mo("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),vo(h),h;xo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Lp(a);za(m,3);return m.yield(wp(k,g),5);case 5:return m.yield(qp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),za(m,7),m.yield(xp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:Aa(m);case 8:throw l;}})}
function Np(a,b,c){c=c===void 0?{}:c;return Mp(a,b,!1,c)}
function Op(a,b,c){c=c===void 0?{}:c;return Mp(a,b,!0,c)}
function Pp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Hp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();xo(a);d=Lp(a);return e.yield(rp(d.actualName,b),3)}return e.yield(xp(d.actualName,c),0)})}
function Qp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(rp(d.actualName,b),2):e.yield(xp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Rp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Hp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();xo("LogsDatabaseV2");return d.yield(zp(b),3)}c=d.i;return d.yield(Qp(c,a,b),0)})}
function Sp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Hp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();xo(a);return d.yield(rp(a,b),3)}return d.yield(xp(a,c),0)})}
;function Tp(a,b){sp.call(this,a,b);this.options=b;xo(a)}
z(Tp,sp);function Up(a,b){var c;return function(){c||(c=new Tp(a,b));return c}}
Tp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Op:Np)(a,b,Object.assign({},c))};
Tp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Sp:Pp)(this.name,a)};
function Vp(a,b){return Up(a,b)}
;var Wp={},Xp=Vp("ytGcfConfig",{yb:(Wp.coldConfigStore={Eb:1},Wp.hotConfigStore={Eb:1},Wp),shared:!1,upgrade:function(a,b){b(1)&&(hp(ap(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),hp(ap(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Yp(a){return up(Xp(),a)}
function Zp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Yp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(cp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function $p(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Yp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(cp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function aq(a){var b,c;return A(function(d){return d.h==1?d.yield(Yp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield($o(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return np(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function bq(a){var b,c;return A(function(d){return d.h==1?d.yield(Yp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield($o(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return np(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function cq(){L.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
z(cq,L);cq.prototype.aa=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;L.prototype.aa.call(this)};function dq(){this.h=0;this.i=new cq}
function eq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function fq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Gp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(bq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Zp(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function gq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Gp())?c?h.F(4):h.yield(aq(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield($p(c,b,g,d),0)})}
function hq(){if(!dq.h){var a=new dq;dq.h=a}a=dq.h;var b=V()-a.h;if(!(a.h!==0&&b<Bm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
dq.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function iq(){return"INNERTUBE_API_KEY"in am&&"INNERTUBE_API_VERSION"in am}
function jq(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),ge:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ed:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ih:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),je:S("INNERTUBE_CONTEXT_HL"),he:S("INNERTUBE_CONTEXT_GL"),ke:S("INNERTUBE_HOST_OVERRIDE")||"",ne:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),le:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function kq(a){var b={client:{hl:a.je,gl:a.he,clientName:a.ed,clientVersion:a.innertubeContextClientVersion,configInfo:a.ge}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Cm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.ed;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=fn()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=An())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=Bn())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=hq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(om(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?d.deviceMake=h:g==="cmodel"?d.deviceModel=h:g==="cbr"?d.browserName=h:g==="cbrver"?d.browserVersion=h:g==="cos"?d.osName=h:g==="cosver"?d.osVersion=h:g==="cplatform"&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function lq(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Zg:(a=jn(hn()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var mq=typeof TextEncoder!=="undefined"?new TextEncoder:null,nq=mq?function(a){return mq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function oq(a,b){this.version=a;this.args=b}
oq.prototype.serialize=function(){return{version:this.version,args:this.args}};function pq(a,b){this.topic=a;this.h=b}
pq.prototype.toString=function(){return this.topic};var qq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Sb;M.prototype.publish=M.prototype.kb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",qq);var rq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",rq);var sq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",sq);var tq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",tq);
D("ytPubsub2Pubsub2SkipSubKey",null);function uq(a,b){var c=vq();c&&c.publish.call(c,a.toString(),a,b)}
function wq(a){var b=xq,c=vq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(rq[d])try{if(f&&b instanceof pq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Bd){var l=new h;h.Bd=l.version}var m=h.Bd}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=r[k];var x=v}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){gm(y)}},tq[b.toString()]?E("yt.scheduler.instance")?Mj.pa(g):ym(g,0):g())});
rq[d]=!0;sq[b.toString()]||(sq[b.toString()]=[]);sq[b.toString()].push(d);return d}
function yq(){var a=zq,b=wq(function(c){a.apply(void 0,arguments);Aq(b)});
return b}
function Aq(a){var b=vq();b&&(typeof a==="number"&&(a=[a]),Jb(a,function(c){b.unsubscribeByKey(c);delete rq[c]}))}
function vq(){return E("ytPubsub2Pubsub2Instance")}
;function Bq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&uq("meta_logging_csi_event",{timerName:a,zh:b})}
;var Cq=void 0,Dq=void 0;function Eq(){Dq||(Dq=Al(S("WORKER_SERIALIZATION_URL")));return Dq||void 0}
function Fq(){var a=Eq();Cq||a===void 0||(Cq=new Worker(hb(a),void 0));return Cq}
;var Gq=Bm("max_body_size_to_compress",5E5),Hq=Bm("min_body_size_to_compress",500),Iq=!0,Jq=0,Kq=0,Lq=Bm("compression_performance_threshold_lr",250),Mq=Bm("slow_compressions_before_abandon_count",4),Nq=!1,Oq=new Map,Pq=1,Qq=!0;function Rq(){if(typeof Worker==="function"&&Eq()&&!Nq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Oq.get(c.key);d&&(Sq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Oq.delete(c.key))}},b=Fq();
b&&(b.addEventListener("message",a),b.onerror=function(){Oq.clear()},Nq=!0)}}
function Tq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Iq)try{var g=Uq(b);if(g!=null&&(g>Gq||g<Hq))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Qq||!T("initial_gzip_use_main_thread"))){Nq||Rq();var h=Fq();if(h&&!e){Oq.set(Pq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Pq});Pq++;return}}var k=zl(nq(b));Sq(k,f,a,c,d)}}catch(l){hm(l),d(a,c)}else d(a,c)}
function Sq(a,b,c,d,e){Qq=!1;var f=V();b.ticks.gelc=f;Kq++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Lq&&(Jq++,T("abandon_compression_after_N_slow_zips")?Kq===Bm("compression_disable_point")&&Jq>Mq&&(Iq=!1):Iq=!1);Vq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Wq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Iq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Uq(g);if(h!=null&&(h>Gq||h<Hq))return a;c=b?{level:1}:void 0;f=zl(nq(g),c);var k=V();e.ticks.gelc=k;if(b){Kq++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Lq)if(Jq++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Jq/Kq;var l=Mq/Bm("compression_disable_point");Kq>0&&Kq%Bm("compression_disable_point")===0&&b>=l&&(Iq=!1)}else Iq=!1;Vq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return hm(m),a}}else return a}
function Uq(a){try{return(new Blob(a.split(""))).size}catch(b){return hm(b),null}}
function Vq(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Bq("gel_compression",a,{sampleRate:.1})}
;function Xq(a){a=Object.assign({},a);delete a.Authorization;var b=sg();if(b){var c=new Qj;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=bd(c.digest(),3)}return a}
;var Yq;function Zq(){Yq||(Yq=new lo("yt.innertube"));return Yq}
function $q(a,b,c,d){if(d)return null;d=Zq().get("nextId",!0)||1;var e=Zq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Xq(c),requestTime:Math.round(V())};Zq().set("nextId",d+1,86400,!0);Zq().set("requests",e,86400,!0);return d}
function ar(a){var b=Zq().get("requests",!0)||{};delete b[a];Zq().set("requests",b,86400,!0)}
function br(a){var b=Zq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=Xq(lq(!1));Ig(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),cr(a,d.method,e,{}));delete b[c]}}Zq().set("requests",b,86400,!0)}}
;function dr(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.qb=function(){};
this.now=Date.now;this.Hb=!1;var b;this.xd=(b=a.xd)!=null?b:100;var c;this.sd=(c=a.sd)!=null?c:1;var d;this.pd=(d=a.pd)!=null?d:2592E6;var e;this.od=(e=a.od)!=null?e:12E4;var f;this.rd=(f=a.rd)!=null?f:5E3;var g;this.X=(g=a.X)!=null?g:void 0;this.ac=!!a.ac;var h;this.Yb=(h=a.Yb)!=null?h:.1;var k;this.jc=(k=a.jc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.qb&&(this.qb=a.qb);a.Hb&&(this.Hb=a.Hb);a.Vb&&(this.Vb=a.Vb);this.Y=a.Y;this.Da=a.Da;this.ga=a.ga;this.ea=a.ea;this.sendFn=a.sendFn;
this.Jc=a.Jc;this.Gc=a.Gc;er(this)&&(!this.Y||this.Y("networkless_logging"))&&fr(this)}
function fr(a){er(a)&&!a.Hb&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.ga.Md(a.X),gr(a),a.ea.va()&&a.Rb(),a.ea.listen(a.Jc,a.Rb.bind(a)),a.ea.listen(a.Gc,a.Tc.bind(a)))}
p=dr.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(er(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.X).then(function(e){d.id=e;c.ea.va()&&hr(c,d)}).catch(function(e){hr(c,d);
ir(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(er(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y&&this.Y("nwl_skip_retry")&&(e.skipRetry=c);if(this.ea.va()||this.Y&&this.Y("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.X).catch(function(l){ir(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.X).catch(function(g){d.sendFn(a,b,e.skipRetry);
ir(d,g)})}else this.sendFn(a,b,this.Y&&this.Y("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(er(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.pb(d.id,c.X):e=!0;c.ea.fb&&c.Y&&c.Y("vss_network_hint")&&c.ea.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.X).then(function(g){d.id=g;e&&c.ga.pb(d.id,c.X)}).catch(function(g){ir(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.Rb=function(){var a=this;if(!er(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.pa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ga.bd("NEW",a.X),2);if(c.h!=3)return b=c.i,b?c.yield(hr(a,b),3):(a.Tc(),c.return());a.i&&(a.i=0,a.Rb());c.h=0})},this.xd))};
p.Tc=function(){this.Da.qa(this.i);this.i=0};
function hr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!er(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.ga.re(b.id,a.X),3);case 3:(c=d.i)||a.qb(Error("The request cannot be found in the database."));case 2:if(jr(a,b,a.pd)){d.F(4);break}a.qb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.ga.pb(b.id,a.X),5);case 5:return d.return();case 4:b.skipRetry||(b=kr(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.ga.pb(b.id,a.X),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function kr(a,b){if(!er(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=lr(f);(h=mr(f))&&a.Y&&a.Y("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Y&&a.Y("nwl_consider_error_code")&&g||a.Y&&!a.Y("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){m.F(2);break}if(!a.ea.nc){m.F(3);break}return m.yield(a.ea.nc(),3);case 3:if(a.ea.va()){m.F(2);break}c(e,f);if(!a.Y||!a.Y("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.ga.Kc(b.id,a.X,!1),6);case 6:return m.return();case 2:if(a.Y&&a.Y("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.sd?m.yield(a.ga.Kc(b.id,a.X,!0,h?!1:void 0),12):m.yield(a.ga.pb(b.id,a.X),8);case 12:a.Da.pa(function(){a.ea.va()&&a.Rb()},a.rd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.ga.pb(b.id,a.X),2);a.ea.fb&&a.Y&&a.Y("vss_network_hint")&&a.ea.fb(!0);d(e,f);h.h=0})};
return b}
function jr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function gr(a){if(!er(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.bd("QUEUED",a.X).then(function(b){b&&!jr(a,b,a.od)?a.Da.pa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.ga.Kc(b.id,a.X),2);gr(a);c.h=0})}):a.ea.va()&&a.Rb()})}
function ir(a,b){a.Ed&&!a.ea.va()?a.Ed(b):a.handleError(b)}
function er(a){return!!a.X||a.Vb}
function lr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function mr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var nr;
function or(){if(nr)return nr();var a={};nr=Vp("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Eb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&ap(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),hp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return nr()}
;function pr(a){return up(or(),a)}
function qr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(pr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(cp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();rr(c);return g.return(f)})}
function sr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(pr(b),2);if(m.h!=3)return d=m.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield($o(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return np(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=V();rr(c);return m.return(l)})}
function tr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(pr(b),2);c=d.i;return d.return($o(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Wo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function ur(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(pr(b),2);e=f.i;return f.return($o(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Wo(h.h.put(k,void 0)).then(function(){return k})):Qo.resolve(void 0)})}))})}
function vr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(pr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function wr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(pr(a),2);b=d.i;c=V()-2592E6;return d.yield($o(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return kp(f)})})}),0)})}
function xr(){A(function(a){return a.yield(Rp(),0)})}
function rr(a){T("nwl_csi_killswitch")||Bq("networkless_performance",a,{sampleRate:1})}
;var yr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505};var zr={},Ar=Vp("ServiceWorkerLogsDatabase",{yb:(zr.SWHealthLog={Eb:1},zr),shared:!0,upgrade:function(a,b){b(1)&&hp(ap(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Br(a){return up(Ar(),a)}
function Cr(a){var b,c;A(function(d){if(d.h==1)return d.yield(Br(a),2);b=d.i;c=V()-2592E6;return d.yield($o(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return kp(f)})})}),0)})}
function Dr(a){var b;return A(function(c){if(c.h==1)return c.yield(Br(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Er={},Fr=0;function Gr(a){var b=new Image,c=""+Fr++;Er[c]=b;b.onload=b.onerror=function(){delete Er[c]};
b.src=a}
;var Hr;function Ir(){Hr||(Hr=new lo("yt.offline"));return Hr}
function Jr(a){if(T("offline_error_handling")){var b=Ir().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Ir().set("errors",b,2592E3,!0)}}
;function Kr(){this.h=new Map;this.i=!1}
function Lr(){if(!Kr.h){var a=E("yt.networkRequestMonitor.instance")||new Kr;D("yt.networkRequestMonitor.instance",a);Kr.h=a}return Kr.h}
Kr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Kr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Kr.prototype.removeParams=function(a){return a.split("?")[0]};
Kr.prototype.removeParams=Kr.prototype.removeParams;Kr.prototype.isEndpointCFR=Kr.prototype.isEndpointCFR;Kr.prototype.requestComplete=Kr.prototype.requestComplete;Kr.getInstance=Lr;function Mr(){di.call(this);var a=this;this.j=!1;this.i=Lj();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Ir().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;gm(d)}Ir().set("errors",{},2592E3,!0)}}})}
z(Mr,di);function Nr(){if(!Mr.h){var a=E("yt.networkStatusManager.instance")||new Mr;D("yt.networkStatusManager.instance",a);Mr.h=a}return Mr.h}
p=Mr.prototype;p.va=function(){return this.i.va()};
p.fb=function(a){this.i.i=a};
p.be=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.Td=function(){this.j=!0};
p.listen=function(a,b){return this.i.listen(a,b)};
p.nc=function(a){a=Jj(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Lr().requestComplete("generate_204",b)});
return a};
Mr.prototype.sendNetworkCheckRequest=Mr.prototype.nc;Mr.prototype.listen=Mr.prototype.listen;Mr.prototype.enableErrorFlushing=Mr.prototype.Td;Mr.prototype.getWindowStatus=Mr.prototype.be;Mr.prototype.networkStatusHint=Mr.prototype.fb;Mr.prototype.isNetworkAvailable=Mr.prototype.va;Mr.getInstance=Nr;function Or(a){a=a===void 0?{}:a;di.call(this);var b=this;this.i=this.u=0;this.j=Nr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Pr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Pr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ei(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ei(b,"publicytnetworkstatus-offline")})))}
z(Or,di);Or.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Or.prototype.fb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Or.prototype.nc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Lr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Pr(a,b){a.rateLimit?a.i?(Mj.qa(a.u),a.u=Mj.pa(function(){a.o!==b&&(ei(a,b),a.o=b,a.i=V())},a.rateLimit-(V()-a.i))):(ei(a,b),a.o=b,a.i=V()):ei(a,b)}
;var Qr;function Rr(){var a=dr.call;Qr||(Qr=new Or({nh:!0,gh:!0}));a.call(dr,this,{ga:{Md:wr,pb:vr,bd:sr,re:tr,Kc:ur,set:qr},ea:Qr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;hm(new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else gm(b)},
qb:hm,sendFn:Sr,now:V,Ed:Jr,Da:ko(),Jc:"publicytnetworkstatus-online",Gc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,jc:Bm("potential_esf_error_limit",10),Y:T,Hb:!(Cn()&&Xr())});this.j=new xj;T("networkless_immediately_drop_all_requests")&&xr();Sp("LogsDatabaseV2")}
z(Rr,dr);function Yr(){var a=E("yt.networklessRequestController.instance");a||(a=new Rr,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Hp().then(function(b){a.X=b;fr(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.X&&Cr(a.X);T("networkless_immediately_drop_sw_health_store")&&Zr(a)}));
return a}
Rr.prototype.writeThenSend=function(a,b){b||(b={});b=$r(a,b);Cn()||(this.h=!1);dr.prototype.writeThenSend.call(this,a,b)};
Rr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=$r(a,b);Cn()||(this.h=!1);dr.prototype.sendThenWrite.call(this,a,b,c)};
Rr.prototype.sendAndWrite=function(a,b){b||(b={});b=$r(a,b);Cn()||(this.h=!1);dr.prototype.sendAndWrite.call(this,a,b)};
Rr.prototype.awaitInitialization=function(){return this.j.promise};
function Zr(a){var b;A(function(c){if(!a.X)throw b=Mo("clearSWHealthLogsDb"),b;return c.return(Dr(a.X).catch(function(d){a.handleError(d)}))})}
function Sr(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&as(a,b);if(T("use_request_time_ms_header"))b.headers&&rm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Gm(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Gm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new $a({url:a});if(k.j&&k.i||k.o){var l=Xb(Yb(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(fc),r=ec(a,0,"ri",n);if(r<0)var t=null;else{var v=a.indexOf("&",r);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(r+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(H){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(H){}y=!1}c=y?!0:!1}else c=
!1;c||Gr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Tq(a,b.postBody,b,Km,d)):Tq(a,JSON.stringify(b.postParams),b,Jm,d):Km(a,b)}
function $r(a,b){T("use_event_time_ms_header")&&rm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function as(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Lr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Lr().requestComplete(a,!0);d(e,f)}}
function Xr(){return Zb(document.location.toString())!=="www.youtube-nocookie.com"}
;var bs=!1,cs=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:bs};D("ytNetworklessLoggingInitializationOptions",cs);function ds(){var a;A(function(b){if(b.h==1)return b.yield(Hp(),2);a=b.i;if(!a||!Cn()&&!T("nwl_init_require_datasync_id_killswitch")||!Xr())return b.F(0);bs=!0;cs.isNwlInitialized=bs;return b.yield(Yr().awaitInitialization(),0)})}
;function es(a){var b=this;this.config_=null;a?this.config_=a:iq()&&(this.config_=jq());Fn(function(){br(b)},5E3)}
es.prototype.isReady=function(){!this.config_&&iq()&&(this.config_=jq());return!!this.config_};
function cr(a,b,c,d){function e(v){v=v===void 0?!1:v;var x;if(d.retry&&h!="www.youtube-nocookie.com"&&(v||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(x=$q(b,c,l,k)),x)){var y=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(P,va){ar(x);y(P,va)};
c.onFetchSuccess=function(P,va){ar(x);H(P,va)}}try{if(v&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Yr().writeThenSend(t,g):Yr().sendAndWrite(t,g);
else if(d.compress){var J=!d.networklessOptions.writeThenSend;if(g.postBody){var N=g.postBody;typeof N!=="string"&&(N=JSON.stringify(g.postBody));Tq(t,N,g,Km,J)}else Tq(t,JSON.stringify(g.postParams),g,Jm,J)}else T("web_all_payloads_via_jspb")?Km(t,g):Jm(t,g)}catch(P){if(P.name==="InvalidAccessError")x&&(ar(x),x=0),hm(Error("An extension is blocking network request."));else throw P;}x&&Fn(function(){br(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&hm(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);gm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(v,x){if(d.onSuccess)d.onSuccess(x)},
onFetchSuccess:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,x){if(d.onError)d.onError(x)},
onFetchError:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ke)&&(h=f);var k=a.config_.ne||!1,l=lq(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},r=!(!a.config_.le||!f);r=r&&f.startsWith("Bearer");T("web_yt_net_omit_api_key")&&(r=!0);r||(n.key=a.config_.innertubeApiKey);
var t=qm(""+h+m,n||{},!0);(E("ytNetworklessLoggingInitializationOptions")?cs.isNwlInitialized:bs)?Fp().then(function(v){e(v)}):e(!1)}
;var gs=0,hs=Vc?"webkit":Uc?"moz":Sc?"ms":Rc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++gs});var is={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function js(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in is||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ks(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
js.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
js.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
js.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Eg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Eg);var ls=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",ls);
function ms(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Dg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&Ig(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ns(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ms(a,b,c,d);if(e)return e;e=++ls.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new js(h);if(!Rg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new js(h);
h.currentTarget=a;return c.call(a,h)};
g=fm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ps()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Eg[e]=[a,b,c,g,d];return e}
function qs(a){a&&(typeof a=="string"&&(a=[a]),Jb(a,function(b){if(b in Eg){var c=Eg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ps()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Eg[b]}}))}
var ps=ui(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function rs(a){this.H=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.T=ns(window,"mousemove",Va(this.V,this));a=Va(this.I,this);typeof a==="function"&&(a=fm(a));this.W=window.setInterval(a,25)}
Ya(rs,L);rs.prototype.V=function(a){a.h===void 0&&ks(a);var b=a.h;a.i===void 0&&ks(a);this.h=new Ag(b,a.i)};
rs.prototype.I=function(){if(this.h){var a=V();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
rs.prototype.aa=function(){window.clearInterval(this.W);qs(this.T)};var ss={};
function ts(a){var b=a===void 0?{}:a;a=b.Be===void 0?!1:b.Be;b=b.Ud===void 0?!0:b.Ud;if(E("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&us();ns(document,"keydown",us);ns(document,"keyup",us);ns(document,"mousedown",us);ns(document,"mouseup",us);a?ns(window,"touchmove",function(){vs("touchmove",200)},{passive:!0}):(ns(window,"resize",function(){vs("resize",200)}),b&&ns(window,"scroll",function(){vs("scroll",200)}));
new rs(function(){vs("mouse",100)});
ns(document,"touchstart",us,{passive:!0});ns(document,"touchend",us,{passive:!0})}}
function vs(a,b){ss[a]||(ss[a]=!0,Mj.pa(function(){us();ss[a]=!1},b))}
function us(){E("_lact",window)==null&&ts();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function ws(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var xs=C.ytPubsubPubsubInstance||new M,ys=C.ytPubsubPubsubSubscribedKeys||{},zs=C.ytPubsubPubsubTopicToKeys||{},As=C.ytPubsubPubsubIsSynchronous||{};function Bs(a,b){var c=Cs();if(c&&b){var d=c.subscribe(a,function(){function e(){ys[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{As[a]?e():ym(e,0)}catch(g){gm(g)}},void 0);
ys[d]=!0;zs[a]||(zs[a]=[]);zs[a].push(d);return d}return 0}
function Ds(a){var b=Cs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Jb(a,function(c){b.unsubscribeByKey(c);delete ys[c]}))}
function Es(a,b){var c=Cs();c&&c.publish.apply(c,arguments)}
function Fs(a){var b=Cs();if(b)if(b.clear(a),a)Gs(a);else for(var c in zs)Gs(c)}
function Cs(){return C.ytPubsubPubsubInstance}
function Gs(a){zs[a]&&(a=zs[a],Jb(a,function(b){ys[b]&&delete ys[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Sb;M.prototype.publish=M.prototype.kb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",xs);D("ytPubsubPubsubTopicToKeys",zs);D("ytPubsubPubsubIsSynchronous",As);D("ytPubsubPubsubSubscribedKeys",ys);var Hs=Symbol("injectionDeps");function Is(a){this.name=a}
Is.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Js(a){this.key=a}
function Ks(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ls(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);if(c)try{c.vh(a.resolve(b.lc))}catch(d){c.th(d)}}
Ks.prototype.resolve=function(a){return a instanceof Js?Ms(this,a.key,[],!0):Ms(this,a,[])};
function Ms(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Ad!==void 0)var e=d.Ad;else if(d.kf)e=d[Hs]?Ns(a,d[Hs],c):[],e=d.kf.apply(d,ka(e));else if(d.zd){e=d.zd;var f=e[Hs]?Ns(a,e[Hs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.yh||a.h.set(b,e);return e}
function Ns(a,b,c){return b?b.map(function(d){return d instanceof Js?Ms(a,d.key,c,!0):Ms(a,d,c)}):[]}
;var Os;function Ps(){Os||(Os=new Ks);return Os}
;var Qs=window;function Rs(){var a,b;return"h5vcc"in Qs&&((a=Qs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Qs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Qs&&Qs.performance.mark&&Qs.performance.measure?2:0}
function Ss(a){var b=Rs();switch(b){case 1:Qs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Qs.performance.mark(a+"-start");break;case 0:break;default:Ab(b,"unknown trace type")}}
function Ts(a){var b=Rs();switch(b){case 1:Qs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Qs.performance.mark(c);Qs.performance.measure(a,b,c);break;case 0:break;default:Ab(b,"unknown trace type")}}
;var Us=T("web_enable_lifecycle_monitoring")&&Rs()!==0,Vs=T("web_enable_lifecycle_monitoring");function Ws(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?ko():d;this.j=c;this.scheduler=d;this.i=new xj;this.h=a;for(a={bb:0};a.bb<this.h.length;a={ic:void 0,bb:a.bb},a.bb++)a.ic=this.h[a.bb],c=function(e){return function(){e.ic.yc();b.h[e.bb].kc=!0;b.h.every(function(f){return f.kc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.Za(c,d),this.h[a.bb]=Object.assign({},a.ic,{yc:c,
jobId:d})}
function Xs(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.kc||(a.scheduler.qa(c.jobId),a.scheduler.Za(c.yc,10))}
Ws.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.kc||this.scheduler.qa(b.jobId),b.kc=!0;this.i.resolve()};
Ws.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Ys(a){this.state=a;this.plugins=[];this.o=void 0;this.A={};Us&&Ss(this.state)}
p=Ys.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Us&&Ts(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Xs(this.j),this.j=void 0);Zs(this,a,b);this.state=a;Us&&Ss(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d($s(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function $s(a,b){var c=b.filter(function(e){return at(a,e)===10}),d=b.filter(function(e){return at(a,e)!==10});
return a.A.xh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Ie.apply(a,[c].concat(ka(e))),2);a.ud.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Je.apply(a,[c].concat(ka(e)));a.ud.apply(a,[d].concat(ka(e)))}}
p.Je=function(a){for(var b=B.apply(1,arguments),c=ko(),d=w(a),e=d.next(),f={};!e.done;f={Jb:void 0},e=d.next())f.Jb=e.value,c.Db(function(g){return function(){bt(g.Jb.name);g.Jb.callback.apply(g.Jb,ka(b));ct(g.Jb.name)}}(f))};
p.Ie=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=ko(),d=w(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.ub=e.value;f.Tb=void 0;g=function(k){return function(){bt(k.ub.name);var l=k.ub.callback.apply(k.ub,ka(b));typeof(l==null?void 0:l.then)==="function"?k.Tb=l.then(function(){ct(k.ub.name)}):ct(k.ub.name)}}(f);
c.Db(g);return f.Tb?h.yield(f.Tb,3):h.F(3)}f={ub:void 0,Tb:void 0};e=d.next();return h.F(2)})};
p.ud=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{yc:function(){bt(e.name);e.callback.apply(e,ka(b));ct(e.name)},
priority:at(c,e)}});
d.length&&(this.j=new Ws(d))};
function at(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function bt(a){Us&&a&&Ss(a)}
function ct(a){Us&&a&&Ts(a)}
function Zs(a,b,c){Vs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Ys.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function dt(a){Ys.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var et;z(dt,Ys);dt.prototype.i=function(a,b){var c=this;this.h=Fn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
dt.prototype.D=function(a,b){this.h&&(Mj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function ft(){et||(et=new dt);return et}
;var gt=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return gt});function ht(){this.store={};this.h={}}
ht.prototype.storePayload=function(a,b){a=jt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ht.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=kt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
ht.prototype.extractMatchingEntries=function(a){a=kt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
ht.prototype.getSequenceCount=function(a){a=kt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function kt(a,b){var c=jt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&jt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(lt(b.auth,g[0])){var h=b.isJspb;lt(h===void 0?"undefined":h?"true":"false",g[1])&&lt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),lt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function lt(a,b){return a===void 0||a==="undefined"?!0:a===b}
ht.prototype.getSequenceCount=ht.prototype.getSequenceCount;ht.prototype.extractMatchingEntries=ht.prototype.extractMatchingEntries;ht.prototype.smartExtractMatchingEntries=ht.prototype.smartExtractMatchingEntries;ht.prototype.storePayload=ht.prototype.storePayload;function jt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function mt(a,b){if(a)return a[b.name]}
;var nt=Bm("initial_gel_batch_timeout",2E3),ot=Bm("gel_queue_timeout_max_ms",6E4),pt=Bm("gel_min_batch_size",5),qt=void 0;function rt(){this.o=this.h=this.i=0;this.j=!1}
var st=new rt,tt=new rt,ut=new rt,vt=new rt,wt,xt=!0,zt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",zt);var At={};function Bt(){var a=E("yt.logging.ims");a||(a=new ht,D("yt.logging.ims",a));return a}
function Ct(a,b){if(a.endpoint==="log_event"){Dt();var c=Et(a),d=Ft(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=yr[d||""];var f,g,h,k=Ps().resolve(new Js(dq))==null?void 0:(f=eq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Gt(e.tier);if(k===400){Ht(a,b);return}}At[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Bt().storePayload(e,a.payload);It(b,c,e,d==="gelDebuggingEvent")}}
function It(a,b,c,d){function e(){Jt({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(qt=new a);a=Bm("tvhtml5_logging_max_batch_ads_fork")||Bm("tvhtml5_logging_max_batch")||Bm("web_logging_max_batch")||100;var g=V(),h=Kt(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=Bt().getSequenceCount(c));d>=1E3?e():d>=a?wt||(wt=Lt(function(){e();wt=void 0},0)):g-k>=10&&(Mt(f,c.tier),h.o=g)}
function Ht(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&Bt().storePayload({isJspb:!1},a.payload);Dt();var c=Et(a),d=new Map;d.set(c,[a.payload]);var e=Ft(a.payload)||"";b&&(qt=new b);return new vi(function(f,g){qt&&qt.isReady()?Nt(d,qt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Et(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);zt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Jt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new vi(function(e,f){var g=Kt(c,d),h=g.j;g.j=!1;Ot(g.i);Ot(g.h);g.h=0;qt&&qt.isReady()?d===void 0&&T("enable_web_tiered_gel")?Pt(e,f,a,b,c,300,h):Pt(e,f,a,b,c,d,h):(Mt(c,d),e())})}
function Pt(a,b,c,d,e,f,g){var h=qt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?Bt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Bt().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(At)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?Bt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Bt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete At[l];Nt(k,h,a,b,c,!1,g)}
function Mt(a,b){function c(){Jt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Kt(a,b),e=d===vt||d===ut?5E3:ot;T("web_gel_timeout_cap")&&!d.h&&(e=Lt(function(){c()},e),d.h=e);
Ot(d.i);e=S("LOGGING_BATCH_TIMEOUT",Bm("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&xt&&(e=nt);e=Lt(function(){Bm("gel_min_batch_size")>0?Bt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=pt&&c():c()},e);
d.i=e}
function Nt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var m=a.next();for(g={};!m.done;g={Fc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Ic:void 0,Hc:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Kg({context:kq(b.config_||jq())});if(!Oa(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=zt[m])&&
Qt(g.batchRequest,m,n);delete zt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Rt(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Ic=function(r){T("start_client_gcf")&&Mj.pa(function(){return A(function(t){return t.yield(St(r),0)})});
k--;k||c()};
g.Fc=0;g.Hc=function(r){return function(){r.Fc++;if(e.bypassNetworkless&&r.Fc===1)try{cr(b,l,r.batchRequest,Tt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Ic,r.Hc,f)),xt=!1}catch(t){gm(t),d()}k--;k||c()}}(g);
try{cr(b,l,g.batchRequest,Tt(e,g.dangerousLogToVisitorSession,g.Ic,g.Hc,f)),xt=!1}catch(r){gm(r),d()}}}
function Tt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,bh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Ut()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Rt(a,b,c){Ut()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),bm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Qt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Dt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Am("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(gt=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",gt),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ut(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Lt(a,b){return T("transport_use_scheduler")===!1?ym(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Fn(function(){if(ft().currentState==="none")a();else{var c={};ft().install((c.none={callback:a},c))}},b):Fn(a,b)}
function Ot(a){T("transport_use_scheduler")?Mj.qa(a):window.clearTimeout(a)}
function St(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=mt(d,El),g=(f=d)==null?void 0:f.hotHashData,h=mt(d,Dl),l=(k=d)==null?void 0:k.coldHashData,(m=Ps().resolve(new Js(dq)))?g?e?n.yield(fq(m,g,e),2):n.yield(fq(m,g),2):n.F(2):n.return()):l?h?n.yield(gq(m,l,h),0):n.yield(gq(m,l),0):n.F(0)})}
function Kt(a,b){b=b===void 0?200:b;return a?b===300?vt:tt:b===300?ut:st}
function Ft(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,yr[b])return b}
function Gt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Vt=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Vt);
function Wt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ws();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Vt[b]=b in Vt?Vt[b]+1:0,a.sequence={index:Vt[b],groupKey:b},d.endOfSequence&&delete Vt[d.sequenceGroup]);(d.sendIsolatedPayload?Ht:Ct)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function uo(a,b,c){c=c===void 0?{}:c;var d=es;S("ytLoggingEventsDefaultDisabled",!1)&&es===es&&(d=null);Wt(a,b,d,c)}
;function Xt(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Yt=new Set,Zt=0,$t=0,au=0,bu=[],cu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function to(a){du(a)}
function eu(a){du(a,"WARNING")}
function fu(a){a instanceof Error?du(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",eu(a))}
function du(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Zt>=5))){d=bu;var k=Rb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=bn(a.args[r],"params."+r,c,n),
n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var v="params."+r,x=dn(t[r]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=dn(t)}if(d.length)for(r=0;r<d.length&&!(n=bn(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Ym();c=w(a.Ua);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.oh)){a=d.weight;break a}a=w(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=w(Tm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[r.name])for(e=w(c.hc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Dc(f);break}r.params||(r.params={});a=Ym();r.params["params.errorServiceSignature"]="msg="+a.Ua.length+"&cb="+a.Qa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Ng(Og,"sample")).constructor!==Ng&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(r);if(r.sampleWeight!==0&&!Yt.has(r.message)){if(g&&T("web_enable_error_204"))gu(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Zm.kb("handleError",r),T("record_app_crashed_web")&&au===0&&r.sampleWeight===1&&(au++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),uo("appCrashed",g)),$t++):b==="WARNING"&&Zm.kb("handleWarning",r);if(T("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=w(cu);for(c=a.next();!c.done;c=a.next())if(Ao(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!cm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=w(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(uo("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Jt(void 0,void 0,!1))}T("suppress_error_204_logging")||gu(b,r)}try{Yt.add(r.message)}catch(y){}Zt++}}}
function gu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Km(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function hu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ka(b))}
;function iu(){this.register=new Map}
function ju(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.sh("ABORTED")}
iu.prototype.clear=function(){ju(this);this.register.clear()};
var ku=new iu;var lu=Date.now().toString();
function mu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(lu)for(a=1,b=0;b<lu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^lu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var nu,ou=C.ytLoggingDocDocumentNonce_;ou||(ou=mu(),D("ytLoggingDocDocumentNonce_",ou));nu=ou;function pu(a){this.h=a}
p=pu.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new Gl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&of(a,2,qe(this.h.veType)),this.h.veCounter!==void 0&&of(a,6,qe(this.h.veCounter)),this.h.elementIndex!==void 0&&of(a,3,qe(this.h.elementIndex)),this.h.isCounterfactual&&of(a,5,me(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Bf(a,Gl,7,b)}this.h.youtubeData!==void 0&&Bf(a,Fl,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function qu(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function ru(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},bm("client-screen-nonce-store",c));c[b]=a}
function su(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function tu(a){return S(su(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",tu);function uu(){var a=S("csn-to-ctt-auth-info");a||(a={},bm("csn-to-ctt-auth-info",a));return a}
function vu(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function wu(a){a=qu(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",wu);function xu(a,b,c){var d=uu();(c=wu(c))&&delete d[c];b&&(d[a]=b)}
function yu(a){return uu()[a]}
D("yt_logging_screen.getCttAuthInfo",yu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==qu(c)||b!==S(su(c)))if(xu(a,d,c),ru(a,c),bm(su(c),b),b=function(){setTimeout(function(){a&&uo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:nu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function zu(){var a=Jg(Au),b;return(new vi(function(c,d){a.onSuccess=function(e){xm(e)?c(new Bu(e)):d(new Cu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Cu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Cu("Request timed out","net.timeout",e))};
b=Km("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof Ci){var d;
(d=b)==null||d.abort()}return Ai(c)})}
function Cu(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
z(Cu,Za);function Bu(a){this.xhr=a}
;function Du(){this.h=0;this.i=null}
Du.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Eu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Fu(a):this};
Du.prototype.getValue=function(){return this.i};
Du.prototype.isRejected=function(){return this.h==2};
Du.prototype.$goog_Thenable=!0;function Fu(a){var b=new Du;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Eu(a){var b=new Du;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Gu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:rm(a)?"same-origin":"cors",credentials:rm(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Hu(){return qg()||(Xc||Yc)&&Ao("applewebkit")&&!Ao("version")&&(!Ao("safari")||Ao("gsa/"))||Wc&&Ao("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Iu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Kl)if(Kl[d]==c.embeddedPlayerMode){b=Kl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Ju(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ku;this.isTimeout=a instanceof Cu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Ci}
z(Ju,Za);Ju.prototype.name="BiscottiError";function Ku(){Za.call(this,"Biscotti ID is missing from server")}
z(Ku,Za);Ku.prototype.name="BiscottiMissingError";var Au={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Lu=null;function Mu(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Hu())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(Hg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Iu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Vl(){var a=Mu();if(a!==void 0)return Ai(a);Lu||(Lu=zu().then(Nu).oc(function(b){return Ou(2,b)}));
return Lu}
function Nu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Ku;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Ku;a=a.id;Wl(a);Lu=Eu(a);Pu(18E5,2);return a}
function Ou(a,b){b=new Ju(b);Wl("");Lu=Fu(b);a>0&&Pu(12E4,a-1);throw b;}
function Pu(a,b){ym(function(){zu().then(Nu,function(c){return Ou(b,c)}).oc(ti)},a)}
function Qu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Vl()}catch(b){return Ai(b)}}
;var xb=ha(["data-"]);function Ru(a){a&&(a.dataset?a.dataset[Su()]="true":zb(a))}
function Tu(a){return a?a.dataset?a.dataset[Su()]:a.getAttribute("data-loaded"):null}
var Uu={};function Su(){return Uu.loaded||(Uu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Vu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Jg(b);this.assets=a.assets||{};this.attrs=a.attrs||Jg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Vu.prototype.clone=function(){var a=new Vu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];La(c)=="object"?a[b]=Jg(c):a[b]=c}return a};var Wu=["share/get_share_panel"],Xu=["share/get_web_player_share_panel"],Yu=["feedback"],Zu=["notification/modify_channel_preference"],$u=["browse/edit_playlist"],av=["subscription/subscribe"],bv=["subscription/unsubscribe"];var cv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",cv);function dv(a){Xl(cv,arguments)}
;function ev(a,b,c){fv(a,b,c===void 0?null:c)}
function gv(a){a=hv(a);var b=document.getElementById(a);b&&(Fs(a),b.parentNode.removeChild(b))}
function iv(a,b){a&&b&&(a=""+Qa(b),(a=jv[a])&&Ds(a))}
function fv(a,b,c){c=c===void 0?null:c;var d=hv(a),e=document.getElementById(d),f=e&&Tu(e),g=e&&!f;f?b&&b():(b&&(f=Bs(d,b),b=""+Qa(b),jv[b]=f),g||(e=kv(a,d,function(){Tu(e)||(Ru(e),Es(d),ym(function(){Fs(d)},0))},c)))}
function kv(a,b,c,d){d=d===void 0?null:d;var e=Qg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Hb(e,Bl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function hv(a){var b=document.createElement("a");ub(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var jv={};function lv(a){var b=mv(a),c=document.getElementById(b),d=c&&Tu(c);d||c&&!d||(c=nv(a,b,function(){if(!Tu(c)){Ru(c);Es(b);var e=Wa(Fs,b);ym(e,0)}}))}
function nv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Bl(a);Cb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function mv(a){var b=Qg("A");ub(b,new nb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function ov(a){var b=B.apply(1,arguments);if(!pv(a)||b.some(function(d){return!pv(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())qv(a,c.value)}
function qv(a,b){for(var c in b)if(pv(b[c])){if(c in a&&!pv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});qv(a[c],b[c])}else if(rv(b[c])){if(c in a&&!rv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);sv(a[c],b[c])}else a[c]=b[c];return a}
function sv(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,pv(c)?a.push(qv({},c)):rv(c)?a.push(sv([],c)):a.push(c);return a}
function pv(a){return typeof a==="object"&&!Array.isArray(a)}
function rv(a){return typeof a==="object"&&Array.isArray(a)}
;var tv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function uv(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Zb(window.location.href);e&&d.push(e);e=Zb(a);if(Ib(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),ub(d,a),a=d.href)if(a=$b(a),a=ac(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:wu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&vv(a,b,f)}else vv(a,b)}
function vv(a,b,c){a=wv(a);b=b?cc(b):"";c=c||5;Hu()&&ln(a,b,c)}
function wv(a){for(var b=w(tv),c=b.next();!c.done;c=b.next())a=ic(a,c.value);return"ST-"+Vb(a).toString(36)}
;function xv(a){oq.call(this,1,arguments);this.csn=a}
z(xv,oq);var xq=new pq("screen-created",xv),yv=[],zv=0,Av=new Map,Bv=new Map,Cv=new Map;
function Dv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Ev({cttAuthInfo:yu(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Fg(k)||!k.trackingParams&&!k.veType)&&eu(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Fv(h,b);if(k.veType&&!Bv.has(l)&&!Cv.has(l)&&!e){if(!T("il_attach_cache_limit")||Av.size<1E3){Av.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Av.size>1E3&&eu(new U("IL Attach cache exceeded limit"))}h=Fv(c,b);Av.has(h)?
Gv(c,b):Cv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Lb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Hv("visualElementAttached",f,c):a?Wt("visualElementAttached",c,a,f):uo("visualElementAttached",c,f)}
function Hv(a,b,c){yv.push({Ae:a,payload:c,kh:void 0,options:b});zv||(zv=yq())}
function zq(a){if(yv){for(var b=w(yv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,uo(c.Ae,c.payload,c.options));yv.length=0}zv=0}
function Fv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Gv(a,b){a=Fv(a,b);Av.has(a)&&(b=Av.get(a)||[],Dv(b[0],b[1],b[2],[b[3]],!0),Av.delete(a))}
function Ev(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Iv(){try{return!!self.localStorage}catch(a){return!1}}
;function Jv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Kv(a){if(Iv()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Jv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Lv(){if(!Iv())return!1;var a=Dn(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Jv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Mv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Nv(a){if(S("LOGGED_IN",!0)&&Mv()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=Zb(window.location.href);c&&b.push(c);c=Zb(a);Ib(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=$b(a),(b=ac(b))?(b=wv(b),b=(b=mn(b)||null)?om(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Mv()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&uv(a,b)}}
;function Ov(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&uv(a,b);if(c)return!1;Nv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=dc(a,e);Nv(a);f=a+f;var h=h===void 0?rb:h;a:if(h=h===void 0?rb:h,f instanceof nb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof pb&&b.oe(f)){h=new nb(f);break a}h=void 0}g=g.location;h=tb(h||ob);h!==void 0&&(g.href=h);return!0}
;function Pv(a){if(Hg(S("PLAYER_VARS",{}))!="1"){a&&Ul();try{Qu().then(function(){},function(){}),ym(Pv,18E5)}catch(b){gm(b)}}}
;var Qv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Rv(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=Xb(Yb(5,a));if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=pm(a).theme;return Qv.get(c)||null}catch(d){}return null}
;function Sv(){this.h={};if(this.i=on()){var a=mn("CONSISTENCY");a&&Tv(this,{encryptedTokenJarContents:a})}}
Sv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Na.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Tv(this,a)}};
function Tv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&ln("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Uv=window.location.hostname.split(".").slice(-2).join(".");function Vv(){this.j=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Wv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Xv;function Yv(){Xv=E("yt.clientLocationService.instance");Xv||(Xv=new Vv,D("yt.clientLocationService.instance",Xv));return Xv}
p=Vv.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Wv(this))&&this.h.set("yt-location-playability-token",a,15552E3):ln("YT_CL",JSON.stringify({loctok:a}),15552E3,Uv,!0))};
function Wv(a){return a.h===void 0?new lo("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Wv(this))&&this.h.remove("yt-location-playability-token"):nn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Zv(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function $v(){this.h={}}
$v.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
$v.prototype.get=function(a){if(this.contains(a))return this.h[a]};
$v.prototype.set=function(a,b){this.h[a]=b};
$v.prototype.remove=function(a){delete this.h[a]};function aw(){this.mappings=new $v}
aw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
aw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Ab(b)}}return a};
new aw;function bw(a){return function(){return new a}}
;var cw={},dw=(cw.WEB_UNPLUGGED="^unplugged/",cw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",cw.WEB_UNPLUGGED_OPS="^unplugged/",cw.WEB_UNPLUGGED_PUBLIC="^unplugged/",cw.WEB_CREATOR="^creator/",cw.WEB_KIDS="^kids/",cw.WEB_EXPERIMENTS="^experiments/",cw.WEB_MUSIC="^music/",cw.WEB_REMIX="^music/",cw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",cw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",cw);
function ew(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=dw[b];if(c){c=new RegExp(c);for(var d=w(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(dw).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=w(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function fw(){}
fw.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?kn:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Kg(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;sn();var l="USER_INTERFACE_THEME_LIGHT";vn(165)?l="USER_INTERFACE_THEME_DARK":vn(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Rv()||l;h.userInterfaceTheme=k;if(!f){if(k=An())h.connectionType=k;T("web_log_effective_connection_type")&&(k=Bn())&&(g.client.effectiveConnectionType=k)}var m;if(T("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}T("web_gcf_hashes_innertube")&&(k=hq())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=pm(C.location.href);!T("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&en.h&&(n=en.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=fn(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(n=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(oa){}r=
void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=Cm();Sv.h||(Sv.h=new Sv);h=Sv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:n});!T("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=sn();t=vn(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?e&&(f=wu())&&(g.clientScreenNonce=f):!f&&(f=wu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Yv().setLocationOnInnerTubeContext(g);try{var v=sm(),x=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:x};var y=w(Object.entries(v));for(var H=y.next();!H.done;H=y.next()){var J=w(H.value),N=J.next().value,P=J.next().value;v=N;x=P;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:v,value:""+
x})}var va,vb;if(((va=g.client)==null?void 0:va.clientName)==="TVHTML5"||((vb=g.client)==null?void 0:vb.clientName)==="TVHTML5_UNPLUGGED"&&T("add_ifa_to_tvh5_requests")){var ea=S("INNERTUBE_CONTEXT");ea.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ea.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=ea.adSignalsInfo.limitAdTracking)}}catch(oa){du(oa)}y=g}else du(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
y={};y={context:y};if(H=this.i(a)){this.h(y,H,b);var Z;b="/youtubei/v1/"+ew(this.j());(H=(Z=mt(a.commandMetadata,Il))==null?void 0:Z.apiUrl)&&(b=H);Z=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(Z=String(b)+String($b(Z)));b={};T("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));T("json_condensed_response")&&(b.prettyPrint="false");Z=qm(Z,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Z,hb:Gu(Z),Na:y,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}du(new U("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(fw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function gw(){}
z(gw,fw);function hw(){}
z(hw,gw);hw.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",hb:Gu("/getDatasyncIdsEndpoint","GET"),Na:{}}};
hw.prototype.j=function(){return[]};
hw.prototype.i=function(){};
hw.prototype.h=function(){};var iw={},jw=(iw.GET_DATASYNC_IDS=bw(hw),iw);function kw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function lw(){var a=kw();a.info||(a.info={});return a.info}
function mw(a){a=kw(a);a.metadata||(a.metadata={});return a.metadata}
function nw(a){a=kw(a);a.tick||(a.tick={});return a.tick}
function ow(a){a=kw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function pw(a){a=ow(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function qw(a){var b=kw(a).nonce;b||(b=mu(),kw(a).nonce=b);return b}
;function rw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function sw(a){a=a||"";var b=E("ytcsi.reference");b||(rw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=rw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},tw=(W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W),X={},uw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",X.editor="LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",
X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);
Object.assign(uw,tw);function vw(a,b){oq.call(this,1,arguments);this.timer=b}
z(vw,oq);var ww=new pq("aft-recorded",vw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var xw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",xw);function yw(){this.h=0}
function zw(){yw.h||(yw.h=new yw);return yw.h}
yw.prototype.tick=function(a,b,c,d){Aw(this,"tick_"+a+"_"+b)||uo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
yw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Aw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,uo("latencyActionInfo",a,{cttAuthInfo:c}))};
yw.prototype.jspbInfo=function(){};
yw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Aw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,uo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Aw(a,b){xw[b]=xw[b]||{count:0};var c=xw[b];c.count++;c.time=V();a.h||(a.h=Fn(function(){var d=V(),e;for(e in xw)xw[e]&&d-xw[e].time>6E4&&delete xw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||eu(c)),!0):!1}
;var Bw=window;function Cw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Dw(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Ew(e.requestStart),e.responseEnd=Ew(e.responseEnd),e.redirectStart=Ew(e.redirectStart),e.redirectEnd=Ew(e.redirectEnd),e.domainLookupEnd=Ew(e.domainLookupEnd),e.connectStart=Ew(e.connectStart),e.connectEnd=
Ew(e.connectEnd),e.responseStart=Ew(e.responseStart),e.secureConnectionStart=Ew(e.secureConnectionStart),e.domainLookupStart=Ew(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Ew(a){return Math.round(Fw()+a)}
function Fw(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Bw.performance||Bw.mozPerformance||Bw.msPerformance||Bw.webkitPerformance||new Cw;var Gw=!1,Hw=!1,Iw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Va(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ti,Y);function Jw(a,b){if(!T("web_csi_action_sampling_enabled")||!kw(b).actionDisabled){var c=sw(b||"");ov(c.info,a);a.loadType&&(c=a.loadType,mw(b).loadType=c);ov(pw(b),a);c=qw(b);b=kw(b).cttAuthInfo;zw().info(a,c,b)}}
function Kw(){var a,b,c,d;return((d=Ps().resolve(new Js(dq))==null?void 0:(a=eq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Lw(a,b,c){if(!T("web_csi_action_sampling_enabled")||!kw(c).actionDisabled){var d=qw(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(Ps().resolve(new Js(dq))==null?0:eq())&&!Hw&&(Hw=!0,Lw("gcfl",V(),c));var f,g,h;e=(Ps().resolve(new Js(dq))==null?void 0:(f=eq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Kw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+
d.charCodeAt(g),g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;kw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Jw(f,c));kw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);
try{Y.mark(e,{startTime:f})}catch(k){}}e=sw(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=ow(c);e.gelTicks&&(e.gelTicks[a]=!0);f=nw(c);e=b||V();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=kw(c).cttAuthInfo;a==="_start"?(a=zw(),Aw(a,"baseline_"+d)||uo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):zw().tick(a,d,b,f);Mw(c);return e}}}
function Nw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=hs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Ow(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=w(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Pw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Db(window)&&a.setAttribute("nonce",Db(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Fw(),Lw("rsf_"+b,c+Math.round(a.fetchStart)),Lw("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Qw(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Kb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Mb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Lw("wffs",Ew(b.startTime)),Lw("wffe",Ew(b.responseEnd)))}
function Rw(a){var b=Sw("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Sw(b[d],a);if(e)return e}return NaN}
function Sw(a,b){if(a=nw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Mw(a){var b=Sw("_start",a),c=Rw(a),d=T("enable_cow_info_csi")||!Gw;b&&c&&d&&(uq(ww,new vw(Math.round(c-b),a)),Gw=!0)}
function Tw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Nb(a,function(c){return c.name==="first-paint"}))return Ew(a.startTime)}var b;
T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.ph;return b?Math.max(0,b):0}
;function Uw(a,b){fm(function(){sw("").info.actionType=a;b&&bm("TIMING_AFT_KEYS",b);bm("TIMING_ACTION",a);var c=Ow();Object.keys(c).length>0&&Jw(c);c={isNavigation:!0,actionType:uw[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=uw[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=wu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Nw();if(d===1||d===-1)c.isVisible=!0;mw();lw();
c.loadType="cold";d=lw();var e=Dw(),f=Fw(),g=S("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Lw("srt",e.responseStart),d.prerender!==1&&Lw("_start",f,void 0));d=Tw();d>0&&Lw("fpt",d);d=Dw();d.isPerformanceNavigationTiming&&Jw({performanceNavigationTiming:!0},void 0);Lw("nreqs",d.requestStart,void 0);Lw("nress",d.responseStart,void 0);Lw("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Lw("nrs",d.redirectStart,void 0),Lw("nre",
d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Lw("ndnss",d.domainLookupStart,void 0),Lw("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Lw("ntcps",d.connectStart,void 0),Lw("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Fw()&&d.connectEnd-d.secureConnectionStart>0&&(Lw("nstcps",d.secureConnectionStart,void 0),Lw("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Qw();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Iw)Iw.hasOwnProperty(h)&&
(e=Iw[h],Pw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Jw(c);c=ow();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=pw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(mw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=nw();e=ow();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Lw(k,Sw(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
w(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Lw(k.slice(1),g);k={};d=!1;h=w(h);for(e=h.next();!e.done;e=h.next())d=e.value,ov(c,d),ov(k,d),d=!0;d&&Jw(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Vw()&&Rw()&&Mw()})()}
function Vw(){return fm(function(){return Ww()})()}
function Xw(a,b,c){fm(Jw)(a,b,c===void 0?!1:c)}
function Yw(a,b,c){return fm(Lw)(a,b,c)}
function Ww(){return fm(function(){return"_start"in nw()})()}
function Zw(){fm(function(){var a=qw();requestAnimationFrame(function(){setTimeout(function(){a===qw()&&Yw("ol",void 0,void 0)},0)})})()}
var $w=window;$w.ytcsi&&($w.ytcsi.infoGel=Xw,$w.ytcsi.tick=Yw);var ax="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),bx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function cx(a,b,c,d){this.D=a;this.ea=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Qb||(a.Qb={});a.Qb=Object.assign({},jw,a.Qb)}
function dx(a,b,c,d){if(cx.h!==void 0){if(d=cx.h,a=[a!==d.D,b!==d.ea,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else cx.h=new cx(a,b,c,d)}
function ex(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?kn:c;var d=fx(a,b);return d?new vi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.F(0);break}Nv(h.input);l=((k=h.hb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.bf){var r=h.config,t;r=r==null?void 0:(t=r.Ub)==null?void 0:t.sessionIndex;t=jn(0,{sessionIndex:r});m=Object.assign({},
Zv(l),t);n.F(4);break}return n.yield(gx(h.config,l),5);case 5:m=n.i;case 4:e(hx(a,h,m)),n.h=0}})}):Ai(new U("Error: No request builder found for command.",b))}
function ix(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=w(ax);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function hx(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,v,x,y,H,J,N,P,va,vb,ea,Z,oa,Na,Ma,ch,dh,Tr,Ur,Vr,Wr;return A(function(ia){switch(ia.h){case 1:ia.F(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Na)==null?0:g.context)){ia.F(4);break}h=b.Na.context;ia.F(5);break;case 5:k=w([]),l=k.next();case 8:if(l.done){ia.F(4);break}m=l.value;return ia.yield(m.rh(h),9);case 9:l=k.next();ia.F(8);break;case 4:if((n=a.i)==null||!n.wh(b.input,b.Na)){ia.F(12);break}return ia.yield(a.i.mh(b.input,
b.Na),13);case 13:return r=ia.i,T("kevlar_process_local_innertube_responses_killswitch")||ix(a,r,b),ia.return(r);case 12:return(x=(v=b.config)==null?void 0:v.uh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.Na),N=(J=(H=b.hb)==null?void 0:H.headers)!=null?J:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},N,c)}),P=Object.assign({},b.hb),b.hb.method==="POST"&&(P=Object.assign({},P,{body:y})),((va=b.config)==null?0:va.Ge)&&Yw(b.config.Ge),vb=function(){return a.ea.fetch(b.input,P,b.config)},t=
vb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((ea=ia.i)&&"error"in ea&&((Z=ea)==null?0:(oa=Z.error)==null?0:oa.details))for(Na=ea.error.details,Ma=w(Na),ch=Ma.next();!ch.done;ch=Ma.next())dh=ch.value,(Tr=dh["@type"])&&bx.indexOf(Tr)>-1&&(delete dh["@type"],ea=dh);x&&a.h.has(x)&&a.h.delete(x);((Ur=b.config)==null?0:Ur.He)&&Yw(b.config.He);if(ea||(Vr=a.i)==null||!Vr.dh(b.input,b.Na)){ia.F(15);break}return ia.yield(a.i.lh(b.input,b.Na),16);case 16:ea=ia.i;case 15:return ix(a,ea,b),((Wr=b.config)==null?0:Wr.Ce)&&Yw(b.config.Ce),d(),ia.return(ea||
void 0)}})}
function fx(a,b){a:{a=a.D;var c,d=(c=mt(b,Jl))==null?void 0:c.signal;if(d&&a.Qb&&(c=a.Qb[d])){var e=c();break a}var f;if((c=(f=mt(b,Hl))==null?void 0:f.request)&&a.Qd&&(f=a.Qd[c])){e=f();break a}for(e in b)if(a.Vc[e]&&(b=a.Vc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function gx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Ub)==null?void 0:d.sessionIndex;var h=g.yield;var k=jn(0,{sessionIndex:e});if(!(k instanceof vi)){var l=new vi(ti);wi(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Zv(b),f)))})}
;var jx=new Is("INNERTUBE_TRANSPORT_TOKEN");function kx(){}
z(kx,gw);kx.prototype.j=function(){return av};
kx.prototype.i=function(a){return mt(a,Tl)||void 0};
kx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(kx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function lx(){}
z(lx,gw);lx.prototype.j=function(){return bv};
lx.prototype.i=function(a){return mt(a,Sl)||void 0};
lx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(lx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var mx=new Is("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function nx(a){this.u=a}
z(nx,gw);nx.prototype.j=function(){return Wu};
nx.prototype.i=function(a){return mt(a,Nl)||mt(a,Ol)||mt(a,Ml)};
nx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
nx[Hs]=[mx];function ox(){}
z(ox,gw);ox.prototype.j=function(){return Yu};
ox.prototype.i=function(a){return mt(a,Ll)||void 0};
ox.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(ox.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function px(){}
z(px,gw);px.prototype.j=function(){return Zu};
px.prototype.i=function(a){return mt(a,Rl)||void 0};
px.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function qx(){}
z(qx,gw);qx.prototype.j=function(){return $u};
qx.prototype.i=function(a){return mt(a,Ql)||void 0};
qx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function rx(){}
z(rx,gw);rx.prototype.j=function(){return Xu};
rx.prototype.i=function(a){return mt(a,Pl)};
rx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var sx=new Is("FETCH_FN_TOKEN"),tx=new Is("PARSE_FN_TOKEN");function ux(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
z(ux,U);var vx=new Is("NETWORK_SLI_TOKEN");function wx(a,b,c){this.h=a;this.i=b;this.j=c}
wx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=xx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){eu(k);
if((c==null?0:c.Wd)&&k instanceof ux&&k.errorType===1)return Promise.reject(k)}))})};
function xx(a,b,c){if(a.h){var d=Xb(Yb(5,ic(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=Wq(c));return new window.Request(b,a)}
wx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.pe)&&a.ok)return Xf(b.pe,e);e=e.replace(")]}'","");if((b==null?0:b.Wd)&&e)try{var f=d(e)}catch(h){throw new ux(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.hh(),c=c.then(function(e){eu(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
wx[Hs]=[new Js(vx),new Js(sx),new Js(tx)];var yx=new Is("NETWORK_MANAGER_TOKEN");var zx;function Ax(){var a,b,c;return A(function(d){if(d.h==1)return a=Ps().resolve(jx),a?d.yield(ex(a),2):(eu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return eu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.fh;return d.return(c)}eu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Bx(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Cx=C.caches,Dx;function Ex(a){var b=a.indexOf(":");return b===-1?{md:a}:{md:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Fx(){return A(function(a){if(Dx!==void 0)return a.return(Dx);Dx=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(Cx.open("test-only"),4);case 4:return d.yield(Cx.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Dx)})}
function Gx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Fx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Cx.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Ex(f),h=g.datasyncId,!h||a.includes(h)||b.push(Cx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Hx(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Fx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Dn("cache contains other");return h.yield(Cx.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Ex(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ix(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Jx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Kx(a){if(Ix()){var b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Jx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Lx(){if(!Ix())return!1;var a=Dn(),b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Jx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Mx(){Ax().then(function(a){a&&(Jp(a),Gx(a),Kv(a),Kx(a))})}
function Nx(){var a=new Or;Mj.pa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=Dn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Jp(h);Gx(h);Kv(h);Kx(h);return g.return()}c=Lv();d=Lx();return g.yield(Hx(),3);case 3:return e=g.i,g.yield(Kp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?Mx():a.h.add("publicytnetworkstatus-online",Mx,!0,void 0,void 0),g.h=0}})})}
;function Ox(){this.state=1;this.h=null}
p=Ox.prototype;p.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=eb(),f=new Eb(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=Al(a.interpreterSafeUrl).toString());Px(this,d,e,a.program,b,c)}else eu(Error("Cannot initialize botguard without program"))};
function Px(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,ev(c,function(){window[g]?Qx(a,d,g,e):(a.state=3,gv(c),eu(new U("Unable to load Botguard","from "+c)))},f)):b?(f=Qg("SCRIPT"),b instanceof Eb?Gb(f,b):f.textContent=b,f.nonce=Db(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Qx(a,d,g,e):(a.state=4,eu(new U("Unable to load Botguard from JS")))):eu(new U("Unable to load VM; no url or JS provided"))}
p.isLoading=function(){return this.state===2};
function Qx(a,b,c,d){a.state=5;try{var e=new yj({program:b,ce:c,Ee:T("att_web_record_metrics"),we:{wa:"aGIf"}});e.Xe.then(function(){a.state=6;d&&d(b)});
a.Lc(e)}catch(f){a.state=7,f instanceof Error&&eu(f)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Oc()?this.Cd({Wc:a}):null};
p.dispose=function(){this.Lc(null);this.state=8};
p.Oc=function(){return!!this.h};
p.Cd=function(a){return this.h.vd(a)};
p.Lc=function(a){tg(this.h);this.h=a};var Rx=[],Sx=!1;function Tx(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Hu()){var a=S("PLAYER_VARS",{});if(Hg(a)!="1"&&!Iu(a)){var b=function(){Sx=!0;"google_ad_status"in window?bm("DCLKSTAT",1):bm("DCLKSTAT",2)};
try{ev("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Rx.push(Mj.pa(function(){if(!(Sx||"google_ad_status"in window)){try{iv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Sx=!0;bm("DCLKSTAT",3)}},5E3))}}}
function Ux(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Vx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Wx(){Ox.apply(this,arguments)}
z(Wx,Ox);Wx.prototype.Lc=function(a){var b;(b=Vx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.vd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Wx.prototype.Oc=function(){return!!Vx()};
Wx.prototype.Cd=function(a){return Vx().bgvmc(a)};function Xx(a){Ys.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
z(Xx,Ys);Xx.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Xx.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Xx.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Xx.prototype.i=function(){this.h=new Map};function Yx(a){Ys.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
z(Yx,Ys);Yx.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Yx.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Yx.prototype.D=function(a,b){a(b==null?void 0:b.event)};
Yx.prototype.u=function(a,b){a(b==null?void 0:b.event)};function Zx(){this.o=new Xx;this.D=new Yx}
Zx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function $x(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
$x.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=wu(c===void 0?0:c)){a=this.client;d=new pu({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Fv(d,c);Bv.set(f,!0);Gv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Ev({cttAuthInfo:yu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Hv("visualElementGestured",f,d):a?Wt("visualElementGestured",d,a,f):uo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
$x.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new pu({trackingParams:a}),b,c===void 0?0:c)};
$x.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=wu(d);a||(a=(a=tu(d===void 0?0:d))?new pu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Ev({cttAuthInfo:yu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Hv("visualElementStateChanged",d,b):a?Wt("visualElementStateChanged",b,a,d):uo("visualElementStateChanged",b,d))}};
function ay(a,b){if(b===void 0)for(var c=vu(),d=0;d<c.length;d++)c[d]!==void 0&&ay(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Dv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function by(){Zx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||Fn(cy)}
z(by,Zx);by.prototype.j=function(){uo("finalPayload",{csn:wu()})};
by.prototype.h=function(){ju(ku)};
by.prototype.i=function(){var a=ay;$x.h||($x.h=new $x);a($x.h)};
function cy(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Ud();a=w(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&uo("genericClientExperimentEvent",{eventType:c});delete am.CLIENT_EXPERIMENT_EVENTS}}
;function dy(){}
function ey(){var a=E("ytglobal.storage_");a||(a=new dy,D("ytglobal.storage_",a));return a}
dy.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(fy()):d.return()})};
function fy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",dy);function so(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
so.prototype.Fa=function(a){this.handleError(a)};
so.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":gy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function gy(a,b){ey().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:hy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:hy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function hy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var iy={},jy=(iy["api.invalidparam"]=2,iy.auth=150,iy["drm.auth"]=150,iy["heartbeat.net"]=150,iy["heartbeat.servererror"]=150,iy["heartbeat.stop"]=150,iy["html5.unsupportedads"]=5,iy["fmt.noneavailable"]=5,iy["fmt.decode"]=5,iy["fmt.unplayable"]=5,iy["html5.missingapi"]=5,iy["html5.unsupportedlive"]=5,iy["drm.unavailable"]=5,iy["mrm.blocked"]=151,iy["embedder.identity.denied"]=152,iy);var ky=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function ly(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function my(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(ky);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function ny(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function oy(a){L.call(this);var b=this;this.api=a;this.V=this.u=!1;this.A=[];this.I={};this.j=[];this.i=[];this.W=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.T=T("web_player_split_event_bus_iframe");this.o=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.H=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.V=!0;b.u=!1;b.sendMessage("initialDelivery",py(b));b.sendMessage("onReady");e=w(b.A);for(d=e.next();!d.done;d=e.next())qy(b,d.value);b.A=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.W&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.I[e]||e==="onReady"||
(c=ry(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.T?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.I[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&ly(e)){var f=d;if(Pa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=my(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=my(g);break;case "loadPlaylist":case "cuePlaylist":g=ny(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);ly(e)&&sy(b,py(b))}}}};
ty.addEventListener("message",this.H);if(a=S("WIDGET_ID"))this.sessionId=a;uy(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.W=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?jy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
uy(this,"onVideoProgress",this.Se.bind(this));uy(this,"onVolumeChange",this.Te.bind(this));uy(this,"onApiChange",this.Le.bind(this));uy(this,"onPlaybackQualityChange",this.Pe.bind(this));uy(this,"onPlaybackRateChange",this.Qe.bind(this));uy(this,"onStateChange",this.Re.bind(this));uy(this,"onWebglSettingsChanged",this.Ue.bind(this));uy(this,"onCaptionsTrackListChanged",this.Me.bind(this));uy(this,"captionssettingschanged",this.Ne.bind(this))}
z(oy,L);function sy(a,b){a.sendMessage("infoDelivery",b)}
p=oy.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.V?qy(this,a):this.A.push(a)};
function ry(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function uy(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function py(a){if(!a.api)return null;var b=a.api.getApiInterface();Ob(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.Re=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());sy(this,a)};
p.Pe=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());sy(this,a)};
p.Qe=function(a){sy(this,{playbackRate:a})};
p.Le=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.Te=function(){sy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.Se=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());sy(this,a)};
p.Ue=function(){sy(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.Me=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};sy(this,a)}};
p.Ne=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};sy(this,a)}};
function qy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){eu(d)}}}
p.aa=function(){L.prototype.aa.call(this);ty.removeEventListener("message",this.H);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.T?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var ty=window;function vy(a,b,c){L.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.da){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=wy(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=xy(g,f))&&yy(d,g,f))}}}}}};
zy.addEventListener("message",this.i);yy(this,"RECEIVING")}
z(vy,L);p=vy.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.Oe.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.Oe=function(a,b){this.da||yy(this,a,Ay(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function wy(a,b){switch(a){case "loadVideoById":return[my(b)];case "cueVideoById":return[my(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[ny(b)];case "cuePlaylist":return[ny(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function xy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Ay(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function yy(a,b,c){a.da||(b={id:a.id,command:b},c&&(b.data=c),By.postMessage(JSON.stringify(b),a.origin))}
p.aa=function(){zy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);L.prototype.aa.call(this)};
var zy=window,By=window.parent;var Cy=new Wx;function Dy(){return Cy.Oc()}
function Ey(a){a=a===void 0?{}:a;return Cy.invoke(a)}
;function Fy(a,b,c,d,e){L.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.qc=e;this.Ia=!1;this.api={};this.ha=this.u=null;this.T=new M;this.h={};this.W=this.oa=this.elementId=this.Ya=this.config=null;this.V=!1;this.j=this.H=null;this.ya={};this.sc=["onReady"];this.lastError=null;this.lb=NaN;this.I={};this.fa=0;this.i=this.o=a;vg(this,this.T);Gy(this);c?this.fa=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Hy(this),Iy(this))}
z(Fy,L);p=Fy.prototype;p.getId=function(){return this.A};
p.loadNewVideoConfig=function(a){if(!this.da){this.fa&&(clearTimeout(this.fa),this.fa=0);var b=a||{};b instanceof Vu||(b=new Vu(b));this.config=b;this.setConfig(a);Iy(this);this.isReady()&&Jy(this)}};
function Hy(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Ya=a;this.config=Ky(a);Hy(this);if(!this.oa){var b;this.oa=Ly(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Gj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Gj(Number(a)||a))};
function Jy(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function My(a){var b=!0,c=Ny(a);c&&a.config&&(b=c.dataset.version===Oy(a));return b&&!!E("yt.player.Application.create")}
function Iy(a){if(!a.da&&!a.V){var b=My(a);if(b&&(Ny(a)?"html5":null)==="html5")a.W="html5",a.isReady()||Py(a);else if(Qy(a),a.W="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Py(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=Ry(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Ky(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.qc);Py(a)};
a.V=!0;b?a.H():(ev(Oy(a),a.H),(b=Sy(a))&&lv(b||""),Ty(a)&&!c&&D("yt.player.Application.create",null))}}}
function Ny(a){var b=Pg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Py(a){if(!a.da){var b=Ny(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.V=!1;if(!Ry(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Uy(a)}else a.lb=setTimeout(function(){Py(a)},50)}}
function Uy(a){Gy(a);a.Ia=!0;var b=Ny(a);if(b){a.u=Vy(a,b,"addEventListener");a.ha=Vy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Vy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);Jy(a);a.oa&&a.oa(a.api);a.T.kb("onReady",a.api)}
function Vy(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function Gy(a){a.Ia=!1;if(a.ha)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ha(b,a.h[b]);for(var c in a.I)a.I.hasOwnProperty(c)&&clearTimeout(Number(c));a.I={};a.u=null;a.ha=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ya};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Ia};
p.addEventListener=function(a,b){var c=this,d=Ly(this,b);d&&(Ib(this.sc,a)>=0||this.h[a]||(b=Wy(this,a),this.u&&this.u(a,b)),this.T.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.da||(b=Ly(this,b))&&this.T.unsubscribe(a,b)};
function Ly(a,b){var c=b;if(typeof b==="string"){if(a.ya[b])return a.ya[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.ya[b]=c}return c?c:null}
function Wy(a,b){function c(d){function e(){if(!a.da)try{a.T.kb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack,componentStack:h.Pd});g.level="WARNING";throw g;}}
if(Ry(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.I,h=String(f);h in g&&delete g[h]},0);
Gg(a.I,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.W||(Ny(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function Qy(a){a.cancel();Gy(a);a.W=null;a.config&&(a.config.loaded=!1);var b=Ny(a);b&&(My(a)||!Ty(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.H&&iv(Oy(this),this.H);clearTimeout(this.lb);this.V=!1};
p.aa=function(){Qy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.ya=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ya=this.config=this.api=null;delete this.o;delete this.i;L.prototype.aa.call(this)};
function Ty(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Oy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Sy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ry(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Ky(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Jg(e):e}return b}
;var Xy={},Yy="player_uid_"+(Math.random()*1E9>>>0);function Zy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Pg(c):c;var e=Yy+"_"+Qa(c),f=Xy[e];if(f&&d)return $y(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Fy(c,e,a,b,void 0);Xy[e]=f;f.addOnDisposeCallback(function(){delete Xy[f.getId()]});
return f.api}
function $y(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var az=null,bz=null;
function cz(){Zw();var a=sn(),b=vn(119),c=window.devicePixelRatio>1;if(document.body&&Uj(document.body,"exp-invert-logo"))if(c&&!Uj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Uj(d,"inverted-hdpi")){var e=Sj(d);Tj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Uj(document.body,"inverted-hdpi")&&Vj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=wn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete pn[b]:(c=d.toString(16),pn[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in pn)pn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(pn[f])));var f=d.join("&");ln(b,f,63072E3,a.i,c)}}
function dz(){ez()}
function fz(){Yw("ep_init_pr");ez()}
function ez(){var a=az.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function gz(){az&&az.sendAbandonmentPing&&az.sendAbandonmentPing();S("PL_ATT")&&Cy.dispose();for(var a=Mj,b=0,c=Rx.length;b<c;b++)a.qa(Rx[b]);Rx.length=0;gv("//static.doubleclick.net/instream/ad_status.js");Sx=!1;bm("DCLKSTAT",0);ug(bz);az&&(az.removeEventListener("onVideoDataChange",dz),az.destroy())}
;D("yt.setConfig",bm);D("yt.config.set",bm);D("yt.setMsg",dv);D("yt.msgs.set",dv);D("yt.logging.errors.log",du);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Pv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Uw("embed",["ol"]);c=Bx();if(!c.serializedForcedExperimentIds){var d=pm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&Uw("watch",["pbs","pbu","pbp"]);az=Zy(a,c);az.addEventListener("onVideoDataChange",dz);az.addEventListener("onReady",fz);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?bz=new oy(az):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(bz=new vy(az,a,b));Tx();T("ytidb_create_logger_embed_killswitch")||ro();a={};by.h||(by.h=new by);by.h.install((a.flush_logs={callback:function(){Jt()}},a));
ds();T("ytidb_clear_embedded_player")&&Mj.pa(function(){var f,g;if(!zx){var h=Ps();Ls(h,{lc:yx,zd:wx});var k={Vc:{feedbackEndpoint:bw(ox),modifyChannelNotificationPreferenceEndpoint:bw(px),playlistEditEndpoint:bw(qx),shareEntityEndpoint:bw(nx),subscribeEndpoint:bw(kx),unsubscribeEndpoint:bw(lx),webPlayerShareEntityServiceEndpoint:bw(rx)}},l=Yv(),m={};l&&(m.client_location=l);f===void 0&&(f=hn());g===void 0&&(g=h.resolve(yx));dx(k,g,f,m);Ls(h,{lc:jx,Ad:cx.h});zx=h.resolve(jx)}Nx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Dy);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Ey);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Ux);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Ov);D("yt.util.activity.init",E("yt.util.activity.init")||ts);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||ws);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||us);window.addEventListener("load",fm(function(){cz()}));
window.addEventListener("pageshow",fm(function(a){a.persisted||cz()}));
window.addEventListener("pagehide",fm(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?gz():a.persisted||gz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=cm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Pd)f||(f={}),f.componentStack=Xt(m)}f&&hu(e,f);g?du(e):eu(e)}};
Li=fu;window.addEventListener("unhandledrejection",function(a){fu(a.reason)});
Jb(S("ERRORS")||[],function(a){du.apply(null,a)});
bm("ERRORS",[]);}).call(this);
