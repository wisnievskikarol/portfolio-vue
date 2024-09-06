<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import EducationItem from './EducationItem.vue'

const educationList = [
  {
    institution: 'Łódź University of Technology',
    degreeDuration: '2019 - 2023',
    degreeTitle: 'Bachelor of Computer Science',
    specialization: 'Specialization: Web Technologies'
  },
  {
    institution: 'ZSMEiE',
    degreeDuration: '2015 - 2019',
    degreeTitle: 'IT Technician',
    specialization: 'Certification of: E12, E13, E14'
  }
]
</script>

<template>
  <Section id="education" title="🎓 education">
    <div class="text-darkGray border-gray-900 p-4 flex gap-16 flex-col rounded-md">
      <EducationItem
        v-for="(item, index) in educationList"
        :key="index"
        :institution="item.institution"
        :degreeDuration="item.degreeDuration"
        :degreeTitle="item.degreeTitle"
        :specialization="item.specialization"
      />
    </div>
  </Section>
</template>
