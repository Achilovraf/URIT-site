<!-- urit-86-landing/src/components/AboutProduct.vue -->
<template>
  <section id="about" class="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок карточек -->
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold text-gray-900 mb-3">
          {{ content.indicationsTitle[locale] }}
        </h3>
        <div
          class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
        ></div>
      </div>

      <!-- Три карточки показаний -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div
          v-for="(indication, index) in content.indications"
          :key="index"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
        >
          <!-- Иконка -->
          <div
            class="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <component :is="icons[index]" size="64" color="white" />
          </div>

          <!-- Заголовок -->
          <h4 class="text-2xl font-bold text-gray-900 mb-4">
            {{ indication.title[locale] }}
          </h4>

          <!-- Описание -->
          <p class="text-gray-600 leading-relaxed">
            {{ indication.description[locale] }}
          </p>
        </div>
      </div>

      <!-- Кнопка инструкции -->
      <div class="text-center">
        <button
          @click="openInstructionModal"
          class="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <span class="text-lg">{{ content.buttonText[locale] }}</span>
          <svg
            class="w-6 h-6 group-hover:translate-x-1 transition-transform"
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

    <!-- Модалка -->
    <InstructionModal ref="instructionModalRef" />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "../store";
import PreventionIcon from "@/assets/icons/PreventionIcon.vue";
import ControlHealthIcon from "../assets/icons/ControlHealthIcon.vue";
import ClinicsIcon from "../assets/icons/ClinicsIcon.vue";
import InstructionModal from "./modals/InstructionModal.vue";

const store = useAppStore();
const locale = computed(() => store.locale);

const icons = [PreventionIcon, ControlHealthIcon, ClinicsIcon];

const instructionModalRef = ref(null);

const content = {
  title: {
    ru: "Живите спокойно — URIT-86 держит всё под контролем",
    uz: "Xotirjam yashang — URIT-86 hamma narsani nazorat ostida saqlaydi",
  },
  subtitle: {
    ru: "Используется для регулярного измерения уровня глюкозы в крови у пациентов с диабетом 1 и 2 типа, а также для профилактического контроля у людей, заботящихся о здоровье.",
    uz: "1 va 2-toifa diabet bilan og'rigan bemorlarning qondagi glyukoza darajasini muntazam o'lchash uchun, shuningdek, sog'lig'iga g'amxo'rlik qiladigan odamlarda profilaktik nazorat uchun ishlatiladi.",
  },
  indicationsTitle: {
    ru: "Показания к применению",
    uz: "Foydalanish ko'rsatkichlari",
  },
  indications: [
    {
      title: {
        ru: "Для ежедневного контроля",
        uz: "Kundalik nazorat uchun",
      },
      description: {
        ru: "Идеален для пациентов, которым важно отслеживать уровень сахара утром, после еды и перед сном.",
        uz: "Ertalab, ovqatlanishdan keyin va uxlashdan oldin qand miqdorini kuzatish muhim bo'lgan bemorlar uchun ideal.",
      },
    },
    {
      title: {
        ru: "Для профилактики",
        uz: "Profilaktika uchun",
      },
      description: {
        ru: "Подходит людям без диагноза, но с риском развития диабета, контролирующим питание и образ жизни.",
        uz: "Tashxis qo'yilmagan, ammo diabet xavfi yuqori bo'lgan, ovqatlanish va turmush tarzini nazorat qiluvchi odamlar uchun mos.",
      },
    },
    {
      title: {
        ru: "Для клиник и специалистов",
        uz: "Klinikalar va mutaxassislar uchun",
      },
      description: {
        ru: "Используется медицинскими учреждениями и лабораториями для быстрого скрининга и проверки результатов терапии.",
        uz: "Tibbiy muassasalar va laboratoriyalar tomonidan tez skrining va terapiya natijalarini tekshirish uchun ishlatiladi.",
      },
    },
  ],
  buttonText: {
    ru: "Смотреть инструкцию",
    uz: "Yo'riqnomani ko'rish",
  },
};

const openInstructionModal = () => {
  instructionModalRef.value?.openModal();
};
</script>