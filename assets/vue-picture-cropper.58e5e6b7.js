import{d as di,o as li,Q as ui,b as mi}from"./@vue.e7449577.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Dt(g,v,x,f){return new(x||(x=Promise))(function(m,z){function M(N){try{F(f.next(N))}catch(w){z(w)}}function I(N){try{F(f.throw(N))}catch(w){z(w)}}function F(N){var w;N.done?m(N.value):(w=N.value,w instanceof x?w:new x(function(dt){dt(w)})).then(M,I)}F((f=f.apply(g,v||[])).next())})}function kt(g,v){var x,f,m,z,M={label:0,sent:function(){if(1&m[0])throw m[1];return m[1]},trys:[],ops:[]};return z={next:I(0),throw:I(1),return:I(2)},typeof Symbol=="function"&&(z[Symbol.iterator]=function(){return this}),z;function I(F){return function(N){return function(w){if(x)throw new TypeError("Generator is already executing.");for(;M;)try{if(x=1,f&&(m=2&w[0]?f.return:w[0]?f.throw||((m=f.return)&&m.call(f),0):f.next)&&!(m=m.call(f,w[1])).done)return m;switch(f=0,m&&(w=[2&w[0],m.value]),w[0]){case 0:case 1:m=w;break;case 4:return M.label++,{value:w[1],done:!1};case 5:M.label++,f=w[1],w=[0];continue;case 7:w=M.ops.pop(),M.trys.pop();continue;default:if(m=M.trys,!((m=m.length>0&&m[m.length-1])||w[0]!==6&&w[0]!==2)){M=0;continue}if(w[0]===3&&(!m||w[1]>m[0]&&w[1]<m[3])){M.label=w[1];break}if(w[0]===6&&M.label<m[1]){M.label=m[1],m=w;break}if(m&&M.label<m[2]){M.label=m[2],M.ops.push(w);break}m[2]&&M.ops.pop(),M.trys.pop();continue}w=v.call(g,M)}catch(dt){w=[6,dt],f=0}finally{x=m=0}if(5&w[0])throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}([F,N])}}}var gi,Bt,fi=(function(g,v){/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */g.exports=function(){function x(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);i&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var e=arguments[i]!=null?arguments[i]:{};i%2?x(Object(e),!0).forEach(function(n){F(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function m(t){return(m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(t)}function z(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function M(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function I(t,i,e){return i&&M(t.prototype,i),e&&M(t,e),t}function F(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function N(t){return w(t)||dt(t)||Be(t)||Ae()}function w(t){if(Array.isArray(t))return At(t)}function dt(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Be(t,i){if(t){if(typeof t=="string")return At(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?At(t,i):void 0}}function At(t,i){(i==null||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bt=typeof window!="undefined"&&window.document!==void 0,Q=bt?window:{},Tt=!(!bt||!Q.document.documentElement)&&"ontouchstart"in Q.document.documentElement,Ot=!!bt&&"PointerEvent"in Q,D="cropper",Et="all",Ft="crop",Qt="move",$t="zoom",tt="e",et="w",ot="s",Z="n",lt="ne",ut="nw",mt="se",gt="sw",zt="".concat(D,"-crop"),Zt="".concat(D,"-disabled"),j="".concat(D,"-hidden"),Gt="".concat(D,"-hide"),Te="".concat(D,"-invisible"),xt="".concat(D,"-modal"),Ht="".concat(D,"-move"),ft="".concat(D,"Action"),yt="".concat(D,"Preview"),Rt="crop",Vt="move",Kt="none",St="crop",Nt="cropend",Wt="cropmove",Lt="cropstart",Jt="dblclick",Oe=Tt?"touchstart":"mousedown",Ee=Tt?"touchmove":"mousemove",ze=Tt?"touchend touchcancel":"mouseup",te=Ot?"pointerdown":Oe,ee=Ot?"pointermove":Ee,ie=Ot?"pointerup pointercancel":ze,ne="ready",ae="resize",re="wheel",jt="zoom",oe="image/jpeg",He=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Re=/^data:/,Se=/^data:image\/jpeg;base64,/,Ne=/^img|canvas$/i,he=200,se=100,ce={viewMode:0,dragMode:Rt,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:he,minContainerHeight:se,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},We='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',Le=Number.isNaN||Q.isNaN;function b(t){return typeof t=="number"&&!Le(t)}var pe=function(t){return t>0&&t<1/0};function Xt(t){return t===void 0}function it(t){return m(t)==="object"&&t!==null}var je=Object.prototype.hasOwnProperty;function ht(t){if(!it(t))return!1;try{var i=t.constructor,e=i.prototype;return i&&e&&je.call(e,"isPrototypeOf")}catch(n){return!1}}function X(t){return typeof t=="function"}var Xe=Array.prototype.slice;function de(t){return Array.from?Array.from(t):Xe.call(t)}function E(t,i){return t&&X(i)&&(Array.isArray(t)||b(t.length)?de(t).forEach(function(e,n){i.call(t,e,n,t)}):it(t)&&Object.keys(t).forEach(function(e){i.call(t,t[e],e,t)})),t}var k=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),n=1;n<i;n++)e[n-1]=arguments[n];return it(t)&&e.length>0&&e.forEach(function(a){it(a)&&Object.keys(a).forEach(function(r){t[r]=a[r]})}),t},Ye=/\.\d*(?:0|9){12}\d*$/;function st(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Ye.test(t)?Math.round(t*i)/i:t}var Ie=/^width|height|left|top|marginLeft|marginTop$/;function G(t,i){var e=t.style;E(i,function(n,a){Ie.test(a)&&b(n)&&(n="".concat(n,"px")),e[a]=n})}function Pe(t,i){return t.classList?t.classList.contains(i):t.className.indexOf(i)>-1}function H(t,i){if(i)if(b(t.length))E(t,function(n){H(n,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className="".concat(e," ").concat(i)):t.className=i}}function $(t,i){i&&(b(t.length)?E(t,function(e){$(e,i)}):t.classList?t.classList.remove(i):t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function ct(t,i,e){i&&(b(t.length)?E(t,function(n){ct(n,i,e)}):e?H(t,i):$(t,i))}var Ue=/([a-z\d])([A-Z])/g;function Yt(t){return t.replace(Ue,"$1-$2").toLowerCase()}function It(t,i){return it(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-".concat(Yt(i)))}function vt(t,i,e){it(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-".concat(Yt(i)),e)}function qe(t,i){if(it(t[i]))try{delete t[i]}catch(e){t[i]=void 0}else if(t.dataset)try{delete t.dataset[i]}catch(e){t.dataset[i]=void 0}else t.removeAttribute("data-".concat(Yt(i)))}var le=/\s\s*/,ue=function(){var t=!1;if(bt){var i=!1,e=function(){},n=Object.defineProperty({},"once",{get:function(){return t=!0,i},set:function(a){i=a}});Q.addEventListener("test",e,n),Q.removeEventListener("test",e,n)}return t}();function _(t,i,e){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=e;i.trim().split(le).forEach(function(r){if(!ue){var o=t.listeners;o&&o[r]&&o[r][e]&&(a=o[r][e],delete o[r][e],Object.keys(o[r]).length===0&&delete o[r],Object.keys(o).length===0&&delete t.listeners)}t.removeEventListener(r,a,n)})}function q(t,i,e){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=e;i.trim().split(le).forEach(function(r){if(n.once&&!ue){var o=t.listeners,s=o===void 0?{}:o;a=function(){delete s[r][e],t.removeEventListener(r,a,n);for(var c=arguments.length,h=new Array(c),d=0;d<c;d++)h[d]=arguments[d];e.apply(t,h)},s[r]||(s[r]={}),s[r][e]&&t.removeEventListener(r,s[r][e],n),s[r][e]=a,t.listeners=s}t.addEventListener(r,a,n)})}function pt(t,i,e){var n;return X(Event)&&X(CustomEvent)?n=new CustomEvent(i,{detail:e,bubbles:!0,cancelable:!0}):(n=document.createEvent("CustomEvent")).initCustomEvent(i,!0,!0,e),t.dispatchEvent(n)}function me(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}var Pt=Q.location,_e=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function ge(t){var i=t.match(_e);return i!==null&&(i[1]!==Pt.protocol||i[2]!==Pt.hostname||i[3]!==Pt.port)}function fe(t){var i="timestamp=".concat(new Date().getTime());return t+(t.indexOf("?")===-1?"?":"&")+i}function wt(t){var i=t.rotate,e=t.scaleX,n=t.scaleY,a=t.translateX,r=t.translateY,o=[];b(a)&&a!==0&&o.push("translateX(".concat(a,"px)")),b(r)&&r!==0&&o.push("translateY(".concat(r,"px)")),b(i)&&i!==0&&o.push("rotate(".concat(i,"deg)")),b(e)&&e!==1&&o.push("scaleX(".concat(e,")")),b(n)&&n!==1&&o.push("scaleY(".concat(n,")"));var s=o.length?o.join(" "):"none";return{WebkitTransform:s,msTransform:s,transform:s}}function Fe(t){var i=f({},t),e=0;return E(t,function(n,a){delete i[a],E(i,function(r){var o=Math.abs(n.startX-r.startX),s=Math.abs(n.startY-r.startY),c=Math.abs(n.endX-r.endX),h=Math.abs(n.endY-r.endY),d=Math.sqrt(o*o+s*s),p=(Math.sqrt(c*c+h*h)-d)/d;Math.abs(p)>Math.abs(e)&&(e=p)})}),e}function Mt(t,i){var e=t.pageX,n=t.pageY,a={endX:e,endY:n};return i?a:f({startX:e,startY:n},a)}function Qe(t){var i=0,e=0,n=0;return E(t,function(a){var r=a.startX,o=a.startY;i+=r,e+=o,n+=1}),{pageX:i/=n,pageY:e/=n}}function V(t){var i=t.aspectRatio,e=t.height,n=t.width,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"contain",r=pe(n),o=pe(e);if(r&&o){var s=e*i;a==="contain"&&s>n||a==="cover"&&s<n?e=n/i:n=e*i}else r?e=n/i:o&&(n=e*i);return{width:n,height:e}}function $e(t){var i=t.width,e=t.height,n=t.degree;if((n=Math.abs(n)%180)==90)return{width:e,height:i};var a=n%90*Math.PI/180,r=Math.sin(a),o=Math.cos(a),s=i*o+e*r,c=i*r+e*o;return n>90?{width:c,height:s}:{width:s,height:c}}function Ze(t,i,e,n){var a=i.aspectRatio,r=i.naturalWidth,o=i.naturalHeight,s=i.rotate,c=s===void 0?0:s,h=i.scaleX,d=h===void 0?1:h,p=i.scaleY,u=p===void 0?1:p,y=e.aspectRatio,B=e.naturalWidth,C=e.naturalHeight,T=n.fillColor,W=T===void 0?"transparent":T,R=n.imageSmoothingEnabled,O=R===void 0||R,L=n.imageSmoothingQuality,l=L===void 0?"low":L,A=n.maxWidth,Y=A===void 0?1/0:A,K=n.maxHeight,J=K===void 0?1/0:K,nt=n.minWidth,at=nt===void 0?0:nt,P=n.minHeight,U=P===void 0?0:P,rt=document.createElement("canvas"),S=rt.getContext("2d"),Ct=V({aspectRatio:y,width:Y,height:J}),be=V({aspectRatio:y,width:at,height:U},"cover"),Ut=Math.min(Ct.width,Math.max(be.width,B)),qt=Math.min(Ct.height,Math.max(be.height,C)),xe=V({aspectRatio:a,width:Y,height:J}),ye=V({aspectRatio:a,width:at,height:U},"cover"),Me=Math.min(xe.width,Math.max(ye.width,r)),Ce=Math.min(xe.height,Math.max(ye.height,o)),ci=[-Me/2,-Ce/2,Me,Ce];return rt.width=st(Ut),rt.height=st(qt),S.fillStyle=W,S.fillRect(0,0,Ut,qt),S.save(),S.translate(Ut/2,qt/2),S.rotate(c*Math.PI/180),S.scale(d,u),S.imageSmoothingEnabled=O,S.imageSmoothingQuality=l,S.drawImage.apply(S,[t].concat(N(ci.map(function(pi){return Math.floor(st(pi))})))),S.restore(),rt}var ve=String.fromCharCode;function Ge(t,i,e){var n="";e+=i;for(var a=i;a<e;a+=1)n+=ve(t.getUint8(a));return n}var Ve=/^data:.*,/;function Ke(t){var i=t.replace(Ve,""),e=atob(i),n=new ArrayBuffer(e.length),a=new Uint8Array(n);return E(a,function(r,o){a[o]=e.charCodeAt(o)}),n}function Je(t,i){for(var e=[],n=8192,a=new Uint8Array(t);a.length>0;)e.push(ve.apply(null,de(a.subarray(0,n)))),a=a.subarray(n);return"data:".concat(i,";base64,").concat(btoa(e.join("")))}function ti(t){var i,e=new DataView(t);try{var n,a,r;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var o=e.byteLength,s=2;s+1<o;){if(e.getUint8(s)===255&&e.getUint8(s+1)===225){a=s;break}s+=1}if(a){var c=a+10;if(Ge(e,a+4,4)==="Exif"){var h=e.getUint16(c);if(((n=h===18761)||h===19789)&&e.getUint16(c+2,n)===42){var d=e.getUint32(c+4,n);d>=8&&(r=c+d)}}}if(r){var p,u,y=e.getUint16(r,n);for(u=0;u<y;u+=1)if(p=r+12*u+2,e.getUint16(p,n)===274){p+=8,i=e.getUint16(p,n),e.setUint16(p,1,n);break}}}catch(B){i=1}return i}function ei(t){var i=0,e=1,n=1;switch(t){case 2:e=-1;break;case 3:i=-180;break;case 4:n=-1;break;case 5:i=90,n=-1;break;case 6:i=90;break;case 7:i=90,e=-1;break;case 8:i=-90}return{rotate:i,scaleX:e,scaleY:n}}var ii={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,i=this.options,e=this.container,n=this.cropper,a=Number(i.minContainerWidth),r=Number(i.minContainerHeight);H(n,j),$(t,j);var o={width:Math.max(e.offsetWidth,a>=0?a:he),height:Math.max(e.offsetHeight,r>=0?r:se)};this.containerData=o,G(n,{width:o.width,height:o.height}),H(t,j),$(n,j)},initCanvas:function(){var t=this.containerData,i=this.imageData,e=this.options.viewMode,n=Math.abs(i.rotate)%180==90,a=n?i.naturalHeight:i.naturalWidth,r=n?i.naturalWidth:i.naturalHeight,o=a/r,s=t.width,c=t.height;t.height*o>t.width?e===3?s=t.height*o:c=t.width/o:e===3?c=t.width/o:s=t.height*o;var h={aspectRatio:o,naturalWidth:a,naturalHeight:r,width:s,height:c};this.canvasData=h,this.limited=e===1||e===2,this.limitCanvas(!0,!0),h.width=Math.min(Math.max(h.width,h.minWidth),h.maxWidth),h.height=Math.min(Math.max(h.height,h.minHeight),h.maxHeight),h.left=(t.width-h.width)/2,h.top=(t.height-h.height)/2,h.oldLeft=h.left,h.oldTop=h.top,this.initialCanvasData=k({},h)},limitCanvas:function(t,i){var e=this.options,n=this.containerData,a=this.canvasData,r=this.cropBoxData,o=e.viewMode,s=a.aspectRatio,c=this.cropped&&r;if(t){var h=Number(e.minCanvasWidth)||0,d=Number(e.minCanvasHeight)||0;o>1?(h=Math.max(h,n.width),d=Math.max(d,n.height),o===3&&(d*s>h?h=d*s:d=h/s)):o>0&&(h?h=Math.max(h,c?r.width:0):d?d=Math.max(d,c?r.height:0):c&&(h=r.width,(d=r.height)*s>h?h=d*s:d=h/s));var p=V({aspectRatio:s,width:h,height:d});h=p.width,d=p.height,a.minWidth=h,a.minHeight=d,a.maxWidth=1/0,a.maxHeight=1/0}if(i)if(o>(c?0:1)){var u=n.width-a.width,y=n.height-a.height;a.minLeft=Math.min(0,u),a.minTop=Math.min(0,y),a.maxLeft=Math.max(0,u),a.maxTop=Math.max(0,y),c&&this.limited&&(a.minLeft=Math.min(r.left,r.left+(r.width-a.width)),a.minTop=Math.min(r.top,r.top+(r.height-a.height)),a.maxLeft=r.left,a.maxTop=r.top,o===2&&(a.width>=n.width&&(a.minLeft=Math.min(0,u),a.maxLeft=Math.max(0,u)),a.height>=n.height&&(a.minTop=Math.min(0,y),a.maxTop=Math.max(0,y))))}else a.minLeft=-a.width,a.minTop=-a.height,a.maxLeft=n.width,a.maxTop=n.height},renderCanvas:function(t,i){var e=this.canvasData,n=this.imageData;if(i){var a=$e({width:n.naturalWidth*Math.abs(n.scaleX||1),height:n.naturalHeight*Math.abs(n.scaleY||1),degree:n.rotate||0}),r=a.width,o=a.height,s=e.width*(r/e.naturalWidth),c=e.height*(o/e.naturalHeight);e.left-=(s-e.width)/2,e.top-=(c-e.height)/2,e.width=s,e.height=c,e.aspectRatio=r/o,e.naturalWidth=r,e.naturalHeight=o,this.limitCanvas(!0,!1)}(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCanvas(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,G(this.canvas,k({width:e.width,height:e.height},wt({translateX:e.left,translateY:e.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var i=this.canvasData,e=this.imageData,n=e.naturalWidth*(i.width/i.naturalWidth),a=e.naturalHeight*(i.height/i.naturalHeight);k(e,{width:n,height:a,left:(i.width-n)/2,top:(i.height-a)/2}),G(this.image,k({width:e.width,height:e.height},wt(k({translateX:e.left,translateY:e.top},e)))),t&&this.output()},initCropBox:function(){var t=this.options,i=this.canvasData,e=t.aspectRatio||t.initialAspectRatio,n=Number(t.autoCropArea)||.8,a={width:i.width,height:i.height};e&&(i.height*e>i.width?a.height=a.width/e:a.width=a.height*e),this.cropBoxData=a,this.limitCropBox(!0,!0),a.width=Math.min(Math.max(a.width,a.minWidth),a.maxWidth),a.height=Math.min(Math.max(a.height,a.minHeight),a.maxHeight),a.width=Math.max(a.minWidth,a.width*n),a.height=Math.max(a.minHeight,a.height*n),a.left=i.left+(i.width-a.width)/2,a.top=i.top+(i.height-a.height)/2,a.oldLeft=a.left,a.oldTop=a.top,this.initialCropBoxData=k({},a)},limitCropBox:function(t,i){var e=this.options,n=this.containerData,a=this.canvasData,r=this.cropBoxData,o=this.limited,s=e.aspectRatio;if(t){var c=Number(e.minCropBoxWidth)||0,h=Number(e.minCropBoxHeight)||0,d=o?Math.min(n.width,a.width,a.width+a.left,n.width-a.left):n.width,p=o?Math.min(n.height,a.height,a.height+a.top,n.height-a.top):n.height;c=Math.min(c,n.width),h=Math.min(h,n.height),s&&(c&&h?h*s>c?h=c/s:c=h*s:c?h=c/s:h&&(c=h*s),p*s>d?p=d/s:d=p*s),r.minWidth=Math.min(c,d),r.minHeight=Math.min(h,p),r.maxWidth=d,r.maxHeight=p}i&&(o?(r.minLeft=Math.max(0,a.left),r.minTop=Math.max(0,a.top),r.maxLeft=Math.min(n.width,a.left+a.width)-r.width,r.maxTop=Math.min(n.height,a.top+a.height)-r.height):(r.minLeft=0,r.minTop=0,r.maxLeft=n.width-r.width,r.maxTop=n.height-r.height))},renderCropBox:function(){var t=this.options,i=this.containerData,e=this.cropBoxData;(e.width>e.maxWidth||e.width<e.minWidth)&&(e.left=e.oldLeft),(e.height>e.maxHeight||e.height<e.minHeight)&&(e.top=e.oldTop),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),this.limitCropBox(!1,!0),e.left=Math.min(Math.max(e.left,e.minLeft),e.maxLeft),e.top=Math.min(Math.max(e.top,e.minTop),e.maxTop),e.oldLeft=e.left,e.oldTop=e.top,t.movable&&t.cropBoxMovable&&vt(this.face,ft,e.width>=i.width&&e.height>=i.height?Qt:Et),G(this.cropBox,k({width:e.width,height:e.height},wt({translateX:e.left,translateY:e.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),pt(this.element,St,this.getData())}},ni={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,n=i?this.crossOriginUrl:this.url,a=t.alt||"The image to preview",r=document.createElement("img");if(i&&(r.crossOrigin=i),r.src=n,r.alt=a,this.viewBox.appendChild(r),this.viewBoxImage=r,e){var o=e;typeof e=="string"?o=t.ownerDocument.querySelectorAll(e):e.querySelector&&(o=[e]),this.previews=o,E(o,function(s){var c=document.createElement("img");vt(s,yt,{width:s.offsetWidth,height:s.offsetHeight,html:s.innerHTML}),i&&(c.crossOrigin=i),c.src=n,c.alt=a,c.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',s.innerHTML="",s.appendChild(c)})}},resetPreview:function(){E(this.previews,function(t){var i=It(t,yt);G(t,{width:i.width,height:i.height}),t.innerHTML=i.html,qe(t,yt)})},preview:function(){var t=this.imageData,i=this.canvasData,e=this.cropBoxData,n=e.width,a=e.height,r=t.width,o=t.height,s=e.left-i.left-t.left,c=e.top-i.top-t.top;this.cropped&&!this.disabled&&(G(this.viewBoxImage,k({width:r,height:o},wt(k({translateX:-s,translateY:-c},t)))),E(this.previews,function(h){var d=It(h,yt),p=d.width,u=d.height,y=p,B=u,C=1;n&&(B=a*(C=p/n)),a&&B>u&&(y=n*(C=u/a),B=u),G(h,{width:y,height:B}),G(h.getElementsByTagName("img")[0],k({width:r*C,height:o*C},wt(k({translateX:-s*C,translateY:-c*C},t))))}))}},ai={bind:function(){var t=this.element,i=this.options,e=this.cropper;X(i.cropstart)&&q(t,Lt,i.cropstart),X(i.cropmove)&&q(t,Wt,i.cropmove),X(i.cropend)&&q(t,Nt,i.cropend),X(i.crop)&&q(t,St,i.crop),X(i.zoom)&&q(t,jt,i.zoom),q(e,te,this.onCropStart=this.cropStart.bind(this)),i.zoomable&&i.zoomOnWheel&&q(e,re,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&q(e,Jt,this.onDblclick=this.dblclick.bind(this)),q(t.ownerDocument,ee,this.onCropMove=this.cropMove.bind(this)),q(t.ownerDocument,ie,this.onCropEnd=this.cropEnd.bind(this)),i.responsive&&q(window,ae,this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,i=this.options,e=this.cropper;X(i.cropstart)&&_(t,Lt,i.cropstart),X(i.cropmove)&&_(t,Wt,i.cropmove),X(i.cropend)&&_(t,Nt,i.cropend),X(i.crop)&&_(t,St,i.crop),X(i.zoom)&&_(t,jt,i.zoom),_(e,te,this.onCropStart),i.zoomable&&i.zoomOnWheel&&_(e,re,this.onWheel,{passive:!1,capture:!0}),i.toggleDragModeOnDblclick&&_(e,Jt,this.onDblclick),_(t.ownerDocument,ee,this.onCropMove),_(t.ownerDocument,ie,this.onCropEnd),i.responsive&&_(window,ae,this.onResize)}},ri={resize:function(){if(!this.disabled){var t,i,e=this.options,n=this.container,a=this.containerData,r=n.offsetWidth/a.width,o=n.offsetHeight/a.height,s=Math.abs(r-1)>Math.abs(o-1)?r:o;s!==1&&(e.restore&&(t=this.getCanvasData(),i=this.getCropBoxData()),this.render(),e.restore&&(this.setCanvasData(E(t,function(c,h){t[h]=c*s})),this.setCropBoxData(E(i,function(c,h){i[h]=c*s}))))}},dblclick:function(){this.disabled||this.options.dragMode===Kt||this.setDragMode(Pe(this.dragBox,zt)?Vt:Rt)},wheel:function(t){var i=this,e=Number(this.options.wheelZoomRatio)||.1,n=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50),t.deltaY?n=t.deltaY>0?1:-1:t.wheelDelta?n=-t.wheelDelta/120:t.detail&&(n=t.detail>0?1:-1),this.zoom(-n*e,t)))},cropStart:function(t){var i=t.buttons,e=t.button;if(!(this.disabled||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(b(i)&&i!==1||b(e)&&e!==0||t.ctrlKey))){var n,a=this.options,r=this.pointers;t.changedTouches?E(t.changedTouches,function(o){r[o.identifier]=Mt(o)}):r[t.pointerId||0]=Mt(t),n=Object.keys(r).length>1&&a.zoomable&&a.zoomOnTouch?$t:It(t.target,ft),He.test(n)&&pt(this.element,Lt,{originalEvent:t,action:n})!==!1&&(t.preventDefault(),this.action=n,this.cropping=!1,n===Ft&&(this.cropping=!0,H(this.dragBox,xt)))}},cropMove:function(t){var i=this.action;if(!this.disabled&&i){var e=this.pointers;t.preventDefault(),pt(this.element,Wt,{originalEvent:t,action:i})!==!1&&(t.changedTouches?E(t.changedTouches,function(n){k(e[n.identifier]||{},Mt(n,!0))}):k(e[t.pointerId||0]||{},Mt(t,!0)),this.change(t))}},cropEnd:function(t){if(!this.disabled){var i=this.action,e=this.pointers;t.changedTouches?E(t.changedTouches,function(n){delete e[n.identifier]}):delete e[t.pointerId||0],i&&(t.preventDefault(),Object.keys(e).length||(this.action=""),this.cropping&&(this.cropping=!1,ct(this.dragBox,xt,this.cropped&&this.options.modal)),pt(this.element,Nt,{originalEvent:t,action:i}))}}},oi={change:function(t){var i,e=this.options,n=this.canvasData,a=this.containerData,r=this.cropBoxData,o=this.pointers,s=this.action,c=e.aspectRatio,h=r.left,d=r.top,p=r.width,u=r.height,y=h+p,B=d+u,C=0,T=0,W=a.width,R=a.height,O=!0;!c&&t.shiftKey&&(c=p&&u?p/u:1),this.limited&&(C=r.minLeft,T=r.minTop,W=C+Math.min(a.width,n.width,n.left+n.width),R=T+Math.min(a.height,n.height,n.top+n.height));var L=o[Object.keys(o)[0]],l={x:L.endX-L.startX,y:L.endY-L.startY},A=function(Y){switch(Y){case tt:y+l.x>W&&(l.x=W-y);break;case et:h+l.x<C&&(l.x=C-h);break;case Z:d+l.y<T&&(l.y=T-d);break;case ot:B+l.y>R&&(l.y=R-B)}};switch(s){case Et:h+=l.x,d+=l.y;break;case tt:if(l.x>=0&&(y>=W||c&&(d<=T||B>=R))){O=!1;break}A(tt),(p+=l.x)<0&&(s=et,h-=p=-p),c&&(u=p/c,d+=(r.height-u)/2);break;case Z:if(l.y<=0&&(d<=T||c&&(h<=C||y>=W))){O=!1;break}A(Z),u-=l.y,d+=l.y,u<0&&(s=ot,d-=u=-u),c&&(p=u*c,h+=(r.width-p)/2);break;case et:if(l.x<=0&&(h<=C||c&&(d<=T||B>=R))){O=!1;break}A(et),p-=l.x,h+=l.x,p<0&&(s=tt,h-=p=-p),c&&(u=p/c,d+=(r.height-u)/2);break;case ot:if(l.y>=0&&(B>=R||c&&(h<=C||y>=W))){O=!1;break}A(ot),(u+=l.y)<0&&(s=Z,d-=u=-u),c&&(p=u*c,h+=(r.width-p)/2);break;case lt:if(c){if(l.y<=0&&(d<=T||y>=W)){O=!1;break}A(Z),u-=l.y,d+=l.y,p=u*c}else A(Z),A(tt),l.x>=0?y<W?p+=l.x:l.y<=0&&d<=T&&(O=!1):p+=l.x,l.y<=0?d>T&&(u-=l.y,d+=l.y):(u-=l.y,d+=l.y);p<0&&u<0?(s=gt,d-=u=-u,h-=p=-p):p<0?(s=ut,h-=p=-p):u<0&&(s=mt,d-=u=-u);break;case ut:if(c){if(l.y<=0&&(d<=T||h<=C)){O=!1;break}A(Z),u-=l.y,d+=l.y,p=u*c,h+=r.width-p}else A(Z),A(et),l.x<=0?h>C?(p-=l.x,h+=l.x):l.y<=0&&d<=T&&(O=!1):(p-=l.x,h+=l.x),l.y<=0?d>T&&(u-=l.y,d+=l.y):(u-=l.y,d+=l.y);p<0&&u<0?(s=mt,d-=u=-u,h-=p=-p):p<0?(s=lt,h-=p=-p):u<0&&(s=gt,d-=u=-u);break;case gt:if(c){if(l.x<=0&&(h<=C||B>=R)){O=!1;break}A(et),p-=l.x,h+=l.x,u=p/c}else A(ot),A(et),l.x<=0?h>C?(p-=l.x,h+=l.x):l.y>=0&&B>=R&&(O=!1):(p-=l.x,h+=l.x),l.y>=0?B<R&&(u+=l.y):u+=l.y;p<0&&u<0?(s=lt,d-=u=-u,h-=p=-p):p<0?(s=mt,h-=p=-p):u<0&&(s=ut,d-=u=-u);break;case mt:if(c){if(l.x>=0&&(y>=W||B>=R)){O=!1;break}A(tt),u=(p+=l.x)/c}else A(ot),A(tt),l.x>=0?y<W?p+=l.x:l.y>=0&&B>=R&&(O=!1):p+=l.x,l.y>=0?B<R&&(u+=l.y):u+=l.y;p<0&&u<0?(s=ut,d-=u=-u,h-=p=-p):p<0?(s=gt,h-=p=-p):u<0&&(s=lt,d-=u=-u);break;case Qt:this.move(l.x,l.y),O=!1;break;case $t:this.zoom(Fe(o),t),O=!1;break;case Ft:if(!l.x||!l.y){O=!1;break}i=me(this.cropper),h=L.startX-i.left,d=L.startY-i.top,p=r.minWidth,u=r.minHeight,l.x>0?s=l.y>0?mt:lt:l.x<0&&(h-=p,s=l.y>0?gt:ut),l.y<0&&(d-=u),this.cropped||($(this.cropBox,j),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}O&&(r.width=p,r.height=u,r.left=h,r.top=d,this.action=s,this.renderCropBox()),E(o,function(Y){Y.startX=Y.endX,Y.startY=Y.endY})}},hi={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&H(this.dragBox,xt),$(this.cropBox,j),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=k({},this.initialImageData),this.canvasData=k({},this.initialCanvasData),this.cropBoxData=k({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(k(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),$(this.dragBox,xt),H(this.cropBox,j)),this},replace:function(t){var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return!this.disabled&&t&&(this.isImg&&(this.element.src=t),i?(this.url=t,this.image.src=t,this.ready&&(this.viewBoxImage.src=t,E(this.previews,function(e){e.getElementsByTagName("img")[0].src=t}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(t))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,$(this.cropper,Zt)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,H(this.cropper,Zt)),this},destroy:function(){var t=this.element;return t[D]?(t[D]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate(),this):this},move:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,n=e.left,a=e.top;return this.moveTo(Xt(t)?t:n+Number(t),Xt(i)?i:a+Number(i))},moveTo:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.canvasData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.movable&&(b(t)&&(e.left=t,n=!0),b(i)&&(e.top=i,n=!0),n&&this.renderCanvas(!0)),this},zoom:function(t,i){var e=this.canvasData;return t=(t=Number(t))<0?1/(1-t):1+t,this.zoomTo(e.width*t/e.naturalWidth,null,i)},zoomTo:function(t,i,e){var n=this.options,a=this.canvasData,r=a.width,o=a.height,s=a.naturalWidth,c=a.naturalHeight;if((t=Number(t))>=0&&this.ready&&!this.disabled&&n.zoomable){var h=s*t,d=c*t;if(pt(this.element,jt,{ratio:t,oldRatio:r/s,originalEvent:e})===!1)return this;if(e){var p=this.pointers,u=me(this.cropper),y=p&&Object.keys(p).length?Qe(p):{pageX:e.pageX,pageY:e.pageY};a.left-=(h-r)*((y.pageX-u.left-a.left)/r),a.top-=(d-o)*((y.pageY-u.top-a.top)/o)}else ht(i)&&b(i.x)&&b(i.y)?(a.left-=(h-r)*((i.x-a.left)/r),a.top-=(d-o)*((i.y-a.top)/o)):(a.left-=(h-r)/2,a.top-=(d-o)/2);a.width=h,a.height=d,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return b(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var i=this.imageData.scaleY;return this.scale(t,b(i)?i:1)},scaleY:function(t){var i=this.imageData.scaleX;return this.scale(b(i)?i:1,t)},scale:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.imageData,n=!1;return t=Number(t),i=Number(i),this.ready&&!this.disabled&&this.options.scalable&&(b(t)&&(e.scaleX=t,n=!0),b(i)&&(e.scaleY=i,n=!0),n&&this.renderCanvas(!0,!0)),this},getData:function(){var t,i=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=this.options,n=this.imageData,a=this.canvasData,r=this.cropBoxData;if(this.ready&&this.cropped){t={x:r.left-a.left,y:r.top-a.top,width:r.width,height:r.height};var o=n.width/n.naturalWidth;if(E(t,function(h,d){t[d]=h/o}),i){var s=Math.round(t.y+t.height),c=Math.round(t.x+t.width);t.x=Math.round(t.x),t.y=Math.round(t.y),t.width=c-t.x,t.height=s-t.y}}else t={x:0,y:0,width:0,height:0};return e.rotatable&&(t.rotate=n.rotate||0),e.scalable&&(t.scaleX=n.scaleX||1,t.scaleY=n.scaleY||1),t},setData:function(t){var i=this.options,e=this.imageData,n=this.canvasData,a={};if(this.ready&&!this.disabled&&ht(t)){var r=!1;i.rotatable&&b(t.rotate)&&t.rotate!==e.rotate&&(e.rotate=t.rotate,r=!0),i.scalable&&(b(t.scaleX)&&t.scaleX!==e.scaleX&&(e.scaleX=t.scaleX,r=!0),b(t.scaleY)&&t.scaleY!==e.scaleY&&(e.scaleY=t.scaleY,r=!0)),r&&this.renderCanvas(!0,!0);var o=e.width/e.naturalWidth;b(t.x)&&(a.left=t.x*o+n.left),b(t.y)&&(a.top=t.y*o+n.top),b(t.width)&&(a.width=t.width*o),b(t.height)&&(a.height=t.height*o),this.setCropBoxData(a)}return this},getContainerData:function(){return this.ready?k({},this.containerData):{}},getImageData:function(){return this.sized?k({},this.imageData):{}},getCanvasData:function(){var t=this.canvasData,i={};return this.ready&&E(["left","top","width","height","naturalWidth","naturalHeight"],function(e){i[e]=t[e]}),i},setCanvasData:function(t){var i=this.canvasData,e=i.aspectRatio;return this.ready&&!this.disabled&&ht(t)&&(b(t.left)&&(i.left=t.left),b(t.top)&&(i.top=t.top),b(t.width)?(i.width=t.width,i.height=t.width/e):b(t.height)&&(i.height=t.height,i.width=t.height*e),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,i=this.cropBoxData;return this.ready&&this.cropped&&(t={left:i.left,top:i.top,width:i.width,height:i.height}),t||{}},setCropBoxData:function(t){var i,e,n=this.cropBoxData,a=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&ht(t)&&(b(t.left)&&(n.left=t.left),b(t.top)&&(n.top=t.top),b(t.width)&&t.width!==n.width&&(i=!0,n.width=t.width),b(t.height)&&t.height!==n.height&&(e=!0,n.height=t.height),a&&(i?n.height=n.width/a:e&&(n.width=n.height*a)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var i=this.canvasData,e=Ze(this.image,this.imageData,i,t);if(!this.cropped)return e;var n=this.getData(),a=n.x,r=n.y,o=n.width,s=n.height,c=e.width/Math.floor(i.naturalWidth);c!==1&&(a*=c,r*=c,o*=c,s*=c);var h=o/s,d=V({aspectRatio:h,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),p=V({aspectRatio:h,width:t.minWidth||0,height:t.minHeight||0},"cover"),u=V({aspectRatio:h,width:t.width||(c!==1?e.width:o),height:t.height||(c!==1?e.height:s)}),y=u.width,B=u.height;y=Math.min(d.width,Math.max(p.width,y)),B=Math.min(d.height,Math.max(p.height,B));var C=document.createElement("canvas"),T=C.getContext("2d");C.width=st(y),C.height=st(B),T.fillStyle=t.fillColor||"transparent",T.fillRect(0,0,y,B);var W=t.imageSmoothingEnabled,R=W===void 0||W,O=t.imageSmoothingQuality;T.imageSmoothingEnabled=R,O&&(T.imageSmoothingQuality=O);var L,l,A,Y,K,J,nt=e.width,at=e.height,P=a,U=r;P<=-o||P>nt?(P=0,L=0,A=0,K=0):P<=0?(A=-P,P=0,K=L=Math.min(nt,o+P)):P<=nt&&(A=0,K=L=Math.min(o,nt-P)),L<=0||U<=-s||U>at?(U=0,l=0,Y=0,J=0):U<=0?(Y=-U,U=0,J=l=Math.min(at,s+U)):U<=at&&(Y=0,J=l=Math.min(s,at-U));var rt=[P,U,L,l];if(K>0&&J>0){var S=y/o;rt.push(A*S,Y*S,K*S,J*S)}return T.drawImage.apply(T,[e].concat(N(rt.map(function(Ct){return Math.floor(st(Ct))})))),C},setAspectRatio:function(t){var i=this.options;return this.disabled||Xt(t)||(i.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var i=this.options,e=this.dragBox,n=this.face;if(this.ready&&!this.disabled){var a=t===Rt,r=i.movable&&t===Vt;t=a||r?t:Kt,i.dragMode=t,vt(e,ft,t),ct(e,zt,a),ct(e,Ht,r),i.cropBoxMovable||(vt(n,ft,t),ct(n,zt,a),ct(n,Ht,r))}return this}},si=Q.Cropper,we=function(){function t(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(z(this,t),!i||!Ne.test(i.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=i,this.options=k({},ce,ht(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}return I(t,[{key:"init",value:function(){var i,e=this.element,n=e.tagName.toLowerCase();if(!e[D]){if(e[D]=this,n==="img"){if(this.isImg=!0,i=e.getAttribute("src")||"",this.originalUrl=i,!i)return;i=e.src}else n==="canvas"&&window.HTMLCanvasElement&&(i=e.toDataURL());this.load(i)}}},{key:"load",value:function(i){var e=this;if(i){this.url=i,this.imageData={};var n=this.element,a=this.options;if(a.rotatable||a.scalable||(a.checkOrientation=!1),a.checkOrientation&&window.ArrayBuffer)if(Re.test(i))Se.test(i)?this.read(Ke(i)):this.clone();else{var r=new XMLHttpRequest,o=this.clone.bind(this);this.reloading=!0,this.xhr=r,r.onabort=o,r.onerror=o,r.ontimeout=o,r.onprogress=function(){r.getResponseHeader("content-type")!==oe&&r.abort()},r.onload=function(){e.read(r.response)},r.onloadend=function(){e.reloading=!1,e.xhr=null},a.checkCrossOrigin&&ge(i)&&n.crossOrigin&&(i=fe(i)),r.open("GET",i,!0),r.responseType="arraybuffer",r.withCredentials=n.crossOrigin==="use-credentials",r.send()}else this.clone()}}},{key:"read",value:function(i){var e=this.options,n=this.imageData,a=ti(i),r=0,o=1,s=1;if(a>1){this.url=Je(i,oe);var c=ei(a);r=c.rotate,o=c.scaleX,s=c.scaleY}e.rotatable&&(n.rotate=r),e.scalable&&(n.scaleX=o,n.scaleY=s),this.clone()}},{key:"clone",value:function(){var i=this.element,e=this.url,n=i.crossOrigin,a=e;this.options.checkCrossOrigin&&ge(e)&&(n||(n="anonymous"),a=fe(e)),this.crossOrigin=n,this.crossOriginUrl=a;var r=document.createElement("img");n&&(r.crossOrigin=n),r.src=a||e,r.alt=i.alt||"The image to crop",this.image=r,r.onload=this.start.bind(this),r.onerror=this.stop.bind(this),H(r,Gt),i.parentNode.insertBefore(r,i.nextSibling)}},{key:"start",value:function(){var i=this,e=this.image;e.onload=null,e.onerror=null,this.sizing=!0;var n=Q.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Q.navigator.userAgent),a=function(s,c){k(i.imageData,{naturalWidth:s,naturalHeight:c,aspectRatio:s/c}),i.initialImageData=k({},i.imageData),i.sizing=!1,i.sized=!0,i.build()};if(!e.naturalWidth||n){var r=document.createElement("img"),o=document.body||document.documentElement;this.sizingImage=r,r.onload=function(){a(r.width,r.height),n||o.removeChild(r)},r.src=e.src,n||(r.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",o.appendChild(r))}else a(e.naturalWidth,e.naturalHeight)}},{key:"stop",value:function(){var i=this.image;i.onload=null,i.onerror=null,i.parentNode.removeChild(i),this.image=null}},{key:"build",value:function(){if(this.sized&&!this.ready){var i=this.element,e=this.options,n=this.image,a=i.parentNode,r=document.createElement("div");r.innerHTML=We;var o=r.querySelector(".".concat(D,"-container")),s=o.querySelector(".".concat(D,"-canvas")),c=o.querySelector(".".concat(D,"-drag-box")),h=o.querySelector(".".concat(D,"-crop-box")),d=h.querySelector(".".concat(D,"-face"));this.container=a,this.cropper=o,this.canvas=s,this.dragBox=c,this.cropBox=h,this.viewBox=o.querySelector(".".concat(D,"-view-box")),this.face=d,s.appendChild(n),H(i,j),a.insertBefore(o,i.nextSibling),this.isImg||$(n,Gt),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,H(h,j),e.guides||H(h.getElementsByClassName("".concat(D,"-dashed")),j),e.center||H(h.getElementsByClassName("".concat(D,"-center")),j),e.background&&H(o,"".concat(D,"-bg")),e.highlight||H(d,Te),e.cropBoxMovable&&(H(d,Ht),vt(d,ft,Et)),e.cropBoxResizable||(H(h.getElementsByClassName("".concat(D,"-line")),j),H(h.getElementsByClassName("".concat(D,"-point")),j)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),X(e.ready)&&q(i,ne,e.ready,{once:!0}),pt(i,ne)}}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),$(this.element,j))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}],[{key:"noConflict",value:function(){return window.Cropper=si,t}},{key:"setDefaults",value:function(i){k(ce,ht(i)&&i)}}]),t}();return k(we.prototype,ii,ni,ai,ri,oi,hi),we}()}(Bt={path:gi,exports:{},require:function(g,v){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(v==null&&Bt.path)}},Bt.exports),Bt.exports);function ke(g,v){v===void 0&&(v={});var x=v.insertAt;if(g&&typeof document!="undefined"){var f=document.head||document.getElementsByTagName("head")[0],m=document.createElement("style");m.type="text/css",x==="top"&&f.firstChild?f.insertBefore(m,f.firstChild):f.appendChild(m),m.styleSheet?m.styleSheet.cssText=g:m.appendChild(document.createTextNode(g))}}ke(`/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:11.623Z
 */

.cropper-container {
  direction: ltr;
  font-size: 0;
  line-height: 0;
  position: relative;
  -ms-touch-action: none;
  touch-action: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.cropper-container img {
  display: block;
  height: 100%;
  image-orientation: 0deg;
  max-height: none !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  width: 100%;
}

.cropper-wrap-box,
.cropper-canvas,
.cropper-drag-box,
.cropper-crop-box,
.cropper-modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.cropper-wrap-box,
.cropper-canvas {
  overflow: hidden;
}

.cropper-drag-box {
  background-color: #fff;
  opacity: 0;
}

.cropper-modal {
  background-color: #000;
  opacity: 0.5;
}

.cropper-view-box {
  display: block;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  overflow: hidden;
  width: 100%;
}

.cropper-dashed {
  border: 0 dashed #eee;
  display: block;
  opacity: 0.5;
  position: absolute;
}

.cropper-dashed.dashed-h {
  border-bottom-width: 1px;
  border-top-width: 1px;
  height: calc(100% / 3);
  left: 0;
  top: calc(100% / 3);
  width: 100%;
}

.cropper-dashed.dashed-v {
  border-left-width: 1px;
  border-right-width: 1px;
  height: 100%;
  left: calc(100% / 3);
  top: 0;
  width: calc(100% / 3);
}

.cropper-center {
  display: block;
  height: 0;
  left: 50%;
  opacity: 0.75;
  position: absolute;
  top: 50%;
  width: 0;
}

.cropper-center::before,
.cropper-center::after {
  background-color: #eee;
  content: ' ';
  display: block;
  position: absolute;
}

.cropper-center::before {
  height: 1px;
  left: -3px;
  top: 0;
  width: 7px;
}

.cropper-center::after {
  height: 7px;
  left: 0;
  top: -3px;
  width: 1px;
}

.cropper-face,
.cropper-line,
.cropper-point {
  display: block;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  width: 100%;
}

.cropper-face {
  background-color: #fff;
  left: 0;
  top: 0;
}

.cropper-line {
  background-color: #39f;
}

.cropper-line.line-e {
  cursor: ew-resize;
  right: -3px;
  top: 0;
  width: 5px;
}

.cropper-line.line-n {
  cursor: ns-resize;
  height: 5px;
  left: 0;
  top: -3px;
}

.cropper-line.line-w {
  cursor: ew-resize;
  left: -3px;
  top: 0;
  width: 5px;
}

.cropper-line.line-s {
  bottom: -3px;
  cursor: ns-resize;
  height: 5px;
  left: 0;
}

.cropper-point {
  background-color: #39f;
  height: 5px;
  opacity: 0.75;
  width: 5px;
}

.cropper-point.point-e {
  cursor: ew-resize;
  margin-top: -3px;
  right: -3px;
  top: 50%;
}

.cropper-point.point-n {
  cursor: ns-resize;
  left: 50%;
  margin-left: -3px;
  top: -3px;
}

.cropper-point.point-w {
  cursor: ew-resize;
  left: -3px;
  margin-top: -3px;
  top: 50%;
}

.cropper-point.point-s {
  bottom: -3px;
  cursor: s-resize;
  left: 50%;
  margin-left: -3px;
}

.cropper-point.point-ne {
  cursor: nesw-resize;
  right: -3px;
  top: -3px;
}

.cropper-point.point-nw {
  cursor: nwse-resize;
  left: -3px;
  top: -3px;
}

.cropper-point.point-sw {
  bottom: -3px;
  cursor: nesw-resize;
  left: -3px;
}

.cropper-point.point-se {
  bottom: -3px;
  cursor: nwse-resize;
  height: 20px;
  opacity: 1;
  right: -3px;
  width: 20px;
}

@media (min-width: 768px) {
  .cropper-point.point-se {
    height: 15px;
    width: 15px;
  }
}

@media (min-width: 992px) {
  .cropper-point.point-se {
    height: 10px;
    width: 10px;
  }
}

@media (min-width: 1200px) {
  .cropper-point.point-se {
    height: 5px;
    opacity: 0.75;
    width: 5px;
  }
}

.cropper-point.point-se::before {
  background-color: #39f;
  bottom: -50%;
  content: ' ';
  display: block;
  height: 200%;
  opacity: 0;
  position: absolute;
  right: -50%;
  width: 200%;
}

.cropper-invisible {
  opacity: 0;
}

.cropper-bg {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
}

.cropper-hide {
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}

.cropper-hidden {
  display: none !important;
}

.cropper-move {
  cursor: move;
}

.cropper-crop {
  cursor: crosshair;
}

.cropper-disabled .cropper-drag-box,
.cropper-disabled .cropper-face,
.cropper-disabled .cropper-line,
.cropper-disabled .cropper-point {
  cursor: not-allowed;
}
`);var _t=null,De=di({name:"VuePictureCropper",props:{boxStyle:{type:Object,required:!1,default:function(){return{}}},img:String,options:{type:Object,required:!1,default:function(){return{}}},presetMode:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{cropper:null,mimeType:"",randomId:""}},watch:{img:function(){if(this.cropper)try{this.cropper.replace(this.img),this.getImgSuffix(),this.updateInstance()}catch(g){console.log(g)}else this.init()}},beforeUnmount:function(){this.cropper&&this.cropper.destroy()},mounted:function(){this.init()},methods:{init:function(){return Dt(this,void 0,void 0,function(){var g,v=this;return kt(this,function(x){switch(x.label){case 0:return[4,this.$nextTick()];case 1:return x.sent(),this.randomId=function(f){f===void 0&&(f=10);for(var m="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz012345678",z=m.length,M="",I=0;I<f;I++)M+=m.charAt(Math.floor(Math.random()*z));return M}(10),g=window.setInterval(function(){var f=v.randomId?document.querySelector("#vpc-img-"+v.randomId):document.querySelector(".vue--picture-cropper__img");if(f)try{v.cropper=new fi(f,v.options),window.clearInterval(g),v.updateInstance(),v.getImgSuffix(),f.addEventListener("ready",function(){v.usePresetMode()})}catch(m){console.log(m)}},10),[2]}})})},usePresetMode:function(){if(Object.prototype.toString.call(this.presetMode)==="[object Object]"){var g=this.presetMode,v=g.mode,x=g.width,f=g.height;switch(v){case"fixedSize":case"round":this.cropper.setCropBoxData({width:x,height:f})}}},updateInstance:function(){(_t=this.cropper).getDataURL=this.getDataURL,_t.getBlob=this.getBlob,_t.getFile=this.getFile},updateResultOptions:function(g){if(g===void 0&&(g={}),Object.prototype.toString.call(this.presetMode)==="[object Object]"){var v=this.presetMode,x=v.mode,f=v.width,m=v.height;switch(x){case"fixedSize":case"round":g.width=f,g.height=m}return g}},getImgSuffix:function(){if(this.presetMode.mode==="round")this.mimeType="image/png";else{var g=this.img.split(",")[0].replace(/data:(.*);base64/,"$1");this.mimeType=g}},getDataURL:function(g){g===void 0&&(g={}),g=this.updateResultOptions(g);try{var v=this.cropper.getCroppedCanvas(g);return this.presetMode.mode==="round"&&(v=this.getRoundedCanvas(v)),v.toDataURL(this.mimeType)}catch(x){return""}},getBlob:function(g){return g===void 0&&(g={}),Dt(this,void 0,void 0,function(){var v=this;return kt(this,function(x){return g=this.updateResultOptions(g),[2,new Promise(function(f){try{var m=v.cropper.getCroppedCanvas(g);v.presetMode.mode==="round"&&(m=v.getRoundedCanvas(m)),m.toBlob(function(z){f(z)},v.mimeType)}catch(z){f(null)}})]})})},getFile:function(g){return g===void 0&&(g={}),Dt(this,void 0,void 0,function(){var v=this;return kt(this,function(x){return[2,new Promise(function(f){Dt(v,void 0,void 0,function(){var m,z,M,I,F;return kt(this,function(N){switch(N.label){case 0:return m=g.fileName,z=this.mimeType.replace(/image\//,""),M=m?m+"."+z:"cropped-"+Date.now()+"."+z,[4,this.getBlob(g)];case 1:return I=N.sent(),F=new File([I],M,{type:this.mimeType}),f(F),[2]}})})})]})})},getRoundedCanvas:function(g){var v=document.createElement("canvas"),x=v.getContext("2d"),f=g.width,m=g.height;return v.width=f,v.height=m,x.imageSmoothingEnabled=!0,x.drawImage(g,0,0,f,m),x.globalCompositeOperation="destination-in",x.beginPath(),x.arc(f/2,m/2,Math.min(f,m)/2,0,2*Math.PI,!0),x.fill(),v}}});ke(`
.vue--picture-cropper__wrap {
  width: 100%;
  height: 100%;
  margin: 0;
}
.vue--picture-cropper__img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.vue--picture-cropper__wrap-round .cropper-view-box,
.vue--picture-cropper__wrap-round .cropper-face {
  border-radius: 50%;
}
`),De.render=function(g,v,x,f,m,z){return li(),ui("div",{id:`vpc-wrap-${g.randomId}`,class:["vue--picture-cropper__wrap",{"vue--picture-cropper__wrap-round":g.presetMode.mode==="round"}],style:g.boxStyle},[mi("img",{class:"vue--picture-cropper__img",src:g.img,id:`vpc-img-${g.randomId}`},null,8,["src","id"])],14,["id"])},De.__file="src/vue-picture-cropper.vue";export{De as d};
