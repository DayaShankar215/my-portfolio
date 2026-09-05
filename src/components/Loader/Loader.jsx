import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const breathe = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.06); }
`;

const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SoftGlow = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(91, 140, 255, 0.12),
    rgba(139, 92, 246, 0.08) 45%,
    transparent 70%
  );
  animation: ${breathe} 5s ease-in-out infinite;
  pointer-events: none;
`;

const MonogramWrap = styled.div`
  position: relative;
  width: 132px;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ring = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 50%;
`;

const RingStatic = styled(Ring)`
  border: 1.5px solid var(--border);
`;

const RingArc = styled(Ring)`
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 0px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 0px));
  opacity: 0.85;
`;

const Initial = styled(motion.div)`
  font-family: 'Sora', sans-serif;
  font-size: 3.4rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Wordmark = styled(motion.h1)`
  margin-top: 30px;
  font-family: 'Sora', sans-serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--text);
  margin-left: 0.28em;
`;

const Subtitle = styled(motion.p)`
  margin-top: 12px;
  font-size: 0.72rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-left: 0.34em;
`;

const ProgressWrap = styled.div`
  margin-top: 44px;
  width: min(300px, 66vw);
`;

const BarTrack = styled.div`
  height: 3px;
  border-radius: 999px;
  background: var(--surface);
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: width 0.15s linear;
`;

const StatusRow = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const Percent = styled.span`
  color: var(--text);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.06em;
`;

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start;
    let raf;
    const duration = 2200;
    const easeInOut = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setProgress(Math.round(easeInOut(p) * 100));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <LoaderContainer>
      <SoftGlow />

      <MonogramWrap>
        <RingStatic />
        <RingArc
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 0.9 }}
          transition={{
            opacity: { duration: 0.6 },
            rotate: { duration: 3.2, repeat: Infinity, ease: 'linear' },
          }}
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0 80%, var(--primary) 92%, var(--accent) 98%, transparent 100%)',
          }}
        />
        <Initial
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          D
        </Initial>
      </MonogramWrap>

      <Wordmark
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        Daya Shankar
      </Wordmark>

      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Full Stack Developer
      </Subtitle>

      <ProgressWrap>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <BarTrack>
            <BarFill style={{ width: `${progress}%` }} />
          </BarTrack>
          <StatusRow>
            <span>Loading</span>
            <Percent>{progress}%</Percent>
          </StatusRow>
        </motion.div>
      </ProgressWrap>
    </LoaderContainer>
  );
}

export default Loader;