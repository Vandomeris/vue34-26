<template>
  <h1>CartPage</h1>

  <div class="grid grid-cols-4 gap-5">
    <div v-for="product in cart" :key="product.id">
      <p>{{ product.title }}</p>
      <p>$$$$${{ product.price }}$$$$$$</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Products'
import { inject, type Reactive } from 'vue'

const cart = inject<Reactive<Product[]>>('cart', [])
</script>
