import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Folder,
  Send,
  ChevronDown,
  ArrowRight,
  Code2,
  Palette,
  Zap,
  Github,
  Mail,
  FileText,
  Star,
  FolderOpen,
  Clock,
  Users,
  Award,
  Phone,
} from 'lucide-react';
import ProjectCard from '../components/ui/ProjectCard';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { projects } from '../data/projects';
import { skills as allSkills } from '../data/skills';

const HomePage = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Frontend Developer', 'React Developer', 'UI Engineer', 'Responsive Web Specialist'];
  const specialties = ['React apps', 'Tailwind UI', 'Firebase integration', 'E-commerce flows', 'Arabic and English UX'];

  // Typing animation effect
  useEffect(() => {
    const typeEffect = () => {
      const target = roles[roleIndex];

      if (!isDeleting) {
        setCurrentRole(target.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === target.length) {
          setIsDeleting(true);
          setTimeout(typeEffect, 4000); // Even longer pause when complete
          return;
        }
      } else {
        setCurrentRole(target.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 150 : 200); // Even slower typing speed
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const socials = [
    { label: 'GitHub', href: 'https://github.com/AL-AHMODANY', icon: Github, external: true },
    { label: 'Email', href: 'mailto:rahmanhamad36@gmail.com', icon: Mail, external: false },
    { label: 'WhatsApp', href: 'https://wa.me/2348129117778', icon: WhatsAppIcon, external: true },
    { label: 'Phone', href: 'tel:+2348129117778', icon: Phone, external: false },
  ];

  const stats = [
    { value: '7+', label: 'Projects Shipped' },
    { value: '2+', label: 'Years Building' },
    { value: '5', label: 'Product Types' },
  ];

  const techBadges = [
    { name: 'React', icon: '⚛️', style: 'top: 2%; left: 8%; animation-delay: 0s' },
    { name: 'Tailwind', icon: 'UI', style: 'bottom: 8%; left: 2%; animation-delay: 1.5s' },
    { name: 'Vite', icon: 'V', style: 'top: 14%; right: 4%; animation-delay: 0.8s' },
    { name: 'Firebase', icon: 'DB', style: 'bottom: 18%; right: 3%; animation-delay: 2.5s' },
  ];

  const particles = [
    { style: 'top: 20%; left: 5%; animation-delay: 0s' },
    { style: 'top: 70%; left: 8%; animation-delay: 1s' },
    { style: 'top: 45%; right: 5%; animation-delay: 2s' },
    { style: 'top: 80%; right: 15%; animation-delay: 0.5s' },
    { style: 'top: 10%; right: 25%; animation-delay: 1.5s' },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Frontend Architecture',
      desc: 'Reusable React component systems, clear state flow, and project structure that stays manageable as features grow.',
    },
    {
      icon: Palette,
      title: 'Design-Led Implementation',
      desc: 'Interfaces that respect spacing, typography, motion, and visual hierarchy so products feel intentional instead of assembled.',
    },
    {
      icon: Zap,
      title: 'Performance With Polish',
      desc: 'Fast loading, responsive behavior, smooth interactions, and practical optimization work that improves real user experience.',
    },
  ];

  const services = [
    {
      icon: 'DEV',
      title: 'Frontend Development',
      desc: 'Full React application builds for startups, businesses, and organizations that need reliable product interfaces from the ground up.',
      tags: ['React', 'Vite', 'JavaScript'],
    },
    {
      icon: 'UI',
      title: 'Design to Code Delivery',
      desc: 'Converting wireframes or Figma files into responsive, production-ready interfaces without losing the detail that made the design strong.',
      tags: ['Tailwind CSS', 'Figma', 'Responsive UI'],
    },
    {
      icon: 'SHOP',
      title: 'E-commerce Experiences',
      desc: 'Storefronts, product pages, carts, and checkout flows built to feel smooth, trustworthy, and conversion-friendly across devices.',
      tags: ['React Router', 'Product UX'],
    },
    {
      icon: 'FAST',
      title: 'Frontend Optimization',
      desc: 'Improving existing products through cleanup, performance tuning, accessibility fixes, and better interaction design.',
      tags: ['Lighthouse', 'Refactoring', 'Accessibility'],
    },
    {
      icon: 'API',
      title: 'Firebase and API Integration',
      desc: 'Authentication, realtime data, forms, dashboards, and backend-powered UI flows connected cleanly to the frontend layer.',
      tags: ['Firestore', 'Auth', 'REST APIs'],
    },
    {
      icon: 'RWD',
      title: 'Responsive Product UI',
      desc: 'Layouts and components that stay readable, usable, and visually strong from mobile screens to large desktop displays.',
      tags: ['Mobile First', 'Cross Browser', 'Scalable CSS'],
    },
  ];

  const counters = [
    { icon: FolderOpen, value: '7+', label: 'Live Projects' },
    { icon: Clock, value: '2+', label: 'Years in Practice' },
    { icon: Users, value: '10+', label: 'Core User Flows Built' },
    { icon: Award, value: '100%', label: 'Launch Focus' },
  ];

  const testimonials = [
    {
      name: 'Amir Hassan',
      role: 'CEO - Nour Zamon',
      initials: 'AH',
      color: '#00FF94',
      quote: 'He brought structure to a fast-moving project and translated ideas into a clean product we were proud to launch.',
    },
    {
      name: 'Yusuf Kamara',
      role: 'Director - Mosque Management',
      initials: 'YK',
      color: '#38BDF8',
      quote: 'The final system felt thoughtful from top to bottom. It was easy to use, easy to explain to our community, and clearly built with care.',
    },
    {
      name: 'Sara Malik',
      role: 'Founder - LearnHub',
      initials: 'SM',
      color: '#8B5CF6',
      quote: 'Strong design instincts, clear communication, and reliable delivery. The platform looked premium and worked exactly the way we needed.',
    },
  ];

  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden hero-gradient grid-pattern">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-accent/8 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 rounded-full bg-blue-500/6 blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full card-glass text-xs font-mono text-accent mb-8 border border-accent/20 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Available for new projects
            </div>

            <h1 className="font-display font-extrabold leading-none mb-4">
              <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight">AL-</span>
              <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight text-gradient">AHMODANY</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="font-mono text-[var(--muted)] text-sm">&lt;</span>
              <span className="font-display text-xl md:text-2xl font-semibold text-[var(--muted)]">
                {currentRole}<span className="typed-cursor"></span>
              </span>
              <span className="font-mono text-[var(--muted)] text-sm">/&gt;</span>
            </div>

            <p className="font-body text-[var(--muted)] text-lg max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              I craft modern React experiences that balance visual excellence with technical precision. 
              My focus is building interfaces that feel intuitive, perform flawlessly, and scale 
              seamlessly from concept to production.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
              {specialties.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full card-glass text-xs font-mono text-[var(--muted)] border border-[var(--border)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Link to="/projects" className="btn-primary group">
                <Folder size={16} className="group-hover:rotate-12 transition-transform" />
                View Projects
              </Link>
              <Link to="/resume" className="btn-outline">
                <FileText size={16} />
                View Resume
              </Link>
              <Link to="/contact" className="btn-outline">
                <Send size={16} />
                Contact Me
              </Link>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start mb-10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noreferrer' : undefined}
                  className={`w-10 h-10 rounded-xl card-glass flex items-center justify-center hover:border-accent/50 hover:scale-110 transition-all duration-300 ${
                    s.label === 'WhatsApp' 
                      ? 'hover:text-[#25D366] hover:border-[#25D366]/50' 
                      : 'hover:text-accent'
                  }`}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>

            <div className="flex gap-8 justify-center lg:justify-start pt-8 border-t border-[var(--border)]">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display font-bold text-2xl text-gradient">{stat.value}</p>
                  <p className="text-[var(--muted)] text-xs font-mono mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-center justify-center relative order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 max-w-full mx-auto">
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-accent/15 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
              <div className="absolute inset-8 rounded-full border border-accent/10 animate-spin-slow" style={{animationDuration: '25s'}}></div>
              
              {/* Main identity ring */}
              <div className="identity-ring absolute inset-6 rounded-full"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-accent/20 via-emerald-500/15 to-blue-500/10 blur-xl"></div>

              {/* Center content */}
              <div className="absolute inset-12 rounded-full card-glass border border-accent/30 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
                <div className="relative z-10 text-center px-2">
                  <p className="font-display font-black text-xl md:text-2xl lg:text-3xl text-gradient leading-none">AL</p>
                  <p className="font-mono text-[8px] md:text-[10px] lg:text-xs text-accent mt-1 tracking-[0.3em] uppercase">
                    AHMODANY
                  </p>
                  <div className="mt-2 flex items-center gap-1 justify-center">
                    <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent animate-pulse"></span>
                    <span className="font-mono text-[8px] md:text-[10px] text-[var(--muted)]">Frontend Dev</span>
                  </div>
                </div>
              </div>

              {/* Tech badges - positioned more carefully */}
              <div className="absolute top-[5%] left-[10%] card-glass rounded-lg px-2 py-1 text-[10px] md:text-xs font-mono border border-[var(--border)] hover:border-accent/50 hover:text-accent transition-all animate-float shadow-lg cursor-default">
                ⚛️ React
              </div>
              <div className="absolute bottom-[10%] left-[5%] card-glass rounded-lg px-2 py-1 text-[10px] md:text-xs font-mono border border-[var(--border)] hover:border-accent/50 hover:text-accent transition-all animate-float shadow-lg cursor-default" style={{animationDelay: '1.5s'}}>
                🎨 Tailwind
              </div>
              <div className="absolute top-[15%] right-[8%] card-glass rounded-lg px-2 py-1 text-[10px] md:text-xs font-mono border border-[var(--border)] hover:border-accent/50 hover:text-accent transition-all animate-float shadow-lg cursor-default" style={{animationDelay: '0.8s'}}>
                ⚡ Vite
              </div>
              <div className="absolute bottom-[20%] right-[5%] card-glass rounded-lg px-2 py-1 text-[10px] md:text-xs font-mono border border-[var(--border)] hover:border-accent/50 hover:text-accent transition-all animate-float shadow-lg cursor-default" style={{animationDelay: '2.5s'}}>
                🔥 Firebase
              </div>

              {/* Floating particles */}
              <div className="absolute top-[25%] left-[8%] w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent/60 animate-pulse"></div>
              <div className="absolute top-[70%] left-[12%] w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent/60 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-[45%] right-[8%] w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent/60 animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-[80%] right-[18%] w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-[15%] right-[28%] w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent/60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-mono text-[var(--muted)]">scroll</span>
          <ChevronDown size={16} className="text-accent" />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left reveal">
          <span className="tag">Working Style</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
            Built for <span className="text-gradient">clarity and polish</span>
          </h2>
          <p className="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto md:mx-0">
            I care about what users feel on the screen and what developers inherit behind it.
            The best frontend work balances speed, maintainability, and visual confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <item.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="tag">Featured Work</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              Selected<br /><span className="text-gradient">Projects</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mt-4">
              A quick look at the kinds of products I have shipped: community platforms, e-commerce experiences,
              utility apps, and interfaces designed to feel modern from first click to final checkout.
            </p>
          </div>
          <Link to="/projects" className="btn-outline hidden md:inline-flex">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <Link to="/projects" className="btn-outline">
            View All <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag">What I Do</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              Services I <span className="text-gradient">Provide</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto">
              Whether you need a full interface built from scratch or an existing product refined,
              I help teams move from rough ideas to production-ready frontend experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-5">{service.icon}</div>
                  <h3 className="font-display font-bold text-lg mb-3">{service.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-accent/8 text-accent border border-accent/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="card-glass rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <span className="tag">Tech Stack</span>
                <h2 className="font-display font-bold text-4xl mt-3">Tools of the Trade</h2>
                <p className="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto">
                  These are the tools I rely on most in production work, from interface architecture and styling
                  to deployment, state management, and practical integration work.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {allSkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-4 py-2 card-glass rounded-full text-sm font-mono hover:border-accent/40 hover:text-accent transition-all duration-300 cursor-default hover:scale-105 hover:-translate-y-0.5"
                  >
                    <span>{skill.icon}</span>{skill.name}
                  </motion.span>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link to="/skills" className="btn-primary">
                  Explore Skills <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="tag">Snapshot</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
            Numbers behind the <span className="text-gradient">work</span>
          </h2>
          <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
            Small details matter, but measurable delivery matters too. These numbers give a quick view of my
            current body of work and the kind of consistency I aim for on every build.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-8 text-center hover:border-accent/30 transition-all duration-500 group"
            >
              <counter.icon size={28} className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display font-black text-4xl md:text-5xl text-gradient mb-2">{counter.value}</p>
              <p className="text-[var(--muted)] text-sm font-mono">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag">Kind Words</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto">
              A few words from people I have built for or collaborated with. The goal is always the same:
              ship work that feels reliable, thoughtful, and easy to trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 flex-1 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                  <div 
                    className="w-10 h-10 rounded-xl font-display font-bold text-sm flex items-center justify-center"
                    style={{ background: `${testimonial.color}20`, color: testimonial.color }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-[var(--muted)] text-xs font-mono">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-glass rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/8"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            <div className="relative z-10">
              <span className="tag mb-6 inline-block">Let's Connect</span>
              <h2 className="font-display font-black text-4xl md:text-6xl mb-6 leading-tight">
                Have a project in<br /><span className="text-gradient">mind?</span>
              </h2>
              <p className="text-[var(--muted)] text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                If you need a React developer who cares about product feel, interface quality, and delivery discipline,
                I would love to hear what you are building and where you need support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Start a Conversation <ArrowRight size={18} />
                </Link>
                <Link to="/resume" className="btn-outline text-base px-8 py-4">
                  <FileText size={18} /> View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;