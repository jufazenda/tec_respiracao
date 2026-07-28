import { useState } from 'react'
import type { CausaItem } from '@/Types/hipoxemia'

function CausaRow({ item, accent }: { item: CausaItem; accent: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(v => !v)}
      className="w-full text-left px-4 py-3 border-b border-[#f0f0f0] last:border-0 active:bg-[#f8f8f8] transition-colors"
    >
      <div className="flex items-center justify-between gap-2">
        <span className={`text-[13px] font-semibold ${accent}`}>{item.label}</span>
        {item.detail && (
          <span className="text-[#aac8ca] text-[16px] flex-shrink-0">{open ? '−' : '+'}</span>
        )}
      </div>
      {open && item.detail && (
        <p className="text-[12px] text-[#555] leading-relaxed mt-1.5">{item.detail}</p>
      )}
    </button>
  )
}

export function CausasTabBar({
  respiratorias,
  naoRespiratorias,
}: {
  respiratorias: CausaItem[]
  naoRespiratorias: CausaItem[]
}) {
  const [tab, setTab] = useState<'resp' | 'nresp'>('resp')

  const items = tab === 'resp' ? respiratorias : naoRespiratorias
  const accent = tab === 'resp' ? 'text-[#2a6b70]' : 'text-[#7a4510]'

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* tabs */}
      <div className="grid grid-cols-2">
        <button
          onClick={() => setTab('resp')}
          className={`py-2.5 text-[11px] font-bold border-b-2 transition-colors ${
            tab === 'resp'
              ? 'text-[#2a6b70] border-[#2a6b70] bg-[#f5fbfc]'
              : 'text-[#aaa] border-transparent'
          }`}
        >
          Respiratórias
        </button>
        <button
          onClick={() => setTab('nresp')}
          className={`py-2.5 text-[11px] font-bold border-b-2 transition-colors ${
            tab === 'nresp'
              ? 'text-[#c25e1a] border-[#c25e1a] bg-[#fdf7f2]'
              : 'text-[#aaa] border-transparent'
          }`}
        >
          Não Respiratórias
        </button>
      </div>

      {/* lista */}
      <div>
        {items.map(item => (
          <CausaRow key={item.label} item={item} accent={accent} />
        ))}
      </div>
    </div>
  )
}
