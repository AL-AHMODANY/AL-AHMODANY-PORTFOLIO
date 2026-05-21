import { motion } from 'framer-motion';
import { MapPin, Coffee, Briefcase, Code2 } from 'lucide-react';

const AboutPage = () => {
  const facts = [
    { label: 'Work Style', value: 'Remote First', icon: MapPin },
    { label: 'Experience', value: '2+ Years', icon: Briefcase },
    { label: 'Projects Shipped', value: '7+ Live Builds', icon: Code2 },
    { label: 'Fuel Source', value: 'Coffee and Curiosity', icon: Coffee },
  ];

  const values = [
    { text: 'Readable code over clever code' },
    { text: 'Interfaces should earn trust quickly' },
    { text: 'Performance is part of the product' },
    { text: 'Accessibility should be built in, not added later' },
    { text: 'Good collaboration improves the final UI' },
    { text: 'Learning never stops in frontend work' },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Independent Frontend Developer',
      company: 'Freelance - Remote',
      type: 'Current',
      desc: 'Building production-facing React applications for clients who need polished interfaces, dependable delivery, and room to scale after launch.',
    },
    {
      year: '2023',
      title: 'Frontend Project Delivery',
      company: 'Client Work and Product Builds',
      type: 'Growth',
      desc: 'Focused on shipping real products across e-commerce, management platforms, and interactive web experiences with stronger design systems and cleaner code structure.',
    },
    {
      year: '2022',
      title: 'Frontend Foundation',
      company: 'Practice, Projects, and Iteration',
      type: 'Learning',
      desc: 'Turned core JavaScript, React, and CSS skills into actual working products while building the habits that still shape how I approach frontend work today.',
    },
    {
      year: '2021',
      title: 'Self-Taught Start',
      company: 'Docs, Courses, and Personal Experiments',
      type: 'Beginning',
      desc: 'Started learning the web by building small interfaces, breaking things often, and developing a strong curiosity for how good products feel on the frontend.',
    },
  ];

  const techSkills = [
    { name: 'React', icon: '⚛️', level: 92 },
    { name: 'JavaScript', icon: '⚡', level: 90 },
    { name: 'Tailwind CSS', icon: '🎨', level: 95 },
    { name: 'HTML5', icon: '🧱', level: 98 },
    { name: 'CSS3', icon: '✨', level: 93 },
    { name: 'React Router', icon: '🧭', level: 88 },
    { name: 'Framer Motion', icon: '🎬', level: 85 },
    { name: 'Firebase', icon: '🔥', level: 80 },
    { name: 'Git', icon: '🐙', level: 87 },
    { name: 'Figma', icon: '🖌️', level: 75 },
    { name: 'REST APIs', icon: '🔌', level: 85 },
    { name: 'Vite', icon: '🚀', level: 88 },
  ];

  const funFacts = [
    { emoji: '🌙', title: 'Late-Night Builder', desc: 'Some of my best focused work happens when the noise is gone and the problem is finally quiet enough to solve well.' },
    { emoji: '🎨', title: 'Design Observer', desc: 'I constantly study interfaces, layouts, and motion patterns because frontend quality usually comes from what you notice before you build.' },
    { emoji: '🌍', title: 'Bilingual Product Thinking', desc: 'I think a lot about building experiences that work clearly for both Arabic and English speaking users.' },
    { emoji: '📚', title: 'Always Learning', desc: 'Docs, talks, refactors, and experiments are a regular part of how I keep growing as a developer.' },
    { emoji: '⚡', title: 'Performance Aware', desc: 'I care about how quickly products respond because speed shapes trust before users even read the content.' },
    { emoji: '☕', title: 'Consistently caffeinated', desc: 'A good cup of coffee usually means I am either improving a UI detail or rethinking a component structure.' },
  ];

  return (
    <div className="pt-28">
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="tag">About Me</span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mt-4 mb-6 leading-none">
            Building interfaces with<br /><span className="text-gradient">care and intent</span>
          </h1>
          <p className="text-[var(--muted)] text-xl max-w-3xl leading-relaxed">
            I am a frontend developer who treats UI as both a technical system and a user-facing craft.
            My work lives at the intersection of clean code, strong visual judgment, and practical product thinking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glass rounded-2xl p-8"
            >
              <h2 className="font-display font-bold text-2xl mb-5 text-gradient">My Story</h2>
              <div className="space-y-4 text-[var(--muted)] leading-relaxed text-sm">
                <p>
                  What first pulled me into web development was the feeling of turning a blank file into something interactive,
                  useful, and alive. That combination of logic and visual feedback still feels powerful every time I build.
                </p>
                <p>
                  Over the last few years I have focused deeply on the React ecosystem, responsive interfaces, and the kind of
                  frontend work that turns ideas into products people can actually use with confidence.
                </p>
                <p>
                  I enjoy projects that need both structure and polish: dashboards that must stay maintainable, storefronts that
                  need to earn trust, and content-heavy sites that need clear hierarchy and smooth interaction.
                </p>
                <p>
                  The way I see it, good frontend work is not only about shipping features. It is about making those features feel
                  natural, coherent, and durable for the team that will keep building after launch.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card-glass rounded-xl p-5 group hover:border-accent/30 transition-all duration-300"
                >
                  <fact.icon size={20} className="text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-mono text-xs text-[var(--muted)] mb-1">{fact.label}</p>
                  <p className="font-display font-semibold text-sm">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-glass rounded-3xl p-8 h-full relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-blue-500/5"></div>
            <div className="relative z-10">
              <div className="relative w-36 h-36 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full identity-ring-small"></div>
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-accent/20 to-emerald-600/20 flex items-center justify-center border border-accent/30">
                  <span className="font-display font-black text-3xl text-gradient">AL</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="font-display font-bold text-2xl">AL-AHMODANY</h2>
                <p className="text-accent font-mono text-sm mt-1">Frontend Developer</p>
              </div>

              <div className="space-y-2 mb-8">
                <p className="font-display font-semibold text-sm text-[var(--muted)] mb-4">What matters in my work</p>
                {values.map((value, index) => (
                  <div key={value.text} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <span className="text-sm font-body">{value.text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[var(--border)]">
                <p className="font-display font-semibold text-sm text-[var(--muted)] mb-3">Languages</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="tag">Arabic (Native)</span>
                  <span className="tag">English (Fluent)</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-accent animate-pulse flex-shrink-0"></span>
                <div>
                  <p className="font-display font-semibold text-sm">Open to meaningful work</p>
                  <p className="text-[var(--muted)] text-xs font-mono">Remote - Freelance - Contract</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag">Journey</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              Career <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
              My path into frontend development has been shaped by self-driven learning, hands-on delivery,
              and a steady shift toward more complex product work.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex gap-8 mb-12"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl card-glass border border-accent/30 flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="font-mono text-xs font-bold text-accent">{item.year}</span>
                </div>
                <div className="card-glass rounded-2xl p-6 flex-1 hover:border-accent/30 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-2 gap-4">
                    <h3 className="font-display font-bold text-lg group-hover:text-accent transition-colors">{item.title}</h3>
                    <span className="tag text-xs whitespace-nowrap">{item.type}</span>
                  </div>
                  <p className="text-accent font-mono text-sm mb-3">{item.company}</p>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="tag">Expertise</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
            I lean heavily into React, modern CSS workflows, and practical frontend tooling that helps teams ship quickly without
            losing structure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-5 text-center hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
              <p className="font-display font-semibold text-sm">{skill.name}</p>
              <p className="text-[var(--muted)] text-xs font-mono mt-1">{skill.level}%</p>
              <div className="h-1 rounded-full bg-[var(--border)] mt-2 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400" style={{width: `${skill.level}%`}}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag">Outside the Work</span>
            <h2 className="font-display font-bold text-4xl mt-3">
              Beyond the <span className="text-gradient">screen</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
              I care a lot about the craft, but I also try to stay curious, grounded, and observant. Those habits end up shaping the work too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fun, index) => (
              <motion.div
                key={fun.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-7 hover:border-accent/30 transition-all duration-500"
              >
                <span className="text-4xl mb-4 block">{fun.emoji}</span>
                <h3 className="font-display font-bold text-lg mb-2">{fun.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{fun.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;