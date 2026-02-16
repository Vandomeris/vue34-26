<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex justify-between container mx-auto py-4">
    <div>LOGO</div>

    <nav class="flex gap-x-3">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/products">Товары</RouterLink>
    </nav>
  </header>

  <main class="container mx-auto">
    <RouterView />
  </main>

  <footer></footer>
</template>
