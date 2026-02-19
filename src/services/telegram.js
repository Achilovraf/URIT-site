import { ref, computed } from 'vue'
import { useAppStore } from '../store'
import { sendTelegramMessage } from '../services/telegram'  // ← вот так

const store = useAppStore()
const locale = computed(() => store.locale)

const formData = ref({ name: '', phone: '', message: '' })
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false

  const text = `
🔔 <b>Новая заявка с сайта URIT-86</b>

👤 <b>Имя:</b> ${formData.value.name}
📞 <b>Телефон:</b> ${formData.value.phone}
${formData.value.message ? `💬 <b>Сообщение:</b> ${formData.value.message}` : ''}

⏰ <i>${new Date().toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' })}</i>
  `.trim()

  try {
    await sendTelegramMessage(text)  // ← один вызов, всё внутри сервиса
    showSuccess.value = true
    formData.value = { name: '', phone: '', message: '' }
    setTimeout(() => { showSuccess.value = false }, 5000)
  } catch (error) {
    console.error('Error:', error)
    showError.value = true
    setTimeout(() => { showError.value = false }, 5000)
  } finally {
    isSubmitting.value = false
  }
}