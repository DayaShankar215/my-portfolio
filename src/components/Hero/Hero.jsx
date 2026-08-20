import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaDownload } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import StatusDot from '../StatusDot/StatusDot';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 110px 0 60px;
  position: relative;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 50px;
  }
`;

const Availability = styled(motion.div)`
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
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 12px;

  @media (max-width: 992px) {
    font-size: 2.7rem;
  }

  @media (max-width: 480px) {
    font-size: 2.1rem;
  }
`;

const TypeLine = styled(motion.div)`
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
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.08rem;
  color: var(--text-muted);
  max-width: 580px;
  margin-bottom: 34px;

  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialRail = styled(motion.div)`
  display: flex;
  gap: 14px;
  margin-top: 36px;

  @media (max-width: 992px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const SocialLink = styled(motion.a)`
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
`;

const HeroVisual = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    order: -1;
    max-width: 320px;
    margin: 0 auto;
  }
`;

const ImageFrame = styled(motion.div)`
  position: relative;
  width: 340px;
  height: 400px;
  border-radius: 30px;
  background: var(--gradient);
  padding: 3px;
  box-shadow: 0 24px 60px var(--shadow-color);

  @media (max-width: 992px) {
    width: 260px;
    height: 310px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 27px;
  }
`;

const Watermark = styled.span`
  position: absolute;
  bottom: 14px;
  left: 18px;
  z-index: 2;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  user-select: none;
`;

const FloatingBadge = styled(motion.div)`
  position: absolute;
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
`;

const ScrollIndicator = styled(motion.div)`
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
`;

const roles = ['Frontend Developer', 'React Developer', 'Full Stack Developer', 'UI Enthusiast'];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

function Hero() {
  const [greeting] = useState(getGreeting);
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (subIndex === current.length) {
          setTimeout(() => setDeleting(true), 1600);
          return;
        }
        setSubIndex((s) => s + 1);
      } else {
        if (subIndex === 0) {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
          return;
        }
        setSubIndex((s) => s - 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, roleIndex]);

  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/DayaShankar215', label: 'GitHub' },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/daya-shankar-adhikari-85236030a/?originalSubdomain=np',
      label: 'LinkedIn',
    },
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/share/16FptwPBLf/',
      label: 'Facebook',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/dayashankar_adhikari/',
      label: 'Instagram',
    },
  ];

  return (
    <HeroSection id="home">
      <div className="container">
        <HeroContent>
          <div>
            <Availability
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <StatusDot />
              <span className="text">Open to frontend / full-stack opportunities</span>
            </Availability>

            <HeroTitle
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="gradient-text">{greeting}!</span> I&apos;m
              <span className="gradient-text"> Daya Shankar</span>
            </HeroTitle>

            <TypeLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span>{roles[roleIndex].slice(0, subIndex)}</span>
              <span className="caret">&nbsp;</span>
            </TypeLine>

            <HeroSubtitle
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              I craft fast, accessible and beautiful web experiences with modern
              technologies like React &amp; Node.js. Currently an undergraduate at
              NCIT building my way into the industry.
            </HeroSubtitle>

            <ButtonGroup
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FiMail /> Contact Me
              </motion.a>
              <motion.a
                href="/Daya.pdf"
                download="Daya Shankar Resume.pdf"
                className="btn btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FaDownload /> Resume
              </motion.a>
            </ButtonGroup>

            <SocialRail
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.7 },
                },
              }}
            >
              {socials.map((social, idx) => (
                <SocialLink
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialRail>
          </div>

          <HeroVisual>
            <ImageFrame
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="/daya.png" alt="Daya Shankar Adhikari" />
              <Watermark className="watermark">
                © Daya Shankar Adhikari
              </Watermark>
            </ImageFrame>

            <FloatingBadge
              style={{ top: '18%', left: '-8%' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.06, rotate: -2 }}
            >
              <FaGithub />
              <div>
                GitHub
                <br />
                <span>Open Source</span>
              </div>
            </FloatingBadge>

            <FloatingBadge
              style={{ bottom: '14%', right: '-6%' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.06, rotate: 2 }}
            >
              <span style={{ fontSize: '1.4rem', color: 'var(--primary)' }}>⌨</span>
              <div>
                Full Stack
                <br />
                <span>React · Node.js</span>
              </div>
            </FloatingBadge>
          </HeroVisual>
        </HeroContent>
      </div>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        Scroll
      </ScrollIndicator>
    </HeroSection>
  );
}

export default Hero;