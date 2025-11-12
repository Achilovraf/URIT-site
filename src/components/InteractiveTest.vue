<template>
  <section id="test" class="py-20 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-8 text-gray-900">
        {{ locale === 'ru' ? 'Интерактивный тест' : 'Interaktiv test' }}
      </h2>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
        <p class="text-center text-lg text-gray-700 mb-6">
          {{ locale === 'ru' 
            ? 'Ответьте на несколько вопросов, чтобы узнать, нужен ли вам URIT-86'
            : 'URIT-86 sizga kerakmi yoki yo\'qligini bilish uchun bir nechta savollarga javob bering'
          }}
        </p>
        <div class="flex justify-center">
          <button class="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
            {{ locale === 'ru' ? 'Начать тест' : 'Testni boshlash' }}
          </button>
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
</script>