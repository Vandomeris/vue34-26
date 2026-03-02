<template>
  <button @click="addToCart(product)">Купить</button>
  <div>
    <button>-</button>
    <span>{{}}</span>
    <button>+</button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Products'
import { inject, type Reactive } from 'vue'

const cart = inject<Reactive<Product[]>>('cart', [])

function addToCart(product: Product): void {
  const index = cart.findIndex((item) => item.id === product.id)
  if (index === -1) {
    cart.push(product)
  } else {
  }
}

defineProps<{
  product: Product
}>()
</script>
