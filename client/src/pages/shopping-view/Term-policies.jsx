import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, HelpCircle, ArrowUpRight, Sparkles } from "lucide-react";

function TermsAndPolicies() {
  // Page load hote hi automatic top par scroll karne ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policySections = [
    {
      id: "terms",
      icon: <Scale className="text-[#be185d] w-6 h-6" />,
      title: "Terms of Service",
      subtitle: "The Rules of Engagement",
      content: [
        "By accessing our platform and placing an order, you agree to comply with our premium service guidelines. All designs, imagery, and content are intellectual property of the brand.",
        "We reserve the right to limit quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice.",
      ],
    },
    {
      id: "privacy",
      icon: <ShieldCheck className="text-[#be185d] w-6 h-6" />,
      title: "Privacy & Data",
      subtitle: "Your Sanctuary of Security",
      content: [
        "Your privacy is our ultimate luxury. We securely encrypt all personal information and payment details. We never trade, sell, or compromise your personal data with third parties.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fff] text-[#111] ">
      {/* HERO SECTION */}
      <section className="py-24 bg-[#fcfcfc] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-[#be185d] w-4 h-4" />
            <span className="text-[#be185d] font-black text-[11px] uppercase tracking-[0.5em]">Legal Framework</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            Terms & <span className="text-gray-300 italic font-light">Policies.</span>
          </h1>
          <div className="h-[2px] w-20 bg-[#be185d]/20 mx-auto" />
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 w-full pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-[#be185d] font-black text-[11px] uppercase tracking-[0.6em] block mb-2">Chapters</span>
            <div className="flex flex-col space-y-3 border-l border-gray-200 pl-4">
              {policySections.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} className="text-xs uppercase font-black tracking-widest text-gray-400 hover:text-[#be185d] transition-all">
                  {sec.title}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {policySections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-4">
                  {section.icon}
                  <h3 className="text-3xl font-black uppercase tracking-tighter">{section.title}</h3>
                </div>
                <div className="space-y-4 pl-10">
                  {section.content.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed font-light">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsAndPolicies;