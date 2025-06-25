import { useCallback, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  alpha: number;
}

export const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  const createParticle = useCallback((): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0, dx: 0, dy: 0, alpha: 0 };
    
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random(),
    };
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00FF00';
    ctx.globalAlpha = 0.1;

    particlesRef.current.forEach((particle, index) => {
      particle.x += particle.dx;
      particle.y += particle.dy;
      particle.alpha = Math.max(0, particle.alpha - 0.005);

      if (particle.alpha <= 0) {
        particlesRef.current[index] = createParticle();
      }

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
      ctx.globalAlpha = particle.alpha * 0.2;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }, [createParticle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize particles
    particlesRef.current = Array.from({ length: 50 }, createParticle);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [animate, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default Particles;
