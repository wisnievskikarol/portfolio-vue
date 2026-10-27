<script setup lang="ts">
import { computed } from 'vue'
import logoFull from '@/assets/logo.svg?raw'
import logoMark from '@/assets/logo_mobile.svg?raw'

const props = defineProps<{ variant?: 'full' | 'mark' }>()

// The wordmark ships white; recolor it to follow the theme's ink. The orange mark stays as is.
const svg = computed(() =>
  (props.variant === 'mark' ? logoMark : logoFull).replace('fill="white"', 'fill="currentColor"')
)
</script>

<template>
  <span class="site-logo block h-full text-ink" aria-hidden="true" v-html="svg" />
</template>

<style scoped>
.site-logo :deep(svg) {
  display: block;
  width: auto;
  height: 100%;
}
</style>
