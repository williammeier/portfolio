<template>
  <section class="about py-28">
    <div class="container mx-auto">
      <h2 class="text-primary text-7xl md:text-8xl font-extrabold">{{ $t('about.title') }}</h2>

      <article class="about-box mt-10 md:mr-8">
        <p>
          {{ $t('about.description') }}
        </p>
      </article>

      {{ locale }}

      <div class="about-box mt-20 ml-auto">
        <article class="about-box-item" v-for="(job, index) in jobs" :key="index">
          <h3>{{ job.title }}</h3>
          <p>
            {{ locale === 'en' ? job.description : job.description_pt }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { jobs } = await import('~/db/db.json')

import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

const changeLanguage = (newLocale) => {
  setLocale(newLocale)
}
</script>
