export default function QRTicket() {
  const dark = [0, 1, 3, 5, 7, 8, 11, 13, 16, 18, 20, 21, 23];
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">QR Ticket</h1>
      <div className="mx-auto max-w-sm rounded-xl border bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold">ALUMNI PARTY 2026</h2>
        <p className="my-2 text-sm text-slate-500">บัตรเข้างานของสมาชิก</p>
        <div className="mx-auto my-7 grid h-52 w-52 grid-cols-5 content-center justify-center gap-1 border-4 border-slate-800 bg-slate-100 p-4">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className={`h-7 w-7 ${dark.includes(i) ? "bg-black" : "bg-white"}`}
            />
          ))}
        </div>
        <p className="font-semibold">TICKET-001</p>
        <p className="mt-2 text-xs text-slate-400">
          QR นี้เป็นภาพจำลอง ไม่สามารถใช้สแกนเข้างานจริงได้
        </p>
      </div>
    </div>
  );
}
