import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SheetPlateCoils = () => {
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
            Sheet, Plate & Coils
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
              src="https://dinmanipipefittings.com/images/dinmanipipefittings/product/prod/sheet-plate-manufacture-india.jpg"
              alt="Sheet, Plate & Coils"
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
                <span className="block mt-1">We supply a comprehensive range of high-quality sheets, coils, and plates manufactured to international standards. Our materials offer excellent strength, corrosion resistance, and dimensional accuracy, making them suitable for fabrication, structural, and high-performance industrial applications.</span>
                <span className="block mt-1">Available in multiple finishes, thicknesses, and grades, our products cater to both standard and specialized requirements.</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0">
                  <li>Sheets</li>
                  <li>Plates</li>
                  <li>Coils</li>
                  <li>Chequered Plates</li>
                  <li>Perforated Sheets</li>
                  <li>Shim Sheets</li>
                  <li>Hot Rolled (HR)</li>
                  <li>Cold Rolled (CR)</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <div className="text-silver">
                <ul className="text-silver space-y-1 list-none pl-0">
                  <li>Standards: ASTM / ASME / EN / DIN / IS</li>
                  <li>Thickness Range: 0.3 mm to 100 mm+</li>
                  <li>Width: Up to 2500 mm</li>
                  <li>Length: Standard / Cut-to-size</li>
                  <li>Finish (SS): 2B, BA, No.1, No.4, Mirror Finish</li>
                  <li>Edge: Mill Edge / Slit Edge</li>
                  <li>Processing: Cutting, Slitting, Bending, Polishing</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Grades & Materials</h3>
              <div className="text-silver">
                <span className="text-white font-semibold block mt-4 mb-2">Stainless Steel (ASTM A240)</span>
                <span className="block mt-1">SS 304, 304L</span>
                <span className="block mt-1">SS 316, 316L</span>
                <span className="block mt-1">SS 310, 310S</span>
                <span className="block mt-1">SS 321, 321H</span>
                <span className="block mt-1">SS 347, 347H</span>
                <span className="block mt-1">SS 904L</span>
                <span className="block mt-1">Duplex 2205, 2304</span>
                <span className="block mt-1">Super Duplex 2507, Zeron 100</span>
                <span className="block mt-1">254 SMO, AL-6XN</span>
                <span className="text-white font-semibold block mt-4 mb-2">Carbon Steel (ASTM A36 / A516 / A283)</span>
                <span className="block mt-1">ASTM A36</span>
                <span className="block mt-1">ASTM A283 Gr C</span>
                <span className="block mt-1">ASTM A516 Gr 60 / 65 / 70</span>
                <span className="block mt-1">ASTM A572 Gr 50</span>
                <span className="block mt-1">IS 2062 E250 / E350</span>
                <span className="text-white font-semibold block mt-4 mb-2">Alloy Steel (ASTM A387)</span>
                <span className="block mt-1">ASTM A387 Gr 5</span>
                <span className="block mt-1">ASTM A387 Gr 9</span>
                <span className="block mt-1">ASTM A387 Gr 11</span>
                <span className="block mt-1">ASTM A387 Gr 22</span>
                <span className="block mt-1">ASTM A387 Gr 91</span>
                <span className="text-white font-semibold block mt-4 mb-2">Duplex / Super Duplex (ASTM A240)</span>
                <span className="block mt-1">UNS S31803 / S32205 (Duplex 2205)</span>
                <span className="block mt-1">UNS S32750 (Super Duplex 2507)</span>
                <span className="block mt-1">UNS S32760 (Zeron 100)</span>
                <span className="text-white font-semibold block mt-4 mb-2">Nickel & Special Alloys (ASTM B168 / B443 / B575)</span>
                <span className="text-white font-semibold block mt-4 mb-2">Nickel 200 / 201</span>
                <span className="block mt-1">Monel 400 / K500</span>
                <span className="block mt-1">Inconel 600 / 601 / 625 / 718</span>
                <span className="block mt-1">Hastelloy C276 / C22 / B2</span>
                <span className="block mt-1">Titanium (ASTM B265) Grade 2, Grade 5</span>
                <span className="text-white font-semibold block mt-4 mb-2">Cupronickel (ASTM B171)</span>
                <span className="block mt-1">Cu-Ni 90/10</span>
                <span className="block mt-1">Cu-Ni 70/30</span>
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

export default SheetPlateCoils;