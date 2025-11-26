<template>
  <div>
    <Header />
    <HeroSection @open-modal="openInstructionModal" id="hero" />
    <AboutProduct @open-modal="openInstructionModal" id="about" />
    <Advantages id="advantages" />
    <InteractiveTest id="test" />
    <UsageSteps id="steps" />
    <Results id="results" />
    <WhereToBuy id="buy" />
    <FAQ id="faq" />
    <CTAForm id="contact" />
    <Footer />

    <!-- Модалка вне всех секций -->
    <InstructionModal ref="instructionModalRef" />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutProduct from '../components/AboutProduct.vue'
import Advantages from '../components/Advantages.vue'
import InteractiveTest from '../components/InteractiveTest.vue'
import UsageSteps from '../components/UsageSteps.vue'
import Results from '../components/Results.vue'
import WhereToBuy from '../components/WhereToBuy.vue'
import FAQ from '../components/FAQ.vue'
import CTAForm from '../components/CTAForm.vue'
import Footer from '../components/Footer.vue'

import { ref } from 'vue'
import InstructionModal from '../components/modals/InstructionModal.vue'

const instructionModalRef = ref(null)

const openInstructionModal = () => {
  instructionModalRef.value?.openModal()
}
</script>
