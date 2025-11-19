import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const locale = ref('ru')
  const testAnswers = ref([])
  
  function setLocale(lang) {
    locale.value = lang
  }
  
  function addAnswer(answer) {
    testAnswers.value.push(answer)
  }
  
  function resetTest() {
    testAnswers.value = []
  }
  
  return {
    locale,
    testAnswers,
    setLocale,
    addAnswer,
    resetTest
  }
})