export interface Person {
  handle: string
  name: string
  role: string
}

export interface Note {
  title: string
  body: string
  author: string
  key: string
  readonly: boolean
  createdAt: string
  updatedAt: string
}
