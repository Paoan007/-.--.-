import { NavLink } from 'react-router-dom'

const menus = [
  ['/user', 'หน้าหลัก'],
  ['/user/profile', 'ข้อมูลส่วนตัว'],
  ['/user/buy-tickets', 'ซื้อบัตรเข้างาน'],
  ['/user/buy-shirts', 'ซื้อเสื้อรุ่น'],
  ['/user/cart', 'ตะกร้าสินค้า'],
  ['/user/orders', 'คำสั่งซื้อ'],
  ['/user/tickets', 'บัตรของฉัน'],
  ['/user/qr-ticket', 'QR Ticket'],
  ['/user/wallet', 'Wallet'],
  ['/user/token-history', 'ประวัติ Token'],
  ['/user/shirts', 'เสื้อของฉัน'],
]

export default function Sidebar() {
  return (
    <aside className="w-full shrink-0 border-b bg-white p-4 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <h2 className="mb-4 px-3 text-lg font-bold text-blue-700">MEMBER MENU</h2>
      <nav className="grid grid-cols-2 gap-1 md:grid-cols-1">
        {menus.map(([path, label]) => (
          <NavLink key={path} to={path} end={path === '/user'}
            className={({ isActive }) => `rounded-lg px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'}`}>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}