<template>
  <div class="min-h-screen bg-gradient-to-r from-white to-[#0788ED]">
    <!-- Заголовок -->
    <section class="py-12 pt-32">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {{ locale === 'ru' ? 'Каталог продукции URIT' : 'URIT mahsulotlari katalogi' }}
        </h1>
        <p class="text-gray-600 text-lg">
          {{ locale === 'ru' 
            ? 'Высококачественные медицинские приборы для контроля здоровья' 
            : 'Sog\'likni nazorat qilish uchun yuqori sifatli tibbiy asboblar'
          }}
        </p>
      </div>
    </section>

    <!-- Категории и товары -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Категории -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            {{ locale === 'ru' ? 'Категории' : 'Kategoriyalar' }}
          </h2>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectCategory(category.id)"
              :class="[
                'px-6 py-3 rounded-lg font-semibold transition-all',
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300',
              ]"
            >
              {{ category.name[locale] }}
              <span class="ml-2 text-sm opacity-75">({{ category.count }})</span>
            </button>
          </div>
        </div>

        <!-- Управление -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white p-4 rounded-lg shadow">
          <div class="text-gray-700 font-semibold">
            {{ locale === 'ru' ? 'Показано' : 'Ko\'rsatilmoqda' }}
            <span class="text-blue-600">{{ paginatedProducts.length }}</span>
            {{ locale === 'ru' ? 'из' : 'dan' }}
            <span class="text-blue-600">{{ filteredProducts.length }}</span>
            {{ locale === 'ru' ? 'товаров' : 'mahsulot' }}
          </div>

          <div class="flex items-center gap-4">
            <label class="text-gray-700 font-medium">
              {{ locale === 'ru' ? 'Сортировка:' : 'Saralash:' }}
            </label>
            <select
              v-model="sortBy"
              @change="sortProducts"
              class="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="popularity">
                {{ locale === 'ru' ? 'По популярности' : 'Mashhurlik bo\'yicha' }}
              </option>
              <option value="rating">
                {{ locale === 'ru' ? 'По рейтингу' : 'Reyting bo\'yicha' }}
              </option>
              <option value="name">
                {{ locale === 'ru' ? 'По названию (А-Я)' : 'Nomi bo\'yicha (A-Z)' }}
              </option>
            </select>
          </div>
        </div>

        <!-- Сетка товаров -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div
            v-for="product in paginatedProducts"
            :key="product.id"
            class="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 p-4 relative flex flex-col h-full group"
          >
            <!-- Бейдж категории -->
            <div class="absolute top-4 left-4 z-10">
              <span class="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
                {{ getCategoryName(product.category) }}
              </span>
            </div>

            <!-- Изображение -->
            <div class="h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden flex-shrink-0 relative flex items-center justify-center">
              <img
                :src="product.image"
                :alt="product.name[locale]"
                class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <!-- Информация -->
            <div class="flex-grow flex flex-col">
              <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {{ product.name[locale] }}
              </h3>
              <p class="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                {{ product.description[locale] }}
              </p>

              <!-- Рейтинг -->
              <div class="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <div class="flex items-center gap-1">
                  <i class="fas fa-star text-yellow-400"></i>
                  <span class="font-semibold text-gray-700">{{ product.rating }}</span>
                  <span>({{ product.reviews }})</span>
                </div>
              </div>

              <!-- Кнопка подробнее -->
              <button
                @click="goToProductDetail(product)"
                type="button"
                class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 font-semibold mt-auto"
              >
                <i class="fas fa-info-circle"></i>
                {{ locale === 'ru' ? 'Подробнее' : 'Batafsil' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Пагинация -->
        <div v-if="totalPages > 1" class="flex flex-col items-center gap-6">
          <div class="flex justify-center gap-2">
            <!-- Предыдущая страница -->
            <button
              v-if="currentPage > 1"
              @click="goToPage(currentPage - 1)"
              type="button"
              class="px-4 py-2 rounded-lg bg-white border-2 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 flex items-center gap-2 font-semibold"
            >
              <i class="fas fa-chevron-left"></i>
              {{ locale === 'ru' ? 'Назад' : 'Orqaga' }}
            </button>

            <!-- Страницы вокруг текущей -->
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              type="button"
              :class="pageButtonClass(page)"
            >
              {{ page }}
            </button>

            <!-- Следующая страница -->
            <button
              v-if="currentPage < totalPages"
              @click="goToPage(currentPage + 1)"
              type="button"
              class="px-4 py-2 rounded-lg bg-white border-2 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 flex items-center gap-2 font-semibold"
            >
              {{ locale === 'ru' ? 'Вперед' : 'Oldinga' }}
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>

          <!-- Информация о текущей странице -->
          <div class="text-gray-600 text-sm">
            {{ locale === 'ru' ? 'Страница' : 'Sahifa' }}
            <span class="font-bold text-blue-600">{{ currentPage }}</span>
            {{ locale === 'ru' ? 'из' : 'dan' }}
            <span class="font-bold text-blue-600">{{ totalPages }}</span>
          </div>
        </div>

        <!-- Сообщение о пустом результате -->
        <div v-if="filteredProducts.length === 0" class="text-center py-16">
          <i class="fas fa-box-open text-gray-300 text-6xl mb-4"></i>
          <h3 class="text-2xl font-bold text-gray-700 mb-2">
            {{ locale === 'ru' ? 'Товары не найдены' : 'Mahsulotlar topilmadi' }}
          </h3>
          <p class="text-gray-500 mb-6">
            {{ locale === 'ru' ? 'Попробуйте выбрать другую категорию' : 'Boshqa kategoriyani tanlang' }}
          </p>
          <button
            @click="selectCategory('all')"
            type="button"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            {{ locale === 'ru' ? 'Показать все товары' : 'Barcha mahsulotlarni ko\'rsatish' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import { useAppStore } from '@/store'

const store = useAppStore()
const router = useRouter()
const locale = computed(() => store.locale)

// Base URL для изображений
const baseUrl = import.meta.env.BASE_URL

const products = ref([])
const sortBy = ref("popularity")
const currentPage = ref(1)
const itemsPerPage = 8
const selectedCategory = ref("all")

// Категории
const categories = ref([
  {
    id: "all",
    name: {
      ru: "Все товары",
      uz: "Barcha mahsulotlar",
    },
    count: 0,
  },
  {
    id: "glucometers",
    name: {
      ru: "Глюкометры",
      uz: "Glyukometrlar",
    },
    count: 0,
  },
  {
    id: "accessories",
    name: {
      ru: "Аксессуары",
      uz: "Aksessuarlar",
    },
    count: 0,
  },
])

// Данные товаров с локализацией
const mockProducts = [
  {
    id: 1,
    name: {
      ru: "URIT-86",
      uz: "URIT-86",
    },
    description: {
      ru: "Профессиональный глюкометр для домашней диагностики с высокой точностью измерений и быстрым результатом за 5 секунд",
      uz: "Uy diagnostikasi uchun professional glyukometr, yuqori aniqlikdagi o'lchov va 5 soniyada tez natija",
    },
    image: `${baseUrl}images/glucometer-4.png`,
    rating: 4.8,
    reviews: 124,
    category: "glucometers",
  },
  {
    id: 2, 
    name: {
      ru: "Тест-полоски URIT H12 для гемоглобина",
      uz: "URIT H12 gemoglobin test chiziqlari",
    },
    description: {
      ru: "Тест-полоски для измерения гемоглобина. Результат за 10 секунд. Диапазон измерений 4.0-24.0 г/дл. Упаковка 50 шт (2×25)",
      uz: "Gemoglobin o'lchash uchun test chiziqlari. Natija 10 soniyada. O'lchov diapazoni 4.0-24.0 g/dl. 50 dona qadoq (2×25)",
    },
    image: `${baseUrl}images/urit-h12-strips.jpg`, 
    rating: 4.8,
    reviews: 89,
    category: "accessories",
  },
  {
    id: 3,
    name: {
      ru: "Тест-полоски URIT G28 для глюкозы",
      uz: "URIT G28 glyukoza test chiziqlari",
    },
    description: {
      ru: "Тест-полоски для измерения уровня глюкозы в крови с глюкометром URIT-86. Быстрый результат за 5 секунд. Упаковка 50 шт",
      uz: "URIT-86 glyukometri bilan qondagi glyukoza darajasini o'lchash uchun test chiziqlari. 5 soniyada tez natija. 50 donali qadoq",
    },
    image: `${baseUrl}images/test-poloska-g28.jpg`,
    rating: 4.9,
    reviews: 156,
    category: "accessories",
  },
  {
    id: 8,
    name: {
      ru: "URIT-12 Гемоглобинометр",
      uz: "URIT-12 Gemoglobinometr",
    },
    description: {
      ru: "Портативный анализатор гемоглобина и гематокрита. Результат за 10 секунд. Память на 250 измерений. Высокая точность ≥96%",
      uz: "Portativ gemoglobin va gematokrit analizatori. Natija 10 soniyada. 250 ta o'lchov xotirasi. Yuqori aniqlik ≥96%",
    },
    image: `${baseUrl}images/urit-12-hemoglobin-meter.png`,
    rating: 4.9,
    reviews: 67,
    category: "glucometers",
  },
]

// Фильтрованные товары по категориям
const filteredProducts = computed(() => {
  if (selectedCategory.value === "all") {
    return products.value
  }
  return products.value.filter((p) => p.category === selectedCategory.value)
})

// Общее количество страниц
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

// Товары для текущей страницы
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

// Видимые номера страниц
const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

// Класс для кнопки страницы
const pageButtonClass = (page) => {
  return [
    "px-4 py-2 rounded-lg transition-all duration-200 font-semibold min-w-[40px]",
    page === currentPage.value
      ? "bg-blue-600 text-white shadow-lg"
      : "bg-white border-2 border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600",
  ]
}

// Переход на страницу
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

// Выбор категории
const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId
  currentPage.value = 1
}

// Получить название категории
const getCategoryName = (categoryId) => {
  const category = categories.value.find((c) => c.id === categoryId)
  return category ? category.name[locale.value] : ""
}

// Обновить счетчики категорий
const updateCategoryCounts = () => {
  categories.value.forEach((category) => {
    if (category.id === "all") {
      category.count = products.value.length
    } else {
      category.count = products.value.filter(
        (p) => p.category === category.id
      ).length
    }
  })
}

// Сортировка товаров
const sortProducts = () => {
  switch (sortBy.value) {
    case "rating":
      products.value.sort((a, b) => b.rating - a.rating)
      break
    case "name":
      products.value.sort((a, b) =>
        a.name[locale.value].localeCompare(b.name[locale.value])
      )
      break
    default:
      products.value.sort((a, b) => b.reviews - a.reviews)
  }
}

// Переход на страницу детального просмотра
const goToProductDetail = (product) => {
  router.push(`/products/${product.id}`)
}

onMounted(() => {
  products.value = [...mockProducts]
  updateCategoryCounts()
})

// SEO
const { updateSeo } = useSeo()
watch(locale, (newLocale) => {
  updateSeo(newLocale, {
    title: locale.value === 'ru' 
      ? 'Каталог продукции URIT - Глюкометры | urit.uz'
      : 'URIT mahsulotlar katalogi | urit.uz',
    description: locale.value === 'ru'
      ? 'Полный каталог глюкометров URIT: URIT-86, URIT-12, тест-полоски, аксессуары в Узбекистане'
      : 'URIT glyukometrlar katalogi: URIT-86, URIT-12, aksessuarlar'
  })
}, { immediate: true })
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>