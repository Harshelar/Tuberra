import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030610] overflow-hidden">
      {/* Background Orbs to match theme */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#1456a8] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-glow z-0 gpu-accel pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-[#3a8dde] rounded-full mix-blend-screen filter blur-[150px] opacity-10 z-0 gpu-accel pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center" style={{ perspective: 1000 }}>
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="mb-6"
        >
          <img 
            src="/logo.png" 
            alt="Tuberra Logo" 
            className="h-28 w-auto object-contain drop-shadow-[0_0_25px_rgba(58,141,222,0.6)]" 
          />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="flex flex-col items-center"
        >
          <div className="font-bebas text-6xl md:text-7xl tracking-[0.2em] text-white pl-[0.2em] text-center">TUBERRA</div>
          <div className="text-[0.85rem] md:text-sm tracking-[0.4em] text-[#3a8dde] font-rajdhani font-semibold uppercase mt-2 pl-[0.4em] text-center">Steel Company</div>
          
          {/* Loading bar */}
          <div className="mt-8 w-48 h-1 overflow-hidden rounded-full bg-white/10 relative">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.2, ease: "circInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-[#1456a8] to-[#3a8dde] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Preloader;