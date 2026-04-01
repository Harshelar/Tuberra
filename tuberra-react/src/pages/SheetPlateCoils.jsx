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
              <p className="text-silver leading-relaxed">
                Trusted Sheet, Plate & Coils Manufacturer in India specializing in premium-quality products catering to wide range of industrial applications. Commitment to excellence ensures each product meets stringent quality standards with superior durability and strength.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Types</h3>
              <p className="text-silver">Sheet, Plate, Coils</p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Specifications</h3>
              <ul className="text-silver space-y-1">
                <li>• Thickness: 4mm-100mm</li>
                <li>• Width: 1000mm, 1219mm, 1500mm, 1800mm, 2000mm, 2500mm, 3000mm, 3500mm</li>
                <li>• Length: 2000mm, 2440mm, 3000mm, 5800mm, 6000mm</li>
                <li>• Surface: 2B, 2D, BA, NO.1, NO.4, NO.8, 8K, mirror, checkered, embossed, hair line, sand blast, brush, etching</li>
                <li>• Forms: Coils, Foils, Rolls, Plain Sheet, Shim Sheet, Perforated Sheet, Chequered Plate, Strip, Flats, Blanks, Rings</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Finishes</h3>
              <p className="text-silver">Hot Rolled (HR), Cold Rolled (CR), 2B, 2D, BA, NO(8), SATIN</p>
            </div>

            <div>
              <h3 className="text-xl font-bebas text-[#3a8dde] mb-3">Grades & Materials</h3>
              <p className="text-silver">Brass, Aluminium, SMO 254</p>
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

export default SheetPlateCoils;