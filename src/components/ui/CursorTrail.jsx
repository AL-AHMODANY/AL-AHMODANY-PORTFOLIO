import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const CursorTrail = () => {
  const { isDark } = useTheme();
  const [trail, setTrail] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef();
  const trailLength = 20;

  // tta.ng style colors - more vibrant and fluid
  const colors = isDark 
    ? {
        primary: '#10B981',
        secondary: '#34D399', 
        accent: '#6EE7B7',
        glow: 'rgba(16, 185, 129, 0.6)'
      }
    : {
        primary: '#059669',
        secondary: '#10B981',
        accent: '#34D399',
        glow: 'rgba(16, 185, 129, 0.4)'
      };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      setTrail(prevTrail => {
        const newTrail = [
          { x: mousePos.x, y: mousePos.y, age: 0, id: Date.now() },
          ...prevTrail.slice(0, trailLength - 1)
        ].map((point, index) => ({
          ...point,
          age: index
        }));

        return newTrail;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {trail.map((point, index) => {
        if (point.x === 0 && point.y === 0) return null;
        
        const progress = 1 - (index / trailLength);
        const size = Math.max(2, 20 * progress); // tta.ng style sizing
        const opacity = progress * 0.8;
        
        return (
          <div
            key={`${point.id}-${index}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: point.x - size / 2,
              top: point.y - size / 2,
              width: size,
              height: size,
              background: `radial-gradient(circle, ${colors.primary} 0%, ${colors.secondary} 40%, ${colors.accent} 70%, transparent 100%)`,
              opacity: opacity,
              transform: `scale(${0.5 + progress * 0.5})`,
              boxShadow: `0 0 ${size * 0.8}px ${colors.glow}`,
              transition: 'all 0.1s ease-out',
              zIndex: 50 - index,
              mixBlendMode: isDark ? 'screen' : 'multiply'
            }}
          />
        );
      })}

      {/* Main cursor dot - tta.ng style */}
      {mousePos.x !== 0 && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: mousePos.x - 12,
            top: mousePos.y - 12,
            width: 24,
            height: 24,
            border: `2px solid ${colors.primary}`,
            backgroundColor: 'transparent',
            zIndex: 100,
            transition: 'all 0.1s ease-out',
            boxShadow: `0 0 20px ${colors.glow}, inset 0 0 20px ${colors.glow}`
          }}
        >
          {/* Inner dot */}
          <div
            className="absolute rounded-full"
            style={{
              left: '50%',
              top: '50%',
              width: 6,
              height: 6,
              backgroundColor: colors.primary,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 10px ${colors.primary}`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CursorTrail;