import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplet, Zap, Focus, Factory, Cpu, Shirt, Thermometer, TestTube, TreePine, Package, Truck } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';

const industriesData = [
  { id: 1, title: 'Aerospace', icon: <Focus size={32} strokeWidth={1.5} />, desc: 'Precision engineered lightweight alloys.' },
  { id: 2, title: 'Automotive', icon: <Truck size={32} strokeWidth={1.5} />, desc: 'Heavy stress structural fitments & parts.' },
  { id: 3, title: 'Chemicals & Paint', icon: <TestTube size={32} strokeWidth={1.5} />, desc: 'Corrosion-resistant grades for chemical formulations.' },
  { id: 4, title: 'Distalries & Brewries', icon: <Thermometer size={32} strokeWidth={1.5} />, desc: 'High-purity food-grade fittings and tubings.' },
  { id: 5, title: 'Integrated Steel Plant', icon: <Factory size={32} strokeWidth={1.5} />, desc: 'Heavy-duty structural components for refining.' },
  { id: 6, title: 'Oil & Gas', icon: <Flame size={32} strokeWidth={1.5} />, desc: 'High-pressure capabilities for harsh extraction.' },
  { id: 7, title: 'Paper & Pulp', icon: <TreePine size={32} strokeWidth={1.5} />, desc: 'Wear-resistant machinery and flow systems.' },
  { id: 8, title: 'Petrochemicals', icon: <Droplet size={32} strokeWidth={1.5} />, desc: 'Corrosion-resistant steel for chemical flow.' },
  { id: 9, title: 'Pharmaceuticals', icon: <TestTube size={32} strokeWidth={1.5} />, desc: 'Ultra-pure solutions for cleanroom environments.' },
  { id: 10, title: 'Powerplants', icon: <Zap size={32} strokeWidth={1.5} />, desc: 'Thermal and nuclear operational grades.' },
  { id: 11, title: 'Sugar', icon: <Package size={32} strokeWidth={1.5} />, desc: 'Abrasion-resistant setups for sugar processing.' },
  { id: 12, title: 'Textile', icon: <Shirt size={32} strokeWidth={1.5} />, desc: 'Robust processing equipment for textile manufacturing.' },
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

      <div className="max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-[#3a8dde] mb-3">Sectors We Serve</div>
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,3.5rem)] tracking-[0.05em] text-white leading-[1.05] mb-5">
            Powering Global <span className="clip-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#3a8dde] to-[#1456a8]">Industries</span>   
          </h2>
          <div className="w-[50px] h-[3px] rounded-full bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mx-auto shadow-[0_0_10px_rgba(58,141,222,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-6 md:grid-flow-col gap-x-8 gap-y-4 lg:gap-x-24 max-w-[900px] mx-auto">
          {industriesData.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, x: i < 6 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
              className="flex items-center gap-5 cursor-pointer group py-2 px-4 rounded-xl hover:bg-[#1456a8]/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#3a8dde] group-hover:bg-[#3a8dde] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(58,141,222,0.1)] group-hover:shadow-[0_0_20px_rgba(58,141,222,0.5)] group-hover:scale-110 shrink-0">
                {ind.icon}
              </div>
              <h3 className="font-rajdhani text-[1.4rem] font-bold text-silver tracking-wide group-hover:text-white transition-colors duration-300">
                {ind.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Industries;
