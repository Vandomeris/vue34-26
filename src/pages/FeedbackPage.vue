<template>
  <h1>FeedbackPage</h1>
  <form @submit.prevent>
    <InputItem v-model="form.question" placeholder="Вопрос" />
    <InputItem v-model="form.wishes" placeholder="Пожелания" />

    <p>{{ form.question }}</p>
    <p>{{ form.wishes }}</p>

    <button>Отправить</button>
  </form>
</template>

<script setup lang="ts">
import InputItem from '@/components/InputItem.vue'
import { reactive } from 'vue'

const form = reactive({
  question: '',
  wishes: '',
})
</script>
