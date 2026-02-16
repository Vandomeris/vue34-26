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
      @delete="(e: number) => deleteTodo(e)"
      v-for="todo in todos"
      :key="todo.id"
      :id="todo.id"
      :completed="todo.completed"
      :title="todo.title"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { TodoItem } from './types/ToDo'
import TodoEditItem from './components/TodoEditItem.vue'

const todos = ref<TodoItem[]>([])

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

function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

onMounted(() => {
  if (localStorage.getItem('todos')) {
    todos.value = JSON.parse(localStorage.getItem('todos')!)
  }
})

watch(
  () => todos.value,
  (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },
  {
    deep: true,
  },
)
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
