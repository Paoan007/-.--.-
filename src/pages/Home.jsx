import { Link } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function Home() {
  const steps = [
    ['01', 'สมัครสมาชิก', 'สร้างบัญชีเพื่อเข้าใช้งานระบบ'],
    ['02', 'เลือกซื้อสินค้า', 'เลือกซื้อบัตรเข้างานและเสื้อรุ่น'],
    ['03', 'เข้าร่วมงาน', 'แสดง QR Ticket เพื่อเข้างาน'],
  ]
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="flex min-h-[520px] flex-col items-center justify-center bg-blue-700 px-6 text-center text-white">
        <p className="mb-4 rounded-full bg-blue-600 px-4 py-2 text-sm">ALUMNI REUNION 2026</p>
        <h1 className="mb-5 text-4xl font-bold md:text-6xl">กลับมาพบกันอีกครั้ง</h1>
        <p className="mb-8 max-w-2xl text-lg text-blue-100">เชื่อมต่อความทรงจำ สร้างมิตรภาพ และร่วมฉลองไปด้วยกัน ในงานเลี้ยงรุ่นศิษย์เก่า 2026</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/register" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700">สมัครสมาชิก</Link>
          <Link to="/login" className="rounded-lg border border-white px-6 py-3 font-semibold text-white">เข้าสู่ระบบ</Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-3 text-center text-3xl font-bold">ร่วมเป็นส่วนหนึ่งของงาน</h2>
        <p className="mb-10 text-center text-slate-500">จัดการทุกอย่างได้ง่าย ๆ ผ่านระบบสมาชิก</p>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(([number, title, detail]) => <div key={number} className="rounded-xl border bg-white p-6">
            <p className="mb-4 text-3xl font-bold text-blue-600">{number}</p>
            <h3 className="mb-2 font-bold">{title}</h3><p className="text-sm text-slate-500">{detail}</p>
          </div>)}
        </div>
      </section>
      <section className="bg-white px-6 py-12 text-center">
        <h2 className="mb-3 text-2xl font-bold">พร้อมกลับมาพบกันหรือยัง?</h2>
        <Link to="/register" className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white">เริ่มต้นใช้งาน</Link>
      </section>
      <Footer />
    </div>
  )
}