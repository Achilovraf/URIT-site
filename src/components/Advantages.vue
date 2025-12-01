<!-- urit-86-landing/src/components/Advantages.vue -->
<template>
  <section id="advantages" class="py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        {{ locale === 'ru' ? 'Преимущества URIT-86' : 'URIT-86 afzalliklari' }}
      </h2>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(advantage, index) in advantages"
          :key="index"
          class="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
        >
          <!-- Иконка -->
          <div
            class="w-15 h-15 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <component :is="advantage.icon" class="w-10 h-10 text-white" />
          </div>

          <!-- Текст -->
          <h3 class="text-xl font-semibold mb-3 text-gray-900">
            {{ advantage.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ advantage.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '../store'

// Импорт иконок
import FastResultIcon from '../assets/icons/FastResultIcon.vue'
import HighAccuracyIcon from '../assets/icons/HighAccuracyIcon.vue'
import HomeTreatmentIcon from '../assets/icons/HomeTreatmentIcon.vue'
import SaveMoneyIcon from '../assets/icons/SaveMoneyIcon.vue'
import EasyToUseIcon from '../assets/icons/EasyToUseIcon.vue'
import RealiabilityIcon from '../assets/icons/RealiabilityIcon.vue'

const store = useAppStore()
const locale = computed(() => store.locale)

const advantages = computed(() => [
  
  {
    icon: HighAccuracyIcon,
    title: locale.value === 'ru' ? 'Высокая точность' : 'Yuqori aniqlik',
    description:
      locale.value === 'ru'
        ? '11 показателей с медицинской точностью'
        : "Tibbiy aniqlik bilan 11 ta ko‘rsatkich"
  },
  {
    icon: FastResultIcon,
    title: locale.value === 'ru' ? 'Быстрый результат' : 'Tez natija',
    description:
      locale.value === 'ru'
        ? 'Всего 2 минуты для получения полного анализа'
        : "To‘liq tahlil olish uchun atigi 2 daqiqa"
  },
  {
    icon: HomeTreatmentIcon,
    title: locale.value === 'ru' ? 'Память и статистика ' : 'Xotira va statistika',
    description:
      locale.value === 'ru'
        ? 'Сохраняет результаты, помогает отслеживать динамику показателей'
        : "Natijalarni saqlaydi, ko'rsatkichlar dinamikasini kuzatishga yordam beradi"
  },
  {
    icon: SaveMoneyIcon,
    title: locale.value === 'ru' ? 'Экономия' : 'Tejamkorlik',
    description:
      locale.value === 'ru'
        ? 'Дешевле, чем анализ в клинике'
        : 'Klinikadagi tahlildan arzonroq'
  },
  {
    icon: EasyToUseIcon,
    title: locale.value === 'ru' ? 'Компактный и мобильный' : 'Kompakt va qulay',
    description:
      locale.value === 'ru'
        ? 'Легко взять с собой на работу, прогулку или в путешествие.'
        : 'Ixchamlik va qulaylik.'
  },
  {
    icon: RealiabilityIcon,
    title: locale.value === 'ru' ? 'Надежность' : 'Ishonchlilik',
    description:
      locale.value === 'ru'
        ? 'Надёжные данные, подтверждённый клиническими тестами'
        : 'Sertifikatlangan tibbiy mahsulot'
  }
])
</script>
