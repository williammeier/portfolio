<template>
  <section class="about">
    <div class="container mx-auto">
      <h2 class="title" v-motion-slide-visible-once-left>{{ $t('about.title') }}</h2>

      <article class="content-box md:mr-8">
        <p v-motion-slide-visible-once-left>
          {{ $t('about.description') }}
        </p>
      </article>

      <div class="content-box mt-20 ml-auto">
        <article class="content-box-item" v-for="(job, index) in jobs" :key="index" v-motion-slide-visible-once-right>
          <h3>{{ locale === 'en' ? job.title : job.title_pt }}</h3>
          <p>
            {{ locale === 'en' ? job.description : job.description_pt }}
          </p>
          <div class="flex flex-wrap mt-2">
            <span
              class="badge"
              v-for="(lang, index) in job.languages"
              :key="index"
              :class="[lang.class]"
              :title="lang.name"
            >
              <v-icon :icon="lang.icon" size="14" />
              {{ lang.name }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { jobs } = await import('~/db/jobs.json')

const props = defineProps({
  locale: { type: String },
})
</script>
