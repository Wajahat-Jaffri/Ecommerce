

import { LogOut, Menu, UserCog, ShoppingBag, Search, Sparkles } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/cart-slice";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./CartWraper"; // File name as per your folder
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

function MenuItems() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
        ? { category: [getCurrentMenuItem.id] }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(new URLSearchParams(`?category=${getCurrentMenuItem.id}`))
      : navigate(getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Label
          onClick={() => handleNavigate(menuItem)}
          className="text-[11px] font-black uppercase tracking-wider cursor-pointer hover:text-[#be185d] transition-colors"
          key={menuItem.id}
        >
          {menuItem.label}
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
      {/* ✅ Search Bar - Original Zinc Design */}
      <div className="hidden md:flex items-center relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400 group-focus-within:text-[#be185d] transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Search items..."
          className="block w-64 pl-10 pr-4 py-2 bg-[#f3f4f6] border-none rounded-xl text-xs font-medium focus:ring-2 focus:ring-[#be185d]/20 focus:bg-white transition-all outline-none"
        />
      </div>

      {/* ✅ Cart Bag */}
      <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative text-[#4a554a] hover:bg-[#fce7f3] hover:text-[#be185d] rounded-xl h-9 w-9">
            <ShoppingBag className="w-4 h-4 stroke-[2px]" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#be185d] text-[9px] font-bold text-white shadow-sm border-2 border-[#f3f4f6]">
              {cartItems?.length || 0}
            </span>
          </Button>
        </SheetTrigger>
        <UserCartWrapper setOpenCartSheet={setOpenCartSheet} />
      </Sheet>

      {/* ✅ Original User Detail Box (Zinc/Indigo Style) */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer group bg-[#f3f4f6] p-1 pr-3 rounded-xl border border-[#d1d5db] hover:border-[#be185d]/40 transition-all shadow-sm">
            <Avatar className="h-7 w-7 rounded-lg overflow-hidden border border-white">
              <AvatarFallback className="bg-[#be185d] text-white text-[10px] font-bold uppercase">
                {user?.username?.[0] || "U"}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:block text-[11px] font-black text-[#374151] uppercase tracking-tight">
              {user?.username}
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52 mt-2 bg-[#f9fafb] border-[#d1d5db] rounded-xl p-2 shadow-2xl animate-in fade-in zoom-in-95">
          <DropdownMenuLabel className="px-3 py-2">
             <span className="text-[9px] text-[#be185d] tracking-widest font-black uppercase">My Account</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e7eb]" />
          <DropdownMenuItem onClick={() => navigate('/shop/account')} className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-lg hover:bg-[#fce7f3] text-xs font-bold text-[#4b5563]">
            <UserCog className="w-3.5 h-3.5" /> Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-[#e5e7eb]" />
          <DropdownMenuItem onClick={() => dispatch(logoutUser())} className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-lg text-rose-600 hover:bg-rose-50 text-xs font-black">
            <LogOut className="w-3.5 h-3.5" /> Secure Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShoppingHeader() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f3f4f6]/95 backdrop-blur-md border-b border-[#d1d5db]">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/shop/home" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex items-center justify-center h-9 w-9 bg-[#be185d] rounded-xl shadow-lg transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-[#1f2937]">
            J<span className="text-[#be185d]">.</span>STORE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <MenuItems />
        </div>

        {/* Right Section (Search, Cart, Profile) */}
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <HeaderRightContent user={user} />
          ) : (
            <Link to="/auth/login">
              <Button className="bg-[#1f2937] hover:bg-[#be185d] text-white rounded-xl text-[10px] font-black uppercase px-6 h-9 shadow-md transition-all">
                Sign In
              </Button>
            </Link>
          )}
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden rounded-xl">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-xs bg-white">
              <div className="mt-8 flex flex-col gap-6">
                 <MenuItems />
                 <div className="border-t pt-6">
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