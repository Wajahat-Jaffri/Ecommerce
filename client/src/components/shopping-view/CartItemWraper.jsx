import { Minus, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCartQuantity } from "@/store/shop/cart-slice";
import { toast } from "sonner";

function UserCartItemsContent({ cartItem }) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const items = cartItems?.items || [];

  const userId = user?.id || user?._id;

  const productId =
    typeof cartItem?.productId === "object"
      ? cartItem?.productId?._id
      : cartItem?.productId;

  // 🔥 Quantity update handler
  function handleUpdateQuantity(type) {
    const newQuantity =
      type === "plus"
        ? cartItem.quantity + 1
        : cartItem.quantity - 1;

    dispatch(
      updateCartQuantity({
        userId,
        productId,
        quantity: newQuantity,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        toast.success("Cart updated successfully");
      }
    });
  }

  // 🔥 Delete handler
  function handleDelete() {
    dispatch(
      deleteCartItem({
        userId,
        productId,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        toast.success("Item removed from cart");
      }
    });
  }

  const price =
    cartItem?.salePrice > 0
      ? cartItem?.salePrice
      : cartItem?.price;

  return (
    <div className="flex items-center space-x-4">
      {/* Image */}
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="w-20 h-20 rounded object-cover"
      />

      {/* Title + Qty */}
      <div className="flex-1">
        <h3 className="font-extrabold">{cartItem?.title}</h3>

        <div className="flex items-center gap-2 mt-1">
          {/* Minus */}
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            disabled={cartItem?.quantity === 1}
            onClick={() => handleUpdateQuantity("minus")}
          >
            <Minus className="w-4 h-4" />
          </Button>

          {/* Quantity */}
          <span className="font-semibold">
            {cartItem?.quantity}
          </span>

          {/* Plus */}
          <Button
            variant="outline"
            className="h-8 w-8 rounded-full"
            size="icon"
            onClick={() => handleUpdateQuantity("plus")}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Price + Delete */}
      <div className="flex flex-col items-end">
        <p className="font-semibold">
          ${(price * cartItem?.quantity).toFixed(2)}
        </p>

        <Trash
          onClick={handleDelete}
          className="cursor-pointer mt-1"
          size={20}
        />
      </div>
    </div>
  );
}

export default UserCartItemsContent;