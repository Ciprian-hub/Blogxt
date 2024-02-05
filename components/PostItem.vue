<template>
  <div class="py-8">
    <img :src="`https://picsum.photos//id/${randomId}/400/300`" alt="" class="rounded">
    <h3 class="text-3xl font-bold mt-4">
      <NuxtLink :to="`/posts/1`">
        Title of post
      </NuxtLink>
    </h3>
    <div class="post-meta text-gray-700 flex items center space-x-2">
      <div>Feb 2 2024</div>
      <div>&middot;</div>
      <div>Author Ciprian</div>
    </div>
    <div class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    <div class="mt-4">
      <NuxtLink :to="`/posts/1`"
                class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2"
      >View Post</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const randomId = Math.floor(Math.random() * 100) + 1
</script>