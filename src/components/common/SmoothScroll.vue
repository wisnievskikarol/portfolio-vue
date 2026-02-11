<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap, ScrollTrigger } from '@/composables/useGsap'

const wrapper = ref<HTMLElement | null>(null)

onMounted(() => {
  ScrollTrigger.defaults({
    toggleActions: 'play none none none'
  })
})
</script>

<template>
  <div ref="wrapper">
    <slot />
  </div>
</template>
