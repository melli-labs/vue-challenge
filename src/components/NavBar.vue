<template>
  <nav
    class="flex justify-around items-center bg-primary h-14 cursor-pointer shadow-md"
  >
    <div
      class="i-heroicons-outline:home w-6 h-6 cursor-pointer hover:color-white"
    />
    <div
      class="i-heroicons-outline:phone w-6 h-6 cursor-pointer hover:color-white"
    />
    <div
      class="i-heroicons-outline:calendar w-6 h-6 cursor-pointer hover:color-white"
    />
    <div
      class="i-heroicons-outline:user w-6 h-6 hover:text-white hover:ease-linear cursor-pointer hover:color-white color-white"
    />
    <router-link to="/end">
      <div class="i-heroicons-outline:check-circle w-6 h-6 hover:color-white" />
    </router-link>
  </nav>
</template>
