import Cart from "../../model/Cart.js";
import Product from "../../model/Product.js";

// 🔹 Helper Function
const formatCartItems = (items) =>
  items.map((item) => ({
    productId: item.productId._id,
    title: item.productId.title,
    image: item.productId.image,
    price: item.productId.price,
    salePrice: item.productId.salePrice,
    quantity: item.quantity,
  }));

//  Add To Cart
export const addToCart = async (req, res) => {
  try {
    let { userId, productId, quantity } = req.body;

    quantity = Number(quantity) || 1;

    if (!userId || !productId) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId.toString()
    );

    if (existingItem) {
      existingItem.quantity += 1; // ✅ always +1 (no duplicate issue)
    } else {
      cart.items.push({
        productId,
        quantity: 1,
      });
    }

    await cart.save();

    return res.status(200).json({
      success: true,
      message: "Added to cart",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//  Fetch Cart Items
export const fetchCartItems = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        success: false,
        error: "Missing userId",
      });
    }

    const cart = await Cart.findOne({ userId }).populate({
      path: "items.productId",
      select: "image title price salePrice",
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    const validItems = cart.items.filter((item) => item.productId);

    if (validItems.length !== cart.items.length) {
      cart.items = validItems;
      await cart.save();
    }

    return res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: {
        ...cart._doc,
        items: formatCartItems(validItems),
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch cart",
      error: error.message,
    });
  }
};

//  Update Quantity
export const updateCartItemQty = async (req, res) => {
  try {
    let { userId, productId, quantity } = req.body;

    quantity = Number(quantity);

    if (!userId || !productId || quantity < 1) {
      return res.status(400).json({
        success: false,
        error: "Invalid data",
      });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        error: "Cart not found",
      });
    }

    const item = cart.items.find(
      (item) => item.productId.toString() === productId.toString()
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        error: "Item not found",
      });
    }

    item.quantity = quantity;

    await cart.save();

    await cart.populate({
      path: "items.productId",
      select: "image title price salePrice",
    });

    return res.status(200).json({
      success: true,
      message: "Updated",
      data: formatCartItems(cart.items),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//  Delete Item
export const deleteCartItem = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({
        success: false,
        error: "Missing data",
      });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({
        success: false,
        error: "Cart not found",
      });
    }

    // ✅ IMPORTANT FIX (NO POPULATE USED HERE)
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId.toString()
    );

    await cart.save();

    await cart.populate({
      path: "items.productId",
      select: "image title price salePrice",
    });

    return res.status(200).json({
      success: true,
      message: "Item deleted",
      data: formatCartItems(cart.items),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};