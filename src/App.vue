<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header class="sticky top-0 left-0 z-[999]"/>
  <section class="flex">
    <main class="w-full min-h-screen p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>
</template>

<style scoped>
</style>
