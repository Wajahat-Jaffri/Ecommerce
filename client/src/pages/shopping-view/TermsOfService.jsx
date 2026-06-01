import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Scale, ShieldAlert, BadgePercent, Ban, Sparkles, ArrowRight } from "lucide-react";

function TermsOfService() {
  // Page change par auto scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clauses = [
    {
      icon: <Scale className="text-[#be185d] w-5 h-5" />,
      title: "01. Acceptance of Terms",
      description: "By creating an account, browsing, or purchasing from J.STORE, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree, access to our premium catalog will be restricted."
    },
    {
      icon: <ShieldAlert className="text-[#be185d] w-5 h-5" />,
      title: "02. Intellectual Property",
      description: "All content available on this platform—including apparel designs, layout, text, photographic assets, logos, and custom graphics—is the exclusive property of J.STORE. Copying, distributing, or replicating any digital asset without written consent is strictly prohibited."
    },
    {
      icon: <BadgePercent className="text-[#be185d] w-5 h-5" />,
      title: "03. Pricing & Modifications",
      description: "We curate high-exclusive luxury pieces. We reserve the right to modify pricing, discontinue limited drops, or adjust availability parameters at any moment without prior liability or notification."
    },
    {
      icon: <Ban className="text-[#be185d] w-5 h-5" />,
      title: "04. Prohibited Conduct",
      description: "Users are strictly forbidden from exploiting the site to reverse-engineer our design framework, injecting malicious scripts, manipulating stock values, or attempting unauthorized database penetrations."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fff] text-[#111] selection:bg-[#be185d] selection:text-white ">
      
      {/* HERO SECTION */}
      <section className="py-24 bg-[#fcfcfc] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <Sparkles className="text-[#be185d] w-4 h-4" />
              <span className="text-[#be185d] font-black text-[11px] uppercase tracking-[0.5em]">Operational Rules</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
              Terms Of <span className="text-gray-300 italic font-light">Service.</span>
            </h1>
            <p className="text-gray-400 font-medium text-sm tracking-widest uppercase max-w-md">
              The Legal Agreement of J.STORE. Updated: June 2026
            </p>
            <div className="h-[2px] w-20 bg-[#be185d]/20 mt-8" />
          </div>
        </div>
      </section>

      {/* CORE CLAUSES SECTION */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT SIDE: Quick Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-6">
            <span className="text-[#be185d] font-black text-[11px] uppercase tracking-[0.6em] block mb-2">Overview</span>
            <h3 className="text-4xl font-black uppercase tracking-tight leading-none">The Essence <br/> of Our Agreement</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              These terms outline the rights and responsibilities when navigating our limited editions, bespoke sales models, and user accounts.
            </p>
            <div className="pt-4">
              <div className="p-6 bg-[#fcfcfc] rounded-2xl border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Need a PDF version?</span>
                <p className="text-xs text-gray-500 mb-4">You can download our clean architectural legal text framework for documentation.</p>
                <button className="text-xs font-black uppercase tracking-widest text-[#be185d] hover:underline flex items-center gap-2">
                  Request Document <ArrowRight size={14}/>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Legal Breakdown */}
          <div className="lg:col-span-8 space-y-16">
            {clauses.map((clause, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group border-b border-gray-100 pb-12 last:border-none"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2.5 bg-[#fcfcfc] rounded-lg group-hover:bg-[#be185d]/10 transition-colors duration-500">
                    {clause.icon}
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight">{clause.title}</h4>
                </div>
                <p className="text-gray-600 font-light leading-relaxed pl-12">
                  {clause.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default TermsOfService;