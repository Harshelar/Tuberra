import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const productsList = [
  "Pipes & Tubes", "Buttweld Fittings", "Flanges", "Forged Fittings", 
  "Fasteners", "Olets", "Gaskets", "Valves", "Round Bar", 
  "Sheet, Plate & Coils", "Ferrule Fittings", "Spools", "PPR Pipes & Fittings"
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1100px] z-50 flex items-center justify-between px-6 lg:px-8 h-[55px] transition-all duration-500 bg-white/90 backdrop-blur-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-full`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src="/logo.png" alt="Tuberra Logo" className="h-8 w-auto object-contain" />
          <div className="flex flex-col justify-center">
            <div className="font-bebas text-[1.4rem] tracking-[0.15em] text-[#0f172a] leading-none mb-1">TUBERRA</div>
            <div className="text-[0.6rem] tracking-[0.25em] text-[#1456a8] font-rajdhani font-bold uppercase leading-none pl-[0.1em]">STEEL COMPANY</div>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-2">
          
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownHovered(true)}
            onMouseLeave={() => setIsDropdownHovered(false)}
          >
            <a href="#products" className="flex items-center gap-1 relative px-3 py-1 text-gray-700 text-[0.85rem] font-semibold tracking-wide uppercase transition-colors hover:text-[#1456a8] group">
              Products <ChevronDown size={14} />
              <span className="absolute left-3 right-3 bottom-0 h-[1.5px] bg-[#1456a8] scale-x-0 origin-center transition-transform duration-250 ease-out group-hover:scale-x-100" />
            </a>
            
            <AnimatePresence>
              {isDropdownHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+4px)] left-0 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-md min-w-[200px] py-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                >
                  {productsList.map((item) => (
                    <a 
                      key={item} 
                      href="#products" 
                      className="block px-4 py-2 text-[0.8rem] tracking-wide text-gray-700 hover:bg-gray-100 hover:text-[#1456a8] transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#about" className="relative px-3 py-1 text-gray-700 text-[0.85rem] font-semibold tracking-wide uppercase transition-colors hover:text-[#1456a8] group">
            About Us
            <span className="absolute left-3 right-3 bottom-0 h-[1.5px] bg-[#1456a8] scale-x-0 origin-center transition-transform duration-250 ease-out group-hover:scale-x-100" />
          </a>
          <a href="#contact" className="relative px-3 py-1 text-gray-700 text-[0.85rem] font-semibold tracking-wide uppercase transition-colors hover:text-[#1456a8] group">
            Contact
            <span className="absolute left-3 right-3 bottom-0 h-[1.5px] bg-[#1456a8] scale-x-0 origin-center transition-transform duration-250 ease-out group-hover:scale-x-100" />
          </a>
          
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="bg-transparent border-none cursor-pointer text-gray-700 p-1 transition-colors hover:text-[#1456a8] ml-2"
          >
            <Search size={18} />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}
            className="ml-2 bg-gradient-to-br from-[#1456a8] to-[#3a8dde] text-white border-none cursor-pointer px-4 py-2 rounded-full font-rajdhani text-[0.8rem] font-bold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_15px_rgba(58,141,222,0.4)] hover:-translate-y-px"
          >
            Get Quote
          </button>

          <a
            href="/product-catalogue.pdf"
            download="Tuberra_Product_Catalogue.pdf"
            className="ml-2 flex items-center justify-center gap-2 bg-gradient-to-br from-[#1456a8] to-[#3a8dde] text-white border-none cursor-pointer px-4 py-2 rounded-full font-rajdhani text-[0.8rem] font-bold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_15px_rgba(58,141,222,0.4)] hover:-translate-y-px no-underline"
          >
            <Download size={14} />
            <span>Catalogue</span>
          </a>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#040810f2] z-[2000] flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-[640px] border-b-2 border-accent flex items-center gap-4 pb-4"
            >
              <input 
                type="text" 
                placeholder="Search products..." 
                autoFocus
                className="flex-1 bg-transparent border-none outline-none font-bebas text-4xl lg:text-5xl tracking-wide text-white placeholder-white/30"
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="bg-transparent border-none text-silver cursor-pointer text-2xl hover:text-white transition-colors"
              >
                <X />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;