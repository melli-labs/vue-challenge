<script setup lang="ts">
import type { Person } from "~/types";

defineProps<{ person: Person }>();
const emit = defineEmits<{ (name: "back"): void }>();
</script>

<template>
  <div class="text-center">
    <header>
      <button
        class="flex items-center font-bold text-white gap-1 px-3 py-2"
        @click="emit('back')"
      >
        <div class="i-heroicons-outline:chevron-left" />
        Contacts
      </button>
    </header>
    <!-- <img
      :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
      class="w-30 h-30 rounded-full avatar"
    /> -->
    <img
      class="w-30 h-30 rounded-full avatar"
      src="https://source.unsplash.com/200x200/?person"
    />
    <div>
      <div class="text-xl font-bold">{{ person.name }}</div>
      <div class="text-gray-500">{{ person.role }}</div>
      <div class="text-cyan-600">@{{ person.handle }}</div>
    </div>
    <div class="grid grid-cols-4 gap-2 mt-15">
      <div class="-mt-8">
        <button
          class="p-4 border bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
        >
          <div class="w-6 h-6 i-heroicons-outline:annotation" />
        </button>
      </div>
      <div>
        <button
          class="p-4 border bg-green-500 hover:bg-green-700 text-white font-bold rounded-full"
        >
          <div class="w-6 h-6 i-heroicons-outline:phone" />
        </button>
      </div>
      <div>
        <button
          class="p-4 border bg-purple-500 hover:bg-purple-700 text-white font-bold rounded-full"
        >
          <div class="w-6 h-6 i-heroicons-outline:video-camera" />
        </button>
      </div>
      <div class="-mt-8">
        <button
          class="p-4 border bg-red-500 hover:bg-red-700 text-white font-bold rounded-full"
        >
          <div class="w-6 h-6 i-heroicons-outline:mail" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
header {
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
  background-size: cover;
  min-height: 180px;
}
.avatar {
  margin: -60px auto 10px;
}
</style>
