<template>
  <section id="about" class="about">
    <div class="container mx-auto">
      <h2 class="title" v-motion-slide-visible-once-left>{{ $t('about.title') }}</h2>

      <article class="max-w-3xl mb-24">
        <p class="text-lg leading-relaxed" v-motion-slide-visible-once-left>
          {{ $t('about.description') }}
        </p>
      </article>

      <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
        <article
          class="p-8 transition-colors border-l-2 rounded-r-lg border-primary/20 hover:border-primary bg-white/5 dark:bg-white/5"
          v-for="(job, index) in jobsWithStack"
          :key="index"
          v-motion-slide-visible-once-bottom
        >
          <span class="block mb-4 text-xs font-black tracking-widest uppercase text-primary">
            {{ locale === 'en' ? job.title : job.title_pt }}
          </span>
          <h3 class="mb-1 text-2xl font-black tracking-tight uppercase">
            {{ job.company }}
          </h3>
          <h4 class="mb-6 text-sm font-bold tracking-widest uppercase opacity-60">
            {{ locale === 'en' ? job.post : job.post_pt }}
          </h4>
          <p class="mb-8 text-base opacity-80" v-html="locale === 'en' ? job.description : job.description_pt"></p>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 text-[10px] font-black uppercase tracking-wider border rounded"
              v-for="(lang, idx) in job.languages"
              :key="idx"
              :style="getBadgeStyles(lang.color)"
            >
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
