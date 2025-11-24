<template>
  <section id="steps" class="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок секции -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {{ content.title[locale] }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ content.subtitle[locale] }}
        </p>
      </div>

      <!-- Основные 3 шага (краткие) -->
      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <div
          v-for="(step, index) in mainSteps"
          :key="index"
          class="text-center group">
          <!-- Иконка вместо круга с номером -->
          <div class="relative mb-6">
            <div
              class="bg-white w-32 h-32 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500 border-4 border-blue-100 group-hover:border-blue-700 group-hover:scale-110">
              <component
                :is="step.icon"
                class="w-20 h-20 text-blue-600 transition-all duration-500 group-hover:scale-110"
              />
            </div>
            
          </div>

          <!-- Номер шага (badge) -->
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-4"
          >
            <span class="text-white font-bold text-xl">{{ index + 1 }}</span>
          </div>

          <!-- Заголовок -->
          <h3 class="font-bold text-xl mb-3 text-gray-900">
            {{ step.title[locale] }}
          </h3>

          <!-- Описание -->
          <p class="text-gray-600 leading-relaxed">
            {{ step.description[locale] }}
          </p>
        </div>
      </div>

      <!-- Предупреждение -->
      <div
        class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-10"
      >
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <svg
              class="w-6 h-6 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h4 class="font-bold text-yellow-900 mb-2">
              {{ content.warningTitle[locale] }}
            </h4>
            <p class="text-yellow-800">
              {{ content.warningText[locale] }}
            </p>
          </div>
        </div>
      </div>

      <!-- Кнопка скачать полную инструкцию -->
      <div class="text-center">
        <button
          class="group inline-flex items-center gap-3 border-2 border-indigo-700 bg-white text-black font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600"
        >
          <svg
            class="w-5 h-5 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>{{ content.downloadButton[locale] }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "../store";
import ReadyBloodMeter from "../assets/icons/ReadyBloodMeter.vue";
import TestBloodMeter from "../assets/icons/TestBloodMeter.vue";
import WashHands from "../assets/icons/WashHands.vue";

const store = useAppStore();
const locale = computed(() => store.locale);

const content = {
  title: {
    ru: "Как использовать URIT-86",
    uz: "URIT-86 dan qanday foydalanish",
  },
  subtitle: {
    ru: "Простая пошаговая инструкция для точного измерения уровня глюкозы",
    uz: "Glyukoza darajasini aniq o'lchash uchun oddiy bosqichma-bosqich yo'riqnoma",
  },
  warningTitle: {
    ru: "Важно!",
    uz: "Muhim!",
  },
  warningText: {
    ru: "Не пытайтесь пополнить пробу крови в лимфатическом отверстии, даже если вы видите недостаточное количество в окне подтверждения. Удалите тест-полоску и повторите с новой полоской.",
    uz: "Tasdiqlash oynasida yetarli miqdor ko'rinmasa ham, limfa teshigiga qon namunasini to'ldirishga urinmang. Test chizig'ini olib tashlang va yangi chiziq bilan takrorlang.",
  },
  downloadButton: {
    ru: "Скачать полную инструкцию (PDF)",
    uz: "To'liq yo'riqnomani yuklab olish (PDF)",
  },
};

const mainSteps = [
  {
    icon: WashHands,
    title: {
      ru: "Подготовка",
      uz: "Tayyorgarlik",
    },
    description: {
      ru: "Вымойте руки тёплой водой с мылом и хорошо высушите — это улучшит точность.",
      uz: "Qo'llaringizni iliq suv va sovun bilan yuving va yaxshilab quritib oling - bu aniqlikni yaxshilaydi.",
    },
  },
  {
    icon: ReadyBloodMeter,
    title: {
      ru: "Установка",
      uz: "O'rnatish",
    },
    description: {
      ru: "Подготовьте глюкометр, тест-полоску и ланцет. Проверьте срок годности полосок и не касайтесь чувствительного участка пальца/полоски.",
      uz: "Glyukometr, test chizig'i va lansetni (igna) tayyorlang. Chiziqlalrning amal qilish muddatini tekshiring va barmoq/chiziqning sezgir qismiga tegmang.",
    },
  },
  {
    icon: TestBloodMeter,
    title: {
      ru: "Измерение",
      uz: "O'lchash",
    },
    description: {
      ru: "Вставьте тест-полоску — глюкометр включится автоматически",
      uz: "Test chizig'ini joylashtiring - glyukometr avtomatik yoqiladi",
    },
  },
];
</script>