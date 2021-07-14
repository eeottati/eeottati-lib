"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=r(t);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const l=(e,t)=>Math.round(Math.random()*(t-e)+e);function s(t,r){const[n,o]=e.useState(),u=()=>{const e=t.current.offsetWidth,n=t.current.offsetHeight;r.current.width=e,r.current.height=n,o({width:e,height:n})};return e.useEffect((()=>(window.onresize=u,u(),()=>{window.onresize=null})),[]),n}function i(t,r,n,o){const u=s(t,r);return e.useEffect((()=>{let e,t,s,i,a;return u&&(e=r.current.getContext("2d"),e.fillStyle=o,[...Array(n)].forEach((()=>{const e=Math.PI/180*l(0,360),r=l(1,3),n=(o=l(0,u.width),i=l(0,u.height),a=Math.cos(e)*r,c=Math.sin(e)*r,{x:o,y:i,sx:o,sy:i,mx:a,my:c,alpha:.1*r,next:null});var o,i,a,c;t||(t=n),s||(s=n),s.next=n,s=n})),a=20,i=setInterval((()=>{let r=t;for(e.clearRect(-20,-20,u.width+a,u.height+a);r;)r.x<-20||r.x>u.width+a||r.y<-20||r.y>u.height+a?(r.x=r.sx,r.y=r.sy):(r.x+=r.mx,r.y+=r.my),e.globalAlpha=r.alpha,e.fillRect(r.x,r.y,2,2),r=r.next}),35)),()=>{clearInterval(i)}}),[u,n,o]),null}const a={position:"absolute",pointerEvents:"none"},c=({children:t,count:r,color:o,width:l,height:s,borderRadius:c,contentStyle:f,...d})=>{const h=e.useRef(),p=e.useRef();return i(h,p,r,o),n.default.createElement("div",u({ref:h},d),n.default.createElement("canvas",{ref:p,style:{borderRadius:c,...a}}),n.default.createElement("div",{style:{...l&&s?{width:l,height:s}:{},borderRadius:c,...f}},t))};c.propTypes={children:o.default.any,count:o.default.number.isRequired,width:o.default.oneOfType([o.default.string,o.default.number]),height:o.default.oneOfType([o.default.string,o.default.number]),color:o.default.string,borderRadius:o.default.string,contentStyle:o.default.object},c.defaultProps={children:null,color:"#000000",width:null,height:null,borderRadius:null,contentStyle:{}};const f={threshold:0,rootMargin:"0px 0px 0px 0px"};exports.PixelEffectContainer=c,exports.rand=l,exports.useIntersection=function(t,r,n,o=f){n&&r&&e.useEffect((()=>{const e=[];if(t.current&&"function"==typeof IntersectionObserver){const u=e=>t=>{n(t[0],e)};return t.current.querySelectorAll(r).forEach(((t,r)=>{const n=new IntersectionObserver(u(r),o);n.observe(t),e.push(n)})),()=>{e.forEach((e=>{e.disconnect()}))}}return()=>{}}),[t.current,o.threshold,o.rootMargin])},exports.usePixelEffect=i,exports.useResizeCanvasToContainer=s;
