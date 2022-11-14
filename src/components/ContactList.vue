<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header class="py-3 px-4 bg-white rounded-b-3">
    <h1 class="font-bold text-5">
      Contacts
    </h1>
  </header>
  <ul class="overflow-y-auto space-y-1.2 p-2">
    <li v-for="(person, index) in people" :key="index" class="cursor-pointer flex items-center bg-white rounded-1 px-2 py-1 gap-3" @click="emit('select', index)">
      <img :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`" class="w-12 h-12 rounded-full">
      <div class="leading-snug">
        <div class="font-semibold">
          {{ person.name }}
        </div>
        <div>{{ person.role }}</div>
      </div>
    </li>
  </ul>
</template>
