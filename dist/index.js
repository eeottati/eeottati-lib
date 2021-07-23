"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),r=require("classnames"),n=require("react-router-dom");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=a(e),l=a(t),i=a(r);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var d="ExpandCollapse-module_container__sEsY7";u(".ExpandCollapse-module_container__sEsY7 button{cursor:pointer;border:none;background:none;text-decoration:none;font-size:inherit;font-family:inherit}");const c=({children:t,ElementType:r,open:n,trigger:a,...l})=>{const[i,u]=e.useState(n);return o.default.createElement(r,s({className:d},l),a&&o.default.createElement("button",{onClick:()=>u(!i),"aria-expanded":i},a),i&&t)};c.propTypes={children:l.default.any,ElementType:l.default.string,open:l.default.bool,trigger:l.default.any},c.defaultProps={children:null,ElementType:"div",open:!0,trigger:null};const f=({children:t,ElementType:r,duration:n,delay:a,opacity:l,...i})=>{const[u,d]=e.useState(!1);return e.useEffect((()=>{setTimeout((()=>d(!0)),a)})),o.default.createElement(r,s({style:{opacity:u?l:0,transition:`opacity ${n} ease`}},i),t)};f.propTypes={children:l.default.any.isRequired,ElementType:l.default.string,duration:l.default.string,delay:l.default.number,opacity:l.default.number},f.defaultProps={ElementType:"div",duration:"0.7s",delay:1,opacity:1};const p={cursor:"pointer"},h=e=>({opacity:0,transition:`opacity ${e} ease`}),y=e=>({opacity:e}),m=e=>({border:e}),g=e=>({borderRadius:e}),b=({src:t,alt:r,duration:n,opacity:a,border:l,borderRadius:i,onLoadCallback:u,onErrorCallback:d,onClickCallback:c,...f})=>{const[b,x]=e.useState(!1);return o.default.createElement("img",s({src:t,alt:r,style:{...h(n),...m(l),...g(i),...c?p:{},...b?y(a):{}},onLoad:()=>{x(!0),u()},onError:d,onClick:c},f))};b.propTypes={src:l.default.string.isRequired,alt:l.default.string.isRequired,duration:l.default.string,opacity:l.default.number,border:l.default.string,borderRadius:l.default.oneOfType([l.default.string,l.default.number]),onLoadCallback:l.default.func,onErrorCallback:l.default.func,onClickCallback:l.default.func},b.defaultProps={duration:"0.7s",opacity:1,border:"none",borderRadius:0,onLoadCallback:()=>{},onErrorCallback:()=>{},onClickCallback:null};var x="NavLink-module_container__3o3nB";u(".NavLink-module_container__3o3nB{text-decoration:none;cursor:pointer}");const E=(e={})=>i.default(x,e.className||""),v=({children:e,href:t,to:r,target:a,...l})=>e?r?(e=>o.default.createElement(n.Link,s({},e,{className:E(e)})))({children:e,to:r,...l}):t?(e=>o.default.createElement("a",s({},e,{className:E(e)})))({children:e,href:t,target:a,...l}):e:null;v.propTypes={children:l.default.any,href:l.default.string,to:l.default.string,target:l.default.string},v.defaultProps={children:null,href:null,to:null,target:"_blank"};const C=(e,t)=>Math.round(Math.random()*(t-e)+e);function _(t,r){const[n,a]=e.useState(),o=()=>{const e=t.current.offsetWidth,n=t.current.offsetHeight;r.current.width=e,r.current.height=n,a({width:e,height:n})};return e.useEffect((()=>(window.onresize=o,o(),()=>{window.onresize=null})),[]),n}function k(t,r,n,a){const o=_(t,r);return e.useEffect((()=>{let e,t,l,i,s;return o&&(e=r.current.getContext("2d"),e.fillStyle=a,[...Array(n)].forEach((()=>{const e=Math.PI/180*C(0,360),r=C(1,3),n=(a=C(0,o.width),i=C(0,o.height),s=Math.cos(e)*r,u=Math.sin(e)*r,{x:a,y:i,sx:a,sy:i,mx:s,my:u,alpha:.1*r,next:null});var a,i,s,u;t||(t=n),l||(l=n),l.next=n,l=n})),s=20,i=setInterval((()=>{let r=t;for(e.clearRect(-20,-20,o.width+s,o.height+s);r;)r.x<-20||r.x>o.width+s||r.y<-20||r.y>o.height+s?(r.x=r.sx,r.y=r.sy):(r.x+=r.mx,r.y+=r.my),e.globalAlpha=r.alpha,e.fillRect(r.x,r.y,2,2),r=r.next}),35)),()=>{clearInterval(i)}}),[o,n,a]),null}var T="PixelEffectContainer-module_container__1yi_A";u(".PixelEffectContainer-module_container__1yi_A canvas{position:absolute;pointer-events:none}");const R=({children:t,className:r,count:n,color:a,width:l,height:u,borderRadius:d,contentStyle:c,...f})=>{const p=e.useRef(),h=e.useRef();return k(p,h,n,a),o.default.createElement("div",s({ref:p,className:i.default(T,r)},f),o.default.createElement("canvas",{ref:h,style:{borderRadius:d}}),o.default.createElement("div",{style:{...l&&u?{width:l,height:u}:{},borderRadius:d,...c}},t))};R.propTypes={children:l.default.any,className:l.default.string,count:l.default.number.isRequired,width:l.default.oneOfType([l.default.string,l.default.number]),height:l.default.oneOfType([l.default.string,l.default.number]),color:l.default.string,borderRadius:l.default.string,contentStyle:l.default.object},R.defaultProps={children:null,className:"",color:"#000000",width:null,height:null,borderRadius:null,contentStyle:{}};const w={threshold:0,rootMargin:"0px 0px 0px 0px"};exports.ExpandCollapse=c,exports.FadeIn=f,exports.LazyImage=b,exports.NavLink=v,exports.PixelEffectContainer=R,exports.isEven=e=>e%2==0,exports.rand=C,exports.useIntersection=function(t,r,n,a=w){n&&r&&e.useEffect((()=>{const e=[];if(t.current&&"function"==typeof IntersectionObserver){const o=e=>t=>{n(t[0],e)};return t.current.querySelectorAll(r).forEach(((t,r)=>{const n=new IntersectionObserver(o(r),a);n.observe(t),e.push(n)})),()=>{e.forEach((e=>{e.disconnect()}))}}return()=>{}}),[t.current,a.threshold,a.rootMargin])},exports.usePixelEffect=k,exports.useResizeCanvasToContainer=_;
