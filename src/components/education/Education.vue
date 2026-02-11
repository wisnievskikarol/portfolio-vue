<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { gsap, ScrollTrigger } from '@/composables/useGsap'
import EducationItem from './EducationItem.vue'

const sectionRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 100))

  if (sectionRef.value) {
    gsap.to(sectionRef.value, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out'
    })
  }

  if (headingRef.value) {
    gsap.from(headingRef.value, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  }

  if (listRef.value) {
    const cards = listRef.value.querySelectorAll('.education-card')
    if (cards.length > 0) {
      gsap.set(cards, { y: 40, opacity: 0 })

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.value,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true
        }
      })
    }
  }

  ScrollTrigger.refresh()
})

const educationList = [
  {
    institution: 'Politechnika Łódzka',
    degreeDuration: '2019 - 2023',
    degreeTitle: 'Inżynier Informatyki',
    specialization: 'Specjalizacja: Technologie Webowe'
  }
]
</script>

<template>
  <section id="education" class="py-24 sm:py-32 relative">
    <div class="section-divider" />

    <div ref="sectionRef" class="max-w-6xl mx-auto px-6 lg:px-10 pt-24 sm:pt-32">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-8 h-px bg-white/15" />
        <span class="text-white/25 text-[11px] uppercase tracking-[0.4em]">Edukacja</span>
      </div>

      <h2
        ref="headingRef"
        class="text-2xl sm:text-3xl lg:text-4xl font-normal text-gradient-subtle leading-snug mb-16"
      >
        Wykształcenie.
      </h2>

      <div ref="listRef" class="flex flex-col">
        <EducationItem
          v-for="(item, index) in educationList"
          :key="index"
          :institution="item.institution"
          :degreeDuration="item.degreeDuration"
          :degreeTitle="item.degreeTitle"
          :specialization="item.specialization"
        />
      </div>
    </div>
  </section>
</template>
