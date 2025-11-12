<template>
  <section id="results" class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        {{ locale === 'ru' ? 'Что показывает тест' : 'Test nimani ko\'rsatadi' }}
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(param, index) in parameters" :key="index" 
             class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
          <h3 class="font-semibold text-lg mb-2 text-gray-900">{{ param.name }}</h3>
          <p class="text-gray-600 text-sm">{{ param.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '../store'

const store = useAppStore()
const locale = computed(() => store.locale)

const parameters = computed(() => [
  {
    name: locale.value === 'ru' ? 'Глюкоза' : 'Glyukoza',
    description: locale.value === 'ru' ? 'Определение диабета' : 'Diabetni aniqlash'
  },
  {
    name: locale.value === 'ru' ? 'Белок' : 'Oqsil',
    description: locale.value === 'ru' ? 'Функция почек' : 'Buyrak funksiyasi'
  },
  {
    name: locale.value === 'ru' ? 'pH' : 'pH',
    description: locale.value === 'ru' ? 'Кислотность мочи' : 'Siydik kislotaliligi'
  },
  {
    name: locale.value === 'ru' ? 'Кетоны' : 'Ketonlar',
    description: locale.value === 'ru' ? 'Обмен веществ' : 'Metabolizm'
  },
  {
    name: locale.value === 'ru' ? 'Кровь' : 'Qon',
    description: locale.value === 'ru' ? 'Инфекции и травмы' : 'Infeksiyalar va jarohatlar'
  },
  {
    name: locale.value === 'ru' ? 'Лейкоциты' : 'Leykotsitlar',
    description: locale.value === 'ru' ? 'Воспаление' : 'Yallig\'lanish'
  }
])
</script>