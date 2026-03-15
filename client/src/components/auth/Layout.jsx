import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* LEFT PANEL - The Brand Experience */}
      <div
        className="hidden lg:flex lg:w-[55%] relative overflow-hidden bg-[#0f172a]"
        style={{
          backgroundImage: `radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), 
                            radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                            url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-75" />

        {/* Brand Identity */}
        <div className="absolute top-12 left-12 z-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="text-white font-black text-xl">J</span>
            </div>
            <p className="text-2xl font-bold text-white tracking-tight">
              J.<span className="text-indigo-400">Store</span>
            </p>
          </div>
        </div>

        {/* Content - FIXED TOP PADDING to prevent movement */}
        <div className="relative z-10 flex flex-col pt-30 px-20 w-full">
          <div className="max-w-md">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] text-indigo-300 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-md">
              New Collection 2026
            </span>
            
            <h1 className="text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              Elevate Your <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                Lifestyle.
              </span>
            </h1>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <p className="text-lg text-slate-300 leading-relaxed font-light">
                Experience the next generation of shopping. Curated premium products 
                delivered with elegance and precision.
              </p>
              
              <div className="mt-4 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-9 w-9 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] text-white font-medium">
                      U{i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-400 italic font-light">Join 10k+ happy shoppers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-12 z-10 text-slate-500 text-[10px] tracking-[0.3em] uppercase font-bold">
          © 2026 J.Store International
        </div>
      </div>

      {/* RIGHT PANEL - The Interactive Area */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center items-center px-8 bg-white relative">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;