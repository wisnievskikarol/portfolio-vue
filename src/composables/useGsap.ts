import { onMounted, onUnmounted, nextTick, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initializeAnimations() {
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1200)
}

/**
 * Fades every `[data-reveal]` element inside `root` in as it scrolls into view.
 * Maślany motion: short (160ms) and ease-out; skipped entirely under reduced motion.
 */
export function useReveal(root: Ref<HTMLElement | null>) {
  let mm: gsap.MatchMedia | null = null

  onMounted(async () => {
    await nextTick()
    mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      root.value?.querySelectorAll('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 12,
          opacity: 0,
          duration: 0.16,
          ease: 'power1.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true }
        })
      })
    })
  })

  onUnmounted(() => mm?.revert())
}

export { gsap, ScrollTrigger }
