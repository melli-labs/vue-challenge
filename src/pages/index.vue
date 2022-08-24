<script setup lang="ts">
const texts = [
  'Hi, I am Melli!',
  'Thank you for participating in our challenge 👍️',
  'Click below to start the challenge 🚀',
]
const { counter, pause } = useInterval(2000, { controls: true })
const text = computed(() => texts[counter.value])

const showButton = ref(false)

  ; (async () => {
    await until(counter).toMatch(v => v >= texts.length - 1)

    pause()
    showButton.value = true
  })()
</script>

<template>
  <div class="bg-primary-50 min-h-screen grid items-center">
    <div class="grid place-items-center gap-12">
      <Transition appear class="transition duration-600" enter-from-class="opacity-0 translate-y-10">
        <div
          class="relative w-full sm:w-auto sm:min-w-screen-sm bg-gradient-to-l from-primary-100 to-secondary-100 border-12 border-gray-900 rounded-2xl shadow-lg px-16 pt-12">
          <img class="max-w-xs ml-auto" src="/melli.svg">
          <div class="absolute w-full bottom-0 left-0 p-3">
            <Transition appear class="transition delay-300 duration-600" enter-from-class="opacity-0 translate-y-10">
              <div class="text-center text-lg text-white bg-black bg-opacity-80 mx-auto max-w-md p-2 rounded">
                {{ text }}
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
      <Transition appear class="transition duration-500" enter-from-class="opacity-0 translate-x-20">
        <router-link to="/task1" class="btn">
          Let's go!
        </router-link>
      </Transition>
    </div>
  </div>
</template>
