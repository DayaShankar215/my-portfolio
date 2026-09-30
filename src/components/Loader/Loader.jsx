import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import ProtectedImage from '../Effects/ProtectedImage';
import dayaImg from '../../assets/daya.png';

const drift = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -24px) scale(1.1); }
`;

const flicker = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.65; }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const gradientSlide = keyframes`
  to { background-position: 300% 0; }
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
  background: radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.42) 100%);
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.35;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 46px 46px;
  -webkit-mask-image: radial-gradient(ellipse at center, #000 15%, transparent 72%);
  mask-image: radial-gradient(ellipse at center, #000 15%, transparent 72%);
`;

const Aurora = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;

  &.au-1 {
    width: 360px;
    height: 360px;
    top: 8%;
    left: 16%;
    background: rgba(91, 140, 255, 0.2);
    animation: ${drift} 16s ease-in-out infinite;
  }

  &.au-2 {
    width: 320px;
    height: 320px;
    right: 14%;
    bottom: 10%;
    background: rgba(139, 92, 246, 0.18);
    animation: ${drift} 20s ease-in-out infinite reverse;
  }

  &.au-3 {
    width: 240px;
    height: 240px;
    top: 60%;
    left: 46%;
    background: rgba(45, 212, 191, 0.12);
    animation: ${drift} 22s ease-in-out infinite;
  }
`;

const Corner = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  border: 0 solid rgba(148, 163, 184, 0.55);
  animation: ${flicker} 4s ease-in-out infinite;

  &.tl { top: 22px; left: 22px; border-top-width: 2px; border-left-width: 2px; }
  &.tr { top: 22px; right: 22px; border-top-width: 2px; border-right-width: 2px; }
  &.bl { bottom: 68px; left: 22px; border-bottom-width: 2px; border-left-width: 2px; }
  &.br { bottom: 68px; right: 22px; border-bottom-width: 2px; border-right-width: 2px; }
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
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientSlide} 4s linear infinite;
`;

const TopTag = styled(motion.div)`
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 0.64rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--text-muted);
  opacity: 0.65;
`;

const PhotoWrap = styled.div`
  position: relative;
  width: 156px;
  height: 156px;
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
  border: 1px dashed rgba(148, 163, 184, 0.4);
  background: rgba(255, 255, 255, 0.2);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px));
`;

const RingArc = styled(Ring)`
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px));
  opacity: 0.9;
`;

const RingPulse = styled(Ring)`
  border: 2px solid rgba(91, 140, 255, 0.5);
`;

const OrbitSpin = styled(Ring)`
  inset: -8px;
`;

const Spark = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 12px var(--primary), 0 0 22px var(--accent);

  &.s-1 { transform: translate(-50%, calc(-50% - 80px)); }
  &.s-2 { transform: translate(-50%, calc(-50% + 80px)); width: 5px; height: 5px; background: var(--highlight); box-shadow: 0 0 12px var(--highlight); }
`;

const Photo = styled(motion.div)`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--bg);
  box-shadow: 0 14px 44px rgba(0, 0, 0, 0.4);
`;

const Wordmark = styled(motion.h1)`
  margin-top: 34px;
  font-family: 'Sora', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-align: center;
  background: linear-gradient(90deg, var(--primary), var(--accent), var(--highlight), var(--primary));
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientSlide} 5s linear infinite;
`;

const Subtitle = styled(motion.p)`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-muted);
  font-weight: 600;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--gradient);
`;

const Caret = styled.span`
  display: inline-block;
  width: 2px;
  height: 14px;
  margin-left: 8px;
  background: var(--primary);
  animation: ${blink} 1.1s steps(1) infinite;
`;

const Location = styled(motion.span)`
  margin-top: 10px;
  font-size: 0.8rem;
  color: var(--text-muted);
  opacity: 0.85;
  letter-spacing: 0.04em;

  svg {
    vertical-align: -2px;
    margin-right: 6px;
    color: var(--primary);
  }
`;

const ProgressWrap = styled.div`
  margin-top: 46px;
  width: min(340px, 70vw);
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
`;

const StatusLabel = styled.span`
  display: flex;
  align-items: center;
  height: 1.2em;
  overflow: hidden;
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
`;

const PercentPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 13px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
`;

const PillDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--highlight);
  box-shadow: 0 0 10px var(--highlight);
`;

const Percent = styled.span`
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Divider = styled.div`
  position: absolute;
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
`;

const Credit = styled(motion.p)`
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.64rem;
  letter-spacing: 0.26em;
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
      initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.45, delay: baseDelay + i * 0.03, ease: 'easeOut' }}
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
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Vignette />
      <GridOverlay />
      <Aurora className="au-1" />
      <Aurora className="au-2" />
      <Aurora className="au-3" />

      <Corner className="tl" />
      <Corner className="tr" />
      <Corner className="bl" />
      <Corner className="br" />

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
        <OrbitSpin
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        >
          <Spark className="s-1" />
          <Spark className="s-2" />
        </OrbitSpin>
        <RingPulse
          initial={{ scale: 0.92, opacity: 0.7 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeOut' }}
        />
        <Photo
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <ProtectedImage src={dayaImg} alt="Daya Shankar Adhikari" radius={65} fill />
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
        <Caret />
        <Dot />
      </Subtitle>

      <Location
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.05 }}
      >
        {'\u2605'} Kathmandu, Nepal
      </Location>

      <ProgressWrap>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.45 }}
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
            <PercentPill>
              <PillDot />
              <Percent>{progress}%</Percent>
            </PercentPill>
          </StatusRow>
        </motion.div>
      </ProgressWrap>

      <Divider />
      <Credit
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.15 }}
      >
        {'\u00A9'} Daya Shankar Adhikari
      </Credit>
    </LoaderContainer>
  );
}

export default Loader;