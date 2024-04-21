import supabase from './supabase'

//Arquivo de funções do Supabase

/* export const getApostas = async (): Promise<> => {
  const { data, error } = await supabase
    .from('Apostas')
    .select('*')
    .order('nome')

  if (error) {
    console.error('Erro ao buscar dados:', error.message)
    return
  } else {
    return data
  }
}

export const saveApostas = async (
  nome: string,
  cpf: string,
  num1: number,
  num2: number,
  num3: number,
  num4: number,
  num5: number
) => {
  const { data: ultimaAposta, error } = await supabase
    .from('Apostas')
    .select('id')
    .order('id', { ascending: false })
    .limit(1)

  if (error) {
    console.error('Erro ao buscar a última aposta:', error.message)
    return
  }

  const lastId = ultimaAposta.length > 0 ? ultimaAposta[0].id : 1000
  const nextId = lastId + 1

  const response = await supabase.from('Apostas').insert([
    {
      id: nextId,
      nome: nome,
      cpf: cpf,
      numeros_apostados: [num1, num2, num3, num4, num5],
    },
  ])

  return response
}
 */