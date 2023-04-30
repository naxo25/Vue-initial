<template>
  <div class="container min-h-screen px-6 py-12 mx-auto flex flex-col items-center justify-center">
    <div class="flex">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <nav class="gap-x-3 flex">
      <button @click="$router.push('/')" :class="btn">Home</button>
      <button @click="$router.push('/about')" :class="btn">About</button>
      <button @click="$router.push('/err')" :class="btn">404</button>
    </nav>

    <main>
      <router-view />

      <p class="read-the-docs text-center">Click on the Vite and Vue logos to learn more</p>
    </main>
  </div>
</template>

<style>
.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.read-the-docs {
  color: #888;
}
</style>

<script setup>
const btn =
  'px-6 py-2 font-semibold tracking-wide capitalize transition-colors duration-300 transform bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80'
</script>
