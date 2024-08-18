<script setup lang="ts">
defineProps<{
  institution: string
  degreeDuration: string
  specialization?: string
  degreeTitle: string
}>()
</script>

<template>
  <ul class="text-darkGray border-gray-900 max-w-80 rounded-md">
    <li class="flex gap-1 flex-col">
      <p class="font-medium text-gray text-lg">{{ institution }}</p>
      <p class="font-light text-sm">{{ degreeDuration }}</p>
      <p class="text-sm mt-2 font-light">{{ degreeTitle }}</p>
      <p class="text-xs font-light">{{ specialization }}</p>
    </li>
  </ul>
</template>
