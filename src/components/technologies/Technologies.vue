<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap, ScrollTrigger } from '@/composables/useGsap'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

const techGroups = {
  primary: [
    'Vue.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'HTML/CSS',
    'Pinia',
    'REST API',
    'GraphQL'
  ],
  tools: [
    'Git',
    'GitHub',
    'Storybook',
    'Vitest',
    'Jest',
    'Prettier',
    'ESLint',
    'Vite',
    'Webpack',
    'Figma',
    'SCSS',
    'BEM',
    'SQL'
  ]
}

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 150))

  // Heading reveal
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

  // Stagger reveal tech items
  if (sectionRef.value) {
    const pills = document.querySelectorAll('.tech-pill')
    if (pills.length > 0) {
      gsap.from(pills, {
        scale: 0.8,
        opacity: 0,
        stagger: 0.04,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }
  }

  ScrollTrigger.refresh()
})
</script>

<template>
  <section id="technologies" ref="sectionRef" class="py-24 sm:py-32 relative overflow-hidden">
    <div class="section-divider" />

    <div class="max-w-6xl mx-auto px-6 lg:px-10 relative z-10 pt-24 sm:pt-32">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-8 h-px bg-white/15" />
        <span class="text-white/25 text-[11px] uppercase tracking-[0.4em]">{{
          t('technologies.label')
        }}</span>
      </div>

      <h2
        ref="headingRef"
        class="text-2xl sm:text-3xl lg:text-4xl font-normal text-gradient-subtle leading-snug mb-16"
      >
        {{ t('technologies.heading') }}
      </h2>

      <div class="flex flex-col gap-14">
        <!-- Core Stack -->
        <div>
          <h3
            class="text-[11px] text-white/20 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <div class="w-1 h-1 rounded-full bg-white/20" />
            {{ t('technologies.primaryLabel') }}
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <div
              v-for="tech in techGroups.primary"
              :key="tech"
              class="tech-pill group relative cursor-default"
            >
              <div
                class="relative px-5 py-2.5 border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm rounded-full"
              >
                <span
                  class="text-xs text-white/50 group-hover:text-white/90 transition-colors duration-300 font-normal tracking-wide"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div>
          <h3
            class="text-[11px] text-white/20 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <div class="w-1 h-1 rounded-full bg-white/15" />
            {{ t('technologies.toolsLabel') }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="tech in techGroups.tools"
              :key="tech"
              class="tech-pill group relative cursor-default"
            >
              <div
                class="relative px-4 py-2 border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.02] transition-all duration-500 rounded-full"
              >
                <span
                  class="text-[11px] text-white/30 group-hover:text-white/60 transition-colors duration-300 font-normal tracking-wide"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
