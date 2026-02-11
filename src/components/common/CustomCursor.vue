<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from '@/composables/useGsap'

const cursorOuter = ref<HTMLElement | null>(null)
const cursorInner = ref<HTMLElement | null>(null)
const isHovering = ref(false)

const onMouseMove = (e: MouseEvent) => {
  if (!cursorOuter.value || !cursorInner.value) return
  gsap.to(cursorOuter.value, {
    x: e.clientX - 20,
    y: e.clientY - 20,
    duration: 0.5,
    ease: 'power2.out'
  })
  gsap.to(cursorInner.value, {
    x: e.clientX - 4,
    y: e.clientY - 4,
    duration: 0.1
  })
}

const addHoverListeners = () => {
  document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      isHovering.value = true
      if (cursorOuter.value) {
        gsap.to(cursorOuter.value, { scale: 2.5, opacity: 0.15, duration: 0.3 })
      }
    })
    el.addEventListener('mouseleave', () => {
      isHovering.value = false
      if (cursorOuter.value) {
        gsap.to(cursorOuter.value, { scale: 1, opacity: 0.4, duration: 0.3 })
      }
    })
  })
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  setTimeout(addHoverListeners, 1000)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <div
    ref="cursorOuter"
    class="custom-cursor-outer fixed top-0 left-0 w-10 h-10 rounded-full border border-white/30 pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
  />
  <div
    ref="cursorInner"
    class="custom-cursor-inner fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] hidden lg:block"
  />
</template>
