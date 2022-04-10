<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header class="bg-white drop-shadow-[0_8px_3px_rgba(0,0,0,0.02)]">
    <h1 class="ml-5 mb-4 text-4xl font-bold text-gray-300">Contacts</h1>
  </header>
  <ul class="flex flex-col gap-6 ml-5 py-4 overflow-y-auto">
    <li
      v-for="(person, index) in people"
      :key="index"
      class="grid grid-cols-12 grid-rows-2 cursor-pointer"
      @click="emit('select', index)"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="col-span-2 row-span-2 w-12 h-12 rounded-full"
      />
      <div
        class="col-start-3 col-span-full row-start-1 pl-1 font-bold text-primary-900"
      >
        {{ person.name }}
      </div>
      <div
        class="col-start-3 col-span-9 row-start-2 pl-1 pb-2 border-b border-gray-300 text-xs text-secondary-600"
      >
        {{ person.role }}
      </div>
    </li>
  </ul>
</template>
