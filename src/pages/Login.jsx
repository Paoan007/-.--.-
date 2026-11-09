import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  function handleLogin(event) { event.preventDefault(); navigate('/user') }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-5">
      <form onSubmit={handleLogin} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-center text-2xl font-bold">เข้าสู่ระบบ</h1>
        <p className="mb-7 text-center text-sm text-slate-500">Alumni Party 2026</p>
        <label className="mb-2 block text-sm font-medium">อีเมล</label>
        <input type="email" required placeholder="user@demo.com" className="mb-5 w-full rounded-lg border p-3 outline-none focus:border-blue-500" />
        <label className="mb-2 block text-sm font-medium">รหัสผ่าน</label>
        <input type="password" required placeholder="กรอกรหัสผ่าน" className="mb-6 w-full rounded-lg border p-3 outline-none focus:border-blue-500" />
        <button className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700">เข้าสู่ระบบ</button>
        <p className="mt-6 text-center text-sm text-slate-500">ยังไม่มีบัญชี? <Link to="/register" className="font-medium text-blue-600">สมัครสมาชิก</Link></p>
      </form>
    </div>
  )
}