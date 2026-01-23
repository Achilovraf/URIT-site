<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/70 backdrop-blur-sm"
          @click="closeModal"
        ></div>

        <!-- Modal Content -->
        <div
          class="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden z-10"
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between p-6 border-b border-gray-200"
          >
            <h3 class="text-2xl font-bold text-gray-900">
              {{ content.title[locale] }}
            </h3>
            <button
              @click="closeModal"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <svg
                class="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Video Content -->
          <div class="relative bg-black aspect-video">
            <video
              ref="videoPlayer"
              class="w-full h-full"
              controls
              controlsList="nodownload"
              @ended="onVideoEnded"
            >
              <source src="/files/instruksiya.mp4" type="video/mp4" />
              {{ content.notSupported[locale] }}
            </video>
          </div>

          <!-- Footer -->
          <div class="p-6 bg-gray-50 border-t border-gray-200">
            <button
              @click="closeModal"
              class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              {{ content.closeButton[locale] }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useAppStore } from "../../store";

const store = useAppStore();
const locale = computed(() => store.locale);

const isOpen = ref(false);
const videoPlayer = ref(null);

const content = {
  title: {
    ru: "Видео инструкция",
    uz: "Video yo'riqnoma",
  },
  notSupported: {
    ru: "Ваш браузер не поддерживает видео.",
    uz: "Brauzeringiz videoni qo'llab-quvvatlamaydi.",
  },
  closeButton: {
    ru: "Закрыть",
    uz: "Yopish",
  },
};

const openModal = () => {
  isOpen.value = true;
  // Запускаем видео при открытии модального окна
  setTimeout(() => {
    if (videoPlayer.value) {
      videoPlayer.value.play();
    }
  }, 100);
};

const closeModal = () => {
  // Останавливаем видео при закрытии
  if (videoPlayer.value) {
    videoPlayer.value.pause();
    videoPlayer.value.currentTime = 0;
  }
  isOpen.value = false;
};

const onVideoEnded = () => {
  // Можно добавить действие после окончания видео
  console.log("Video ended");
};

// Закрытие по клавише Escape
watch(isOpen, (newVal) => {
  if (newVal) {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    // Убираем слушатель при закрытии
    return () => window.removeEventListener("keydown", handleEsc);
  }
});

defineExpose({
  openModal,
  closeModal,
});
</script>

<style scoped>
/* Modal transition animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}

/* Custom video controls styling */
video::-webkit-media-controls-panel {
  background-color: rgba(0, 0, 0, 0.8);
}

video::-webkit-media-controls-play-button {
  background-color: #2563eb;
  border-radius: 50%;
}
</style>