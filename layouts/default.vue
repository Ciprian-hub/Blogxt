<template>
  <div class="bg-gray-100 min-h-screen text-gray-900">
    <nav class="bg-white shadow text-lg p-6">
      <Title>{{ title }}</Title>
      <div class="container mx-auto flex items-center justify-between px-6">
        <div>
          <NuxtLink to="/">Logo</NuxtLink>
        </div>
        <div>
          <ul class="flex space-x-12">
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/login">Login</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/settings">Settings</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <slot/>
  </div>
</template>
<script setup>

const title = useState('title', () => {
  return  'Blog'
})
</script>

<style>
.router-link-active {
  font-weight: bold;
}
</style>