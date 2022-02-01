<script setup lang="ts">
import type { Note } from '~/types'

const mockData: Array<Note> = [
  {
    title: 'One more thing',
    body: 'The readonly notes cannot be edited or deleted. All other notes should be editable or deletable via the dropdown on the top right.',
    author: 'Emilia',
    key: 'f24jv9ssdjf28',
    readonly: true,
    createdAt: '2022-01-31 09:01:33',
    updatedAt: '2022-01-31 09:01:33',
  },
  {
    title: 'Tip: useFetch from VueUse 🧩',
    body: 'Consider using the useFetch utility from the VueUse package. It provides a convenient and reactive wrapper for the Fetch API.',
    author: 'Felix',
    key: 'j3hhw92j4r234',
    readonly: true,
    createdAt: '2022-01-24 12:12:45',
    updatedAt: '2022-01-24 12:12:45',
  },
  {
    title: '📝 TODO',
    body: 'Hire a frontend developer',
    author: 'Hans',
    readonly: false,
    key: 'jfpnzy2nxu2pdu',
    createdAt: '2022-01-27 16:52:20',
    updatedAt: '2022-01-31 16:52:20',
  },
]
</script>

<template>
  <div class="grid gap-6">
    <div class="flex gap-4">
      <router-link to="/task5/new" class="bg-primary-100 text-primary-800 font-medium rounded-md flex border-2 border-primary-200 h-12 shadow-sm px-3 gap-1.5 items-center focus-within:outline-none focus-within:border-primary-500 focus-within:ring-3 focus-within:ring-primary-300">
        <div class="i-heroicons-outline:plus" />
        New Note
      </router-link>
      <div
        class="flex-grow bg-white rounded-md flex border-2 border-primary-200 h-12 shadow-sm px-3 gap-3 items-center focus-within:outline-none focus-within:border-primary-500 focus-within:ring-3 focus-within:ring-primary-300"
      >
        <div class="h-6 text-primary-700 w-6 i-heroicons-outline:search" />
        <input autofocus class="flex-grow h-full fill-primary-700 focus:outline-none">
      </div>
      <router-link to="/end" class="bg-tertiary-100 text-tertiary-800 font-medium rounded-md flex border-2 border-tertiary-200 h-12 shadow-sm px-3 gap-1.5 items-center focus-within:outline-none focus-within:border-primary-500 focus-within:ring-3 focus-within:ring-primary-300">
        <div class="i-heroicons-outline:chevron-right" />
        Finish task
      </router-link>
    </div>
    <div class="grid gap-4 md:min-w-screen-sm lg:grid-cols-2">
      <Note v-for="note in mockData" :key="note.key" :note="note" />
    </div>
  </div>
</template>
