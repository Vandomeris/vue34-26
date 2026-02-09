<!-- SFC -->
<template>
  <h1 class="heading">ToDo List</h1>

  <div class="todo-item" v-for="todo in todos" :key="todo.id">
    <span>{{ todo.id }}</span>
    <span>{{ todo.title }}</span>
    <span>{{ todo.completed }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TodoItem } from './types/ToDo'

const todos = ref<TodoItem[]>([
  { id: 1, title: 'Покормить кота', completed: false },
  { id: 2, title: 'Позавтракать', completed: true },
  { id: 3, title: 'Купить молоко', completed: false },
])
</script>

<style scoped>
.heading {
  color: red;
  font-size: 50px;
}

.todo-item {
  display: flex;
  align-items: center;
  column-gap: 40px;
}
</style>
