<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-12 relative">
    <div class="section-divider" />
    <div class="max-w-6xl mx-auto px-6 lg:px-10 pt-10">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
        <span class="text-[13px] text-white/30 tracking-[0.15em] font-medium uppercase"
          >Karol Wiśniewski</span
        >
        <p class="text-white/10 text-[11px] tracking-wider font-light">
          &copy; {{ currentYear }} &middot; Zaprojektowane & zbudowane przeze mnie
        </p>
        <a
          href="#"
          class="group flex items-center gap-2.5 text-white/15 hover:text-white/50 transition-all duration-500 text-[11px] uppercase tracking-[0.2em]"
        >
          Do góry
          <div
            class="w-7 h-7 border border-white/[0.08] group-hover:border-white/20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-translate-y-0.5"
          >
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </footer>
</template>
