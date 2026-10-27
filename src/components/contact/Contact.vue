<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '@/composables/useGsap'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
useReveal(sectionRef)
</script>

<template>
  <section id="contact" ref="sectionRef" class="page-x flex flex-col items-start gap-6 py-16 sm:py-24">
    <p class="eyebrow" data-reveal>{{ t('contact.label') }}</p>
    <h2 class="max-w-[22ch] whitespace-pre-line text-statement-sm md:text-statement" data-reveal>
      {{ t('contact.heading') }}
    </h2>
    <p class="max-w-[52ch] text-body text-ink-muted" data-reveal>{{ t('contact.subtitle') }}</p>

    <div class="flex flex-wrap items-center gap-3" data-reveal>
      <a href="mailto:wisnievskikarol@gmail.com" class="ms-btn">{{ t('contact.cta') }}</a>
      <a href="tel:+48737909932" class="ms-btn ms-btn--soft">+48 737 909 932</a>
      <a
        href="https://www.linkedin.com/in/karol-wi%C5%9Bniewski-1a9747200/"
        target="_blank"
        rel="noopener"
        class="ms-btn ms-btn--soft"
        >LinkedIn</a
      >
      <a href="https://github.com/" target="_blank" rel="noopener" class="ms-btn ms-btn--soft"
        >GitHub</a
      >
    </div>

    <p class="select-all text-body text-ink-muted" data-reveal>wisnievskikarol@gmail.com</p>
  </section>
</template>
