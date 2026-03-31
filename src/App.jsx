import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Fasteners from './pages/Fasteners';
import RoundBar from './pages/RoundBar';
import Flanges from './pages/Flanges';
import Valves from './pages/Valves';
import ButtweldFittings from './pages/ButtweldFittings';
import ForgedFittings from './pages/ForgedFittings';
import Olets from './pages/Olets';
import SheetPlateCoils from './pages/SheetPlateCoils';
import FerruleFittings from './pages/FerruleFittings';
import Spools from './pages/Spools';
import PipesTubes from './pages/PipesTubes';
import Coating from './pages/Coating';

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
    <Router>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/products/fasteners" element={<Fasteners />} />
        <Route path="/products/round-bar" element={<RoundBar />} />
        <Route path="/products/flanges" element={<Flanges />} />
        <Route path="/products/valves" element={<Valves />} />
        <Route path="/products/buttweld-fittings" element={<ButtweldFittings />} />
        <Route path="/products/forged-fittings" element={<ForgedFittings />} />
        <Route path="/products/olets" element={<Olets />} />
        <Route path="/products/sheet-plate-coils" element={<SheetPlateCoils />} />
        <Route path="/products/ferrule-fittings" element={<FerruleFittings />} />
        <Route path="/products/spools" element={<Spools />} />
        <Route path="/products/pipes-tubes" element={<PipesTubes />} />
        <Route path="/products/coating" element={<Coating />} />
      </Routes>
    </Router>
  );
}

export default App;
