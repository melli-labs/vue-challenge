<template>
  <div class="w-375px h-812px box-content bg-white border-12 border-primary-200 rounded-10 flex flex-col">
    <div class="h-44px px-8 flex items-center justify-between text-primary-800">
      <div class="font-semibold">
        9:41
      </div>
      <div class="flex gap-1">
        <div class="i-carbon:signal-strength w-5 h-5" />
        <div class="i-carbon:wifi w-5 h-5 " />
        <div class="i-carbon:battery-half w-5 h-5" />
      </div>
    </div>

    <div class="flex-grow grid">
      <slot />
    </div>
    <svg width="375" height="34" viewBox="0 0 375 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="120" y="21" width="134" height="5" rx="2.5" class="fill-primary-600" />
    </svg>
  </div>
</template>
