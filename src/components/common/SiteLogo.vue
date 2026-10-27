<script setup lang="ts">
// "Graf" mark: the K drawn as a node graph (edges at 90° and ±30° from the junction).
// Fills follow the theme through currentColor.
defineProps<{ variant?: 'full' | 'mark' }>()
</script>

<template>
  <span class="flex h-full items-center gap-2.5 text-ink" aria-hidden="true">
    <svg viewBox="0 0 256 256" class="h-full w-auto shrink-0" fill="currentColor">
      <rect x="54" y="52" width="16" height="152" />
      <rect x="0" y="-8" width="152.42" height="16" transform="translate(62 128) rotate(-30)" />
      <rect x="0" y="-8" width="152.42" height="16" transform="translate(62 128) rotate(30)" />
      <rect x="39" y="29" width="46" height="46" rx="6" />
      <rect x="39" y="181" width="46" height="46" rx="6" />
      <rect x="171" y="29" width="46" height="46" rx="6" />
      <rect x="171" y="181" width="46" height="46" rx="6" />
      <rect x="43" y="109" width="38" height="38" rx="4.8" />
    </svg>
    <span v-if="variant !== 'mark'" class="flex flex-col text-[15px] leading-[17px]">
      <span>Karol</span>
      <span class="font-medium">Wiśniewski</span>
    </span>
  </span>
</template>
