import WhatsAppIcon from './WhatsAppIcon';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi AL-AHMODANY! I'm interested in discussing a project with you.");
    window.open(`https://wa.me/2348129117778?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group shadow-[#25D366]/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon size={24} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute left-full ml-3 px-3 py-2 bg-[#128C7E] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat on WhatsApp
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-[#128C7E] rotate-45"></div>
      </div>
    </motion.button>
  );
};

export default WhatsAppButton;