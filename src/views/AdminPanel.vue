<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
      
      <!-- Если еще не установлен пароль -->
      <div v-if="!isPasswordSet">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
          🔐 Первоначальная настройка
        </h2>
        <p class="text-gray-600 mb-6 text-center">
          Создайте пароль администратора
        </p>
        
        <form @submit.prevent="setupPassword" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Придумайте пароль (6-8 символов)
            </label>
            <input 
              v-model="newPassword"
              type="password"
              minlength="6"
              maxlength="8"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="••••••"
            >
          </div>
          <button 
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Установить пароль
          </button>
        </form>
      </div>

      <!-- Вход по паролю -->
      <div v-else-if="!isAuthenticated">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
          🔐 Панель администратора
        </h2>
        
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Введите пароль
            </label>
            <input 
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="••••••"
            >
          </div>
          
          <div v-if="loginError" class="text-red-600 text-sm text-center">
            ❌ Неверный пароль
          </div>
          
          <button 
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Войти
          </button>
        </form>
      </div>

      <!-- Настройки Telegram -->
      <div v-else>
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-3xl font-bold text-gray-800">
            ⚙️ Настройки
          </h2>
          <button 
            @click="logout"
            class="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Выйти
          </button>
        </div>

        <div v-if="saveSuccess" class="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✓ Настройки сохранены!
        </div>

        <form @submit.prevent="saveSettings" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Ваш Telegram Chat ID
            </label>
            <input 
              v-model="chatId"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
              placeholder="1234567890"
            >
            <p class="text-xs text-gray-500 mt-1">
              Это ваш личный Chat ID из Telegram
            </p>
          </div>

          <div class="pt-2">
            <button 
              type="submit"
              class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              💾 Сохранить Chat ID
            </button>
          </div>

          <div class="pt-4 border-t">
            <button 
              type="button"
              @click="testConnection"
              :disabled="isTesting"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {{ isTesting ? '⏳ Проверка...' : '🧪 Отправить тестовое сообщение' }}
            </button>
            <p v-if="testResult" :class="testResult.success ? 'text-green-600' : 'text-red-600'" class="text-sm text-center mt-2">
              {{ testResult.message }}
            </p>
          </div>

          <div class="pt-4 border-t">
            <button 
              type="button"
              @click="changePassword"
              class="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              🔑 Сменить пароль
            </button>
          </div>
        </form>

        <div class="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 class="font-semibold text-blue-900 mb-2">📖 Как получить Chat ID:</h3>
          <ol class="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Найдите <a href="https://t.me/urit86_bot" target="_blank" class="underline font-semibold">@urit86_bot</a> в Telegram</li>
            <li>Напишите боту любое сообщение</li>
            <li>Откройте: <a href="https://api.telegram.org/bot7972853596:AAFKV9p7clUHaqj_Oc6rFnz63l8p-Ss4ERA/getUpdates" target="_blank" class="text-xs underline break-all">ссылку для получения ID</a></li>
            <li>Найдите "chat":{"id":XXXXXXXXX} - это ваш Chat ID</li>
            <li>Вставьте ID выше и сохраните</li>
          </ol>
        </div>

        <div class="mt-4 text-center">
          <a href="/" class="text-blue-600 hover:underline text-sm">
            ← Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Константа - Bot Token (не меняется)
const TELEGRAM_BOT_TOKEN = '7972853596:AAFKV9p7clUHaqj_Oc6rFnz63l8p-Ss4ERA'

const STORAGE_KEY = 'urit_chat_id'
const PASSWORD_KEY = 'urit_admin_password'

const isPasswordSet = ref(false)
const isAuthenticated = ref(false)
const loginError = ref(false)
const saveSuccess = ref(false)
const isTesting = ref(false)
const testResult = ref(null)

const password = ref('')
const newPassword = ref('')
const chatId = ref('')

// Простое шифрование (base64)
const encode = (str) => btoa(unescape(encodeURIComponent(str)))
const decode = (str) => {
  try {
    return decodeURIComponent(escape(atob(str)))
  } catch {
    return null
  }
}

onMounted(() => {
  const savedPassword = localStorage.getItem(PASSWORD_KEY)
  isPasswordSet.value = !!savedPassword
})

const setupPassword = () => {
  const encoded = encode(newPassword.value)
  localStorage.setItem(PASSWORD_KEY, encoded)
  isPasswordSet.value = true
  newPassword.value = ''
  alert('✅ Пароль установлен! Теперь войдите.')
}

const login = () => {
  const savedPassword = localStorage.getItem(PASSWORD_KEY)
  const decoded = decode(savedPassword)
  
  if (decoded === password.value) {
    isAuthenticated.value = true
    loginError.value = false
    loadSettings()
  } else {
    loginError.value = true
  }
}

const logout = () => {
  isAuthenticated.value = false
  password.value = ''
}

const loadSettings = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    const decoded = decode(saved)
    if (decoded) {
      chatId.value = decoded
    }
  }
}

const saveSettings = () => {
  const encoded = encode(chatId.value)
  localStorage.setItem(STORAGE_KEY, encoded)
  saveSuccess.value = true
  setTimeout(() => {
    saveSuccess.value = false
  }, 3000)
}

const testConnection = async () => {
  if (!chatId.value) {
    testResult.value = { success: false, message: '❌ Введите Chat ID' }
    return
  }

  isTesting.value = true
  testResult.value = null

  const text = `🧪 Тестовое сообщение от URIT-86\n\n✅ Настройки работают!\n⏰ ${new Date().toLocaleString('ru-RU')}`

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId.value,
          text: text
        })
      }
    )

    if (response.ok) {
      testResult.value = { success: true, message: '✅ Тестовое сообщение отправлено!' }
    } else {
      testResult.value = { success: false, message: '❌ Ошибка: проверьте Chat ID' }
    }
  } catch (error) {
    testResult.value = { success: false, message: '❌ Ошибка соединения' }
  } finally {
    isTesting.value = false
  }
}

const changePassword = () => {
  const newPass = prompt('Введите новый пароль (6-8 символов):')
  if (newPass && newPass.length >= 6 && newPass.length <= 8) {
    const encoded = encode(newPass)
    localStorage.setItem(PASSWORD_KEY, encoded)
    alert('✅ Пароль изменен!')
    logout()
  } else if (newPass) {
    alert('❌ Пароль должен быть 6-8 символов')
  }
}
</script>