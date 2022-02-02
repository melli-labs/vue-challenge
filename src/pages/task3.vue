<template>
  <Emilia />

  <div class="min-h-screen bg-primary-50">
    <div class="container max-w-screen-lg mx-auto px-4 py-12">
      <router-view v-slot="{ Component }">
        <Transition
          mode="out-in"
          enter-from-class="-translate-y-2 opacity-0"
          leave-to-class="-translate-y-2 opacity-0"
        >
          <component :is="Component" class="transition duration-200" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>
