<script setup lang="ts">
defineProps<{
  institution: string
  degreeDuration: string
  specialization?: string
  degreeTitle: string
}>()
</script>

<template>
  <article class="grid gap-3 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-10" data-reveal>
    <span class="text-caption text-ink-muted">{{ degreeDuration }}</span>
    <div class="flex min-w-0 flex-col gap-2">
      <h3 class="text-card-title">{{ institution }}</h3>
      <p class="text-body">{{ degreeTitle }}</p>
      <p v-if="specialization" class="text-body text-ink-muted">{{ specialization }}</p>
    </div>
  </article>
</template>
