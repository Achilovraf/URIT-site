<template>
  <section id="steps" class="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="max-w-7xl mx-auto">
      
      <!-- Заголовок секции -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {{ content.title[locale] }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ content.subtitle[locale] }}
        </p>
      </div>

      <!-- Основные 4 шага (краткие) -->
      <div class="grid md:grid-cols-4 gap-8 mb-20">
        <div 
          v-for="(step, index) in mainSteps" 
          :key="index" 
          class="text-center group"
        >
          <!-- Круг с номером -->
          <div class="relative mb-6">
            <div class="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow border-4 border-primary/20 group-hover:border-primary/40">
              <span class="text-4xl font-bold text-primary">{{ index + 1 }}</span>
            </div>
            <!-- Стрелка между шагами (кроме последнего) -->
            <div v-if="index < mainSteps.length - 1" class="hidden md:block absolute top-1/2 left-full w-full transform -translate-y-1/2">
              <svg class="w-full h-6 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 100 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h85m0 0l-7-7m7 7l-7 7" />
              </svg>
            </div>
          </div>
          
          <!-- Иконка -->
          <div class="text-5xl mb-4">{{ step.icon }}</div>
          
          <!-- Заголовок -->
          <h3 class="font-bold text-xl mb-3 text-gray-900">
            {{ step.title[locale] }}
          </h3>
          
          <!-- Описание -->
          <p class="text-gray-600 leading-relaxed">
            {{ step.description[locale] }}
          </p>
        </div>
      </div>

      <!-- Детальная инструкция -->
      <div class="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-gray-900">
            {{ content.detailedTitle[locale] }}
          </h3>
        </div>

        <!-- Детальные шаги -->
        <div class="space-y-6">
          <div 
            v-for="(step, index) in detailedSteps" 
            :key="index"
            class="flex gap-6 p-6 rounded-2xl hover:bg-blue-50 transition-colors group"
          >
            <!-- Номер шага -->
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white rounded-xl flex items-center justify-center font-bold text-lg transition-colors">
                {{ index + 1 }}
              </div>
            </div>
            
            <!-- Текст -->
            <div class="flex-1">
              <p class="text-gray-700 leading-relaxed text-lg">
                {{ step[locale] }}
              </p>
            </div>
          </div>
        </div>

        <!-- Предупреждение -->
        <div class="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-yellow-900 mb-2">
                {{ content.warningTitle[locale] }}
              </h4>
              <p class="text-yellow-800">
                {{ content.warningText[locale] }}
              </p>
            </div>
          </div>
        </div>

        <!-- Кнопка скачать полную инструкцию -->
        <div class="mt-10 text-center">
          <button class="inline-flex items-center gap-3 bg-primary hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{{ content.downloadButton[locale] }}</span>
          </button>
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

const content = {
  title: {
    ru: 'Как использовать URIT-86',
    uz: 'URIT-86 dan qanday foydalanish'
  },
  subtitle: {
    ru: 'Простая пошаговая инструкция для точного измерения уровня глюкозы',
    uz: 'Glyukoza darajasini aniq o\'lchash uchun oddiy bosqichma-bosqich yo\'riqnoma'
  },
  detailedTitle: {
    ru: 'Детальная инструкция по применению',
    uz: 'Batafsil foydalanish bo\'yicha ko\'rsatma'
  },
  warningTitle: {
    ru: 'Важно!',
    uz: 'Muhim!'
  },
  warningText: {
    ru: 'Не пытайтесь пополнить пробу крови в лимфатическом отверстии, даже если вы видите недостаточное количество в окне подтверждения. Удалите тест-полоску и повторите с новой полоской.',
    uz: 'Tasdiqlash oynasida yetarli miqdor ko\'rinmasa ham, limfa teshigiga qon namunasini to\'ldirishga urinmang. Test chizig\'ini olib tashlang va yangi chiziq bilan takrorlang.'
  },
  downloadButton: {
    ru: 'Скачать полную инструкцию (PDF)',
    uz: 'To\'liq yo\'riqnomani yuklab olish (PDF)'
  }
}

const mainSteps = [
  {
    icon: '🧼',
    title: {
      ru: 'Подготовка',
      uz: 'Tayyorgarlik'
    },
    description: {
      ru: 'Вымойте руки и подготовьте устройство',
      uz: 'Qo\'llaringizni yuving va qurilmani tayyorlang'
    }
  },
  {
    icon: '📱',
    title: {
      ru: 'Установка',
      uz: 'O\'rnatish'
    },
    description: {
      ru: 'Вставьте тест-полоску в глюкометр',
      uz: 'Test chizig\'ini glyukometrga joylashtiring'
    }
  },
  {
    icon: '🩸',
    title: {
      ru: 'Измерение',
      uz: 'O\'lchash'
    },
    description: {
      ru: 'Нанесите каплю крови на полоску',
      uz: 'Qon tomchisini chizig\'a qo\'ying'
    }
  },
  {
    icon: '✅',
    title: {
      ru: 'Результат',
      uz: 'Natija'
    },
    description: {
      ru: 'Получите результат через 7 секунд',
      uz: '7 soniyadan keyin natija oling'
    }
  }
]

const detailedSteps = [
  {
    ru: 'Тщательно вымойте и высушите руки. Вытяните тест-полоску и плотно закройте флакон.',
    uz: 'Qo\'llaringizni yaxshilab yuving va quritib oling. Test chizig\'ini torting va flakonni mahkam yoping.'
  },
  {
    ru: 'Вставьте тест-полоску в гнездо глюкометра.',
    uz: 'Test chizig\'ini glyukometr uyasiga joylashtiring.'
  },
  {
    ru: 'Глюкометр включается автоматически, отображаются по очереди символы: "CH", " ", температура окружающей среды, время, дата и мигающий символ "капля крови". Нажмите кнопку M, появится символ "CTL" - это значит, что устройство пребывает в режиме проверки. В этом режиме результат теста не будет сохранен в памяти. Если вы хотите отменить проверку с контрольной жидкостью нажмите кнопку M еще раз, и символ "CTL" исчезнет.',
    uz: 'Glyukometr avtomatik ravishda yoqiladi, navbatma-navbat belgilar ko\'rsatiladi: "CH", " ", atrof-muhit harorati, vaqt, sana va miltillovchi "qon tomchisi" belgisi. M tugmasini bosing, "CTL" belgisi paydo bo\'ladi - bu qurilma tekshirish rejimida ekanligini bildiradi. Ushbu rejimda test natijasi xotiraga saqlanmaydi. Nazorat suyuqligi bilan tekshirishni bekor qilmoqchi bo\'lsangiz, M tugmasini yana bir marta bosing va "CTL" belgisi yo\'qoladi.'
  },
  {
    ru: 'Правильно сделайте прокол.',
    uz: 'To\'g\'ri ponksiya qiling.'
  },
  {
    ru: 'Пока на дисплее мигает символ "капля крови", поднесите верхнюю часть тест-полоски к капле крови. Дождитесь полного заполнения контрольного окна тест-полоски.',
    uz: 'Displeyda "qon tomchisi" belgisi miltillab turganida, test chizig\'ining yuqori qismini qon tomchisiga yaqinlashtirib turing. Test chizig\'ining nazorat oynasi to\'liq to\'ldirilishini kuting.'
  },
  {
    ru: 'Точный результат вы получите через 7 секунд. После того, как глюкометр начнет обратный отсчет до 0, результат вашего теста появится вместе с датой и временем выполнения теста и будет автоматически сохранен в памяти.',
    uz: 'Aniq natijani 7 soniyadan keyin olasiz. Glyukometr 0 gacha teskari sanashni boshlagandan so\'ng, test natijangiz test bajarilgan sana va vaqt bilan birga paydo bo\'ladi va avtomatik ravishda xotiraga saqlanadi.'
  },
  {
    ru: 'Не пытайтесь пополнить пробу крови в лимфатическом отверстии, даже если вы видите недостаточное количество в окне подтверждения. В этом случае удалите тест-полоску и повторите упражнение с новой полоской.',
    uz: 'Tasdiqlash oynasida yetarli miqdor ko\'rinmasa ham, limfa teshigiga qon namunasini to\'ldirishga urinmang. Bunday holda test chizig\'ini olib tashlang va yangi chiziq bilan mashqni takrorlang.'
  },
  {
    ru: 'Вытяните использованную тест-полоску, нажав кнопку вытягивания тест-полосок, или вытяните ее вручную. После извлечения использованной тест-полоски на дисплее появится символ "OFF", и устройство автоматически выключится.',
    uz: 'Ishlatilgan test chizig\'ini test chiziqlari tortish tugmasini bosish orqali torting yoki uni qo\'lda torting. Ishlatilgan test chizig\'i chiqarilgandan so\'ng displeyda "OFF" belgisi paydo bo\'ladi va qurilma avtomatik ravishda o\'chadi.'
  },
  {
    ru: 'Автоматически утилизируйте использованную тест-полоску.',
    uz: 'Ishlatilgan test chizig\'ini avtomatik ravishda utilizatsiya qiling.'
  },
  {
    ru: 'Утилизируйте использованную полоску и ланцет в соответствии с действующими правилами.',
    uz: 'Ishlatilgan chiziq va lansetni amaldagi qoidalarga muvofiq utilizatsiya qiling.'
  }
]
</script>