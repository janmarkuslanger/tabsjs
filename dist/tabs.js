!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tabs=e():t.Tabs=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.init=function(){document.querySelector("[data-tabs]")&&[].slice.call(document.querySelectorAll("[data-tabs]")).forEach(function(t){!function(t){[].slice.call(t.querySelectorAll("[data-tabs-item]")).forEach(function(e){e.addEventListener("click",function(){null===e.getAttribute("data-tabs-active")&&function(t,e){!function(t){var e=t.querySelector("[data-tabs-item][data-tabs-active]"),n=t.querySelector("[data-tabs-content][data-tabs-active]");e&&e.removeAttribute("data-tabs-active"),n&&n.removeAttribute("data-tabs-active")}(e),t.setAttribute("data-tabs-active",""),e.querySelector('[data-tabs-content="'+t.getAttribute("data-tabs-item")+'"]').setAttribute("data-tabs-active","")}(e,t)})})}(t)})}}])});