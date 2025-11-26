<template>
  <section
    id="hero"
    class="relative font-primary bg-white min-h-screen flex items-center pt-20 overflow-hidden"
  >
    <div class="max-w-7xl mx-auto pl-6 lg:pl-12 w-full py-16">
      <div class="grid lg:grid-cols-2 items-center">
        <!-- Левая часть - текст и кнопки -->
        <div class="space-y-8 relative z-10">
          <!-- Заголовок -->
          <h1
            class="text-4xl lg:text-5xl xl:text-4xl font-bold text-gray-900 leading-tight"
          >
            {{ content.title[locale] }}<br />
            {{ content.subtitle[locale] }}
            <span class="bg-blue-600 rounded text-white px-3 py-1 inline-block"
              >URIT-86</span
            >
            <br />
            <span class="text-blue-600">{{ content.time[locale] }}</span>
          </h1>

          <!-- Подзаголовок -->
          <p class="text-lg text-gray-700 leading-relaxed max-w-2xl">
            {{ content.description[locale] }}
          </p>

          <!-- Кнопки -->
          <div class="flex flex-wrap gap-4 pt-4">
            <button
              class="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {{ content.buyButton[locale] }}
            </button>

            <button
              @click="$emit('open-modal')"
              class="group inline-flex items-center gap-3 border-2 border-indigo-700 bg-white border-gradient-to-r from-blue-600 to-indigo-600 text-black font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 hover:[background-clip:border-box]"
            >
              <span class="text-lg">{{ content.buttonText[locale] }}</span>
              <svg
                class="w-6 h-6 text-black group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
          </div>

          <!-- Социальные сети -->
          <div class="pt-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-px w-12 bg-gradient-to-r from-blue-600 to-transparent"></div>
              <p class="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {{ content.socialTitle[locale] }}
              </p>
            </div>
            
            <div class="flex items-center gap-3">
              <!-- Instagram -->
              <a
                href="https://www.instagram.com/hed__marketing/"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl "></div>
                <div class="relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 cursor-pointer">
                  <svg class="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>

              <!-- Facebook -->
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative"
              >
              <!-- blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 -->
                <div class="absolute inset-0 bg-blue-600 rounded-2xl "></div>
                <div class="relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 cursor-pointer">
                  <svg class="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </a>

              <!-- Telegram -->
              <a
                href="https://t.me/hurshidaenterdelux"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative"
              >
              <!-- blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 -->
                <div class="absolute inset-0 bg-blue-500 rounded-2xl "></div>
                <div class="relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 cursor-pointer">
                  <svg class="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
              </a>

              <!-- YouTube -->
              <a
                href="https://youtube.com/@hedmarketing?si=PxF65AfK9pOXSDsf"
                target="_blank"
                rel="noopener noreferrer"
                class="group relative"
              >
              <!-- blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 -->
                <div class="absolute inset-0 bg-red-600 rounded-2xl "></div>
                <div class="relative flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-red-600 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-6 cursor-pointer">
                  <svg class="w-7 h-7 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Правая часть -->
        <div class="flex-1 flex justify-center items-center">
          <img
            class="w-9/10"
            src="/images/urit-hero.png"
            width="250"
            alt="Глюкометр"
          />
        </div>
      </div>
    </div>

    <InstructionModal ref="instructionModalRef" />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "../store";
import InstructionModal from "./modals/InstructionModal.vue";

const instructionModalRef = ref(null);

const store = useAppStore();
const locale = computed(() => store.locale);

const content = {
  title: {
    ru: "Контролируй сахар легко - ",
    uz: "Shakarni osongina boshqaring",
  },
  subtitle: {
    ru: "с заботой о себе ",
    uz: "o'zingiz va yaqinlaringiz.",
  },
  time: {
    ru: "и близких.",
    uz: "parvarishi uchun.",
  },
  description: {
    ru: "Компактный и быстрый глюкометр с высокой точностью. Результат за 5 секунд минимальный прокол, максимум удобства. Забудьте о бесконечной очереди в поликлинике и сложных измерениях - все просто !",
    uz: "1 va 2-toifa diabet kasalligiga chalingan bemorlarning qon glyukoza darajasini muntazam o'lchash, shuningdek profilaktik nazorat qilish uchun ishlatiladi",
  },
  buyButton: {
    ru: "Где купить",
    uz: "Qayerdan sotib olish",
  },
  buttonText: {
    ru: "Смотреть инструкцию",
    uz: "Yo'riqnomani ko'rish",
  },
  socialTitle: {
    ru: "Мы в соцсетях",
    uz: "Biz ijtimoiy tarmoqlarda",
  },
};

const openInstructionModal = () => {
  instructionModalRef.value?.openModal();
};
</script>