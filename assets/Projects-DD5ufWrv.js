import{r as b,Z as k,_ as w,j as e,m as r,$ as j,P as S,a0 as P,a1 as I,a2 as u,d as i,u as m,a as x}from"./index-Bnp4YoXJ.js";const R="/assets/secureshield-1fGp5zrd.png",F="/assets/janaki-GHeUKz0V.png",T=i.section`
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`,A=i.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 46px;
  flex-wrap: wrap;
`,D=i(r.button)`
  padding: 9px 24px;
  background: ${({active:a})=>a?"var(--gradient)":"var(--surface)"};
  color: ${({active:a})=>a?"#fff":"var(--text-muted)"};
  border: ${({active:a})=>a?"none":"1px solid var(--border)"};
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    color: ${({active:a})=>a?"#fff":"var(--text)"};
    background: ${({active:a})=>a?"var(--gradient)":"var(--surface-hover)"};
  }
`,C=i(r.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 30px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,M=i(r.div)`
  border-radius: 22px;
  overflow: hidden;
  background: var(--bg);
  border: 1px solid var(--border);
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
    box-shadow: 0 22px 50px rgba(91, 140, 255, 0.2);
  }
`,N=i.div`
  height: 210px;
  overflow: hidden;
  position: relative;

  canvas {
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover canvas {
    transform: scale(1.08);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, var(--bg) 0%, transparent 55%);
    opacity: 0.6;
    pointer-events: none;
  }
`,z=i.div`
  padding: 26px;
  display: flex;
  flex-direction: column;
  flex: 1;
`,B=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  .folder {
    font-size: 1.7rem;
    color: var(--primary);
  }
`,E=i.span`
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--highlight);
  background: rgba(45, 212, 191, 0.1);
  border: 1px solid rgba(45, 212, 191, 0.3);
  padding: 4px 12px;
  border-radius: 999px;
`,L=i.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`,J=i.p`
  color: var(--text-muted);
  font-size: 0.93rem;
  margin-bottom: auto;
`,V=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;

  span {
    font-size: 0.76rem;
    padding: 4px 12px;
    border-radius: 999px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text);
  }
`,W=i.div`
  display: flex;
  gap: 14px;
  margin-top: 22px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-muted);
    padding: 9px 16px;
    border-radius: 12px;
    border: 1px solid var(--border);
    transition: all 0.3s ease;

    svg {
      font-size: 1.1rem;
    }

    &:hover {
      color: #fff;
      background: var(--gradient);
      border-color: transparent;
      transform: translateY(-3px);
      box-shadow: 0 10px 24px var(--shadow-color);
    }
  }
`;function _({children:a,layout:c,index:o}){const s=b.useRef(null),n=m(0),t=m(0),d=x(n,{stiffness:180,damping:18}),p=x(t,{stiffness:180,damping:18}),g=h=>{const l=s.current.getBoundingClientRect(),v=(h.clientX-l.left)/l.width-.5,y=(h.clientY-l.top)/l.height-.5;t.set(v*10),n.set(-y*10)},f=()=>{n.set(0),t.set(0)};return e.jsx(r.div,{ref:s,layout:c,initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.4,delay:o*.1},viewport:{once:!0},style:{rotateX:d,rotateY:p,transformPerspective:900},onMouseMove:g,onMouseLeave:f,children:a})}function Y(){const[a,c]=b.useState("All"),o=[{id:1,title:"Friend Contact List",description:"A full-featured contact management app with add, update, delete and friend-list features backed by a real backend.",tags:["React","Node.js","Firebase"],category:"Full Stack",image:k,github:"https://github.com/DayaShankar215/React-Project",live:"https://snapbases.web.app/"},{id:2,title:"Portfolio Website",description:"A modern, animated portfolio website — this very site, built with React, Framer Motion and styled-components.",tags:["React","Framer Motion","Styled Components"],category:"Frontend",image:w,github:"https://github.com/DayaShankar215/my-portfolio",live:"http://dayashankaradhikari.com.np/"},{id:3,title:"Secure Shield",description:"AI-Powered SMS Spam Detection & URL Security Scanner • Frontend Development (Web + Mobile) with Spring Boot Backend (ngrok) Integration",tags:["React.js","React Native","Spring Boot","ngrok","netlify"],category:"Full Stack",image:R,github:"https://github.com/YOUR_USERNAME/secure-shield",live:"https://secureshieldd.netlify.app/",role:"Frontend Developer",features:["📱 Real-time SMS Spam Detection Dashboard","🔗 Malicious URL Scanner Interface","📊 Interactive Data Visualization","📱 Cross-Platform Mobile App (React Native)","⚡ Real-time API Integration with Spring Boot (ngrok)"],techStack:{frontend_web:["React.js","Tailwind CSS","Axios","React Router","Netlify"],mobile:["React Native","Expo","React Navigation","AsyncStorage"],backend:["Spring Boot","REST APIs","JWT Authentication","ngrok"],ml_models:["Python","Scikit-learn","NLP","TF-IDF"],deployment:["Netlify (Web)","ngrok (Backend Tunnel)","Google Play Store (Mobile)"]},myContributions:["✅ Designed and developed responsive Web Dashboard","✅ Built Cross-Platform Mobile App using React Native","✅ Integrated REST APIs from Spring Boot Backend (ngrok)","✅ Configured ngrok for secure backend tunneling","✅ Implemented Real-time Spam Detection UI","✅ Created Interactive Data Visualizations","✅ Implemented JWT Authentication & Authorization"],apiIntegration:{base_url:"https://your-ngrok-url.ngrok.io/api",endpoints:["/auth/login","/auth/register","/sms/predict","/url/scan","/analytics/dashboard"],authentication:"JWT Bearer Token"},screenshots:["/secureshield-web.png","/secureshield-mobile.png","/secureshield-dashboard.png","/secureshield-ngrok.png"]},{id:4,title:"Janaki Technical Training Center",description:"Official website for Janaki Technical Training Center Pvt. Ltd. — course listings, admissions, certificates, admin panel and contact, backed by Firebase and EmailJS.",tags:["React","Tailwind CSS","Firebase","EmailJS"],category:"Full Stack",image:F,github:"https://github.com/DayaShankar215/Janaki-Website",live:"https://janakitechnical.com.np"}],s=["All","Frontend","Full Stack"],n=a==="All"?o:o.filter(t=>t.category===a);return e.jsx(T,{id:"projects",children:e.jsxs("div",{className:"container",children:[e.jsx(r.h2,{className:"section-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:e.jsx("span",{className:"gradient-text",children:"Featured Projects"})}),e.jsx(r.p,{className:"section-subtitle",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1},viewport:{once:!0},children:"A selection of things I've built while learning and growing."}),e.jsx(A,{children:s.map(t=>e.jsx(D,{active:a===t,onClick:()=>c(t),whileHover:{scale:1.05},whileTap:{scale:.94},children:t},t))}),e.jsx(r.div,{layout:!0,children:e.jsx(C,{children:e.jsx(j,{mode:"popLayout",children:n.map((t,d)=>e.jsx(_,{layout:!0,index:d,children:e.jsxs(M,{children:[e.jsx(N,{children:e.jsx(S,{src:t.image,alt:t.title,watermark:"© Daya S.",fill:!0})}),e.jsxs(z,{children:[e.jsxs(B,{children:[e.jsx("span",{className:"folder",children:e.jsx(P,{})}),e.jsx(E,{children:t.category})]}),e.jsx(L,{children:t.title}),e.jsx(J,{children:t.description}),e.jsx(V,{children:t.tags.map((p,g)=>e.jsx("span",{children:p},g))}),e.jsxs(W,{children:[e.jsxs(r.a,{href:t.github,target:"_blank",rel:"noreferrer",whileHover:{scale:1.03},whileTap:{scale:.96},children:[e.jsx(I,{})," Code"]}),e.jsxs(r.a,{href:t.live,target:"_blank",rel:"noreferrer",whileHover:{scale:1.03},whileTap:{scale:.96},children:[e.jsx(u,{})," Live Demo"]})]})]})]})},t.id))})})}),e.jsx(r.div,{style:{textAlign:"center",marginTop:50},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:e.jsxs(r.a,{href:"https://github.com/DayaShankar215",target:"_blank",rel:"noreferrer",className:"btn btn-outline",whileHover:{scale:1.04},whileTap:{scale:.96},children:[e.jsx(u,{})," See More on GitHub"]})})]})})}export{Y as default};
