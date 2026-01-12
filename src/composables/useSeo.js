import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useSeo() {
  const route = useRoute()
  const baseUrl = 'https://urit.uz'
  
  // Удаление существующих тегов
  const removeExistingTags = (selector) => {
    const existing = document.querySelectorAll(selector)
    existing.forEach(tag => tag.remove())
  }

  // Установка canonical тега
  const setCanonical = (locale, path) => {
    removeExistingTags('link[rel="canonical"]')
    
    const canonical = document.createElement('link')
    canonical.rel = 'canonical'
    canonical.href = `${baseUrl}/#${path}`
    document.head.appendChild(canonical)
  }

  // Установка hreflang тегов
  const setHreflang = (path) => {
    removeExistingTags('link[rel="alternate"]')
    
    // Русская версия
    const hreflangRu = document.createElement('link')
    hreflangRu.rel = 'alternate'
    hreflangRu.hreflang = 'ru'
    hreflangRu.href = `${baseUrl}/#${path}`
    document.head.appendChild(hreflangRu)
    
    // Узбекская версия
    const hreflangUz = document.createElement('link')
    hreflangUz.rel = 'alternate'
    hreflangUz.hreflang = 'uz'
    hreflangUz.href = `${baseUrl}/#${path}`
    document.head.appendChild(hreflangUz)
    
    // x-default (по умолчанию русский)
    const hreflangDefault = document.createElement('link')
    hreflangDefault.rel = 'alternate'
    hreflangDefault.hreflang = 'x-default'
    hreflangDefault.href = `${baseUrl}/#${path}`
    document.head.appendChild(hreflangDefault)
  }

  // Установка Open Graph для языков
  const setOgLocale = (locale) => {
    removeExistingTags('meta[property="og:locale"]')
    removeExistingTags('meta[property="og:locale:alternate"]')
    
    const ogLocale = document.createElement('meta')
    ogLocale.setAttribute('property', 'og:locale')
    ogLocale.content = locale === 'ru' ? 'ru_RU' : 'uz_UZ'
    document.head.appendChild(ogLocale)
    
    // Альтернативная локаль
    const ogLocaleAlt = document.createElement('meta')
    ogLocaleAlt.setAttribute('property', 'og:locale:alternate')
    ogLocaleAlt.content = locale === 'ru' ? 'uz_UZ' : 'ru_RU'
    document.head.appendChild(ogLocaleAlt)
  }

  // Установка robots meta
  const setRobotsMeta = () => {
    removeExistingTags('meta[name="robots"]')
    
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    document.head.appendChild(robots)
  }

  // Основная функция обновления SEO
  const updateSeo = (locale, options = {}) => {
    const path = route.path.replace(/^\/(ru|uz)/, '') || '/'
    
    // Canonical и hreflang
    setCanonical(locale, path)
    setHreflang(path)
    
    // Open Graph locale
    setOgLocale(locale)
    
    // Robots
    setRobotsMeta()
    
    // Обновление title если передан
    if (options.title) {
      document.title = options.title
      
      // OG title
      removeExistingTags('meta[property="og:title"]')
      const ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      ogTitle.content = options.title
      document.head.appendChild(ogTitle)
    }
    
    // Обновление description если передан
    if (options.description) {
      removeExistingTags('meta[name="description"]')
      const metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      metaDesc.content = options.description
      document.head.appendChild(metaDesc)
      
      // OG description
      removeExistingTags('meta[property="og:description"]')
      const ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      ogDesc.content = options.description
      document.head.appendChild(ogDesc)
    }

    // OG URL
    removeExistingTags('meta[property="og:url"]')
    const ogUrl = document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.content = `${baseUrl}/#${path}`
    document.head.appendChild(ogUrl)
  }

  return {
    updateSeo
  }
}