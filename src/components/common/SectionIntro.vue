<script setup lang="ts">
import { ref } from 'vue'
import { useWordLight } from '@/composables/useGsap'

const props = defineProps<{ label: string; heading: string }>()

const headingRef = ref<HTMLElement | null>(null)
useWordLight(headingRef, () => props.heading)
</script>

<template>
  <div class="flex flex-col gap-6" data-reveal>
    <p class="eyebrow">{{ label }}</p>
    <h2 ref="headingRef" :key="heading" class="max-w-[32ch] text-balance text-statement-sm">
      <template v-for="(line, i) in heading.split('\n')" :key="i"
        ><br v-if="i" />{{ line }}</template
      >
    </h2>
  </div>
</template>
