import { mockTickets } from "../../data/tickets";

export default function BuyTickets() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold">ซื้อบัตรเข้างาน</h1>
      <p className="mb-6 text-slate-500">เลือกบัตรที่ต้องการซื้อ</p>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {mockTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <div className="mb-5 flex h-36 items-center justify-center rounded-lg bg-blue-50">
              <span className="text-3xl font-bold text-blue-700">
                {ticket.name}
              </span>
            </div>
            <h2 className="text-lg font-bold">{ticket.name}</h2>
            <p className="my-2 text-sm text-slate-500">{ticket.description}</p>
            <p className="my-4 text-2xl font-bold text-blue-700">
              ฿{ticket.price.toLocaleString()}
            </p>
            <p className="mb-4 text-sm text-slate-500">
              ได้รับ {ticket.token} Token
            </p>
            <button
              onClick={() => addToCart(ticket)}
              className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
            >
              เพิ่มลงตะกร้า
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
