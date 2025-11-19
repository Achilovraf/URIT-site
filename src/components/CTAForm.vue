<template>
  <section id="contact" class="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6 text-white">
        {{ locale === 'ru' ? 'Остались вопросы?' : 'Savollaringiz bormi?' }}
      </h2>
      <p class="text-xl text-blue-100 mb-8">
        {{ locale === 'ru' 
          ? 'Оставьте заявку, и мы свяжемся с вами'
          : 'Ariza qoldiring, biz siz bilan bog\'lanamiz'
        }}
      </p>
      <div class="bg-white p-8 rounded-2xl shadow-2xl">
        <form class="space-y-4">
          <input 
            type="text" 
            :placeholder="locale === 'ru' ? 'Ваше имя' : 'Ismingiz'"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
          <input 
            type="tel" 
            :placeholder="locale === 'ru' ? 'Телефон' : 'Telefon'"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
          <textarea 
            :placeholder="locale === 'ru' ? 'Ваш вопрос' : 'Savolingiz'"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          ></textarea>
          <button 
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {{ locale === 'ru' ? 'Отправить' : 'Yuborish' }}
          </button>
        </form>
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