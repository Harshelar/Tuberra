import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplet, Zap, Focus, Factory, Cpu } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';

const industriesData = [
  { id: 1, title: 'Oil & Gas', icon: <Flame size={32} strokeWidth={1.5} />, desc: 'High-pressure capabilities for harsh extraction.' },
  { id: 2, title: 'Petrochemicals', icon: <Factory size={32} strokeWidth={1.5} />, desc: 'Corrosion-resistant steel for chemical flow.' },
  { id: 3, title: 'Water Treatment', icon: <Droplet size={32} strokeWidth={1.5} />, desc: 'Pure flow piping for desalination & management.' },
  { id: 4, title: 'Power Plants', icon: <Zap size={32} strokeWidth={1.5} />, desc: 'Thermal and nuclear operational grades.' },
  { id: 5, title: 'Aerospace', icon: <Focus size={32} strokeWidth={1.5} />, desc: 'Precision engineered lightweight alloys.' },
  { id: 6, title: 'Automotive', icon: <Cpu size={32} strokeWidth={1.5} />, desc: 'Heavy stress structural fitments & parts.' },
];

const Industries = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#030610] relative overflow-hidden">
      {/* Background visualization lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
         <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#3a8dde] to-transparent absolute top-1/4"></div>
         <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#1456a8] to-transparent absolute top-3/4"></div>
         <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#3a8dde] to-transparent absolute left-1/4"></div>
         <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#1456a8] to-transparent absolute right-1/4"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-[#3a8dde] mb-3">Sectors We Serve</div>
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,3.8rem)] tracking-[0.05em] text-white leading-[1.05] mb-6">
            Powering Global <span className="clip-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#3a8dde] to-[#1456a8]">Industries</span>   
          </h2>
          <div className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mx-auto shadow-[0_0_10px_rgba(58,141,222,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {industriesData.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="h-full cursor-pointer"
            >
              <GlowCard customSize={true} className="w-full h-full p-8 group z-10 glass-panel glass-panel-hover">
                {/* Animated hover gradient bubble */}
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-[#3a8dde]/10 to-transparent transition-transform duration-1000 -translate-x-full group-hover:translate-x-full z-0"></div>

                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#3a8dde] mb-6 group-hover:bg-[#3a8dde] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(58,141,222,0.2)] group-hover:shadow-[0_0_25px_rgba(58,141,222,0.6)] group-hover:scale-110 relative z-10">
                  {ind.icon}
                </div>
                <h3 className="font-rajdhani text-[1.4rem] font-bold text-white mb-3 tracking-wide relative z-10">{ind.title}</h3>
                <p className="text-silver text-[0.95rem] leading-relaxed relative z-10">        
                  {ind.desc}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Industries;
