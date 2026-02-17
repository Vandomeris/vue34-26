<template>
  <h1>Карточка товара</h1>

  <div v-if="product">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/Products'
import ky from 'ky'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const product = ref<Product>()

const route = useRoute()

onMounted(async () => {
  const data = await ky.get<Product>(`http://localhost:3000/products/${route.params.id}`).json()

  product.value = data
})
</script>
