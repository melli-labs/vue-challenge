<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div>
    <header>
      <button class="flex gap-1" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left" />
        Contacts
      </button>
    </header>
    <img
      :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
      class="w-40 h-40 rounded-full"
    >
    <div>{{ person.name }}</div>
    <div>{{ person.role }}</div>
    <div>@{{ person.handle }}</div>
    <button class="p-4 border">
      <div class="w-6 h-6 i-heroicons-outline:phone" />
      message
    </button>
    <button class="p-4 border">
      <div class="w-6 h-6 i-heroicons-outline:phone" />
      call
    </button>
    <button class="p-4 border">
      <div class="w-6 h-6 i-heroicons-outline:video-camera" />
      video
    </button>
    <button class="p-4 border">
      <div class="w-6 h-6 i-heroicons-outline:mail" />
      mail
    </button>
  </div>
</template>
