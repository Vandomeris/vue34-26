<script setup lang="ts">
import { provide, reactive, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import type { ProductInCart } from './types/Products'
import SlotItem from './components/SlotItem.vue'

const cart = reactive<ProductInCart[]>(JSON.parse(localStorage.getItem('cart')!) || [])

watch(cart, () => {
  localStorage.setItem('cart', JSON.stringify(cart))
})

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

  <SlotItem> </SlotItem>

  <main class="container mx-auto">
    <RouterView />
  </main>

  <footer></footer>
</template>
