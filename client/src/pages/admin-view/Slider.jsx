import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewSlider, fetchSliders, deleteSlider, updateSlider } from "@/store/slider-slice";
import ProductImageUpload from "@/components/admin-view/ProductImageUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Trash2, Edit2, UploadCloud, XCircle, LayoutPanelTop } from "lucide-react";

const AdminSlider = () => {
  const dispatch = useDispatch();
  const { sliderList } = useSelector((state) => state.slider);

  // Form States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentEditId, setCurrentEditId] = useState(null);

  // Background Image States
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  // Icon Image States
  const [iconFile, setIconFile] = useState(null);
  const [uploadedIconUrl, setUploadedIconUrl] = useState(null);
  const [iconLoading, setIconLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCurrentEditId(null);
    setImageFile(null);
    setUploadedImageUrl(null);
    setIconFile(null);
    setUploadedIconUrl(null);
  };

  const handleEdit = (item) => {
    setCurrentEditId(item._id);
    setTitle(item.title);
    setDescription(item.description);
    setUploadedImageUrl(item.image);
    setUploadedIconUrl(item.icon);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    dispatch(deleteSlider(id)).then((res) => {
      if (res.payload?.success) {
        toast.success("Slider deleted successfully!");
      }
    });
  };

  const handleAction = () => {
    if (!title || !description || !uploadedImageUrl || !uploadedIconUrl) {
      toast.error("Bhai, sari details aur dono images lazmi hain!");
      return;
    }

    const payload = { title, description, image: uploadedImageUrl, icon: uploadedIconUrl };

    if (currentEditId) {
      dispatch(updateSlider({ id: currentEditId, formData: payload })).then((res) => {
        if (res.payload?.success) {
          toast.success("Slider Updated! ✅");
          resetForm();
        }
      });
    } else {
      dispatch(addNewSlider(payload)).then((res) => {
        if (res.payload?.success) {
          toast.success("New Slider Added! 🚀");
          resetForm();
        }
      });
    }
  };

  return (
    <div className="w-full space-y-10 p-4">
      {/* --- FORM SECTION --- */}
      <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-10 shadow-2xl relative">
        {currentEditId && (
          <button onClick={resetForm} className="absolute top-6 right-6 text-slate-400 hover:text-white flex items-center gap-1 text-xs uppercase font-bold">
            <XCircle className="w-4 h-4" /> Cancel Edit
          </button>
        )}

        <div className="flex items-center gap-3 mb-8">
          <UploadCloud className="text-indigo-500 w-8 h-8" />
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter">
            {currentEditId ? "Update Slider" : "Slider Configuration"}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase ml-2 tracking-widest">Slider Identity</label>
              <Input placeholder="Main Title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-slate-900 border-white/10 text-white rounded-2xl h-14" />
              <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-slate-900 border-white/10 text-white rounded-2xl h-14" />
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/5">
              <label className="text-[10px] text-indigo-400 font-black uppercase mb-4 block tracking-widest text-center">1. Logo / Icon</label>
              <ProductImageUpload 
                id="icon-uploader"
                imageFile={iconFile} 
                setImageFile={setIconFile} 
                imageLoadingState={iconLoading} 
                uploadedImageUrl={uploadedIconUrl} 
                setUploadedImageUrl={setUploadedIconUrl} 
                setImageLoadingState={setIconLoading} 
                isCustomStyling={true} 
              />
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/5 flex flex-col justify-center">
            <label className="text-[10px] text-purple-400 font-black uppercase mb-4 block tracking-widest text-center">2. Background Image</label>
            <ProductImageUpload 
              id="bg-uploader"
              imageFile={imageFile} 
              setImageFile={setImageFile} 
              imageLoadingState={imageLoading} 
              uploadedImageUrl={uploadedImageUrl} 
              setUploadedImageUrl={setUploadedImageUrl} 
              setImageLoadingState={setImageLoading} 
              isCustomStyling={true} 
            />
          </div>
        </div>

        <Button onClick={handleAction} disabled={imageLoading || iconLoading} className="w-full h-16 mt-10 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 font-black text-lg uppercase tracking-widest shadow-xl">
          {imageLoading || iconLoading ? "Uploading Assets..." : currentEditId ? "Save Changes" : "Publish Now"}
        </Button>
      </div>

      {/* --- LIST SECTION (Show Sliders here) --- */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 px-2">
            <LayoutPanelTop className="w-5 h-5 text-indigo-400" />
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">Active Website Sliders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sliderList && sliderList.length > 0 ? (
            sliderList.map((sliderItem) => (
              <div key={sliderItem._id} className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#1e293b] shadow-xl transition-all hover:border-indigo-500/50">
                {/* Main Background Preview */}
                <div className="relative h-48 w-full bg-slate-800">
                  <img 
                    src={sliderItem.image} 
                    alt="Slider BG" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-2">
                     <img src={sliderItem.icon} alt="icon" className="w-full h-full object-contain" />
                  </div>
                  
                  {/* Actions Overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      onClick={() => handleEdit(sliderItem)}
                      className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="destructive" 
                      onClick={() => handleDelete(sliderItem._id)}
                      className="rounded-full shadow-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white truncate uppercase">{sliderItem.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2 mt-1">{sliderItem.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center rounded-[2rem] border border-dashed border-white/10">
                <p className="text-slate-500 font-medium">No sliders found. Add your first slider above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSlider;