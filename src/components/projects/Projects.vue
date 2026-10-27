<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap, useReveal, MOTION_OK, DESKTOP } from '@/composables/useGsap'
import SectionIntro from '@/components/common/SectionIntro.vue'
import GoWeddingImage from '@/assets/gowedding_image.png'
import WedShareLogo from '@/assets/wedshare_logo.png'

const { t } = useI18n()

const sectionRef = ref<HTMLElement | null>(null)

const projects = computed(() => [
  {
    title: 'GoWedding.online',
    description: t('projects.items.0.description'),
    url: 'https://www.gowedding.online/',
    image: GoWeddingImage,
    cover: 'photo',
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    year: '2024'
  },
  {
    title: 'WedShare',
    description: t('projects.items.1.description'),
    url: 'https://www.wedshare.app/',
    image: WedShareLogo,
    cover: 'logo',
    tags: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    year: '2024'
  }
])

useReveal(sectionRef)

// Moment: each card unfolds from a butter-pill silhouette into the full 4:5 card.
// Desktop scrubs it with the scroll (and folds back going up); phones play it once.
const PILL = 'inset(36% 8% 36% 8% round 999px)'
const CARD = 'inset(0% 0% 0% 0% round 24px)'
let mm: gsap.MatchMedia | null = null

onMounted(async () => {
  await nextTick()
  const media = sectionRef.value?.querySelectorAll<HTMLElement>('[data-unfold]') ?? []

  mm = gsap.matchMedia()
  mm.add(
    { desktop: `${MOTION_OK} and ${DESKTOP}`, phone: `${MOTION_OK} and (max-width: 767px)` },
    (ctx) => {
      const desktop = ctx.conditions?.desktop
      media.forEach((el) => {
        const img = el.querySelector('img')
        const scrollTrigger = desktop
          ? { trigger: el, start: 'top 90%', end: 'top 45%', scrub: 0.6 }
          : { trigger: el, start: 'top 85%', once: true }
        const tween = desktop ? { ease: 'none' } : { duration: 0.7, ease: 'power3.out' }

        gsap.fromTo(el, { clipPath: PILL }, { clipPath: CARD, ...tween, scrollTrigger })
        if (img) gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ...tween, scrollTrigger })
      })
    }
  )
})

onUnmounted(() => mm?.revert())
</script>

<template>
  <section id="projects" ref="sectionRef" class="page-x flex flex-col gap-12 py-16 sm:py-24">
    <SectionIntro :label="t('projects.label')" :heading="t('projects.heading')" />

    <div class="grid gap-x-4 gap-y-12 md:grid-cols-2">
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex min-w-0 flex-col gap-5 rounded-card"
      >
        <div
          data-unfold
          class="aspect-[4/5] overflow-hidden rounded-card"
          :class="project.cover === 'logo' ? 'bg-butter' : 'bg-hairline'"
        >
          <img
            :src="project.image"
            :alt="project.title"
            loading="lazy"
            :class="[
              'h-full w-full',
              project.cover === 'logo' ? 'object-contain p-[18%]' : 'object-cover'
            ]"
          />
        </div>
        <div class="flex flex-col gap-2" data-reveal>
          <h3 class="text-card-title underline-offset-4 group-hover:underline">
            {{ project.title }}
          </h3>
          <p class="max-w-[52ch] text-body text-ink-muted">{{ project.description }}</p>
          <p class="text-caption text-ink-muted">
            {{ [project.year, ...project.tags].join(' · ') }}
          </p>
        </div>
      </a>
    </div>
  </section>
</template>
