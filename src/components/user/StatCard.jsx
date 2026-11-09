export default function StatCard({ title, value, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="my-3 text-3xl font-bold text-blue-700">{value}</h3>
      <p className="text-xs text-slate-400">{description}</p>
    </div>
  )
}