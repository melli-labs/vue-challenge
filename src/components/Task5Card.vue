<script setup lang="ts">
import type { Note } from "~/types";

defineProps<{
  note: Note;
}>();
</script>

<template>
  <div class="rounded bg-primary-50 border-2 border-primary-200 shadow-sm p-6 text-primary-800">
    <div class="flex">
      <div class="carbon:overflow-menu-horizontal" />
      <div>
        <h1 class="font-medium text-lg">
          {{ note.title }}
        </h1>
        <p class="mb-1 opacity-75 italic">by {{ note.author }}</p>
      </div>
    </div>
    <p>{{ note.body }}</p>
    <span
      class="
        border
        rounded
        bg-primary-50
        border-primary-200
        text-sm
        py-1
        px-2
        text-primary-700
      "
      >{{ note.key }}</span
    >
    <div
      v-if="note.readonly"
      class="border rounded flex bg-primary-50 border-primary-200 text-sm py-1 px-2 text-primary-700 items-center"
    >
      <div class="i-carbon:locked" />
      <span>Readonly</span>
    </div>
    <p>{{ note.createdAt }}</p>
    <p>{{ note.updatedAt }}</p>
  </div>
</template>
