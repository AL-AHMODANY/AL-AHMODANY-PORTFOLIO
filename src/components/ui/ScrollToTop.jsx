import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-accent text-black flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(0,255,148,0.5)] transition-all duration-300 hover:scale-110"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;