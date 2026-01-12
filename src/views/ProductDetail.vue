<template>
  <div v-if="product" class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <!-- Детали товара -->
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Навигация назад -->
        <button
          @click="goBack"
          type="button"
          class="mb-8 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          <i class="fas fa-arrow-left"></i>
          {{ locale === 'ru' ? 'Назад к каталогу' : 'Katalogga qaytish' }}
        </button>

        <!-- Основная карточка -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div class="grid md:grid-cols-2 gap-8 p-8 lg:p-12">
            <!-- Изображение -->
            <div class="flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
              <img
                :src="product.image"
                :alt="product.name[locale]"
                class="w-full h-auto object-contain max-h-96"
              />
            </div>

            <!-- Информация -->
            <div class="flex flex-col justify-center space-y-6">
              <!-- Название и категория -->
              <div>
                <span class="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-3">
                  {{ getCategoryName(product.category) }}
                </span>
                <h1 class="text-4xl font-bold text-gray-900 mb-2">
                  {{ product.name[locale] }}
                </h1>
              </div>

              <!-- Рейтинг -->
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1">
                  <i class="fas fa-star text-yellow-400 text-xl"></i>
                  <span class="text-2xl font-bold text-gray-700">{{ product.rating }}</span>
                </div>
                <span class="text-gray-500">
                  ({{ product.reviews }} {{ locale === 'ru' ? 'отзывов' : 'sharh' }})
                </span>
              </div>

              <!-- Описание -->
              <p class="text-gray-600 text-lg leading-relaxed">
                {{ product.description[locale] }}
              </p>

              <!-- Характеристики -->
              <div class="space-y-3 pt-4">
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                  {{ locale === 'ru' ? 'Характеристики:' : 'Xususiyatlar:' }}
                </h3>
                <div
                  v-for="(feature, index) in product.features"
                  :key="index"
                  class="flex items-start gap-3"
                >
                  <i class="fas fa-check-circle text-green-600 mt-1"></i>
                  <span class="text-gray-700">{{ feature[locale] }}</span>
                </div>
              </div>

              <!-- Кнопки действий -->
              <div class="flex flex-wrap gap-4 pt-6">
                <button
                  @click="scrollToBuy"
                  type="button"
                  class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <i class="fas fa-shopping-bag"></i>
                  {{ locale === 'ru' ? 'Где купить' : 'Qayerdan sotib olish' }}
                </button>

                <router-link
                  to="/"
                  class="border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <i class="fas fa-home"></i>
                  {{ locale === 'ru' ? 'На главную' : 'Bosh sahifa' }}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Дополнительная информация -->
        <div class="mt-12 grid md:grid-cols-3 gap-6">
          <!-- Высокая точность -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-check-double text-blue-600 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              {{ locale === 'ru' ? 'Высокая точность' : 'Yuqori aniqlik' }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{
                locale === 'ru'
                  ? 'Точные измерения с минимальной погрешностью'
                  : "Minimal xato bilan aniq o'lchov"
              }}
            </p>
          </div>

          <!-- Быстрый результат -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-bolt text-green-600 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              {{ locale === 'ru' ? 'Быстрый результат' : 'Tez natija' }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{
                locale === 'ru'
                  ? 'Результат измерения за несколько секунд'
                  : "Bir necha soniyada o'lchov natijasi"
              }}
            </p>
          </div>

          <!-- Сертифицирован -->
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-shield-alt text-purple-600 text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              {{ locale === 'ru' ? 'Сертифицирован' : 'Sertifikatlangan' }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{
                locale === 'ru'
                  ? 'Международная сертификация ISO, CE, FDA'
                  : 'ISO, CE, FDA xalqaro sertifikatlari'
              }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Товар не найден -->
  <div
    v-else
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4"
  >
    <div class="text-center">
      <i class="fas fa-box-open text-gray-300 text-6xl mb-6"></i>
      <h2 class="text-3xl font-bold text-gray-700 mb-4">
        {{ locale === 'ru' ? 'Товар не найден' : 'Mahsulot topilmadi' }}
      </h2>
      <router-link
        to="/products"
        class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-xl transition-all duration-300"
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

// Base URL для изображений
const baseUrl = import.meta.env.BASE_URL;

const product = ref(null);

// Все товары с полной информацией и локализацией
const allProducts = [
  {
    id: 1,
    name: {
      ru: "URIT-86",
      uz: "URIT-86",
    },
    description: {
      ru: "Профессиональный глюкометр для домашней диагностики с высокой точностью измерений и быстрым результатом за 5 секунд. Идеально подходит для ежедневного контроля уровня глюкозы.",
      uz: "Uy diagnostikasi uchun professional glyukometr, yuqori aniqlikdagi o'lchov va 5 soniyada tez natija. Kundalik qon shakari nazorati uchun ideal.",
    },
    image: `${baseUrl}images/glucometer-1.jpg`,
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
      ru: "URIT-86 Pro",
      uz: "URIT-86 Pro",
    },
    description: {
      ru: "Расширенная версия глюкометра с памятью на 500 измерений, подключением к смартфону через Bluetooth и цветным дисплеем для удобства использования.",
      uz: "500 ta o'lchov xotirasi, Bluetooth orqali smartfonga ulanish va qulay foydalanish uchun rangli displeyga ega kengaytirilgan glyukometr versiyasi.",
    },
    image: `${baseUrl}images/glucometer-4.png`,
    rating: 4.9,
    reviews: 89,
    category: "glucometers",
    features: [
      {
        ru: "Bluetooth подключение к смартфону",
        uz: "Smartfonga Bluetooth orqali ulanish",
      },
      { ru: "Память на 500 измерений", uz: "500 ta o'lchov uchun xotira" },
      {
        ru: "Цветной дисплей с подсветкой",
        uz: "Yorug'lik bilan rangli displey",
      },
      {
        ru: "Статистика и графики в приложении",
        uz: "Ilovada statistika va grafiklar",
      },
      { ru: "Результат за 4 секунды", uz: "4 soniyada natija" },
    ],
  },
  {
    id: 3,
    name: {
      ru: "Тест-полоски URIT-86",
      uz: "URIT-86 test tasmalari",
    },
    description: {
      ru: "Набор оригинальных тест-полосок для глюкометра URIT-86. Упаковка содержит 50 штук. Срок годности 18 месяцев с даты производства.",
      uz: "URIT-86 glyukometri uchun original test tasmalari to'plami. Qadoqda 50 dona. Ishlab chiqarilgan kundan boshlab 18 oy yaroqlilik muddati.",
    },
    image: `${baseUrl}images/glucometer-3.jpg`,
    rating: 4.6,
    reviews: 67,
    category: "accessories",
    features: [
      { ru: "Упаковка 50 штук", uz: "50 donali qadoq" },
      { ru: "Срок годности 18 месяцев", uz: "18 oy yaroqlilik muddati" },
      { ru: "Индивидуальная упаковка", uz: "Individual qadoqlangan" },
      { ru: "Совместимы только с URIT-86", uz: "Faqat URIT-86 bilan mos" },
    ],
  },
  {
    id: 4,
    name: {
      ru: "Ланцеты автоматические",
      uz: "Avtomatik lansetlar",
    },
    description: {
      ru: "Стерильные одноразовые ланцеты с автоматической системой прокола. Минимизируют болевые ощущения. Упаковка содержит 100 штук.",
      uz: "Avtomatik teshish tizimiga ega steril bir martalik lansetlar. Og'riqni minimallashtiradi. Qadoqda 100 dona.",
    },
    image: `${baseUrl}images/glucometer-2.jpg`,
    rating: 4.7,
    reviews: 156,
    category: "accessories",
    features: [
      { ru: "Упаковка 100 штук", uz: "100 donali qadoq" },
      {
        ru: "Стерильная индивидуальная упаковка",
        uz: "Steril individual qadoq",
      },
      { ru: "Автоматическая система прокола", uz: "Avtomatik teshish tizimi" },
      { ru: "Минимальная болезненность", uz: "Minimal og'riq" },
      { ru: "Универсальные 28G", uz: "Universal 28G" },
    ],
  },
  {
    id: 5,
    name: {
      ru: "Чехол для глюкометра",
      uz: "Glyukometr uchun chexol",
    },
    description: {
      ru: "Защитный чехол из мягкого материала для безопасного хранения и транспортировки глюкометра и всех аксессуаров.",
      uz: "Glyukometr va barcha aksessuarlarni xavfsiz saqlash va tashish uchun yumshoq materialdan himoya chexoli.",
    },
    image: `${baseUrl}images/glucometer-5.jpg`,
    rating: 4.8,
    reviews: 203,
    category: "accessories",
    features: [
      { ru: "Мягкий защитный материал", uz: "Yumshoq himoya materiali" },
      { ru: "Отделения для аксессуаров", uz: "Aksessuarlar uchun bo'limlar" },
      { ru: "Компактный размер", uz: "Ixcham o'lcham" },
      { ru: "Застежка-молния", uz: "Zamok bilan" },
    ],
  },
  {
    id: 6,
    name: {
      ru: "Контрольный раствор",
      uz: "Nazorat eritmasi",
    },
    description: {
      ru: "Раствор для проверки точности работы глюкометра. Рекомендуется использовать раз в месяц для контроля качества измерений.",
      uz: "Glyukometr aniqligini tekshirish uchun eritma. O'lchov sifatini nazorat qilish uchun oyiga bir marta ishlatish tavsiya etiladi.",
    },
    image: `${baseUrl}images/urit-hero.png`,
    rating: 4.5,
    reviews: 98,
    category: "accessories",
    features: [
      {
        ru: "Проверка точности глюкометра",
        uz: "Glyukometr aniqligini tekshirish",
      },
      { ru: "Два уровня концентрации", uz: "Ikki konsentratsiya darajasi" },
      {
        ru: "Срок годности 3 месяца после вскрытия",
        uz: "Ochilgandan keyin 3 oy yaroqli",
      },
      {
        ru: "Рекомендуется использовать ежемесячно",
        uz: "Har oyda ishlatish tavsiya etiladi",
      },
    ],
  },
  {
    id: 7,
    name: {
      ru: "URIT-12 Гемоглобинометр",
      uz: "URIT-12 Gemoglobinometr",
    },
    description: {
      ru: "Портативный анализатор для измерения уровня гемоглобина и гематокрита. Результат за 10 секунд с точностью ≥96%. Память на 250 измерений. Идеален для клиник и домашнего использования.",
      uz: "Gemoglobin va gematokrit darajasini o'lchash uchun portativ analizator. 10 soniyada ≥96% aniqlik bilan natija. 250 ta o'lchov xotirasi. Klinikalar va uy sharoitida foydalanish uchun ideal.",
    },
    image: `${baseUrl}images/urit-12-hemoglobin-meter.jpg`,
    rating: 4.9,
    reviews: 67,
    category: "analyzers",
    features: [
      { ru: "Измерение гемоглобина (Hb) и гематокрита (HCT)", uz: "Gemoglobin (Hb) va gematokrit (HCT) o'lchash" },
      { ru: "Результат за 10 секунд", uz: "10 soniyada natija" },
      { ru: "Точность ≥96% по стандарту ICSH", uz: "ICSH standarti bo'yicha ≥96% aniqlik" },
      { ru: "Диапазон измерений: 4.0-24.0 г/дл", uz: "O'lchov diapazoni: 4.0-24.0 g/dl" },
      { ru: "Память на 250 результатов", uz: "250 ta natija uchun xotira" },
      { ru: "Образец крови: 13-15 мкл", uz: "Qon namunasi: 13-15 mkl" },
      { ru: "Питание: 2× CR2032 батареи", uz: "Quvvat: 2× CR2032 batareyalar" },
      { ru: "Компактный размер: 102×50×19 мм", uz: "Ixcham o'lcham: 102×50×19 mm" },
    ],
  },
  {
    id: 8,
    name: {
      ru: "Тест-полоски URIT H12 для гемоглобина",
      uz: "URIT H12 gemoglobin test chiziqlari",
    },
    description: {
      ru: "Тест-полоски для измерения гемоглобина с гемоглобинометром URIT-12. Результат за 10 секунд. Диапазон измерений 4.0-24.0 г/дл. Упаковка 50 шт (2 флакона × 25 полосок).",
      uz: "URIT-12 gemoglobinometri bilan gemoglobin o'lchash uchun test chiziqlari. 10 soniyada natija. O'lchov diapazoni 4.0-24.0 g/dl. 50 donali qadoq (2 flakon × 25 ta chiziq).",
    },
    image: `${baseUrl}images/urit-h12-strips.jpg`,
    rating: 4.8,
    reviews: 89,
    category: "accessories",
    features: [
      { ru: "Совместимость: URIT-12 Hemoglobin Meter", uz: "Mosligi: URIT-12 Hemoglobin Meter" },
      { ru: "Время измерения: ≤10 секунд", uz: "O'lchash vaqti: ≤10 soniya" },
      { ru: "Диапазон: 4.0-24.0 г/дл", uz: "Diapazon: 4.0-24.0 g/dl" },
      { ru: "Метод: сухая химия (азид-метгемоглобиновый)", uz: "Usul: quruq kimyo (azid-metgemoglobin)" },
      { ru: "Точность: ≥96%", uz: "Aniqlik: ≥96%" },
      { ru: "Температура хранения: 15-30°C", uz: "Saqlash harorati: 15-30°C" },
      { ru: "Срок использования после вскрытия: 3 месяца", uz: "Ochilgandan keyin foydalanish muddati: 3 oy" },
      { ru: "Упаковка: 50 полосок (2×25)", uz: "Qadoq: 50 ta chiziq (2×25)" },
    ],
  },
];

const getCategoryName = (categoryId) => {
  const categories = {
    glucometers: { ru: "Глюкометры", uz: "Glyukometrlar" },
    accessories: { ru: "Аксессуары", uz: "Aksessuarlar" },
    analyzers: { ru: "Анализаторы", uz: "Analizatorlar" },
  };
  return categories[categoryId]?.[locale.value] || "";
};

const goBack = () => {
  router.push("/products");
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
});
</script>
