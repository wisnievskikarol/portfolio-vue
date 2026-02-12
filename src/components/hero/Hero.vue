<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap } from '@/composables/useGsap'

const { t } = useI18n()

const heroRef = ref<HTMLElement | null>(null)
const firstName = ref<HTMLElement | null>(null)
const lastName = ref<HTMLElement | null>(null)
const roleEl = ref<HTMLElement | null>(null)
const descEl = ref<HTMLElement | null>(null)
const ctaEl = ref<HTMLElement | null>(null)
const yearEl = ref<HTMLElement | null>(null)
const scrollLine = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 100))

  const tl = gsap.timeline({ delay: 0.3 })

  // Small name - fade in
  if (firstName.value && lastName.value) {
    tl.from(
      [firstName.value, lastName.value],
      {
        y: 10,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      },
      0
    )
  }

  // Giant role title - slide up
  if (roleEl.value) {
    tl.from(
      roleEl.value,
      {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      },
      0.2
    )
  }

  // Description
  if (descEl.value) {
    tl.from(
      descEl.value,
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      },
      0.8
    )
  }

  // CTA + Year
  if (ctaEl.value) {
    tl.from(
      ctaEl.value,
      {
        y: 15,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out'
      },
      1.0
    )
  }

  // Scroll indicator
  if (scrollLine.value) {
    tl.from(
      scrollLine.value,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      },
      1.2
    )

    gsap.to(scrollLine.value.querySelector('.w-px'), {
      scaleY: 0.6,
      duration: 1.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      transformOrigin: 'top'
    })
  }
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-10"
  >
    <!-- Ultra minimal content - centered -->
    <div class="max-w-7xl mx-auto w-full">
      <div class="flex flex-col items-center text-center">
        <!-- Name above - centered -->
        <div class="flex items-center gap-3 mb-12">
          <div class="overflow-hidden">
            <span
              ref="firstName"
              class="block text-white/30 text-xs uppercase tracking-[0.3em] font-mono"
              >Karol</span
            >
          </div>
          <div class="w-px h-3 bg-white/15" />
          <div class="overflow-hidden">
            <span
              ref="lastName"
              class="block text-white/30 text-xs uppercase tracking-[0.3em] font-mono"
              >Wiśniewski</span
            >
          </div>
        </div>

        <!-- Giant role - centered -->
        <div class="overflow-visible py-2">
          <h1
            ref="roleEl"
            class="font-display font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[1.05] tracking-[-0.04em]"
          >
            SOFTWARE<br />
            ENGINEER
          </h1>
        </div>

        <!-- Minimal details underneath - centered -->
        <div class="mt-8 flex flex-col items-center gap-3 max-w-md">
          <p ref="descEl" class="text-white/40 text-sm font-light leading-relaxed">
            {{ t('hero.description') }}
            <a
              href="https://www.t-mobile.pl/"
              target="_blank"
              class="text-white/60 hover:text-white transition-colors duration-300 underline decoration-white/20 hover:decoration-white/60 underline-offset-2"
              >{{ t('hero.company') }}</a
            >.
          </p>

          <div ref="ctaEl" class="flex items-center gap-6 mt-2">
            <a
              href="#projects"
              class="text-white/50 hover:text-white text-xs uppercase tracking-[0.25em] transition-colors duration-300 group flex items-center gap-2"
            >
              {{ t('hero.cta') }}
              <svg
                class="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <span ref="yearEl" class="text-white/20 text-xs font-mono">{{ t('hero.year') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Minimal scroll indicator -->
    <div
      ref="scrollLine"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span class="text-white/20 text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
      <div class="w-px h-8 bg-white/10" />
    </div>
  </section>
</template>
