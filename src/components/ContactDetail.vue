<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div>
    <header>
      <button class="flex gap-1 p-2 font-bold text-2xl" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left" />
        Contacts
      </button>
    </header>
    <div class="grid justify-items-center">
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-40 h-40 rounded-full"
      >
      <div>
        <div class="font-bold">{{ person.name }}</div>
        <div class="text-sm">{{ person.role }}</div>
        <div class="text-sm text-teal-600">@{{ person.handle }}</div>
      </div>
      <div class="grid grid-cols-2">
        <button class="border-2 rounded-md border-primary-400 m-2 p-2 text-gray-600 hover:bg-primary-400 hover:text-white focus:bg-primary-600 focus:border-primary-600 focus:text-white">
          <div class="w-6 h-6 i-heroicons-outline:annotation " />
          <div class="text-sm">Message</div>
        </button>
        <button class="border-2 rounded-md border-primary-400 m-2 p-2 text-gray-600 hover:bg-primary-400 hover:text-white focus:bg-primary-600 focus:border-primary-600 focus:text-white">
          <div class="w-6 h-6 i-heroicons-outline:phone" />
          <div class="text-sm">Call</div>
        </button>
        <button class="border-2 rounded-md border-primary-400 m-2 p-2 text-gray-600 hover:bg-primary-400 hover:text-white focus:bg-primary-600 focus:border-primary-600 focus:text-white">
          <div class="w-6 h-6 i-heroicons-outline:video-camera" />
          <div class="text-sm">Video</div>
        </button>
        <button class="border-2 rounded-md border-primary-400  m-2 p-2 text-gray-600 hover:bg-primary-400 hover:text-white focus:bg-primary-600 focus:border-primary-600 focus:text-white">
          <div class="w-6 h-6 i-heroicons-outline:mail" />
          <div class="text-sm">Mail</div>
        </button>
      </div>
    </div>
    
  </div>
</template>
