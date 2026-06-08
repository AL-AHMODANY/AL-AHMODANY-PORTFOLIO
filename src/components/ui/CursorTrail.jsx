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

  // Enhanced theme-aware colors
  const colors = isDark 
    ? {
        primary: 'rgba(16, 185, 129, 0.9)',
        secondary: 'rgba(52, 211, 153, 0.6)', 
        glow: 'rgba(16, 185, 129, 0.8)',
        trail: 'rgba(110, 231, 183, 0.4)',
        accent: 'rgba(6, 182, 212, 0.5)'
      }
    : {
        primary: 'rgba(16, 185, 129, 0.95)',
        secondary: 'rgba(5, 150, 105, 0.7)',
        glow: 'rgba(16, 185, 129, 0.9)', 
        trail: 'rgba(52, 211, 153, 0.5)',
        accent: 'rgba(14, 116, 144, 0.6)'
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
      
      // Set moving to false after 100ms of no movement
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameDelay) {
        if (isMoving && (mousePosition.x !== 0 || mousePosition.y !== 0)) {
          setParticles(prevParticles => {
            // Create new particle with enhanced properties
            const newParticle = {
              id: particleId.current++,
              x: mousePosition.x,
              y: mousePosition.y,
              life: 1,
              scale: 1,
              rotation: Math.random() * 360,
              size: 18 + Math.random() * 8, // Larger base size
              glowIntensity: 1,
              wobble: Math.random() * Math.PI * 2
            };

            // Keep last 16 particles for longer trail
            const updatedParticles = [...prevParticles.slice(-15), newParticle];

            // Update existing particles with enhanced animation
            return updatedParticles.map((particle, index) => ({
              ...particle,
              life: Math.max(0, particle.life - 0.05), // Slower fade
              scale: particle.scale * 0.97,
              rotation: particle.rotation + 3,
              glowIntensity: particle.glowIntensity * 0.96,
              wobble: particle.wobble + 0.1
            })).filter(particle => particle.life > 0.08);
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
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Enhanced chain connections */}
      {particles.length > 1 && particles.map((particle, index) => {
        if (index === 0) return null;
        const prevParticle = particles[index - 1];
        const distance = Math.sqrt(
          Math.pow(particle.x - prevParticle.x, 2) + 
          Math.pow(particle.y - prevParticle.y, 2)
        );
        
        if (distance > 80) return null; // Increased connection range
        
        const angle = Math.atan2(particle.y - prevParticle.y, particle.x - prevParticle.x);
        const opacity = Math.min(particle.life, prevParticle.life) * 0.7;
        
        return (
          <div key={`chain-${particle.id}`}>
            {/* Main connection line */}
            <div
              className="absolute"
              style={{
                left: prevParticle.x,
                top: prevParticle.y,
                width: distance,
                height: 2,
                background: `linear-gradient(90deg, ${colors.trail} 0%, ${colors.secondary} 50%, ${colors.trail} 100%)`,
                transformOrigin: '0 50%',
                transform: `rotate(${angle}rad)`,
                opacity: opacity,
                zIndex: 25,
                boxShadow: `0 0 ${6 * opacity}px ${colors.glow}`
              }}
            />
            
            {/* Secondary glow line */}
            <div
              className="absolute"
              style={{
                left: prevParticle.x,
                top: prevParticle.y - 1,
                width: distance,
                height: 4,
                background: `linear-gradient(90deg, transparent 0%, ${colors.accent} 50%, transparent 100%)`,
                transformOrigin: '0 50%',
                transform: `rotate(${angle}rad)`,
                opacity: opacity * 0.3,
                zIndex: 24,
                filter: 'blur(1px)'
              }}
            />
          </div>
        );
      })}

      {/* Enhanced particle trail */}
      {particles.map((particle, index) => (
        <div key={particle.id}>
          {/* Large outer glow */}
          <div
            className="absolute rounded-full"
            style={{
              left: particle.x - (particle.size * particle.scale * 2),
              top: particle.y - (particle.size * particle.scale * 2),
              width: particle.size * particle.scale * 4,
              height: particle.size * particle.scale * 4,
              background: `radial-gradient(circle, ${colors.glow} 0%, ${colors.trail} 30%, transparent 70%)`,
              opacity: particle.life * particle.glowIntensity * 0.3,
              zIndex: 30,
              filter: 'blur(2px)'
            }}
          />

          {/* Medium glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              left: particle.x - (particle.size * particle.scale * 1.2),
              top: particle.y - (particle.size * particle.scale * 1.2),
              width: particle.size * particle.scale * 2.4,
              height: particle.size * particle.scale * 2.4,
              background: `radial-gradient(circle, ${colors.primary} 0%, ${colors.secondary} 40%, transparent 80%)`,
              opacity: particle.life * 0.5,
              zIndex: 35,
              filter: 'blur(0.5px)'
            }}
          />
          
          {/* Main particle with enhanced effects */}
          <div
            className="absolute rounded-full"
            style={{
              left: particle.x - (particle.size * particle.scale * 0.6),
              top: particle.y - (particle.size * particle.scale * 0.6),
              width: particle.size * particle.scale * 1.2,
              height: particle.size * particle.scale * 1.2,
              background: `radial-gradient(circle, ${colors.primary} 0%, ${colors.secondary} 60%, ${colors.trail} 100%)`,
              boxShadow: `
                0 0 ${20 * particle.life}px ${colors.glow},
                inset 0 0 ${8 * particle.life}px rgba(255, 255, 255, 0.3)
              `,
              transform: `
                rotate(${particle.rotation}deg) 
                scale(${0.8 + (particle.life * 0.4)})
                translateX(${Math.sin(particle.wobble) * 2}px)
              `,
              opacity: particle.life,
              zIndex: 40 + index,
              border: `1px solid rgba(255, 255, 255, ${particle.life * 0.4})`
            }}
          />

          {/* Inner sparkle core */}
          {particle.life > 0.6 && (
            <div
              className="absolute rounded-full animate-pulse"
              style={{
                left: particle.x - (3 * particle.scale),
                top: particle.y - (3 * particle.scale),
                width: 6 * particle.scale,
                height: 6 * particle.scale,
                background: `radial-gradient(circle, #ffffff 0%, ${colors.primary} 70%, transparent 100%)`,
                opacity: particle.life * 0.9,
                zIndex: 50 + index,
                boxShadow: `0 0 ${15 * particle.life}px #ffffff`
              }}
            />
          )}

          {/* Rotating accent ring for fresh particles */}
          {particle.life > 0.8 && (
            <div
              className="absolute rounded-full border-2"
              style={{
                left: particle.x - (particle.size * particle.scale * 0.8),
                top: particle.y - (particle.size * particle.scale * 0.8),
                width: particle.size * particle.scale * 1.6,
                height: particle.size * particle.scale * 1.6,
                borderColor: `rgba(255, 255, 255, ${particle.life * 0.6})`,
                borderStyle: 'dashed',
                transform: `rotate(${-particle.rotation * 1.5}deg)`,
                opacity: particle.life * 0.7,
                zIndex: 45 + index
              }}
            />
          )}
        </div>
      ))}
      
      {/* Enhanced main cursor dot */}
      {mousePosition.x !== 0 && isMoving && (
        <div>
          {/* Large outer ring */}
          <div
            className="absolute rounded-full border-2 animate-pulse"
            style={{
              left: mousePosition.x - 20,
              top: mousePosition.y - 20,
              width: 40,
              height: 40,
              borderColor: colors.secondary,
              opacity: 0.6,
              zIndex: 55,
              boxShadow: `0 0 20px ${colors.glow}`
            }}
          />

          {/* Medium ring */}
          <div
            className="absolute rounded-full border"
            style={{
              left: mousePosition.x - 12,
              top: mousePosition.y - 12,
              width: 24,
              height: 24,
              borderColor: colors.primary,
              opacity: 0.8,
              zIndex: 57,
              animation: 'spin-slow 3s linear infinite'
            }}
          />
          
          {/* Core dot with enhanced glow */}
          <div
            className="absolute rounded-full"
            style={{
              left: mousePosition.x - 4,
              top: mousePosition.y - 4,
              width: 8,
              height: 8,
              background: `radial-gradient(circle, #ffffff 0%, ${colors.primary} 50%, ${colors.secondary} 100%)`,
              boxShadow: `
                0 0 25px ${colors.glow},
                0 0 50px ${colors.trail},
                inset 0 0 10px rgba(255, 255, 255, 0.8)
              `,
              zIndex: 60,
              border: `1px solid rgba(255, 255, 255, 0.9)`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CursorTrail;