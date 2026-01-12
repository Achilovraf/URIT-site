<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{
      'backdrop-blur-md bg-white/80 shadow-lg': isScrolled,
      'bg-transparent': !isScrolled
    }">
    <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">
      <div class="py-4 flex items-center justify-between">

        <!-- Логотип -->
        <router-link to="/" class="flex items-center gap-2">
          <span class="bg-blue-600 w-3 h-8 rounded"></span>
          <span class="text-4xl font-bold text-blue-700">URIT</span>
          <span class="bg-blue-600 w-3 h-8 rounded"></span>
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <template v-for="(item, index) in navItems" :key="index">

            <!-- Anchor link (#section) -->
            <a
              v-if="item.href.startsWith('#')"
              href="#"
              @click.prevent="navigateToSection(item.href)"
              class="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
              :class="{ 'text-blue-600 font-bold': item.active }"
            >
              {{ item.label[locale] }}
            </a>

            <!-- Router link -->
            <router-link
              v-else
              :to="item.href"
              class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              :class="{ 'text-blue-600 font-bold': item.active }"
            >
              {{ item.label[locale] }}
            </router-link>

          </template>
        </nav>

        <!-- Right Section -->
        <div class="flex items-center gap-4">
          <LanguageSwitcher />

          <a
            href="#"
            @click.prevent="navigateToSection('#buy')"
            class="hidden lg:block bg-transparent hover:bg-blue-600 text-blue-600 font-semibold px-6 py-2 rounded-full border border-blue-600 hover:text-white transition-all cursor-pointer"
          >
            {{ locale === 'ru' ? 'Где купить?' : 'Qayerdan sotib olish?' }}
          </a>

          <!-- Mobile menu toggle -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden backdrop-blur-md bg-white/95 border-t border-gray-200"
    >
      <nav class="max-w-7xl mx-auto flex flex-col px-6 py-4 space-y-3">
        <template v-for="(item, index) in navItems" :key="index">

          <!-- Anchor link -->
          <a
            v-if="item.href.startsWith('#')"
            href="#"
            @click.prevent="navigateToSection(item.href); mobileMenuOpen = false"
            class="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
          >
            {{ item.label[locale] }}
          </a>

          <!-- Router link -->
          <router-link
            v-else
            :to="item.href"
            class="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            @click="mobileMenuOpen = false"
          >
            {{ item.label[locale] }}
          </router-link>

        </template>

        <a
          href="#"
          @click.prevent="navigateToSection('#buy'); mobileMenuOpen = false"
          class="bg-transparent text-gray-900 font-semibold px-6 py-3 rounded-full border-2 border-gray-900 hover:border-blue-600 hover:text-blue-600 transition-all mt-2 cursor-pointer"
        >
          {{ locale === 'ru' ? 'Где купить?' : 'Qayerdan sotib olish?' }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useAppStore } from '../store'
import { useRouter, useRoute } from 'vue-router'
import LanguageSwitcher from './LanguageSwitcher.vue'

const store = useAppStore()
const locale = computed(() => store.locale)
const router = useRouter()
const route = useRoute()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  {
    label: { ru: 'Инструкция', uz: "Yo'riqnoma" },
    href: '#about',
    active: false
  },
  {
    label: { ru: 'Принцип действия', uz: "Ta'sir qilish prinsipi" },
    href: '#advantages',
    active: false
  },
  {
    label: { ru: 'Схема использования', uz: "Foydalanish sxemasi" },
    href: '#steps',
    active: false
  },
  {
    label: { ru: 'Продукция', uz: "Mahsulotlar" },
    href: '/products',
    active: false
  }
]

// Плавный скролл к секции
const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId)
  if (section) {
    const headerOffset = 80
    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Навигация к секции (с учетом текущей страницы)
const navigateToSection = (sectionId) => {
  // Если мы уже на главной странице — просто скроллим
  if (route.path === '/') {
    scrollToSection(sectionId)
  } else {
    // Если на другой странице — сначала переходим на главную, потом скроллим
    router.push('/').then(() => {
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>