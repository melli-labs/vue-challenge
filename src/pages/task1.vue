<script setup lang="ts">
const showGlasses = ref(false)
</script>

<template>
  <Emilia :show-glasses="showGlasses" />

  <div class="bg-primary-50 min-h-screen flex flex-col items-center pt-24 gap-8">
    <div class="text-2xl font-medium text-primary-800">
      Put on Emilia's glasses
    </div>
    <Toggle v-model="showGlasses" />
    <div
      class="shadow-lg bg-white px-8 max-w-sm py-48 transition-transform"
      :class="{'scale-50': !showGlasses}"
    >
      This text is super tiny and I can't read it!
    </div>
    <Transition
      appear
      class="transition duration-500"
      enter-from-class="opacity-0 translate-x-20"
      leave-to-class="opacity-0 translate-x-20"
    >
      <router-link v-if="showGlasses" to="/task2" class="btn">
        Go to Task 2
      </router-link>
    </Transition>
  </div>
</template>
