import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

import UserCartItemsContent from "./CartItemWraper";

function UserCartWrapper({ setOpenCartSheet }) {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const totalCartAmount = cartItems.reduce((sum, item) => {
    const price =
      item.salePrice > 0 ? item.salePrice : item.price;

    return sum + price * item.quantity;
  }, 0);

  return (
    <SheetContent className="sm:max-w-md bg-white p-0 flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b">
        <SheetHeader>
          <SheetTitle className="text-lg font-black uppercase">
            Your Bag
          </SheetTitle>
        </SheetHeader>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <UserCartItemsContent
              key={item.productId}
              cartItem={item}
            />
          ))
        ) : (
          <p className="text-center py-10 text-gray-500 font-bold uppercase text-xs">
            Empty
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="p-6 border-t bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold uppercase text-xs">
            Total
          </span>
          <span className="text-lg font-black">
            ${totalCartAmount.toFixed(2)}
          </span>
        </div>

        <Button
          disabled={cartItems.length === 0}
          onClick={() => {
            navigate("/shop/checkout");
            setOpenCartSheet(false);
          }}
          className="w-full bg-black py-6 rounded-xl font-black uppercase text-xs"
        >
          Checkout
        </Button>
      </div>
    </SheetContent>
  );
}

export default UserCartWrapper;