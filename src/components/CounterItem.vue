<template>
  <div>
    <button @click="decrement()">-</button>
    <span>{{ counter }}</span>
    <button @click="increment()">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref<number>(0)

function increment() {
  if (counter.value < 10) {
    counter.value++
  }
}

function decrement() {
  if (counter.value > 0) {
    counter.value--
  }
}
</script>
