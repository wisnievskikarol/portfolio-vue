<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from '@/composables/useGsap'

const { t, locale } = useI18n()

const navbar = ref<HTMLElement | null>(null)
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')

const navigation = computed(() => [
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.experience'), href: '#experience' },
  { name: t('nav.technologies'), href: '#technologies' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.education'), href: '#education' },
  { name: t('nav.contact'), href: '#contact' }
])

const switchLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value

  // Lock/unlock body scroll
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      gsap.fromTo(
        '.mobile-nav-link',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out', delay: 0.15 }
      )
    })
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Track active section
  const sections = navigation.value.map((n) => n.href.replace('#', ''))
  let current = ''
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 150) {
        current = id
      }
    }
  }
  activeSection.value = current
}

onMounted(async () => {
  await nextTick()

  if (navbar.value) {
    navbar.value.style.opacity = '1'
    navbar.value.style.transform = 'translateY(0)'
  }

  await new Promise((resolve) => setTimeout(resolve, 50))

  if (navbar.value) {
    gsap.from(navbar.value, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    })
  }

  const navLinks = document.querySelectorAll('.nav-link')
  if (navLinks.length > 0) {
    gsap.from(navLinks, {
      y: -15,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out',
      delay: 0.5
    })
  }

  window.addEventListener('scroll', onScroll)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  // Restore body overflow when component unmounts
  document.body.style.overflow = ''
})
</script>

<template>
  <nav
    ref="navbar"
    :class="[
      'fixed top-0 left-0 right-0 isolate transition-all duration-700',
      isMenuOpen ? 'z-[1001]' : 'z-[100]'
    ]"
    :style="{
      backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.92)' : 'rgba(10, 10, 10, 0.6)',
      backdropFilter: isScrolled ? 'blur(20px) saturate(1.2)' : 'blur(10px)',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.04)' : '1px solid transparent'
    }"
  >
    <div class="max-w-6xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-20">
        <!-- Left: nav links -->
        <div class="hidden md:flex items-center gap-7">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              'nav-link relative text-[11px] uppercase tracking-[0.15em] transition-all duration-500 py-1',
              activeSection === item.href.replace('#', '')
                ? 'text-white/90'
                : 'text-white/30 hover:text-white/70'
            ]"
          >
            {{ item.name }}
            <span
              :class="[
                'absolute -bottom-1 left-0 h-px bg-white/50 transition-all duration-500',
                activeSection === item.href.replace('#', '') ? 'w-full' : 'w-0'
              ]"
            />
          </a>
        </div>

        <!-- Right side - Language switcher & CTA -->
        <div class="hidden md:flex items-center gap-6 ml-auto">
          <!-- Language toggle -->
          <div class="flex items-center gap-2">
            <button
              @click="switchLanguage('pl')"
              :class="[
                'text-[11px] uppercase tracking-[0.15em] transition-all duration-300',
                locale === 'pl' ? 'text-white/80' : 'text-white/25 hover:text-white/50'
              ]"
            >
              PL
            </button>
            <span class="text-white/10">/</span>
            <button
              @click="switchLanguage('en')"
              :class="[
                'text-[11px] uppercase tracking-[0.15em] transition-all duration-300',
                locale === 'en' ? 'text-white/80' : 'text-white/25 hover:text-white/50'
              ]"
            >
              EN
            </button>
          </div>

          <!-- CTA -->
          <a
            href="#contact"
            class="group relative text-[11px] text-white/80 border border-white/15 px-6 py-2.5 uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-white/30 rounded-full"
          >
            <span class="relative z-10 group-hover:text-[#0a0a0a] transition-colors duration-500">{{
              t('nav.cta')
            }}</span>
            <div
              class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            />
          </a>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden relative w-10 h-10 flex items-center justify-center"
          @click="toggleMenu"
        >
          <div class="relative w-6 h-6 flex items-center justify-center">
            <span
              :class="[
                'absolute w-6 h-px bg-white/80 transition-all duration-300',
                isMenuOpen ? 'rotate-45' : '-translate-y-2'
              ]"
            />
            <span
              :class="[
                'absolute w-6 h-px bg-white/80 transition-all duration-300',
                isMenuOpen ? 'opacity-0 scale-0' : ''
              ]"
            />
            <span
              :class="[
                'absolute w-6 h-px bg-white/80 transition-all duration-300',
                isMenuOpen ? '-rotate-45' : 'translate-y-2'
              ]"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile menu - OUTSIDE nav, rendered at top level -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden fixed inset-0 top-20 bg-[#0a0a0a]/98 backdrop-blur-2xl z-[999]"
          style="isolation: isolate"
        >
          <div class="flex flex-col items-center justify-center h-full gap-8 -mt-20">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                'mobile-nav-link text-2xl font-extralight uppercase tracking-[0.2em] transition-colors duration-300',
                activeSection === item.href.replace('#', '')
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/70'
              ]"
              @click="closeMenu"
            >
              {{ item.name }}
            </a>

            <!-- Language toggle mobile -->
            <div class="flex items-center gap-3 mt-4">
              <button
                @click="switchLanguage('pl')"
                :class="[
                  'text-sm uppercase tracking-[0.2em] transition-all duration-300',
                  locale === 'pl' ? 'text-white/80' : 'text-white/30 hover:text-white/60'
                ]"
              >
                PL
              </button>
              <span class="text-white/15">/</span>
              <button
                @click="switchLanguage('en')"
                :class="[
                  'text-sm uppercase tracking-[0.2em] transition-all duration-300',
                  locale === 'en' ? 'text-white/80' : 'text-white/30 hover:text-white/60'
                ]"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>
