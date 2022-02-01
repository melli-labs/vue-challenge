<template>
  <Emilia />

  <div class="min-h-screen p-4 bg-primary-50 grid place-items-center">
    <Phone>
      <div class="h-full grid phone-content-grid">
        <router-view v-slot="{ Component }">
          <Transition
            mode="out-in"
            enter-from-class="-translate-x-375px"
            leave-to-class="-translate-x-375px"
          >
            <component :is="Component" class="flex-grow transition duration-200" />
          </Transition>
        </router-view>
        <nav>
          <div class="i-heroicons-outline:home w-8 h-8" />
          <div class="i-heroicons-outline:phone w-8 h-8" />
          <div class="i-heroicons-outline:calendar w-8 h-8" />
          <div class="i-heroicons-outline:user w-8 h-8 text-primary-600" />
          <router-link to="/task5">
            <div class="i-heroicons-outline:arrow-circle-right w-8 h-8" />
          </router-link>
        </nav>
      </div>
    </Phone>
  </div>
</template>

<style scoped>
.phone-content-grid {
  grid-template-rows: 1fr auto;
}
</style>
