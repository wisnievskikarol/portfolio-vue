<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap, ScrollTrigger } from '@/composables/useGsap'
import GoWeddingImage from '@/assets/gowedding_image.png'
import WedShareLogo from '@/assets/wedshare_logo.png'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

const projects = computed(() => [
  {
    title: 'GoWedding.online',
    description: t('projects.items.0.description'),
    url: 'https://www.gowedding.online/',
    image: GoWeddingImage,
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    year: '2024',
    number: '01'
  },
  {
    title: 'WedShare',
    description: t('projects.items.1.description'),
    url: 'https://www.wedshare.app/',
    image: WedShareLogo,
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    year: '2024',
    number: '02'
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

  // Animate each project card
  const cards = document.querySelectorAll('.project-hero-card')
  cards.forEach((card) => {
    const img = card.querySelector('.project-image')
    const content = card.querySelector('.project-content')

    // Card entrance
    gsap.from(card, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })

    // Image parallax
    if (img) {
      gsap.to(img, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }

    // Content fade in
    if (content) {
      gsap.from(content.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: content,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })
    }
  })

  ScrollTrigger.refresh()
})
</script>

<template>
  <section id="projects" ref="sectionRef" class="py-24 sm:py-32 relative">
    <div class="section-divider" />

    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-16 sm:pt-24">
      <!-- Section Header -->
      <div class="mb-20 sm:mb-32">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-8 h-px bg-white/15" />
          <span class="text-white/25 text-[11px] uppercase tracking-[0.4em]">{{
            t('projects.label')
          }}</span>
        </div>
        <h2
          ref="headingRef"
          class="text-3xl sm:text-4xl lg:text-5xl font-normal text-gradient-subtle leading-snug max-w-3xl"
        >
          {{ t('projects.heading') }}
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <a
          v-for="(project, index) in projects"
          :key="project.title"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-hero-card group block"
        >
          <div class="relative">
            <!-- Image Container -->
            <div
              class="relative overflow-hidden rounded-3xl bg-[#0f0f0f] border border-white/[0.04] group-hover:border-white/10 transition-all duration-700"
            >
              <!-- Image with Parallax -->
              <div class="relative aspect-[16/10] overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="project-image w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
                />

                <!-- Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                />

                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-700"
                />

                <!-- Project Number - Top Left -->
                <div class="absolute top-8 left-8 lg:top-12 lg:left-12">
                  <span
                    class="text-7xl sm:text-8xl lg:text-9xl font-light text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-700 leading-none"
                  >
                    {{ project.number }}
                  </span>
                </div>

                <!-- View Project - Center on Hover -->
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div
                    class="flex items-center gap-3 text-white bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span class="text-sm uppercase tracking-[0.2em] font-light">View Project</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content - Outside Image -->
            <div class="project-content mt-6 lg:mt-8 flex flex-col gap-6">
              <!-- Left: Title & Description -->
              <div class="flex-1">
                <div class="flex items-center gap-4 mb-3">
                  <h3
                    class="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 group-hover:text-white transition-colors duration-300"
                  >
                    {{ project.title }}
                  </h3>
                  <svg
                    class="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
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
                </div>
                <p class="text-white/40 text-sm sm:text-base leading-relaxed font-light mb-4">
                  {{ project.description }}
                </p>

                <!-- Tags & Year -->
                <div class="flex flex-wrap items-center gap-3">
                  <span class="text-white/20 text-xs font-mono">{{ project.year }}</span>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="text-[11px] text-white/30 border border-white/[0.08] px-3 py-1.5 tracking-wide font-light hover:text-white/50 hover:border-white/15 transition-all duration-300 rounded-full"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
