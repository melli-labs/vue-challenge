export interface Note {
  title: string
  body: string
  author: string
  key: string
  readonly: boolean
  createdAt: string
  updatedAt: string
}

export interface Person {
  handle: string
  name: string
  role: string
}
