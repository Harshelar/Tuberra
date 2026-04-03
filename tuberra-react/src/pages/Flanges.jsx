import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Flanges = () => {
  return (
    <section className="py-24 px-6 lg:px-20 relative bg-[#060a16] min-h-screen">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#3a8dde] mix-blend-screen filter blur-[200px] opacity-10 rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <Link to="/" className="inline-flex items-center text-[#3a8dde] hover:text-white transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-[#3a8dde] mb-3">Product Details</div>
          <h1 className="font-bebas text-[clamp(2.5rem,4vw,3.8rem)] tracking-[0.05em] text-white leading-[1.05] mb-6 drop-shadow-lg">
            Flanges
          </h1>
          <div className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mx-auto shadow-[0_0_10px_rgba(58,141,222,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel rounded-xl overflow-hidden"
          >
            <img 
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/flange-manufacturer-india.jpg"
              alt="Flanges"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bebas text-white mb-4">Description</h2>
              <div className="text-silver leading-relaxed">
                <span className="block mt-1">We offer a comprehensive range of precision-engineered flanges designed for secure, leak-proof connections in piping systems. Manufactured in accordance with international standards, our flanges ensure high strength, dimensional accuracy, and excellent performance under extreme pressure and temperature conditions.</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types Of Flanges</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Weld Neck Flanges (WN)</li><li>•	Slip-On Flanges (SO)</li><li>•	Blind Flanges (BL)</li><li>•	Socket Weld Flanges (SW)</li><li>•	Threaded Flanges (TH)</li><li>•	Lap Joint Flanges (LJ)</li><li>•	Orifice Flanges</li><li>•	Spectacle Blind Flanges</li></ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Standards: ASTM / ASME B16.5, B16.47, DIN, EN, BS</li><li>•	Size Range: ½” NB to 48” NB (Custom sizes available)</li><li>•	Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500#</li><li>•	Facing: RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint)</li><li>•	Manufacturing: Forged / Plate Cut</li><li>•	Finish: Anti-rust coating / Oil coated / Machined</li></ul><span className="block mt-1">4) Grades & Materials</span><span className="text-white font-semibold block mt-3 mb-1">CARBON STEEL FLANGES</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM A105  (most common)</li><li>•	ASTM A350 LF2 (low temperature)</li><li>•	ASTM A694 F42 / F52 / F60 / F65 / F70 (high strength / pipeline)</li></ul><span className="text-white font-semibold block mt-3 mb-1">STAINLESS STEEL FLANGES</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM A182 F304 / F304L</li><li>•	ASTM A182 F316 / F316L</li><li>•	ASTM A182 F321</li><li>•	ASTM A182 F347</li><li>•	ASTM A182 F904L</li></ul><span className="text-white font-semibold block mt-3 mb-1">ALLOY STEEL (CHROME-MOLY)</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM A182 F5</li><li>•	ASTM A182 F9</li><li>•	ASTM A182 F11</li><li>•	ASTM A182 F22</li><li>•	ASTM A182 F91</li></ul><span className="text-white font-semibold block mt-3 mb-1">DUPLEX / SUPER DUPLEX</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM A182 F51 (Duplex 2205)</li><li>•	ASTM A182 F53 (Super Duplex 2507)</li><li>•	ASTM A182 F55</li></ul><span className="text-white font-semibold block mt-3 mb-1">NICKEL ALLOYS</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM B564 (Monel 400 / K500)</li><li>•	ASTM B564 (Inconel 600 / 625 / 718)</li><li>•	ASTM B564 (Hastelloy C276 / C22)</li></ul><span className="text-white font-semibold block mt-3 mb-1">TITANIUM</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM B381 Gr 2</li><li>•	ASTM B381 Gr 5</li></ul><span className="text-white font-semibold block mt-3 mb-1">CUPRONICKEL</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM B151 / B152 (Cu-Ni 90/10, 70/30)</li></ul><span className="block mt-1">👉 Dimensions =</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASME B16.5 (up to 24”)</li><li>•	ASME B16.47 (large size)</li></ul><span className="block mt-1">5) Applications</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	Oil & Gas Industry</li><li>•	Petrochemical Plants</li><li>•	Power Generation</li><li>•	Marine & Offshore</li><li>•	Chemical Processing</li><li>•	Heat Exchangers & Boilers</li><li>•	Construction & Infrastructure</li><li>•	Heavy Engineering</li></ul>
              </div>
            </div>
          
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Flanges;