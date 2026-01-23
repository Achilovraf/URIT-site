<template>
  <section id="faq" class="py-20 px-4">
    <div class="max-w-4xl mx-auto">

      <!-- Заголовок -->
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        {{ locale === 'ru'
          ? 'Частые вопросы'
          : 'Tez-tez so‘raladigan savollar'
        }}
      </h2>

      <!-- Вопросы -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <h3 class="font-semibold text-lg mb-2 text-gray-900">
            {{ faq.question }}
          </h3>
          <p class="text-gray-600">
            {{ faq.answer }}
          </p>
        </div>
      </div>

      <!-- ===== КНОПКА ПОСЛЕ FAQ ===== -->
      <div class="mt-16 flex justify-center">
        <a
          href="https://t.me/UritUzbekistan"
          target="_blank"
          rel="noopener noreferrer"
          class="
            inline-flex items-center justify-center
            px-14 py-5
            text-xl font-semibold text-white
            rounded-2xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            shadow-xl
            transition-all duration-300
            hover:from-blue-700 hover:to-indigo-700
            hover:shadow-2xl hover:-translate-y-1
            active:translate-y-0
          "
        >
          {{ locale === 'ru'
            ? 'Чат поддержки диабетиков'
            : 'Diabetiklar qollab quvvatlash chati'
          }}
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '../store'

const store = useAppStore()
const locale = computed(() => store.locale)

const faqs = computed(() => [
  {
    question: locale.value === 'ru'
      ? 'Насколько точен тест?'
      : 'Test qanchalik aniq?',
    answer: locale.value === 'ru'
      ? 'URIT-86 имеет точность 98%, соответствует медицинским стандартам.'
      : 'URIT-86 98% aniqlikka ega, tibbiy standartlarga javob beradi.'
  },
  {
    question: locale.value === 'ru'
      ? 'Можно ли использовать повторно?'
      : 'Qayta ishlatish mumkinmi?',
    answer: locale.value === 'ru'
      ? 'Аппарат — да, а тест-полоски нужно менять каждый раз.'
      : 'Qurilmani qayta ishlatish mumkin, test tayoqchalar esa har safar almashtiriladi.'
  },
  {
    question: locale.value === 'ru'
      ? 'Когда лучше делать тест?'
      : 'Testni qachon qilish yaxshi?',
    answer: locale.value === 'ru'
      ? 'Рекомендуется утром, сразу после пробуждения.'
      : 'Ertalab, uyg‘ongandan keyin qilish tavsiya etiladi.'
  }
])
</script>
