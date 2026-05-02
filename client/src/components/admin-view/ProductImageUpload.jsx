

// import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { useEffect, useRef } from "react";
// import { Button } from "../ui/button";
// import axios from "axios";

// function ProductImageUpload({
//   imageFile,
//   setImageFile,
//   imageLoadingState,
//   uploadedImageUrl,
//   setUploadedImageUrl,
//   setImageLoadingState,
//   isEditMode,
//   isCustomStyling = false,
// }) {
//   const inputRef = useRef(null);

//   function handleImageFileChange(event) {
//     const selectedFile = event.target.files?.[0];
//     if (selectedFile) setImageFile(selectedFile);
//   }

//   function handleRemoveImage() {
//     setImageFile(null);
//     setUploadedImageUrl(null);
//     if (inputRef.current) inputRef.current.value = "";
//   }

//   async function uploadImageToCloudinary() {
//     try {
//       setImageLoadingState(true);
//       const data = new FormData();
//       data.append("image", imageFile);
//       const response = await axios.post(
//         "http://localhost:5000/api/admin/products/upload",
//         data
//       );
//       if (response?.data?.success) {
//         setUploadedImageUrl(response.data.result.secure_url || response.data.result.url);
//       }
//     } catch (error) {
//       console.error("Upload failed", error);
//     } finally {
//       setImageLoadingState(false);
//     }
//   }

//   useEffect(() => {
//     if (imageFile !== null) uploadImageToCloudinary();
//   }, [imageFile]);

//   return (
//     <div className={`mt-6 w-full ${isCustomStyling ? "" : "mx-auto max-w-md"}`}>
//       <Label className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
//         Product Media
//       </Label>
//       <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-4 shadow-2xl">
//         <Input
//           id="image-upload"
//           type="file"
//           className="hidden"
//           ref={inputRef}
//           onChange={handleImageFileChange}
//         />
//         {!imageFile ? (
//           <Label
//             htmlFor="image-upload"
//             className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-[2rem] border border-dashed border-indigo-500/20 bg-indigo-500/5 transition-all hover:bg-indigo-500/10"
//           >
//             {/* Sidebar style Icon */}
//             <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20">
//               <UploadCloudIcon className="h-6 w-6" />
//             </div>
//             <span className="text-[11px] font-black uppercase tracking-widest text-slate-200">
//               {isEditMode ? "Replace Asset" : "Add Media"}
//             </span>
//           </Label>
//         ) : imageLoadingState ? (
//           <div className="flex h-44 flex-col items-center justify-center rounded-[2rem] bg-slate-900/50">
//              <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
//              <p className="mt-4 text-[10px] font-black uppercase tracking-tighter text-indigo-400">Uploading...</p>
//           </div>
//         ) : (
//           <div className="flex items-center gap-4 rounded-[1.5rem] bg-slate-900/80 p-4 border border-indigo-500/20">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
//               <FileIcon className="h-5 w-5" />
//             </div>
//             <p className="flex-1 truncate text-xs font-bold text-slate-200 uppercase">{imageFile.name}</p>
//             <Button
//               type="button"
//               variant="ghost"
//               size="icon"
//               className="h-10 w-10 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
//               onClick={handleRemoveImage}
//             >
//               <XIcon className="h-4 w-4" />
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductImageUpload;


import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import axios from "axios";

function ProductImageUpload({
  id = "image-upload", // Unique ID for each instance
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }

  function handleRemoveImage() {
    setImageFile(null);
    setUploadedImageUrl(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  async function uploadImageToCloudinary() {
    try {
      setImageLoadingState(true);
      const data = new FormData();
      data.append("image", imageFile);
      const response = await axios.post(
        "http://localhost:5000/api/admin/products/upload",
        data
      );
      if (response?.data?.success) {
        setUploadedImageUrl(response.data.result.secure_url || response.data.result.url);
      }
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null && typeof imageFile !== "string") {
      uploadImageToCloudinary();
    }
  }, [imageFile]);

  return (
    <div className={`mt-6 w-full ${isCustomStyling ? "" : "mx-auto max-w-md"}`}>
      <Label className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        Media Attachment
      </Label>
      <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-4 shadow-2xl">
        <Input
          id={id} // Dynamic ID
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!uploadedImageUrl ? (
          <Label
            htmlFor={id} // Linked to Dynamic ID
            className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-[2rem] border border-dashed border-indigo-500/20 bg-indigo-500/5 transition-all hover:bg-indigo-500/10"
          >
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20">
              <UploadCloudIcon className="h-6 w-6" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-200">
              {isEditMode ? "Replace Asset" : "Add Media"}
            </span>
          </Label>
        ) : imageLoadingState ? (
          <div className="flex h-44 flex-col items-center justify-center rounded-[2rem] bg-slate-900/50">
             <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
             <p className="mt-4 text-[10px] font-black uppercase tracking-tighter text-indigo-400">Uploading...</p>
          </div>
        ) : (
          <div className="flex items-center gap-4 rounded-[1.5rem] bg-slate-900/80 p-4 border border-indigo-500/20">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
              <FileIcon className="h-5 w-5" />
            </div>
            <p className="flex-1 truncate text-xs font-bold text-slate-200 uppercase">
               {imageFile?.name || "Asset Uploaded"}
            </p>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
              onClick={handleRemoveImage}
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;