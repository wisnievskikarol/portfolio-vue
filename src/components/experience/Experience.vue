<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { gsap, ScrollTrigger } from '@/composables/useGsap'
import ExperienceItem from './ExperienceItem.vue'
import type { Job } from './types'

const sectionRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 100))

  if (sectionRef.value) {
    gsap.to(sectionRef.value, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    })
  }

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

  if (listRef.value) {
    const cards = listRef.value.querySelectorAll('.experience-card')
    if (cards.length > 0) {
      gsap.set(cards, { y: 40, opacity: 0 })

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.value,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        }
      })
    }
  }

  ScrollTrigger.refresh()
})

const jobs: Job[] = [
  {
    location: 'Warszawa, Woj. Mazowieckie, Polska · Praca hybrydowa',
    companyUrl: 'https://www.t-mobile.pl/',
    companyName: 'T-Mobile Polska',
    duration: 'paź 2024 – obecnie · 1 rok 5 mies.',
    position: 'Mid Frontend Developer',
    description:
      'Building and maintaining scalable frontend solutions for one of the largest telecommunications companies in Poland.',
    techStack: 'Vue 3, TypeScript, Tailwind CSS, REST API, Git',
    current: true
  },
  {
    location: 'Austria • Graz / Remote',
    companyUrl: 'https://housebook-solutions.com/',
    companyName: 'Housebook Solutions',
    duration: 'May 2023 - September 2024',
    position: 'Vue Frontend Developer',
    description:
      'Development of Housebook Control - digital documentation for managing the creation of investment process.',
    techStack:
      'Vue 3 (Composition API), Pinia, Vitest, TypeScript, Storybook, Tailwind CSS, GitHub, GIT'
  },
  {
    location: 'Poland • Warsaw / Remote',
    companyUrl: 'https://mydappwallet.com/',
    companyName: 'myDappWallet',
    duration: 'July 2022 - February 2023',
    position: 'Frontend Developer (React)',
    description: 'Development of a cryptocurrency payment wallet',
    techStack: 'React, TypeScript, Web3'
  },
  {
    location: 'Lodz • Lodz Solar Team',
    companyUrl: 'https://lodzsolarteam.p.lodz.pl/',
    companyName: 'Lodz Solar Team',
    duration: 'February 2022 - June 2022',
    position: 'Frontend Developer (React)',
    description: 'Development of a telemetry application for solar racing car',
    techStack: 'React, TypeScript, GraphQL, SCSS, GitLab'
  },
  {
    location: 'Torun • LEA24',
    companyUrl: 'https://lea24.pl/',
    companyName: 'LEA24',
    duration: 'March 2021 - July 2022',
    position: 'JS Frontend Developer'
  },
  {
    location: 'Torun • EXTRANET',
    companyName: 'EXTRANET',
    companyUrl: 'https://www.extranet.pl/',
    duration: 'June 2018 - July 2018',
    position: 'Frontend Developer - school practices'
  }
]
</script>

<template>
  <section id="experience" class="py-24 sm:py-32 relative">
    <div class="section-divider" />

    <div ref="sectionRef" class="max-w-6xl mx-auto px-6 lg:px-10 pt-24 sm:pt-32">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-8 h-px bg-white/15" />
        <span class="text-white/25 text-[11px] uppercase tracking-[0.4em]">Doświadczenie</span>
      </div>

      <h2
        ref="headingRef"
        class="text-2xl sm:text-3xl lg:text-4xl font-normal text-gradient-subtle leading-snug mb-16"
      >
        Moja ścieżka zawodowa.
      </h2>

      <div ref="listRef" class="relative">
        <!-- Timeline connector line -->
        <div
          class="absolute left-0 sm:left-[11.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-white/[0.06] via-white/[0.04] to-transparent hidden sm:block"
        />

        <div class="flex flex-col">
          <ExperienceItem
            v-for="(job, index) in jobs"
            :key="index"
            :companyUrl="job.companyUrl"
            :location="job.location"
            :companyName="job.companyName"
            :duration="job.duration"
            :position="job.position"
            :description="job.description"
            :techStack="job.techStack"
            :current="job.current"
          />
        </div>
      </div>
    </div>
  </section>
</template>
