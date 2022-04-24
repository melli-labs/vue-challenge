<script setup lang="ts">
import { useFuse } from "@vueuse/integrations/useFuse";
import type { Note } from "~/types";
import { onMounted } from "vue";
const axios: any = inject("axios"); // import axios for RestApi

interface Info {
  title: String;
  body: String;
  author: String;
  key: String;
  readonly: Boolean;
  createdAt: String;
  updatedAt: String;
} // define interface for define mockData ref

const mockData: Note = ref<Array<Info>>([]); // add ref to mockData

let isFetching = ref(false); // change isFetching to ref
const input = ref("");
const { results } = useFuse(input, mockData, {
  fuseOptions: { keys: ["title", "body", "author"] },
  matchAllWhenSearchEmpty: true,
});

onMounted(async () => {
  isFetching.value = true;
  const res = await axios.get("https://emilia-vue-challenge.deta.dev/notes");
  isFetching.value = false;
  if (res.status === 200) {
    res.data.forEach((el: any) => {
      mockData.value.push(el);
    });
  } else if (res.status === 422) {
    alert(res.detail.msg);
  }
});

// methods
const deleteItem = (key: any) => {
  mockData.value = mockData.value.filter((el: any) => el.key !== key);
};
</script>

<template>
  <div class="grid gap-6">
    <div class="flex gap-4 flex-col sm:flex-row">
      <router-link
        to="/task3/new"
        class="bg-primary-100 text-primary-800 font-medium rounded-md border-2 border-primary-200 h-12 shadow-sm px-3 flex gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
      >
        <div class="i-heroicons-outline:plus" />
        New Note
      </router-link>
      <div
        class="flex-grow bg-white rounded-md flex border-2 border-primary-200 h-12 shadow-sm px-3 gap-3 items-center focus-within:outline-none focus-within:border-primary-500 focus-within:ring-3 focus-within:ring-primary-300"
      >
        <div class="h-6 text-primary-700 w-6 i-heroicons-outline:search" />
        <input
          v-model="input"
          class="flex-grow h-full fill-primary-700 focus:outline-none"
          autofocus
        />
      </div>
      <router-link
        to="/task4"
        class="bg-tertiary-100 text-tertiary-800 font-medium rounded-md border-2 border-tertiary-200 h-12 shadow-sm px-3 flex gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
      >
        <div class="i-heroicons-outline:chevron-right" />
        Next task
      </router-link>
    </div>
    <div v-if="isFetching" class="min-h-xs grid place-items-center">
      <div
        class="i-tabler:loader-quarter animate-spin w-6 h-6 text-primary-800"
      />
    </div>
    <div
      v-else-if="results.length > 0"
      class="grid gap-4 md:min-w-screen-sm lg:grid-cols-2"
    >
      <Note
        v-for="(result, index) in results"
        :key="index"
        :note="result.item"
        @deleteItem="deleteItem"
      />
    </div>
    <div
      v-else
      class="min-h-xs grid place-items-center text-2xl text-primary-700 font-medium tracking-wide"
    >
      No results
    </div>
  </div>
</template>
