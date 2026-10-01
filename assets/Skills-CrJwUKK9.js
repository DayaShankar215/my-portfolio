import{G as u,j as e,m as r,f as c,y as x,z as d,A as p,B as f,C as m,d as a,D as b,E as j,H as y,I as w,J as k,s as h,K as v,L as g,M as S,l as N}from"./index-Bnp4YoXJ.js";import{T as I}from"./Tilt3D-krW76hAU.js";function F(i){return u({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"},child:[]}]})(i)}function C(i){return u({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z"},child:[]}]})(i)}const z=N`
  from { transform: rotateX(-18deg) rotateY(0deg); }
  50% { transform: rotateX(-18deg) rotateY(180deg); }
  to { transform: rotateX(-18deg) rotateY(360deg); }
`,A=a.section`
  background: var(--bg);
`,M=a.div`
  position: relative;
  text-align: center;
  margin-bottom: 46px;
`,T=a.div`
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  width: 92px;
  height: 92px;
  transition: none;
  opacity: 0.75;

  .scene {
    width: 100%;
    height: 100%;
    perspective: 500px;
  }

  .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: ${z} 9s linear infinite;
  }

  .face {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid rgba(139, 92, 246, 0.5);
    background: linear-gradient(135deg, rgba(91, 140, 255, 0.14), rgba(139, 92, 246, 0.14));
    backdrop-filter: blur(2px);
    color: var(--primary);
    font-size: 1.5rem;
    box-shadow: inset 0 0 22px rgba(91, 140, 255, 0.18);
  }

  .front {
    transform: translateZ(46px);
  }
  .back {
    transform: rotateY(180deg) translateZ(46px);
  }
  .right {
    transform: rotateY(90deg) translateZ(46px);
  }
  .left {
    transform: rotateY(-90deg) translateZ(46px);
  }
  .top {
    transform: rotateX(90deg) translateZ(46px);
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(46px);
  }

  @media (max-width: 992px) {
    display: none;
  }
`,L=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 26px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Z=a(r.div)`
  padding: 30px;
  border-radius: 22px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: var(--accent);
    box-shadow: 0 18px 44px rgba(139, 92, 246, 0.18);
  }
`,H=a.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 26px;

  .group-icon {
    width: 50px;
    height: 50px;
    border-radius: 14px;
    background: var(--gradient);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 8px 20px var(--shadow-color);
  }

  h3 {
    font-size: 1.08rem;
  }

  p {
    font-size: 0.82rem;
    color: var(--text-muted);
  }
`,P=a.div`
  margin-bottom: 20px;

  .skill-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    .skill-name {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 0.92rem;

      svg {
        font-size: 1.15rem;
        color: var(--primary);
      }

      .skill-tool {
        font-size: 0.72rem;
        color: var(--text-muted);
        font-weight: 400;
        background: var(--surface);
        border: 1px solid var(--border);
        padding: 1px 8px;
        border-radius: 999px;
      }
    }

    .skill-level {
      font-size: 0.85rem;
      color: var(--text-muted);
      font-weight: 500;
    }
  }

  .track {
    height: 8px;
    border-radius: 999px;
    background: var(--surface);
    overflow: hidden;
    border: 1px solid var(--border);
  }

  .fill {
    height: 100%;
    border-radius: 999px;
    background: var(--gradient);
  }
`;function V({name:i,note:n,icon:t,level:s,percent:o,index:l}){return e.jsx(r.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},transition:{duration:.45,delay:l*.08},viewport:{once:!0},children:e.jsxs(P,{children:[e.jsxs("div",{className:"skill-top",children:[e.jsxs("span",{className:"skill-name",children:[t,i,n&&e.jsx("span",{className:"skill-tool",children:n})]}),e.jsx("span",{className:"skill-level",children:s})]}),e.jsx("div",{className:"track",children:e.jsx(r.div,{className:"fill",initial:{width:0},whileInView:{width:`${o}%`},transition:{duration:1,delay:l*.08,ease:"easeOut"},viewport:{once:!0}})})]})})}const B=a(r.div)`
  margin-top: 60px;
  padding: 34px;
  border-radius: 22px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);

  h3 {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  p {
    color: var(--text-muted);
    font-size: 0.88rem;
    margin-bottom: 22px;
  }
`,G=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    font-size: 0.85rem;
    font-weight: 500;
    padding: 7px 16px;
    border-radius: 999px;
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
  }
`;function Y(){const i=[{title:"Frontend & Mobile Development",subtitle:"Crafting interactive interfaces",icon:e.jsx(c,{}),skills:[{name:"React.js",icon:e.jsx(c,{}),level:"Advanced",percent:95},{name:"React Native",icon:e.jsx(b,{}),level:"Advanced",percent:90},{name:"JavaScript (ES6+)",icon:e.jsx(j,{}),level:"Advanced",percent:92},{name:"HTML5 & CSS3",icon:e.jsx(y,{}),level:"Advanced",percent:96}]},{title:"Backend & Programming",subtitle:"Logic and server-side code",icon:e.jsx(h,{}),skills:[{name:"Node.js",icon:e.jsx(x,{}),level:"Basic",percent:58},{name:"Python",icon:e.jsx(w,{}),level:"Basic",percent:60},{name:"Java",icon:e.jsx(k,{}),level:"Basic",percent:55},{name:"C / C++",icon:e.jsx(h,{}),level:"Intermediate",percent:72}]},{title:"Database & Backend Services",subtitle:"Storing and structuring data",icon:e.jsx(d,{}),skills:[{name:"MySQL",icon:e.jsx(d,{}),level:"Advanced",percent:90},{name:"Firebase",icon:e.jsx(F,{}),level:"Intermediate",percent:78}]},{title:"Cloud, Hosting & Deployment",subtitle:"Shipping apps to the world",icon:e.jsx(p,{}),skills:[{name:"AWS Cloud",icon:e.jsx(p,{}),level:"Intermediate",percent:75},{name:"Web Hosting & Deployment",note:"Netlify",icon:e.jsx(C,{}),level:"Intermediate",percent:80}]},{title:"Tools & Version Control",subtitle:"Collaboration and tooling",icon:e.jsx(v,{}),skills:[{name:"Git & GitHub",icon:e.jsx(v,{}),level:"Intermediate",percent:82}]},{title:"Testing & Other Technical Skills",subtitle:"Quality, data & networking",icon:e.jsx(g,{}),skills:[{name:"Manual QA Testing",icon:e.jsx(g,{}),level:"Intermediate",percent:76},{name:"AI / Machine Learning",icon:e.jsx(m,{}),level:"Intermediate",percent:72},{name:"Cisco Packet Tracer",icon:e.jsx(S,{}),level:"Intermediate",percent:74}]}],n=["React.js","React Native","JavaScript","HTML5 & CSS3","MySQL","Firebase","Node.js","Python","Java","C/C++","Git & GitHub","AWS Cloud","Netlify","Manual QA Testing","AI/ML","Cisco Packet Tracer"];return e.jsx(A,{id:"skills",children:e.jsxs("div",{className:"container",children:[e.jsxs(M,{children:[e.jsx(r.h2,{className:"section-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:e.jsx("span",{className:"gradient-text",children:"Technical Skills"})}),e.jsx(r.p,{className:"section-subtitle",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"Technologies I use to design, build and ship products."}),e.jsx(T,{"aria-hidden":"true",children:e.jsx("div",{className:"scene",children:e.jsxs("div",{className:"cube",children:[e.jsx("div",{className:"face front",children:e.jsx(c,{})}),e.jsx("div",{className:"face back",children:e.jsx(x,{})}),e.jsx("div",{className:"face right",children:e.jsx(d,{})}),e.jsx("div",{className:"face left",children:e.jsx(p,{})}),e.jsx("div",{className:"face top",children:e.jsx(f,{})}),e.jsx("div",{className:"face bottom",children:e.jsx(m,{})})]})})})]}),e.jsx(L,{children:i.map((t,s)=>e.jsx(I,{maxTilt:7,children:e.jsxs(Z,{initial:{opacity:0,y:40,rotateX:-18,transformPerspective:900},whileInView:{opacity:1,y:0,rotateX:0,transformPerspective:900},transition:{duration:.6,delay:s*.08},viewport:{once:!0},children:[e.jsxs(H,{children:[e.jsx("div",{className:"group-icon",children:t.icon}),e.jsxs("div",{children:[e.jsx("h3",{children:t.title}),e.jsx("p",{children:t.subtitle})]})]}),t.skills.map((o,l)=>e.jsx(V,{...o,index:l},o.name))]})},t.title))}),e.jsxs(B,{initial:{opacity:0,y:40,rotateX:-18,transformPerspective:900},whileInView:{opacity:1,y:0,rotateX:0,transformPerspective:900},transition:{duration:.6},viewport:{once:!0},children:[e.jsx("h3",{children:e.jsx("span",{className:"gradient-text",children:"Short Resume / Portfolio Version"})}),e.jsx("p",{children:"A single-line snapshot of my technical toolkit."}),e.jsx(G,{children:n.map((t,s)=>e.jsx(r.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.3,delay:s*.03},viewport:{once:!0},children:t},t))})]})]})})}export{Y as default};
