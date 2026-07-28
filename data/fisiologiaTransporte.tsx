import ArrowDownwardRounded from '@mui/icons-material/ArrowDownwardRounded'
import ArrowUpwardRounded from '@mui/icons-material/ArrowUpwardRounded'
import type { Factor } from '@/Types/fisiologiaTransporte'

export const FACTORS: Factor[] = [
  {
    label: <><ArrowUpwardRounded sx={{ fontSize: 11 }} /> Temperatura</>,
    side: 'right',
    title: 'Temperatura elevada → desvio à direita',
    body: 'Febre, exercício físico e sepse aumentam a temperatura corporal. Em temperaturas mais altas, as ligações entre O₂ e hemoglobina enfraquecem, favorecendo a entrega de O₂ nos tecidos mais ativos.',
    examples: ['Febre', 'Exercício intenso', 'Sepse'],
  },
  {
    label: <><ArrowDownwardRounded sx={{ fontSize: 11 }} /> Temperatura</>,
    side: 'left',
    title: 'Temperatura reduzida → desvio à esquerda',
    body: 'Na hipotermia, a hemoglobina prende o O₂ com mais força e o libera com dificuldade — mesmo que a SpO₂ pareça normal. É um risco em cirurgias com hipotermia induzida ou em exposição ao frio.',
    examples: ['Hipotermia', 'Cirurgia cardíaca com circulação extracorpórea'],
  },
  {
    label: <><ArrowUpwardRounded sx={{ fontSize: 11 }} /> CO₂</>,
    side: 'right',
    title: 'CO₂ elevado → desvio à direita (Efeito Bohr)',
    body: 'Tecidos em metabolismo ativo produzem mais CO₂, que reduz o pH local. Isso reduz a afinidade da Hb pelo O₂ exatamente onde ele é mais necessário — é o efeito Bohr em ação.',
    examples: ['Músculos durante exercício', 'Tecidos em hipóxia'],
  },
  {
    label: <><ArrowDownwardRounded sx={{ fontSize: 11 }} /> CO₂</>,
    side: 'left',
    title: 'CO₂ reduzido → desvio à esquerda',
    body: 'Hiperventilação elimina CO₂ em excesso, elevando o pH. Com menos CO₂ e pH mais alto, a hemoglobina "segura" o O₂ com mais força — podendo causar hipóxia tecidual mesmo com SpO₂ normal.',
    examples: ['Hiperventilação', 'Alcalose respiratória'],
  },
  {
    label: <><ArrowDownwardRounded sx={{ fontSize: 11 }} /> pH (acidose)</>,
    side: 'right',
    title: 'Acidose → desvio à direita',
    body: 'O H⁺ em excesso compete com o O₂ pelos sítios de ligação da hemoglobina, reduzindo sua afinidade. Resultado: a Hb entrega mais O₂ aos tecidos, mesmo que isso comprometa a saturação arterial.',
    examples: ['Acidose láctica', 'Acidose respiratória', 'Cetoacidose'],
  },
  {
    label: <><ArrowUpwardRounded sx={{ fontSize: 11 }} /> pH (alcalose)</>,
    side: 'left',
    title: 'Alcalose → desvio à esquerda',
    body: 'Com menos H⁺, a hemoglobina tem maior afinidade pelo O₂ e o libera com dificuldade para os tecidos. O sangue pode estar bem saturado, mas a entrega tecidual fica comprometida.',
    examples: ['Alcalose metabólica (vômitos)', 'Alcalose respiratória (hiperventilação)'],
  },
  {
    label: <><ArrowUpwardRounded sx={{ fontSize: 11 }} /> 2,3-DPG</>,
    side: 'right',
    title: '2,3-DPG elevado → desvio à direita',
    body: 'O 2,3-DPG se liga à hemoglobina e reduz sua afinidade pelo O₂. É produzido em maior quantidade como adaptação à hipóxia crônica — uma forma do organismo garantir mais entrega de O₂ em situações adversas.',
    examples: ['Anemia crônica', 'Altitude elevada', 'Hipoxemia crônica (ex: DPOC)'],
  },
  {
    label: <><ArrowDownwardRounded sx={{ fontSize: 11 }} /> 2,3-DPG</>,
    side: 'left',
    title: '2,3-DPG reduzido → desvio à esquerda',
    body: 'Sangue estocado perde 2,3-DPG progressivamente. Sem esse modulador, a Hb prende o O₂ com mais força — problema clinicamente relevante em transfusões de sangue com mais de 1–2 semanas de armazenamento.',
    examples: ['Sangue estocado > 1–2 semanas', 'Alcalose'],
  },
  {
    label: 'Carboxi‑Hb (CO)',
    side: 'left',
    title: 'Monóxido de carbono (CO) → desvio à esquerda',
    body: 'O CO tem afinidade pela hemoglobina 240× maior que o O₂, ocupando seus sítios de ligação. Além disso, distorce a estrutura da Hb, dificultando ainda mais a liberação do pouco O₂ que resta ligado. Atenção: a oximetria de pulso convencional não detecta carboxi-Hb — lê como se fosse oxi-Hb.',
    examples: ['Intoxicação por CO (incêndios, motores)', 'Tabagismo intenso'],
  },
]
