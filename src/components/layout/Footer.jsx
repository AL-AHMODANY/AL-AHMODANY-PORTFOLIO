import { Link } from 'react-router-dom';
import { Github, Mail, FileText, Phone } from 'lucide-react';
import WhatsAppIcon from '../ui/WhatsAppIcon';

const Footer = () => {
  const socials = [
    { label: 'GitHub', href: 'https://github.com/AL-AHMODANY', icon: Github, external: true },
    { label: 'Email', href: 'mailto:rahmanhamad36@gmail.com', icon: Mail, external: false },
    { label: 'WhatsApp', href: 'https://wa.me/2348129117778', icon: WhatsAppIcon, external: true },
    { label: 'Phone', href: 'tel:+2348129117778', icon: Phone, external: false },
  ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-[var(--border)] mt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/3 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <p className="font-display font-black text-2xl text-gradient mb-3">AL-AHMODANY</p>
            <p className="text-[var(--muted)] text-sm max-w-md leading-relaxed mb-6">
              Frontend developer focused on React, modern UI systems, and web experiences that feel clean,
              fast, and reliable from the first interaction to launch day.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noreferrer' : undefined}
                  className={`w-10 h-10 rounded-xl card-glass flex items-center justify-center hover:border-accent/50 hover:scale-110 transition-all duration-300 ${
                    social.label === 'WhatsApp' 
                      ? 'hover:text-[#25D366] hover:border-[#25D366]/50' 
                      : 'hover:text-accent'
                  }`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display font-semibold text-sm mb-4">Navigation</p>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-[var(--muted)] hover:text-accent transition-colors duration-200 font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-display font-semibold text-sm mb-4">Contact</p>
            <div className="space-y-2">
              <p className="text-sm text-[var(--muted)] font-mono">rahmanhamad36@gmail.com</p>
              <p className="text-sm text-[var(--muted)]">Remote collaboration available worldwide.</p>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs font-mono text-accent">Open for freelance and contract work</span>
              </div>
              <Link to="/contact" className="btn-primary text-xs mt-4 inline-flex">
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--muted)] text-xs font-mono">
            © {new Date().getFullYear()} AL-AHMODANY - Built with React, Tailwind CSS, and deployed on Vercel
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/AL-AHMODANY" target="_blank" rel="noreferrer" className="text-[var(--muted)] text-xs font-mono hover:text-accent transition-colors">
              GitHub
            </a>
            <Link to="/resume" className="text-[var(--muted)] text-xs font-mono hover:text-accent transition-colors">
              Resume
            </Link>
            <Link to="/contact" className="text-[var(--muted)] text-xs font-mono hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;