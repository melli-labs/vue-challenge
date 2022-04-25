<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div class="grid place-items-center">
    <header >
      <button class="flex gap-1 text-2xl font-semibold  grid place-items-center" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left " />
        Contacts
      </button>
    </header>
    <img :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
      class="w-40 h-40 rounded-full">
    <div>
      <div class=" font-medium leading-tight text-xl">{{ person.name }}</div>
      <div class="text-tertiary font-semibold leading-tight text-xl">{{ person.role }}</div>
      <div class="text-primary font-medium leading-tight text-base">@{{ person.handle }}</div>
    </div>
    <div>
      <button class="p-4 border ">
        <div class="w-6 h-6 i-heroicons-outline:annotation text-primary hover:text-tertiary" />
        message
      </button>
      <button class="p-4 border">
        <div class="w-6 h-6 i-heroicons-outline:phone text-primary hover:text-tertiary" />
        call
      </button>
      <button class="p-4 border">
        <div class="w-6 h-6 i-heroicons-outline:video-camera text-primary hover:text-tertiary" />
        video
      </button>
      <button class="p-4 border">
        <div class="w-6 h-6 i-heroicons-outline:mail text-primary hover:text-tertiary" />
        mail
      </button>
    </div>
  </div>
</template>