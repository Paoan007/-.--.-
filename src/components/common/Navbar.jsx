import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm md:px-12">
      <Link to="/" className="text-xl font-bold text-blue-700">ALUMNI PARTY 2026</Link>
      <div className="flex items-center gap-4">
        <Link to="/login" className="font-medium text-slate-600">เข้าสู่ระบบ</Link>
        <Link to="/register" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">สมัครสมาชิก</Link>
      </div>
    </nav>
  )
}