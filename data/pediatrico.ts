import type { DispositivoPediatrico } from '@/Types/pediatrico'

export const DISPOSITIVOS_PEDIATRICOS: DispositivoPediatrico[] = [
  {
    id: 'tenda',
    nome: 'Tenda de O₂',
    icone: '⛺',
    publico: 'Pediatria',
    fluxo: 'mínimo 12 L/min',
    fio2: '21–50%',
    detalhe: 'Cobre a cabeça e o tronco da criança. FiO₂ variável — depende do fluxo e de quanto a tenda fica aberta. Manter o mínimo de 12 L/min para evitar acúmulo de CO₂.',
    obs: 'Fluxo mínimo 12 L/min para lavar o CO₂',
  },
  {
    id: 'halo',
    nome: 'Halo / Capacete',
    icone: '🪖',
    publico: 'RN < 1 ano',
    fluxo: '7–15 L/min',
    fio2: 'até 100%',
    detalhe: 'Cobre apenas a cabeça do recém-nascido. Permite acesso ao corpo para procedimentos. FiO₂ precisa e elevada, com boa umidificação e aquecimento do gás.',
  },
  {
    id: 'incubadora',
    nome: 'Incubadora',
    icone: '🫧',
    publico: 'Neonatos',
    fluxo: 'conforme necessidade',
    fio2: '40–50%',
    detalhe: 'Ambiente termocontrolado. A FiO₂ é limitada pela estrutura da incubadora — aberturas frequentes reduzem a concentração de O₂. Monitorar SpO₂ continuamente.',
    obs: 'Abertura frequente reduz a FiO₂ real',
  },
]
