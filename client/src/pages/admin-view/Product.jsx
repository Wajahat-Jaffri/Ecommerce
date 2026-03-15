import React, { useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonForm from "@/components/common/Form";
import { addProductFormElements } from "@/config";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
// import ProductImageUpload from "@/components/admin-view/Image-upload";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: 0,
  salePrice: 0,
  totalStock: 0,
};

const AdminProducts = () => {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [imageLoadingState, setImageLoadingState] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-end">
        <Button
          onClick={() => setOpenCreateProductsDialog(true)}
          className="rounded-2xl border border-indigo-500/20 bg-indigo-600 px-6 py-2.5 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/40"
        >
          <Plus className="mr-2 h-4 w-4 stroke-[3px]" />
          Add New Product
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>

      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={setOpenCreateProductsDialog}
      >
        <SheetContent
          side="right"
          className="w-full overflow-auto border-l border-white/5 bg-[#0f172a] px-0 shadow-[-20px_0_80px_rgba(0,0,0,0.5)] sm:max-w-md"
        >
          <div className="min-h-full">
            <SheetHeader className="border-b border-white/5 bg-slate-950/50 px-6 py-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="space-y-1 text-left">
                  <SheetTitle className="text-xl font-black uppercase tracking-tighter text-white">
                    New <span className="text-indigo-400">Inventory</span>
                  </SheetTitle>
                  <SheetDescription className="max-w-sm text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Initialize a new asset in the system database.
                  </SheetDescription>
                </div>
              </div>
            </SheetHeader>

            <div className="px-6 py-8">
              <div className="rounded-[2.5rem] border border-white/5 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                <div className="mb-8 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 p-5 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300">
                    Product Editor
                  </p>
                  <h2 className="mt-2 text-sm font-bold text-white uppercase tracking-tight">
                    Fill in the essentials
                  </h2>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
                    Use concise titles and accurate data to keep the storefront clean.
                  </p>
                </div>

                <CommonForm
                  formControls={addProductFormElements}
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={onSubmit}
                  buttonText="Deploy Product"
                  formClassName="space-y-5"
                  fieldClassName="space-y-2"
                  labelClassName="ml-1 text-[10px] font-black uppercase tracking-widest text-slate-500"
                  inputClassName="h-12 rounded-2xl border-white/5 bg-slate-950/50 px-4 text-slate-100 placeholder:text-slate-600 focus-visible:border-indigo-500/50 focus-visible:ring-indigo-500/10 transition-all"
                  buttonClassName="w-full h-12 mt-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-indigo-600/20 transition-all hover:opacity-90 active:scale-[0.98]"
                />
              </div>
              
              {/* <ProductImageUpload
                imageFile={imageFile}
                setImageFile={(file) => {
                  setImageFile(file);
                  setFormData((prev) => ({
                    ...prev,
                    image: file,
                  }));
                }}
                imageLoadingState={imageLoadingState}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                isCustomStyling
              /> */}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminProducts;