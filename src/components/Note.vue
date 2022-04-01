<script setup lang="ts">
import useNotes from "../modules/notes";
import type { Note } from "~/types";

import { watch } from "vue";

const props = defineProps<{
  note: Note;
}>();

const dropdown = ref(false);
const dropdownRef = ref(null);
onClickOutside(dropdownRef, (event) => {
  event.stopPropagation();
  dropdown.value = false;
});

const edit = ref(false);
const title = ref(props.note.title);
const body = ref(props.note.body);
const author = ref(props.note.author);
const key = ref(props.note.key);
const isUpdating = ref(false);

const { notes, error, fetchData, isFetching, baseUrl, refetch } = useNotes();

const deleteNote = (e) => {
  e.preventDefault();
  const id = key.value;
  const deleteOptions = ref({
    method: "DELETE",
    headers: { Accept: "application/json", "Content-type": "application/json" },
  });
  const url = `${baseUrl.value}/${id}`;
  fetchData(url, deleteOptions.value, refetch);
};

const updateNote = (e) => {
  e.preventDefault();
  const data = {
    title: title.value,
    body: body.value,
    author: props.note.author,
  };
  const id = key.value;
  const updateOptions = {
    method: "PUT",
    headers: { Accept: "application/json", "Content-type": "application/json" },
    body: JSON.stringify(data),
  };
  const url = `${baseUrl.value}/${id}`;
  if ((title, body)) {
    fetchData(url, updateOptions, refetch);
    isUpdating.value = true;
  }
};
</script>

<template>
  <div
    class="rounded-md bg-white border-2 border-primary-200 shadow-sm overflow-hidden"
  >
    <header
      class="px-3 py-2 flex bg-primary-100 gap-2 items-center text-sm text-primary-800"
    >
      <div
        class="h-10 w-10 uppercase rounded-full grid place-items-center font-bold bg-primary-50"
      >
        {{ note.author.slice(0, 2) }}
      </div>
      <div>
        <span>@{{ note.author }}</span>
        <span class="opacity-65">{{ " commented on " }}</span>
        <span>{{ new Date(note.createdAt).toDateString() }}</span>
        <span v-if="note.updatedAt !== note.createdAt">· edited</span>
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
        <Transition
          enter-from-class="opacity-0 -translate-y-2"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="dropdown"
            ref="dropdownRef"
            class="dropdown-menu transition duration-200 absolute text-base py-2 -right-2 bg-white border border-gray-200 grid rounded-md shadow"
            @click="dropdown = false"
          >
            <button
              class="px-6 py-2 text-gray-800 hover:bg-gray-50 flex items-center gap-1"
              @click="edit = true"
            >
              <span class="i-heroicons-outline:pencil-alt w-6 h-6 opacity-65" />
              Edit
            </button>
            <button
              class="px-6 py-2 text-danger-600 hover:bg-danger-50 flex items-center gap-1"
              @click="deleteNote"
            >
              <span class="i-heroicons-outline:x w-6 h-6 opacity-65" />
              Delete
            </button>
          </div>
        </Transition>
      </div>
    </header>
    <main class="p-6 text-gray-800 grid gap-2">
      <input v-if="edit" v-model="title" class="input" />
      <h1 v-else class="font-medium text-lg">
        {{ note.title }}
      </h1>
      <textarea
        v-if="edit"
        v-model="body"
        name="body"
        rows="3"
        class="min-h-40 p-4 input"
      />
      <p v-else>
        {{ note.body }}
      </p>
      <div v-if="edit" class="flex flex-row-reverse">
        <button
          class="bg-primary-50 font-medium rounded-md flex border-2 h-12 shadow-sm px-3 gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
          :class="
            isUpdating
              ? 'text-primary-500 border-primary-100'
              : 'text-primary-800  border-primary-200'
          "
          @click="updateNote"
        >
          {{ isUpdating ? "Updating Note ..." : "Update Note" }}
        </button>
        <button
          class="text-primary-800 font-medium rounded-md flex h-12 px-3 gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
          @click="edit = false"
        >
          Cancel
        </button>
      </div>
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
.dropdown-menu::before,
.dropdown-menu::after {
  position: absolute;
  display: inline-block;
  content: "";
}
</style>
