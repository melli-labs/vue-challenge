<template>
  <div class="w-375px h-812px box-content bg-white border-12 border-primary-200 rounded-10 grid">
    <div class="h-44px px-8 flex items-center justify-between text-primary-800">
      <div class="font-semibold">
        9:41
      </div>
      <div class="flex gap-1 items-center">
        <div class="i-tabler:bluetooth w-6 h-6" />
        <div class="i-tabler:wifi w-6 h-6 " />
        <div class="i-tabler:battery-3 w-6 h-6" />
      </div>
    </div>

    <slot />
    <svg width="375" height="34" viewBox="0 0 375 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="120" y="21" width="134" height="5" rx="2.5" class="fill-primary-600" />
    </svg>
  </div>
</template>
