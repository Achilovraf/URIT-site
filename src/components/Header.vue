<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{
      'backdrop-blur-md bg-white/80 shadow-lg': isScrolled,
      'bg-transparent': !isScrolled
    }"
  >
    <div class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">
      <div class="py-4 flex items-center justify-between">

        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <span class="bg-blue-600 w-3 h-8 rounded"></span>
          <span class="text-4xl font-bold text-blue-700">URIT</span>
          <span class="bg-blue-600 w-3 h-8 rounded"></span>
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-10">
          <template v-for="(item, index) in navItems" :key="index">

            <component
              :is="item.href.startsWith('#') ? 'a' : 'router-link'"
              :href="item.href.startsWith('#') ? '#' : null"
              :to="!item.href.startsWith('#') ? item.href : null"
              @click.prevent="item.href.startsWith('#') && navigateToSection(item.href)"
              class="relative group h-6 overflow-hidden font-medium text-gray-700"
              :class="{ 'text-blue-600': item.active }"
            >

              <!-- Text normal -->
              <span
                class="block transition-all duration-300
                group-hover:translate-y-full group-hover:opacity-0"
              >
                {{ item.label[locale] }}
              </span>

              <!-- Text hover -->
              <span
                class="absolute left-0 top-0 block w-full
                -translate-y-full opacity-0
                transition-all duration-300
                group-hover:translate-y-0 group-hover:opacity-100
                text-blue-600"
              >
                {{ item.label[locale] }}
              </span>

              <!-- underline -->
              <span
                class="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300
                group-hover:w-full"
                :class="{ 'w-full': item.active }"
              ></span>

            </component>

          </template>
        </nav>

        <!-- Right -->
        <div class="flex items-center gap-4">
          <LanguageSwitcher />

          <a
            href="#"
            @click.prevent="navigateToSection('#buy')"
            class="hidden lg:block border border-blue-600 text-blue-600 font-semibold
            px-6 py-2 rounded-full transition-all duration-300
            hover:bg-blue-600 hover:text-white"
          >
            {{ locale === 'ru' ? 'Где купить?' : 'Qayerdan sotib olish?' }}
          </a>

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
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '../store'
import LanguageSwitcher from './LanguageSwitcher.vue'

const store = useAppStore()
const locale = computed(() => store.locale)

const router = useRouter()
const route = useRoute()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = ref([
  {
    label: { ru: 'Инструкция', uz: "Yo'riqnoma" },
    href: '#about',
    active: false
  },
  {
    label: { ru: 'Принцип действия', uz: "Taʼsir qilish prinsipi" },
    href: '#advantages',
    active: false
  },
  {
    label: { ru: 'Схема использования', uz: "Foydalanish sxemasi" },
    href: '#steps',
    active: false
  },
  {
    label: { ru: 'Продукция', uz: 'Mahsulotlar' },
    href: '/products',
    active: false
  }
])

const scrollToSection = (id) => {
  const el = document.querySelector(id)
  if (!el) return

  const offset = 80
  const y = el.getBoundingClientRect().top + window.pageYOffset - offset
  window.scrollTo({ top: y, behavior: 'smooth' })
}

const navigateToSection = (id) => {
  if (route.path === '/') {
    scrollToSection(id)
  } else {
    router.push('/').then(() => {
      setTimeout(() => scrollToSection(id), 100)
    })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
