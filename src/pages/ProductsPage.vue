<template>
  <h1>Каталог товаров</h1>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Products'
import { ref } from 'vue'
import { onMounted } from 'vue'

const products = ref<Product[]>([])

onMounted(async () => {
  const resp = await fetch('http://localhost:3000/products')
  const data = await resp.json()
  products.value = data
})
</script>
