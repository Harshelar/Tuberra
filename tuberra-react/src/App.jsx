import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
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
  useEffect(() => {
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
  }, []);

  return (
    <div className="bg-white min-h-screen">
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
    </div>
  );
}

export default App;
