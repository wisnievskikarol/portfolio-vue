<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from '@/composables/useGsap'

const { t } = useI18n()

const heroRef = ref<HTMLElement | null>(null)
const firstName = ref<HTMLElement | null>(null)
const lastName = ref<HTMLElement | null>(null)
const roleEl = ref<HTMLElement | null>(null)
const ruleLine = ref<HTMLElement | null>(null)
const descEl = ref<HTMLElement | null>(null)
const ctaEl = ref<HTMLElement | null>(null)
const yearEl = ref<HTMLElement | null>(null)
const scrollLine = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 100))

  const tl = gsap.timeline({ delay: 0.4 })

  // First name — outline, from below
  if (firstName.value) {
    tl.from(
      firstName.value,
      {
        y: 160,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      },
      0
    )
  }

  // Last name — solid, slight delay
  if (lastName.value) {
    tl.from(
      lastName.value,
      {
        y: 160,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out'
      },
      0.1
    )
  }

  // Rule
  if (ruleLine.value) {
    tl.from(
      ruleLine.value,
      {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.inOut'
      },
      0.7
    )
  }

  // Role
  if (roleEl.value) {
    tl.from(
      roleEl.value,
      {
        opacity: 0,
        y: 15,
        duration: 0.7,
        ease: 'power3.out'
      },
      1.0
    )
  }

  // Year
  if (yearEl.value) {
    tl.from(
      yearEl.value,
      {
        opacity: 0,
        y: 15,
        duration: 0.7,
        ease: 'power3.out'
      },
      1.05
    )
  }

  // Desc
  if (descEl.value) {
    tl.from(
      descEl.value,
      {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power3.out'
      },
      1.15
    )
  }

  // CTA
  if (ctaEl.value) {
    tl.from(
      ctaEl.value,
      {
        opacity: 0,
        y: 15,
        duration: 0.6,
        ease: 'power3.out'
      },
      1.3
    )
  }

  // Scroll line
  if (scrollLine.value) {
    tl.from(
      scrollLine.value,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      },
      1.5
    )

    gsap.to(scrollLine.value, {
      y: 8,
      duration: 1.8,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    })
  }
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 lg:px-10 pb-16 sm:pb-20"
  >
    <!-- Name block — anchored to bottom -->
    <div class="max-w-6xl mx-auto w-full">
      <!-- First name: outline -->
      <div class="overflow-hidden">
        <h1
          ref="firstName"
          class="text-outline font-serif italic text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] leading-[0.88] tracking-[-0.04em] cursor-default"
        >
          Karol
        </h1>
      </div>

      <!-- Last name: solid -->
      <div class="overflow-hidden -mt-1">
        <h1
          ref="lastName"
          class="font-serif italic text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] text-white/90 leading-[0.88] tracking-[-0.04em]"
        >
          Wiśniewski
        </h1>
      </div>

      <!-- Thin rule -->
      <div ref="ruleLine" class="w-full h-px bg-white/[0.06] mt-8 mb-6 origin-left" />

      <!-- Bottom row: role left, year right -->
      <div class="flex items-start justify-between gap-8">
        <div class="flex flex-col gap-4">
          <span
            ref="roleEl"
            class="text-white/20 text-[11px] uppercase tracking-[0.35em] font-mono"
            >{{ t('hero.role') }}</span
          >

          <p ref="descEl" class="max-w-sm text-white/20 text-[13px] leading-[1.8] font-light">
            {{ t('hero.description') }}
            <a
              href="https://www.t-mobile.pl/"
              target="_blank"
              class="text-white/40 hover:text-white transition-colors duration-500 border-b border-white/[0.06] hover:border-white/30 pb-px"
              >{{ t('hero.company') }}</a
            >.
          </p>

          <a
            ref="ctaEl"
            href="#projects"
            class="group inline-flex items-center gap-2 text-white/25 hover:text-white/80 transition-all duration-500 mt-1 w-fit"
          >
            <span class="font-serif italic text-xl">(</span>
            <span
              class="uppercase tracking-[0.2em] text-[10px] font-light border-b border-white/0 group-hover:border-white/20 pb-px transition-all duration-500"
              >{{ t('hero.cta') }}</span
            >
            <svg
              class="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
            <span class="font-serif italic text-xl">)</span>
          </a>
        </div>

        <span
          ref="yearEl"
          class="hidden sm:block text-white/10 text-[11px] uppercase tracking-[0.35em] font-mono pt-0.5"
          >{{ t('hero.year') }}</span
        >
      </div>
    </div>

    <!-- Scroll indicator — right edge -->
    <div
      ref="scrollLine"
      class="absolute bottom-8 right-6 lg:right-10 flex flex-col items-center gap-3"
    >
      <div class="w-px h-12 bg-gradient-to-b from-white/10 to-transparent" />
    </div>
  </section>
</template>
