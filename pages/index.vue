<template>
  <Title>Home | {{ title }}</Title>
  <div class="container mx-auto flex justify-between my-6">
    <input type="text" class="w-4/12">
    <NuxtLink to="/create"
              class="bg-blue-600 py-2 px-3 text-white font-light rounded-full shadow hover:bg-blue-500 transition-all">
      Add New Post
    </NuxtLink>
  </div>
  <div class="container lg:grid lg:grid-cols-3 gap-4 mx-auto">
    <div v-for="post in posts" :key="post.id"
         class="mx-auto">
      <PostItem :post="post"/>
    </div>
  </div>
</template>
<script setup>

const posts = ref([])

const title = useState('title')
try {
  const response = await useNuxtApp().$apiFetch('/api/posts')
  posts.value = await response
  console.log(posts.value)
} catch (e) {
  console.log(e)
}

</script>