<script setup lang="ts">
import type { Person } from "~/types";

defineProps<{ people: Person[] }>();
const emit = defineEmits<{ (name: "select", v: number): void }>();
</script>

<template>
  <div class="rounded overflow-y-auto">
    <header
      class="border-l-4 border-red-400 pl-6 flex items-center justify-between my-4"
    >
      <h1 class="font-semibold text-gray-800">Contacts</h1>
    </header>
    <hr class="divide-y divide-slate-100" />
    <ul class="rounded px-6 overflow-y-auto">
      <li
        v-for="(person, index) in people"
        :key="index"
        class="cursor-pointer flex items-center justify-between my-4 -mx-6 hover:bg-slate-100 p-2"
        @click="emit('select', index)"
      >
        <div class="w-16">
          <!-- <img
          :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
          class="w-12 h-12 rounded-full"
        /> -->
          <img
            class="w-12 h-12 rounded-full"
            src="https://source.unsplash.com/200x200/?person"
          />
        </div>
        <div class="flex-1 pl-2">
          <div class="text-gray-700 font-semibold">{{ person.name }}</div>
          <div class="text-gray-600 font-thin">{{ person.role }}</div>
        </div>
        <div class="text-red-400">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="#aaa"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>
