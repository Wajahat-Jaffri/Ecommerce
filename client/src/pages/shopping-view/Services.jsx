import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scissors, Truck, ShieldCheck, RefreshCcw, ArrowRight, Play } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Artisanal Tailoring",
    category: "Mastercraft",
    icon: <Scissors className="w-5 h-5" />,
    desc: "Where tradition meets modern engineering. Every stitch is a testament to perfection.",
    color: "#be185d",
    image: "https://images.unsplash.com/photo-1558770147-d2a384e1ad85?q=80&w=1200"
  },
  {
    id: "02",
    title: "Global Concierge",
    category: "Logistics",
    icon: <Truck className="w-5 h-5" />,
    desc: "Beyond delivery. We offer a white-glove experience that respects your time and space.",
    color: "#111",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200"
  },
  {
    id: "03",
    title: "Heritage Care",
    category: "Assurance",
    icon: <ShieldCheck className="w-5 h-5" />,
    desc: "A lifetime commitment. We ensure your pieces age as gracefully as your legacy.",
    color: "#be185d",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200"
  }
];

function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-[#be185d]">
      
      {/* --- 1. CINEMATIC HERO SECTION --- */}
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000" 
            className="w-full h-full object-cover scale-110"
            alt="Hero"
          />
        </motion.div>

        <div className="relative z-20 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.8em" }}
            className="text-[#be185d] text-[10px] md:text-xs font-black uppercase mb-6"
          >
            Luxury Reimagined
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] md:text-[10vw] font-black leading-none tracking-tighter uppercase italic"
          >
            Service <br /> <span className="not-italic font-thin text-white/40">Is Art.</span>
          </motion.h1>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="mt-12 flex justify-center items-center gap-4 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <Play size={16} fill="currentColor" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Watch the Film</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden h-20 w-[1px] bg-white/10">
          <motion.div 
            animate={{ y: [0, 80] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1/2 w-full bg-[#be185d]" 
          />
        </div>
      </section>

      {/* --- 2. THE PREMIUM SERVICES STACK --- */}
      <section className="py-32 px-6 md:px-20 bg-white text-black rounded-t-[50px] relative z-30 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              The <br /> <span className="text-[#be185d]">Ecosystem.</span>
            </h2>
            <p className="max-w-sm text-gray-500 text-sm leading-relaxed font-medium pb-4 border-l-2 border-black/5 pl-6">
              We don't just provide services; we build a sanctuary for those who appreciate the finer details of existence.
            </p>
          </div>

          <div className="space-y-40">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
              >
                {/* Image Side with Hover Effect */}
                <div className="w-full md:w-1/2 group relative overflow-hidden rounded-3xl shadow-2xl">
                   <div className="absolute inset-0 bg-[#be185d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                   <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={service.image} 
                    alt={service.title}
                    className="w-full aspect-[4/5] object-cover"
                   />
                   <div className="absolute bottom-8 left-8 z-20">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {service.category}
                      </span>
                   </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <span className="text-7xl font-thin text-gray-100 mb-4 block italic">{service.id}</span>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                    {service.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                    {service.desc}
                  </p>
                  
                  <button className="flex items-center gap-6 group">
                    <span className="w-14 h-14 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                        <ArrowRight size={20} />
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.4em] border-b border-transparent group-hover:border-black transition-all">
                        Discover Service
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. THE "DARK LUXE" MEMBERSHIP CALL (NOW THE ENDING) --- */}
      <section className="py-40 px-6 bg-[#0a0a0a] flex flex-col items-center justify-center min-h-[90vh] text-center rounded-t-[50px] -mt-12 relative z-40">
        <div className="max-w-4xl">
            <motion.div 
                whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
                className="mb-12 inline-block p-4 border border-white/10 rounded-full"
            >
                <RefreshCcw className="text-[#be185d] w-8 h-8 animate-spin-slow" />
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-10">
                The Circle <span className="text-[#be185d]">Is Open.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light mb-16 tracking-wide max-w-2xl mx-auto">
                Reserved for the elite. Gain priority access to our global ateliers and limited seasonal drops.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="bg-[#be185d] text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500 shadow-lg shadow-[#be185d]/20">
                    Apply Now
                </button>
                <button className="border border-white/20 text-white px-12 py-5 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-white/10 transition-all">
                    View Benefits
                </button>
            </div>
            
            <div className="mt-32 opacity-20 text-[10px] font-bold uppercase tracking-[0.8em]">
                J.Store Private Selection
            </div>
        </div>
      </section>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default ServicesPage;