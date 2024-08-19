<script setup lang="ts">
import About from '@/components/about/About.vue'
import Contact from '@/components/contact/Contact.vue'
import Education from '@/components/education/Education.vue'
import Experience from '@/components/experience/Experience.vue'
import Hero from '@/components/hero/Hero.vue'
import Projects from '@/components/projects/Projects.vue'
import Technologies from '@/components/technologies/Technologies.vue'
</script>

<template>
  <main class="flex gap-16 flex-col">
    <Hero />
    <About />
    <Education />
    <Experience />
    <Technologies />
    <Projects />
    <Contact />
  </main>
</template>
