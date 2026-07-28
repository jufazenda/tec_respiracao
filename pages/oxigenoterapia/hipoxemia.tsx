import Image from 'next/image'
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded'
import { SectionTitle, Divider } from '@/pages/components/oxigenoterapia/fisiologiaTransporte'
import { CausasTabBar, HipoxemiaTable } from '@/pages/components/oxigenoterapia/hipoxemia'
import {
  CAUSAS_RESPIRATORIAS,
  CAUSAS_NAO_RESPIRATORIAS,
  FATORES_SPO2,
  VALORES_HIPOXEMIA,
} from '@/data/hipoxemia'

export default function Hipoxemia() {
  return (
    <div className="min-h-screen bg-[#f0f6f7]">
      <div className="px-3.5 py-4 flex flex-col gap-3 pb-10">

        {/* ── DEFINIÇÃO ── */}
        <SectionTitle>Definição</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
          <div>
            <p className="text-[10px] font-bold text-[#7aacae] uppercase tracking-wide mb-1">Oxigenoterapia</p>
            <p className="text-[13px] text-[#1a3a3c] leading-relaxed">
              Administração terapêutica de O₂ em concentrações{' '}
              <span className="font-bold">maiores que a do ar ambiente</span>.
            </p>
          </div>
          <div className="h-px bg-[#f0f4f5]" />
          <div>
            <p className="text-[10px] font-bold text-[#7aacae] uppercase tracking-wide mb-1">Objetivos</p>
            <ul className="flex flex-col gap-1">
              {[
                'Corrigir a hipoxemia',
                'Manter a oxigenação dos tecidos',
                'Diminuir o trabalho cardiorrespiratório',
              ].map(obj => (
                <li key={obj} className="flex items-start gap-2 text-[12px] text-[#444]">
                  <span className="text-primary font-bold mt-0.5 flex-shrink-0">·</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider />

        {/* ── O QUE É HIPOXEMIA ── */}
        <SectionTitle>O que é Hipoxemia</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[13px] text-[#1a3a3c] leading-relaxed mb-3">
            <span className="font-bold">Hipoxemia:</span> queda da{' '}
            <span className="font-bold text-[#c25e1a]">PaO₂ no sangue arterial</span> → leva à{' '}
            <span className="font-bold text-[#c25e1a]">hipóxia tecidual</span> (pouco O₂ nos tecidos).
          </p>
          <div className="flex items-center gap-2 bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg p-3">
            <div className="flex-1 text-center">
              <div className="text-[11px] text-[#7aacae] mb-0.5">PaO₂ baixa</div>
              <div className="text-[13px] font-bold text-[#c25e1a]">Hipoxemia</div>
            </div>
            <ArrowForwardRounded sx={{ fontSize: 20 }} className="text-[#aac8ca] flex-shrink-0" />
            <div className="flex-1 text-center">
              <div className="text-[11px] text-[#7aacae] mb-0.5">O₂ insuficiente</div>
              <div className="text-[13px] font-bold text-[#c25e1a]">Hipóxia Tecidual</div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── CAUSAS ── */}
        <SectionTitle>Causas da Hipoxemia</SectionTitle>
        <p className="text-[10px] text-[#7aacae] -mt-1">Toque para expandir cada causa</p>

        {/* diagrama de mecanismos */}
        <div className="bg-white rounded-xl overflow-hidden border border-[#e4f4f6]">
          <Image
            src="/images/oxigenoterapia/causas_hipoxemia.png"
            alt="Mecanismos de hipoxemia"
            width={390}
            height={220}
            className="w-full h-auto"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
          <p className="text-[10px] text-[#8aacae] text-center py-1.5 border-t border-[#f0f8f9]">
            Mecanismos de hipoxemia — V/Q, shunt, hipoventilação, difusão
          </p>
        </div>

        <CausasTabBar
          respiratorias={CAUSAS_RESPIRATORIAS}
          naoRespiratorias={CAUSAS_NAO_RESPIRATORIAS}
        />

        <Divider />

        {/* ── MONITORAMENTO ── */}
        <SectionTitle>Como Monitorar</SectionTitle>

        <div className="flex gap-2">
          <div className="flex-1 bg-white rounded-xl shadow-sm p-3">
            <p className="text-[10px] font-bold text-[#2a6b70] uppercase tracking-wide mb-1.5">SpO₂</p>
            <p className="text-[12px] font-bold text-[#1a3a3c] mb-1">Oximetria de pulso</p>
            <span className="inline-block bg-[#e8f7ef] text-[#1a4a2a] text-[10px] font-bold px-2.5 py-1 rounded-full">
              Não invasivo
            </span>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow-sm p-3">
            <p className="text-[10px] font-bold text-[#c25e1a] uppercase tracking-wide mb-1.5">PaO₂</p>
            <p className="text-[12px] font-bold text-[#1a3a3c] mb-1">Gasometria arterial</p>
            <span className="inline-block bg-[#fdf0e4] text-[#7a4510] text-[10px] font-bold px-2.5 py-1 rounded-full">
              Invasivo
            </span>
          </div>
        </div>

        {/* bloco ATENÇÃO */}
        <div className="bg-[#fff8e1] border-l-[3px] border-[#f0ad4e] rounded-lg px-3 py-2.5">
          <p className="text-[11px] font-bold text-[#7a5000] mb-1.5 flex items-center gap-1">
            <WarningAmberRounded sx={{ fontSize: 14 }} /> Fatores que interferem na SpO₂
          </p>
          <div className="flex flex-wrap gap-1.5">
            {FATORES_SPO2.map(f => (
              <span
                key={f}
                className="bg-[#fff3e0] text-[#7a4000] text-[10px] font-semibold px-2.5 py-1 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── VALORES ── */}
        <SectionTitle>Valores que Definem Hipoxemia</SectionTitle>

        <HipoxemiaTable valores={VALORES_HIPOXEMIA} />

        {/* nota */}
        <div className="bg-[#eef4ff] border-l-[3px] border-[#4a80c4] rounded-lg px-3 py-2.5">
          <p className="text-[11px] text-[#2a4070] leading-relaxed">
            <span className="font-bold">Lembrete:</span> SpO₂ e PaO₂ avaliam lados distintos do transporte de O₂. Sempre interpretar em conjunto com o contexto clínico — uma SpO₂ normal não exclui hipóxia tecidual.
          </p>
        </div>

      </div>
    </div>
  )
}
