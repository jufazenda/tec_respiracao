import { useState } from 'react'
import Image from 'next/image'
import type { DiluitorVenturi, FaixaEtariaCNAF } from '@/Types/altoFluxo'

/* ── Venturi ── */
export function VenturiAccordion({ diluitores }: { diluitores: DiluitorVenturi[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border-l-[3px] border-primary">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 px-4 py-3.5 active:bg-[#f8fbfc] transition-colors"
      >
        <div className="flex-1 text-left">
          <p className="text-[13px] font-bold text-[#1a3a3c]">Máscara de Venturi</p>
          {!open && (
            <p className="text-[11px] text-[#7aacae] mt-0.5">FiO₂ 24–50% · dilutores codificados por cor</p>
          )}
        </div>
        <span className="text-[#bbb] text-[18px] font-bold flex-shrink-0">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 flex flex-col gap-3">
          {/* princípio */}
          <div className="bg-[#eef4ff] border-l-[3px] border-[#4a80c4] rounded-lg px-3 py-2.5">
            <p className="text-[11px] font-bold text-[#1a3060] mb-1">Princípio de Venturi</p>
            <p className="text-[11px] text-[#2a4070] leading-relaxed">
              O O₂ passa por um orifício sob pressão e <span className="font-bold">aspira ar ambiente</span> (efeito Bernoulli). Orifício maior → menos arrasto → maior FiO₂.
            </p>
          </div>

          {/* diagrama venturi */}
          <div className="bg-white rounded-xl overflow-hidden border border-[#e4f4f6]">
            <Image
              src="/images/oxigenoterapia/venturi_diagrama.png"
              alt="Diagrama da máscara de Venturi"
              width={390}
              height={200}
              className="w-full h-auto"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
            <p className="text-[10px] text-[#8aacae] text-center py-1.5 border-t border-[#f0f8f9]">
              Princípio de entranhamento de ar — Máscara de Venturi
            </p>
          </div>

          {/* dilutores */}
          <div>
            <p className="text-[10px] font-bold text-[#7aacae] uppercase tracking-wide mb-2">Dilutores por cor</p>
            <div className="flex flex-col gap-1.5">
              {diluitores.map(d => (
                <div key={d.cor} className="flex items-center gap-2.5">
                  <span
                    className="w-4 h-4 rounded-full flex-shrink-0 border border-black/10"
                    style={{ backgroundColor: d.hex }}
                  />
                  <span className="text-[12px] font-semibold text-[#1a3a3c] w-14">{d.cor}</span>
                  <span className="text-[12px] font-bold text-[#2a6b70] w-10">{d.fio2}</span>
                  <span className="text-[11px] text-[#888]">{d.fluxo}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#e8f7ef] border-l-[3px] border-[#2e7d5a] rounded-lg px-3 py-2">
            <p className="text-[11px] font-bold text-[#1a4a2a]">Vantagem principal</p>
            <p className="text-[12px] text-[#1a4a2a] mt-0.5">FiO₂ <span className="font-bold">fixa e precisa</span> — independe do padrão respiratório. Ideal para DPOC.</p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ── CNAF ── */
export function CNAFAccordion({
  faixas,
  mecanismos,
  sistemas,
}: {
  faixas: FaixaEtariaCNAF[]
  mecanismos: string[]
  sistemas: { nome: string; fluxo: string }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border-l-[3px] border-primary">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 px-4 py-3.5 active:bg-[#f8fbfc] transition-colors"
      >
        <div className="flex-1 text-left">
          <p className="text-[13px] font-bold text-[#1a3a3c]">CNAF — Cânula Nasal de Alto Fluxo</p>
          {!open && (
            <p className="text-[11px] text-[#7aacae] mt-0.5">FiO₂ 21–100% · até 60 L/min · 31–43 °C</p>
          )}
        </div>
        <span className="text-[#bbb] text-[18px] font-bold flex-shrink-0">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 flex flex-col gap-3">
          {/* specs principais */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'FiO₂', value: '21–100%' },
              { label: 'Fluxo máx.', value: '60 L/min' },
              { label: 'Temperatura', value: '31–43 °C' },
            ].map(s => (
              <div key={s.label} className="bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg p-2 text-center">
                <p className="text-[9px] text-[#7aacae] mb-0.5">{s.label}</p>
                <p className="text-[12px] font-bold text-[#1a3a3c]">{s.value}</p>
              </div>
            ))}
          </div>

          {/* fluxos por faixa */}
          <div>
            <p className="text-[10px] font-bold text-[#7aacae] uppercase tracking-wide mb-2">Fluxo por faixa etária</p>
            <div className="bg-white rounded-xl overflow-hidden border border-[#e4f4f6]">
              {faixas.map((f, i) => (
                <div key={f.faixa} className={`flex items-start gap-2 px-3 py-2.5 ${i > 0 ? 'border-t border-[#f0f0f0]' : ''}`}>
                  <span className="text-[12px] font-semibold text-[#2a6b70] w-20 flex-shrink-0">{f.faixa}</span>
                  <div>
                    <span className="text-[12px] font-bold text-[#1a3a3c]">{f.fluxo}</span>
                    {f.obs && <p className="text-[10px] text-[#888] mt-0.5">{f.obs}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* mecanismos */}
          <div>
            <p className="text-[10px] font-bold text-[#7aacae] uppercase tracking-wide mb-2">Mecanismos de ação</p>
            <ul className="flex flex-col gap-1">
              {mecanismos.map(m => (
                <li key={m} className="flex items-start gap-2 text-[12px] text-[#444]">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">·</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          {/* diagrama cnaf */}
          <div className="bg-white rounded-xl overflow-hidden border border-[#e4f4f6]">
            <Image
              src="/images/oxigenoterapia/cnaf_diagrama.png"
              alt="Diagrama da cânula nasal de alto fluxo"
              width={390}
              height={200}
              className="w-full h-auto"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
            <p className="text-[10px] text-[#8aacae] text-center py-1.5 border-t border-[#f0f8f9]">
              Circuito aquecido e umidificado — CNAF
            </p>
          </div>

          {/* sistemas comerciais */}
          <div>
            <p className="text-[10px] font-bold text-[#7aacae] uppercase tracking-wide mb-2">Sistemas comerciais</p>
            <div className="flex gap-2">
              {sistemas.map(s => (
                <div key={s.nome} className="flex-1 bg-[#f5fbfc] border border-[#c8e8ec] rounded-xl p-2.5 text-center">
                  <p className="text-[11px] font-bold text-[#1a3a3c]">{s.nome}</p>
                  <p className="text-[10px] text-[#7aacae] mt-0.5">{s.fluxo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
