import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { productsData } from '../data/content';
import { GlowCard } from '../components/ui/spotlight-card';

const Products = () => {
  return (
    <section id="products" className="py-24 px-6 lg:px-20 relative bg-[#060a16]">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#3a8dde] mix-blend-screen filter blur-[200px] opacity-10 rounded-full z-0 pointer-events-none gpu-accel"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6 gap-6"
        >
          <div>
            <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-[#3a8dde] mb-3">Our Product Range</div>
            <h2 className="font-bebas text-[clamp(2.5rem,4vw,3.8rem)] tracking-[0.05em] text-white leading-[1.05] mb-6 md:mb-0 drop-shadow-lg">
              World-Class <span className="clip-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#3a8dde] to-[#1456a8]">Products</span>       
            </h2>
          </div>

          <a
            href="/product-catalogue.pdf"
            download="Tuberra_Product_Catalogue.pdf"
            className="flex items-center gap-3 relative group overflow-hidden bg-white/5 backdrop-blur-md border border-[#3a8dde]/40 text-white px-8 py-3.5 font-rajdhani text-[1rem] font-bold tracking-[0.1em] uppercase rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(58,141,222,0.3)] hover:-translate-y-1 hover:border-[#3a8dde]"
          >
             <span className="relative z-10 flex items-center gap-2">
               <Download size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
               Download Catalogue
             </span>
             <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#1456a8] to-[#3a8dde] transition-all duration-500 ease-out group-hover:w-full z-0"></div>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="h-full"
            >
              <GlowCard customSize={true} className="w-full h-full overflow-hidden relative group !p-0 z-10 glass-panel glass-panel-hover rounded-xl cursor-pointer block hover:border-[#3a8dde]/50 transition-all duration-300">
                <div className="h-[220px] overflow-hidden relative rounded-t-xl">
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[0.7rem] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full z-20 shadow-lg">
                      {product.badge}
                    </span>
                  )}

                  {/* Gradient and glow overlays for images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060a16] via-transparent to-transparent z-10 opacity-90 transition-opacity group-hover:opacity-70" />
                  <div className="absolute inset-0 bg-[#3a8dde]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />   

                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-7 relative z-20">
                  <h3 className="font-bebas text-[1.6rem] tracking-[0.06em] text-white mb-3 group-hover:text-[#3a8dde] transition-colors">{product.title}</h3>    
                  <p className="text-[0.95rem] leading-[1.6] text-silver mb-5">{product.desc}</p>
                  <div className="flex items-center text-[#3a8dde] font-rajdhani text-sm font-bold tracking-[0.1em] uppercase group-hover:text-white transition-colors">
                    View Specifications
                    <motion.div
                       whileHover={{ x: 5 }}
                       transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={16} className="ml-2" />
                    </motion.div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;
