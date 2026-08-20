import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const ProjectsSection = styled.section`
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const ProjectsFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 46px;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 9px 24px;
  background: ${({ active }) => (active ? 'var(--gradient)' : 'var(--surface)')};
  color: ${({ active }) => (active ? '#fff' : 'var(--text-muted)')};
  border: ${({ active }) => (active ? 'none' : '1px solid var(--border)')};
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ active }) => (active ? '#fff' : 'var(--text)')};
    background: ${({ active }) => (active ? 'var(--gradient)' : 'var(--surface-hover)')};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 30px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
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
`;

const ProjectImage = styled.div`
  height: 210px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, var(--bg) 0%, transparent 55%);
    opacity: 0.6;
  }
`;

const ProjectWatermark = styled.span`
  position: absolute;
  bottom: 12px;
  left: 16px;
  z-index: 2;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  user-select: none;
`;

const ProjectBody = styled.div`
  padding: 26px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

  .folder {
    font-size: 1.7rem;
    color: var(--primary);
  }
`;

const CategoryBadge = styled.span`
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--highlight);
  background: rgba(45, 212, 191, 0.1);
  border: 1px solid rgba(45, 212, 191, 0.3);
  padding: 4px 12px;
  border-radius: 999px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  color: var(--text-muted);
  font-size: 0.93rem;
  margin-bottom: auto;
`;

const ProjectTags = styled.div`
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
`;

const ActionLinks = styled.div`
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
`;

function TiltCard({ children, layout, index }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 10);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layout={layout}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
    >
      {children}
    </motion.div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Friend Contact List',
      description:
        'A full-featured contact management app with add, update, delete and friend-list features backed by a real backend.',
      tags: ['React', 'Node.js', 'Firebase'],
      category: 'Full Stack',
      image: '/contactlist.png',
      github: 'https://github.com/DayaShankar215/React-Project',
      live: 'https://snapbases.web.app/',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A modern, animated portfolio website — this very site, built with React, Framer Motion and styled-components.',
      tags: ['React', 'Framer Motion', 'Styled Components'],
      category: 'Frontend',
      image: '/Portfolio.png',
      github: 'https://github.com/DayaShankar215/my-portfolio',
      live: 'http://dayashankaradhikari.com.np/',
    },
  {
  id: 3,
  title: 'Secure Shield',
  description: 'AI-Powered SMS Spam Detection & URL Security Scanner • Frontend Development (Web + Mobile) with Spring Boot Backend (ngrok) Integration',
  tags: ['React.js', 'React Native', 'Spring Boot', 'ngrok', 'netlify'],
  category: 'Full Stack',
  image: '/secureshield.png',
  github: 'https://github.com/YOUR_USERNAME/secure-shield',
  live: 'https://secureshieldd.netlify.app/',
  role: 'Frontend Developer',
  features: [
    '📱 Real-time SMS Spam Detection Dashboard',
    '🔗 Malicious URL Scanner Interface',
    '📊 Interactive Data Visualization',
    '📱 Cross-Platform Mobile App (React Native)',
    '⚡ Real-time API Integration with Spring Boot (ngrok)'
  ],
  techStack: {
    frontend_web: ['React.js', 'Tailwind CSS', 'Axios', 'React Router', 'Netlify'],
    mobile: ['React Native', 'Expo', 'React Navigation', 'AsyncStorage'],
    backend: ['Spring Boot', 'REST APIs', 'JWT Authentication', 'ngrok'],
    ml_models: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF'],
    deployment: ['Netlify (Web)', 'ngrok (Backend Tunnel)', 'Google Play Store (Mobile)']
  },
  myContributions: [
    '✅ Designed and developed responsive Web Dashboard',
    '✅ Built Cross-Platform Mobile App using React Native',
    '✅ Integrated REST APIs from Spring Boot Backend (ngrok)',
    '✅ Configured ngrok for secure backend tunneling',
    '✅ Implemented Real-time Spam Detection UI',
    '✅ Created Interactive Data Visualizations',
    '✅ Implemented JWT Authentication & Authorization'
  ],
  apiIntegration: {
    base_url: 'https://your-ngrok-url.ngrok.io/api',
    endpoints: [
      '/auth/login',
      '/auth/register',
      '/sms/predict',
      '/url/scan',
      '/analytics/dashboard'
    ],
    authentication: 'JWT Bearer Token'
  },
  screenshots: [
    '/secureshield-web.png',
    '/secureshield-mobile.png',
    '/secureshield-dashboard.png',
    '/secureshield-ngrok.png'
  ]
}
  ];

  const filters = ['All', 'Frontend', 'Full Stack'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A selection of things I&apos;ve built while learning and growing.
        </motion.p>

        <ProjectsFilter>
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
            >
              {filter}
            </FilterButton>
          ))}
        </ProjectsFilter>

        <motion.div layout>
          <ProjectsGrid>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <TiltCard key={project.id} layout index={index}>
                  <ProjectCard>
                    <ProjectImage>
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        whileHover={{ scale: 1.08 }}
                      />
                      <ProjectWatermark className="watermark">
                        © Daya S.
                      </ProjectWatermark>
                    </ProjectImage>
                    <ProjectBody>
                      <ProjectHeader>
                        <span className="folder">
                          <FiFolder />
                        </span>
                        <CategoryBadge>{project.category}</CategoryBadge>
                      </ProjectHeader>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDesc>{project.description}</ProjectDesc>
                      <ProjectTags>
                        {project.tags.map((tag, i) => (
                          <span key={i}>{tag}</span>
                        ))}
                      </ProjectTags>
                      <ActionLinks>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <FiGithub /> Code
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <FiExternalLink /> Live Demo
                        </motion.a>
                      </ActionLinks>
                    </ProjectBody>
                  </ProjectCard>
                </TiltCard>
              ))}
            </AnimatePresence>
          </ProjectsGrid>
        </motion.div>

        <motion.div
          style={{ textAlign: 'center', marginTop: 50 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/DayaShankar215"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiExternalLink /> See More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </ProjectsSection>
  );
}

export default Projects;