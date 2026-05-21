import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? 'card-glass shadow-xl mx-4 md:mx-8' : ''
        }`}
      >
        <Link to="/" className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
          <span className="text-gradient">AL</span>
          <span className="text-[var(--muted)] opacity-60">•</span>
          <span className="text-sm font-mono opacity-70 hidden sm:block">AHMODANY</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 hover:text-accent ${
                location.pathname === link.path
                  ? 'text-accent bg-accent/10'
                  : 'text-[var(--muted)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full card-glass flex items-center justify-center hover:border-accent/40 transition-all duration-300 hover:scale-110"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun size={16} className="text-accent" />
            ) : (
              <Moon size={16} className="text-[var(--muted)]" />
            )}
          </button>

          <Link to="/contact" className="btn-primary hidden md:inline-flex text-xs px-4 py-2">
            Hire Me
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 rounded-full card-glass flex items-center justify-center md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 p-4 card-glass rounded-2xl shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-accent bg-accent/10'
                    : 'text-[var(--muted)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="btn-primary mt-3 w-full justify-center">
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;