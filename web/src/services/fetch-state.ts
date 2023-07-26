import { api } from '@/lib/api'

export const fetchState = async () => {
  const response = await api.get<State[]>(`/states`)
  const { data } = response

  return data
}
