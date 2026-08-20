import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail, FiBriefcase } from 'react-icons/fi';
import styled from 'styled-components';

const AboutSection = styled.section`
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }
`;

const AboutImage = styled.div`
  position: relative;
  max-width: 400px;
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

  img {
    position: relative;
    width: 100%;
    border-radius: 26px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const AboutWatermark = styled.span`
  position: absolute;
  bottom: 18px;
  left: 22px;
  z-index: 2;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  user-select: none;
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.9rem;
    margin-bottom: 16px;
  }

  p {
    color: var(--text-muted);
    margin-bottom: 14px;
  }
`;

const Highlight = styled.p`
  font-size: 1.05rem;
  color: var(--text) !important;
`;

const InfoRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin: 26px 0 30px;
`;

const InfoCard = styled(motion.div)`
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
`;

const TagPill = styled.span`
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
`;

function About() {
  const skills = [
    'React',
    'CSS / SCSS',
    'JavaScript',
    'Node.js',
    'Python',
    'MySQL',
    'Java',
    'C / C++',
  ];

  return (
    <AboutSection id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          A quick introduction on who I am and what I do.
        </motion.p>

        <AboutContent>
          <AboutImage>
            <motion.img
              src="/daya1.png"
              alt="Daya Shankar Adhikari"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <AboutWatermark className="watermark">
              © Daya Shankar Adhikari
            </AboutWatermark>
          </AboutImage>

          <AboutText>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A dedicated Full Stack Developer based in <span className="gradient-text">Kathmandu, Nepal</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Highlight>
                I am a Computer Engineering undergraduate from NCIT, passionate about
                building clean, user-friendly digital experiences end-to-end.
              </Highlight>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              My focus is on creating responsive, accessible and performant web
              applications. I love learning new tools, solving interesting problems and
              turning ideas into working products.
            </motion.p>

            <InfoRow
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <InfoCard
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FaGraduationCap />
                <h4>Education</h4>
                <p>B.E. Computer, NCIT</p>
              </InfoCard>
              <InfoCard
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FiBriefcase />
                <h4>Status</h4>
                <p>Open to work</p>
              </InfoCard>
              <InfoCard
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* <FiMail />
                <h4>Email</h4>
                <p>dayashankaradhikari@gmail.com</p> */}
              {/* </InfoCard>
              <InfoCard
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              > */}
                <FaMapMarkerAlt />
                <h4>Location</h4>
                <p>Kathmandu, Nepal</p>
              </InfoCard>
            </InfoRow>

            <motion.h4
              style={{ marginBottom: 12 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tech I work with daily:
            </motion.h4>

            <motion.div
              style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 30 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } },
              }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.7 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <TagPill>{skill}</TagPill>
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/Daya.pdf"
                download="Daya Shankar Resume.pdf"
                className="btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FaDownload /> Download Resume
              </motion.a>
            </motion.div>
          </AboutText>
        </AboutContent>
      </div>
    </AboutSection>
  );
}

export default About;