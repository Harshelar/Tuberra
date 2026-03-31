import React from 'react';
import { motion } from 'framer-motion';

const FloatingGlassCard = ({ delay, yOffset, xOffset, title, value, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, yOffset, 0],
    }}
    transition={{ 
      opacity: { duration: 0.8, delay },
      scale: { duration: 0.8, delay },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }
    }}
    className={`absolute ${xOffset} hidden md:block glass-card p-6 rounded-2xl border-t border-l border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-20 w-[200px]`}
  >
    <div className="text-[#3a8dde] text-sm uppercase tracking-widest font-bold mb-1">{title}</div>
    <div className="text-4xl font-bebas text-white mb-1 shadow-black drop-shadow-md">{value}</div>
    <div className="text-xs text-silver leading-relaxed">{subtitle}</div>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[70px] bg-[#030610]">
      {/* Dynamic Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#1456a8] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-glow z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-[#3a8dde] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-glow z-0" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-[#0c2242] rounded-full mix-blend-screen filter blur-[150px] opacity-40 z-0"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(58,141,222,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(58,141,222,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-[gridShift_20s_linear_infinite] z-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_80%)]" />
      
      {/* 3D Model / Image with gradient cut-off */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')] bg-center bg-cover bg-no-repeat opacity-[0.15] mix-blend-luminosity" 
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-center">
        
        {/* Text Content */}
        <div className="pt-20 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex glass-panel px-5 py-2 rounded-full mb-8 items-center gap-3 border-l-[#3a8dde] border-l-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#3a8dde] animate-pulse"></span>
            <span className="text-[0.75rem] tracking-[0.25em] uppercase font-bold text-[#1456a8]">Global Steel Exporter</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-bebas text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-[0.02em] text-[#1456a8] mb-6 drop-shadow-xl"
          >
            Unbreakable <br/>
            <span className="clip-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#3a8dde] via-[#7ec8ff] to-[#3a8dde] animate-[gradientShift_4s_ease-in-out_infinite]">Precision</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-[1.15rem] font-medium leading-[1.8] text-gray-300 max-w-[540px] mb-10 border-l border-white/10 pl-6"
          >
            Engineered for extremes. Tuberra Steel Company commands the supply of premium pipes, tubes, and fitments built for ultimate industrial performance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#products" className="relative group overflow-hidden bg-white/10 backdrop-blur-md text-white px-10 py-4 font-rajdhani text-lg font-bold tracking-[0.1em] uppercase rounded-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_30px_rgba(58,141,222,0.3)] text-center">
              <span className="relative z-10">Explore Catalog</span>
              <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#1456a8] to-[#3a8dde] transition-all duration-300 ease-out group-hover:w-full"></div>
            </a>
            <a href="#contact" className="glass-panel text-silver px-10 py-4 font-rajdhani text-lg font-bold tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:text-white hover:bg-white/10 text-center flex items-center justify-center gap-2">
              Get Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </motion.div>
        </div>

        {/* Visualizations / Floating Stats */}
        <div className="relative h-[600px] hidden lg:block perspective-1000">
          
          {/* Central Holographic ring */}
          <motion.div 
            animate={{ rotateZ: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-[#3a8dde]/30 z-10"
          ></motion.div>
          
          <motion.div 
            animate={{ rotateZ: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dotted border-white/10 z-10"
          ></motion.div>

          <FloatingGlassCard 
            delay={0.8}
            yOffset={-15}
            xOffset="top-[15%] right-[10%]"
            title="Projects"
            value="500+"
            subtitle="Successfully delivered worldwide across 40 counties."
          />

          <FloatingGlassCard 
            delay={1.2}
            yOffset={20}
            xOffset="bottom-[25%] left-[0%]"
            title="Quality Standard"
            value="ISO 9001"
            subtitle="Certified manufacturing & rigorous testing systems."
          />

          <FloatingGlassCard 
            delay={1.6}
            yOffset={-25}
            xOffset="bottom-[10%] right-[20%]"
            title="Legacy"
            value="25 Yrs"
            subtitle="Decades of metallurgical perfection and expertise."
          />

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gridShift {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </section>
  );
};

export default Hero;