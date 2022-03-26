<script setup lang="ts">
import { useFuse } from '@vueuse/integrations/useFuse'
import { useFetch } from '@vueuse/core'
import type { Note } from '~/types'

const { data } = await useFetch('https://emilia-vue-challenge.deta.dev/notes').get().json()
const notes: Note[] = [...data.value]

// const mockData: Note[] = [
//   {
//     title: 'One more thing',
//     body: 'There are some notes which are readonly 🔒️. These notes cannot be edited or deleted. But for the other notes we should be able to use the dropdown to edit ✍️ or delete ❌ them.',
//     author: 'Emilia',
//     key: 'f24jv9ss',
//     readonly: true,
//     createdAt: '2022-01-31 09:01:33',
//     updatedAt: '2022-01-31 09:01:33',
//   },
//   {
//     title: 'Tip: useFetch from VueUse 🧩',
//     body: 'Consider using the useFetch utility from the VueUse package for this task. It provides a convenient and reactive wrapper for the Fetch API. But of course you are free to install any other fetching library 📥️ or just use the Fetch API directly.',
//     author: 'Felix',
//     key: 'j3hhw92j',
//     readonly: true,
//     createdAt: '2022-01-24 12:12:45',
//     updatedAt: '2022-01-24 12:12:45',
//   },
//   {
//     title: '📝 TODO',
//     body: 'Hire a frontend developer.',
//     author: 'Hans',
//     readonly: false,
//     key: 'jfpnzy2nu',
//     createdAt: '2022-01-27 16:52:20',
//     updatedAt: '2022-01-31 16:52:20',
//   },
// ]

const isFetching = false
const input = ref('')
const { results } = useFuse(input, notes, {
  fuseOptions: { keys: ['title', 'body', 'author'] },
  matchAllWhenSearchEmpty: true,
})
</script>

<template>
  <div class="grid gap-6">
    <div class="flex gap-4 flex-col sm:flex-row">
      <router-link
        to="/task3/new"
        class="bg-primary-100 text-primary-800 font-medium rounded-md border-2 border-primary-200 h-12 shadow-sm px-3 flex gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
      >
        <div class="i-heroicons-outline:plus" />New Note
      </router-link>
      <div
        class="flex-grow bg-white rounded-md flex border-2 border-primary-200 h-12 shadow-sm px-3 gap-3 items-center focus-within:outline-none focus-within:border-primary-500 focus-within:ring-3 focus-within:ring-primary-300"
      >
        <div class="h-6 text-primary-700 w-6 i-heroicons-outline:search" />
        <input
          v-model="input"
          class="flex-grow h-full fill-primary-700 focus:outline-none"
          autofocus
        >
      </div>
      <router-link
        to="/task4"
        class="bg-tertiary-100 text-tertiary-800 font-medium rounded-md border-2 border-tertiary-200 h-12 shadow-sm px-3 flex gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
      >
        <div class="i-heroicons-outline:chevron-right" />Next task
      </router-link>
    </div>
    <div v-if="isFetching" class="min-h-xs grid place-items-center">
      <div class="i-tabler:loader-quarter animate-spin w-6 h-6 text-primary-800" />
    </div>
    <div v-else-if="results.length > 0" class="grid gap-4 md:min-w-screen-sm lg:grid-cols-2">
      <Note v-for="(result) in results" :key="result.item.key" :note="result.item" />
    </div>
    <div v-else class="min-h-xs grid place-items-center text-2xl text-primary-700 font-medium tracking-wide">
      No results
    </div>
  </div>
</template>
