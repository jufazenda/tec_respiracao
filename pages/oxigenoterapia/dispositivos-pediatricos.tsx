import AirRounded from '@mui/icons-material/AirRounded'
import ChildCareRounded from '@mui/icons-material/ChildCareRounded'
import MonitorHeartRounded from '@mui/icons-material/MonitorHeartRounded'
import { SectionTitle, Divider } from '@/pages/components/oxigenoterapia/fisiologiaTransporte'
import { DispositivoPediatricoCard } from '@/pages/components/oxigenoterapia/pediatrico'
import { DISPOSITIVOS_PEDIATRICOS } from '@/data/pediatrico'

const ICONE_MAP: Record<string, React.ReactNode> = {
  tenda:      <AirRounded sx={{ fontSize: 16 }} className="text-primary" />,
  halo:       <ChildCareRounded sx={{ fontSize: 16 }} className="text-primary" />,
  incubadora: <MonitorHeartRounded sx={{ fontSize: 16 }} className="text-primary" />,
}

export default function DispositivosPediatricos() {
  return (
    <div className="min-h-screen bg-[#f0f6f7]">
      <div className="px-3.5 py-4 flex flex-col gap-3 pb-10">

        {/* ── INTRO ── */}
        <SectionTitle>Dispositivos Pediátricos</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <p className="text-[13px] text-[#1a3a3c] leading-relaxed">
            Dispositivos adaptados para <span className="font-bold">recém-nascidos, lactentes e crianças</span> — priorizando conforto, controle de FiO₂ e acesso ao paciente.
          </p>
        </div>

        <Divider />

        {/* ── DISPOSITIVOS ── */}
        <SectionTitle>Dispositivos</SectionTitle>
        <p className="text-[10px] text-[#7aacae] -mt-1">Toque para ver specs e detalhes</p>

        {DISPOSITIVOS_PEDIATRICOS.map(d => (
          <DispositivoPediatricoCard key={d.id} d={d} />
        ))}

        <Divider />

        {/* ── RESUMO ── */}
        <SectionTitle>Resumo Comparativo</SectionTitle>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 bg-[#e4f4f6]">
            {['Dispositivo', 'Público', 'Fluxo', 'FiO₂'].map(h => (
              <div key={h} className="px-2 py-2 text-[9px] font-bold text-[#2a6b70] uppercase tracking-wide text-center">
                {h}
              </div>
            ))}
          </div>
          {DISPOSITIVOS_PEDIATRICOS.map((d, i) => (
            <div
              key={d.id}
              className={`grid grid-cols-4 border-t border-[#f0f0f0] ${i % 2 === 1 ? 'bg-[#fafafa]' : ''}`}
            >
              <div className="px-2 py-2.5 text-[10px] font-semibold text-[#1a3a3c] flex items-center gap-1">
                {ICONE_MAP[d.id] ?? null} {d.nome.split(' ')[0]}
              </div>
              <div className="px-2 py-2.5 text-[10px] text-[#555] text-center">{d.publico}</div>
              <div className="px-2 py-2.5 text-[10px] text-[#555] text-center">{d.fluxo}</div>
              <div className="px-2 py-2.5 text-[10px] font-bold text-[#2a6b70] text-center">{d.fio2}</div>
            </div>
          ))}
        </div>

        <div className="bg-[#fdecea] border-l-[3px] border-[#d9534f] rounded-lg px-3 py-2.5">
          <p className="text-[11px] font-bold text-[#c0392b] mb-1">Hiperóxia em prematuros</p>
          <p className="text-[11px] text-[#7a1010] leading-relaxed">
            Evitar SpO₂ {'>'} 95% em prematuros — risco de <span className="font-bold">retinopatia da prematuridade</span>. Alvo: <span className="font-bold">91–95%</span>.
          </p>
        </div>

      </div>
    </div>
  )
}
