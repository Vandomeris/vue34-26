<template>
  <h1>CartPage</h1>

  <div class="grid grid-cols-4 gap-5">
    <div v-for="product in cart" :key="product.id">
      <p>{{ product.title }}</p>
      <p>$$$$${{ product.price }}$$$$$$</p>
      <p>Count {{ product.quantity }}</p>
      <button @click="deleteFromCart(product.id)">Удалить из корзины</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductInCart } from '@/types/Products'
import { inject, type Reactive } from 'vue'

const cart = inject<Reactive<ProductInCart[]>>('cart', [])

function deleteFromCart(id: string) {
  const index = cart.findIndex((item) => item.id === id)
  if (index !== -1) {
    cart.splice(index, 1)
  }
}
</script>
