<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const currentYear = new Date().getFullYear()
const currentTime = ref('')
let intervalId: ReturnType<typeof setInterval> | null = null

const timeLocale = computed(() => (locale.value === 'pl' ? 'pl-PL' : 'en-GB'))

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString(timeLocale.value, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Warsaw'
  })
}

const scrollToTop = () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}

onMounted(() => {
  updateTime()
  intervalId = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

// Update time immediately when locale changes
watch(locale, () => {
  updateTime()
})
</script>

<template>
  <footer class="page-x pb-10 pt-16">
    <div
      class="flex flex-col gap-6 text-caption text-ink-muted sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <a href="mailto:wisnievskikarol@gmail.com" class="hover:text-ink"
          >wisnievskikarol@gmail.com</a
        >
        <a
          href="https://www.linkedin.com/in/karol-wi%C5%9Bniewski-1a9747200/"
          target="_blank"
          rel="noopener"
          class="hover:text-ink"
          >LinkedIn</a
        >
        <a href="https://github.com/" target="_blank" rel="noopener" class="hover:text-ink"
          >GitHub</a
        >
      </div>

      <span class="tabular-nums">{{ t('footer.city') }} {{ currentTime }}</span>

      <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <span>&copy; {{ currentYear }} · {{ t('footer.credits') }}</span>
        <button type="button" class="ms-pill h-9 min-w-0 px-4 text-caption" @click="scrollToTop">
          {{ t('footer.backToTop') }}
        </button>
      </div>
    </div>
  </footer>
</template>
