const tickets = [
  { id: "TICKET-001", name: "บัตร 100", date: "2026-11-01" },
  { id: "TICKET-002", name: "บัตร 300", date: "2026-11-02" },
];

export default function MyTickets() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">บัตรของฉัน</h1>
      <div className="grid gap-5 md:grid-cols-2">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="rounded-xl border bg-white p-6">
            <div className="rounded-lg bg-blue-700 p-6 text-white">
              <p className="text-sm text-blue-100">ALUMNI PARTY 2026</p>
              <h2 className="my-4 text-2xl font-bold">{ticket.name}</h2>
              <p className="text-sm">หมายเลข {ticket.id}</p>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              วันที่ซื้อ: {ticket.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
