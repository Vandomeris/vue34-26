<template>
  <button v-if="index === -1" @click="addToCart(product.product)">Купить</button>
  <div v-else>
    <button @click="cart[index]!.quantity--">-</button>
    <span>{{ cart[index]!.quantity }}</span>
    <button @click="cart[index]!.quantity++">+</button>
  </div>
</template>

<script setup lang="ts">
import type { Product, ProductInCart } from '@/types/Products'
import { computed, watch } from 'vue'
import { inject, type Reactive } from 'vue'

const product = defineProps<{
  product: Product
}>()

const index = computed(() => {
  return cart.findIndex((item) => item.id === product.product.id)
})

const cart = inject<Reactive<ProductInCart[]>>('cart', [])

function addToCart(product: Product): void {
  if (index.value === -1) {
    cart.push({
      ...product,
      quantity: 1,
    })
  }
}

watch(cart, () => {
  if (cart[index.value]?.quantity === 0) {
    cart.splice(index.value, 1)
  }
})
</script>
