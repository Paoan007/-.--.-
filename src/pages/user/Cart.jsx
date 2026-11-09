import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  // const [cart,setCart] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'))
  // const total = cart.reduce((sum,item) => sum + item.price * item.quantity, 0)
  // function removeItem(index) {
  //   const updated = cart.filter((_,i) => i !== index)
  //   setCart(updated); localStorage.setItem('cart',JSON.stringify(updated))
  // }
  // function checkout() {
  //   if (!cart.length) return
  //   const orders = JSON.parse(localStorage.getItem('orders') || '[]')
  //   const newOrder = { id: `ORD-${Date.now()}`, date: new Date().toISOString().slice(0,10), items: cart.map(item => `${item.name} x${item.quantity}`).join(', '), total, status: 'รอดำเนินการ' }
  //   localStorage.setItem('orders',JSON.stringify([...orders,newOrder]))
  //   localStorage.removeItem('cart'); setCart([])
  //   alert('สร้างคำสั่งซื้อจำลองเรียบร้อยแล้ว')
  // }
  // return <div><h1 className="mb-6 text-2xl font-bold">ตะกร้าสินค้า</h1><div className="rounded-xl border bg-white p-6">
  //   {!cart.length ? <p className="py-8 text-center text-slate-500">ยังไม่มีสินค้าในตะกร้า</p> : <>
  //     {cart.map((item,index) => <div key={`${item.id}-${index}`} className="flex items-center justify-between gap-4 border-b py-4"><div><h3 className="font-semibold">{item.name}</h3><p className="text-sm text-slate-500">฿{item.price.toLocaleString()} × {item.quantity}</p></div><button onClick={() => removeItem(index)} className="text-sm text-red-600">ลบ</button></div>)}
  //     <div className="mt-6 flex justify-between text-lg font-bold"><span>ราคารวม</span><span>฿{total.toLocaleString()}</span></div>
  //     <button onClick={checkout} className="mt-6 w-full rounded-lg bg-blue-600 p-3 text-white">ยืนยันคำสั่งซื้อ (จำลอง)</button>
  //   </>}
  //   <Link to="/user/buy-tickets" className="mt-5 inline-block text-sm text-blue-600">← กลับไปเลือกซื้อสินค้า</Link>
  // </div></div>
}