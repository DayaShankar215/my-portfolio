import{j as a,d as e,f as n,E as r,y as i,z as l,I as c,H as p,N as x,O as d,K as b,g as m,Q as f,R as g,A as j,S as h,l as v}from"./index-Bnp4YoXJ.js";const F=v`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`,u=e.section`
  padding: 8px 0 110px;
  overflow: hidden;
`,w=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 30px;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-muted);

  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 56px;
    background: var(--border);
  }
`,y=e.div`
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
`,k=e.div`
  display: flex;
  width: max-content;
  gap: 18px;
  animation: ${F} 32s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`,S=e.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 26px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: 'Sora', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;

  svg {
    color: var(--primary);
    font-size: 1.15rem;
  }

  &:hover {
    background: var(--gradient);
    color: #fff;
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 12px 28px var(--shadow-color);

    svg {
      color: #fff;
    }
  }
`,s=[{icon:a.jsx(n,{}),label:"React"},{icon:a.jsx(r,{}),label:"JavaScript"},{icon:a.jsx(i,{}),label:"Node.js"},{icon:a.jsx(l,{}),label:"MySQL"},{icon:a.jsx(c,{}),label:"Python"},{icon:a.jsx(p,{}),label:"HTML5"},{icon:a.jsx(x,{}),label:"CSS3"},{icon:a.jsx(d,{}),label:"Bootstrap"},{icon:a.jsx(b,{}),label:"Git"},{icon:a.jsx(m,{}),label:"GitHub"},{icon:a.jsx(f,{}),label:"npm"},{icon:a.jsx(g,{}),label:"Docker"},{icon:a.jsx(j,{}),label:"AWS"},{icon:a.jsx(h,{}),label:"Figma"}];function N(){return a.jsx(u,{children:a.jsxs("div",{className:"container",children:[a.jsx(w,{children:"Toolbox"}),a.jsx(y,{children:a.jsx(k,{children:[...s,...s].map((t,o)=>a.jsxs(S,{children:[t.icon,t.label]},o))})})]})})}export{N as default};
