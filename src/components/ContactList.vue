<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ people: Person[] }>()
const emit = defineEmits<{ (name: 'select', v: number): void }>()
</script>

<template>
  <header class="grid justify-items-center content-center" :style="{'background-image':'url(https://mit-emilia.de/wp-content/uploads/2021/09/Logo.svg)', 'background-size':'cover', 'opacity':'0.7'}">
    <h1 class=" headerClass h-50 w-full grid content-center justify-items-center font-bold text-1xl">CONTACT US HERE ..</h1>
  </header>
  <ul class="overflow-y-auto bg-#f0fdfa">
    <li
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer flex items-center border-0.1px border-#0d9488 hover:bg-#99f6e4 pl-1"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-15 h-15 p-5px rounded-full"
      >
      <div class="w-full pl-1 pt-3">
        <div class="font-bold text-1xl">{{ person.name }}</div>
        <div>{{ person.role }}</div>
        <div class="grid place-content-end text-#0d9488 font-semibold animate-pulse" @click="emit('select', index)">See the Details &raquo;</div>
      </div>
    </li>
  </ul>
</template>

<style>
</style>
