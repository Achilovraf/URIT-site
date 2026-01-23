<template>
  <div
    class="font-sans text-gray-900 bg-gradient-to-r from-white to-[#0788ED] relative"
  >
    <!-- Header на всех страницах -->
    <Header @open-instruction="openInstructionModal" />

    <!-- Контент страницы -->
    <router-view />

    <!-- Footer на всех страницах -->
    <Footer />

    <!-- Модалка поверх всего экрана -->
    <InstructionModal ref="instructionModalRef" />

    <!-- ================= TELEGRAM FLOAT BUTTON ================= -->
<a
  href="https://t.me/nilufar_abdunazarovaa"
  target="_blank"
  class="fixed bottom-6 right-6 z-50 group
  flex items-center justify-center
  w-16 h-16 rounded-full
  bg-gradient-to-r from-[#0788ED] to-blue-700
  shadow-2xl
  transition-all duration-300
  hover:scale-110"
>
  <svg
    class="w-7 h-7 text-white transform
    group-hover:scale-110 transition-transform duration-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12
      12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224
      c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325
      c.016.093.036.306.02.472-.18 1.898-.962 6.502
      -1.36 8.627-.168.9-.499 1.201-.82 1.23
      -.696.065-1.225-.46-1.9-.902-1.056-.693
      -1.653-1.124-2.678-1.8-1.185-.78-.417-1.21
      .258-1.91.177-.184 3.247-2.977 3.307-3.23
      .007-.032.014-.15-.056-.212s-.174-.041-.249-.024
      c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49
      -1.302.48-.428-.008-1.252-.241-1.865-.44
      -.752-.245-1.349-.374-1.297-.789.027-.216
      .325-.437.893-.663 3.498-1.524 5.83-2.529
      6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
    />
  </svg>
</a>

  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import InstructionModal from "./components/modals/InstructionModal.vue";

const instructionModalRef = ref(null);

const openInstructionModal = () => {
  instructionModalRef.value?.openModal();
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 80px;
}
</style>
