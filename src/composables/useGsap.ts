import { onMounted, onUnmounted, nextTick, watch, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export const MOTION_OK = '(prefers-reduced-motion: no-preference)'
export const DESKTOP = '(min-width: 768px)'

export function initializeAnimations() {
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1200)
}

/** Resolves when web fonts are ready, so SplitText measures final line breaks. Never waits over 1s. */
export function fontsReady() {
  return Promise.race([document.fonts.ready, new Promise((resolve) => setTimeout(resolve, 1000))])
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
    mm.add(MOTION_OK, () => {
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

/**
 * Moment: a heading's words light up from faint to full ink as it scrolls through the viewport.
 * Desktop only; phones get the plain reveal. Re-splits when `text` changes (the element must be
 * keyed on the text, since SplitText replaces Vue's text node).
 */
export function useWordLight(el: Ref<HTMLElement | null>, text: () => string) {
  let mm: gsap.MatchMedia | null = null

  const setup = async () => {
    mm?.revert()
    await nextTick()
    await fontsReady()
    if (!el.value) return
    const target = el.value
    mm = gsap.matchMedia()
    mm.add(`${MOTION_OK} and ${DESKTOP}`, () => {
      const split = SplitText.create(target, { type: 'words' })
      gsap.fromTo(
        split.words,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: target, start: 'top 85%', end: 'top 45%', scrub: 0.5 }
        }
      )
      return () => split.revert()
    })
  }

  onMounted(setup)
  watch(text, setup, { flush: 'post' })
  onUnmounted(() => mm?.revert())
}

export { gsap, ScrollTrigger, SplitText }
