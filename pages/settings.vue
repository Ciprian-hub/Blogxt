<template>
  <div class="container mx-auto w-1/2 py-8">
{{user}}
  </div>
</template>

<script setup>

import router from "#app/plugins/router.js";
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const user = ref(null)
const posts = ref([])

const {$apiFetch} = useNuxtApp()

onMounted(async () => {
  user.value = await $apiFetch('api/user')

  posts.value = await $apiFetch('api/user/posts')
})
</script>