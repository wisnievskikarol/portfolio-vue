import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Expose for debugging
if (typeof window !== 'undefined') {
  ;(window as any).__gsap = gsap
  ;(window as any).__ScrollTrigger = ScrollTrigger
}

export function initializeAnimations() {
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1200)
}

export { gsap, ScrollTrigger }
