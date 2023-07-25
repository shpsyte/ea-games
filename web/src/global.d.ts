type MetaDataType = {
  title: string
  image?: string
  description: string
  url?: string
  type?: 'website'
  noIndex?: boolean
}

type Task = {
  id: string
  title: string
  state: keyof typeof States
  createdAt: string
  done?: boolean
}

enum States {
  'PLANNED' = 'PLANNED',
  'ONGOING' = 'ON GOING',
  'ONHOLD' = 'ON HOLD',
  'DONE' = 'DONE',
}
