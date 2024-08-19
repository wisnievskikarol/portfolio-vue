<script setup lang="ts" />

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="50"
    :duration="1000"
    :easing="['easeOutCubic']"
  >
    <slot></slot>
  </div>
</template>
