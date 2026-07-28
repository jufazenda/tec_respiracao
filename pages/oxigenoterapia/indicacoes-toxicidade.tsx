import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded'
import { SectionTitle, Divider } from '@/components/oxigenoterapia/fisiologiaTransporte'
import { ToxicidadeAccordions } from '@/components/oxigenoterapia/indicacoesToxicidade'
import { TOXICIDADE_ITEMS } from '@/data/indicacoesToxicidade'

export default function IndicacoesToxicidade() {
  return (
    <div className="min-h-screen bg-[#f0f6f7]">
      <div className="px-3.5 py-4 flex flex-col gap-3 pb-10">

        {/* ── INDICAÇÃO ── */}
        <SectionTitle>Indicação</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[13px] text-[#1a3a3c] leading-relaxed mb-3">
            <span className="font-bold">Hipoxemia aguda ou crônica.</span>
          </p>
          <div className="bg-[#e8f7ef] border-l-[3px] border-[#2e7d5a] rounded-lg px-3 py-2.5">
            <p className="text-[12px] text-[#1a4a2a] leading-relaxed">
              Não há <span className="font-bold">contraindicação absoluta</span> para oxigenoterapia — o benefício de corrigir a hipoxemia supera os riscos em qualquer faixa etária.
            </p>
          </div>
        </div>

        <Divider />

        {/* ── TOXICIDADE ── */}
        <SectionTitle>Toxicidade do O₂ — Hiperóxia</SectionTitle>

        {/* cadeia fisiopatológica */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[11px] text-[#7aacae] italic mb-3">O que acontece com excesso de O₂</p>
          <div className="flex items-center justify-between gap-1">
            {[
              { label: 'Excesso de O₂', sub: 'Hiperóxia' },
              { label: 'Radicais livres', sub: 'ERO' },
              { label: 'Lesão capilar e celular', sub: '' },
              { label: 'Estresse oxidativo', sub: '' },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center gap-1 flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <div className="bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg px-2 py-2 text-center">
                    <p className="text-[10px] font-bold text-[#1a3a3c] leading-snug">{step.label}</p>
                    {step.sub && <p className="text-[9px] text-[#7aacae] mt-0.5">{step.sub}</p>}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <ArrowForwardRounded sx={{ fontSize: 14 }} className="text-[#aac8ca] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-[#7aacae] -mt-1">Toque para ver os sintomas de cada tipo</p>

        <ToxicidadeAccordions items={TOXICIDADE_ITEMS} />

        <Divider />

        {/* ── ALERTA PRÁTICO ── */}
        <SectionTitle>Atenção Clínica</SectionTitle>

        <div className="bg-[#fff8e1] border-l-[3px] border-[#f0ad4e] rounded-lg px-3 py-2.5">
          <p className="text-[11px] font-bold text-[#7a5000] mb-1 flex items-center gap-1">
            <WarningAmberRounded sx={{ fontSize: 14 }} /> DPOC e retenção de CO₂
          </p>
          <p className="text-[11px] text-[#5a3a00] leading-relaxed">
            Em pacientes com DPOC hipercápnico, O₂ em excesso pode abolir o drive hipóxico e piorar a ventilação. Titular SpO₂ entre <span className="font-bold">88–92%</span>.
          </p>
        </div>

        <div className="bg-[#fdecea] border-l-[3px] border-[#d9534f] rounded-lg px-3 py-2.5">
          <p className="text-[11px] font-bold text-[#c0392b] mb-1">Prematuridade</p>
          <p className="text-[11px] text-[#7a1010] leading-relaxed">
            Em neonatos prematuros, hiperóxia causa <span className="font-bold">retinopatia da prematuridade</span>. Monitorar SpO₂ rigorosamente — alvo <span className="font-bold">91–95%</span>.
          </p>
        </div>

      </div>
    </div>
  )
}
