<template>
  <div class="py-8 border-2 flex flex-col">
    <img :src="`https://picsum.photos//id/${props.post.id}/400/300`" alt="" class="rounded">
    <h3 class="text-3xl font-bold mt-4">
      <NuxtLink :to="`/posts/${props.post.id}`" class="line-clamp-1">
        {{props.post.title}}
      </NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items center space-x-2">
      <div>{{format(new Date(props.post.created_at), 'MMMM dd yyyy' )}}</div>
      <div>&middot;</div>
      <div>{{props.post.user.name}}</div>
    </div>
    <div class="mt-4 line-clamp-2">
      {{props.post.body}}
    </div>
    <div class="mt-4">
      <NuxtLink :to="`/posts/${props.post.id}`" class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2">
        View Post
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import {format} from 'date-fns'
const props = defineProps({
  post: Object
})
</script>