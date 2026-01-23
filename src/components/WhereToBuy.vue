<template>
  <section id="buy" class="py-4 px-4 bg-gradient-to-b">
    <div class="max-w-7xl mx-auto">

      <!-- Заголовок -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {{ content.title[locale] }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ content.subtitle[locale] }}
        </p>
      </div>

      <!-- ================= ПАРТНЁРЫ ================= -->
      <div class="mb-24">
        <h3 class="text-2xl font-bold text-center mb-10 text-gray-800">
          {{ content.partnersTitle[locale] }}
        </h3>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl
            transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            <div class="flex items-center justify-center h-24 mb-6">
              <img :src="partner.logo" :alt="partner.name" class="max-h-full" />
            </div>

            <h4 class="text-xl font-semibold text-center mb-3">
              {{ partner.name }}
            </h4>

            <p class="text-gray-600 text-center mb-6 flex-grow">
              {{ partner.description[locale] }}
            </p>

            <button
              @click="openModal(partner)"
              class="w-full bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-700 hover:to-indigo-700 text-white
              font-semibold py-3 rounded-xl transition-all hover:scale-105"
            >
              {{ content.visitButton[locale] }}
            </button>
          </div>
        </div>
      </div>

      <!-- ================= СЕРТИФИКАТЫ ================= -->
<div class="mt-28">
  <h3 class="text-2xl font-bold text-center mb-20 text-gray-800">
    {{ content.certTitle[locale] }}
  </h3>

  <div class="grid md:grid-cols-3 gap-24 text-center">

    <!-- CERT 1 -->
    <a
      href="/files/EC_Certificate_URIT.pdf"
      target="_blank"
      class="group cursor-pointer"
    >
      <img
        src="@/assets/TÜVSÜD.png"
        alt="TÜV SÜD"
        class="
          mx-auto mb-8
          w-36 h-36
          object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
      />

      <h4 class="text-xl font-semibold mb-3 text-gray-900">
        {{ content.cert1Title[locale] }}
      </h4>

      <p class="text-gray-600 max-w-sm mx-auto">
        {{ locale === 'ru'
          ? 'Европейский сертификат соответствия TÜV SÜD'
          : 'TÜV SÜD tomonidan berilgan Yevropa sifat sertifikati'
        }}
      </p>
    </a>

    <!-- CERT 2 -->
    <a
      href="/files/URIT_86.pdf"
      target="_blank"
      class="group cursor-pointer"
    >
      <img
        src="@/assets/registrasionnoe.png"
        alt="Registration Certificate"
        class="
          mx-auto mb-8
          w-36 h-36
          object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
      />

      <h4 class="text-xl font-semibold mb-3 text-gray-900">
        {{ content.cert2Title[locale] }}
      </h4>

      <p class="text-gray-600 max-w-sm mx-auto">
        {{ locale === 'ru'
          ? 'Регистрационное удостоверение Республики Узбекистан'
          : 'Oʻzbekiston Respublikasida roʻyxatdan o‘tgan hujjat'
        }}
      </p>
    </a>

    <!-- CERT 3 -->
    <a
      href="/files/ФК_подтверждение.pdf"
      target="_blank"
      class="group cursor-pointer"
    >
      <img
        src="@/assets/ssv.png"
        alt="Ministry of Health"
        class="
          mx-auto mb-8
          w-36 h-36
          object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
      />

      <h4 class="text-xl font-semibold mb-3 text-gray-900">
        {{ content.cert3Title[locale] }}
      </h4>

      <p class="text-gray-600 max-w-sm mx-auto">
        {{ locale === 'ru'
          ? 'Подтверждение Министерства здравоохранения РУз'
          : 'Sog‘liqni saqlash vazirligi tasdig‘i'
        }}
      </p>
    </a>

  </div>
</div>

      <!-- ================= КОНТАКТЫ ================= -->
      <div class="mt-24 text-center">
        <p class="text-gray-600 mb-6 text-lg">
          {{ content.contactText[locale] }}
        </p>

        <div class="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+998900038666"
            class="px-8 py-3 rounded-xl border-2 border-blue-600
            text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            {{ content.callButton[locale] }}
          </a>

          <a
            href="mailto:info@urit.uz"
            class="px-8 py-3 rounded-xl border-2 border-blue-600
            text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            {{ content.emailButton[locale] }}
          </a>
        </div>
      </div>
    </div>

    <!-- ================= MODAL ================= -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div class="bg-white rounded-3xl w-full max-w-lg p-8 relative">
        <button
          @click="isModalOpen = false"
          class="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
        >
          ×
        </button>

        <h3 class="text-2xl font-bold text-center mb-8">
          {{ locale === 'ru' ? 'Выберите продукт' : 'Mahsulotni tanlang' }}
        </h3>

        <div class="grid sm:grid-cols-2 gap-6">
          <a
            :href="selectedPartner.products.lancets.link"
            target="_blank"
            class="border rounded-2xl p-6 text-center hover:border-blue-600 hover:shadow-lg transition"
          >
            <img :src="selectedPartner.products.lancets.icon" class="w-20 mx-auto mb-4" />
            {{ locale === 'ru' ? 'Тест-полоски' : 'Test-tayoqchalar' }}
          </a>

          <a
            :href="selectedPartner.products.glucometer.link"
            target="_blank"
            class="border rounded-2xl p-6 text-center hover:border-blue-600 hover:shadow-lg transition"
          >
            <img :src="selectedPartner.products.glucometer.icon" class="w-20 mx-auto mb-4" />
            {{ locale === 'ru' ? 'Глюкометр' : 'Glyukometr' }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '../store'

const store = useAppStore()
const locale = computed(() => store.locale)

const isModalOpen = ref(false)
const selectedPartner = ref(null)

const openModal = (partner) => {
  selectedPartner.value = partner
  isModalOpen.value = true
}

const content = {
  title: { ru: 'Где купить URIT-86', uz: 'URIT-86 ni qayerdan sotib olish mumkin' },
  subtitle: {
    ru: 'Глюкометр доступен в крупнейших аптечных сетях Узбекистана',
    uz: 'Glyukometr Oʻzbekiston dorixonalarida mavjud'
  },
  partnersTitle: { ru: 'Наши партнёры', uz: 'Bizning hamkorlarimiz' },
  visitButton: { ru: 'Посетить сайт', uz: 'Saytga o‘tish' },
  certTitle: { ru: 'Сертификаты и документация', uz: 'Sertifikatlar va hujjatlar' },
  cert1Title: { ru: 'Сертификат соответствия', uz: 'Muvofiqlik sertifikati' },
  cert2Title: { ru: 'Регистрационное удостоверение', uz: 'Roʻyxatdan o‘tish hujjati' },
  cert3Title: { ru: 'Подтверждение Минздрава', uz: 'Sogʻliqni saqlash vazirligi tasdig‘i' },
  contactText: { ru: 'Есть вопросы? Свяжитесь с нами', uz: 'Savollaringiz bormi?' },
  callButton: { ru: 'Позвонить', uz: 'Qo‘ng‘iroq qilish' },
  emailButton: { ru: 'Написать', uz: 'Xat yozish' }
}

const partners = [
  {
    name: 'GoPharm',
    logo: 'images/partners/gopharm.png',
    description: {
      ru: 'Интернет-аптека с доставкой по Ташкенту',
      uz: 'Toshkent bo‘ylab yetkazib berish'
    },
    products: {
      lancets: { icon: 'images/lancets_icon.png', link: 'https://gopharm.uz/lancets-link' },
      glucometer: {
        icon: 'images/glucometer_icon.png',
        link: 'https://gopharm.uz/product/gliukometr-urit-86-s-aksessuarami'
      }
    }
  }
]
</script>
