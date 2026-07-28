import type { CausaItem, ValorHipoxemia } from '@/Types/hipoxemia'

export const CAUSAS_RESPIRATORIAS: CausaItem[] = [
  { label: 'Hipoventilação', detail: 'Redução da ventilação alveolar → acúmulo de CO₂ e queda de O₂' },
  { label: 'Distúrbio V/Q', detail: 'Desequilíbrio entre ventilação e perfusão — causa mais comum de hipoxemia' },
  { label: 'Shunt', detail: 'Sangue venoso passa para a circulação arterial sem ser oxigenado' },
  { label: 'Distúrbio de difusão', detail: 'Espessamento da membrana alvéolo-capilar dificulta a troca de gases' },
]

export const CAUSAS_NAO_RESPIRATORIAS: CausaItem[] = [
  { label: 'Baixo débito cardíaco', detail: 'Redução da oferta de O₂ aos tecidos mesmo com boa saturação' },
  { label: 'Choque', detail: 'Perfusão tecidual inadequada → hipóxia celular' },
  { label: 'Anemia', detail: 'Queda de hemoglobina reduz o transporte de O₂' },
  { label: 'Altitude elevada', detail: 'PO₂ atmosférica reduzida → menor gradiente para difusão' },
  { label: 'Envenenamento', detail: 'Ex: CO bloqueia Hb; cianeto bloqueia utilização celular do O₂' },
]

export const FATORES_SPO2: string[] = [
  'Extremidades frias',
  'Mau posicionamento do sensor',
  'Esmalte de unhas',
  'Anemia',
  'Carboxi-Hb (CO)',
  'Movimento do paciente',
]

export const VALORES_HIPOXEMIA: ValorHipoxemia[] = [
  { faixa: 'Neonatos',            pao2: '< 50 mmHg', spo2: '< 88%' },
  { faixa: 'Lactentes / Crianças', pao2: '< 60 mmHg', spo2: '< 90%' },
  { faixa: 'Adultos',             pao2: '< 60 mmHg', spo2: '< 90%' },
]
