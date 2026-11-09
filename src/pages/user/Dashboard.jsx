import { Link } from 'react-router-dom'
import { mockUser } from '../../data/users'
import StatCard from '../../components/user/StatCard'

export default function Dashboard() {
  const shortcuts = [
    ['/user/profile','ข้อมูลส่วนตัว'], ['/user/buy-tickets','ซื้อบัตรเข้างาน'],
    ['/user/buy-shirts','ซื้อเสื้อรุ่น'], ['/user/orders','คำสั่งซื้อ'],
    ['/user/tickets','บัตรของฉัน'], ['/user/wallet','Wallet ของฉัน'],
  ]
  return (
    <div>
      <div className="mb-8"><h1 className="text-2xl font-bold">สวัสดี, {mockUser.name}</h1><p className="mt-2 text-slate-500">ยินดีต้อนรับเข้าสู่ระบบสมาชิก</p></div>
      <div className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Token คงเหลือ" value={mockUser.token} description="Token สำหรับใช้ในระบบ" />
        <StatCard title="คำสั่งซื้อทั้งหมด" value={mockUser.totalOrders} description="รายการคำสั่งซื้อของคุณ" />
        <StatCard title="บัตรที่ซื้อแล้ว" value={mockUser.totalTickets} description="จำนวนบัตรเข้างาน" />
      </div>
      <section className="rounded-xl border bg-white p-6">
        <h2 className="mb-5 text-lg font-bold">เมนูใช้งานด่วน</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shortcuts.map(([path,label]) => <Link key={path} to={path} className="rounded-lg border p-5 font-medium transition hover:border-blue-500 hover:bg-blue-50">{label}<span className="float-right text-blue-600">→</span></Link>)}
        </div>
      </section>
    </div>
  )
}