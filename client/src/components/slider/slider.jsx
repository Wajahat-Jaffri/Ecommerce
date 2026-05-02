// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSliders } from "../../store/slider-slice";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { ArrowRight } from "lucide-react";

// const responsive = {
//   desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
//   tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
//   mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
// };

// const Slider = () => {
//   const dispatch = useDispatch();
//   const { sliderList, isLoading } = useSelector((state) => state.slider);

//   useEffect(() => {
//     dispatch(fetchSliders());
//   }, [dispatch]);

//   if (isLoading) return <div className="h-[600px] flex items-center justify-center font-bold">LOADING...</div>;
//   if (!sliderList || sliderList.length === 0) return null;

//   return (
//     <div className="bg-white">
//       <Carousel
//         responsive={responsive}
//         infinite autoPlay autoPlaySpeed={5000}
//         showDots={true}
//         dotListClass="custom-dot-list-style flex gap-2 mb-10"
//       >
//         {sliderList.map((slider) => (
//           <div key={slider._id} className="relative h-[500px] md:h-[650px] grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden">
            
//             {/* Left Side: Content */}
//             <div className="flex flex-col justify-center px-10 md:px-24 py-10 order-2 md:order-1">
//               <div className="flex items-center mb-6">
//                 <div className="h-14 w-14 rounded-full bg-pink-50 flex items-center justify-center border border-pink-100 shadow-sm">
//                   <img src={slider.icon} alt="icon" className="h-8 w-8 object-contain" />
//                 </div>
//                 <span className="ml-4 text-[11px] font-black tracking-[0.3em] uppercase text-[#be185d]">
//                   {slider.title}
//                 </span>
//               </div>

//               <h1 className="text-[#2a0a2a] text-4xl md:text-6xl font-black leading-[1.1] mb-8">
//                 {slider.description}
//               </h1>

//               <button className="flex items-center gap-3 bg-[#2a0a2a] text-white hover:bg-[#be185d] px-10 py-4 rounded-full w-fit transition-all uppercase text-[10px] font-bold tracking-widest shadow-xl group">
//                 Explore Now 
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//               </button>
//             </div>

//             {/* Right Side: Image */}
//             <div className="relative h-full w-full order-1 md:order-2">
//               <img
//                 src={slider.image} 
//                 alt={slider.title}
//                 className="h-full w-full object-cover"
//               />
//               {/* Desktop Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block w-40" />
//             </div>

//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Slider;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliders } from "../../store/slider-slice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Truck, Zap, ArrowRight, Sparkles } from "lucide-react";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Slider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sliderList, isLoading } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="h-[450px] flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-[#be185d] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!sliderList || sliderList.length === 0) return null;

  return (
    <section className="mt-6 px-4 md:px-16">
      {/* Dark Background Scheme: Mixing Charcoal and Deep Berry */}
      <div className="relative overflow-hidden rounded-[30px] bg-[#1f2937] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        
        {/* Deep Glow effect in background */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#be185d]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/40 rounded-full blur-[100px] pointer-events-none" />

        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          showDots={true}
          arrows={true}
          className="z-10"
        >
          {sliderList.map((slide, index) => (
            <div
              key={slide._id || index}
              className="grid min-w-full gap-8 px-6 py-10 md:min-h-[500px] md:grid-cols-[1.1fr_0.9fr] md:px-16 md:py-12"
            >
              {/* Left Side: Content (White Text for Contrast) */}
              <div className="flex flex-col justify-center order-2 md:order-1">
                <div className="space-y-6">
                  {/* Eyebrow Label */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#be185d] rounded-lg shadow-lg shadow-pink-900/20">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-pink-200">
                      {slide.title || "Exclusive Collection"}
                    </span>
                  </div>

                  {/* Main Heading: Pure White for visibility on Dark BG */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] uppercase tracking-tighter">
                    {slide.description || "Elevate Your Style With Us"}
                  </h1>

                  {/* Feature Pills: Dark Glassmorphism style */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-300">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#be185d]" /> Premium
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-widest text-gray-300">
                      <Truck className="h-3.5 w-3.5 text-[#be185d]" /> Express
                    </div>
                  </div>

                  {/* Action Button: Bright Berry to grab attention */}
                  <div className="pt-4">
                    <button
                      onClick={() => navigate("/shop/listing")}
                      className="group flex items-center gap-3 bg-[#be185d] hover:bg-white hover:text-[#1f2937] text-white px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-pink-950/20"
                    >
                      Shop Collection
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side: Image with Dark Glow Framing */}
              <div className="relative flex items-center justify-center order-1 md:order-2">
                <div className="relative w-full max-w-[450px]">
                  
                  {/* Subtle Background Glow for the image */}
                  <div className="absolute inset-0 bg-[#be185d]/10 rounded-full blur-3xl" />

                  {/* Image Container with Darker Border */}
                  <div className="overflow-hidden rounded-[40px] border-4 border-white/10 bg-[#111827] shadow-2xl relative z-10">
                    <div className="p-2">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-[250px] w-full rounded-[32px] object-cover md:h-[350px] opacity-90 hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>

                  {/* Floating Badge (Glass Effect) */}
                  <div className="absolute -right-4 top-10 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl hidden md:block">
                    <p className="text-[9px] font-black text-pink-300 uppercase tracking-widest mb-1">Guaranteed</p>
                    <p className="text-xs font-bold text-white">Luxury Quality</p>
                  </div>

                  {/* Icon Badge Bottom */}
                  <div className="absolute -bottom-4 left-10 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#1f2937] px-4 py-2 shadow-lg">
                    {slide.icon ? (
                       <img src={slide.icon} alt="icon" className="h-4 w-4 object-contain invert" />
                    ) : (
                      <Zap className="h-4 w-4 text-[#be185d]" />
                    )}
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      Pure <span className="text-[#be185d]">Luxury</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;