<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap, ScrollTrigger } from '@/composables/useGsap'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)
const photoRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)
const paragraphsRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 300))

  // Section fade in
  if (sectionRef.value) {
    gsap.from(sectionRef.value, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
  }

  // Heading reveal
  if (headingRef.value) {
    gsap.from(headingRef.value, {
      y: 60,
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

  // Paragraphs stagger
  if (paragraphsRef.value) {
    const paragraphs = paragraphsRef.value.querySelectorAll('p')
    if (paragraphs.length > 0) {
      gsap.from(paragraphs, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paragraphsRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    }
  }

  // Photo parallax on scroll
  if (photoRef.value) {
    const img = photoRef.value.querySelector('img')
    if (img) {
      gsap.from(photoRef.value, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: photoRef.value,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      })

      gsap.to(img, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: photoRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }
  }

  ScrollTrigger.refresh()
})
</script>

<template>
  <section id="about" class="py-24 sm:py-32 relative">
    <div class="section-divider" />

    <div ref="sectionRef" class="max-w-6xl mx-auto px-6 lg:px-10 pt-24 sm:pt-32">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <!-- Left column -->
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-4">
            <div class="w-8 h-px bg-white/15" />
            <span class="text-white/25 text-[11px] uppercase tracking-[0.4em]">{{
              t('about.label')
            }}</span>
          </div>

          <h2
            ref="headingRef"
            class="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-snug"
          >
            {{ t('about.heading') }}
          </h2>

          <div ref="paragraphsRef" class="flex flex-col gap-5 mt-2">
            <p class="text-white/60 leading-[1.8] text-[15px] font-light">
              {{ t('about.p1') }}
            </p>
            <p class="text-white/60 leading-[1.8] text-[15px] font-light">
              {{ t('about.p2') }}
            </p>
            <p class="text-white/60 leading-[1.8] text-[15px] font-light">
              {{ t('about.p3') }}
            </p>
          </div>
        </div>

        <!-- Right column — photo -->
        <div class="flex flex-col">
          <div ref="photoRef" class="relative overflow-hidden rounded-3xl">
            <img
              src="../../assets/my_photo.webp"
              class="object-cover w-full aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700"
              alt="Karol Wiśniewski"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
