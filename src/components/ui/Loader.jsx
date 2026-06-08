import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Loader = ({ onComplete }) => {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show text after a brief delay
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 300);

    // Progress animation
    const progressTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            // Start fade out
            setTimeout(() => {
              setFadeOut(true);
              // Complete loading after fade animation
              setTimeout(() => {
                onComplete();
              }, 800);
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }, 800);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(progressTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-800 ${
        fadeOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)'
          : 'linear-gradient(135deg, #FAFAFA 0%, #F1F5F9 50%, #FAFAFA 100%)'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: '#10B981',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center">
        {/* Logo/Name */}
        <div 
          className={`transition-all duration-1000 transform ${
            textVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          {/* English Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
            AL-AHMODANY
          </h1>
          
          {/* Arabic Name */}
          <h2 
            className={`text-2xl md:text-3xl font-bold mb-8 transition-all duration-1000 delay-300 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              direction: 'rtl',
              color: isDark ? '#94A3B8' : '#64748B'
            }}
          >
            الأحمداني
          </h2>
        </div>

        {/* Loading animation */}
        <div 
          className={`mt-12 transition-all duration-1000 delay-500 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Progress bar container */}
          <div className="relative w-64 mx-auto mb-6">
            <div 
              className="h-1 rounded-full overflow-hidden"
              style={{
                background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-accent to-emerald-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Glowing dot */}
            <div
              className="absolute top-1/2 w-3 h-3 rounded-full transform -translate-y-1/2 transition-all duration-300 ease-out"
              style={{
                left: `${progress}%`,
                background: '#10B981',
                boxShadow: '0 0 12px rgba(16, 185, 129, 0.8)',
                marginLeft: '-6px'
              }}
            />
          </div>

          {/* Loading text */}
          <div className="text-center">
            <span 
              className={`text-sm font-mono tracking-widest ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {progress < 100 ? 'LOADING' : 'WELCOME'}
            </span>
            <div className="flex justify-center mt-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-accent rounded-full mx-1 animate-pulse"
                  style={{
                    animationDelay: `${i * 200}ms`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div 
          className={`absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-10 transition-all duration-1000 delay-700 ${
            textVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
          }`}
          style={{
            background: 'conic-gradient(from 0deg, #10B981, transparent, transparent, #10B981)',
            animation: textVisible ? 'spin-slow 8s linear infinite' : 'none'
          }}
        />
        
        <div 
          className={`absolute -bottom-16 -right-16 w-24 h-24 rounded-full opacity-10 transition-all duration-1000 delay-900 ${
            textVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-45'
          }`}
          style={{
            background: 'conic-gradient(from 180deg, #10B981, transparent, transparent, #10B981)',
            animation: textVisible ? 'spin-slow 6s linear infinite reverse' : 'none'
          }}
        />
      </div>

      {/* Corner accent */}
      <div className="absolute top-8 left-8">
        <div 
          className={`w-12 h-12 rounded-lg border-2 transition-all duration-1000 ${
            textVisible ? 'opacity-30 rotate-0' : 'opacity-0 -rotate-45'
          }`}
          style={{ borderColor: '#10B981' }}
        />
      </div>
      
      <div className="absolute bottom-8 right-8">
        <div 
          className={`w-8 h-8 rounded-full transition-all duration-1000 delay-200 ${
            textVisible ? 'opacity-30 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ background: '#10B981' }}
        />
      </div>
    </div>
  );
};

export default Loader;