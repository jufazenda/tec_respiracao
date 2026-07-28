import type { Factor } from '@/Types/fisiologiaTransporte'

export function FactorCell({
  factor,
  colorClass,
  onPress,
  borderLeft = false,
}: {
  factor: Factor | null
  colorClass: string
  onPress: (f: Factor) => void
  borderLeft?: boolean
}) {
  const border = borderLeft ? 'border-l border-[#f0f0f0]' : ''
  if (!factor)
    return (
      <div className={`min-w-0 min-h-[40px] flex items-center justify-center text-[11px] text-[#c8d4d6] ${border}`}>
        —
      </div>
    )
  return (
    <button
      onClick={() => onPress(factor)}
      className={`min-w-0 px-3 py-2.5 flex items-center justify-center text-center active:bg-[#f5f5f5] transition-colors ${border}`}
    >
      <span className={`text-[11px] font-semibold flex items-center justify-center gap-0.5 flex-wrap leading-snug ${colorClass}`}>
        {factor.label}
      </span>
    </button>
  )
}
