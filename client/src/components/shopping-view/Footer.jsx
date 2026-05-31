

import React from "react";
import { 
  Facebook, Instagram, Twitter, 
  MoveRight, Globe, ShieldCheck 
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-12 px-6 overflow-hidden">
      {/* Background Decorative Element - Abstract Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#be185d]/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-[1400px] mx-auto">
        
        {/* TOP SECTION: Massive Brand Identity & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-7">
            <h2 className="text-7xl md:text-9xl font-black tracking-[-0.05em] uppercase leading-none mb-10">
              J.STORE<span className="text-[#be185d] animate-pulse">.</span>
            </h2>
            <div className="flex flex-wrap gap-8 items-center">
              <p className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed uppercase tracking-widest">
                Defining the intersection of <span className="text-white">Art</span> & <span className="text-white">Apparel</span> since 2024.
              </p>
              <div className="h-[1px] w-24 bg-white/10 hidden md:block" />
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                   <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-[#be185d] hover:text-white transition-all duration-500 border border-white/5">
                     <Icon size={18} />
                   </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-2 italic">Insider Access</h3>
              <p className="text-gray-400 text-xs mb-8 tracking-widest uppercase">Get 15% off your first masterpiece.</p>
              <div className="group relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b-2 border-white/10 py-4 text-lg outline-none focus:border-[#be185d] transition-all placeholder:text-gray-700"
                />
                <button className="absolute right-0 bottom-4 group-hover:translate-x-2 transition-transform duration-300">
                  <MoveRight className="text-[#be185d]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Minimalist Links (Updated based on image_b19168.png) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-24 pt-16 border-t border-white/5">
          {[
            { 
              title: "Category", 
              links: ["Men", "Women", "Kids", "Accessories", "Footwear"] 
            },
            { 
              title: "Brand", 
              links: ["Nike", "Adidas", "Puma", "Levi's", "Zara", "H&M"] 
            },
            { 
              title: "Concierge", 
              links: ["Size Guide", "Shipping Info", "Return Portal", "Gift Cards"] 
            },
            { 
              title: "Legal", 
              links: ["Privacy Policy", "Terms of Use", "Cookie Settings", "Accessibility"] 
            }
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-[#be185d]">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm font-bold text-gray-500 hover:text-white flex items-center group transition-all">
                      <span className="w-0 group-hover:w-4 h-[1px] bg-[#be185d] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: The Signature Finish */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
              <Globe size={12} className="text-[#be185d]" />
              Global Shipping Available
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
              <ShieldCheck size={12} className="text-[#be185d]" />
              Secure Checkout
            </div>
          </div>

          <p className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
            © {currentYear} Designed by <span className="text-white hover:text-[#be185d] cursor-pointer transition-colors">Wajahat Ali Jaffri</span>
          </p>

          <div className="flex gap-10 opacity-40 hover:opacity-100 transition-opacity duration-700 items-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 grayscale invert" alt="Visa" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 grayscale" alt="Mastercard" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 grayscale invert" alt="Paypal" />
          </div>
        </div>
      </div>

      {/* Aesthetic Side Text */}
      <div className="absolute right-[-50px] top-1/2 -rotate-90 hidden xl:block">
        <span className="text-[150px] font-black text-white/[0.02] select-none leading-none">
          EST. 2024
        </span>
      </div>
    </footer>
  );
}

export default Footer;