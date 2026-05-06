import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  updateCartQuantity,
  fetchCartItems,
} from "@/store/cart-slice";
import { toast } from "sonner";

function UserCartItemsContent({ cartItem }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const userId = user?.id || user?._id;
  const productId = cartItem?.productId;

  // Quantity Update
  async function handleUpdateQuantity(type) {
    const newQuantity =
      type === "plus"
        ? cartItem.quantity + 1
        : cartItem.quantity - 1;

    if (newQuantity < 1) return;

    const result = await dispatch(
      updateCartQuantity({
        userId,
        productId,
        quantity: newQuantity,
      })
    );

    if (result?.payload?.success) {
      dispatch(fetchCartItems(userId));
      toast.success("Cart updated");
    }
  }

  // Delete Item
  async function handleDelete() {
    const result = await dispatch(
      deleteCartItem({
        userId,
        productId,
      })
    );

    if (result?.payload?.success) {
      dispatch(fetchCartItems(userId));
      toast.success("Item removed");
    }
  }

  const price =
    cartItem.salePrice > 0
      ? cartItem.salePrice
      : cartItem.price;

  return (
    <div className="flex items-center space-x-4 border-b pb-4">
      {/* Product Image */}
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className="w-16 h-16 rounded object-cover"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-bold text-xs uppercase">
          {cartItem.title}
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 rounded-full"
            onClick={() =>
              handleUpdateQuantity("minus")
            }
          >
            <Minus className="w-3 h-3" />
          </Button>

          <span className="font-bold text-xs">
            {cartItem.quantity}
          </span>

          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 rounded-full"
            onClick={() =>
              handleUpdateQuantity("plus")
            }
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Price + Delete */}
      <div className="flex flex-col items-end">
        <p className="font-bold text-[#be185d]">
          ${(price * cartItem.quantity).toFixed(2)}
        </p>

        <Trash
          onClick={handleDelete}
          className="cursor-pointer text-gray-400 mt-1"
          size={16}
        />
      </div>
    </div>
  );
}

export default UserCartItemsContent;