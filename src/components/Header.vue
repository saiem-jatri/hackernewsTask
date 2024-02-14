<template>
  <div>
    <header class="shadow-lg px-3 py-4 w-full bg-white">
      <nav class="flex justify-between">
        <div class="flex items-center text-purple-900 font-extrabold text-xl md:text-2xl italic">
          <router-link to="/"> HackerNews Blog</router-link>
        </div>
        <div class="flex items-center gap-3">
            <router-link class="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full" to="/">Stories</router-link>
        </div>
      </nav>
    </header>
  </div>
</template>