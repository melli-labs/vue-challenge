<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div class="px-4">
    <header class="mb-2">
      <button class="flex items-center gap-1" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left" />
        Contacts
      </button>
    </header>
    <div class="flex flex-col space-y-4 items-center text-center">
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="relative inline-flex w-40 h-40 rounded-full"
      >
      <div class="space-y-3">
        <div class="space-y-1">
          <div class="text-base font-medium">{{ person.name }}</div>
          <div class="text-sm text-primary-600">{{ person.role }}</div>
        </div>
        <div class="text-gray-500 font-normal text-sm">@{{ person.handle }}</div>
      </div>
      <div class="flex space-x-3 items-center">
        <button class="p-4 border border-gray-200 hover:bg-primary-300 hover:border-transparent text-gray-500 hover:text-white transition-all delay-150 ease-in rounded-full">
          <div class="w-6 h-6 i-heroicons-outline:annotation" />
        </button>
        <button class="p-4 border border-gray-200 hover:bg-primary-300 hover:border-transparent text-gray-500 hover:text-white transition-all delay-150 ease-in rounded-full">
          <div class="w-6 h-6 i-heroicons-outline:phone" />
        </button>
        <button class="p-4 border border-gray-200 hover:bg-primary-300 hover:border-transparent text-gray-500 hover:text-white transition-all delay-150 ease-in rounded-full">
          <div class="w-6 h-6 i-heroicons-outline:video-camera" />
        </button>
        <button class="p-4 border border-gray-200 hover:bg-primary-300 hover:border-transparent text-gray-500 hover:text-white transition-all delay-150 ease-in rounded-full">
          <div class="w-6 h-6 i-heroicons-outline:mail" />
        </button>
      </div>
    </div>
  </div>
</template>
