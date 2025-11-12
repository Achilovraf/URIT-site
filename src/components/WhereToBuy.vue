<template>
  <section id="buy" class="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        {{ locale === 'ru' ? 'Где купить' : 'Qayerdan sotib olish' }}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(place, index) in places" :key="index" 
             class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
          <div class="text-5xl mb-4">{{ place.icon }}</div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">{{ place.title }}</h3>
          <p class="text-gray-600 mb-4">{{ place.description }}</p>
          <button class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors">
            {{ locale === 'ru' ? 'Подробнее' : 'Batafsil' }}
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

const places = computed(() => [
  {
    icon: '🏪',
    title: locale.value === 'ru' ? 'Аптеки' : 'Dorixonalar',
    description: locale.value === 'ru' 
      ? 'Доступно в крупных аптечных сетях Ташкента'
      : 'Toshkentning yirik dorixona tarmoqlarida mavjud'
  },
  {
    icon: '🛒',
    title: locale.value === 'ru' ? 'Онлайн' : 'Onlayn',
    description: locale.value === 'ru'
      ? 'Заказ с доставкой на дом'
      : 'Uyga yetkazib berish bilan buyurtma'
  },
  {
    icon: '🏥',
    title: locale.value === 'ru' ? 'Медцентры' : 'Tibbiy markazlar',
    description: locale.value === 'ru'
      ? 'В партнерских медицинских центрах'
      : 'Hamkor tibbiy markazlarda'
  }
])
</script>