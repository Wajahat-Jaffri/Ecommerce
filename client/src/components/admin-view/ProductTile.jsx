import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Edit3, Trash2 } from "lucide-react";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  const hasSalePrice = Number(product?.salePrice) > 0;
  const displayPrice = hasSalePrice ? product?.salePrice : product?.price;

  return (
    <Card className="group h-full overflow-hidden rounded-[2.2rem] border border-white/5 bg-[#0f172a] text-slate-100 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40">
      <div className="flex h-full flex-col">
        {/* Top Image Section */}
        <div className="relative p-3">
          <div className="flex h-[130px] items-center justify-center rounded-[1.8rem] bg-slate-900/80 p-4 border border-white/5">
            {product?.image ? (
              <img src={product.image} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110" alt="product" />
            ) : (
              <span className="text-[10px] font-black text-slate-700 uppercase">No Image</span>
            )}
          </div>
          {hasSalePrice && (
            <div className="absolute top-5 right-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-[8px] font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-500/20">
              Sale
            </div>
          )}
        </div>

        <CardContent className="flex flex-1 flex-col gap-3 p-5 pt-2">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400/80">
              {product?.category || "Category"}
            </p>
            <h2 className="mt-1 line-clamp-1 text-sm font-bold uppercase tracking-tight text-white/90">
              {product?.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-2xl bg-white/5 p-2 text-center border border-white/5">
              <p className="text-[7px] font-black uppercase tracking-widest text-slate-500">Stock</p>
              <p className="text-[11px] font-bold text-slate-200">{product?.totalStock ?? 0}</p>
            </div>
            <div className="rounded-2xl bg-indigo-500/5 p-2 text-center border border-indigo-500/10 ">
              <p className="text-[7px] font-black uppercase tracking-widest text-indigo-400">Price</p>
              <p className="text-[11px] font-bold text-indigo-300">${displayPrice}</p>
            </div>
          </div>
        </CardContent>

        {/* Updated Footer - Clean & Sidebar Matched */}
        <CardFooter className="flex items-center bg-purple-500/10 justify-between gap-2 p-5 pt-3">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
            className="flex-1 h-9 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black uppercase tracking-[0.1em] text-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-none transition-all duration-300 shadow-sm"
          >
            <Edit3 className="mr-1.5 h-3 w-3" /> Edit
          </Button>
          
          <Button
            onClick={() => handleDelete(product?._id)}
            variant="ghost"
            className="h-9 w-9 shrink-0 rounded-full border border-red-500/10 bg-red-500/5 p-0 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;