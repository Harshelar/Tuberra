import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.2 seconds to match original
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
        >
          {/* Logo Spin Animation */}
          <motion.img
            src="/logo.png" // We will put logo in public folder
            alt="Tuberra Logo"
            className="w-[140px] h-[140px] drop-shadow-[0_0_30px_#1456a8]"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Text Fade In */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-7 font-bebas text-4xl tracking-[0.25em] text-white"
          >
            Tuberra Steel Company
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-5 w-[200px] h-[2px] bg-[#1a2540] overflow-hidden rounded-sm relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-[#1456a8] via-[#3a8dde] to-[#1456a8]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
