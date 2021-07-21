"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),r=require("classnames");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e),o=n(t),l=n(r);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var u="ExpandCollapse-module_container__sEsY7";s(".ExpandCollapse-module_container__sEsY7 button{cursor:pointer;border:none;background:none;text-decoration:none;font-size:inherit;font-family:inherit}");const d=({children:t,ElementType:r,open:n,trigger:o,...l})=>{const[s,d]=e.useState(n);return a.default.createElement(r,i({className:u},l),o&&a.default.createElement("button",{onClick:()=>d(!s),"aria-expanded":s},o),s&&t)};d.propTypes={children:o.default.any,ElementType:o.default.string,open:o.default.bool,trigger:o.default.any},d.defaultProps={children:null,ElementType:"div",open:!0,trigger:null};const c=({children:t,ElementType:r,duration:n,delay:o,opacity:l,...s})=>{const[u,d]=e.useState(!1);return e.useEffect((()=>{setTimeout((()=>d(!0)),o)})),a.default.createElement(r,i({style:{opacity:u?l:0,transition:`opacity ${n} ease`}},s),t)};c.propTypes={children:o.default.any.isRequired,ElementType:o.default.string,duration:o.default.string,delay:o.default.number,opacity:o.default.number},c.defaultProps={ElementType:"div",duration:"0.7s",delay:1,opacity:1};const f={cursor:"pointer"},p=e=>({opacity:0,transition:`opacity ${e} ease`}),y=e=>({opacity:e}),h=e=>({border:e}),m=e=>({borderRadius:e}),b=({src:t,alt:r,duration:n,opacity:o,border:l,borderRadius:s,onLoadCallback:u,onErrorCallback:d,onClickCallback:c,...b})=>{const[g,x]=e.useState(!1);return a.default.createElement("img",i({src:t,alt:r,style:{...p(n),...h(l),...m(s),...c?f:{},...g?y(o):{}},onLoad:()=>{x(!0),u()},onError:d,onClick:c},b))};b.propTypes={src:o.default.string.isRequired,alt:o.default.string.isRequired,duration:o.default.string,opacity:o.default.number,border:o.default.string,borderRadius:o.default.oneOfType(o.default.string,o.default.number),onLoadCallback:o.default.func,onErrorCallback:o.default.func,onClickCallback:o.default.func},b.defaultProps={duration:"0.7s",opacity:1,border:"none",borderRadius:0,onLoadCallback:()=>{},onErrorCallback:()=>{},onClickCallback:null};const g=(e,t)=>Math.round(Math.random()*(t-e)+e);function x(t,r){const[n,a]=e.useState(),o=()=>{const e=t.current.offsetWidth,n=t.current.offsetHeight;r.current.width=e,r.current.height=n,a({width:e,height:n})};return e.useEffect((()=>(window.onresize=o,o(),()=>{window.onresize=null})),[]),n}function E(t,r,n,a){const o=x(t,r);return e.useEffect((()=>{let e,t,l,i,s;return o&&(e=r.current.getContext("2d"),e.fillStyle=a,[...Array(n)].forEach((()=>{const e=Math.PI/180*g(0,360),r=g(1,3),n=(a=g(0,o.width),i=g(0,o.height),s=Math.cos(e)*r,u=Math.sin(e)*r,{x:a,y:i,sx:a,sy:i,mx:s,my:u,alpha:.1*r,next:null});var a,i,s,u;t||(t=n),l||(l=n),l.next=n,l=n})),s=20,i=setInterval((()=>{let r=t;for(e.clearRect(-20,-20,o.width+s,o.height+s);r;)r.x<-20||r.x>o.width+s||r.y<-20||r.y>o.height+s?(r.x=r.sx,r.y=r.sy):(r.x+=r.mx,r.y+=r.my),e.globalAlpha=r.alpha,e.fillRect(r.x,r.y,2,2),r=r.next}),35)),()=>{clearInterval(i)}}),[o,n,a]),null}var C="PixelEffectContainer-module_container__1yi_A";s(".PixelEffectContainer-module_container__1yi_A canvas{position:absolute;pointer-events:none}");const v=({children:t,className:r,count:n,color:o,width:s,height:u,borderRadius:d,contentStyle:c,...f})=>{const p=e.useRef(),y=e.useRef();return E(p,y,n,o),a.default.createElement("div",i({ref:p,className:l.default(C,r)},f),a.default.createElement("canvas",{ref:y,style:{borderRadius:d}}),a.default.createElement("div",{style:{...s&&u?{width:s,height:u}:{},borderRadius:d,...c}},t))};v.propTypes={children:o.default.any,className:o.default.string,count:o.default.number.isRequired,width:o.default.oneOfType([o.default.string,o.default.number]),height:o.default.oneOfType([o.default.string,o.default.number]),color:o.default.string,borderRadius:o.default.string,contentStyle:o.default.object},v.defaultProps={children:null,className:"",color:"#000000",width:null,height:null,borderRadius:null,contentStyle:{}};const R={threshold:0,rootMargin:"0px 0px 0px 0px"};exports.ExpandCollapse=d,exports.FadeIn=c,exports.LazyImage=b,exports.PixelEffectContainer=v,exports.rand=g,exports.useIntersection=function(t,r,n,a=R){n&&r&&e.useEffect((()=>{const e=[];if(t.current&&"function"==typeof IntersectionObserver){const o=e=>t=>{n(t[0],e)};return t.current.querySelectorAll(r).forEach(((t,r)=>{const n=new IntersectionObserver(o(r),a);n.observe(t),e.push(n)})),()=>{e.forEach((e=>{e.disconnect()}))}}return()=>{}}),[t.current,a.threshold,a.rootMargin])},exports.usePixelEffect=E,exports.useResizeCanvasToContainer=x;
