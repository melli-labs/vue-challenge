<template>
  <nav grid grid-cols-5 bg-emerald-200 justify-items-center>
    <div class="i-heroicons-outline:home w-8 h-8 hover:bg-yellow-300 cursor-pointer" />
    <div class="i-heroicons-outline:phone w-8 h-8 hover:bg-yellow-300 cursor-pointer" />
    <div class="i-heroicons-outline:calendar w-8 h-8 hover:bg-yellow-300 cursor-pointer" />
    <div class="i-heroicons-outline:user w-8 h-8 text-primary-600 hover:bg-yellow-300 cursor-pointer" />
    <router-link to="/end">
      <div class="i-heroicons-outline:check-circle w-8 h-8 hover:bg-yellow-300 cursor-pointer" />
    </router-link>
  </nav>
</template>
