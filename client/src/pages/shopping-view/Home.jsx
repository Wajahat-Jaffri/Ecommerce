import React from "react";
import Slider from "../../components/slider/slider";
import { 
  Truck, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  ShoppingBag, 
  Star, 
  Heart 
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Shadcn UI Button
import { motion } from "framer-motion";

// --- Feature Card Component (Aesthetic Design) ---
function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-pink-50 transition-all duration-500 group"
    >
      <div className="h-16 w-16 rounded-2xl bg-[#fce7f3] flex items-center justify-center text-[#be185d] mb-6 group-hover:scale-110 group-hover:bg-[#be185d] group-hover:text-white transition-all duration-500">
        <Icon className="w-7 h-7 stroke-[2px]" />
      </div>
      <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-[#1f2937] mb-3">
        {title}
      </h3>
      <p className="text-xs text-[#6b7280] font-medium leading-relaxed max-w-[200px]">
        {desc}
      </p>
    </motion.div>
  );
}

// --- Main Shopping Home Component ---
function ShoppingHome() {
  const categories = [
    { name: "Casual Wear", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400" },
    { name: "Evening Gowns", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=400" },
    { name: "Accessories", img: "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?q=80&w=400" },
    { name: "Footwear", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb]">
      
      {/* 1. HERO SLIDER SECTION */}
      <Slider />

      {/* 2. VALUE PROPOSITIONS (Features) */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Truck} 
              title="Fast Shipping" 
              desc="Free express delivery on all orders over $150."
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Secure Checkout" 
              desc="Your data is protected by industry-leading encryption."
            />
            <FeatureCard 
              icon={Zap} 
              title="Eco Conscious" 
              desc="Sustainable materials for a better tomorrow."
            />
          </div>
        </div>
      </section>

      {/* 3. TRENDING CATEGORIES */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-md">
              <span className="text-[10px] font-black text-[#be185d] tracking-[0.4em] uppercase mb-3 block">
                The Collections
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#1f2937] tracking-tighter leading-none">
                Browse by <span className="text-[#be185d]">Category</span>
              </h2>
            </div>
            <Button variant="ghost" className="text-[11px] font-black uppercase tracking-widest text-[#4a554a] hover:text-[#be185d] group">
              Explore All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={cat.img} 
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-white text-xl font-black tracking-tighter uppercase mb-1">
                    {cat.name}
                  </h3>
                  <div className="w-0 h-1 bg-[#be185d] group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#1f2937] rounded-[3.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#be185d]/20 rounded-full blur-[100px] -mr-40 -mt-40" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-[#be185d] tracking-[0.5em] uppercase mb-4 block">
                Exclusive Access
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 italic font-serif">
                Join the Boutique Club
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
                Receive weekly updates on new arrivals, secret sales, and fashion inspiration directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm outline-none focus:border-[#be185d] focus:ring-1 focus:ring-[#be185d] transition-all"
                />
                <Button className="bg-[#be185d] hover:bg-white hover:text-[#be185d] text-white rounded-2xl px-8 h-full py-4 font-black uppercase tracking-widest text-[10px] shadow-lg transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ShoppingHome;