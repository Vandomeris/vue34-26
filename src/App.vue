<script setup lang="ts">
import { provide, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import type { Product } from './types/Products'

const cart = reactive<Product[]>([])

provide('cart', cart)
</script>

<template>
  <header class="flex justify-between container mx-auto py-4">
    <div>LOGO</div>

    <nav class="flex gap-x-3">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/products">Товары</RouterLink>
      <RouterLink to="/cart">Корзина</RouterLink>
    </nav>
  </header>

  <main class="container mx-auto">
    <RouterView />
  </main>

  <footer></footer>
</template>
