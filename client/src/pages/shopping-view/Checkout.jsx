

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import UserCartItemsContent from "../../components/shopping-view/CartItemWraper";
// import { Button } from "../../components/ui/button";

// import { createOrder } from "../../store/order-slice";

// function Checkout() {
//   const dispatch = useDispatch();

//   const { cartItems } = useSelector((state) => state.cart);

//   const { user } = useSelector((state) => state.auth);

//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     customerName: "",
//     email: user?.email || "",
//     phone: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     notes: "",
//   });

//   // TOTAL
//   const totalCartAmount = cartItems.reduce((sum, item) => {
//     const price =
//       item.salePrice > 0
//         ? item.salePrice
//         : item.price;

//     return sum + price * item.quantity;
//   }, 0);

//   // INPUT CHANGE
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // PLACE ORDER
//   const handlePlaceOrderSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const finalOrderPayload = {
//         userId: user?._id || user?.id,

//         customerName: formData.customerName,
//         email: formData.email,
//         phone: formData.phone,
//         address: formData.address,
//         city: formData.city,
//         postalCode: formData.postalCode,
//         notes: formData.notes,

//         paymentMethod: "cash_on_delivery",
//       };

//       console.log("FINAL ORDER:", finalOrderPayload);

//       const resultAction = await dispatch(
//         createOrder(finalOrderPayload)
//       );

//       console.log(resultAction);

//       if (createOrder.fulfilled.match(resultAction)) {
//         alert("Order placed successfully!");

//         setIsFormOpen(false);
//       } else {
//         alert(
//           resultAction.payload?.message ||
//             "Failed to place order"
//         );
//       }
//     } catch (error) {
//       console.log(error);

//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50 relative">
//       {/* BANNER */}
//       <div className="relative h-[250px] w-full overflow-hidden shadow-md">
//         <img
//           src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
//           className="h-full w-full object-cover"
//           alt="Checkout Banner"
//         />

//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <h1 className="text-white text-3xl font-extrabold uppercase tracking-wider">
//             Checkout Summary
//           </h1>
//         </div>
//       </div>

//       {/* MAIN */}
//       <div className="max-w-3xl w-full mx-auto p-4 md:p-6 mt-6">
//         <div className="bg-white border p-6 rounded-xl shadow-sm flex flex-col">
//           <h2 className="text-2xl font-bold border-b pb-3 text-gray-800">
//             Review Your Order
//           </h2>

//           {/* CART ITEMS */}
//           <div className="mt-4 space-y-4 max-h-[400px] overflow-y-auto pr-2">
//             {cartItems && cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <UserCartItemsContent
//                   key={item.productId}
//                   cartItem={item}
//                 />
//               ))
//             ) : (
//               <p className="text-center font-bold uppercase text-gray-400 py-12">
//                 Your Cart is Empty
//               </p>
//             )}
//           </div>

//           {/* TOTAL */}
//           <div className="mt-6 space-y-3 border-t pt-4">
//             <div className="flex justify-between text-sm text-gray-500">
//               <span>Shipping Charges</span>

//               <span className="font-semibold text-green-600">
//                 FREE
//               </span>
//             </div>

//             <div className="flex justify-between items-center border-t pt-3">
//               <span className="font-bold uppercase text-xs text-gray-600">
//                 Total Payable Amount
//               </span>

//               <span className="font-black text-2xl text-[#be185d]">
//                 ${totalCartAmount.toFixed(2)}
//               </span>
//             </div>
//           </div>

//           {/* BUTTON */}
//           <Button
//             onClick={() => setIsFormOpen(true)}
//             className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-xl font-black uppercase mt-6"
//             disabled={cartItems.length === 0}
//           >
//             Place Order
//           </Button>
//         </div>
//       </div>

//       {/* MODAL */}
//       {isFormOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
//           <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border flex flex-col max-h-[90vh] overflow-hidden">
//             {/* HEADER */}
//             <div className="flex justify-between items-center p-5 border-b bg-gray-50">
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   Delivery Information
//                 </h3>

//                 <p className="text-xs text-gray-500 mt-0.5">
//                   Please fill your details
//                 </p>
//               </div>

//               <button
//                 onClick={() => setIsFormOpen(false)}
//                 className="text-gray-400 hover:text-gray-700 text-2xl font-bold"
//               >
//                 &times;
//               </button>
//             </div>

//             {/* FORM */}
//             <form
//               onSubmit={handlePlaceOrderSubmit}
//               className="p-6 overflow-y-auto space-y-4"
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {/* NAME */}
//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-bold uppercase">
//                     Full Name
//                   </label>

//                   <input
//                     type="text"
//                     name="customerName"
//                     required
//                     value={formData.customerName}
//                     onChange={handleInputChange}
//                     className="w-full border rounded-lg p-2.5"
//                   />
//                 </div>

//                 {/* EMAIL */}
//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-bold uppercase">
//                     Email
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full border rounded-lg p-2.5"
//                   />
//                 </div>

//                 {/* PHONE */}
//                 <div className="flex flex-col gap-1 sm:col-span-2">
//                   <label className="text-xs font-bold uppercase">
//                     Phone
//                   </label>

//                   <input
//                     type="text"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full border rounded-lg p-2.5"
//                   />
//                 </div>

//                 {/* ADDRESS */}
//                 <div className="flex flex-col gap-1 sm:col-span-2">
//                   <label className="text-xs font-bold uppercase">
//                     Address
//                   </label>

//                   <input
//                     type="text"
//                     name="address"
//                     required
//                     value={formData.address}
//                     onChange={handleInputChange}
//                     className="w-full border rounded-lg p-2.5"
//                   />
//                 </div>

//                 {/* CITY */}
//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-bold uppercase">
//                     City
//                   </label>

//                   <input
//                     type="text"
//                     name="city"
//                     required
//                     value={formData.city}
//                     onChange={handleInputChange}
//                     className="w-full border rounded-lg p-2.5"
//                   />
//                 </div>

//                 {/* POSTAL */}
//                 <div className="flex flex-col gap-1">
//                   <label className="text-xs font-bold uppercase">
//                     Postal Code
//                   </label>

//                   <input
//                     type="text"
//                     name="postalCode"
//                     required
//                     value={formData.postalCode}
//                     onChange={handleInputChange}
//                     className="w-full border rounded-lg p-2.5"
//                   />
//                 </div>

//                 {/* NOTES */}
//                 <div className="flex flex-col gap-1 sm:col-span-2">
//                   <label className="text-xs font-bold uppercase">
//                     Notes
//                   </label>

//                   <textarea
//                     name="notes"
//                     rows="3"
//                     value={formData.notes}
//                     onChange={handleInputChange}
//                     className="w-full border rounded-lg p-2.5"
//                   />
//                 </div>
//               </div>

//               {/* FOOTER */}
//               <div className="flex gap-3 pt-4">
//                 <Button
//                   type="button"
//                   onClick={() => setIsFormOpen(false)}
//                   className="w-1/3 bg-gray-200 text-black"
//                 >
//                   Cancel
//                 </Button>

//                 <Button
//                   type="submit"
//                   className="w-2/3 bg-black text-white"
//                 >
//                   Confirm Order
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Checkout;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserCartItemsContent from "../../components/shopping-view/CartItemWraper";
import { Button } from "../../components/ui/button";

import { createOrder } from "../../store/order-slice";

function Checkout() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    customerName: "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  // TOTAL
  const totalCartAmount = cartItems.reduce((sum, item) => {
    const price = item.salePrice > 0 ? item.salePrice : item.price;
    return sum + price * item.quantity;
  }, 0);

  // INPUT CHANGE
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // PLACE ORDER
  const handlePlaceOrderSubmit = async (e) => {
    e.preventDefault();

    try {
      const finalOrderPayload = {
        userId: user?._id || user?.id,
        customerName: formData.customerName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        notes: formData.notes,
        paymentMethod: "cash_on_delivery",
      };

      console.log("SENDING PAYLOAD TO SERVER:", finalOrderPayload);

      const resultAction = await dispatch(createOrder(finalOrderPayload));

      console.log("SERVER ACTION RESULT:", resultAction);

      if (createOrder.fulfilled.match(resultAction)) {
        alert("Order placed successfully!");
        setIsFormOpen(false);
        
        // Reset form data safely
        setFormData({
          customerName: "",
          email: user?.email || "",
          phone: "",
          address: "",
          city: "",
          postalCode: "",
          notes: "",
        });
      } else {
        // Yahan se backend ka asli validation error pakra jaye ga
        const serverErrorMessage = 
          resultAction.payload?.message || 
          resultAction.error?.message || 
          "Failed to place order";
          
        alert(serverErrorMessage);
      }
    } catch (error) {
      console.error("Frontend Form Error:", error);
      alert("Something went wrong on checkout submission.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      {/* BANNER */}
      <div className="relative h-[250px] w-full overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          className="h-full w-full object-cover"
          alt="Checkout Banner"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl font-extrabold uppercase tracking-wider">
            Checkout Summary
          </h1>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-3xl w-full mx-auto p-4 md:p-6 mt-6">
        <div className="bg-white border p-6 rounded-xl shadow-sm flex flex-col">
          <h2 className="text-2xl font-bold border-b pb-3 text-gray-800">
            Review Your Order
          </h2>

          {/* CART ITEMS */}
          <div className="mt-4 space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => (
                <UserCartItemsContent
                  key={item.productId}
                  cartItem={item}
                />
              ))
            ) : (
              <p className="text-center font-bold uppercase text-gray-400 py-12">
                Your Cart is Empty
              </p>
            )}
          </div>

          {/* TOTAL */}
          <div className="mt-6 space-y-3 border-t pt-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Shipping Charges</span>
              <span className="font-semibold text-green-600">FREE</span>
            </div>

            <div className="flex justify-between items-center border-t pt-3">
              <span className="font-bold uppercase text-xs text-gray-600">
                Total Payable Amount
              </span>
              <span className="font-black text-2xl text-[#be185d]">
                ${totalCartAmount.toFixed(2)}
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <Button
            onClick={() => setIsFormOpen(true)}
            className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-xl font-black uppercase mt-6"
            disabled={!cartItems || cartItems.length === 0}
          >
            Place Order
          </Button>
        </div>
      </div>

      {/* MODAL */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border flex flex-col max-h-[90vh] overflow-hidden">
            {/* HEADER */}
            <div className="flex justify-between items-center p-5 border-b bg-gray-50">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Delivery Information
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Please fill your details
                </p>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* FORM */}
            <form
              onSubmit={handlePlaceOrderSubmit}
              className="p-6 overflow-y-auto space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* NAME */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2.5"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2.5"
                  />
                </div>

                {/* PHONE */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-bold uppercase">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2.5"
                  />
                </div>

                {/* ADDRESS */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-bold uppercase">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2.5"
                  />
                </div>

                {/* CITY */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2.5"
                  />
                </div>

                {/* POSTAL */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold uppercase">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2.5"
                  />
                </div>

                {/* NOTES */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-bold uppercase">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg p-2.5"
                  />
                </div>
              </div>

              {/* FOOTER */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="w-1/3 bg-gray-200 text-black"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="w-2/3 bg-black text-white"
                >
                  Confirm Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;