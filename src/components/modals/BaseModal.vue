<!-- urit-86-landing/src/components/modals/BaseModal.vue -->
<template>
  <Transition
  enter-active-class="transition-transform duration-300 ease-out"
  enter-from-class="-translate-y-10 opacity-0"
  enter-to-class="translate-y-0 opacity-100"
  leave-active-class="transition-transform duration-200 ease-in"
  leave-from-class="translate-y-0 opacity-100"
  leave-to-class="-translate-y-10 opacity-0"
>
  <div
    v-if="show"
    
    class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-3xl shadow-2xl relative max-w-3xl w-full max-h-[90vh] overflow-auto">
      <button
        @click="$emit('close')"
        class="absolute top-6 right-6 text-blue-500 hover:text-blue-700 transition-colors z-10"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <slot />
    </div>
  </div>
</Transition>
</template>

<script setup>
defineProps({
  show: Boolean
})

defineEmits(['close'])
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}
</style>