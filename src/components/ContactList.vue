<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <div class="px-4 overflow-y-auto">
    <header>
      <h1 class="text-lg font-medium">Contacts</h1>
    </header>
    <ul class="divide-y divide-solid divide-gray-200">
      <li
        v-for="(person, index) in people"
        :key="index"
        class="cursor-pointer py-3 flex items-center space-x-2"
        @click="emit('select', index)"
      >
        <img
          :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
          class="w-12 h-12 rounded-full"
        >
        <div class="flex flex-col space-y-1">
          <div class="text-base font-medium">{{ person.name }}</div>
          <div class="text-sm text-gray-600">{{ person.role }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
