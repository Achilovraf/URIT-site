<template>
  <div>
    <!-- 1. HERO СЕКЦИЯ - Синий градиент с волной вниз -->
    <section class="hero-section">
      <div class="section-container relative z-10 py-20">
        <h1 class="text-5xl font-bold text-white mb-6">The Making Of A Manager</h1>
        <p class="text-xl text-white mb-8 max-w-2xl">
          An everything you need to know field guide to nailing your job, earning your confidence, and leading your team to new heights.
        </p>
        <div class="flex gap-4">
          <button class="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            BUY FOR 40$
          </button>
          <button class="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>

    <!-- 2. ЧТО ТЫ ПОЛУЧИШЬ - Белый фон -->
    <section class="section-white">
      <div class="section-container">
        <h2 class="section-title text-gray-900">What Will You Get From This Book?</h2>
        
        <!-- Сетка с иконками -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Business Tips</h3>
            <p class="text-gray-600 text-sm">List one of your book's benefits here. Lorem ipsum dolor sit amet.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Leadership Skills</h3>
            <p class="text-gray-600 text-sm">List one of your book's benefits here. Lorem ipsum dolor sit amet.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Communication Keys</h3>
            <p class="text-gray-600 text-sm">List one of your book's benefits here. Lorem ipsum dolor sit amet.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">More Negotiation</h3>
            <p class="text-gray-600 text-sm">List one of your book's benefits here. Lorem ipsum dolor sit amet.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7H7v10h6V7zM13 7l4-4m0 0l4 4m-4-4v12"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Strategy and Planning</h3>
            <p class="text-gray-600 text-sm">List one of your book's benefits here. Lorem ipsum dolor sit amet.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 19H9a6 6 0 016-6v0a6 6 0 016 6v0z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Work in a Team</h3>
            <p class="text-gray-600 text-sm">List one of your book's benefits here. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. ГЛАВЫ КНИГИ - Серый фон -->
    <section class="section-gray">
      <div class="section-container">
        <h2 class="section-title text-gray-900">The Book Chapters</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="bg-white rounded-lg shadow-lg p-8">
              <ol class="space-y-3 text-gray-700">
                <li><span class="font-bold">1.</span> People Management Skills</li>
                <li><span class="font-bold">2.</span> Business Finance</li>
                <li><span class="font-bold">3.</span> Influencing Skills</li>
                <li><span class="font-bold">4.</span> Communication Skills</li>
                <li><span class="font-bold">5.</span> Negotiation Skills</li>
                <li><span class="font-bold">6.</span> Project Management Skills</li>
                <li><span class="font-bold">7.</span> Strategy and Planning</li>
              </ol>
              <button class="mt-8 bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition w-full">
                I WANT THIS BOOK
              </button>
            </div>
          </div>
          <div>
            <img src="/path/to/book.png" alt="Book" class="w-full max-w-sm mx-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- 4. ДЛЯ КОГО - Белый фон -->
    <section class="section-white">
      <div class="section-container">
        <h2 class="section-title text-gray-900">Who This Book Is For</h2>
        
        <div class="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 class="font-bold text-lg text-gray-900 mb-2">Entrepreneurs</h3>
            <p class="text-gray-600">
              Learn lorum ipsum dolor sit amet, consectetur adipiscing elit. Proin euidus ut urna volutpat facilisis.
            </p>
          </div>
          
          <div>
            <h3 class="font-bold text-lg text-gray-900 mb-2">Project Managers</h3>
            <p class="text-gray-600">
              Learn lorum ipsum dolor sit amet, consectetur adipiscing elit. Proin euidus ut urna volutpat facilisis.
            </p>
          </div>

          <div>
            <h3 class="font-bold text-lg text-gray-900 mb-2">Students</h3>
            <p class="text-gray-600">
              Learn lorum ipsum dolor sit amet, consectetur adipiscing elit. Proin euidus ut urna volutpat facilisis.
            </p>
          </div>

          <div>
            <h3 class="font-bold text-lg text-gray-900 mb-2">Investors</h3>
            <p class="text-gray-600">
              Learn lorum ipsum dolor sit amet, consectetur adipiscing elit. Proin euidus ut urna volutpat facilisis.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. ОТЗЫВЫ - Серый фон -->
    <section class="section-gray">
      <div class="section-container">
        <h2 class="section-title text-gray-900">Book Reviews</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <!-- Отзыв 1 -->
          <div class="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
            <div class="flex items-center mb-4">
              <span class="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
            </div>
            <p class="text-gray-700 mb-4 text-sm">
              "Excellent detailed mind-blowing work that had been backed with solid program..."
            </p>
            <div class="flex items-center gap-3">
              <img src="/path/to/avatar.jpg" alt="User" class="w-10 h-10 rounded-full">
              <div>
                <p class="font-bold text-sm text-gray-900">John Doe</p>
                <p class="text-xs text-gray-500">Startup Doer</p>
              </div>
            </div>
          </div>

          <!-- Отзыв 2 -->
          <div class="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
            <div class="flex items-center mb-4">
              <span class="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
            </div>
            <p class="text-gray-700 mb-4 text-sm">
              "Great kind detail paid me your book review few lines. Lorem ipsum dolor sit...."
            </p>
            <div class="flex items-center gap-3">
              <img src="/path/to/avatar.jpg" alt="User" class="w-10 h-10 rounded-full">
              <div>
                <p class="font-bold text-sm text-gray-900">Rafael Davis</p>
                <p class="text-xs text-gray-500">Art Director</p>
              </div>
            </div>
          </div>

          <!-- Отзыв 3 -->
          <div class="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
            <div class="flex items-center mb-4">
              <span class="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
            </div>
            <p class="text-gray-700 mb-4 text-sm">
              "Excellent detailed mind-blowing work that had been backed with program."
            </p>
            <div class="flex items-center gap-3">
              <img src="/path/to/avatar.jpg" alt="User" class="w-10 h-10 rounded-full">
              <div>
                <p class="font-bold text-sm text-gray-900">Lea Dothes</p>
                <p class="text-xs text-gray-500">Founder</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button class="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition">
            GET YOUR COPY TODAY
          </button>
        </div>
      </div>
    </section>

    <!-- 6. БЕСПЛАТНЫЙ ПРЯМОЙ - Белый фон -->
    <section class="section-white">
      <div class="section-container text-center">
        <h2 class="section-title text-gray-900">Get a Free Preview</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Sign up for a free preview of this book. You can start within 5 minutes to email address.
        </p>
        <div class="flex gap-3 justify-center">
          <input type="email" placeholder="Enter your email..." class="px-6 py-3 border border-gray-300 rounded-full flex-1 max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
          <button class="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>

    <!-- 7. ОБ АВТОРЕ - Синий с волной вверх -->
    <section class="footer-section">
      <div class="section-container relative z-10 text-center text-white">
        <img src="/path/to/author.jpg" alt="Author" class="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-white">
        <h2 class="text-4xl font-bold mb-6">About The Author</h2>
        <p class="text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
          Jeri Bell is an author and entrepreneur. She founded her first startup in 2009, writing a 100-page eBook about How to start a website. She has started 5 successful online businesses to date.
        </p>
        <p class="text-sm mb-8 opacity-90">
          She has been a guest speaker at various conferences and has been featured in numerous publications.
        </p>
        
        <!-- Социальные сети -->
        <div class="flex gap-4 justify-center">
          <a href="#" class="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Пустой скрипт
</script>

<style scoped>
/* Волна вниз (синий -> белый) */
.hero-section::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg"><path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="%23FFFFFF"/></svg>') repeat-x;
  background-size: auto 100%;
}

/* Волна вверх (белый -> синий) */
.footer-section::before {
  content: '';
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg"><path d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="%23FFFFFF"/></svg>') repeat-x;
  background-size: auto 100%;
  transform: scaleY(-1);
}

/* Классы для секций */
.hero-section {
  @apply relative bg-gradient-to-r from-blue-600 to-blue-500 pt-20 pb-32 overflow-hidden;
}

.section-white {
  @apply relative bg-white py-16 lg:py-24;
}

.section-gray {
  @apply relative bg-gray-50 py-16 lg:py-24;
}

.footer-section {
  @apply relative bg-gradient-to-r from-blue-600 to-blue-500 pt-32 pb-16 overflow-hidden;
}

.section-container {
  @apply max-w-7xl mx-auto px-6 lg:px-12;
}

.section-title {
  @apply text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16;
}
</style>
