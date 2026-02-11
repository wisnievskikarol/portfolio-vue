<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CustomCursor from './components/common/CustomCursor.vue'
</script>

<template>
  <div class="noise-overlay" />
  <CustomCursor />
  <Navbar />
  <RouterView />
  <Footer />
</template>
