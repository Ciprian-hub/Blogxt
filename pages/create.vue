<template>
  <div class="container mx-auto w-1/2 py-8">
    <div class="errors text-red-600">
      <ul v-if="errors.length > 0" class="mb-4 list-disc list-inside text-sm text-red-600">
        <li v-for="(error, index) in errors" :key="index">
          {{ error}}
        </li>
      </ul>
    </div>
    <form action="#" class="space-y-6" @submit.prevent="createPost">
      <div>
        <label for="title" class="font-semibold">Title</label>
        <input
            v-model="title"
            id="title"
            type="text"
            class="w-full rounded px-2 py-2 mt-2 shadow">
      </div>
      <div>
        <label for="body">
          Body
        </label>
        <textarea
            v-model="body"
            id="body"
            cols="30"
            rows="10"
            class="w-full rounded px-2 py-2 mt-2 shadow"></textarea>
      </div>
      <div>
        <button type="submit"
                class="bg-blue-600 py-2 px-6 text-white font-light rounded-lg shadow hover:bg-blue-500 transition-all">
          Submit
        </button>
        <span v-show="loading">
          Loading...
        </span>
      </div>
    </form>
  </div>
</template>

<script setup>

import router from "#app/plugins/router.js";
import {useRouter} from "vue-router";

const title = ref('')
const body = ref('')
const loading = ref(false)
const errors = ref([])

async function createPost() {
  loading.value = true
  try {
    const post = await useNuxtApp().$apiFetch(`/api/post`, {
      method: 'POST',
      body: {
        title: title.value,
        body: body.value
      }
    })

    loading.value = false
    title.value = ''
    body.value = ''

    router.push('/')
  }catch (err) {
    errors.value = Object.values(err.data.errors).flat()
    loading.value = false
    console.log(err.data)
  }
}
</script>