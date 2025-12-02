<template>
  <div class="font-sans text-gray-900 bg-white relative">
    <!-- Используем router-view вместо прямого импорта -->
    <router-view />

    <!-- Модалка поверх всего экрана -->
    <InstructionModal ref="instructionModalRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InstructionModal from './components/modals/InstructionModal.vue'

const instructionModalRef = ref(null)

const openInstructionModal = () => {
  instructionModalRef.value?.openModal()
}
</script>