
// import { HousePlug, LogOut, Menu, UserCog, ShoppingBag, Search, Sparkles } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
// import { Button } from "../ui/button";
// import { useDispatch, useSelector } from "react-redux";
// import { shoppingViewHeaderMenuItems } from "@/config";
// import { logoutUser } from "@/store/auth-slice";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";

// import { Avatar, AvatarFallback } from "../ui/avatar";

// // ---------------- Menu Items (Sage & Berry Theme) ----------------
// function MenuItems() {
//   return (
//     <nav className="flex flex-col gap-6 lg:mb-0 lg:flex-row lg:items-center lg:gap-8">
//       {shoppingViewHeaderMenuItems.map((menuItem) => (
//         <Link
//           key={menuItem.id || menuItem.label}
//           to={menuItem.path}
//           className="relative text-[12px] font-bold uppercase tracking-[0.15em] text-[#4a554a] transition-all duration-300 hover:text-[#be185d] group"
//         >
//           {menuItem.label}
//           {/* Magenta/Berry Underline to match flowers */}
//           <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#be185d] transition-all duration-500 group-hover:w-full"></span>
//         </Link>
//       ))}
//     </nav>
//   );
// }

// // ---------------- Right Side Content ----------------
// function HeaderRightContent({ user }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   return (
//     <div className="flex items-center gap-4">
//       {/* Greyish Search Bar */}
//       <div className="hidden xl:flex items-center bg-[#e5e7eb] rounded-xl px-4 py-2 border border-[#d1d5db] focus-within:bg-white focus-within:border-[#be185d]/30 transition-all">
//         <Search className="w-3.5 h-3.5 text-[#6b7280]" />
//         <input 
//           type="text" 
//           placeholder="Search collections..." 
//           className="bg-transparent border-none outline-none text-[11px] ml-2 text-[#374151] placeholder:text-[#9ca3af] w-24 focus:w-32 transition-all font-medium"
//         />
//       </div>

//       {/* Cart with Berry Glow */}
//       <Button variant="ghost" size="icon" className="relative text-[#4a554a] hover:bg-[#fce7f3] hover:text-[#be185d] rounded-xl h-9 w-9 transition-colors">
//         <ShoppingBag className="w-4 h-4 stroke-[2px]" />
//         <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#be185d] text-[9px] font-bold text-white shadow-sm border-2 border-[#f3f4f6]">
//           3
//         </span>
//       </Button>

//       {/* User Dropdown */}
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <div className="flex items-center gap-2 cursor-pointer group bg-[#f3f4f6] p-1 pr-3 rounded-xl border border-[#d1d5db] hover:border-[#be185d]/40 transition-all">
//             <Avatar className="h-7 w-7 rounded-lg overflow-hidden">
//               <AvatarFallback className="bg-[#be185d] text-white text-[10px] font-bold rounded-none">
//                 {user?.username?.[0]?.toUpperCase() || "U"}
//               </AvatarFallback>
//             </Avatar>
//             <span className="hidden md:block text-[11px] font-black text-[#374151] tracking-tight uppercase">
//               {user?.username}
//             </span>
//           </div>
//         </DropdownMenuTrigger>

//         <DropdownMenuContent align="end" className="w-52 mt-2 bg-[#f9fafb] border-[#d1d5db] rounded-xl p-2 shadow-2xl">
//           <DropdownMenuLabel className="px-3 py-2">
//              <span className="text-[9px] text-[#be185d] tracking-widest font-black uppercase">My Account</span>
//              <p className="text-xs font-bold truncate text-[#4b5563]">{user?.email}</p>
//           </DropdownMenuLabel>
//           <DropdownMenuSeparator className="bg-[#e5e7eb]" />
//           <DropdownMenuItem onClick={() => navigate('/shop/account')} className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fce7f3] text-xs font-bold text-[#4b5563] hover:text-[#be185d]">
//             <UserCog className="w-3.5 h-3.5" /> Settings
//           </DropdownMenuItem>
//           <DropdownMenuSeparator className="bg-[#e5e7eb]" />
//           <DropdownMenuItem onClick={() => dispatch(logoutUser())} className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-lg text-rose-600 hover:bg-rose-50 text-xs font-black">
//             <LogOut className="w-3.5 h-3.5" /> Secure Logout
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

// // ---------------- Main Header (Floral Aesthetic) ----------------
// function ShoppingHeader() {
//   const { isAuthenticated, user } = useSelector((state) => state.auth);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-[#f3f4f6]/95 backdrop-blur-md border-b border-[#d1d5db]">
//       <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
//         {/* Boutique Logo matching the Image Colors */}
//         <Link to="/shop/home" className="flex items-center gap-3 group shrink-0">
//           <div className="relative flex items-center justify-center h-9 w-9 bg-[#be185d] rounded-xl shadow-lg shadow-pink-200 transition-transform group-hover:scale-105">
//             <Sparkles className="h-5 w-5 text-white" />
//           </div>
//           <div className="flex flex-col leading-none">
//             <span className="text-xl font-black tracking-tighter text-[#1f2937]">
//               J<span className="text-[#be185d]">.</span>STORE
//             </span>
//             <span className="text-[8px] font-bold text-[#6b7280] tracking-[0.3em] uppercase">Boutique</span>
//           </div>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:block">
//           <MenuItems />
//         </div>

//         {/* Actions Area */}
//         <div className="flex items-center gap-2">
//           {isAuthenticated ? (
//             <HeaderRightContent user={user} />
//           ) : (
//             <Link to="/auth/login">
//               <Button className="bg-[#1f2937] hover:bg-[#be185d] text-white rounded-xl px-6 h-9 text-[10px] font-black tracking-widest transition-all uppercase shadow-md shadow-slate-200">
//                 Sign In
//               </Button>
//             </Link>
//           )}

//           {/* Mobile Menu */}
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="lg:hidden text-[#4b5563] h-9 w-9 hover:bg-[#e5e7eb]">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="bg-[#f9fafb] border-l border-[#d1d5db]">
//                <div className="mt-10">
//                   <MenuItems />
//                </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default ShoppingHeader;

import { HousePlug, LogOut, Menu, UserCog, ShoppingBag, Search, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import { logoutUser } from "@/store/auth-slice";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Avatar, AvatarFallback } from "../ui/avatar";

// ---------------- Menu Items (Dark & Berry Theme) ----------------
function MenuItems() {
  return (
    <nav className="flex flex-col gap-6 lg:mb-0 lg:flex-row lg:items-center lg:gap-8">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Link
          key={menuItem.id || menuItem.label}
          to={menuItem.path}
          className="relative text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 transition-all duration-300 hover:text-white group"
        >
          {menuItem.label}
          {/* Berry Underline matching Slider Button */}
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#be185d] transition-all duration-500 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
}

// ---------------- Right Side Content ----------------
function HeaderRightContent({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4">
      {/* Glassmorphism Search Bar */}
      <div className="hidden xl:flex items-center bg-white/5 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 focus-within:border-[#be185d]/50 transition-all">
        <Search className="w-3.5 h-3.5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search collections..." 
          className="bg-transparent border-none outline-none text-[11px] ml-2 text-white placeholder:text-gray-500 w-24 focus:w-32 transition-all font-medium"
        />
      </div>

      {/* Cart with Berry Notification */}
      <Button variant="ghost" size="icon" className="relative text-gray-300 hover:bg-white/10 hover:text-white rounded-xl h-9 w-9 transition-colors">
        <ShoppingBag className="w-4 h-4 stroke-[2px]" />
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#be185d] text-[9px] font-bold text-white shadow-lg border-2 border-[#1f2937]">
          3
        </span>
      </Button>

      {/* User Dropdown (Luxury Dark Style) */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer group bg-white/5 p-1 pr-3 rounded-xl border border-white/10 hover:border-[#be185d]/40 transition-all">
            <Avatar className="h-7 w-7 rounded-lg overflow-hidden border border-white/20">
              <AvatarFallback className="bg-[#be185d] text-white text-[10px] font-bold">
                {user?.username?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:block text-[11px] font-black text-gray-200 tracking-tight uppercase">
              {user?.username}
            </span>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-52 mt-2 bg-[#1f2937] border-white/10 rounded-xl p-2 shadow-2xl text-white">
          <DropdownMenuLabel className="px-3 py-2">
             <span className="text-[9px] text-[#be185d] tracking-widest font-black uppercase">My Account</span>
             <p className="text-xs font-bold truncate text-gray-400">{user?.email}</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-white/5" />
          <DropdownMenuItem onClick={() => navigate('/shop/account')} className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#be185d] text-xs font-bold transition-colors">
            <UserCog className="w-3.5 h-3.5" /> Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-white/5" />
          <DropdownMenuItem onClick={() => dispatch(logoutUser())} className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-lg text-rose-500 hover:bg-rose-950/30 text-xs font-black">
            <LogOut className="w-3.5 h-3.5" /> Secure Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// ---------------- Main Header (Luxury Dark Boutique) ----------------
function ShoppingHeader() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1f2937]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-2 sm:px-6 lg:px-4">
        
        {/* Boutique Logo (Matching Slider) */}
        <Link to="/shop/home" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex items-center justify-center h-9 w-9 bg-[#be185d] rounded-xl shadow-[0_0_15px_rgba(190,24,93,0.4)] transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-white">
              J<span className="text-[#be185d]">.</span>STORE
            </span>
            <span className="text-[8px] font-bold text-gray-400 tracking-[0.3em] uppercase">Boutique</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <MenuItems />
        </div>

        {/* Actions Area */}
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <HeaderRightContent user={user} />
          ) : (
            <Link to="/auth/login">
              <Button className="bg-[#be185d] hover:bg-white hover:text-[#1f2937] text-white rounded-xl px-6 h-9 text-[10px] font-black tracking-widest transition-all uppercase shadow-lg shadow-pink-950/20">
                Sign In
              </Button>
            </Link>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-gray-300 h-9 w-9 hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1f2937] border-l border-white/10 text-white">
                <div className="mt-10">
                   <MenuItems />
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;