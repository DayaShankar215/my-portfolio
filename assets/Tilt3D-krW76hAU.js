import{X as Y,Y as v,r as V,u as i,a as m,j as l,d as p,m as $}from"./index-Bnp4YoXJ.js";function R(s,...o){const a=s.length;function c(){let n="";for(let t=0;t<a;t++){n+=s[t];const e=o[t];e&&(n+=v(e)?e.get():e)}return n}return Y(o.filter(v),c)}const B=p.div`
  height: 100%;
  perspective: 1200px;
`,x=p($.div)`
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
`,C=p.div`
  position: absolute;
  inset: 0;
  border-radius: ${({radius:s})=>s};
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${x}:hover & {
    opacity: 1;
  }
`;function S({children:s,maxTilt:o=8,radius:a="22px",className:c}){const n=V.useRef(null),t=i(0),e=i(0),u=i(50),d=i(50),y=m(t,{stiffness:200,damping:20}),M=m(e,{stiffness:200,damping:20}),b=R`radial-gradient(circle at ${u}% ${d}%, rgba(255,255,255,0.28), transparent 55%)`,j=g=>{const r=n.current.getBoundingClientRect(),f=(g.clientX-r.left)/r.width,h=(g.clientY-r.top)/r.height;e.set((f-.5)*2*o),t.set(-(h-.5)*2*o),u.set(f*100),d.set(h*100)},X=()=>{t.set(0),e.set(0)};return l.jsx(B,{className:c,children:l.jsxs(x,{ref:n,style:{rotateX:y,rotateY:M,transformStyle:"preserve-3d"},onMouseMove:j,onMouseLeave:X,children:[s,l.jsx(C,{radius:a,style:{background:b}})]})})}export{S as T};
