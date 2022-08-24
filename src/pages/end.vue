<template>
  <Melli />

  <div class="min-h-screen bg-primary-50 grid place-items-center">
    <Transition appear enter-from-class="opacity-0 -translate-y-2">
      <div class="transition duration-2000 grid gap-6 text-center">
        <h1 class="text-8xl animate-bounce">
          🏆️
        </h1>
        <h2 class="text-4xl font-semibold text-primary-800">
          Congratulations!
        </h2>
      </div>
    </Transition>
  </div>
</template>
