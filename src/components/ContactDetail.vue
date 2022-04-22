<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div>
    <header>
      <button class="rounded-lg bg-tertiary-300 hover:bg-tertiary-500 w-25 ml-3 flex gap-1 mt-4" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left mt-1 ml-1" />
        Contacts
      </button>
    </header>
    <div class="mt-5 ma-auto items-center text-center rounded-lg">
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-40 h-40 rounded-full ma-auto"
      >
      <div>
        <div>{{ person.name }}</div>
        <div>{{ person.role }}</div>
        <div>@{{ person.handle }}</div>
      </div>
      <div class="mt-4">
        <button class="p-2 mr-3 bg-primary-200 hover:bg-primary-400 rounded-lg">
          <div class="w-6 h-6 i-heroicons-outline:annotation ma-auto" />
          message
        </button>
        <button class="p-2 mr-3 bg-primary-200 hover:bg-primary-400 rounded-lg">
          <div class="w-6 h-6 i-heroicons-outline:phone ma-auto" />
          call
        </button>
        <button class="p-2 mr-3 bg-primary-200 hover:bg-primary-400 rounded-lg">
          <div class="w-6 h-6 i-heroicons-outline:video-camera ma-auto" />
          video
        </button>
        <button class="p-2 bg-primary-200 hover:bg-primary-400 rounded-lg">
          <div class="w-6 h-6 i-heroicons-outline:mail ma-auto" />
          mail
        </button>
      </div>
    </div>
  </div>
</template>
