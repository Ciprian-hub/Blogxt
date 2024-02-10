<template>
  <div class="container mx-auto w-1/2 py-8">
    <div class="errors text-red-600">
      <ul v-if="errors.length > 0" class="mb-4 list-disc list-inside text-sm text-red-600">
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
    <form action="#" class="space-y-6" @submit.prevent="register">
      <div>
        <label for="name" class="font-semibold">Name</label>
        <input
            v-model="name"
            id="name"
            type="text"
            class="w-full rounded px-2 py-2 mt-2 shadow">
      </div>
      <div>
        <label for="email" class="font-semibold">Email</label>
        <input
            v-model="email"
            id="title"
            type="text"
            class="w-full rounded px-2 py-2 mt-2 shadow">
      </div>
      <div>
        <label for="password">
          Password
        </label>
        <input
            v-model="password"
            id="password"
            type="password"
            class="w-full rounded px-2 py-2 mt-2 shadow"/>
      </div>
      <div>
        <label for="passwordConfirm">
          Password
        </label>
        <input
            v-model="passwordConfirm"
            id="passwordConfirm"
            type="password"
            class="w-full rounded px-2 py-2 mt-2 shadow"/>
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

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const loading = ref(false)
const errors = ref([])
const {$apiFetch} = useNuxtApp()

function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}

async function register() {
  await csrf()
  try {
    await $apiFetch('/register', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirm: passwordConfirm.value
      },
    })
    name.value = ''
    email.value = ''
    password.value = ''
    passwordConfirm.value = ''
    loading.value = false
    router.push('/')
  } catch (err) {
    errors.value = Object.values(err.data.errors).flat()
    loading.value = false
    console.log(err.data)
  }
}
</script>