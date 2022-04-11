<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header>
    <h1 class="flex gap-1 p-2 font-bold text-2xl">Contacts</h1>
  </header>
  <ul class="grid grid-cols-2 gap-2 p-2">
    <li
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer border-3 rounded-md border-primary-400 p-2 grid justify-items-center"
      @click="emit('select', index)"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-12 h-12 rounded-full"
      >
      <div class="font-bold">{{ person.name }}</div>
      <div class="text-sm">{{ person.role }}</div>
    </li>
  </ul>
</template>
