<script setup lang="ts">
import IconButton from '@/components/common/IconButton.vue'
import Section from '@/components/common/Section.vue'
import Education from '@/components/education/Education.vue'
</script>

<template>
  <main class="flex gap-16 flex-col">
    <div class="flex gap-6 py-10 sm:py-20 flex-col justify-start">
      <div class="flex flex-col sm:flex-row content-center">
        <div class="text-lightGray text-3xl font-normal">
          <h1 class="mb-2">Hey 👋</h1>
          <h1
            class="mb-4 font-normal bg-gradient-to-r from-primary to-white inline-block text-transparent bg-clip-text"
          >
            I'm Karol, Frontend-developer
          </h1>
          <h3 class="text-darkGray max-w-5xl leading-relaxed font-light mt-4 text-base">
            I am a software engineer with a passion for building innovative and user-friendly web
            applications.
          </h3>
        </div>
      </div>
      <div class="flex gap-2">
        <IconButton label="CV" />
        <IconButton label="Linkedin" />
        <IconButton label="GitHub" />
      </div>
    </div>
    <Section title="🧑‍💻️ about">
      <div class="flex flex-col sm:flex-row relative gap-10 py-4">
        <img src="../assets/my_photo.webp" class="object-cover rounded-lg w-56" />
        <div class="flex gap-4 flex-col">
          <h2 class="text-white text-lg">A few words about me:</h2>
          <p class="text-darkGray text-justify font-light text-base">
            Hello! My name is Karol Wiśniewski and I come from Toruń, Poland. Since childhood I have
            been passionate about everything related to computers. I started my adventure with
            simple graphic modifications in Gimp. Later I continued my adventure with computer
            graphics through high school until I fell in love with programming at university and
            that's how it stayed
          </p>
        </div>
      </div>
    </Section>
    <Education />
    <Section title="💼 experience">
      <ol class="text-darkGray border-gray-900 p-4 flex gap-16 flex-col rounded-md">
        <li class="flex gap-1 flex-col">
          <p class="font-light text-xs">Austria • Graz / Remote</p>
          <a href="https://housebook-solutions.com/" target="_blank">
            <p class="font-medium text-gray underline text-lg">Housebook Solutions</p>
          </a>
          <p class="font-light text-sm">2023 - 2024</p>
          <p class="text-sm mt-2 font-normal">Vue Frontend devloper</p>
          <p class="text-sm font-light">
            Development of Housebook Control - digital documentation for managing the creation of
            investment process.
          </p>
          <p class="text-xs font-light">
            Tech stack: Vue 3 (Composition API), Pinia, Vitest, TypeScript, Storebook, Tailwind CSS,
            GitHub, GIT
          </p>
        </li>

        <li class="flex gap-2 flex-col">
          <p class="font-light text-xs">Poland • Warsaw / Remote mydappwallet.com</p>
          <p class="font-medium text-gray text-lg">Frontend Developer (React)</p>
          <p class="font-light text-sm">July 2022 - February 2023</p>
          <p class="text-sm mt-4 font-normal">Development of a cryptocurrency payment wallet</p>
        </li>

        <li>
          <p class="font-light text-xs">Lodz • Lodz Solar Team</p>
          <p class="font-medium text-gray text-lg">Frontend Developer (React)</p>
          <p class="font-light text-sm">February 2022 - Currently</p>
          <p class="text-sm mt-4 font-normal">
            Development of a telemetry application for solar racing car
          </p>
          <p class="text-xs mt-2 font-light">
            Tech stack: React, TypeScript, GraphQL, SCSS, GitLab
          </p>
        </li>

        <li class="flex gap-1 flex-col">
          <p class="font-light text-xs">Torun • LEA24</p>
          <p class="font-medium text-gray text-lg">JS Frontend Developer</p>
          <p class="font-light text-sm">March 2021 - July 2022</p>
        </li>

        <li class="flex gap-1 flex-col">
          <p class="font-light text-xs">Torun • EXTRANET</p>
          <p class="font-medium text-gray text-lg">Frontend Developer - school practices</p>
          <p class="font-light text-sm">June 2018 - July 2018</p>
        </li>
      </ol>
    </Section>

    <Section title="💻 technologies"
      ><ol class="flex gap-3 py-4 justify-start flex-wrap text-darkGray">
        <li
          class="text-gray-700 hover:text-primary border-darkGray border-2 px-4 py-2 text-xs rounded-full"
        >
          HTML/CSS
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          Tailwind CSS
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          React.js
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          ESlint
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          Prettier
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">Vue 3</li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          Vitest
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">Jest</li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">Pinia</li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          GraphQL
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          REST API
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          JavaScript
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          TypeScript
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          Storebook
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">SQL</li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">
          GitHub
        </li>
        <li class="text-gray-700 border-darkGray border-2 px-4 py-2 text-xs rounded-full">GIT</li>
      </ol>
    </Section>

    <Section title="🏗 projects"
      ><ol class="text-darkGray w-64">
        <li>
          <div class="px-8 bg-gray-200 py-16">
            <img src="../assets/gowedding_logo.svg" class="object-cover w-48" />
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

    <Section title="📝 contact"
      ><ol class="text-darkGray">
        <a
          class="transition delay-100 duration-300 ease-in-out hover:text-primary text-lg sm:text-2xl underline"
          href="tel:+48-737-909-932"
        >
          <p>+48 737 909 932</p>
        </a>
        <a
          class="transition delay-100 duration-300 ease-in-out hover:text-primary text-lg sm:text-2xl underline"
          href="mailto:wisniewskikarol@gmail.com"
          >wisniewskikarol@gmail.com</a
        >
      </ol>
    </Section>
  </main>
</template>
