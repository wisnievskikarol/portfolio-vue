<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from '@/composables/useGsap'

const heroRef = ref<HTMLElement | null>(null)
const greeting = ref<HTMLElement | null>(null)
const nameEl = ref<HTMLElement | null>(null)
const roleEl = ref<HTMLElement | null>(null)
const descEl = ref<HTMLElement | null>(null)
const ctaContainer = ref<HTMLElement | null>(null)
const scrollIndicator = ref<HTMLElement | null>(null)
const bgGrid = ref<HTMLElement | null>(null)
const statusBadge = ref<HTMLElement | null>(null)
const glowOrb1 = ref<HTMLElement | null>(null)
const glowOrb2 = ref<HTMLElement | null>(null)
const lineLeft = ref<HTMLElement | null>(null)
const lineRight = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 100))

  const tl = gsap.timeline({ delay: 0.3 })

  // Background grid fade
  if (bgGrid.value) {
    tl.from(
      bgGrid.value,
      {
        opacity: 0,
        duration: 2,
        ease: 'power2.out'
      },
      0
    )
  }

  // Ambient glow orbs
  if (glowOrb1.value) {
    tl.from(glowOrb1.value, { opacity: 0, scale: 0.5, duration: 2, ease: 'power2.out' }, 0.2)
    gsap.to(glowOrb1.value, {
      x: 30,
      y: -20,
      duration: 8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }
  if (glowOrb2.value) {
    tl.from(glowOrb2.value, { opacity: 0, scale: 0.5, duration: 2, ease: 'power2.out' }, 0.4)
    gsap.to(glowOrb2.value, {
      x: -25,
      y: 15,
      duration: 10,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }

  // Side lines reveal
  if (lineLeft.value) {
    tl.from(lineLeft.value, { scaleY: 0, duration: 1.5, ease: 'power3.out' }, 0.5)
  }
  if (lineRight.value) {
    tl.from(lineRight.value, { scaleY: 0, duration: 1.5, ease: 'power3.out' }, 0.6)
  }

  // Greeting with line
  if (greeting.value) {
    tl.from(
      greeting.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      },
      0.3
    )
  }

  // Name reveal with clip-path
  if (nameEl.value) {
    tl.from(
      nameEl.value,
      {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out'
      },
      0.5
    )
  }

  // Role
  if (roleEl.value) {
    tl.from(
      roleEl.value,
      {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
      },
      0.7
    )
  }

  // Description
  if (descEl.value) {
    tl.from(
      descEl.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      },
      1.0
    )
  }

  // Status badge
  if (statusBadge.value) {
    tl.from(
      statusBadge.value,
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
      },
      1.1
    )
  }

  // CTA buttons
  if (ctaContainer.value) {
    tl.from(
      ctaContainer.value,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      },
      1.2
    )
  }

  // Scroll indicator
  if (scrollIndicator.value) {
    tl.from(
      scrollIndicator.value,
      {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'power2.out'
      },
      1.5
    )

    gsap.to(scrollIndicator.value, {
      y: 12,
      duration: 1.5,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    })
  }

  // Parallax on mouse move
  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20

    if (bgGrid.value) {
      gsap.to(bgGrid.value, { x, y, duration: 1, ease: 'power2.out' })
    }
    if (glowOrb1.value) {
      gsap.to(glowOrb1.value, { x: x * 1.5, y: y * 1.5, duration: 1.2, ease: 'power2.out' })
    }
    if (glowOrb2.value) {
      gsap.to(glowOrb2.value, { x: x * -1.2, y: y * -1.2, duration: 1.4, ease: 'power2.out' })
    }
  })
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
  >
    <!-- Ambient glow orbs -->
    <div
      ref="glowOrb1"
      class="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-[120px] pointer-events-none"
    />
    <div
      ref="glowOrb2"
      class="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none"
    />

    <!-- Subtle dot grid background -->
    <div ref="bgGrid" class="absolute inset-0 opacity-[0.03]">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(circle at 1px 1px, white 0.5px, transparent 0);
          background-size: 40px 40px;
        "
      />
    </div>

    <!-- Decorative side lines with gradient -->
    <div
      ref="lineLeft"
      class="absolute left-8 lg:left-16 top-[20%] bottom-[20%] w-px hidden lg:block origin-top"
      style="
        background: linear-gradient(
          to bottom,
          transparent,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.03),
          transparent
        );
      "
    />
    <div
      ref="lineRight"
      class="absolute right-8 lg:right-16 top-[20%] bottom-[20%] w-px hidden lg:block origin-bottom"
      style="
        background: linear-gradient(
          to bottom,
          transparent,
          rgba(255, 255, 255, 0.03),
          rgba(255, 255, 255, 0.08),
          transparent
        );
      "
    />

    <!-- Horizontal accent line -->
    <div
      class="absolute top-[45%] left-0 right-0 h-px opacity-[0.03]"
      style="background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)"
    />

    <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 w-full">
      <!-- Greeting with decorative line -->
      <div ref="greeting" class="mb-8 flex items-center gap-4">
        <div class="w-8 h-px bg-white/20" />
        <span class="text-white/40 text-sm sm:text-base tracking-[0.2em] uppercase font-light"
          >Cześć, jestem</span
        >
      </div>

      <!-- Name with gradient -->
      <div class="overflow-hidden">
        <h1
          ref="nameEl"
          class="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-semibold text-gradient leading-[1.02] tracking-[-0.02em]"
        >
          Karol Wiśniewski
        </h1>
      </div>

      <!-- Role line with subtle styling -->
      <div class="overflow-hidden mt-4">
        <h2
          ref="roleEl"
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-white/25 leading-[1.2] tracking-[-0.01em]"
        >
          Software Engineer
        </h2>
      </div>

      <!-- Short description -->
      <p ref="descEl" class="mt-10 max-w-lg text-white/35 text-[15px] leading-[1.8] font-light">
        Tworzę nowoczesne aplikacje webowe z dbałością o każdy piksel. Aktualnie w
        <a
          href="https://www.t-mobile.pl/"
          target="_blank"
          class="text-white/60 hover:text-white transition-colors duration-500 border-b border-white/10 hover:border-white/40 pb-px"
          >T-Mobile Polska</a
        >.
      </p>

      <!-- Status badge -->
      <div
        ref="statusBadge"
        class="mt-8 inline-flex items-center gap-3 border border-white/[0.06] px-5 py-2.5 rounded-full backdrop-blur-sm bg-white/[0.02]"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/50 opacity-75"
          />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
        <span class="text-white/40 text-xs tracking-[0.15em]">Dostępny do współpracy</span>
      </div>

      <!-- CTA -->
      <div ref="ctaContainer" class="mt-12 flex flex-wrap items-center gap-5">
        <a
          href="#projects"
          class="group relative inline-flex items-center gap-2 text-[13px] text-[#141414] bg-white px-8 py-4 uppercase tracking-[0.2em] font-medium hover:bg-white/90 transition-all duration-500 overflow-hidden"
        >
          <span class="relative z-10">Zobacz projekty</span>
          <svg
            class="relative z-10 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
        <a
          href="#contact"
          class="group inline-flex items-center gap-2 text-[13px] text-white/70 border border-white/15 px-8 py-4 uppercase tracking-[0.2em] hover:bg-white/[0.05] hover:border-white/25 transition-all duration-500"
        >
          <span>Kontakt</span>
          <div
            class="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-emerald-400 transition-colors duration-300"
          />
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      ref="scrollIndicator"
      class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
    >
      <span class="text-[10px] text-white/15 uppercase tracking-[0.4em] font-light">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-white/15 to-transparent" />
    </div>
  </section>
</template>
