<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div bg-emerald-400 grid class="grid-rows-[min-content_min-content_min-content_min-content] justify-items-center">
    <header class="justify-self-start">
      <button class="flex gap-1 bg-emerald-200" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left" />
        Contacts
      </button>
    </header>
    <img
      :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
      class="w-40 h-40 rounded-full"
    >
    <div>
      <div>{{ person.name }}</div>
      <div>{{ person.role }}</div>
      <div>@{{ person.handle }}</div>
    </div>
    <div>
      <button class="p-4 border hover:bg-yellow-300">
        <div class="w-6 h-6 i-heroicons-outline:annotation" />
        message
      </button>
      <button class="p-4 border hover:bg-yellow-300">
        <div class="w-6 h-6 i-heroicons-outline:phone" />
        call
      </button>
      <button class="p-4 border hover:bg-yellow-300">
        <div class="w-6 h-6 i-heroicons-outline:video-camera" />
        video
      </button>
      <button class="p-4 border hover:bg-yellow-300">
        <div class="w-6 h-6 i-heroicons-outline:mail" />
        mail
      </button>
    </div>
  </div>
</template>
