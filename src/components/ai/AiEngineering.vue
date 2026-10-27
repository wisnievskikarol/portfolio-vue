<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap, ScrollTrigger } from '@/composables/useGsap'
import CertificateCard from './CertificateCard.vue'

const AREA_COUNT = 4
const POINTS_PER_AREA = 3

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

const areas = computed(() =>
  Array.from({ length: AREA_COUNT }, (_, i) => ({
    title: t(`ai.areas.${i}.title`),
    points: Array.from({ length: POINTS_PER_AREA }, (_, j) => t(`ai.areas.${i}.points.${j}`))
  }))
)

let mm: gsap.MatchMedia | null = null
let isUnmounted = false

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 100))
  if (isUnmounted) return

  mm = gsap.matchMedia()
  // Skip reveal animations entirely for users who prefer reduced motion
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    if (headingRef.value) {
      gsap.from(headingRef.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    }

    // Each block reveals on its own as it scrolls in; the section is too tall for one trigger
    sectionRef.value?.querySelectorAll('.ai-reveal').forEach((block) => {
      gsap.from(block, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        }
      })
    })
  })

  ScrollTrigger.refresh()
})

onUnmounted(() => {
  isUnmounted = true
  mm?.revert()
})
</script>

<template>
  <section id="ai" ref="sectionRef" class="py-24 sm:py-32 relative">
    <div class="section-divider" />

    <div class="max-w-6xl mx-auto px-6 lg:px-10 pt-24 sm:pt-32">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-8 h-px bg-white/15" />
        <span class="text-white/25 text-[11px] uppercase tracking-[0.4em]">{{
          t('ai.label')
        }}</span>
      </div>

      <h2
        ref="headingRef"
        class="text-2xl sm:text-3xl lg:text-4xl font-normal text-gradient-subtle leading-snug mb-6"
      >
        {{ t('ai.heading') }}
      </h2>

      <p class="ai-reveal text-white/50 leading-[1.8] text-[15px] font-light max-w-2xl mb-14">
        {{ t('ai.intro') }}
      </p>

      <CertificateCard />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mt-14">
        <div
          v-for="area in areas"
          :key="area.title"
          class="ai-reveal border-t border-white/[0.06] py-6"
        >
          <h3 class="text-white/90 text-lg font-normal mb-3">{{ area.title }}</h3>
          <ul class="flex flex-col gap-2">
            <li
              v-for="point in area.points"
              :key="point"
              class="flex gap-3 text-white/60 text-sm font-light leading-relaxed"
            >
              <span class="mt-[0.6em] w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="ai-reveal flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mt-14 border-t border-white/[0.06] pt-10"
      >
        <p class="text-white/70 text-lg font-light">{{ t('ai.outro') }}</p>
        <a
          href="#contact"
          class="group relative self-start sm:self-auto text-[11px] text-white/80 border border-white/15 px-6 py-2.5 uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 hover:border-white/30 rounded-full"
        >
          <span class="relative z-10 group-hover:text-[#0a0a0a] transition-colors duration-500">{{
            t('ai.cta')
          }}</span>
          <div
            class="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          />
        </a>
      </div>
    </div>
  </section>
</template>
