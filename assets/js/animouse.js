!function(){"use strict";function t(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=e.apply(r,n);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))}}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function n(){n=function(){return e};var t,e={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),c=new S(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",y="suspendedYield",v="executing",d="completed",m={};function g(){}function w(){}function b(){}var x={};l(x,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(I([])));E&&E!==r&&o.call(E,c)&&(x=E);var k=b.prototype=g.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(n,a,i,c){var u=h(t[n],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&o.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var n;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}})}function O(e,r,n){var o=p;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===d){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?d:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,a(k,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=l(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},j(N.prototype),l(N.prototype,u,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new N(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(k),l(k,s,"Generator"),l(k,c,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function o(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}var a=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.loadedANIs=new Map},o=[{key:"loadAndApplyCursor",value:(c=e(n().mark((function t(e,r){var o,a,i,c=arguments;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=c.length>2&&void 0!==c[2]?c[2]:"auto",a="cursor-animation-".concat(r.replace(/[^a-zA-Z0-9-]+/g,"-")),!this.loadedANIs.has(a)){t.next=5;break}return this.applyToSelectors(e,this.loadedANIs.get(a)),t.abrupt("return");case 5:return t.prev=5,t.next=8,this.loadANIFile(r,a,o);case 8:i=t.sent,this.loadedANIs.set(a,i),this.applyToSelectors(e,i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),console.error("Error loading ANI file from ".concat(r,":"),t.t0);case 16:case"end":return t.stop()}}),t,this,[[5,13]])}))),function(t,e){return c.apply(this,arguments)})},{key:"loadANIFile",value:(i=e(n().mark((function t(e,r,o){var a,i,c;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if((a=t.sent).ok){t.next=5;break}throw new Error("Failed to fetch ANI file: ".concat(a.status));case 5:return t.next=7,a.arrayBuffer();case 7:return i=t.sent,c=this.extractFrames(i),t.abrupt("return",this.generateKeyframes(r,c,o));case 10:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return i.apply(this,arguments)})},{key:"extractFrames",value:function(t){var e=[],r=0,n=new DataView(t).getUint32(r+4,!0);r+=8;for(var o=0;o<n;o++){var a=new DataView(t).getUint32(r,!0);r+=4;var i=t.slice(r,r+a);r+=a;var c=URL.createObjectURL(new Blob([i],{type:"image/x-icon"}));e.push({url:c,duration:100})}return e}},{key:"generateKeyframes",value:function(t,e,r){var n=e.reduce((function(t,e){return t+e.duration}),0),o="",a=0;return e.forEach((function(t){var e=t.duration/n*100;o+="".concat(a.toFixed(2),"% { cursor: url(").concat(t.url,"), ").concat(r,"; }\n"),a+=e})),{aniClassName:t,keyframes:"@keyframes ".concat(t," {\n").concat(o,"}"),totalDuration:n}}},{key:"applyToSelectors",value:function(t,e){var r=e.aniClassName,n=e.keyframes,o=e.totalDuration,a="\n      ".concat(n,"\n      ").concat(t.map((function(t){return"".concat(t)})).join(", ")," {\n        animation: ").concat(r," ").concat(o,"ms step-end infinite;\n      }\n    ");this.injectStyle(a)}},{key:"injectStyle",value:function(t){if(t.trim()){var e=document.createElement("style");e.textContent=t,document.head.appendChild(e)}}}],o&&r(t.prototype,o),a&&r(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o,a,i,c}(),i=new a;window.ANIMouse=i}();
//# sourceMappingURL=animouse.js.map
