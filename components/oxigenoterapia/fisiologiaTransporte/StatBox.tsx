export function StatBox({
  value,
  unit,
  label,
  small = false,
}: {
  value: string
  unit?: string
  label: string
  small?: boolean
}) {
  return (
    <div className="flex-1 bg-[#e4f4f6] rounded-xl p-3 text-center">
      <div className={`font-bold text-[#1a3a3c] leading-tight ${small ? 'text-[17px]' : 'text-[24px]'}`}>
        {value}
      </div>
      {unit && <div className="text-[11px] font-bold text-[#2a6b70] mt-0.5">{unit}</div>}
      <div className="text-[10px] text-[#5a9ea3] mt-1 leading-snug font-medium">{label}</div>
    </div>
  )
}
