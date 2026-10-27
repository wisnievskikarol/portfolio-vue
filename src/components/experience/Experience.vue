<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useGsap'
import SectionIntro from '@/components/common/SectionIntro.vue'
import ExperienceItem from './ExperienceItem.vue'
import type { Job } from './types'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)

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

useReveal(sectionRef)
</script>

<template>
  <section id="experience" ref="sectionRef" class="page-x flex flex-col gap-12 py-16 sm:py-24">
    <SectionIntro :label="t('experience.label')" :heading="t('experience.heading')" />

    <div class="flex flex-col gap-12">
      <ExperienceItem v-for="job in jobs" :key="job.companyName" v-bind="job" />
    </div>
  </section>
</template>
