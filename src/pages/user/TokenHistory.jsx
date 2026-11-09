const history = [
  { id: 1, detail: 'ได้รับ Token จากการสมัครสมาชิก', amount: 40, date: '2026-11-01' },
  { id: 2, detail: 'ใช้ Token ซื้อสินค้า', amount: -10, date: '2026-11-02' },
]

export default function TokenHistory() {
  return <div><h1 className="mb-6 text-2xl font-bold">ประวัติ Token</h1><div className="rounded-xl border bg-white">{history.map(item => <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 border-b p-5 last:border-0"><div><p className="font-medium">{item.detail}</p><p className="mt-1 text-sm text-slate-400">{item.date}</p></div><p className={`font-bold ${item.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>{item.amount > 0 ? '+' : ''}{item.amount} Token</p></div>)}</div></div>
}