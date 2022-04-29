<template>
  <nav class="bg-gray-900">
    <div class="flex items-center justify-between px-4 py-2">
      <div class="text-white">
        <img
          class="h-8"
          src="https://mit-emilia.de/wp-content/uploads/2021/10/Logo.png"
          alt="Emilia Logo"
        />
      </div>
      <div>
        <button
          @click="toggle = !toggle"
          type="button"
          class="block text-gray-300 focus:text-white hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path v-if="!toggle"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path v-if="toggle"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="px-2 py-3" :class="toggle ? 'block' : 'hidden'">
      <div class="rounded hover:bg-gray-800 px-2 cursor-pointer py-1">
        <div class="i-heroicons-outline:home w-8 h-8 text-white" />
      </div>
      <div class="rounded hover:bg-gray-800 px-2 cursor-pointer py-1 mt-1">
        <div class="i-heroicons-outline:phone w-8 h-8 text-white" />
      </div>
      <div class="rounded hover:bg-gray-800 px-2 cursor-pointer py-1 mt-1">
        <div class="i-heroicons-outline:calendar w-8 h-8 text-white" />
      </div>
      <div class="rounded hover:bg-gray-800 px-2 cursor-pointer py-1 mt-1">
        <div class="i-heroicons-outline:user w-8 h-8 text-white" />
      </div>
      <router-link to="/end">
        <div class="rounded hover:bg-gray-800 px-2 cursor-pointer py-1 mt-1">
          <div class="i-heroicons-outline:check-circle w-8 h-8 text-white" />
        </div>
      </router-link>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from "vue";

let toggle = ref(false);
</script>
