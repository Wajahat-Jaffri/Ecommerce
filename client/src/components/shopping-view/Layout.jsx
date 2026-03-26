// import { Outlet } from "react-router-dom";
// import ShoppingHeader from "./Header";

// function ShoppingLayout() {
//   return (
//     <div className="flex flex-col bg-white overflow-hidden">
//       {/* common header */}
//       <ShoppingHeader />

//       <main className="flex flex-col w-full">
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default ShoppingLayout;
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./Header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
      {/* Premium Sticky Header */}
      <ShoppingHeader />

      <main className="flex flex-col w-full flex-grow">
        {/* Humne yahan margin/padding adjust ki taake header se chipke nahi */}
        <div className="pt-4">
          <Outlet />
        </div>
      </main>
      
      {/* Optional: Aap yahan ek clean footer bhi add kar sakte hain */}
    </div>
  );
}

export default ShoppingLayout;