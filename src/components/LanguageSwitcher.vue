<template>
  <div class="flex gap-2">
    <button 
      @click="setLang('ru')"
      :class="['px-3 py-1 rounded text-sm transition', 
               store.locale === 'ru' ? 'bg-blue-600 text-white' : 'border border-gray-300']"
    >
      RU
    </button>
    <button 
      @click="setLang('uz')"
      :class="['px-3 py-1 rounded text-sm transition',
               store.locale === 'uz' ? 'bg-blue-600 text-white' : 'border border-gray-300']"
    >
      UZ
    </button>
  </div>
</template>

<script setup>
import { useAppStore } from '../store'
const store = useAppStore()

function setLang(lang) {
  store.setLocale(lang)
}
</script>