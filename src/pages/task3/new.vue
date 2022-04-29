<script setup lang="ts">
const title = ref("");
const author = ref("");
const body = ref("");
const errMessage = ref("");

const isSubmitting = ref(false);
const onSubmit = async () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.value,
      author: author.value,
      body: body.value,
    }),
  };
  errMessage.value = await fetch(
    "https://emilia-vue-challenge.deta.dev/notes",
    requestOptions
  )
    .then(response => response.status === 422 ? 'Error' : 'Success')
}
</script>

<template>
  <div
    class="rounded-md bg-white border-2 border-primary-200 shadow-sm overflow-hidden"
  >
    <h1 class="p-6 text-3xl font-medium text-primary-700 text-center">
      New Note 📝
    </h1>
    <form @submit.prevent="onSubmit">
      <div class="p-6 grid gap-4 text-gray-800">
        <div class="grid gap-1">
          <label for="title" class=""> Title </label>
          <input
            id="title"
            v-model="title"
            type="text"
            name="title"
            autocomplete="title"
            class="input"
          />
        </div>

        <div class="grid gap-1">
          <label for="author" class=""> Author </label>
          <input
            id="author"
            v-model="author"
            type="text"
            name="author"
            autocomplete="author"
            class="input"
          />
        </div>

        <div class="grid gap-1">
          <label for="body" class=""> Body </label>
          <textarea
            id="body"
            v-model="body"
            name="body"
            rows="3"
            class="min-h-40 p-4 shadow-sm block w-full input"
          />
        </div>
      </div>
      <div
        v-if="errMessage && errMessage === 'Error'"
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Error! </strong>
        <span class="block sm:inline">Something was wrong, try again!.</span>
        <span
          class="absolute top-0 bottom-0 right-0 px-4 py-3"
          @click="errMessage = ''"
        >
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
      <div
        v-else-if="errMessage && errMessage === 'Success'"
        class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Done! </strong>
        <span class="block sm:inline">Note is created successfully.</span>
        <span
          class="absolute top-0 bottom-0 right-0 px-4 py-3"
          @click="errMessage = ''"
        >
          <svg
            class="fill-current h-6 w-6 text-green-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
      <div class="px-6 py-3 bg-primary-100 flex flex-row-reverse gap-6">
        <button
          class="bg-primary-50 font-medium rounded-md flex border-2 h-12 shadow-sm px-3 gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
          :class="
            isSubmitting
              ? 'text-primary-500 border-primary-100'
              : 'text-primary-800  border-primary-200'
          "
        >
          {{ isSubmitting ? "Creating Note ..." : "Create Note" }}
        </button>
        <router-link
          to="/task3"
          class="text-primary-800 font-medium rounded-md flex h-12 px-3 gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
        >
          Cancel
        </router-link>
      </div>
    </form>
  </div>
</template>
