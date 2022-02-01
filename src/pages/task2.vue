<template>
  <Emilia />

  <div class="bg-primary-50 min-h-screen p-4 pt-16">
    <div class="mx-auto flex justify-center mb-8">
      <router-link to="/task3" class="btn">
        Go to task 3 if your satisfied with your solution!
      </router-link>
    </div>
    <div class="container mx-auto grid gap-16 lg:grid-cols-2">
      <div class="mx-auto grid gap-4 justify-items-center">
        <div class="text-xl text-center">
          Change the <code>Task2Grid</code> component 🎨
        </div>
        <Task2Grid class="w-64 h-64 sm:w-100 sm:h-100" />
      </div>
      <div class="grid gap-4 justify-items-center">
        <div class="text-xl text-center">
          Try to reproduce this 👍️
        </div>
        <GridSolution class="w-64 h-64 sm:w-100 sm:h-100" />
      </div>
    </div>
  </div>
</template>
