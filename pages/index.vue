<template>
  <Title>Home | {{ title }}</Title>
  <div class="container mx-auto">
    <div class="mx-auto lg:grid lg:grid-cols-3 gap-4">
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>

    </div>
  </div>
</template>
<script setup>

const title = useState('title')

</script>