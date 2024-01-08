<template>
  <section class="work py-28">
    <div class="container mx-auto">
      <h2 class="title">work.</h2>

      <div class="content-box md:mr-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui
          orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-20">
        <div class="card" v-for="(project, index) in projects" :key="index">
          <div class="card-img">
            <img class="w-full" :src="project.image_path" :alt="locale === 'en' ? project.name : project.name_pt" />
          </div>
          <div class="card-body">
            <h2 class="card-title">{{ locale === 'en' ? project.name : project.name_pt }}</h2>

            <p class="text-lg">
              {{ locale === 'en' ? project.description : project.description_pt }}
            </p>
          </div>
          <div class="card-stack">
            <span class="text-base mr-1">Tech stack:</span>
            {{ project.stack }}
          </div>

          <div class="card-footer">
            <a
              :href="project.preview_url"
              target="_blank"
              class="inline-block rounded text-sm font-semibold hover:text-primary"
            >
              <font-awesome-icon icon="fa-solid fa-link" />
              Live Preview
            </a>
            <a
              :href="project.code_url"
              target="_blank"
              class="inline-block rounded text-sm font-semibold hover:text-primary"
            >
              <font-awesome-icon icon="fa-brands fa-github" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { projects } = await import('~/db/projects.json')

import { useI18n } from 'vue-i18n'
const { locale, setLocale } = useI18n()
const changeLanguage = (newLocale) => {
  setLocale(newLocale)
}
</script>
