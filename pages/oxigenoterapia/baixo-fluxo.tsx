import Image from 'next/image'
import { SectionTitle, Divider } from '@/pages/components/oxigenoterapia/fisiologiaTransporte'
import { DispositivosBaixoFluxoList } from '@/pages/components/oxigenoterapia/baixoFluxo'
import { DISPOSITIVOS_BAIXO_FLUXO } from '@/data/baixoFluxo'

export default function BaixoFluxo() {
  return (
    <div className="min-h-screen bg-[#f0f6f7]">
      <div className="px-3.5 py-4 flex flex-col gap-3 pb-10">

        {/* ── CONCEITO ── */}
        <SectionTitle>Dispositivos de Baixo Fluxo</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[13px] text-[#1a3a3c] leading-relaxed mb-3">
            Entregam <span className="font-bold">FiO₂ variável</span> — a concentração de O₂ recebida pelo paciente depende do seu{' '}
            <span className="font-bold text-[#2a6b70]">padrão respiratório</span>.
          </p>
          <div className="flex gap-2">
            <div className="flex-1 bg-[#fdf0e4] rounded-xl p-3 text-center">
              <p className="text-[10px] text-[#8a5020] mb-1">FR alta / Volume maior</p>
              <p className="text-[12px] font-bold text-[#c25e1a]">FiO₂ cai</p>
              <p className="text-[10px] text-[#8a5020] mt-0.5">mais ar ambiente dilui o O₂</p>
            </div>
            <div className="flex-1 bg-[#e4f4f6] rounded-xl p-3 text-center">
              <p className="text-[10px] text-[#1a4a4c] mb-1">FR baixa / Volume menor</p>
              <p className="text-[12px] font-bold text-[#2a6b70]">FiO₂ sobe</p>
              <p className="text-[10px] text-[#1a4a4c] mt-0.5">menos ar ambiente dilui o O₂</p>
            </div>
          </div>
        </div>

        {/* diagrama dispositivos baixo fluxo */}
        <div className="bg-white rounded-xl overflow-hidden border border-[#e4f4f6]">
          <Image
            src="/images/oxigenoterapia/dispositivos_baixo_fluxo.png"
            alt="Dispositivos de baixo fluxo"
            width={390}
            height={220}
            className="w-full h-auto"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
          <p className="text-[10px] text-[#8aacae] text-center py-1.5 border-t border-[#f0f8f9]">
            Cânula nasal · Máscara simples · Máscara com reservatório
          </p>
        </div>

        <Divider />

        {/* ── DISPOSITIVOS ── */}
        <SectionTitle>Dispositivos</SectionTitle>
        <p className="text-[10px] text-[#7aacae] -mt-1">Toque para ver specs, vantagens e alertas</p>

        <DispositivosBaixoFluxoList dispositivos={DISPOSITIVOS_BAIXO_FLUXO} />

        <Divider />

        {/* ── TABELA RESUMO ── */}
        <SectionTitle>Resumo Comparativo</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 bg-[#e4f4f6]">
            {['Dispositivo', 'Fluxo', 'FiO₂'].map(h => (
              <div key={h} className="px-3 py-2 text-[10px] font-bold text-[#2a6b70] uppercase tracking-wide text-center">
                {h}
              </div>
            ))}
          </div>
          {[
            ['Cânula Nasal',         'até 5 L/min',   '24–40%'],
            ['Máscara Simples',      '4–10 L/min',    '24–55%'],
            ['M. Reservatório (PR)', '10–15 L/min',   '60–80%'],
            ['M. Reservatório (NR)', '10–15 L/min',   'até 100%'],
          ].map(([nome, fluxo, fio2], i) => (
            <div key={nome} className={`grid grid-cols-3 border-t border-[#f0f0f0] ${i % 2 === 1 ? 'bg-[#fafafa]' : ''}`}>
              <div className="px-3 py-2.5 text-[11px] font-semibold text-[#1a3a3c]">{nome}</div>
              <div className="px-3 py-2.5 text-[11px] text-[#555] text-center">{fluxo}</div>
              <div className="px-3 py-2.5 text-[11px] font-bold text-[#2a6b70] text-center">{fio2}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#eef4ff] border-l-[3px] border-[#4a80c4] rounded-lg px-3 py-2.5">
          <p className="text-[11px] text-[#2a4070] leading-relaxed">
            <span className="font-bold">PR</span> = Reinalação Parcial · <span className="font-bold">NR</span> = Não Reinalante
          </p>
        </div>

      </div>
    </div>
  )
}
