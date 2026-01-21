<template>
  <section id="results" class="py-4 px-4">
    <div class="max-w-6xl mx-auto">
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(param, index) in parameters" :key="index" 
             class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
          <h3 class="font-semibold text-lg mb-2 text-gray-900">{{ param.name }}</h3>
          <p class="text-gray-600 text-sm">{{ param.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useAppStore } from '../store'

const store = useAppStore()
const locale = computed(() => store.locale)

const parameters = computed(() => [
  
])
</script>