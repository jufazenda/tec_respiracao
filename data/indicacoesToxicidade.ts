import type { ToxicidadeItem } from '@/Types/indicacoesToxicidade'

export const TOXICIDADE_ITEMS: ToxicidadeItem[] = [
  {
    id: 'aguda',
    titulo: 'Aguda',
    subtitulo: 'Sistema Nervoso Central (SNC)',
    sintomas: ['Cefaleia', 'Tontura', 'Irritabilidade', 'Náuseas', 'Zumbido', 'Convulsões'],
    cor: 'red',
  },
  {
    id: 'cronica',
    titulo: 'Crônica',
    subtitulo: 'Pulmões',
    sintomas: ['Tosse', 'Dor torácica', 'Dispneia', 'Atelectasia', 'Edema pulmonar'],
    cor: 'orange',
  },
  {
    id: 'ocular',
    titulo: 'Ocular',
    subtitulo: 'Olhos',
    sintomas: ['Retinopatia da prematuridade (bebês)', 'Catarata'],
    cor: 'blue',
  },
]
