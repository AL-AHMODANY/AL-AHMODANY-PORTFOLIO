import { useState } from 'react';
import { ExternalLink, Globe, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, delay = 0 }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="group card-glass rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {/* Screenshot / Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={handleImageError}
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center text-white font-display font-bold text-xl"
              style={{ background: `linear-gradient(135deg, ${project.color}30, #111118)` }}
            >
              {project.title}
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Live button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs px-4 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </div>
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span 
              className="text-xs font-mono px-2.5 py-1 rounded-full text-black font-semibold"
              style={{ background: project.color }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span key={tech} className="tag text-xs">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-accent hover:underline" 
              onClick={(e) => e.stopPropagation()}
            >
              <Globe size={13} /> View Live
            </a>
            <span className="text-[var(--border)]">·</span>
            <a 
              href="https://github.com/AL-AHMODANY" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[var(--muted)] hover:text-accent transition-colors" 
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={13} /> Source
            </a>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              onClick={() => setModalOpen(false)}
            ></div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative card-glass rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-accent/20"
            >
              <button 
                onClick={() => setModalOpen(false)} 
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <X size={16} />
              </button>
              
              <div className="h-64 overflow-hidden rounded-t-3xl">
                {!imageError ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top" 
                    onError={handleImageError}
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-white font-display font-bold text-2xl"
                    style={{ background: `linear-gradient(135deg, ${project.color}30, #111118)` }}
                  >
                    {project.title}
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-display font-bold text-2xl mb-1">{project.title}</h2>
                    <span className="tag">{project.category}</span>
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-primary text-xs"
                  >
                    <ExternalLink size={14} /> Visit Site
                  </a>
                </div>
                <p className="text-[var(--muted)] leading-relaxed mb-6">{project.description}</p>
                <div>
                  <p className="font-display font-semibold text-sm mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;