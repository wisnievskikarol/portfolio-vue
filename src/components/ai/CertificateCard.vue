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
    class="grid items-center gap-8 md:grid-cols-[minmax(0,46%)_minmax(0,1fr)] md:gap-12"
    data-reveal
  >
    <button
      type="button"
      class="group relative overflow-hidden rounded-card bg-hairline"
      :aria-label="t('ai.certificate.open')"
      @click="open"
    >
      <img
        :src="thumbSrc"
        :alt="t('ai.certificate.alt')"
        width="800"
        height="566"
        loading="lazy"
        class="h-auto w-full"
      />
      <span class="ms-pill absolute bottom-4 right-4 h-9 min-w-0 px-4 text-caption">
        {{ t('ai.certificate.open') }}
      </span>
    </button>

    <div class="flex min-w-0 flex-col items-start gap-2">
      <p class="eyebrow">{{ t('ai.certificate.kind') }}</p>
      <h3 class="text-statement-sm">{{ t('ai.certificate.title') }}</h3>
      <time :datetime="ISSUE_DATE" class="text-body">{{ t('ai.certificate.date') }}</time>
      <p class="text-body text-ink-muted">{{ t('ai.certificate.facts') }}</p>
      <p class="mt-2 break-all text-caption text-ink-muted">
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
          class="block h-auto max-h-[88vh] w-auto max-w-full rounded-card"
        />
        <button
          type="button"
          class="ms-pill absolute right-4 top-4 h-9 min-w-0 px-4"
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
  background: rgba(30, 9, 7, 0.8);
}
</style>
