<script setup lang="ts">
import { watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const { t, locale } = useI18n()

// Update document title when locale changes
watchEffect(() => {
  document.title = t('meta.title')
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', t('meta.description'))
  }
})
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
