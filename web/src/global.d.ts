type MetaDataType = {
  title: string
  image?: string
  description: string
  url?: string
  type?: 'website'
  noIndex?: boolean
}

enum Status {
  TODO = 'TODO',
  DOING = 'DOING',
  DONE = 'DONE',
}
