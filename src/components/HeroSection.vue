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
        </div>

        <!-- Правая часть - изображения -->
        <div class="relative h-[450px] lg:h-[600px] pr-0">
          <!-- Круглый фон - абсолютное позиционирование -->
          <img
            src="/images/working-parents-1024x1024.jpg"
            alt="Background"
            class="absolute top-0 right-0 translate-x-[25%] w-[300px] h-[300px] lg:w-[550px] lg:h-[450px] object-cover"
          />

          <!-- Глюкометр поверх фона -->
          <div
            class="relative z-10 flex justify-center items-center h-full pt-8"
          >
            <img
              src="/images/Глюкометр 4.png"
              alt="URIT-86 Глюкометр"
              class="w-[200px] h-[180px] lg:w-[250px] lg:h-[2200px] object-contain drop-shadow-2xl"
            />
          </div>        </div>
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
    uz: "Shakarni osongina boshqaring"
  },
  subtitle: {
    ru: "с заботой о себе ",
    uz: "o'zingiz va yaqinlaringiz."
  },
  time: {
    ru: "и близких.",
    uz: "parvarishi uchun."
  },
  description: {
    ru: "Компактный и быстрый глюкометр с высокой точностью. Результат за 5 секунд минимальный прокол, максимум удобства. Забудьте о бесконечной очереди в поликлинике и сложных измерениях - все просто !",
    uz: "1 va 2-toifa diabet kasalligiga chalingan bemorlarning qon glyukoza darajasini muntazam o'lchash, shuningdek profilaktik nazorat qilish uchun ishlatiladi"
  },
  buyButton: {
    ru: "Где купить",
    uz: "Qayerdan sotib olish"
  },
  buttonText: {
    ru: "Смотреть инструкцию",
    uz: "Yo'riqnomani ko'rish"
  }
};

const openInstructionModal = () => {
  instructionModalRef.value?.openModal();
};
</script>