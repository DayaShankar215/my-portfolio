import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  user-select: none;
`;

function drawProtected(canvas, image, watermark, radius) {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, rect.width);
  const h = Math.max(1, rect.height);
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  if (radius > 0) {
    const r = Math.min(radius, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(r, 0);
    ctx.arcTo(w, 0, w, h, r);
    ctx.arcTo(w, h, 0, h, r);
    ctx.arcTo(0, h, 0, 0, r);
    ctx.arcTo(0, 0, w, 0, r);
    ctx.closePath();
    ctx.clip();
  }

  const iw = image.naturalWidth || 1;
  const ih = image.naturalHeight || 1;
  const scale = Math.max(w / iw, h / ih);
  const dw = iw * scale;
  const dh = ih * scale;
  ctx.drawImage(image, (w - dw) / 2, (h - dh) / 2, dw, dh);

  if (watermark) {
    ctx.font = `600 ${Math.max(13, w * 0.032)}px 'Inter', sans-serif`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
    ctx.shadowBlur = 5;
    ctx.fillText(watermark, 16, h - 16);
  }

  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function ProtectedImage({ src, alt = '', watermark = '', radius = 0, fill = false, className = '', style = {} }) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const ownerMode = () => document.documentElement.classList.contains('owner-mode');

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageRef.current = img;
      draw();
    };
    const draw = () => {
      if (!imageRef.current) return;
      const image = imageRef.current;
      if (!fill) {
        canvas.style.height = 'auto';
        canvas.style.aspectRatio = `${image.naturalWidth} / ${image.naturalHeight}`;
      } else {
        canvas.style.height = '100%';
        canvas.style.aspectRatio = '';
      }
      drawProtected(canvas, image, watermark, radius);
    };
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [src, watermark, radius, fill]);

  return (
    <Canvas
      ref={canvasRef}
      className={className}
      style={style}
      role="img"
      aria-label={alt}
      onContextMenu={(e) => {
        if (!ownerMode()) e.preventDefault();
      }}
      onDragStart={(e) => {
        if (!ownerMode()) e.preventDefault();
      }}
    />
  );
}

export default ProtectedImage;