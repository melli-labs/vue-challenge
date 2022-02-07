<script setup lang="ts">
withDefaults(defineProps<{ showGlasses?: boolean }>(), { showGlasses: false })

const show = ref(true)

interface Message {
  title: string
  description: string
}

const messages: Record<string, Message> = {
  '/task1': {
    title: 'Task 1 - Vue 3 🖖 Basics',
    description: 'Unfortunately, I can\'t read this tiny note 🧐. Can you help me to put on my glasses 👓️?. Therefore take a look at `src/pages/task1`. The button at the top of the page should toggle my glasses. But the `showGlasses` variable is not reactive yet. We try to use the new Composition API in combination with the <script setup> style. If you are not familiar with it yet, read the new docs at https://vuejs.org/guide/introduction.html#api-styles. After you finished this task a link to the next task will appear at the bottom of this page!',
  },
  '/task2': {
    title: 'Task 2 - CSS / TailwindCSS',
    description: 'Try to reproduce this great piece of artwork on the right side 🎨 using the TailwindCSS utility classes. Only change the markup in `components/Artwork.vue`. When you are satisfied with your solution click the button at the top to go to the next task. P.S. If you wonder why TailwindCSS is not installed, we use the alternative Atomic CSS engine \'UnoCSS\' 🔥. But the class names are identical to TailwindCSS 🍃.',
  },
  '/task3': {
    title: 'Task 3 - Interaction with a REST API',
    description: 'In our third task, we will interact with a REST API 📥️. You can find the Swagger documentation at https://emilia-vue-challenge.deta.dev/docs. The goal is to implement a simple notes 📝 application. Right now, the notes you can see here are using mock data. To complete this last task, you need to fetch the real data from our database 📊. Furthermore, it should be possible to create a new note using the \'New Note\' button and edit and delete notes using the dropdown menu. Most of the user interface is already there and you only need to implement the API logic. But of course, you are free to make improvements to the current UI 😊. When you\'re done ✅, hit the big yellow button at the top right!',
  },
  '/task3/new': {
    title: 'Task 3 - New Note',
    description: 'Post the data of this form to https://emilia-vue-challenge.deta.dev/notes.',
  },
  '/task4': {
    title: 'Task 4 - Design Challenge 🎨',
    description: 'In this last task, your creativity is needed! The goal is to design this contacts view. We used our team as sample data so you already get to know us 🤗. The first screen consists of a navbar and a list of contacts 👥. Clicking on a contact opens a more detailed view of a single contact 👤. I recommend starting with the styling of the navbar located in `components/NavBar.vue`. Then I would style the contacts-list in `components/ContactList.vue`. Finally, I would design the detail page in `components/ContactDetail.vue`. When you are satisfied with your solution, click on the check icon ✅ in the navbar to finish the challenge 🏁.',
  },
  '/task5': {
    title: 'Task 5 - Vue Router 🧭 & Pinia 🍍',
    description: 'under construction',
  },
  '/end': {
    title: 'You solved the challenge 🔥',
    description: 'Amazing 🤩! This is impressive. We would love to get in touch with you 💯. Therefore, create a pull request 📥️ with your solution ✅ at https://github.com/mit-emilia/vue-challenge!',
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
