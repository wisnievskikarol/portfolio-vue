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
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
  <footer class="py-16 relative">
    <div class="section-divider" />
    <div class="max-w-6xl mx-auto px-6 lg:px-10 pt-12">
      <!-- 3-column grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-[11px] font-mono uppercase tracking-[0.15em]"
      >
        <!-- Column 1: Email + Socials -->
        <div class="flex flex-col gap-3">
          <a
            href="mailto:wisniewskikarol@gmail.com"
            class="text-white/25 hover:text-white/60 transition-colors duration-500"
          >
            wisniewskikarol@gmail.com
          </a>
          <div class="flex items-center gap-4 mt-1">
            <a
              href="https://www.linkedin.com/in/karol-wi%C5%9Bniewski-1a9747200/"
              target="_blank"
              class="text-white/15 hover:text-white/50 transition-colors duration-500"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              class="text-white/15 hover:text-white/50 transition-colors duration-500"
            >
              GitHub
            </a>
          </div>
        </div>

        <!-- Column 2: Live clock + Back to top -->
        <div class="flex flex-col items-start sm:items-center gap-3">
          <span class="text-white/15"> {{ t('footer.city') }} {{ currentTime }} </span>
          <button
            @click="scrollToTop"
            class="group flex items-center gap-2 text-white/15 hover:text-white/50 transition-all duration-500"
          >
            {{ t('footer.backToTop') }}
            <div
              class="w-6 h-6 border border-white/[0.08] group-hover:border-white/20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-translate-y-0.5"
            >
              <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
          </button>
        </div>

        <!-- Column 3: Credits -->
        <div class="flex flex-col items-start sm:items-end gap-3">
          <span class="text-white/10"> &copy; {{ currentYear }} </span>
          <span class="text-white/10"> {{ t('footer.credits') }} </span>
        </div>
      </div>
    </div>
  </footer>
</template>
