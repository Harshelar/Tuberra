import React from 'react';
import { motion } from 'framer-motion';
import { specsData } from '../data/content';

const Specs = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#060a16]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[20vw] bg-[#1456a8] mix-blend-screen filter blur-[100px] opacity-10 rounded-full z-0 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-[#3a8dde] mb-3">Metallurgical Grades</div>
            <h2 className="font-bebas text-[clamp(2.5rem,4vw,3.8rem)] tracking-[0.05em] text-white leading-[1.05] mb-6">
              Material <span className="clip-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#1456a8] to-[#3a8dde]">Specifications</span>
            </h2>
            <div className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mx-auto shadow-[0_0_10px_rgba(58,141,222,0.8)]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specsData.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:border-[#3a8dde]/50 transition-all duration-500 overflow-hidden relative"
            >
              {/* Animated Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#3a8dde]/20 to-transparent rounded-tr-2xl group-hover:scale-150 transition-transform duration-500"></div>

              <h3 className="font-bebas text-[1.8rem] tracking-[0.05em] text-white mb-6 border-b border-white/10 pb-4 relative">
                {spec.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3a8dde] transition-all duration-500 group-hover:w-full"></span>
              </h3>
              <p className="text-[0.95rem] leading-[1.8] text-silver font-mono">
                {spec.grades}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;