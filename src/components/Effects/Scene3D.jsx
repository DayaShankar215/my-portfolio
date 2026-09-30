import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-16px) rotate(8deg); }
`;

const spinCube = keyframes`
  from { transform: rotateX(-24deg) rotateY(0deg); }
  to { transform: rotateX(-24deg) rotateY(360deg); }
`;

const orbFloat = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-22px) scale(1.08); }
`;

const Layer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  perspective: 1100px;
  overflow: hidden;
  opacity: 0.65;
`;

const Parallax = styled(motion.div)`
  position: absolute;
  transform-style: preserve-3d;
`;

const OrbitWrap = styled.div`
  position: absolute;
  inset: 0;
  transform: rotateX(60deg);
`;

const OrbitRing = styled.div`
  position: absolute;
  inset: 0;
  border: 2px solid rgba(91, 140, 255, 0.18);
  border-radius: 50%;
  animation: ${drift} 11s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -14px;
    border: 1px dashed rgba(139, 92, 246, 0.3);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--highlight);
    box-shadow: 0 0 18px 4px rgba(45, 212, 191, 0.5);
  }
`;

const CubeWrap = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${spinCube} 16s linear infinite;
`;

const CubeFace = styled.div`
  position: absolute;
  inset: 0;
  border: 1px solid rgba(139, 92, 246, 0.4);
  background: rgba(139, 92, 246, 0.07);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.92rem;
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  color: rgba(91, 140, 255, 0.9);
  text-shadow: 0 0 12px rgba(91, 140, 255, 0.5);
`;

const Sphere = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 32% 28%,
    rgba(91, 140, 255, 0.5),
    rgba(139, 92, 246, 0.16) 55%,
    transparent 74%
  );
  animation: ${orbFloat} 12s ease-in-out infinite;
`;

const Particle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ c }) => c};
  opacity: 0.5;
  animation: ${orbFloat} ${({ d }) => d}s ease-in-out infinite;
`;

const dots = [
  { top: '22%', left: '68%', size: 7, color: 'var(--highlight)', depth: 40, dur: 9, delay: 0.4 },
  { top: '64%', left: '86%', size: 5, color: 'var(--primary)', depth: 28, dur: 11, delay: 1.2 },
  { top: '78%', left: '12%', size: 6, color: 'var(--accent)', depth: 52, dur: 8, delay: 0.8 },
  { top: '12%', left: '20%', size: 4, color: 'var(--highlight)', depth: 34, dur: 10, delay: 1.6 },
  { top: '44%', left: '4%', size: 8, color: 'var(--primary)', depth: 46, dur: 9, delay: 2.1 },
];

const cubeLetters = ['R', 'N', 'DB', 'CL', 'T', 'AI'];

function FloatingDot({ dot, sx, sy }) {
  const x = useTransform(sx, (v) => v * dot.depth);
  const y = useTransform(sy, (v) => v * dot.depth * 0.6);
  return (
    <Parallax
      style={{
        top: dot.top,
        left: dot.left,
        width: dot.size,
        height: dot.size,
        x,
        y,
      }}
    >
      <Particle c={dot.color} d={dot.dur} />
    </Parallax>
  );
}

function Scene3D() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const ringX = useTransform(sx, (v) => v * 60);
  const ringY = useTransform(sy, (v) => v * 40);
  const cubeX = useTransform(sx, (v) => v * -80);
  const cubeY = useTransform(sy, (v) => v * -50);
  const sphereX = useTransform(sx, (v) => v * 34);
  const sphereY = useTransform(sy, (v) => v * -22);

  const handleMove = (e) => {
    const px = e.clientX / window.innerWidth - 0.5;
    const py = e.clientY / window.innerHeight - 0.5;
    mx.set(px);
    my.set(py);
  };

  return (
    <Layer
      style={{ perspective: 1100 }}
      onMouseMove={handleMove}
      aria-hidden="true"
    >
      <Parallax style={{ top: '10%', right: '-6%', width: 340, height: 340, x: ringX, y: ringY }}>
        <OrbitWrap>
          <OrbitRing />
        </OrbitWrap>
      </Parallax>

      <Parallax style={{ top: '16%', left: '5%', width: 64, height: 64, x: cubeX, y: cubeY }}>
        <CubeWrap>
          {[
            'rotateY(0deg)',
            'rotateY(180deg)',
            'rotateY(90deg)',
            'rotateY(-90deg)',
            'rotateX(90deg)',
            'rotateX(-90deg)',
          ].map((t, i) => (
            <CubeFace key={i} style={{ transform: `${t} translateZ(32px)` }}>
              {cubeLetters[i]}
            </CubeFace>
          ))}
        </CubeWrap>
      </Parallax>

      <Parallax style={{ bottom: '8%', left: '8%', width: 130, height: 130, x: sphereX, y: sphereY }}>
        <Sphere />
      </Parallax>

      {dots.map((dot) => (
        <FloatingDot key={`${dot.top}-${dot.left}`} dot={dot} sx={sx} sy={sy} />
      ))}
    </Layer>
  );
}

export default Scene3D;