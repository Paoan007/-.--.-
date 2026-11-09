import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  function handleRegister(event) { event.preventDefault(); alert('สมัครสมาชิกจำลองสำเร็จ'); navigate('/login') }
  const fields = [['ชื่อ-นามสกุล','text','กรอกชื่อ-นามสกุล'],['รหัสนักศึกษา','text','กรอกรหัสนักศึกษา'],['อีเมล','email','กรอกอีเมล'],['เบอร์โทรศัพท์','tel','กรอกเบอร์โทรศัพท์'],['รหัสผ่าน','password','กรอกรหัสผ่าน']]
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-5">
      <form onSubmit={handleRegister} className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-center text-2xl font-bold">สมัครสมาชิก</h1>
        <p className="mb-7 text-center text-sm text-slate-500">Alumni Party 2026</p>
        {fields.map(([label,type,placeholder]) => <div key={label} className="mb-4">
          <label className="mb-2 block text-sm font-medium">{label}</label>
          <input type={type} required placeholder={placeholder} className="w-full rounded-lg border p-3 outline-none focus:border-blue-500" />
        </div>)}
        <button className="mt-2 w-full rounded-lg bg-blue-600 p-3 font-semibold text-white">สมัครสมาชิก</button>
        <p className="mt-6 text-center text-sm text-slate-500">มีบัญชีแล้ว? <Link to="/login" className="text-blue-600">เข้าสู่ระบบ</Link></p>
      </form>
    </div>
  )
}