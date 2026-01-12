<template>
  <footer class="relative overflow-hidden bg-white">
    <!-- Декоративный фон -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Основной контент -->
      <div class="grid md:grid-cols-4 gap-12 mb-16">
        <!-- О продукте -->
        <div class="md:col-span-2">
          <!-- Логотип -->
          <div class="flex items-center gap-2 mb-6">
            <span class="bg-blue-600 w-2 h-6 rounded"></span>
            <span class="text-3xl font-bold text-blue-700">URIT-86</span>
            <span class="bg-blue-600 w-2 h-6 rounded"></span>
          </div>
          
          <p class="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
            {{ locale === 'ru' 
              ? 'Профессиональный глюкометр для домашней диагностики. Точность, скорость и надежность в одном устройстве.'
              : 'Uyda diagnostika qilish uchun professional glyukometr. Bir qurilmada aniqlik, tezlik va ishonchlilik.'
            }}
          </p>

          <!-- Логотип HED Marketing -->
          <div>
            <p class="text-gray-500 text-sm mb-3">
              {{ locale === 'ru' ? 'Наша команда:' : 'Bizning jamoa:' }}
            </p>
            <a href="https://hedmarketing.uz" target="_blank" class="inline-block hover:opacity-80 transition-opacity">
              <img 
                src="/images/HED-marketing-logo.jpg" 
                alt="HED Marketing" 
                class="h-14 w-auto"
              />
            </a>
          </div>
        </div>

        <!-- Навигация -->
        <div>
          <h4 class="text-gray-900 font-bold text-lg mb-6">
            {{ locale === 'ru' ? 'Навигация' : 'Navigatsiya' }}
          </h4>
          <ul class="space-y-3">
            <li>
              <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group">
                <span class="w-0 group-hover:w-2 h-px bg-blue-600 transition-all duration-300"></span>
                {{ locale === 'ru' ? 'О продукте' : 'Mahsulot haqida' }}
              </a>
            </li>
            <li>
              <a href="#advantages" class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group">
                <span class="w-0 group-hover:w-2 h-px bg-blue-600 transition-all duration-300"></span>
                {{ locale === 'ru' ? 'Преимущества' : 'Afzalliklar' }}
              </a>
            </li>
            <li>
              <a href="#test" class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group">
                <span class="w-0 group-hover:w-2 h-px bg-blue-600 transition-all duration-300"></span>
                {{ locale === 'ru' ? 'Тест' : 'Test' }}
              </a>
            </li>
            <li>
              <a href="#buy" class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group">
                <span class="w-0 group-hover:w-2 h-px bg-blue-600 transition-all duration-300"></span>
                {{ locale === 'ru' ? 'Где купить' : 'Qayerdan sotib olish' }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Контакты -->
        <div>
          <h4 class="text-gray-900 font-bold text-lg mb-6">
            {{ locale === 'ru' ? 'Контакты' : 'Kontaktlar' }}
          </h4>
          <ul class="space-y-4">
            <li>
              <a href="tel:+998901234567" class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-3 group">
                <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <svg class="w-4 h-4 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <span>+998 90 003 86 66 </span>
              </a>
            </li>
            <li>
              <a href="mailto:info@urit86.uz" class="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-3 group">
                <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <svg class="w-4 h-4 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span>hedmarketing@gmail.com</span>
              </a>
            </li>
            <li>
              <div class="text-gray-600 text-sm flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <span>{{ locale === 'ru' ? 'Ташкент, Узбекистан' : 'Toshkent, O\'zbekiston' }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Разделитель -->
      <div class="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

      <!-- Нижняя часть -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-sm">
          &copy; 2024 URIT-86. {{ locale === 'ru' ? 'Все права защищены' : 'Barcha huquqlar himoyalangan' }}
        </p>
        
        <!-- Социальные сети -->
        <div class="flex items-center gap-4">
          <a href="https://www.instagram.com/hed__marketing/" target="_blank" class="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a href="https://t.me/hurshidaenterdelux" target="_blank" class="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-500 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          
          <a href="https://youtube.com/@hedmarketing?si=PxF65AfK9pOXSDsf" target="_blank" class="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group">
            <svg class="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
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