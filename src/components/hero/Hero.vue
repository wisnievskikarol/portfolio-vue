<script setup lang="ts">
import KarolWisniewskiCV from '@/assets/KarolWisniewski_CV.pdf'
import IconButton from '@/components/common/IconButton.vue'
</script>

<template>
  <div class="flex gap-6 py-10 sm:py-20 flex-col justify-start">
    <div class="flex flex-col sm:flex-row content-center">
      <div class="text-lightGray text-3xl font-normal">
        <h1 class="mb-2">Hey 👋</h1>
        <h1
          class="mb-4 font-normal bg-gradient-to-r from-primary to-white inline-block text-transparent bg-clip-text"
        >
          I'm Karol, Front-end developer
        </h1>
        <h2 class="text-darkGray max-w-5xl leading-relaxed font-light mt-4 text-base">
          As a front-end developer, I am driven by a passion for creating innovative, user-centric
          web experiences that blend functionality with elegance.
        </h2>
      </div>
    </div>
    <div class="flex gap-2">
      <IconButton :to="KarolWisniewskiCV" label="CV" />
      <IconButton
        label="Linkedin"
        to="https://www.linkedin.com/in/karol-wi%C5%9Bniewski-1a9747200/"
      />
    </div>
  </div>
</template>
