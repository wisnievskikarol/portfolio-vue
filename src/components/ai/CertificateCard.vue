<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import thumbSrc from '@/assets/aidevs4_certificate_thumb.webp'
import fullSrc from '@/assets/aidevs4_certificate.webp'

const CERTIFICATE_NUMBER = '8dde9555-e0e8-4d4c-9543-b835913b6288'
const ISSUE_DATE = '2026-05-18'

const { t } = useI18n()

const dialogRef = ref<HTMLDialogElement | null>(null)

// Native <dialog> handles Esc, focus containment and inert background
const open = () => dialogRef.value?.showModal()
const close = () => dialogRef.value?.close()

const onBackdropClick = (event: MouseEvent) => {
  if (event.target === dialogRef.value) close()
}
</script>

<template>
  <div
    class="ai-reveal flex flex-col md:flex-row gap-8 md:gap-10 border border-white/[0.06] rounded-3xl p-5 sm:p-6 bg-white/[0.015]"
  >
    <button
      type="button"
      class="group relative md:w-[46%] flex-shrink-0 overflow-hidden rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
      :aria-label="t('ai.certificate.open')"
      @click="open"
    >
      <img
        :src="thumbSrc"
        :alt="t('ai.certificate.alt')"
        width="800"
        height="566"
        loading="lazy"
        class="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <span
        class="absolute bottom-3 right-3 text-[10px] uppercase tracking-[0.2em] text-white/80 bg-[#0a0a0a]/80 backdrop-blur-sm px-3 py-1.5 rounded-full"
      >
        {{ t('ai.certificate.open') }}
      </span>
    </button>

    <div class="flex flex-col justify-center gap-3">
      <span class="text-white/55 text-[11px] uppercase tracking-[0.3em]">
        {{ t('ai.certificate.kind') }}
      </span>
      <h3 class="text-white/90 text-2xl sm:text-3xl font-normal">
        {{ t('ai.certificate.title') }}
      </h3>
      <time :datetime="ISSUE_DATE" class="text-white/60 text-sm font-light">
        {{ t('ai.certificate.date') }}
      </time>
      <p class="text-white/60 text-sm font-light">{{ t('ai.certificate.facts') }}</p>
      <p class="text-white/50 text-[11px] font-mono break-all mt-2">
        {{ t('ai.certificate.numberLabel') }} {{ CERTIFICATE_NUMBER }}
      </p>
    </div>
  </div>

  <Teleport to="body">
    <dialog
      ref="dialogRef"
      class="certificate-dialog bg-transparent p-0 max-w-[min(92vw,1400px)] w-full"
      :aria-label="t('ai.certificate.title')"
      @click="onBackdropClick"
    >
      <div class="relative w-fit mx-auto">
        <img
          :src="fullSrc"
          :alt="t('ai.certificate.alt')"
          width="2000"
          height="1414"
          loading="lazy"
          class="block w-auto max-w-full h-auto max-h-[88vh] rounded-xl"
        />
        <button
          type="button"
          class="absolute top-3 right-3 text-[11px] uppercase tracking-[0.2em] text-white/90 bg-[#0a0a0a]/85 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
          autofocus
          @click="close"
        >
          {{ t('ai.certificate.close') }}
        </button>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.certificate-dialog::backdrop {
  background: rgba(10, 10, 10, 0.88);
  backdrop-filter: blur(6px);
}
</style>
