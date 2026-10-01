import{j as e,d as a,r as l,u as w,a as j,b as n,m as i,F as X,c as Y,P as B,e as L,f as O,g as k,h as A,i as P,k as $,l as z}from"./index-Bnp4YoXJ.js";const U=a.span`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--highlight);

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: var(--highlight);
    opacity: 0.4;
    animation: pulse-ring 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse-ring {
    0% {
      transform: scale(0.6);
      opacity: 0.5;
    }
    70% {
      transform: scale(1.6);
      opacity: 0;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
`;function V(){return e.jsx(U,{})}const _=z`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,K=z`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,W=a.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 110px 0 60px;
  position: relative;
`,q=a.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 50px;
  }
`,J=a(i.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 26px;

  span.text {
    color: var(--text);
  }
`,Q=a(i.h1)`
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 12px;

  @media (max-width: 992px) {
    font-size: 2.7rem;
  }

  @media (max-width: 480px) {
    font-size: 2.1rem;
  }
`,Z=a(i.div)`
  font-family: 'Sora', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-muted);
  min-height: 2.2rem;
  margin-bottom: 24px;

  span {
    color: var(--highlight);
  }

  .caret {
    display: inline-block;
    width: 3px;
    background: var(--gradient);
    border-radius: 2px;
    margin-left: 4px;
    animation: caret-blink 0.9s step-end infinite;
    vertical-align: text-bottom;
  }

  @keyframes caret-blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`,ee=a(i.p)`
  font-size: 1.08rem;
  color: var(--text-muted);
  max-width: 580px;
  margin-bottom: 34px;

  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`,te=a(i.div)`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }
`,ae=a(i.div)`
  display: flex;
  gap: 14px;
  margin-top: 36px;

  @media (max-width: 992px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`,ie=a(i.a)`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background: var(--gradient);
    border-color: transparent;
    transform: translateY(-4px);
    box-shadow: 0 10px 24px var(--shadow-color);
  }
`,re=a.div`
  position: relative;
  display: flex;
  justify-content: center;
  perspective: 1200px;
  transform-style: preserve-3d;

  @media (max-width: 992px) {
    order: -1;
    max-width: 320px;
    margin: 0 auto;
  }
`,ne=a(i.div)`
  position: relative;
  width: 340px;
  height: 400px;
  border-radius: 30px;
  background: var(--gradient);
  padding: 3px;
  box-shadow: 0 24px 60px var(--shadow-color);
  z-index: 1;

  @media (max-width: 992px) {
    width: 260px;
    height: 310px;
  }
`,oe=a.span`
  position: absolute;
  inset: -12px;
  border-radius: 36px;
  background: conic-gradient(
    from 0deg,
    var(--primary),
    var(--accent),
    var(--highlight),
    var(--primary)
  );
  animation: ${K} 5s linear infinite;
  filter: blur(16px);
  opacity: 0.6;
  z-index: -1;
`,se=a.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 470px;
  height: 470px;
  margin: -235px 0 0 -235px;
  transform: rotateX(62deg);
  transform-style: preserve-3d;
  z-index: 0;

  @media (max-width: 992px) {
    width: 350px;
    height: 350px;
    margin: -175px 0 0 -175px;
  }
`,S=a.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid rgba(91, 140, 255, 0.22);
  animation: ${_} ${({slow:s})=>s||14}s linear infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -12px;
    border: 1px dashed rgba(139, 92, 246, 0.3);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    width: 13px;
    height: 13px;
    margin-left: -6px;
    border-radius: 50%;
    background: var(--highlight);
    box-shadow: 0 0 18px 5px rgba(45, 212, 191, 0.55);
  }
`,g=a(i.div)`
  position: absolute;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.25);
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(8px);

  svg {
    font-size: 1.2rem;
    color: var(--highlight);
  }

  span {
    color: var(--text-muted);
    font-weight: 400;
    font-size: 0.76rem;
  }
`,le=a.span`
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 18px;
  border-radius: 14px;
  background: var(--surface);
  border: 1px solid var(--border);

  .num {
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    font-size: 1.02rem;
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .lbl {
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
  }
`,de=a(i.div)`
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  .mouse {
    width: 26px;
    height: 42px;
    border: 2px solid var(--text-muted);
    border-radius: 14px;
    display: flex;
    justify-content: center;
    padding-top: 6px;

    .wheel {
      width: 4px;
      height: 8px;
      border-radius: 4px;
      background: var(--primary);
      animation: scroll-pulse 1.6s ease-in-out infinite;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,u=["Frontend Developer","React Developer","Full Stack Developer","UI Enthusiast"];function ce(){const s=new Date().getHours();return s<12?"Good Morning":s<17?"Good Afternoon":"Good Evening"}function xe(){const[s]=l.useState(ce),[x,I]=l.useState(0),[d,f]=l.useState(0),[m,b]=l.useState(!1),y=w(0),v=w(0),c=j(y,{stiffness:140,damping:20}),p=j(v,{stiffness:140,damping:20}),F=n(c,t=>t*-16),H=n(p,t=>t*-12),N=n(c,t=>t*-40),D=n(p,t=>t*-30),T=n(c,t=>t*-32),C=n(p,t=>t*-24),R=n(c,t=>t*-56),G=n(p,t=>t*-42),E=t=>{const r=t.currentTarget.getBoundingClientRect(),h=(t.clientX-r.left)/r.width-.5,o=(t.clientY-r.top)/r.height-.5;y.set(h),v.set(o)};l.useEffect(()=>{const t=u[x],h=setTimeout(()=>{if(m){if(d===0){b(!1),I(o=>(o+1)%u.length);return}f(o=>o-1)}else{if(d===t.length){setTimeout(()=>b(!0),1600);return}f(o=>o+1)}},m?45:90);return()=>clearTimeout(h)},[d,m,x]);const M=[{icon:e.jsx(k,{}),href:"https://github.com/DayaShankar215",label:"GitHub"},{icon:e.jsx(A,{}),href:"https://www.linkedin.com/in/daya-shankar-adhikari-85236030a/?originalSubdomain=np",label:"LinkedIn"},{icon:e.jsx(P,{}),href:"https://www.facebook.com/share/16FptwPBLf/",label:"Facebook"},{icon:e.jsx($,{}),href:"https://www.instagram.com/dayashankar_adhikari/",label:"Instagram"}];return e.jsxs(W,{id:"home",children:[e.jsx("div",{className:"container",children:e.jsxs(q,{children:[e.jsxs("div",{children:[e.jsxs(J,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx(V,{}),e.jsx("span",{className:"text",children:"Open to frontend / full-stack opportunities"})]}),e.jsxs(Q,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1},children:[e.jsxs("span",{className:"gradient-text",children:[s,"!"]})," I'm",e.jsx("span",{className:"gradient-text",children:" Daya Shankar"})]}),e.jsxs(Z,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.3},children:[e.jsx("span",{children:u[x].slice(0,d)}),e.jsx("span",{className:"caret",children:" "})]}),e.jsx(ee,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,delay:.4},children:"I build for the web from Kathmandu — React on the frontend, Node.js on the back, and a genuine obsession for getting the details right. B.E. in Computer Engineering completed at NCIT — ready for the next build."}),e.jsxs(te,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,delay:.5},children:[e.jsxs(i.a,{href:"#contact",className:"btn",whileHover:{scale:1.04},whileTap:{scale:.96},children:[e.jsx(X,{})," Contact Me"]}),e.jsxs(i.a,{href:"/Daya.pdf",download:"Daya Shankar Resume.pdf",className:"btn btn-outline",whileHover:{scale:1.04},whileTap:{scale:.96},children:[e.jsx(Y,{})," Resume"]})]}),e.jsx(ae,{initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.7}}},children:M.map((t,r)=>e.jsx(ie,{href:t.href,target:"_blank",rel:"noreferrer","aria-label":t.label,variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},whileHover:{scale:1.1},whileTap:{scale:.9},children:t.icon},r))}),e.jsx(i.div,{initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08,delayChildren:.85}}},style:{display:"flex",gap:12,marginTop:30,flexWrap:"wrap"},children:[{num:"3+",lbl:"Years Coding"},{num:"10+",lbl:"Projects Built"},{num:"B.E.",lbl:"Comp. Eng. · NCIT"}].map((t,r)=>e.jsx(i.span,{variants:{hidden:{opacity:0,y:16},visible:{opacity:1,y:0}},children:e.jsxs(le,{children:[e.jsx("span",{className:"num",children:t.num}),e.jsx("span",{className:"lbl",children:t.lbl})]})},r))})]}),e.jsxs(re,{onMouseMove:E,children:[e.jsxs(se,{"aria-hidden":"true",children:[e.jsx(S,{}),e.jsx(S,{slow:"22",style:{inset:"14%"}})]}),e.jsxs(ne,{style:{x:F,y:H},initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.3},children:[e.jsx(oe,{}),e.jsx(B,{src:L,alt:"Daya Shankar Adhikari",watermark:"© Daya Shankar Adhikari",radius:27,fill:!0})]}),e.jsxs(g,{style:{top:"-5%",left:"3%",x:R,y:G,z:52},initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.85},whileHover:{scale:1.06,rotate:-2},children:[e.jsx(O,{}),e.jsxs("div",{children:["React",e.jsx("br",{}),e.jsx("span",{children:"UI Library"})]})]}),e.jsxs(g,{style:{top:"18%",left:"-8%",x:N,y:D,z:42},initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},transition:{duration:.5,delay:.9},whileHover:{scale:1.06,rotate:-2},children:[e.jsx(k,{}),e.jsxs("div",{children:["GitHub",e.jsx("br",{}),e.jsx("span",{children:"Open Source"})]})]}),e.jsxs(g,{style:{bottom:"14%",right:"-6%",x:T,y:C,z:34},initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},transition:{duration:.5,delay:1.1},whileHover:{scale:1.06,rotate:2},children:[e.jsx("span",{style:{fontSize:"1.4rem",color:"var(--primary)"},children:"⌨"}),e.jsxs("div",{children:["Full Stack",e.jsx("br",{}),e.jsx("span",{children:"React · Node.js"})]})]})]})]})}),e.jsxs(de,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.6},children:[e.jsx("div",{className:"mouse",children:e.jsx("div",{className:"wheel"})}),"Scroll"]})]})}export{xe as default};
