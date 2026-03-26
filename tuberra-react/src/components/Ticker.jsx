import React from 'react';
import { motion } from 'framer-motion';

const grades = [
  "Stainless Steel 304/304L", "Stainless Steel 316/316L", 
  "Carbon Steel A106 Gr B", "Alloy Steel WP11/WP22",
  "Duplex UNS S31803", "Super Duplex UNS S32750",
  "Inconel 600/625/718", "Monel 400", "Hastelloy C276", "Titanium Gr 2",
  "Stainless Steel 304/304L", "Stainless Steel 316/316L", 
  "Carbon Steel A106 Gr B", "Alloy Steel WP11/WP22",
];

const Ticker = () => {
  return (
    <div className="w-full bg-[#030610] py-4 border-y border-[#3a8dde]/20 overflow-hidden relative z-20 shadow-[0_0_20px_rgba(20,86,168,0.2)]">
      {/* Edge Gradients for fading effect */}
      <div className="absolute top-0 bottom-0 left-0 w-[100px] bg-gradient-to-r from-[#030610] to-transparent z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-[100px] bg-gradient-to-l from-[#030610] to-transparent z-10"></div>

      <div className="relative flex">
        <motion.div 
          animate={{ x: [0, -1920] }} // Adjust based on estimated width for seamless looping
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center min-w-max"
        >
          {grades.map((grade, index) => (
            <div key={index} className="flex items-center">
              <span className="font-mono text-[0.8rem] font-medium text-[#3a8dde] tracking-[0.1em] px-8">
                {grade}
              </span>
              <span className="w-[5px] h-[5px] rounded-full bg-white/20"></span>
            </div>
          ))}
          {grades.map((grade, index) => (
            <div key={`dup-${index}`} className="flex items-center">
              <span className="font-mono text-[0.8rem] font-medium text-[#3a8dde] tracking-[0.1em] px-8">
                {grade}
              </span>
              <span className="w-[5px] h-[5px] rounded-full bg-white/20"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Ticker;