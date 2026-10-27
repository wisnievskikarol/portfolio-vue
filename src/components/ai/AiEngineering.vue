<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useGsap'
import SectionIntro from '@/components/common/SectionIntro.vue'
import CertificateCard from './CertificateCard.vue'

const AREA_COUNT = 4
const POINTS_PER_AREA = 3

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)

const areas = computed(() =>
  Array.from({ length: AREA_COUNT }, (_, i) => ({
    title: t(`ai.areas.${i}.title`),
    points: Array.from({ length: POINTS_PER_AREA }, (_, j) => t(`ai.areas.${i}.points.${j}`))
  }))
)

useReveal(sectionRef)
</script>

<template>
  <section id="ai" ref="sectionRef" class="page-x flex flex-col gap-12 py-16 sm:py-24">
    <div class="flex flex-col gap-6">
      <SectionIntro :label="t('ai.label')" :heading="t('ai.heading')" />
      <p class="max-w-[62ch] text-body" data-reveal>{{ t('ai.intro') }}</p>
    </div>

    <CertificateCard />

    <div class="grid gap-x-16 gap-y-10 sm:grid-cols-2">
      <div v-for="area in areas" :key="area.title" class="flex min-w-0 flex-col gap-3" data-reveal>
        <h3 class="text-card-title">{{ area.title }}</h3>
        <ul class="flex flex-col gap-2">
          <li v-for="point in area.points" :key="point" class="flex gap-3 text-body text-ink-muted">
            <span class="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" aria-hidden="true" />
            {{ point }}
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col items-start gap-6 sm:flex-row sm:items-center" data-reveal>
      <p class="text-statement-sm">{{ t('ai.outro') }}</p>
      <a href="#contact" class="ms-btn ms-btn--soft shrink-0">{{ t('ai.cta') }}</a>
    </div>
  </section>
</template>
