

// import { LogOut, Menu, UserCog, ShoppingBag, Search, Sparkles } from "lucide-react";
// import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
// import { Button } from "../ui/button";
// import { useDispatch, useSelector } from "react-redux";
// // Import ko aap rehne de sakte hain, niche logic filter kar diya hai
// import { useEffect, useState } from "react";
// import { fetchCartItems } from "@/store/cart-slice";
// import { logoutUser } from "@/store/auth-slice";
// import UserCartWrapper from "./CartWraper"; 
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
// import { Avatar, AvatarFallback } from "../ui/avatar";
// import { Label } from "../ui/label";

// // --- Custom Menu Items (Sirf 4 Pages) ---
// const customMenuItems = [
//   { id: "home", label: "Home", path: "/shop/home" },
//   { id: "about", label: "About", path: "/shop/about" },
//   { id: "products", label: "Products", path: "/shop/listing" },
//   { id: "contact", label: "Contact Us", path: "/shop/contact" },
// ];

// function MenuItems() {
//   const navigate = useNavigate();
//   const [searchParams, setSearchParams] = useSearchParams();

//   function handleNavigate(getCurrentMenuItem) {
//     sessionStorage.removeItem("filters");
    
//     // Agar Products pe ja rahe hain toh listing dikhayega
//     const currentFilter =
//       getCurrentMenuItem.id === "products"
//         ? null 
//         : null;

//     sessionStorage.setItem("filters", JSON.stringify(currentFilter));
//     navigate(getCurrentMenuItem.path);
//   }

//   return (
//     <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-8 lg:flex-row">
//       {customMenuItems.map((menuItem) => (
//         <Label
//           onClick={() => handleNavigate(menuItem)}
//           className="text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer hover:text-[#be185d] transition-all duration-300 relative group"
//           key={menuItem.id}
//         >
//           {menuItem.label}
//           <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#be185d] transition-all duration-300 group-hover:w-full"></span>
//         </Label>
//       ))}
//     </nav>
//   );
// }

// // ... HeaderRightContent same rahega (Search, Cart, User Profile)
// function HeaderRightContent({ user }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [openCartSheet, setOpenCartSheet] = useState(false);
//   const { cartItems } = useSelector((state) => state.cart);

//   useEffect(() => {
//     if (user?.id || user?._id) {
//       dispatch(fetchCartItems(user?.id || user?._id));
//     }
//   }, [dispatch, user]);

//   return (
//     <div className="flex items-center gap-4">
//       {/* ✅ Search Bar - Same Design */}
//       <div className="hidden md:flex items-center relative group">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <Search className="h-4 w-4 text-gray-400 group-focus-within:text-[#be185d] transition-colors" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search items..."
//           className="block w-56 pl-10 pr-4 py-2 bg-[#e5e7eb]/50 border-none rounded-xl text-xs font-bold focus:ring-2 focus:ring-[#be185d]/20 focus:bg-white transition-all outline-none"
//         />
//       </div>

//       {/* ✅ Cart Bag */}
//       <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
//         <SheetTrigger asChild>
//           <Button variant="ghost" size="icon" className="relative text-[#4a554a] hover:bg-[#fce7f3] hover:text-[#be185d] rounded-xl h-10 w-10 transition-all">
//             <ShoppingBag className="w-5 h-5 stroke-[2px]" />
//             <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#be185d] text-[8px] font-black text-white shadow-sm border-2 border-[#f3f4f6]">
//               {cartItems?.length || 0}
//             </span>
//           </Button>
//         </SheetTrigger>
//         <UserCartWrapper setOpenCartSheet={setOpenCartSheet} />
//       </Sheet>

//       {/* ✅ User Detail Box */}
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <div className="flex items-center gap-2 cursor-pointer group bg-white/50 backdrop-blur-sm p-1 pr-3 rounded-xl border border-gray-200 hover:border-[#be185d]/40 transition-all shadow-sm">
//             <Avatar className="h-8 w-8 rounded-lg overflow-hidden border border-white shadow-sm">
//               <AvatarFallback className="bg-[#be185d] text-white text-[10px] font-bold uppercase">
//                 {user?.username?.[0] || "U"}
//               </AvatarFallback>
//             </Avatar>
//             <span className="hidden md:block text-[11px] font-black text-[#1f2937] uppercase tracking-tight">
//               {user?.username}
//             </span>
//           </div>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-52 mt-2 bg-white border-gray-100 rounded-2xl p-2 shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95">
//           <DropdownMenuLabel className="px-3 py-2">
//              <span className="text-[9px] text-[#be185d] tracking-widest font-black uppercase">Member Portal</span>
//           </DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={() => navigate('/shop/account')} className="flex items-center gap-2 px-3 py-3 cursor-pointer rounded-xl hover:bg-[#fce7f3] text-xs font-bold text-[#4b5563] transition-colors">
//             <UserCog className="w-4 h-4" /> Account Settings
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={() => dispatch(logoutUser())} className="flex items-center gap-2 px-3 py-3 cursor-pointer rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-black transition-colors">
//             <LogOut className="w-4 h-4" /> Secure Logout
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

// function ShoppingHeader() {
//   const { isAuthenticated, user } = useSelector((state) => state.auth);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100">
//       <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* LOGO */}
//         <Link to="/shop/home" className="flex items-center gap-3 group shrink-0">
//           <div className="relative flex items-center justify-center h-10 w-10 bg-[#be185d] rounded-2xl shadow-lg shadow-pink-200 transition-transform group-hover:scale-110 duration-500">
//             <Sparkles className="h-5 w-5 text-white animate-pulse" />
//           </div>
//           <span className="text-2xl font-black tracking-tighter text-[#1f2937]">
//             J<span className="text-[#be185d]">.</span>STORE
//           </span>
//         </Link>

//         {/* Desktop Navigation (Sirf 4 Items) */}
//         <div className="hidden lg:block">
//           <MenuItems />
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-2">
//           {isAuthenticated ? (
//             <HeaderRightContent user={user} />
//           ) : (
//             <Link to="/auth/login">
//               <Button className="bg-[#1f2937] hover:bg-[#be185d] text-white rounded-2xl text-[10px] font-black uppercase px-8 h-10 shadow-lg shadow-gray-200 transition-all duration-500 hover:-translate-y-0.5">
//                 Sign In
//               </Button>
//             </Link>
//           )}
          
//           {/* Mobile Menu */}
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="lg:hidden rounded-xl hover:bg-gray-100">
//                 <Menu className="h-6 w-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-full max-w-[300px] bg-white p-8">
//               <div className="mt-12 flex flex-col gap-8">
//                  <MenuItems />
//                  <div className="border-t border-gray-100 pt-8">
//                     {isAuthenticated ? <HeaderRightContent user={user} /> : null}
//                  </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default ShoppingHeader;


import { LogOut, Menu, UserCog, ShoppingBag, Search, Sparkles } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/cart-slice";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./CartWraper"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Label } from "../ui/label";

// --- Custom Menu Items (Added Services & Contact Us) ---
const customMenuItems = [
  { id: "home", label: "Home", path: "/shop/home" },
  { id: "about", label: "About", path: "/shop/about" },
  { id: "services", label: "Services", path: "/shop/services" }, // Naya Add Hua
  { id: "products", label: "Products", path: "/shop/listing" },
  { id: "contact", label: "Contact Us", path: "/shop/contact" }, // Naya Add Hua
];

function MenuItems() {
  const navigate = useNavigate();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    
    // Logic as per your previous setup
    const currentFilter = null; 

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-8 lg:flex-row">
      {customMenuItems.map((menuItem) => (
        <Label
          onClick={() => handleNavigate(menuItem)}
          className="text-[11px] font-black uppercase tracking-[0.2em] cursor-pointer hover:text-[#be185d] transition-all duration-300 relative group"
          key={menuItem.id}
        >
          {menuItem.label}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#be185d] transition-all duration-300 group-hover:w-full"></span>
        </Label>
      ))}
    </nav>
  );
}

function HeaderRightContent({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (user?.id || user?._id) {
      dispatch(fetchCartItems(user?.id || user?._id));
    }
  }, [dispatch, user]);

  return (
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400 group-focus-within:text-[#be185d] transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search items..."
          className="block w-56 pl-10 pr-4 py-2 bg-[#e5e7eb]/50 border-none rounded-xl text-xs font-bold focus:ring-2 focus:ring-[#be185d]/20 focus:bg-white transition-all outline-none"
        />
      </div>

      <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative text-[#4a554a] hover:bg-[#fce7f3] hover:text-[#be185d] rounded-xl h-10 w-10 transition-all">
            <ShoppingBag className="w-5 h-5 stroke-[2px]" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#be185d] text-[8px] font-black text-white shadow-sm border-2 border-[#f3f4f6]">
              {cartItems?.length || 0}
            </span>
          </Button>
        </SheetTrigger>
        <UserCartWrapper setOpenCartSheet={setOpenCartSheet} />
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer group bg-white/50 backdrop-blur-sm p-1 pr-3 rounded-xl border border-gray-200 hover:border-[#be185d]/40 transition-all shadow-sm">
            <Avatar className="h-8 w-8 rounded-lg overflow-hidden border border-white shadow-sm">
              <AvatarFallback className="bg-[#be185d] text-white text-[10px] font-bold uppercase">
                {user?.username?.[0] || "U"}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:block text-[11px] font-black text-[#1f2937] uppercase tracking-tight">
              {user?.username}
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52 mt-2 bg-white border-gray-100 rounded-2xl p-2 shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95">
          <DropdownMenuLabel className="px-3 py-2">
             <span className="text-[9px] text-[#be185d] tracking-widest font-black uppercase">Member Portal</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/shop/account')} className="flex items-center gap-2 px-3 py-3 cursor-pointer rounded-xl hover:bg-[#fce7f3] text-xs font-bold text-[#4b5563] transition-colors">
            <UserCog className="w-4 h-4" /> Account Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => dispatch(logoutUser())} className="flex items-center gap-2 px-3 py-3 cursor-pointer rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-black transition-colors">
            <LogOut className="w-4 h-4" /> Secure Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/shop/home" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex items-center justify-center h-10 w-10 bg-[#be185d] rounded-2xl shadow-lg shadow-pink-200 transition-transform group-hover:scale-110 duration-500">
            <Sparkles className="h-5 w-5 text-white animate-pulse" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#1f2937]">
            J<span className="text-[#be185d]">.</span>STORE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <MenuItems />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <HeaderRightContent user={user} />
          ) : (
            <Link to="/auth/login">
              <Button className="bg-[#1f2937] hover:bg-[#be185d] text-white rounded-2xl text-[10px] font-black uppercase px-8 h-10 shadow-lg shadow-gray-200 transition-all duration-500 hover:-translate-y-0.5">
                Sign In
              </Button>
            </Link>
          )}
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden rounded-xl hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[300px] bg-white p-8">
              <div className="mt-12 flex flex-col gap-8">
                 <MenuItems />
                 <div className="border-t border-gray-100 pt-8">
                    {isAuthenticated ? <HeaderRightContent user={user} /> : null}
                 </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;