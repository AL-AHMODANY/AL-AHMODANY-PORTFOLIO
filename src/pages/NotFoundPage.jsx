import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient grid-pattern"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <div className="font-display font-black text-[180px] md:text-[240px] leading-none text-gradient opacity-20 select-none">404</div>
        <div className="relative -mt-16 md:-mt-24">
          <span className="tag mb-4 inline-block">Lost in the void</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">Page Not Found</h1>
          <p className="text-[var(--muted)] text-lg max-w-md mx-auto mb-10">
            This page doesn't exist. Maybe it never did. Let's get you back somewhere real.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">← Back to Home</Link>
            <Link to="/projects" className="btn-outline">View Projects</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;