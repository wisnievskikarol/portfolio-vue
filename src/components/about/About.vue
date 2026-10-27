<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useGsap'
import SectionIntro from '@/components/common/SectionIntro.vue'
import photo from '@/assets/my_photo_new.png'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
useReveal(sectionRef)
</script>

<template>
  <section id="about" ref="sectionRef" class="page-x py-16 sm:py-24">
    <div class="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-24">
      <div class="flex min-w-0 flex-col gap-8">
        <SectionIntro :label="t('about.label')" :heading="t('about.heading')" />
        <div class="flex max-w-[62ch] flex-col gap-5 text-body" data-reveal>
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>
          <p>{{ t('about.p4') }}</p>
        </div>
      </div>

      <img
        :src="photo"
        alt="Karol Wiśniewski"
        width="688"
        height="653"
        loading="lazy"
        class="aspect-[4/5] w-full max-w-[400px] rounded-card bg-hairline object-cover"
        data-reveal
      />
    </div>
  </section>
</template>
