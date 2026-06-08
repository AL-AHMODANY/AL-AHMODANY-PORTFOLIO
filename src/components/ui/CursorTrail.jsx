import { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const CursorTrail = () => {
  const { isDark } = useTheme();
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const trail = trailRef.current;
    const trailLength = 20;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Add new point to trail
      trail.unshift({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
      
      // Remove old points
      if (trail.length > trailLength) {
        trail.splice(trailLength);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const now = Date.now();
      const maxAge = 800; // Trail duration in ms
      
      // Filter out old points
      trailRef.current = trail.filter(point => now - point.timestamp < maxAge);
      
      // Draw trail
      for (let i = 0; i < trailRef.current.length; i++) {
        const point = trailRef.current[i];
        const age = now - point.timestamp;
        const normalizedAge = age / maxAge;
        const opacity = (1 - normalizedAge) * 0.8;
        const size = (1 - normalizedAge) * 16 + 4; // Size from 20 down to 4
        
        if (opacity > 0) {
          // Main circle
          ctx.beginPath();
          ctx.arc(point.x, point.y, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = isDark 
            ? `rgba(16, 185, 129, ${opacity})`
            : `rgba(5, 150, 105, ${opacity})`;
          ctx.fill();
          
          // Glow effect
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, size
          );
          gradient.addColorStop(0, isDark 
            ? `rgba(52, 211, 153, ${opacity * 0.8})` 
            : `rgba(16, 185, 129, ${opacity * 0.6})`
          );
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
    />
  );
};

export default CursorTrail;