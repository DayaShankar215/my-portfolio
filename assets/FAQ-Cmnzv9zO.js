import{r as l,j as e,m as n,a3 as c,a4 as d,$ as p,d as t}from"./index-Bnp4YoXJ.js";const h=t.section`
  padding: 0 0 110px;
`,m=t.div`
  max-width: 760px;
  margin: 0 auto;
`,u=t(n.div)`
  margin-bottom: 14px;
  border-radius: 18px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &.open {
    border-color: var(--primary);
    box-shadow: 0 14px 34px rgba(91, 140, 255, 0.14);
  }
`,x=t.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 20px 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;

  .q-icon {
    color: ${({open:a})=>a?"var(--primary)":"var(--text-muted)"};
    flex-shrink: 0;
    transition: color 0.3s ease;
  }

  .chev {
    flex-shrink: 0;
    color: ${({open:a})=>a?"var(--primary)":"var(--text-muted)"};
    transform: ${({open:a})=>a?"rotate(180deg)":"none"};
    transition: transform 0.3s ease, color 0.3s ease;
  }
`,y=t(n.div)`
  padding: 0 24px;
`,b=t.p`
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  padding: 0 0 22px 30px;
  margin: 0;
`,w=[{q:"Are you currently available for work?",a:"Yes! I've just completed my B.E. in Computer Engineering at NCIT and I'm actively looking for frontend / full-stack roles, internships and collaborations where I can build and solve real problems."},{q:"What technologies do you work with?",a:"Daily: React, JavaScript, Node.js, Express, MySQL and Tailwind CSS. Also comfortable with Python, Java, C/C++, Firebase, React Native, Git/GitHub, Docker and AWS."},{q:"Can you build mobile apps too?",a:"Yes — I build cross-platform mobile apps with React Native. I've worked on the Secure Shield mobile app alongside its web dashboard and backend integration."},{q:"How fast can I expect a reply?",a:"I usually respond within 24 hours. The fastest way to reach me is the contact form below — it lands straight in my inbox."},{q:"Where can I see your resume?",a:"The Resume button in the header and hero downloads my latest CV as a PDF. You can also email me at dayashankaradhikari@gmail.com for the most up-to-date version."}];function v(){const[a,r]=l.useState(0);return e.jsx(h,{id:"faq",children:e.jsxs("div",{className:"container",children:[e.jsx(n.h2,{className:"section-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:e.jsx("span",{className:"gradient-text",children:"Frequently Asked Questions"})}),e.jsx(n.p,{className:"section-subtitle",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"Quick answers to the things people usually ask."}),e.jsx(m,{children:w.map((o,s)=>{const i=a===s;return e.jsxs(u,{className:i?"open":void 0,initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},transition:{duration:.45,delay:s*.06},viewport:{once:!0,margin:"-40px"},children:[e.jsxs(x,{onClick:()=>r(i?-1:s),open:i,children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("span",{className:"q-icon",children:e.jsx(c,{})}),o.q]}),e.jsx("span",{className:"chev",children:e.jsx(d,{})})]}),e.jsx(p,{initial:!1,children:i&&e.jsx(y,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},children:e.jsx(b,{children:o.a})})})]},o.q)})})]})})}export{v as default};
