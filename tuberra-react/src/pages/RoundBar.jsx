import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoundBar = () => {
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
            Round Bar
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
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/round-bar-manufacturer-india.jpg"
              alt="Round Bar"
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
                <span className="block mt-1">We supply a wide range of high-quality round bars manufactured to international standards, offering excellent strength, durability, corrosion resistance, and machinability. Our round bars are suitable for critical engineering, structural, and industrial applications across multiple sectors.</span><span className="block mt-1">Available in a variety of materials and finishes, our bars ensure consistent performance in demanding environments.</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0"><li>* Bright Bars</li><li>* Black Bars</li><li>* Forged Bars</li><li>* Rolled Bars</li><li>* Peeled Bar</li><li>* Polished Bars</li><li>* Ground Bars</li></ul><span className="block mt-1">3) Specifications</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	Standards: ASTM, ASME, EN, DIN, IS</li><li>•	Diameter Range: 5mm to 500mm</li><li>•	Length: 3m / 6m / Custom Cut Length</li><li>•	Form: Round</li><li>•	Finish: Black / Bright / Polished / Rough Turned / Peeled</li><li>•	Tolerance: H8 / H9 / As per requirement</li><li>•	Heat Treatment: Annealed / Normalized / Quenched & Tempere</li></ul><span className="block mt-1">4) Grades & Materials</span><span className="text-white font-semibold block mt-3 mb-1">Stainless Steel (ASTM A276 / A479)</span><span className="text-white font-semibold block mt-3 mb-1">SS 304, 304L</span><span className="text-white font-semibold block mt-3 mb-1">SS 316, 316L</span><span className="text-white font-semibold block mt-3 mb-1">SS 310, 310S</span><span className="text-white font-semibold block mt-3 mb-1">SS 321, 321H</span><span className="text-white font-semibold block mt-3 mb-1">SS 347, 347H</span><span className="text-white font-semibold block mt-3 mb-1">SS 904L</span><span className="block mt-1">17-4 PH, 15-5 PH, 13-8 Mo</span><span className="text-white font-semibold block mt-3 mb-1">Carbon Steel (ASTM A36 / A105 / A108)</span><span className="text-white font-semibold block mt-3 mb-1">ASTM A36</span><span className="text-white font-semibold block mt-3 mb-1">EN8 / C45</span><span className="text-white font-semibold block mt-3 mb-1">SAE 1018 / 1020 / 1045</span><span className="text-white font-semibold block mt-3 mb-1">Alloy Steel (Chrome-Moly)</span><span className="text-white font-semibold block mt-3 mb-1">(ASTM A182 / A29)</span><span className="text-white font-semibold block mt-3 mb-1">EN19</span><span className="text-white font-semibold block mt-3 mb-1">EN24</span><span className="text-white font-semibold block mt-3 mb-1">EN41</span><span className="text-white font-semibold block mt-3 mb-1">EN353</span><span className="text-white font-semibold block mt-3 mb-1">AISI 4130</span><span className="text-white font-semibold block mt-3 mb-1">AISI 4140</span><span className="text-white font-semibold block mt-3 mb-1">AISI 4340</span><span className="text-white font-semibold block mt-3 mb-1">Duplex & Super Duplex (ASTM A276)</span><span className="text-white font-semibold block mt-3 mb-1">Duplex 2205 (S31803 / S32205)</span><span className="text-white font-semibold block mt-3 mb-1">Super Duplex 2507 (S32750)</span><span className="text-white font-semibold block mt-3 mb-1">Nickel & Special Alloys</span><span className="text-white font-semibold block mt-3 mb-1">(ASTM B160 / B164 / B574)</span><span className="text-white font-semibold block mt-3 mb-1">Nickel 200, 201</span><span className="text-white font-semibold block mt-3 mb-1">Monel 400, K500</span><span className="text-white font-semibold block mt-3 mb-1">Inconel 600, 601, 625, 718</span><span className="text-white font-semibold block mt-3 mb-1">Hastelloy C276, C22, B2</span><span className="text-white font-semibold block mt-3 mb-1">Titanium (ASTM B348)  Grade 2, Grade 5</span><span className="text-white font-semibold block mt-3 mb-1">Cupronickel  (ASTM B151 )</span><span className="block mt-1">90/10, 70/30</span><span className="block mt-1">5) Applications</span><ul className="text-silver space-y-1 list-none pl-0"><li>•	Oil & Gas Industry</li><li>•	Petrochemical Plants</li><li>•	Power Generation</li><li>•	Marine & Offshore</li><li>•	Chemical Processing</li><li>•	Heat Exchangers & Boilers</li><li>•	Construction & Infrastructure</li><li>•	Heavy Engineering</li></ul>
              </div>
            </div>
          
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoundBar;