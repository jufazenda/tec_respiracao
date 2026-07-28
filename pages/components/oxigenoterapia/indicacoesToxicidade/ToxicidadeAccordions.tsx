import { useState } from 'react'
import type { ToxicidadeItem } from '@/Types/indicacoesToxicidade'

const COR_MAP = {
  red:    { bg: 'bg-[#fdecea]', border: 'border-[#d9534f]', text: 'text-[#c0392b]', chip: 'bg-[#fdecea] text-[#c0392b]', dot: 'bg-[#d9534f]' },
  orange: { bg: 'bg-[#fff6e5]', border: 'border-[#f0ad4e]', text: 'text-[#8a6000]', chip: 'bg-[#fff3cd] text-[#8a6000]', dot: 'bg-[#f0ad4e]' },
  blue:   { bg: 'bg-[#eef4ff]', border: 'border-[#4a80c4]', text: 'text-[#1a3060]', chip: 'bg-[#e0f0ff] text-[#1a5faa]', dot: 'bg-[#4a80c4]' },
}

function AccordionItem({ item }: { item: ToxicidadeItem }) {
  const [open, setOpen] = useState(false)
  const c = COR_MAP[item.cor]

  return (
    <div className={`rounded-xl border-l-[3px] ${c.border} ${open ? c.bg : 'bg-white'} shadow-sm overflow-hidden transition-colors`}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 px-4 py-3.5"
      >
        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
        <div className="flex-1 text-left">
          <span className={`text-[13px] font-bold ${c.text}`}>{item.titulo}</span>
          <span className="text-[11px] text-[#888] ml-2">{item.subtitulo}</span>
        </div>
        <span className="text-[#bbb] text-[18px] font-bold">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {item.sintomas.map(s => (
              <span key={s} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${c.chip}`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function ToxicidadeAccordions({ items }: { items: ToxicidadeItem[] }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map(item => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  )
}
