import { useState } from 'react'
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded'
import AirRounded from '@mui/icons-material/AirRounded'
import ChildCareRounded from '@mui/icons-material/ChildCareRounded'
import MonitorHeartRounded from '@mui/icons-material/MonitorHeartRounded'
import type { DispositivoPediatrico } from '@/Types/pediatrico'

const ICONE_MAP: Record<string, React.ReactNode> = {
  tenda:      <AirRounded sx={{ fontSize: 22 }} className="text-primary flex-shrink-0" />,
  halo:       <ChildCareRounded sx={{ fontSize: 22 }} className="text-primary flex-shrink-0" />,
  incubadora: <MonitorHeartRounded sx={{ fontSize: 22 }} className="text-primary flex-shrink-0" />,
}

export function DispositivoPediatricoCard({ d }: { d: DispositivoPediatrico }) {
  const [open, setOpen] = useState(false)
  const icone = ICONE_MAP[d.id] ?? <AirRounded sx={{ fontSize: 22 }} className="text-primary flex-shrink-0" />

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border-l-[3px] border-primary">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 px-4 py-3.5 active:bg-[#f8fbfc] transition-colors"
      >
        {icone}
        <div className="flex-1 text-left">
          <p className="text-[13px] font-bold text-[#1a3a3c]">{d.nome}</p>
          <p className="text-[11px] text-[#7aacae] mt-0.5">{d.publico}</p>
        </div>
        <span className="text-[#bbb] text-[18px] font-bold flex-shrink-0">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 flex flex-col gap-3">
          {/* specs */}
          <div className="flex gap-2">
            <div className="flex-1 bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg p-2.5 text-center">
              <p className="text-[10px] text-[#7aacae] mb-0.5">Fluxo</p>
              <p className="text-[12px] font-bold text-[#1a3a3c]">{d.fluxo}</p>
            </div>
            <div className="flex-1 bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg p-2.5 text-center">
              <p className="text-[10px] text-[#7aacae] mb-0.5">FiO₂</p>
              <p className="text-[12px] font-bold text-[#2a6b70]">{d.fio2}</p>
            </div>
          </div>

          {/* detalhe */}
          {d.detalhe && (
            <p className="text-[12px] text-[#555] leading-relaxed">{d.detalhe}</p>
          )}

          {/* obs de atenção */}
          {d.obs && (
            <div className="bg-[#fff8e1] border-l-[3px] border-[#f0ad4e] rounded-lg px-3 py-2">
              <p className="text-[11px] font-bold text-[#7a5000] mb-0.5 flex items-center gap-1">
                <WarningAmberRounded sx={{ fontSize: 13 }} /> Atenção
              </p>
              <p className="text-[11px] text-[#5a3a00]">{d.obs}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
