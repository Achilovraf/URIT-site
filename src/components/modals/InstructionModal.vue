<!-- urit-86-landing/src/components/modals/InstructionModal.vue -->
<template>
  <BaseModal :show="isOpen" @close="closeModal">
    <div class="p-8 lg:p-12">
      <!-- Заголовок -->
      <h2 class="text-3xl lg:text-2xl pt-5 font-bold text-center text-gray-900 mb-8">
        ИНСТРУКЦИЯ ПО ПРИМЕНЕНИЮ ГЛЮКОМЕТРА<br />
      </h2>

      <!-- Изображение продукта -->
      <div class="flex justify-center mb-10">
        <img
          src="/images/Глюкометр 4.png"
          alt="URIT-86 Глюкометр"
          class="w-64 h-auto lg:w-80 object-contain drop-shadow-2xl"
        />
      </div>

      <!-- Кнопка -->
      <div class="flex justify-center">
        <a
          href="/files/urit-86-instruction.pdf"
          target="_blank"
          class="group inline-flex items-center gap-3 
      border-2  border-indigo-700
      bg-white border-gradient-to-r from-blue-600 to-indigo-600 
      text-black font-bold px-10 py-4 rounded-xl 
      shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105
      hover:text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 hover:[background-clip:border-box]"
        >
          <PdfFileIcon
            class="w-6 h-6 text-black group-hover:text-white transition-colors duration-300"
          />
          <span>Инструкция по глюкометру</span>
        </a>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";
import PdfFileIcon from "@/assets/icons/PdfFileIcon.vue";

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const downloadInstruction = () => {
  window.open("/files/urit-86-instruction.pdf", "_blank");
};

// Экспортируем метод для открытия модалки
defineExpose({
  openModal,
});
</script>
