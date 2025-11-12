<template>
  <div class="font-sans text-gray-900 bg-white relative">
    <LandingPage />

    <!-- Модалка поверх всего экрана -->
    <InstructionModal ref="instructionModalRef" />
  </div>
</template>

<script setup>
import LandingPage from './views/LandingPage.vue'
import { ref } from 'vue'
import InstructionModal from './components/modals/InstructionModal.vue'

const instructionModalRef = ref(null)

const openInstructionModal = () => {
  instructionModalRef.value?.openModal()
}

// Можно передать метод открытия в LandingPage через props или provide/inject
</script>
