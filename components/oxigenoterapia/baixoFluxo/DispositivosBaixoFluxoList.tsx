import { useState } from 'react'
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded'
import type { DispositivoBaixoFluxo } from '@/Types/baixoFluxo'

function AlertaBloco({ tipo, texto }: { tipo: 'cuidado' | 'atencao'; texto: string }) {
  const isC = tipo === 'cuidado'
  return (
    <div className={`border-l-[3px] rounded-lg px-3 py-2.5 mt-3 ${isC ? 'bg-[#fdecea] border-[#d9534f]' : 'bg-[#fff8e1] border-[#f0ad4e]'}`}>
      <p className={`text-[11px] font-bold mb-0.5 flex items-center gap-1 ${isC ? 'text-[#c0392b]' : 'text-[#7a5000]'}`}>
        <WarningAmberRounded sx={{ fontSize: 13 }} />
        {isC ? 'CUIDADO' : 'ATENÇÃO'}
      </p>
      <p className={`text-[11px] leading-relaxed ${isC ? 'text-[#7a1010]' : 'text-[#5a3a00]'}`}>{texto}</p>
    </div>
  )
}

function DispositivoAccordion({ d }: { d: DispositivoBaixoFluxo }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden border-l-[3px] border-primary`}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 px-4 py-3.5 active:bg-[#f8fbfc] transition-colors"
      >
        <div className="flex-1 text-left">
          <p className="text-[13px] font-bold text-[#1a3a3c]">{d.nome}</p>
          {(d.fluxo || d.subtipos) && !open && (
            <p className="text-[11px] text-[#7aacae] mt-0.5">
              {d.fluxo ? `${d.fluxo} · FiO₂ ${d.fio2}` : d.subtipos!.map(s => s.nome).join(' / ')}
            </p>
          )}
        </div>
        <span className="text-[#bbb] text-[18px] font-bold flex-shrink-0">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 flex flex-col gap-3">

          {/* specs simples */}
          {d.fluxo && (
            <div className="flex gap-2">
              <div className="flex-1 bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg p-2.5 text-center">
                <p className="text-[10px] text-[#7aacae] mb-0.5">Fluxo</p>
                <p className="text-[13px] font-bold text-[#1a3a3c]">{d.fluxo}</p>
              </div>
              <div className="flex-1 bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg p-2.5 text-center">
                <p className="text-[10px] text-[#7aacae] mb-0.5">FiO₂</p>
                <p className="text-[13px] font-bold text-[#1a3a3c]">{d.fio2}</p>
              </div>
            </div>
          )}

          {/* regra prática */}
          {d.regra && (
            <div className="bg-[#e8f7ef] border-l-[3px] border-[#2e7d5a] rounded-lg px-3 py-2">
              <p className="text-[11px] font-bold text-[#1a4a2a]">Regra prática</p>
              <p className="text-[12px] text-[#1a4a2a] mt-0.5">{d.regra}</p>
            </div>
          )}

          {/* subtipos (máscara com reservatório) */}
          {d.subtipos && (
            <div className="flex flex-col gap-2">
              {d.subtipos.map(s => (
                <div key={s.nome} className="bg-[#f5fbfc] border border-[#c8e8ec] rounded-xl p-3">
                  <p className="text-[12px] font-bold text-[#2a6b70] mb-1">{s.nome}</p>
                  <div className="flex gap-2 mb-1.5">
                    <span className="text-[10px] bg-white border border-[#dceef0] rounded-full px-2.5 py-0.5 text-[#555]">
                      {s.fluxo}
                    </span>
                    <span className="text-[10px] bg-white border border-[#dceef0] rounded-full px-2.5 py-0.5 font-bold text-[#2a6b70]">
                      FiO₂ {s.fio2}
                    </span>
                  </div>
                  {s.detalhe && <p className="text-[11px] text-[#555] leading-relaxed">{s.detalhe}</p>}
                </div>
              ))}
            </div>
          )}

          {/* vantagens / desvantagens */}
          <div className="flex gap-2">
            <div className="flex-1">
              <p className="text-[10px] font-bold text-[#2e7d5a] uppercase tracking-wide mb-1.5">Vantagens</p>
              <ul className="flex flex-col gap-1">
                {d.vantagens.map(v => (
                  <li key={v} className="flex items-start gap-1.5 text-[11px] text-[#444]">
                    <span className="text-[#2e7d5a] font-bold flex-shrink-0">+</span>{v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-px bg-[#f0f0f0]" />
            <div className="flex-1">
              <p className="text-[10px] font-bold text-[#c25e1a] uppercase tracking-wide mb-1.5">Desvantagens</p>
              <ul className="flex flex-col gap-1">
                {d.desvantagens.map(v => (
                  <li key={v} className="flex items-start gap-1.5 text-[11px] text-[#444]">
                    <span className="text-[#c25e1a] font-bold flex-shrink-0">−</span>{v}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {d.alerta && <AlertaBloco tipo={d.alerta.tipo} texto={d.alerta.texto} />}
        </div>
      )}
    </div>
  )
}

export function DispositivosBaixoFluxoList({ dispositivos }: { dispositivos: DispositivoBaixoFluxo[] }) {
  return (
    <div className="flex flex-col gap-2">
      {dispositivos.map(d => (
        <DispositivoAccordion key={d.id} d={d} />
      ))}
    </div>
  )
}
