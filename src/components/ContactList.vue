<script setup lang="ts">
import type { Person } from "~/types";

defineProps<{ people: Person[] }>();
const emit = defineEmits<{ (name: "select", v: number): void }>();
</script>

<template>
  <header class="z-10 h-10">
    <h1
      class="bg-white flex items-center justify-center text-xl h040 bg-white color-primary shadow-lg font-medium pb-2"
    >
      Contacts
    </h1>
  </header>
  <ul
    class="overflow-y-auto border-primary-400 grid gap-5 p-4 py-6 grid-cols-2"
  >
    <li
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer rounded-lg p-2 py-4 flex flex-col justify-start items-center bg-primary-50 shadow-md hover:shadow-lg hover:scale-103 transition-all duration-100 ease-in-out hover:transition-all hover:duration-200 hover:ease-in-out bg-primary-100 text-center"
      @click="emit('select', index)"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-16 h-16 rounded-full p-1 border-1 border-primary-400 shadow-md bg-white mb-2"
      />
      <div class="color-primary-400 leading-tight font-medium">
        {{ person.name }}
      </div>
      <div class="color-gray-500 text-sm leading-tight">{{ person.role }}</div>
    </li>
  </ul>
</template>
