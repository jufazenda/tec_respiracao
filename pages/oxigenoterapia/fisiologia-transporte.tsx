import ShowChartRounded from '@mui/icons-material/ShowChartRounded'
import Image from 'next/image'
import { useState } from 'react'
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded'
import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded'
import ArrowUpwardRounded from '@mui/icons-material/ArrowUpwardRounded'
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded'
import type { FactorPopup } from '@/Types/fisiologiaTransporte'
import { FACTORS } from '@/data/fisiologiaTransporte'
import {
  SectionTitle,
  Divider,
  StatBox,
  FatoresTable,
  FactorPopupSheet,
} from '@/pages/components/oxigenoterapia/fisiologiaTransporte'

export default function FisiologiaTransporte() {
  const [imgError, setImgError] = useState(false)
  const [popup, setPopup] = useState<FactorPopup>(null)

  return (
    <div className="min-h-screen bg-[#f0f6f7]">
      <div className="px-3.5 py-4 flex flex-col gap-3 pb-10">

        {/* ── TRANSPORTE ── */}
        <SectionTitle>Como o O₂ é transportado no sangue</SectionTitle>

        <div className="flex items-center gap-1">
          <StatBox value="98%" label="Ligado à hemoglobina" />
          <ChevronRightRounded className="text-primary flex-shrink-0" />
          <StatBox value="197 mL/L" small label="de O₂ por litro de sangue" />
        </div>
        <div className="flex items-center gap-1">
          <StatBox value="2%" label="Dissolvido no plasma" />
          <ChevronRightRounded className="text-primary flex-shrink-0" />
          <StatBox value="3 mL/L" small label="de O₂ por litro de sangue" />
        </div>

        <Divider />

        {/* ── CaO₂ ── */}
        <SectionTitle>Conteúdo Arterial de O₂ — CaO₂</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[11px] text-[#7aacae] font-normal italic mb-3">
            Quanto O₂ o sangue arterial carrega por decilitro
          </p>
          <div className="bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg py-3 px-4 text-center mb-3">
            <span className="text-[13px] font-bold text-[#1a3a3c] tracking-wide">
              CaO₂ = (Hb × SaO₂ × 1,34) + (PaO₂ × 0,003)
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              ['Hb', 'Hemoglobina (g/dL)'],
              ['SaO₂', 'Saturação arterial de O₂ (decimal)'],
              ['1,34', 'Capacidade de O₂ por grama de Hb (mL/g)'],
              ['PaO₂', 'Pressão parcial de O₂ no sangue arterial (mmHg)'],
              ['0,003', 'Coeficiente de solubilidade do O₂ no plasma'],
            ].map(([sym, desc]) => (
              <div key={sym} className="flex gap-2 items-baseline text-[12px]">
                <span className="font-bold text-[#2a6b70] w-16 flex-shrink-0">{sym}</span>
                <span className="text-[#555] leading-snug">{desc}</span>
              </div>
            ))}
          </div>
          <span className="inline-block mt-3 bg-[#e8f7ef] text-[#1a4a2a] text-[10px] font-bold px-3 py-1 rounded-full">
            Normal: 18–20 mL/dL
          </span>
        </div>

        <Divider />

        {/* ── DO₂ ── */}
        <SectionTitle>Oferta de O₂ aos Tecidos — DO₂</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[11px] text-[#7aacae] italic mb-3">
            Quantidade total de O₂ entregue por minuto
          </p>
          <div className="bg-[#f5fbfc] border border-[#c8e8ec] rounded-lg py-3 px-4 text-center mb-3">
            <span className="text-[13px] font-bold text-[#1a3a3c] tracking-wide">
              DO₂ = DC × CaO₂ × 10
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              ['DC', 'Débito cardíaco (L/min)'],
              ['CaO₂', 'Conteúdo arterial de O₂ (mL/dL)'],
              ['× 10', 'Converte dL → L'],
            ].map(([sym, desc]) => (
              <div key={sym} className="flex gap-2 items-baseline text-[12px]">
                <span className="font-bold text-[#2a6b70] w-16 flex-shrink-0">{sym}</span>
                <span className="text-[#555] leading-snug">{desc}</span>
              </div>
            ))}
          </div>
          <span className="inline-block mt-3 bg-[#e8f7ef] text-[#1a4a2a] text-[10px] font-bold px-3 py-1 rounded-full">
            Normal: ~1000 mL O₂/min
          </span>
        </div>

        <div className="bg-[#fff8e1] border-l-[3px] border-[#f0ad4e] rounded-lg px-3 py-2.5">
          <p className="text-[12px] text-[#5a3a00] leading-relaxed">
            <span className="block font-bold text-[#7a5000] mb-1">Por que o O₂ dissolvido importa pouco?</span>
            A 0,003 mL/mmHg/dL, mesmo com PaO₂ = 100 mmHg, o plasma dissolve apenas 0,3 mL/dL — menos de 2% do total. Por isso a hemoglobina é determinante.
          </p>
        </div>

        <Divider />

        {/* ── CURVA DE DISSOCIAÇÃO ── */}
        <SectionTitle>Curva de Dissociação da Hemoglobina</SectionTitle>

        {!imgError ? (
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/oxigenoterapia/curva_dissociacao_hb.png"
              alt="Curva de dissociação da hemoglobina"
              width={390}
              height={260}
              className="w-full h-auto"
              onError={() => setImgError(true)}
            />
            <p className="text-[10px] text-[#8aacae] text-center py-2 border-t border-[#f0f8f9]">
              Curva de dissociação da oxiemoglobina
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border-2 border-dashed border-primary shadow-sm py-7 text-center">
          <div className="text-3xl mb-2 text-primary flex justify-center">
            <ShowChartRounded sx={{ fontSize: 36 }} />
          </div>
            <p className="text-[13px] font-bold text-primary mb-1">Curva de dissociação da hemoglobina</p>
            <p className="text-[10px] text-[#aac8ca]">
              Adicione: /public/images/oxigenoterapia/curva_dissociacao_hb.png
            </p>
          </div>
        )}

        {/* DESVIOS */}
        <div className="flex gap-2">
          <div className="flex-1 bg-[#e4f4f6] rounded-xl p-3">
            <span className="flex items-center gap-1 text-[12px] font-bold text-[#2a6b70] mb-1.5">
              <ArrowBackRounded sx={{ fontSize: 14 }} /> Desvio para a Esquerda
            </span>
            <p className="text-[11px] text-[#1a3a4c] leading-snug mb-2">
              Hb <strong>segura o O₂</strong> — maior afinidade, libera menos
            </p>
            <p className="text-[10px] text-[#2a5a60] leading-snug">
              alcalose · hipotermia · CO (carboxi-Hb)
            </p>
          </div>
          <div className="flex-1 bg-[#fdf0e4] rounded-xl p-3">
            <span className="flex items-center justify-end gap-1 text-[12px] font-bold text-[#c25e1a] mb-1.5">
              Desvio para a Direita <ArrowForwardRounded sx={{ fontSize: 14 }} />
            </span>
            <p className="text-[11px] text-[#4a2810] leading-snug mb-2 text-right">
              Hb <strong>entrega mais O₂</strong> aos tecidos — menor afinidade
            </p>
            <p className="text-[10px] text-[#8a5020] leading-snug text-right">
              febre · exercício · acidose · sepse
            </p>
          </div>
        </div>

        {/* Efeito Bohr */}
        <div className="bg-[#eef4ff] border-l-[3px] border-[#4a80c4] rounded-lg px-3 py-2.5">
          <p className="text-[11px] font-bold text-[#1a3060] mb-1">Efeito Bohr</p>
          <p className="text-[11px] text-[#2a4070] leading-relaxed">
            Nos tecidos metabolicamente ativos, <ArrowUpwardRounded sx={{ fontSize: 11, verticalAlign: 'middle' }} />CO₂ e <ArrowDownwardRounded sx={{ fontSize: 11, verticalAlign: 'middle' }} />pH deslocam a curva para a direita — a Hb libera mais O₂ exatamente onde ele é mais necessário.
          </p>
        </div>

        <Divider />

        {/* ── FATORES ── */}
        <SectionTitle>Fatores que Deslocam a Curva</SectionTitle>
        <p className="text-[10px] text-[#7aacae] -mt-1">Toque em qualquer fator para saber mais</p>

        <FatoresTable factors={FACTORS} onPress={setPopup} />

        {/* 2,3-DPG */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[13px] font-bold text-[#1a3a3c] mb-1">2,3-difosfoglicerato (2,3-DPG)</p>
          <p className="text-[11px] text-[#555] leading-relaxed mb-3">
            Produzido pelos eritrócitos durante a glicólise. Principal regulador da afinidade da Hb pelo O₂ — quanto mais 2,3-DPG, maior a entrega de O₂ aos tecidos.
          </p>
          <p className="text-[10px] font-bold text-[#c25e1a] mb-1.5 flex items-center gap-0.5">
            Situações que <ArrowUpwardRounded sx={{ fontSize: 11 }} /> 2,3-DPG (desvio direita):
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {['Anemia', 'Altitude elevada', 'Exercício intenso', 'Hipoxemia crônica'].map(label => (
              <span key={label} className="bg-[#fdf0e4] text-[#7a4510] text-[10px] font-semibold px-2.5 py-1 rounded-full">
                {label}
              </span>
            ))}
          </div>
          <p className="text-[10px] font-bold text-[#2a6b70] mb-1.5 flex items-center gap-0.5">
            Situações que <ArrowDownwardRounded sx={{ fontSize: 11 }} /> 2,3-DPG (desvio esquerda):
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['Sangue estocado', 'Alcalose'].map(label => (
              <span key={label} className="bg-[#e4f4f6] text-[#1a4a4c] text-[10px] font-semibold px-2.5 py-1 rounded-full">
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* P50 */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[13px] font-bold text-[#1a3a3c] mb-0.5">P50</p>
          <p className="text-[11px] text-[#7aacae] leading-relaxed mb-3">
            Pressão de O₂ na qual 50% da Hb está saturada. Quanto maior o P50, menor a afinidade da Hb.
          </p>
          <div className="flex gap-2">
            <div className="flex-1 bg-[#e4f4f6] rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-0.5 text-[14px] font-bold text-[#2a6b70]">
                <ArrowDownwardRounded sx={{ fontSize: 16 }} /> P50
              </div>
              <div className="text-[10px] text-[#1a5a5a] mt-1 leading-snug">
                Desvio esquerda<br />
                <span className="flex items-center justify-center gap-0.5">
                  <ArrowUpwardRounded sx={{ fontSize: 10 }} />afinidade · <ArrowDownwardRounded sx={{ fontSize: 10 }} />entrega
                </span>
              </div>
            </div>
            <div className="flex-1 bg-[#f5fbfc] border border-[#dceef0] rounded-xl p-3 text-center">
              <div className="text-[16px] font-bold text-[#1a3a3c]">26–27</div>
              <div className="text-[9px] text-[#5a9ea3] font-semibold">mmHg</div>
              <div className="text-[10px] text-[#5a9ea3] mt-0.5 leading-snug">Normal<br />37°C · pH 7,40</div>
            </div>
            <div className="flex-1 bg-[#fdf0e4] rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-0.5 text-[14px] font-bold text-[#c25e1a]">
                <ArrowUpwardRounded sx={{ fontSize: 16 }} /> P50
              </div>
              <div className="text-[10px] text-[#7a4a20] mt-1 leading-snug">
                Desvio direita<br />
                <span className="flex items-center justify-center gap-0.5">
                  <ArrowDownwardRounded sx={{ fontSize: 10 }} />afinidade · <ArrowUpwardRounded sx={{ fontSize: 10 }} />entrega
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {popup && <FactorPopupSheet popup={popup} onClose={() => setPopup(null)} />}
    </div>
  )
}
