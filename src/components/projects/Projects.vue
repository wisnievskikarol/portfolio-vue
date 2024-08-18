<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import GoWeddingLogo from '@/assets/gowedding_logo.svg'
</script>

<template>
  <Section id="projects" title="🏗 projects"
    ><ol class="text-darkGray w-64">
      <li>
        <div class="px-8 bg-gray-200 py-16">
          <img :src="GoWeddingLogo" class="object-cover w-48" />
        </div>
        <a href="https://gowedding.online/">
          <h4
            class="text-lg underline mb-2 transition delay-100 duration-300 ease-in-out hover:text-primary text-gray"
          >
            GoWedding.online
          </h4>
        </a>
        <p>Platform dedicated to creating customized wedding websites.</p>
      </li>
    </ol>
  </Section>
</template>
