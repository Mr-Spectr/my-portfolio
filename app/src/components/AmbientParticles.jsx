import { useEffect, useRef } from 'react';

export default function AmbientParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canvas || reducedMotion) return undefined;

    const context = canvas.getContext('2d');
    let frame;
    let particles = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 700 ? 20 : 42;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.25 + 0.35
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -5 || particle.x > width + 5) particle.vx *= -1;
        if (particle.y < -5 || particle.y > height + 5) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(125, 211, 252, 0.3)';
        context.fill();

        for (let next = index + 1; next < particles.length; next += 1) {
          const target = particles[next];
          const dx = particle.x - target.x;
          const dy = particle.y - target.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 115) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(target.x, target.y);
            context.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 115)})`;
            context.lineWidth = 0.6;
            context.stroke();
          }
        }
      });
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas className="ambient-particles" ref={canvasRef} aria-hidden="true" />;
}
