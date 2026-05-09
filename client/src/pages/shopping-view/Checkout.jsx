import React from "react";
import { useSelector } from "react-redux";
// Path fixed: pages se components/shopping-view tak jana hai
import UserCartItemsContent from "../../components/shopping-view/CartItemWraper"; 
// Path fixed: pages se components/ui tak jana hai
import { Button } from "../../components/ui/button"; 

function Checkout() {
  const { cartItems } = useSelector((state) => state.cart);

  const totalCartAmount = cartItems.reduce((sum, item) => {
    const price = item.salePrice > 0 ? item.salePrice : item.price;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          className="h-full w-full object-cover"
          alt="Checkout Banner"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 p-5">
        <div className="flex flex-col gap-4">
           <h2 className="text-2xl font-bold border-b pb-2">Shipping Address</h2>
           <div className="p-10 border rounded-lg bg-gray-50 text-center">
              <p className="text-gray-500 italic">Address management coming here...</p>
           </div>
        </div>

        <div className="flex flex-col gap-4 bg-white border p-5 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold border-b pb-2">Order Summary</h2>
          <div className="mt-4 space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <UserCartItemsContent key={item.productId} cartItem={item} />
              ))
            ) : (
              <p className="text-center font-bold uppercase">Empty Cart</p>
            )}
          </div>
          <div className="mt-8 space-y-4 border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase text-xs">Total Amount</span>
              <span className="font-black text-lg text-[#be185d]">
                ${totalCartAmount.toFixed(2)}
              </span>
            </div>
          </div>
          <Button 
            className="w-full bg-black py-6 rounded-xl font-black uppercase mt-4"
            disabled={cartItems.length === 0}
          >
            Confirm Order
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;