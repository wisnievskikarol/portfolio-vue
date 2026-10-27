<script setup lang="ts">
defineProps<{ label: string; heading: string }>()
</script>

<template>
  <div class="flex flex-col gap-6" data-reveal>
    <p class="eyebrow">{{ label }}</p>
    <h2 class="max-w-[32ch] whitespace-pre-line text-balance text-statement-sm">{{ heading }}</h2>
  </div>
</template>
