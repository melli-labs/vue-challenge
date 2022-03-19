<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header bg-emerald-200 text-center font-bold h-min>
    <h1>Contacts</h1>
  </header>
  <ul class="overflow-y-auto grid grid-cols-2 ">
    <li
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer hover:bg-yellow-300 grid grid-rows-[min-content_min-content_min-content]"
      @click="emit('select', index)"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-12 h-12 rounded-full justify-self-center"
      >
      <div class="justify-self-center">{{ person.name }}</div>
      <div class="justify-self-center break-all">{{ person.role }}</div>
    </li>
  </ul>
</template>
