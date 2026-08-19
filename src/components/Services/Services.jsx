import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaReact, FaMobileAlt, FaPencilRuler, FaBug } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const ServicesSection = styled.section`
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 26px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  padding: 34px 28px;
  border-radius: 22px;
  background: var(--bg);
  border: 1px solid var(--border);
  position: relative;
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
`;

function Services() {
  const services = [
    {
      icon: <FaReact />,
      title: 'Web Development',
      description:
        'Modern, responsive and performant websites and web apps built with React, HTML5, CSS3 and JavaScript.',
      tag: 'Frontend',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      description:
        'Cross-platform mobile applications using React Native — one codebase for both Android and iOS.',
      tag: 'React Native',
    },
    {
      icon: <FaPencilRuler />,
      title: 'UI / UX Design',
      description:
        'Clean, user-centered interfaces and design systems focused on usability and delightful interactions.',
      tag: 'Design',
    },
    {
      icon: <FaBug />,
      title: 'Testing & QA',
      description:
        'Manual QA testing, bug reporting and quality checks to make sure products ship smooth and reliable.',
      tag: 'QA',
    },
  ];

  return (
    <ServicesSection id="services">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">What I Do</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Services I can bring value to your product with.
        </motion.p>

        <ServicesGrid>
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrap">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="tag">
                {service.tag} <FiArrowUpRight />
              </span>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  );
}

export default Services;