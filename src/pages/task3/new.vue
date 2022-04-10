<script setup lang="ts">
const title = ref('')
const author = ref('')
const body = ref('')

const router = useRouter()
const url = 'https://emilia-vue-challenge.deta.dev/notes'

const isSubmitting = ref(false)

const onSubmit = () => {
  isSubmitting.value = true

  const { error, onFetchError, onFetchResponse } = useFetch(url).post({
    title: title.value,
    author: author.value,
    body: body.value,
  })

  onFetchError(() => {
    alert(`An error has occurred \n ${error.value}`)
    console.error(error)
  })

  onFetchResponse(() => {
    isSubmitting.value = false
    router.push('/task3')
  })
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

      <div class="px-6 py-3 bg-primary-100 flex flex-row-reverse gap-6">
        <button
          class="bg-primary-50 font-medium rounded-md flex border-2 h-12 shadow-sm px-3 gap-1.5 items-center focus:outline-none focus:border-primary-500 focus:ring-3 focus:ring-primary-300"
          :class="
            isSubmitting
              ? 'text-primary-500 border-primary-100'
              : 'text-primary-800  border-primary-200'
          "
        >
          {{ isSubmitting ? 'Creating Note ...' : 'Create Note' }}
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
