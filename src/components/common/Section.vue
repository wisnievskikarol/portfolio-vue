<script setup lang="ts">
import MotionWrapper from './MotionWrapper.vue'
defineProps<{ title: string }>()
</script>

<template>
  <MotionWrapper>
    <div v-bind="$attrs" class="flex gap-4 flex-col">
      <h2 class="uppercase text-lightGray font-normal text-lg tracking-widest">
        {{ title }}
      </h2>
      <div class="px-2 sm:px-4">
        <slot></slot>
      </div>
    </div>
  </MotionWrapper>
</template>
