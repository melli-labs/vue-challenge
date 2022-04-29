<template>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="w-8 h-8 rounded-full"
          :src="`https://meetap-it.gitlab.io/emilia/assets/team/${props.handle}.webp`"
          :alt="props.name"
        />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {{ props.name }}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          {{ props.role }}
        </p>
      </div>
      <!-- <div
        class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
      >
        $320
      </div> -->
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({ name: String, role: String, handle: String });
</script>

<style></style>
