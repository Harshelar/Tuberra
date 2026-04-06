import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, Download, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const productsList = [
  { name: "Pipes & Tubes", path: "/pipes-tubes" },
  { name: "Buttweld Fittings", path: "/buttweld-fittings" },
  { name: "Flanges", path: "/flanges" },
  { name: "Forged Fittings", path: "/forged-fittings" },
  { name: "Fasteners", path: "/fasteners" },
  { name: "Olets", path: "/olets" },
  { name: "Valves", path: "/valves" },
  { name: "Round Bar", path: "/round-bar" },
  { name: "Sheet, Plate & Coils", path: "/sheet-plate-coils" },
  { name: "Ferrule Fittings", path: "/ferrule-fittings" },
  { name: "Spools", path: "/spools" },
  { name: "Gaskets", path: "/coating" }
];

const languagesList = [
  { code: 'en', name: 'English' },
  { code: 'it', name: 'Italian' },
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ar', name: 'Arabic' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const filteredProducts = productsList.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Add Google Translate script dynamically
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,it,es,de,id,ar',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        );
      };
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (langCode) => {
    setIsLangDropdownOpen(false);
    
    // Find the hidden Google Translate dropdown and trigger a change event
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    } else {
      // Fallback if widget hasn't loaded yet
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      window.location.reload();
    }
  };

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
                    <Link 
                      key={item.name} 
                      to={item.path} 
                      onClick={() => setIsDropdownHovered(false)}
                      className="block px-4 py-2 text-[0.8rem] tracking-wide text-gray-700 hover:bg-gray-100 hover:text-[#1456a8] transition-colors"
                    >
                      {item.name}
                    </Link>
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
          
          <a
            href="/product-catalogue.pdf"
            download="Tuberra_Product_Catalogue.pdf"
            className="ml-3 flex items-center justify-center gap-2 bg-gradient-to-br from-[#1456a8] to-[#3a8dde] text-white border-none cursor-pointer px-6 py-2 rounded-full font-rajdhani text-[0.8rem] font-bold tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_15px_rgba(58,141,222,0.4)] hover:-translate-y-px no-underline"
          >
            <Download size={14} />
            <span>Download Catalogue</span>
          </a>
        </div>

        {/* Global Action elements (Translate + Mobile Actions) visible everywhere */}
        <div className="flex items-center gap-2 ml-auto lg:ml-0 relative">
          
          {/* Hidden Google widget used for API purposes (Cannot use display:none/hidden or else Google won't render it) */}
          <div id="google_translate_element" className="absolute opacity-0 -z-10 pointer-events-none w-0 h-0 overflow-hidden"></div>
          
          {/* Custom Beautiful Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="bg-transparent border-none cursor-pointer text-gray-700 p-1 transition-colors hover:text-[#1456a8] flex items-center justify-center rounded-full mt-1 outline-none"
            >
              <Globe size={18} />
            </button>
            
            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+10px)] right-0 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl min-w-[140px] py-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)] z-[100]"
                >
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="w-full text-left bg-transparent border-none px-4 py-2 text-[0.85rem] font-semibold tracking-wide text-gray-700 hover:bg-gray-50 hover:text-[#1456a8] transition-colors cursor-pointer outline-none"
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="bg-transparent border-none cursor-pointer text-gray-700 p-1 transition-colors hover:text-[#1456a8] lg:hidden block mt-1"
          >
            <Search size={18} />
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
              className="w-full max-w-[640px] flex flex-col gap-6"
            >
              <div className="border-b-2 border-accent flex items-center gap-4 pb-4">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none font-bebas text-4xl lg:text-5xl tracking-wide text-white placeholder-white/30"
                />
                <button 
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="bg-transparent border-none text-silver cursor-pointer text-2xl hover:text-white transition-colors"
                >
                  <X />
                </button>
              </div>
              
              {searchQuery && (
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 max-h-[300px] overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    <ul className="flex flex-col gap-2 list-none p-0 m-0">
                      {filteredProducts.map((product) => (
                        <li key={product.name}>
                          <Link 
                            to={product.path}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="block text-white hover:text-accent text-lg transition-colors py-2 border-b border-white/5 last:border-0"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-silver text-center py-4">No products found for "{searchQuery}"</p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
