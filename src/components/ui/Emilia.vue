<script setup lang="ts">
withDefaults(defineProps<{ showGlasses: boolean }>(), { showGlasses: false })
const show = ref(true)

interface Message {
  title: string
  description: string
}

const messages: Record<string, Message> = {
  '/task1': {
    title: 'Task 1 - Vue 3 🖖 Basics',
    description: 'Unfortunately, I can\'t read this tiny note 🧐. Can you help me to put on my glasses 👓️?. Therefore take a look at `src/pages/task1`. The button at the top of the page should toggle my glasses. But the `showGlasses` variable is not reactive yet. We try to use the new Composition API in combination with the <script setup> style. If you are not familiar with it yet, read the new docs at https://staging.vuejs.org/guide/introduction.html#api-styles. After you finished this task a link to the next task will appear at the bottom of this page!',
  },
  '/task2': {
    title: 'Task 2 - CSS / TailwindCSS',
    description: 'Try to reproduce this great piece of artwork on the right side 🎨. Only change the markup in \'components/Task2Grid.vue\'. When you are satisfied with your solution click the button at the top to go to the next task.',
  },
  '/task3': {
    title: 'Task 3 - Vue Router 🧭 & Pinia 🍍',
    description: 'not done yet :(',
  },
  '/task4': {
    title: 'Task 4 - Design Challenge',
    description: 'Does not look very mobile friendly can you help us?',
  },
  '/task5': {
    title: 'Task 5 - Interaction with a REST API',
    description: 'Currently, the notes you can see here are using mock data. To finish this last task, you need to fetch the real data from our database via this REST API: https://emilia-vue-challenge.deta.dev/docs. Also, I want you to implement functions to create, update and delete Notes. FYI there are some notes in the database I don\'t want you to edit, so I made them read-only.',
  },
  '/task5/new': {
    title: 'Task 5 - New Note',
    description: 'Post the data to https://emilia-vue-challenge.deta.dev/notes.',
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
    <div v-if="show" class="max-w-screen-md fixed transition bottom-0 left-0 z-10 duration-200 absolute">
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
          <h1 class="font-medium text-lg mb-2">
            {{ message.title }}
          </h1>
          <p>
            {{ message.description }}
          </p>
        </div>
        <div
          class="cursor-pointer flex-shrink-0 h-6 opacity-65 w-6 i-heroicons-outline:x hover:opacity-50"
          @click="show = false"
        />
      </div>
    </div>
  </Transition>
</template>
