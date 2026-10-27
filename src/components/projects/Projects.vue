<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useGsap'
import SectionIntro from '@/components/common/SectionIntro.vue'
import GoWeddingImage from '@/assets/gowedding_image.png'
import WedShareLogo from '@/assets/wedshare_logo.png'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)

const projects = computed(() => [
  {
    title: 'GoWedding.online',
    description: t('projects.items.0.description'),
    url: 'https://www.gowedding.online/',
    image: GoWeddingImage,
    cover: 'photo',
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    year: '2024'
  },
  {
    title: 'WedShare',
    description: t('projects.items.1.description'),
    url: 'https://www.wedshare.app/',
    image: WedShareLogo,
    cover: 'logo',
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    year: '2024'
  }
])

useReveal(sectionRef)
</script>

<template>
  <section id="projects" ref="sectionRef" class="page-x flex flex-col gap-12 py-16 sm:py-24">
    <SectionIntro :label="t('projects.label')" :heading="t('projects.heading')" />

    <div class="grid gap-x-4 gap-y-12 md:grid-cols-2">
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex min-w-0 flex-col gap-5 rounded-card"
        data-reveal
      >
        <div class="aspect-[4/5] overflow-hidden rounded-card" :class="project.cover === 'logo' ? 'bg-butter' : 'bg-hairline'">
          <img
            :src="project.image"
            :alt="project.title"
            loading="lazy"
            :class="[
              'h-full w-full',
              project.cover === 'logo' ? 'object-contain p-[18%]' : 'object-cover'
            ]"
          />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-card-title underline-offset-4 group-hover:underline">
            {{ project.title }}
          </h3>
          <p class="max-w-[52ch] text-body text-ink-muted">{{ project.description }}</p>
          <p class="text-caption text-ink-muted">{{ [project.year, ...project.tags].join(' · ') }}</p>
        </div>
      </a>
    </div>
  </section>
</template>
