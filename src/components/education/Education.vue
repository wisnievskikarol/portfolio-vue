<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useGsap'
import SectionIntro from '@/components/common/SectionIntro.vue'
import EducationItem from './EducationItem.vue'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)

const educationList = computed(() => [
  {
    institution: t('education.items.0.institution'),
    degreeDuration: '2019 - 2023',
    degreeTitle: t('education.items.0.degree'),
    specialization: t('education.items.0.specialization')
  }
])

useReveal(sectionRef)
</script>

<template>
  <section id="education" ref="sectionRef" class="page-x flex flex-col gap-12 py-16 sm:py-24">
    <SectionIntro :label="t('education.label')" :heading="t('education.heading')" />

    <div class="flex flex-col gap-12">
      <EducationItem v-for="item in educationList" :key="item.institution" v-bind="item" />
    </div>
  </section>
</template>
