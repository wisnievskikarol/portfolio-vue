<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap, ScrollTrigger } from '@/composables/useGsap'
import GoWeddingLogo from '@/assets/gowedding_logo.svg'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

const projects = computed(() => [
  {
    title: 'GoWedding.online',
    description: t('projects.items.0.description'),
    url: 'https://www.gowedding.online/',
    logo: GoWeddingLogo,
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'WedShare',
    description: t('projects.items.1.description'),
    url: 'https://www.wedshare.app/',
    logo: null,
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS']
  }
])

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 150))

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

  if (sectionRef.value) {
    const cards = document.querySelectorAll('.project-card')
    if (cards.length > 0) {
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }
    ScrollTrigger.refresh()
  }
})
</script>

<template>
  <section id="projects" ref="sectionRef" class="py-24 sm:py-32 relative">
    <div class="section-divider" />

    <div class="max-w-6xl mx-auto px-6 lg:px-10 pt-24 sm:pt-32">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-8 h-px bg-white/15" />
        <span class="text-white/25 text-[11px] uppercase tracking-[0.4em]">{{
          t('projects.label')
        }}</span>
      </div>

      <h2
        ref="headingRef"
        class="text-2xl sm:text-3xl lg:text-4xl font-normal text-gradient-subtle leading-snug mb-16"
      >
        {{ t('projects.heading') }}
      </h2>

      <div class="grid sm:grid-cols-2 gap-5">
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.url"
          target="_blank"
          class="project-card group relative block"
        >
          <div
            class="relative overflow-hidden border border-white/[0.06] bg-white/[0.015] hover:border-white/15 transition-all duration-700 h-full rounded-2xl"
          >
            <!-- Project visual area -->
            <div
              class="relative overflow-hidden bg-[#111111] aspect-[4/3] flex items-center justify-center rounded-t-2xl"
            >
              <img
                v-if="project.logo"
                :src="project.logo"
                :alt="project.title"
                class="relative z-10 w-40 opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out invert"
              />
              <span
                v-else
                class="relative z-10 text-4xl font-extralight text-white/15 group-hover:text-white/50 group-hover:scale-105 transition-all duration-1000 tracking-tight"
              >
                {{ project.title }}
              </span>
            </div>

            <!-- Content -->
            <div class="p-6 lg:p-7">
              <h3
                class="text-base font-normal text-white/80 group-hover:text-white transition-colors duration-300 flex items-center gap-2.5 mb-3"
              >
                {{ project.title }}
                <svg
                  class="w-4 h-4 opacity-0 -translate-y-0.5 group-hover:opacity-50 group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-all duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </h3>
              <p class="text-white/25 text-[13px] leading-[1.7] font-light">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-1.5 mt-5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[10px] text-white/20 border border-white/[0.06] px-2.5 py-1 tracking-wider font-normal hover:text-white/40 hover:border-white/10 transition-all duration-300 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Bottom gradient line on hover -->
            <div
              class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
