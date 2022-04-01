<template>
  <nav class="flex py-2 items-center justify-around">
    <div class="i-heroicons-outline:home w-8 h-8" />
    <div class="i-heroicons-outline:phone w-8 h-8" />
    <div class="i-heroicons-outline:calendar w-8 h-8" />
    <div class="bg-primary-100 p-2 rounded-full">
      <div class="i-heroicons-outline:user w-8 h-8 text-primary-600" />
    </div>
    <router-link to="/end">
      <div class="i-heroicons-outline:check-circle w-8 h-8" />
    </router-link>
  </nav>
</template>
