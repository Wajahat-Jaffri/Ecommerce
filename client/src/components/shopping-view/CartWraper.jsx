import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./CartItemsWrapper";
import { useSelector } from "react-redux";

function UserCartWrapper({ setOpenCartSheet }) {
  const navigate = useNavigate();

  //  Redux se cart data le rahe hain
  const { cartItems } = useSelector((state) => state.cart);

 console.log( "cartItems",cartItems);
  // const items = cartItems?.items || [];
  const items = cartItems?.items || (Array.isArray(cartItems) ? cartItems : []);

  //  Total calculation (Redux data ke hisaab se)
  const totalCartAmount =
    items.length > 0
      ? items.reduce((sum, currentItem) => {
          const price =
            currentItem.salePrice > 0
              ? currentItem.salePrice
              : currentItem.price;

          return sum + price * currentItem.quantity;
        }, 0)
      : 0;

  return (
    <SheetContent className="sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>

      {/*  Cart Items */}
      <div className="mt-8 space-y-4">
        {items.length > 0 ? (
          items.map((item) => (
            <UserCartItemsContent
              key={item.productId}
              cartItem={item}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Your cart is empty
          </p>
        )}
      </div>

      {/*  Total */}
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">${totalCartAmount}</span>
        </div>
      </div>

      {/*  Checkout Button */}
      <Button
        onClick={() => {
          navigate("/shop/checkout");
          setOpenCartSheet?.(false);
        }}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </SheetContent>
  );
}

export default UserCartWrapper;