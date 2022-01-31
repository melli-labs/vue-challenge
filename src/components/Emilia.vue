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
  '/task5': {
    title: 'Task 5 - Interaction with a REST API',
    description: 'The Notes you can see here are using mock data. For Task 5 I need you to fill this page with Notes from our database. You can get them through this REST API: https://emilia-vue-challenge.deta.dev/docs. Also I want you to implement functions to create, update and delete Notes. FYI there are some notes in the database I don\'t want you to edit, so I made them readonly.',
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
    <div v-if="show" class="max-w-screen-md transition bottom-0 left-0 z-10 duration-200 absolute">
      <div
        class="bg-white rounded-lg flex border-2 border-gray-200 shadow-sm mx-4 mb-4 p-8 gap-2 relative justify-between"
      >
      <div class="bottom-full absolute pointer-events-none">
        <img src="/emilia.svg" class="ml-20 w-sm">
        <Transition appear enter-from-class="opacity-0" leave-to-class="opacity-0">
          <img
            v-if="showGlasses"
            src="/glasses.svg"
            class="transition-opacity top-0 w-160px -rotate-12 translate-x-118px translate-y-83px duration-300 absolute"
          >
        </Transition>
      </div>
        <div>
          <h1 class="font-medium text-xl mb-2">
            {{ message.title }}
          </h1>
          <p class="text-lg">
            {{ message.description }}
          </p>
        </div>
        <div
          class="cursor-pointer flex-shrink-0 h-8 opacity-65 w-8 i-carbon:close hover:opacity-50"
          @click="show = false"
        />
      </div>
    </div>
  </Transition>
</template>
