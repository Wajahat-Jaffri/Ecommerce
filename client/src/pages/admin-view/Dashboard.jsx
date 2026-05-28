import React from "react";
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  ArrowUpRight, 
  Activity, 
  PackageCheck 
} from "lucide-react";

const Dashboard = () => {
  // Dummy Analytics Data - Aap isko bad me api response se replace kar sakte hain
  const stats = [
    {
      id: "revenue",
      label: "Total Revenue",
      value: "Rs. 248,900",
      change: "+12.5%",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-500/10"
    },
    {
      id: "orders",
      label: "Fulfillment Log",
      value: "1,420 Items",
      change: "+8.2%",
      icon: ShoppingBag,
      color: "from-indigo-500 to-purple-500",
      shadow: "shadow-indigo-500/10"
    },
    {
      id: "customers",
      label: "Active Nodes",
      value: "840 Users",
      change: "+24.1%",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      shadow: "shadow-blue-500/10"
    },
    {
      id: "conversion",
      label: "Sales Vector",
      value: "4.82%",
      change: "+4.3%",
      icon: TrendingUp,
      color: "from-pink-500 to-rose-500",
      shadow: "shadow-pink-500/10"
    },
  ];

  const recentActivities = [
    { id: 1, user: "Emanuel Dibbert", action: "placed a new order", time: "2 mins ago", amount: "Rs. 4,500" },
    { id: 2, user: "Admin_User", action: "updated product inventory", time: "15 mins ago", amount: null },
    { id: 3, user: "Zahid Khan", action: "registered new node access", time: "1 hour ago", amount: null },
    { id: 4, user: "Amna Bilal", action: "completed delivery transfer", time: "3 hours ago", amount: "Rs. 12,300" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen text-slate-100">
      
      {/* Title Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase tracking-tight text-white">
          System <span className="text-indigo-400">Analytics</span>
        </h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-1">
          Core Operations & Matrix Telemetry
        </p>
      </div>

      {/* 4 Columns Top Analytics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.id}
              className={`group relative overflow-hidden rounded-[2.2rem] border border-white/5 bg-[#0f172a] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/30 ${stat.shadow}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-indigo-400/80 transition-colors">
                    {stat.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white tracking-tight">
                    {stat.value}
                  </h3>
                </div>
                
                {/* Glowing Linear Gradient Icon Box */}
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr ${stat.color} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              {/* Vector Status Pill */}
              <div className="mt-4 flex items-center gap-1.5">
                <span className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 text-[9px] font-black text-indigo-400">
                  {stat.change}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600">vs last cycle</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid: Data Visualization & Activity Log */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        
        {/* Left Side: Analytical Graphic Box Structure */}
        <div className="lg:col-span-2 rounded-[2.2rem] border border-white/5 bg-[#0f172a] p-6 shadow-2xl flex flex-col justify-between min-h-[340px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-black uppercase tracking-wider text-white">Performance Index</h4>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Live Data Streams</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-[8px] font-black uppercase text-indigo-400">
                <Activity className="h-3 w-3 animate-pulse" /> Live Tracking
              </div>
            </div>

            {/* Custom Aesthetic Grid Vector Blocks representing a futuristic Chart Area */}
            <div className="mt-6 h-48 border border-white/5 bg-slate-950/40 rounded-2xl relative flex items-end justify-between p-4 gap-2">
              {/* Fake Bar Wave Chart Lines to perfectly balance colors */}
              <div className="w-full bg-gradient-to-t from-indigo-500/20 to-indigo-500/60 h-[40%] rounded-lg transition-all duration-500 hover:opacity-80" />
              <div className="w-full bg-gradient-to-t from-purple-500/20 to-purple-500/60 h-[65%] rounded-lg transition-all duration-500 hover:opacity-80" />
              <div className="w-full bg-gradient-to-t from-indigo-500/20 to-indigo-500/60 h-[50%] rounded-lg transition-all duration-500 hover:opacity-80" />
              <div className="w-full bg-gradient-to-t from-pink-500/20 to-pink-500/60 h-[85%] rounded-lg transition-all duration-500 hover:opacity-80" />
              <div className="w-full bg-gradient-to-t from-indigo-500/20 to-indigo-500/60 h-[60%] rounded-lg transition-all duration-500 hover:opacity-80" />
              <div className="w-full bg-gradient-to-t from-purple-500/20 to-purple-500/60 h-[95%] rounded-lg transition-all duration-500 hover:opacity-80" />
              
              {/* Matrix Background Lines Overlay */}
              <div className="absolute inset-x-0 top-1/3 border-b border-white/[0.02]" />
              <div className="absolute inset-x-0 top-2/3 border-b border-white/[0.02]" />
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-4">
            <span>Core: Active</span>
            <span>Sync: 100%</span>
          </div>
        </div>

        {/* Right Side: Operations Log Terminal Feed */}
        <div className="rounded-[2.2rem] border border-white/5 bg-[#0f172a] p-6 shadow-2xl flex flex-col h-full justify-between">
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-white mb-1">Activity Feed</h4>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-4">Realtime Ops Execution</p>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex items-start justify-between gap-3 border-b border-white/[0.03] pb-3 last:border-none last:pb-0 group/feed"
                >
                  <div className="flex gap-2.5">
                    {/* Small Cyber Dot indicator */}
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] group-hover/feed:scale-125 transition-transform" />
                    <div>
                      <p className="text-xs text-slate-300 group-hover/feed:text-white transition-colors">
                        <span className="font-bold text-slate-100">{activity.user}</span> {activity.action}
                      </p>
                      <span className="text-[9px] text-slate-500 font-mono block mt-0.5">{activity.time}</span>
                    </div>
                  </div>

                  {/* Profit Vector Highlight if applicable */}
                  {activity.amount && (
                    <span className="text-[10px] font-black text-emerald-400 shrink-0 font-mono">
                      {activity.amount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-6 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black uppercase tracking-[0.15em] text-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-md flex items-center justify-center gap-1">
            Audit Full System Logs <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;