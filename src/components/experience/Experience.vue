<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap, ScrollTrigger } from '@/composables/useGsap'
import ExperienceItem from './ExperienceItem.vue'
import type { Job } from './types'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

const jobs = computed<Job[]>(() => [
  {
    location: t('experience.jobs.0.location'),
    companyUrl: 'https://www.t-mobile.pl/',
    companyName: 'T-Mobile Polska',
    duration: t('experience.jobs.0.duration'),
    position: t('experience.jobs.0.position'),
    description: t('experience.jobs.0.description'),
    techStack: t('experience.jobs.0.techStack'),
    current: true
  },
  {
    location: t('experience.jobs.1.location'),
    companyUrl: 'https://housebook-solutions.com/',
    companyName: 'Housebook Solutions',
    duration: t('experience.jobs.1.duration'),
    position: t('experience.jobs.1.position'),
    description: t('experience.jobs.1.description'),
    techStack: t('experience.jobs.1.techStack')
  },
  {
    location: t('experience.jobs.2.location'),
    companyUrl: 'https://mydappwallet.com/',
    companyName: 'myDappWallet',
    duration: t('experience.jobs.2.duration'),
    position: t('experience.jobs.2.position'),
    description: t('experience.jobs.2.description'),
    techStack: t('experience.jobs.2.techStack')
  },
  {
    location: t('experience.jobs.3.location'),
    companyUrl: 'https://lodzsolarteam.p.lodz.pl/',
    companyName: 'Lodz Solar Team',
    duration: t('experience.jobs.3.duration'),
    position: t('experience.jobs.3.position'),
    description: t('experience.jobs.3.description'),
    techStack: t('experience.jobs.3.techStack')
  },
  {
    location: t('experience.jobs.4.location'),
    companyUrl: 'https://lea24.pl/',
    companyName: 'LEA24',
    duration: t('experience.jobs.4.duration'),
    position: t('experience.jobs.4.position')
  },
  {
    location: t('experience.jobs.5.location'),
    companyName: 'EXTRANET',
    companyUrl: 'https://www.extranet.pl/',
    duration: t('experience.jobs.5.duration'),
    position: t('experience.jobs.5.position')
  }
])

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
</script>

<template>
  <section id="experience" class="py-24 sm:py-32 relative">
    <div class="section-divider" />

    <div ref="sectionRef" class="max-w-6xl mx-auto px-6 lg:px-10 pt-24 sm:pt-32">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-8 h-px bg-white/15" />
        <span class="text-white/25 text-[11px] uppercase tracking-[0.4em]">{{
          t('experience.label')
        }}</span>
      </div>

      <h2
        ref="headingRef"
        class="text-2xl sm:text-3xl lg:text-4xl font-normal text-gradient-subtle leading-snug mb-16"
      >
        {{ t('experience.heading') }}
      </h2>

      <div ref="listRef" class="relative">
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
