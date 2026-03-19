// // 

// import React, { useEffect, useState } from "react";
// import { Plus, Sparkles } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import CommonForm from "@/components/common/Form";
// import { addProductFormElements } from "@/config";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import ProductImageUpload from "@/components/admin-view/ProductImageUpload";
// import AdminProductTile from "@/components/admin-view/ProductTile";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addNewProduct,
//   editProduct,
//   fetchAllProducts,
//   deleteProduct,
// } from "@/store/admin/product";
// import { toast } from "sonner";

// const initialFormData = {
//   image: null,
//   title: "",
//   description: "",
//   category: "",
//   brand: "",
//   price: 0,
//   salePrice: 0,
//   totalStock: 0,
// };

// const AdminProducts = () => {
//   const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
//   const [currentEditedId, setCurrentEditedId] = useState(null);
//   const [formData, setFormData] = useState(initialFormData);
//   const [imageFile, setImageFile] = useState(null);
//   const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
//   const [imageLoadingState, setImageLoadingState] = useState(false);

//   const dispatch = useDispatch();
//   const { productList } = useSelector((state) => state.adminProducts);

//   const resetForm = () => {
//     setFormData(initialFormData);
//     setCurrentEditedId(null);
//     setImageFile(null);
//     setUploadedImageUrl(null);
//     setOpenCreateProductsDialog(false);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (imageLoadingState) {
//       toast.error("Please wait for image upload");
//       return;
//     }

//     const finalImageUrl = uploadedImageUrl || formData.image;
//     if (!finalImageUrl) {
//       toast.error("Upload product image first");
//       return;
//     }

//     const action = currentEditedId
//       ? editProduct({ id: currentEditedId, formData: { ...formData, image: finalImageUrl } })
//       : addNewProduct({ ...formData, image: finalImageUrl });

//     dispatch(action).then((res) => {
//       if (res.payload?.success) {
//         toast.success(res.payload.message || "Product saved successfully");
//         resetForm();
//         dispatch(fetchAllProducts());
//       } else {
//         toast.error(res.payload?.message || "Failed to save product");
//       }
//     });
//   };

//   useEffect(() => {
//     dispatch(fetchAllProducts());
//   }, [dispatch]);

//   useEffect(() => {
//     if (uploadedImageUrl) {
//       setFormData((prev) => ({ ...prev, image: uploadedImageUrl }));
//     }
//   }, [uploadedImageUrl]);

//   useEffect(() => {
//     if (!currentEditedId) setUploadedImageUrl(null);
//     if (currentEditedId && formData.image) setUploadedImageUrl(formData.image);
//   }, [currentEditedId, formData]);

//   return (
//     <div className="w-full">
//       <div className="mb-6 flex justify-end">
//         <Button
//           onClick={() => setOpenCreateProductsDialog(true)}
//           className="rounded-2xl border border-slate-700 bg-slate-100 px-5 py-2.5 text-slate-950 shadow-lg hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white transition-all"
//         >
//           <Plus className="mr-2 h-4 w-4" /> Add New Product
//         </Button>
//       </div>

//       <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
//         {productList.length > 0 ? (
//           productList.map((product) => (
//             <AdminProductTile
//               key={product._id}
//               product={product}
//               setFormData={setFormData}
//               setOpenCreateProductsDialog={setOpenCreateProductsDialog}
//               setCurrentEditedId={setCurrentEditedId}
//             />
//           ))
//         ) : (
//           <div className="col-span-full text-center p-8 text-slate-400 border border-slate-800 rounded-3xl bg-slate-950/70">
//             No products found yet
//           </div>
//         )}
//       </div>

//       <Sheet open={openCreateProductsDialog} onOpenChange={setOpenCreateProductsDialog}>
//         <SheetContent side="right" className="w-full sm:max-w-md px-0 overflow-auto border-l border-slate-800 bg-slate-950/80 shadow-[0_20px_80px_rgba(2,6,23,0.6)]">
//           <SheetHeader className="px-5 py-5 border-b border-slate-800 backdrop-blur-xl">
//             <div className="flex gap-4 items-start">
//               <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 via-slate-800 to-emerald-500 text-white shadow-lg shadow-emerald-900/40">
//                 <Sparkles className="h-5 w-5" />
//               </div>
//               <div>
//                 <SheetTitle className="text-xl font-semibold text-slate-100">Add New Product</SheetTitle>
//                 <SheetDescription className="text-sm text-slate-400 max-w-sm">
//                   Build a polished catalog entry with clear details, pricing, and inventory.
//                 </SheetDescription>
//               </div>
//             </div>
//           </SheetHeader>

//           <div className="px-5 py-5">
//             <CommonForm
//               formControls={addProductFormElements}
//               formData={formData}
//               setFormData={setFormData}
//               onSubmit={onSubmit}
//               buttonText={currentEditedId ? "Update Product" : "Save Product"}
//               formClassName="space-y-4"
//             />
//             <ProductImageUpload
//               imageFile={imageFile}
//               setImageFile={(file) => {
//                 setImageFile(file);
//                 setFormData((prev) => ({ ...prev, image: file }));
//               }}
//               imageLoadingState={imageLoadingState}
//               uploadedImageUrl={uploadedImageUrl}
//               setUploadedImageUrl={setUploadedImageUrl}
//               setImageLoadingState={setImageLoadingState}
//               isEditMode={Boolean(currentEditedId)}
//               isCustomStyling
//             />
//           </div>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

// export default AdminProducts;

import React, { useEffect, useState } from "react";
import { Plus, Sparkles, PackageSearch } from "lucide-react";
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
import ProductImageUpload from "@/components/admin-view/ProductImageUpload";
import AdminProductTile from "@/components/admin-view/ProductTile";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} from "@/store/admin/product";
import { toast } from "sonner";

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
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [imageLoadingState, setImageLoadingState] = useState(false);

  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.adminProducts);
 console.log(productList);
  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentEditedId(null);
    setImageFile(null);
    setUploadedImageUrl(null);
    setOpenCreateProductsDialog(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (imageLoadingState) {
      toast.error("Please wait for image upload");
      return;
    }
    const finalImageUrl = uploadedImageUrl || formData.image;
    if (!finalImageUrl) {
      toast.error("Upload product image first");
      return;
    }
    const action = currentEditedId
      ? editProduct({ id: currentEditedId, formData: { ...formData, image: finalImageUrl } })
      : addNewProduct({ ...formData, image: finalImageUrl });

    dispatch(action).then((res) => {
      if (res.payload?.success) {
        toast.success(res.payload.message || "Product saved successfully");
        resetForm();
        dispatch(fetchAllProducts());
      }
    });
  };

  const handleDelete = (getCurrentProductId) => {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        toast.success("Product deleted successfully");
      }
    });
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (uploadedImageUrl) {
      setFormData((prev) => ({ ...prev, image: uploadedImageUrl }));
    }
  }, [uploadedImageUrl]);

  return (
    <div className="w-full min-h-screen">
      {/* Header Area */}
      <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
                Inventory <span className="text-indigo-500">Master</span>
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-1">Control & Logistics Unit</p>
        </div>
        <Button
          onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(null);
              setFormData(initialFormData);
          }}
          className="rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 px-8 py-7 text-[11px] font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-500/20 hover:scale-105 hover:shadow-indigo-500/40 transition-all active:scale-95"
        >
          <Plus className="mr-2 h-5 w-5" /> Add New Product
        </Button>
      </div>

      {/* Grid Area */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {productList && productList.length > 0 ? (
          productList.map((product) => (
            <AdminProductTile
              key={product._id}
              product={product}
              setFormData={setFormData}
              setOpenCreateProductsDialog={setOpenCreateProductsDialog}
              setCurrentEditedId={setCurrentEditedId}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-32 rounded-[3.5rem] border border-dashed border-white/5 bg-white/5 backdrop-blur-md">
            <PackageSearch className="h-16 w-16 text-slate-800 mb-6" />
            <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-600">
              No active assets found
            </p>
          </div>
        )}
      </div>

      {/* Modern Sidebar Form (Sheet) */}
      <Sheet open={openCreateProductsDialog} onOpenChange={setOpenCreateProductsDialog}>
        <SheetContent 
          side="right" 
          className="w-full sm:max-w-[450px] p-0 border-none bg-[#0f172a] shadow-[-40px_0_100px_rgba(2,6,23,0.9)] overflow-y-auto scrollbar-hide"
        >
          <SheetHeader className="px-8 py-10 border-b border-white/5 bg-slate-900/20 backdrop-blur-xl sticky top-0 z-10">
            <div className="flex gap-6 items-center">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-2xl shadow-indigo-500/30">
                <Sparkles className="h-7 w-7" />
              </div>
              <div>
                <SheetTitle className="text-2xl font-black uppercase tracking-tighter text-white">
                  {currentEditedId !== null ? "Edit Product" : "New Entry"}
                </SheetTitle>
                <SheetDescription className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mt-1">
                  Cloud Asset Management
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          <div className="px-8 py-8 space-y-10">
            {/* Image Section */}
            <div>
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={(file) => {
                  setImageFile(file);
                  setFormData((prev) => ({ ...prev, image: file }));
                }}
                imageLoadingState={imageLoadingState}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                isEditMode={Boolean(currentEditedId)}
                isCustomStyling
              />
            </div>

            {/* Form Section */}
            <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-inner">
                <CommonForm
                  formControls={addProductFormElements}
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={onSubmit}
                  buttonText={currentEditedId ? "Sync Updates" : "Deploy Product"}
                  isButtonDisabled={imageLoadingState}
                />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminProducts;