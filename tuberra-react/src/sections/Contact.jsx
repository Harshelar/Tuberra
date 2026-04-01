import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', product: '', message: ''
  });
  const [status, setStatus] = useState(''); // For success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mdapzzbw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          product: formData.product,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('Thank you! We will get back to you shortly.');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', product: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form send failed:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-20 bg-[#060a16cc]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-start">
        
        {/* Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
        >
          <div className="text-[0.75rem] tracking-[0.3em] uppercase font-bold text-accent mb-3">Get In Touch</div>
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,3.8rem)] tracking-[0.05em] text-white leading-[1.05] mb-6">
            Request a <span className="text-accent">Quote</span>
          </h2>
          <div className="w-[60px] h-[3px] rounded-sm bg-gradient-to-r from-[#1456a8] to-[#3a8dde] mb-6" />
          
          <p className="text-base leading-[1.8] text-silver mb-8">
            Contact our team for product enquiries, pricing, and technical specifications. We supply to clients across India and over 40 countries worldwide.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: <MapPin />, title: "Office Address", detail: "201, Somji Building, Shop No. 5, S.V.P. Road, Near Gol Deval Temple, Mumbai - 400 004. Maharashtra, India." },
              { icon: <Phone />, title: "Phone", detail: "+91 99678 78897" },
              { icon: <Mail />, title: "Email", detail: "tuberra@tuberrasteel.com" },
              { icon: <Clock />, title: "Business Hours", detail: "Mon – Sat: 9:00 AM – 6:30 PM IST" }
            ].map((info, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 bg-[#1456a833] border border-[#1456a84c] rounded-md flex items-center justify-center text-accent">
                  {info.icon}
                </div>
                <div>
                  <strong className="block text-white text-base font-bold mb-1">{info.title}</strong>
                  <span className="text-[0.9rem] text-silver leading-relaxed">{info.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7, delay: 0.2 }}
           className="bg-[#10182cb2] border border-[#1456a833] rounded-lg p-8 lg:p-10"
        >
          <div className="text-[0.85rem] tracking-[0.2em] uppercase font-bold text-white mb-6">Send Enquiry</div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-bold tracking-[0.08em] uppercase text-silver">First Name</label>
                <input required type="text" placeholder="Jon" className="w-full p-3.5 bg-[#0a0f1ecc] border border-[#1456a840] rounded-md text-white font-rajdhani text-base outline-none transition-all focus:border-accent focus:ring-2 focus:ring-[#1456a826]" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] font-bold tracking-[0.08em] uppercase text-silver">Last Name</label>
                <input required type="text" placeholder="Snow" className="w-full p-3.5 bg-[#0a0f1ecc] border border-[#1456a840] rounded-md text-white font-rajdhani text-base outline-none transition-all focus:border-accent focus:ring-2 focus:ring-[#1456a826]" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.85rem] font-bold tracking-[0.08em] uppercase text-silver">Email Address</label>
              <input required type="email" placeholder="jonsnow@company.com" className="w-full p-3.5 bg-[#0a0f1ecc] border border-[#1456a840] rounded-md text-white font-rajdhani text-base outline-none transition-all focus:border-accent focus:ring-2 focus:ring-[#1456a826]" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.85rem] font-bold tracking-[0.08em] uppercase text-silver">Phone Number</label>
              <input required type="tel" placeholder="+91 00000 00000" className="w-full p-3.5 bg-[#0a0f1ecc] border border-[#1456a840] rounded-md text-white font-rajdhani text-base outline-none transition-all focus:border-accent focus:ring-2 focus:ring-[#1456a826]" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.85rem] font-bold tracking-[0.08em] uppercase text-silver">Product of Interest</label>
              <select 
                className="w-full p-3.5 bg-[#0a0f1ecc] border border-[#1456a840] rounded-md text-white font-rajdhani text-base outline-none transition-all focus:border-accent focus:ring-2 focus:ring-[#1456a826] cursor-pointer"
                value={formData.product}
                onChange={e => setFormData({...formData, product: e.target.value})}
              >
                <option value="" className="bg-[#0d1529] text-white">Select a product...</option>
                <option value="Pipes & Tubes" className="bg-[#0d1529] text-white">Pipes & Tubes</option>
                <option value="Buttweld Fittings" className="bg-[#0d1529] text-white">Buttweld Fittings</option>
                <option value="Flanges" className="bg-[#0d1529] text-white">Flanges</option>
                <option value="Forged Fittings" className="bg-[#0d1529] text-white">Forged Fittings</option>
                <option value="Fasteners" className="bg-[#0d1529] text-white">Fasteners</option>
                <option value="Olets" className="bg-[#0d1529] text-white">Olets</option>
                <option value="Other" className="bg-[#0d1529] text-white">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.85rem] font-bold tracking-[0.08em] uppercase text-silver">Message / Requirements</label>
              <textarea 
                required
                placeholder="Please describe your requirements, grades, sizes and quantities..." 
                className="w-full p-3.5 bg-[#0a0f1ecc] border border-[#1456a840] rounded-md text-white font-rajdhani text-base outline-none transition-all focus:border-accent focus:ring-2 focus:ring-[#1456a826] min-h-[110px] resize-y"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="w-full mt-2 bg-gradient-to-br from-[#1456a8] to-[#3a8dde] text-white px-9 py-4 border-none cursor-pointer font-rajdhani text-base font-bold tracking-[0.1em] uppercase rounded-sm transition-all duration-250 hover:opacity-90 hover:-translate-y-1">
              Submit Enquiry →
            </button>
          </form>

          {status && (
            <div className={`mt-4 p-3 rounded-md text-center font-rajdhani text-base ${status.includes('Thank you') ? 'bg-green-600 text-white' : status === 'Sending...' ? 'bg-blue-600 text-white' : 'bg-red-600 text-white'}`}>
              {status}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;