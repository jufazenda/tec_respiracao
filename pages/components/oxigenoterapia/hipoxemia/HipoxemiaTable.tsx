import type { ValorHipoxemia } from '@/Types/hipoxemia'

export function HipoxemiaTable({ valores }: { valores: ValorHipoxemia[] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* header */}
      <div className="grid grid-cols-3 bg-[#e4f4f6]">
        {['Faixa etária', 'PaO₂', 'SpO₂'].map(h => (
          <div key={h} className="px-3 py-2 text-[10px] font-bold text-[#2a6b70] uppercase tracking-wide text-center">
            {h}
          </div>
        ))}
      </div>
      {/* rows */}
      {valores.map((v, i) => (
        <div
          key={v.faixa}
          className={`grid grid-cols-3 border-t border-[#f0f0f0] ${i % 2 === 1 ? 'bg-[#fafafa]' : ''}`}
        >
          <div className="px-3 py-2.5 text-[12px] font-semibold text-[#1a3a3c]">{v.faixa}</div>
          <div className="px-3 py-2.5 text-[12px] text-[#c25e1a] font-bold text-center">{v.pao2}</div>
          <div className="px-3 py-2.5 text-[12px] text-[#c25e1a] font-bold text-center">{v.spo2}</div>
        </div>
      ))}
    </div>
  )
}
