import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { users } from '../data/users'

export default function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin(event) {
    event.preventDefault()
    setError('')

    // รองรับทั้งการกรอก user และ user@demo.com
    const email = `${username.trim().split('@')[0]}@demo.com`

    // ค้นหาบัญชีจาก Mock Data
    const foundUser = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    )

    // ตรวจสอบบัญชีและรหัสผ่าน (ใช้ studentId เป็นรหัสผ่านชั่วคราว)
    if (!foundUser || password !== foundUser.studentId) {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      return
    }

    // กำหนดหน้าตาม Role
    const roleRoutes = {
      user: '/user',
      superadmin: '/admin',
      eventadmin: '/event',
      storeadmin: '/store',
    }

    // บันทึกข้อมูลผู้ใช้ที่เข้าสู่ระบบ
    localStorage.setItem('currentUser', JSON.stringify(foundUser))
    // แจ้ง Navbar ให้อัปเดตข้อมูลผู้ใช้
window.dispatchEvent(new Event('userLogin'))

    // ไปยังหน้าตามสิทธิ์
    navigate(roleRoutes[foundUser.role] || '/user')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-5">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm"
      >
        <h1 className="mb-2 text-center text-2xl font-bold">
          เข้าสู่ระบบ
        </h1>

        <p className="mb-7 text-center text-sm text-slate-500">
          งานเลี้ยงรุ่น 2026
        </p>

        <label className="mb-2 block text-sm font-medium">
          อีเมล
        </label>

        <div className="mb-5 flex w-full overflow-hidden rounded-lg border focus-within:border-blue-500">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="user | superadmin | tokenadmin | storeadmin"
            className="min-w-0 flex-1 p-3 outline-none"
          />

          <span className="bg-slate-100 px-3 py-3 text-slate-600">
            @demo.com
          </span>
        </div>

        <label className="mb-2 block text-sm font-medium">
          รหัสผ่าน
        </label>

        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="กรอกรหัสผ่าน"
          className="mb-3 w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        {error && (
          <p className="mb-4 text-sm text-red-500">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
        >
          เข้าสู่ระบบ
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          ยังไม่มีบัญชี?{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600"
          >
            สมัครสมาชิก
          </Link>
        </p>
      </form>
    </div>
  )
}
