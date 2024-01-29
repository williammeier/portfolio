<template>
  <section id="about" class="about">
    <div class="container mx-auto">
      <h2 class="title" v-motion-slide-visible-once-left>{{ $t('about.title') }}</h2>

      <article class="content-box md:mr-8">
        <p v-motion-slide-visible-once-left>
          {{ $t('about.description') }}
        </p>
      </article>

      <div class="content-box mt-20 ml-auto">
        <article
          class="content-box-item"
          v-for="(job, index) in jobsWithStack"
          :key="index"
          v-motion-slide-visible-once-right
        >
          <h3>{{ locale === 'en' ? job.title : job.title_pt }}</h3>
          <h4>{{ job.company }} - {{ locale === 'en' ? job.post : job.post_pt }}</h4>
          <p v-html="locale === 'en' ? job.description : job.description_pt"></p>
          <div class="flex flex-wrap mt-2">
            <span
              class="badge"
              v-for="(lang, index) in job.languages"
              :key="index"
              :title="lang.name"
              :style="getBadgeStyles(lang.color)"
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
const colorMode = useColorMode()

const props = defineProps({
  locale: { type: String },
})

const { jobs } = await import('~/db/jobs.json')
const { stack } = await import('~/db/stack.json')

const getBadgeStyles = (colorValue) => {
  return { color: colorValue, borderColor: colorValue, backgroundColor: `${colorValue}26` }
}

function invertColor(color) {
  return `invert(${color})`
}

const jobsWithStack = computed(() => {
  if (jobs || Array.isArray(jobs) || stack || Array.isArray(stack)) {
    return jobs.map((job) => {
      if (job.languages && job.languages.length > 0) {
        const languagesWithStack = job.languages.map((lang) => stack.find((tech) => tech.ref === lang.ref))
        return {
          ...job,
          languages: languagesWithStack,
        }
      }
      return {
        ...job,
      }
    })
  }
  return
})
</script>
