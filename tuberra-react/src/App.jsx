import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Ticker from './components/Ticker';
import About from './sections/About';
import Specs from './sections/Specs';
import Products from './sections/Products';
import Industries from './sections/Industries';
import WhyUs from './sections/WhyUs';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preloader timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return; // Don't init Lenis while loading

    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => lenis.destroy();
    } catch (e) {
      console.error("Lenis error", e);
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[10000]"
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white min-h-screen"
        >
          <Navbar />
          <Hero />
          <Ticker />
          <About />
          <Specs />
          <Products />
          <Industries />
          <WhyUs />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
