<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { gsap, SplitText, MOTION_OK, fontsReady } from '@/composables/useGsap'

const { t } = useI18n()

const heroRef = ref<HTMLElement | null>(null)
const statementRef = ref<HTMLElement | null>(null)

let mm: gsap.MatchMedia | null = null

// Moment: the opening sequence. Plays only when the page opens at the top, never after a deep link.
onMounted(() => {
  if (window.scrollY > 0 || location.hash) return

  const logo = document.querySelector('[data-intro="logo"]')
  const pills = document.querySelectorAll('[data-intro="pill"]')
  const eyebrow = heroRef.value?.querySelector('[data-intro="eyebrow"]')
  const cta = heroRef.value?.querySelector('[data-intro="cta"]')

  mm = gsap.matchMedia()
  mm.add(MOTION_OK, () => {
    // Hide before the first paint; the timeline starts once fonts settle the line breaks
    gsap.set([logo, pills, eyebrow, cta, statementRef.value], { autoAlpha: 0 })
    // The header buttons' CSS transform transition would smear the GSAP scale
    gsap.set(pills, { transition: 'none' })
    let split: SplitText | null = null

    fontsReady().then(() => {
      if (!statementRef.value) return
      split = SplitText.create(statementRef.value, { type: 'lines', mask: 'lines' })
      gsap.set(statementRef.value, { autoAlpha: 1 })

      gsap
        .timeline({
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            split?.revert()
            split = null
            gsap.set(pills, { clearProps: 'transition,transform' })
          }
        })
        .fromTo(
          logo,
          { autoAlpha: 0, y: -36 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: 'back.out(2.2)' }
        )
        .fromTo(
          pills,
          { autoAlpha: 0, scale: 0.6 },
          { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(2.5)' },
          0.15
        )
        .fromTo(eyebrow!, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0.3)
        .from(split.lines, { yPercent: 105, duration: 0.6, stagger: 0.06 }, 0.35)
        .fromTo(cta!, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 }, 0.85)
    })

    return () => split?.revert()
  })
})

onUnmounted(() => mm?.revert())
</script>

<template>
  <section ref="heroRef" class="page-x pb-24 pt-2">
    <!-- Lime panel: the page's one loud block -->
    <div
      class="flex flex-col items-start gap-6 rounded-card bg-yolk px-6 py-12 text-on-yolk sm:px-12 sm:py-16 lg:px-16 lg:py-20"
    >
      <p class="text-eyebrow" data-intro="eyebrow">{{ t('hero.role') }}</p>
      <h1
        ref="statementRef"
        :key="t('hero.statement')"
        class="max-w-[28ch] text-balance text-statement-sm md:text-statement"
      >
        {{ t('hero.statement') }}
      </h1>
      <a
        href="mailto:wisnievskikarol@gmail.com"
        class="ms-btn bg-on-yolk text-white focus-visible:outline-on-yolk"
        data-intro="cta"
        >{{ t('hero.cta') }}</a
      >
    </div>
  </section>
</template>
