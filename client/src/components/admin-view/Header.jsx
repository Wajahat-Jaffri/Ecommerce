import { LayoutGrid, Bell, Power, Search, ShoppingBag, Command } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";
import { useNavigate } from "react-router-dom";


function AdminHeader({ setOpen }) {

  const dispatch = useDispatch();
function handleLogout() {
  dispatch(logoutUser());
}

const navigate = useNavigate();

function handleLogout(){
  dispatch(logoutUser()).then(()=>{
    navigate("/auth/login");
  });
}

  return (
    <header className="sticky top-0 z-30 px-4 py-3">
      <div className="border border-indigo-500/10 bg-slate-950/90 px-5 py-3 shadow-2xl backdrop-blur-xl rounded-2xl">
        <div className="flex items-center justify-between">
          
          {/* Left Section: Branding & Toggle */}
          <div className="flex items-center gap-5">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setOpen?.(true)}
              className="h-10 w-10 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-indigo-500/10 hover:text-indigo-400 lg:hidden"
            >
              <LayoutGrid className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-4">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
                <ShoppingBag className="h-5 w-5" />
                <div className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-indigo-400 opacity-75" />
              </div>

              <div className="hidden md:block">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-black uppercase tracking-tighter text-white sm:text-base">
                    J.<span className="text-indigo-400">Store</span> <span className="text-slate-500 font-light">Admin</span>
                  </h1>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                  Management Console v2.0
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/30 px-4 py-2 transition-all focus-within:border-indigo-500/50 sm:flex">
              <Search className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-[10px] font-bold text-slate-600">SEARCH CTRL+K</span>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-indigo-500" />
              </Button>

              <div className="hidden items-center gap-3 rounded-xl bg-slate-900/80 p-1.5 pr-4 border border-slate-800 sm:flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 text-[10px] font-bold text-indigo-300 border border-white/5">
                  AD
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-200 leading-none">Admin_User</span>
                  <span className="text-[9px] text-slate-500 font-mono uppercase">Verified Access</span>
                </div>
              </div>

              <Button
              onClick={handleLogout}
              className="h-10 rounded-xl bg-indigo-600 px-4 text-white shadow-lg shadow-indigo-600/20 transition-all hover:bg-red-600 hover:shadow-red-600/20 active:scale-95">
                <Power className="h-4 w-4 sm:mr-2" />
                <span className="hidden text-[11px] font-black uppercase tracking-widest sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;