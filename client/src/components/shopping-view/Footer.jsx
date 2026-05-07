import React from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight 
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 border-b border-white/5 pb-20">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase">
              J.Store<span className="text-[#be185d]">.</span>
            </h2>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed font-medium">
              Elevating your lifestyle with curated fashion and artisanal craftsmanship. 
              Join our journey towards sustainable elegance.
            </p>
            
            <div className="flex gap-5 mt-8">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#be185d] hover:border-[#be185d] transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#be185d] mb-4">
              Weekly Digest
            </h3>
            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-sm outline-none focus:border-[#be185d] transition-colors placeholder:text-gray-600 font-bold uppercase tracking-tighter"
              />
              <button className="absolute right-0 bottom-4 hover:text-[#be185d] transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-gray-500">Shop</h4>
            <ul className="space-y-4 text-sm font-bold tracking-tight text-gray-300">
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">New Arrivals</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Best Sellers</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Summer '24 Edit</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-gray-500">Company</h4>
            <ul className="space-y-4 text-sm font-bold tracking-tight text-gray-300">
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Sustainability</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-gray-500">Support</h4>
            <ul className="space-y-4 text-sm font-bold tracking-tight text-gray-300">
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Order Tracking</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Returns & Exchanges</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Size Guide</li>
              <li className="hover:text-[#be185d] cursor-pointer transition-colors">Help Center</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-gray-500">Contact</h4>
            <ul className="space-y-4 text-sm font-bold tracking-tight text-gray-300">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#be185d]" />
                <span className="text-gray-400">DHA Phase 6, Karachi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#be185d]" />
                <span className="text-gray-400">+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#be185d]" />
                <span className="text-gray-400">hello@jstore.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            © {currentYear} J.Store Elite. All Rights Reserved.
          </p>
          <div className="flex gap-8 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {/* Payment Icons Placeholder */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;