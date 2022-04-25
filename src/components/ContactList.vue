<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header>
    <h1 class="text-2xl font-semibold grid place-items-center p-4">Contacts</h1>
  </header>
  <ul class="overflow-y-auto  gap-2">
    <li 
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer grid place-items-center content-center p-4"
      @click="emit('select', index)"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-12 h-12 rounded-full"
      >
      <div class=" text-primary  font-medium">{{ person.name }}</div>
      <div class=" text-tertiary font-semibold">{{ person.role }}</div>
    </li>
  </ul>
</template>
