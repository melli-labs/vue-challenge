<script setup lang="ts">
withDefaults(defineProps<{ showGlasses: boolean }>(), { showGlasses: false })
const show = ref(true)

interface Message {
  title: string
  description: string
}

const messages: Record<string, Message> = {
  '/task1': {
    title: 'Task 1 - Vue Basics',
    description: 'We start off with some Vue 3 🖖 basics. We try to use the new Composition API. If your not familiar with it yet, read the new docs at https://staging.vuejs.org/.',
  },
  '/task2': {
    title: 'Task 2 - CSS / TailwindCSS',
    description: 'Try to reproduce this great piece of artwork on the right side🎨. Only change the markup in \'components/Task2Grid.vue\'.',
  },
  '/task4': {
    title: 'Task 4 - Design Challenge',
    description: 'Does not look very mobile friendly can you help us?',
  },
}

const route = useRoute()
const unknownRouteMessage: Message = {
  title: 'Unknown Route',
  description: 'I don\'t have any information about this route :/.',
}

const message = computed(() => messages[route.path] ?? unknownRouteMessage)
</script>

<template>
  <Transition
    appear
    enter-from-class="opacity-0 -translate-y-10"
    leave-to-class="opacity-0 -translate-y-10"
  >
    <div v-if="show" class="absolute max-w-screen-md left-0 bottom-0 transition duration-200 z-10">
      <div class="relative">
        <img src="/emilia.svg" class="w-sm ml-20">
        <Transition appear enter-from-class="opacity-0" leave-to-class="opacity-0">
          <img
            v-if="showGlasses"
            src="/glasses.svg"
            class="absolute top-0 translate-x-118px translate-y-83px w-160px -rotate-12 transition-opacity duration-300"
          >
        </Transition>
      </div>
      <div
        class="p-8 bg-white border-2 border-gray-200 mb-4 mx-4 rounded-lg flex gap-2 justify-between shadow-sm"
      >
        <div>
          <h1 class="font-medium text-xl mb-2">
            {{ message.title }}
          </h1>
          <p class="text-lg">
            {{ message.description }}
          </p>
        </div>
        <div
          class="w-8 h-8 i-carbon:close flex-shrink-0 cursor-pointer opacity-65 hover:opacity-50"
          @click="show = false"
        />
      </div>
    </div>
  </Transition>
</template>
