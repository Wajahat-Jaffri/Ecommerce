


// import React, { useEffect } from "react";
// import { fetchAdminOrders, updateAdminOrderStatus } from "../../store/order-slice";
// import { useDispatch, useSelector } from "react-redux";

// const Order = () => {
//   const dispatch = useDispatch();

//   const { orders, loading, error } = useSelector((state) => state.orders);

//   useEffect(() => {
//     dispatch(fetchAdminOrders());
//   }, [dispatch]);

//   const handleStatusChange = (orderId, newStatus) => {
//     dispatch(
//       updateAdminOrderStatus({
//         orderId,
//         orderStatus: newStatus,
//       })
//     );
//   };

//   if (loading) {
//     return <div className="p-6 text-center">Loading Orders...</div>;
//   }

//   if (error) {
//     return <div className="p-6 text-red-500 text-center">{error}</div>;
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6">Orders Panel</h2>

//       {orders.length === 0 ? (
//         <div className="text-center py-12 text-gray-500 font-semibold">No Orders Found</div>
//       ) : (
//         <div className="overflow-x-auto bg-white rounded-xl shadow">
//           <table className="w-full text-sm">
//             <thead className="bg-gray-100 border-b">
//               <tr>
//                 <th className="px-6 py-4 text-left">Order ID</th>
//                 <th className="px-6 py-4 text-left">Items</th> {/* Naya Image Column */}
//                 <th className="px-6 py-4 text-left">Customer</th>
//                 <th className="px-6 py-4 text-left">Amount</th>
//                 <th className="px-6 py-4 text-left">Status</th>
//                 <th className="px-6 py-4 text-left">Change Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id} className="border-b hover:bg-gray-50 transition-colors">
//                   {/* ORDER ID */}
//                   <td className="px-6 py-4 font-mono text-xs text-gray-600">
//                     {order._id}
//                   </td>

//                   {/* PRODUCTS IMAGES RENDERING */}
//                   <td className="px-6 py-4">
//                     <div className="flex flex-wrap gap-2 max-w-[200px]">
//                       {order.items && order.items.length > 0 ? (
//                         order.items.map((item, index) => (
//                           <div 
//                             key={item.productId || index} 
//                             className="relative group border rounded-md p-0.5 bg-gray-50 shadow-sm"
//                           >
//                             <img
//                               src={item.image || "https://placehold.co/40x40?text=No+Img"}
//                               alt={item.title}
//                               className="w-10 h-10 object-cover rounded"
//                               onError={(e) => {
//                                 e.target.onerror = null;
//                                 e.target.src = "https://placehold.co/40x40?text=Error";
//                               }}
//                             />
//                             {/* Hover Badge for Quantity */}
//                             <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
//                               {item.quantity}
//                             </span>
                            
//                             {/* Tooltip on Hover to show Title */}
//                             <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-gray-900 text-white text-[10px] rounded py-1 px-2 whitespace-nowrap z-10 shadow-md">
//                               {item.title} (Rs. {item.price})
//                             </div>
//                           </div>
//                         ))
//                       ) : (
//                         <span className="text-xs text-gray-400 italic">No Items</span>
//                       )}
//                     </div>
//                   </td>

//                   {/* CUSTOMER NAME */}
//                   <td className="px-6 py-4 font-semibold text-gray-700">
//                     {order.customerName}
//                   </td>

//                   {/* AMOUNT */}
//                   <td className="px-6 py-4 font-black text-green-600">
//                     Rs. {order.totalAmount?.toFixed(2) || "0.00"}
//                   </td>

//                   {/* ORDER STATUS BADGE */}
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
//                         order.orderStatus === "placed"
//                           ? "bg-yellow-100 text-yellow-700"
//                           : order.orderStatus === "processing"
//                           ? "bg-blue-100 text-blue-700"
//                           : order.orderStatus === "delivered"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {order.orderStatus}
//                     </span>
//                   </td>

//                   {/* ACTIONS (STATUS DROP DOWN) */}
//                   <td className="px-6 py-4">
//                     <select
//                       value={order.orderStatus}
//                       onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                       className="border rounded-lg p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-xs font-medium"
//                     >
//                       <option value="placed">Placed</option>
//                       <option value="processing">Processing</option>
//                       <option value="delivered">Delivered</option>
//                       <option value="cancelled">Cancelled</option>
//                     </select>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;


import React, { useEffect } from "react";
import { fetchAdminOrders, updateAdminOrderStatus } from "../../store/order-slice";
import { useDispatch, useSelector } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchAdminOrders());
  }, [dispatch]);

  const handleStatusChange = (orderId, newStatus) => {
    dispatch(
      updateAdminOrderStatus({
        orderId,
        orderStatus: newStatus,
      })
    );
  };

  if (loading) {
    return (
      <div className="p-6 text-center font-bold text-indigo-400 uppercase tracking-widest animate-pulse">
        Loading Orders Console...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-400 text-center border border-red-500/20 bg-red-500/5 rounded-2xl max-w-xl mx-auto font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen text-slate-100">
      {/* Title Header with Subtitle matching Header Panel */}
      <div className="mb-6">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">
          Orders <span className="text-indigo-400">Panel</span>
        </h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-1">
          Realtime Transaction & Logistics Log
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-16 rounded-[2.2rem] border border-white/5 bg-[#0f172a] text-slate-500 font-bold uppercase tracking-wider">
          No Orders Found In Matrix
        </div>
      ) : (
        /* Dark Theme Main Dashboard Table Wrapper */
        <div className="overflow-hidden rounded-[2.2rem] border border-white/5 bg-[#0f172a] shadow-2xl transition-all duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              {/* Header Matching Table Top */}
              <thead className="border-b border-white/5 bg-slate-900/60">
                <tr>
                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400">Order ID</th>
                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400">Items</th>
                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400">Customer</th>
                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400">Amount</th>
                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400">Status</th>
                  <th className="px-6 py-4 text-left text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400">Change Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {orders.map((order) => (
                  <tr 
                    key={order._id} 
                    className="group transition-colors duration-200 hover:bg-white/[0.02]"
                  >
                    {/* ORDER ID */}
                    <td className="px-6 py-5 font-mono text-xs text-slate-400 group-hover:text-white transition-colors">
                      #{order._id?.slice(-8).toUpperCase() || order._id}
                      <span className="hidden lg:inline text-slate-600 font-sans block text-[10px] mt-0.5">Full: {order._id}</span>
                    </td>

                    {/* PRODUCTS IMAGES IN DARK TILES */}
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-2 max-w-[220px]">
                        {order.items && order.items.length > 0 ? (
                          order.items.map((item, index) => (
                            <div 
                              key={item.productId || index} 
                              className="relative group/img rounded-xl border border-white/5 bg-slate-900/90 p-1 shadow-md transition-transform duration-300 hover:scale-105"
                            >
                              <img
                                src={item.image || "https://placehold.co/40x40?text=No+Img"}
                                alt={item.title}
                                className="w-10 h-10 object-contain rounded-lg transition-transform duration-300 group-hover/img:scale-110"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "https://placehold.co/40x40?text=Error";
                                }}
                              />
                              {/* Glowing Quantity Indicator */}
                              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                {item.quantity}
                              </span>
                              
                              {/* Tooltip Popup on Image Hover */}
                              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/img:block border border-white/10 bg-slate-950 text-slate-200 text-[10px] font-bold rounded-lg py-1.5 px-3 whitespace-nowrap z-30 shadow-2xl backdrop-blur-md">
                                <span className="text-indigo-400">{item.title}</span>
                                <span className="text-slate-500 mx-1">|</span> 
                                <span className="text-purple-400">Rs. {item.price}</span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <span className="text-[10px] font-bold uppercase text-slate-600">No Items Logged</span>
                        )}
                      </div>
                    </td>

                    {/* CUSTOMER PROFILE DETAIL */}
                    <td className="px-6 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{order.customerName}</span>
                        <span className="text-[10px] text-slate-500 font-mono mt-0.5">{order.email}</span>
                      </div>
                    </td>

                    {/* DIGITIZED TOTAL AMOUNT */}
                    <td className="px-6 py-5">
                      <div className="text-sm font-black text-indigo-300">
                        Rs. {order.totalAmount?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "0.00"}
                      </div>
                    </td>

                    {/* PREMIUM NEON BADGES FOR ORDER STATUS */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm ${
                          order.orderStatus === "placed"
                            ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 shadow-yellow-500/5"
                            : order.orderStatus === "processing"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-blue-500/5"
                            : order.orderStatus === "delivered"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-emerald-500/5"
                            : "bg-red-500/10 text-red-400 border-red-500/20 shadow-red-500/5"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse ${
                          order.orderStatus === "placed" ? "bg-yellow-400" :
                          order.orderStatus === "processing" ? "bg-blue-400" :
                          order.orderStatus === "delivered" ? "bg-emerald-400" : "bg-red-400"
                        }`} />
                        {order.orderStatus}
                      </span>
                    </td>

                    {/* MODERNIZE CHANGER SELECT OPTION */}
                    <td className="px-6 py-5">
                      <select
                        value={order.orderStatus}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="border border-white/5 bg-slate-900 px-3 py-1.5 rounded-xl text-[11px] font-bold text-slate-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer hover:border-indigo-500/30 transition-all"
                      >
                        <option value="placed" className="bg-[#0f172a] text-yellow-400">Placed</option>
                        <option value="processing" className="bg-[#0f172a] text-blue-400">Processing</option>
                        <option value="delivered" className="bg-[#0f172a] text-emerald-400">Delivered</option>
                        <option value="cancelled" className="bg-[#0f172a] text-red-400">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;