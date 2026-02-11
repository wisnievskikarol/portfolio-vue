<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from '@/composables/useGsap'

const navbar = ref<HTMLElement | null>(null)
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')

const navigation = [
  { name: 'O mnie', href: '#about' },
  { name: 'Doświadczenie', href: '#experience' },
  { name: 'Technologie', href: '#technologies' },
  { name: 'Projekty', href: '#projects' },
  { name: 'Edukacja', href: '#education' },
  { name: 'Kontakt', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    nextTick(() => {
      gsap.fromTo(
        '.mobile-nav-link',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out', delay: 0.15 }
      )
    })
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Track active section
  const sections = navigation.map((n) => n.href.replace('#', ''))
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
})
</script>

<template>
  <nav
    ref="navbar"
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-700"
    :style="{
      backgroundColor: isScrolled ? 'rgba(20, 20, 20, 0.92)' : 'rgba(20, 20, 20, 0.6)',
      backdropFilter: isScrolled ? 'blur(20px) saturate(1.2)' : 'blur(10px)',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.04)' : '1px solid transparent'
    }"
  >
    <div class="max-w-6xl mx-auto px-6 lg:px-10">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <RouterLink to="/" class="group relative" @click="closeMenu">
          <span
            class="text-[13px] font-medium tracking-[0.2em] text-white/80 uppercase group-hover:text-white transition-colors duration-300"
            >Karol Wiśniewski</span
          >
        </RouterLink>

        <!-- Center nav links -->
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

        <!-- Right side - CTA -->
        <div class="hidden md:flex items-center">
          <a
            href="#contact"
            class="group relative text-[11px] text-white/80 border border-white/15 px-6 py-2.5 uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-white/30"
          >
            <span class="relative z-10 group-hover:text-[#141414] transition-colors duration-500"
              >Kontakt</span
            >
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
          <div class="flex flex-col gap-1.5 w-6">
            <span
              :class="[
                'block h-px bg-white/80 transition-all duration-300 origin-center',
                isMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              ]"
            />
            <span
              :class="[
                'block h-px bg-white/80 transition-all duration-300',
                isMenuOpen ? 'opacity-0 scale-0' : ''
              ]"
            />
            <span
              :class="[
                'block h-px bg-white/80 transition-all duration-300 origin-center',
                isMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              ]"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
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
        class="md:hidden fixed inset-0 top-20 bg-[#141414]/98 backdrop-blur-2xl z-40"
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
        </div>
      </div>
    </Transition>
  </nav>
</template>
