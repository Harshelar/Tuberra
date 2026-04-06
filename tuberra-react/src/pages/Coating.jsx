import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Coating = () => {
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
            Gaskets
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
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/prod/coating-manufacture-india.jpg"
              alt="Coating"
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
                <span className="block mt-1">We supply high-performance gaskets designed to provide leak-proof sealing between flanged joints under varying pressure and temperature conditions. Our gaskets ensure reliability and long service life.</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types Of Gaskets</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0">
                  <li>Spiral Wound Gaskets</li>
                  <li>Ring Type Joint (RTJ) Gaskets</li>
                  <li>Soft Gaskets (Non-Metallic)</li>
                  <li>Metal Jacketed Gaskets</li>
                  <li>CAF / CNAF Gaskets</li>
                  <li>PTFE Gaskets</li>
                  <li>Graphite Gaskets</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0">
                  <li>Standards: ASME B16.20, B16.21, API</li>
                  <li>Size Range: ½” to 60”</li>
                  <li>Class: 150# to 2500#</li>
                  <li>Filler Materials: Graphite, PTFE, Ceramic</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Materials</h3>
              <div className="text-silver">
                <span className="text-white font-semibold block mt-4 mb-2">Stainless Steel</span>
                <span className="text-white font-semibold block mt-4 mb-2">Carbon Steel</span>
                <span className="text-white font-semibold block mt-4 mb-2">Alloy Steel</span>
                <ul className="text-silver space-y-1 list-none pl-0">
                  <li>PTFE / Graphite / Rubber</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Applications</h3>
              <div className="text-silver">
                <span className="block mt-1">Flanged joints in Oil & Gas, Refineries, Chemical Plants, Power Generation</span>
              </div>
            </div>
          
          
          
          
          
          
          
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Coating;