<script setup lang="ts">
import Section from '@/components/common/Section.vue'

const technologiesList = [
  'HTML/CSS',
  'Tailwind CSS',
  'React.js',
  'Prettier',
  'REST API',
  'Vitest',
  'Jest',
  'JavaScript',
  'TypeScript',
  'GraphQL',
  'Storybook',
  'SQL',
  'GitHub',
  'Git'
]
</script>

<template>
  <Section id="technologies" title="💻 Technologies">
    <ol class="flex gap-3 py-4 cursor-default justify-start flex-wrap text-darkGray">
      <li
        v-for="(technology, index) in technologiesList"
        :key="index"
        class="text-gray-700 transition delay-75 duration-300 ease-in-out hover:text-primary border-darkGray hover:border-primary border-2 px-4 py-2 text-xs rounded-full"
      >
        {{ technology }}
      </li>
    </ol>
  </Section>
</template>
