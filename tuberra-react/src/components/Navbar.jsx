import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown } from 'lucide-react';

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
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 h-[75px] transition-all duration-500 bg-[#060a16]/40 backdrop-blur-2xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 no-underline">
          <img src="/logo.png" alt="Tuberra Logo" className="h-11 w-auto object-contain" />
          <div>
            <div className="font-bebas text-2xl tracking-[0.12em] text-white leading-tight">Tuberra</div>
            <div className="text-[0.62rem] tracking-[0.22em] text-accent font-rajdhani font-semibold uppercase">Steel Company</div>
          </div>
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-2">
          
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownHovered(true)}
            onMouseLeave={() => setIsDropdownHovered(false)}
          >
            <a href="#products" className="flex items-center gap-1 relative px-4 py-2 text-silver text-base font-semibold tracking-wide uppercase transition-colors hover:text-white group">
              Products <ChevronDown size={14} />
              <span className="absolute left-4 right-4 bottom-1 h-[1.5px] bg-accent scale-x-0 origin-center transition-transform duration-250 ease-out group-hover:scale-x-100" />
            </a>
            
            <AnimatePresence>
              {isDropdownHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+8px)] left-0 bg-[#0a0f1ef8] border border-[#1456a84c] rounded-md min-w-[240px] py-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                >
                  {productsList.map((item) => (
                    <a 
                      key={item} 
                      href="#products" 
                      className="block px-5 py-2.5 text-sm tracking-wide text-silver hover:bg-[#1456a833] hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#about" className="relative px-4 py-2 text-silver text-base font-semibold tracking-wide uppercase transition-colors hover:text-white group">
            About Us
            <span className="absolute left-4 right-4 bottom-1 h-[1.5px] bg-accent scale-x-0 origin-center transition-transform duration-250 ease-out group-hover:scale-x-100" />
          </a>
          <a href="#contact" className="relative px-4 py-2 text-silver text-base font-semibold tracking-wide uppercase transition-colors hover:text-white group">
            Contact
            <span className="absolute left-4 right-4 bottom-1 h-[1.5px] bg-accent scale-x-0 origin-center transition-transform duration-250 ease-out group-hover:scale-x-100" />
          </a>
          
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="bg-transparent border-none cursor-pointer text-silver p-2 transition-colors hover:text-accent ml-2"
          >
            <Search size={20} />
          </button>
          
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}
            className="ml-2 bg-gradient-to-br from-[#1456a8] to-[#3a8dde] text-white border-none cursor-pointer px-5 py-2.5 rounded-sm font-rajdhani text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
          >
            Get Quote
          </button>
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