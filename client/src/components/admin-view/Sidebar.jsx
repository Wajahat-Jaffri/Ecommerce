import {
  ShieldCheck,
  LayoutGrid,
  Package,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutGrid,
    description: "System Analytics",
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: Package,
    description: "Inventory Control",
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: CheckCircle2,
    description: "Fulfillment",
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="mt-8 flex flex-col gap-4">
      {adminSidebarMenuItems.map((menuItem) => {
        const Icon = menuItem.icon;
        const isActive = location.pathname === menuItem.path;

        return (
          <button
            key={menuItem.id}
            type="button"
            onClick={() => {
              navigate(menuItem.path);
              setOpen?.(false);
            }}
            className={`group relative flex w-full items-center gap-4 rounded-full border px-2 py-2 pr-6 transition-all duration-300 ${
              isActive
                ? "border-indigo-500/30 bg-indigo-500/10 text-white shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                : "border-transparent bg-transparent text-slate-500 hover:bg-slate-900/50 hover:text-slate-200"
            }`}
          >
            {/* Circular Icon Container */}
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                isActive
                  ? "bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20 rotate-[360deg]"
                  : "bg-slate-900 text-slate-500 group-hover:bg-slate-800 group-hover:text-indigo-400"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1 text-left">
              <p className={`text-xs font-black uppercase tracking-widest ${isActive ? "text-indigo-400" : ""}`}>
                {menuItem.label}
              </p>
              <p className="truncate text-[10px] font-medium text-slate-500 uppercase tracking-tight">
                {menuItem.description}
              </p>
            </div>
            
            {isActive && (
              <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            )}
          </button>
        );
      })}
    </nav>
  );
}

function SidebarContent({ setOpen }) {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col bg-[#0f172a] p-6 border-r border-white/5">
      {/* Brand Identity - Indigo/Purple Style */}
      <div 
        onClick={() => navigate("/admin/dashboard")}
        className="flex items-center gap-4 cursor-pointer mb-12 px-2"
      >
        <div className="h-10 w-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <span className="text-white font-black text-xl">J</span>
        </div>
        <div>
           <p className="text-lg font-black text-white tracking-tighter uppercase">
            J.<span className="text-indigo-400">Store</span>
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 to-transparent opacity-30" />
        </div>
      </div>

      <div className="flex-1">
        <p className="px-4 text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">
          Core Modules
        </p>
        <MenuItems setOpen={setOpen} />
      </div>

      {/* Modern Status Card */}
      <div className="mt-auto">
        <div className="rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md p-5 text-center">
          <div className="mx-auto h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center mb-3">
             <ShieldCheck className="h-4 w-4 text-indigo-400" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Secure Session</p>
          <p className="mt-1 text-[9px] text-slate-600 font-mono">ID: JS_ADMIN_2026</p>
        </div>
      </div>
    </div>
  );
}

function AdminSideBar({ open, setOpen }) {
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[280px] border-none bg-[#0f172a] p-0">
          <SheetHeader className="sr-only"><SheetTitle>Navigation</SheetTitle></SheetHeader>
          <SidebarContent setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      <aside className="hidden min-h-screen w-[280px] shrink-0 lg:block shadow-2xl">
        <SidebarContent setOpen={setOpen} />
      </aside>
    </Fragment>
  );
}

export default AdminSideBar;