import React from "react";
import { RefreshCw, Truck, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";

function RefundPolicy() {
  const currentYear = new Date().getFullYear();

  const steps = [
    {
      icon: <RefreshCw className="text-[#be185d]" size={24} />,
      title: "1. 30-Day Return Window",
      content: "We offer a 30-day return policy, which means you have 30 days after receiving your premium apparel to request a return or exchange."
    },
    {
      icon: <CheckCircle className="text-[#be185d]" size={24} />,
      title: "2. Item Condition",
      content: "To be eligible for a return, your item must be in the same condition that you received it: unworn, unused, with tags attached, and in its original packaging."
    },
    {
      icon: <Truck className="text-[#be185d]" size={24} />,
      title: "3. Inspection & Processing",
      content: "Once we receive and inspect your returned item, we will notify you via email. If approved, your refund will be automatically processed to your original payment method within 5-7 business days."
    },
    {
      icon: <AlertCircle className="text-[#be185d]" size={24} />,
      title: "4. Non-Returnable Items",
      content: "Certain items cannot be returned, such as custom products (special orders or personalized items), gift cards, and final sale items."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Subtle Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#be185d]/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold tracking-widest uppercase text-gray-600 mb-6">
            <RefreshCw size={14} className="text-[#be185d]" /> Customer Concierge
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-4 text-gray-900">
            Refund <span className="text-[#be185d]">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm tracking-wider uppercase">
            Last Updated: June {currentYear}
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="bg-gray-50 border-l-4 border-[#be185d] p-6 rounded-r-2xl mb-12 shadow-sm">
          <p className="text-gray-600 text-sm leading-relaxed italic">
            At J.STORE, we stand behind the artistry and quality of our apparel. If your purchase doesn't completely satisfy you, our seamless return process is here to help.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="space-y-8 mb-16">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-gray-200 hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-[#be185d]/10 transition-colors">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Contact */}
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-3xl text-center shadow-sm">
          <HelpCircle className="text-[#be185d] mx-auto mb-4" size={36} />
          <h4 className="text-lg font-bold mb-2 text-gray-900">Need Help with a Return?</h4>
          <p className="text-gray-600 text-xs max-w-md mx-auto leading-relaxed uppercase tracking-wider">
            Initiate a return directly through our portal or reach out to our support team at <span className="text-gray-900 font-bold underline cursor-pointer hover:text-[#be185d]">returns@jstore.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;