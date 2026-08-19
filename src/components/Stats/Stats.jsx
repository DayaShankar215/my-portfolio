import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaCode, FaProjectDiagram, FaBrain, FaClock } from 'react-icons/fa';

const StatsSection = styled.section`
  padding: 20px 0 110px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

const StatCard = styled(motion.div)`
  padding: 34px 18px;
  text-align: center;
  border-radius: 20px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--primary);
    box-shadow: 0 18px 44px rgba(91, 140, 255, 0.18);
  }

  svg {
    font-size: 1.9rem;
    color: var(--primary);
    margin-bottom: 12px;
  }

  .value {
    font-family: 'Sora', sans-serif;
    font-size: 2.4rem;
    font-weight: 800;
    background: var(--gradient);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .label {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin-top: 6px;
  }
`;

function CountUp({ target }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start;
    let raf;
    const duration = 1600;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

function Stats() {
  const stats = [
    { icon: <FaCode />, value: 3, suffix: '+', label: 'Years of Coding' },
    { icon: <FaProjectDiagram />, value: 10, suffix: '+', label: 'Projects Built' },
    { icon: <FaBrain />, value: 15, suffix: '+', label: 'Technical Skills' },
    { icon: <FaClock />, value: 500, suffix: '+', label: 'Hours of Learning' },
  ];

  return (
    <StatsSection>
      <div className="container">
        <StatsGrid>
          {stats.map((stat, idx) => (
            <StatCard
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {stat.icon}
              <div className="value">
                <CountUp target={stat.value} />
                {stat.suffix}
              </div>
              <div className="label">{stat.label}</div>
            </StatCard>
          ))}
        </StatsGrid>
      </div>
    </StatsSection>
  );
}

export default Stats;