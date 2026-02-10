<template>
  <div class="todo-item" :class="{ completed: todo?.completed }">
    <span>{{ todo?.id }}</span>

    <input v-if="isEditing" type="text" v-model="input" />
    <span v-else>{{ todo?.title }}</span>
    <input type="checkbox" :checked="todo.completed" @change="$emit('edit')" />

    <button @click="editTodo()">{{ isEditing ? 'Save' : 'Edit' }}</button>
    <button>Delete</button>
  </div>
</template>

<script setup lang="ts">
import type { TodoItem } from '@/types/ToDo'
import { ref } from 'vue'

const todo = defineProps<TodoItem>()

const emits = defineEmits(['changeTodo', 'edit'])

const isEditing = ref(false)

const input = ref(todo.title)

function editTodo() {
  if (isEditing.value) {
    emits('changeTodo', input.value)
  }

  isEditing.value = !isEditing.value
}
</script>

<style scoped>
.completed span {
  text-decoration: line-through;
}
</style>
