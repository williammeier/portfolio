<template>
  <section id="work" class="work">
    <div class="container mx-auto">
      <h2 class="title" v-motion-slide-visible-once-left>
        {{ $t('work.title') }}
      </h2>

      <div class="content-box md:mr-8">
        <p v-motion-slide-visible-once-left>
          {{ $t('work.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        <div
          class="card card-project"
          v-for="(project, index) in projects"
          :key="index"
          :title="project.name"
          v-motion-slide-visible-once-bottom
        >
          <div class="card-img">
            <img
              class="w-full"
              :src="`/portfolio/${project.image_path}`"
              :alt="locale === 'en' ? project.name : project.name_pt"
            />
          </div>
          <div class="card-body">
            <h2 class="card-title">
              {{ locale === 'en' ? project.name : project.name_pt }}
            </h2>

            <p class="text-lg leading-6 md:leading-7">
              {{ locale === 'en' ? project.description : project.description_pt }}
            </p>
          </div>
          <div class="card-project-stack">
            <span class="mr-1 text-base">Tech stack:</span>
            {{ project.stack }}
          </div>

          <div class="card-footer">
            <a
              :href="project.preview_url"
              target="_blank"
              v-if="project.preview_url"
              class="inline-block text-sm font-semibold rounded hover:text-primary"
            >
              <v-icon icon="mdi-link-variant" size="18" />
              Live Preview
            </a>
            <a
              :href="project.code_url"
              target="_blank"
              v-if="project.code_url"
              class="inline-block text-sm font-semibold rounded hover:text-primary"
            >
              <v-icon icon="mdi-github" size="18" />
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

const props = defineProps({
  locale: { type: String },
})
</script>
