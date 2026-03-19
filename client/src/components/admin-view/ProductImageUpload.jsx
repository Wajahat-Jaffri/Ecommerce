// import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { useEffect, useRef } from "react";
// import { Button } from "../ui/button";
// import axios from "axios";
// // import { Skeleton } from "../ui/skeleton";

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

//   function handleDragOver(event) {
//     event.preventDefault();
//   }

//   function handleDrop(event) {
//     event.preventDefault();
//     const droppedFile = event.dataTransfer.files?.[0];
//     if (droppedFile) setImageFile(droppedFile);
//   }

//   function handleRemoveImage() {
//     setImageFile(null);
//     setUploadedImageUrl(null);
//     if (inputRef.current) {
//       inputRef.current.value = "";
//     }
//   }

//   async function uploadImageToCloudinary() {
//     try {
//       setImageLoadingState(true);
//       const data = new FormData();
//       data.append("my_file", imageFile);
//       const response = await axios.post(
//         "http://localhost:3000/api/admin/products/upload-image",
//         data,
//       );
//       console.log(response, "response");

//       if (response?.data?.success) {
//         setUploadedImageUrl(
//           response.data.result.secure_url || response.data.result.url,
//         );
//       }
//     } catch (error) {
//       console.error(
//         error.response?.data?.message || "Image upload request failed",
//       );
//       setUploadedImageUrl(null);
//     } finally {
//       setImageLoadingState(false);
//     }
//   }

//   useEffect(() => {
//     if (imageFile !== null) uploadImageToCloudinary();
//   }, [imageFile]);

//   return (
//     <div
//       className={`mt-4 w-full ${isCustomStyling ? "" : "mx-auto max-w-md"}`}
//     >
//       <Label className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
//         Upload Image
//       </Label>
//       <div
//         onDragOver={handleDragOver}
//         onDrop={handleDrop}
//         className="rounded-[24px] border border-dashed border-slate-700 bg-slate-950/72 p-4 shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
//       >
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
//             className="flex h-36 cursor-pointer flex-col items-center justify-center rounded-[20px] border border-dashed border-emerald-500/25 bg-[linear-gradient(180deg,rgba(15,23,42,0.9)_0%,rgba(17,24,39,0.95)_100%)] px-4 text-center"
//           >
//             <UploadCloudIcon className="mb-3 h-10 w-10 text-emerald-400" />
//             <span className="text-sm font-medium text-slate-100">
//               {isEditMode
//                 ? "Drag and drop or click to replace image"
//                 : "Drag and drop or click to upload image"}
//             </span>
//             <span className="mt-2 text-xs text-slate-400">
//               Use a clean product image for a stronger catalog view.
//             </span>
//           </Label>
//         ) : imageLoadingState ? (
//           <div className="flex h-24 items-center justify-center rounded-[20px] border border-slate-800 bg-slate-900 text-sm text-slate-400">
//             Uploading image...
//           </div>
//         ) : (
//           <div className="flex items-center justify-between rounded-[20px] border border-slate-800 bg-slate-900 px-4 py-3">
//             <div className="flex items-center">
//               <FileIcon className="mr-3 h-8 w-8 text-emerald-400" />
//             </div>
//             <p className="flex-1 truncate text-sm font-medium text-slate-100">
//               {imageFile.name}
//             </p>
//             <Button
//               type="button"
//               variant="ghost"
//               size="icon"
//               className="text-slate-400 hover:bg-slate-800 hover:text-white"
//               onClick={handleRemoveImage}
//             >
//               <XIcon className="h-4 w-4" />
//               <span className="sr-only">Remove File</span>
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
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className={`mt-6 w-full ${isCustomStyling ? "" : "mx-auto max-w-md"}`}>
      <Label className="mb-4 block text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        Product Media
      </Label>
      <div className="rounded-[2.5rem] border border-white/5 bg-[#0f172a] p-4 shadow-2xl">
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-[2rem] border border-dashed border-indigo-500/20 bg-indigo-500/5 transition-all hover:bg-indigo-500/10"
          >
            {/* Sidebar style Icon */}
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
            <p className="flex-1 truncate text-xs font-bold text-slate-200 uppercase">{imageFile.name}</p>
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