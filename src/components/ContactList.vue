<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header>
    <h1>Contacts</h1>
  </header>
  <ul class="overflow-y-auto">
    <li
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer"
      @click="emit('select', index)"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-12 h-12 rounded-full"
      >
      <div>{{ person.name }}</div>
      <div>{{ person.role }}</div>
    </li>
  </ul>
</template>
