<script setup lang="ts">
import type { Person } from '~/types'
import CardProfile from './CardProfile.vue'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <div class="p-4 max-w-md bg-whites border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Contacts</h5>
   </div>
  <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">

          <CardProfile v-for="(person, index) in people"
           :key="index"
            class="cursor-pointer"
            @click="emit('select', index)"
            :name="person.name"
            :role="person.role"
            :handle="person.handle" />
      </ul>
    </div>
  </div>
</template>
