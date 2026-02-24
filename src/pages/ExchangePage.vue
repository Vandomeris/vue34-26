<template>
  <input v-model="rubles" type="number" placeholder="Введите рубли" />
  <select v-model="currency">
    <option v-for="rate in currencyList?.rates" :key="rate.name" :value="rate.name">
      {{ rate.name }}
    </option>
  </select>
  <span>{{ result.toFixed(2) }}</span>
</template>

<script setup lang="ts">
import type { CurrencyList, CurrencyResponse } from '@/types/Currency'
import ky from 'ky'
import { computed, onMounted, ref } from 'vue'

const rubles = ref<number>(0)

const currencyList = ref<CurrencyList>()

onMounted(async () => {
  const fromFetch = await ky.get<CurrencyResponse>('https://www.cbr-xml-daily.ru/latest.js').json()

  const newData: CurrencyList = {
    date: fromFetch.date,
    rates: Object.entries(fromFetch.rates!).map(([key, value]) => {
      return {
        name: key,
        value: value,
      }
    }),
  }

  currencyList.value = newData
})

const currency = ref<string>('USD')

const result = computed(() => {
  if (currencyList.value) {
    const index = currencyList.value.rates.findIndex((rate) => rate.name === currency.value)

    if (index !== -1) {
      return rubles.value * currencyList.value.rates[index]!.value
    } else {
      return 0
    }
  } else {
    return 0
  }
})
</script>
