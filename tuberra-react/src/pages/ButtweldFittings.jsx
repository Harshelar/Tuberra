import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ButtweldFittings = () => {
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
            Buttweld Fittings
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
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/prod/buttweld-manufacture-india.jpg"
              alt="Buttweld Fittings"
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
                <span className="block mt-1">Our buttweld fittings are designed for seamless integration into piping systems, ensuring smooth flow, reduced pressure loss, and long service life. These fittings are widely used in high-pressure and high-temperature applications.</span>
                <span className="block mt-1">2 )Types of Fittings</span>
                <ul className="text-silver space-y-1 list-none pl-0">
                  <li>Elbows (45°, 90°, 180° – Long Radius / Short Radius)</li>
                  <li>Tees (Equal & Reducing)</li>
                  <li>Reducers (Concentric & Eccentric)</li>
                  <li>Crosses</li>
                  <li>Stub Ends (Long / Short Pattern)</li>
                  <li>Pipe Bends (Hot Induction / Cold Formed)</li>
                  <li>End Caps</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0">
                  <li>Standards: ASTM A234, A403, A420, MSS SP-75</li>
                  <li>Size Range: ½” NB to 48” NB</li>
                  <li>Wall Thickness: SCH 10 to SCH XXS</li>
                  <li>Forming: Seamless / Welded</li>
                  <li>Testing: Hydrostatic, NDT, PMI (on request)</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Grades & Materials</h3>
              <div className="text-silver">
                <span className="text-white font-semibold block mt-4 mb-2">Stainless Steel</span>
                <span className="block mt-1">ASTM A403 WP304 / WP304L</span>
                <span className="block mt-1">ASTM A403 WP316 / WP316L</span>
                <span className="block mt-1">ASTM A403 WP310 / WP310S</span>
                <span className="block mt-1">ASTM A403 WP321 / WP321H</span>
                <span className="block mt-1">ASTM A403 WP347 / WP347H</span>
                <span className="block mt-1">ASTM A403 WP904</span>
                <span className="text-white font-semibold block mt-4 mb-2">Carbon Steel</span>
                <span className="block mt-1">ASTM A106 Gr A/B/C,</span>
                <span className="block mt-1">ASTM A53 Gr A/B</span>
                <span className="block mt-1">ASTM A234 WPB</span>
                <span className="block mt-1">ASTM A234 WPC</span>
                <span className="block mt-1">ASTM A420 WPL6</span>
                <span className="text-white font-semibold block mt-4 mb-2">DUPLEX / SUPER DUPLEX</span>
                <span className="block mt-1">ASTM A815 UNS S31803 / S32205 (Duplex 2205)</span>
                <span className="block mt-1">ASTM A815 UNS S32750 (Super Duplex 2507)</span>
                <span className="block mt-1">ASTM A815 UNS S32760 (Zeron 100)</span>
                <span className="text-white font-semibold block mt-4 mb-2">Alloy Steel (Chrome-Moly)</span>
                <span className="block mt-1">ASTM A335 P5, P9, P11, P22, P91, P92</span>
                <span className="block mt-1">ASTM A213 T5, T9, T11, T22, T91</span>
                <span className="block mt-1">ASTM A234 WP5, WP9,WP11, WP22, WP91</span>
                <span className="text-white font-semibold block mt-4 mb-2">NICKEL & HIGH ALLOYS</span>
                <span className="block mt-1">ASTM B366 (Inconel 600 / 625 / 718)</span>
                <span className="block mt-1">ASTM B366 (Monel 400 / K500)</span>
                <span className="block mt-1">ASTM B366 (Hastelloy C276 / C22 / B2)</span>
                <span className="text-white font-semibold block mt-4 mb-2">TITANIUM</span>
                <span className="block mt-1">ASTM B363 Gr 2</span>
                <span className="block mt-1">ASTM B363 Gr 5</span>
                <span className="text-white font-semibold block mt-4 mb-2">CUPRONICKEL</span>
                <span className="block mt-1">ASTM B466 / B467 (Cu-Ni 90/10, 70/30)</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Applications</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0">
                  <li>Oil & Gas Industry</li>
                  <li>Petrochemical Plants</li>
                  <li>Power Generation</li>
                  <li>Marine & Offshore</li>
                  <li>Chemical Processing</li>
                  <li>Heat Exchangers & Boilers</li>
                  <li>Construction & Infrastructure</li>
                  <li>Heavy Engineering</li>
                </ul>
              </div>
            </div>
          
          
          
          
          
          
          
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ButtweldFittings;