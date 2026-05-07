import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { ShoppingBag, Star, ShieldCheck, Truck } from "lucide-react";

function ProductDetailsDialog({
  open,
  setOpen,
  productDetails,
  handleAddToCart,
}) {
  if (!productDetails) return null;

  const hasSalePrice =
    productDetails?.salePrice && productDetails?.salePrice > 0;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="grid grid-cols-1 md:grid-cols-2 gap-0 p-0 overflow-hidden max-w-[95vw] sm:max-w-[85vw] lg:max-w-[1000px] rounded-[2rem] border-none bg-white/90 backdrop-blur-xl">
        
        {/* LEFT: Sticky Image Section */}
        <div className="relative bg-[#f9f9f9] flex items-center justify-center p-6 md:p-12">
          <div className="relative group w-full aspect-square">
            <img
              src={productDetails?.image || "/placeholder.png"}
              alt={productDetails?.title}
              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
            />
            {hasSalePrice && (
              <Badge className="absolute top-0 left-0 bg-[#be185d] text-white px-4 py-1 rounded-full uppercase text-[10px] font-black tracking-widest">
                Special Offer
              </Badge>
            )}
          </div>
        </div>

        {/* RIGHT: Scrollable Info Section */}
        <div className="flex flex-col h-full max-h-[90vh] md:max-h-[600px] overflow-y-auto p-8 md:p-12">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#be185d]">
                {productDetails?.brand}
              </span>
              <Separator orientation="vertical" className="h-3" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                {productDetails?.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-[#111] leading-tight uppercase tracking-tighter">
              {productDetails?.title}
            </h1>
            
            <div className="flex items-center gap-4 mt-6">
              {hasSalePrice ? (
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-[#be185d]">${productDetails?.salePrice}</span>
                  <span className="text-lg font-bold text-gray-300 line-through">${productDetails?.price}</span>
                </div>
              ) : (
                <span className="text-3xl font-black text-[#111]">${productDetails?.price}</span>
              )}
            </div>
          </div>

          <Separator className="bg-gray-100" />

          <div className="mt-8">
            <h3 className="text-[11px] font-black uppercase tracking-widest mb-3 text-gray-900">Description</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {productDetails?.description}
            </p>
          </div>

          {/* Quick Perks */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
              <Truck size={16} className="text-gray-400" />
              <span className="text-[10px] font-bold uppercase">Free Delivery</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50">
              <ShieldCheck size={16} className="text-gray-400" />
              <span className="text-[10px] font-bold uppercase">Original Piece</span>
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-10 sticky bottom-0 bg-white/50 backdrop-blur-md pt-4 pb-2">
            {productDetails?.totalStock === 0 ? (
              <Button className="w-full h-14 rounded-2xl bg-gray-200 text-gray-500 cursor-not-allowed uppercase font-black text-xs" disabled>
                Sold Out
              </Button>
            ) : (
              <Button
                onClick={() => handleAddToCart?.(productDetails?._id, productDetails?.totalStock)}
                className="w-full h-14 rounded-2xl bg-[#111] hover:bg-[#be185d] text-white transition-all duration-500 uppercase font-black text-xs tracking-[0.2em] shadow-xl hover:shadow-[#be185d]/20"
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Selection
              </Button>
            )}
            <p className={`text-center mt-3 text-[10px] font-bold uppercase tracking-tighter ${productDetails?.totalStock < 10 ? 'text-[#be185d]' : 'text-gray-400'}`}>
              {productDetails?.totalStock > 0 ? `Only ${productDetails?.totalStock} units remaining in vault` : "Awaiting Restock"}
            </p>
          </div>

          <Separator className="my-10 bg-gray-100" />

          {/* Reviews with Better UI */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black uppercase tracking-tighter">Guest Reviews</h2>
              <div className="flex text-yellow-500"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
            </div>

            <div className="space-y-4">
              {[
                { name: "Ali Khan", comment: "Exceptional quality. The fabric feel is premium." },
                { name: "Sara Ahmed", comment: "Perfect fit and very fast delivery." }
              ].map((review, i) => (
                <div key={i} className="p-5 rounded-[1.5rem] border border-gray-50 bg-gray-50/30">
                  <p className="font-black text-[11px] uppercase mb-1">{review.name}</p>
                  <p className="text-xs text-gray-500 leading-normal font-medium">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;