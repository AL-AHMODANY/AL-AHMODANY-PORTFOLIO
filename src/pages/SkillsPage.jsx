import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [animating, setAnimating] = useState(false);

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const tools = [
    { name: 'VS Code', icon: '💻', type: 'Editor' },
    { name: 'Vite', icon: '⚡', type: 'Build Tool' },
    { name: 'Git', icon: '🐙', type: 'Version Control' },
    { name: 'Figma', icon: '🖌️', type: 'Design' },
    { name: 'Vercel', icon: '▲', type: 'Deployment' },
    { name: 'Firebase', icon: '🔥', type: 'Backend' },
    { name: 'Postman', icon: '📬', type: 'API Testing' },
    { name: 'Chrome DevTools', icon: '🔍', type: 'Debugging' },
  ];

  const roadmap = [
    { icon: '🔷', title: 'TypeScript Mastery', desc: 'Deepening type-safe development patterns for larger React codebases and more reliable component systems.', status: 'Active', progress: 65 },
    { icon: '🧪', title: 'Testing with Vitest', desc: 'Building stronger unit and integration testing habits so product changes stay safer as applications grow.', status: 'Active', progress: 45 },
    { icon: '🟥', title: 'Next.js and SSR', desc: 'Expanding into server-side rendering and SEO-aware application delivery with the modern Next.js stack.', status: 'Next', progress: 20 },
    { icon: '🎬', title: 'Advanced Motion', desc: 'Exploring richer interaction work and more choreographed animation systems for premium product experiences.', status: 'Active', progress: 55 },
    { icon: '📦', title: 'Design Systems', desc: 'Creating reusable UI foundations, token systems, and component libraries that support consistent scaling.', status: 'Next', progress: 30 },
    { icon: '☁️', title: 'Cloud and DevOps', desc: 'Learning more about deployment pipelines, automation, and the production workflows behind frontend delivery.', status: 'Planned', progress: 10 },
  ];

  const workflow = [
    { title: 'Understand the problem', desc: 'Start with user needs, product context, and the exact outcome the interface should help create.', icon: '🔍' },
    { title: 'Shape the UI system', desc: 'Plan component structure, layout patterns, and data flow before complexity spreads.', icon: '📐' },
    { title: 'Build with quality', desc: 'Implement with React, clear naming, reusable patterns, and performance-aware frontend decisions.', icon: '⚡' },
    { title: 'Refine and test', desc: 'Review responsiveness, interaction states, accessibility, and the small details that make products feel complete.', icon: '🧪' },
    { title: 'Ship and iterate', desc: 'Launch confidently, collect feedback, and improve the product without losing the clarity of the original build.', icon: '🚀' },
  ];

  return (
    <div className="pt-28">
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="tag">Expertise</span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mt-4 mb-4 leading-none">
            Skills and <span className="text-gradient">Technologies</span>
          </h1>
          <p className="text-[var(--muted)] text-xl max-w-3xl mx-auto leading-relaxed">
            A working stack shaped by real product delivery: modern React development, practical tooling,
            responsive UI work, and a steady commitment to improving code quality over time.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-14"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-mono text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-black font-semibold shadow-[0_0_20px_rgba(0,255,148,0.3)]'
                  : 'card-glass text-[var(--muted)] hover:border-accent/40 hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-20">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              className="card-glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                  <div>
                    <p className="font-display font-semibold">{skill.name}</p>
                    <p className="text-xs font-mono text-[var(--muted)]">{skill.category}</p>
                  </div>
                </div>
                <span className="font-mono font-bold text-accent text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-300 transition-all duration-1000"
                  style={{ width: animating ? `${skill.level}%` : '0%' }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag">Workflow</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              Tools and <span className="text-gradient">Environment</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mt-4 max-w-3xl mx-auto">
              I prefer tools that help me move quickly without sacrificing structure: fast builds, reliable state management,
              clear debugging, and deployment setups that keep iteration simple.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-6 text-center hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <span className="text-3xl mb-3 block group-hover:scale-125 transition-transform duration-300">{tool.icon}</span>
                <p className="font-display font-semibold text-sm">{tool.name}</p>
                <p className="text-[var(--muted)] text-xs font-mono mt-1">{tool.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="tag">Growth</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
            Learning <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
            I treat learning like part of the job, not something extra. These are the areas I am actively deepening next.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roadmap.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-3 right-3">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                    item.status === 'Active' 
                      ? 'bg-accent/20 text-accent border border-accent/30'
                      : item.status === 'Next'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400 transition-all duration-1000" 
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-[var(--muted)] text-xs font-mono mt-2">{item.progress}% complete</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="tag">Process</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">
              How I <span className="text-gradient">Work</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mt-4 max-w-2xl mx-auto">
              My workflow is simple on purpose: understand the problem, build the right structure, refine the experience, and ship with confidence.
            </p>
          </div>

          <div className="space-y-4">
            {workflow.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 font-display font-black text-accent text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{step.desc}</p>
                </div>
                <span className="text-2xl hidden md:block">{step.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;