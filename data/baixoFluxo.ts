import type { DispositivoBaixoFluxo } from '@/Types/baixoFluxo'

export const DISPOSITIVOS_BAIXO_FLUXO: DispositivoBaixoFluxo[] = [
  {
    id: 'canula',
    nome: 'Cânula Nasal',
    fluxo: 'até 5 L/min',
    fio2: '24–40%',
    regra: 'Cada +1 L/min ≈ +4% de FiO₂',
    vantagens: ['Baixo custo', 'Confortável', 'Favorece alimentação e fala', 'Pode usar com óculos'],
    desvantagens: ['FiO₂ variável', 'Ressecamento nasal', 'FiO₂ máxima de 40%', 'Ineficaz em respiradores orais'],
  },
  {
    id: 'mascara-simples',
    nome: 'Máscara Simples',
    fluxo: '4–10 L/min',
    fio2: '24–55%',
    vantagens: ['Baixo custo', 'Simples', 'Leve'],
    desvantagens: ['FiO₂ variável', 'Dificulta fala e alimentação', 'Reinalação de CO₂ se fluxo insuficiente'],
    alerta: {
      tipo: 'cuidado',
      texto: 'Fluxo < 4 L/min → reinalação de CO₂. Nunca usar abaixo desse valor.',
    },
  },
  {
    id: 'reservatorio',
    nome: 'Máscara com Reservatório',
    subtipos: [
      {
        nome: 'Reinalação Parcial',
        fluxo: '10–15 L/min',
        fio2: '60–80%',
        detalhe: 'Sem válvula entre máscara e bolsa — ~1/3 do ar exalado retorna à bolsa',
      },
      {
        nome: 'Não Reinalante',
        fluxo: '10–15 L/min',
        fio2: 'até 100%',
        detalhe: 'Possui 2 válvulas unidirecionais — impede completamente a reinalação',
      },
    ],
    vantagens: ['FiO₂ mais elevada que a máscara simples', 'Necessário em hipoxemia grave'],
    desvantagens: ['Desconforto com uso prolongado', 'Dificulta fala e alimentação'],
    alerta: {
      tipo: 'cuidado',
      texto: 'Nunca ocluir os orifícios laterais da máscara — impedem a saída do ar exalado.',
    },
  },
]
