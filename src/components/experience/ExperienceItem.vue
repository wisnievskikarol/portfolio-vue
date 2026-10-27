<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Job } from './types'

const { t } = useI18n()

defineProps<Job>()
</script>

<template>
  <article class="grid gap-3 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-10" data-reveal>
    <div class="flex flex-col items-start gap-1 text-caption text-ink-muted">
      <span>{{ duration }}</span>
      <span>{{ location }}</span>
      <span v-if="current" class="ms-tag mt-2 h-7 bg-yolk text-on-yolk">{{
        t('experience.current')
      }}</span>
    </div>

    <div class="flex min-w-0 flex-col gap-2">
      <h3 class="text-card-title">
        <a
          :href="companyUrl"
          target="_blank"
          rel="noopener"
          class="underline-offset-4 hover:underline"
        >
          {{ companyName }}
        </a>
      </h3>
      <p class="text-body">{{ position }}</p>
      <p v-if="description" class="max-w-[62ch] text-body text-ink-muted">{{ description }}</p>
      <ul v-if="techStack" class="mt-2 flex flex-wrap gap-2">
        <li v-for="tech in techStack.split(', ')" :key="tech" class="ms-tag ms-tag--quiet">
          {{ tech }}
        </li>
      </ul>
    </div>
  </article>
</template>
