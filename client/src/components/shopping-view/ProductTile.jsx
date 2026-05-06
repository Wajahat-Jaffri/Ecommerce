import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { ShoppingCart } from "lucide-react";

function ShoppingProductTile({ product, handleGetProductDetails, handleAddtoCart }) {
  return (
    <Card className="group border border-gray-100 bg-white/50 backdrop-blur-sm rounded-[1.5rem] overflow-hidden transition-all duration-500 w-full max-w-[280px] mx-auto">
      <div onClick={() => handleGetProductDetails(product?._id)} className="cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-white p-2">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1.5">
            {product?.totalStock === 0 ? (
              <Badge className="bg-gray-900/80 text-white px-2 py-0.5 text-[9px] rounded-full">Out Of Stock</Badge>
            ) : product?.totalStock < 10 ? (
              <Badge className="bg-[#be185d] text-white px-2 py-0.5 text-[9px] rounded-full animate-pulse">Low Stock</Badge>
            ) : product?.salePrice > 0 ? (
              <Badge className="bg-[#be185d] text-white px-2 py-0.5 text-[9px] rounded-full">Sale</Badge>
            ) : null}
          </div>
        </div>
        <CardContent className="p-4 text-center">
          <p className="text-[9px] font-black text-[#be185d] uppercase tracking-[0.25em] mb-1">{brandOptionsMap[product?.brand]}</p>
          <h2 className="text-sm font-black text-[#1f2937] truncate px-1">{product?.title}</h2>
          <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest mb-3">{categoryOptionsMap[product?.category]}</p>
          <div className="flex justify-center items-center gap-2.5">
            {product?.salePrice > 0 ? (
              <>
                <span className="text-[11px] font-bold text-gray-400 line-through">${product?.price}</span>
                <span className="text-lg font-black text-[#be185d]">${product?.salePrice}</span>
              </>
            ) : (
              <span className="text-lg font-black text-[#1f2937]">${product?.price}</span>
            )}
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-4 pt-0">
        <Button
          disabled={product?.totalStock === 0}
          onClick={(e) => {
            e.stopPropagation(); // Prevents details modal from opening
            handleAddtoCart(product?._id, product?.totalStock);
          }}
          className="w-full bg-[#1f2937] hover:bg-[#be185d] text-white rounded-xl h-10 uppercase text-[9px] font-black"
        >
          <ShoppingCart className="w-3 h-3 mr-1.5" />
          Add to Selection
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;