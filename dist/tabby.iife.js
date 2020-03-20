var Tabby=function(t){"use strict";function a(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c="data-tabby-active",o="data-tabby-bar",s="data-tabby-content",u=function(t){var i=[t],e=t.nextElementSibling;if(!e)return i;for(;e;)i.push(e),e=e.nextElementSibling;return i},l=function(t){t.style.display="block"},h=function(t){t.style.display="none"},e=function(){function e(t,i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.animation=i.animation,this.index=0,this.items=[],this.initTabs()}var t,i,n;return t=e,(i=[{key:"doSwitch",value:function(t){if(!this.dontUpdate(t)){var i,e,n,a,r=this.items[this.index][1],o=this.items[t][1],s=this.items[this.index][0],u=this.items[t][0];this.animation?(i=function(){var i,e,n,a;h(r),l(o),e=o,n=0,a=.05,requestAnimationFrame(function t(){n<1?(n+=a,e.style.opacity=n.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),i&&i(e))}),s.removeAttribute(c),u.setAttribute(c,"")},e=r,n=1,a=.05,requestAnimationFrame(function t(){0<n?(n-=a,e.style.opacity=n.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),i&&i(e))})):(h(r),l(o),s.removeAttribute(c),u.setAttribute(c,"")),this.index=t}}},{key:"next",value:function(){this.doSwitch(this.index+1)}},{key:"previous",value:function(){this.doSwitch(this.index-1)}},{key:"dontUpdate",value:function(t){return t<0||t>this.items.length-1||t===this.index}},{key:"destroy",value:function(){var t=this.items[this.index][0],i=this.items[this.index][1];h(i),t.removeAttribute(c),i.removeAttribute(c)}},{key:"initTabs",value:function(){var a=this,t=u(this.container.querySelector("[".concat(o,"]"))),r=u(this.container.querySelector("[".concat(s,"]")));t.forEach(function(t,i){var e=t.getAttribute(o),n=r.filter(function(t){return t.getAttribute(s)===e})[0];0===i?(l(n),n.style.opacity="1",t.setAttribute(c,"")):(h(n),a.animation&&(n.style.opacity="0")),a.items.push([t,n]),t.addEventListener("click",function(){a.doSwitch(i)})})}}])&&a(t.prototype,i),n&&a(t,n),e}();return t.version="3.1",t.init=function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return[].slice.call(document.querySelectorAll("[data-tabby]")).map(function(t){return new e(t,i)})},t.Tabby=e,t}({});
