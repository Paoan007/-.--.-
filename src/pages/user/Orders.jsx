import { mockOrders } from '../../data/orders'

export default function Orders() {
  const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]')
  const orders = [...mockOrders,...savedOrders]
  return <div><h1 className="mb-6 text-2xl font-bold">คำสั่งซื้อของฉัน</h1><div className="overflow-x-auto rounded-xl border bg-white">
    <table className="w-full text-left text-sm"><thead className="bg-slate-100"><tr>{['เลขคำสั่งซื้อ','วันที่','สินค้า','ราคา','สถานะ'].map(x => <th key={x} className="p-4">{x}</th>)}</tr></thead>
      <tbody>{orders.map(order => <tr key={order.id} className="border-t"><td className="p-4 font-medium">{order.id}</td><td className="p-4">{order.date}</td><td className="p-4">{order.items}</td><td className="p-4">฿{order.total.toLocaleString()}</td><td className="p-4"><span className="rounded-full bg-green-100 px-3 py-1 text-green-700">{order.status}</span></td></tr>)}</tbody>
    </table>
  </div></div>
}