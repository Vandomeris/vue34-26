<!-- SFC -->
<template>
  <h1 class="heading">ToDo List</h1>

  <div>
    <button @click="showAdd = !showAdd">
      {{ showAdd ? 'Отменить' : 'Добавить вопрос' }}
    </button>

    <form v-if="showAdd" @submit.prevent="addTodo()">
      <input v-model="newTodo" type="text" placeholder="Введите дело" />
      <button>Добавить</button>
    </form>

    <TodoEditItem
      @edit="changeStatus(todo.id)"
      @change-todo="(e: string) => editTodo(todo.id, e)"
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :completed="todo.completed"
      :title="todo.title"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TodoItem } from './types/ToDo'
import TodoEditItem from './components/TodoEditItem.vue'

const todos = ref<TodoItem[]>([
  { id: 1, title: 'Покормить кота', completed: false },
  { id: 2, title: 'Позавтракать', completed: true },
  { id: 3, title: 'Купить молоко', completed: false },
])

const showAdd = ref(false)

const newTodo = ref('')

function addTodo() {
  todos.value.push({
    id: Date.now(),
    title: newTodo.value,
    completed: false,
  })

  newTodo.value = ''
}

function editTodo(id: number, newValue: string) {
  const index = todos.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    todos.value[index]!.title = newValue
  }
}

function changeStatus(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    todos.value[index]!.completed = !todos.value[index]!.completed
  }
}
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

.completed span {
  text-decoration: line-through;
}
</style>
