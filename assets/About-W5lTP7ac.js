import{j as i,m as e,P as s,n as d,o as l,p as c,q as p,c as h,d as a}from"./index-Bnp4YoXJ.js";import{T as x}from"./Tilt3D-krW76hAU.js";const m=a.section`
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`,y=a.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }
`,u=a.div`
  position: relative;
  max-width: 400px;
  height: 100%;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    inset: -16px;
    background: var(--gradient-soft);
    border-radius: 30px;
    z-index: 0;
    transform: rotate(-3deg);
  }

  img,
  canvas {
    position: relative;
    width: 100%;
    border-radius: 26px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;a(e.a)`
  display: inline-block;
  margin-top: 30px;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: green;
    transform: translateY(-2px);
  }
`;const g=a(e.span)`
  font-family: 'Great Vibes', cursive;
  font-size: 2.6rem;
  color: var(--primary);
  display: block;
  margin-top: 26px;
  line-height: 1.1;
  transform: rotate(-2deg);
`,v=a.div`
  h3 {
    font-size: 1.9rem;
    margin-bottom: 16px;
  }

  p {
    color: var(--text-muted);
    margin-bottom: 14px;
  }
`,w=a.p`
  font-size: 1.05rem;
  color: var(--text) !important;
`,b=a(e.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin: 26px 0 30px;
`,r=a(e.div)`
  flex: 1;
  min-width: 160px;
  padding: 18px 20px;
  border-radius: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary);
    box-shadow: 0 12px 30px rgba(91, 140, 255, 0.18);
  }

  svg {
    font-size: 1.4rem;
    color: var(--primary);
    margin-bottom: 10px;
  }

  h4 {
    font-size: 0.82rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--text-muted);
    margin-bottom: 4px;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text);
    font-weight: 500;
  }
`,f=a.span`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.84rem;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  transition: all 0.25s ease;

  &:hover {
    color: #fff;
    background: var(--gradient);
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px var(--shadow-color);
  }
`;function I(){const t=["React","CSS / SCSS","JavaScript","Node.js","Python","MySQL","Java","C / C++"];return i.jsx(m,{id:"about",children:i.jsxs("div",{className:"container",children:[i.jsx(e.h2,{className:"section-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:i.jsx("span",{className:"gradient-text",children:"About Me"})}),i.jsx(e.p,{className:"section-subtitle",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"A quick introduction on who I am and what I do."}),i.jsxs(y,{children:[i.jsx(x,{maxTilt:9,radius:"26px",children:i.jsx(u,{children:i.jsx(e.div,{initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},transition:{duration:.6},viewport:{once:!0},children:i.jsx(s,{src:d,alt:"Daya Shankar Adhikari",watermark:"© Daya Shankar Adhikari",radius:26})})})}),i.jsxs(v,{children:[i.jsxs(e.h3,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:["A dedicated Full Stack Developer based in ",i.jsx("span",{className:"gradient-text",children:"Kathmandu, Nepal"})]}),i.jsx(e.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.2},viewport:{once:!0},children:i.jsx(w,{children:"I'm glad you're here. I'm a Computer Engineering graduate (B.E., NCIT) who fell in love with building for the web — and hasn't stopped since."})}),i.jsx(e.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.3},viewport:{once:!0},children:"It started with a simple HTML page and curiosity. Today I design, build and ship web experiences end-to-end — React on the frontend, Node.js and databases on the back. I'm the kind of person who reads the docs for fun, reviews my own code twice, and stays until the details feel right."}),i.jsxs(b,{initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},variants:{hidden:{},visible:{transition:{staggerChildren:.1}}},children:[i.jsxs(r,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},children:[i.jsx(l,{}),i.jsx("h4",{children:"Education"}),i.jsx("p",{children:"B.E. Computer Engineering · NCIT"})]}),i.jsxs(r,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},children:[i.jsx(c,{}),i.jsx("h4",{children:"Status"}),i.jsx("p",{children:"Open to work"})]}),i.jsxs(r,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},children:[i.jsx(p,{}),i.jsx("h4",{children:"Location"}),i.jsx("p",{children:"Kathmandu, Nepal"})]})]}),i.jsx(e.h4,{style:{marginBottom:12},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.4},viewport:{once:!0},children:"Tech I work with daily:"}),i.jsx(e.div,{style:{display:"flex",gap:10,flexWrap:"wrap",marginBottom:30},initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:{hidden:{},visible:{transition:{staggerChildren:.05,delayChildren:.4}}},children:t.map((o,n)=>i.jsx(e.span,{variants:{hidden:{opacity:0,scale:.7},visible:{opacity:1,scale:1}},children:i.jsx(f,{children:o})},n))}),i.jsxs(e.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.5},viewport:{once:!0},children:[i.jsxs(e.a,{href:"/Daya.pdf",download:"Daya Shankar Resume.pdf",className:"btn",whileHover:{scale:1.04},whileTap:{scale:.96},children:[i.jsx(h,{})," Download Resume"]}),i.jsx(g,{children:"Daya Shankar Adhikari"})]})]})]})]})})}export{I as default};
