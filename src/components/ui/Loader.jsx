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
          return prev + 1.5;
        });
      }, 60);

      return () => clearInterval(interval);
    }, 1000);

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
          ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 30%, #334155 60%, #1E293B 90%, #0F172A 100%)'
          : 'linear-gradient(135deg, #FAFAFA 0%, #F8FAFC 30%, #E2E8F0 60%, #F1F5F9 90%, #FAFAFA 100%)',
        fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              isDark ? 'opacity-30' : 'opacity-20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: isDark 
                ? `linear-gradient(45deg, #10B981, #059669, #047857)`
                : `linear-gradient(45deg, #10B981, #34D399, #6EE7B7)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(16, 185, 129, ${isDark ? 0.4 : 0.3})`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute border-2 ${
              isDark ? 'border-emerald-400/20' : 'border-emerald-500/15'
            } animate-float`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (Math.random() * 70)}%`,
              width: `${20 + (Math.random() * 30)}px`,
              height: `${20 + (Math.random() * 30)}px`,
              borderRadius: i % 2 === 0 ? '50%' : '4px',
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (Math.random() * 2)}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center z-10 px-8">
        {/* Logo/Name */}
        <div 
          className={`transition-all duration-1000 transform ${
            textVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          {/* English Name with enhanced styling */}
          <div className="relative mb-8">
            <h1 
              className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
              style={{
                fontFamily: "'Inter', 'SF Pro Display', 'Helvetica Neue', sans-serif",
                background: isDark
                  ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 20%, #10B981 40%, #34D399 60%, #6EE7B7 80%, #ffffff 100%)'
                  : 'linear-gradient(135deg, #0f172a 0%, #1e293b 20%, #10B981 40%, #059669 60%, #047857 80%, #0f172a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 100%',
                animation: 'gradientShift 4s ease-in-out infinite',
                filter: `drop-shadow(0 0 30px ${isDark ? 'rgba(16, 185, 129, 0.4)' : 'rgba(16, 185, 129, 0.3)'})`,
                letterSpacing: '-0.05em'
              }}
            >
              AL-AHMODANY
            </h1>
            
            {/* Animated underline */}
            <div 
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-1000 delay-700 ${
                textVisible ? 'w-32 opacity-70' : 'w-0 opacity-0'
              }`}
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #10B981 50%, transparent 100%)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)'
              }}
            />
          </div>
          
          {/* Arabic Name with proper styling and brackets */}
          <div 
            className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-12 transition-all duration-1000 delay-300 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              fontFamily: "'Amiri', 'Noto Sans Arabic', 'Cairo', 'Tajawal', system-ui, sans-serif",
              direction: 'rtl',
              color: isDark ? '#94A3B8' : '#64748B',
              lineHeight: '1.2',
              letterSpacing: '0.05em'
            }}
          >
            <span className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-3xl md:text-4xl lg:text-5xl`}>
              (
            </span>
            <span 
              className={`mx-2 ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}
              style={{
                textShadow: isDark 
                  ? '0 0 20px rgba(16, 185, 129, 0.4)'
                  : '0 0 15px rgba(16, 185, 129, 0.3)'
              }}
            >
              أحمد التجاني الأحمداني
            </span>
            <span className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-3xl md:text-4xl lg:text-5xl`}>
              )
            </span>
          </div>
        </div>

        {/* Enhanced loading animation */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-500 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Progress bar container */}
          <div className="relative w-80 mx-auto mb-8">
            <div 
              className="h-2 rounded-full overflow-hidden shadow-inner"
              style={{
                background: isDark 
                  ? 'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)'
                  : 'linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
              }}
            >
              <div
                className="h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.6), inset 0 1px 0 rgba(255,255,255,0.3)'
                }}
              >
                <div 
                  className="absolute inset-0 animate-pulse"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                    transform: 'translateX(-100%)',
                    animation: 'shimmer 2s infinite'
                  }}
                />
              </div>
            </div>
            
            {/* Enhanced glowing dot */}
            <div
              className="absolute top-1/2 w-4 h-4 rounded-full transform -translate-y-1/2 transition-all duration-500 ease-out animate-pulse"
              style={{
                left: `${progress}%`,
                background: 'radial-gradient(circle, #ffffff 0%, #10B981 50%, #059669 100%)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)',
                marginLeft: '-8px',
                border: '2px solid rgba(255,255,255,0.8)'
              }}
            />
          </div>

          {/* Enhanced loading text */}
          <div className="text-center space-y-4">
            <div 
              className={`text-lg font-semibold tracking-[0.3em] ${
                isDark ? 'text-emerald-300' : 'text-emerald-700'
              }`}
              style={{
                fontFamily: "'Inter', 'SF Pro Text', system-ui, sans-serif",
                textShadow: isDark 
                  ? '0 0 15px rgba(16, 185, 129, 0.5)'
                  : '0 0 10px rgba(16, 185, 129, 0.3)'
              }}
            >
              {progress < 100 ? 'LOADING PORTFOLIO' : 'WELCOME'}
            </div>
            
            <div className="flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    background: isDark ? '#34D399' : '#10B981',
                    animationDelay: `${i * 300}ms`,
                    animationDuration: '1.5s',
                    boxShadow: `0 0 10px ${isDark ? '#34D399' : '#10B981'}`
                  }}
                />
              ))}
            </div>
            
            <div 
              className={`text-sm font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div 
          className={`absolute -top-20 -left-20 w-40 h-40 rounded-full transition-all duration-1200 delay-700 ${
            textVisible ? 'scale-100 rotate-0 opacity-20' : 'scale-0 rotate-45 opacity-0'
          }`}
          style={{
            background: isDark
              ? 'conic-gradient(from 0deg, #10B981 0%, transparent 30%, transparent 70%, #10B981 100%)'
              : 'conic-gradient(from 0deg, #10B981 0%, transparent 30%, transparent 70%, #10B981 100%)',
            animation: textVisible ? 'spin-slow 12s linear infinite' : 'none',
            filter: 'blur(1px)'
          }}
        />
        
        <div 
          className={`absolute -bottom-20 -right-20 w-32 h-32 rounded-full transition-all duration-1200 delay-1000 ${
            textVisible ? 'scale-100 rotate-0 opacity-15' : 'scale-0 -rotate-45 opacity-0'
          }`}
          style={{
            background: isDark
              ? 'conic-gradient(from 180deg, #34D399 0%, transparent 40%, transparent 60%, #34D399 100%)'
              : 'conic-gradient(from 180deg, #34D399 0%, transparent 40%, transparent 60%, #34D399 100%)',
            animation: textVisible ? 'spin-slow 8s linear infinite reverse' : 'none',
            filter: 'blur(1px)'
          }}
        />
      </div>

    </div>
  );
};

export default Loader;