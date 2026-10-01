import{r as p,j as c,d as S,s as T,T as V,C as X,U as B,u as C,a as A,m as F}from"./index-Bnp4YoXJ.js";var j=new Map,x=new WeakMap,E=0,O=void 0;function P(e){return e?(x.has(e)||(E+=1,x.set(e,E.toString())),x.get(e)):"0"}function Y(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?P(e.root):e[t]}`).toString()}function z(e){const t=Y(e);let s=j.get(t);if(!s){const a=new Map;let d;const i=new IntersectionObserver(n=>{n.forEach(r=>{var o;const u=r.isIntersecting&&d.some(l=>r.intersectionRatio>=l);e.trackVisibility&&typeof r.isVisible>"u"&&(r.isVisible=u),(o=a.get(r.target))==null||o.forEach(l=>{l(u,r)})})},e);d=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),s={id:t,observer:i,elements:a},j.set(t,s)}return s}function k(e,t,s={},a=O){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const o=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof s.threshold=="number"?s.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:d,observer:i,elements:n}=z(s),r=n.get(e)||[];return n.has(e)||n.set(e,r),r.push(t),i.observe(e),function(){r.splice(r.indexOf(t),1),r.length===0&&(n.delete(e),i.unobserve(e)),n.size===0&&(i.disconnect(),j.delete(d))}}function N({threshold:e,delay:t,trackVisibility:s,rootMargin:a,root:d,triggerOnce:i,skip:n,initialInView:r,fallbackInView:o,onChange:u}={}){var l;const[f,I]=p.useState(null),m=p.useRef(u),[b,y]=p.useState({inView:!!r,entry:void 0});m.current=u,p.useEffect(()=>{if(n||!f)return;let g;return g=k(f,(M,w)=>{y({inView:M,entry:w}),m.current&&m.current(M,w),w.isIntersecting&&i&&g&&(g(),g=void 0)},{root:d,rootMargin:a,threshold:e,trackVisibility:s,delay:t},o),()=>{g&&g()}},[Array.isArray(e)?e.toString():e,f,d,a,i,n,s,o,t]);const h=(l=b.entry)==null?void 0:l.target,R=p.useRef(void 0);!f&&h&&!i&&!n&&R.current!==h&&(R.current=h,y({inView:!!r,entry:void 0}));const v=[I,b.inView,b.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const _=S.section`
  padding: 20px 0 110px;
`,q=S.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`,L=S(F.div)`
  padding: 34px 18px;
  text-align: center;
  border-radius: 20px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: var(--primary);
    box-shadow: 0 18px 44px rgba(91, 140, 255, 0.18);
  }

  svg {
    font-size: 1.9rem;
    color: var(--primary);
    margin-bottom: 12px;
  }

  .value {
    font-family: 'Sora', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .label {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin-top: 6px;
  }
`;function U({children:e}){const t=p.useRef(null),s=C(0),a=C(0),d=A(s,{stiffness:200,damping:16}),i=A(a,{stiffness:200,damping:16}),n=o=>{const u=t.current.getBoundingClientRect(),l=(o.clientX-u.left)/u.width-.5,f=(o.clientY-u.top)/u.height-.5;a.set(l*16),s.set(-f*16)},r=()=>{s.set(0),a.set(0)};return c.jsx(F.div,{ref:t,initial:{opacity:0,y:40,rotateX:-16,transformPerspective:700},whileInView:{opacity:1,y:0,rotateX:0,transformPerspective:700},transition:{duration:.55,ease:"easeOut"},viewport:{once:!0},style:{rotateX:d,rotateY:i,transformPerspective:900},onMouseMove:n,onMouseLeave:r,children:e})}function $({target:e}){const{ref:t,inView:s}=N({triggerOnce:!0,threshold:.4}),[a,d]=p.useState(0);return p.useEffect(()=>{if(!s)return;let i,n;const r=1600,o=u=>{i||(i=u);const l=Math.min((u-i)/r,1),f=1-Math.pow(1-l,3);d(Math.floor(f*e)),l<1&&(n=requestAnimationFrame(o))};return n=requestAnimationFrame(o),()=>cancelAnimationFrame(n)},[s,e]),c.jsx("span",{ref:t,children:a})}function G(){const e=[{icon:c.jsx(T,{}),value:3,suffix:"+",label:"Years of Coding"},{icon:c.jsx(V,{}),value:10,suffix:"+",label:"Projects Built"},{icon:c.jsx(X,{}),value:15,suffix:"+",label:"Technical Skills"},{icon:c.jsx(B,{}),value:500,suffix:"+",label:"Hours of Learning"}];return c.jsx(_,{children:c.jsx("div",{className:"container",children:c.jsx(q,{children:e.map(t=>c.jsx(U,{children:c.jsxs(L,{children:[t.icon,c.jsxs("div",{className:"value",children:[c.jsx($,{target:t.value}),t.suffix]}),c.jsx("div",{className:"label",children:t.label})]})},t.label))})})})}export{G as default};
