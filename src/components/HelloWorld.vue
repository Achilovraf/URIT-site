<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
    <!-- Заголовок -->
    <h1 class="text-4xl font-bold mb-6 text-red-600">{{ msg }}</h1>

    <!-- Карточка -->
    <div class="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
      <button
        type="button"
        @click="count++"
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
      >
        count is {{ count }}
      </button>

      <p class="mt-4 text-gray-500">
        Edit
        <code class="text-indigo-500 font-mono">components/HelloWorld.vue</code>
        to test HMR
      </p>
    </div>
    <div class="min-h-screen flex items-center justify-center bg-blue-100">
    <h1 class="text-4xl font-bold text-red-500">Tailwind работает!</h1>
  </div>

    <!-- Ссылки -->
    <div class="mt-8 space-y-2 text-center">
      <p>
        Check out
        <a
          href="https://vuejs.org/guide/quick-start.html#local"
          target="_blank"
          class="text-indigo-600 hover:underline"
        >
          create-vue
        </a>
        — the official Vue + Vite starter
      </p>
      <p>
        Learn more about IDE Support for Vue in the
        <a
          href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          target="_blank"
          class="text-indigo-600 hover:underline"
        >
          Vue Docs Scaling up Guide
        </a>.
      </p>
    </div>
  </div>
</template>
