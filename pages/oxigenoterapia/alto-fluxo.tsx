import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import { SectionTitle, Divider } from '@/pages/components/oxigenoterapia/fisiologiaTransporte'
import { VenturiAccordion, CNAFAccordion } from '@/pages/components/oxigenoterapia/altoFluxo'
import {
  DILUITORES_VENTURI,
  FAIXAS_CNAF,
  MECANISMOS_CNAF,
  SISTEMAS_CNAF,
} from '@/data/altoFluxo'

export default function AltoFluxo() {
  return (
    <div className="min-h-screen bg-[#f0f6f7]">
      <div className="px-3.5 py-4 flex flex-col gap-3 pb-10">

        {/* ── CONCEITO ── */}
        <SectionTitle>Dispositivos de Alto Fluxo</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[13px] text-[#1a3a3c] leading-relaxed mb-3">
            Entregam <span className="font-bold">FiO₂ fixa e precisa</span> — independem do padrão respiratório do paciente.
          </p>
          <div className="flex gap-2">
            <div className="flex-1 bg-[#e4f4f6] rounded-xl p-3 text-center">
              <p className="text-[10px] text-[#1a4a4c] mb-1">Baixo fluxo</p>
              <p className="text-[12px] font-bold text-[#c25e1a]">FiO₂ variável</p>
              <p className="text-[10px] text-[#888] mt-0.5">depende da respiração</p>
            </div>
            <div className="flex items-center text-[#aac8ca]">
              <ArrowForwardRounded sx={{ fontSize: 22 }} />
            </div>
            <div className="flex-1 bg-[#2a6b70] rounded-xl p-3 text-center">
              <p className="text-[10px] text-white/70 mb-1">Alto fluxo</p>
              <p className="text-[12px] font-bold text-white">FiO₂ fixa</p>
              <p className="text-[10px] text-white/70 mt-0.5">precisa e controlada</p>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── DISPOSITIVOS ── */}
        <SectionTitle>Dispositivos</SectionTitle>
        <p className="text-[10px] text-[#7aacae] -mt-1">Toque para ver specs e detalhes</p>

        <VenturiAccordion diluitores={DILUITORES_VENTURI} />
        <CNAFAccordion
          faixas={FAIXAS_CNAF}
          mecanismos={MECANISMOS_CNAF}
          sistemas={SISTEMAS_CNAF}
        />

        <Divider />

        {/* ── DESMAME CNAF ── */}
        <SectionTitle>Desmame e Retirada da CNAF</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
          <div className="bg-[#e8f7ef] border-l-[3px] border-[#2e7d5a] rounded-lg px-3 py-2.5">
            <p className="text-[11px] font-bold text-[#1a4a2a] mb-1">Início do desmame</p>
            <p className="text-[12px] text-[#1a4a2a] leading-relaxed">
              Quando <span className="font-bold">FiO₂ ≤ 30%</span> e <span className="font-bold">SpO₂ ≥ 92%</span>{' '}
              <ArrowForwardRounded sx={{ fontSize: 13, verticalAlign: 'middle' }} className="text-[#2e7d5a]" />{' '}
              reduzir <span className="font-bold">5 L/min a cada 30 min</span>
            </p>
          </div>

          <div className="bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg px-3 py-2.5">
            <p className="text-[11px] font-bold text-[#2a6b70] mb-2">Critérios para retirada</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Fluxo',  valor: '≤ 25 L/min' },
                { label: 'FiO₂',   valor: '≤ 30%' },
                { label: 'FR',     valor: '< 24 irpm' },
                { label: 'Tempo',  valor: '≥ 4 h estável' },
              ].map(c => (
                <div key={c.label} className="flex items-center justify-between">
                  <span className="text-[12px] text-[#555]">{c.label}</span>
                  <span className="text-[12px] font-bold text-[#2a6b70] bg-[#e4f4f6] px-2.5 py-0.5 rounded-full">
                    {c.valor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[10px] text-[#7aacae] leading-relaxed">
            Todos os critérios devem ser atingidos simultaneamente por pelo menos 4 horas.
          </p>
        </div>

      </div>
    </div>
  )
}
