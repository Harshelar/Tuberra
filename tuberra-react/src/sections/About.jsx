import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-20 bg-[#060a16] relative overflow-hidden">
      {/* Abstract structural ring */}
      <div className="absolute top-1/2 -left-40 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[40px] border-white/5 blur-sm z-0"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Images grid / Visualization */}
        <div className="relative">
          <motion.div 
             initial={{ opacity: 0, x: -40, rotate: -5 }}
             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative z-10 glass-panel rounded-2xl overflow-hidden p-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
              alt="Steel Pipes Manufacturing" 
              className="w-full h-auto object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="absolute -bottom-10 -right-10 w-2/3 glass-panel rounded-2xl overflow-hidden p-2 z-20 hidden md:block border border-[#3a8dde]/30"
          >
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" 
              alt="Industrial Pipes" 
              className="w-full h-auto object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-[#3a8dde] mb-3">About Us</div>
            <h2 className="font-bebas text-[clamp(2.5rem,4vw,3.8rem)] tracking-[0.05em] text-white leading-[1.05] mb-6">
              Forging <span className="clip-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#3a8dde] to-[#1456a8]">Excellence</span> in Steel
            </h2>
            <div className="w-[60px] h-[3px] rounded-sm bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mb-8" />
            
            <p className="text-base leading-[1.8] text-silver mb-8 border-l border-white/10 pl-6">
              <strong className="text-white">TUBERRA STEEL COMPANY</strong> represents the pinnacle of metallurgical processing. 
              We don’t just supply steel; we engineer infrastructure arteries. Located in the industrial core of Mumbai, India, our 
              facilities export premium grade carbon steel, stainless steel, and rare alloy hardware globally.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: <Target className="text-[#3a8dde]" />, title: 'Our Mission', text: 'To manufacture and supply the highest quality metal products that form the indestructible backbone of global infrastructure.' },
                { icon: <Eye className="text-[#3a8dde]" />, title: 'Our Vision', text: 'Pioneering sustainable and technologically advanced metallurgical solutions for the next century of mega-projects.' },
                { icon: <ShieldCheck className="text-[#3a8dde]" />, title: 'Quality Policy', text: 'Zero compromise. 100% material traceability. End-to-end NDT & mechanical testing for absolute structural integrity.' },
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  key={i} 
                  className="flex gap-5 glass-panel p-5 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-crosshair group"
                >
                  <div className="w-12 h-12 shrink-0 bg-white/5 border border-white/10 rounded-full flex justify-center items-center group-hover:scale-110 shadow-[0_0_10px_rgba(58,141,222,0.1)] group-hover:shadow-[0_0_20px_rgba(58,141,222,0.5)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bebas text-xl tracking-[0.05em] text-white mb-1">{item.title}</h3>
                    <p className="text-[0.9rem] leading-[1.6] text-silver">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;