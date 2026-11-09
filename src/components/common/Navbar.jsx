import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  const nav = useNavigate();

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  });

  // อัปเดต Navbar เมื่อ Login สำเร็จ
  useEffect(() => {
    function updateUser() {
      setUser(
        JSON.parse(localStorage.getItem("currentUser") || "null")
      );
    }

    window.addEventListener("userLogin", updateUser);

    return () => {
      window.removeEventListener("userLogin", updateUser);
    };
  }, []);

  const roleNames = {
    user: "สมาชิก",
    superadmin: "ผู้ดูแลระบบ",
    eventadmin: "ผู้ดูแลหน้างาน",
    storeadmin: "ร้านค้า",
  };

  function handleLogout() {
    localStorage.removeItem("currentUser");
    setUser(null);
    nav("/login");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">

        <Link
          to="/"
          className="flex items-center gap-2.5 font-bold text-lg"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
            <GraduationCap className="h-5 w-5" />
          </div>

          <span className="hidden sm:inline">
            งานเลี้ยงรุ่นศิษย์เก่า 2026
          </span>
        </Link>

        <nav className="flex items-center gap-3 text-sm">

          {user ? (
            <>
              <div className="hidden text-right sm:block">
                <p className="font-semibold text-slate-800">
                  {roleNames[user.role] || user.role}
                </p>

                <p className="text-xs text-slate-500">
                  {user.email}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-lg border border-red-200 px-3 py-2 text-red-600 hover:bg-red-50"
              >
                ออกจากระบบ
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn-secondary ml-2"
              >
                <LogIn className="h-4 w-4" />
                เข้าสู่ระบบ
              </Link>

              <Link
                to="/register"
                className="btn-primary"
              >
                <UserPlus className="h-4 w-4" />
                ลงทะเบียน
              </Link>
            </>
          )}

        </nav>
      </div>
    </header>
  );
}
