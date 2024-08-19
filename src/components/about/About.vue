<script setup lang="ts">
import Section from '@/components/common/Section.vue'
</script>
<template>
  <Section id="#about" title="🧑‍💻️ about">
    <div class="flex flex-col sm:flex-row relative gap-10 py-4">
      <img src="../../assets/my_photo.webp" class="object-cover rounded-lg w-56" />
      <div class="flex gap-4 flex-col">
        <h2 class="text-white text-lg">A few words about me:</h2>
        <p class="text-darkGray text-justify font-light text-base">
          Hello! I'm Karol Wiśniewski from Toruń, Poland. My passion for computers began in
          childhood, where I first explored simple graphic modifications using Gimp. This interest
          in computer graphics grew throughout high school and led me to discover a love for
          programming during my university years—a passion that has stayed with me ever since.
        </p>
      </div>
    </div>
  </Section>
</template>
