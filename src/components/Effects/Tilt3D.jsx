import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  perspective: 1200px;
`;

const Inner = styled(motion.div)`
  position: relative;
  height: 100%;
  transform-style: preserve-3d;
`;

const Glare = styled.div`
  position: absolute;
  inset: 0;
  border-radius: ${({ radius }) => radius};
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Inner}:hover & {
    opacity: 1;
  }
`;

function Tilt3D({ children, maxTilt = 8, radius = '22px', className }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.28), transparent 55%)`;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 2 * maxTilt);
    rotateX.set(-(py - 0.5) * 2 * maxTilt);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Wrapper className={className}>
      <Inner
        ref={ref}
        style={{ rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {children}
        <Glare radius={radius} style={{ background: glareBg }} />
      </Inner>
    </Wrapper>
  );
}

export default Tilt3D;