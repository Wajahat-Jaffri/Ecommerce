import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-[#ffffff] text-[#111] overflow-x-hidden min-h-screen">
      
      {/* --- 1. THE HERO (Editorial Layout - Text Aligned Under Image) --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Large Heading */}
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[11px] font-black uppercase tracking-[0.5em] text-[#be185d] mb-4 block"
            >
              The Essence of J.Store
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[13vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter"
            >
              MORE <br /> <span className="text-white bg-[#111] px-4">THAN</span> <br /> FABRIC.
            </motion.h1>
          </div>

          {/* Right Side: Image + Text Aligned Under It */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-start">
            <motion.div 
              style={{ y: y1 }}
              className="w-full aspect-[3/4] overflow-hidden rounded-[2rem] shadow-2xl z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" 
                alt="Fashion 1" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000" 
              />
            </motion.div>
            
            {/* Aligned Text Under Image */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="border-l-2 border-[#be185d] pl-6 max-w-[320px]"
            >
              <p className="text-[10px] md:text-xs font-bold leading-relaxed text-gray-400 uppercase tracking-widest">
                A curated rebellion against the ordinary. We don't just dress you; we define the aura you carry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. THE VISION (Overlapping Grid) --- */}
      <section className="py-40 px-6 md:px-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div 
                style={{ y: y2 }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" alt="Vision" />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#be185d]/5 rounded-full blur-3xl" />
            </div>

            <div className="space-y-12">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                THE <br /> ARCHIVE.
              </h2>
              <div className="space-y-8">
                {[
                  { id: "01", title: "CRAFT", desc: "Every stitch is a silent promise of luxury." },
                  { id: "02", title: "SOUL", desc: "Garments that hold the energy of the streets." },
                  { id: "03", title: "ICON", desc: "Designed for those who refuse to blend in." },
                ].map((item) => (
                  <div key={item.id} className="group border-b border-gray-200 pb-6 overflow-hidden">
                    <div className="flex items-center justify-between group-hover:px-4 transition-all duration-500">
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] font-black text-[#be185d]">{item.id}</span>
                        <h4 className="text-2xl font-black uppercase tracking-tighter">{item.title}</h4>
                      </div>
                      <ArrowUpRight className="group-hover:rotate-45 transition-transform text-[#be185d]" />
                    </div>
                    <p className="mt-4 text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:text-black transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE STATS (Big & Bold) --- */}
      <section className="py-40 flex flex-col items-center justify-center">
        <h3 className="text-[10px] font-black uppercase tracking-[1em] text-gray-300 mb-20">Global Resonance</h3>
        <div className="flex flex-wrap justify-center gap-10 md:gap-32 text-center">
          {[
            { label: "Stores", val: "12" },
            { label: "Community", val: "85K" },
            { label: "Drops", val: "400+" },
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <motion.h4 
                whileHover={{ scale: 1.1, color: "#be185d" }}
                className="text-8xl md:text-[10rem] font-black tracking-[ -0.1em] transition-all"
              >
                {stat.val}
              </motion.h4>
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 4. CALL TO ACTION (Fashion Film Look) --- */}
      <section className="px-6 pb-40">
        <div className="max-w-7xl mx-auto h-[600px] relative rounded-[4rem] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
            alt="Final CTA"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
            <Sparkles className="mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
              READY TO BE <br /> AN ICON?
            </h2>
            <Button className="bg-white text-black hover:bg-[#be185d] hover:text-white rounded-none px-12 py-8 h-auto font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500">
              Enter The Boutique <MoveRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Removed - Clean Finish */}
    </div>
  );
}

export default AboutPage;