<script setup lang="ts">
import type { Person } from '~/types'

defineProps<{ person: Person }>()
const emit = defineEmits<{ (name: 'back'): void }>()
</script>

<template>
  <div class="bg-cyan-500">
    <header>
      <button class="flex gap-1 mt-3 ml-2 animate-pulse" @click="emit('back')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        </svg>
      </button>
    </header>
    <div role="listitem" class=" relative mt-30">
      <div class="rounded overflow-hidden shadow-md bg-white">
        <div class="absolute -mt-20 w-full flex justify-center">
          <div class="h-32 w-32">
            <img
              :src="`https://meetap-it.gitlab.io/emilia/assets/team/${person.handle}.webp`"
              class="w-40 h-40 rounded-full"
            >
          </div>
        </div>
        <div class="px-6 mt-30">
          <h1 class="font-bold text-3xl text-center mb-1">{{ person.name }}
          </h1>
          <p class="text-gray-800 text-sm text-center">{{ person.role }}
          </p>
          <p class="text-center text-gray-600 text-base pt-3 font-normal">@{{ person.handle }}</p>
          <div class="w-full flex justify-center pt-5 pb-5">
            <a href="javascript:void(0)" class="mx-5">
              <div aria-label="Github" role="img">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
            </a>
            <a href="javascript:void(0)" class="mx-5">
              <div aria-label="Twitter" role="img">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </div>
            </a>
            <a href="javascript:void(0)" class="mx-5">
              <div aria-label="Instagram" role="img">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div class="grid grid-rows-4 grid-flow-col w-full pt-10">
          <button class="p-4 border rounded-lg hover:bg-#99f6e4 hover:scale-102 bg-#f0fdfa">
            <div class="grid content-center justify-items-center justify-self-center" />
            message
          </button>
          <button class="p-4 border rounded-lg hover:bg-#99f6e4 hover:scale-102 bg-#f0fdfa">
            <div />
            call
          </button>
          <button class="p-4 border rounded-lg hover:bg-#99f6e4 hover:scale-102 bg-#f0fdfa">
            <div />
            mail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.headerClass{
  background-image: 'https://cdn.vox-cdn.com/thumbor/7WKuZk3jAb3uWzwgtRGKTR0VhE4=/0x0:4032x3024/1200x800/filters:focal(1694x1190:2338x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/66290775/GettyImages_1129073013.0.jpg';

}
</style>
