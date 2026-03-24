import Product from "../../model/Product.js";

export const filterProduct = async (req, res) => {
    try {
        const filteredProducts = await Product.find();
        return res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: filteredProducts,
        });
    } catch (error) {
        console.error("Product fetch failed:", error);
        return res.status(500).json({
            success: false,
            message: error.message || "Product fetch failed"
        });
    }
};