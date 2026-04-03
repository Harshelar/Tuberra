import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FerruleFittings = () => {
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
            Ferrule Fittings
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
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/prod/ferrule-fiiting-manufacture-india.jpg"
              alt="Ferrule Fittings"
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
                <span className="block mt-1">We provide precision-engineered ferrule fittings designed for leak-proof and vibration-resistant performance in instrumentation and fluid control systems. These fittings ensure high reliability in critical applications.</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Single Ferrule Fittings</li><li>•	Double Ferrule Fittings</li><li>•	Tube Fittings</li><li>•	Compression Fittings</li><li>•	Needle Valves</li><li>•	Ball Valves</li><li>•	Manifold Valves</li></ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Size Range: 1/16” to 2”</li><li>•	Pressure Rating: Up to 10,000 PSI</li><li>•	Connection Type: Tube / Threaded</li><li>•	Standards: ASTM / ASME</li></ul><span className="block mt-1">4) Grades & Materials</span><span className="text-white font-semibold block mt-3 mb-1">Stainless Steel</span><span className="text-white font-semibold block mt-3 mb-1">SS 304, 304L, 316, 316L, 310, 310S, 321, 321H, 347, 347H, 904L</span><span className="block mt-1">Duplex 2205, 2304, Super Duplex 2507, Zeron 100</span><span className="text-white font-semibold block mt-3 mb-1">254 SMO, AL-6XN</span><span className="block mt-1">17-4 PH, 15-5 PH, 13-8 Mo</span><span className="text-white font-semibold block mt-3 mb-1">Carbon Steel</span><span className="text-white font-semibold block mt-3 mb-1">ASTM A106 Gr A/B/C, ASTM A53 Gr A/B</span><span className="text-white font-semibold block mt-3 mb-1">API 5L Gr B, X42, X52, X60, X65, X70</span><span className="text-white font-semibold block mt-3 mb-1">Alloy Steel (Chrome-Moly)</span><span className="text-white font-semibold block mt-3 mb-1">ASTM A335 P5, P9, P11, P22, P91, P92</span><span className="text-white font-semibold block mt-3 mb-1">ASTM A213 T5, T9, T11, T22, T91</span><span className="text-white font-semibold block mt-3 mb-1">Nickel & Special Alloys</span><span className="text-white font-semibold block mt-3 mb-1">Nickel 200, 201</span><span className="text-white font-semibold block mt-3 mb-1">Monel 400, K500</span><span className="text-white font-semibold block mt-3 mb-1">Inconel 600, 601, 625, 718</span><span className="text-white font-semibold block mt-3 mb-1">Hastelloy C276, C22, B2</span><span className="text-white font-semibold block mt-3 mb-1">Titanium Grade 2, Grade 5</span><span className="text-white font-semibold block mt-3 mb-1">Cupronickel 90/10, 70/30</span><span className="block mt-1">5) Applications</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	Oil & Gas Industry</li><li>•	Petrochemical Plants</li><li>•	Power Generation</li><li>•	Marine & Offshore</li><li>•	Chemical Processing</li><li>•	Heat Exchangers & Boilers</li><li>•	Construction & Infrastructure</li><li>•	Heavy Engineering</li></ul>
              </div>
            </div>
          
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FerruleFittings;