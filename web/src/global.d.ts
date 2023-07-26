type MetaDataType = {
  title: string
  image?: string
  description: string
  url?: string
  type?: 'website'
  noIndex?: boolean
}

type ApiResponse<T> = {
  data: T
}

type Task = {
  id: string
  title: string
  state: keyof typeof States
  createdAt: string
  done?: boolean
}

enum States {
  'planned' = 'planned',
  'ongoing' = 'on going',
  'onhold' = 'on hold',
  'done' = 'done',
}
