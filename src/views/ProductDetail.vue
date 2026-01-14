<template>
  <div v-if="product" class="min-h-screen bg-white">
    
    <!-- Основной контент продукта -->
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          <!-- Левая колонка - Галерея изображений -->
          <div class="relative">
            <!-- Главное изображение -->
            <div class="relative bg-gray-50 rounded-lg overflow-hidden mb-4">
              <img
                :src="currentImage"
                :alt="product.name[locale]"
                class="w-full h-auto object-contain"
              />
              
              <!-- Навигация по изображениям -->
              <button
                v-if="product.gallery && product.gallery.length > 1"
                @click="previousImage"
                type="button"
                class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <i class="fas fa-chevron-left"></i>
              </button>
              
              <button
                v-if="product.gallery && product.gallery.length > 1"
                @click="nextImage"
                type="button"
                class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <i class="fas fa-chevron-right"></i>
              </button>

              <!-- Индикаторы -->
              <div v-if="product.gallery && product.gallery.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <button
                  v-for="(img, index) in product.gallery"
                  :key="index"
                  @click="currentImageIndex = index"
                  type="button"
                  :class="[
                    'w-2 h-2 rounded-full transition-all',
                    currentImageIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  ]"
                ></button>
              </div>
            </div>
          </div>

          <!-- Правая колонка - Информация -->
          <div class="space-y-6">
            <!-- Название -->
            <div>
              <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {{ product.name[locale] }}
              </h1>
            </div>

            <!-- Рейтинг -->
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-1">
                <i v-for="i in 5" :key="i" :class="[
                  'fas fa-star text-lg',
                  i <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                ]"></i>
              </div>
              <span class="text-gray-600">({{ product.reviews }} {{ locale === 'ru' ? 'отзывов' : 'sharh' }})</span>
            </div>

            <!-- Описание товара -->
            <div class="border-t border-b border-gray-200 py-6">
              <h3 class="text-lg font-bold text-gray-900 mb-3">
                {{ locale === 'ru' ? 'Описание товара' : 'Mahsulot tavsifi' }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ product.description[locale] }}
              </p>
            </div>

            <!-- Кнопки действий -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="scrollToBuy"
                type="button"
                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i class="fas fa-info-circle"></i>
                {{ locale === 'ru' ? 'Где купить' : 'Qayerdan sotib olish' }}
              </button>

              <router-link
                to="/products"
                class="flex-1 sm:flex-initial border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i class="fas fa-arrow-left"></i>
                {{ locale === 'ru' ? 'Назад' : 'Orqaga' }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Детали (табы) -->
    <section class="pb-20 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Табы -->
        <div class="border-b border-gray-200 mb-8">
          <button
            @click="activeTab = 'details'"
            type="button"
            :class="[
              'px-6 py-3 font-semibold border-b-2 transition-all',
              activeTab === 'details' 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-600 hover:text-gray-900'
            ]"
          >
            {{ locale === 'ru' ? 'Детали' : 'Tafsilotlar' }}
          </button>
        </div>

        <!-- Контент таба -->
        <div v-if="activeTab === 'details'" class="space-y-8">
          <!-- Текстовое описание -->
          <div class="prose max-w-none">
            <p class="text-gray-600 leading-relaxed text-lg">
              {{ product.detailedDescription?.[locale] || product.description[locale] }}
            </p>
          </div>

          <!-- Характеристики -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">
              {{ locale === 'ru' ? 'Характеристики' : 'Xususiyatlar' }}
            </h3>
            <div class="grid gap-4">
              <div
                v-for="(feature, index) in product.features"
                :key="index"
                class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <i class="fas fa-check-circle text-blue-600 mt-1"></i>
                <span class="text-gray-700">{{ feature[locale] }}</span>
              </div>
            </div>
          </div>

          <!-- Изображения в контенте -->
          <div v-if="product.contentImages" class="grid md:grid-cols-2 gap-6">
            <img
              v-for="(img, index) in product.contentImages"
              :key="index"
              :src="img"
              :alt="`${product.name[locale]} - image ${index + 1}`"
              class="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Похожие товары -->
    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-center justify-between mb-12">
          <h2 class="text-3xl font-bold text-gray-900">
            {{ locale === 'ru' ? 'Похожие товары' : 'O\'xshash mahsulotlar' }}
          </h2>
          <router-link
            to="/products"
            class="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group"
          >
            {{ locale === 'ru' ? 'Показать еще' : 'Ko\'proq ko\'rsatish' }}
            <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            @click="goToProduct(relatedProduct.id)"
            class="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div class="relative aspect-square bg-gray-50 overflow-hidden">
              <img
                :src="relatedProduct.image"
                :alt="relatedProduct.name[locale]"
                class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div class="p-4">
              <h3 class="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {{ relatedProduct.name[locale] }}
              </h3>
              <button
                type="button"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all mt-3"
              >
                {{ locale === 'ru' ? 'Подробнее' : 'Batafsil' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter секция -->
    <section class="py-0">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2">
          <!-- Левая часть - форма -->
          <div class="bg-blue-600 text-white p-12 lg:p-16">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4">
              {{ locale === 'ru' ? 'Присоединяйтесь к нам!' : 'Bizga qo\'shiling!' }}
            </h2>
            <p class="text-blue-100 mb-8 text-lg">
              {{ locale === 'ru' 
                ? 'Будьте первыми, кто узнает о новых продуктах и предложениях!' 
                : 'Yangi mahsulotlar va takliflar haqida birinchilardan bo\'lib bilib oling!'
              }}
            </p>
            <div class="flex gap-3">
              <input
                type="email"
                :placeholder="locale === 'ru' ? 'Ваш e-mail' : 'Sizning emailingiz'"
                class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                class="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all"
              >
                {{ locale === 'ru' ? 'Подписаться' : 'Obuna bo\'lish' }}
              </button>
            </div>
          </div>
          
          <!-- Правая часть - изображение -->
          <div class="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop"
              alt="Newsletter"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

  </div>

  <!-- Товар не найден -->
  <div
    v-else
    class="min-h-screen bg-gray-50 flex items-center justify-center px-4"
  >
    <div class="text-center max-w-md">
      <i class="fas fa-box-open text-gray-300 text-6xl mb-6"></i>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">
        {{ locale === 'ru' ? 'Товар не найден' : 'Mahsulot topilmadi' }}
      </h2>
      <router-link
        to="/products"
        class="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        <i class="fas fa-arrow-left"></i>
        {{ locale === 'ru' ? 'Вернуться к каталогу' : 'Katalogga qaytish' }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAppStore } from "../store";

const store = useAppStore();
const locale = computed(() => store.locale);
const router = useRouter();
const route = useRoute();

const baseUrl = import.meta.env.BASE_URL;
const product = ref(null);
const activeTab = ref('details');
const currentImageIndex = ref(0);

const currentImage = computed(() => {
  if (product.value?.gallery && product.value.gallery.length > 0) {
    return product.value.gallery[currentImageIndex.value];
  }
  return product.value?.image;
});

const previousImage = () => {
  if (product.value?.gallery) {
    currentImageIndex.value = (currentImageIndex.value - 1 + product.value.gallery.length) % product.value.gallery.length;
  }
};

const nextImage = () => {
  if (product.value?.gallery) {
    currentImageIndex.value = (currentImageIndex.value + 1) % product.value.gallery.length;
  }
};

const allProducts = [
  {
    id: 1,
    name: {
      ru: "URIT-86",
      uz: "URIT-86",
    },
    description: {
      ru: "Профессиональный глюкометр для домашней диагностики с высокой точностью измерений и быстрым результатом за 5 секунд.",
      uz: "Uy diagnostikasi uchun professional glyukometr, yuqori aniqlikdagi o'lchov va 5 soniyada tez natija.",
    },
    detailedDescription: {
      ru: "URIT-86 - это современный глюкометр, разработанный специально для домашнего использования. Устройство обеспечивает высокую точность измерений и позволяет получить результат всего за 5 секунд. Идеально подходит для ежедневного контроля уровня глюкозы в крови.",
      uz: "URIT-86 - bu uy sharoitida foydalanish uchun maxsus ishlab chiqilgan zamonaviy glyukometr. Qurilma yuqori aniqlikdagi o'lchashni ta'minlaydi va atigi 5 soniyada natija olish imkonini beradi. Qondagi glyukoza darajasini kundalik nazorat qilish uchun ideal.",
    },
    image: `${baseUrl}images/glucometer-4.png`,
    gallery: [
      `${baseUrl}images/glucometer-4.png`,
      `${baseUrl}images/glucometer-1.jpg`,
      `${baseUrl}images/glucometer-2.jpg`,
    ],
    rating: 4.8,
    reviews: 124,
    category: "glucometers",
    features: [
      { ru: "Результат за 5 секунд", uz: "5 soniyada natija" },
      { ru: "Минимальный объем крови 0.6 мкл", uz: "Minimal qon hajmi 0.6 mkl" },
      { ru: "Память на 300 измерений", uz: "300 ta o'lchov uchun xotira" },
      { ru: "Автоматическое кодирование", uz: "Avtomatik kodlash" },
      { ru: "Большой читаемый дисплей", uz: "Katta o'qilishi oson displey" },
    ],
  },
  {
    id: 2,
    name: {
      ru: "Тест-полоски URIT H12 для гемоглобина",
      uz: "URIT H12 gemoglobin test chiziqlari",
    },
    description: {
      ru: "Тест-полоски для измерения гемоглобина. Результат за 10 секунд. Упаковка 50 шт (2×25).",
      uz: "Gemoglobin o'lchash uchun test chiziqlari. Natija 10 soniyada. 50 dona qadoq (2×25).",
    },
    detailedDescription: {
      ru: "Профессиональные тест-полоски URIT H12 предназначены для точного измерения уровня гемоглобина с помощью гемоглобинометра URIT-12. Диапазон измерений 4.0-24.0 г/дл с точностью ≥96%.",
      uz: "Professional URIT H12 test chiziqlari URIT-12 gemoglobinometri bilan gemoglobin darajasini aniq o'lchash uchun mo'ljallangan. O'lchov diapazoni 4.0-24.0 g/dl, aniqlik ≥96%.",
    },
    image: `${baseUrl}images/urit-h12-strips.jpg`,
    gallery: [`${baseUrl}images/urit-h12-strips.jpg`],
    rating: 4.8,
    reviews: 89,
    category: "accessories",
    features: [
      { ru: "Совместимость: URIT-12 Hemoglobin Meter", uz: "Mosligi: URIT-12 Hemoglobin Meter" },
      { ru: "Время измерения: ≤10 секунд", uz: "O'lchash vaqti: ≤10 soniya" },
      { ru: "Диапазон: 4.0-24.0 г/дл", uz: "Diapazon: 4.0-24.0 g/dl" },
      { ru: "Точность: ≥96%", uz: "Aniqlik: ≥96%" },
      { ru: "Упаковка: 50 полосок (2×25)", uz: "Qadoq: 50 ta chiziq (2×25)" },
    ],
  },
  {
    id: 3,
    name: {
      ru: "Тест-полоски URIT G28 для глюкозы",
      uz: "URIT G28 glyukoza test chiziqlari",
    },
    description: {
      ru: "Оригинальные тест-полоски для измерения уровня глюкозы. Быстрый результат за 5 секунд. Упаковка 50 шт.",
      uz: "Glyukoza darajasini o'lchash uchun original test chiziqlari. 5 soniyada tez natija. 50 donali qadoq.",
    },
    detailedDescription: {
      ru: "Высокоточные тест-полоски URIT G28 разработаны специально для глюкометра URIT-86. Электрохимический метод измерения обеспечивает максимальную точность результатов. Малый объем крови (0.6 мкл) делает процедуру максимально комфортной.",
      uz: "Yuqori aniqlikdagi URIT G28 test chiziqlari URIT-86 glyukometri uchun maxsus ishlab chiqilgan. Elektrokimyoviy o'lchash usuli maksimal aniqlikni ta'minlaydi. Kichik qon hajmi (0.6 mkl) protsedurани maksimal darajada qulay qiladi.",
    },
    image: `${baseUrl}images/test-poloska-g28.jpg`,
    gallery: [`${baseUrl}images/test-poloska-g28.jpg`],
    rating: 4.9,
    reviews: 156,
    category: "accessories",
    features: [
      { ru: "Совместимость: только с URIT-86", uz: "Mosligi: faqat URIT-86 bilan" },
      { ru: "Результат за 5 секунд", uz: "5 soniyada natija" },
      { ru: "Объем крови: 0.6 мкл", uz: "Qon hajmi: 0.6 mkl" },
      { ru: "Диапазон измерений: 1.1-33.3 ммоль/л", uz: "O'lchov diapazoni: 1.1-33.3 mmol/l" },
      { ru: "Метод: электрохимический", uz: "Usul: elektrokimyoviy" },
      { ru: "Срок годности: 18 месяцев", uz: "Yaroqlilik muddati: 18 oy" },
      { ru: "Упаковка: 50 тест-полосок", uz: "Qadoq: 50 ta test chizig'i" },
    ],
  },
  {
    id: 8,
    name: {
      ru: "URIT-12 Гемоглобинометр",
      uz: "URIT-12 Gemoglobinometr",
    },
    description: {
      ru: "Портативный анализатор гемоглобина и гематокрита. Результат за 10 секунд. Память на 250 измерений.",
      uz: "Portativ gemoglobin va gematokrit analizatori. Natija 10 soniyada. 250 ta o'lchov xotirasi.",
    },
    detailedDescription: {
      ru: "URIT-12 - современный портативный анализатор для быстрого и точного измерения уровня гемоглобина и гематокрита. Устройство соответствует международным стандартам ICSH и обеспечивает точность ≥96%. Идеален как для клинического, так и для домашнего использования.",
      uz: "URIT-12 - gemoglobin va gematokrit darajasini tez va aniq o'lchash uchun zamonaviy portativ analizator. Qurilma ICSH xalqaro standartlariga javob beradi va ≥96% aniqlikni ta'minlaydi. Klinik va uy sharoitida foydalanish uchun ideal.",
    },
    image: `${baseUrl}images/urit-12-hemoglobin-meter.png`,
    gallery: [`${baseUrl}images/urit-12-hemoglobin-meter.png`],
    rating: 4.9,
    reviews: 67,
    category: "glucometers",
    features: [
      { ru: "Измерение гемоглобина (Hb) и гематокрита (HCT)", uz: "Gemoglobin (Hb) va gematokrit (HCT) o'lchash" },
      { ru: "Результат за 10 секунд", uz: "10 soniyada natija" },
      { ru: "Точность ≥96% по стандарту ICSH", uz: "ICSH standarti bo'yicha ≥96% aniqlik" },
      { ru: "Диапазон измерений: 4.0-24.0 г/дл", uz: "O'lchov diapazoni: 4.0-24.0 g/dl" },
      { ru: "Память на 250 результатов", uz: "250 ta natija uchun xotira" },
      { ru: "Компактный размер: 102×50×19 мм", uz: "Ixcham o'lcham: 102×50×19 mm" },
    ],
  },
];

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return allProducts
    .filter(p => p.id !== product.value.id && p.category === product.value.category)
    .slice(0, 4);
});

const goToProduct = (id) => {
  router.push(`/products/${id}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToBuy = () => {
  router.push("/");
  setTimeout(() => {
    const section = document.querySelector("#buy");
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

onMounted(() => {
  const productId = parseInt(route.params.id);
  product.value = allProducts.find((p) => p.id === productId);
  currentImageIndex.value = 0;
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>