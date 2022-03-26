<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header>
    <h1 class="text-6 font-semibold text-center">Contacts</h1>
  </header>
  <ul class="overflow-y-auto">
    <li
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer flex px-3 py-2 m-1 border rounded-md border-gray-200 shadow-sm hover:bg-primary-100 ease-in-out duration-300"
      @click="emit('select', index)"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-12 h-12 rounded-full border-1 border-gray-600 mr-4"
      >
      <div>
        <p class="text-4 font-semibold">{{ person.name }}</p>
        <p class="text-3.5 italic">{{ person.role }}</p>
      </div>
    </li>
  </ul>
</template>
