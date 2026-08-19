export function launchConfetti() {
  const colors = ['#5b8cff', '#8b5cf6', '#d946ef', '#2dd4bf', '#fbbf24', '#f43f5e'];
  const canvas = document.createElement('canvas');
  canvas.style.cssText =
    'position:fixed;inset:0;pointer-events:none;z-index:5000;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const pieces = Array.from({ length: 130 }, () => ({
    x: Math.random() * width,
    y: -20 - Math.random() * height * 0.3,
    w: 6 + Math.random() * 8,
    h: 8 + Math.random() * 12,
    color: colors[Math.floor(Math.random() * colors.length)],
    vy: 2 + Math.random() * 4,
    vx: -2 + Math.random() * 4,
    rot: Math.random() * Math.PI,
    vr: -0.25 + Math.random() * 0.5,
  }));

  const start = performance.now();

  const tick = (now) => {
    const elapsed = now - start;
    ctx.clearRect(0, 0, width, height);
    const opacity = Math.max(0, 1 - (elapsed - 2000) / 600);

    pieces.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < 2600) {
      requestAnimationFrame(tick);
    } else {
      canvas.remove();
    }
  };

  requestAnimationFrame(tick);
}