<script setup>
</script>

<template>
  <header class="bg-black border-b-light-100 border-b h-20 text-white items-center flex justify-center p-5 gap-x-4 text-2xl">Hackernews Task
    <section class="text-white">
      <router-link to="/">Stories</router-link>
    </section>
  </header>
  <section class="flex">
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped>
</style>
