import { Link, NavLink } from "react-router-dom";
import {
  GraduationCap,
  LayoutDashboard,
  User,
  Ticket,
  Shirt,
  BadgeCheck,
  QrCode,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";

const NAV_USER = [
  { label: "หน้าหลัก", to: "/user", icon: LayoutDashboard },
  { label: "ข้อมูลส่วนตัว", to: "/user/profile", icon: User },
  { label: "ซื้อบัตรเข้างาน", to: "/user/buy-tickets", icon: Ticket },
  { label: "ซื้อเสื้อรุ่น", to: "/user/buy-shirts", icon: Shirt },
  { label: "บัตรของฉัน", to: "/user/tickets", icon: BadgeCheck },
  { label: "QR Ticket", to: "/user/qr-ticket", icon: QrCode },
];

function SidebarLinks({ items, onClick }) {
  return (
    <div className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/user"}
            onClick={onClick}
            className={({ isActive }) =>
              `group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-linear-to-r from-brand-600 to-brand-700 text-white shadow-sm shadow-brand-500/20"
                  : item.highlight
                    ? "bg-brand-50/80 text-brand-900 border border-brand-200/80 hover:bg-brand-100 hover:text-brand-950 font-bold"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3 min-w-0">
                  <Icon
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isActive
                        ? "text-white"
                        : item.highlight
                          ? "text-brand-600 scale-110"
                          : "text-slate-400 group-hover:text-brand-600"
                    }`}
                  />
                  <span className="truncate">{item.label}</span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {item.badge && !isActive && (
                    <span className="rounded-full bg-brand-600 text-white px-2 py-0.5 text-[10px] font-bold shadow-xs">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <ChevronRight className="h-3.5 w-3.5 text-white/70 shrink-0" />
                  )}
                </div>
              </>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}

export default function Sidebar({ open, onClose, onLogout }) {
  return (
    <>
      {/* Sidebar overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-white border-r border-slate-200/80 shadow-xl lg:shadow-none transition-transform duration-300 ease-in-out lg:sticky lg:top-0 lg:h-screen lg:shrink-0 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo / Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 shrink-0">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-tr from-brand-600 to-indigo-500 text-white shadow-sm group-hover:scale-105 transition">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <span className="font-bold text-slate-800 leading-tight block">
                  งานเลี้ยงรุ่นศิษย์เก่า 2026
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  ระบบลงทะเบียน & ขายบัตร
                </span>
              </div>
            </Link>
            <button
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
            <div>
              <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                เมนูหลัก
              </div>
              <SidebarLinks items={NAV_USER} onClick={onClose} />
            </div>
          </nav>

          {/* Bottom Logout Link */}
          <div className="border-t border-slate-100 p-4 bg-slate-50/50 shrink-0">
            <button
              onClick={onLogout}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition"
            >
              <LogOut className="h-4 w-4" /> ออกจากระบบ
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
