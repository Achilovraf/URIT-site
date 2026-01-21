<template>
  <section id="buy" class="py-4 px-4 bg-gradient-to-b ">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок секции -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {{ content.title[locale] }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ content.subtitle[locale] }}
        </p>
      </div>

      <!-- Партнеры (логотипы аптек) -->
      <div class="mb-20">
        <h3 class="text-2xl font-bold text-center mb-10 text-gray-800 h-full">
          {{ content.partnersTitle[locale] }}
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer flex flex-col"
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
            <p class="text-gray-600 text-center mb-6 flex-grow">
              {{ partner.description[locale] }}
            </p>
            <a
              :href="partner.link"
              target="_blank"
              class="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 text-center hover:scale-105 mt-auto"
            >
              {{ content.visitButton[locale] }}
            </a>
          </div>
        </div>
      </div>

      <!-- Сертификаты и документация -->
      <div class="mt-20">
        <h3 class="text-2xl font-bold text-center mb-10 text-gray-800">
          {{ content.certTitle[locale] }}
        </h3>

        <div class="max-w-4xl mx-auto space-y-4">
          <!-- EC Certificate -->
          <div
            class="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-500 transition-all duration-300 flex items-center justify-between"
          >
            <div class="flex items-center gap-3 flex-1">
              <img
                src="@/assets/TÜVSÜD.png"
                alt="TÜV SÜD"
                class="w-10 h-10 object-contain"
              />
              <span class="text-blue-600 text-sm">▼</span>
              <a
                href="/files/EC_Certificate_URIT.pdf"
                target="_blank"
                class="text-blue-600 hover:text-blue-700 font-normal text-base flex-1"
              >
                {{ content.cert1Title[locale] }}
              </a>
            </div>
          </div>

          <!-- Registration Certificate -->
          <div
            class="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-500 transition-all duration-300 flex items-center justify-between"
          >
            <div class="flex items-center gap-3 flex-1">
              <img
                src="@/assets/registrasionnoe.png"
                alt="Registration"
                class="w-1- h-10 object-contain"
              />
              <span class="text-blue-600 text-sm">▼</span>
              <a
                href="/files/URIT_86.pdf"
                target="_blank"
                class="text-blue-600 hover:text-blue-700 font-normal text-base flex-1"
              >
                {{ content.cert2Title[locale] }}
              </a>
            </div>
          </div>

          <!-- Confirmation Document -->
          <div
            class="bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-500 transition-all duration-300 flex items-center justify-between"
          >
            <div class="flex items-center gap-3 flex-1">
              <img
                src="@/assets/ssv.png"
                alt="Ministry of Health"
                class="w-10 h-10 object-contain"
              />
              <span class="text-blue-600 text-sm">▼</span>
              <a
                href="/files/ФК подтверждение.pdf"
                target="_blank"
                class="text-blue-600 hover:text-blue-700 font-normal text-base flex-1"
              >
                {{ content.cert3Title[locale] }}
              </a>
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
            href="tel:+998900038666"
            class="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {{ content.callButton[locale] }}
          </a>
          <a
            href="mailto:info@urit.uz"
            class="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {{ content.emailButton[locale] }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "../store";

const store = useAppStore();
const locale = computed(() => store.locale);

const content = {
  title: {
    ru: "Где купить URIT-86",
    uz: "URIT-86 ni qayerdan sotib olish mumkin",
  },
  subtitle: {
    ru: "Глюкометр доступен в крупнейших аптечных сетях Узбекистана",
    uz: "Glyukometr O'zbekistonning yirik dorixona tarmoqlarida mavjud",
  },
  partnersTitle: {
    ru: "Наши партнеры",
    uz: "Bizning hamkorlarimiz",
  },
  visitButton: {
    ru: "Посетить сайт",
    uz: "Saytga o'tish",
  },
  certTitle: {
    ru: "Сертификаты и документация",
    uz: "Sertifikatlar va hujjatlar",
    en: "Certificates and Documentation",
  },
  cert1Title: {
    ru: "EC Сертификат соответствия TÜV SÜD",
    uz: "TÜV SÜD EC muvofiqlik sertifikati",
    en: "TÜV SÜD EC Certificate of Conformity",
  },
  cert2Title: {
    ru: "Регистрационное удостоверение Республики Узбекистан",
    uz: "O'zbekiston Respublikasi ro'yxatdan o'tkazish guvohnomasi",
    en: "Registration Certificate of the Republic of Uzbekistan",
  },
  cert3Title: {
    ru: "Подтверждение Министерства здравоохранения РУз",
    uz: "O'zbekiston Sog'liqni saqlash vazirligining tasdiqnomasi",
    en: "Confirmation from the Ministry of Health of Uzbekistan",
  },
  contactText: {
    ru: "Есть вопросы? Свяжитесь с нами",
    uz: "Savollaringiz bormi? Biz bilan bog'laning",
  },
  callButton: {
    ru: "Позвонить",
    uz: "Qo'ng'iroq qilish",
  },
  emailButton: {
    ru: "Написать",
    uz: "Xat yozish",
  },
};

const partners = [
  {
    name: "GoPharm",
    logo: "images/partners/gopharm.png",
    description: {
      ru: "Интернет-аптека с доставкой по  Ташкенту",
      uz: "Butun Toshkent bo'ylab yetkazib berish bilan internet-dorixona",
    },
    link: "https://gopharm.uz/product/gliukometr-urit-86-s-aksessuarami",
  },
  {
    name: "PharmaClick",
    logo: "images/partners/pharmaclik.png",
    description: {
      ru: "Быстрая доставка медицинских товаров",
      uz: "Tibbiy mahsulotlarni tez yetkazib berish",
    },
    link: "https://pharmaclick.uz/ru/",
  },
];
</script>