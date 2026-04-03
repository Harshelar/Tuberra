import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fasteners = () => {
  return (
    <section className="py-24 px-6 lg:px-20 relative bg-[#060a16] min-h-screen">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#3a8dde] mix-blend-screen filter blur-[200px] opacity-10 rounded-full z-0 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Back Button */}
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
            Fasteners
          </h1>
          <div className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mx-auto shadow-[0_0_10px_rgba(58,141,222,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel rounded-xl overflow-hidden"
          >
            <img 
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/fastener-manufacturer-india.jpg"
              alt="Fasteners"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bebas text-white mb-4">Description</h2>
              <div className="text-silver leading-relaxed">
                <span className="block mt-1">We supply a comprehensive range of industrial fasteners engineered for high strength, durability, and corrosion resistance. Our fasteners are manufactured as per international standards and are suitable for critical applications in high-pressure and high-temperature environments.</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types Of Fasteners</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Bolts (Hex Bolts, Heavy Hex Bolts)</li><li>•	Stud Bolts (Full Thread / Double End)</li><li>•	Nuts (Hex Nuts, Heavy Hex Nuts, Lock Nuts)</li><li>•	Screws (Machine Screws, Self-Tapping Screws)</li><li>•	Washers (Flat, Spring, Plain)</li><li>•	Anchor Bolts</li><li>•	U-Bolts</li><li>•	Eye Bolts</li></ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Standards: ASTM A193, A194, A307, A320, A325, A490, DIN, ISO</li><li>•	Size Range: M6 to M100 / ¼” to 4”</li><li>•	Length: Custom as per requirement</li><li>•	Thread Type: Metric / UNC / UNF / BSW / BSF</li><li>•	Coating: Black, Zinc Plated, Hot Dip Galvanized, PTFE</li></ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Grades & Materials</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>•	Stainless Steel (304, 316, 316L, etc.)</li><li>•	Carbon Steel (A307, A325, A490)</li><li>•	Alloy Steel (A193 B7, B16)</li><li>•	Duplex & Super Duplex</li><li>•	Nickel Alloys (Monel, Inconel, Hastelloy)</li><li>•	Titanium</li></ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Applications</h3>
              <div className="text-silver">
                <span className="block mt-1">Oil & Gas, Refineries, Power Plants, Structural Steel, Construction, Heavy Engineering</span>
              </div>
            </div>
          
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fasteners;