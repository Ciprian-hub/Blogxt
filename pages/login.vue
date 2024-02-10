<template>
  <div class="container mx-auto w-1/2 py-8">
    <div class="errors text-red-600">
      <ul v-if="errors.length > 0" class="mb-4 list-disc list-inside text-sm text-red-600">
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
    <form action="" class="space-y-6" @submit.prevent="login">
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
import Cookies from "js-cookie";
import axios from "axios";
import { ofetch } from "ofetch";

axios.defaults.withCredentials = true

const {$apiFetch} = useNuxtApp()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errors = ref([])

function csrf() {
  return $apiFetch('/sanctum/csrf-cookie')
}

async function login() {
  await csrf()
    await $apiFetch('/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      },
    })
}

// async function login() {
//   await csrf()
//   loading.value = true
//   try {
//     await $apiFetch(`login`, {
//       method: 'POST',
//       body: {
//         email: email.value,
//         password: password.value
//       }
//     })
//
//     loading.value = false
//     email.value = ''
//     password.value = ''
//
//     router.push('/')
//   } catch (err) {
//     errors.value = Object.values(err.data.errors).flat()
//     loading.value = false
//     console.log(err.data)
//   }
// }
</script>