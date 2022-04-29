<template>
  <div class="container flex flex-wrap justify-around items-start ml-auto mr-auto">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div id="mobile-menu-4" class="hidden justify-around w-full md:flex md:w-auto md:order-1">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <div class="i-heroicons-outline:home bg-gray w-5 h-5 hover:bg-gray-700" />
          </li>
          <li>
            <div class="i-heroicons-outline:phone bg-gray w-5 h-5 hover:bg-gray-700" />
          </li>
          <li>
            <div class="i-heroicons-outline:calendar bg-gray w-5 h-5 hover:bg-gray-700" />
          </li>
          <li>
            <div class="i-heroicons-outline:user bg-primary w-5 h-5 text-primary " />
          </li>
          <li>
            <router-link to="/end">
              <div class="i-heroicons-outline:check-circle bg-gray w-5 h-5 hover:bg-gray-700" />
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
