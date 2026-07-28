import type { DiluitorVenturi, FaixaEtariaCNAF } from '@/Types/altoFluxo'

export const DILUITORES_VENTURI: DiluitorVenturi[] = [
  { cor: 'Azul',     hex: '#4a90d9', fio2: '24%', fluxo: '2 L/min' },
  { cor: 'Amarelo',  hex: '#f0c040', fio2: '28%', fluxo: '4 L/min' },
  { cor: 'Branco',   hex: '#c8d8da', fio2: '31%', fluxo: '6 L/min' },
  { cor: 'Verde',    hex: '#4aaa60', fio2: '35%', fluxo: '8 L/min' },
  { cor: 'Rosa',     hex: '#e080a0', fio2: '40%', fluxo: '10 L/min' },
  { cor: 'Laranja',  hex: '#f08040', fio2: '50%', fluxo: '15 L/min' },
]

export const FAIXAS_CNAF: FaixaEtariaCNAF[] = [
  { faixa: 'Neonatal',  fluxo: '1–8 L/min' },
  { faixa: 'Pediatria', fluxo: '2 L/min/kg' },
  { faixa: 'Adulto',    fluxo: 'até 60 L/min', obs: 'Iniciar 30–40 L/min, ↑ 5 L/min/min' },
]

export const MECANISMOS_CNAF: string[] = [
  'FiO₂ estável e precisa (21–100%)',
  'Pressão positiva nas vias aéreas',
  'Redução do espaço morto anatômico',
  'Redução do trabalho respiratório',
  'Aquecimento e umidificação do gás',
]

export const SISTEMAS_CNAF = [
  { nome: 'Fisher & Paykel Airvo 2', fluxo: 'até 60 L/min' },
  { nome: 'Vapotherm',               fluxo: 'até 40 L/min' },
]
