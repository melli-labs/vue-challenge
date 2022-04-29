<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header>
    <div class="mb-1 text-xl font-medium text-gray-900 dark:text-white flex flex-col items-center pb-1 pt-2">
      <h1>Contacts</h1>
    </div>
  </header>
  <ul class="overflow-y-auto">
    <li
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer m-1"
    >
      <div class="flex flex-col p-8 bg-white shadow-md rounded-2xl hover:bg-gray-100 ">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img
              :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
              class="w-12 h-12 rounded-full"
            >
            <div class="flex flex-col ml-3">
              <div class="font-medium leading-none">
                {{ person.name }}
              </div>
              <p class="text-sm text-gray-600 leading-none mt-1">
                {{ person.role }}
              </p>
            </div>
          </div>
          <button class="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded-full" @click="emit('select', index)">
            Details
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>
