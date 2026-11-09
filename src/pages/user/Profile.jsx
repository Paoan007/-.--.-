import { mockUser } from '../../data/users'

export default function Profile() {
  const fields = [['ชื่อ-นามสกุล',mockUser.name],['อีเมล',mockUser.email],['รหัสนักศึกษา',mockUser.studentId],['สาขา',mockUser.department],['เบอร์โทรศัพท์',mockUser.phone],['ที่อยู่',mockUser.address]]
  return <div><h1 className="mb-6 text-2xl font-bold">ข้อมูลส่วนตัว</h1>
    <div className="max-w-3xl rounded-xl border bg-white p-6">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700">{mockUser.name.charAt(0)}</div>
      <div className="grid gap-5 sm:grid-cols-2">{fields.map(([label,value]) => <div key={label}><p className="mb-2 text-sm text-slate-500">{label}</p><div className="rounded-lg bg-slate-50 p-3">{value}</div></div>)}</div>
    </div>
  </div>
}