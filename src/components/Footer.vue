<template>
  <footer class="bg-gray-900 text-gray-300 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-white text-xl font-bold mb-4">URIT-86</h3>
          <p class="text-sm">
            {{ locale === 'ru' 
              ? 'Профессиональный экспресс-тест для домашней диагностики'
              : 'Uyda diagnostika qilish uchun professional tezkor test'
            }}
          </p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">
            {{ locale === 'ru' ? 'Навигация' : 'Navigatsiya' }}
          </h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#about" class="hover:text-white transition-colors">
              {{ locale === 'ru' ? 'О продукте' : 'Mahsulot haqida' }}
            </a></li>
            <li><a href="#advantages" class="hover:text-white transition-colors">
              {{ locale === 'ru' ? 'Преимущества' : 'Afzalliklar' }}
            </a></li>
            <li><a href="#buy" class="hover:text-white transition-colors">
              {{ locale === 'ru' ? 'Где купить' : 'Qayerdan sotib olish' }}
            </a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">
            {{ locale === 'ru' ? 'Контакты' : 'Kontaktlar' }}
          </h4>
          <p class="text-sm">
            {{ locale === 'ru' ? 'Тел:' : 'Tel:' }} +998 90 123 45 67<br>
            Email: info@urit86.uz<br>
            {{ locale === 'ru' ? 'Ташкент, Узбекистан' : 'Toshkent, O\'zbekiston' }}
          </p>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; 2024 URIT-86. {{ locale === 'ru' ? 'Все права защищены' : 'Barcha huquqlar himoyalangan' }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '../store'

const store = useAppStore()
const locale = computed(() => store.locale)
</script>