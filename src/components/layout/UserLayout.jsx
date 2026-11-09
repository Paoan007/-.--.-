import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../user/Sidebar'
import Footer from '../common/Footer'
import { mockUser } from '../../data/users'

export default function UserLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="flex items-center justify-between border-b bg-white px-5 py-4 md:px-8">
        <Link to="/" className="font-bold text-blue-700">เลี้ยงรุ่น 2026</Link>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-600 sm:block">{mockUser.name}</span>
          <Link to="/" className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50">ออกจากระบบ</Link>
        </div>
      </header>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <main className="min-w-0 flex-1 p-5 md:p-8"><Outlet /></main>
      </div>
      <Footer />
    </div>
  )
}