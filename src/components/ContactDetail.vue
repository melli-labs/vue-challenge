<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div>
    <header class="py-3 px-4 bg-white rounded-b-3">
      <button class="flex gap-1 font-bold text-5 items-center" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left mt-0.6" />
        Contacts
      </button>
    </header>
    <div class="flex flex-col items-center py-5">
      <img :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`" class="w-40 h-40 rounded-full">
      <div class="text-center">
        <div class="font-semibold text-5">
          {{ person.name }}
        </div>
        <div>{{ person.role }}</div>
        <div class="bg-primary-300 rounded-full my-1 inline-block px-2">
          @{{ person.handle }}
        </div>
      </div>
      <div class="w-full p-3">
        <div class="flex w-full children:flex-1 bg-white rounded-3 divide-x-1 divide-black/10">
          <button class="p-4 flex flex-col items-center">
            <div class="w-6 h-6 i-heroicons-outline:annotation" />
            message
          </button>
          <button class="p-4 flex flex-col items-center">
            <div class="w-6 h-6 i-heroicons-outline:phone" />
            call
          </button>
          <button class="p-4 flex flex-col items-center">
            <div class="w-6 h-6 i-heroicons-outline:video-camera" />
            video
          </button>
          <button class="p-4 flex flex-col items-center">
            <div class="w-6 h-6 i-heroicons-outline:mail" />
            mail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
