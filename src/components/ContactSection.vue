<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAppStore } from '../store'

const store = useAppStore()
const locale = computed(() => store.locale)

// Константа - Bot Token
const TELEGRAM_BOT_TOKEN = '7972853596:AAFKV9p7clUHaqj_Oc6rFnz63l8p-Ss4ERA'

const decode = (str) => {
  try {
    return decodeURIComponent(escape(atob(str)))
  } catch {
    return null
  }
}

const getTelegramChatId = () => {
  const saved = localStorage.getItem('urit_chat_id')
  if (saved) {
    const decoded = decode(saved)
    if (decoded) return decoded
  }
  // Дефолтный Chat ID (ваш)
  return '1364515770'
}

const chatId = ref(getTelegramChatId())

onMounted(() => {
  chatId.value = getTelegramChatId()
})

const formData = ref({
  name: '',
  phone: '',
  message: ''
})

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

⏰ <i>${new Date().toLocaleString('ru-RU', { 
    dateStyle: 'short', 
    timeStyle: 'short' 
  })}</i>
  `.trim()

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId.value,
          text: text,
          parse_mode: 'HTML'
        })
      }
    )

    if (response.ok) {
      showSuccess.value = true
      formData.value = {
        name: '',
        phone: '',
        message: ''
      }
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    } else {
      throw new Error('Telegram API error')
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>