export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold text-primary uppercase tracking-[1.2px] pt-1">
      {children}
    </p>
  )
}

export function Divider() {
  return <div className="h-px bg-[#ddeef0]" />
}
