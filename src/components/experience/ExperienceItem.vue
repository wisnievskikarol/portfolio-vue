<script setup lang="ts">
import type { Job } from './types'

defineProps<Job>()
</script>

<template>
  <li class="flex gap-1 flex-col">
    <p class="font-light text-xs">{{ location }}</p>
    <a :href="companyUrl" target="_blank">
      <p
        class="font-medium text-gray underline text-lg transition delay-75 duration-300 ease-in-out hover:text-primary"
      >
        {{ companyName }}
      </p>
    </a>
    <p class="font-light text-sm">{{ duration }}</p>
    <p class="text-sm mt-2 font-normal">{{ position }}</p>
    <p class="text-sm font-light">
      {{ description }}
    </p>
    <p v-if="techStack" class="text-xs font-light">Tech stack: {{ techStack }}</p>
  </li>
</template>
