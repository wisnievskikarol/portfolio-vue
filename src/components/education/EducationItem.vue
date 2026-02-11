<script setup lang="ts">
defineProps<{
  institution: string
  degreeDuration: string
  specialization?: string
  degreeTitle: string
}>()
</script>

<template>
  <div
    class="education-card group border-t border-white/[0.06] py-6 px-4 -mx-4 hover:bg-white/[0.015] transition-all duration-500 rounded-sm"
  >
    <div class="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
      <div class="sm:w-44 flex-shrink-0">
        <span class="text-white/30 text-xs font-mono">{{ degreeDuration }}</span>
      </div>
      <div class="flex-1 flex flex-col gap-1.5">
        <h3
          class="text-white/90 text-lg font-normal group-hover:text-white transition-colors duration-300"
        >
          {{ institution }}
        </h3>
        <p class="text-white/40 text-sm font-light">{{ degreeTitle }}</p>
        <p v-if="specialization" class="text-white/20 text-[11px] tracking-[0.15em] mt-1">
          {{ specialization }}
        </p>
      </div>
    </div>
  </div>
</template>
