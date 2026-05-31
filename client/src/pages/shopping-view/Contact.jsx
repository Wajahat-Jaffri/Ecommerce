// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Instagram, Facebook, Send, Globe } from "lucide-react";

// function ContactPage() {
//   return (
//     <div className="bg-white text-[#111] min-h-screen selection:bg-[#be185d] selection:text-white">
      
//       <div className="flex flex-col lg:flex-row min-h-screen">
        
//         {/* --- LEFT SIDE: THE STUDIO INFO --- */}
//         <div className="w-full lg:w-5/12 bg-[#0a0a0a] text-white p-12 md:p-24 flex flex-col justify-between relative overflow-hidden">
//           {/* Subtle Pink Aura */}
//           <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#be185d]/10 blur-[150px] rounded-full" />
          
//           <div className="relative z-10">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="flex items-center gap-6 mb-16"
//             >
//               <div className="h-[1px] w-16 bg-[#be185d]" />
//               <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#be185d]">Direct Inquiry</span>
//             </motion.div>

//             <motion.h1 
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.75] mb-20"
//             >
//               GET IN <br /> <span className="italic text-gray-500 font-light">TOUCH.</span>
//             </motion.h1>

//             {/* YOUR DATA STARTS HERE */}
//             <div className="space-y-12 mt-24">
//               <motion.div 
//                 whileHover={{ x: 10 }}
//                 className="group cursor-pointer border-l border-white/10 pl-8 transition-all"
//               >
//                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-3 group-hover:text-[#be185d]">Our Location</p>
//                 <p className="text-xl font-medium tracking-tight leading-relaxed max-w-[280px]">
//                   B-40, Industrial Area, <br /> Karachi, Pakistan.
//                 </p>
//               </motion.div>

//               <motion.div 
//                 whileHover={{ x: 10 }}
//                 className="group cursor-pointer border-l border-white/10 pl-8 transition-all"
//               >
//                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-3 group-hover:text-[#be185d]">General Inquiries</p>
//                 <p className="text-xl font-medium tracking-tight">info@jstore.com</p>
//                 <p className="text-sm text-gray-400 mt-1">+92 312 3456789</p>
//               </motion.div>

//               <motion.div 
//                 whileHover={{ x: 10 }}
//                 className="group cursor-pointer border-l border-white/10 pl-8 transition-all"
//               >
//                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-3 group-hover:text-[#be185d]">Customer Support</p>
//                 <p className="text-xl font-medium tracking-tight">support@jstore.com</p>
//               </motion.div>
//             </div>
//           </div>

//           {/* Social Presence */}
//           <div className="relative z-10 mt-24 pt-10 border-t border-white/5 flex items-center gap-10">
//             <a href="#" className="hover:text-[#be185d] transition-all transform hover:scale-110"><Instagram size={20} /></a>
//             <a href="#" className="hover:text-[#be185d] transition-all transform hover:scale-110"><Facebook size={20} /></a>
//             <a href="#" className="hover:text-[#be185d] transition-all transform hover:scale-110"><Globe size={20} /></a>
//             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-600 ml-auto">Follow the journey</span>
//           </div>
//         </div>

//         {/* --- RIGHT SIDE: THE MINIMALIST FORM --- */}
//         <div className="w-full lg:w-7/12 bg-white p-12 md:p-24 flex items-center justify-center">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="w-full max-w-2xl"
//           >
//             <div className="mb-16">
//               <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">The Concierge Desk</h2>
//               <p className="text-gray-400 text-sm font-medium">Please fill the form below and our team will contact you shortly.</p>
//             </div>
            
//             <form className="space-y-12">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="relative group">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#be185d] transition-colors">Your Name</label>
//                   <input 
//                     type="text" 
//                     placeholder="John Doe" 
//                     className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#be185d] outline-none transition-all font-medium text-base placeholder:text-gray-200"
//                   />
//                 </div>
//                 <div className="relative group">
//                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#be185d] transition-colors">Email Address</label>
//                   <input 
//                     type="email" 
//                     placeholder="john@example.com" 
//                     className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#be185d] outline-none transition-all font-medium text-base placeholder:text-gray-200"
//                   />
//                 </div>
//               </div>

//               <div className="relative group">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#be185d] transition-colors">Reason for Contact</label>
//                 <select className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-[#be185d] outline-none transition-all font-medium text-base appearance-none cursor-pointer">
//                   <option>Order Inquiries</option>
//                   <option>Wholesale/B2B</option>
//                   <option>Press & Media</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div className="relative group">
//                 <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#be185d] transition-colors">Message</label>
//                 <textarea 
//                   rows="4" 
//                   placeholder="How can we assist you today?" 
//                   className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-[#be185d] outline-none transition-all font-medium text-base resize-none placeholder:text-gray-200"
//                 ></textarea>
//               </div>

//               <motion.button 
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.99 }}
//                 className="group relative flex items-center justify-center gap-6 bg-[#111] text-white w-full py-7 rounded-2xl text-[11px] font-black uppercase tracking-[0.5em] overflow-hidden transition-all duration-500 hover:bg-[#be185d]"
//               >
//                 <span className="relative z-10 flex items-center gap-4">
//                     Send Message <Send size={14} />
//                 </span>
//                 <div className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transition-all duration-500"></div>
//               </motion.button>
//             </form>

//             <div className="mt-20 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-gray-300 border-t border-gray-100 pt-10">
//               <span>EST. 2024</span>
//               <span>Available 24/7 Online</span>
//               <span>Karachi, Pakistan</span>
//             </div>
//           </motion.div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ContactPage;

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Instagram, Facebook, Globe, Send } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "Order Inquiries",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/contact", formData);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        reason: "Order Inquiries",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-[#111] min-h-screen selection:bg-[#be185d] selection:text-white">
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-5/12 bg-[#0a0a0a] text-white p-12 md:p-24 flex flex-col justify-between relative overflow-hidden">

          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#be185d]/10 blur-[150px] rounded-full" />

          <div className="relative z-10">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 mb-16"
            >
              <div className="h-[1px] w-16 bg-[#be185d]" />
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#be185d]">
                Direct Inquiry
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.75] mb-20"
            >
              GET IN <br /> <span className="italic text-gray-500 font-light">TOUCH.</span>
            </motion.h1>

            {/* INFO */}
            <div className="space-y-12 mt-24">

              <div className="group cursor-pointer border-l border-white/10 pl-8">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-3">
                  Our Location
                </p>
                <p className="text-xl font-medium">
                  B-40, Industrial Area, <br /> Karachi, Pakistan.
                </p>
              </div>

              <div className="group cursor-pointer border-l border-white/10 pl-8">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-3">
                  General Inquiries
                </p>
                <p className="text-xl font-medium">info@jstore.com</p>
                <p className="text-sm text-gray-400 mt-1">+92 312 3456789</p>
              </div>

              <div className="group cursor-pointer border-l border-white/10 pl-8">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-3">
                  Customer Support
                </p>
                <p className="text-xl font-medium">support@jstore.com</p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="relative z-10 mt-24 pt-10 border-t border-white/5 flex items-center gap-10">
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Globe size={20} /></a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full lg:w-7/12 bg-white p-12 md:p-24 flex items-center justify-center">

          <motion.div className="w-full max-w-2xl">

            <div className="mb-16">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
                The Concierge Desk
              </h2>
              <p className="text-gray-400 text-sm">
                Please fill the form below and our team will contact you shortly.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-12" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                <div>
                  <label className="text-[10px] font-black uppercase text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-gray-200 py-3 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-gray-200 py-3 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Reason for Contact
                </label>

                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-200 py-4 outline-none"
                >
                  <option>Order Inquiries</option>
                  <option>Wholesale/B2B</option>
                  <option>Press & Media</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase text-gray-400">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we assist you today?"
                  className="w-full bg-transparent border-b border-gray-200 py-4 outline-none resize-none"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group relative flex items-center justify-center gap-4 bg-[#111] text-white w-full py-7 rounded-2xl uppercase tracking-[0.5em] hover:bg-[#be185d] transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={14} />
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;