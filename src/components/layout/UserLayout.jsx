import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "../user/Sidebar";
import Footer from "../common/Footer";
import { mockUser } from "../../data/users";

const ROLE_LABELS = { user: "สมาชิก" };

export default function UserLayout() {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  const user = mockUser;
  const role = user.role || "user";

  const handleLogout = () => nav("/login");

  return (
    <div className="flex min-h-screen bg-slate-50/80">
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200/80 bg-white/85 backdrop-blur-md px-4 md:px-8 py-3">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-500">
              งานเลี้ยงรุ่นศิษย์เก่า 2026
            </span>
          </div>

          {/* Right Header User Info */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 pl-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-tr from-brand-600 to-indigo-500 text-white text-xs font-bold shadow-sm">
                {user.name?.charAt(0) || "U"}
              </div>
              <div className="text-left hidden md:block">
                <p className="text-xs font-semibold text-slate-800 leading-tight">
                  {user.name}
                </p>
                <p className="text-[10px] text-slate-400 leading-tight font-mono">
                  {user.email}
                </p>
              </div>
              <span className="rounded-full bg-brand-50 border border-brand-200/60 px-2 py-0.5 text-[10px] font-bold text-brand-700 hidden sm:inline-block">
                {ROLE_LABELS[role]}
              </span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto animate-fade-in">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
