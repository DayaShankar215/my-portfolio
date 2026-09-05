import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaLaptopCode, FaPaperPlane, FaTrophy } from 'react-icons/fa';
import styled from 'styled-components';

const JourneySection = styled.section`
  background: var(--bg);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const Timeline = styled.div`
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  padding-top: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 9px;
    width: 2px;
    background: linear-gradient(180deg, var(--primary), var(--accent));
    border-radius: 2px;
    opacity: 0.4;
  }
`;

const Item = styled(motion.div)`
  position: relative;
  padding: 0 0 40px 52px;

  &:last-child {
    padding-bottom: 8px;
  }
`;

const Dot = styled.span`
  position: absolute;
  left: 1px;
  top: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--primary);
  box-shadow: 0 0 0 5px var(--surface);

  &.now {
    border-color: var(--highlight);
    box-shadow: 0 0 14px rgba(45, 212, 191, 0.55);
  }

  &.achievement {
    border-color: #fbbf24;
    box-shadow: 0 0 14px rgba(251, 191, 36, 0.55);
  }
`;

const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 22px 26px;
  transition: all 0.3s ease;

  ${({ achievement }) =>
    achievement &&
    `
      border-color: rgba(251, 191, 36, 0.45);
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.06), var(--surface) 60%);
    `}

  &:hover {
    border-color: ${({ achievement }) =>
      achievement ? 'rgba(251, 191, 36, 0.8)' : 'var(--primary)'};
    transform: translateY(-3px);
    box-shadow: ${({ achievement }) =>
      achievement
        ? '0 14px 34px rgba(251, 191, 36, 0.2)'
        : '0 14px 34px rgba(91, 140, 255, 0.16)'};
  }
`;

const Period = styled.span`
  display: inline-block;
  padding: 4px 14px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ achievement }) => (achievement ? '#fbbf24' : 'var(--primary)')};
  background: ${({ achievement }) =>
    achievement ? 'rgba(251, 191, 36, 0.1)' : 'rgba(91, 140, 255, 0.1)'};
  border: 1px solid
    ${({ achievement }) =>
      achievement ? 'rgba(251, 191, 36, 0.35)' : 'rgba(91, 140, 255, 0.25)'};
  margin-bottom: 12px;
`;

const Title = styled.h3`
  font-size: 1.15rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: var(--accent);
  }
`;

const Text = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.65;
`;

const steps = [
  {
    icon: <FaCode />,
    period: 'Started',
    title: 'Where it all began',
    text: 'First line of HTML, then CSS, then JavaScript — and it clicked. What started as curiosity became a daily habit of building and breaking things to learn how the web works.',
  },
  {
    icon: <FaGraduationCap />,
    period: 'Learning',
    title: 'Computer Engineering @ NCIT',
    text: 'Now studying B.E. Computer Engineering in Kathmandu. University gave me the foundations — the real learning happens when the lectures end and the code editor opens.',
  },
  {
    icon: <FaLaptopCode />,
    period: 'Building',
    title: 'Shipping real projects',
    text: 'Moved from tutorials to real products: React apps, a full-stack Friend Contact List (React + Node.js + MySQL), and this portfolio — designed, built and deployed end-to-end.',
  },
  {
    icon: <FaTrophy />,
    period: 'Achievement',
    title: '1st Place — Final Year Project Exhibition',
    text: 'Our team secured the 1st position from the Computer Engineering department at the Final Year Project Exhibition held at NCIT in 2083.',
  },
  {
    icon: <FaPaperPlane />,
    period: 'Now',
    title: 'Open to new opportunities',
    text: 'Finishing my degree and polishing the edges — React Native, Node.js and AI/ML. Looking for frontend / full-stack roles and internships where I can solve real problems.',
  },
];

function Journey() {
  return (
    <JourneySection id="journey">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">My Journey</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          How I got from my first lines of code to here.
        </motion.p>

        <Timeline>
          {steps.map((step, index) => (
            <Item
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <Dot className={step.period === 'Now' ? 'now' : step.period === 'Achievement' ? 'achievement' : undefined} />
              <Card achievement={step.period === 'Achievement'}>
                <Period achievement={step.period === 'Achievement'}>
                  {step.period}
                </Period>
                <Title>
                  {step.icon}
                  {step.title}
                </Title>
                <Text>{step.text}</Text>
              </Card>
            </Item>
          ))}
        </Timeline>
      </div>
    </JourneySection>
  );
}

export default Journey;