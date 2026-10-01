import{j as t,m as o,d as i,s as a,o as n,t as d,v as s,w as p,x as l}from"./index-Bnp4YoXJ.js";const c=i.section`
  background: var(--bg);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`,x=i.div`
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  padding-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 9px;
    width: 2px;
    background: linear-gradient(180deg, var(--primary), var(--accent));
    border-radius: 2px;
    opacity: 0.4;
  }
`,h=i(o.div)`
  position: relative;
  padding: 0 0 40px 52px;

  &:last-child {
    padding-bottom: 8px;
  }
`,g=i.span`
  position: absolute;
  left: 1px;
  top: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--primary);
  box-shadow: 0 0 0 5px var(--surface);

  &.now {
    border-color: var(--highlight);
    box-shadow: 0 0 14px rgba(45, 212, 191, 0.55);
  }

  &.achievement {
    border-color: #fbbf24;
    box-shadow: 0 0 14px rgba(251, 191, 36, 0.55);
  }
`,b=i.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 22px 26px;
  transition: all 0.3s ease;

  ${({achievement:e})=>e&&`
      border-color: rgba(251, 191, 36, 0.45);
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.06), var(--surface) 60%);
    `}

  &:hover {
    border-color: ${({achievement:e})=>e?"rgba(251, 191, 36, 0.8)":"var(--primary)"};
    transform: translateY(-3px);
    box-shadow: ${({achievement:e})=>e?"0 14px 34px rgba(251, 191, 36, 0.2)":"0 14px 34px rgba(91, 140, 255, 0.16)"};
  }
`,m=i.span`
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({achievement:e})=>e?"#fbbf24":"var(--primary)"};
  background: ${({achievement:e})=>e?"rgba(251, 191, 36, 0.1)":"rgba(91, 140, 255, 0.1)"};
  border: 1px solid
    ${({achievement:e})=>e?"rgba(251, 191, 36, 0.35)":"rgba(91, 140, 255, 0.25)"};
  margin-bottom: 12px;
`,u=i.h3`
  font-size: 1.15rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: var(--accent);
  }
`,v=i.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
`,f=[{icon:t.jsx(a,{}),period:"Started",title:"Where it all began",text:"First line of HTML, then CSS, then JavaScript — and it clicked. What started as curiosity became a daily habit of building and breaking things to learn how the web works."},{icon:t.jsx(n,{}),period:"Studies",title:"B.E. Computer Engineering @ NCIT",text:"Four years at Nepal College of Information Technology in Kathmandu. University gave me the foundations — the real learning happened when the lectures ended and the code editor opened."},{icon:t.jsx(d,{}),period:"Building",title:"Shipping real projects",text:"Moved from tutorials to real products: React apps, a full-stack Friend Contact List (React + Node.js + MySQL), and this portfolio — designed, built and deployed end-to-end."},{icon:t.jsx(s,{}),period:"Achievement",title:"1st Place — Final Year Project Exhibition",text:"Our team secured the 1st position from the Computer Engineering department at the Final Year Project Exhibition held at NCIT in 2083."},{icon:t.jsx(p,{}),period:"Graduated",title:"Bachelor's Degree Completed",text:"Completed my B.E. in Computer Engineering at NCIT. The degree is official — the real education came from shipping projects, debugging past midnight, and learning that great software is built one iteration at a time."},{icon:t.jsx(l,{}),period:"Now",title:"Open to new opportunities",text:"Degree done, portfolio live, and hungry for the next build. Leveling up on React Native, Node.js and AI/ML — looking for frontend / full-stack roles and internships where I can solve real problems."}];function w(){return t.jsx(c,{id:"journey",children:t.jsxs("div",{className:"container",children:[t.jsx(o.h2,{className:"section-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:t.jsx("span",{className:"gradient-text",children:"My Journey"})}),t.jsx(o.p,{className:"section-subtitle",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"How I got from my first lines of code to here."}),t.jsx(x,{children:f.map((e,r)=>t.jsxs(h,{initial:{opacity:0,x:40},whileInView:{opacity:1,x:0},transition:{duration:.55,delay:r*.08},viewport:{once:!0,margin:"-60px"},children:[t.jsx(g,{className:e.period==="Now"?"now":e.period==="Achievement"?"achievement":void 0}),t.jsxs(b,{achievement:e.period==="Achievement",children:[t.jsx(m,{achievement:e.period==="Achievement",children:e.period}),t.jsxs(u,{children:[e.icon,e.title]}),t.jsx(v,{children:e.text})]})]},r))})]})})}export{w as default};
