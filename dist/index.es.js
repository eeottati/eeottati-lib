import e,{useState as t,useEffect as r,useRef as n}from"react";import o from"prop-types";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const s=({children:n,ElementType:o,className:s,duration:c,delay:l,opacity:a,...u})=>{const[h,d]=t(!1);return r((()=>{setTimeout((()=>d(!0)),l)})),e.createElement(o,i({className:s,style:{opacity:h?a:0,transition:`opacity ${c} ease`}},u),n)};s.propTypes={children:o.any.isRequired,ElementType:o.string,className:o.string,duration:o.string,delay:o.number,opacity:o.number},s.defaultProps={ElementType:"div",className:"",duration:"0.7s",delay:1,opacity:1};const c=(e,t)=>Math.round(Math.random()*(t-e)+e);function l(e,n){const[o,i]=t(),s=()=>{const t=e.current.offsetWidth,r=e.current.offsetHeight;n.current.width=t,n.current.height=r,i({width:t,height:r})};return r((()=>(window.onresize=s,s(),()=>{window.onresize=null})),[]),o}function a(e,t,n,o){const i=l(e,t);return r((()=>{let e,r,s,l,a;return i&&(e=t.current.getContext("2d"),e.fillStyle=o,[...Array(n)].forEach((()=>{const e=Math.PI/180*c(0,360),t=c(1,3),n=(o=c(0,i.width),l=c(0,i.height),a=Math.cos(e)*t,u=Math.sin(e)*t,{x:o,y:l,sx:o,sy:l,mx:a,my:u,alpha:.1*t,next:null});var o,l,a,u;r||(r=n),s||(s=n),s.next=n,s=n})),a=20,l=setInterval((()=>{let t=r;for(e.clearRect(-20,-20,i.width+a,i.height+a);t;)t.x<-20||t.x>i.width+a||t.y<-20||t.y>i.height+a?(t.x=t.sx,t.y=t.sy):(t.x+=t.mx,t.y+=t.my),e.globalAlpha=t.alpha,e.fillRect(t.x,t.y,2,2),t=t.next}),35)),()=>{clearInterval(l)}}),[i,n,o]),null}const u={position:"absolute",pointerEvents:"none"},h=({children:t,count:r,color:o,width:s,height:c,borderRadius:l,contentStyle:h,...d})=>{const y=n(),p=n();return a(y,p,r,o),e.createElement("div",i({ref:y},d),e.createElement("canvas",{ref:p,style:{borderRadius:l,...u}}),e.createElement("div",{style:{...s&&c?{width:s,height:c}:{},borderRadius:l,...h}},t))};h.propTypes={children:o.any,count:o.number.isRequired,width:o.oneOfType([o.string,o.number]),height:o.oneOfType([o.string,o.number]),color:o.string,borderRadius:o.string,contentStyle:o.object},h.defaultProps={children:null,color:"#000000",width:null,height:null,borderRadius:null,contentStyle:{}};const d={threshold:0,rootMargin:"0px 0px 0px 0px"};function y(e,t,n,o=d){n&&t&&r((()=>{const r=[];if(e.current&&"function"==typeof IntersectionObserver){const i=e=>t=>{n(t[0],e)};return e.current.querySelectorAll(t).forEach(((e,t)=>{const n=new IntersectionObserver(i(t),o);n.observe(e),r.push(n)})),()=>{r.forEach((e=>{e.disconnect()}))}}return()=>{}}),[e.current,o.threshold,o.rootMargin])}export{s as FadeIn,h as PixelEffectContainer,c as rand,y as useIntersection,a as usePixelEffect,l as useResizeCanvasToContainer};