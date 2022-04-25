<template>
  <!--to solve this task we can use one than more solution-->
  <div class="grid grid-cols-4 grid-rows-4 border-4 gap-1 p-1 w-64 h-64 sm:w-100 sm:h-100">
    <div class="border-6 border-secondary-400 row-span-3"></div>

      <div class="grid justify-items-stretch grid-rows-3 grid-cols-3 gap-1 col-span-3 row-span-3">
         <div class="border-6 border-primary-400 justify-self-center self-center w-6/12 h-6/12 rotate-45" ></div>
         <div class="border-6 border-primary-400"></div>
         <div class="text-2xl font-semibold grid place-items-center">Emilia</div>
         <div class="border-6 border-primary-400"></div>
         <div class="border-6 border-primary-400 bg-primary-400 justify-self-center self-center w-6/12 h-6/12 rotate-45"></div>
         <div class="border-6 border-primary-400"></div>
         <div class="border-6 border-primary-400 bg-primary"></div>
         <div class="border-6 border-primary-400"></div>
         <div class="border-6 border-primary-400 justify-self-center self-center w-6/12 h-6/12 rotate-45"></div>
     </div>
    
    <div class="text-2xl font-semibold grid place-items-center">Emilia</div>
    <div class="border-6 border-tertiary-400 col-span-3"></div>
  </div>

  <!-- you probably need a few more of these divs ... -->
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .text-2xl {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style