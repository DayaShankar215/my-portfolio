import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Glow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
  background: radial-gradient(
    circle,
    rgba(91, 140, 255, 0.1),
    rgba(139, 92, 246, 0.07) 40%,
    transparent 65%
  );
  will-change: transform;

  @media (pointer: coarse) {
    display: none;
  }
`;

function CursorGlow() {
  const target = useRef({ x: -999, y: -999 });
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const raf = useRef();

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPos((p) => {
        const x = p.x + (target.current.x - p.x) * 0.09;
        const y = p.y + (target.current.y - p.y) * 0.09;
        return { x, y };
      });
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <Glow
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}

export default CursorGlow;