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
          Hello! My name is Karol Wiśniewski and I come from Toruń, Poland. Since childhood I have
          been passionate about everything related to computers. I started my adventure with simple
          graphic modifications in Gimp. Later I continued my adventure with computer graphics
          through high school until I fell in love with programming at university and that's how it
          stayed
        </p>
      </div>
    </div>
  </Section>
</template>
