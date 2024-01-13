<template>
  <section class="skills">
    <div class="container mx-auto">
      <h2 class="title" v-motion-slide-visible-once-left>{{ $t('stack.title') }}</h2>

      <div class="content-box md:mr-8">
        <p v-motion-slide-visible-once-left>
          {{ stack.description }}
        </p>
      </div>

      <div class="flex flex-wrap gap-6 sm:gap-12 mt-10">
        <div
          class="card card-stack"
          v-for="lang in stack"
          :title="lang.name"
          :style="{ color: lang.color }"
          v-motion-slide-visible-once-right
        >
          <v-icon :icon="lang.icon" />
          <h3>{{ lang.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { stack } = await import('~/db/stack.json')
</script>
