var Tabby=function(t){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u="data-tabby-active",o="data-tabby-bar",c="data-tabby-content",s=function(t){var e=[t],n=t.nextElementSibling;if(!n)return e;for(;n;)e.push(n),n=n.nextElementSibling;return e},l=function(t){t.style.display="block"},f=function(t){t.style.display="none"},n=function(){function n(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=t,this.animation=e.animation||"fade",this.index=0,this.items=[],this.initTabs()}var t,e,i;return t=n,(e=[{key:"doSwitch",value:function(t){var e,n,i,a,r=this.items[this.index][1],o=this.items[t][1],c=this.items[this.index][0],s=this.items[t][0];this.animation?(e=r,n=function(t){var e,n,i,a;f(r),l(o),e=o,i=0,a=.05,requestAnimationFrame(function t(){i<1?(i+=a,e.style.opacity=i.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),n&&n(e))}),c.removeAttribute(u),s.setAttribute(u,"")},i=1,a=.05,requestAnimationFrame(function t(){0<i?(i-=a,e.style.opacity=i.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),n&&n(e))})):(f(r),l(o),c.removeAttribute(u),s.setAttribute(u,"")),this.index=t}},{key:"initTabs",value:function(){var a=this,t=s(this.container.querySelector("[".concat(o,"]"))),r=s(this.container.querySelector("[".concat(c,"]")));t.forEach(function(t,e){var n=t.getAttribute(o),i=r.filter(function(t){return t.getAttribute(c)===n})[0];i.style.opacity=0===e?(i.style.display="block","1"):(i.style.display="none","0"),a.items.push([t,i]),t.addEventListener("click",function(){a.doSwitch(e)})})}}])&&a(t.prototype,e),i&&a(t,i),n}();return t.version="3.0.0-beta",t.init=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=[].slice.call(document.querySelectorAll("[data-tabby]"));if(!(t.lenght<1))return t.map(function(t){return new n(t,e)})},t}({});