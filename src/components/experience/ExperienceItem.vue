<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Job } from './types'

const { t } = useI18n()

defineProps<Job>()
</script>

<template>
  <div
    class="experience-card group border-t border-white/[0.06] py-8 px-4 -mx-4 hover:bg-white/[0.015] transition-all duration-500 cursor-default rounded-sm"
  >
    <div class="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
      <!-- Left: date + location -->
      <div class="sm:w-44 flex-shrink-0 relative">
        <span class="text-white/30 text-xs font-mono block">{{ duration }}</span>
        <span class="text-white/15 text-[10px] mt-1.5 block leading-relaxed">{{ location }}</span>
        <div v-if="current" class="flex items-center gap-2 mt-3">
          <span class="relative flex h-1.5 w-1.5">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75"
            />
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          <span class="text-emerald-400/70 text-[10px] uppercase tracking-[0.2em] font-medium">{{
            t('experience.current')
          }}</span>
        </div>
      </div>

      <!-- Right: details -->
      <div class="flex-1 flex flex-col gap-2">
        <div class="flex items-center gap-3">
          <a
            :href="companyUrl"
            target="_blank"
            class="text-white/90 text-lg font-normal group-hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
          >
            {{ companyName }}
            <svg
              class="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-40 group-hover:-translate-y-1 group-hover:translate-x-0.5 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </div>

        <p class="text-white/40 text-sm font-light">{{ position }}</p>

        <p
          v-if="description"
          class="text-white/25 text-[13px] mt-1 leading-[1.7] font-light max-w-lg"
        >
          {{ description }}
        </p>

        <div v-if="techStack" class="flex flex-wrap gap-1.5 mt-3">
          <span
            v-for="tech in techStack.split(', ')"
            :key="tech"
            class="text-[10px] text-white/20 border border-white/[0.06] px-2.5 py-1 font-normal tracking-wider hover:text-white/40 hover:border-white/10 transition-all duration-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
