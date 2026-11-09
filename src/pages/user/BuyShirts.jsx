import { mockShirts } from '../../data/shirts'

function addToCart(shirt) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  cart.push({ ...shirt, type: 'shirt', quantity: 1 })
  localStorage.setItem('cart', JSON.stringify(cart))
  alert(`เพิ่ม ${shirt.name} ลงตะกร้าแล้ว`)
}

export default function BuyShirts() {
  return <div><h1 className="mb-2 text-2xl font-bold">ซื้อเสื้อรุ่น</h1><p className="mb-6 text-slate-500">เลือกแบบเสื้อรุ่น 2026</p>
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{mockShirts.map(shirt => <div key={shirt.id} className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex h-48 items-center justify-center rounded-lg bg-slate-100"><div className={`h-28 w-28 rounded-t-3xl ${shirt.color === 'กรม' ? 'bg-slate-800' : 'bg-sky-400'}`} /></div>
      <h2 className="font-bold">{shirt.name}</h2><p className="my-2 text-sm text-slate-500">สี{shirt.color} · ไซซ์ {shirt.sizes.join(', ')}</p>
      <p className="my-4 text-2xl font-bold text-blue-700">฿{shirt.price.toLocaleString()}</p>
      <button onClick={() => addToCart(shirt)} className="w-full rounded-lg bg-blue-600 p-3 text-white">เพิ่มลงตะกร้า</button>
    </div>)}</div>
  </div>
}