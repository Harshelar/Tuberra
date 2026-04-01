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
              <p className="text-silver leading-relaxed">
                Leading Forged Fittings Manufacturer in India with precision and durability driving manufacturing. Adherence to strict industry standards ensures extensive inventory designed for high-pressure, high-temperature environments with exceptional strength and corrosion resistance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types</h3>
              <p className="text-silver">90° Elbow, 45° Elbow, Tee, Half Coupling, Full Coupling, Swage Nipple, Union, Boss, Reducing Elbow, Cross, Bushing, Hex Nipple, Plug</p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <ul className="text-silver space-y-1">
                <li>• Size: 1/8" to 4" (DN6 to DN100)</li>
                <li>• Standards: ASME B16.11, MSS SP-79, MSS SP-83, MSS SP-95</li>
                <li>• Pressure Rating: 2000#, 3000#, 6000#, 9000#</li>
                <li>• Class: 3000#, 6000#, 9000# (ANSI B 16.11)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Grades & Materials</h3>
              <p className="text-silver">
                Stainless Steel: 304, 304L, 304H, 309S, 310S, 316, 316Ti, 316L, 317, 321, 347, 409, 410, 420, 430, 440, 446, 904L<br/>
                Carbon Steel, Duplex Steel, Alloy Steel<br/>
                Copper Nickel, Monel, Inconel, Hastelloy, Titanium, Brass, Aluminium, SMO 254
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Applications</h3>
              <p className="text-silver">Homes & Buildings, Material Transport, Automotive, Plumbing, Food Processing, Paper & Pulp, Water Treatment, Desalination, Refining</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForgedFittings;