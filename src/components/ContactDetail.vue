<script setup lang="ts">
import type { Person } from "~/types";

defineProps<{ person: Person }>();
const emit = defineEmits<{ (name: "back"): void }>();
</script>

<template>
  <div class="flex h-full flex-1 flex-col justify-between items-center">
    <header
      class="z-10 h-10 w-full bg-primary flex justify-content items-center pl-2"
    >
      <button class="flex gap-1 items-center color-white" @click="emit('back')">
        <div class="i-heroicons-outline:chevron-left" />
        Contacts
      </button>
    </header>
    <div
      class="flex bg-primary-100 items-center color-primary justify-around flex-col p-4 pt-6 rounded-xl shadow-lg"
    >
      <img
        :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
        class="w-40 h-40 rounded-full p-2 border-primary-400 bg-white mb-2 shadow-lg"
      />
      <div class="text-center leading-tight my-4 color-gray-500">
        <div
          class="color-primary leading-tight text-xl font-bold color-primary"
        >
          {{ person.name }}
        </div>
        <div class="color-gray-500 py-1 my-2 border-t border-b border-gray-400">
          {{ person.role }}
        </div>
        <div class="italic">@{{ person.handle }}</div>
      </div>
      <div
        class="grid gap-4 p-6 pb-4 grid-cols-2 group-hover:shadow-lg group-hover:scale-101"
      >
        <button
          class="p-4 shadow-md rounded-2 bg-white-100 text-center hover:cursor pointer flex flex-col justify-center items-center hover:shadow-lg hover:scale-103 transition-all duration-100 ease-in-out color-gray-400 hover:color-gray-600 uppercase text-xs"
        >
          <div
            class="color-primary w-6 h-6 i-heroicons-outline:annotation hover:scale-115 mb-2"
          />
          message
        </button>

        <button
          class="p-4 shadow-md rounded-2 bg-white-100 text-center hover:cursor pointer flex flex-col justify-center items-center hover:shadow-lg hover:scale-103 transition-all duration-100 ease-in-out color-gray-400 hover:color-gray-600 uppercase text-xs"
        >
          <div
            class="color-primary w-6 h-6 i-heroicons-outline:phone hover:scale-115 mb-2"
          />
          call
        </button>

        <button
          class="p-4 shadow-md rounded-2 bg-white-100 text-center hover:cursor pointer flex flex-col justify-center items-center hover:shadow-lg hover:scale-103 transition-all duration-100 ease-in-out color-gray-400 hover:color-gray-600 uppercase text-xs"
        >
          <div
            class="color-primary w-6 h-6 i-heroicons-outline:video-camera hover:scale-115 mb-2"
          />
          video
        </button>

        <button
          class="p-4 shadow-md rounded-2 bg-white-100 text-center hover:cursor pointer flex flex-col justify-center items-center hover:shadow-lg hover:scale-103 transition-all duration-100 ease-in-out color-gray-400 hover:color-gray-600 uppercase text-xs"
        >
          <div
            class="color-primary w-6 h-6 i-heroicons-outline:mail hover:scale-115 mb-2"
          />
          mail
        </button>
      </div>
    </div>
  </div>
</template>
