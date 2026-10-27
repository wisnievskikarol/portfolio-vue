<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useGsap'
import SectionIntro from '@/components/common/SectionIntro.vue'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)

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

useReveal(sectionRef)
</script>

<template>
  <section id="technologies" ref="sectionRef" class="page-x flex flex-col gap-12 py-16 sm:py-24">
    <SectionIntro :label="t('technologies.label')" :heading="t('technologies.heading')" />

    <div class="flex flex-col gap-4" data-reveal>
      <h3 class="eyebrow">{{ t('technologies.primaryLabel') }}</h3>
      <ul class="flex max-w-[56rem] flex-wrap gap-2">
        <li v-for="tech in techGroups.primary" :key="tech" class="ms-tag h-10 px-5 text-label">
          {{ tech }}
        </li>
      </ul>
    </div>

    <div class="flex flex-col gap-4" data-reveal>
      <h3 class="eyebrow">{{ t('technologies.toolsLabel') }}</h3>
      <ul class="flex max-w-[56rem] flex-wrap gap-2">
        <li v-for="tech in techGroups.tools" :key="tech" class="ms-tag ms-tag--quiet">
          {{ tech }}
        </li>
      </ul>
    </div>
  </section>
</template>
