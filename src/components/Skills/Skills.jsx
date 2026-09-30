import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaMobileAlt,
  FaCode,
  FaBug,
  FaBrain,
  FaNetworkWired,
  FaAws,
  FaCloud,
} from 'react-icons/fa';
import { SiFirebase, SiNetlify } from 'react-icons/si';
import Tilt3D from '../Effects/Tilt3D';

const cubeSpin = keyframes`
  from { transform: rotateX(-18deg) rotateY(0deg); }
  50% { transform: rotateX(-18deg) rotateY(180deg); }
  to { transform: rotateX(-18deg) rotateY(360deg); }
`;

const SkillsSection = styled.section`
  background: var(--bg);
`;

const SkillsHeader = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 46px;
`;

const SkillsCube = styled.div`
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
    animation: ${cubeSpin} 9s linear infinite;
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
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 26px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillGroup = styled(motion.div)`
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
`;

const GroupHeader = styled.div`
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
`;

const SkillBar = styled.div`
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
`;

function SkillProgress({ name, note, icon, level, percent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <SkillBar>
        <div className="skill-top">
          <span className="skill-name">
            {icon}
            {name}
            {note && <span className="skill-tool">{note}</span>}
          </span>
          <span className="skill-level">{level}</span>
        </div>
        <div className="track">
          <motion.div
            className="fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </div>
      </SkillBar>
    </motion.div>
  );
}

const SummarySection = styled(motion.div)`
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
`;

const SummaryTags = styled.div`
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
`;

function Skills() {
  const groups = [
    {
      title: 'Frontend & Mobile Development',
      subtitle: 'Crafting interactive interfaces',
      icon: <FaReact />,
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 'Advanced', percent: 95 },
        { name: 'React Native', icon: <FaMobileAlt />, level: 'Advanced', percent: 90 },
        { name: 'JavaScript (ES6+)', icon: <FaJs />, level: 'Advanced', percent: 92 },
        { name: 'HTML5 & CSS3', icon: <FaHtml5 />, level: 'Advanced', percent: 96 },
      ],
    },
    {
      title: 'Backend & Programming',
      subtitle: 'Logic and server-side code',
      icon: <FaCode />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 'Basic', percent: 58 },
        { name: 'Python', icon: <FaPython />, level: 'Basic', percent: 60 },
        { name: 'Java', icon: <FaJava />, level: 'Basic', percent: 55 },
        { name: 'C / C++', icon: <FaCode />, level: 'Intermediate', percent: 72 },
      ],
    },
    {
      title: 'Database & Backend Services',
      subtitle: 'Storing and structuring data',
      icon: <FaDatabase />,
      skills: [
        { name: 'MySQL', icon: <FaDatabase />, level: 'Advanced', percent: 90 },
        { name: 'Firebase', icon: <SiFirebase />, level: 'Intermediate', percent: 78 },
      ],
    },
    {
      title: 'Cloud, Hosting & Deployment',
      subtitle: 'Shipping apps to the world',
      icon: <FaAws />,
      skills: [
        { name: 'AWS Cloud', icon: <FaAws />, level: 'Intermediate', percent: 75 },
        {
          name: 'Web Hosting & Deployment',
          note: 'Netlify',
          icon: <SiNetlify />,
          level: 'Intermediate',
          percent: 80,
        },
      ],
    },
    {
      title: 'Tools & Version Control',
      subtitle: 'Collaboration and tooling',
      icon: <FaGitAlt />,
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt />, level: 'Intermediate', percent: 82 },
      ],
    },
    {
      title: 'Testing & Other Technical Skills',
      subtitle: 'Quality, data & networking',
      icon: <FaBug />,
      skills: [
        { name: 'Manual QA Testing', icon: <FaBug />, level: 'Intermediate', percent: 76 },
        { name: 'AI / Machine Learning', icon: <FaBrain />, level: 'Intermediate', percent: 72 },
        { name: 'Cisco Packet Tracer', icon: <FaNetworkWired />, level: 'Intermediate', percent: 74 },
      ],
    },
  ];

  const resumeSkills = [
    'React.js',
    'React Native',
    'JavaScript',
    'HTML5 & CSS3',
    'MySQL',
    'Firebase',
    'Node.js',
    'Python',
    'Java',
    'C/C++',
    'Git & GitHub',
    'AWS Cloud',
    'Netlify',
    'Manual QA Testing',
    'AI/ML',
    'Cisco Packet Tracer',
  ];

  return (
    <SkillsSection id="skills">
      <div className="container">
        <SkillsHeader>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Technical Skills</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Technologies I use to design, build and ship products.
          </motion.p>

          <SkillsCube aria-hidden="true">
            <div className="scene">
              <div className="cube">
                <div className="face front">
                  <FaReact />
                </div>
                <div className="face back">
                  <FaNodeJs />
                </div>
                <div className="face right">
                  <FaDatabase />
                </div>
                <div className="face left">
                  <FaAws />
                </div>
                <div className="face top">
                  <FaCloud />
                </div>
                <div className="face bottom">
                  <FaBrain />
                </div>
              </div>
            </div>
          </SkillsCube>
        </SkillsHeader>

        <SkillsGrid>
          {groups.map((group, idx) => (
            <Tilt3D key={group.title} maxTilt={7}>
              <SkillGroup
                initial={{ opacity: 0, y: 40, rotateX: -18, transformPerspective: 900 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, transformPerspective: 900 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <GroupHeader>
                  <div className="group-icon">{group.icon}</div>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.subtitle}</p>
                  </div>
                </GroupHeader>
                {group.skills.map((skill, i) => (
                  <SkillProgress key={skill.name} {...skill} index={i} />
                ))}
              </SkillGroup>
            </Tilt3D>
          ))}
        </SkillsGrid>

        <SummarySection
          initial={{ opacity: 0, y: 40, rotateX: -18, transformPerspective: 900 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, transformPerspective: 900 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>
            <span className="gradient-text">Short Resume / Portfolio Version</span>
          </h3>
          <p>A single-line snapshot of my technical toolkit.</p>
          <SummaryTags>
            {resumeSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            ))}
          </SummaryTags>
        </SummarySection>
      </div>
    </SkillsSection>
  );
}

export default Skills;