export type SubTipo = {
  nome: string
  fluxo: string
  fio2: string
  detalhe?: string
}

export type DispositivoBaixoFluxo = {
  id: string
  nome: string
  fluxo?: string
  fio2?: string
  regra?: string
  subtipos?: SubTipo[]
  vantagens: string[]
  desvantagens: string[]
  alerta?: {
    tipo: 'cuidado' | 'atencao'
    texto: string
  }
}
