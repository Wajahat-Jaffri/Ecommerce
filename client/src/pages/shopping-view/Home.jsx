import React, { useEffect } from "react";
import Slider from "../../components/slider/slider";
import { Truck, ShieldCheck, Zap, Plus, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ShoppingProductTile from "../../components/shopping-view/ProductTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts, fetchProductDetails } from "@/store/shop/index";
import { addToCart, fetchCartItems } from "@/store/cart-slice/index";

// 1. Sonner Import
import { toast } from "sonner"; 

const categories = [
  { name: "Casual Wear", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400", grid: "md:col-span-2 md:row-span-2" },
  { name: "Evening Gowns", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=400", grid: "md:col-span-1 md:row-span-1" },
  { name: "Accessories", img: "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?q=80&w=400", grid: "md:col-span-1 md:row-span-2" },
  { name: "Footwear", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400", grid: "md:col-span-1 md:row-span-1" },
];

function ShoppingHome() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.shopProducts);
  const { user } = useSelector((state) => state.auth);

  // Handle Add to Cart with Sonner
  function handleAddtoCart(getCurrentProductId, getTotalStock) {
    if (!user) {
      toast.error("Please login to add items to selection");
      return;
    }

    dispatch(addToCart({ userId: user?.id, productId: getCurrentProductId, quantity: 1 }))
      .then((data) => {
        if (data?.payload?.success) {
          dispatch(fetchCartItems(user?.id));
          
          // 2. Styled Sonner Toast
          toast.success("Added to Selection", {
            description: "The masterpiece has been added to your cart.",
            duration: 3000,
            style: {
              background: "#0a0a0a",
              color: "#fff",
              border: "1px solid #be185d",
            },
          });
        }
      });
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  useEffect(() => {
    dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: "price-lowtohigh" }));
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fff] text-[#111] selection:bg-[#be185d] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <Slider />

      {/* 2. FEATURED PRODUCTS SECTION */}
      <section className="py-32 bg-[#fcfcfc]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <Sparkles className="text-[#be185d] w-4 h-4" />
              <span className="text-[#be185d] font-black text-[11px] uppercase tracking-[0.5em]">The Spotlight</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
              Featured <span className="text-gray-300 italic font-light">Pieces.</span>
            </h2>
            <div className="h-[2px] w-20 bg-[#be185d]/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productList && productList.length > 0 ? (
              productList.slice(0, 4).map((productItem) => (
                <motion.div 
                  key={productItem._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <ShoppingProductTile
                    product={productItem}
                    handleGetProductDetails={handleGetProductDetails}
                    handleAddtoCart={handleAddtoCart}
                  />
                </motion.div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400 italic">Curating excellence... please wait.</p>
            )}
          </div>

          <div className="mt-20 text-center">
            <Button className="bg-transparent border border-black hover:bg-black hover:text-white text-black px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.4em] transition-all">
                View Full Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* 3. THE EDITORIAL GRID */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto w-full pb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-[#be185d] font-black text-[11px] uppercase tracking-[0.6em] mb-6 block">Curated Selection</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              Beyond <br /> <span className="italic font-light text-gray-300">Fashion.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[90vh]">
          {categories.map((cat, index) => (
            <div key={index} className={`relative overflow-hidden group rounded-2xl ${cat.grid}`}>
              <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt={cat.name}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />
              <div className="absolute bottom-8 left-8 flex justify-between items-end w-[80%]">
                <h3 className="text-white text-2xl font-black uppercase tracking-tighter">{cat.name}</h3>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#be185d] transition-all"><Plus size={18}/></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ShoppingHome;