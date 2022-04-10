<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div class="flex flex-col gap-4 text-primary-900">
    <header class="mt-2 ml-2 leading-none">
      <button class="flex gap-1" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left" />
        Contacts
      </button>
    </header>
    <img
      :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
      class="self-center mt-10 w-40 h-40 rounded-full"
    />
    <div class="self-center flex flex-col items-center gap-2 mb-2">
      <div class="text-3xl font-bold">{{ person.name }}</div>
      <div class="text-xl text-secondary-600">{{ person.role }}</div>
      <div class="text-primary-900">@{{ person.handle }}</div>
    </div>
    <div class="self-center grid grid-flow-col gap-5 mt-4">
      <button class="btn p-5 text-0 leading-none">
        <div class="w-6 h-6 i-heroicons-outline:annotation" />
        message
      </button>
      <button class="btn p-5 text-0 leading-none">
        <div class="w-6 h-6 i-heroicons-outline:phone" />
        call
      </button>
      <button class="btn p-5 text-0 leading-none">
        <div class="w-6 h-6 i-heroicons-outline:video-camera" />
        video
      </button>
      <button class="btn p-5 text-0 leading-none">
        <div class="w-6 h-6 i-heroicons-outline:mail" />
        mail
      </button>
    </div>
  </div>
</template>
