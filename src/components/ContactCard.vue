<script setup lang="ts">
import type { Person } from "~/types"

defineProps<{ person: Person }>()
</script>

<template>
  <div
    class="card ma-3 pt-0.5 bg-white hover:bg-primary items-center text-center rounded-lg"
  >
    <img
      :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
      class="w-12 h-12 rounded-full ma-auto mt-4"
    >
    <div>{{ person.name }}</div>
    <div>{{ person.role }}</div>
  </div>
</template>
<style>
.card {
  background: linear-gradient(
    to right,
    rgb(209, 250, 229) 0,
    rgba(255, 255, 255, 0.7) 50%,
    rgb(209, 250, 229) 100%
  );
}
</style>
