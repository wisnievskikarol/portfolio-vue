<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import ExperienceItem from './ExperienceItem.vue'
import type { Job } from './types'

const jobs: Job[] = [
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
    companyName: 'Frontend Developer (React)',
    duration: 'July 2022 - February 2023',
    position: 'Frontend Developer',
    description: 'Development of a cryptocurrency payment wallet',
    techStack: ''
  },
  {
    location: 'Lodz • Lodz Solar Team',
    companyUrl: 'https://lodzsolarteam.p.lodz.pl/',
    companyName: 'Frontend Developer (React)',
    duration: 'February 2022 - June 2022',
    position: 'Frontend Developer',
    description: 'Development of a telemetry application for solar racing car',
    techStack: 'React, TypeScript, GraphQL, SCSS, GitLab'
  },
  {
    location: 'Torun • LEA24',
    companyUrl: 'https://lea24.pl/',
    companyName: 'JS Frontend Developer',
    duration: 'March 2021 - July 2022',
    position: 'JS Frontend Developer'
  },
  {
    location: 'Torun • EXTRANET',
    companyName: 'Frontend Developer - school practices',
    companyUrl: 'https://www.extranet.pl/',
    duration: 'June 2018 - July 2018',
    position: 'Frontend Developer - school practices'
  }
]
</script>

<template>
  <Section id="experience" title="💼 experience">
    <ul class="text-darkGray border-gray-900 p-4 flex gap-16 flex-col rounded-md">
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
      />
    </ul>
  </Section>
</template>
