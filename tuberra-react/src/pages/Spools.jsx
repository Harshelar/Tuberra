import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Spools = () => {
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
            Spools
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
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/prod/spool-manufacture-india.jpg"
              alt="Spools"
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
              <p className="text-silver leading-relaxed">
                Leading Spools Manufacturer in India committed to delivering top-quality spools tailored to meet diverse requirements. Focus on precision, durability, and reliability designed for oil & gas, petrochemical, power plants, and industrial piping systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types</h3>
              <p className="text-silver">Pipe Spools, Piping Spools, Prefabricated Spools, Custom Spools, Flanged Spools</p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <ul className="text-silver space-y-1">
                <li>• Spool Length: Up to 12 meters (custom sizes available)</li>
                <li>• Surface Coating: Galvanized, Epoxy Coated, PTFE Coated, Painted, Powder Coated</li>
                <li>• Connection Type: Butt Weld, Flanged, Threaded, Socket Weld</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Grades & Materials</h3>
              <p className="text-silver">
                Stainless Steel: 304, 304L, 304H, 309, 310, 316, 316Ti, 316H, 316L, 317, 317L, 321, 347, 904L<br/>
                Duplex Steel: F51, F53, F55<br/>
                Alloy Steel, Copper Nickel, Monel, Inconel, Hastelloy, Titanium, Brass, Aluminium, SMO 254
              </p>
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

export default Spools;