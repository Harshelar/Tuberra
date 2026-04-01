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
              <p className="text-silver leading-relaxed">
                Dinmani Pipes & Fittings is a leading Fastener Manufacturer in India, committed to delivering top-quality fasteners tailored to meet diverse requirements. Products adhere to highest industry standards for precision, durability, and reliability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types</h3>
              <p className="text-silver">Bolts, Nuts, Screws, Washers, Studs, Hex Bolts, Spring Washers, Half Threaded Bolts, U Clamps, Lock Nuts, Eye Bolts</p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <ul className="text-silver space-y-1">
                <li>• Length: 3mm to 200mm</li>
                <li>• Thread: UNF, BSW, BSF, METRIC, UNC</li>
                <li>• Standards: IS1364, ISO 4014, ISO 4017, DIN 933, DIN 931, BS 1083, ASME B18.2.1, JIS B1180</li>
                <li>• Production: M24-M100 (hot forging), M2-M24 (cold forging), CNC machining</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Grades & Materials</h3>
              <p className="text-silver">
                Stainless Steel: 304, 304L, 304H, 309, 310, 316, 316Ti, 316L, 317, 317L, 321, 347, 904L<br/>
                Carbon Steel: 8.8, 10.9, 12.9<br/>
                Duplex Steel: F51, F53, F55<br/>
                Alloy Steel: F5, F9, F11, F21, F22, F91<br/>
                Copper Nickel, Monel, Inconel, Hastelloy, Titanium, Brass, Aluminium
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Coatings</h3>
              <p className="text-silver">Zinc, Hot Dip Galvanizing, Cadmium, PTFE, Phosphate, Xylon, Dacromet, Nickel-plated, Black Oxide</p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Applications</h3>
              <p className="text-silver">Automotive, Oil & Gas, Pulp & Paper, Construction, Pharmaceuticals, Refining</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fasteners;