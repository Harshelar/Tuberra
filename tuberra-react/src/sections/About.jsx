import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-20 bg-[#060a16] relative overflow-hidden">
      {/* Abstract structural ring */}
      <div className="absolute top-1/2 -left-40 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[40px] border-white/5 blur-sm z-0 gpu-accel pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Images grid / Visualization */}
        <div className="relative">
          <motion.div 
             initial={{ opacity: 0, x: -40, rotate: -5 }}
             whileInView={{ opacity: 1, x: 0, rotate: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative z-10 glass-panel rounded-2xl overflow-hidden p-2"
          >
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
              alt="Steel Pipes Manufacturing" 
              className="w-full h-auto object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="absolute -bottom-10 -right-10 w-2/3 glass-panel rounded-2xl overflow-hidden p-2 z-20 hidden md:block border border-[#3a8dde]/30"
          >
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" 
              alt="Industrial Pipes" 
              className="w-full h-auto object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-[#3a8dde] mb-3">About Us</div>
            <h2 className="font-bebas text-[clamp(2.5rem,4vw,3.8rem)] tracking-[0.05em] text-white leading-[1.05] mb-6">
              Forging <span className="clip-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#3a8dde] to-[#1456a8]">Excellence</span> in Steel
            </h2>
            <div className="w-[60px] h-[3px] rounded-sm bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mb-8" />
            
            <div className="space-y-5 text-[1.05rem] leading-[1.8] text-silver border-l-2 border-white/10 pl-6 relative">
              <div className="absolute -left-[2px] top-0 h-1/3 w-[2px] bg-gradient-to-b from-[#3a8dde] to-transparent"></div>

              <p>
                <strong className="text-white">Tuberra Steel Company</strong> is a trusted manufacturer, exporter, and supplier of high-quality pipes and fittings. Based in Mumbai, India, we have established ourselves as a reliable master vendor, delivering end-to-end piping solutions to clients across a wide spectrum of industries worldwide.
              </p>
              
              <p>
                Our strength lies in our extensive and versatile product portfolio, which includes materials such as Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloy, Monel, Inconel, Duplex, Super Duplex, Hastelloy, Mild Steel, and Galvanized Iron. We supply a comprehensive range of Pipes, Tubes, Pipe Fittings, Flanges, Forged Fittings, Bars & Shafts, Fasteners, and Branch Connections—ensuring consistent quality, durability, and performance.
              </p>

              <p>
                At Tuberra, we go beyond conventional supply. We position ourselves as a strategic partner, committed to supporting our clients at every stage of their projects. Our emphasis on stringent quality control, precision manufacturing, and efficient logistics enables us to deliver products on time, even for critical and fast-track requirements.
              </p>

              <p>
                Backed by strong technical expertise and a customer-centric approach, we consistently meet the evolving demands of global industries. Our dedication to excellence, reliability, and long-term partnerships has earned us the trust of clients worldwide.
              </p>

              <p className="pt-3 font-semibold text-[#7ec8ff] text-[1.1rem]">
                Driven by integrity, innovation, and performance, Tuberra Steel Company continues to strengthen its presence as a preferred global partner in the piping industry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;