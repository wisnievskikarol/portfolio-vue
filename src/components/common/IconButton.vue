<script setup lang="ts">
import type { IconButtonProps } from './types'
import { RouterLink } from 'vue-router'
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid'

const props = withDefaults(defineProps<IconButtonProps>(), {
  size: 's'
})

const { size } = props

const sizeClass = size === 'm' ? 'text-lg' : 'text-sm'
</script>

<template>
  <div class="text-lightGray transition delay-100 duration-300 ease-in-out hover:text-primary">
    <RouterLink v-if="to" :to="to">
      <button>{{ label }}</button>
    </RouterLink>
    <button
      :class="sizeClass"
      class="bg-veryDarkGray flex gap-2 justify-center content-center w-min py-1 px-4 rounded-full"
      v-else
    >
      {{ label }}
      <ArrowUpRightIcon class="w-3 h-4" />
    </button>
  </div>
</template>
