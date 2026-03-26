import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Drill, Hexagon, Shield, Package } from 'lucide-react';

const reasons = [
  { icon: <Award size={30} />, title: "ISO 9001 Certified", desc: "Rigorous quality management systems guaranteeing flawless end products." },
  { icon: <Globe size={30} />, title: "Global Footprint", desc: "Exporting premium materials to over 40+ countries efficiently." },
  { icon: <Drill size={30} />, title: "Advanced Manufacturing", desc: "State-of-the-art facilities equipped with modern tooling machinery." },
  { icon: <Hexagon size={30} />, title: "Vast Inventory", desc: "Extensive stock of rare and standard materials ready to ship." },
  { icon: <Shield size={30} />, title: "Tested Integrity", desc: "Comprehensive NDT, hydrostatic, and mechanical testing per batch." },
  { icon: <Package size={30} />, title: "Custom Packaging", desc: "Export-grade secure packaging ensuring pristine material delivery." },
];

const WhyUs = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#030610] relative">
      {/* Background visualization */}
      <div className="absolute inset-0 bg-[#3a8dde]/5 opacity-20 bg-[radial-gradient(#1456a8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-[#3a8dde] mb-3">Our Global Advantage</div>
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,3.8rem)] tracking-[0.05em] text-white leading-[1.05] mb-6">
            Why Partner With <span className="clip-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#3a8dde] to-[#1456a8]">Tuberra</span>
          </h2>
          <div className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mx-auto shadow-[0_0_10px_rgba(58,141,222,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Icon Container with glowing aura */}
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 bg-[#3a8dde] rounded-full mix-blend-screen filter blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative w-full h-full glass-panel rounded-full flex items-center justify-center text-[#3a8dde] border border-white/10 group-hover:border-[#3a8dde]/50 transition-colors duration-500 z-10 group-hover:scale-110 shadow-[0_0_15px_rgba(20,86,168,0.2)]">
                  {reason.icon}
                </div>
              </div>
              
              <h3 className="font-rajdhani text-[1.4rem] font-bold text-white mb-3 group-hover:text-[#3a8dde] transition-colors">{reason.title}</h3>
              <p className="text-silver text-[0.95rem] leading-[1.7] max-w-[300px]">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;