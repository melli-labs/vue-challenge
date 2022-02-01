<script setup lang="ts">
import type { Note } from '~/types'

defineProps<{
  note: Note
}>()

const dropdown = ref(false)
const dropdownRef = ref(null)
onClickOutside(dropdownRef, (event) => {
  event.stopPropagation()
  dropdown.value = false
})
</script>

<template>
  <div class="rounded-md bg-white border-2 border-primary-200 shadow-sm overflow-hidden">
    <header class="px-3 py-2 flex bg-primary-100 gap-2 items-center text-sm text-primary-800">
      <div
        class="h-10 w-10 uppercase rounded-full grid place-items-center font-bold bg-primary-50"
      >
        {{ note.author.slice(0, 2) }}
      </div>
      <div>
        <span>@{{ note.author }}</span>
        <span class="opacity-65"> commented on </span>
        <span>{{ new Date(note.createdAt).toDateString() }}</span>
        <span v-if="note.updatedAt !== note.createdAt"> · edited</span>
      </div>
      <div
        v-if="note.readonly"
        class="ml-auto border-2 rounded-full flex gap-1 bg-primary-50 border-primary-200 px-2 py-1 items-center"
      >
        <div class="i-heroicons-outline:lock-closed opacity-65" />
        <span class="text-xs">readonly</span>
      </div>
      <div v-else class="ml-auto relative inline-block ml-2">
        <button
          class="ml-auto w-6 h-6 i-heroicons-outline:dots-horizontal"
          @click="dropdown = true"
        />
        <Transition enter-from-class="opacity-0 -translate-y-2" leave-to-class="opacity-0 -translate-y-2">
          <div
            v-if="dropdown"
            ref="dropdownRef"
            class="dropdown-menu transition duration-200 absolute text-base py-2 -right-2 bg-white border border-gray-200 grid rounded-md shadow"
          >
            <button class="px-6 py-2 text-gray-800 hover:bg-gray-50 flex items-center gap-1">
              <span class="i-heroicons-outline:pencil-alt w-6 h-6 opacity-65" />
              Edit
            </button>
            <button
              class="px-6 py-2 text-danger-600 hover:bg-danger-50 flex items-center gap-1"
            >
              <span class="i-heroicons-outline:x w-6 h-6  opacity-65" />
              Delete
            </button>
          </div>
        </Transition>
      </div>
    </header>
    <main class="p-6 text-gray-800">
      <h1 class="font-medium text-lg mb-1">
        {{ note.title }}
      </h1>
      <p>{{ note.body }}</p>
    </main>
  </div>
</template>

<style>
.dropdown-menu::before {
    border: 8px solid transparent;
    top: -16px;
    right: 11px;
    border-bottom-color: rgb(231, 229, 228);
}
.dropdown-menu::after {
    border: 7px solid transparent;
    top: -14px;
    right: 12px;
    border-bottom-color: white;
}
.dropdown-menu::before, .dropdown-menu::after {
    position: absolute;
    display: inline-block;
    content: "";
}
</style>
