<template>
  <section id="faq" class="py-20 px-4 bg-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">
        {{ locale === 'ru' ? 'Частые вопросы' : 'Tez-tez so\'raladigan savollar' }}
      </h2>
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" 
             class="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
          <h3 class="font-semibold text-lg mb-2 text-gray-900">{{ faq.question }}</h3>
          <p class="text-gray-600">{{ faq.answer }}</p>
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

const faqs = computed(() => [
  {
    question: locale.value === 'ru' ? 'Насколько точен тест?' : 'Test qanchalik aniq?',
    answer: locale.value === 'ru' 
      ? 'URIT-86 имеет точность 98%, соответствует медицинским стандартам.'
      : 'URIT-86 98% aniqlikka ega, tibbiy standartlarga javob beradi.'
  },
  {
    question: locale.value === 'ru' ? 'Можно ли использовать повторно?' : 'Qayta ishlatish mumkinmi?',
    answer: locale.value === 'ru'
      ? 'Нет, тест предназначен для одноразового использования.'
      : 'Yo\'q, test bir martalik foydalanish uchun mo\'ljallangan.'
  },
  {
    question: locale.value === 'ru' ? 'Когда лучше делать тест?' : 'Testni qachon qilish yaxshi?',
    answer: locale.value === 'ru'
      ? 'Рекомендуется утром, сразу после пробуждения.'
      : 'Ertalab, uyg\'onganingizdan keyin qilish tavsiya etiladi.'
  }
])
</script>