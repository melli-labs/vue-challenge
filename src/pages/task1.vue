<script setup lang="ts">
// tip: the `showGlasses` variable should be reactive ...
let showGlasses = ref(false);
</script>

<template>
  <Emilia :show-glasses="showGlasses" />

  <div class="flex flex-col min-h-screen p-8 bg-primary-50 gap-8 items-center">
    <div class="font-medium text-2xl text-primary-800">
      Put on Emilia's glasses
    </div>
    <Toggle v-model="showGlasses" />
    <div
      class="bg-white max-w-sm shadow-lg py-48 px-8 transition-transform"
      :class="{ 'scale-50': !showGlasses }"
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
