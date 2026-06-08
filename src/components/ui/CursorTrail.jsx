import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const CursorTrail = () => {
  const { isDark } = useTheme();
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const particleId = useRef(0);
  const animationRef = useRef();
  const moveTimeoutRef = useRef();

  // Theme-aware colors
  const colors = isDark 
    ? {
        primary: 'rgba(16, 185, 129, 0.8)',
        secondary: 'rgba(16, 185, 129, 0.4)', 
        glow: 'rgba(16, 185, 129, 0.6)',
        trail: 'rgba(16, 185, 129, 0.3)'
      }
    : {
        primary: 'rgba(16, 185, 129, 0.9)',
        secondary: 'rgba(16, 185, 129, 0.5)',
        glow: 'rgba(16, 185, 129, 0.7)', 
        trail: 'rgba(16, 185, 129, 0.4)'
      };

  useEffect(() => {
    let lastTime = 0;
    const targetFPS = 60;
    const frameDelay = 1000 / targetFPS;

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition(newPos);
      setIsMoving(true);

      // Clear previous timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      // Set moving to false after 150ms of no movement
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameDelay) {
        if (isMoving && (mousePosition.x !== 0 || mousePosition.y !== 0)) {
          setParticles(prevParticles => {
            // Create new particle
            const newParticle = {
              id: particleId.current++,
              x: mousePosition.x,
              y: mousePosition.y,
              life: 1,
              scale: 1,
              rotation: Math.random() * 360
            };

            // Keep only last 12 particles and add new one
            const updatedParticles = [...prevParticles.slice(-11), newParticle];

            // Update existing particles
            return updatedParticles.map((particle, index) => ({
              ...particle,
              life: Math.max(0, particle.life - 0.06),
              scale: particle.scale * 0.96,
              rotation: particle.rotation + 2
            })).filter(particle => particle.life > 0.1);
          });
        }
        lastTime = currentTime;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, [mousePosition, isMoving]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Chain connections */}
      {particles.length > 1 && particles.map((particle, index) => {
        if (index === 0) return null;
        const prevParticle = particles[index - 1];
        const distance = Math.sqrt(
          Math.pow(particle.x - prevParticle.x, 2) + 
          Math.pow(particle.y - prevParticle.y, 2)
        );
        
        if (distance > 50) return null; // Don't draw if too far apart
        
        const angle = Math.atan2(particle.y - prevParticle.y, particle.x - prevParticle.x);
        
        return (
          <div
            key={`chain-${particle.id}`}
            className="absolute"
            style={{
              left: prevParticle.x,
              top: prevParticle.y,
              width: distance,
              height: 1,
              background: `linear-gradient(90deg, ${colors.trail} 0%, ${colors.secondary} 50%, ${colors.trail} 100%)`,
              transformOrigin: '0 50%',
              transform: `rotate(${angle}rad)`,
              opacity: particle.life * 0.6,
              zIndex: 30
            }}
          />
        );
      })}

      {/* Particle trail */}
      {particles.map((particle, index) => (
        <div key={particle.id}>
          {/* Outer glow */}
          <div
            className="absolute rounded-full"
            style={{
              left: particle.x - (15 * particle.scale),
              top: particle.y - (15 * particle.scale),
              width: 30 * particle.scale,
              height: 30 * particle.scale,
              background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
              opacity: particle.life * 0.4,
              zIndex: 35
            }}
          />
          
          {/* Main particle */}
          <div
            className="absolute rounded-full"
            style={{
              left: particle.x - (4 * particle.scale),
              top: particle.y - (4 * particle.scale),
              width: 8 * particle.scale,
              height: 8 * particle.scale,
              background: colors.primary,
              boxShadow: `0 0 ${12 * particle.life}px ${colors.glow}`,
              transform: `rotate(${particle.rotation}deg)`,
              opacity: particle.life,
              zIndex: 40 + index
            }}
          />

          {/* Inner sparkle */}
          {particle.life > 0.7 && (
            <div
              className="absolute rounded-full"
              style={{
                left: particle.x - 1,
                top: particle.y - 1,
                width: 2,
                height: 2,
                background: isDark ? '#ffffff' : '#ffffff',
                opacity: particle.life * 0.8,
                zIndex: 45 + index
              }}
            />
          )}
        </div>
      ))}
      
      {/* Main cursor dot */}
      {mousePosition.x !== 0 && isMoving && (
        <div>
          {/* Outer ring */}
          <div
            className="absolute rounded-full border-2 animate-pulse"
            style={{
              left: mousePosition.x - 8,
              top: mousePosition.y - 8,
              width: 16,
              height: 16,
              borderColor: colors.secondary,
              zIndex: 55
            }}
          />
          
          {/* Core dot */}
          <div
            className="absolute rounded-full"
            style={{
              left: mousePosition.x - 2,
              top: mousePosition.y - 2,
              width: 4,
              height: 4,
              background: colors.primary,
              boxShadow: `0 0 15px ${colors.glow}`,
              zIndex: 60
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CursorTrail;