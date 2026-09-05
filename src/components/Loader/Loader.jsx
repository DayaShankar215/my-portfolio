import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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

const LoaderOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
`;

const Orb1 = styled(LoaderOrb)`
  width: 480px;
  height: 480px;
  top: -120px;
  left: -120px;
  background: radial-gradient(circle, rgba(91, 140, 255, 0.45), transparent 70%);
`;

const Orb2 = styled(LoaderOrb)`
  width: 460px;
  height: 460px;
  bottom: -140px;
  right: -120px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.45), transparent 70%);
`;

const Orb3 = styled(LoaderOrb)`
  width: 300px;
  height: 300px;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(45, 212, 191, 0.28), transparent 70%);
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: 0.12;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
`;

const Stage = styled.div`
  position: relative;
  width: 190px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 600px;
`;

const Ring = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 50%;
`;

const ConicRing = styled(Ring)`
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 7px), #000 calc(100% - 6px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 7px), #000 calc(100% - 6px));
`;

const Orbit = styled(motion.div)`
  position: absolute;
  inset: 10px;
  border-radius: 50%;
`;

const OrbitDot = styled(motion.div)`
  position: absolute;
  top: -5px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gradient);
  box-shadow: 0 0 14px var(--primary), 0 0 34px var(--accent);
`;

const GlowBehind = styled(motion.div)`
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(91, 140, 255, 0.4), rgba(139, 92, 246, 0.25) 45%, transparent 70%);
  filter: blur(6px);
`;

const Letter = styled(motion.span)`
  font-family: 'Sora', sans-serif;
  font-size: 5.4rem;
  font-weight: 800;
  display: inline-block;
`;

const NameRow = styled.div`
  margin-top: 30px;
  font-family: 'Sora', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  perspective: 600px;
  display: flex;
  gap: 4px;
`;

const Percent = styled(motion.div)`
  margin-top: 34px;
  font-family: 'Sora', sans-serif;
  font-size: 2.6rem;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-variant-numeric: tabular-nums;
  height: 3rem;
  line-height: 1;
`;

const BarTrack = styled.div`
  width: min(320px, 70vw);
  height: 5px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  overflow: hidden;
  margin-top: 14px;
`;

const BarFill = styled(motion.div)`
  height: 100%;
  border-radius: 999px;
  background: var(--gradient);
  box-shadow: 0 0 16px var(--primary);
`;

const Tagline = styled(motion.p)`
  margin-top: 20px;
  color: var(--text-muted);
  font-size: 0.86rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start;
    const duration = 2000;
    const easeOutExpo = (p) => (p === 1 ? 1 : 1 - Math.pow(2, -10 * p));
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setProgress(Math.round(easeOutExpo(p) * 100));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const name = ['D', '.', 'A', 'Y', 'A'];

  return (
    <LoaderContainer>
      <Orb1
        animate={{ scale: [1, 1.25, 1], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Orb2
        animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Orb3
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <GridOverlay />

      <Stage>
        <GlowBehind
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: [1, 1.15, 1] }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
          }}
        />

        <ConicRing
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ opacity: { duration: 0.5 }, rotate: { duration: 1.1, repeat: Infinity, ease: 'linear' } }}
          style={{
            background: 'conic-gradient(from 0deg, transparent 0 70%, var(--primary) 84%, var(--accent) 94%, transparent 100%)',
          }}
        />

        <ConicRing
          style={{
            inset: '22px',
            background: 'conic-gradient(from 180deg, transparent 0 72%, var(--highlight) 86%, var(--primary) 96%, transparent 100%)',
          }}
          initial={{ opacity: 0, rotate: 180 }}
          animate={{ opacity: 1, rotate: -180 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 },
            rotate: { duration: 1.6, repeat: Infinity, ease: 'linear' },
          }}
        />

        <Orbit
          animate={{ rotate: 360 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
        >
          <OrbitDot />
          <OrbitDot style={{ top: 'auto', bottom: -5, left: 'calc(50% - 5px)' }} />
        </Orbit>

        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 2, transformStyle: 'preserve-3d' }}
        >
          <Letter className="gradient-text">D</Letter>
        </motion.div>
      </Stage>

      <NameRow>
        {name.map((letter, i) => (
          <Letter
            key={i}
            className={i === 1 ? 'gradient-text' : undefined}
            initial={{ opacity: 0, y: 26, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: 'easeOut' }}
            style={{ fontSize: '1.6rem', display: 'inline-block' }}
          >
            {letter}
          </Letter>
        ))}
      </NameRow>

      <Percent key={progress}>
        {progress}%
      </Percent>

      <BarTrack>
        <BarFill
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </BarTrack>

      <Tagline
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.2, times: [0, 0.15, 0.85, 1] }}
      >
        Crafting your experience
      </Tagline>
    </LoaderContainer>
  );
}

export default Loader;