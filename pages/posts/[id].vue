<template>
  <div class="container mx-auto">
    <img :src="`https://picsum.photos//id/${route.params.id}/400/300`" alt="" class="rounded">
    <h3 class="text-3xl font-bold mt-4">
      {{ post.title }}
    </h3>
    <div class="post-meta text-gray-700 flex items center space-x-2">
      <div>{{ post }}</div>
      <div>&middot;</div>
      <div>{{ post.body }}</div>
    </div>
    <div class="mt-4">
      {{ post.body }}
    </div>
  </div>
</template>
<script setup>

import {useRoute} from "vue-router";

const route = useRoute()
const post = await useNuxtApp().$apiFetch(`/api/posts/${route.params.id}`)
</script>