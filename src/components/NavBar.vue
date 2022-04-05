<template>
  <nav class="grid grid-cols-5 gap-2 py-4">
    <div class="i-heroicons-outline:home w-8 h-8 mx-auto" />
    <div class="i-heroicons-outline:phone w-8 h-8 mx-auto" />
    <div class="i-heroicons-outline:calendar w-8 h-8 mx-auto" />
    <div class="i-heroicons-outline:user w-8 h-8 text-primary-600 mx-auto" />
    <router-link to="/end">
      <div class="i-heroicons-outline:check-circle w-8 h-8 mx-auto" />
    </router-link>
  </nav>
</template>
