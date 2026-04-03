import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgedFittings = () => {
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
            Forged Fittings
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
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/prod/forged-fitting-manufacture-india.jpg"
              alt="Forged Fittings"
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
                <span className="block mt-1">Forged fittings are manufactured for high-pressure applications, offering superior mechanical strength and reliability. These fittings are precision machined and suitable for critical industrial operations.</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Elbows (Socket Weld / Threaded</li><li>•	Tees</li><li>•	Couplings (Full & Half)</li><li>•	Unions</li><li>•	Bushings</li><li>•	Plugs</li><li>•	Crosses</li></ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Standards: ASTM A105, A182, MSS SP-79, SP-83, SP-95</li><li>•	Size Range: ¼” to 4”</li><li>•	Pressure Class: 2000#, 3000#, 6000#, 9000#</li><li>•	Threading: NPT / BSP / Socket Weld</li></ul><span className="block mt-1">4) Grades & Materials</span><span className="text-white font-semibold block mt-3 mb-1">CARBON STEEL</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM A105</li><li>•	ASTM A350 LF2 (low temperature)</li></ul><span className="text-white font-semibold block mt-3 mb-1">STAINLESS STEEL</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM A182 F304 / F304L</li><li>•	ASTM A182 F316 / F316L</li><li>•	ASTM A182 F321 / F347</li></ul><span className="text-white font-semibold block mt-3 mb-1">ALLOY STEEL</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM A182 F11</li><li>•	ASTM A182 F22</li><li>•	ASTM A182 F91</li></ul><span className="text-white font-semibold block mt-3 mb-1">DUPLEX / SUPER DUPLEX</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	ASTM A182 F51 (Duplex 2205)</li><li>•	ASTM A182 F53 (Super Duplex 2507)</li></ul><span className="text-white font-semibold block mt-3 mb-1">NICKEL ALLOYS</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	Monel, Inconel, Hastelloy (as per ASTM B standards)</li></ul><span className="block mt-1">5) Applications</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	Oil & Gas Industry</li><li>•	Petrochemical Plants</li><li>•	Power Generation</li><li>•	Marine & Offshore</li><li>•	Chemical Processing</li><li>•	Heat Exchangers & Boilers</li><li>•	Construction & Infrastructure</li><li>•	Heavy Engineering</li></ul>
              </div>
            </div>
          
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForgedFittings;