<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteLogo from './common/SiteLogo.vue'

const { t, locale } = useI18n()

const headerRef = ref<HTMLElement | null>(null)
const isCompact = ref(false)
const activeSection = ref('')

const navigation = computed(() => [
  { name: t('nav.about'), id: 'about' },
  { name: t('nav.experience'), id: 'experience' },
  { name: t('nav.projects'), id: 'projects' },
  { name: t('nav.contact'), id: 'contact' }
])

// Every section on the page, so the pill of the nearest preceding nav item stays lit
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
  const headerBottom = headerRef.value?.getBoundingClientRect().bottom ?? 0
  isCompact.value = headerBottom < 0

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
  <!-- Full header: centered logo above the pills, on the glow gradient -->
  <header
    ref="headerRef"
    class="flex flex-col items-center gap-8 bg-gradient-to-b from-surface-glow to-surface px-4 pb-12 pt-8"
  >
    <a href="#" class="h-12 sm:h-14" :aria-label="t('meta.title')" data-intro="logo">
      <SiteLogo />
    </a>
    <nav class="flex flex-wrap justify-center gap-3 sm:gap-4" :aria-label="t('nav.label')">
      <a
        v-for="item in navigation"
        :key="item.id"
        :href="`#${item.id}`"
        class="ms-pill"
        data-intro="pill"
        :aria-current="activeSection === item.id ? 'true' : undefined"
      >
        {{ item.name }}
      </a>
      <button
        type="button"
        class="ms-pill min-w-0 uppercase"
        data-intro="pill"
        :aria-label="t('nav.switchLanguage')"
        @click="toggleLanguage"
      >
        {{ otherLocale }}
      </button>
    </nav>
  </header>

  <!-- Compact bar: appears once the full header has scrolled away -->
  <Transition
    enter-active-class="transition duration-150 ease-out motion-reduce:transition-none"
    enter-from-class="-translate-y-full"
    leave-active-class="transition duration-150 ease-out motion-reduce:transition-none"
    leave-to-class="-translate-y-full"
  >
    <div
      v-if="isCompact"
      class="fixed inset-x-0 top-0 z-50 bg-surface shadow-[0_1px_0_var(--hairline)]"
    >
      <div class="page-x flex h-16 items-center gap-4">
        <a href="#" class="h-7 shrink-0" :aria-label="t('nav.backToTop')">
          <SiteLogo variant="mark" />
        </a>
        <nav
          class="ml-auto flex items-center gap-2 overflow-x-auto sm:gap-3"
          :aria-label="t('nav.label')"
        >
          <a
            v-for="item in navigation"
            :key="item.id"
            :href="`#${item.id}`"
            :class="[
              'ms-pill h-9 min-w-0 shrink-0 px-4',
              item.id === 'contact' ? '' : 'max-sm:hidden'
            ]"
            :aria-current="activeSection === item.id ? 'true' : undefined"
          >
            {{ item.name }}
          </a>
          <button
            type="button"
            class="ms-pill h-9 min-w-0 shrink-0 px-4 uppercase"
            :aria-label="t('nav.switchLanguage')"
            @click="toggleLanguage"
          >
            {{ otherLocale }}
          </button>
        </nav>
      </div>
    </div>
  </Transition>
</template>
