import { imageUploadUtil } from "../helper/cloudnary.js";
import Product from "../model/Product.js";

export const handleImageUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = "data:" + req.file.mimetype + ";base64," + b64;

        const result = await imageUploadUtil(url);

        return res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            result
        });
    } catch (error) {
        console.error("Image upload failed:", error);
        return res.status(500).json({ success: false, message: error.message || "Image upload failed" });
    }
};

// add new product
export const addProduct = async (req, res) => {
    try {
          const {
    title,
    description,
    category, 
    brand,
    price,
    salePrice,
    totalStock,
    averageReview,
    image
  }=req.body;

  const newlyCreatedProduct = new Product({
    title,
    description,
    category, 
    brand,
    price,
    salePrice,
    totalStock,
    averageReview,
    image
  })
  await newlyCreatedProduct.save()
  return res.status(201).json({
    success: true,
    message: "Product added successfully",
    data:newlyCreatedProduct
  })

    } catch (error) {
        console.error("Product add failed:", error);
        return res.status(500).json({ success: false, message: error.message || "Product add failed" });
        
    }
}

//get all products
export const fetchAllProducts = async (req, res) => {
    try {
        const listOfProducts = await Product.find();
        return res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: listOfProducts
        });
    } catch (error) {
        console.error("Product fetch failed:", error);
        return res.status(500).json({ success: false, message: error.message || "Product fetch failed" });
    }
}

//edit product
export const editProduct = async (req, res) => {
    try {
        const {
            title,
            description,
            category, 
            brand,
            price,
            salePrice,
            totalStock,
            averageReview,
            image
        }=req.body;

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}) 
        if(!updatedProduct){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        });
    } catch (error) {
        console.error("Product update failed:", error);
        return res.status(500).json({ success: false, message: error.message || "Product update failed" });
    }
}

//delete product
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if(!deletedProduct){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: deletedProduct
        });
    } catch (error) {
        console.error("Product delete failed:", error);
        return res.status(500).json({ success: false, message: error.message || "Product delete failed" });
    }
}