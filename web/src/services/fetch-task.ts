import { api } from '@/lib/api'

type fetchTaskParams = {
  state: keyof typeof States
  skip?: number
  take?: number
  q?: string | undefined
}

export const fetchTask = async ({
  skip = 0,
  state,
  take = 10000,
  q,
}: fetchTaskParams) => {
  const response = await api.get<{
    total: number
    tasks: Task[]
  }>(`/tasks/${state}/${skip}/${take}/`)
  const { data } = response

  return data
}

export const fetchAllTask = async (q?: string) => {
  const response = await api.get<Task[]>(`/tasks/all/${q ?? ''}`)
  const { data } = response

  return data
}
