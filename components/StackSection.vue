<template>
  <section id="stack" class="skills" v-if="stack && stack.length">
    <div class="container mx-auto">
      <h2 class="title" v-motion-slide-visible-once-left>{{ $t('stack.title') }}</h2>

      <div class="content-box md:mr-8" v-if="$t('stack.description')">
        <p v-motion-slide-visible-once-left>
          {{ $t('stack.description') }}
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
        <div
          class="card-stack"
          v-for="lang in stack"
          :key="lang.ref"
          :title="lang.name"
          v-motion-slide-visible-once-bottom
        >
          <v-icon :icon="lang.icon" :style="{ color: lang.color }" />
          <h3>{{ lang.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { stack } = await import('~/db/stack.json')
</script>
