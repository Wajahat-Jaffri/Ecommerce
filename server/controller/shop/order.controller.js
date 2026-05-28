// import Cart from "../../model/Cart.js";
// import Order from "../../model/Order.js";

// const normalizeCartItems = (items = []) =>
//   items
//     .filter((item) => item?.productId)
//     .map((item) => {
//       const product = item.productId;

//       const price =
//         product.salePrice > 0
//           ? product.salePrice
//           : product.price;

//       return {
//         productId: product._id || product,
//         title: item.popupTitle || product.title,
//         image: item.popupImage || product.image,
//         price,
//         quantity: item.quantity,
//       };
//     });

// const createOrder = async (req, res) => {
//   try {
//     const {
//       userId,
//       customerName,
//       email,
//       phone,
//       address,
//       city,
//       postalCode,
//       notes = "",
//       paymentMethod = "cash_on_delivery",
//     } = req.body;

//     // VALIDATION
//     if (
//       !userId ||
//       !customerName ||
//       !email ||
//       !phone ||
//       !address ||
//       !city ||
//       !postalCode
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields",
//       });
//     }

//     // PAYMENT METHOD CHECK
//     if (paymentMethod !== "cash_on_delivery") {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid payment method",
//       });
//     }

//     // FIND CART
//     const cart = await Cart.findOne({ userId }).populate({
//       path: "items.productId",
//       select: "image title description price salePrice",
//     });

//     if (!cart || cart.items.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Cart is empty",
//       });
//     }

//     // NORMALIZE ITEMS
//     const orderItems = normalizeCartItems(cart.items);

//     if (orderItems.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: "No valid items in cart",
//       });
//     }

//     // TOTAL
//     const totalAmount = orderItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );

//     // CREATE ORDER
//     const order = await Order.create({
//       userId,
//       customerName,
//       email,
//       phone,
//       address,
//       city,
//       postalCode,
//       notes,
//       paymentMethod,
//       orderStatus: "processing",
//       items: orderItems,
//       totalAmount,
//     });

//     // CLEAR CART
//     cart.items = [];

//     await cart.save();

//     return res.status(201).json({
//       success: true,
//       message: "Order created successfully",
//       data: order,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: error.message,
//     });
//   }
// };

// export { createOrder };

import Cart from "../../model/Cart.js";
import Order from "../../model/Order.js";

const allowedOrderStatuses = [
  "placed",
  "processing",
  "delivered",
  "cancelled",
];

// NORMALIZE CART ITEMS (FIXED & ROBUST)
const normalizeCartItems = (items = []) =>
  items
    .filter((item) => item?.productId)
    .map((item) => {
      const product = item.productId;

      // Safe price check
      const price =
        product.salePrice > 0
          ? product.salePrice
          : (product.price || 0);

      return {
        productId: product._id || product,
        title: product.title || item.popupTitle || "Product Item",
        image: product.image || item.popupImage || "",
        price,
        quantity: item.quantity || 1,
      };
    });

// CREATE ORDER (FULLY WORKING)
const createOrder = async (req, res) => {
  try {
    const {
      userId,
      customerName,
      email,
      phone,
      address,
      city,
      postalCode,
      notes = "",
      paymentMethod = "cash_on_delivery",
    } = req.body;

    // VALIDATION
    if (
      !userId ||
      !customerName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !postalCode
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields. Please fill complete form details.",
      });
    }

    // PAYMENT METHOD CHECK
    if (paymentMethod !== "cash_on_delivery") {
      return res.status(400).json({
        success: false,
        message: "Invalid payment method",
      });
    }

    // FIND CART IN DATABASE
    const cart = await Cart.findOne({ userId }).populate({
      path: "items.productId",
      select: "image title description price salePrice",
    });

    if (!cart || !cart.items || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your Cart is empty in database. Cannot place order.",
      });
    }

    // NORMALIZE ITEMS
    const orderItems = normalizeCartItems(cart.items);

    if (orderItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid items could be processed from your cart.",
      });
    }

    // TOTAL AMOUNT
    const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // CREATE ORDER IN MONGO
    const order = await Order.create({
      userId,
      customerName,
      email,
      phone,
      address,
      city,
      postalCode,
      notes,
      paymentMethod,
      orderStatus: "processing",
      items: orderItems,
      totalAmount,
    });

    // CLEAR USER'S CART AFTER SUCCESSFUL ORDER
    cart.items = [];
    await cart.save();

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    console.error("CRITICAL BACKEND ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error while creating order",
      error: error.message,
    });
  }
};

// GET ALL ORDERS
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .populate("userId", "username email");

    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

// UPDATE ORDER STATUS
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    if (!allowedOrderStatuses.includes(orderStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status",
      });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true, runValidators: true }
    ).populate("userId", "username email");

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update order status",
      error: error.message,
    });
  }
};

export { createOrder, getAllOrders, updateOrderStatus };