<template>
  <div class="font-sans text-gray-900 bg-gradient-to-r from-white to-[#0788ED] relative">

    <!-- Header на всех страницах -->
    <Header @open-instruction="openInstructionModal" />

    <!-- Контент страницы -->
    <router-view />

    <!-- Footer на всех страницах -->
    <Footer />

    <!-- Модалка поверх всего экрана -->
    <InstructionModal ref="instructionModalRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import InstructionModal from './components/modals/InstructionModal.vue'

const instructionModalRef = ref(null)

const openInstructionModal = () => {
  instructionModalRef.value?.openModal()
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

section[id] {
  scroll-margin-top: 80px;
}
</style>