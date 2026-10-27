<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteLogo from './common/SiteLogo.vue'

const { t, locale } = useI18n()

const isScrolled = ref(false)
const activeSection = ref('')

const navigation = computed(() => [
  { name: t('nav.about'), id: 'about' },
  { name: t('nav.experience'), id: 'experience' },
  { name: t('nav.projects'), id: 'projects' },
  { name: t('nav.contact'), id: 'contact' }
])

// Every section on the page, so the link of the nearest preceding nav item stays lit
const sectionOrder = [
  'about',
  'experience',
  'technologies',
  'ai',
  'projects',
  'education',
  'contact'
]
const navOwner: Record<string, string> = {
  technologies: 'experience',
  ai: 'experience',
  education: 'projects'
}

const otherLocale = computed(() => (locale.value === 'pl' ? 'en' : 'pl'))

const toggleLanguage = () => {
  locale.value = otherLocale.value
  localStorage.setItem('locale', locale.value)
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 8

  let current = ''
  for (const id of sectionOrder) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= 120) current = id
  }
  activeSection.value = navOwner[current] ?? current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <!-- One bar: logo left, section links centered, language + email actions right -->
  <header
    :class="[
      'sticky top-0 z-50 transition-colors duration-150 motion-reduce:transition-none',
      isScrolled ? 'bg-surface shadow-[0_1px_0_var(--hairline)]' : 'bg-transparent'
    ]"
  >
    <div
      class="page-x grid h-20 grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]"
    >
      <a href="#" class="h-8 justify-self-start" :aria-label="t('meta.title')" data-intro="logo">
        <SiteLogo class="max-sm:hidden" />
        <SiteLogo variant="mark" class="sm:hidden" />
      </a>

      <nav class="hidden items-center gap-1 md:flex" :aria-label="t('nav.label')">
        <a
          v-for="item in navigation"
          :key="item.id"
          :href="`#${item.id}`"
          :class="[
            'rounded-pill px-4 py-2 text-label transition-colors duration-150 motion-reduce:transition-none',
            activeSection === item.id
              ? 'bg-butter text-on-butter'
              : 'hover:bg-butter hover:text-on-butter'
          ]"
          :aria-current="activeSection === item.id ? 'true' : undefined"
          data-intro="pill"
        >
          {{ item.name }}
        </a>
      </nav>

      <div class="flex items-center gap-2 justify-self-end">
        <button
          type="button"
          class="ms-btn ms-btn--soft h-11 px-5 uppercase"
          :aria-label="t('nav.switchLanguage')"
          data-intro="pill"
          @click="toggleLanguage"
        >
          {{ otherLocale }}
        </button>
        <a href="mailto:wisnievskikarol@gmail.com" class="ms-btn h-11 px-5" data-intro="pill">
          {{ t('hero.cta') }}
        </a>
      </div>
    </div>
  </header>
</template>
