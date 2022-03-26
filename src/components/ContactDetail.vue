<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div>
    <header>
      <button class="flex gap-1 p-3 rounded-3 border border-gray-500 ml-2 mb-5 hover:bg-primary-100 ease-in-out duration-300" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left w-6 h-6" />
        <div class="font-semibold">Contacts</div>
      </button>
    </header>
    <div class="flex flex-col items-center">
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-60 h-60 rounded-full border-2 border-gray-800 shadow mb-3"
      >
      <div class="mb-3">
        <div class="text-center text-6 font-semibold mb-2">{{ person.name }}</div>
        <div class="text-center">{{ person.role }}</div>
        <div class="text-center">@{{ person.handle }}</div>
      </div>
      <div class="flex flex-col gap-1 w-50%">
        <button class="p-3 border border-gray-500 rounded-md flex items-center hover:bg-primary-100 ease-in-out duration-300">
          <div class="w-8 h-8 i-heroicons-outline:annotation" />
          <p class="text-5 flex-grow">message</p>
        </button>
        <button class="p-3 border border-gray-500 rounded-md flex items-center hover:bg-primary-100 ease-in-out duration-300">
          <div class="w-8 h-8 i-heroicons-outline:phone" />
          <p class="text-5 flex-grow">call</p>
        </button>
        <button class="p-3 border border-gray-500 rounded-md flex items-center hover:bg-primary-100 ease-in-out duration-300">
          <div class="w-8 h-8 i-heroicons-outline:video-camera" />
          <p class="text-5 flex-grow">video</p>
        </button>
        <button class="p-3 border border-gray-500 rounded-md flex items-center hover:bg-primary-100 ease-in-out duration-300">
          <div class="w-8 h-8 i-heroicons-outline:mail" />
          <p class="text-5 flex-grow">mail</p>
        </button>
      </div>
    </div>
  </div>
</template>
