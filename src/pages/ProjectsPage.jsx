import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const projectStats = [
    { value: '7', label: 'Projects Built' },
    { value: '100%', label: 'Live Deployments' },
    { value: '5', label: 'Product Categories' },
    { value: 'React', label: 'Primary Stack' },
  ];

  const handleImageError = (event, project) => {
    event.target.style.display = 'none';
    event.target.parentElement.style.background = `linear-gradient(135deg, ${project.color}30, #0A0A0F)`;
  };

  return (
    <div className="pt-28">
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="tag">Portfolio</span>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl mt-4 mb-4 leading-none">
            Selected <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-[var(--muted)] text-xl max-w-3xl mx-auto leading-relaxed">
            A collection of React applications and frontend builds focused on clarity, responsiveness,
            and product experiences that feel polished in real use.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="card-glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500 group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto min-h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(event) => handleImageError(event, projects[0])}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40"></div>
                <div className="absolute top-4 left-4">
                  <span 
                    className="text-xs font-mono font-bold px-3 py-1.5 rounded-full text-black"
                    style={{ background: projects[0].color }}
                  >
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col justify-center">
                <span className="tag mb-4 inline-block">{projects[0].category}</span>
                <h2 className="font-display font-black text-3xl mb-4 group-hover:text-accent transition-colors">
                  {projects[0].title}
                </h2>
                <p className="text-[var(--muted)] leading-relaxed mb-6">
                  {projects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[0].tech.map((tech) => (
                    <span key={tech} className="tag text-xs">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap">
                  <a href={projects[0].url} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="https://github.com/AL-AHMODANY" target="_blank" rel="noreferrer" className="btn-outline">
                    <Github size={16} /> GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
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
              {category} {category === 'All' 
                ? `(${projects.length})` 
                : `(${projects.filter(project => project.category === category).length})`
              }
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.05}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-[var(--muted)] text-lg font-mono">No projects match this category yet.</p>
          </div>
        )}
      </section>

      <section className="section-padding bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {projectStats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="card-glass rounded-2xl p-6"
              >
                <p className="font-display font-black text-3xl text-gradient mb-2">{stat.value}</p>
                <p className="text-[var(--muted)] text-sm font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-glass rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent"></div>
          <div className="relative z-10">
            <span className="text-4xl mb-4 block">🤝</span>
            <h2 className="font-display font-black text-3xl md:text-4xl mb-4">Need a similar product experience?</h2>
            <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto">
              If you are building a dashboard, storefront, content platform, or custom web interface,
              I can help turn the idea into a polished frontend product.
            </p>
            <a href="/contact" className="btn-primary">
              Start a Project <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;