<script setup lang="ts">
import type { Person } from "~/types";

defineProps<{ people: Person[] }>();
const emit = defineEmits<{ (name: "select", v: number): void }>();
</script>

<template>
  <header class="flex">
    <h1 class="ma-auto text-2xl font-bold">
      Contacts
    </h1>
  </header>
  <ul class="list overflow-y-auto">
    <li
      v-for="(person, index) in people"
      :key="index"
      class="cursor-pointer"
      @click="emit('select', index)"
    >
      <ContactCard :person="person" />
    </li>
  </ul>
</template>
<style>
.list {
  border-bottom: 2px solid black;
}
</style>
