import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#040810] border-t border-[#1456a833] pt-16 px-6 lg:px-20 pb-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] gap-10 lg:gap-16 mb-12">
          
          <div className="flex flex-col">
            <div className="font-bebas text-[2rem] tracking-[0.1em] text-white">Tuberra</div>
            <div className="text-[0.65rem] tracking-[0.2em] text-accent font-semibold uppercase leading-none mt-1">Steel Company</div>
            <p className="text-[0.9rem] leading-[1.8] text-silver mt-4 max-w-[400px]">
              A leading manufacturer and exporter of high-quality pipes, tubes and fittings. Supplying precision steel products to industries worldwide from Mumbai, India.
            </p>
          </div>

          <div>
            <h4 className="text-[0.8rem] tracking-[0.2em] uppercase font-bold text-accent mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-[0.9rem] text-silver hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-[0.9rem] text-silver hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-[0.9rem] text-silver hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="text-[0.9rem] text-silver hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-[0.8rem] tracking-[0.2em] uppercase font-bold text-accent mb-4">Chat on WhatsApp</h4>
            <div className="flex flex-col items-center gap-4">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <img src="/qr-code (1).png" alt="WhatsApp Business QR Code" className="w-[120px] h-[120px] rounded object-cover border border-[#1456a833]" />
              </a>
              <p className="text-[0.8rem] text-silver max-w-[200px]">
                Scan to chat with us directly on our official WhatsApp business account.
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-[#1456a81f] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.82rem] text-silver/50">
          <span>© {new Date().getFullYear()} Tuberra Steel Company. All Rights Reserved.</span>
          <span>Mumbai, Maharashtra, India – ISO Certified</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;