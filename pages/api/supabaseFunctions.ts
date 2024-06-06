/* import { Users } from '@/Types/Props'
import supabase from './supabase'

//Arquivo de funções do Supabase

export const getUsers = async (): Promise<Users[] | undefined> => {
  const { data, error } = await supabase
    .from('Users')
    .select('*')
    .order('name')

  if (error) {
    console.error('Erro ao buscar dados:', error.message)
    return
  } else {
    return data
  }
}

export const saveUser = async ({ name, email, password, pic }: Users) => {
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('bucket')
    .upload(`profile_pics/${pic?.name}`, pic as File)

  if (uploadError) {
    console.error('Erro ao fazer upload da imagem:', uploadError.message)
    return
  }

  const picUrl = uploadData.path

  const { data, error } = await supabase
    .from('Users')
    .insert([{ name, email, password, pic: picUrl }])

  if (error) {
    console.error('Erro ao salvar dados:', error.message)
    return
  }

  return data
}
 */
