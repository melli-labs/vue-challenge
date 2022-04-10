<template>
  <nav
    class="flex flex-row justify-around pt-3 bg-white drop-shadow-[0_-8px_3px_rgba(0,0,0,0.0275)]"
  >
    <div class="i-heroicons-outline:home w-8 h-8" />
    <div class="i-heroicons-outline:phone w-8 h-8" />
    <div class="i-heroicons-outline:calendar w-8 h-8" />
    <div class="i-heroicons-outline:user w-8 h-8 text-primary-600" />
    <router-link to="/end">
      <div class="i-heroicons-outline:check-circle w-8 h-8" />
    </router-link>
  </nav>
</template>
