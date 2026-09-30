import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import ProtectedImage from '../Effects/ProtectedImage';
import dayaImg from '../../assets/daya.png';

const breathe = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.06); }
`;

const LoaderContainer = styled(motion.div)`
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

const Vignette = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 55%, rgba(0, 0, 0, 0.38) 100%);
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

const Monogram = styled(motion.div)`
  position: absolute;
  top: 28px;
  left: 32px;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: 0.08em;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const TopTag = styled(motion.div)`
  position: absolute;
  top: 30px;
  right: 32px;
  font-size: 0.66rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--text-muted);
  opacity: 0.65;
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

const RingDashed = styled(Ring)`
  inset: -14px;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  background: rgba(255, 255, 255, 0.18);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px));
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
`;

const Wordmark = styled(motion.h1)`
  margin-top: 32px;
  font-family: 'Sora', sans-serif;
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text);
  text-align: center;
`;

const Subtitle = styled(motion.p)`
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gradient);
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
  width: min(320px, 68vw);
`;

const BarTrack = styled.div`
  height: 4px;
  border-radius: 999px;
  background: var(--surface);
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--primary), var(--accent), var(--highlight));
  box-shadow: 0 0 14px rgba(91, 140, 255, 0.55);
  transition: width 0.15s linear;
`;

const StatusRow = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const StatusLabel = styled.span`
  display: flex;
  align-items: center;
  height: 1.2em;
  overflow: hidden;
`;

const Percent = styled.span`
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.06em;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Credit = styled(motion.p)`
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.66rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--text-muted);
  opacity: 0.55;
`;

const PHASES = [
  [0, 'Initializing portfolio'],
  [16, 'Loading experience'],
  [34, 'Crafting your view'],
  [52, 'Polishing pixels'],
  [70, 'Optimizing visuals'],
  [86, 'Almost ready'],
];

function Letters({ text, baseDelay }) {
  const chars = text.split('');
  return chars.map((ch, i) => (
    <motion.span
      key={`${i}-${ch}`}
      style={{ display: 'inline-block', whiteSpace: 'pre' }}
      initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.45, delay: baseDelay + i * 0.035, ease: 'easeOut' }}
    >
      {ch === ' ' ? '\u00A0' : ch}
    </motion.span>
  ));
}

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

  const status = PHASES.reduce(
    (current, [threshold, label]) => (progress >= threshold ? label : current),
    PHASES[0][1]
  );

  return (
    <LoaderContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Vignette />
      <SoftGlow />

      <Monogram
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        D.
      </Monogram>
      <TopTag
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Portfolio / 2026
      </TopTag>

      <PhotoWrap>
        <RingStatic />
        <RingDashed
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
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
          <ProtectedImage src={dayaImg} alt="Daya Shankar Adhikari" radius={64} fill />
        </Photo>
      </PhotoWrap>

      <Wordmark initial={{ opacity: 1 }}>
        <Letters text="Daya Shankar Adhikari" baseDelay={0.2} />
      </Wordmark>

      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Dot />
        Full Stack Developer
        <Dot />
      </Subtitle>

      <Location
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        {'\u2605'} Kathmandu, Nepal
      </Location>

      <ProgressWrap>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <BarTrack>
            <BarFill style={{ width: `${progress}%` }} />
          </BarTrack>
          <StatusRow>
            <StatusLabel>
              <AnimatePresence mode="wait">
                <motion.span
                  key={status}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  {status}
                </motion.span>
              </AnimatePresence>
            </StatusLabel>
            <Percent>{progress}%</Percent>
          </StatusRow>
        </motion.div>
      </ProgressWrap>

      <Credit
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        {`\u00A9`} Daya Shankar Adhikari
      </Credit>
    </LoaderContainer>
  );
}

export default Loader;