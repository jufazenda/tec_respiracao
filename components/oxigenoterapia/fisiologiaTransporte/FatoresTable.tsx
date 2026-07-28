import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded'
import ArrowUpwardRounded from '@mui/icons-material/ArrowUpwardRounded'
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded'
import type { Factor } from '@/Types/fisiologiaTransporte'
import { FactorCell } from './FactorCell'

export function FatoresTable({
  factors,
  onPress,
}: {
  factors: Factor[]
  onPress: (f: Factor) => void
}) {
  const rightFactors = factors.filter(f => f.side === 'right')
  const leftFactors  = factors.filter(f => f.side === 'left')

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="bg-[#e4f4f6] px-3 py-2 text-center border-r border-[#dceef0]">
          <span className="flex items-center justify-center gap-0.5 text-[10px] font-bold text-[#2a6b70]">
            <ArrowBackRounded sx={{ fontSize: 12 }} /> ESQUERDA
          </span>
          <span className="flex items-center justify-center gap-0.5 text-[9px] text-[#1a4a4c]">
            <ArrowUpwardRounded sx={{ fontSize: 10 }} />afinidade · <ArrowDownwardRounded sx={{ fontSize: 10 }} />entrega
          </span>
        </div>
        <div className="bg-[#fdf0e4] px-3 py-2 text-center">
          <span className="flex items-center justify-center gap-0.5 text-[10px] font-bold text-[#c25e1a]">
            DIREITA <ArrowForwardRounded sx={{ fontSize: 12 }} />
          </span>
          <span className="flex items-center justify-center gap-0.5 text-[9px] text-[#8a5020]">
            <ArrowDownwardRounded sx={{ fontSize: 10 }} />afinidade · <ArrowUpwardRounded sx={{ fontSize: 10 }} />entrega
          </span>
        </div>
      </div>

      {Array.from({ length: Math.max(rightFactors.length, leftFactors.length) }).map((_, i) => (
        <div
          key={i}
          className={`grid grid-cols-2 border-t border-[#f0f0f0] ${i % 2 === 1 ? 'bg-[#fafafa]' : ''}`}
        >
          <FactorCell factor={leftFactors[i] ?? null} colorClass="text-[#2a6b70]" onPress={onPress} />
          <FactorCell factor={rightFactors[i] ?? null} colorClass="text-[#c25e1a]" onPress={onPress} borderLeft />
        </div>
      ))}
    </div>
  )
}
