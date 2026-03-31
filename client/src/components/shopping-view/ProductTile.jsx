
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { ShoppingCart } from "lucide-react";

function ShoppingProductTile({ product , handleGetProductDetails}) {
  return (
    // Max width set ki hai taake card ek limit se bara na ho, aur padding kam ki hai
    <Card
    onClick={() => handleGetProductDetails(product?._id)} 
    className="group border border-gray-100 bg-white/50 backdrop-blur-sm rounded-[1.5rem] overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-xl hover:shadow-pink-50/50 w-full max-w-[280px] mx-auto">
      
      {/* Image Container: Aspect square aur padding taake contain better lage */}
      <div className="relative aspect-square overflow-hidden bg-white p-2">
        <img
          src={product?.image}
          alt={product?.title}
          // object-contain puri image dikhayega, zoom nahi karega
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Aesthetic Badges: Thode chote kiye hain */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {product?.totalStock === 0 ? (
            <Badge className="bg-gray-900/80 backdrop-blur-sm text-white border-none px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full">
              Out Of Stock
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="bg-[#be185d] text-white border-none px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full animate-pulse">
              Low Stock
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="bg-[#be185d] text-white border-none px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-pink-200">
              Sale
            </Badge>
          ) : null}
        </div>
      </div>

      {/* Card Content: Padding kam ki hai */}
      <CardContent className="p-4 text-center">
        {/* Font sizes chote kiye hain */}
        <p className="text-[9px] font-black text-[#be185d] uppercase tracking-[0.25em] mb-1">
          {brandOptionsMap[product?.brand]}
        </p>
        <h2 className="text-sm font-black text-[#1f2937] tracking-tight mb-0.5 truncate px-1">
          {product?.title}
        </h2>
        <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest mb-3">
          {categoryOptionsMap[product?.category]}
        </p>
        
        {/* Price sizes adjust kiye hain */}
        <div className="flex justify-center items-center gap-2.5">
          {product?.salePrice > 0 ? (
            <>
              <span className="text-[11px] font-bold text-gray-400 line-through">
                ${product?.price}
              </span>
              <span className="text-lg font-black text-[#be185d]">
                ${product?.salePrice}
              </span>
            </>
          ) : (
            <span className="text-lg font-black text-[#1f2937]">
              ${product?.price}
            </span>
          )}
        </div>
      </CardContent>

      {/* Card Footer: Padding kam aur button tight kiya hai */}
      <CardFooter className="p-4 pt-0">
        {product?.totalStock === 0 ? (
          // Button height kam ki hai
          <Button disabled className="w-full bg-gray-100 text-gray-400 rounded-xl h-10 uppercase text-[9px] font-black tracking-widest">
            Unavailable
          </Button>
        ) : (
          <Button className="w-full bg-[#1f2937] hover:bg-[#be185d] text-white rounded-xl h-10 uppercase text-[9px] font-black tracking-widest transition-all duration-300 group/btn shadow-md shadow-gray-100 hover:shadow-pink-100">
            {/* Icon size chota kiya hai */}
            <ShoppingCart className="w-3 h-3 mr-1.5 transition-transform group-hover/btn:-rotate-12" />
            Add to Selection
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;