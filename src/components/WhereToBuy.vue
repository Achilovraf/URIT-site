<template>
  <section id="buy" class="py-20 px-4 bg-gradient-to-b to-white">
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

      <!-- Партнеры (логотипы аптек) -->
      <div class="mb-20 ">
        <h3 class="text-2xl font-bold text-center mb-10 text-gray-800">
          {{ content.partnersTitle[locale] }}
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="(partner, index) in partners" 
            :key="index"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
          >
            <div class="flex items-center justify-center h-24 mb-6">
              <img 
                :src="partner.logo" 
                :alt="partner.name"
                class="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h4 class="text-xl font-semibold text-center mb-3 text-gray-900">
              {{ partner.name }}
            </h4>
            <p class="text-gray-600 text-center mb-6">
              {{ partner.description[locale] }}
            </p>
            <a 
              :href="partner.link"
              target="_blank"
              class="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 text-center hover:scale-105"
            >
              {{ content.visitButton[locale] }}
            </a>
          </div>
        </div>
      </div>

      <!-- Награды и достижения -->
      <div class="">
        <h3 class="text-3xl font-bold text-center mb-10 text-gray-900">
          {{ content.awardsTitle[locale] }}
        </h3>
        
        <div class="space-y-8">
          <!-- Награда 1 -->
          <div class="flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:shadow-lg transition-shadow">
            <div class="flex-shrink-0">
              <img 
                src="/images/awards/platinum-award.png" 
                alt="Платиновая УНЦия"
                class="w-32 h-32 object-contain"
              />
            </div>
            <div class="flex-1 text-center md:text-left">
              <p class="text-gray-800 leading-relaxed text-lg">
                {{ content.award1[locale] }}
              </p>
            </div>
          </div>

          <!-- Награда 2 -->
          <div class="flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
            <div class="flex-shrink-0">
              <img 
                src="/images/awards/green-cross.png" 
                alt="Зеленый крест"
                class="w-32 h-32 object-contain"
              />
            </div>
            <div class="flex-1 text-center md:text-left">
              <p class="text-gray-800 leading-relaxed text-lg">
                {{ content.award2[locale] }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Контактная информация -->
      <div class="mt-16 text-center">
        <p class="text-gray-600 mb-6 text-lg">
          {{ content.contactText[locale] }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            href="tel:+998712345678"
            class="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {{ content.callButton[locale] }}
          </a>
          <a 
            href="mailto:info@urit.uz"
            class="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {{ content.emailButton[locale] }}
          </a>
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
    ru: 'Где купить URIT-86',
    uz: 'URIT-86 ni qayerdan sotib olish mumkin'
  },
  subtitle: {
    ru: 'Глюкометр доступен в крупнейших аптечных сетях Узбекистана',
    uz: 'Glyukometr O\'zbekistonning yirik dorixona tarmoqlarida mavjud'
  },
  partnersTitle: {
    ru: 'Наши партнеры',
    uz: 'Bizning hamkorlarimiz'
  },
  visitButton: {
    ru: 'Посетить сайт',
    uz: 'Saytga o\'tish'
  },
  awardsTitle: {
    ru: 'Награды и достижения',
    uz: 'Mukofotlar va yutuqlar'
  },
  award1: {
    ru: '"Материя Медика Холдинг" сталась лауреатом всероссийского открытого конкурса профессионалов фармотрасли "Платиновая УНЦия" в номинации "За разработку и внедрение в медицинскую практику инновационных лекарственных препаратов".',
    uz: '"Materiya Medika Xolding" butun Rossiya farmatsevtika sohasidagi mutaxassislarning ochiq tanlovida "Platina UNTsiya" mukofotining "Innovatsion dori vositalarini ishlab chiqish va tibbiy amaliyotga joriy etish uchun" nominatsiyasida g\'olib bo\'ldi.'
  },
  award2: {
    ru: 'Препараты «Материя Медика Холдинг» неоднократно становились лауреатами профессиональной аптечной Премии «Зеленый крест»',
    uz: '"Materiya Medika Xolding" preparatlari bir necha bor professional dorixona mukofoti "Yashil xoch" laureati bo\'lgan'
  },
  contactText: {
    ru: 'Есть вопросы? Свяжитесь с нами',
    uz: 'Savollaringiz bormi? Biz bilan bog\'laning'
  },
  callButton: {
    ru: 'Позвонить',
    uz: 'Qo\'ng\'iroq qilish'
  },
  emailButton: {
    ru: 'Написать',
    uz: 'Xat yozish'
  }
}

const partners = [
  {
    name: 'Apteka.uz',
    logo: '/images/partners/apteka-uz.png',
    description: {
      ru: 'Крупнейшая онлайн-аптека Узбекистана',
      uz: 'O\'zbekistonning eng yirik onlayn dorixonasi'
    },
    link: 'https://apteka.uz'
  },
  {
    name: 'GoPharm',
    logo: '/images/partners/gopharm.png',
    description: {
      ru: 'Интернет-аптека с доставкой по  Ташкенту',
      uz: 'Butun Toshkent bo\'ylab yetkazib berish bilan internet-dorixona'
    },
    link: 'https://gopharm.uz'
  },
  {
    name: 'PharmaClick',
    logo: '/images/partners/pharmaclik.png',
    description: {
      ru: 'Быстрая доставка медицинских товаров',
      uz: 'Tibbiy mahsulotlarni tez yetkazib berish'
    },
    link: 'https://pharmaclik.uz'
  }
]
</script>