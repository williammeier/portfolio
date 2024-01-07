<template>
  <section class="about py-28">
    <div class="container mx-auto">
      <h2 class="title">{{ $t('about.title') }}</h2>

      <article class="content-box mt-10 md:mr-8">
        <p>
          {{ $t('about.description') }}
        </p>
      </article>

      <div class="content-box mt-20 ml-auto">
        <article class="content-box-item" v-for="(job, index) in jobs" :key="index">
          <h3>{{ job.title }}</h3>
          <p>
            {{ locale === 'en' ? job.description : job.description_pt }}
          </p>
          <div class="flex flex-wrap mt-2">
            <div
              class="badge"
              v-for="(lang, index) in job.languages"
              :key="index"
              :class="[lang.class]"
              :title="lang.name"
            >
              <font-awesome-icon :icon="lang.icon" />
              {{ lang.name }}
            </div>
          </div>
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
