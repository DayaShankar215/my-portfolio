import{j as e,m as t,V as n,d as r,f as s,D as d,W as c,L as l}from"./index-Bnp4YoXJ.js";import{T as p}from"./Tilt3D-krW76hAU.js";const x=r.section`
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`,g=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 26px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,m=r(t.div)`
  padding: 34px 28px;
  border-radius: 22px;
  background: var(--bg);
  border: 1px solid var(--border);
  position: relative;
  height: 100%;
  overflow: hidden;
  transition: all 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient);
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: transparent;
    box-shadow: 0 20px 48px var(--shadow-color);

    &::before {
      opacity: 0.06;
    }

    .icon-wrap {
      background: var(--gradient);
      border-color: transparent;
      color: #fff;
      transform: rotate(-6deg) scale(1.08);
    }

    h3,
    p {
      color: var(--text);
    }
  }

  .icon-wrap {
    width: 58px;
    height: 58px;
    border-radius: 16px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    margin-bottom: 22px;
    transition: all 0.35s ease;
  }

  h3 {
    font-size: 1.18rem;
    margin-bottom: 10px;
    position: relative;
    z-index: 1;
  }

  p {
    color: var(--text-muted);
    font-size: 0.92rem;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--highlight);
    background: rgba(45, 212, 191, 0.1);
    border: 1px solid rgba(45, 212, 191, 0.3);
    padding: 5px 14px;
    border-radius: 999px;
    position: relative;
    z-index: 1;
  }
`;function h(){const a=[{icon:e.jsx(s,{}),title:"Web Development",description:"Modern, responsive and performant websites and web apps built with React, HTML5, CSS3 and JavaScript.",tag:"Frontend"},{icon:e.jsx(d,{}),title:"Mobile Development",description:"Cross-platform mobile applications using React Native — one codebase for both Android and iOS.",tag:"React Native"},{icon:e.jsx(c,{}),title:"UI / UX Design",description:"Clean, user-centered interfaces and design systems focused on usability and delightful interactions.",tag:"Design"},{icon:e.jsx(l,{}),title:"Testing & QA",description:"Manual QA testing, bug reporting and quality checks to make sure products ship smooth and reliable.",tag:"QA"}];return e.jsx(x,{id:"services",children:e.jsxs("div",{className:"container",children:[e.jsx(t.h2,{className:"section-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:e.jsx("span",{className:"gradient-text",children:"What I Do"})}),e.jsx(t.p,{className:"section-subtitle",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"Services I can bring value to your product with."}),e.jsx(g,{children:a.map((i,o)=>e.jsx(p,{maxTilt:10,children:e.jsxs(m,{initial:{opacity:0,y:40,rotateX:-18,transformPerspective:900},whileInView:{opacity:1,y:0,rotateX:0,transformPerspective:900},transition:{duration:.6,delay:o*.08},viewport:{once:!0},children:[e.jsx("div",{className:"icon-wrap",children:i.icon}),e.jsx("h3",{children:i.title}),e.jsx("p",{children:i.description}),e.jsxs("span",{className:"tag",children:[i.tag," ",e.jsx(n,{})]})]})},i.title))})]})})}export{h as default};
