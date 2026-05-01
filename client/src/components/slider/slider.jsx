// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSliders } from "../../store/slider-slice";

// const Slider = () => {
//   const dispatch = useDispatch();

//   const { sliderList, isLoading } = useSelector(
//     (state) => state.slider
//   );

//   useEffect(() => {
//     dispatch(fetchSliders());
//   }, [dispatch]);

//   if (isLoading) return <h2>Loading...</h2>;

//   return (
//     <div className="w-full p-4">
//       <h1 className="text-2xl font-bold mb-4">Slider</h1>

//       <div className="grid grid-cols-3 gap-4">
//         {sliderList?.map((item) => (
//           <div key={item._id} className="border p-2 rounded">
            
//             {/* 🔥 FIXED IMAGE URL */}
//             <img
//               src={`http://localhost:5000/uploads/${item.image}`}
//               alt={item.title}
//               className="w-full h-40 object-cover"
//             />

//             <h2 className="font-semibold mt-2">
//               {item.title}
//             </h2>

//             <p className="text-sm">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliders } from "../../store/slider-slice";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const { sliderList, isLoading } = useSelector((state) => state.slider);

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  // Auto-slide logic
  useEffect(() => {
    if (sliderList.length > 0) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev === sliderList.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [sliderList]);

  if (isLoading) return (
    <div className="h-[500px] w-full flex items-center justify-center bg-[#f3f4f6]">
      <div className="animate-pulse text-[#be185d] font-bold tracking-widest uppercase">Loading Aesthetic...</div>
    </div>
  );

  if (!sliderList || sliderList.length === 0) return null;

  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-[#f3f4f6]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div className="relative h-full w-full">
            <img
              src={`http://localhost:5000/uploads/${sliderList[current].image}`}
              alt={sliderList[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
          </div>

          {/* Content Wrapper */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-lg"
              >
                <span className="inline-block text-[10px] font-black tracking-[0.4em] uppercase text-[#be185d] mb-4">
                  New Collection
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-[#1f2937] leading-[0.9] tracking-tighter mb-6">
                  {sliderList[current].title}
                </h1>
                <p className="text-[#4a554a] text-sm md:text-base font-medium mb-8 leading-relaxed">
                  {sliderList[current].description}
                </p>
                <Button className="bg-[#1f2937] hover:bg-[#be185d] text-white rounded-full px-8 h-12 text-[11px] font-bold tracking-widest transition-all uppercase group shadow-xl">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {sliderList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              idx === current ? "w-10 bg-[#be185d]" : "w-2 bg-[#be185d]/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;