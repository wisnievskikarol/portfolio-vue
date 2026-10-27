<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="page-x flex flex-col items-start gap-6 pb-24 pt-4">
    <p class="eyebrow">{{ t('hero.role') }}</p>
    <h1 class="max-w-[28ch] text-balance text-statement-sm md:text-statement">
      {{ t('hero.statement') }}
    </h1>
    <a href="mailto:wisnievskikarol@gmail.com" class="ms-btn">{{ t('hero.cta') }}</a>
  </section>
</template>
