<template>

  <nav class="grid md:grid-cols-5  md:grid-rows-1   gap-2  justify-items-center items-center p-4">
     <div class="i-heroicons-outline:home w-8 h-8 bg-primary hover:bg-tertiary" />
     <div class="i-heroicons-outline:phone w-8 h-8 bg-primary hover:bg-tertiary" />
     <div class="i-heroicons-outline:calendar w-8 h-8 bg-primary hover:bg-tertiary" />
     <div class="i-heroicons-outline:user w-8 h-8 text-primary-600 bg-primary hover:bg-tertiary" />
     <router-link to="/end">
       <div class="i-heroicons-outline:check-circle w-8 h-8 bg-primary hover:bg-tertiary" />
     </router-link>
  </nav>

</template>
