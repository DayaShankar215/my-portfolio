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

const PhotoWrap = styled.div`
  position: relative;
  width: 148px;
  height: 148px;
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
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 1px));
  opacity: 0.9;
`;

const Photo = styled(motion.div)`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--bg);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Wordmark = styled(motion.h1)`
  margin-top: 30px;
  font-family: 'Sora', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--text);
  text-align: center;
`;

const Subtitle = styled(motion.p)`
  margin-top: 12px;
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-left: 0.3em;
`;

const Location = styled(motion.span)`
  margin-top: 10px;
  font-size: 0.8rem;
  color: var(--text-muted);
  opacity: 0.85;

  svg {
    vertical-align: -2px;
    margin-right: 6px;
    color: var(--primary);
  }
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

      <PhotoWrap>
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
        <Photo
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <img src="/daya.png" alt="Daya Shankar Adhikari" />
        </Photo>
      </PhotoWrap>

      <Wordmark
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        Daya Shankar Adhikari
      </Wordmark>

      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        Full Stack Developer
      </Subtitle>

      <Location
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        Kathmandu, Nepal
      </Location>

      <ProgressWrap>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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