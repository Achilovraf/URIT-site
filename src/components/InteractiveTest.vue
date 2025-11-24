<template>
  <!-- <section id="test" class="py-20 px-4 relative overflow-hidden"> -->
    

    <!-- Стартовый экран с анимацией -->
    <div v-if="!testStarted && !showResults" class="relative">
      <!-- Декоративные элементы фона -->
    <div class="opacity-10">
      <div
        class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse"
        style="animation-delay: 2s"
      ></div>
    </div>

    <!-- <div class="max-w-4xl mx-auto relative z-10"> -->

    <!-- Заголовок -->
    <div class="text-center mb-50">
      <h2 class="text-4xl lg:text-5xl pb-20 font-bold text-white mb-4 drop-shadow-lg">
        {{ content.title[locale] }}
      </h2>
      <p class="text-xl text-white/90 drop-shadow">
        {{ content.subtitle[locale] }}
      </p>
    </div>
      <!-- Видео фон -->
      <div class="absolute inset-0 rounded-3xl overflow-hidden">
        <video
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover"
        >
          <source src="/public/images/Глюкометр.mp4" type="video/mp4" />
          <!-- <source src="/path/to/your/video.webm" type="video/webm" /> -->
        </video>
        <!-- Градиент оверлей для лучшей читаемости -->
        <div
          class="absolute inset-0  "
        ></div>
      </div>

      <!-- Контент поверх видео -->
      <div class="relative z-10  p-10 rounded-3xl">
        <div class="text-center space-y-8">
          <!-- Интерактивная анимация капли крови -->
          <div class="relative w-64 h-64 mx-auto">
            <!-- Палец -->
            <div
              class="absolute inset-0 flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
              @mouseenter="fingerHover = true"
              @mouseleave="fingerHover = false"
              @click="startBloodDrop"
            >
              <svg
                class="w-32 h-32 transition-all duration-300"
                :class="
                  fingerHover || bloodDropActive ? 'opacity-80' : 'opacity-100'
                "
                viewBox="0 0 100 100"
                fill="none"
              >
                <!-- Рука/палец -->
                <path
                  d="M50 20 C45 15, 40 15, 38 20 L35 40 L65 40 L62 20 C60 15, 55 15, 50 20 Z"
                  fill="#fbbf77"
                  stroke="#d4a76a"
                  stroke-width="1.5"
                />
                <ellipse
                  cx="50"
                  cy="42"
                  rx="16"
                  ry="10"
                  fill="#fbbf77"
                  stroke="#d4a76a"
                  stroke-width="1.5"
                />
              </svg>
            </div>

            <!-- Устройство для прокола -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div
                class="w-16 h-20 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg shadow-lg border-2 border-gray-400 flex flex-col items-center justify-center"
              >
                <div class="w-3 h-3 bg-red-400 rounded-full mb-1"></div>
                <div class="w-8 h-1 bg-gray-400 rounded"></div>
              </div>
            </div>

            <!-- Анимированная капля крови -->
            <div
              v-if="bloodDropActive"
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style="animation: dropFall 1.5s ease-out forwards"
            >
              <div class="relative">
                <!-- Капля -->
                <svg
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                  class="drop-shadow-lg"
                >
                  <path
                    d="M20 0 C20 0, 0 20, 0 32 C0 42, 9 50, 20 50 C31 50, 40 42, 40 32 C40 20, 20 0, 20 0 Z"
                    fill="url(#bloodGradient)"
                  />
                  <defs>
                    <linearGradient
                      id="bloodGradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #ff4444; stop-opacity: 1"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #cc0000; stop-opacity: 1"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                <!-- Эффект анализа -->
                <div
                  v-if="analyzing"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    class="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
                  ></div>
                </div>

                <!-- Волны сканирования -->
                <div
                  v-if="analyzing"
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div
                    class="w-20 h-20 border-2 border-primary rounded-full animate-ping"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Подсказка -->
            <div
              v-if="!bloodDropActive"
              class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap"
            >
              <p class="text-primary font-semibold animate-bounce">
                {{ content.clickFinger[locale] }} 👆
              </p>
            </div>
          </div>

          <div class="space-y-4 pt-8">
            <h3 class="text-2xl font-bold text-gray-900">
              {{ content.startTitle[locale] }}
            </h3>

            <p class="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {{ content.startDescription[locale] }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Тест с новым дизайном -->
    <div
      v-if="testStarted && !showResults"
      class="bg-white/95 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-2xl"
    >
      <!-- Прогресс-бар -->
      <div class="mb-8">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-semibold text-gray-600">
            {{ content.question[locale] }} {{ currentQuestion + 1 }}
            {{ content.of[locale] }} {{ questions.length }}
          </span>
          <span class="text-sm font-semibold text-primary">
            {{ Math.round(((currentQuestion + 1) / questions.length) * 100) }}%
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div
            class="bg-gradient-to-r from-primary to-indigo-600 h-3 rounded-full transition-all duration-500"
            :style="{
              width: ((currentQuestion + 1) / questions.length) * 100 + '%',
            }"
          ></div>
        </div>
      </div>

      <!-- Вопрос -->
      <div class="mb-8">
        <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
          {{ questions[currentQuestion].question[locale] }}
        </h3>

        <!-- Варианты ответов -->
        <div class="space-y-4">
          <button
            v-for="(option, index) in questions[currentQuestion].options"
            :key="index"
            @click="selectAnswer(index)"
            type="button"
            class="w-full text-left p-6 rounded-xl border-2 transition-all"
            :class="[
              isOptionSelected(option)
                ? 'border-primary text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md'
                : 'border-blue-700 hover:border-primary/50 hover:bg-gray-50',
            ]"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                :class="[
                  isOptionSelected(option)
                    ? 'border-primary bg-primary'
                    : 'border-black',
                ]"
              >
                <div
                  v-if="isOptionSelected(option)"
                  class="w-3 h-3 bg-white rounded-full"
                ></div>
              </div>
              <span
                class="text-lg font-medium transition-colors"
                :class="[
                  isOptionSelected(option) ? 'text-primary' : 'text-gray-700',
                ]"
              >
                {{ option[locale] }}
              </span>
            </div>
          </button>
        </div>

        <!-- Ошибка валидации -->
        <div
          v-if="showValidationError"
          class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
        >
          <svg
            class="w-5 h-5 text-red-500 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-red-700 font-medium">
            {{ content.validationError[locale] }}
          </span>
        </div>
      </div>

      <!-- Кнопки навигации -->
      <div class="flex justify-between items-center">
        <button
          v-if="currentQuestion > 0"
          @click="previousQuestion"
          type="button"
          class="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600  text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {{ content.back[locale] }}
        </button>

        <div v-else></div>

        <button
          @click="nextQuestion"
          type="button"
          class="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600  text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          :class="[
            hasAnswered()
              ? 'hover:bg-primary-600 hover:scale-105'
              : 'opacity-50 cursor-not-allowed',
          ]"
        >
          {{
            currentQuestion === questions.length - 1
              ? content.finish[locale]
              : content.next[locale]
          }}
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Результаты с улучшенным дизайном -->
    <div
      v-if="showResults"
      class="bg-white/95 backdrop-blur-xl p-10 rounded-3xl shadow-2xl"
    >
      <div class="text-center space-y-6">
        <!-- Иконка результата -->
        <div
          class="w-24 h-24 rounded-full flex items-center justify-center mx-auto"
          :class="getRiskLevel().color"
        >
          <svg
            class="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="getRiskLevel().icon"
            />
          </svg>
        </div>

        <!-- Заголовок результата -->
        <h3 class="text-3xl font-bold text-gray-900">
          {{ getRiskLevel().title[locale] }}
        </h3>

        <!-- Описание результата -->
        <p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {{ getRiskLevel().description[locale] }}
        </p>

        <!-- Рекомендация -->
        <div
          class="bg-blue-50 border-l-4 border-primary p-6 rounded-r-xl text-left"
        >
          <h4 class="font-bold text-gray-900 mb-2">
            {{ content.recommendation[locale] }}
          </h4>
          <p class="text-gray-700">
            {{ getRiskLevel().recommendation[locale] }}
          </p>
        </div>

        <!-- Кнопки действий -->
        <div class="flex flex-wrap justify-center gap-4 pt-4">
          <button
            @click="scrollToBuy"
            class="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600  text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {{ content.buyButton[locale] }}
          </button>

          <button
            @click="resetTest"
            class="group inline-flex items-center gap-3 border-2 border-indigo-700 bg-white border-gradient-to-r from-blue-600 to-indigo-600 text-black font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 hover:[background-clip:border-box]"
          >
            {{ content.retakeButton[locale] }}
          </button>
        </div>
      </div>
    </div>

    <!-- </div> -->
  <!-- </section> -->
</template>

<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "../store";

const store = useAppStore();
const locale = computed(() => store.locale);

const testStarted = ref(false);
const showResults = ref(false);
const currentQuestion = ref(0);
const answers = ref([]);
const showValidationError = ref(false);
const fingerHover = ref(false);
const bloodDropActive = ref(false);
const analyzing = ref(false);

const content = {
  title: {
    ru: "Узнайте свой уровень риска диабета",
    uz: "Diabet xavfi darajangizni bilib oling",
  },
  subtitle: {
    ru: "Интерактивный анализ за 2 минуты",
    uz: "Interaktiv tahlil 2 daqiqada",
  },
  clickFinger: {
    ru: "Нажмите на палец",
    uz: "Barmog'ingizni bosing",
  },
  startTitle: {
    ru: "Готовы узнать больше о своем здоровье?",
    uz: "Sog'ligingiz haqida ko'proq bilishga tayyormisiz?",
  },
  startDescription: {
    ru: "Ответьте на 5 простых вопросов, чтобы оценить необходимость регулярного контроля уровня глюкозы и узнать, подходит ли вам URIT-86.",
    uz: "Glyukoza darajasini muntazam nazorat qilish zarurligini baholash va URIT-86 sizga mos kelishi-kelmasligini bilish uchun 5 ta oddiy savolga javob bering.",
  },
  startButton: {
    ru: "Начать тест",
    uz: "Testni boshlash",
  },
  question: {
    ru: "Вопрос",
    uz: "Savol",
  },
  of: {
    ru: "из",
    uz: "dan",
  },
  back: {
    ru: "Назад",
    uz: "Orqaga",
  },
  next: {
    ru: "Далее",
    uz: "Keyingisi",
  },
  finish: {
    ru: "Завершить",
    uz: "Tugatish",
  },
  validationError: {
    ru: "Пожалуйста, выберите один из вариантов ответа",
    uz: "Iltimos, javob variantlaridan birini tanlang",
  },
  recommendation: {
    ru: "Наша рекомендация:",
    uz: "Bizning tavsiyamiz:",
  },
  buyButton: {
    ru: "Где купить URIT-86",
    uz: "URIT-86 ni qayerdan sotib olish",
  },
  retakeButton: {
    ru: "Пройти тест заново",
    uz: "Testni qayta topshirish",
  },
};

const questions = [
  {
    question: {
      ru: "Как часто вы измеряете уровень глюкозы?",
      uz: "Glyukoza darajasini qanchalik tez-tez o'lchaysziz?",
    },
    options: [
      {
        ru: "Ежедневно или несколько раз в день",
        uz: "Har kuni yoki kuniga bir necha marta",
        score: 3,
      },
      {
        ru: "Несколько раз в неделю",
        uz: "Haftasiga bir necha marta",
        score: 2,
      },
      {
        ru: "Раз в месяц или реже",
        uz: "Oyiga bir marta yoki kamroq",
        score: 1,
      },
      {
        ru: "Не измеряю",
        uz: "O'lchamayman",
        score: 0,
      },
    ],
  },
  {
    question: {
      ru: 'Есть ли у вас диагноз "диабет"?',
      uz: '"Diabet" tashxisi qo\'yilganmi?',
    },
    options: [
      {
        ru: "Да, диабет 1 типа",
        uz: "Ha, 1-toifa diabet",
        score: 3,
      },
      {
        ru: "Да, диабет 2 типа",
        uz: "Ha, 2-toifa diabet",
        score: 3,
      },
      {
        ru: "Преддиабет",
        uz: "Prediabet",
        score: 2,
      },
      {
        ru: "Нет",
        uz: "Yo'q",
        score: 0,
      },
    ],
  },
  {
    question: {
      ru: "Ваш возраст?",
      uz: "Yoshingiz nechada?",
    },
    options: [
      {
        ru: "До 30 лет",
        uz: "30 yoshgacha",
        score: 0,
      },
      {
        ru: "30-45 лет",
        uz: "30-45 yosh",
        score: 1,
      },
      {
        ru: "45-60 лет",
        uz: "45-60 yosh",
        score: 2,
      },
      {
        ru: "Старше 60 лет",
        uz: "60 yoshdan katta",
        score: 3,
      },
    ],
  },
  {
    question: {
      ru: "Есть ли у ваших близких родственников диабет?",
      uz: "Yaqin qarindoshlaringizda diabet bormi?",
    },
    options: [
      {
        ru: "Да, у родителей",
        uz: "Ha, ota-onalarda",
        score: 3,
      },
      {
        ru: "Да, у бабушки/дедушки или братьев/сестер",
        uz: "Ha, bobo/buvi yoki aka-uka/opa-singilarda",
        score: 2,
      },
      {
        ru: "Да, у дальних родственников",
        uz: "Ha, uzoq qarindoshlarda",
        score: 1,
      },
      {
        ru: "Нет",
        uz: "Yo'q",
        score: 0,
      },
    ],
  },
  {
    question: {
      ru: "Используете ли вы глюкометр в настоящее время?",
      uz: "Hozirda glyukometrdan foydalanasizmi?",
    },
    options: [
      {
        ru: "Да, регулярно",
        uz: "Ha, muntazam",
        score: 3,
      },
      {
        ru: "Да, но он часто выходит из строя",
        uz: "Ha, lekin u tez-tez buziladi",
        score: 2,
      },
      {
        ru: "Раньше использовал, но перестал",
        uz: "Ilgari foydalanganman, lekin to'xtatdim",
        score: 1,
      },
      {
        ru: "Никогда не использовал",
        uz: "Hech qachon foydalanmaganman",
        score: 0,
      },
    ],
  },
];

// Анимация капли крови и начало теста
const startBloodDrop = () => {
  bloodDropActive.value = true;

  // Через 1.5 секунды начинаем анализ
  setTimeout(() => {
    analyzing.value = true;
  }, 1500);

  // Через 3 секунды запускаем тест
  setTimeout(() => {
    startTest();
  }, 3500);
};

const startTest = () => {
  testStarted.value = true;
  answers.value = [];
  currentQuestion.value = 0;
  showValidationError.value = false;
  bloodDropActive.value = false;
  analyzing.value = false;
  fingerHover.value = false;
};

// Проверяет, выбрана ли данная опция
const isOptionSelected = (option) => {
  const currentAnswer = answers.value[currentQuestion.value];
  if (!currentAnswer) return false;
  return currentAnswer.score === option.score && currentAnswer.ru === option.ru;
};

// Проверяет, ответил ли пользователь на текущий вопрос
const hasAnswered = () => {
  return answers.value[currentQuestion.value] !== undefined;
};

// Выбор ответа
const selectAnswer = (index) => {
  const selectedOption = questions[currentQuestion.value].options[index];
  answers.value[currentQuestion.value] = selectedOption;
  showValidationError.value = false;
};

// Переход к следующему вопросу
const nextQuestion = () => {
  // Валидация
  if (!hasAnswered()) {
    showValidationError.value = true;
    return;
  }

  // Переход к следующему вопросу или результатам
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
    showValidationError.value = false;
  } else {
    // Показываем результаты
    showResults.value = true;
    testStarted.value = false;
  }
};

// Возврат к предыдущему вопросу
const previousQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--;
    showValidationError.value = false;
  }
};

// Подсчет общего балла
const calculateScore = () => {
  let totalScore = 0;
  answers.value.forEach((answer) => {
    if (answer && answer.score !== undefined) {
      totalScore += answer.score;
    }
  });
  return totalScore;
};

// Определение уровня риска
const getRiskLevel = () => {
  const score = calculateScore();

  if (score >= 10) {
    return {
      title: {
        ru: "Высокий уровень риска",
        uz: "Yuqori xavf darajasi",
      },
      description: {
        ru: "Судя по вашим ответам, вам необходим регулярный контроль уровня глюкозы. URIT-86 идеально подходит для ежедневного мониторинга.",
        uz: "Javoblaringizga qaraganda, sizga glyukoza darajasini muntazam nazorat qilish kerak. URIT-86 kundalik monitoring uchun juda mos keladi.",
      },
      recommendation: {
        ru: "Мы настоятельно рекомендуем приобрести URIT-86 для точного и удобного контроля уровня глюкозы в домашних условиях.",
        uz: "Uyda glyukoza darajasini aniq va qulay nazorat qilish uchun URIT-86 ni sotib olishni qat'iy tavsiya qilamiz.",
      },
      color: "bg-red-500",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    };
  } else if (score >= 6) {
    return {
      title: {
        ru: "Средний уровень риска",
        uz: "O'rtacha xavf darajasi",
      },
      description: {
        ru: "У вас есть факторы риска развития диабета. Рекомендуем периодически проверять уровень глюкозы для профилактики.",
        uz: "Sizda diabet rivojlanishi xavf omillari bor. Profilaktika uchun vaqti-vaqti bilan glyukoza darajasini tekshirishni tavsiya qilamiz.",
      },
      recommendation: {
        ru: "URIT-86 поможет вам контролировать свое здоровье и вовремя заметить изменения уровня глюкозы.",
        uz: "URIT-86 sizga sog'ligingizni nazorat qilishda va glyukoza darajasidagi o'zgarishlarni o'z vaqtida sezishda yordam beradi.",
      },
      color: "bg-yellow-500",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    };
  } else {
    return {
      title: {
        ru: "Низкий уровень риска",
        uz: "Past xavf darajasi",
      },
      description: {
        ru: "Сейчас у вас низкий риск диабета, но профилактический контроль никогда не помешает. Следите за своим здоровьем!",
        uz: "Hozir sizda diabet xavfi past, lekin profilaktik nazorat hech qachon ortiqcha bo'lmaydi. Sog'ligingizni kuzatib boring!",
      },
      recommendation: {
        ru: "Если вы хотите следить за своим здоровьем, URIT-86 станет надежным помощником для периодических проверок.",
        uz: "Agar sog'ligingizni kuzatmoqchi bo'lsangiz, URIT-86 vaqti-vaqti bilan tekshiruvlar uchun ishonchli yordamchi bo'ladi.",
      },
      color: "bg-green-500",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    };
  }
};

// Сброс теста
const resetTest = () => {
  testStarted.value = false;
  showResults.value = false;
  currentQuestion.value = 0;
  answers.value = [];
  showValidationError.value = false;
  bloodDropActive.value = false;
  analyzing.value = false;
  fingerHover.value = false;
};

// Скролл к блоку "Где купить"
const scrollToBuy = () => {
  document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
@keyframes dropFall {
  0% {
    transform: translate(-50%, -50%) translateY(-100px) scale(0);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) translateY(20px) scale(1.1);
    opacity: 1;
  }
}
</style>
