<template>
  <section id="contact" class="py-20 px-4 bg-gradient-to-br ">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-6 text-gray-900">
        {{ locale === 'ru' ? 'Остались вопросы?' : 'Savollaringiz bormi?' }}
      </h2>
      <p class="text-xl text-gray-700 mb-8">
        {{ locale === 'ru' 
          ? 'Оставьте заявку, и мы свяжемся с вами'
          : 'Ariza qoldiring, biz siz bilan bog\'lanamiz'
        }}
      </p>
      
      <!-- Success Message -->
      <div v-if="showSuccess" class="mb-6 bg-green-500 text-white p-4 rounded-lg animate-pulse">
        {{ locale === 'ru' 
          ? '✓ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.'
          : '✓ Rahmat! Arizangiz yuborildi. Tez orada siz bilan bog\'lanamiz.'
        }}
      </div>
      
      <!-- Error Message -->
      <div v-if="showError" class="mb-6 bg-red-500 text-white p-4 rounded-lg">
        {{ locale === 'ru' 
          ? '✗ Ошибка отправки. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.'
          : '✗ Yuborishda xatolik. Iltimos, keyinroq urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri bog\'laning.'
        }}
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-2xl">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <input 
            v-model="formData.name"
            type="text" 
            :placeholder="locale === 'ru' ? 'Ваше имя *' : 'Ismingiz *'"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          >
          <input 
            v-model="formData.phone"
            type="tel" 
            :placeholder="locale === 'ru' ? 'Телефон * (+998901234567)' : 'Telefon * (+998901234567)'"
            required
            pattern="[+]?[0-9]{9,15}"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          >
          <textarea 
            v-model="formData.message"
            :placeholder="locale === 'ru' ? 'Ваш вопрос (необязательно)' : 'Savolingiz (ixtiyoriy)'"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          ></textarea>
          <button 
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span v-if="!isSubmitting">
              {{ locale === 'ru' ? 'Отправить заявку' : 'Ariza yuborish' }}
            </span>
            <span v-else class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ locale === 'ru' ? 'Отправка...' : 'Yuborilmoqda...' }}
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

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