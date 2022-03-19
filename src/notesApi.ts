import { useFetch } from '@vueuse/core'

import type { Note } from '~/types'

export function getNotesApi() {
  return useFetch('https://emilia-vue-challenge.deta.dev/notes').get().json()
}

export function postNotesApi(newData: Note) {
  return useFetch('https://emilia-vue-challenge.deta.dev/notes').post(newData).text()
}

export function putNotesApi(key: String, newData: Note) {
  return useFetch(`https://emilia-vue-challenge.deta.dev/notes/${key}`).put(newData).text()
}

export function deleteNotesApi(key: String) {
  return useFetch(`https://emilia-vue-challenge.deta.dev/notes/${key}`).delete()
}
