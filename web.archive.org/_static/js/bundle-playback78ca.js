// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,s=void 0,s=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(s)?s:String(s)),r)}var i,s}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){var t="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return c(e,arguments,f(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,e)})(e)}function c(e,t,n){return(c=l()?Reflect.construct.bind():function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}if(n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return y})),"undefiend"!=typeof window.XMLHttpRequest){var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(p,e);var t,n,o,a,c,h=(t=p,n=l(),function(){var e,o=f(t);if(n){var r=f(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return s(this,e)});function p(){return i(this,p),h.apply(this,arguments)}return o=p,a&&r(o.prototype,a),c&&r(o,c),Object.defineProperty(o,"prototype",{writable:!1}),o}(a(XMLHttpRequest));Object.defineProperty(h.prototype,"responseURL",Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype,"responseURL"))}function p(e,t,n,o,r){var i;if((i=window.XMLHttpRequest?new h:new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange=function(){4==this.readyState&&n(i)},i.open(e,t,!0),o)for(var s in o)o.hasOwnProperty(s)&&i.setRequestHeader(s,o[s]);i.withCredentials=!0,i.send(r)}function d(e){return void 0!==e&&e&&e.constructor===Array}function m(e){return document.cookie.search(e)>=0}function v(e,t){var n=window["HTML".concat(e,"Element")];if(void 0!==n){var o=Object.getOwnPropertyDescriptor(n.prototype,t);void 0!==o&&Object.defineProperty(n.prototype,"_wm_".concat(t),o)}}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"src",n="_wm_".concat(t);return n in e.__proto__?e[n]:e[t]}v("Image","src"),v("Media","src"),v("Embed","src"),v("IFrame","src"),v("Script","src"),v("Link","href"),v("Anchor","href")},function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var o=["January","February","March","April","May","June","July","August","September","October","November","December"],r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i={Y:function(e){return e.getUTCFullYear()},m:function(e){return e.getUTCMonth()+1},b:function(e){return r[e.getUTCMonth()]},B:function(e){return o[e.getUTCMonth()]},d:function(e){return e.getUTCDate()},H:function(e){return("0"+e.getUTCHours()).slice(-2)},M:function(e){return("0"+e.getUTCMinutes()).slice(-2)},S:function(e){return("0"+e.getUTCSeconds()).slice(-2)},"%":function(){return"%"}};function s(e){var t=function(e){return"number"==typeof e&&(e=e.toString()),[e.slice(-14,-10),e.slice(-10,-8),e.slice(-8,-6),e.slice(-6,-4),e.slice(-4,-2),e.slice(-2)]}(e);return new Date(Date.UTC(t[0],t[1]-1,t[2],t[3],t[4],t[5]))}function a(e){return r[e]}function c(e,t){return t.replace(/%./g,(function(t){var n=i[t[1]];return n?n(s(e)):t}))}},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var o=n(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,s=void 0,s=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(s)?s:String(s)),o)}var i,s}var s=JSON;function a(e,t,n,r){return r=r||{},Object(o.a)("POST","/__wb/web-archive/",(function(e){401===e.status?r.userNotLoggedIn&&r.userNotLoggedIn(e):e.status>=400?r.failure&&r.failure(e):r.success&&r.success(e)}),{"Content-Type":"application/json"},s.stringify({url:e,snapshot:t,tags:n||[]})),!1}var c=function(){function e(t,n,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.url=n,this.timestamp=r,t.onclick=this.save.bind(this),document.addEventListener("DOMContentLoaded",(function(){i.enableSaveSnapshot(Object(o.c)("logged-in-user"))}))}var t,n,r;return t=e,(n=[{key:"save",value:function(e){this.start(),a(this.url,this.timestamp,[],{failure:this.failure.bind(this),success:this.success.bind(this)})}},{key:"start",value:function(){this.hide(["wm-save-snapshot-fail","wm-save-snapshot-open","wm-save-snapshot-success"]),this.show(["wm-save-snapshot-in-progress"])}},{key:"failure",value:function(e){401==e.status?this.userNotLoggedIn(e):(this.hide(["wm-save-snapshot-in-progress","wm-save-snapshot-success"]),this.show(["wm-save-snapshot-fail","wm-save-snapshot-open"]),console.log("You have got an error."),console.log("If you think something wrong here please send it to support."),console.log('Response: "'+e.responseText+'"'),console.log('status: "'+e.status+'"'))}},{key:"success",value:function(e){this.hide(["wm-save-snapshot-fail","wm-save-snapshot-in-progress"]),this.show(["wm-save-snapshot-open","wm-save-snapshot-success"])}},{key:"enableSaveSnapshot",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e?(this.show("wm-save-snapshot-open"),this.hide("wm-sign-in")):(this.hide(["wm-save-snapshot-open","wm-save-snapshot-in-progress"]),this.show("wm-sign-in"))}},{key:"show",value:function(e){this.setDisplayStyle(e,"inline-block")}},{key:"hide",value:function(e){this.setDisplayStyle(e,"none")}},{key:"setDisplayStyle",value:function(e,t){var n=this;(Object(o.d)(e)?e:[e]).forEach((function(e){var o=n.el.getRootNode().getElementById(e);o&&(o.style.display=t)}))}}])&&i(t.prototype,n),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()},,,,,,,function(e,t,n){"use strict";var o;n.r(t);var r,i={createElementNS:document.createElementNS};var s=!0;function a(e){!function(e,t,n){if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var r="; expires="+o.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"}(e,"",-1)}var c=n(0),l=n(1),u=window.Date;function f(e,t){return(e=e.toString()).length>=t?e:"00000000".substring(0,t-e.length)+e}function h(e){for(var t=0,n=0;n<e.length;n++)t=Math.max(t,Math.max.apply(null,e[n][1]));if(function(e){for(var t=0,n=1e3,o=0;o<e.length;o++){var r=e[o];t=Math.max(t,Math.max.apply(null,r[1])),n=Math.min(n,Math.min.apply(null,r[1].filter(Boolean)))}return Math.log1p(t)-Math.log1p(n)>3}(e)){var o=[];for(n=0;n<e.length;n++){var r=e[n];o.push([r[0],r[1].map(Math.log1p)])}e=o,t=Math.log1p(t)}return[e,t]}function p(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function m(e,t,n){var o=n("wm-capresources");o.innerHTML="";var r=n("wm-capresources-loading");r.style.display="block";var i=l.c(e).getTime(),s=0;t=window.location.origin+t;var a=[];function u(e,n){var o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"src",i=window.location.origin,s=w(window,e),l=p(s);try{for(l.s();!(o=l.n()).done;){var u=o.value;if(!n||n(u)){var f=Object(c.b)(u,r);f&&!f.startsWith(t)&&f.startsWith(i)&&(f.startsWith("data:")||a.push(f))}}}catch(e){l.e(e)}finally{l.f()}}u("img"),u("frame"),u("iframe",(function(e){return"playback"!==e.id})),u("script"),u("link",(function(e){return"stylesheet"===e.rel}),"href");var f=a.filter((function(e,t,n){return n.indexOf(e)===t}));f.length>0?(s=0,f.map((function(e){e.match("^https?://")&&(s++,Object(c.a)("HEAD",e,(function(e){if(200==e.status){var t=e.getResponseHeader("Memento-Datetime");if(null==t)console.log("%s: no Memento-Datetime",u);else{var n=document.createElement("span"),a=function(e,t){var n=new Date(e).getTime()-t,o="";n<0?(o+="-",n=Math.abs(n)):o+="+";var r=!1;if(n<1e3)return{delta:n,text:"",highlight:r};var i=n,s=Math.floor(n/1e3/60/60/24/30/12);n-=1e3*s*60*60*24*30*12;var a=Math.floor(n/1e3/60/60/24/30);n-=1e3*a*60*60*24*30;var c=Math.floor(n/1e3/60/60/24);n-=1e3*c*60*60*24;var l=Math.floor(n/1e3/60/60);n-=1e3*l*60*60;var u=Math.floor(n/1e3/60);n-=1e3*u*60;var f=Math.floor(n/1e3),h=[];s>1?(h.push(s+" years"),r=!0):1==s&&(h.push(s+" year"),r=!0);a>1?(h.push(a+" months"),r=!0):1==a&&(h.push(a+" month"),r=!0);c>1?h.push(c+" days"):1==c&&h.push(c+" day");l>1?h.push(l+" hours"):1==l&&h.push(l+" hour");u>1?h.push(u+" minutes"):1==u&&h.push(u+" minute");f>1?h.push(f+" seconds"):1==f&&h.push(f+" second");h.length>2&&(h=h.slice(0,2));return{delta:i,text:o+h.join(" "),highlight:r}}(t,i),c=a.highlight?"color:red;":"";n.innerHTML=" "+a.text,n.title=t,n.setAttribute("style",c);var l=e.getResponseHeader("Content-Type"),u=e.responseURL.replace(window.location.origin,""),f=document.createElement("a");f.innerHTML=u.split("/").splice(3).join("/"),f._wm_href=u,f.title=l,f.onmouseover=g,f.onmouseout=b;var h=document.createElement("div");h.setAttribute("data-delta",a.delta),h.appendChild(f),h.append(n),o.appendChild(h);var p=Array.prototype.slice.call(o.childNodes,0);p.sort((function(e,t){return t.getAttribute("data-delta")-e.getAttribute("data-delta")})),o.innerHTML="";for(var d=0,m=p.length;d<m;d++)o.appendChild(p[d])}}0==--s&&(r.style.display="none")})))}))):(o.innerHTML="There are no sub-resources in the page.",r.style.display="none")}function v(e,t){for(var n=t.split("/").splice(6).join("/"),o=e.document.querySelectorAll("img[src$='"+n+"'], iframe[src$='"+n+"'], frame[src$='"+n+"']"),r=Array.prototype.slice.call(o),i=0;i<e.frames.length;i++)try{var s=v(e.frames[i].window,t);r=r.concat(s)}catch(e){}return r}function y(e){return"FRAME"==e.tagName||"IFRAME"==e.tagName?e.contentWindow.document.documentElement:e}function g(e){var t=v(window,e.target.href);if(t.length>0)for(var n=0;n<t.length;n++)y(t[n]).classList.add("wb-highlight")}function b(e){var t=v(window,e.target.href);if(t.length>0)for(var n=0;n<t.length;n++)y(t[n]).classList.remove("wb-highlight")}function w(e,t){for(var n=e.document.getElementsByTagName(t),o=Array.prototype.slice.call(n),r=0;r<e.frames.length;r++)try{var i=w(e.frames[r].window,t);o=o.concat(i)}catch(e){}return o}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(r=o.key,i=void 0,i=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==S(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===S(i)?i:String(i)),o)}var r,i}function _(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function x(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)}function k(e,t,n){e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n)}function O(e,t,n,o){x(o||document,t,(function(t){for(var o,r=t.target||t.srcElement;r&&!(o=C(r,e));)r=r.parentElement;o&&n.call(r,t)}))}var E=function(){function e(t,n){T(this,e),this.input=t,this.source=0,this.minChars=3,this.delay=150,this.offsetLeft=0,this.offsetTop=0,this.cache=!0,this.menuClass="",Object.assign(this,n),this.root=this.input.getRootNode(),this.cache&&(this.cache={}),this.sc=document.createElement("div"),this.sc.className="wb-autocomplete-suggestions "+this.menuClass,this.root.appendChild(this.sc);this.selector;this.autocompleteAttr=t.getAttribute("autocomplete"),t.setAttribute("autocomplete","off"),this.last_val="",this.updateSC=this.updateSC.bind(this),this.blurHandler=this.blurHandler.bind(this),this.keydownHandler=this.keydownHandler.bind(this),this.keyupHandler=this.keyupHandler.bind(this),this.focusHandler=this.focusHandler.bind(this),x(window,"resize",this.updateSC),x(t,"blur",this.blurHandler),x(t,"keydown",this.keydownHandler),x(t,"keyup",this.keyupHandler),this.minChars||x(t,"focus",this.focusHandler);var o=this;O("wb-autocomplete-suggestion","mouseleave",(function(e){var t=o.sc.querySelector(".autocomplete-suggestion.selected");t&&setTimeout((function(){t.className=t.className.replace("selected","")}),20)}),this.sc),O("wb-autocomplete-suggestion","mouseover",(function(e){var t=o.sc.querySelector(".wb-autocomplete-suggestion.selected");t&&(t.className=t.className.replace("selected","")),this.className+=" selected"}),this.sc),O("wb-autocomplete-suggestion","mousedown",(function(e){if(C(this,"wb-autocomplete-suggestion")){var t=this.getAttribute("data-val");o.input.value=t,o.onSelect(e,t,this),o.sc.style.display="none"}}),this.sc)}return _(e,[{key:"unload",value:function(){k(window,"resize",this.updateSC),k(this.input,"blur",this.blurHandler),k(this.input,"focus",this.focusHandler),k(this.input,"keydown",this.keydownHandler),k(this.input,"keyup",this.keyupHandler),this.autocompleteAttr?this.setAttribute("autocomplete",this.autocompleteAttr):this.removeAttribute("autocomplete"),this.root.removeChild(this.sc)}},{key:"updateSC",value:function(e,t){var n=this.input.getBoundingClientRect();if(this.sc.style.left=Math.round(n.left+(window.pageXOffset||document.documentElement.scrollLeft)+this.offsetLeft)+"px",this.sc.style.top=Math.round(n.bottom+(window.pageYOffset||document.documentElement.scrollTop)+this.offsetTop)+"px",this.sc.style.width=Math.round(n.right-n.left)+"px",!e)if(this.sc.style.display="block",this.sc.maxHeight||(this.sc.maxHeight=parseInt((window.getComputedStyle?getComputedStyle(this.sc,null):this.sc.currentStyle).maxHeight)),this.sc.suggestionHeight||(this.sc.suggestionHeight=this.sc.querySelector(".wb-autocomplete-suggestion").offsetHeight),this.sc.suggestionHeight)t||(this.sc.scrollTop=0);else{var o=this.sc.scrollTop,r=t.getBoundingClientRect().top-this.sc.getBoundingClientRect().top;r+this.sc.suggestionHeight-this.sc.maxHeight>0?this.sc.scrollTop=r+this.sc.suggestionHeight+o-this.sc.maxHeight:r<0&&(this.sc.scrollTop=r+o)}}},{key:"blurHandler",value:function(){var e=this;try{var t=this.root.querySelector(".wb-autocomplete-suggestions:hover")}catch(e){t=null}t?this.input!==document.activeElement&&setTimeout((function(){return e.focus()}),20):(this.last_val=this.input.value,this.sc.style.display="none",setTimeout((function(){return e.sc.style.display="none"}),350))}},{key:"suggest",value:function(e){var t=this.input.value;if(this.cache[t]=e,e.length&&t.length>=this.minChars){for(var n="",o=0;o<e.length;o++)n+=this.renderItem(e[o],t);this.sc.innerHTML=n,this.updateSC(0)}else this.sc.style.display="none"}},{key:"keydownHandler",value:function(e){var t,n=this,o=window.event?e.keyCode:e.which;if((40==o||38==o)&&this.sc.innerHTML)return(r=this.sc.querySelector(".wb-autocomplete-suggestion.selected"))?(t=40==o?r.nextSibling:r.previousSibling)?(r.className=r.className.replace("selected",""),t.className+=" selected",this.input.value=t.getAttribute("data-val")):(r.className=r.className.replace("selected",""),this.input.value=this.last_val,t=0):((t=40==o?this.sc.querySelector(".wb-autocomplete-suggestion"):this.sc.childNodes[this.sc.childNodes.length-1]).className+=" selected",this.input.value=t.getAttribute("data-val")),this.updateSC(0,t),!1;if(27==o)this.value=this.last_val,this.sc.style.display="none";else if(13==o||9==o){var r;(r=this.sc.querySelector(".wb-autocomplete-suggestion.selected"))&&"none"!=this.sc.style.display&&(this.onSelect(e,r.getAttribute("data-val"),r),setTimeout((function(){n.sc.style.display="none"}),20))}}},{key:"keyupHandler",value:function(e){var t=this,n=window.event?e.keyCode:e.which;if(!n||(n<35||n>40)&&13!=n&&27!=n){var o=this.input.value;if(o.length>=this.minChars){if(o!=this.last_val){if(this.last_val=o,clearTimeout(this.timer),this.cache){if(o in this.cache)return void this.suggest(this.cache[o]);for(var r=1;r<o.length-this.minChars;r++){var i=o.slice(0,o.length-r);if(i in this.cache&&!this.cache[i].length)return void this.suggest([])}}this.timer=setTimeout((function(){t.source(o,t.suggest.bind(t))}),this.delay)}}else this.last_val=o,this.sc.style.display="none"}}},{key:"focusHandler",value:function(e){this.last_val="\n",this.keyupHandler(e)}},{key:"renderItem",value:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var n=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="wb-autocomplete-suggestion" data-val="'+e+'">'+e.replace(n,"<b>$1</b>")+"</div>"}},{key:"onSelect",value:function(e,t,n){}}]),e}(),H=function(){function e(t,n){T(this,e);var o=t.getRootNode();if(o.querySelector){var r="object"==S(t)?[t]:o.querySelectorAll(t);this.elems=r.map((function(e){return new E(e,n)}))}}return _(e,[{key:"destroy",value:function(){for(;this.elems.length>0;)this.elems.pop().unload()}}]),e}(),j=n(2);function L(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var R,N,U=window.JSON,P=window.open,I=window.Date,D=window.fetch,q=document,B=document,F=function(e){return B.getElementById(e)};var W,X="/static/";function Y(e){R.classList.contains("wm-closed")?(e&&N.classList.add("notice-only"),R.classList.replace("wm-closed","wm-open"),N.style.display="block",m(W,X,F)):(R.classList.replace("wm-open","wm-closed"),N.style.display="none",N.classList.remove("notice-only"))}function $(e,t){var n=F(e);n&&(n.style.visibility=t?"visible":"hidden")}function J(e,t){Object(c.d)(e)||(e=[e]);for(var n=0;n<e.length;n++)$(e[n],t)}var G=/web\/(\d*)\/http:\/\/web\.archive\.org\/screenshot/g;function z(e,t,n){!function(e,t){Object(c.a)("HEAD",e,(function(e){t(e.status<300,e.responseURL)}))}("/web/"+t+"/http://web.archive.org/screenshot/"+e,(function(e,o){if(!e)return n(!1);var r=function(e){var t=G.exec(e);return t&&t[1]?t[1]:null}(o);if(!r)return console.warn("failed to extract timestamp from %s",o),void n(!1);var i=(l.c(r).getTime()-l.c(t).getTime())/1e3;console.log("screen shot delta: "+i+"s"),n(i>0&&i<60,i)}))}window.__wm={init:function(e){!function(){var e=document.cookie.split(";");if(e.length>40)for(var t=0;t<e.length;t++){a(e[t].split("=")[0].trim())}}(),o=e,document.createElementNS=function(e,t){return 0==e.indexOf(o)&&(e=e.substring(o.length).replace(/\/?[0-9]+\//,"")),i.createElementNS.call(this,e,t)}},wombat:function(e,t,n,o,i,a){var c="".concat(n).concat(o,"/"),l=c.replace(/^https?:/,""),u=new URL(e),f={url:e,timestamp:t,prefix:c,coll:o,static_prefix:i,request_ts:t,proxy_magic:"",mod:"",is_framed:!1,is_live:!1,enable_auto_fetch:!0,auto_fetch_worker_prefix:c,wombat_ts:t,wombat_sec:a,wombat_scheme:(u.protocol||"http").replace(/:$/,""),wombat_host:u.host,wombat_opts:{no_rewrite_prefixes:["/__wb/",i,"".concat(n).concat(i.substring(1)),"/web/",c,l,"http://analytics.archive.org/","https://analytics.archive.org/","//analytics.archive.org/"]}};if("undefined"!=typeof _WBWombat){var h=_WBWombat.prototype.rewriteUrl;return _WBWombat.prototype.rewriteUrl=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return s?h.call.apply(h,[this,e].concat(n)):e},(r=_WBWombat(window,f)).actual=!0,window._wb_wombat=r.wombatInit(),window._wb_wombat.actual=!0,r}},rw:function(e){s=e},bt:function(e,t,n,o,r,i,s,a,p,d,m){var v;X=p||"/static/",W=s;var y,g,b,w="/"+(r||"web")+"/",S=l.c(W),T=S.getUTCFullYear(),M=S.getUTCMonth()+1,_=S.getUTCDate(),C=-1,x=-1,k=F("wm-ipp-base");if(k.attachShadow){var O=k.attachShadow({mode:"closed"});for(B=O;k.children.length>0;)O.appendChild(k.children[0]);if(d)for(var E=0;E<d.length;E++){var A=q.createElement("link");A.setAttribute("rel","stylesheet"),A.setAttribute("type","text/css"),A.setAttribute("href",d[E]),O.appendChild(A)}}function $(){var e=F("donato").offsetHeight+(F("wm-ipp-inside").offsetHeight-F("wm-capinfo").offsetHeight);console.debug("adjustHeight: baseHeight=%s",e+"px"),k.style.height=e+"px"}window.top==window.self&&(k.style.display="block");var G=!1,V=!0,K=null===(v=F("donato-if"))||void 0===v?void 0:v.contentWindow,Q=F("donato");if(console.debug("$donato = %o",Q),Q)if(window.top!=window.self)Q.style.display="none",console.debug("hid $donato as window.top != window.self");else{var Z=F("donato-base");window.addEventListener("message",(function(e){if(e.source===K){var t="string"==typeof e.data?U.parse(e.data):e.data;if(console.log("got message %o",t),"set height"==t.event){var n=t.value,o=t.bannerHeight;if("number"!=typeof n||n<=0)return;if(!V)return;if(t.value,G)return;Q.style.height=o+"px",Z.style.height=n+"px",$()}else if("open modal"==t.event)Z.style.height="",document.body.classList.add("wm-modal"),window.scrollTo(0,0),G=!0;else if("close modal"==t.event)Q.style.marginBottom="0px",document.body.classList.remove("wm-modal"),G=!1;else if("hide banner"==t.event){Q.style.height=0,Q.style.visibility="hidden";var r=new I(I.now()+24*t.value*3600*1e3);document.cookie="donation=x; domain=archive.org; path=/; expires="+r.toUTCString(),V=!1,G=!1,0,$()}}}),!1),console.debug("installed message listener to #donato-base: %o",Z)}F("wm-tb-close").addEventListener("click",(function(e){F("wm-ipp-inside").style.display="none",e.preventDefault(),$()}));var ee=F("wm-ipp-sparkline");function te(e){var t="mouseenter"==e.type?1:0;if(t!==y){var n=F("wm-ipp"),o=F("displayYearEl"),r=F("displayMonthEl"),i=F("displayDayEl");t?n.className="hi":(n.className="",o.innerHTML=T,r.innerHTML=l.b(M-1),i.innerHTML=f(_,2)),g.style.display=t?"inline":"none",b.style.display=t?"inline":"none",y=t}}R=F("wm-expand"),N=F("wm-capinfo"),F("wm-graph-anchor")._no_rewrite=!0,(g=q.createElement("div")).className="yt",g.style.display="none",g.style.width=n+"px",g.style.height=t+"px",(b=q.createElement("div")).className="mt",b.style.display="none",b.style.width=o+"px",b.style.height=t+"px",ee.appendChild(g),ee.appendChild(b);var ne=F("wm-sparkline-canvas");ee.onmouseenter=te,ee.onmouseleave=te,ee.onmousemove=function(t){var r,s,c=ee,u=function(e){var t=0;return e.pageX||e.pageY?t=e.pageX:(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft),t}(t),h=(r=c,s=q.documentElement,(void 0!==r.getBoundingClientRect?r.getBoundingClientRect():{top:0,left:0}).left+(window.pageXOffset||s.scrollLeft)-(s.clientLeft||0)),p=Math.min(Math.max(0,u-h),e),d=p%n,m=Math.floor(p/n),v=Math.min(11,Math.floor(d/o)),y=12*m+v,S=d%2==1?15:1,T=f(m+a)+f(v+1,2)+f(S,2)+"000000";F("displayYearEl").innerHTML=m+a,F("displayMonthEl").innerHTML=l.b(v);var M=w+T+"/"+i;if(F("wm-graph-anchor").href=M,C!=m){var _=m*n;g.style.left=_+"px",C=m}if(x!=y){var k=m+y*o+1;b.style.left=k+"px",x=y}};var oe=F("wm-sparkline-canvas");if(oe.getContext&&oe.getContext("2d")){var re="/__wb/sparkline?output=json&url="+encodeURIComponent(i)+(r&&"&collection="+r||"");Object(c.a)("GET",re,(function(n){if(200==n.status){for(var o=U.parse(n.responseText),r=o.years,s=Object.getOwnPropertyNames(r),c=o.years=[],f=0;f<s.length;f++){var p=s[f];r[p]&&c.push([p,r[p]])}!function(e){for(var t=F("wm-nav-captures"),n=0,o=e.years,r=e.first_ts,s=e.last_ts,a=0;a<o.length;a++)for(var c=o[a][1],u=0;u<c.length;u++)n+=c[u];var f='<a class="t" href="'+w+"*/"+i+'" title="See a list of every capture for this URL">'+((""+n).replace(/\B(?=(\d{3})+$)/g,",")+" ")+(n>1?"captures":"capture")+"</a>",h=l.a(r,"%d %b %Y");s!=r&&(h+=" - "+l.a(s,"%d %b %Y")),f+='<div class="r" title="Timespan for captures of this URL">'+h+"</div>",t.innerHTML=f}(o),function(e,t,n,o,r,i,s){var a=o.getContext("2d");if(a){a.fillStyle="#FFF";var c=(new u).getUTCFullYear(),l=t/(c-r+1),f=h(e.years),p=f[0],d=n/f[1];if(i>=r){var m=_(i);a.fillStyle="#FFFFA5",a.fillRect(m,0,l,n)}for(var v=r;v<=c;v++){m=_(v);a.beginPath(),a.moveTo(m,0),a.lineTo(m,n),a.lineWidth=1,a.strokeStyle="#CCC",a.stroke()}s=parseInt(s)-1;for(var y=(l-1)/12,g=0;g<p.length;g++){v=p[g][0];for(var b=p[g][1],w=_(v)+1,S=0;S<12;S++){var T=b[S];if(T>0){var M=Math.ceil(T*d);a.fillStyle=v==i&&S==s?"#EC008C":"#000",a.fillRect(Math.round(w),Math.ceil(n-M),Math.ceil(y),Math.round(M))}w+=y}}}function _(e){return Math.ceil((e-r)*l)+.5}}(o,e,t,oe,a,T,M)}}))}else{var ie=new Image;ie.src="/__wb/sparkline?url="+encodeURIComponent(i)+"&width="+e+"&height="+t+"&selected_year="+T+"&selected_month="+M+(r&&"&collection="+r||""),ie.alt="sparkline",ie.width=e,ie.height=t,ie.id="sparklineImgId",ie.border="0",ne.parentNode.replaceChild(ie,ne)}function se(e){for(var t=[],n=e.length,o=0;o<n;o++)void 0===e[o].excluded&&t.push(e[o].display_name);return t}F("wm-share-facebook").onclick=function(e){var t=this.dataset.url;return P("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t),"","height=400,width=600"),e.preventDefault(),!1},F("wm-share-twitter").onclick=function(e){var t=this.dataset.url;return P("https://twitter.com/intent/tweet?text="+encodeURIComponent(t)+"&via=internetarchive","","height=446,width=600"),e.preventDefault(),!1},new H(F("wmtbURL"),{delay:400,source:function(e,t){Object(c.a)("GET","/__wb/search/host?q="+encodeURIComponent(e),(function(n){if(void 0!==(n=U.parse(n.response)).hosts&&n.hosts.length>0){var o=se(n.hosts);t(o)}else void 0!==n.isUrl&&!0===n.isUrl&&void 0===n.excluded?t([e]):Object(c.a)("GET","/__wb/search/anchor?q="+encodeURIComponent(e),(function(e){if(void 0!==(e=U.parse(e.response))&&e.length>0){var n=se(e.slice(0,5));t(n)}}))}))},onSelect:function(e,t,n){F("wmtb").submit()}}),F("wmtb").onsubmit=function(e){var t=F("wmtbURL").value;if(0!==t.indexOf("http://")&&0!==t.indexOf("https://")&&!t.match(/[\w\.]{2,256}\.[a-z]{2,4}/gi))return document.location.href="/web/*/"+F("wmtbURL").value,e.preventDefault(),!1},function(e,t){z(e,t,(function(e,t){e?(F("wm-screenshot").title="screen shot (delta: "+t+"s)",J("wm-screenshot",!0)):J("wm-screenshot",!1)}))}(i,W),m&&function(e,t){!function(e,t,n){var o="/web/"+t+"id_/http://wayback-metadata.archive.org/youtube-dl/"+e;Object(c.a)("GET",o,n)}(e,t,(function(e){if(e.status<300){var t=U.parse(e.responseText);J("wm-video",!0),F("wm-video").href=t.url,F("wm-video").title="Video: "+t.title}else J("wm-video",!1)}))}(i,W);var ae=F("wm-capinfo-notice");if(ae)if("api"==ae.getAttribute("source")){var ce="https://wayback-api.archive.org/services/context/notices?url=".concat(encodeURIComponent(i),"&timestamp=").concat(W);D(ce,{credentials:"omit"}).then((function(e){return e.json()})).then((function(e){var t=e.status,n=e.notices;if("success"==t&&(null==n?void 0:n.length)>0)try{var o=document.createElement("div");o.setAttribute("style","background-color:#666;color:#fff;font-weight:bold;text-align:center"),o.textContent="NOTICE";var r=document.createElement("div");r.className="wm-capinfo-content";var i,s=L(n);try{for(s.s();!(i=s.n()).done;){var a=i.value;if("string"==typeof a.notice){var c=document.createElement("div");c.innerHTML=a.notice,r.appendChild(c)}}}catch(e){s.e(e)}finally{s.f()}ae.appendChild(o),ae.appendChild(r),Y(!0)}catch(e){console.error("failed to build content of %o - maybe notice text is malformed: %s",ae,n)}}))}else Y(!0);new j.a(F("wm-save-snapshot-open"),i,W)},ex:function(e){e.stopPropagation(),Y(!1)},ajax:c.a,sp:function(){return X}}}]);
// @license-end