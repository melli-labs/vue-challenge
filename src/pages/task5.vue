<script setup lang="ts">
import type { Note } from "~/types";

const mockData: Array<Note> = [
  {
    title: "Examle Note",
    body: "asdf",
    author: "Emilia",
    key: "f24jv9ssdjf28",
    readonly: true,
    createdAt: "5 seconds",
    updatedAt: "1 seconds",
  },
  {
    title: "Examle Note",
    body: "asdf",
    author: "Emilia",
    key: "f24jv9ssdjf28",
    readonly: false,
    createdAt: "5 seconds",
    updatedAt: "1 seconds",
  },
  {
    title: "Examle Note",
    body: "asdf",
    author: "Emilia",
    readonly: false,
    key: "f24jv9ssdjf28",
    createdAt: "5 seconds",
    updatedAt: "1 seconds",
  },
];
</script>

<template>
  <Emilia/>
  <div class="h-screen bg-secondary-50 grid items-center">
    <div class="container mx-auto grid p-4 gap-4">
      <div
        class="
          bg-white
          rounded-md
          flex
          border-2
          border-primary-300
          h-12
          shadow-sm
          px-3
          gap-3
          items-center
          focus-within:outline-none
          focus-within:border-primary-500
          focus-within:ring-3
          focus-within:ring-primary-300
        "
      >
        <div class="h-6 fill-current- text-primary-700 w-6 i-carbon:search" />
        <input class="flex-grow h-full fill-primary-700 focus:outline-none" />
      </div>
      <div class="grid gap-4 md:min-w-screen-sm md:grid-cols-2">
        <Task5Card v-for="note in mockData" :key="note.key" :note="note" />
      </div>
    </div>
  </div>
</template>
