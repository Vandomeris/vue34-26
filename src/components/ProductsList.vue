<template>
  <div v-if="products.length" class="grid grid-cols-5 gap-5">
    <div v-for="product in products" :key="product.id">
      <p>{{ product.title }}</p>
      <p>{{ product.category }}</p>
      <div class="flex justify-between items-center">
        <span>{{ product.rating }}</span>
        <span>${{ product.price }}</span>
      </div>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Products'
import { ref } from 'vue'

const products = ref<Product[]>([])

const resp = await fetch('http://localhost:3000/products')
const data = await resp.json()
products.value = data
</script>
