<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div class="px-8">
    <header class="mb-4">
      <button class="flex gap-1 w-full my-4 items-center" @click="emit('back')">
        <div class="bg-white rounded-lg border-2 border-gray-200 shadow-sm w-30px h-30px mr-4">
          <div class="ml-3px text-lg mt-3px i-heroicons-outline:chevron-left" />
        </div>
        <h3 class="text-2xl font-bold">Contacts</h3>
      </button>
    </header>
    <img
      :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
      class="mx-auto w-40 h-40 rounded-full mb-3"
    >
    <div class="mb-8">
      <div class="text-center text-2xl shadow-inner rounded-lg p-3 border-2 border-gray-200 px-8 mb-3 text-lg">{{ person.name }}</div>
      <div class="text-center text-2xl shadow-inner rounded-lg p-3 border-2 border-gray-200 px-8 mb-3 text-lg">{{ person.role }}</div>
      <div class="text-center text-2xl shadow-inner rounded-lg p-3 border-2 border-gray-200 px-8 mb-3 text-lg">@{{ person.handle }}</div>
    </div>
    <div class="grid grid-cols-2 gap-2 mb-4">
      <button class="p-4 bg-white rounded-lg border-2 border-gray-200 shadow-sm">
        <div class="mx-auto w-6 h-6 i-heroicons-outline:annotation" />
        Message
      </button>
      <button class="p-4 bg-white rounded-lg border-2 border-gray-200 shadow-sm">
        <div class="mx-auto w-6 h-6 i-heroicons-outline:phone" />
        Call
      </button>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <button class="p-4 bg-white rounded-lg border-2 border-gray-200 shadow-sm">
        <div class="mx-auto w-6 h-6 i-heroicons-outline:video-camera" />
        Video
      </button>
      <button class="p-4 bg-white rounded-lg border-2 border-gray-200 shadow-sm">
        <div class="mx-auto w-6 h-6 i-heroicons-outline:mail" />
        Mail
      </button>
    </div>
  </div>
</template>
