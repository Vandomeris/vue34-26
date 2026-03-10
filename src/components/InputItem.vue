<template>
  <input type="text" v-model="model" :placeholder="placeholder" />
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string
}>()

const model = defineModel()
</script>
