parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Hmdm":[function(require,module,exports) {
$.fn.easeScroll=function(e){!function(){function t(){h.keyboardSupport&&l("keydown",r)}function a(){if(document.body){var e=document.body,a=document.documentElement,o=window.innerHeight,r=e.scrollHeight;if(y=document.compatMode.indexOf("CSS")>=0?a:e,f=e,t(),b=!0,top!=self)g=!0;else if(r>o&&(e.offsetHeight<=o||a.offsetHeight<=o)){var n=!1;if(a.style.height="auto",setTimeout(function(){n||a.scrollHeight==document.height||(n=!0,setTimeout(function(){a.style.height=document.height+"px",n=!1},100))},10),y.offsetHeight<=o){var i=document.createElement("div");i.style.clear="both",e.appendChild(i)}}h.fixedBackground||w||(e.style.backgroundAttachment="scroll",a.style.backgroundAttachment="scroll")}}function o(e,t,a,o){if(o||(o=1e3),function(e,t){e=e>0?1:-1,t=t>0?1:-1,(v.x!==e||v.y!==t)&&(v.x=e,v.y=t,x=[],H=0)}(t,a),1!=h.accelerationMax){var r=+new Date-H;if(r<h.accelerationDelta){var n=(1+30/r)/2;n>1&&(n=Math.min(n,h.accelerationMax),t*=n,a*=n)}H=+new Date}if(x.push({x:t,y:a,lastX:0>t?.99:-.99,lastY:0>a?.99:-.99,start:+new Date}),!D){var i=e===document.body;A(function r(){for(var n=+new Date,l=0,c=0,u=0;u<x.length;u++){var s=x[u],f=n-s.start,p=f>=h.animationTime,m=p?1:f/h.animationTime;h.pulseAlgorithm&&(m=d(m));var w=s.x*m-s.lastX>>0,g=s.y*m-s.lastY>>0;l+=w,c+=g,s.lastX+=w,s.lastY+=g,p&&(x.splice(u,1),u--)}i?window.scrollBy(l,c):(l&&(e.scrollLeft+=l),c&&(e.scrollTop+=c)),t||a||(x=[]),x.length?A(r,e,o/h.frameRate+1):D=!1},e,0),D=!0}}function r(e){var t=e.target,a=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==k.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||a)return!0;if(c(t,"button")&&e.keyCode===k.spacebar)return!0;var r=0,n=0,l=i(f),u=l.clientHeight;switch(l==document.body&&(u=window.innerHeight),e.keyCode){case k.up:n=-h.arrowScroll;break;case k.down:n=h.arrowScroll;break;case k.spacebar:n=-(e.shiftKey?1:-1)*u*.9;break;case k.pageup:n=.9*-u;break;case k.pagedown:n=.9*u;break;case k.home:n=-l.scrollTop;break;case k.end:var s=l.scrollHeight-l.scrollTop-u;n=s>0?s+10:0;break;case k.left:r=-h.arrowScroll;break;case k.right:r=h.arrowScroll;break;default:return!0}o(l,r,n),e.preventDefault()}function n(e,t){for(var a=e.length;a--;)M[z(e[a])]=t;return t}function i(e){var t=[],a=y.scrollHeight;do{var o=M[z(e)];if(o)return n(t,o);if(t.push(e),a===e.scrollHeight){if(!g||y.clientHeight+10<a)return n(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return n(t,e)}while(e=e.parentNode)}function l(e,t,a){window.addEventListener(e,t,a||!1)}function c(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function u(e,t){return Math.floor(e/t)==e/t}function s(e){var t,a;return 1>(e*=h.pulseScale)?t=e-(1-Math.exp(-e)):(e-=1,t=(a=Math.exp(-1))+(1-Math.exp(-e))*(1-a)),t*h.pulseNormalize}function d(e){return e>=1?1:0>=e?0:(1==h.pulseNormalize&&(h.pulseNormalize/=s(1)),s(e))}var f,p=$.extend({frameRate:60,animationTime:1e3,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0},e),m={frameRate:p.frameRate,animationTime:p.animationTime,stepSize:p.stepSize,pulseAlgorithm:p.pulseAlgorithm,pulseScale:p.pulseScale,pulseNormalize:p.pulseNormalize,accelerationDelta:p.accelerationDelta,accelerationMax:p.accelerationMax,keyboardSupport:p.keyboardSupport,arrowScroll:p.arrowScroll,touchpadSupport:p.touchpadSupport,fixedBackground:p.fixedBackground,excluded:""},h=m,w=!1,g=!1,v={x:0,y:0},b=!1,y=document.documentElement,S=[120,120,120],k={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},x=(h=m,[]),D=!1,H=+new Date,M={};setInterval(function(){M={}},1e4);var T,z=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),A=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,a){window.setTimeout(e,a||1e3/60)},C=/chrome|iPad/i.test(window.navigator.userAgent);"onmousewheel"in document&&C&&(l("mousedown",function(e){f=e.target}),l("mousewheel",function(e){b||a();var t=e.target,r=i(t);if(!r||e.defaultPrevented||c(f,"embed")||c(t,"embed")&&/\.pdf/i.test(t.src))return!0;var n=e.wheelDeltaX||0,l=e.wheelDeltaY||0;return n||l||(l=e.wheelDelta||0),!(h.touchpadSupport||!function(e){if(e){e=Math.abs(e),S.push(e),S.shift(),clearTimeout(T);var t=S[0]==S[1]&&S[1]==S[2],a=u(S[0],120)&&u(S[1],120)&&u(S[2],120);return!(t||a)}}(l))||(Math.abs(n)>1.2&&(n*=h.stepSize/120),Math.abs(l)>1.2&&(l*=h.stepSize/120),o(r,-n,-l),void e.preventDefault())}),l("load",a))}()};
},{}]},{},["Hmdm"], null)
//# sourceMappingURL=jquery.easeScroll.3ea2ea7f.js.map